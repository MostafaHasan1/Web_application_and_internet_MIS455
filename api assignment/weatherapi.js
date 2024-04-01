var apiK = "f4fc01126d3c3fed13ffa64c13f880a0";
var cName = localStorage.getItem('countryName');
var url = `https://api.openweathermap.org/data/2.5/weather?q=${cName}&units=metric&appid=${apiK}`

    fetch(url)
    .then(res=>res.json())
    .then(data => show(data))


function show(data){
    const weatherIcon = document.querySelector(".weather-icon")

    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.tem').innerHTML = Math.round(data.main.temp) +"°C";
    document.querySelector('.humidity').innerHTML = data.main.humidity + "%";
    document.querySelector('.wind').innerHTML = data.wind.speed + " km/h";

    if(data.weather[0].main == "Clouds"){
        weatherIcon.src = "img/clouds.png"
    }
    else if(data.weather[0].main == "Clear"){
        weatherIcon.src = "img/clear.png"
    }
    else if(data.weather[0].main == "Rain"){
        weatherIcon.src = "img/rain.png"
    }
    else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src = "img/drizzle.png"
    }
    else if(data.weather[0].main == "Mist"){
        weatherIcon.src = "img/mist.png"
    }

    document.querySelector(".weather").style.display = 'block';
}
