const fortune = require('./fortune');

exports.home = (req, res) => res.render('home');
exports.about = (req, res) => res.render('about', {fortune: fortune.getFortune()});
exports.notFound = (req, res) => res.render('404');

/* eslint-disable no-unused-vars */
exports.serverError = (err, req, res, next) => res.render('500');
/* eslint-enable no-unused-vars */

exports.newsletterSignup = (req, res) => {
    res.render('signup', {
        csrf: 'CSRF token goes here'
    });
}

exports.newsletterSignupProcess = (req, res) => {
    console.log('Form (from query string): ', req.query.form);
    console.log('CSRF token (from hidden field): ', req.body._csrf);
    console.log('name (from visible form field): ', req.body.name);
    console.log('email (from visible form field): ', req.body.email);
    res.redirect(303, '/newsletter-signup/thankyou');
}

exports.newsletterSignupThankyou = (req, res) => 
    res.render('newsletter-signup-thankyou');
