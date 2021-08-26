// Pertanyaan No. 1

// console.log(5 > 4); // true
// console.log("apple" > "pineapple"); // false
// console.log("2" > "32"); // false
// console.log(undefined == null); // true
// console.log(undefined === null); // false
// console.log(null == "\n0\n"); // false
// console.log(null === +"\n0\n"); // false

// Pertanyaan No. 2

// const a = 2;
// const b = 2;
// let result;
// if (a + b < 4) {
//     result = "Below";
// } else {
//     result = "Over";
// }
// // Menjadi Seperti Ini (Conditional Operation)
// number = a + b < 4 ? "Below" : "Over";
// console.log(number);

// Pertanyaan No. 3

// let age = 21;
// if (age > 14 || age < 90) {
//     result = "Benar";
// } else {
//     result = "Salah";
// }
// console.log(result);

// Pertanyaan No. 4

// let angka = 2;
// while (angka < 11) {
//     console.log(angka);
//     angka++; // Menggunakan while
// }
// for (let i = 2; i < 11; i++) {
//     console.log(i); // Menggunakan for
// }

// Pertanyaan No. 5

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

// Pertanyaan No. 6

// let users = {
//     name: "John",
//     surname: "Smith",
// };
// users.name = "Pete"; // Mengubah value name dari object users
// delete users.name; // Menghapus properti dari object users
// console.log(users);

// Pertanyaan No. 7

// let users = [
//     { name: "John", age: 25 },
//     { name: "Pete", age: 30 },
//     { name: "Mary", age: 28 },
// ];
// let names = users.map((item) => {
//     return item.name;
// });
// console.log(names); // Hasil akhirnya nilai Array
// let users = [
//     { name: "John", age: 25 },
//     { name: "Pete", age: 30 },
//     { name: "Mary", age: 28 },
// ];
// users.forEach((item) => {
//     console.log(item.name);
// }); // Hasil akhirnya nilai Object
