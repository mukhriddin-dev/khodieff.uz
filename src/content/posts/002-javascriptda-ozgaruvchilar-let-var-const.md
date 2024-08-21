---
title: 003. JavaScriptda o'zgaruvchilar ( let , var , const )
audioUrl: https://us-tuna-sounds-files.voicemod.net/19df8e9b-140c-4f43-8c0e-09c162821765-1658350707858.mp3
pubDate: 21 Aug 2024
duration: 07:00:00
size: 0
cover: https://www.khodieff.uz/2024-08-20-18.03.22.jpg
explicit: true
episode: 3
season: 2
postType: full
---
![khodieff.uz](https://miro.medium.com/v2/resize:fit:4068/1*Z5XQQ1t16D01uDjd-M7X6w.jpeg "let , var . cont")

**JavaScriptda** o'zgaruvchilar , o'zgaruvchi o'zi nima ? O'zgaruvchi bu ma'lumortlarni o'zida saqlaydigan "konteyner" deb aytsak bo'ladi. Demak JavaScriptda  `let`, `const`, va `var` kalit so'zlari o'zgaruvchilarni e'lon qilish uchun ishlatiladi, ammo ularning ishlash usuli va qoidalari bir-biridan farq qiladi. Quyida har birining batafsil ko'rib chiqamiz:

### 1. `var`

**`var`** JavaScriptning eski sintaksisi bo'lib, dastlabki versiyalarda o'zgaruvchilarni e'lon qilish uchun ishlatilgan. `var`ning asosiy xususiyatlari:

* **Global yoki funktsiya darajasidagi o'zgaruvchilar**: Agar `var` o'zgaruvchisi global kontekstda e'lon qilingan bo'lsa, u global bo'ladi; agar funktsiya ichida e'lon qilingan bo'lsa, u faqat shu funktsiya doirasida mavjud bo'ladi.

  ```javascript
  var globalVar = 'I am global';

  function exampleFunction() {
      var localVar = 'I am local';
  }

  console.log(globalVar); // "I am global"
  console.log(localVar);  // ReferenceError: localVar is not defined
  ```
* **Hoisting**: `var` bilan e'lon qilingan o'zgaruvchilar hoisting (ko'tarilish) xususiyatiga ega. Bu degani, o'zgaruvchi e'lon qilinishidan oldin uni ishlatish mumkin, ammo qiymat hali tayinlanmagan bo'ladi.

  ```javascript
  console.log(hoistedVar); // undefined
  var hoistedVar = 'This is hoisted';
  ```
* **Block scope**: `var` block scope (blok doirasi)ni qo'llab-quvvatlamaydi. Bu degani, `var` bilan e'lon qilingan o'zgaruvchi `if`, `for` kabi bloklar ichida ham mavjud bo'ladi.

  ```javascript
  if (true) {
      var blockVar = 'I am inside a block';
  }

  console.log(blockVar); // "I am inside a block"
  ```

### 2. `let`

**`let`** ECMAScript 6 (ES6) bilan tanishtirilgan va blok doirasidagi o'zgaruvchilarni e'lon qilish uchun ishlatiladi. `let`ning asosiy xususiyatlari:

* **Block scope**: `let` o'zgaruvchisi faqat e'lon qilingan blok (masalan, `if`, `for`, yoki boshqa bloklar) ichida mavjud bo'ladi.

  ```javascript
  if (true) {
      let blockLet = 'I am inside a block';
      console.log(blockLet); // "I am inside a block"
  }

  console.log(blockLet); // ReferenceError: blockLet is not defined
  ```
* **Hoisting**: `let` bilan e'lon qilingan o'zgaruvchilar hoisting xususiyatiga ega bo'lsa-da, ular `Temporal Dead Zone` (TDZ) deb nomlanuvchi hududda joylashadi. Bu degani, o'zgaruvchi e'lon qilinmagan bo'lsa, uni ishlatish vaqtida `ReferenceError` xatosi yuzaga keladi.

  ```javascript
  console.log(hoistedLet); // ReferenceError: Cannot access 'hoistedLet' before initialization
  let hoistedLet = 'This is hoisted';
  ```

### 3. `const`

**`const`** ham ECMAScript 6 (ES6) bilan kiritilgan va o'zgarmas (constant) o'zgaruvchilarni e'lon qilish uchun ishlatiladi. `const`ning asosiy xususiyatlari:

* **Block scope**: `const` o'zgaruvchisi `let` kabi blok doirasida mavjud bo'ladi.

  ```javascript
  if (true) {
      const blockConst = 'I am inside a block';
      console.log(blockConst); // "I am inside a block"
  }

  console.log(blockConst); // ReferenceError: blockConst is not defined
  ```
* **Immutable reference**: `const` bilan e'lon qilingan o'zgaruvchi qiymati o'zgarmas bo'ladi, ammo bu o'zgaruvchi ob'ekt bo'lsa, uning ichidagi xususiyatlar o'zgarishi mumkin.

  ```javascript
  const pi = 3.14;
  pi = 3.14159; // TypeError: Assignment to constant variable

  const person = { name: 'Jahongir' };
  person.name = 'Jonibek'; // Bu to'g'ri va hech qanday xato yuzaga kelmaydi
  ```
* **Hoisting**: `const` bilan e'lon qilingan o'zgaruvchilar hoisting xususiyatiga ega va TDZda joylashadi, bu `let` bilan bir xil.

### Qisqacha Taqqoslash

* **`var`**:

  * Global yoki funktsiya darajasida ko'rinadi.
  * Hoisting xususiyatiga ega.
  * Block scope qo'llab-quvvatlanmaydi.
* **`let`**:

  * Block scope qo'llab-quvvatlanadi.
  * Hoisting xususiyatiga ega, lekin TDZ mavjud.
* **`const`**:

  * Block scope qo'llab-quvvatlanadi.
  * O'zgaruvchi qiymati o'zgarmaydi, ammo ob'ektlarning ichki xususiyatlari o'zgarishi mumkin.
  * Hoisting xususiyatiga ega, lekin TDZ mavjud.

Yangi JavaScript kodlarini yozishda `let` va `const`ni ishlatish tavsiya etiladi, chunki ular `var`ga nisbatan aniqroq va qulayroq sintaksisni taqdim etadi.  Keyingi postlarda yangi mavularda gaplashamiz.