"use strict";
var DonorInfo = (function(oldDonors) {

	var donors = [
	{ name: "John Donut",
	 pledge: 70},

	 {name: "Mary Smith",
	 pledge: 50},

	 {name: "Sayer Tang",
	 pledge: 85},

	 {name: "Sarah Johnson",
	 pledge: 100}
	 ];

	console.log("donorInfo", donors );

	 var numDonors= 4;

	 return {
	 	givemieInfo: function() {
	 		console.log("donorInfo", donors );
	 		return donors;
	 	},
	 	getNumOfDonors: function() {
	 		console.log("numDonors",numDonors );
	 		return numDonors;

	 	},
	 	 
	 	 
	 	 addNewDonors: function(newName, newPledge){
	 	 	donors.push({name: newName, pledge: newPledge});
	 	 	return donors;

	 	 },
	 	 

	 }
		// DonorInfo.activateEvents();

})(DonorInfo || {});




//DonorInfo.removeDonors();
console.log(DonorInfo.getNumOfDonors());
//console.log("donors", DonorInfo.givemieInfo());
console.log("getNumOfDonors", DonorInfo.getNumOfDonors());
console.log("DonorInfo", DonorInfo.givemieInfo());
//console.log("removeDonors",removeDonors(Sarah Johnson,100));
