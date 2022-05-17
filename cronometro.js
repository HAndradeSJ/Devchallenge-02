// redirecionar a pagina
function clicar1(){
    window.location.href="http://127.0.0.1:5500/devcontador.html"
}

// Constantes das medidas de temopo
const daysEL =document.getElementById('days');
const hoursEL =document.getElementById('hours');
const minutosEL =document.getElementById('minutes');
const secondEL =document.getElementById('second');

// constante do tempo
const data = document.cookie;

// função central do meu codigo
function contador(){
    // paranmetros principais
    const partemp = new Date(data);
    const Datual = new Date();
    const totalsegundos = (partemp - Datual)/1000;

    // converção da icoginita para as medidas de tempo
    const dias = Math.floor(totalsegundos/3600/24);
    const horas  = Math.floor(totalsegundos/3600)%24;
    const minutos = Math.floor(totalsegundos/60)%60;
    const segundos = Math.floor(totalsegundos)%60;

    // formatação dos parametros
    daysEL.innerHTML = formatTime(dias);
    hoursEL.innerHTML = formatTime(horas);
    minutosEL.innerHTML = formatTime(minutos);
    secondEL.innerHTML = formatTime(segundos);

    // decantáçao dos zeros em cima de uma função
    function formatTime(time){
        if( time < 10 ){
            return '0' + time.toString();
        } else {
            return time
        }
    }    
}
// setar o delay para o autofill
contador();
setInterval( "contador()", 1000 );

//botão de reniciar
function reniciar(){
    
    
}
