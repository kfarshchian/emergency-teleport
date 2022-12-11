
  function getPlanetSticker() {
    let requestUrl = 'https://api.giphy.com/v1/stickers/search?api_key=4whkYATvg44bONJ5xoAyLAWmQs973i0g&q=planets&limit=25&offset=0&rating=g&lang=en';
    fetch(requestUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);
        let randNum = Math.floor(Math.random() * 24) + 1;
        document.getElementById("ticket").innerHTML = "<img src = " + data['data'][randNum]['images']['downsized']['url'] + ">";
      });
  }

  getPlanetSticker()

  
console.log(getPlanetSticker);


const exoplanets = [
    {
      name: "Teegarden's Star b",
      star: "Teegarden's Star",
      dis: "12.5",
      temp: "82.4",
      notes: "Pack some sunscreen! Or would it be Teegarden's Star-screen?",
    },
    {
      name: "TOI 700 d",
      star: "TOI 700",
      dis: "101",
      temp: "24.2",
      notes: "101 Lightyears is quite the long journey, make sure you pack some teleportation snacks.",
    },
    {
      name: "Kepler-1649c",
      star: "Kepler-1649",
      dis: "301",
      temp: "-38",
      notes: "Hope you don't like the outdoors... Pack some puzzles and books.",
    },
    {
      name: "TRAPPIST-1d",
      star: "TRAPPIST-1",
      dis: "41",
      temp: "48.1",
      notes: "This exoplanet is confirmed to be rocky, pack some climbing gear to make the most of this exoplanet!",
    },
    {
      name: "LP 890-9 c",
      star: "LP 890-9",
      dis: "105",
      temp: "29",
      notes: "Make sure you pack a coat!",
    },
    {
      name: "Proxima Centauri b",
      star: "Proxima Centauri",
      dis: "4.25",
      temp: "-38",
      notes: "This exoplanet is affected by solar flares and has high radiation, hope you're fine with living in a lead box.",
    },
    {
      name: "K2-72e",
      star: "K2-72",
      dis: "217",
      temp: "10.4",
      notes: "Make sure you pack a coat!",
    },
    {
      name: "Gliese 1061 d",
      star: "Gliese 1061",
      dis: "12",
      temp: "-10",
      notes: "Better learn how to make a campfire, and bring some smores for roasting.",
    },
    {
      name: "Gliese 1061 c",
      star: "Gliese 1061",
      dis: "12",
      temp: "35",
      notes: "On the bright side... it's only almost freezing!",
    },
    {
      name: "Ross 128 b",
      star: "Ross 128",
      dis: "9.87",
      temp: "44",
      notes: "Bring a light jacket, it's going to be chilly.",
    }
  ];
  
  function randomPlanet() {
    
    let random = Math.floor(Math.random() * 9) + 1;

    $('#planetName').append("Planet Name: " + exoplanets[random]['name'] + " ");
    $('#star').append("Planet Star: " + exoplanets[random]['star'] + " ");
    $('#distance').append("Distance From Earth: " + exoplanets[random]['dis'] + " Lightyears ");
    $('#temperature').append("Planet Temperature: " + exoplanets[random]['temp'] + "° Fahrenheit ");
    $('#notes').append("Planet Notes: " + exoplanets[random]['notes'] + " ");

console.log(random);
  }
  
  randomPlanet()
  console.log(exoplanets)

  var firstName = localStorage.getItem('travelerFirstName');
  var lastName = localStorage.getItem('travelerLastName');
  var familyCount = localStorage.getItem('familyCount');

  $('#firstName').append("First Name: " + firstName + " ");
  $('#lastName').append("Last Name: " + lastName + " ");
  $('#familyCount').append("Travelers: " + familyCount+ " ");
  
  console.log(firstName);
  console.log(lastName);
  console.log(familyCount);