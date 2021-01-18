function oldSum(a, b)
{
    var a = prompt("Type a Number");
    var b = prompt("Now a second number");
    var c = Number(a) + Number(b);
    document.getElementById("ResultOldSum").innerHTML = "Result: " + c;
}

function sumArrow(a, b)
{
    var a = prompt("Type a Number");
    var b = prompt("Now a second number");
    var sum = (a , b) => Number(a) + Number(b);
    document.getElementById("ResultArrow").innerHTML = "Result: " + sum(a, b);
}

function objectArrow()
{
    var createObj = () => ({ first: 123});
    document.getElementById("newObject").innerHTML =  createObj().first;
}


var obj = { 
    showContext: function showContext(){
        this.log('test');

        setTimeout(
            function(){
                this.log('after 1000ms');
            }.bind(this), 1000
        )
    },
    log: function log(value){
        console.log(value);
    }
};

obj.showContext();

var objArrow = {
    showContext: function showContext(){
        setTimeout(() => {
            this.log('after more 1000ms');
        }, 2000);
    },
    log: function log(value) {
        console.log(value);
    }
};

objArrow.showContext();
