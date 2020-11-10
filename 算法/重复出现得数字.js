numbers=[2,1,3,1,4];
var n=numbers.length;
var s=new Array(n);
console.log(s[1]);
numbers.forEach((item)=>{
    if(s[item]==undefined){
        s[item]=1;
    }else{
        s[item]+=1;
    }
})
console.log(s);
var flag=0;
for(var i=0;i<n;i++){
    if(s[i]!=undefined&&s[i]>1){
        flag=1;
        duplication[0]=i;
        break;
    }
}
if(flag==1){
    return true;
}else{
    return false;
}