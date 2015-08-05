function where(collection, source) {
  var sourceKeys = Object.keys(source);
  var similarObjects = [];
  for (i = 0; i <= collection.length - 1; i++) {
    if (collection[i][sourceKeys[0]] === source[sourceKeys[0]]){
      similarObjects.push(collection[i]);
    }
  }
  return similarObjects;
}
