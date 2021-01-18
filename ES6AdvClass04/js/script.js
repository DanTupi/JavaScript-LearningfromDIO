var arr = ['blue', 'green', 'pink'];
var arratributes = [{city: 'SP', country: 'BR'}];

var blue = arr[0];
var green = arr[1];
var pink = arr[2];

var obj = {
    test: '123',
    props: { 
        foo: 'bar',
        array: ['12', '345']
    }
};


console.log(green);
var test = obj.test;
var foo = obj.props.foo;
var array1 = obj.props.array[0];
var city = arratributes[0].city;

// Destructuring Assignment

var [blue2, green2, pink2] = ['blue', 'green', 'pink'];  

console.log(green, green2);

var { test: test2 } = obj;
var { props: { foo: foo2 } } = obj;
var { props: { array: [arrayDest1, arrayDest2] } } = obj; 
var [ { city: cityDestr}] = arratributes;

console.log(test);
console.log(test2);
test2 = '777';
console.log(test2);
console.log(obj);

console.log(foo);
console.log(foo2);

console.log(array1);
console.log(arrayDest1);

console.log(city);
console.log(cityDestr);

//Destr to functions

function sum(arrnumber) {
    return arrnumber[0] + arrnumber [1];
}

console.log(sum([12, 20]));

//with default values

function sumDest([a, b] = [0 , 0]) {
    return a + b;
}

console.log(sumDest([12, 20]));