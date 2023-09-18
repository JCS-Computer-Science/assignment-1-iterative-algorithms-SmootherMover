let numberSet = [7, 3, 1, 9, 5, 99, 100, 42, 1230, 23];

function selectionSort(array){

	let temporary;
	let cut;

	for (let i = 0; i < array.length; i++){
		let min = Math.min(...array.slice(i));
		cut = array.indexOf(min, i);
		temporary = array[i];
		array[i] = min;
		array[cut] = temporary;
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
