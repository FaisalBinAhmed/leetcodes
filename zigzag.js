/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */

// https://leetcode.com/problems/zigzag-conversion/


var convert = function(s, numRows) {
    
    // we need two painting modes
    // linear(down) and diagonal(up)
    // first we start with linear mode until number of rows is reached
    // then we start the diagolnal mode and go up until number of rows is reached again
    // maybe we can do a mod operation to find the remainder and the row to put
    
    // we should use one array to store each row (strings)
    // ["PAHN", "APLSIIG" ] ...etc
    
    //1 2 3 4 <- linear numRows items
    // 5 6 <- diagonal numRows - 2
    //repeat
    
    if(numRows==1) return s // had to think about edge cases when numRows ==1
    
    
    const sequence = (numRows * 2) - 2 // 2 is the # of boundary elements
    
    let sarray = Array(numRows).fill("")
    
    
    for(let i=0; i<s.length; i++){
        
        // let l = i+1
        
        
        let currentSeq = i % sequence
        
        // console.log(currentSeq, s[i])
        
        // now I have to calculate whether this is on linear mode or in diagonal
        
        // <numRows == linear, >= numRows == diagonal
        
        
        // let arrNum = Math.min(i, i - currentSeq)
        
        // console.log(arrNum)
        
        if(currentSeq >= numRows ){
            // s[4] == A, 
            // console.log("bef", currentSeq)
            // let diff = currentSeq - numRows //  4 - 4 = 0
            currentSeq = sequence - currentSeq //diff - numRows (<-old ) // 6-4 = 2 
            // console.log("aft", currentSeq)
        }
        
        sarray[currentSeq] = sarray[currentSeq] +  s[i]
        
        
    }
    
    
    // console.log(sarray)
    return sarray.join("")
    
    
};
