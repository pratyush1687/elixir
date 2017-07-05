
function foo(who) {
  this.me=who;
  // console.log(this);
}

foo.prototype.setItem = function () {
  return "i am "+this.me;
};
foo.prototype.getItem = function () {
  return "i am not "+this.me;
};
// me is an attribute of a1 and a2 ;
var a1 = new foo("a1");
// new has 4 steps 1.formation of object(create object);
// 2. setting values of object by calling foo()(link object);
// 3.setting this to object;
// 4.returning this;
console.log(foo.prototype);
var a2 = new foo("a2");

// prototype linkage b/w a2 and foo a1 and foo and foo and parent
// [[prototype]] defined as [[p]]

a2.speak=function () {
  console.log("hello "+ this.setItem());
}
// console.log(a1.identify());
console.log((a1.__proto__===foo.prototype)+"bleh");
console.log(a1.constructor === foo);
console.log(a1.constructor === a2.constructor);
console.log(a1.__proto__===a2.__proto__);
// a1.__proto__==a1.constructor.prototype;
a2.speak();
// console.log(a1.this);
// a1.constructor.prototype=function () {
//   console.log("praty");
// }
//
// Object shape;
// var rect=Object.create(foo);
// function p(id){
//   console.log(id. this);
// }
// p(rect);
