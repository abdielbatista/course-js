function Not(marcaNot, cpuNot, hdNot, ramNot){
    this.marcaNot = marcaNot,
    this.cpuNot = cpuNot,
    this.hdNot = hdNot,
    this.ramNot = ramNot
}

const notebook = new Not('ACER', 'AMD', '1TB', '8GB')
console.log(notebook)