//obter média a partir de array

//0 a 59: F
// 60-09: D
// 70-79: C
// 80-90: D
// 90-100: A

const array = [70,70,80]

console.log(mediaAluno(array))

function mediaAluno(notas){

    const media = calcularMedia(notas)

    if(media < 60) return "F"
    if(media < 69) return "D"
    if(media < 79) return "C"
    if(media < 89)return "D"   
    return "A"
    
}

function calcularMedia(array){
    let soma = 0;
    tamanho = array.length

    for(let valor of array){
        soma = soma + valor
    }

    return soma / tamanho

}