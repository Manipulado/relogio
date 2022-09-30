const hora = document.querySelector('.hora');
const minuto = document.querySelector('.minuto');
const segundo = document.querySelector('.segundo');
setInterval(function(){
    data = new Date;
     
    hora.innerHTML = data.getHours();
    minuto.innerHTML = (data.getMinutes() < 10) ? `0${data.getMinutes()}` : data.getMinutes();
    segundo.innerHTML = (data.getSeconds() < 10) ?`0${data.getSeconds()}` : data.getSeconds();
}, 1000)



