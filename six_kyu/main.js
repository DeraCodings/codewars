// count recurring characters in a string
// console.log('Codewars');
const str = 'aabghccddas';

console.log(countOccurence(str));

function countOccurrence(s) {
    let newArr = s.split('');

    const count = (allNames, name) => {
        if (name in allNames) {
            allNames[name]++;
        }
        else {
            allNames[name] = 1;
        }
        return allNames;
    }

    return newArr.reduce(count, {});
}

/**
 * write a function that returns the count of the number of characters in a string that 
 * occurs more than once
*/

function countOccurence(string) {
    let arr = string.toLowerCase().split('');
    let result = arr.reduce((obj, prop) => {
        if (prop in obj) {
            obj[prop]++;
        }
        else {
            obj[prop] = 1;
        }
        return obj;
    }, {});
    let keys = Object.keys(result);
    return keys.filter(x => result[x] > 1).length;
}