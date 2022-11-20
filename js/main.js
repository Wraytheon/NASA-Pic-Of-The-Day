document.querySelector("button").addEventListener("click", getDrink)

function getDrink () {

  fetch(`https://api.nasa.gov/planetary/apod`)
                    /*Gets query value from date input*/
    .then((res) => res.json()) // parse response as JSON
    .then((data) => {
      console.log(data.drinks);
      document.querySelector("img").src = data.drinks[0].strDrinkThumb;
      document.querySelector("h2").innerText = data.drinks[0].strDrink;
      document.querySelector("h3").innerText = data.drinks[0].strInstructions;
    })
    .catch((err) => {
      console.log(`error ${err}`);
    });
}