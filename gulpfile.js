const gulp = require("gulp");
const concat = require("gulp-concat");

const sass = require("gulp-sass")(require("sass"));

const minify = require("gulp-minify");
const sourcemaps = require("gulp-sourcemaps");

const deploy = require("gulp-gh-pages");

// SASS Task
gulp.task("css", () => {
  return gulp
    .src("src/style/scss/**/*.scss")
    .pipe(sourcemaps.init())
    .pipe(sass().on("error", sass.logError))
    .pipe(concat("main.css"))
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest("dist/"));
});

// JS Task

gulp.task("js", () => {
  return gulp
    .src("src/js/*.js")
    .pipe(concat("main.js"))
    .pipe(minify())
    .pipe(gulp.dest("dist/js"));
});

// Watch Task

gulp.task("watch", () => {
  gulp.watch("src/style/scss/**/*.scss", gulp.series(["css"]));
  gulp.watch("src/js/*.js", gulp.series(["js"]));
});

gulp.task('deploy', function () {
  return gulp.src("./dist/**/*")
    .pipe(deploy({ 
      remoteUrl: "https://github.com/medhatnasra/Gulpjs-Website-.git",
      branch: "master"
    }))
});