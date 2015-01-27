module.exports = function(grunt) {
  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    cssmin: {
      main: {
        files: {
          'styles/style.css': ['styles/src/*.css']
        }
      }
    },
    watch: {
      css: {
        files: ['styles/src/*.css'],
        tasks: ['cssmin']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task(s).
  grunt.registerTask('default', ['cssmin']);
};
