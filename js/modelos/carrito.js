//Array temporal

class CarritoModel {
    carrito = []
}             

/* //------------------------------------------------

//Los metodos de instancia no estan fuertemente enlazados con los objetos que creemos. Por eso es muy comun enlazar fuertemente en el constructor todos los metodos de instancia (linea 25)
class Persona {
    constructor(nombre){
        this.nombre = nombre
        this.saludar = this.saludar.bind(this)
    }

    saludar() {
        console.log(`Hola, me llamo ${this.nombre}`)
    }
}

const julian = new Persona ('Julian')


//Propuesta de lenguaje no incorporada: escribir los métodos de instancia con arrow functions
class Persona {
    constructor(nombre){
        this.nombre = nombre
    }

    saludar = () => {
        console.log(`Hola, me llamo ${this.nombre}`)
    }
}

const julian = new Persona ('Julian')

//plug-in babel 
//https://www.npmjs.com/package/babel-plugin-transform-class-property-arrow-functions

//------------------------------------------------ */