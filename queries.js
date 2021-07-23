require('dotenv').config();
const Pool = require('pg').Pool;
const nodemailer = require('nodemailer');

const database = new Pool ({
    user: process.env.USER,
    host: process.env.HOST,
    database: process.env.DATABASE,
    password: process.env.PASSWORD,
    port: process.env.PORT
});

function login(req, res) {
    database.query(`
    SELECT id FROM users
    WHERE email = '${req.headers.email}' AND password = '${req.headers.password}'`, (err, data) => {
        if (err) {
            res.status(500);
        }
        if (data.rows[0] && data.rows[0].id) {
            res.status(200).json(data.rows[0].id);
        }
        res.status(401).send();
    })
}

function register(req, res) {
    database.query(`
    SELECT id FROM users
    WHERE email = '${req.body.newEmail}'`, (err, data) => {
        if (err) {
            res.status(500);
        }
        if (data.rows[0] && data.rows[0].id) {
            res.status(401).send();
        }

        database.query(`
        INSERT INTO users
        VALUES (DEFAULT, '${req.body.newEmail}', '${req.body.newPassword}')
        RETURNING id`, (err, data) => {
            if (err) {
                res.status(500);
              }
            const newId = data.rows[0].id;

            database.query(`
            INSERT INTO headers
            VALUES (DEFAULT, 'Unallocated income', 'true', ${newId}), 
            (DEFAULT, 'Unallocated expenses', 'false', ${newId})`, (err, data) => {
                if (err) {
                    res.status(500);
                }
                res.status(201).json(newId);
            })
         })
    })
}

function getPassword(req, res) {
    database.query(`
    SELECT id, password FROM users
    WHERE email = '${req.params.email}'`, (err, data) => {
        if (err) {
            res.status(500);
        }
        if (data.rows[0] && data.rows[0].id) {
            let transport = nodemailer.createTransport({
                host: process.env.MAIL_HOST,
                port: process.env.MAIL_PORT,
                auth: {
                    user: process.env.MAIL_USER,
                    pass: process.env.MAIL_PASS
                }
            });
            const message = {
                from: process.env.MAIL_USER,
                to: req.params.email,
                subject: 'Your Xpensoft password / Uw Xpensoft wachtwoord',
                text: `Your Xpensoft password is / Uw Xpensoft wachtwoord is: ${data.rows[0].password}`
            }
            transport.sendMail(message, (err) => {
                if (err) {
                     res.status(404).send();
                }
            })
             res.status(200).json(data.rows[0].id);
        }
        res.status(404).send();
    })
}

function authenticate(req, res, next) {
    database.query(`
    SELECT id FROM users
    WHERE email = '${req.headers.email}' AND password = '${req.headers.password}'`, (err, data) => {
        if (err) {
            res.status(500);
        }
        if (data.rows[0] && data.rows[0].id && data.rows[0].id == req.headers.userid) {
            next();
        }
        res.status(401);
    })
}

function getHeaders(req, res) {
    database.query(`
    SELECT * FROM headers
    WHERE user_id = ${req.params.userId}`, (err, data) => {
        if (err) {
            res.status(500).send();
        }
        res.status(200).json(data.rows);
    })
}

function addHeader(req, res) {
    database.query(`
    INSERT INTO headers
    VALUES (DEFAULT, '${req.body.name}', ${req.body.isIncome}, ${req.body.userId})
    RETURNING id`, (err, data) => {
        if (err) {
            res.status(500).send();
        }

        database.query(`
        SELECT * FROM headers
        WHERE id = ${data.rows[0].id}`, (err, data) => {
            if (err) {
                res.status(500).send();
            }
            res.status(201).send(data.rows);
        })
     })
}

function deleteHeader(req, res) {
    database.query(`
    DELETE FROM headers
    WHERE id = ${req.params.id}`, (err, data) => {
        if (err) {
            res.status(500).send();
        }
        res.status(204).send();
    })
}

function getTransactions(req, res) {
    database.query(`
    SELECT transactions.id, transactions.date, transactions.description, headers.id AS header_id, headers.name AS header, transactions.amount, headers.is_income
    FROM transactions, headers
    WHERE transactions.user_id = ${req.params.userId} AND transactions.header_id = headers.id`, (err, data) => {
        if (err) {
            res.status(500).send();
        }
        res.status(200).json(data.rows);
    })
}

function addTransaction(req, res) {
    database.query(`
    INSERT INTO transactions
    VALUES (DEFAULT, '${req.body.date}', '${req.body.description}', ${req.body.headerId}, ${req.body.amount}, ${req.body.userId})
    RETURNING id`, (err, data) => {
        if (err) {
            res.status(500).send();
        }

        database.query(`
        SELECT transactions.id, transactions.date, transactions.description, headers.id AS header_id, headers.name AS header, transactions.amount, headers.is_income
        FROM transactions, headers
        WHERE transactions.id = ${data.rows[0].id} AND transactions.header_id = headers.id`, (err, data) => {
            if (err) {
                res.status(500).send();
             }
            res.status(201).json(data.rows);
        })
    })
}

function changeTransaction(req, res) {
    database.query(`
    UPDATE transactions
    SET description = '${req.body.description}', header_id = ${req.body.headerId}
    WHERE id = ${req.params.id}`, (err, data) => {
        if (err) {
            res.status(500).send();
        }

        database.query(`
        SELECT transactions.id, transactions.date, transactions.description, headers.id AS header_id, headers.name AS header, transactions.amount, headers.is_income
        FROM transactions, headers
        WHERE transactions.id = ${req.params.id} AND transactions.header_id = headers.id`, (err, data) => {
            if (err) {
                res.status(500).send();
            }
            res.status(201).json(data.rows);
        })
    })
}

function deleteTransaction(req, res) {
    database.query(`
    DELETE FROM transactions
    WHERE id = ${req.params.id}`, (err, data) => {
        if (err) {
            res.status(500).send();
       }
        res.status(204).send();
    })
}

module.exports = {
    login,
    register,
    getPassword,
    authenticate,
    getHeaders,
    addHeader,
    deleteHeader,
    getTransactions,
    addTransaction,
    changeTransaction,
    deleteTransaction,
}