var arr = Array.from({length: 10}, () => Math.floor(Math.random() * 100));

function bunble_sort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                var tmp = arr[i];
                arr[i] = arr[j];
                arr[j] = tmp;
            }
        }
    }
}


console.log(arr.join(','));
bunble_sort(arr);
console.log(arr.join(','));
