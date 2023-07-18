"use strict";

const submitBtn = document.querySelector(".submit-btn");
const inputEmail = document.getElementById("email");
const label = document.querySelector(".label");

const errorText = document.querySelector(".error-text")

inputEmail.addEventListener("focus", ()=> {
	label.style.borderColor = "var(--primary)";
});

inputEmail.addEventListener("blur", ()=> {
	label.style.borderColor = "var(--secondary)";
});


submitBtn.addEventListener("click", (e)=>{
	e.preventDefault();
	let inputValue = inputEmail.value;
	
	if (inputValue === "") {
		errorText.style.display = "block";
		errorText.textContent = `Whoops! It looks like you forgot to add your email`;
		label.style.borderColor = "var(--tertiary)";
	} else if (!validEmail(inputValue)) {
		errorText.style.display = "block";
		errorText.textContent = `Please provide a valid email address`;
		label.style.borderColor = "var(--tertiary)";
	} else {
		document.body.innerHTML = ` 
			<section>
				<div class="thank-you overflow-cntrl">
					<p class="title comeInUp">Thank <span class="accent">You!</span></p>
				</div>
			</section>
		` ;
	}
});

const validEmail = (inputValue)=> {
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	return emailRegex.test(inputValue);
}