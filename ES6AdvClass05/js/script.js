// Symbols (an unique identifiers, her value is not a string, a number, nothing)

const uniqueId = Symbol('Hello');
const uniqueId2 = Symbol('Hello');

console.log(uniqueId);
console.log(uniqueId2);
console.log(uniqueId === uniqueId2);

//Well known symbols:
/*
Symbol.iterator
Symbol.split
Symbol.toStringTag
*/
const arr = [1, 2, 3, 4, 5];

const it = arr[Symbol.iterator]();

while (true) {
    let { value, done} = it.next();
    if (done){
        break;
    }
    console.log(value);
}
console.log('now, if do next again will show "value undefined" and "done: true"');
console.log(it.next());


for (let value of arr) {
    console.log(value);
}


const obj = {
    values: [9, 8, 7],
    [Symbol.iterator](){
        let i = 0;

        return {
            next: () => {
                i++;

                return {
                    value: this.values[i -1],
                    done: i > this.values.length 
                };
            }
        };
    }
};

const it2 = obj[Symbol.iterator] ();

console.log(it2.next());
console.log(it2.next());
console.log(it2.next());
console.log(it2.next());

for (let value of obj) {
    console.log(value);
}

// Generators

function hello() {
    console.log('Hello');
    console.log('from');
    console.log('a function');
}

hello();

function* helloGenerator() {
    console.log('Hello');
    yield 1;

    console.log('from');
    const value = yield 2;

    console.log(value);
}

const it3 = helloGenerator();

console.log(it3.next());
console.log(it3.next());
console.log(it3.next('outside'));


//Generator and Symbol to objects, much more simple than line 36~63
const objGenerator = {
    values: [9, 8, 7],
    *[Symbol.iterator]() {
        for (var i = 0; i < this.values.length; i++){
            yield this.values[i];
        }
    }
};

for (let value of objGenerator) {
    console.log(value);
}