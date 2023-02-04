/**
 * function to find the sum of all the integers between 
 * and including them and return it.  
*/

function getSum(a, b) {
    let arr = [];
    let min = Math.min(a, b);
    let max = Math.max(a, b);
    for (let x = max; x >= min; x--) {   
        arr.push(x);
    }
    return arr.reduce((x, v) => x + v);
}

let result = getSum(-1, 0);
console.log(result);