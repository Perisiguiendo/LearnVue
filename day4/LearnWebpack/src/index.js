const {
    jump
} = require('./js/jump');
const {
    sumThree,
    sumN,
    sumTwo
} = require('./js/mathUtils');

console.log(sumN(1, 2, 3, 4, 5, 6, 7));
console.log(sumThree(2, 3, 9));
console.log(jump());
console.log(sumTwo(2,112233));

// require('./css/index.css')

require('./less/index.less')

import Vue from 'vue'

new Vue({
    el: '#app',
    template: ``,
    data: {
        message: 'hello world'
    }
})