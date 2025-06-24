// Set variables

let is24HourFormat = true;
let timeoffset = 0;

// Calculate Time

function updateClock(){
    
     let now = new Date(); //current time
     let utc = now.getTime() + now.getTimezoneOffset() * 60000; // minutes to milliseconds

     let localTime = new Date(utc + (timeoffset * 3600000)); // hours to milliseconds

     let hours = localTime.getHours();
     let minutes = localTime.getMinutes().toString().padStart(2,"0");
     let seconds = localTime.getSeconds().toString().padStart(2,"0");

     // Handle 12 and 24 hour format
     
     let ampm = ""; // Stores AM PM
     if(!is24HourFormat){
          ampm = hours >= 12 ? "PM" : "AM";
          hours = hours % 12 || 12; // Convert to 12
     }else{
          hours = hours.toString().padStart(2,"0");
     };

     document.getElementById('clock').textContent = `${hours}:${minutes}:${seconds} ${ampm}`;

};

// Handle 12 - 24 format

document.getElementById('toggleformat').addEventListener('click', function(){
     is24HourFormat = !is24HourFormat;
     this.textContent = is24HourFormat ? "Switch to 12-hours" : "Switch to 24-hours";
     updateClock();
});

// Handle time zone change

document.getElementById('timezone').addEventListener('change',function(){
     timeoffset = this.value;
     updateClock();
});

// Update clock => every second 
setInterval(updateClock,1000);
updateClock();
