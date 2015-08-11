function unite(arr1, arr2, arr3) {
    var args = Array.prototype.slice.call(arguments);
    var firstArray = args.shift();
    function returnArrayofMissingElements(array, element){
        return function(element) {
            return array.indexOf(element) === -1;
        };
    }
    for (i = 0; i <= args.length - 1; i++) {
        var arrayOfMissingElements = args[i].filter(returnArrayofMissingElements(firstArray));
        firstArray = firstArray.concat(arrayOfMissingElements);
    }
    return firstArray;
}
