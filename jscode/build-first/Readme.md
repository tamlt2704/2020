npm install -g jshint
npm install -g grunt

//install grunt for local development
npm install --save-dev grunt

// grunt js hint
npm install --save-dev grunt-contrib-jshint
npm install --save-dev grunt-contrib-less
npm install --save-dev grunt-contrib-concat  // create bundle file
npm install --save-dev grunt-contrib-uglify  // minify files
npm install --save-dev grunt-spritesmith     // image sprites
npm install --save-dev grunt-contrib-clean   // remove generated content
npm install --save-dev grunt-contrib-watch   // wath for file changes
npm install --save-dev grunt-contrib-imagemin // minify images
npm install --save-dev grunt-rev              // hash file
npm install --save-dev grunt-usemin           // hash file
npm install --save-dev grunt-bump             // versioning
npm install --save-dev grunt-conventional-changelog             // versioning


// custom task
grunt.registerTask('timestamp', function() {
    var options = this.options({
        file: '.timestamp'
    });

    var timestamp = +new Date();
    var contents = timestamp.toString();

    grunt.file.write(options.file, contents);
});

grunt.initConfig({
    timestamp: {
        options: {
            file: '.mytimestamp'
        }
    }
});

// encrypt config values with private key --> submit to source control --> at
server, using private key to decrypt
npm install --save-dev nconf 


// log
var logger = require('winston')
logger.info('info');
logger.error('error');

// run in multiple process
npm install cluster
npm install pm2 // pm2 start app.js -i 2
