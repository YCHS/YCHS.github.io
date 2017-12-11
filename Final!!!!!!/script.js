console.log("loaded");

function nextZodiac(e){
		e.preventDefault();
		var activeSlide = document.getElementsByClassName("z-active")[0]; 
		var current = parseInt(activeSlide.id);
		var next = parseInt(e.target.id);

		if (current == next) {
				return false;
		}
		else {
				document.getElementById(current + "-link").classList.remove("active");
				e.target.classList.add("active");
				
				var nextSlide = document.getElementById(next + "-zodiac");
				nextSlide.classList.add("z-preStart");
				activeSlide.classList.add("animate-end"); 
				setTimeout(transition, 800);
				
				function transition() {
						nextSlide.classList.remove("animate-start", "z-preStart");
						nextSlide.classList.add("z-active");
						activeSlide.classList.add("animate-start");
						activeSlide.classList.remove("animate-end", "z-active"); 
				} 
				return true;
		}
}

document.body.onload = function() {loadElements();};
document.getElementById("slider").addEventListener("click", nextZodiac);

