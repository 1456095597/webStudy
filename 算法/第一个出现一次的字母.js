var s="google";

var res={};
var i=0;
while(i<s.length){
    if(res[s[i]]==undefined){
        res[s[i]]=1;
    }else{
        res[s[i]]+=1;
    }
    i+=1;
}
    var i=0;
    var tag=null;
for(let key in res){
    if(res[key]==1){
        tag=key;
        b
    }
    i+=1;
}
    if(tag){
       console.log(tag);
    }
  