/** Em um concurso público, para que o candidato seja aprovado, 
 * o ele deve tirar uma nota maior ou igual a 7, e ter 10 anos de experiência.
 *Escreva um programa em javascript que, capture a nota e o tempo de experiência 
 de um candidato. O programa deve dar um alerta exibindo se o candidato foi aprovado
  ou reprovado, baseado na sua nota e em seu tempo de experiência.*/

  var nota
  var experiencia
  
  nota = parseFloat(prompt('Informe a nota do candidato'))
  
  experiencia = parseInt(prompt('informe o tempo de experiencia'))
  
  if (nota >= 7 && experiencia == 10) {
    alert('Candidato aprovado');
  }
  else {
    alert('candidato reprovado')
  }