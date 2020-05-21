const express = require('express');
const expressHandlebars = require('express-handlebars');
const handlers = require('./lib/handlers');

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
app.get('/', handlers.home);
app.get('/about', handlers.about);
app.use(handlers.notFound);
app.use(handlers.serverError);

app.listen(port, () => console.log(  
    `Express started on http://localhost${port}` +
    `press Ctrl-C to terminate.`
));
