let arr = ['a','b','a','c','a','b','d'];
//请写一个函数，计算每个元素出现的次数，返回一个对象
// var res=arr.reduce(function (prev,cur) { 
//     if(prev[cur]==undefined){
//         prev[cur]=1;
//         return prev;
//     }else{
//         prev[cur]+=1;
//         return prev;
//     }
//  },{}
// )
// console.log(res);
// var res={};
// arr.forEach((item)=>{
//     if(res[item]==undefined){
//         res[item]=1;
//     }else{
//         res[item]+=1;
//     }
// })

// var a="dakldadkladla";
// a=a.slice(1,a.length-1);
// console.log(a);




console.log(arr.splice(3,1));
console.log(arr.slice(0,2));