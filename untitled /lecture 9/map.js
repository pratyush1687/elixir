Array.prototype.map1 =  function(def){
  var par=[]
  for (var i = 0; i < this.length; i++) {
    par.push(def(this[i]));
  }
  return par;
}
