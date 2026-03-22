// const myTown = document.querySelector("#town");
const tempCurrent = document.querySelector("#temp-current");
const letter = document.querySelector("#units-letter");
const tempDescription = document.querySelector("#temp-description");
const tempHigh = document.querySelector("#temp-high");
const tempLow = document.querySelector("#temp-low");
const tempHumidity = document.querySelector("#temp-humidity");
const tempSunrise = document.querySelector("#temp-sunrise");
const tempSunset = document.querySelector("#temp-sunset");
const weatherIcon = document.querySelector("#weather-icon");

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

const apiFetch = async () => {
  try {
      const response = await fetch(url); // Wait for the fetch to complete
      if (response.ok) {
          const data = await response.json(); // Wait for the response to be converted to JSON
          // console.table(data); // Output the fetched data in table
          console.log(data);  // output the fetched data object
          displayResults(data);
      } else {
          throw Error(await response.text());
      }
  } catch (error) {
    console.log("Error fetching data:", error); // Handle any errors
  }
};

apiFetch();

const displayResults = (data) => {
    // console.log(`Temperatura: ${data.main.temp}`);
    // myTown.textContent = data.name;
    
    // example icon: https://openweathermap.org/img/w/10d.png
    // weatherIcon.setAttribute("src", `https://openweathermap.org/img/w/${data.weather[0].icon}.png`);
    // example icon resizeble: https://openweathermap.org/img/wn/10d@2x.png
    weatherIcon.setAttribute("src", `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`);
    weatherIcon.setAttribute("alt", data.weather[0].description);
    // tempCurrent.innerHTML = `${data.main.temp}&deg;${unitsLetter}`;
    tempCurrent.innerHTML = `${data.main.temp}&deg;`;
    letter.textContent = unitsLetter;
    tempDescription.textContent = data.weather[0].description;
    tempHigh.innerHTML = `${data.main.temp_max}&deg;${unitsLetter}`;
    tempLow.innerHTML = `${data.main.temp_min}&deg;${unitsLetter}`;
    tempHumidity.textContent = `${data.main.humidity}%`;
    const sunrise = new Date(data.sys.sunrise * 1000); 
    tempSunrise.textContent = sunrise.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
    const sunset = new Date(data.sys.sunset * 1000); 
    tempSunset.textContent = sunset.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
    // console.log(data.weather[0].icon);
}

