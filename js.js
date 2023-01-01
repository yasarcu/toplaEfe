
    window.onload = function() {
		document.body.style.backgroundColor = "yellow";
         num1 = Math.floor(Math.random() * 11);
         num2 = Math.floor(Math.random() * (20 - num1 + 1)) + num1;
         document.getElementById("question").innerHTML = num1 + " + " + num2 + " = ";
    }
    // let num1 = Math.floor(Math.random() * 11); // generate random number from 0 to 10
	// let num2 = Math.floor(Math.random() * (20 - num1 + 1)) + num1; // generate random number from num1 to 20
	// document.getElementById("question").innerHTML = num1 + " + " + num2 + " = ";

	function checkAnswer() {
		let input = document.getElementById("answer").value;
		if (input == num1 + num2) {
			document.body.style.backgroundColor = "green";
			alert("Bravo doğru!");
		} else {
			document.body.style.backgroundColor = "red";
			alert("Yanlış tekrar dene!");
		}
	}

	function newQuestion() {
		num1 = Math.floor(Math.random() * 11); // generate new random number from 0 to 10
		num2 = Math.floor(Math.random() * (20 - num1 + 1)) + num1; // generate new random number from num1 to 20
		document.getElementById("question").innerHTML = num1 + " + " + num2 + " = ";
		document.getElementById("answer").value = "";
		document.body.style.backgroundColor = "yellow";
	}
