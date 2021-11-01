// Given two arrays a and b write a function comp(a, b) (orcompSame(a, b)) that checks whether the two arrays have the "same" elements, with the same multiplicities. "Same" means, here, that the elements in b are the elements in a squared, regardless of the order.

// Examples
// Valid arrays
// a = [121, 144, 19, 161, 19, 144, 19, 11]  
// b = [121, 14641, 20736, 361, 25921, 361, 20736, 361]
// comp(a, b) returns true because in b 121 is the square of 11, 14641 is the square of 121, 20736 the square of 144, 361 the square of 19, 25921 the square of 161, and so on. It gets obvious if we write b's elements in terms of squares:
 
// 6 kyu

function comp(array1, array2){
    let result = false 
    
    if(array1 && array2) {
      if(array1.length === 0 && array2.length === 0) return true
        else {
      const squareRoots = array2.map(num => Math.sqrt(num))
      array1.sort((a,b) => a-b)
      squareRoots.sort((a,b) => a-b)
      for(let i = 0; i < squareRoots.length; i++) {
          if(array1.indexOf(squareRoots[i]) !== array1.indexOf(array1[i])) {
            result = false
            break
          }
          result = true
          }
        }
     }
     return result
  }
  