const express = require('express');
const expressHandlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const handlers = require('./lib/handlers');
const { credentials } = require('./config');
const cookieParser = require('cookie-parser');

const app = express();

app.engine('handlebars', expressHandlebars({
    defaultLayout: 'main',
}));

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cookieParser(credentials.cookieSecret));

app.set('view engine', 'handlebars');

const port = process.env.PORT || 5000;

app.get('/', handlers.home);
app.get('/about', handlers.about);
/*
app.get('/newsletter-signup', handlers.newsletterSignup);
app.post('/newsletter-signup/process', handlers.newsletterSignupProcess);
app.get('/newsletter-signup/thankyou', handlers.newsletterSignupThankyou);
*/
app.get('/newsletter', handlers.newsletter);
app.post('/api/newsletter-signup', handlers.api.newsletterSignup);

app.use(handlers.notFound);
app.use(handlers.serverError);

app.listen(port, () => console.log(  
    `Express started on http://localhost${port}` +
    `press Ctrl-C to terminate.`
));
