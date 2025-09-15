// 2. Hitung jumlah kata dalam kalimat (kata valid hanya huruf a-z / A-Z)

function countWords(sentence) {
  const words = sentence.trim().split(/\s+/);
  const validWords = words.filter((word) => {
    const cleaned = word.replace(/[.,!?]$/, "");
    return /^[a-zA-Z]+$/.test(cleaned);
  });

  return validWords.length;
}

console.log(countWords("Saat meng*ecat tembok, Agung dib_antu oleh Raihan."));

console.log(countWords("Berapa u(mur minimal[ untuk !mengurus ktp?"));

console.log(
  countWords("Masing-masing anak mendap(atkan uang jajan ya=ng be&rbeda.")
);

// note harusnya output nya 5,3,3 karena - juga dianggap special karakter