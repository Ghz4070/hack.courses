/* td02 - Tous les chemins...

Le but de ce TD est de terminer l'implémentation
de la fonction roman(). Celle-ci prend un nombre 
décimal en paramètre et retourne une chaîne de
caractères contenant la représentation de ce nombre
en chiffres romains.

*/

tab = ["1", 2];

/* TD Part */

function roman(decimal) {
    var decimalstr = decimal.toString();
    var render = '';
    tabCentaines = ["","C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
    tabDizaines = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
    tabUnit = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];

    if (decimal < 100) {

        render += tabDizaines[decimalstr[0]];
        render += tabUnit[decimalstr[1]];
    } else if (decimal < 10) {
        render = tabUnit[decimalstr[0]];
    } else {
        render = tabCentaines[decimalstr[0]];
        render += tabDizaines[decimalstr[1]];
        render += tabUnit[decimalstr[2]];
    }

    return render;
}

/* Testing Part */
if (roman(64) == 'LXIV' && roman(128) == 'CXXVIII' && roman(512) == 'DXII') {
    console.log('TD02:: OK');
} else {
    console.log('TD02:: KO');
}