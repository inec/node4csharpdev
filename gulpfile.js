const gulp  =  require("gulp");
const debug  = require("gulp-debug");
const babel  = require("gulp-babel");

gulp.task("build", (done)=>{

    //console.log("buiding ....");
    return gulp.src("src/**/*.js")
        .pipe(debug())
        .pipe( babel(
            {
                "presets":["@babel/preset-env"],
                "plugins":["@babel/plugin-transform-runtime"]
            }
        )        )
        .on("error",(err)=>{
            console.log(`babel error ${err}`);
        })
        .pipe(gulp.dest(".compiled"));
    done();
});


gulp.task("default" , gulp.series("build",(done)=>{
  console.log("run defualt...");
  done();
}));