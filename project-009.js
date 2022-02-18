// numeros primos

exibirNumPrimos(15);

function exibirNumPrimos(limite){

    let i = 0

    while(i <= limite){
        
        let n = 1
        let c = 0

        while(n <= limite){
            if(i % n == 0){
                c = c + 1
            }
            n = n + 1
        }

        if (c == 2){
            console.log(i)
        }   

        i = i + 1             

    }
}

