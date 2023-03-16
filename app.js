const express = require('express');
const mongoose = require('mongoose');
const pageRoute = require('./routes/pageRoutes')
const courseRoute = require('./routes/courseRoute')
const categoryRoute = require('./routes/categoryRoute')


const app = express();

// Connect DB 
mongoose.connect('mongodb://127.0.0.1/smartedu-db')
.then(() =>{ 
  console.log('DB Connected Succesful')
})
//Templete Engine
app.set('view engine', 'ejs');

//Middleware
app.use(express.static('public'));

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use('/', pageRoute)
app.use('/courses', courseRoute)
app.use('/categories', categoryRoute)

// edit 

app.get('/dashboard', (req, res) => {
  res.status(200).render('dashboard', {
    page_name: 'dashboard',
  });
});
app.get('/contact', (req, res) => {
  res.status(200).render('contact', {
    page_name: 'contact',
  });
});

const port = 3003;

app.listen(port, () => {
  console.log(`App started on port ${port}`);
});
