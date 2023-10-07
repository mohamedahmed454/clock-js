function clock() {
  var dateTime = new Date();
  var hours = dateTime.getHours();
  var minutes = dateTime.getMinutes();
  var seconds = dateTime.getSeconds();
  var timeZone = "AM";

  if (hours == 0){
    hours == 12;
  }
  if (hours > 12){
       hours -= 12;
       timeZone = "PM"
  }
  if (hours < 10){
    hours = "0"+hours;
  }
  if (minutes < 10){
    minutes = "0"+minutes;
  }
  if (seconds < 10){
    seconds = "0"+seconds;
  }
  document.getElementById("clock").innerHTML= hours + ":" + minutes + ":" + seconds + " "+timeZone;
}
clock();
setInterval(clock , 1000);