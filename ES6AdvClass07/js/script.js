//Async and aWait

//using the "async" it will automatically generated as Promise
const simpleFunc = async () => {
    //throw new Error('error!');
    return 123;
}

console.log(simpleFunc());

simpleFunc().then(data => {
    console.log(data);
}).catch(err => {
    console.log(err);
});

//now using async and await
const asyncTimer = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(789);
    }, 1000);
});

const simpleFunc2 = async () => {
    const data = await asyncTimer()
    return data;
};

simpleFunc2().then(data => {
    console.log(data);
}).catch(err => {
    console.log(err);
});