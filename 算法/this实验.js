var foo=1
function main(){
    console.log(foo);
    var foo=2;
    console.log(this.foo);
    this.foo=3;

}
main();
new main();