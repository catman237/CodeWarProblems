// Given a string of digits confirm whether the sum of all the individual even digits are greater than the sum of all the indiviudal odd digits. Always a string of numbers will be given.

// If the sum of even numbers is greater than the odd numbers return: "Even is greater than Odd"

// If the sum of odd numbers is greater than the sum of even numbers return: "Odd is greater than Even"

// If the total of both even and odd numbers are identical return: "Even and Odd are the same"


// 7kyu 

function evenOrOdd(str) {
    let sum = 0;
    // split string and make array of numbers
    str = str.split("").map(Number)
    // even arr
    // odd arr 
    let even = []
    let odd = []
    
    for(let i = 0; i < str.length; i++){
      if(str[i] % 2 === 1) {
      odd.push(str[i])
      } else {
        even.push(str[i])
      }
    }
    
    even = even.reduce((a,b) => a + b, 0)
    odd = odd.reduce((a,b) => a + b, 0)
    // compare even and odd to see what is greater 
    //return "Even is greater than Odd" || "Odd is greater than Even" || "Even and Odd are the same"
    if(odd > even) {
      return "Odd is greater than Even"
    } else if (even > odd) {
      return "Even is greater than Odd"
    } else {
      return "Even and Odd are the same"
    }
    
  }