const APIKey = 'cf10dbe0e68ae329fdf1ba860807040d' ; 

let baseUrl = 'https://api.openweathermap.org/data/2.5/weather?q=C&units=metric&appid='
let queryCity = 'q';
let qCityValue = 'Cairo';
let weatherIconURL = "https://openweathermap.org/img/wn/10d@2x.png"
let forCastUrl = "https://api.openweathermap.org/data/2.5/forecast?"

if(DOMContentLoaded){
searchBTN = document.getElementById('searchBtn');

}

const getData  = async (bURL = '', api="" )=>{
  const res = await fetch(bURL+api)
  console.log(baseUrl+APIKey);

  try{
    const data = await res.json();

    console.log(data);
  }
catch(error){
  console.log(error );
}
}


const postData = async (url = '', data = {}) => {
    console.log(data)
  const response = await fetch(url, {
    method: 'POST',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
  try {
    constnewData = await response.json()
    console.log(newData)
    return newData
  } catch (error) {
    console.log('error', error)
  }
}

getData(baseUrl,APIKey);
postData('/', { answer: 42 })
postData('/', { MOVIE: 42,RATE:"GOOD" })
