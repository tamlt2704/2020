module.exports = function(grunt) {
    [
        'grunt-cafe-mocha',
        'grunt-contrib-jshint',
        'grunt-exec',
    ].forEach((task) => {
        grunt.loadNpmTasks(task);
    });

    grunt.initConfig({
        cafemocha: {
            all: {src: 'qa/tests-*.js', options: {ui: 'tdd',}}
        },
        jshint: {
            app: ['index.js', 'public/js/**/*.js', 'lib/js/**/*.js'],
            qa: ['Grunfile,js.js', 'public/qa/**/*.js'],
        },
        exec: {
            linkchecker: {cmd: 'linkchecker http://localhost:5000'}
        },
    });

    //register tasks
    grunt.registerTask('default', ['cafemocha', 'jshint', 'exec']);
}
