function myFunction() {
	document.getElementById("text").innerHTML = "Hello there!";
}

function showMyName(firstName, LastName) {
	alert("My name is: " + firstName + " " + LastName);
}

function mOver(obj) {
    obj.innerHTML = "Thank You";
}

function mOut(obj) {
    obj.innerHTML = "Mouse Over Me";
}

function dblclick() {
	document.getElementById("again").innerHTML = "Hello Again!!!";
}

function remove() {
	alert("You cut text!");
}

function addNumber(x, y) {
	var result = x + y;
	return alert(result);
}

var getElId = document.getElementById('btn');

getElId.addEventListener("click", function() {
	addNumber(2000, 16);
});
