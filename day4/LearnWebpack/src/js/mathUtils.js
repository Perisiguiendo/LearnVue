function sumThree(sum1, sum2, sum3) {
    return sum1 + sum2 + sum3;
}

function sumN(...num) {
    let sum = 10;
    return num.map(item => item + sum);
}

function sumTwo(num1, num2) {
    return num1 + num2;
}

module.exports = {
    sumThree,
    sumN,
    sumTwo
}