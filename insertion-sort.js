let numberSet = [7, 3, 1, 9, 5, 99, 100, 42, 1230, 23];

function insertionSort(array) {

	const swapElements = (array, index1, index2) => {
		let temp = array[index1];
		array[index1] = array[index2];
		array[index2] = temp;
	};

	for(let  i = 0;  i < array.length;  i++){
		
		if(array[i] > array[i+1]){

			swapElements(array, i+1, i);
			console.log(array);
		}

		
	}
	/*
	 ** For each element in the array, swap it with the element
	 ** before it over and over as long as the element before it
	 ** is bigger
	 */

	return array;
}

console.log(insertionSort(numberSet));


module.exports = insertionSort;
