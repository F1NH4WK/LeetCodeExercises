function romanToInt(romanNum){

    const romanValues = new Map([
        ['I', 1],
        ['V', 5],
        ['X', 10],
        ['L', 50],
        ['C', 100],
        ['D', 500],
        ['M', 1000]
    ])

    let number = 0

    romanNum.split('').map( symbol => {
            return parseInt(romanValues.get(symbol));
        }
    )
    .reduceRight( (prevI, i) => {
        i < prevI
        ? number -= i
        : number += i
        
        return i
        }, 0
    );

    return number
}

console.log(romanToInt("MCMXCIV"))

// url: https://leetcode.com/problems/roman-to-integer/