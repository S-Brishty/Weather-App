hereconst apiKey = "70eb0dc0b547efe09d81665a6831bd37";

function getWeather() {
  const city = document.getElementById("city").value;

  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`)
    .then(res => res.json())
    .then(data => {
      document.getElementById("cityName").innerText = data.name;
      document.getElementById("temp").innerText = "Temp: " + data.main.temp + "°C";
      document.getElementById("desc").innerText = "Weather: " + data.weather[0].description;
    })
    .catch(() => {
      alert("City not found!");
    });
        }
