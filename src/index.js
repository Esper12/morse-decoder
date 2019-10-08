const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    var letter = [];
    var decodedLetter = [];
        
    letter = expr.match(/.{10}/g);
        
    for(var i = 0; i < letter.length; i++) {
        decodedLetter[i] = letter[i].replace(/00/g, "")
                                    .replace(/10/g, ".")
                                    .replace(/11/g, "-");
    }
        
    var result = [];
    for(var i = 0; i < decodedLetter.length; i++) {
        var decodedMorseLetter = MORSE_TABLE[decodedLetter[i]];
        if(decodedLetter[i] == "**********") {
            result.push(" ");
        }
        result.push(decodedMorseLetter);
    }
        return result.join('');
}

module.exports = {
    decode
}