const express = require('express');

const app = express();

//Templete Engine
app.set('view engine', "ejs");

//Middleware
app.use(express.static("public"))

app.get('/', (req, res) => {
  res.status(200).render('index', {
    page_name: "index"
  })
});
app.get('/about', (req, res) => {
  res.status(200).render('about', {
    page_name: "about"
  })
});



const port = 3003;

app.listen(port, () => {
  console.log(`App started on port ${port}`);
});
