// CONSEGNA ESERCIZI
//
// Snack
//
// 1 Creare un array di oggetti: Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso. 
// Stampare a schermo la bici con peso minore utilizzando destructuring e template literal 
//
// 2 Creare un array di oggetti di squadre di calcio. 
// Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti. 
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0. 
// Generare numeri random al posto degli 0 nelle proprietà: Punti fatti e falli subiti. 
// Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e 
// falli subiti e stampiamo tutto in console.

// PRIMO ESERCIZIO

const arrayBici = [
    {
        "nome" : "Alpina",
        "peso" : 10
    },
    {
        "nome" : "Atena",
        "peso" : 8
    },
    {
        "nome" : "Breezer",
        "peso" : 9
    },
    {
        "nome" : "Challenge",
        "peso" : 12
    },
    {
        "nome" : "Endura",
        "peso" : 6
    },
    {
        "nome" : "Fox",
        "peso" : 11
    }
];



let biciclettaPiuLeggera = arrayBici[0];

for (let i = 0; i < arrayBici.length; i++) {
    let thisBici = arrayBici[i];
    const {nome, peso} = thisBici;
    console.log(nome, peso);
    

    if( thisBici.peso < biciclettaPiuLeggera.peso) {
        biciclettaPiuLeggera = thisBici;
    }
} 

console.log(
    `
    ${biciclettaPiuLeggera.nome} è la bici più leggera
    `
);


// FINE PRIMO ESERCIZIO