console.log("ARK SURVIVAL EVOLVED - CRIATURAS NATIVAS - MAPA: SCORCHED EARTH");

// Semana 1

const nomeComum = "Besouro Cantil";
const especie = "Scutinphora puteus";
const grupo = "Invertebrado";
const dieta = "Herbívoro";
const temperamento = "Passivo";
const podeDanificar = ["estufa", "palha", "madeira"]; 
const pesoCarregavel = Number(30);
const domesticavel = false;

const nomeComum1 = "Mariposa do Deserto";
const especie1 = "Lymantria sporarmis";
const grupo1 = "Invertebrado";
const dieta1 = "Herbívoro";
const temperamento1 = "Evasivo";
const podeDanificar1 = ["estufa", "palha", "madeira"]; 
const pesoCarregavel1 = Number(149);
const domesticavel1 = true;

const nomeComum2 = "Jerboa";
const especie2 = "Renopila amplexus";
const grupo2 = "Mamífero";
const dieta2 = "Herbívoro";
const temperamento2 = "Covarde";
const podeDanificar2 = ["estufa", "palha"]; 
const pesoCarregavel2 = Number(25);
const domesticavel2 = true;

const nomeComum3 = "Louva-a-Deus";
const especie3 = "Empusa discipulus";
const grupo3 = "Invertebrado";
const dieta3 = "Carnívoro";
const temperamento3 = "Agressivo";
const podeDanificar3 = ["estufa", "palha"]; 
const pesoCarregavel3 = Number(200);
const domesticavel3 = true;

const nomeComum4 = "Morelátopo";
const especie4 = "Morellatops dromedarius";
const grupo4 = "Dinosauro";
const dieta4 = "Herbívoro";
const temperamento4 = "Passivo";
const podeDanificar4 = ["estufa", "palha", "madeira"]; 
const pesoCarregavel4 = Number(300);
const domesticavel4 = true;

const nomeComum5 = "Fênix";
const especie5 = "Desconhecida";
const grupo5 = "Criatura de fantasia";
const dieta5 = "Devorador de chamas";
const temperamento5 = "Enganoso";
const podeDanificar5 = ["estufa", "palha", "madeira"]; 
const pesoCarregavel5 = Number(35);
const domesticavel5 = true;

const nomeComum6 = "Golem de Pedra";
const especie6 = "Colossus petram";
const grupo6 = "Criatura de fantasia";
const dieta6 = "Minerais";
const temperamento6 = "Extremamente territorial";
const podeDanificar6 = ["estufa", "palha", "madeira", "adobe", "pedra"]; 
const pesoCarregavel6 = Number(1000);
const domesticavel6 = true;

const nomeComum7 = "Dragão Espinhoso";
const especie7 = "Moloch sagittarius";
const grupo7 = "Réptil";
const dieta7 = "Carnívoro";
const temperamento7 = "Territorial";
const podeDanificar7 = ["estufa", "palha", "madeira"]; 
const pesoCarregavel7 = Number(150);
const domesticavel7 = true;

const nomeComum8 = "Abutre";
const especie8 = "Torgos arcam";
const grupo8 = "Pássaro";
const dieta8 = "Carniça";
const temperamento8 = "Neutro";
const podeDanificar8 = ["estufa", "palha"]; 
const pesoCarregavel8 = Number(70);
const domesticavel8 = true;

const nomeComum9 = "Wyvern";
const especie9 = "Draconis vipera";
const grupo9 = "Criatura de fantasia";
const dieta9 = "Carnívoro";
const temperamento9 = "Agressivo";
const podeDanificar9 = ["estufa", "palha", "madeira"]; 
const pesoCarregavel9 = Number(416);
const domesticavel9 = true;

const nomeComum10 = "Verme da Morte";
const especie10 = "Khorkoi arrakis";
const grupo10 = "Criatura de fantasia";
const dieta10 = "Carnívoro";
const temperamento10 = "Extremamente territorial";
const podeDanificar10 = ["estufa", "palha", "madeira", "adobe", "pedra"];
const pesoCarregavel10 = Number(1000);
const domesticavel10 = false;

