const fizzBuzz = (n) => {
    let array = [];

    for (let i = 1; i <= n; i++){
        i % 3 == 0 && i % 5 == 0 ? array.push('FizzBuzz')
        : (i % 3 == 0) ? array.push('Fizz')
        : (i % 5 == 0) ? array.push('Buzz')
        : array.push(i.toString())   
    }
    return array
}

console.log(fizzBuzz(5))