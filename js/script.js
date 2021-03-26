// ES-1
// Creare un array di oggetti: ogni oggetto descriverà 
// una bici da corsa con le seguenti proprietà: nome e peso. 
// Stampare a schermo la bici con peso minore.
function es1(){
    console.log('ES-1');

    var bikes = [ 
        {
            'nome': 'Solos',
            'peso': 5
        },
        {
            'nome': 'Aspera',
            'peso': 4
        },
        {
            'nome': 'Astra',
            'peso': 3
        },
        {
            'nome': 'Sierum',
            'peso': 7
        },
        {
            'nome': 'Pegaso',
            'peso': 6
        }
    ];

    let biciPesoMin = {
        'nome': '',
        'peso': 0 // Il peso non potrà mai essere neutro
    };

    for (let i = 0; i < bikes.length; i++) {
        if (biciPesoMin.peso == 0 || biciPesoMin.peso > bikes[i].peso) {
            biciPesoMin = bikes[i];
        }
    }
    console.log('Bici più leggera: ' + biciPesoMin.nome);
    console.log('Peso: ' + biciPesoMin.peso + 'kg');

    console.log(' ');
    return;
}


// ES-2 Oggetti di squadre di calcio. 
// Ogni squadra avrà diverse proprietà: 
// nome, punti fatti, falli subiti.
// Nome sarà l'unica proprietà da compilare, 
// le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà:
// punti fatti e falli subiti
// Usando la destrutturazione creiamo un nuovo array 
// i cui elementi contengono solo nomi e falli subiti 

function getRandom() {
    let min = 0;
    let max = 100 - min + 1;
    return Math.floor(Math.random() * max) + min;
}
function es2() {
    console.log('ES-2');
    let teams = [
        {
            'nome': 'Juventus',
            'punti': 0,
            'falliSubiti': 0
        },
        {
            'nome': 'Milan',
            'punti': 0,
            'falliSubiti': 0
        },
        {
            'nome': 'Inter',
            'punti': 0,
            'falliSubiti': 0
        },
        {
            'nome': 'Roma',
            'punti': 0,
            'falliSubiti': 0
        }
    ];

    // Squadre con falli e punti
    console.log('Squadre:');
    for (let i = 0; i < teams.length; i++) {
        teams[i].punti = getRandom();
        teams[i].falliSubiti = getRandom();
    }        
    console.log(teams); 
    console.log(' ');

    console.log('Squadre (key punti rimossa):');
    // Squadre con punti rimossi
    let arrCut = [];
    for (let i = 0; i < teams.length; i++) {
        let{nome, falliSubiti} = teams[i];
        arrCut[i] = {nome, falliSubiti};
    }
    console.log(arrCut);
}

function init() {
    es1();
    es2();
}

$(document).ready(init);