var a=[6,-3,-2,7,-15,1,2];
var b=[];
var sum=-999;
a.forEach((item,index)=>{
    if(index==0){
        b.push(item);
        sum=item;
    }else{
        if(b[index-1]>0){
            b.push(b[index-1]+item);
        }else{
            b.push(item);
        }
        if(b[index]>sum){
            sum=b[index];
        }
    }
    
})