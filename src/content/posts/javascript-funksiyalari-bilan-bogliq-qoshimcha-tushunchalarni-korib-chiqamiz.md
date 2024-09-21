---
title: JavaScriptda funksiya  ( return , default value , pure function , impure
  function ,  pipe , currying , factory)
audioUrl: kkk
pubDate: 21 Sep 2024 22:09:45
duration: 0:00:00
size: 0
cover: https://www.khodieff.uz/2024-08-20-18.03.22.jpg
explicit: true
episode: 17
season: 3
postType: full
---
## JavaScript funksiyalari bilan bog'liq qo'shimcha tushunchalarni ko'rib chiqamiz.

### 1. **`return` operatori**

`return` funksiyada natijani qaytarish uchun ishlatiladi. Funksiyaga kirish qachonki `return` operatoriga duch kelsa, u yerda to‘xtaydi va qiymatni qaytaradi.

```jsx
function add(a, b) {
  return a + b; // natijani qaytaradi va funksiyani yakunlaydi
}

let sum = add(5, 10); // sum = 15
console.log(sum);
```

Agar `return` ishlatilmasa, funksiya `undefined` qiymatini qaytaradi.

```jsx
function say(message) {
  console.log(message);
}

let result = say("Hello"); // Funksiya natijasi undefined bo'ladi
console.log(result); // undefined
```

### 2. **Default parametrlar**

Funksiya chaqirilganda agar parametrga qiymat berilmasa, default (standart) qiymatni belgilash mumkin.

```jsx
function greet(name = "Guest") {
  console.log("Hello, " + name);
}

greet(); // "Hello, Guest"
greet("Alice"); // "Hello, Alice"
```

Bu funksiyani chaqirganingda, agar `name` parametriga qiymat berilmasa, u avtomatik ravishda `"Guest"` deb belgilanadi.

### 3. **First-class functions**

JavaScriptda funksiyalar birinchi darajali ob'ektlar sifatida qaraladi. Boshqacha aytganda, ular:

* O'zgaruvchilarga tayinlanishi mumkin,
* Boshqa funksiyalarga argument sifatida o'tkazilishi mumkin,
* Funksiyadan qaytarilishi mumkin.

Misol:

```jsx
function add(a, b) {
  return a + b;
}

let sumFunction = add; // Funktsiyani o'zgaruvchiga tayinlash
console.log(sumFunction(3, 4)); // 7

function performOperation(operation, x, y) {
  return operation(x, y); // Funktsiyani argument sifatida ishlatish
}

let result = performOperation(add, 10, 20); // 30
console.log(result);
```

### 4. **Pure Functions**

Toza funksiyalar har doim bir xil kirish bilan bir xil natija qaytaradi va tashqi dunyoga ta’sir qilmaydi. Ular **no side effects** ga ega, ya’ni tashqi o‘zgaruvchilarni o‘zgartirmaydi.

Misol:

```jsx
function multiply(a, b) {
  return a * b; // faqat kirish qiymatlariga bog'liq
}

console.log(multiply(3, 4)); // 12
console.log(multiply(3, 4)); // 12 (har doim bir xil kirish bir xil natija beradi)
```

### 5. **Impure Functions**

Nopok funksiyalar tashqi o‘zgaruvchilarga bog‘liq yoki ularni o‘zgartirishi mumkin. Ular har doim bir xil natija qaytarmasligi mumkin va **side effects** ga ega bo‘ladi.

Misol:

```jsx
let externalValue = 10;

function impureFunction(a) {
  externalValue += a; // Tashqi o'zgaruvchini o'zgartiryapti
  return externalValue;
}

console.log(impureFunction(5)); // 15
console.log(impureFunction(5)); // 20 (natija har safar o'zgaradi)
```

Bu funksiyalar kiritilgan qiymatlardan tashqari, tashqi holatlarga ham bog‘liq bo‘lgani uchun noaniq bo‘ladi.

### REVIEW

* **`return`** funksiyadan natijani qaytarish uchun ishlatiladi.
* **Default parametrlar** funksiyaga qiymat kiritilmasa avtomatik beriladi.
* **First-class functions** funksiyalarni o'zgaruvchilarga o'rnatish va boshqa funksiyalarga argument sifatida berish mumkin.
* **Pure functions** har doim bir xil kirish bilan bir xil natija qaytaradi va tashqi ta'sir qilmaydi.
* **Impure functions** tashqi holatlarni o‘zgartiradi va bir xil kirish qiymatlari bilan har doim bir xil natija qaytarishi mumkin emas.

