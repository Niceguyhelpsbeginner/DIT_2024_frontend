function rangeRandom(min,max){
    return Math.floor(Math.random()*(max-min) + min);
}

let fruits = ["사과", "배", "포도", "샤인머스캣", "감", "키위", "감"];

let fruitBox = [];

let farmer = function () {  
    let nextFruitIndex = rangeRandom(0,fruits.length);
    console.log(`[${fruits[nextFruitIndex]}]를 생성함`);
    fruitBox.push(fruits[nextFruitIndex]);
}

let intervalTimer = setInterval(farmer,rangeRandom(1,5)*100);

let clear_interver_key = function() {
    console.log("손님들은 " + fruitBox + "들을 샀습니다.");
    console.log("과일판매 끝!");
    clearInterval(intervalTimer);
}
let random_time = rangeRandom(4000,10000);
setTimeout(clear_interver_key,random_time);
