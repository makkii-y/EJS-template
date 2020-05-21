const { src, dest, watch, series } = require("gulp");
const browserSync = require("browser-sync").create();
const plumber = require("gulp-plumber");
const notify = require("gulp-notify");
const ejs = require("gulp-ejs");
const rename = require("gulp-rename");

function buildServer(done) {
  browserSync.init({
    server: {
      baseDir: "./dist/",
      port: 3000,
    },
    online: true,
  });
  done();
  console.log("server launched!");
}
function serverReload(done) {
  browserSync.reload();
  done();
  console.log("reload completed!");
}
function Ejs() {
  return src(["./dev/**/*.ejs", "!" + "./dev/**/_*.ejs"])
    .pipe(plumber({ errorHandler: notify.onError("Error: <%= error.message %>") }))
    .pipe(ejs({}, {}, { ext: ".html" }))
    .pipe(rename({ extname: ".html" }))
    .pipe(dest("./dist"));
}
function WatchFiles() {
  console.log("start watch!");
  watch("./dev/**/*.ejs", series(Ejs, serverReload));
  watch("./**/*.html", series(serverReload));
}
exports.default = series(buildServer, Ejs, WatchFiles);
exports.Ejs = Ejs;
