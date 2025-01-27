function alertDateTime(event) {
  let parisTz = moment().tz("Europe/Paris").format("dddd, MMMM D, YYYY h:mm A");
  let tokyoTz = moment().tz("Asia/Tokyo").format("dddd, MMMM D, YYYY h:mm A");
  let sydneyTz = moment()
    .tz("Australia/Sydney")
    .format("dddd, MMMM D, YYYY h:mm A");
  if (event.target.value == "paris") {
    alert(`It is ${parisTz} in Europe/Paris`);
  }
  if (event.target.value == "tokyo") {
    alert(`It is ${tokyoTz} in Asia/Tokyo`);
  }
  if (event.target.value == "sydney") {
    alert(`It is ${sydneyTz} in Australia/Sydney`);
  }
}
let countryDropdown = document.querySelector("#country-dropdown");
countryDropdown.addEventListener("change", alertDateTime);
