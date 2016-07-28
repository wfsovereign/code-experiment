console.log('2016年04月12日23:52:52');
const process=require('process');

process.nextTick(function(){
    console.log('1');
});
// 1 5 2 6 3 7 4 8 
setImmediate(function(){
    console.log('2');
    process.nextTick(function(){
        console.log('3');
    });
    
    setImmediate(function(){
        console.log('4');
    });
});

process.nextTick(function(){
    console.log('5');
});

setImmediate(function(){
    console.log('6');
    process.nextTick(function(){
        console.log('7');
    });
    
    setImmediate(function(){
        console.log('8');
    });
});