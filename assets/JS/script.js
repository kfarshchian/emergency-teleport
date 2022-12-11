
var timeDisplayEl = $('#time-display');

function getApod() {
  let requestUrl = 'https://api.nasa.gov/planetary/apod?api_key=Y8ssRfZuDgzbCeAiyKHGwmeED3ohkeyHHyZc2BrZ';

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);  
      
      document.getElementById("POD").innerHTML = "<img src = " + data['hdurl'] + ">";
      

    });
}

getApod()
console.log(getApod);

function getAsteroids() {
  let requestUrl = 'https://api.nasa.gov/neo/rest/v1/feed?start_date=2015-09-07&end_date=2015-09-08&api_key=Y8ssRfZuDgzbCeAiyKHGwmeED3ohkeyHHyZc2BrZ';

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);    
      
     $('#distance').append("Distance: Lunar Miles: " + data['near_earth_objects']['2015-09-08'][0]['close_approach_data'][0]['miss_distance']['lunar'] + " ");
     $('#distance').append("Miles: " + data['near_earth_objects']['2015-09-08'][0]['close_approach_data'][0]['miss_distance']['miles']+ " ");
     $('#size').append("Size: Feet: " + data['near_earth_objects']['2015-09-08'][0]['estimated_diameter']['feet']['estimated_diameter_max']+ " ");
     $('#size').append("Miles: " + data['near_earth_objects']['2015-09-08'][0]['estimated_diameter']['miles']['estimated_diameter_max']+ " ");
     $('#hazardous').append("Potentially Fatal: " + data['near_earth_objects']['2015-09-08'][0]['is_potentially_hazardous_asteroid']+ " ");
     $('#name').append("Asteroid Name: " + data['near_earth_objects']['2015-09-08'][0]['name']+ " ");
     $('#velocity').append("Velocity: KM/S: " + data['near_earth_objects']['2015-09-08'][0]['close_approach_data'][0]['relative_velocity']['kilometers_per_second']+ " ");
     $('#velocity').append("MPH: " + data['near_earth_objects']['2015-09-08'][0]['close_approach_data'][0]['relative_velocity']['miles_per_hour']+ " ");
    });
}

getAsteroids(getAsteroids)

function displayTime() {
  var rightNow = dayjs().format('MMM DD, YYYY ');
  timeDisplayEl.text(rightNow);
}
displayTime()


let countDownDate = new Date("Jan 5, 2023 15:37:25").getTime();
let interval = setInterval(function() {
let now = new Date().getTime();
let distance = countDownDate - now;
let days = Math.floor(distance / (1000 * 60 * 60 * 24));
let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("countdown").innerHTML = days + " d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  if (distance < 0) {
    clearInterval(interval);
    document.getElementById("countdown").innerHTML = "BOOM";
  }
}, 1000);

var submitButton = document.querySelector('#submit');

submitButton.addEventListener('click', function(event) {
  event.preventDefault();

  var firstNameEl = document.querySelector('#firstName').value;
  var lastNameEl = document.querySelector('#lastName').value;
  var familyCountEl = document.querySelector('#familyCount').value;

  localStorage.setItem("travelerFirstName", firstNameEl);
  localStorage.setItem("travelerLastName", lastNameEl);
  localStorage.setItem("familyCount", familyCountEl);

  window.location.href="ticket.html";
});


