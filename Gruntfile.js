module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      simple: {
        files: {
          'dist/speech-flow.min.js': ['src/speech-flow.js']
        }
      },
      unified:{
        files: {
          'dist/speech-flow.uni.min.js': ['bower_components/phenomenon-js/src/phenomenonJS.js', 'src/speech-flow.js']
        }
      }
    },
    jshint: {
      all: ['Gruntfile.js', 'src/**/*.js']
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');

  // Default task(s).
  grunt.registerTask('default', ['jshint']);

  grunt.registerTask('build', ['jshint', 'uglify:unified', 'uglify:simple']);

};
