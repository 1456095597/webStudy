class subject{
    constructor(){
        this.subs=[];
    }
    add(sub){
        this.subs.push(sub);
    }
    unsub(sub){
        if(this.subs.indexOf(sub)!=-1){
            this.subs.splice(this.subs.indexOf(sub),1);
        }
    }
    fire(){
        this.subs.forEach(sub=>{
            sub.notify();
        })
    }

}
class observer{
    constructor(data){
        this.data=data;
    }
    notify(){
        console.log(this.data);
    }
}

var subjetct=new subject();
var s1=new observer("dad");
var s2=new observer("dakdla");
subjetct.add(s1);
subjetct.add(s2);
subjetct.fire();
