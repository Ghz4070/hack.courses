/* td04 - Mini ChatBot

Le but de cet exercice est d'écrire
un mini ChatBot basique. Celui-ci
devra pouvoir reconnaître et répondre
à plusieurs types de questions ou 
d'ordres :

- Quelle heure est-il ? => Retourne l'heure au format "{heure}:{minutes}"
- Quel est le carré de {nombre} => Retourne le carré du nombre {nombre} au format "{carré}"
- Quel âge a une personne née en {année} => Retourne l'âge de la personne au format "{age} ans"

Attention, il n'y aura peut-être pas
que l'ordre ou la question recherchée
dans le message envoyé ! Par exemple,
"Quelle heure est-il" peut-être formaté
comme: "Hey le bot, quelle heure est-il ?"
ou encore "Quel est le carré de 11 au fait?"

*/

/* TD Part */
function reply(message) {
    var toRetrieve = ["quelle heure est-il", "quel est le carré de", "quel âge a une personne née en"];
    var query = '';
    message = message.toLowerCase();
    var response = [];
    for (var i = 0; i < toRetrieve.length; i++) {
        if (message.includes(toRetrieve[i])) {
            query = toRetrieve[i];
           response = message.replace(/[^\d]/g, '');
        }
    }

    if (query === toRetrieve[0]) {
        var date = new Date();
        return date.getHours()
    } else if (query === toRetrieve[1]) {
        return response * response;
    } else if (query === toRetrieve[2]) {
        var date = new Date();
         return (date.getFullYear() - response) + ' ans';
    }

}

var _0x50df=["\x51\x75\x65\x6C\x20\x65\x73\x74\x20\x6C\x65\x20\x63\x61\x72\x72\xE9\x20\x64\x65\x20\x31\x32\x3F"];
var str=_0x50df[0]
var _0xcccf=["\x53\x61\x6C\x75\x74\x2C\x20\x71\x75\x65\x6C\x20\xE2\x67\x65\x20\x61\x20\x75\x6E\x65\x20\x70\x65\x72\x73\x6F\x6E\x6E\x65\x20\x6E\xE9\x65\x20\x65\x6E\x20\x32\x30\x30\x30\x20\x61\x75\x20\x66\x61\x69\x74\x20\x3F"];
const str2=_0xcccf[0]
/* Testing Part */

if (reply(str) === 0x90 && reply(str2) === 0x12 + ' ans') {
    console.log('TD04:: OK')
} else {
    console.log('TD04:: KO')
}