let inputbox=document.querySelector("#cityinput");
let btn=document.querySelector("#submit");
let cityname=document.querySelector("#cityname");
let temp=document.querySelector("#temp");
let humidity=document.querySelector("#humanidity");
let windspeed=document.querySelector("#windspeed");
btn.addEventListener("click",async(event)=>{
    console.log(inputbox.value);
    cityname.innerText=inputbox.value.charAt(0).toUpperCase() + inputbox.value.slice(1).toLowerCase();
    let response=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputbox.value.toLowerCase()}&appid=792424381ff70c2075b0043dfd209784&units=metric`);
    let data=await response.json();
    console.log(data);
    // console.log(data.main.temp);
    // console.log(data.main.humidity);
    // console.log(data.wind.speed);
    temp.innerText=Math.round(data.main.temp)+"°C";
    humidity.innerText=data.main.humidity+"%";
    windspeed.innerText=data.wind.speed+"m/s";
    if(data.weather[0].main=="Clouds"){
        document.querySelector("#condition").src="./images/clouds.png";
    }
    else if(data.weather[0].main=="Rain"){
        document.querySelector("#condition").src="./images/rainy.png";
    }
    else if(data.weather[0].main=="Haze"){
        document.querySelector("#condition").src="./images/haze.png";
    }
    else if(data.weather[0].main=="Mist"){
        document.querySelector("#condition").src="./images/mist.png";
    }
    else if(data.weather[0].main=="Humidity"){
        document.querySelector("#condition").src="./images/humidity.png";
    }
    else if(data.weather[0].main=="Snow"){
        document.querySelector("#condition").src="./images/snow.png";
    }
    else if(data.weather[0].main=="Thunderstorm"){
        document.querySelector("#condition").src="./images/thunderstorm.png";
    }
    else if(data.weather[0].main=="Drizzle"){
        document.querySelector("#condition").src="./images/drizzle.png";
    }
    else{
        document.querySelector("#condition").src="./images/clear.png";
    }
});

