// for(let i=0;i<5;i++){
//     setTimeout(function(){
//         console.log(i);
//     },i*1000)
// };

for(let i=0;i<5;i++){
    var set=setInterval(function(){
        console.log(i);
    },1000)
    setTimeout(() => {
        clearInterval(set);
    }, 4000
    );
    
   
};
