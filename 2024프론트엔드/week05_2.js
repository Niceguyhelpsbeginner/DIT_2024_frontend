// callback 함수 연습
let sayHello = function () {
    console.log("Hello there!");
}

let printDIt = function () {
 console.log('봉식이형');
}

function callFiveTimes(cbf) {
    for (let i = 0; i<5; i++){
        cbf();
    }
}


callFiveTimes(printDIt);
callFiveTimes(sayHello);