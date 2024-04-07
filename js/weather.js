const API_KEY = "c2095206b269b91d76fd68fd36336c0b";

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;

    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            const weatherContainer = document.querySelector("#weather");
            const weatherTitle = document.createElement("h2");
            const weather = document.createElement("span");
            const city = document.createElement("span");

            // h2 요소를 먼저 추가
            weatherTitle.innerText = "TODAY'S WEATHER";
            weatherContainer.appendChild(weatherTitle);

            // span 요소들을 생성하고 추가
            weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
            city.innerText = data.name;
            weatherContainer.appendChild(weather);
            weatherContainer.appendChild(document.createElement("br"));
            weatherContainer.appendChild(city);
        });





}
function onGeoError() {
    alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);


