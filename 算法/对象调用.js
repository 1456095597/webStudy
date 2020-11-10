var s={
    a:1,
    b:2,
    c:3,
    d:{
        d1:1,
        d2:2,
        d3:{
            d31:1,
            d32:'d32',
        }
    }
}
    var d1;
    var d41='d';
    var d34='d111';
    var d42='d3';
    console.log(s.d.d3.d32);
    s.d.d3[d34]='d34';
    console.log(s);
    var a="s.d.d3.d111";
    a=a.split(".");
    i=1;
    if(a[0]!="s"){
        console.log("error!");
    }else{
        while(i<a.length){
            if(i==a.length-1&&s[a[i]]!=undefined){
                console.log(s[a[i]]);
                i+=1;
            }
            else if(s[a[i]]!=undefined){
                s=s[a[i]];
                i+=1;
            }
            else{
                console.log("break");
                break
            }
        }
    }