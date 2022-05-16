const daysEL =document.getElementById('days');
const hoursEL =document.getElementById('hours');
const minutosEL =document.getElementById('minutes');
const secondEL =document.getElementById('second');

const data = "1 jan 2024"

function contador(){

    const tempo = new Date(data);
    const atual = new Date();

    const totalsegundos = (tempo - atual)/1000;

    const dias = Math.floor(totalsegundos /3600/24);
    const horas = Math.floor(totalsegundos/3600)%24;
    const minutos =Math.floor(totalsegundos/60)%60;
    const Segundos = Math.floor(totalsegundos)%60;

    daysEL.innerHTML = dias;
    hoursEL.innerHTML = formatTime(horas);
    minutosEL.innerHTML = formatTime(minutos);
    secondEL.innerHTML =formatTime(Segundos);

}

function formatTime(time){
    return time < 0? '10${time}' :time;
}

contador();

setInterval(contador,1000);
