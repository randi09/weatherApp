const getweather = () => {
  let zip = document.querySelector(".search-bar").value;
  console.log(zip);
  fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=${zip}&appid=17536d968afc616a18e80f1ea3036075&units=imperial`
  )
    // this is how you'd do it if you use fetch with promises
    // you would use .then()
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      let temp = document.querySelector(".temp");
      temp.innerHTML = data.main.temp;
    });
};

const btn = document.querySelector(".button");
btn.addEventListener("click", getweather);

// fetching, we need to have the URL
// we fetch(url).then(convertTheRespone to JSON)
// after we convert to json, .then(data) we can do whatever with our data
// now that we have the data, we can access it and use it to create
// elements on the page
