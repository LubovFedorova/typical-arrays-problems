
exports.min = function min (arr) {
  if (arr === undefined || arr.length === 0) {
        return 0;
      } else {
       return arr.reduce((prev,item) => prev < item ? prev : item);
      }
}

exports.max = function max (arr) {
  if (arr === undefined || arr.length === 0) {
        return 0;
      } else {
      return arr.reduce((prev,item) => prev > item ? prev : item);
      }
}

exports.avg = function avg (arr) {
  if (arr === undefined || arr.length === 0) {
        return 0;
      } else {
      return arr.reduce((prev, item) => prev + item, 0) / arr.length;
      }
}
