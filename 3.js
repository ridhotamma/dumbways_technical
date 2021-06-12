function cetak_gambar(besar_gambar) {
  // untuk mengecek area median pada gambar
  let median = parseInt(besar_gambar / 2);
  for (let i = 0; i < besar_gambar; i++) {
    for (let j = 0; j < besar_gambar; j++) {
      if (i === 0 || i === median || i === besar_gambar - 1) {
        process.stdout.write("* ");
      } else if (j === 0 || j === besar_gambar - 1) {
        process.stdout.write("* ");
      } else {
        process.stdout.write("= ");
      }
    }
    process.stdout.write("\n");
  }
}

cetak_gambar(5);
