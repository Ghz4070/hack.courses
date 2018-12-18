/* td02 - Tous les chemins...

Le but de ce TD est de terminer l'implémentation
de la fonction roman(). Celle-ci prend un nombre 
décimal en paramètre et retourne une chaîne de
caractères contenant la représentation de ce nombre
en chiffres romains.

*/

/* TD Part */

function roman(nb) {

    tabCentaines = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
    tabDizaines = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
    tabUnit = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];

    if (nb >= 100) {
        var c = Math.floor(nb / 100);
        var centaine = tabCentaines[c];
        var calculDizaine = nb - (100 * c);
        var d = Math.floor(calculDizaine / 10);
        var dizaine = tabUnit[d];
        var calculUnites = nb - (100 * c) - (10 * d);
        var unites = tabUnit[calculUnites];

        var result = centaine + dizaine + unites;
        console.log(result);
    }
    if(nb <= 99){
        var d1 = Math.floor(calculDizaine / 10);
        var dizaine1 = tabUnit[d1];
        var calculUnites1 = nb - (10 * d1);
        var unites1 = tabUnit[calculUnites1];
        var result1 = dizaine1 + unites1;
        console.log(result1);
    }

}


/* Testing Part */
if (roman(64) === 'LXIV' && roman(128) === 'CXXVIII' && roman(512) === 'DXII') {
    console.log('TD02:: OK');
} else {
    console.log('TD02:: KO');
}