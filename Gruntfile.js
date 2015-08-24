module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    base_path: '',

    build:     '_public',
    css_build: '_public/css',
    js_build:  '_public/js',

    css_src:   '_source/css',
    js_src:    '_source/js',

    meta: {
      css : {
        banner:
        '/*========================================================================================!\n' +
        ' * app.css <%= pkg.name %> (<%= grunt.template.today("yyyy-mm-dd, HH:MM") %>)\n' +
        ' * Author: <%= pkg.author %>\n' +
        ' * E-mail: <%= pkg.email %>\n' +
        ' * Site: <%= pkg.site %>\n' +
        ' ========================================================================================*/'
      },

      js : {

        banner:
        '/*========================================================================================!\n' +
        ' * app.js <%= pkg.name %> (<%= grunt.template.today("yyyy-mm-dd, HH:MM") %>)\n' +
        ' * Author: <%= pkg.author %>\n' +
        ' * E-mail: <%= pkg.email %>\n' +
        ' * Site: <%= pkg.site %>\n' +
        ' ========================================================================================*/'

      }

    },

    uglify: {
      options: {
        banner: '<%= meta.js.banner %>\n',
        mangle: false
      },
      build: {
        files: {
          '<%= js_build %>/app.min.js': ['<%= js_build %>/app.js'],
        },
      },
    },

    concat: {
      options:{
        separator: ';'
      },
      basic_and_extras: {
        files: {
          '<%= js_build %>/app.js' : ['<%= js_src %>/*.js']
        },
      },
    },

    cssmin: {
      options: {
        banner: '<%= meta.css.banner %>\n',
        keepSpecialComments: 0
      },
      compress: {
        files: {
          '<%= css_build %>/app.min.css': [ '<%= css_src %>/*.css' ],
        }
      }
    },

    serve: {
      options: {
        port: 9000
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks( 'grunt-contrib-concat');
  grunt.loadNpmTasks( 'grunt-contrib-cssmin' );
  grunt.loadNpmTasks('grunt-serve');

  // Default task(s).
  grunt.registerTask('default', ['concat', 'uglify', 'cssmin', 'serve']);

};