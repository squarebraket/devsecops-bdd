module.exports = function (grunt) {
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-shell');

  grunt.initConfig({
    watch: {
      js: {
        files: ['lib/**/*.js', 'spec/**/*.spec.js'],
        tasks: ['test'],
      },
    },
    shell: {
      test: {
        options: { stdout: true },
        command: 'jasmine spec/*.spec.js',
      },
    },
  });

  grunt.registerTask('test', 'shell:test');
};
