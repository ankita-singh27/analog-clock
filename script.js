let hr = document.getElementById('hour');
let min = document.getElementById('min');
let sec = document.getElementById('sec');

function displayTime(){
    let date = new Date();

    // Getting hour, mins, secs from date
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();

   
    let hourRotation = 30*h + m/2 + s/120;
    let minuteRotation = 6*m +s/10;
    let secondRotation = 6*s;

    hr.style.transform = `rotate(${hourRotation}deg)`;
    min.style.transform = `rotate(${minuteRotation}deg)`;
    sec.style.transform = `rotate(${secondRotation}deg)`;

}

setInterval(displayTime, 1000);

 // ----------------------calculation for hour rotation----------------------------------//
    // 12 hour=360 deg => 1 hour=30deg =>h hour=30h;
    //                    60 min=30 deg => 1 min=1/2deg =>m min=m/2deg rotation
    //                                     60 sec=1/2 deg => 1s sec=1/120=>s sec=s/120
          
// -------------------------calculation for minute rotation-----------------------------------//
//     60 min=360 deg =>1 min=6 deg => m min= 6m deg
//                      60 sec=6 deg=>1s sec=1/10=>s sec=s/10

// -------------------------calculation for second rotation-----------------------------------//
//     60 sec=360 deg =>1 sec=6 deg => s sec= 6s deg
