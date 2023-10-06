function hitungJumlahKata(input, query) {
    // Inisialisasi array output dengan panjang query dan setiap elemen diisi dengan 0
    let output = Array(query.length).fill(0);

    // Loop melalui setiap kata dalam query
    for (let i = 0; i < query.length; i++) {
        // Loop melalui setiap kata dalam input
        for (let j = 0; j < input.length; j++) {
            // Jika kata dalam query ditemukan dalam input, tambahkan hitungan pada output
            if (query[i] === input[j]) {
                output[i]++;
            }
        }
    }

    return output;
}

const INPUT = ['xc', 'dz', 'bbb', 'dz'];
const QUERY = ['bbb', 'ac', 'dz'];
const output = hitungJumlahKata(INPUT, QUERY);
console.log("OUTPUT =", output);
