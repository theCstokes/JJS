module.exports = function (grunt) {
    grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),
      concat: {
        options: {
          stripBanners: true,
          banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
            '<%= grunt.template.today("yyyy-mm-dd") %> */\n'
        },
        dist: {
          src: [
            'ui-framework/js/extensions/base/**/*.js',
            'ui-framework/js/extensions/core/**/*.js',
            'ui-framework/js/extensions/components/**/*.js',
            'ui-framework/js/extensions/holders/**/*.js'
          ],
          dest: 'dist/build.js'
        },
      }
});

// load plugins
grunt.loadNpmTasks('grunt-contrib-watch');
grunt.loadNpmTasks('grunt-contrib-uglify');
grunt.loadNpmTasks('grunt-contrib-concat');

// register at least this one task
grunt.registerTask('default', [ 'concat' ]);


};
