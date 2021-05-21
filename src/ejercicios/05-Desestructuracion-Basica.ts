interface Reproductor{
    segundo: number;
    cancion: string;
    detalles: Detalles;
}
interface Detalles{
    autor: string;
    anio: number;
}

const reproductor:Reproductor={
    segundo: 20,
    cancion: "People to the people",
    detalles:{
        autor:"Billie Joel",
        anio:2009,
    }
}

const {segundo, cancion,detalles}=reproductor;
const {autor, anio}= detalles;


// console.log("El segundo de tu cancion es: ", segundo);
// console.log("Tu cancion es: ", cancion);
// console.log("El autor de tu cancion es: ", autor);
// console.log("El anio de tu cancion es: ", anio);

// desestructuracion de arreglos

const dbz : string[] = ['Goku','Vegeta','Roshi'];
const [ p1,p2,p3] = dbz;

console.log('Tu personaje 1 es: ', p1);
console.log('Tu personaje 2 es: ', p2);
console.log('Tu personaje 3 es: ', p3);
