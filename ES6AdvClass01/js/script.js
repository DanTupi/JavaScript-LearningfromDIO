function multiply(a, b){
    return a * b;
}

console.log('A regular multiply of 2 and 3: ' + multiply(2,3));

console.log('The error when only given one var: ' + multiply(2));

function multiplyES6(a, b = 1){
    return a * b;
} 

console.log('When given only one var the second will be automatically resolved : '
 + multiplyES6(2, undefined));

function randomNumber(){
    console.log('Generating a random number...');
    return Math.random() * 10;
}

function multiplyLazyEvaluation(a, b = randomNumber()) {
    return a * b;
}
console.log('When given only one var the second will be randomly assigned : '
 + multiplyLazyEvaluation(2, undefined));
 console.log('When given only one var the second will be randomly assigned : '
 + multiplyLazyEvaluation(2));
 console.log('When given the two, no random will be created : '
 + multiplyLazyEvaluation(2, 3));