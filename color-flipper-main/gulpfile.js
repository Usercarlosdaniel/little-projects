const { series, watch } = require("gulp");
const browsersync = require("browser-sync").create();

// browser Sync Tasks
function browsersyncServe(cb) {
  browsersync.init({
    server: {
      baseDir: ".",
    },
  });
  cb();
}
// browser Sync Auto Reload
function browsersyncReload(cb) {
  browsersync.reload();
  cb();
}

function watchTask() {
  watch("*.html", browsersyncReload);
  watch("./src/css/*.css", browsersyncReload);
  watch("./src/js/*.js", browsersyncReload);
}

// Default Gulp task
exports.default = series(browsersyncServe, watchTask);