const nomeComum11 = "Mantícora";
const especie11 = "Desconhecido";
const grupo11 = "Creatura de fantasia, Boss";
const dieta11 = "Carnívoro";
const temperamento11 = "Agressivo";
const podeDanificar11 = ["estufa", "palha", "madeira", "adobe", "pedra"];
const pesoCarregavel11 = Number(1000);
const domesticavel11 = false;

const total = pesoCarregavel + pesoCarregavel1 + pesoCarregavel2 + pesoCarregavel3 + pesoCarregavel4 + pesoCarregavel5 + pesoCarregavel6 + pesoCarregavel7 + pesoCarregavel8 + pesoCarregavel9 + pesoCarregavel10 + pesoCarregavel11;
const media = total / 12;

console.log("Média do peso carregável das criaturas:", media);

const domesticaveis = domesticavel && domesticavel1 && domesticavel2 && domesticavel3 && domesticavel4 && domesticavel5 && domesticavel6 && domesticavel7 && domesticavel8 && domesticavel9 && domesticavel10 && domesticavel11;
console.log("Todas criaturas são domesticáveis?", domesticaveis);

// Semana 2

// console.log(`${nomeComum.toUpperCase()}\nEspécie: ${especie}\nGrupo: ${grupo}\nDieta: ${dieta}\nTemperamento: ${temperamento}\nPode danificar: ${podeDanificar.join()}\nPeso Carregável: ${pesoCarregavel}\nA criatura é domesticável? ${domesticavel}`);

// console.log(`${nomeComum1.toUpperCase()}\nEspécie: ${especie1}\nGrupo: ${grupo1}\nDieta: ${dieta1}\nTemperamento: ${temperamento1}\nPode danificar: ${podeDanificar1.join()}\nPeso Carregável: ${pesoCarregavel1}\nA criatura é domesticável? ${domesticavel1}`);

// console.log(`${nomeComum2.toUpperCase()}\nEspécie: ${especie2}\nGrupo: ${grupo2}\nDieta: ${dieta2}\nTemperamento: ${temperamento2}\nPode danificar: ${podeDanificar2.join()}\nPeso Carregável: ${pesoCarregavel2}\nA criatura é domesticável? ${domesticavel2}`);

// console.log(`${nomeComum3.toUpperCase()}\nEspécie: ${especie3}\nGrupo: ${grupo3}\nDieta: ${dieta3}\nTemperamento: ${temperamento3}\nPode danificar: ${podeDanificar3.join()}\nPeso Carregável: ${pesoCarregavel3}\nA criatura é domesticável? ${domesticavel3}`);

// console.log(`${nomeComum4.toUpperCase()}\nEspécie: ${especie4}\nGrupo: ${grupo4}\nDieta: ${dieta4}\nTemperamento: ${temperamento4}\nPode danificar: ${podeDanificar4.join()}\nPeso Carregável: ${pesoCarregavel4}\nA criatura é domesticável? ${domesticavel4}`);

// console.log(`${nomeComum5.toUpperCase()}\nEspécie: ${especie5}\nGrupo: ${grupo5}\nDieta: ${dieta5}\nTemperamento: ${temperamento5}\nPode danificar: ${podeDanificar.join()}\nPeso Carregável: ${pesoCarregavel}\nA criatura é domesticável? ${domesticavel}`);

// console.log(`${nomeComum6.toUpperCase()}\nEspécie: ${especie6}\nGrupo: ${grupo6}\nDieta: ${dieta6}\nTemperamento: ${temperamento6}\nPode danificar: ${podeDanificar6.join()}\nPeso Carregável: ${pesoCarregavel6}\nA criatura é domesticável? ${domesticavel6}`);

// console.log(`${nomeComum7.toUpperCase()}\nEspécie: ${especie7}\nGrupo: ${grupo7}\nDieta: ${dieta7}\nTemperamento: ${temperamento7}\nPode danificar: ${podeDanificar7.join()}\nPeso Carregável: ${pesoCarregavel7}\nA criatura é domesticável? ${domesticavel7}`);

