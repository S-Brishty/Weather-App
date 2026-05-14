const apiKey = "70eb0dc0b547efe09d81665a6831bd37";

function getWeather() {

  const city = document.getElementById("city").value.trim();

  // Empty input check
  if (city === "") {
    alert("Please enter a city name");
    return;
  }

  // API URL
  const url =
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

  // Fetch weather data
  fetch(url)
    .then(response => response.json())

    .then(data => {

      // Invalid city check
      if (data.cod != 200) {
        alert("City not found!");
        return;
      }

      // Show data
      document.getElementById("cityName").innerText =
        data.name;

      document.getElementById("temp").innerText =
        "Temperature: " + data.main.temp + "°C";

      document.getElementById("desc").innerText =
        "Weather: " + data.weather[0].description;

    })

    .catch(error => {
      console.log(error);
      alert("Something went wrong!");
    });

}
