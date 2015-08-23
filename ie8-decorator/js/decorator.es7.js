
function getterdeco(target, name, descriptor) {
	descriptor.writable = true;
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

	@getterdeco
	xxx;
}

export default Person;
