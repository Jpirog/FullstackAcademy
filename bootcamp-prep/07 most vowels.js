// Some solutions to Fullstack's pre-bootcamp problems. Only included ones that are more than a few lines:
// Feb 2021

// Loops and Debugging - 07 Most Vowels - returns the word from a string that has the most vowels
// At first, started doing a bunch of array methods but it seemed too complicated for a simple operation

const mostVowels = (str) =>{
  str=str.replace('.','') // quick fix; should probably also check for '?','!', etc.
  let maxWord=""
  let maxVowels=0
  str.split(' ').
      map(c=>{
        vowels=0
        for (let i=0; i < c.length; i++){
          if (c[i]==='a' || c[i]==='e' || c[i]==='i' || c[i]==='o' || c[i]==='u') vowels++
        }
        if (vowels > maxVowels){
          maxWord=c;
          maxVowels=vowels;
        }
      })
  return maxWord
}
