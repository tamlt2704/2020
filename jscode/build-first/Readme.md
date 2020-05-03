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
