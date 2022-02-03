//multiplos de 05 - soma

somar(10)
function somar(limite){

    let multTres = 0;
    let multCinco = 0;

    for(let i = 0; i <= limite; i++)

        if(i % 3 == 0)
            multTres = multTres + i;
        
        else if(i % 5 == 0)
            multCinco = multCinco + i;
    
    console.log(multTres + multCinco)
}