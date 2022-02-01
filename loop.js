
//for
for(let i = 5; i >= 1; i--){
    if(i % 2 !== 0){
        console.log(i)
    }
}


//while
let x = 5;

while (x >= 1){
    if(x % 2 !== 0){
        console.log(x)
    }

    x--;
}

//do while
let i = 0;

do{
    console.log('digitando',i);
    i++;
}while(i<10)




//objeto
const pessoa = {
    //atributo: valor
    name: 'abdiel',
    idade: 21
};

for(let chave in pessoa){
    console.log(chave,pessoa);    
}

const cores = ['vermelho', 'azul', 'verde'];

for(let indice in cores){
    console.log(indice,cores[indice])
}

//for-of
for(let cor of cores){
    console.log(cor)
}

