---
title: 016. JavaScriptda funksiya va uning turlari , qo'llanishi
audioUrl: https://us-tuna-sounds-files.voicemod.net/19df8e9b-140c-4f43-8c0e-09c162821765-1658350707858.mp3
pubDate: 14 Sep 2024 14:09:29
duration: 0:00:00
size: 0
cover: https://www.khodieff.uz/2024-08-20-18.03.22.jpg
explicit: true
episode: 16
season: 3
postType: full
---
### JavaScriptda funksiyalar bir nechta turda bo‘lib, har birining o‘ziga xosligi va ishlatilish joylari mavjud. JavaScriptda funksiyalar ECMAScript (ES) versiyalari yangilanishi bilan rivojlanib borgan va har bir yangi versiya bilan yangi funksiyalar turli xususiyatlar qo'shilgan. Quyida funksiya turlari va ular qaysi versiyada paydo bo'lganligi haqida batafsil ko'rib chiqamiz.



![khodieff.uz](https://www.edureka.co/blog/wp-content/uploads/2019/07/Function-Methods-1-1.png "khodieff.uz js function types")



### 1. **(Function Declaration)**



Bu uslub JavaScriptda eng ko‘p ishlatiladigan va asosiy funksiyalardan biridir. Funksiya deklaratsiyasi orqali funksiya aniqlanadi va keyin chaqiriladi. Funksiya deklaratsiyalari hoisting orqali ko'tariladi, ya'ni funksiyani aniqlashdan oldin ham chaqirish mumkin. Hositing haqida 15- postimizda o'qishingiz mumkin.

* **Misol:**

```javascript
function sum(a, b) {
  return a + b;
}

console.log(sum(5, 3)); // Natija: 8
```

Bu misolda `sum` funksiyasi ikki qiymatni qabul qiladi va ularni qo'shib qaytaradi.

* **Versiyasi**: ECMAScript 1 (ES1) — JavaScriptning dastlabki versiyalaridan boshlab mavjud.

### 2. **Funksiya ifodalari (Function Expression)**

Funksiya ifodasi bu funksiya o‘zgaruvchiga tayinlanadi va keyinchalik chaqiriladi. Funksiya ifodalari hoisting qilinmaydi, shuning uchun faqat aniqlangandan keyin chaqirilishi mumkin.

* **Misol:**

```javascript
let sum = function(a, b) {
  return a + b;
};

console.log(sum(5, 3)); // Natija: 8
```

Bu misolda `sum` funksiya ifodasi sifatida o‘zgaruvchiga tayinlangan va uni faqat aniqlangandan keyin ishlatish mumkin.

* **Versiyasi**: ECMAScript 1 (ES1) — JavaScriptning dastlabki versiyalaridan boshlab mavjud.

### 3. **O‘z-o‘zini chaqiradigan funksiyalar (Immediately Invoked Function Expression - IIFE)**

Bu funksiyalar aniqlangan zahoti avtomatik ravishda chaqiriladi va bajariladi. IIFE-lar ko'pincha global o‘zgaruvchilarni cheklash uchun ishlatiladi.

* **Misol:**

```javascript
(function() {
  console.log("This function is invoked immediately!");
})();
```

Bu funksiyada `console.log` darhol chaqiriladi va natija ekranga chiqariladi.

* **Versiyasi**: ECMAScript 1 (ES1) — JavaScriptning dastlabki versiyalaridan boshlab mavjud.

### 4. **Anonim funksiyalar (Anonymous Functions)**

Anonim funksiyalar bu nomga ega bo‘lmagan funksiyalardir. Ular ko‘pincha boshqa funksiyalarga parametr sifatida uzatiladi, masalan, **callback** funksiyalarda.

* **Misol:**

```javascript
setTimeout(function() {
  console.log("This anonymous function runs after 2 seconds.");
}, 2000);
```

Bu misolda `setTimeout` funksiyasi anonim funksiyani qabul qiladi va 2 soniyadan keyin bajaradi.

* **Versiyasi**: ECMAScript 1 (ES1) — JavaScriptning dastlabki versiyalaridan boshlab mavjud.

### 5.  **Arrow function (Arrow Functions - ES6)**

ES6 dan boshlab JavaScriptda `arrow function` (tugallangan funksiyalar) kiritildi. Bu funksiyalar qisqartirilgan sintaksisga ega va o‘zining `this` qiymatini avvalgi kontekstdan saqlaydi, bu oddiy funksiyalardan farqli xususiyat.

* **Misol:**

```javascript
let sum = (a, b) => a + b;
console.log(sum(5, 3)); // Natija: 8
```

Bu misolda `sum` arrow function orqali yozilgan. Agar funksiya bir qatorli bo'lsa, `return` so'zini yozish shart emas.

* **Versiyasi**: ECMAScript 6 (ES6) — 2015 yilda kiritilgan.

### 6. **Generator funksiyalari (Generator Functions - ES6)**

Generator funksiyalari kodni qisman bajarish va keyin davom ettirish imkoniyatini beradi. Buning uchun `yield` kalit so‘zi ishlatiladi.

* **Misol:**

```javascript
function* numberGenerator() {
  yield 1;
  yield 2;
  yield 3;
}

let generator = numberGenerator();
console.log(generator.next().value); // Natija: 1
console.log(generator.next().value); // Natija: 2
console.log(generator.next().value); // Natija: 3
```

Bu misolda `numberGenerator` generator funksiyasi har bir `yield` da to‘xtab, keyin davom etadi.

* **Versiyasi**: ECMAScript 6 (ES6) — 2015 yilda kiritilgan.

### 7. **Asinxron funksiyalar (Async/Await - ES8)**

ES8 dan boshlab JavaScriptda **async/await** funksiyalari qo‘llanildi. Bu funksiyalar asinxron kodlarni soddalashtiradi va **Promise** lar bilan ishlashni osonlashtiradi.

* **Misol:**

```javascript
async function fetchData() {
  let response = await fetch("https://api.example.com");
  let data = await response.json();
  console.log(data);
}
```

Bu misolda `fetchData` asinxron funksiyasi API dan ma'lumotlarni olish va ularni qayta ishlash uchun ishlatiladi.

* **Versiyasi**: ECMAScript 2017 (ES8) — 2017 yilda kiritilgan.

### Xulosa qilsak:



JavaScriptda funksiyalar turli uslublarda aniqlanishi va ishlatilishi mumkin. ES6 va undan keyingi versiyalarda funksiyalarning yangi turlari, sintaksislari va xususiyatlari kiritildi, bu esa kod yozishni osonlashtirdi va ko'proq imkoniyatlar berdi.