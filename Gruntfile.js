module.exports = function(grunt) {

    // 1. All configuration goes here 
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        clean: ['svgbuild/output', 'images/svgbuild/output']], //removes old data

        svgmin: { //minimize SVG files
            options: {
                plugins: [
                    { removeViewBox: false },
                    { removeUselessStrokeAndFill: false }
                ]
            },
            dist: {
                expand: true,
                cwd: 'images/svg',
                src: ['*.svg'],
                dest: 'images/svgmin',
                ext: '.colors-light-danger-success.svg'
            }
        },

        grunticon: {
            myIcons: {
                files: [{
                    expand: true,
                    cwd: 'images/svgmin',
                    src: ['*.svg'],
                    dest: "images/svgbuild"
                }],
                options: {
                    colors: {
                        light: '#ccc',
                        danger: '#ed3921',
                        success: '#8DC63F'
                    }
                }
            }
        },    

    });

    // 3. Where we tell Grunt we plan to use this plug-in.
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-svgmin');
    grunt.loadNpmTasks('grunt-grunticon');

    // 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
    grunt.registerTask('default', ['clean', 'svgmin', 'grunticon:myIcons']);

};
