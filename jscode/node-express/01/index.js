const express = require('express');
const expressHandlerbars = require('express-handlebars');
const fortune = require('./lib/fortume.js');

const app = express();

const port = process.env.PORT || 5000;

app.engine('handlebars', expressHandlerbars({
    defaultLayout: 'main',
}));
app.set('view engine', 'handlebars');

app.use(express.static(__dirname + '/public'))

app.use((req, res, next) => {
    res.locals.showTests = app.get('env') !== 'production' &&
        req.query.test === '1';
    next();
});
/*
app.get('/', (req, res) => {
    res.('text/plain')
    res.send('Index page');
})

app.get('/about', (req, res) => {
    res.type('text/plain')
    res.send('About page');
})

app.use((req, res) => {
    res.type('text/plain')
    res.status(404)
    res.send('404 - Not Found');
})


app.use((err, req, res, next) => {
    console.log(err.message);
    res.type('text/plain')
    res.status(500)
    res.send('500 - Server Error');
})
*/

app.get('/', (req, res) => res.render('home'));

app.get('/about', (req, res) => {
    res.render('about', {
        fortune: fortune.getFotune(),
        pageTestScript: '/qa/tests-about.js'
    });
})

app.get('/tours/hood-river', (req, res) => {
    res.render('tours/hood-river');
});

app.get('/tours/request-group-rate', (req, res) => {
    res.render('tours/request-group-rate');
});

app.use((req, res) => {
    res.status(404)
    res.render('404')
})
app.use((req, res) => {
    res.status(500)
    res.render(500)
})

app.listen(port, () => console.log(
    `Express started on http://localhost${port};` + 
    `press Ctrl-C to terminate.`))



