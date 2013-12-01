'use strict';
var LIVERELOAD_PORT = 35729;
// var lrSnippet = require('connect-livereload')({port: LIVERELOAD_PORT});
var mountFolder = function (connect, dir) {
  return connect.static(require('path').resolve(dir));
};

module.exports = function(grunt) {
  grunt.initConfig({
    compass: {                  // Task
      dist: {                   // Target
        options: {              // Target options
          sassDir: 'scss',
          cssDir: 'css',
          environment: 'production'
        }
      },
      dev: {                    // Another target
        options: {
          sassDir: 'scss',
          cssDir: 'css'
        }
      }
    },
    watch: {
      css: {
        files: '**/*.scss',
        tasks: ['compass:dev'],
        options: {
          livereload: true,
        },
      },
    },
  });

  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-watch');


  grunt.registerTask('default', ['compass']);
};
