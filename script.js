const apiKey = "2cbbe24e34ccfa919da61c982dacbfea";



async function getWeather(){


const city =
document.getElementById("city").value;



if(city===""){

alert("Enter city name");

return;

}



const url = 
`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;



try{


const response = await fetch(url);


const data = await response.json();



if(data.cod !== 200){

alert("City not found");

return;

}




document.getElementById("location").innerHTML =
`${data.name}, ${data.sys.country}`;



document.getElementById("temperature").innerHTML =
`${Math.round(data.main.temp)}°C`;



document.getElementById("condition").innerHTML =
data.weather[0].description;



document.getElementById("humidity").innerHTML =
`${data.main.humidity}%`;



document.getElementById("wind").innerHTML =
`${data.wind.speed} km/h`;



document.getElementById("pressure").innerHTML =
`${data.main.pressure} hPa`;



document.getElementById("icon").src =
`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;



}

catch(error){

alert("Something went wrong");

}



}