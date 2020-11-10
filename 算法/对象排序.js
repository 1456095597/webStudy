// var items=[ {id:1,name:"jack1"},{id:11,name:"tom11"},{id:7,name:"jack7"},{id:2,name:"jack2"},{id:9,name:"jack9"}];
// function sortId(item1,item2){
//     return item2.id-item1.id;
// }
// items.sort(sortId);
// console.log(items);
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let a = null;
let b = null;
rl.question('你如何看待 Node.js 中文网？', (answer) => {
    // TODO：将答案记录在数据库中。
    console.log(`感谢您的宝贵意见：${answer}`);
    rl.close();
  });


// rl.on('line', line => {
//     const [i1, i2] = line.split(' ').map(i => Number(i));
//     a = i1;
//     b = i2;
// });

// rl.on('close', () => {
//     // 这个callback里就拿到了输入的a和b，下面进行计算
//     const ans = a + b;
//     // 输出结果用console直接打出，有些题目是多组数据，需要额外输出 \n
//     console.log(ans)
// });

   