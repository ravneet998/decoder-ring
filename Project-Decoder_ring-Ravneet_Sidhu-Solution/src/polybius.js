// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope

  function polybius(input, encode = true) {
    //split the (cipher)text into individual words and define the square (here as an array)
    let words = input.split(' ')
    let square = [['a','b','c','d','e'],['f','g','h',['i','j'],'k'],['l','m','n','o','p'],['q','r','s','t','u'],['v','w','x','y','z']]
    //Encryption:
    if (encode){
      //We'll map our words individually then join them with a space at the end
      return words.map((word) => {
        //for each word in the message, we'll look at their comprised letters
        return word.split('').map((letter) => {
          //modeling of the square as a matrix, we want the row and column of the letter
          let row = square.indexOf(square.find((col) => col.some((colRow) => colRow.includes(letter.toLowerCase())))) + 1
          let column = square[row-1].indexOf(square[row-1].find((colRow) => colRow.includes(letter.toLowerCase())))+1
          //combine the row and column as strings and return that element (letter) of the ciphertext's word
          return column.toString() + row.toString()
        //recombine the ciphertext's word
        }).join('')
      //recombine the words in the ciphertext
      }).join(' ')
    }
    //decryption
    else {
      //ensure each word of the ciphertext has even length
      if (words.some((word) => word.length%2 === 1)){
        return false
       }
       else{
         //similarly to above, we'll map the ciphertext to message
         return words.map((word) => {
           //this process splits a ciphertext word into arrays of two elements (i.e. [a,b])
           let newWord = word.split('')
           let endWord = []
           while(newWord.length){
            endWord.push(newWord.splice(0,2))
           }
           //each array of two elements corresponds to a column and row in polybius' square
           return endWord.map((pair) => {
             //particularly if we are on column 4, row 2, we must return both i and j so:
            if (pair === ['2','4']){
             return `\(i\/j\)`
            }
            else{
             return square[pair[1]-1][pair[0]-1]
            }
           }).join('')
         }).join(' ')
       }
    }
  }


  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
