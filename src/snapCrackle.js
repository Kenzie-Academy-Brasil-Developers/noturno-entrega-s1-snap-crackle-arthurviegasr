function snapCrackle(maxValue) {
    let snap = "";
    for (let num = 1; num <= maxValue; num++) {
        if (num % 2 !== 0 && num % 5 === 0) {
            snap += "SnapCrackle";
        }
        else if (num % 5 === 0) {
            snap += "Crackle";
        }
        else if (num % 2 !== 0) {
            snap += "Snap";
        }
        else {
            snap += num;
        }
        if (num !== maxValue) {
            snap += ", "
        }
    }
    return snap;
}
console.log(snapCrackle());

function isPrime(num) {
    for (let i = 2; i < num; i++){
        if (num % i === 0) {
            return false;
        }
    }
    return num > 1;
}

function snapCracklePrime(maxValue) {
    let snap = "";
    for (let num = 1; num <= maxValue; num++) {
        if (num % 2 !== 0 && num % 5 === 0) {
            snap += "SnapCrackle";
        }
        else if (num % 5 === 0) {
            snap += "Crackle";
        }
        else if (num % 2 !== 0) {
            snap += "Snap";
        }
        else if (isPrime(num)){
            snap += "Prime";
        }
        else {
            snap += num;
        }
        if (num !== maxValue) {
                snap += ", "
        }

    }
    return snap;
}
console.log(snapCrackle());
