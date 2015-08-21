(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.Person = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function getterdeco(target, name, descriptor) {
	console.log('getterdeco ' + 'target = ' + target + ' ' + 'name = ' + name);
	return descriptor;
}

function classdeco(target, name, descriptor) {
	console.log('classdeco ' + 'target = ' + target + ' ' + 'name = ' + name);
	return descriptor;
}

var Person = (function () {
	function Person() {
		_classCallCheck(this, _Person);

		this._name = '';
	}

	_createDecoratedClass(Person, [{
		key: 'name',
		decorators: [getterdeco],
		get: function get() {
			return _name;
		}
	}]);

	var _Person = Person;
	Person = classdeco(Person) || Person;
	return Person;
})();

exports['default'] = Person;
module.exports = exports['default'];

},{}]},{},[1])(1)
});
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvYXNhbm9rb3VpY2hpL2dpdC9pZTgtYmFiZWwvaWU4LWRlY29yYXRvci9qcy9kZWNvcmF0b3IuZXM3LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztBQ0NBLFNBQVMsVUFBVSxDQUFDLE1BQU0sRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFO0FBQzdDLFFBQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxHQUNyQixXQUFXLEdBQUcsTUFBTSxHQUFHLEdBQUcsR0FDMUIsU0FBUyxHQUFHLElBQUksQ0FDakIsQ0FBQztBQUNKLFFBQU8sVUFBVSxDQUFDO0NBQ2xCOztBQUdELFNBQVMsU0FBUyxDQUFDLE1BQU0sRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFO0FBQzVDLFFBQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxHQUNwQixXQUFXLEdBQUcsTUFBTSxHQUFHLEdBQUcsR0FDMUIsU0FBUyxHQUFHLElBQUksQ0FDakIsQ0FBQztBQUNKLFFBQU8sVUFBVSxDQUFDO0NBQ2xCOztJQUdLLE1BQU07QUFDQSxVQUROLE1BQU0sR0FDRzs7O0FBQ2IsTUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7RUFDaEI7O3VCQUhJLE1BQU07O2VBSVYsVUFBVTtPQUNILGVBQUc7QUFDVixVQUFPLEtBQUssQ0FBQztHQUNiOzs7ZUFQSSxNQUFNO0FBQU4sT0FBTSxHQURYLFNBQVMsQ0FDSixNQUFNLEtBQU4sTUFBTTtRQUFOLE1BQU07OztxQkFVRyxNQUFNIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIlxuZnVuY3Rpb24gZ2V0dGVyZGVjbyh0YXJnZXQsIG5hbWUsIGRlc2NyaXB0b3IpIHtcblx0Y29uc29sZS5sb2coJ2dldHRlcmRlY28gJyBcblx0XHRcdCsgJ3RhcmdldCA9ICcgKyB0YXJnZXQgKyAnICdcblx0XHRcdCsgJ25hbWUgPSAnICsgbmFtZVxuXHRcdFx0KTtcblx0cmV0dXJuIGRlc2NyaXB0b3I7XG59XG5cblxuZnVuY3Rpb24gY2xhc3NkZWNvKHRhcmdldCwgbmFtZSwgZGVzY3JpcHRvcikge1xuXHRjb25zb2xlLmxvZygnY2xhc3NkZWNvICcgXG5cdFx0XHQrICd0YXJnZXQgPSAnICsgdGFyZ2V0ICsgJyAnXG5cdFx0XHQrICduYW1lID0gJyArIG5hbWVcblx0XHRcdCk7XG5cdHJldHVybiBkZXNjcmlwdG9yO1xufVxuXG5AY2xhc3NkZWNvXG5jbGFzcyBQZXJzb24ge1xuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHR0aGlzLl9uYW1lID0gJyc7XG5cdH1cblx0QGdldHRlcmRlY29cblx0Z2V0IG5hbWUoKSB7IFxuXHRcdHJldHVybiBfbmFtZTsgXG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUGVyc29uOyJdfQ==
