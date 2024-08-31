---
title: "009. JavaScriptda Type Conversion va Type Coercion "
audioUrl: https://us-tuna-sounds-files.voicemod.net/19df8e9b-140c-4f43-8c0e-09c162821765-1658350707858.mp3
pubDate: 31 Aug 2024 11:08:92
duration: 0:00:00
size: 0
cover: /2024-08-20-18.03.22.jpg
explicit: true
episode: 9
season: 2
postType: full
---
**Type Conversion** va **Type Coercion** - JavaScriptda ma'lumot turlarini o'zgartirish jarayonlari bo'lib, ular dasturiy ta'minotdagi ifodalarning turini kerakli ma'lumot turiga moslash uchun ishlatiladi.

![khodieff.uz - JS darslari](https://pbs.twimg.com/media/EiuhiPVU8AAwjhF?format=jpg&name=4096x4096 "khodieff.uz - JS darslari")



### 1. **Type Conversion (Turli ma'lumot turiga o'zgartirish)**

**Type Conversion** - bu ma'lumotning bir turidan boshqasiga dasturchi tomonidan aniq tarzda o'zgartirilishi. Boshqacha qilib aytganda, bu eksplitsit konversiyadir, ya'ni biz o'zimiz tur o'zgartirishni maqsad qilamiz.

#### Misollar:

**Number** ga o'zgartirish:

```javascript
let str = "123";
let num = Number(str);
console.log(num);        // 123
console.log(typeof num); // "number"
```

**String** ga o'zgartirish:

```javascript
let num = 456;
let str = String(num);
console.log(str);        // "456"
console.log(typeof str); // "string"
```

**Boolean** ga o'zgartirish:

```javascript
let num = 0;
let bool = Boolean(num);
console.log(bool);       // false
console.log(typeof bool); // "boolean"
```

### 2. **Type Coercion (Avtomatik turli ma'lumot turiga o'zgartirish)**

**Type Coercion** - bu JavaScript tomonidan avtomatik ravishda amalga oshiriladigan turli ma'lumot turiga o'zgartirish jarayonidir. Bu operatsiya paytida JavaScript ifodaning turini avtomatik ravishda o'zgartiradi, bu esa implitsit konversiya deb ham ataladi.

#### Misollar:

**String** ga o'zgartirish (concatenation):

```javascript
let num = 123;
let str = "The number is " + num;
console.log(str);        // "The number is 123"
console.log(typeof str); // "string"
```

**Number** ga o'zgartirish (matematik amallar):

```javascript
let str = "5";
let result = str * 2; // "5" ni avtomatik son (5) ga o'zgartiradi
console.log(result);  // 10
console.log(typeof result); // "number"
```

**Boolean** ga o'zgartirish (ifodalarda):

```javascript
let str = "";
if (str) {
    console.log("True!");
} else {
    console.log("False!");
}
// Empty string (""), 0, null, undefined, va NaN avtomatik ravishda false bo'ladi.
```

### **Type Conversion va Type Coercion o'rtasidagi farq:**

* **Type Conversion**: Ma'lumot turi dasturchi tomonidan aniq ko'rsatma bilan o'zgartiriladi. Bu ko'proq nazoratni ta'minlaydi va aniq maqsad bilan amalga oshiriladi.
* **Type Coercion**: JavaScript tomonidan avtomatik ravishda turli ma'lumot turlariga o'zgartiriladi. Bu o'z-o'zidan yuz beradi va ba'zida kutilmagan natijalarni berishi mumkin.

### **Kutilmagan natijalar:**

Type Coercion ba'zida qiziqarli yoki kutilmagan natijalarga olib kelishi mumkin, chunki JavaScript ma'lumotlarni o'zi mos keladigan turga o'zgartirishga harakat qiladi.

Misol:

```javascript
console.log(1 + "2");  // "12" (String concatenation)
console.log("5" - 3);  // 2 (Number subtraction)
console.log(true + 1); // 2 (true => 1, so 1 + 1 = 2)
console.log("5" * "2"); // 10 (String to Number conversion)
```

Shuning uchun, ko'pincha Type Coercion ni oldini olish uchun eksplitsit `Type Conversion` ni qo'llash tavsiya etiladi, bu kutilmagan natijalarning oldini olishga yordam beradi. Keyingi maqolalarda ko'rishguncha.