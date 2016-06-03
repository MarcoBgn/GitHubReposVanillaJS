module.exports = function (grunt) {
  
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jshint: {
      files: ['public/js/*.js'],
      options: {
        "curly": true,
        "eqnull": true, 
        "eqeqeq": true,
        "undef": false,
        "esversion": 6,
        "strict": false,
        "globals": {
          "jQuery": false
        }
      }
    },
    open: {
      dev: {
        path: 'public/index.html',
        app: 'Google Chrome'
      },
      file: {
        path: 'SpecRunner.html', 
        app: 'Google Chrome'
      }
    }
  });
  
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-open');
  grunt.registerTask('default', ['open']);
};