- - -

### 1. **Higher-Order Functions (Yuqori darajali funksiyalar)**

Yuqori darajali funksiyalar — bu boshqa funksiyalarni argument sifatida qabul qiladigan yoki funksiyani qaytaradigan funksiyalar. JavaScriptda ko‘p qo‘llaniladi.

![khodieff.uz](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRuSsQBuFrd-Lo9_aPlenEVUK7Osox36HA-Q&s "khodieff.uz")

Misol:

```jsx
function double(num) {
  return num * 2;
}

function processNumbers(numbers, operation) {
  return numbers.map(operation); // operation - funksiya
}

let result = processNumbers([1, 2, 3], double); 
console.log(result); // [2, 4, 6]
```

Bu misolda `processNumbers` funksiyasi boshqa funksiyani (`double`) argument sifatida qabul qiladi.

### 2. **Callback Functions**

Callback funksiyalar boshqa funksiyaga argument sifatida uzatiladigan funksiyalardir va boshqa funksiyaning ichida chaqiriladi.

![khodieff.uz js](https://miro.medium.com/v2/resize:fit:1400/1*MSxjHwFjC3ycYn8-pWh-sg.png "khodieff.uz js ")

Misol:

```jsx
function greetUser(name, callback) {
  console.log("Hello " + name);
  callback();
}

function afterGreet() {
  console.log("Nice to meet you!");
}

greetUser("Alice", afterGreet); // "Hello Alice" va "Nice to meet you!"
```

Bu yerda `afterGreet` funksiyasi `greetUser` ichida chaqiriladi.

### 3. **Closure (Yopilish)**

Closure — bu funksiya ichida yaratilgan boshqa funksiyaning tashqi o‘zgaruvchilarga kirish huquqi borligi. Yopilishni funksiya o‘z ichki doirasida tashqi doiradagi o‘zgaruvchilarni "eslay olishi" deb tushunish mumkin.

![khodieff.uz](https://edward-huang.com/images/what-is-really-so-special-about-javascript-closure-/Closure%20JS.png "khodieff.uz")

Misol:

```jsx
function outer() {
  let outerVar = "I'm outer!";
  
  function inner() {
    console.log(outerVar); // ichki funksiya tashqi o'zgaruvchiga kirishi mumkin
  }

  return inner;
}

let innerFunction = outer();
innerFunction(); // "I'm outer!"
```

Bu misolda `inner` funksiyasi `outerVar` o‘zgaruvchisiga kirish huquqiga ega bo‘ladi.

### 4. **Recursion (Rekursiya)**

Rekursiya — bu funksiya o‘zini o‘zi chaqiradigan jarayondir. Bu algoritmlar va masalalarni yechishda samarali yondashuv.

![khodieff.uz ](https://s3.ap-south-1.amazonaws.com/myinterviewtrainer-domestic/public_assets/assets/000/000/252/original/image.png?1616401337 "khodieff.uz ")

Misol:

```jsx
function factorial(n) {
  if (n === 0) {
    return 1; // bazaviy holat
  }
  return n * factorial(n - 1); // o'zini qayta chaqirish
}

console.log(factorial(5)); // 120
```

Bu misolda `factorial` funksiyasi o‘zini qayta chaqirish orqali faktoriyani hisoblaydi.

- - -

Bu tushunchalar bilan JavaScript funksiyalarini chuqurroq tushunib olamiz

* **Higher-Order Functions**: Funksiyalarni argument sifatida berish yoki natija sifatida qaytarish.
* **Callback Functions**: Funksiyani argument sifatida boshqa funksiyaga o'tkazish.
* **Closure**: Funksiya tashqi doiradagi o‘zgaruvchilarni "eslay olishi".
* **Recursion**: O‘zini o‘zi chaqiradigan funksiya.
* **Hoisting**: Funksiya deklaratsiyasi oldindan chaqirilishi mumkin.
* **Arrow Functions**: O‘q funksiyalari qisqa va `this` kontekstini boshqarish oson.

- - -

Keling, **pipe**, **currying**, va **factory functions** tushunchalarini batafsil ko'rib chiqamiz:

### 1. **Pipe (Pipe function)**

`Pipe` deganda funksiyalarni zanjir shaklida bir-biriga ulash tushuniladi. Har bir funksiya o‘zidan oldingi funksiyaning natijasini qabul qiladi va keyingisiga uzatadi. Bu **funktsional dasturlash**da keng qo‘llaniladi va kodni o‘qishni osonlashtiradi.

![khodieff.uz - JS darslari](https://www.rozmichelle.com/wp-content/uploads/pipefinal-1.png "khodieff.uz - JS darslari")

Misol:

```jsx
const double = x => x * 2;
const increment = x => x + 1;
const square = x => x * x;

const pipe = (...functions) => input =>
  functions.reduce((acc, func) => func(acc), input);

let result = pipe(double, increment, square)(5);

console.log(result); // 144
```

Bu yerda:

* `pipe` funksiyasi funksiyalarni zanjirga ulaydi.
* 5 soni birinchi `double` funksiyasiga beriladi (`5 * 2 = 10`), keyin `increment` funksiyasiga (`10 + 1 = 11`), va oxirida `square` funksiyasiga uzatiladi (`11 * 11 = 121`).

### 2. **Currying**

`Currying` — funksiyalarning har biri bittadan argument qabul qilib, boshqa funksiya qaytaradigan texnikadir. Bu, ko‘pincha, bir nechta argumentli funksiyalarni ketma-ket bitta argument qabul qiladigan bir qator funksiyalarga aylantirishni anglatadi.

![khodieff.uz](https://miro.medium.com/v2/resize:fit:576/1*oBQP-JjWNF-WQ6uOiPFjLw.png "khodieff.uz")

Misol:

```jsx
function add(a) {
  return function(b) {
    return function(c) {
      return a + b + c;
    };
  };
}

let result = add(2)(3)(5); // 2 + 3 + 5 = 10
console.log(result);
```

Bu yerda `add(2)` funksiyasi yangi funksiya qaytaradi, u ham bitta argument qabul qiladi, va bu jarayon davom etadi. `Currying` o‘zgaruvchilarni qismlarga bo‘lib ishlatishga imkon beradi, ya’ni bitta funksiyani bir necha bosqichda chaqirish mumkin.

Amaliy misol:

```jsx
function multiply(a) {
  return function(b) {
    return a * b;
  };
}

let multiplyBy2 = multiply(2); // Birinchi qadam: 2 ga ko'paytirish funksiyasi yaratildi
console.log(multiplyBy2(5)); // Ikkinchi qadam: 2 * 5 = 10
```

### 3. **Factory Function** 

**Factory function** — bu yangi ob'ekt yaratadigan funksiya. Odatda, `new` kalit so'zidan foydalanmasdan ob'ekt yaratish uchun ishlatiladi. `Factory functions` kodni qayta ishlatish va moslashtirish imkonini beradi.

![khodieff.uz](https://i.ytimg.com/vi/RMsrizLo9hk/sddefault.jpg "khodieff.uz")

Misol:

```jsx
function createPerson(name, age) {
  return {
    name: name,
    age: age,
    greet() {
      console.log("Hello, my name is " + name);
    }
  };
}

let person1 = createPerson("John", 25);
let person2 = createPerson("Alice", 30);

person1.greet(); // "Hello, my name is John"
person2.greet(); // "Hello, my name is Alice"
```

Bu misolda `createPerson` funksiyasi har safar yangi ob'ekt (shaxs) yaratadi. Boshqa yondashuvlardan farqli ravishda, `Factory functions` ishlatishda `new` kalit so'zi kerak emas.

### Xulosa:

* **Pipe**: Funksiyalarni ketma-ket ulash va natijani biridan ikkinchisiga uzatish texnikasi.
* **Currying**: Ko‘p argumentli funksiyani ketma-ket bitta argument qabul qiladigan funksiyalarga bo‘lish.
* **Factory Functions**: Yangi ob'ektlar yaratish uchun ishlatiladigan funksiyalar. Bu `class` yoki `constructor` funksiyalarga alternativ usul bo‘lib, moslashuvchan va oson ishlatiladi. Keyingi postlarda this , constructor va class haqida ham gaplashamiz.

Bu tushunchalar funktsional dasturlashda va JavaScriptda dinamik o‘zgartirishlar kiritishda juda foydali.