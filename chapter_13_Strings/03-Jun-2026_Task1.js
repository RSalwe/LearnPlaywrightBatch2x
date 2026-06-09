//Check whether word is Palindromes or not
function checkPalindrome(str) {

    //creating an empty var to store reverse string
    var reversedStr = "";
    //reversing the entered string
    for (let i = str.length - 1; i >= 0; i--) {
        reversedStr += str[i];

    }
    //optional to print reversed string
    console.log("Reversed: " + reversedStr);

    //comparing the given and reversed string
    const match = reversedStr.toLowerCase() === str.toLowerCase();
    console.log(match);
    return match;
}
checkPalindrome("Madam");
checkPalindrome("pramod");
checkPalindrome("racecar");
