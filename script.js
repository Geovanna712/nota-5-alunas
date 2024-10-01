let nomes = []
let notas = []
let i
let soma=0

for( i=0; i<5; i++) {

    nomes [i]= prompt("Digite seu nome:")
    notas [i]= Number (prompt("Digite sua nota:"))

    soma=soma+notas[i]
}

media=soma/5

for( i=0; i<5; i++) {

    if(notas[i]<media) {

        console.log(`${nomes[i]}: ${notas[i]}`)
 
    }

}