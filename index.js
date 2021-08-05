const express = require('express');
const cors = require('cors');
const {
    authenticate,
    login,
    register,
    getPassword,
    getTransactions,
    addTransaction, 
    changeTransaction, 
    deleteTransaction, 
    getHeaders, 
    addHeader, 
    changeHeader,
    deleteHeader} = require('./queries')

const app = express();
const PORT = process.env.PORT || 4001;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(authenticate);

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(__dirname));
}

app.get('/login', login);
app.post('/register', register);
app.get('/getpassword/:email', getPassword);

app.get('/headers/:userId', getHeaders);
app.post('/headers', addHeader);
app.put('/headers/:id',  changeHeader);
app.delete('/headers/:id', deleteHeader);

app.get('/transactions/:userId', getTransactions);
app.post('/transactions', addTransaction);
app.put('/transactions/:id',  changeTransaction);
app.delete('/transactions/:id', deleteTransaction);

app.listen(PORT, () => console.log(`Listening on port ${PORT}...`));