function check(datakey, word) {
  let array = [];
  for (let i = 0; i < datakey.length; i++) {
    if (word.includes(dataKey[i])) {
      array.push(true);
    } else {
      array.push(false);
    }
    console.log(datakey[i] + "=>" + array[i]);
  }
}

var dataKey = ["dumb", "ways", "the", "best"];
var word = "dumbways";

console.log(check(dataKey, word));
