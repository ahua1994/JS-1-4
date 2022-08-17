function changeTemp(temp, type) {
    if (type == "celsius") {
        return (9 * temp + 32 * 5) / 5;
    } else if (type == "fahrenheit") {
        return (5 * (temp - 32)) / 9;
    }
}

console.log(changeTemp(85, "fahrenheit"));
console.log(changeTemp(15, "celsius"));
