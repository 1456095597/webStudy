// Function.prototype.mybind=function(news){
//     var self=this;
//     return function(){
//         self.apply(news,arguments);
//     }
// }
// function a(name){
//     console.log(this.name);
// }
// var b={name:'apple'}
// a.mybind(b)();
// a.bind(b)();


Function.prototype.mybind=function(){
    var self=this;
    var context=Array.prototype.shift.call(arguments);
    var args=Array.prototype.slice.call(arguments);
    return function(){
        self.apply(context,Array.prototype.concat.call(args,Array.prototype.slice.call(arguments)));
    }
}
function a(a,b,c){
    console.log(this.name+a+b+c);
}
var b={name:'apple'};
var m=a.mybind(b,7,8);
m(9);