// Google
/******** *
* Given a rows x cols screen and a sentence represented as a list of strings, return the number of times the given sentence can be fitted on the screen.
* The order of words in the sentence must remain unchanged, and a word cannot be split into two lines. A single space must separate two consecutive words in a line.
* Input: sentence = ["i","had","apple","pie"], rows = 4, cols = 5
* Output: 1
* Explanation:
* i-had
* apple
* pie-i
* had--
* The character '-' signifies an empty space on the screen.
* *******/
function wordsTyping(sentence: string[], rows: number, cols: number): number {
    let SEN_LENGTH = sentence.length;
    let i = 0;
    let count = 0;
    let r = 0;
    let c = 0;
    
    while(r < rows) {
        let currentSentence = sentence[i].length;
        if(c != 0) {
            currentSentence++;        
        }
        if(currentSentence <= (cols - c)) {
            c += currentSentence;
            if((i+1) === SEN_LENGTH) {
                count++;
                i = 0;
            } else {
                i++;
            }
        } else {
            c = 0;
            r++;
        }
    }
    return count;
};
