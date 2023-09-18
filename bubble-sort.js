let numberSet = [7, 3, 1, 9, 5, 99, 100, 42, 1230, 23];

function bubbleSort(array) {

    for (let i = 0; i < array.length; i++) {
        let temporary;

        if(array[i] < array[i+1]){
            temporary = array[i+1];
            array[i+1] = array[i]
            array[i] = temporary;

        }

        for (let j = 0; j < array.length; j++) {
           
            if(array[j] > array[j+1]){
                temporary = array[j+1];
                array[j+1] = array[j]
                array[j] = temporary;
    
            }
            
        }
        
    }
	/*
    ** Compare the first two elements and swap if necessary.
    ** Then compare the second and third elements and swap if
    ** necessary. Continue until you've checked and swapped (if needed)
    ** the last and second last elements.
    
    ** Repeat the above process until you get through an entire
    ** cycle without needing any swaps
    */

	return array;
}

console.log(bubbleSort(numberSet));


module.exports = bubbleSort;
