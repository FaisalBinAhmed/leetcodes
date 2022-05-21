/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */

// https://leetcode.com/explore/featured/card/top-interview-questions-easy/93/linked-list/603/


var removeNthFromEnd = function(head, n) {
    
    // we need two pointers, rabbit, and turtle
    // both will point to head initially
    // we jump start the rabbit until it reaches nth node from head
    // once it reaches there, we start turtle too
    // now both will increment 1 node at a time
    // rabbit will be exactly n nodes ahead of turtle every time
    
    // so when rabbit reaches the end, the turtle will be n nodes before the end
    
    // THIS IS THE NODE THAT WE WANT TO DELETE
    
    
    // How do you delete a node?
    
    // copy the next node's value to the node-to-be-deleted
    // this technically doesn't delete the said node, but programmatically it has the same effect.
    
    
    // NOW what happens when the number of nodes in the list is the same as n? // EDGE CASE
    
    
    
    
};
