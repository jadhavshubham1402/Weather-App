let city='Mumbai';
var humidity,country,weather,speed;

async function getWeather(){
   var city2=document.querySelector("#cityName").value
   if(city2!=""){
       city=city2;
   }

    const api='e0ab29e1a91dafe94e29a46a0f1c4df0';
    const data= await fetch( `https://api.openweathermap.org/data/2.5/weather?q=${city}&apikey=${api}`)
    const res=await data.json();
    // const icon = `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${weather[0]["icon"]}.svg`;
    console.log(res);
    humidity=res.main.humidity;
    temp=(res.main.temp)-273.15;
    value=temp.toFixed(2);
    country=res.sys.country;
    weather=res.weather[0].main;
    // icon=res.weather[0].icon;
    speed=res.wind.speed;
    document.querySelector("#city").innerHTML=city+" <sup>"+country+"</sup>";
    document.querySelector("img").src="img/"+weather+".png";
    document.querySelector("#temp").innerHTML=value+"<span>&#176C</span>";
    document.querySelector("#speed").innerHTML=speed;
    document.querySelector("#humidity").innerHTML=humidity;
    document.querySelector("#weather").innerHTML=weather;
    document.querySelector(".details").style.display="block";
}