// console.log(`${nomeComum8.toUpperCase()}\nEspécie: ${especie8}\nGrupo: ${grupo8}\nDieta: ${dieta8}\nTemperamento: ${temperamento8}\nPode danificar: ${podeDanificar8.join()}\nPeso Carregável: ${pesoCarregavel8}\nA criatura é domesticável? ${domesticavel8}`);

// console.log(`${nomeComum9.toUpperCase()}\nEspécie: ${especie9}\nGrupo: ${grupo9}\nDieta: ${dieta9}\nTemperamento: ${temperamento9}\nPode danificar: ${podeDanificar9.join()}\nPeso Carregável: ${pesoCarregavel9}\nA criatura é domesticável? ${domesticavel9}`);

// console.log(`${nomeComum10.toUpperCase()}\nEspécie: ${especie10}\nGrupo: ${grupo10}\nDieta: ${dieta10}\nTemperamento: ${temperamento10}\nPode danificar: ${podeDanificar10.join()}\nPeso Carregável: ${pesoCarregavel10}\nA criatura é domesticável? ${domesticavel10}`);

// console.log(`${nomeComum11.toUpperCase()}\nEspécie: ${especie11}\nGrupo: ${grupo11}\nDieta: ${dieta11}\nTemperamento: ${temperamento11}\nPode danificar: ${podeDanificar11.join()}\nPeso Carregável: ${pesoCarregavel11}\nA criatura é domesticável? ${domesticavel11}`);

// Semana 3

const objeto1 = {
    nomeComum: "Besouro Cantil",
    especie: "Scutinphora puteus",
    grupo: "Invertebrado",
    dieta: "Herbívoro",
    temperamento: "Passivo",
    podeDanificar: ["estufa", "palha", "madeira"],
    pesoCarregavel: Number(30),
    domesticavel: false,
    imagem: "./imagens/besouro-cantil.jpg"
};

const objeto2 = {
    nomeComum: "Mariposa do Deserto",
    especie: "Lymantria sporarmis",
    grupo: "Invertebrado",
    dieta: "Herbívoro",
    temperamento: "Evasivo",
    podeDanificar: ["estufa", "palha", "madeira"],
    pesoCarregavel: Number(149),
    domesticavel: true,
    imagem: "./imagens/mariposa.jpg"
}

const objeto3 = {
    nomeComum: "Jerboa",
    especie: "Renopila amplexus",
    grupo: "Mamífero",
    dieta: "Herbívoro",
    temperamento: "Covarde",
    podeDanificar: ["estufa", "palha"],
    pesoCarregavel: Number(25),
    domesticavel: true,
    imagem: "./imagens/jerboa.jpg"
}

const objeto4 = {
    nomeComum: "Louva-a-Deus",
    especie: "Empusa discipulus",
    grupo: "Invertebrado",
    dieta: "Carnívoro",
    temperamento: "Agressivo",
    podeDanificar: ["estufa", "palha"],
    pesoCarregavel: Number(200),
    domesticavel: true,
    imagem: "./imagens/louva-a-deus.jpg"
}

const objeto5 = {
    nomeComum: "Morelátopo",
    especie: "Morellatops dromedarius",
    grupo: "Dinosauro",
    dieta: "Herbívoro",
    temperamento: "Passivo",
    podeDanificar: ["estufa", "palha", "madeira"],
    pesoCarregavel: Number(300),
    domesticavel: true,
    imagem: "./imagens/morelatopo.jpg"
}

const objeto6 = {
    nomeComum: "Fênix",
    especie: "Desconhecida",
    grupo: "Criatura de fantasia",
    dieta: "Devorador de chamas",
    temperamento: "Enganoso",
    podeDanificar: ["estufa", "palha", "madeira"],
    pesoCarregavel: Number(35),
    domesticavel: true,
    imagem: "./imagens/fenix.jpg"
}

const objeto7 = {
    nomeComum: "Golem de Pedra",
    especie: "Colossus petram",
    grupo: "Criatura de fantasia",
    dieta: "Minerais",
    temperamento: "Extremamente territorial",
    podeDanificar: ["estufa", "palha", "madeira", "adobe", "pedra"],
    pesoCarregavel: Number(1000),
    domesticavel: true,
    imagem: "./imagens/golem-de-pedra.jpg"
}

