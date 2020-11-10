var s=[1,2,3,4,5,6,7,0];
var sum=0;
while(s.length!=0){
    var tmp=s[0];
    s.shift();
    s.forEach((item)=>{
        if(item<tmp){
            sum+=1;
        }
    })
}
console.log(sum);

