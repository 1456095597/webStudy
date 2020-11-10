var array=[[1,2,3],[4,5,6]];
var target=9;
var x=array[0].length;
var y=array.length;
var i=0,j=0,flag=0;
while(i<y){
    while(j<x){
        if(flag==1){
            break;
        }
        if(array[i][j]==target){
            flag=1;
        }
        j+=1;
    }
    if(flag==1){
        break;
    }
    j=0;
    i+=1;
}
if(flag==0){
    console.log("false");
}else{
    console.log("true");
}
