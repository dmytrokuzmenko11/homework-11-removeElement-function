

// creating array
let arrNumber = +prompt('Enter the number of array numbers')
let arr = [];

// cycle of filling the array with numbers
for (let i = 1; i <= arrNumber; i++) {
    arr.push(i)
};
alert(`Array: ${arr}`);
document.write(`<br>[ ${arr} ] – Array`);


// deleted item
let item = +prompt('Which number should be removed?');
removeElement(arr, item);


// finally
alert(`Your updated array: ${arr}`);
document.write(`<br>[ ${arr} ] – Your new array`);


// function
function removeElement(arr, item) {
    indexArr = arr.indexOf(item);
    arr.splice(indexArr, 1);
    
    return arr;
};

