function hitungDiagonal(matrix) {
    let diagonal1 = 0;
    let diagonal2 = 0;
    const n = matrix.length;

    // Hitung jumlah diagonal pertama dan diagonal kedua
    for (let i = 0; i < n; i++) {
        diagonal1 += matrix[i][i];
        diagonal2 += matrix[i][n - 1 - i];
    }

    // Hitung hasil pengurangan
    const difference = Math.abs(diagonal1 - diagonal2);
    return difference;
}

const matrix = [[1, 2, 0], [4, 5, 6], [7, 8, 9]];
const result = hitungDiagonal(matrix);
console.log("maka hasilnya adalah ", result); 
