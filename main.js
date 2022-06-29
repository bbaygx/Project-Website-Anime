   const searchBox = document.querySelector(".search-box");
   const searchBtn = document.querySelector(".search-icon");
   const cancelBtn = document.querySelector(".cancel-icon");
   const searchInput = document.querySelector("input");
   const searchData = document.querySelector(".search-data");
   searchBtn.onclick = () => {
       searchBox.classList.add("active");
       searchBtn.classList.add("active");
       searchInput.classList.add("active");
       cancelBtn.classList.add("active");
       searchInput.focus();
       if (searchInput.value != "") {
           var values = searchInput.value;
           searchData.classList.remove("active");
           searchData.innerHTML = "You just typed " + "<span style='font-weight: 500;'>" + values + "</span>";
       } else {
           searchData.textContent = "";
       }
   }
   cancelBtn.onclick = () => {
       searchBox.classList.remove("active");
       searchBtn.classList.remove("active");
       searchInput.classList.remove("active");
       cancelBtn.classList.remove("active");
       searchData.classList.toggle("active");
       searchInput.value = "";
   }

   //    Clock Styling
   setInterval(() => {

       let hours = document.getElementById('hours');
       let minutes = document.getElementById('minutes');
       let seconds = document.getElementById('seconds');
       let ampm = document.getElementById('ampm');
       let hh = document.getElementById('hh');
       let mm = document.getElementById('mm');
       let ss = document.getElementById('ss');
       let hr_dot = document.querySelector('.hr_dot');
       let min_dot = document.querySelector('.min_dot');
       let sec_dot = document.querySelector('.sec_dot');



       let h = new Date().getHours();
       let m = new Date().getMinutes();
       let s = new Date().getSeconds();

       let am = h >= 12 ? "PM" : "AM";

       // convert 24hr clock to 12hr clock
       if (h > 12) {
           h = h - 12;
       }

       // add zero before single digit number
       h = (h < 10) ? "0" + h : h
       m = (m < 10) ? "0" + m : m
       s = (s < 10) ? "0" + s : s

       hours.innerHTML = h + "<br><span>Hours</span>";
       minutes.innerHTML = m + "<br><span>Minutes</span>";
       seconds.innerHTML = s + "<br><span>Seconds</span>";
       ampm.innerHTML = am;

       hh.style.strokeDashoffset = 440 - (440 * h) / 12;
       // 12 hrs clock
       mm.style.strokeDashoffset = 440 - (440 * m) / 60;
       // 60 minutes
       ss.style.strokeDashoffset = 440 - (440 * s) / 60;
       // 60 seconds

       hr_dot.style.transform = `rotateZ(${h * 30}deg)`;
       // 360 / 12hrs = 30
       min_dot.style.transform = `rotateZ(${m * 6}deg)`;
       // 360 / 60min = 6
       sec_dot.style.transform = `rotateZ(${s * 6}deg)`;
       // 360 / 60sec = 6
   })