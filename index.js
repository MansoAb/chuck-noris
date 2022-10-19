const but = document.getElementById("but");
const text = document.getElementById("text");

but.addEventListener("click", function () {
  const response = fetch("https://api.chucknorris.io/jokes/random");

  response
    .then(function (data) {
      return data.json();
    })
    .then((a) => {
      text.innerText = a.value;
    });
});
