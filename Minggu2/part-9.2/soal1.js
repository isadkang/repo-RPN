// Soal 1
console.log('Soal 1 - Indentifikasi prima 1 or 0');
//cek apakah angka yang dikirim adalah angka prima atau bukan?
//cek google bagi yang ga tau apa itu angka prima
function angkaPrima(angka) {
    // you can only write your code here!
    if (angka % 2 != 0) {
        return `${angka} = ${true} Prima`
    } else {
        return `${angka} = ${false} !Prima`
    }
}

// TEST CASES
console.log(angkaPrima(2)); // false
console.log(angkaPrima(3)); // true
console.log(angkaPrima(7)); // true
console.log(angkaPrima(6)); // false
console.log(angkaPrima(23)); // true
console.log(angkaPrima(33)); // false