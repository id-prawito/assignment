// Pertanyaan No. 3
// Cara Mudah
console.log(
    "\nPertanyaan No. 3 : Buatlah sebuah array yang berisi angka-angka. Berikan output yang berisi angka yang paling kecil dan yang paling besar yang berada di dalam array tersebut, dengan catatan, angka-angka di dalam array tidak boleh berurutan!\n"
);

var nums = [1, 9, 4, 5, 3];
let min = Math.min.apply(Math, nums); // Untuk mencari nilai min dalam array
let max = Math.max.apply(Math, nums); // Untuk mencari nilai max dalam array

console.log("Arraynya    : ", nums);
console.log("Hasil Nilai :", "Min :", min, "Max :", max);

// Cara Sedikit Susah
// let angka = [2, 4, 5, 7, 15, 62, 41, 53, 22, 9, 83, 65];
// let max = angka[0];
// for (let i = 0; i < angka.length; i++) {
//     if (angka[i] >= max) {
//         max = angka[i];
//     }
// }
// console.log(max); // Operasi untuk mencari nilai Max

// let angkaMin = [2, 4, 5, 7, 15, 62, 41, 53, 22, 9, 83, 65];
// let min = angkaMin[0];
// for (let i = 0; i < angkaMin.length; i++) {
//     if (angkaMin[i] < min) {
//         min = angkaMin[i];
//     }
// }
// console.log(min); // Operasi untuk mencari nilai Min

// End Pertanyaan No. 3

// Soal Latihan dari mas Yusuf
// Latihan : Mengganti variabel dari name dengan nama lain tanpa menghilangka isi value
//           daripada objek sebelumnya.

// const myCar = {
//     name: "Atoyot",
//     km: 600,
// };

// // Menggunakan Satunya Lagi
// const removeCar = (car) => {
//     return { ...car, name: "Toyota" };
// };

// // Menggunakan Flat Object
// // const removeCar = (car) => {
// //     car.name = undefined;
// //     return car;
// // };

// const carWithoutName = removeCar(myCar);
// console.log("Without Name: " + carWithoutName.name, myCar.km);
// console.log(myCar, carWithoutName);

// End Latihan

// Pertanyaan No. 2
console.log(
    "\nPertanyaan No. 2 : Buatlah sebuah array berisi angka-angka. Berikan output yang berisi jumlah dari semua angka di dalam array tersebut, dan ketika di jumlahkan lebih dari 30, tambahkan kata It's to Big."
);

const array = [6, 10, 4, 6, 9, 10];
console.log("\nArraynya : ", array);

// Cara Penjumlahan Pertama
let sum = 0;
for (let n of array) sum += n;

// Cara Penjumlahan Kedua
// const sum = array.reduce((acumulator, currentValue) => {
//     return acumulator + currentValue;
// }, 0);

// Pengkondisian
if (sum < 30) {
    console.log(sum);
} else {
    console.log("Hasilnya :", sum, "It's To Big");
}
// End Pertanyaan No. 2

// Pertanyaan No. 1
console.log(
    "\nPertanyaan No. 1 : Buatlah sebuah variable String lalu ubahlah string tersebut dengan mengganti semua huruf vokal dengan simbol '*'. Variable bisa langsung dibuat dengan value 'The Quick Brown Fox Jumps Over the Lazy Dog', ataupun bisa berupa input dari user.\n"
);

const str = "The quick red fox jumped over the lazy dog's back.";
console.log("Stringnya :", str);
console.log("Hasinya   :", str.replace(/[a|i|u|e|o]/g, "*"));
// End Pertanyaan No. 1
