console.time('big sort');
let arr = [];
for(let i = 1; i < 100000; i++){
    for(let j = 10000; j < 100000; j--)
        arr.push(i * j)
}
arr.sort()
console.timeEnd('big sort')