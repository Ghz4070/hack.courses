/* TD00 - EasySort

Le but de cet exercice est de vous familiariser avec le format des TDs de ce cours et de commencer a prendre en main votre architecture Node/JavaScript.

Dans ce premier TD, vous devez terminer d'écrire une fonction de classement (easySort) permettant de trier le tableau passé en paramètre.

Il est impératif de n'éditer que le code présent dans la 'TD Part'.

La testing part ne doit pas être modifiée ! 
Le code doit être réalisé uniquement en ES5 pour cette partie du cours (pas de .sort(...) par exemple) !

*/

/* TD Part */
function easySort(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] > array[i + 1]) {
            let fort = array[i]
            array[i] = array[i + 1]
            array[i + 1] = fort
            i = 0
        }
    }

}

/* Testing Part */
const array = []

for (var i = 0; i < 100; i++) {
    array.push(Math.floor((Math.random() * 10)))
}

easySort(array)
//console.log(array)

var lastItem = 0

for (var i = 0; i < array.length; i++) {
    if (lastItem > array[i]) {
        console.log('TD00 :: Failed')
        process.exit()
    } else {
        lastItem = array[i]
    }
}
console.log('TD00 :: Success')
