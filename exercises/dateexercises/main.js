//console.log(date)

let wrapper = document.querySelector(".wrapper");
let dateDiv = document.createElement("div");
let otherText = document.createElement("span");

function displayDate() {
	let date = new Date();
	wrapper.appendChild(otherText);
	wrapper.appendChild(dateDiv);
	otherText.classList.add("description");
	dateDiv.classList.add("date");
	dateDiv.innerHTML = date;
}

function clearPage () {
	dateDiv.innerHTML = " ";
}


setInterval(displayDate, 1000);
displayDate();