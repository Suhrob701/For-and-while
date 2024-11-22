let array = [2, 4, 9, 10, 45, 67, 8, 90]; 
console.log(array)

let juftSonlar = []; 


for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) { 
        juftSonlar.push(array[i]); 
    }
}

console.log(juftSonlar);  