//verificar velocidade

verificarVelocidade(130)

function verificarVelocidade(v){

    const velocidadeMaxima = 70
    const kmPorPonto = 5;

    if (v <= velocidadeMaxima)
        console.log('ok')
    else{
        const pontos = ((v - velocidadeMaxima) / kmPorPonto)
        if(pontos >= 12)
            console.log('Carteira Suspensa')
        
        console.log('Pontos:',Math.floor(pontos))

    }

}