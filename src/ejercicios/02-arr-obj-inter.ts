

let habilidades: string[] = [ 'healing', 'dash', 'berserker'];

interface Personaje {
    nombre: string;
    hp: number;
    habilidades?: string[]; 
    puebloNatal?: string;
}

const personaje: Personaje ={
    nombre: 'yanawalka',
    hp: 90,
    habilidades: ['healing', 'dash', 'berserker'],
}

personaje.puebloNatal= 'Salta';
console.table(personaje);
console.log(habilidades);