// program to generate random strings

// declare all characters

function cetak(total_baris) {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  let array = [];
  const charactersLength = 27;
  let i = 0;
  while (i < total_baris) {
    for (let i = 0; i < charactersLength; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    array.push(result);
    result = "";
    i++;
  }

  return array;
}

console.log(cetak(3));
