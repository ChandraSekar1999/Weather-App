const apikey ="8c5f66e2afded22c862a0d032670d56d";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";


const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

const WeatherIcon = document.querySelector(".weather-Icon");

async function checkWeather(city){
    const responce = await fetch(apiUrl + city + `&appid=${apikey}`);


    // if(responce = status == 404){
    //     document.querySelector(".error").style.display = "block";
    //     document.querySelector(".weather").style.display = "none";
    // }else {}
    var data = await responce.json();

    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidty").innerHTML = data.main.humidity;
    document.querySelector(".wind").innerHTML = data.wind.speed +"Km/hr";  

    if(data.weather[0].main == "Clouds"){
        WeatherIcon.src="image/NoRain.png"
    }else if(data.weather[0].main == "Clear"){
        WeatherIcon.src="image/sunnyDay.png"
    }else if(data.weather[0].main == "Fog"){
        WeatherIcon.src="image/FullRainy.png"
    }else if(data.weather[0].main == "Drizzle"){
        WeatherIcon.src="image/mildRain.png"
    }else if (data.weather[0].main == "Mist"){
        WeatherIcon.src="image/SunnyDay.png"
    }


    document.querySelector(".Weather").computedStyleMap.display ="block"

}

searchBtn.addEventListener("click",()=>{
    checkWeather(searchBox.value);
})

checkWeather();