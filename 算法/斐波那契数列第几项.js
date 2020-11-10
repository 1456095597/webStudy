function fibo(n){
    if(n==0){
        console.log(0);
    }else if(n==1){
        console.log(1);
    }else{
        var a=1;
        var b=1;
        var tmp=0;
        var index=2;
        while(a+b!=n){                                                                                                                                                                                                                                                                                                     
            if(a+b>n){
                break
            };
            tmp=a;
            a=b;
            b=tmp+b;
            index+=1;
        }
        console.log(index+1);
    }
    

}
fibo(3);