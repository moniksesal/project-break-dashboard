const time = document.getElementById("time");
const message = document.getElementById("message")
const date = document.getElementById("date")

//Función para formatear número con 0 delante
const formatNumber = (num) => num.toString().padStart(2, "0");

//Función para el mensaje
const getMessage = (hour, minute) => {
    if ((hour === 0 && minute >= 1) || (hour >= 1 && hour <= 6) || (hour === 7 && minute === 0)) {
      return "Es hora de descansar. Apaga y sigue mañana"
    } else if ((hour === 7 && minute >= 1) || (hour >= 8 && hour <= 11) || (hour === 12 && minute === 0)) {
      return "Buenos días, desayuna fuerte y a darle al código";
    } else if ((hour === 12 && minute >= 1) || (hour === 13) || (hour === 14 && minute === 0)) {
      return "Echa un rato más pero no olvides comer";
    } else if ((hour === 14 && minute >= 1) || (hour === 15) || (hour === 16 && minute === 0)) {
      return "Espero que hayas comido";
    } else if ((hour === 16 && minute >= 1) || (hour === 17) || (hour === 18 && minute === 0)) {
      return "Buenas tardes, el último empujón";
    } else if ((hour === 18 && minute >= 1) || (hour >= 19 && hour <= 21) || (hour === 22 && minute === 0)) {
      return "Esto ya son horas extras, piensa en parar pronto";
    } else if ((hour === 22 && minute >= 1) || (hour === 23) || (hour === 0 && minute === 0)) {
      return "Buenas noches, es hora de pensar en parar y descansar";
    }
}

//Función para actualizar el reloj, la fecha y el mensaje
const updateClock = () => {
    const actual = new Date();
    const hour = actual.getHours();
    const minute = actual.getMinutes();
    const second = actual.getSeconds();

    const formattedHour = formatNumber(hour);
    const formattedMinute = formatNumber(minute);
    const formattedSecond = formatNumber(second);

    const clockString = `${formattedHour}:${formattedMinute}:${formattedSecond}`;
    time.innerHTML = clockString;

    const currentDate = actual.toLocaleDateString()
    date.innerHTML = currentDate

    message.innerHTML = getMessage(hour, minute)
}

//Ejecutar cada segundo
setInterval(updateClock, 1000)
updateClock()