function slasher(arr, howMany) {
  if (howMany >= arr.length) {
     return [];
  } else if (howMany < 1) {
    return arr;
  } else {
    return arr.splice(howMany, howMany);
  }
}
