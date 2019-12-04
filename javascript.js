let welcomeSection = document.getElementsByClassName("welcomeSection__button");

welcomeSection[0].addEventListener("click", function(){
	let GetWeather = document.getElementsByClassName("welcomeSection__input");
	let GetWeatherValue = GetWeather[0].value;
	let HeadingChange = document.getElementsByClassName("weatherSection__heading")[0].innerHTML=GetWeatherValue;
	fetch('https://api.openweathermap.org/data/2.5/forecast?q='+GetWeatherValue+'&units=metric&cnt=25&appid=e0b85594c8c5c54d41f4baa820dab999')
	.then(res => res.json())
	.then(data => {
		console.log(data);
		let date = data['list']['0']['dt_txt'];
		let changeDate = document.getElementsByClassName("weatherDescriptionContainer__heading--dayOfWeek")[0].innerHTML= 'Today: '+date;
		let description = data['list']['0']['weather']['0']['description'];
		let changeDescription = document.getElementsByClassName("weatherDescriptionContainer__span--description")[0].innerHTML = description;
		let temp = data['list']['0']['main']['temp'];
		let changeTemp = document.getElementsByClassName("weatherDescriptionContainer__span--temperature")[0].innerHTML=temp+' &deg;C';
	})
	.catch(err => alert("Wrong city name"))
	let GetWeatherValueBlank =document.getElementsByClassName("welcomeSection__input")[0].value='';
	let GetWeatherValuePlaceholder =document.getElementsByClassName("welcomeSection__input")[0].placeholder='Enter another city';

});

//Conversion Celsius/Fahrenheit //
let temperatureChanging = document.getElementsByClassName("weatherDescriptionContainer__span--temperatureFahrenheit")[0];
temperatureChanging.addEventListener("click", function () {
  if(this.textContent==="Change to Fahrenheit"){
    let x = document.getElementsByClassName("weatherDescriptionContainer__span--temperature")[0];
    let xValue = x.textContent;
    let xNewValue = xValue.substr(0,xValue.length-2);
    let changeTemp = document.getElementsByClassName("weatherDescriptionContainer__span--temperature")[0].innerHTML=Math.round(xNewValue*9/5+32)+' &deg;F';
    this.textContent = "Change to Celsius";
  } else {
    let x = document.getElementsByClassName("weatherDescriptionContainer__span--temperature")[0];
    let xValue = x.textContent;
    let xNewValue = xValue.substr(0,xValue.length-2);
    let changeTemp = document.getElementsByClassName("weatherDescriptionContainer__span--temperature")[0].innerHTML=Math.round((xNewValue -32) * 5 / 9*100)/100+' &deg;C';
    this.textContent = "Change to Fahrenheit"
}
});


 



 