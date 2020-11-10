var str="kdakd ka sdk";
var s=str.split("");
s.forEach((item,index)=>{
    if(item==" "){
        s[index]="%20";
        console.log("change!!!");
    }
})
console.log(s.join(""));
console.log(str.replace(/ /g,"%20"));
