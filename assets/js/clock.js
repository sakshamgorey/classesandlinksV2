setInterval(showTime, 1000);
        function showTime() {
            let time = new Date();
            let hour = time.getHours();
            let min = time.getMinutes();
            let sec = time.getSeconds();
            var dd = String(time.getDate()).padStart(2, '0');
            var mm = String(time.getMonth() + 1).padStart(2, '0'); //January is 0!
            var yyyy = time.getFullYear();
            var d = new Date();
var weekday = new Array(7);
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";

var n = weekday[d.getDay()];
            am_pm = "AM";
  
            if (hour >= 12) {
                hour -= 12;
                am_pm = " PM";
            }
            if (hour == 0) {
                hour = 12;
                am_pm = " PM";
            }
  
            hour = hour < 10 ? "0" + hour : hour;
            min = min < 10 ? "0" + min : min;
            sec = sec < 10 ? "0" + sec : sec;
            
            today = dd + '.' + mm + '.' + yyyy;
            let currentTime = hour + ":" 
                + min + am_pm ;
  
            document.getElementById("clock")
                .innerHTML = currentTime;
            document.getElementById("clock2")
                .innerHTML = today;
            document.getElementById("day")
                .innerHTML = n;
        }
  
        showTime();