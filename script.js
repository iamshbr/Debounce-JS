// with each character typed in search box, make an API call to randomuserme api and display a card below it. Use debounce concept to reduce api calls.

// You will automatically learn about this and apply in this. ☕️


const input = document.getElementById("user-input");
const card = document.querySelector(".card");

//

const time = 1000;
let interval;

const getMovie = function (callback) {
  if (interval) clearInterval(interval);
  interval = setTimeout(() => {
    callback();
    interval = null;
  }, time)
}

const displayMovie = function () {
  card.innerHTML = "";
  if (input.value.trim() !== "") {
    fetch(`https://www.freetestapi.com/api/v1/movies?search=${input.value.trim()}`)
      .then((response) => response.json())
      .then((response) => {
        if (response.length > 0) {
          const text =
            ` <img src="${response[0].poster}" alt="Movie Poster" style="width:100%">
              <h1>${response[0].title}</h1>
              <p>${response[0].plot}</p>
              <p>${response[0].production}</p>
              <p><button>Rating:${response[0].rating}</button></p>`;
          card.innerHTML = text;
        }
      })
  }
}



input.addEventListener("keydown", () => getMovie(displayMovie));




