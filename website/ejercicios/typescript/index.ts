/* Typos básicos */

// Boolean
let muted: boolean = true;
muted = false;

// Numbers
let numerador: number = 42;
let denominador: number = 6;
let resultado = numerador / denominador;

// String
let nombre: string = 'Andres';
let saludo: string = `Hola, me llamo ${nombre}`;

// Arreglos
let people: string[] = [];
people = ['Andres', 'Sarah', 'Paola'];

let peopleAndNumbers: Array< string | number> = [];
peopleAndNumbers.push('Andres');
peopleAndNumbers.push(38);

// Enum
enum Color {
    Rojo = 'Rojo',
    Verde = 'Verde',
    Azul = 'Azul',
}

let colorFavorito: Color = Color.Rojo;
console.log(`Mi color favorito es: ${colorFavorito}`);

// Any
let comodin: any = 'Joker';
comodin = { type: 'Wildcard' }

// Object
let someObject: object = { type: 'Wildcard' };

/* Funciones */

function add(a: number, b: number): number {
    return a + b;
}
const sum = add(4, 5);

function createdAdder(a: number): (number) => number {
    return function(b: number) {
        return b + a;
    }
}
const addFour = createdAdder(4);
const fourPlusSix = addFour(6);

function fullName(firstName: string, lastName: string = 'Badillo') { // ? para poner el parametro opcional
    return `${firstName} ${lastName}`;
}

const andres = fullName('Andres', );
console.log(andres);

/* Interfaces */

interface Rectangulo {
    ancho: number,
    alto: number,
    color?: Color,
}

let rect: Rectangulo = {
    ancho: 4,
    alto: 6,
    color: Color.Azul
}

function area(r: Rectangulo) {
    return r.alto * r.ancho;
}
const areaRect = area(rect);
console.log(`El area del rectángulo es: ${areaRect}`);

rect.toString = function() {
    return this.color ? `Un rectangulo color ${this.color}` : `un rectangulo`
}

console.log(rect.toString());

