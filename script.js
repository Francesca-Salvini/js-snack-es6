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

// creo un array con gli oggetti "bici". Proprietà : nome e peso
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


// dichiaro una variabile flag che considera la prima bici come se fosse la più leggera
let biciclettaPiuLeggera = arrayBici[0];

// con un ciclo for comparo la prima bici con le altre dell'array, per stabilire quella
// che ha peso minore
for (let i = 0; i < arrayBici.length; i++) {
    let thisBici = arrayBici[i];
    const {nome, peso} = thisBici;
    console.log(nome, peso);
    

    if( thisBici.peso < biciclettaPiuLeggera.peso) {
        biciclettaPiuLeggera = thisBici;
    }
} 

// OUTPUT 
console.log(
    `
    ${biciclettaPiuLeggera.nome} è la bici più leggera
    `
);


// FINE PRIMO ESERCIZIO

// SECONDO ESERCIZIO

// creo un array che contiene gli oggetti "squadre di calcio"
const arraySquadreCalcio = [
    {
        "nome" : "Milan",
        "punti_fatti" : 0,
        "falli_subiti" : 0
    }, 

    {
        "nome" : "Inter",
        "punti_fatti" : 0,
        "falli_subiti" : 0
    }, 

    {
        "nome" : "Juventus",
        "punti_fatti" : 0,
        "falli_subiti" : 0
    }, 

    {
        "nome" : "Spezia",
        "punti_fatti" : 0,
        "falli_subiti" : 0
    }, 
];

// con un ciclo for destrutturo l'array 
for( let i = 0; i < arraySquadreCalcio.length; i++) {
    let thisSquadra = arraySquadreCalcio[i];
    const {nome, punti_fatti, falli_subiti} = thisSquadra;
    // console.log(nome, punti_fatti, falli_subiti);

    // punti e falli vengono stabiliti con funzioni randomiche
    let punti = Math.floor(Math.random() * 100);
    let falli = Math.floor(Math.random() * 100);

    // nuovo oggetto squadra 
    const squadra = {
        nome : nome ,
        punti_fatti : [punti],
        falli_subiti : [falli]
    };
    
    console.log(squadra);

    // creo un array dove andranno inseriti solo nomi e falli subiti
    const arrayNomiEFalli = [];

    arrayNomiEFalli.push(nome, falli);
    console.log(arrayNomiEFalli);

    // OUTPUT
    console.log(
        `
        ${squadra.nome} ha subito ${falli} falli 
        `
    );
}