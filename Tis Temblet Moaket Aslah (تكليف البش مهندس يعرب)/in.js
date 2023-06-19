
// axios.get('https://api.aladhan.com/v1/timingsByCity?city={city}&country=sa')
//   .then(function (response) {
//     console.log(response.abb)

    
//   })









//   const city = ""; // اسم المدينة المطلوبة
//   const country = "ym"; // اسم الدولة
//   const method = 4; // طريقة حساب أوقات الصلاة
  
//   // إنشاء رابط الاستعلام
//   const url = `http://api.aladhan.com/v1/timingsByCity?city=${city}&country=${country}&method=${method}`;
  
//   // إرسال طلب للحصول على بيانات أوقات الصلاة
//   fetch(url)
//     .then(response => {
//       if(response.ok) {
//         return response.json();
//       }
//       throw new Error("فشل الاتصال بواجهة الAPI");
//     })
//     .then(data => {
//       // الحصول على بيانات أوقات الصلاة
//       const prayerTimes = data.data.timings;
//       for(const prayer in prayerTimes) {
//         console.log(prayer + ": " + prayerTimes[prayer]);
//       }
//     })
//     .catch(error => console.error(error));
//     ////////////////////////////////////////

 
   let selctd = document.querySelector(".selcted")  ;
  
     selctd.addEventListener( `click`, (e)=>{

        

        let cantry = document.querySelector(".cantry").value;
        let citys= document.querySelector(".city").value;
        let span =document.querySelector(".container h1 .spnas");
          let text = document.createTextNode(cantry);
          span.appendChild(text)

        // اسم الدولة
          // طريقة حساب أوقات الصلاة
          getrekust(cantry,citys);
         console.log(cantry)
         
     })

   // let city = citys.inneText; // اسم المدينة المطلوبة

function getrekust(cantry,citys){
// إنشاء رابط الاستعلام
const url = `http://api.aladhan.com/v1/timingsByCity?city=${citys}&country=${cantry}&method=${4}`;

// إرسال طلب للحصول على بيانات أوقات الصلاة
fetch(url)
  .then(response => {
    if(response.ok) {
      return response.json();
    }
    throw new Error("فشل الاتصال بواجهة الAPI");
  })
  .then(data => {
    // الحصول على بيانات أوقات الصلاة

    const prayerTimes = data.data.timings;
    document.querySelector("h2 .spnas").textContent= data.data.date.gregorian.date+data.data.date.hijri.weekday.ar;
    console.log(data.data.date.hijri.weekday.ar)
    // this weekday ar
    document.querySelector("#fajr").textContent = prayerTimes.Fajr;
    document.querySelector("#sunrise").textContent = prayerTimes.Sunrise;
    document.querySelector("#dhuhr").textContent = prayerTimes.Dhuhr;
    document.querySelector("#asr").textContent = prayerTimes.Asr;
    document.querySelector("#maghrib").textContent = prayerTimes.Maghrib;
    document.querySelector("#isha").textContent = prayerTimes.Isha;
  })
  .catch(error => console.error(error));
}