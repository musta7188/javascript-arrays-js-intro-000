

 var chocolateBars = ['snikers', 'hundred grand', 'kitkat', 'skittles'];


var array = [1];

function addElementToBeginningOfArray(){
array.unshift('foo')
  return array
}

function destructivelyAddElementToBeginningOfArray(array) {
  array.unshift('foo')
  return array
}


function addElementToEndOfArray(array){
return  [...array, 'foo']

}

function destructivelyAddElementToEndOfArray(){
  array.push('foo')
  return array

}
