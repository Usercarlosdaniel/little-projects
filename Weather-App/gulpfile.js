const { watch } = require("gulp");
const browserSync = require("browser-sync").create()

function serve(cb) {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    })
    watch(["*.html","*.css","*.js"]).on("change", browserSync.reload)
    cb()
}

exports.default = serve
