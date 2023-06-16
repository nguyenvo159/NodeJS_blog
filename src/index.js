const express = require('express');
const morgan = require('morgan');
const path = require('path');
const hbs = require('express-handlebars');
const app = express();
const port = 3000;

const route = require('./routes');

// HTTP logger
app.use(morgan('combined'));

// Middleware
app.use(
    express.urlencoded({
        extended: true, // Xu ly loi body-parser extended.
    }),
);
app.use(express.json());

// Template engine
app.engine(
    'hbs',
        hbs.engine({
        // hbs() -> hbs.engine(...)
        extname: '.hbs', // Doi duoi file tu '.handlebars' -> '.hbs'
        }),
);
    app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

// Static PNG
app.use(express.static(path.join(__dirname, 'public')));

// Route
route(app);

// Home, search, contact

app.listen(port, () => console.log(`Example app listening on port ${port}`));

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

// git add . -> git commit -m "" -> git push origin main

// Routing - Tuyen duong /...

// Parameters

//Route
// Nếu page có nhiều thành phần như news thì tách riêng NewsController và news.js
// Nếu page ít hoặc duy nhất như home, search thì gộp chung SiteController và site.js

// Prettier
// npm i prettier lint-staged husky --save-dev
// script - > "beautiful": "prettier --single-quote --trailing-comma all --write src/**/*.{js,json,scss}"
// npm run beautiful
// "lint-staged": {
//     "src/**/*.{js,json,scss}": "prettier --single-quote --trailing-comma all --tab-width 4 --write"
//   },
// "beatiful": "lint-staged"
