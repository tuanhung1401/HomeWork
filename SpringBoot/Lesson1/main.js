//Ex1
const calculateFactorial = (number) => {
    let factorial = 1;
    for (let i = 1; i <= number; i++) {
        factorial *= i;
    }
    return factorial;
}

console.log(calculateFactorial(5));

//Ex2
const revereString = (inputString) => {
    let revereString = "";
    for (let i = inputString.length - 1; i >= 0; i--) {
        revereString += inputString[i];
    }
    return revereString;
}

let inputString = 'hello';
console.log(revereString(inputString));

//Ex3
const translate = (language) => {
    let message = "";
    switch (language) {
        case 'VN':
            message = 'Xin chào';
            break;
        case 'EN':
            message = 'Hello';
            break;
        case 'FR':
            message = 'Bonjour';
            break;
        case 'GE':
            message = 'Hallo';
            break;
        case 'IT':
            message = 'Ciao';
            break;
        default:
            message = 'Xin chào';
            break;
    }
    return message;
}

console.log(translate('VN'));
console.log(translate('IT'));
console.log(translate('GE'));

//Ex4
const subString = (inputString) => {
    if(inputString.length <= 15){
        return inputString;
    }
    let sub = "";
    for(let i =0; i < 10; i++){
        sub += inputString[i];
    }
    sub += "...";
    return sub;
}
console.log(subString("xinchaocacbandenvoiTechmaster")); 