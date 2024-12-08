let random = function () {
    console.log(parseInt(Math.random()*10)*10)
}

let key_random = setInterval(random,100);

let key_random_clear = clearInterval(random);