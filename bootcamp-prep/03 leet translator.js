// Objects - 03 Leet translator
// one liner but kept as I don't do these a lot
// Translate the passed string to Leet using the translation 

let letters = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z' ];
let leetChars = ['@', '8', '(', '|)', '3', 'ph', 'g', '#','l', '_|', '|<', '1', "|'|'|", '/\/', '0', '|D', '(,)', '|2', '5', '+', '|_|', '|/', "|/|/'",'><', 'j', '2'];

const leetTranslator = (str) =>{
  return str.toLowerCase().
             split('').
             map(z=>leetChars[letters.findIndex(c=>c===z)]).
             join('')
}
