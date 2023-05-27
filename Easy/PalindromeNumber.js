function isPalindrome(number){

    let stringNum = number.toString();
    let palindromeVerify = ''

    for (i = stringNum.length - 1; i >= 0; i--){
        palindromeVerify += stringNum[i]
    }
    return palindromeVerify == stringNum
}

console.log(isPalindrome(-55))

// 2º Resolution after checking some answers and understading my simpleness.

function isPalindrome2(num){

    return num >= 0
    ? parseInt(num.toString().split('').reverse().join('')) == parseInt(num.toString().split('').join(''))
    : false
}

console.log(isPalindrome2(1000021))


// url: https://leetcode.com/problems/palindrome-number/