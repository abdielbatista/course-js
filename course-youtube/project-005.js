//percorrer objetos

const filme = {
    nome: 'Vingadores',
    ano: 2018,
    personagem: 'Capitão America'
}

exibirString(filme);

function exibirString(obj){
    for(let indice in obj){
        if(typeof obj[indice] == 'string')
            console.log((indice,obj[indice]))
    }
}