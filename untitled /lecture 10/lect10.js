/**
 * Created by pratyush on 30/6/17.
 */
function hello(){
    function child() {
        console.log(this.__proto__);
    }
    var x={
        "obj":"foo",
        "property":"bar"
    };
    child.prototype=x;
    child();

    var person=new child();
    // console.log(x.obj);
    // y={}
    // function hello() {
    //     var x=12;//closure prop ki vajah se set can access x even if it is called out of fn
    //     function set(){
    //         console.log(x);
    //     }
    //     y.a=set;
    // }
    // hello();
    // y.a();

}
hello()