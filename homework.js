// 1. Create a function called "remove" that takes an array and a potential
// member of the array, and returns a new array with that member removed.
// For example, `remove(['Cadence', 'Ordel', 'Marion'], 'Marion')` results
// in `['Cadence', 'Ordel']`.
//
// If the potential member is not in the array, return the array unchanged.
// If the potential member is in the array, remove all instances of it from the array.

// ---Original Code---
// function remove(array, thingToRemove) {
//     let keepArray = []
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] !== thingToRemove) {
//             keepArray.push(array[i])
//         }
//     }
//     return keepArray
// }

// ---Refactored Code---
// function remove(array, thingToRemove) {
//     let keepArray = []
//     for (let thing of array) {
//         if (thing !== thingToRemove) {
//             keepArray.push(thing)
//         }
//     }
//     return keepArray
// }

//---Refactored using filter---
function remove(array, thingToRemove) {
    let keepArray = array.filter(function(thing){
        return thing != thingToRemove
    })
    return keepArray
}

// 2. Revisit your "remove" function. Make sure that it does not change the original
// array but instead returns a new array.

// 3. Create a function called "sum" that takes an array of numbers and
// returns the sum of those numbers.

function sum(number) {
    let sum = 0
    for (let single of number) {
            sum += single
        }
    return sum
}

// 4. Create a function called "average" that takes an array of numbers
// and returns the average of those numbers.

function average(number) {
    let average = 0
    for (let single of number) {
        return average = sum(number) / number.length
    }
}

// 5. Create a function called "minimum" that takes an array of numbers and
// returns the smallest number in that array.

function minimum(number) {
    let minimum = 0
    for (let single of number) {
            return minimum = Math.min(...number)
            
        }
}

// 6. There are many techniques to sort arrays in programming. Your programming
// language will likely include the ability to do this. We are going to
// implement sorting ourselves, however.
//
// A "selection sort" is one of the most simple sorting algorithms. To implement it,
// you start with an unsorted array of numbers. You search the array and find the
// smallest number in the array. You then insert that into a new array as the first
// element and remove it from the original array. You continue doing this until
// there are no numbers left in the original array.
//
// Create a function called selectionSort that takes an array of numbers and returns
// a sorted array using the above technique.
//
// Note 1: You do not actually want to delete things from the original array. You
// should copy it first. To copy an array, use the following code:
//
// var arrayCopy = array.slice(0);
//
// Think about why this works.
//
// Note 2: Selection sort can be implemented using one array. Read the explanation at
// https://courses.cs.vt.edu/csonline/Algorithms/Lessons/SelectionSort/index.html
// to see how. This may make more sense to you.

//---first attempt. CLOSE!---
// function selectionSort(array) {
//     let arrayCopy = [...array]
//     let sortedArray = []
//     for (let single of arrayCopy) { //needed to be a while loop
//         let number = Math.min(...arrayCopy) //had I called minimum, this would have worked!!!
//         sortedArray.push(number) 
//         let currentMin = arrayCopy.indexOf(number)
//         arrayCopy.splice(currentMin, 1)
//     }
//     return sortedArray
// }

//---Web Search Solution---
// function selectionSort(arrayOrignal) {
//     let array = [...arrayOrignal]
//     for (let i = 0; i < array.length - 1; i++) {
//         let minIndex = i;

//         for (let j = i + 1; j < array.length; j++) {
//             if (array[j] < array[minIndex]) {
//                 minIndex = j;
//             }
//         }

//         if (i !== minIndex) {
//             let temp = array[i];
//             array[i] = array[minIndex];
//             array[minIndex] = temp;
//         }
//     }
//     return array
// }

//---Amy's Solution---
function selectionSort(arrayOriginal) {
    let sortedArray = []
    let arrayCopy = [...arrayOriginal]
    while (arrayCopy.length > 0) {
        let minNum = minimum(arrayCopy)
        sortedArray.push(minNum)
        let indexOfMinNum = arrayCopy.indexOf(minNum)
        arrayCopy.splice(indexOfMinNum, 1)
    }
    return sortedArray
}

// 7. Create a function called `textList` that takes an array and joins its elements
// into a string separated by commas.
//
// For example, `textList(['Cadence', 'Ordel', 'Marion'])` results in the string
// `"Cadence,Ordel,Marion"`.

function textList(textArray) {
let newArray = [...textArray]
let output = newArray.toString()
return output
}