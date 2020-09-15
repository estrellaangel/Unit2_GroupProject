let number = prompt("What is the decimal number?");

let binary = Number(number);

let binaryArray =[];

while (binary>0){
    binaryArray.push(binary%2);
    binary = binary - (binary%2);
    binary = binary/2;
}
binaryArray.reverse();
binaryArray.replace(/(\d{4})/g, '$1 ').replace(/(^\s+|\s+$)/,'')
var binaryStringC = binaryArray.toString();
var binaryString = binaryStringC.replace(/,/g,``);
console.log(binaryString);


let hexadecimal = Number(number);

let hexadecimalArray =[];

let hexadecimalRemainder;

while (hexadecimal>0){
    hexadecimalArray.push(hexadecimal%16);
    hexadecimal = hexadecimal - (hexadecimal%16);
    hexadecimal = hexadecimal/16;
}

hexadecimalArray.reverse();

var hexadecimalStringC = hexadecimalArray.toString();

var finalHexadecimalArray = hexadecimalStringC.replace(`10`,`A`).replace(`11`,`B`).replace(`12`,`C`).replace(`13`,`D`).replace(`14`,`E`).replace(`15`,`F`);

var hexadecimalString = finalHexadecimalArray.replace(/,/g,``);
console.log(hexadecimalString);