var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];


function addElementToBeginningOfArray(array, element){
return [element, ...array]

}


function destructivelyAddElementToBeginningOfArray(array, element){

array.unshift(element)
return array

}

function addElementToEndOfArray(array, element){
  return [...array, element]
}


function destructivelyAddElementToEndOfArray(array, element){

  array.push(element)
  return array
}

function accessElementInArray(array, index){
  return array[index]
}


function destructivelyRemoveElementFromBeginningOfArray(array){

  array.shift()

  return array
}

destructivelyRemoveElementFromEndOfArray([1, 2, 3])

function removeElementFromBeginningOfArray(array){

array.slice(0)

return array
}

removeElementFromBeginningOfArray([1, 2, 3])

function destructivelyRemoveElementFromEndOfArray(array){
  array.pop()
  return element
}

destructivelyRemoveElementFromEndOfArray(1,2,3)


function removeElementFromEndOfArray(array){
 array.slice(0, removeElementFromEndOfArray.length -1 )
  return array
}

removeElementFromEndOfArray([1, 2, 3])
