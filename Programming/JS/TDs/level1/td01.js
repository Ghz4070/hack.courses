/* td01 - Pangramme

Le but de cet exercice est d'implémenter la fonction
pangram, prenant un mot en paramètre et retournant
true si celui-ci est un pangramme. Ou false dans le
cas contraire.

Pour rappel, un pangramme est une phrase 
contenant l'ensemble des 26 lettres de l'alphabet.

*/

/* TD Part */

function pangram(word) {
    var lettres = "azertyuiopqsdfghjklmwxcvbn";
    word = word.toLowerCase().replace(/[^a-z]/g, '');
    var countletter = 0;
    for (var i = 0; i < lettres.length; i++) {
        if (word.indexOf(lettres[i]) !== -1)
            countletter++
    }

    return countletter === 26 ? true : false;
}

/* Testing Part */
if (pangram('The quick brown fox jumps over the lazy dog')
    && !pangram('There is a house in new Orleans they call the rising sun')) {
    console.log('TD00: OK')
} else {
    console.log('TD01:: KO')
}