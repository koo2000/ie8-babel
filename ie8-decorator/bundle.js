var fs = require("fs");
var browserify = require("browserify");
var babelify = require("babelify");

babelify.configure({
	stage : 1
});

browserify("./js/decorator.es7.js", {
	debug : true
}).transform(babelify.configure({
	stage : 1
})).bundle().on("error", function(err) {
	console.log("Error : " + err.message);
}).pipe(fs.createWriteStream("dist/decorator.js"));
