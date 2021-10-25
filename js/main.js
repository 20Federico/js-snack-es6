'use strict'

/*
* Snack 1
* Creare un array di oggetti:
* Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
* Stampare a schermo la bici con peso minore utilizzando destructuring e template literal
*/

const nameKey = 'name';
const weightKey = 'weight';

const biciDaCorsa = [
  {
    [nameKey]: 'Helix',
    [weightKey]: 10.3
  },
  {
    [nameKey]: 'Felix',
    [weightKey]: 4.2
  },
  {
    [nameKey]: 'Fenix',
    [weightKey]: 7
  },
  {
    [nameKey]: 'Celix',
    [weightKey]: 3.3
  },
  {
    [nameKey]: 'Welix',
    [weightKey]: 9.1
  }
];

function lowerWeightBike(objectArray, objNameKey, objWeightKey) {

  const pesoKgArray = [];

  for (let i = 0; i < objectArray.length; i++) {
    const element = objectArray[i];
    const weight = element[objWeightKey];
    pesoKgArray.push(weight);
  };

  let lowerWeight = pesoKgArray[0];
  let lowerWeightIndex;
  
  for (let i = 0; i < pesoKgArray.length; i++) {
    const element = pesoKgArray[i];
    
    if (element < lowerWeight) {
      lowerWeight = element;
      lowerWeightIndex = i;
    }
  }

  const lowerWeightBike = objectArray[lowerWeightIndex];
  return `La bici da corsa che pesa meno è la n.${lowerWeightIndex + 1} della lista, ed è la ${lowerWeightBike[objNameKey]}, con un peso di ${lowerWeightBike[objWeightKey]}kg.`;
}

console.log(lowerWeightBike(biciDaCorsa, nameKey, weightKey));

console.log('---------------------------');
/*
* Snack2
* Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
* Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
* Generare numeri random al posto degli 0 nelle proprietà:
* Punti fatti e falli subiti.
* Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
*/

let points = 0;
let sufferedFouls = 0;
let nome;

const squadreCalcio = [
  {
    nome: 'Milan',
    points,
    sufferedFouls
  },
  {
    nome: 'Inter',
    points,
    sufferedFouls
  },
  {
    nome: 'Genoa',
    points,
    sufferedFouls
  },
  {
    nome: 'Sampdoria',
    points,
    sufferedFouls
  },
  {
    nome: 'Juventus',
    points,
    sufferedFouls
  },
];
console.log(squadreCalcio);

for (let i = 0; i < squadreCalcio.length; i++) {
  const element = squadreCalcio[i];
  element['points'] = randomNumber(0, 20);
  element['sufferedFouls'] = randomNumber(0, 5);
}

console.log(nameFoulsarray(squadreCalcio, 'nome', 'sufferedFouls'));



function nameFoulsarray(objectArray, nameKey, foulsKey) {
  
  const newArray = [];
  
  for (let i = 0; i < objectArray.length; i++) {
    const element = objectArray[i];
    
    let name = nameKey;
    let fouls = foulsKey;

    newArray.push({
      [name]: element[nameKey],
      [fouls]: element[foulsKey]
    })
  }

  return newArray;
}

function randomNumber(minNumber, maxNumber) {
  
  const randomNum = Math.floor(Math.random() * (maxNumber - minNumber + 1) + minNumber);
  return randomNum;

};