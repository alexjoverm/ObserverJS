
var Person = function Person() {
	EventDispatcher.apply(this, arguments);
};

Person.prototype = Object.create(EventDispatcher.prototype);
Person.prototype.constructor = Person;

Person.prototype.setName = function(name) {
	this.name = name;
	this.dispatchEvent('change', {name: this.name});
};


//Test Person

var test = new Person();

test.on('change', function(e) {
	console.log('Event: ' + e.type + ', Person: ' + e.data.name);
});

test.setName('Albert');