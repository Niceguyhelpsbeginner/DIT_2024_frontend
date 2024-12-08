const jin = document.querySelector("#jin");
const cart = document.querySelector("#cart");
const history = document.querySelector("#history");
jin.addEventListener("click", function () {
    console.log("클릭됨");
})

jin.addEventListener("dragstart", function() {
    console.log("dragged!");
})

cart.addEventListener("dragover", (e) => {
    e.preventDefault(); // 드롭 가능하도록 설정
    console.log("드래그 오버 중...");
});
cart.addEventListener("drop",  (e) => {
    e.preventDefault();
    console.log("dropped!")
    history.innerHTML = "항만물류";
})