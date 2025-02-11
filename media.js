var nota1 = 8; // Variavel que recebe a 1º nota.
var nota2 = 10; // Variavel que recebe a 2º nota.
var nota3 = 5 // Variavel que recebe a 3º nota.

// Verificando se as notas estão dentro do intervalo válido de 0 a 10.
for (var i = 0; i < 1; i++) {
    if (nota1 < 0 || nota1 > 10 || nota2 < 0 || nota2 > 10 || nota3 < 0 || nota3 > 10) {
        console.log("Por favor, insira notas válidas entre 0 e 10.");
        break;
    }
}

// Calculando a média das notas
var media = (nota1 + nota2 + nota3) / 3;

// Verificando se o aluno foi aprovado ou não
var mediaMinima = 7; // Defina aqui a média mínima para aprovação
var situacao = (media >= mediaMinima) ? "O aluno foi aprovado" : "O aluno foi reprovado";

// Exibindo o resultado
console.log("Média do aluno: " + media.toFixed(2)); // Exibe a média com 2 casas decimais
console.log("Situação do aluno: " + situacao);

