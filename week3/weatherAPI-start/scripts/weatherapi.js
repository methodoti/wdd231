const myTown = document.querySelector("#town");
const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const captionDesc = document.querySelector('figcaption');
// const url = "https://api.openweathermap.org/data/2.5/weather?lat=49.75&lon=6.64&units=metric&appid=0895cd8b20aa3d0c559edabf7346fbf3";

// required variables for the URL
const myKey = "0895cd8b20aa3d0c559edabf7346fbf3";

// Porto Alegre: -30.036867084924722, -51.21560580795338
const myLat = "-30.036867084924722";
const myLong = "-51.21560580795338";
// const myLat = "49.75";
// const myLong = "6.64";
let myUnits = "imperial";
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
    myTown.textContent = data.name;
    currentTemp.innerHTML = `${data.main.temp}&deg;${unitsLetter}`;
    // example icon: https://openweathermap.org/img/w/10d.png
    // weatherIcon.setAttribute("src", `https://openweathermap.org/img/w/${data.weather[0].icon}.png`);
    // example icon resizeble: https://openweathermap.org/img/wn/10d@2x.png
    weatherIcon.setAttribute("src", `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`);
    weatherIcon.setAttribute("alt", data.weather[0].description);
    captionDesc.textContent = data.weather[0].description;
    
    // console.log(data.weather[0].icon);
}

