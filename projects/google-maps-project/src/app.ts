console.log("Project Time - Section 13");
import axios from "axios";

const form = document.querySelector("form")! as HTMLFormElement;
const addressInput = document.getElementById("address")! as HTMLInputElement;

const googleAPIKey = process.env.GOOGLE_MAPS_API_KEY;

// console.log(googleAPIKey);

function searchAddressHandler(event: Event) {
  event.preventDefault();
  const enteredAddress = addressInput.value;

  axios
    .get(
      <{ results: { geometry: { location: { lat: number; lng: number } } }[] }>(
        `googleurlgoeshere/${encodeURI(enteredAddress)}`
      )
    )
    .then(response => {
      const coordinates = response.data.results[0].geometry.location;
    })
    .catch(err => console.error(err));
}

form.addEventListener("submit", searchAddressHandler);
