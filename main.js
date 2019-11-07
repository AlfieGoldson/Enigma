const enigma = (rotors, plugConnections, ) => {

}


const rotor = (shuffle, letter, steps) => {
    return {
        shuffle,
        letter,
        steps
    }
}

const rotors = [
    rotor('AZERTYUIOPQSDFGHJKLMWXCVBN', 'Y', [5, 12, 18, 24]),
    rotor('POIUYTREZAQSDFGHJKLMWXNBCV', 'Y', [2, 9, 22]),
    rotor('PAOZIEURYTNWBXVCMQLSKDJFHG', 'Y', [14, 21])
];
const plugConnections = ['GJ', 'EZ', 'WP'];

const machine = enigma(rotors, plugConnections);