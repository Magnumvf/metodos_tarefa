//Metodos de array

//1 - REVERSE - REVERTE A ORDEM DOS ELEMENTOS DO ARRAY

const frutas = ["Banana", "Laranja", "Maça", "Manga"];
frutas.reverse();

//2 - EVERY - EXECUTA UMA FUNÇÃO PARA CADA ELEMENTO DO ARRAY, SE TODOS OS ELEMENTOS PASSAREM NO TESTE, RETORNA TRUE, SENÃO, RETORNA FALSE
const ages = [32, 33, 16, 40];

idades.every(verificarIdade)

function verificarIdade(idades) {
  return idades > 18;
}

//3 - TOSTRING - RETORNA UMA STRING COM OS VALORES DOS ELEMENTOS DO ARRAY, SEPARADOS POR VIRGULA
const frutas1 = ["Banana", "Laranja", "Maça", "Manga"];
let texto = frutas1.toString();

//4 - CONCAT -  CONCATENA(JUNTA) DOIS OU MAIS ARRAY,RETORNANDO UM NOVO ARRAY
const arr1 = ["Cecilie", "Lone"];
const arr2 = ["Emil", "Tobias", "Linus"];
const arr3 = ["Robin"];
const children = arr1.concat(arr2, arr3);

//5 - ISARRAY - RETORNA TRUE SE O OBJETO FOR UM ARRAY, SENÃO RETORNA FALSE
const frutas2 = ["Banana", "Laranja", "Maça", "Manga"];
let resultado =  Array.isArray(frutas2);
