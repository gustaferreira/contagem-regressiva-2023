const daysS = document.getElementById("dias");
const hoursS = document.getElementById("horas");
const minsS = document.getElementById("minutos");
const secondsS = document.getElementById("segundos");

const newYears = "1 Jan 2023";

function contagem() {
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();

    const totalSeconds = (newYearsDate - currentDate) / 1000;

    const dias = Math.floor(totalSeconds / 3600 / 24);
    const horas = Math.floor(totalSeconds / 3600) % 24;
    const minutos = Math.floor(totalSeconds / 60) % 60;
    const segundos = Math.floor(totalSeconds) % 60;

    daysS.innerHTML = dias;
    hoursS.innerHTML = formato(horas);
    minsS.innerHTML = formato(minutos);
    secondsS.innerHTML = formato(segundos);
}

function formato(time) {
    return time < 10 ? `0${time}` : time;
}

contagem();

setInterval(contagem, 1000);