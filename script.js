//your JS code here. If required.
const input = document.getElementById("display");

// Number Buttons
for(let i = 0; i <= 9; i++) {
	document
		.getElementById(`${i}`)
		.addEventListener("click", () => {
			input.textContent += i;
		});
}

// Operators
document.getElementById("plus").onclick = () => input.textContent += "+";
document.getElementById("-").onclick = () => input.textContent += "-";
document.getElementById("*").onclick = () => input.textContent += "*";
document.getElementById("divi").onclick = () => input.textContent += "/";
document.getElementById("dot").onclick = () => input.textContent += ".";
document.getElementById("op").onclick = () => input.textContent += "(";
document.getElementById("cl").onclick = () => input.textContent += ")";

// Clear
document.getElementById("C").onclick = () => input.textContent = "";

// back
document.getElementById("back").onclick = () => {
	input.textContent = Math.floor(Number(input.textContent) / 10);
}

// Answer
document.getElementById("equal").onclick = () => {
	try {
		input.textContent = eval(input.textContent);
	} catch (e) {
		input.textContent = "Error";
	}
};
