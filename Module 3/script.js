var x = 4, y='4';

var c= function (x){

    return x+5+y;

}

var d = Object();
d.name = "enzee";
d.title= "boss";

var s = "whose the boss";

d[s]="enzee";

console.log(c(3));
console.log(d);