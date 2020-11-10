for(let i=0;i<5;i++){
    var timer=setTimeout(function(){
        console.log(i)
        if(i==3){
            clearTimeout(timer);
            console.log("退出");
        }
    },i*1000);

}