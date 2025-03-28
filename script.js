const key = '96508f9697d422a9754820119a8394a9';

function enterDataOnScreen(dados){
    document.querySelector('.city').innerHTML = "Tempo em " + dados.name;
    document.querySelector('.temp').innerHTML = Math.floor(dados.main.temp) + "°C";
    document.querySelector('.text-prev').innerHTML = dados.weather[0].description;
    document.querySelector('.humidity').innerHTML = "Umidade:  " + dados.main.humidity +"%";
    document.querySelector('.img-prev').src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`;
}

async function captureCity(city){
    const dados = await fetch( `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`).then(response => response.json());

    enterDataOnScreen(dados)
}

function clickButton(){
    const city = document.querySelector('input').value;
    if(city === ""){
        alert('Digite uma cidade!');
    }else{ 
    captureCity(city)    
    }
   
}