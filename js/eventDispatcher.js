/**
 * EventDispatcher
 *
 * Simple observerable with the possibility to pass parameter object
 */

function EventDispatcher() {
	"use strict";
	this.events = {};
}

EventDispatcher.prototype = {

	events: {},

	on: function on(type, callback, context) {
		this.events[type] = this.events[type] || [];
		this.events[type].unshift({callback: callback, context: context});
	},

	//off("change")
	//off("change", myCallback)
	//off("change", myCallback, that)
	off: function off(type, callback) {
		if(this.events[type]) {
			if(callback != undefined) {
				var listener = this.events[type];
				for(var i = listener.length - 1; i >=0; i--) {
					if(listener[i].callback === callback) {
						listener = listener.splice(i, 1); //remove only that callback
					}
				}
			} else {
				delete this.events[type]; // delete all 
			}
		}
	},
	
	dispatchEvent: function dispatchEvent(type, param) {
		var parameters = param || {};
		var listener = this.events[type];
		if(listener && listener.length) {
			var index = listener.length;
			while(index--) {
				var context = listener[index].context;
				if(!context) {
					context = this;
				}
				listener[index].callback.call(context, {type: type, data: param});
			}
		}
	}
};