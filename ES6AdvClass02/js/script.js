/*the old way
var prop1 = 'A Test';

var obj = {
    prop1: prop1
};

console.log(obj);
*/

/* we can use an ES6 shorthand 
var prop1 = 'A Test';

var obj = {
    prop1
};
console.log(obj);
*/

console.log('we can use an ES6 shorthand to call a function directly in a obj')  
var obj = {
    sum(a, b){
        return a + b;
    }
};
console.log(obj);
console.log(obj.sum(1,5));

// the old way
var propName = 'test';

var obj = {};
obj[propName + 'concatenate'] = 'prop value';

console.log(obj);

//with ES6
var objES6 = {
    [propName + 'concatenate']: 'prop value'
};

console.log(objES6);

var obj2 ={
    sleep:function(){
        setTimeout(()=>{console.log(this);}, 1000);
    }
}
obj2.sleep();