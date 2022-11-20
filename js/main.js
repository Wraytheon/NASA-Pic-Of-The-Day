document.querySelector("button").addEventListener("click", getDrink)
const key = config.secret;
function getDrink () {
  const dateInput = document.querySelector("input").value;
  let dateQuery = "&date=" + dateInput


  fetch(`https://api.nasa.gov/planetary/apod${key}${dateQuery}`)
                    /*Gets query value from date input*/
    .then((res) => res.json()) // parse response as JSON
    .then((data) => {
      console.log(data);
      document.querySelector("h2").innerText = data.title;
      document.querySelector("h3").innerText = data.explanation;

      // document.querySelector("img").src = data.drinks[0].strDrinkThumb;
      // document.querySelector("h2").innerText = data.drinks[0].strDrink;
      // document.querySelector("h3").innerText = data.drinks[0].strInstructions;

    })
    .catch((err) => {
      console.log(`error ${err}`);
    });

    //!video vs image logic
    //?Vids only have url, not hdurl
}