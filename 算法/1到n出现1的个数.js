var n=13;
var i=0;
var sum=0;
while(i<=n){
    var tmp=i;
    while(parseInt(tmp/10)!=0){
        if(tmp%10==1){
            sum+=1;
        }
        tmp=parseInt(tmp/10);
    }
    if(tmp==1){
        sum+=1;
    }
    i+=1;
}
console.log(sum);