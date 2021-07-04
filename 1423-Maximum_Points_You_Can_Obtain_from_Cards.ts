// Google
/**********
* There are several cards arranged in a row, and each card has an associated number of points. The points are given in the integer array cardPoints.
*
* In one step, you can take one card from the beginning or from the end of the row. You have to take exactly k cards.
*
* Your score is the sum of the points of the cards you have taken.
*
* Given the integer array cardPoints and the integer k, return the maximum score you can obtain.
* Input: cardPoints = [1,2,3,4,5,6,1], k = 3
* Output: 12
* Explanation: After the first step, your score will always be 1. However, choosing the rightmost card first will maximize your total score. The optimal strategy is to take the three cards on the right, giving a final score of 1 + 6 + 5 = 12.ˇ

*/

function maxScore(cardPoints: number[], k: number): number {
    
    const CARD_LENGTH = cardPoints.length;
    if(CARD_LENGTH === 1) {
        return cardPoints[0];
    }
    if(k === CARD_LENGTH) {
        return getSumOfArray(cardPoints, 0, CARD_LENGTH - 1);
    }
    if(k === 1) {
        return cardPoints[0] > cardPoints[CARD_LENGTH - 1] ? cardPoints[0] : cardPoints[CARD_LENGTH - 1];    
    }
    
    let maxValue = getSumOfArray(cardPoints, 0, k-1);
    let currentWindowSum = maxValue;
    let reduceIndex = k-1;
    let increaseIndex = CARD_LENGTH - 1;
    while(reduceIndex >= 0) {
        currentWindowSum = currentWindowSum - cardPoints[reduceIndex] + cardPoints[increaseIndex];
        if(maxValue < currentWindowSum) {
            maxValue =  currentWindowSum;   
        }
        reduceIndex--;
        increaseIndex--;
    }
    return maxValue;
};

function getSumOfArray(cardPoints: number[], startIndex: number, endIndex: number) {
    let sum = 0;
    for(let i = startIndex; i <= endIndex; i++) {
        sum += cardPoints[i];   
    }
    return sum;
}
