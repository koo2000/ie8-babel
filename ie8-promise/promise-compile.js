var fs = require('fs');
var browserify = require('browserify');
var babelify = require('babelify');

babelify.configure({
	stage : 1
});

browserify('./js/promise-call.es7.js', {
	debug : true,
	standalone : 'Person',
})
.transform(babelify.configure({
	stage : 1,
	plugins : ['object-assign'],
	loose: ['es6.classes', 'es6.modules'],
	optional: ["runtime"] 
})).bundle().on('error', function(err) {
	console.log('Error : ' + err.message);
}).pipe(fs.createWriteStream('dist/promise-call.js'));