const objeto8 = {
    nomeComum: "Dragão Espinhoso",
    especie: "Moloch sagittarius",
    grupo: "Réptil",
    dieta: "Carnívoro",
    temperamento: "Territorial",
    podeDanificar: ["estufa", "palha", "madeira"],
    pesoCarregavel: Number(150),
    domesticavel: true,
    imagem: "./imagens/dragao-espinhoso.jpg"
}

const objeto9 = {
    nomeComum: "Abutre",
    especie: "Torgos arcam",
    grupo: "Pássaro",
    dieta: "Carniça",
    temperamento: "Neutro",
    podeDanificar: ["estufa", "palha"],
    pesoCarregavel: Number(70),
    domesticavel: true,
    imagem: "./imagens/abutre.jpg"
}

const objeto10 = {
    nomeComum: "Wyvern",
    especie: "Draconis vipera",
    grupo: "Criatura de fantasia",
    dieta: "Carnívoro",
    temperamento: "Agressivo",
    podeDanificar: ["estufa", "palha", "madeira"],
    pesoCarregavel: Number(416),
    domesticavel: true,
    imagem: "./imagens/wyvern.jpg"
}

const objeto11 = {
    nomeComum: "Verme da Morte",
    especie: "Khorkoi arrakis",
    grupo: "Criatura de fantasia",
    dieta: "Carnívoro",
    temperamento: "Extremamente territorial",
    podeDanificar: ["estufa", "palha", "madeira", "adobe", "pedra"],
    pesoCarregavel: Number(1000),
    domesticavel: false,
    imagem: "./imagens/verme-da-morte.jpg"
}

const objeto12 = {
    nomeComum: "Mantícora",
    especie: "Desconhecido",
    grupo: "Creatura de fantasia, Boss",
    dieta: "Carnívoro",
    temperamento: "Agressivo",
    podeDanificar: ["estufa", "palha", "madeira", "adobe", "pedra"],
    pesoCarregavel: Number(1000),
    domesticavel: false,
    imagem: "./imagens/manticora.jpg"
}

// Array de Objetos

// const criaturasArkSE = [
//     {
//         nomeComum: "Besouro Cantil",
//         especie: "Scutinphora puteus",
//         grupo: "Invertebrado",
//         dieta: "Herbívoro",
//         temperamento: "Passivo",
//         podeDanificar: ["estufa", "palha", "madeira"],
//         pesoCarregavel: Number(30),
//         domesticavel: false,
//         imagem: "./imagens/besouro-cantil.jpg"
//     },
    
//     {
//         nomeComum: "Mariposa do Deserto",
//         especie: "Lymantria sporarmis",
//         grupo: "Invertebrado",
//         dieta: "Herbívoro",
//         temperamento: "Evasivo",
//         podeDanificar: ["estufa", "palha", "madeira"],
//         pesoCarregavel: Number(149),
//         domesticavel: true,
//         imagem: "./imagens/mariposa.jpg"
//     },
    
//     {
//         nomeComum: "Jerboa",
//         especie: "Renopila amplexus",
//         grupo: "Mamífero",
//         dieta: "Herbívoro",
//         temperamento: "Covarde",
//         podeDanificar: ["estufa", "palha"],
//         pesoCarregavel: Number(25),
//         domesticavel: true,
//         imagem: "./imagens/jerboa.jpg"
//     },
    
//     {
//         nomeComum: "Louva-a-Deus",
//         especie: "Empusa discipulus",
//         grupo: "Invertebrado",
//         dieta: "Carnívoro",
//         temperamento: "Agressivo",
//         podeDanificar: ["estufa", "palha"],
//         pesoCarregavel: Number(200),
//         domesticavel: true,
//         imagem: "./imagens/louva-a-deus.jpg"
//     },
    
