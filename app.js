const path = require('path')
const express = require('express');

const app = express();

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

// Serving Statis Files
app.use(express.static(path.join(__dirname, 'public')));


app.get('/', (req, res) => {
    res.status(200).render('land', {
        title: 'We are under maintanance ...',
      });
});


module.exports = app;
