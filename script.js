const url = 'http://api.openweathermap.org/data/2.5/weather?q=';
const apikey = '49ba89737429daa7b03084e747ccdd2f';

const getWeather = async () => {
    const city = document.getElementById('city').value;
    try {
        const response = await fetch(url + city + '&appid=' + apikey);
        if (response.ok) {
            const jsonResponse = await response.json();
            showWeather(jsonResponse);
        }
 
    } catch (error) {
        console.log(error);
    }
}

const showWeather = weatherData => {
    const element = document.createElement('p');
    element.innerHTML = 'De temperatuur in ' + weatherData.name + ' is vandaag ' + Math.floor((weatherData.main.temp - 273)) + ' graden. '
    document.getElementById('result').appendChild(element);

}

document.getElementById('submit').addEventListener('click', getWeather);