//     {
//         nomeComum: "Morelátopo",
//         especie: "Morellatops dromedarius",
//         grupo: "Dinosauro",
//         dieta: "Herbívoro",
//         temperamento: "Passivo",
//         podeDanificar: ["estufa", "palha", "madeira"],
//         pesoCarregavel: Number(300),
//         domesticavel: true,
//         imagem: "./imagens/morelatopo.jpg"
//     },
    
//     {
//         nomeComum: "Fênix",
//         especie: "Desconhecida",
//         grupo: "Criatura de fantasia",
//         dieta: "Devorador de chamas",
//         temperamento: "Enganoso",
//         podeDanificar: ["estufa", "palha", "madeira"],
//         pesoCarregavel: Number(35),
//         domesticavel: true,
//         imagem: "./imagens/fenix.jpg"
//     },
    
//     {
//         nomeComum: "Golem de Pedra",
//         especie: "Colossus petram",
//         grupo: "Criatura de fantasia",
//         dieta: "Minerais",
//         temperamento: "Extremamente territorial",
//         podeDanificar: ["estufa", "palha", "madeira", "adobe", "pedra"],
//         pesoCarregavel: Number(1000),
//         domesticavel: true,
//         imagem: "./imagens/golem-de-pedra.jpg"
//     },
    
//     {
//         nomeComum: "Dragão Espinhoso",
//         especie: "Moloch sagittarius",
//         grupo: "Réptil",
//         dieta: "Carnívoro",
//         temperamento: "Territorial",
//         podeDanificar: ["estufa", "palha", "madeira"],
//         pesoCarregavel: Number(150),
//         domesticavel: true,
//         imagem: "./imagens/dragao-espinhoso.jpg"
//     },
    
//     {
//         nomeComum: "Abutre",
//         especie: "Torgos arcam",
//         grupo: "Pássaro",
//         dieta: "Carniça",
//         temperamento: "Neutro",
//         podeDanificar: ["estufa", "palha"],
//         pesoCarregavel: Number(70),
//         domesticavel: true,
//         imagem: "./imagens/abutre.jpg"
//     },
    
//     {
//         nomeComum: "Wyvern",
//         especie: "Draconis vipera",
//         grupo: "Criatura de fantasia",
//         dieta: "Carnívoro",
//         temperamento: "Agressivo",
//         podeDanificar: ["estufa", "palha", "madeira"],
//         pesoCarregavel: Number(416),
//         domesticavel: true,
//         imagem: "./imagens/wyvern.jpg"
//     },
    
//     {
//         nomeComum: "Verme da Morte",
//         especie: "Khorkoi arrakis",
//         grupo: "Criatura de fantasia",
//         dieta: "Carnívoro",
//         temperamento: "Extremamente territorial",
//         podeDanificar: ["estufa", "palha", "madeira", "adobe", "pedra"],
//         pesoCarregavel: Number(1000),
//         domesticavel: false,
//         imagem: "./imagens/verme-da-morte.jpg"
//     },
    
//     {
//         nomeComum: "Mantícora",
//         especie: "Desconhecido",
//         grupo: "Creatura de fantasia, Boss",
//         dieta: "Carnívoro",
//         temperamento: "Agressivo",
//         podeDanificar: ["estufa", "palha", "madeira", "adobe", "pedra"],
//         pesoCarregavel: Number(1000),
//         domesticavel: false,
//         imagem: "./imagens/manticora.jpg"
//     }
// ];

// criaturasArkSE.push(objeto1, objeto2, objeto3, objeto4, objeto5, objeto6, objeto7, objeto8, objeto9, objeto10, objeto11, objeto12);

// console.log(criaturasArkSE);

const criaturasArkSE = [];

// Semana 4

if (objeto1.domesticavel === true) {
    criaturasArkSE.push(objeto1)
}else{
    alert("O Besouro Cantil não foi adicionado, pois ele não é domesticável!")
}

if (objeto2.domesticavel === true) {
    criaturasArkSE.push(objeto2)
}else{
    alert("O item não foi adicionado!")
}

if (objeto3.domesticavel === true) {
    criaturasArkSE.push(objeto3)
}else{
    alert("O item não foi adicionado!")
}

if (objeto4.domesticavel === true) {
    criaturasArkSE.push(objeto4)
}else{
    alert("O item não foi adicionado!")
}

