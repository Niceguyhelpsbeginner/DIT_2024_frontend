let ar = [17, 34, 92, 58, 76, 11, 43, 89];


// 배열 ar에서 원소를 하나씩 꺼낸서 홀수 짝수를 판별 결과에 따라 해당 배열에 넣는다


let odd = [];
let even = [];

for(let item of ar){
    if(item%2== 1){
        odd.push(item);
    }
    else {
        even.push(item);
    }
}

console.log(`홀수 ${odd}`);
console.log(`짝수 ${even}`);