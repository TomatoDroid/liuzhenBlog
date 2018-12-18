function Person(){}

function Ninja(){}

Ninja.prototype = new Person();

var ninja = new Ninja();

console.log(ninja.__proto__);

console.log(ninja instanceof Person);