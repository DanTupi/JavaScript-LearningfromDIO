//the old way:
function sumOld(a, b){
    var value = 0;

    for(var i=0; i < arguments.length; i++) {
        value += arguments[i]
    }
    return value;
}

console.log(sumOld(5, 7, 2, 1));

//using rest operator
function sumRest(...args){
    return args.reduce((acc, value) => acc + value, 0);
}

console.log(sumRest(5, 7, 2, 2));

const multiply = (...args) => args.reduce((acc, value) => acc * value, 1);

const sumRest2 = (...rest) => {
    return multiply.apply(undefined, rest);
};

console.log(sumRest2(5, 7, 2, 3))

const sumSpreadOp = (...rest) => {
    return multiply(...rest);
};

console.log(sumSpreadOp(5, 7, 2, 3))

//spread op can be used in strings, arrays, literal object  and iterable objects

const str = 'String 1';
const arr = [7, 8, 9];

function logArgs(...args) {
    console.log(args);
}

logArgs(...str);
logArgs(...arr);

const arr2 = arr.concat([11, 12, 13]);
const arr2Spread = [...arr, 11, 12, 13];

console.log(arr2);
console.log(arr2Spread);

const obj = {
    test: 123,
    another: 'second'
};

const obj2 = {
    ...obj,
    test2: 'third'
};

console.log(obj2);

const objMerged = {
    ...obj2,
    ...obj
};

console.log(objMerged);

const obj3 = { ...obj };

obj3.test = 777;
console.log(obj);