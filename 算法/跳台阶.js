function steps(x){
    if(x==1){
        return 1;
    }else {
        return 2*steps(x-1);
    }
}

// f(1)=1
// f(2)=f(2-1)+f(2-2)
// f(3)=f(3-1)+f(3-2)+f(3-3)
// f(n)=f(n-1)+f(n-2)+...+f(n-(n))=f(0)+...+f(n-1)
// f(n-1)=f(0)+...+f(n-2)
// f(n)=2*f(n-1)
