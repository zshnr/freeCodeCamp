function end(str, target) {
  if (str.substr(str.length - 1) == target && target.length === 1) {
    return true;
  } else if(target.length > 1) {
      if(str.substr(str.length - target.length) == target) {
        return true;
      } else {
        return false;
      }
  } else {
    return false;
  }
}
