module.exports = function(grunt) {
    require('load-grunt-tasks')(grunt);

    // Project configuration.
    grunt.initConfig({
        compress: {
            main: {
                options: {
                    archive: 'demo.zip',
                    pretty: true
                },
                expand: true,
                cwd: './',
                src: ['index.html'],
                dest: './'
            }
        }
    });
    // Default task(s).
    grunt.registerTask('default', ['compress']);
};