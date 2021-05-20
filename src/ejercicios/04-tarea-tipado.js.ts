interface superheroes{
    nombre:string;
    edad:number;
    direccion:Direccion;
    mostrarDireccion:   () => string;
    }
    
    interface Direccion{
        calle:string;
        pais:string;
        ciudad:string;
    }
    
    
    const superHeroes:superheroes = {
        nombre:"Spiderman",
        edad: 30,
        direccion: {
            calle:"Culo St",
            pais: "USA",
            ciudad:"NY"
        },
        mostrarDireccion(){
            return this.nombre + ", " + this.edad + ", " + this.direccion.ciudad;
        }
    }
    const direccion = superHeroes.mostrarDireccion();
    console.log(direccion);