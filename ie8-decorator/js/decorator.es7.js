
function getterdeco(target, name, descriptor) {
	console.log('getterdeco ' 
			+ 'target = ' + target
			+ 'name = ' + name
			);
	return descriptor;
}


function classdeco(target, name, descriptor) {
	console.log('getterdeco ' 
			+ 'target = ' + target
			+ 'name = ' + name
			);
	return descriptor;
}

@classdeco
class Person {
	constructor() {
		this._name = '';
	}
	@getterdeco
	get name() { 
		return _name; 
	}
}
