// Soal 1
console.log('Soal 1 - Indentifikasi prima 1 or 0');
//cek apakah angka yang dikirim adalah angka prima atau bukan?
//cek google bagi yang ga tau apa itu angka prima
function angkaPrima(angka) {
    // you can only write your code here!
    if(angka % 2 != 0) {
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

// ------------- //
console.log(' ');
// ------------- //

// Soal 2
console.log('Soal 2 - FPB');
//cari faktor persekutuan terbesar
function fpb(angka1, angka2) {
    // you can only write your code here!
    while (angka1 !== angka2){
        if(angka1 > angka2){
          angka1 -= angka2  
        } else {
            angka2 -= angka1
        }
    }
    return angka1
}
  
// TEST CASES
console.log(fpb(12, 16)); // 4
console.log(fpb(50, 40)); // 10
console.log(fpb(22, 99)); // 11
console.log(fpb(24, 36)); // 12
console.log(fpb(17, 23)); // 1