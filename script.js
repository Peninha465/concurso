/*
    Crie uma lista de estudantes. Cada estudante dentro dessa lista 
    deverá conter os seguintes dados:

    - nome;
    - nota da primeira prova;
    - nota da segunda prova.

    Depois, crie uma função que irá calcular a média das notas de cada 
    aluno. Supondo que a média é 7 para entrar no concurso, verifique se 
    foi bem sucedido em entrar no concurso e mostre uma mensagem na tela.

*/

const students = [
    {
     name: 'Ana',
     note1: 6,
     note2: 8
    },
    {
     name: 'Carlos',
     note1: 3,
     note2: 4
    },
    {
     name: 'Graziele',
     note1: 9,
     note2: 8
    },
    {
     name: 'Rafael',
     note1: 7,
     note2: 8
    }
]

function printStudentresults (student) {
    const average = (student.note1 + student.note2) / 2;
    let result = `${student.name} obteve a média de ${average} pontos.\n`

    if (average >= 7) {
        result += 'Aprovado no concurso!';
    } else {
        result += 'Reprovado no concurso!';
    }

    return result;
}

for (let student of students){
    let resultMessage = printStudentresults(student)
    alert(resultMessage)
}