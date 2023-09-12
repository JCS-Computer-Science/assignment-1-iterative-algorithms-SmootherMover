const numberSet = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

function linearSearch(array, searchTerm) {

	for(let i = 0; i < array.length; i++ ){
		if(array[i] == searchTerm){
			return i;
		}
	};

	/*
	 ** Check each element from start to finish
	 ** until you find an element that matches the search term
	 **
	 ** Return the index of the found element
	 */

}

console.log(linearSearch(numberSet, 15));

module.exports = linearSearch;
