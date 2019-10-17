function saveOptions() {
	const opts = {
		opt1: document.querySelector("#option1").checked,
		opt2: document.querySelector("#option2").checked,
		opt3: document.querySelector("#option3").checked,
		opt4: document.querySelector("#option4").checked,
		opt5: document.querySelector("#option5").checked,
		opt6: document.querySelector("#option6").checked
	};
	localStorage.setItem("opts", JSON.stringify(opts));
	document.querySelector("#option1").toggleAttribute("disabled");
	document.querySelector("#option2").toggleAttribute("disabled");
	document.querySelector("#option3").toggleAttribute("disabled");
	document.querySelector("#option4").toggleAttribute("disabled");
	document.querySelector("#option5").toggleAttribute("disabled");
	document.querySelector("#option6").toggleAttribute("disabled");
	document.querySelector("#btn-opts").classList.toggle("d-none");
}
function loadOptions() {
	const opts = JSON.parse(localStorage.getItem("opts"));
	document.querySelector("#option1").checked = opts.opt1;
	document.querySelector("#option2").checked = opts.opt2;
	document.querySelector("#option3").checked = opts.opt3;
	document.querySelector("#option4").checked = opts.opt4;
	document.querySelector("#option5").checked = opts.opt5;
	document.querySelector("#option6").checked = opts.opt6;
	document.querySelector("#option1").toggleAttribute("disabled");
	document.querySelector("#option2").toggleAttribute("disabled");
	document.querySelector("#option3").toggleAttribute("disabled");
	document.querySelector("#option4").toggleAttribute("disabled");
	document.querySelector("#option5").toggleAttribute("disabled");
	document.querySelector("#option6").toggleAttribute("disabled");
	document.querySelector("#btn-opts").classList.toggle("d-none");
}
