const readline = require('readline')
const { stdin: input, stdout: output } = require('process')
const rl = readline.createInterface({ input, output })
const question = q => new Promise((rs, rj) => rl.question(q + ' ', a => rs(a)))

void async function () {
    let soma = 0
    let count = 0
    let media = 0

    while (true) {
        let strNota = await question(`Digite o valor da ${count + 1}° nota ou N/n para cacular a média entre os valores inseridos:`)

        if (strNota.toUpperCase() == 'N') {
            break
        }

        // RegEx = Regular Expression
        if (/[A-z]/m.test(strNota)) {
            console.log("Erro! não digite letras que não seja N/n.")
            continue
        }

        let nota = parseFloat(strNota)

        if (nota < 0) {
            console.log("Erro! :( Digite novamente:")
            continue
        }

        if (nota > 10) {
            console.log("Erro! :( Digite novamente")
            continue
        }

        if (isNaN(nota)) {
            console.log("Erro! :( Digite novamente")
            continue
        }

        soma = soma + nota
        count++
    }

    media = soma / count
    console.log(`[ RESULTADO ] A média de todos os valores informados é`, media)
    process.exit()
}()