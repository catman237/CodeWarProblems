
// You are given an unsorted array containing all the integers from 0 to 100 inclusively. However, one number is missing. Write a function to find and return this number.
//  What are the time and space complexities of your solution?

//7 kyu

const missingNo = (nums) => {
    const newArr = []
    for(let i = 1; i <= 100; i++){
     newArr.push(i)
    }
    return newArr.reduce((a,b) => a +b) - nums.reduce((a,b) => a +b)
  }