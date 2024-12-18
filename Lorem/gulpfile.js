const { watch } = require("gulp");
const browserSync = require("browser-sync").create();

function Serve(cb) {
  browserSync.init({
    server: {
      baseDir: "./",
    },
  });
  watch(["*.html", "*.js", "*.css"]).on("change", browserSync.reload);
  cb();
}

exports.default = Serve;
