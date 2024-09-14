---
title: 015. JavaScriptda (TDZ , hoisting va blocklar)
audioUrl: https://us-tuna-sounds-files.voicemod.net/19df8e9b-140c-4f43-8c0e-09c162821765-1658350707858.mp3
pubDate: 14 Sep 2024 14:09:86
duration: 0:00:00
size: 0
cover: https://www.khodieff.uz/2024-08-20-18.03.22.jpg
explicit: true
episode: 15
season: 0
postType: full
---
JavaScriptda **TDZ (Temporal Dead Zone)** va **hoisting** xususiyatlari o‘zgaruvchilarni qanday boshqarilishi va ularga qachon kirishish mumkinligini belgilaydi. Bu tushunchalar asosan **`var`**, **`let`** va **`const`** bilan bog‘liq. Keling, har birini batafsil tushuntirib o‘tamiz va bloklar bilan qanday ishlashini ko‘rib chiqamiz.

![TDZ khodieff.uz](https://miro.medium.com/v2/resize:fit:1400/1*Nvxnq-bqM1iyTqwO_clFYQ.jpeg "TDZ khodieff.uz")

### 1. **Hoisting**

**Hoisting** bu JavaScriptning o‘zgaruvchilar va funksiyalarni aniqlanishidan oldin ko‘tarish xususiyatidir. Bu xususiyat tufayli o‘zgaruvchilar yoki funksiyalarni ularni aniqlashdan oldin ham chaqirishga imkon beradi.

![khodieff.uz](https://i.ytimg.com/vi/EvfRXyKa_GI/maxresdefault.jpg "khodieff.uz HOISTING")

#### **`var` bilan hoisting**

`var` yordamida aniqlangan o‘zgaruvchilar hoisting qilinadi. Bu o‘zgaruvchilarni deklaratsiyasi avtomatik ravishda kodning yuqorisiga ko‘tariladi, lekin ularning qiymati `undefined` bo‘ladi, chunki ular faqat dastur bajarilayotganda qiymat oladi.

* **Misol:**

```javascript
console.log(x); // undefined
var x = 5;
console.log(x); // 5
```

Bu misolda `x` o‘zgaruvchisi hoisting qilinadi, lekin `x` ga qiymat berilmagani uchun dastlab `undefined` bo‘ladi.

* **Blokda `var`:**
  `var` ning yana bir xususiyati shundaki, u **blok scoping**ga rioya qilmaydi, ya'ni funksiyaning ichida aniqlangan bo‘lsa ham global ko‘lamda mavjud bo‘ladi.

```javascript
if (true) {
  var y = 10;
}
console.log(y); // 10
```

Bu yerda `y` global bo‘lib qoldi, chunki `var` blok scopingni hisobga olmaydi.

#### **`let` va `const` bilan hoisting**

`let` va `const` ham hoisting qilinadi, lekin ularga **Temporal Dead Zone** (TDZ) qo‘llaniladi. Ya'ni, o‘zgaruvchiga deklaratsiya qilinmaguncha unga kirishish mumkin emas va ularni aniqlashdan oldin ishlatishga urinishda xato yuzaga keladi.

* **Misol:**

```javascript
console.log(a); // ReferenceError: Cannot access 'a' before initialization
let a = 5;
```

Bu misolda `a` o‘zgaruvchisi hoisting qilinadi, lekin deklaratsiyaga qadar u TDZda bo‘ladi, shuning uchun unga kirishish mumkin emas.

* **Blokda `let` va `const`:**
  `let` va `const` bilan aniqlangan o‘zgaruvchilar blok ko‘lamiga ega. Bu degani, ular faqat o‘sha blok ichida mavjud bo‘ladi.

```javascript
if (true) {
  let b = 20;
  const c = 30;
  console.log(b); // 20
  console.log(c); // 30
}
console.log(b); // ReferenceError: b is not defined
console.log(c); // ReferenceError: c is not defined
```

Bu yerda `b` va `c` faqat `if` blok ichida mavjud, tashqarida ularga kirishishga urinishda xato bo‘ladi.

### 2. **Temporal Dead Zone (TDZ)**

TDZ bu o‘zgaruvchi deklaratsiya qilinmaguncha unga kirishish mumkin bo‘lmagan vaqtinchalik hududdir. Bu holat faqat **`let`** va **`const`** o‘zgaruvchilariga taalluqli bo‘lib, ular hoisting qilinsa ham, deklaratsiyaga qadar o‘z qiymatlarini olmaguncha ishlatib bo‘lmaydi.

* **Misol:**

```javascript
{
  console.log(x); // ReferenceError: Cannot access 'x' before initialization
  let x = 10;
}
```

Bu yerda `x` o‘zgaruvchisi blok ichida aniqlangan, lekin hoisting tufayli deklaratsiyaga qadar TDZ da bo‘ladi, va unga deklaratsiya qilinishidan oldin kirishishga urinishda **ReferenceError** yuzaga keladi.

TDZ blok ichida bo‘lgan har qanday `let` yoki `const` o‘zgaruvchi uchun amal qiladi va u deklaratsiya qilinmaguncha davom etadi.

### 3. **Bloklar va O‘zgaruvchilar**

Bloklar JavaScriptda `{}` figurali qavslar bilan ifodalanadi va o‘zgaruvchilar blok ichida aniqlansa, ularning ko‘lami faqat o‘sha blok bilan cheklangan bo‘lishi mumkin.

#### **Global va lokal o‘zgaruvchilar**:

* **`var`** global yoki funksiyaviy ko‘lamda ishlaydi.
* **`let` va `const`** blok ko‘lamiga ega.
* **Misol:**

```javascript
if (true) {
  var globalVar = "I'm global";
  let blockLet = "I'm block-scoped";
  const blockConst = "I'm also block-scoped";
}

console.log(globalVar); // "I'm global"
console.log(blockLet);  // ReferenceError: blockLet is not defined
console.log(blockConst); // ReferenceError: blockConst is not defined
```

Bu misolda `var` global bo‘lib qoladi, lekin `let` va `const` faqat blok ichida ko‘rinadi.

### Xulosa:

* **Hoisting** — bu o‘zgaruvchilar va funksiyalarni aniqlashdan oldin ko'tarish jarayoni.

  * `var` bilan hoisting qilinadi, lekin dastlab qiymati `undefined`.
  * `let` va `const` ham hoisting qilinadi, lekin ular **Temporal Dead Zone (TDZ)**da bo'ladi va deklaratsiyaga qadar ularga kirishib bo‘lmaydi.
* **TDZ (Temporal Dead Zone)** — o‘zgaruvchi deklaratsiya qilinmaguncha unga kirishish mumkin bo‘lmagan hudud. Bu faqat `let` va `const` o‘zgaruvchilari uchun amal qiladi.
* **Blok scoplar** — `let` va `const` blok ichida aniqlanadi va faqat shu blok ichida ishlaydi, `var` esa global yoki funksiyaviy ko‘lamda ishlaydi.

Shuning uchun `let` va `const` ko'pincha hozirgi zamonaviy JavaScript kod yozishda ishlatiladi, chunki ular kodning xatolikka moyilligini kamaytiradi va blok darajasida ko‘lami cheklaydi.