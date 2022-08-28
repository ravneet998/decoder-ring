// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
 

  function substitution(input, alphabet , encode = true) {
    if (!alphabet){
      return false
    }
    let lowerAlph = alphabet.toLowerCase().split('')
    if (lowerAlph.some((letter) => lowerAlph.filter((item) => item ===letter).length >1)|| alphabet.length !== 26){
      return false
    }
    let letters = []
    for (let i =0; i<26;i++){
      letters.push(String.fromCharCode(97+i))
    }
    
    if (encode){
      
      if(input.split(' ').every((word) => word.split('').every((letter) => letters.includes(letter.toLowerCase())))){
        
        return input.split(' ').map((word) => {
          
          return word.split('').map((char) => {
            return lowerAlph[letters.indexOf(char.toLowerCase())]
          }).join('')
        
        }).join(' ')
      }
      else {
        return false
      }
    }
    
    else {
      
      if(input.split(' ').every((word) => word.split('').every((letter) => lowerAlph.includes(letter.toLowerCase())))){
        
        return input.split(' ').map((word) => {
        
          return word.split('').map((char) => {
            return letters[lowerAlph.indexOf(char.toLowerCase())]
          
          }).join('')
      
        }).join(' ')
      }
    }
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
