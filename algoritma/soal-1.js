function reverseHuruf(inputString) {
    let reversedLetters = "";
    let numbers = "";

    for (let i = 0; i < inputString.length; i++) {
        // Memeriksa setiap karakter apakah amgka/huruf
        if (isNaN(inputString[i])) {
            // Jika huruf, tambahkan ke depan reversedLetters
            reversedLetters = inputString[i] + reversedLetters;
        } else {
            // Jika angka, tambahkan ke variabel numbers
            numbers += inputString[i];
        }
    }

    // digabung kembali
    let result = reversedLetters + numbers;
    return result;
}
let inputString = "NEGIE1";
let hasil = reverseHuruf(inputString);
console.log("Hasil =", hasil);
