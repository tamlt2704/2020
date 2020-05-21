const express = require('express');
const expressHandlebars = require('express-handlebars');

const app = express();

app.engine('handlebars', expressHandlebars({
    defaultLayout: 'main',
}));

app.use(express.static(__dirname + '/public'));

app.set('view engine', 'handlebars');

const port = process.env.PORT || 5000;

/*
app.get('/', (req, res) => {
    res.type('text/plan');
    res.send('Hello From ExpressJs');
});
*/
app.get('/', (req, res) => res.render('home'));
app.get('/about', (req, res) => res.render('about'));

app.use((req, res) => {
    /*
    res.type('text/plan');
    res.status(404);
    res.send('404 - Not Found');
    */
    res.status(404);
    res.render('404'); 
});

app.use((err, req, res, next) => {
    /*
    console.log(err.message);
    rest.type('text/plan');
    res.status(500);
    res.send('500 - Sever Error');
    */
    console.log(err.message);
    res.status(500);
    res.render('500');
});

app.listen(port, () => console.log(  
    `Express started on http://localhost${port}` +
    `press Ctrl-C to terminate.`
));
