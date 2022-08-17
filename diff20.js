function diff20(num) {
    if (num < 20) {
        return `20 - ${num} = ${20-num}`;
    } else if (num > 20) {
        return `(${num} - 20) * 2 = ${(num-20)*2}`;
    } else {
        return "the number is 20";
    }
}

console.log(diff20(3))
console.log(diff20(65))