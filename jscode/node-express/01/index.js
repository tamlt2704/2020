const express = require('express');
const expressHandlerbars = require('express-handlebars');

const app = express();

const port = process.env.PORT || 5000;

app.engine('handlebars', expressHandlerbars({
    defaultLayout: 'main',
}));
app.set('view engine', 'handlebars');

app.use(express.static(__dirname + '/public'))

const fortunes = [
    "Saepe excepturi voluptas possimus autem officia.",
    "Nesciunt alias voluptates.",
    "Tempora aut aperiam magnam rerum odit delectus id.",
    "Libero vel sed expedita molestiae.",
    "Possimus nulla recusandae omnis maiores qui error."
];

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

app.get('/', (req, res) => res.render('home'))
app.get('/about', (req, res) => {
    const randomFortune = fortunes[Math.floor(Math.random()*fortunes.length)];
    res.render('about', {fortune: randomFortune})
})

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



