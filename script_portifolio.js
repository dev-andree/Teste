var divDireita = document.getElementById('direita');

function atualizarHora() {
    var data = new Date();
    var hora = data.getHours();
    var minutos = data.getMinutes();
    var segundos = data.getSeconds();
    var dia = data.getDate();
    var mes = data.getMonth() + 1;
    var ano = data.getFullYear();

    if (hora < 10) {
        hora = "0" + hora;
    }
    if (minutos < 10) {
        minutos = "0" + minutos;
    }
    if (segundos < 10) {
        segundos = "0" + segundos;
    }

    divDireita.innerHTML = dia + "/" + mes + "/" + ano + "<br>" + hora + ":" + minutos + ":" + segundos;
}

atualizarHora();
setInterval(atualizarHora, 1000);
