let adder=require("./second")

console.log(adder(2,3));


let word1='Poonam';
let word2='Safi';

const fullName=word1 + ' ' + word2;
let num1 = 2;
let num2 = 3;

const FullName = `${num1 + num2} ${word2}`;
let sp=123;

console.log(fullName);
console.log(FullName);
console.log(sp);
const player = {
    name: 'Lebron James',
    club: 'LA Lakers',
    address: {
      city: 'Los Angeles'
    }
  };
  
  console.log( player.club );


  // fetch("https://dog.ceo/api/breeds/image/random")
  // .then(response => response.json())
  // .then(data => console.log(data))