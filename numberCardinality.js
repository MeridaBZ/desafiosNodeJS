function number_cardinality(n) {
    if (n % 10 === 0) {
        return "ZERO";
    }else if (n % 10 === 5) {
        return "FIVE";
    }else if (n % 2 === 0) {
        return "EVEN";
    }else {
        return "ODD";
    }
}

console.log(number_cardinality(100)); // "ZERO"
console.log(number_cardinality(88)); // "EVEN"
console.log(number_cardinality(155)); // "FIVE"
console.log(number_cardinality(99)); // "ODD"