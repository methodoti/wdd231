// const myTown = document.querySelector("#town");
const tempCurrent = document.querySelector("#temp-current");
const letter = document.querySelector("#units-letter");
const tempDescription = document.querySelector("#temp-description");
const tempHigh = document.querySelector("#temp-high");
const tempLow = document.querySelector("#temp-low");
const tempHumidity = document.querySelector("#temp-humidity");
const tempSunrise = document.querySelector("#temp-sunrise");
const tempSunset = document.querySelector("#temp-sunset");
// const weatherIcon = document.querySelector("#weather-icon");
const weatherDiv = document.querySelector(".weather-div");
const icon = document.querySelector(".icon");
// const weatherIcon = document.createElement("img");

const forecastDay = document.querySelectorAll(".forecast-day");
const forecastTemp = document.querySelectorAll(".forecast-temp");



// const url = "https://api.openweathermap.org/data/2.5/weather?lat=49.75&lon=6.64&units=metric&appid=0895cd8b20aa3d0c559edabf7346fbf3";

// required variables for the URL
const myKey = "0895cd8b20aa3d0c559edabf7346fbf3";

// Porto Alegre: -30.036867084924722, -51.21560580795338
const myLat = "-30.036867084924722";
const myLong = "-51.21560580795338";
let myUnits = "metric"; // metric / imperial
let unitsLetter;
if (myUnits === "metric") {
    unitsLetter = "C";
} else if (myUnits === "imperial") {
    unitsLetter = "F";
}

const url = `https://api.openweathermap.org/data/2.5/weather?lat=${myLat}&lon=${myLong}&units=${myUnits}&appid=${myKey}`;
// const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${myLat}&lon=${myLong}&cnt=3&units=${myUnits}&appid=${myKey}`;
const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${myLat}&lon=${myLong}&units=${myUnits}&appid=${myKey}`;

const apiFetch = async () => {
  try {
      const response = await fetch(url); // Wait for the fetch to complete
      if (response.ok) {
          const data = await response.json(); // Wait for the response to be converted to JSON
          // console.table(data); // Output the fetched data in table
          // console.log(data);  // output the fetched data object
          displayResults(data);
      } else {
          throw Error(await response.text());
      }
  } catch (error) {
    console.log("Error fetching data:", error); // Handle any errors
  }
};

const apiForecastFetch = async () => {
  try {
      const response = await fetch(forecastUrl); // Wait for the fetch to complete
      if (response.ok) {
          const data = await response.json(); // Wait for the response to be converted to JSON
          // console.table(data); // Output the fetched data in table
          // console.log(data);  // output the fetched data object
          displayResultsForecast(data);
      } else {
          throw Error(await response.text());
      }
  } catch (error) {
    console.log("Error fetching data:", error); // Handle any errors
  }
};



apiFetch();
apiForecastFetch();

const displayResults = (data) => {
    // console.log(`Temperatura: ${data.main.temp}`);
    // myTown.textContent = data.name;
    
    // example icon: https://openweathermap.org/img/w/10d.png
    // weatherIcon.setAttribute("src", `https://openweathermap.org/img/w/${data.weather[0].icon}.png`);
    // example icon resizeble: https://openweathermap.org/img/wn/10d@2x.png
    // const weatherIcon = document.createElement("img");


    const weatherIcon = document.createElement("img");
    weatherIcon.setAttribute("src", `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`);
    weatherIcon.setAttribute("alt", data.weather[0].description);
    weatherIcon.id = "weather-icon";
    icon.appendChild(weatherIcon);
    // weatherDiv.appendChild(icon);
    // weatherDiv.appendChild(weatherIcon);


    // tempCurrent.innerHTML = `${data.main.temp}&deg;${unitsLetter}`;
    tempCurrent.innerHTML = `${Math.round(data.main.temp)}&deg;`;
    letter.textContent = unitsLetter;
    tempDescription.textContent = data.weather[0].description;
    tempHigh.innerHTML = `${Math.round(data.main.temp_max)}&deg;${unitsLetter}`;
    tempLow.innerHTML = `${Math.round(data.main.temp_min)}&deg;${unitsLetter}`;
    tempHumidity.textContent = `${data.main.humidity}%`;
    const sunrise = new Date(data.sys.sunrise * 1000); 
    tempSunrise.textContent = sunrise.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit", hour12: true }).toLowerCase();
    const sunset = new Date(data.sys.sunset * 1000); 
    tempSunset.textContent = sunset.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit", hour12: true }).toLowerCase();
    // console.log(data.weather[0].icon);
}

const displayResultsForecast = (data) => {
    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

    // const filteredData = data.list.filter((newdata) => {
    //     return newdata.dt_txt.includes("12:00:00");
    // });
    const filteredData = data.list.filter(filterData);

    function filterData(element) {
        return element.dt_txt.includes("12:00:00");
    }

    // console.log(filteredData);

    const currentDay = new Date().getDay();
    // console.log(`Current Day: ${weekday[new Date().getDay()]}`);
    // console.log(`Current temp: ${data.list[0].main.temp}&deg;`);
    // console.log("-----------------");
    for (let i = 0; i < 3; i++) {
        const element = filteredData[i];

        let dia = new Date(filteredData[i].dt * 1000).getDay();
        
        if (dia === currentDay) {
            forecastDay[i].innerHTML = `Today:`;
            forecastTemp[i].innerHTML = `${Math.round(filteredData[i].main.temp)}&deg${unitsLetter}`;
            // console.log(`TEMPERATURA DE HOJE: ${filteredData[i].main.temp}&deg`); 
        } else {
            forecastDay[i].innerHTML = `${weekday[dia]}:`;
            forecastTemp[i].innerHTML = `${Math.round(filteredData[i].main.temp)}&deg${unitsLetter}`;
            // console.log(`temperatura de ${weekday[dia]}: ${filteredData[i].main.temp}`);
        }
    }
    // console.log("-----------------");

    
}

