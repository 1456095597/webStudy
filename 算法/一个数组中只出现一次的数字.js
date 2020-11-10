function FindNumsAppearOnce(array){
        var flag=-1;
        var tmp=0;
        array.forEach((item,index)=>{
            if(index==0){
                tmp=item;
            }else{
                tmp=tmp^item;
            }
        })
        return tmp;

    
}
var array=[2,4,3,6,3,2,5,5];
array.sort();
if(array.length==2){
    return array;
}else{
    while(array.length>=2){
        var array1=array.splice(parseInt(array.length/2));
        if(array[array.length-1]==array1[0]){
            array.push(array1[0]);
            array1.shift();
        }
        var s1=FindNumsAppearOnce(array);
        var s2=FindNumsAppearOnce(array1);
        var res=[];
        if(s1!=0&&s2!=0){
            res.push(s1);
            res.push(s2);
            console.log(res);
            return;
        }else if(s1==0){
            array=array1;
        }
    }
}

