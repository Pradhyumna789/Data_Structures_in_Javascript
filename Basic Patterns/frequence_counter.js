// same([1, 2, 3, 3], [2, 4, 9, 9])


function same(arr1, arr2) {
    if(arr1.length !== arr2.length) { // '!==', not '=='
        return false;
    }

    for(let i = 0; i < arr1.length; i++) {
        let correctIndex = arr2.indexOf(arr1[i] ** 2)
        if(correctIndex === -1) { // use '===', not '=='
            return false;
        }
        arr2.splice(correctIndex, 1) // removes the element at correctIndex
    }
    return true;
}


  console.log(same([1,2,3,3], [1,4,9,9]));
