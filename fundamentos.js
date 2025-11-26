/*/
Tipos básicos:
- number
- string 
- boolean
- null
- undefined
- object
- array
/*/

// let array = [1, 2, true, "Thiago", 5.7];
// array[2] = false;

// console.log(array);

// array.shift()
// console.log(array);

/*/
Operações com arrays:
. push
. unshift
. pop
. shift
/*/

// Variaveis
let nome = "Thiago";
let idade = 19;
const cidade = "Carpina";

// Operadores
let maiorDeIdade = idade >= 18;

// Estruturas de controle
if (maiorDeIdade) {
  console.log(nome + " é maior de idade.");
} else {
  console.log(nome + " é menor de idade.");
}

// Arrays
let habilidades = ["JavaScript", "HTML", "CSS"];

// Loop pra mostrar cada habilidade
for (let i = 0; i < habilidades.length; i++) {
  console.log("Habilidade:", habilidades[i]);
}

// Funçoes
function apresentarUsuario(nome, idade, cidade) {
  return `Eu sou ${nome}, tenho ${idade} anos e moro em ${cidade}.`;
}

console.log(apresentarUsuario(nome, idade, cidade));

// Arrow function 
const dobrar = (n) => n * 2;

console.log("Dobro da idade:", dobrar(idade));

// while para contar
let contador = 3;
while (contador > 0) {
  console.log("Contando:", contador);
  contador--;
}
