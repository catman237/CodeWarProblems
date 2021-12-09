
// You will be given a number and you will need to return it as a string in Expanded Form. For example:
// expandedForm(12); // Should return '10 + 2'
// expandedForm(42); // Should return '40 + 2'
// expandedForm(70304); // Should return '70000 + 300 + 4'

// 6 kyu

function expandedForm(num) {
    num = num.toString()
    const equation = []
    let multiplier = 1
  
    for(let i = 1; i <= num.length; i++){
      const digit = num[num.length - i]   
      digit > 0 && equation.unshift(digit * multiplier)
      multiplier *= 10
    }
    return equation.join(' + ')
  }