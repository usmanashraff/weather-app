let weather = {


    ApIkey : `8d7d702f9e701be5aa511b7213f46cc3`,
    fetchData: async function(city){
        try{
            document.querySelector("section").id = "loading";
            document.getElementById("temp").innerHTML = `loading... `;
            document.getElementById("name").innerHTML = ``;
           document.getElementById("des").innerHTML = ``;
           document.getElementById("speed").innerHTML = ``;
          document.getElementById("img").src = '#';
         await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${this.ApIkey}`)
        .then((response) => {
             return response.json()})
        .then((data) => this.displayData(data))
        
       
        }
        catch(error){
            document.querySelector("section").id = "loading";
             document.getElementById("name").innerHTML = ``;
             document.getElementById("temp").innerHTML = `City not found ! `;
            document.getElementById("des").innerHTML = ``;
            document.getElementById("speed").innerHTML = ``;
           document.getElementById("img").src = '#';
            console.log("hello", error)
        }
    },
    displayData: function(data){
         document.querySelector("section").removeAttribute('id'); 
        const  Name  = data.name;
        const  Description  = data.weather[0].description;
        const  Temp = data.main.temp;
        const  Speed  = data.wind.speed;
        const Icon = data.weather[0].icon;
        const iconurl = `https://openweathermap.org/img/wn/${Icon}.png`
         document.getElementById("name").innerHTML = `${Name}`;
         document.getElementById("temp").innerHTML = ` Temperature   ${Temp} <sup>o</sup>C`;
         document.getElementById("des").innerHTML = ` ${Description}`;
         document.getElementById("speed").innerHTML = `wind speed: ${Speed} km/hr`;
         document.getElementById("img").src = iconurl;
        
    }

}

const searchbox = document.getElementById("srch");
const input = document.getElementById("input");
searchbox.addEventListener("click", ()=> {
    if(input.value != "")
       weather.fetchData(input.value)
})
input.addEventListener("keydown", (e)=>{
    if(e.key == "Enter" && input.value != "")
           weather.fetchData(input.value);
})