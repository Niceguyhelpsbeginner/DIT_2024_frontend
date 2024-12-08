let sumArray = function (arr) {
    if(typeof(arr) !== typeof({})){
        console.log("배열이 아닙니다.");
        return NaN;
    }
    if(isAllNumber(arr) == false){
        console.log("sumArray: 오류: 합계를 계산할 수 있는 배열이 아닙니다.");
        return;
    }

    sum = 0;
    for(let i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    return sum;
}

let isAllNumber = function(ar) {
    for(item of ar){x   
        if(typeof item != "number"){
            return false;
        }
    }
    return true
}

let max = (a,b) => {
    return(a>b) ? a:b;
}

let biggest = (a,b,c) => {
    if(a>b){
        if(a>c)
            return a;
        else
            return c;
    }else
        return b;
}

let maxValue = (...numbers) => {
    arr = [numbers];
    biggest = arr[0];
    for(item of arr){
        if(biggest < item){
            biggest = item;
        }
    }
    return biggest;
}

console.log(maxValue(13,160000,34,5,100,50,3454));