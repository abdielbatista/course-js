function criarCelular(marcaCelular, tamanhoTela, capacidadeBateria){
    return{
        marcaCelular,
        tamanhoTela,
        capacidadeBateria,
        ligar(){
            console.log("ligando...")
        }
    }
}

const celular01 = criarCelular('ASUS',6.5,5000);
console.log(celular01);

function notebook(marca, cpu, hd, ram){
    return{
        marca,
        cpu,
        hd,
        ram
    }
}

//chamando objeto
const not01 = notebook('ACER', 'AMD', '1tb', '8gb')
console.log(not01)