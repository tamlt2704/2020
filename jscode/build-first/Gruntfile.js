module.exports = function(grunt) {
    grunt.initConfig({
        jshint: ['Gruntfile.js'],
        concat: {
            js: {
                files: {
                    'build/js/bundle.js': 'public/js/**/*.js'
                }
            }
        },
        timestamp: {
            options: {
                file: '.mytimestamp'
            }
        }
    });
    
    // plugins need to be loaded individually into Grunt
    grunt.loadNpmTasks('grunt-contrib-jshint');

    grunt.registerTask('default', ['jshint']); 

    grunt.registerTask('timestamp', function() {
        var options = this.options({
            file: '.timestamp'
        });

        var timestamp = +new Date();
        var contents = timestamp.toString();

        grunt.file.write(options.file, contents);
    });
};
