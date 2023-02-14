//O Código usa a biblioteca Axios para realizar uma requisição HTTP a API da OpenWeatherMap para obter a Previsão do Tempo

//Esta linha define function async, isso significa que a função pofr esperar poruma resposta da API

async function getWeather(){

    //Nesta linha estamos fazendo uma chamada a API usando a biblioteca Axios. A URL inclui informações de localização (Mogi das Cruzes) e a unidade de medida (Celsiue) e a chave da API (API-KEY)

    let pesquisar = document.querySelector('#pesquisar').value
    console.log('pesquisar')
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${pesquisar}&units=metric&appid=64ed82577ced7f69cb1687f0ce536131`)

    // Aqui estamos extraindo a temperatura atual (Celsius) da resposta de API e armazenando na variavel tempCelsius

    const tempCelsius = response.data.main.temp;

    document.querySelector('#temperatura').innerHTML = `A temperatura atual é de ${tempCelsius}°C.`;
    
}

getWeather();