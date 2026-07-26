//your JS code here. If required.
const input = document.getElementById("display");

// Number Buttons
for(let i = 0; i <= 9; i++) {
	document
		.getElementById(`${i}`)
		.addEventListener("click", () => {
			input.value += i;
		});
}

// Operators
document.getElementById("plus").onclick = () => input.value += "+";
document.getElementById("-").onclick = () => input.value += "-";
document.getElementById("*").onclick = () => input.value += "*";
document.getElementById("divi").onclick = () => input.value += "/";
document.getElementById("dot").onclick = () => input.value += ".";
document.getElementById("op").onclick = () => input.value += "(";
document.getElementById("cl").onclick = () => input.value += ")";

// Clear
document.getElementById("C").onclick = () => input.value = "";

// back
document.getElementById("back").onclick = () => {
	input.value = Math.floor(Number(input.value) / 10);
}

// Answer
document.getElementById("equal").onclick = () => {
	try {
		input.value = eval(input.value);
	} catch (e) {
		input.value = "Error";
	}
};
