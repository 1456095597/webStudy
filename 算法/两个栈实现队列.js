// const instack=[];
// const outstack=[];
// function pushnode(node){
//     instack.push(node);
// }
// function popnode(){
//     if(outstack.length){
//         return outstack.pop();
//     }else{
//         while(instack.length){
//             outstack.push(instack.pop());
//         }
//         return outstack.pop();
//     }
// }

const inqueue=[4,5,6];
const outqueue=[];
function pushnode(node){
    if(inqueue.length){
        outqueue.push(node);
    }else{
        inqueue.push(node);
    }
}
function popnode(){
    if(inqueue.length){
        while(inqueue.length>1){
            outqueue.push(inqueue.shift())
        }
        return inqueue.shift();
    }else{
        while(outqueue.length>1){
            inqueue.push(outqueue.shift());
        }
        return outqueue.shift();
    }
}
console.log(popnode());
pushnode(7);
console.log(popnode());