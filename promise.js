/*=============================================
=            Promise            =
=============================================*/
'use strict'

function double(a) {
    return a * 2;
}

function increament(a) {
    return a + 1;
}

function log(value) {
    console.log(value);
}

function sum(array) {
    var res = array.reduce((prev, cur, index, array) => {
        return prev + cur;
    });
}

var p = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(12);
    }, 500);
})

var p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(11);
    }, 1000);
});
//promise chain
p.then(double).then(increament).then(log).catch((err) => {
    console.log(err);
})

//Promise.all
var startTime = Date.now();
Promise.all([p, p1]).then(sum).then(() => {
    // console.log(Date.now() - startTime);
}).catch((err) => {
    console.log(err)
});


var winnerPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('this is winner');
        resolve('this is winner');
    }, 10);
});

var loserPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('this is loser');
        resolve('this is loser');
    }, 2000);
});

Promise.race([winnerPromise, loserPromise]).then((value) => {
    console.log(value);
});