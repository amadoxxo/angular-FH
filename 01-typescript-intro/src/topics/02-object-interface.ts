const skills: string[] = ['Bash', 'Counter', 'Healing'];

interface Character {
    name: string,
    hp: number,
    skills: string[],
    hometown?: string
}


const rase: Character = {
    name: 'rase',
    hp: 100,
    skills: ['Bash', 'Counter']
}

rase.hometown = 'Rivendell'

console.table(rase);


export {};