//Initial References

let emoji = document.querySelector(".emoji");

let cores = ["#4bff81", "#4bb4ff", "#ff702e", "#b88cff", "#ffd21f"];
let olhos = document.querySelector(".olhos");
let sobrancelhas = document.querySelector(".sobrancelhas");
let bocas = document.querySelector(".boca");


let contagem = {
  cor: 0,
  olho: 0,
  sobrancelha: 0,
  boca: 0
};


let totalContagem = {
  olhosQtd: 6,
  sobrancelhasQtd: 4,
  bocaQtd: 5,
};

function alterarCor() {
  emoji.style.backgroundColor = cores[contagem.cor];

  if (contagem.cor < cores.length - 1) {
    contagem.cor++;
  } else {
    contagem.cor = 0;
  }
}

function alterarOlhos() {
  olhos.setAttribute("src", `./img/eye-${contagem.olho}.svg`);
  if (contagem.olho < totalContagem.olhosQtd - 1) {
    contagem.olho++

  } else {
    contagem.olho = 0;
  }
}


function alterarSobrancelhas() {
  sobrancelhas.setAttribute("src", `./img/eyebrow-${contagem.sobrancelha}.svg`);
  if (contagem.sobrancelha < totalContagem.sobrancelhasQtd - 1) {
    contagem.sobrancelha++
  } else {
    contagem.sobrancelha = 0;    
  }

}

function alterarBoca() {
  bocas.setAttribute("src", `./img/mouth-${contagem.boca}.svg`);
  if (contagem.boca < totalContagem.bocaQtd - 1) {
    contagem.boca++
  } else {
    contagem.boca = 0;
  }
}

function baixarEmoji() {
  // Obtém a class HTML div
  let elementoImg = document.querySelector('.emoji');

  // Converte a div em uma imagem usando html2canvas
  html2canvas(elementoImg).then(function(canvas) {
    // Salva a imagem resultante como um novo objeto URL 
    let imageDataURL = canvas.toDataURL('image/png');
    let linkDownload = document.createElement('a');
    linkDownload.download = 'emoji.png';
    linkDownload.href = imageDataURL;
    linkDownload.dataset.downloadurl = ['image/png', linkDownload.download, linkDownload.href].join(':');

    document.body.appendChild(linkDownload);
    linkDownload.click();
    document.body.removeChild(linkDownload);
  });
}

