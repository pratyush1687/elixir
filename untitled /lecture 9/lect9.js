function Person(name,school) {
  this.name=name;
  this.school=school;
}
Person.prototype.setClass = function () {
    console.log("the name is "+this.name);
    this.class=class;
};

Person.prototype.getClass = function () {
    console.log(this.name);
    console.log(this.class);
};

var p1 = new Person();
