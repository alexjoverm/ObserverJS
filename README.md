# ObserverJS

This is a simple implementation of **Observer pattern** made in plain javascript and suitable to use it in **hierarchy**.

You can create your own observable by using `dispatchEvent`, `on`, `off` methods:

```javascript
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

test.setName('Albert'); // this will trigger the event internally
```