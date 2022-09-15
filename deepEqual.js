'use strict';
// Don't add or change anything above this comment.

/*
* Don't change the declaration of this function..
*/
function deepEqual(val1, val2) {
    // For the first case of deep equal 1,2,4
    if(val1 === val2) {
        return true
    


    //Due to a historical quirk typeof null returns 'object' even though null is a primitive type. So when comparing two object in Case 5, first make sure that neither of them is null.
    } else if (val1 !== null && val2 !== null && typeof val1 === "object" && typeof val2 === "object" ) {
        //see student 4 and 3, lengths are not the same, so no matter what they will never be deep equal.
        if(Object.keys(val1).length === Object.keys(val2).length){
            //if they are arrays, returns true
            if(Array.isArray(val1) === Array.isArray(val2) ){
                //key in val, if it is in val call deepequal, the key is not there, return false. Otherwise return true
                    for (let key in val1) {
                            if(key in val2) {
                                if (!deepEqual(val1[key], val2[key])){
                                    return false
                                } 

                        }
                    }
                    return true 
                }
                return false
            
            }
        return false

    
    } else {
        return false;
    }
}






// Don't add or change anything below this comment.
module.exports = deepEqual;