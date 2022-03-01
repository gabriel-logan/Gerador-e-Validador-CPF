const inputValidaCpf = document.querySelector('#input_validador');
const btnValidaCpf = document.querySelector('#btn_validador');
const resultadoReposta = document.querySelector('#resposta');

function validaCpf() {
    let numberoBase = 10
    let numberoBase2 = 11
    let somaTotal = 0
    let somaTotal2 = 0
    const cpfLimpo = inputValidaCpf.value.replace(/\D+/g, '') // Transforma o cpf em um valor limpo sem caracter especial
    if (cpfLimpo.length !== 11) {
        resultadoReposta.setAttribute('class', 'vermelho')
        return resultadoReposta.innerText = 'CPF INVALIDO !'
    }
    for (let repetidor = 0; repetidor < 11; repetidor++) { // Executa os códigos 11 vezes em sequência.
        for (let contador of cpfLimpo[repetidor]) { // Faz a soma numérica de todos os números gerados por multiplicador.
            const multiplicador = contador * numberoBase
            numberoBase--
            somaTotal += multiplicador
        }
        for (let contador2 of cpfLimpo[repetidor]) { // Faz a soma numérica de todos os números gerados por multiplicador2.
            const multiplicador2 = contador2 * numberoBase2
            numberoBase2--
            somaTotal2 += multiplicador2
        }
        valorDeVerificacao = somaTotal - cpfLimpo[9] // Coleta a soma apenas ate o 9° numero da sequencia
        valorDeVerificacao2 = somaTotal2 - cpfLimpo[10] // Coleta a soma apenas ate o 10° numero da sequencia
        var primeiroVerificador = (11 - (valorDeVerificacao % 11)) // Calcula o Primeiro digito verificador
        var segundoVerificador = (11 - (valorDeVerificacao2 % 11)) // Calcula o Segundo Digito verificador
    }
    if (primeiroVerificador > 9) {
        primeiroVerificador = 0
    }
    if (segundoVerificador > 9) {
        segundoVerificador = 0
    }
    // Valida o Numero gerado, se = true, CPF GERADO.
    if (primeiroVerificador === Number(cpfLimpo[9]) && segundoVerificador === Number(cpfLimpo[10]) && cpfLimpo.charAt(0).repeat(11) !== cpfLimpo) {
        console.log(`CPF VALIDO VERIFICADO: ${inputValidaCpf.value}`)
        resultadoReposta.setAttribute('class', 'verde')
        resultadoReposta.innerText = 'CPF VALIDO !'
    } else {
        resultadoReposta.setAttribute('class', 'vermelho')
        resultadoReposta.innerText = 'CPF INVALIDO !'
    }
}
btnValidaCpf.addEventListener('click', () => {
    if (inputValidaCpf.value == '') {
        resultadoReposta.setAttribute('class', 'vermelho')
        resultadoReposta.innerText = 'Digite um CPF !!!'
    } else {
        validaCpf()
    }
})