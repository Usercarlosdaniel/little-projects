const { series, watch } = require("gulp");
const browserSync = require("browser-sync").create();

function browserSyncServe(cb) {
  browserSync.init({
    server: {
      baseDir: ".",
    },
  });
  cb();
}

function browserSyncReload(cb) {
  browserSync.reload();
  cb();
}

function watchTask() {
  watch("*.html", browserSyncReload);
  watch("./src/css/*.css", browserSyncReload);
  watch("./src/js/*.js", browserSyncReload);
}

exports.default = series(browserSyncServe, watchTask);
