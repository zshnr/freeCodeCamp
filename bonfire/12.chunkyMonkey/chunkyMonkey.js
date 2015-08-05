function chunk(arr, size) {
  var newArr = [];
  if (arr.length % size === 0) {
    for (i = 0; i <= arr.length - size; i += size) {
      newArr.push(arr.slice(i, size + i));
    }
  } else {
    for (i = 0; i <= size; i += size) {
      newArr.push(arr.slice(i, size + i));
    }
  }
  return newArr;
}
