function secondHighest(arr) {
    if (arr.length <= 1) return -Infinity;
    
    let first = -Infinity;
    let second = -Infinity;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > first) {
            second = first;
            first = arr[i];
        } else if (arr[i] > second && arr[i] !== first) {
            second = arr[i];
        }
    }

    return second === -Infinity ? -Infinity : second;
}

function findSecondHighest() {
    const input = document.getElementById('inputArray').value;
    
    try {
        // Parse the input array
        const arr = JSON.parse(input);
        
        if (Array.isArray(arr)) {
            const result = secondHighest(arr);
            document.getElementById('result').innerText = Second highest element: ${result};
        } else {
            document.getElementById('result').innerText = "Please enter a valid array.";
        }
    } catch (e) {
        document.getElementById('result').innerText = "Invalid array format.";
    }
}