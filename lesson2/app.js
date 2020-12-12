//配列
const scores = [80,60,40];
console.log(scores);
scores[2] = 45;
console.log(scores);
console.log(scores.length);

for (let i = 0; i < scores.length; i++){
    console.log(`Scores: ${scores[i]}`);
}

{
    const box = [10,20,30,40,50];
    box.splice(1, 1, 13, 15, 17, 19);
    console.log( box );
}

{
    const sub = [13, 15, 17, 19];
    const box = [10, ...sub, 20,30,40,50,];
    console.log( box );
}

{
    const sub = [13, 15, 17, 19];
    const [a, b, c, d] = sub;
    console.log(a);
    console.log(b);
    console.log(c);
    console.log(d);
}

{
   const scores = [80, 60, 40, 20, 0];
   scores.forEach((score, idx) => {
       console.log(`Score: ${idx}, ${score}`);
   });
}

{
    const prices = [180, 190, 200];
    const updatedPrices = prices.map(price => price + 20);
    console.log(updatedPrices);
}

{
    const numbers = [1, 4, 7, 8, 10];
    const evenNumbers = numbers.filter(number => number % 2 === 0);
    console.log(evenNumbers);
}

{
    const point = {
        a: 10,
        b: 20,
        c: 30,
        d: 40
    };

    point.z = 120;
    delete point.c;
    console.log(point);
}

{
    const add = {
        f: 20,
        g: 50
    };

    const point = {
        a: 10,
        b: 20,
        c: 30,
        d: 40,
        ...add
    };

    console.log(point);

}

{
    const point = {
      x: 100,
      y: 180,
    };

    const keys = Object.keys(point);
    keys.forEach(key => {
      console.log(`Key: ${key} Value: ${point[key]}`);
    });

}

{
    const points = [
      {x: 30, y: 20},
      {x: 10, y: 50},
      {x: 40, y: 40},
    ];
    console.log(points[1].y);
}
{
    let x = [1, 2];
    let y = [...x];
    x[0] = 5;
    console.log(x); // [5, 2]
    console.log(y); // [1, 2]
}

{
    const str = 'hello';

  console.log(str.length);

  // str.substring(開始位置, 終了位置);
  console.log(str.substring(2, 4));

  console.log(str[1]);
}

{
  const d = [2019, 11, 14];

  console.log(d.join('/'));
  // console.log(d.join(''));

  const t = '17:08:24';
  // console.log(t.split(':'));
  const [hour, minute, second] = t.split(':');
  console.log(hour);
  console.log(minute);
  console.log(second);
}