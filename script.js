let seuVotoPara = document.querySelector(`.d-1-span span`);
let cargo = document.querySelector(`.d-1-candidato span`);
let infoCandidato = document.querySelector(`.d-1-info-candidato`);
let aviso = document.querySelector(`.d-2`);
let imagens = document.querySelector(`.d1-right`);
let numeros = document.querySelector('.d-1-voto-numero');

let etapaAtual = 0;
let numero = '';

function comecarEtapa(){
    let etapa = etapas[etapaAtual];

    let numeroHTML = ``;
    for (let i = 0; i < etapa.numeros; i++) {
        if(i === 0){
            numeroHTML += `<div class="numero pisca"></div>`
        }else{
            numeroHTML += `<div class="numero"></div>`
        }
    }

    seuVotoPara.style.display = `none`;
    cargo.innerHTML = etapa.titulo;
    infoCandidato.innerHTML = ``
    aviso.style.display = `none`
    imagens.innerHTML = ``
    numeros.innerHTML = numeroHTML;
}

function atualizaInterface(){
    alert(`finalizou o voto`)
}

function clicou(num){
    let numeroPisca =  document.querySelector(`.numero.pisca`)
    if(numeroPisca !== null){
        numeroPisca.innerHTML = num;
        numero = `${numero}${num}`;

        numeroPisca.classList.remove(`pisca`);

        if(numeroPisca.nextElementSibling !== null){
            numeroPisca.nextElementSibling.classList.add(`pisca`)
        }else{
            atualizaInterface();
        }
    }
}

function branco(){

}

function corrige(){

}

function confirma(){

}