let numberSet = [7, 3, 1, 9, 5, 99, 100, 42, 1230, 23, 0, -99];

function selectionSort(array){
	
	let dummyArray = array;
	let min = array[0];

	for (let i = 0; i < array.length; i++) {

		if(array[i] < min){
			min = array[i];
		}
	
	
	}	

	for (let j = 0; j < array.length; j++) {


		let index = array.indexOf(min);
		array.splice(index, 1);
		array.unshift(min);

	}
		
	
	/*
	 ** Search through the whole array for the smallest element
	 ** then swap it with the first element.
	 ** Next, search through the whole array (except the first element)
	 ** for the smallest, then swap it with the second element.
	 ** Continue like this until you have only one element left.
	 */
	return array;
	
}

console.log(selectionSort(numberSet));


module.exports = selectionSort;
