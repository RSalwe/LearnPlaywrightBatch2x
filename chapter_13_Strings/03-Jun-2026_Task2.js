//Check whether 2 words are anagram or not
// let str1 = "was";
// let str2 = "saw";
function anagram_Check(str1, str2) {
    if (str1.length === str2.length) {
        sorted_str1 = str1.split('').sort().join('');
        sorted_str2 = str2.split('').sort().join('');
        for (i = 0; i < sorted_str1.length; i++) {
            if (sorted_str1[i] === sorted_str2[i]) {
            }
        }
        console.log(`${str1} and ${str2} are anagrams`);
    } else {
        console.log(`${str1} and ${str2} are NOT anagrams`);

    }
}

anagram_Check("Are", "Ear");
