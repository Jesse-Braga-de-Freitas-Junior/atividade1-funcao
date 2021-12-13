const alunos = [
    {
        nome: 'Jessé',
        nota: 7,
        turma: '1B',
    },
    {
        nome: 'Miguel',
        nota: 9,
        turma: '1B',
    },
    {
        nome: 'Cristiane',
        nota: 8,
        turma: '1B',
    },
    {
        nome: 'Junior',
        nota: 3,
        turma: '2C',
    },   
];

function alunosAprovados(arr, media) {
    let aprovados = [];

    for(let i=0; i < arr.length; i++) {

       const {nota, nome} = arr[i];

       if(nota >= media) {
           aprovados.push(nome);
       }
    }
    return aprovados;
}

console.log(alunosAprovados(alunos, 5));