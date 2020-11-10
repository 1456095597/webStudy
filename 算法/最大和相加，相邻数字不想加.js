var a=[4,1,1,2];
var max1=0;
var maxlist=[];
maxlist.push(a[0]);
if(a[1]>a[0]){
    maxlist.push(a[1]);
}else{
    maxlist.push(a[0]);
}
max1=maxlist[1];
var i=2;
while(i<a.length){
    if(a[i]+maxlist[i-2]>maxlist[i-1]){
        maxlist.push(a[i]+maxlist[i-2]);
    }else{
        maxlist.push(maxlist[i-1]);
    }
    i+=1;
}
console.log(maxlist.pop());