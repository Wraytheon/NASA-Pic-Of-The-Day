document.querySelector("button").addEventListener("click", getFetch)
// document.addEventListener("enter", getFetch)
const key = config.secret;
function getFetch () {
  const dateInput = document.querySelector("input").value;
  let dateQuery = "&date=" + dateInput


  fetch(`https://api.nasa.gov/planetary/apod${key}${dateQuery}`)
                    /*Gets query value from date input*/
    .then((res) => res.json()) // parse response as JSON
    .then((data) => {

      console.log(data);
      document.querySelector("embed").src = data.url
      document.querySelector("h2").innerText = data.title;
      document.querySelector("h3").innerText = data.explanation;

      //? clear last search
    })
    .catch((err) => {
      console.log(`error ${err}`);
    });

}