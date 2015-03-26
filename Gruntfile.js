module.exports = function(grunt) {

    // 1. All configuration goes here 
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        grunticon: {
            myIcons: {
                files: [{
                    expand: true,
                    cwd: 'images/svg',
                    src: ['*.svg', '*.png'],
                    dest: "images/svgbuild"
                }],
                options: {

                }
            }
        }     

    });

    // 3. Where we tell Grunt we plan to use this plug-in.
    grunt.loadNpmTasks('grunt-grunticon');

    // 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
    grunt.registerTask('default', ['grunticon:myIcons']);

};
