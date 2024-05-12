let listaNumerosSorteados = [];
let quantidadeMaxima= 50;
let numeroSecreto  = gerarNumeroAleatorio();
let tentativas = 1;
console.log(numeroSecreto);

function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', 'Escolha o numero de 1 a 50:');
}

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.23});
}
exibirMensagemInicial();
function verificarChute() {
    let chute = document.querySelector('input').value;

    if(chute == numeroSecreto){
        exibirTextoNaTela('h1', 'Acertou');
        let palavraTentativa =  tentativas > 1? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}`;
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        if (numeroSecreto > chute){
            exibirTextoNaTela(`p`, `O número secreto é maior que ${chute}.`);
        } else {
            exibirTextoNaTela(`p`, `O Número secreto é menor que ${chute}.`);
        }
        tentativas++;
        limparCampo();
    }
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * 100 + 1);
    let quantidadeLista = listaNumerosSorteados.length;

    if(quantidadeLista ==  quantidadeMaxima) {
        listaNumerosSorteados =  [];
    }
    if(listaNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    }else{
        listaNumerosSorteados.push(numeroEscolhido)
        console.log(listaNumerosSorteados)
        return numeroEscolhido; 
    }
}
function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}
function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial()
    document.getElementById('reiniciar').setAttribute('disabled', true);
}

