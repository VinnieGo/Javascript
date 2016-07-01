'use strict';

var arr = [1, 4, 5];
var obj = {
    name: 'linhao',
    age: 20
}

for (let a of Object.keys(obj)) {
    console.log(obj[a]);
}