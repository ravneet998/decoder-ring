// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    //This does the initial check to make sure the shift is within range
    if (!shift || shift ===0 || shift < -25 || shift > 25){
      return false
    }
    //here we create an array of all lowercase letters a-z
    let letters = []
    for (let i =0; i<26;i++){
      letters.push(String.fromCharCode(97+i))
    }
    //this will be our final return, first splitting the message then mapping it
    return input.split('').map((char) => {
      //the map will check each character in the message, when encode is truthy it will change any
      //lowercase letter (i.e. any char included in the letters array  above) to the ascii number
      //of that letter (minus 97: 'a') plus the shift, modulo 26 then add 97 back and retrieve the 
      //letter for the generated ascii
      if (letters.includes(char.toLowerCase()) && encode){
        return String.fromCharCode(((char.toLowerCase().charCodeAt()+shift-97)%26+26)%26+97)
      }
      //when encode parameter is falsey we do the same only now subtracting (rather than adding the
      //shift
      else if (letters.includes(char.toLowerCase()) && !encode){
          return String.fromCharCode(((char.toLowerCase().charCodeAt()-shift-97)%26+26)%26+97)
        }
      //should the character not be in the letters array it is returned exactly
      else {
        return char
      }
    //lastly join the mapped array of characters
    }).join('')
}

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
