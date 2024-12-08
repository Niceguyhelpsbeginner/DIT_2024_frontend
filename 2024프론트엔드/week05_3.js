// callback 함수 연습


function helloMaker(host){
    let sayHello = function (guest) {
        console.log(`${guest}씨 반갑습니다. 저는 ${host}입니다.`);
    }
    return sayHello;
}


let hong = helloMaker("김성진");

hong("이순신");