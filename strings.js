 //1. Given the following sentence: Change all of the lowercase letters i, in reference to yourself, to the uppercase I
 // careful not to uppercase the i in the word pair
var sentence = 'When i went to the mall i bought a pair of shoes.';

        var res = sentence.replace(/i/gi, "I");
        console.log(res);
       var fix = res.replace(/paIr/g, "pair");
       console.log(fix);
        

    

//2. The history of JavaScript is interesting but how many times does the letter a appear? Find a way to count both upper and lower case A's

var jsHistory = 'JavaScript, not to be confused with Java, was created in 10 days in May 1995 by Brendan Eich, then working at Netscape and now of Mozilla. JavaScript was not always known as JavaScript: the original name was Mocha, a name chosen by Marc Andreessen, founder of Netscape. In September of 1995 the name was changed to LiveScript, then in December of the same year, upon receiving a trademark license from Sun, the name JavaScript was adopted. This was somewhat of a marketing move at the time, with Java being very popular around then.';



 function letterCount(string, letter, caseSensitive) {
    var count = 0;
    if ( !caseSensitive) {
        string = string.toUpperCase();
        letter = letter.toUpperCase();
    }
    for (var i=0, l=string.length; i<string.length; i += 1) {
        if (string[i] === letter) {
            count += 1;
        }
    }
    return count;
}
console.log(letterCount(jsHistory, 'a', true)); // 4 (doesn't match uppercase I at beginning)
console.log(letterCount(jsHistory, 'a', false)); //5 (matches both upper and lowercase i)




//3. Given the following sentence: Uppercase the word scream each time it appears in the sentence

var text = 'I scream, you scream, we all scream for icecream';
var res = text.replace(/scream/gi, "SCREAM");
        console.log(res);