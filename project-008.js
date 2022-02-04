// criar uma função que exibe a quantidade de *
// pedidos

exibirAsteriscos(10);

function exibirAsteriscos(linhas){

    let padrao = ''
    let linha = 1
    
    for(let linha = 1; linha <= linhas; linha++)
        padrao = padrao + '*'
        console.log(padrao)
}
