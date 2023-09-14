const numberSet = [ 1, 2, 3, 4, 5, 6, 7, 8, 9];

function binarySearch(array, searchTerm) {
	
	let arrayStart = 0;
	let arrayEnd = array.length - 1	; 

	while(arrayStart <= arrayEnd){ 
		
		let middleTerm  = Math.floor((arrayStart + arrayEnd)/2);
	
		if(array[middleTerm] == searchTerm ){

			return middleTerm;

		}else if(array[middleTerm] >searchTerm ){

			arrayEnd = middleTerm - 1;
		
		}else{

			arrayStart = middleTerm + 1;
		
		}

	}
	
	/*
	 ** Check the middle element, if it's higher than the searchTerm
	 ** then check the element in between the start and the middle, otherwise
	 ** check the element between the middle and the end
	 
	 ** repeat the above process for the subset of the array
	 ** keep repeating with smaller and smaller subsets until you find the searchTerm
	 */

	
}


binarySearch(numberSet, 2);

module.exports = binarySearch;
