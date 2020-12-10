'use strict';
console.log('Hello world from main.js!');

//定数 const
const a = 150;
console.log(a + 10);
//変数 let
let b = 200;
console.log(b + 10);
b = 250;
console.log(b + 10);
//データ型
console.log(typeof 'hello');
console.log(typeof 5);
console.log(typeof true);
console.log(typeof undefined);
console.log(typeof null);
//parseInt
console.log('5' + 3);
console.log(parseInt('5', 10) + 3);
console.log(parseInt('hello', 10));
//比較演算子
const c = 1000;
console.log(c == 1000);
console.log(c != 1000);
//if
const d = 65;
if (d > 80){
    console.log('GREAT!');
}else if(d > 50){
    console.log('GOOD');
}else{
   console.log('BAD');
}
//条件式 ？ trueの結果 : falseの結果
const e = 85;
e >= 80 ? console.log('Great!') : console.log('OK...!');
//論理演算
// && なおかつ（AND）
// || もしくは（OR）
// ! 〜ではない（NOT）
const score = 60;
const name = 'taguchi';
if (score >= 50 && name === 'taguchi') {
    console.log('Good job!');
  }
//switch
const signal = 'pink';
switch (signal) {
    case 'red':
      console.log('Stop!');
      break;
    case 'yellow':
      console.log('Caution!');
      break;
    case 'blue':
    case 'green':
      console.log('Go!');
      break;
    default:
      console.log('Wrong signal!');
      break;
  }

//for
for (let i = 1; i <= 10; i++) {
    console.log(`hello ${i}`);
  }
//while
let hp = 100;
while (hp > 0) {
  console.log(`${hp} HP left!`);
  hp -= 15;
}

hp = -50;
do {
  console.log(`${hp} HP left!`);
  hp -= 15;
} while (hp > 0);
// continue
for (let i = 1; i <= 10; i++) {
    if (i % 3 === 0) {
      continue;
    }
    console.log(i);
  }
//break
for (let i = 1; i <= 10; i++) {
    if (i === 4) {
      break;
    }
    console.log(i);
  }
//関数
function show(){
    console.log('------------');
}
show()
console.log('abc');
show()
console.log('def');
show()
console.log('ghi');
show()
//引数
function show2(txt){
    console.log(`----- ${txt} -----`);
}
show2('abc');
show2('def');
show2('ghi');
//return
function sum(a, b, c) {
    return a + b + c;
    console.log(a + b + c);//表示されない
  }
sum(1, 2, 3);
sum(3, 4, 5);
const total = sum(1, 2, 3) + sum(3, 4, 5);
console.log(total);
//アロー関数
// const double = function(a) {
//   return a * 2;
// };
const double = a => a * 2;
console.log(double(12));
