var s=[321,3,31];
function sortnum(num1,num2){
    var s1=num1.toString();
    var s2=num2.toString();
    if (parseInt(s1+s2)>parseInt(s2+s1)){
        return 1;
    }else{
        return -1;
    }
}
s.sort(sortnum);
s=parseInt(s.join("")) ;
console.log(s);

