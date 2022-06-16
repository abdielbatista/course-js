// numeros primos

exibirNumPrimos(15);

function exibirNumPrimos(limite){
    for(let num = 2; num <= limite; num++){

        if (ehPrimo(num) == true) console.log(num)
    
    }
}

function ehPrimo(num){
    let primo = true;
    for(let div = 2; div < num; div++){
        if(num % div === 0){
            primo = false;
        }
    }

    return primo
}