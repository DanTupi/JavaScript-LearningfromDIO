//the old way to do callbacks:

function doSomething(callback) {
    setTimeout(function(){
         callback('First data');
    }, 1000);
}

function doOtherThing(callback) {
    setTimeout(function(){
         callback('Second data');
    }, 1000);
}

function doAll() {
    try {
        doSomething(function(data){
            var processedData = data.split('');
            try {
                doOtherThing(function(data2){
                    var processedData2 = data2.split('');

                    try { 
                        setTimeout(function() {
                            console.log(processedData, processedData2);    
                        }, 1000);
                    } catch(err) {
                    //handle error
                    }
                });
            } catch(err) {
            //handle error
            }
        });
    } catch (err) {
        //handle error
    }
}

doAll();


// Using Promises

const doSomethingPromise = () => new Promise((resolve, reject) => {
    setTimeout(function(){
        resolve('First data');
   }, 1500);
});

const doOtherThingPromise = () => new Promise((resolve, reject) => {
    setTimeout(function(){
        resolve('Second data');
   }, 1000);
});

const doSomethingPromiseWithError = new Promise((resolve, reject) => {
   throw new Error('Something went wrong');
    setTimeout(function(){
        resolve('First data');
   }, 1000);
});

//Pending
console.log(doSomethingPromise());

//Fulfilled
doSomethingPromise().then(data => console.log(data));

//Rejected but now known
doSomethingPromiseWithError.then(data => console.log(data));

//Catching the error
doSomethingPromiseWithError.then(data => console.log(data))
 .catch(error => console.log(error));

//doing in sequence and catching the error, if first crashes the chain will stop to work.
doSomethingPromise()
    .then(data => { 
        console.log(data); return doOtherThingPromise();
    })
    .then(data2 => console.log(data2))
    .catch(error => console.log('Error:', error));

// doing the same thing on lines 1 through 40:
//the first  data will be sent before the second data on line 82 because how javascript access the callings
doSomethingPromise()
    .then(data => { 
        console.log(data.split('')); return doOtherThingPromise();
    })
    .then(data2 => console.log(data2.split('')));

//all two in the same time (again, will occur before the line 82)
Promise.all([doSomethingPromise(), doOtherThingPromise()]).then(data => {
    console.log(data[0].split(''));
    console.log(data[1].split(''));
});

//with .race we will see the one who finish (or break) first
Promise.race([doSomethingPromise(), doOtherThingPromise()]).then(data => {
    console.log(data);
})