const express = require('express');
const mongoose = require('mongoose');
const { findOne } = require('./models/Things');
const userRoutes = require('./routes/user');

const stuffRoute = require('./routes/stuff')

const app = express();
mongoose.connect('mongodb+srv://flamedevilfruit:Jslh0120@cluster0.dajs0d4.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch(() => console.log('Connexion à MongoDB échouée !'));

app.use(express.json())

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });


app.use('/api/stuff', stuffRoute);
app.use('/api/auth', userRoutes);


module.exports = app;