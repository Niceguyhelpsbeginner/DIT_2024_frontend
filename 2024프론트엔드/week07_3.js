class Product {
    constructor(name,price) {
        this.name = name;
        this.price = price;
    }
    // 객체들이 공유할 메소드 정의
    intro() {
        console.log(`[${this.name}]의 가격은 [${this.price}]입니다.`)
    }
}


class Menu{

    constructor(title,price,count){
        this.title = title;
        this.price = price;
        this.count = count;
        this.rating;
    }

    intro() {
        console.log(`${this.name}: ${this.price}원 재고량 ${this.count}`);
    }
    order(ordered_portion) {
        this.count -= ordered_portion;
        total_price = this.price * ordered_portion;
        console.log(`${this.name}, ${this.ordered_portion}개에: ${total_price}원입니다. 재고량 ${this.count}`);
        
    }
    consolelogRating(){
        console.log(rating);
    }

}