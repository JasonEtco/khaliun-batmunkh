module.exports = function(grunt) {

    require('time-grunt')(grunt);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        jekyll: {
            working: {
              options: {
                config: '_config.yml',
                drafts: true
              }
            },

            deploy: {
              options: {
                config: '_config.yml',
                drafts: false
              }
            }
        },

        connect: {
            server: {
                options: {
                    port: 4000,
                    base: '_site/',
                    livereload: true
                }
            }
        },

        postcss: {
          options: {
            processors: [
              require('autoprefixer')({browsers: ['last 2 versions', '> 5%']})
            ]
          },

          dist: {
            src: '_site/css/styles.css',
            dest: '_site/css/styles.css'
          }
        },

        watch: {
            options: {
                livereload: true
            },
            css: {
                files: [
                    '_sass/*.scss',
                    '_sass/**/*.scss',
                    'css/*.scss'
                ],
                tasks: ['jekyll', 'uglify', 'postcss']
            },

            js: {
                files: [
                    '_js/*.js'
                ],
                tasks: ['jekyll', 'uglify', 'postcss']
            },

            jekyll: {
                files: [
                    '**/*.html',
                    '**/*.md',
                    '_posts/*.md',
                    '_config.yml',
                    '*.html',
                    '*.md',
                    '!_site/**/*'
                ],
                tasks: ['jekyll', 'uglify', 'postcss']
            }
        },

        uglify: {
            main: {
                files: {
                    '_site/main.js': '_js/*.js'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-postcss');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-jekyll');

    grunt.registerTask('default', ['jekyll:working', 'uglify', 'postcss', 'connect', 'watch']);
    grunt.registerTask('deploy',  ['jekyll:deploy', 'uglify', 'postcss', 'buildcontrol:pages']);
};