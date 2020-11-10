function sort(s){
    if(s.length<=1){
        return s;
    }else{
        var left=[];
        var right=[];
        var mid=parseInt(s.length/2);
        var miditem=s.splice(mid,1);
        s.forEach(element => {
            if(element<=miditem[0]){
                left.push(element);
            }else{
                right.push(element);
            }
        });
        console.log(sort(left).concat(miditem.concat(sort(right))));
        return sort(left).concat(miditem.concat(sort(right)))
    }
}
var a=[2,1,3,4,5];
sort(a);
