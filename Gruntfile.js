module.exports = function(grunt) {
  require('load-grunt-tasks')(grunt);
  require('time-grunt')(grunt);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    bower: {
      install: {
      }
    },

    concat: {
      options: {
        separator: ';',
      },
      dist: {
        src: [
          './<%= pkg.name %>/assets/js/*.js'
        ],
        dest: "./dist/assets/js/<%= pkg.name %>.js"
      }
    },

    less: {
      dist: {
        options: {
          compress: true,
        },
        files: {
          './dist/assets/css/<%= pkg.name %>.css': './<%= pkg.name %>/assets/less/style.less'
        }
      }
    },

    uglify: {
      options : {
        mangle: false,
      },

      dist: {
        files: {
          './dist/assets/js/jquery.min.js': './bower_components/jquery/dist/jquery.js',
          './dist/assets/js/bootstrap.min.js':'./bower_components/bootstrap/dist/js/bootstrap.js',
          './dist/assets/js/modernizr.min.js':'./bower_components/modernizr/modernizr.js',
          './dist/assets/js/<%= pkg.name %>.min.js': './dist/assets/js/<%= pkg.name %>.js'
        }
      }
    },

    watch: {
      less: {
        files: [
          './<%= pkg.name %>/assets/less/*.less'
        ],
        tasks: ['less', 'cssmin'],
      },
      js: {
        files: [
          './bower_components/jquery/jquery.js',
          './bower_components/bootstrap/dist/js/bootstrap.js',
          './bower_components/modernizr/modernizr.js',
          './<%= pkg.name %>/assets/js/<%= pkg.name %>.js'
        ],
        tasks: ['concat', 'uglify'],
      },
      template: {
        files: [
          './<%= pkg.name %>/*.lens',
          './<%= pkg.name %>/_include/*.html',
          './<%= pkg.name %>/_layout/*.html',
          './<%= pkg.name %>/preview.jpg',
          './<%= pkg.name %>/info.json'
        ],
        tasks: ['copy:dist'],
        options : {
          spawn: false,
        }
      }
    },

    cssmin: {
      dist: {
        files: {
          './dist/assets/css/<%= pkg.name %>.min.css': [
            './dist/assets/css/<%= pkg.name %>.css'
          ]
        }
      }
    },

    copy: {
      dist: {
        files: [{
          expand: true,
          dot: true,
          cwd: './<%= pkg.name %>',
          dest: './dist',
          src: [
            '*.lens',
            '*/*.html',
            'preview.jpg',
            'info.json'
          ]
        }]
      },

      font_awesome: {
        files: [{
          expand: true,
          dot: true,
          cwd: './bower_components/font-awesome',
          dest: './dist/assets/',
          src: [
            'fonts/*'
          ]
        }]
      }
    },

    clean: {
      dist: {
        files: [{
          dot: true,
          src: [
            './dist'
          ]
        }]
      }
    }
  });

  // Task definition
  grunt.registerTask('init', [
    'bower:install',
  ]);

  grunt.registerTask('build', [
    'clean:dist',
    'less',
    'cssmin',
    'concat',
    'uglify',
    'copy'
  ]);

  grunt.registerTask('default', [
    'build'
  ]);
};
