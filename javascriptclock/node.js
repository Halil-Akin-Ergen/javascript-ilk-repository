
    let userName = prompt("isminizi giriniz.");

document.querySelector("#myName").innerHTML = userName;

const days = ["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"];


function time() {
  let dateTime = new Date();
  let day = days[dateTime.getDay()];
  let hours = dateTime.getHours();
  let minute = dateTime.getMinutes();
  let second = dateTime.getSeconds();
  document.querySelector
    ("#myClock" ).innerHTML = `${hours}: ${minute}: ${second} ${day} `;
}

setInterval(time, 1000);

// //
// //