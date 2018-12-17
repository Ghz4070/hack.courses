/* td01 - Pangramme

Le but de cet exercice est d'implémenter la fonction
pangram, prenant un mot en paramètre et retournant
true si celui-ci est un pangramme. Ou false dans le
cas contraire.

Pour rappel, un pangramme est une phrase 
contenant l'ensemble des 26 lettres de l'alphabet.

*/

/* TD Part */

function pangram(string) {
    return /(?=.*a)(?=.*b)(?=.*c)(?=.*d)(?=.*e)(?=.*f)(?=.*g)(?=.*h)(?=.*i)(?=.*j)(?=.*k)(?=.*l)(?=.*m)(?=.*n)(?=.*o)(?=.*p)(?=.*q)(?=.*r)(?=.*s)(?=.*t)(?=.*u)(?=.*v)(?=.*w)(?=.*x)(?=.*y)(?=.*z)./.test(string)
}

/* Testing Part */

if (pangram('The quick brown fox jumps over the lazy dog')
    && !pangram('There is a house in new Orleans they call the rising sun')) {
    console.log('TD00: OK')
} else {
    console.log('TD01:: KO')
}