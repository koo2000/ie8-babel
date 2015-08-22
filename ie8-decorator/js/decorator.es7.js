
function getterdeco(target, name, descriptor) {
	console.log('getterdeco ' 
			+ 'target = ' + target + ' '
			+ 'name = ' + name
			);
	return descriptor;
}


function classdeco(target, name, descriptor) {
	console.log('classdeco ' 
			+ 'target = ' + target + ' '
			+ 'name = ' + name
			);
	return descriptor;
}

@classdeco
class Person {
	constructor() {
		this._name = '';
	}

//  getter setter can't support in IE8!!
//	@getterdeco
//	get name() { 
//		return _name; 
//	}
	
	@getterdeco
	xxx;
}

export default Person;