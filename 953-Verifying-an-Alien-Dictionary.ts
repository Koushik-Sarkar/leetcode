// facebook

/** *****

In an alien language, surprisingly they also use english lowercase letters, but possibly in a different order. The order of the alphabet is some permutation of lowercase letters.

Given a sequence of words written in the alien language, and the order of the alphabet, return true if and only if the given words are sorted lexicographicaly in this alien language.

 

Example 1:

Input: words = ["hello","leetcode"], order = "hlabcdefgijkmnopqrstuvwxyz"
Output: true
Explanation: As 'h' comes before 'l' in this language, then the sequence is sorted.
Example 2:

Input: words = ["word","world","row"], order = "worldabcefghijkmnpqstuvxyz"
Output: false
Explanation: As 'd' comes after 'l' in this language, then words[0] > words[1], hence the sequence is unsorted.
Example 3:

Input: words = ["apple","app"], order = "abcdefghijklmnopqrstuvwxyz"
Output: false
Explanation: The first three characters "app" match, and the second string is shorter (in size.) According to lexicographical rules "apple" > "app", because 'l' > '∅', where '∅' is defined as the blank character which is less than any other character (More info).


*/

function isAlienSorted(words: string[], order: string): boolean {
    const orderMap: Map<string, number> = new Map();
    for(let i=0; i< order.length; i++) {
        orderMap.set(order.charAt(i), i+1);    
    }
    for(let j = 0; j < words.length - 1; j++) {
        if(!isLexiSorted(words[j], words[j+1], orderMap)) {
            return false;
        }         
    }
    return true;
};

function isLexiSorted(word1: string, word2: string, orderMap: Map<string, number>) {
    let i = 0;
    while(i < word1.length && i < word2.length) {
        let word1Char = word1.charAt(i);
        let word2Char = word2.charAt(i);
        if(word1Char === word2Char) {
            i++;
        } else {
            if(orderMap.get(word1Char) < orderMap.get(word2Char)) {
                return true;
            } else {
                return false;
            }   
        } 
    }
    if(word1.length === word2.length) {
            return true;
        } else if(word1.length < word2.length) {
            return true;
        } else {
            return false;
        }
}
