'use strict';
// Don't add or change anything above this comment.

/**
 * if this function is passed to reduce, any non-numeric values in the array will be
 * skipped  and the sum of only the numeric values in the array will be returned.
 */
function reducer1(previousValue, currentValue) {
    let sum = 0;
    if(typeof previousValue === "number" && typeof currentValue ==="number"){
        sum = previousValue + currentValue
    } else if(typeof previousValue === "number" && currentValue !== "number") {
        sum = previousValue
    } else if (typeof previousValue !== "number" && typeof currentValue !== "number") {
        sum = 0
    } else if (typeof previousValue !=="number"){
        previousValue = 0
        sum = previousValue+currentValue
    }
    //same function of the reduce function shown in the lecture, check number or not
    return sum
};

/**
 * If this function is passed to reduce and the array contains any non-numeric values
 * this function will throw the exception TypeError. otherwise the sum of all the values in the array will be returned
 */
function reducer2(previousValue, currentValue){
    let sum
    if(typeof previousValue === "number" && typeof currentValue ==="number"){
        sum = previousValue + currentValue
    } else if(typeof previousValue === "number" && currentValue !== "number") {
        throw new TypeError
    } else if (typeof previousValue !== "number" && typeof currentValue !== "number") {
        throw new TypeError
    } else if (typeof previousValue !=="number"){
        throw new TypeError
    } 
    return sum

};

// Don't add or change anything below this comment.
module.exports = { reducer1, reducer2 };