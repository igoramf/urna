let seuVotoPara = document.querySelector(`.d-1-span span`);
let cargo = document.querySelector(`.d-1-candidato span`);
let infoCandidato = document.querySelector(`.d-1-info-candidato`);
let aviso = document.querySelector(`.d-2`);
let imagens = document.querySelector(`.d1-right`);
let numeros = document.querySelector('.d-1-voto-numero');

let etapaAtual = 0;
let numero = '';
let votoBranco = false;
let votos = [];


function comecarEtapa(){
    numero = ``;
    votoBranco = false;
    let etapa = etapas[etapaAtual];

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
    let etapa = etapas[etapaAtual];
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
            if(candidato.fotos[i].small){
                fotosHTML += 
                `<div class="d-1-image small">
                    <img src="images/${candidato.fotos[i].url}" alt="">
                    ${candidato.fotos[i].legenda}
                </div>`
            }else{
                fotosHTML += 
                `<div class="d-1-image">
                    <img src="images/${candidato.fotos[i].url}" alt="">
                    ${candidato.fotos[i].legenda}
                </div>`
            }
        }

        imagens.innerHTML = fotosHTML;
    }else{
        seuVotoPara.style.display = `block`;
        aviso.style.display = `block`;
        infoCandidato.innerHTML = `<div><h3>NUMERO ERRADO</h3>
        <div class ='nulo pisca'>VOTO NULO</div>
        </div>
        `
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
    numero = ``
    votoBranco = true;
    seuVotoPara.style.display = `block`;
    aviso.style.display = `block`;
    numeros.innerHTML = '';
    infoCandidato.innerHTML = `<div class ='nulo pisca'>VOTO EM BRANCO</div>
    `;
    imagens.innerHTML = ''
}

function corrige(){
    comecarEtapa();
}

function confirma(){
    let etapa = etapas[etapaAtual];
    let votoConfimardo = false;
    if(votoBranco){
        votoConfimardo = true;
        votos.push({
            etapa:etapas[etapaAtual].titulo,
            voto:'branco'
        })
    } else if(numero.length === etapa.numeros){
        votoConfimardo = true;
        votos.push({
            etapa:etapas[etapaAtual].titulo,
            voto: numero
        })
    }

    if(votoConfimardo){
        etapaAtual++;
        if(etapas[etapaAtual] !== undefined){
            comecarEtapa();
        }
        else{
            infoCandidato.innerHTML = `<div class ='fim'> FIM </div>
            `;
            seuVotoPara.style.display = `none`;
            cargo.innerHTML = ''
            aviso.style.display = `none`
            imagens.innerHTML = ``;
            numeros.innerHTML = '';
            console.log(votos)
        }
    }
}

comecarEtapa()