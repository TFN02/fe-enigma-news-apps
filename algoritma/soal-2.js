function kataTerpanjang(word) {
    // memisahkan kata yang ada pada kalimat inputan
    const words = word.split(' ');
    let longestWord = "";

    // Looping untuk memeriksa panjang kata
    for (let i = 0; i < words.length; i++) {
        // Jika panjang kata saat ini lebih besar dari panjang kata terpanjang
        if (words[i].length > longestWord.length) {
            // Simpan kata tersebut
            longestWord = words[i];
        }
    }

    return longestWord;
}

const sentence = "Saya sangat senang mengerjakan soal algoritma";
const longestWord = kataTerpanjang(sentence);
console.log("Kata terpanjang:", longestWord);
