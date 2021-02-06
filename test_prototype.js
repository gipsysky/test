function Clazz(msg){
	this.name='I am Class';
	this.message = msg;

	message2 = 'find me!';

	this.print = function(){
		console.log(message2);
	}
}

Clazz.prototype.getMessage = function(){
	return this.message;
}

Clazz.prototype.getMessage2 = function(){
	return this.message2;
}

var myClazz = new Clazz('hi');
console.log(myClazz.getMessage());
console.log(myClazz.getMessage2());