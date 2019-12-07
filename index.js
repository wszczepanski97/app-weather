let welcomeSection = document.querySelector(".welcomeSection__button");
let getWeather = document.querySelector(".welcomeSection__input");
let temperatureElement = document.querySelector(".weatherDescriptionContainer__span--temperature");

welcomeSection.addEventListener("click", function(){
	let getWeatherValue = getWeather.value;
	document.querySelector(".weatherSection__heading").innerHTML = getWeatherValue;
	fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${getWeatherValue}&units=metric&cnt=25&appid=e0b85594c8c5c54d41f4baa820dab999`)
	.then(res => res.json())
	.then(data => {
		let date = data['list']['0']['dt_txt'];
		document.querySelector(".weatherDescriptionContainer__heading--dayOfWeek").innerHTML = `Today:${date}`;
		let description = data['list']['0']['weather']['0']['description'];
		document.querySelector(".weatherDescriptionContainer__span--description").innerHTML = description;
		let placeTemperature = Math.floor(data['list']['0']['main']['temp']);
		temperatureElement.innerHTML = `${placeTemperature}&deg;C`;
	})
	.catch(err => alert("Wrong city name"))
	welcomeSection.value = '';
	welcomeSection.placeholder = 'Enter another city';
});

//Conversion Celsius/Fahrenheit //
let temperatureChanging = document.querySelector(".weatherDescriptionContainer__span--temperatureFahrenheit");
temperatureChanging.addEventListener("click", function () {
    let currentTemperatureValue = temperatureElement.textContent.substr(0, temperatureElement.textContent.length-2);
  if(this.textContent === "Change to Fahrenheit"){
    temperatureElement.innerHTML = `${Math.round(currentTemperatureValue*9/5 +32)}&deg;F`;
    this.textContent = "Change to Celsius";
  } else {
	temperatureElement.innerHTML = `${Math.round((currentTemperatureValue -32) * 5 /9)}&deg;C`;
    this.textContent = "Change to Fahrenheit"
}
});


 



 