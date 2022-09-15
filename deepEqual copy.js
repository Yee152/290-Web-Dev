'use strict';
// Don't add or change anything above this comment.

/*
* Don't change the declaration of this function..
*/
function deepEqual(val1, val2) {
    // For the first case of deep equal 1,2,4
    if(val1 === val2) {
        return true
    

    // } else if (val1 === val2 && typeof val1 !=='null' && typeof val2 !== "null" && Array.isArray(val1) === Array.isArray(val2)){
    //     if(Object.keys(val1).length === Object.keys(val2).length){
            
    //     }

    // }




    Need to check that neither val1 or val2 are null, that they exist, then check the typeof the object. If the lengths
    are the same there is a possibility the objects are deep equap. if they are not the same they are definitely not deep equal.
    } else if (val1 && val2 && typeof val1 === 'object' && typeof val2 === 'object' && Object.keys(val1).length === Object.keys(val2).length) {
        //if they are arrays or objects checks the values
       if(Array.isArray(val1) === Array.isArray(val2) ){
            for (let key in val1) {
                    if(key in val2) {
                        if (!deepEqual(val1[key], val2[key])){
                            return false
                        } 

                    }else {
                        return false
    
                }
            }
            return true 
        }
        return false
        

    
    } else {
        return false;
    }
}






// Don't add or change anything below this comment.
module.exports = deepEqual;