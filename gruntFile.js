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
    }
  });
  
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.registerTask('default', []);
};