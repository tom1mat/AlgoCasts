// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
    //1) loop array
    const retArray = [[]];
    let index = 0;
    for(let num of array){
        if(retArray[index].length < size){
            retArray[index].push(num);
        }else{
            index++;
            retArray.push([]);
            retArray[index].push(num);
        }
    }
    console.log(retArray);
    return retArray;
}

module.exports = chunk;
