/**
 * Created by pratyush on 30/6/17.
 */
class Cat{
    constructor(name){
        this.name=name;
    }
    speak(){
        console.log(this.name+' makes a noise');
    }
}
var y=new Cat("kitty");
y.speak()

class Kitten extends Cat{
    speak(){
        super.speak();
        console.log(this.name+' makes no noise');
    }
}

var y=new Kitten("pratyush");
y.speak();
