/** ************

* Given the root of a binary tree, each node in the tree has a distinct value.
* After deleting all nodes with a value in to_delete, we are left with a forest (a disjoint union of trees).
* Return the roots of the trees in the remaining forest. You may return the result in any order.
* Example 1:
*
* Input: root = [1,2,3,4,5,6,7], to_delete = [3,5]
* Output: [[1,2,null,4],[6],[7]]
* Example 2:

* Input: root = [1,2,4,null,3], to_delete = [3]
* Output: [[1,2,4]]
 

Constraints:

The number of nodes in the given tree is at most 1000.
Each node has a distinct value between 1 and 1000.
to_delete.length <= 1000
to_delete contains distinct values between 1 and 1000.
 ***** */
 
 /**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function delNodes(root: TreeNode | null, to_delete: number[]): Array<TreeNode | null> {
    let forestQueue: Array<TreeNode>  = [];
    let forestList: Array<TreeNode> = [];
    let toDeleteSet = new Set(to_delete);
    if(!root) {return null; }
    forestQueue.push(root);
    while(forestQueue.length > 0) {
        let currentNode = forestQueue.shift();
        if(!toDeleteSet.has(currentNode.val)) {
            forestList.push(currentNode)        
        }
        delNodeTraverse(currentNode, forestQueue, toDeleteSet);
    }
    return forestList.length ? forestList : null;
};

function delNodeTraverse(node: TreeNode | null, forestQueue: Array<TreeNode>, toDeleteSet: Set<number>) {
    if(!node) {return null;}
    if(toDeleteSet.has(node.val)) {
        if(node.left) { forestQueue.push(node.left)};
        if(node.right) { forestQueue.push(node.right)};
        return null;
    } else {
        node.left = delNodeTraverse(node.left, forestQueue, toDeleteSet);
        node.right = delNodeTraverse(node.right, forestQueue, toDeleteSet);
        return node;
    }
    
}
