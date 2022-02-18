// numeros primos

exibirNumPrimos(15);

function exibirNumPrimos(limite){
    for(let num = 2; num <= limite; num++){
        let primo = true;

        for(let div = 2; div < num; div++){
            if(num % div === 0){
                primo = false;
                break;
            }
        }
        if (primo) console.log(num)
    }
}