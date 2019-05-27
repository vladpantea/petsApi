'use strict';

module.exports = function(grunt) {

    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        eslint: {
            target: ['controllers/*.js','service/*.js','utils/*.js']
        }
    });

    grunt.registerTask('default', ['eslint']);
};
