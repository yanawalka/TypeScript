function sumar(a:number,b:number): number{
    return a+b;
    }
    
    const sumarFlecha=(a:number, b:number):number => {
    return a+b;
    }
    
    const multiplicar=(a:number, b?:number, c:number=2):number =>{
        return a *  c;
    }
    // const resultado= multiplicar(3);
    // console.log(resultado);
    
    
    
    
    interface PersonajesLOL{
        nombre:string;
        pv:number;
    
    }
    
    const nuevoPersonaje: PersonajesLOL = {
    nombre: 'zona',
    pv: 80
    }
    
    // function curar ( personaje:PersonajesLOL, curarx:number): void{
    // personaje.nombre='ellita';
    // }
    function nombrecamb(personaje:PersonajesLOL, cambio:string, ph:number):void{
    
    personaje.nombre=cambio;
    personaje.pv += ph;
    }
    
    nombrecamb(nuevoPersonaje,'ellitaaaaaa',20);
    
    
    console.log(nuevoPersonaje);