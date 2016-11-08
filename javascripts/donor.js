"use strict";

var DonorInfo = (function(oldDonors) {

oldDonors.activateEvents = function() {


var submit = document.getElementById('submit');
var donate = document.getElementById("donate");
var cancel = document.getElementById('cancel');
var outputList = document.getElementById('list');
var inputName = document.getElementById("name");
var pledge = document.getElementById("pledge");

// donate.addEventListener("click", function(event) {
// 	DonorInfo.addNewDonors(name.value, pledge.value);
// })

donate.addEventListener("click", function() {
	if(inputName.value === " " && pledge.value === " "){
		alert("please submit your name and pledge");
	}
	var addDonors = DonorInfo.addNewDonors(inputName.value, pledge.value);
	console.log("addDonors",addDonors );
	var outputString = " ";
	addDonors.forEach(function(currentDonors, index) {
		if(index % 3 === 0) {
			outputString += `<div class="row">`
		}

		outputString +=` <div class="col-xs-3 ${index}">
		 			 	 <p>${currentDonors.name} ${": $ "}
		 			 	 ${currentDonors.pledge}</p></div>`;

		if((index+1) %3 ===0) {
			outputString += `</div>`
		}
	});

	inputName.value = " ";
	pledge.value = " ";
	
	console.log("outputList",outputString );
	outputList.innerHTML = outputString;
});

	console.log("hello", "hello" );

cancel.addEventListener("click", function(event) {
	inputName.value = " ";
	pledge.value = " ";

  if(event.target.value === name && event.target.value === pledge) {
	   outputList.innerHTML.remove(name, pledge);
 }

})
}
return oldDonors;

})(DonorInfo || {})
 
// $("cancel").click(function(name, pledge) {
// 	$("document").remove("name","pledge");
// }
DonorInfo.activateEvents();
