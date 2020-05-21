npm init -y
npx gitignore node
npm install express


low level
res.end         ->    res.send
res.writeHead   ->    res.status


app.use: express middleware

order in which routes and middleware are added is significant

Template
    npm install express-handlebars
    

Testing with jest
    npm install --save-dev jest
    --save-dev: package is only required for development
                NOT for functioning

    npm test -- --watch
    npm test -- --coverage

Testing with puppeteer
    npm install --save-dev puppeteer
    npm install --save-dev portfinder


eslint
    npm install --save-dev eslint    
    ./node_modules/.bin/eslint --init

processing Forms

    const bodyParser = require('body-parser')
    app.use(bodyParser.urlencoded({extended: false});

render without layout
    res.render('foo', {layout: null});
    res.render('foo', {layout: 'microsite'});

Cookies
    npm install cookie-parser

Session
    npm install express-session

Common middleware
    basicauth-middleware
    body-parser
    busboy, multiparty, formidable, multer
    compression
    cookie-parser
    cookie-session
    express-session
    csurf
    serve-index
    errorhandler
    serve-favicon
    morgan
    method-override
    response-time
    static
    vhost

Logging
    npm install morgan

Deploy in production
    npm install -g forever
    forever start index.js
    forever restart index.js
    forever stop index.js

    or pm2
