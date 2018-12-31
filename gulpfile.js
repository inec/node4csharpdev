const gulp  =  require("gulp");
const debug  = require("debug");


gulp.task("build", (done)=>{

    console.log("buiding ....");
    done();
});


gulp.task("default" , gulp.series("build",(done)=>{
  console.log("run defualt...");
  done();
}));