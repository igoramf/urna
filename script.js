let seuVotoPara = document.querySelector(`.d-1-span span`);
let cargo = document.querySelector(`.d-1-candidato span`);
let infoCandidato = document.querySelector(`.d-1-info-candidato`);
let aviso = document.querySelector(`.d-2`);
let imagens = document.querySelector(`.d1-right`);
let numeros = document.querySelector('.d-1-voto-numero');

let etapaAtual = 0;
let numero = '';
let etapa = etapas[etapaAtual];

function comecarEtapa(){
    let numeroHTML = `<div class="text-Numero">Número:</div>`;
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
    console.log(`Atualizando interface`)
    let candidato = etapa.candidatos.filter((item) => {
        if(item.numero === numero){
            return true;
        }else{
            return false;
        }
    })

    if(candidato.length > 0){
        candidato = candidato[0];
            
        seuVotoPara.style.display = `block`;
        infoCandidato.innerHTML = `Nome: ${candidato.nome}<br/>
        Partido: ${candidato.partido}<br/>`
        aviso.style.display = `block`;

        let fotosHTML = ``
        for(let i = 0; i < candidato.fotos.length; i++){
            fotosHTML += `<div class="d-1-image">
            <img src="images/${candidato.fotos[i].url}" alt="">
            ${candidato.fotos[i].legenda}
        </div>`
        }

        imagens.innerHTML = fotosHTML;
    }

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

comecarEtapa()