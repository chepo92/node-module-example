// import {
//     atan2, chain, derivative, e, evaluate, log, pi, pow, round, sqrt
//   } from 'mathjs'

const { pow, derivative, round, e } = require('mathjs')

var rect = require("./module");
rect.Rect(5, 2);
rect.Rect(-1, 0);
rect.Rect(12, 4);
rect.Rect(8, 6);
rect.Rect(3, 4);

console.log(pow([[-1, 2], [3, 1]], 2));
      // [[7, 0], [0, 7]]
      
// console.log(derivative('x^2 + x', 'x'));
     // 2 * x + 1

console.log(round(e, 3));
     