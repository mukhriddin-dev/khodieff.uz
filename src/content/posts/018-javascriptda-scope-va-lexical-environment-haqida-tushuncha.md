---
title: 018. JavaScriptda scopelar va "lexical environment" haqida tushuncha
audioUrl: https://us-tuna-sounds-files.voicemod.net/19df8e9b-140c-4f43-8c0e-09c162821765-1658350707858.mp3
pubDate: 23 Sep 2024 02:09:31
duration: 0:00:00
size: 0
cover: https://www.khodieff.uz/2024-08-20-18.03.22.jpg
explicit: true
postType: full
---
**JavaScriptda scope** (ko'rinish doirasi) koddagi o'zgaruvchilarning qamrab olinish hududi yoki mavjud bo'lish sohasini belgilaydi. Scope orqali qaysi o'zgaruvchi qayerdan foydalanilishi mumkinligini tushunish mumkin. JavaScriptda uchta asosiy scope turi mavjud:

![khodieff.uz](https://images.ctfassets.net/pzhspng2mvip/1d5LNFu1ftEWvcMipQd1GN/0e857b697ae5145af31467e30749586a/2-scope-chain.png "khodieff.uz")

### 1. **Global Scope (Global doirasi)**

   Global scope dagi o'zgaruvchilar barcha joylarda foydalanish mumkin bo'lgan o'zgaruvchilardir. Ular `var`, `let`, yoki `const` orqali global darajada e'lon qilinadi. Global scope dagi o'zgaruvchilar butun script davomida mavjud bo'lib, funksiya yoki bloklar ichida ham ko'rinadi.

```javascript
let globalVariable = "Global"; // Global scope o'zgaruvchisi

function showGlobal() {
    console.log(globalVariable); // Bu yerda ham ko'rinadi
}

showGlobal(); // "Global" ni chiqaradi
```

### 2. **Function Scope (Funksiya doirasi)**

   Funksiya ichida e'lon qilingan o'zgaruvchilar faqat o'sha funksiyaning ichida ko'rinadi. Bu o'zgaruvchilar faqat funksiyaning ishlashi davomida mavjud bo'ladi.

```javascript
function myFunction() {
    let functionVariable = "Function scope"; // Funksiya scope o'zgaruvchisi
    console.log(functionVariable); // Funksiya ichida ko'rinadi
}

myFunction(); // "Function scope" ni chiqaradi
console.log(functionVariable); // Xato, tashqarida ko'rinmaydi
```

### 3. **Block Scope (Blok doirasi)**

   `let` va `const` orqali e'lon qilingan o'zgaruvchilar blok scope ga ega bo'ladi. Ya'ni, ular faqat `{}` qavslar ichida mavjud bo'ladi. `var` esa blok scope ni emas, balki funksiya scope ni ishlatadi.

```javascript
if (true) {
    let blockVariable = "Block scope"; // Blok scope o'zgaruvchisi
    console.log(blockVariable); // Blok ichida ko'rinadi
}

console.log(blockVariable); // Xato, blok tashqarisida ko'rinmaydi
```

   `var` bilan e'lon qilingan o'zgaruvchilar esa blokdan tashqarida ham mavjud bo'ladi:

```javascript
if (true) {
    var blockVar = "No block scope"; // var blok scope ga ega emas
}

console.log(blockVar); // "No block scope" ni chiqaradi
```

### Lexical Scoping (Leksikal scope)

   JavaScriptda scope leksik ya'ni kod yozilgan joyga qarab belgilanadi. Ichki funksiyalar tashqi funksiyadagi o'zgaruvchilarga kirish imkoniyatiga ega, lekin teskari holda emas.

```javascript
function outerFunction() {
    let outerVariable = "Outer";

    function innerFunction() {
        console.log(outerVariable); // Ichki funksiya tashqi o'zgaruvchiga kira oladi
    }

    innerFunction();
}

outerFunction(); // "Outer" ni chiqaradi
```

Bu scopelar JavaScript dasturlashida qanday qilib o'zgaruvchilarni izolyatsiya qilish va ulardan to'g'ri foydalanish imkoniyatini beradi.

JavaScriptda **lexical environment**  — bu qachon va qayerda funksiya yoki blok e'lon qilinganiga asoslangan mantiqiy doira (scope) tizimidir. Bu atama JavaScriptda qanday qilib o'zgaruvchilar va funksiyalarga kirish imkoniyati tashkil etilganini tushuntirish uchun ishlatiladi.

![khodieff.uz](https://pbs.twimg.com/media/EYcOWUSX0AAnW7D?format=png&name=4096x4096 "khodieff.uz | Js")

Har bir funksiyaning yoki blokning o'z lexical environment'i bo'ladi, va bu environment o'z ichiga quyidagilarni oladi:

1. **Environment Record** – o'zgaruvchilar, konstantalar va funksiyalar e'lon qilingan va saqlanadigan joy.
2. **Outer Environment Reference** – qachonki o'zgaruvchi yoki funksiya hozirgi environment ichida topilmasa, u holda tashqi leksik muhiti bilan bog'lanish. Bu tashqi scope bilan aloqani saqlashni anglatadi.

### Lexical Environment qanday ishlaydi?



Lexical environment deganda, JavaScript kod yozilgan paytdagi o'zgaruvchilar va funksiyalar ko'rinadigan doira tushuniladi. JavaScriptda funksiyalar va o'zgaruvchilar qayerda e'lon qilingan bo'lsa, ular o'sha joydagi scope va muhitni ko'radi.

#### Misol bilan tushuntirish:

```javascript
function outerFunction() {
    let outerVariable = "I am outside!";

    function innerFunction() {
        console.log(outerVariable); // Lexical environment orqali kirish
    }

    innerFunction();
}

outerFunction(); // "I am outside!" ni chiqaradi
```

Bu yerda:

* `outerFunction()` o'zining lexical environmentiga ega.
* `innerFunction()` o'zining lexical environmentiga ega, lekin u `outerFunction()` ning o'zgaruvchilariga ham kira oladi, chunki `innerFunction()` e'lon qilingan joyi `outerFunction()` ichida, ya'ni uning tashqi lexical environmentiga kiradi.

### Lexical Environment tuzilishi:

1. **Global Lexical Environment** – Kod global scope da yozilgan bo'lsa, u global lexical environment ichida bo'ladi. Bu environment butun JavaScript fayli bo'ylab amal qiladi.
2. **Function Lexical Environment** – Har bir funksiya chaqirilganda yangi lexical environment yaratiladi. Bu environment faqat o'sha funksiyaning ichki scope da ishlaydi.

### Closure va Lexical Environment



Closure — bu funksiya o'z e'lon qilingan joyidagi lexical environmentni "eslab" qolishi va undan foydalanish imkoniga ega bo'lishidir. Lexical environment va closures bir-biriga bog'liq, chunki ichki funksiya tashqi funksiyaning o'zgaruvchilarini eslab qoladi.

```javascript
function outerFunction() {
    let count = 0;
    
    return function() {
        count++;
        console.log(count);
    };
}

const increment = outerFunction();
increment(); // 1
increment(); // 2
```

Bu misolda, `increment` funksiyasi `outerFunction` ning lexical environmentini eslaydi va `count` o'zgaruvchisini saqlab qoladi, hatto `outerFunction` chaqirilib bo'lgandan keyin ham. 

**Lexical environment** — JavaScript kodining qaysi joyida va qachon yozilganiga qarab, o'zgaruvchilar va funksiyalar bilan qanday muloqot qilishini belgilaydigan ichki tizimdir. O'zgaruvchilar e'lon qilingan joylariga qarab, ularga kirish mumkin yoki yo'q bo'ladi.