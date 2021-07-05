// google
/** *******
* You are given a string s, a split is called good if you can split s into 2 non-empty strings p and q where its concatenation is equal to s and the number of distinct letters in p and q are the same.
* Return the number of good splits you can make in s.
*
* Example 1:
*
* Input: s = "aacaba"
* Output: 2
* Explanation: There are 5 ways to split "aacaba" and 2 of them are good. 
* ("a", "acaba") Left string and right string contains 1 and 3 different letters respectively.
* ("aa", "caba") Left string and right string contains 1 and 3 different letters respectively.
* ("aac", "aba") Left string and right string contains 2 and 2 different letters respectively (good split).
* ("aaca", "ba") Left string and right string contains 2 and 2 different letters respectively (good split).
* ("aacab", "a") Left string and right string contains 3 and 1 different letters respectively.
******** */

const distinctlettersFirstMap : Map<string, number> = new Map();
const distinctlettersSecondMap : Map<string, number> = new Map();

function numSplits(s: string): number {
    distinctlettersFirstMap.clear();
    distinctlettersSecondMap.clear();
    prepareDistinctLetterMap(s);
    let count = 0;
    for(let i = 0; i < s.length; i++) {
        let charecter = s.charAt(i);
        addDistinctlettersFirstMap(charecter);
        removeDistinctlettersSecondMap(charecter);
        if(distinctlettersFirstMap.size === distinctlettersSecondMap.size) {
            count++;
        }
    }    
    return count;
    
};

function prepareDistinctLetterMap(s: string) {
    for(let i=0; i < s.length; i++) {
        let charecter = s.charAt(i);
        addDistinctlettersSecondMap(charecter);
    }
}

function addDistinctlettersSecondMap(c: string) {
    let distinctLatterCount = distinctlettersSecondMap.get(c);
        if(distinctLatterCount) {
            distinctlettersSecondMap.set(c, distinctLatterCount+1);        
        } else {
            distinctlettersSecondMap.set(c, 1);    
        }
}

function addDistinctlettersFirstMap(c: string) {
    let distinctLatterCount = distinctlettersFirstMap.get(c);
        if(distinctLatterCount) {
            distinctlettersFirstMap.set(c, distinctLatterCount+1);        
        } else {
            distinctlettersFirstMap.set(c, 1);    
        }
}


function removeDistinctlettersSecondMap(c: string) {
    let distinctLatterCount = distinctlettersSecondMap.get(c);
        if(distinctLatterCount){
            if(distinctLatterCount === 1) {
                distinctlettersSecondMap.delete(c);       
            } else {
                distinctlettersSecondMap.set(c, distinctLatterCount - 1);    
            }
        }   
}


