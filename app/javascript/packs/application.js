// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")




import 'bootstrap';
import { initApex } from '../plugins/init_apex';
import { initResize } from '../plugins/init_resize';
import { initUtil } from '../plugins/init_util';
import { initHover } from '../plugins/init_hover';





// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)



document.addEventListener('turbolinks:load', () => {
  initApex();
  initResize();
  initHover();
  initUtil();
  // Call your functions here, e.g:
  // initSelect2();
});

"use strict";

var gulp = require("gulp"),
    HubRegistry = require('gulp-hub'),
    browsersync = require("browser-sync"),
    vars = require('./variables');


/**
 * Register all the tasks
 */
// load some files into the registry
var hub = new HubRegistry(['tasks/*.js']);

// tell gulp to use the tasks just loaded
gulp.registry(hub);


/**
 * Browsersync
 */
// live browser loading
function initBrowserSync(done) {
    const distPath = vars.getBaseDistPath();
    const startPath = "/" + vars.getSelectedDemo() + "/index.html";
    browsersync.init({
        startPath: startPath,
        server: {
            baseDir: distPath,
            middleware: [
                function (req, res, next) {
                    req.method = 'GET';
                    next();
                }
            ]
        }
    });
    done();
}

function reloadBrowserSync(done) {
    browsersync.reload();
    done();
}

/**
 * Watches the changes
 */
function watchFiles() {
    const srcPath = vars.getSrcPath();
    const baseAssets = vars.getBaseAssetsPath();

    gulp.watch(srcPath + "**", gulp.series('copyHtml', reloadBrowserSync));
    gulp.watch(baseAssets + "images/**/*", gulp.series('copyImages', reloadBrowserSync));
    gulp.watch(baseAssets + "fonts/**/*", gulp.series('copyFonts', reloadBrowserSync));
    gulp.watch(baseAssets + "scss/**/*", gulp.series('compileSaas', reloadBrowserSync));
    gulp.watch(baseAssets + "js/**/*", gulp.series("compileJs", reloadBrowserSync));
}

/**
 * Default tasks
 */

// watch all changes
gulp.task("watch", gulp.parallel(watchFiles, initBrowserSync));

// default
gulp.task('default', gulp.series('copyAssets', 'copyHtml', 'copyImages', 'copyFonts', 'compileSaas', 'compileJs', 'watch'), function (done) { done(); });


// build
gulp.task("build", gulp.series('copyAssets', 'copyHtml', 'copyImages', 'copyFonts', 'compileSaas', 'compileJs'));

// doc
gulp.task("docs", function () {
    browsersync.init({
        server: {
            baseDir: "docs"
        }
    });
});
