function findCommonElements(arr1, arr2) {
    const set1 = new Set(arr1);
    const set2 = new Set(arr2);
    const commonElements = [...set1].filter(element => set2.has(element));
    
    return commonElements;
}

// Example usage:
console.log(findCommonElements([1, 2, 3, 4], [3, 4, 5, 6])); // Output: [3, 4]
console.log(findCommonElements([1, 2, 3], [4, 5, 6]));       // Output: []
