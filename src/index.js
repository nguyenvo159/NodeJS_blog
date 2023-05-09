const path = require('path');
const express = require('express');
const morgan = require('morgan');
const hbs = require('express-handlebars');
const app = express()
const port = 3000

// HTTP logger
app.use(morgan('combined'));

// Middleware
app.use(express.urlencoded({
    extended: true // Xu ly loi body-parser extended.
}));
app.use(express.json());

// Template engine
app.engine('hbs', hbs.engine({              // hbs() -> hbs.engine(...)
    extname: '.hbs'                        // Doi duoi file tu '.handlebars' -> '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'))

// Static PNG
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.render('home');
});

app.get('/news', (req, res) => {
    res.render('news');
});

app.get('/search', (req, res) => {
    // req.query.q     // Lay query (tu khoa)
    res.render('search');
});

// Tuyen duong lan nghe phuong thuc POST tai /search
app.post('/search', (req, res) => {
    // console.log(req.body.q) // Lay query tai post
    res.send('');
});

app.listen(port, () =>
    console.log(`Example app listening on port ${port}`))


// packet.json -> script: them start:
// nodemon index.js -> npm start
// express-handlebar
    //Template engine.
    //Partials: {{> header}}   {{> footer}} them vao main

// Static file. SCSS
    // app.use
    // node-sass
        // watch --watch
        // --output

// git add . -> git commit -m "" -> git push orgin main

// Routing - Tuyen duong /...

// Parameters