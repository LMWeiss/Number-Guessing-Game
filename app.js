let respostaFinal;
let salvos;
novoJogo();

function novoJogo(){
    
    document.getElementById('reiniciar').setAttribute('disabled', true);
    exibirNaTela('h1', 'Jogo do número secreto');
    exibirNaTela('p', 'Escolha um número de 1 a 10');
    limparInput()

    salvos = new Set();
    respostaFinal = gerarNumeroAleatorio();
}


function verificarChute(){
    
    
    let input = document.querySelector('input');
    let resposta = input.value;
    
    if(resposta != ''){

        if(salvos.has(resposta)){
            alert('Numero ja utilizado')  
        }
    
        else{
    
            if(resposta == respostaFinal){

                exibirNaTela('h1', 'Parabens, você acertou');
                exibirNaTela('p', `O número secreto era ${resposta}`);
                document.getElementById('reiniciar').removeAttribute('disabled');

            }
    
            else if(respostaFinal > resposta){

                salvos.add(resposta);
                exibirNaTela('p',`O número é maior que ${resposta}`);
                limparInput();

            }
    
            else{

                salvos.add(resposta);
                exibirNaTela('p',`O número é menor que ${resposta}`);
                limparInput();

            }
        }
    }
    
}

function limparInput() {

    resposta = document.querySelector('input');
    resposta.value = '';

}

function gerarNumeroAleatorio(){
    return parseInt(Math.random() * 10 + 1);
}

function exibirNaTela(tag, texto){

    let placeHolder = document.querySelector(tag);
    placeHolder.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Male', {rate: 1.8});

}