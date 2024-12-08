let ar = [23,43,7,34,20,54,67,33,32];
let sum = 0;
let count = 0;
while(sum <= 100){
    temp = ar.shift();
    console.log(`총 ${count}개가 꺼내졌고 합계는  ${sum} 입니다.`);
    sum += temp;
    count += 1;
}
ar.unshift(temp);
console.log(ar);