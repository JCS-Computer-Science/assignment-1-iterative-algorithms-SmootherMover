const numberSet = [ 1, 2, 3, 4, 5, 6, 7, 8, 9];

function binarySearch(array, searchTerm) {
	
	let arrayStart = 0;
	let arrayEnd = array.length + 1	; 
	let termLocation; 

	while(arrayStart <= arrayEnd){ 
		
		let middleTerm  = Math.floor((arrayStart + arrayEnd)/2);
		console.log(middleTerm);
		if(array[middleTerm] == searchTerm ){
			termLocation = arrayEnd;
			return true;
		}else if(searchTerm > middleTerm){
			arrayStart = middleTerm + 1;
			console.log("y");
		}else{
			arrayEnd = middleTerm - 1;
			console.log("x");
		}

	termLocation = arrayEnd;
	
	}
	
	/*
	 ** Check the middle element, if it's higher than the searchTerm
	 ** then check the element in between the start and the middle, otherwise
	 ** check the element between the middle and the end
	 
	 ** repeat the above process for the subset of the array
	 ** keep repeating with smaller and smaller subsets until you find the searchTerm
	 */
	
	console.log(termLocation);
}


binarySearch(numberSet, 9);

module.exports = binarySearch;
