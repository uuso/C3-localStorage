const defaultCityName = "UNDEFINED";
let city = defaultCityName;


function switchVisible() {
	document.querySelector("#city-header").classList.toggle("d-flex");
	// document.querySelector("#city-reset").classList.toggle("d-none");
	document.querySelector(".form-inline").classList.toggle("d-none");
}
function btnClick() {
	event.preventDefault();
	city = document.querySelector("#city-input").value ? document.querySelector("#city-input").value : defaultCityName;
	
	console.log(`Current city is ${city} now.`);
	localStorage.setItem("city", city);
	document.querySelector("#city-span").innerText = city;
	switchVisible();
}

function cityReset() {
	localStorage.removeItem("city");
	document.querySelector("#city-span").innerText = defaultCityName;
	document.querySelector("#city-input").value = "";
	switchVisible();
}

