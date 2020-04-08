function Opdracht(vak, beschrijving) {
    let opdrObj = this;

    opdrObj.vak = vak;
    opdrObj.beschrijving = beschrijving;

    opdrachten.push(opdrObj);
}

// OPDRACHT 1.
// Maak de Cijfer functie af.

// opdracht is een object die met behulp van de bovenstaande
// functie is aangemaakt.

// Cijfer een nummer van 0 tot 10

function Cijfer(opdracht, cijfer) {
  let cijferObj = this;

  cijferObj.opdracht = opdracht;
  cijferObj.cijfer = cijfer;

  cijfers.push(cijferObj);
}

// OPDRACHT 2.
// Maak verschillende variabelen voor je opdrachten.
    // Minimaal 3 opdrachten voor 3 verschillende vakken.
    // Totaal dus 9 opdrachten

// Kijk in week6 of studie.js hoe je een variabele aanmaakt met het keyword new

// Maak voor al deze opdrachten een cijfer variabele aan
// Kijk in week6 of studie.js hoe je een variabele aanmaakt met het keyword new

// OPDRACHT 3.
// Vul de arrays met de opdrachten en cijfers die je hebt aangemaakt.
// Kijk in week6 voor een voorbeeld hoe je objecten in een array stopt!
let opdrachten = [];
let cijfers = [];

let opdrachtFRO1 = new Opdracht("FRO", "Objecten");
let opdrachtFRO2 = new Opdracht("FRO", "Gallerij");
let opdrachtFRO3 = new Opdracht("FRO", "Arrays");

let opdrachtCMS1 = new Opdracht("CMS", "Wordpress installeren");
let opdrachtCMS2 = new Opdracht("CMS", "Berichten maken");
let opdrachtCMS3 = new Opdracht("CMS", "Categorie toevoegen");

let opdrachtBAP1 = new Opdracht("BAP", "SQL");
let opdrachtBAP2 = new Opdracht("BAP", "For Each");
let opdrachtBAP3 = new Opdracht("BAP", "Statements");

let cijferFRO = new Cijfer(opdrachtFRO1, 6);
let cijferCMS = new Cijfer(opdrachtCMS1, 8);
let cijferBAP = new Cijfer(opdrachtBAP1, 5.5);

function Periode (opdrachten, cijfers) {
    let periodeObj = this;

    periodeObj.opdrachten = opdrachten;
    periodeObj.cijfers = cijfers;
}

// OPDRACHT 4.
// Maak een periode variabele op basis van de bovenstaande functie
let periode1 = new Periode(opdrachten, cijfers);
console.log(periode1);
// OPDRACHT 5.
// Schrijf de periode variabele naar een JSON variabele
// Kijk in week7 hoe je een JSON variabele aanmaakt
let json = JSON.stringify(periode1);
console.log(json);

// OPDRACHT 6.
// Schrijf de json variabele naar de localStorage
// Kijk in week week 6 hoe je een variabele naar de localStorage wegschrijft
localStorage.setItem('periode1', json);
