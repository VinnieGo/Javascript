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
    console.log(res);
}

var p = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(12);
    }, 1000);
})

var p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(11);
    }, 2000);
});
//promise chain
p.then(double).then(increament).then(log).catch((err) => {
    console.log(err);
})

//Promise.all
Promise.all([p, p1]).then(sum).catch((err) => {
    console.log(err)
});


/*=====  End of Section comment block  ======*/