if (objeto5.domesticavel === true) {
    criaturasArkSE.push(objeto5)
}else{
    alert("O item não foi adicionado!")
}

if (objeto6.domesticavel === true) {
    criaturasArkSE.push(objeto6)
}else{
    alert("O item não foi adicionado!")
}

if (objeto7.domesticavel === true) {
    criaturasArkSE.push(objeto7)
}else{
    alert("O item não foi adicionado!")
}

if (objeto8.domesticavel === true) {
    criaturasArkSE.push(objeto8)
}else{
    alert("O item não foi adicionado!")
}

if (objeto9.domesticavel === true) {
    criaturasArkSE.push(objeto9)
}else{
    alert("O item não foi adicionado!")
}

if (objeto10.domesticavel === true) {
    criaturasArkSE.push(objeto10)
}else{
    alert("O item não foi adicionado!")
}

if (objeto11.domesticavel === true) {
    criaturasArkSE.push(objeto11)
}else{
    alert("O Verme da Morte não foi adicionado, pois ele não é domesticável!")
}

if (objeto12.domesticavel === true) {
    criaturasArkSE.push(objeto12)
}else{
    alert("A Mantícora não foi adicionada, pois ela não é domesticável!")
}

console.log(criaturasArkSE);

// Semana 5
// Código refatorado

for (let criatura of criaturasArkSE) {
    console.log(`${criatura.nomeComum.toUpperCase()}\nEspécie: ${criatura.especie}\nGrupo: ${criatura.grupo}\nDieta: ${criatura.dieta}\nTemperamento: ${criatura.temperamento}\nPode danificar: ${criatura.podeDanificar.join()}\nPeso carregável: ${criatura.pesoCarregavel}\nA criatura é domesticável? ${criatura.domesticavel}`)
}

// Semana 6

// const criaturaArk = (criatura) => {
//     let i = `${criatura.nomeComum.toUpperCase()}\nEspécie: ${criatura.especie}\nGrupo: ${criatura.grupo}\nDieta: ${criatura.dieta}\nTemperamento: ${criatura.temperamento}\nPode danificar: ${criatura.podeDanificar.join()}\nPeso carregável: ${criatura.pesoCarregavel}\nA criatura é domesticável? ${criatura.domesticavel}`
//     return i
// }

// const arkSe = criaturaArk(objeto1);
// console.log(arkSe);

// Semanas 11 e 12

function buscaCriatura() {
    const buscarC = document.getElementById("search-bar")
    console.log(buscarC.value)
    const filtrarC = filtrarCriatura(buscarC)
    console.log(`${filtrarC}` ? filtrarC: alert("Criatura não encontrada!"))
    criaturaEncontrada(filtrarC)
}

function filtrarCriatura(buscarC) {
    const filtrarC = criaturasArkSE.filter((item) => {return item.nomeComum.toUpperCase() === buscarC.value.toUpperCase()})
    console.log(`${filtrarC}` ? filtrarC: alert("Criatura não encontrada!"))
    if (filtrarC.length >= 1) {
        return filtrarC
    } else {
        return criaturasArkSE
    }
}

function criaturaEncontrada(array) {
    const criatura = document.getElementById("section")
    criatura.innerHTML = ""
    for (let i = 0; i < array.length; i++) {
        criatura.innerHTML += `<article class="card">
    <div id="imagem"><img src="${array[i].imagem}" alt="${array.nomeComum}"/></div>
    <ul>
        <li>${array[i].nomeComum.toUpperCase()}</li>
        <li>Espécie: ${array[i].especie}</li>
        <li>Grupo: ${array[i].grupo}</li>
        <li>Dieta: ${array[i].dieta}</li>
        <li>Temperamento: ${array[i].temperamento}</li>
        <li>Pode danificar: ${array[i].podeDanificar}</li>
        <li>Peso carregável: ${array[i].pesoCarregavel}</li>
        <li>A criatura é domesticável? ${array[i].domesticavel ? "sim" : "não"}</li>
    </ul>
    </article>`;
        }
}

criaturaEncontrada(criaturasArkSE);