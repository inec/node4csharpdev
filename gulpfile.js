const gulp  =  require("gulp");
const debug  = require("gulp-debug");


gulp.task("build", (done)=>{

    //console.log("buiding ....");
    return gulp.src("src/**/*.js")
        .pipe(debug());
    done();
});


gulp.task("default" , gulp.series("build",(done)=>{
  console.log("run defualt...");
  done();
}));