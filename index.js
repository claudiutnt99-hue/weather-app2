const apiKey = "c4aa65c378ce551d1b766a608a276483";

async function getWeather() {
    const city = document.getElementById("city").value;
    if (!city) return;

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}&lang=ro`;

    const response = await fetch(url);
    const data = await response.json();

    if (data.cod === "404") {
        document.getElementById("result").innerText = "Orașul nu a fost găsit!";
    } else {
        document.getElementById("result").innerText =
            `${data.name}: ${data.main.temp}°C, ${data.weather[0].description}`;
    }
}