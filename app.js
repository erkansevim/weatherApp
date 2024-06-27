console.log('App.js working')



//!selecttors

const form=document.querySelector("form");
const input =document.querySelector("form input.form-control");
console.log(input);

//variabels

let apiKey ="ec7c6e75b5d9ea4ee6ef2847a8200357"
let url;
let units="metric"
let lang="en"

//!Event listeners

form.addEventListener("submit", (e)=>{
    e.preventDefault();

    console.log(input.value);
    if (input.value) {
        const city=input.value
    
    url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}&lang=${lang}&appid=${apiKey}`;
    }
    getWeatherData()
    

})

//functions
const getWeatherData= async()=>{
try {
    const response = await fetch(url);
    const data=await response.json();
    console.log(data);
    const {main, name, weather,sys}=data
    
} catch (error) {
    
}
}