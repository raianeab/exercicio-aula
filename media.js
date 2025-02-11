var notas = [9.0, 4.0, 3.5]; // Array que recebe as notas.
var soma = 0;

// Verificando se as notas estão dentro do intervalo válido de 0 a 10.
for (var i = 0; i < 1; i++) 
{
    if (notas < 0 || notas > 10) 
    {
        console.log("Por favor, insira notas válidas entre 0 e 10.");
        break;
    }
}

// Calculando a média das notas
for (var i = 0; i < notas.length; i++) {soma += notas[i];}
var media = soma / notas.length;

// Verificando se o aluno foi aprovado ou não
var mediaMinima = 7; // Media minima para aprovação
var situacao = (media >= mediaMinima) ? "O aluno foi aprovado!" : "O aluno foi reprovado!";

// Exibindo o resultado
console.log("Média do aluno: " + media.toFixed(2)); // Exibe a média com 2 casas decimais
console.log("Situação do aluno: " + situacao);
console.log("Notas:" + notas);
