module.exports = function(grunt) {
    grunt.initConfig({
        jshint: ['Gruntfile.js']
    });
    
    // plugins need to be loaded individually into Grunt
    grunt.loadNpmTasks('grunt-contrib-jshint');

    grunt.registerTask('default', ['jshint']); 
};
