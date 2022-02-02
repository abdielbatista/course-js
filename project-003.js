verificarVelocidade(80);

function verificarVelocidade(v){

    v = Math.floor(v)

    if (v <= 70)
        console.log('ok')
    else{
        const pontos = (v - n) / 5
        if(pontos >= 12)
            console.log('Carteira Suspensa')
        
        console.log('Pontos:',pontos)

    }
}
