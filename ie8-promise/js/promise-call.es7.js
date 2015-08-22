
console.log('hoge');

var promise1 = new Promise(function (resolve) {
	var callback = function() {
		console.log('promise1 end');
		resolve('promise1 result');
	}
    setTimeout(callback, 2000);
});
var promise2 = new Promise(function (resolve, reject) {
	var callback = function() {
		console.log('promise2 end');
		resolve('promise2 result');
//		reject('promise2 failed');
	}
    setTimeout(callback, 1000);
});

Promise.all([promise1, promise2]).then(function(results){
	console.log('all promise finished.');
	console.log('results = ' + results);
}).catch(function(results) {
	console.log('promise failed.');
	console.log('results = ' + results);
});
