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
    
    //we need two pointers, rabbit, and turtle
    // both will point to head initially
    // we jump start the rabbit until it reaches nth node from head
    // once it reaches there, we start turtle too
    // now both will increment 1 node at a time
    // rabbit will be exactly n nodes ahead of turtle every time
    
    //so when rabbit reaches the end, the turtle will be n nodes before the end
    
    // THIS IS THE NODE THAT WE WANT TO DELETE
    
    
    // How do you delete a node?
    
    // copy the next node's value to the node-to-be-deleted
    // just replace its next with its next node's next
    // node1.next == node2.next.next
    // now node 2 is deleted as node1 now points to node3 instead
    // this technically doesn't delete the said node, but programmatically it has the same effect.
    
    
    // NOW what happens when the number of nodes in the list is the same as n? // EDGE CASE
    
    
    
    let rabbit = head;
    let turtle = head
    
    let counter = 0;
    
    for(counter;counter<n;counter++){
        
        rabbit = rabbit.next
    }
    

    // if at this point the rabbit is pointing at the last node,
    // it means n is same as the length of the list
    // so we want to delete the 1st node or head
    
    if(!rabbit){
        // console.log("same length")
        return head.next
    
    }else{
    
    while(rabbit.next){
        rabbit = rabbit.next
        turtle = turtle.next
    }
    

    //node to be deleted

    turtle.next = turtle.next.next
    
    // this is how you delete a node, here the next node of turtle is being deleted
    // essentially the pointer to the next node is being replace with the next next node
    // so you can't traverse to that node anymore, nuking it from the list
    
      return head  
    
    
    }
    
    
};
