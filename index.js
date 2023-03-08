import aplicacao from 'readline-sync';

console.log ('Aplicação de Juros \n')
let divida = aplicacao.question ("Informe o valor da Divida: R$ ")

if (divida > 0){
    let dias_atraso = aplicacao.question ("Informe quantos dias de atraso do boleto: ")
    if (dias_atraso <= 0){
        console.log("Você está em dia!")
    } else if (dias_atraso <= 15){
        let juros = (divida * 5) / 100
        let total = Number(juros) + Number(divida)
        console.log("\n--------------------------------------\n")
        console.log("Valor original da divida: R$ " +divida)
        console.log("Dias atrasados: " +dias_atraso)
        console.log("Taxa de juros: 5%")
        console.log("Valor total com juros: R$ " +total)
    } else{
        let juros = (divida * 10) / 100
        let total = Number(juros) + Number(divida)
        console.log("\n--------------------------------------\n")
        console.log("Valor original da divida: R$ " +divida)
        console.log("Dias atrasados: " +dias_atraso)
        console.log("Taxa de juros: 10%")
        console.log("Valor total com juros: R$ " +total)
    }
}
else {
    console.log ("O valor da divida deve ser maior que zero\n")
 }
 
