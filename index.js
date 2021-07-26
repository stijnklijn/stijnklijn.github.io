const express = require('express');
const cors = require('cors');
const {
    login,
    register,
    getPassword,
    authenticate,
    getTransactions,
    addTransaction, 
    changeTransaction, 
    deleteTransaction, 
    getHeaders, 
    addHeader, 
    deleteHeader} = require('./queries')

const app = express();
const PORT = process.env.PORT || 4001;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/login', login);
app.post('/register', register);
app.get('/getpassword/:email', getPassword);

app.get('/headers/:userId', authenticate, getHeaders);
app.post('/headers', authenticate, addHeader);
app.delete('/headers/:id', authenticate, deleteHeader);

app.get('/transactions/:userId', authenticate, getTransactions);
app.post('/transactions', authenticate, addTransaction);
app.put('/transactions/:id', authenticate, changeTransaction);
app.delete('/transactions/:id', authenticate, deleteTransaction);

app.listen(PORT, () => console.log(`Listening on port ${PORT}...`));