var array=['lion','cat','zibra'];
var length=array.length;

array.sort();

array.pop();
array.unshift();
array.push("dogy");
array.reverse();

 var check = Array.isArray(array)
 document.write(check);
 document.write("<br>")
document.write(array);
document.write("<br>")


var fruits=['banana','chiku','Mango'];
fruits.toString();
document.write(fruits);
document.write("<br>");

var array=['lion','cat','zibra'];
var fruits=['banana','chiku','Mango'];

const myCombo = array.concat(fruits);
document.write(myCombo);
document.write("<br>");


fruits.splice(2,0,"Kivi","Orange");
document.write(fruits);
