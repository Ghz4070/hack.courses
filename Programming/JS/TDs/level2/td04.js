/* TD04 - Leet

Le but de cet exercice est de faire un traducteur leet speak.

t => 7
i => 1
s => 5
e => 3
g => 6
o => 0
b => 8
a => 4

*/

/* TD Part */
function leet(input) {
    var messageLeet = "";
    for (var i = 0; i < input.length; i++) {
        if (input[i].toLowerCase() === "t") { messageLeet += "7"; }
        else if (input[i].toLowerCase() === "i") { messageLeet += "1"; }
        else if (input[i].toLowerCase() === "s") { messageLeet += "5"; }
        else if (input[i].toLowerCase() === "e") { messageLeet += "3"; }
        else if (input[i].toLowerCase() === "g") { messageLeet += "6"; }
        else if (input[i].toLowerCase() === "o") { messageLeet += "0"; }
        else if (input[i].toLowerCase() === "b") { messageLeet += "8"; }
        else if (input[i].toLowerCase() === "a") { messageLeet += "4"; }
        else { messageLeet += input[i].toLowerCase(); }
    }
    console.log(messageLeet)
    return messageLeet.trim()
}

/* Testing Part */

var str1 = ' this is the 42 string'
var str2 = 'this is the string containing foo bar '

if (leet(str1) === '7h15 15 7h3 42 57r1n6' &&
    leet(str2) === '7h15 15 7h3 57r1n6 c0n741n1n6 f00 84r') {
    console.log('TD04 :: Success')
} else {
    console.log('TD04 :: Failed')
}
