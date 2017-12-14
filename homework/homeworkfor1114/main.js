var namestring = "ARIES:,TAURUS:,GEMINI:,CANCER:,LEO:,VIRGO:,LIBRA:,SCORPIO:,CAPRICORN:,SAGITTARIAN:,AQUARIAN:,PISCE:"

console.log(namestring)

var exampleArray = [1, 2, 3, 5, "hi", null, true]

console.log(exampleArray)
console.log(exampleArray.toString() )

var nameArray = namestring.split(",")
console.log(nameArray)


var container = document.querySelector(".output ul")

// for(var i = 0; i < nameArray.length; i++) {
// 	console.log(nameArray[i])
// }

nameArray.forEach(function(theElement, itsIndex, theOriginalArray) {
	console.log(theElement + " is in position " + itsIndex)
})


nameArray.forEach(make_a_list);


function make_a_list(el, ix) {
	var listItem = document.createElement("li")

	listItem.textContent = el + descriptions[ix];
	container.appendChild(listItem)
}


var names = document.querySelectorAll(".output ul li")
console.log(names)





