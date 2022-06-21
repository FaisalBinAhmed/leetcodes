/**
 * @param {number} numRows
 * @return {number[][]}
 
 https://leetcode.com/explore/interview/card/top-interview-questions-easy/99/others/601/
 */
var generate = function(numRows) {
    
    const bigArray = []
    
    for(let i=0; i<numRows; i++){
        //ith row has i+1 elements in its array
        
        const smallArray = []
        
        for(let j=0;j<=i;j++){
            //when i=0, it j will have 1 element
            //in the end, push this array to the bigger array
            
            // if it's a boundary element, it's 1
            // if not calculate the previous array's j-1 and j
            
            // boundary elems index 0 and i
            
            if(j == 0 || j==i){
                //boundary elems
                smallArray.push(1)
            }else{
                //not boundary, need to calculate

                smallArray.push(bigArray[i-1][j-1]+bigArray[i-1][j])
                // console.log(i, j, sum)
                
            }
            // console.log(smallArray[j], 'i', i, 'j', j)
                        
        }
        
        bigArray.push(smallArray)
            // console.log(bigArray)
        
        
    }
    
    // console.log(bigArray)
    return bigArray
    
    
    
};
