---
title: 010. JavaScriptda Truthy va Falsy qiymatlar
audioUrl: https://us-tuna-sounds-files.voicemod.net/19df8e9b-140c-4f43-8c0e-09c162821765-1658350707858.mp3
pubDate: 31 Aug 2024 11:08:89
duration: 0:00:00
size: 0
cover: /2024-08-20-18.03.22.jpg
explicit: true
episode: 10
season: 2
postType: full
---
JavaScriptda **Truthy** va **Falsy** qiymatlar - bu shartli ifodalarda `true` yoki `false` sifatida talqin qilinadigan qiymatlar. JavaScriptda har qanday qiymat shartli ifodada `true` yoki `false` sifatida baholanadi.

![khodieff.uz](https://media.licdn.com/dms/image/D5612AQEfF6K4DZ3HDw/article-cover_image-shrink_720_1280/0/1677735519671?e=2147483647&v=beta&t=W5kB_xas95aqEI5RlTDuOD2GP2DX_y04Nf0lsga3HwQ "khodieff.uz")

### **Falsy Qiymatlar**

**Falsy** qiymatlar - bu shartli ifodalarda `false` deb baholanadigan qiymatlar. JavaScriptda quyidagi qiymatlar **falsy** hisoblanadi:

1. `false` - Boolean qiymatining o'zi.
2. `0` - Sonli qiymat (nol).
3. `-0` - Manfiy nol.
4. `0n` - BigInt turi uchun nol qiymat.
5. `""` yoki `''` yoki  (bo'sh string) - Har qanday bo'sh string.
6. `null` - Mavjud bo'lmagan yoki qiymatsiz o'zgaruvchi.
7. `undefined` - Belgilanmagan qiymat.
8. `NaN` - Not-a-Number, raqamli ifoda noto'g'ri yoki matematik xato bo'lsa.

Misol:

```javascript
if (0) {
  console.log("This won't run");
} else {
  console.log("0 is falsy");
}
// "0 is falsy" ni chiqaradi.
```

### **Truthy Qiymatlar**

**Truthy** qiymatlar - bu shartli ifodalarda `true` deb baholanadigan qiymatlar. **Falsy** qiymatlar ro'yxatidan tashqari barcha qiymatlar **truthy** deb hisoblanadi.

1. Har qanday son (`0` dan tashqari) - musbat yoki manfiy sonlar.
2. Har qanday string (bo'sh stringlardan tashqari) - hatto `"false"` yoki `"0"` stringlari ham truthy hisoblanadi.
3. `true` - Boolean qiymati sifatida.
4. Har qanday obyekt yoki array - hatto bo'sh obyektlar va arraylar ham.
5. `Symbol()` - Symbol turidagi qiymatlar.
6. `BigInt`, `Infinity`, va `-Infinity` - ulkan sonlar.

Misol:

```javascript
if ("Hello") {
  console.log("This will run");
} else {
  console.log("This won't run");
}
// "This will run" ni chiqaradi.
```

### **Shartli Ifodalarda Foydalanish**

**Truthy** va **Falsy** qiymatlar shartli ifodalarda, `if` yoki `while` kabi operatorlarda ishlatilganda juda foydali bo'ladi. Quyidagi misollar yordamida ko'rib chiqamiz:

#### 1. **Falsy misollar:**

```javascript
if (!null) {
  console.log("null is falsy");
}
// "null is falsy" ni chiqaradi.

if (!undefined) {
  console.log("undefined is falsy");
}
// "undefined is falsy" ni chiqaradi.

if (!"") {
  console.log("An empty string is falsy");
}
// "An empty string is falsy" ni chiqaradi.
```

#### 2. **Truthy misollar:**

```javascript
if (42) {
  console.log("42 is truthy");
}
// "42 is truthy" ni chiqaradi.

if ("0") {
  console.log('"0" (a non-empty string) is truthy');
}
// '"0" (a non-empty string) is truthy' ni chiqaradi.

if ({}) {
  console.log("An empty object is truthy");
}
// "An empty object is truthy" ni chiqaradi.
```

### **Amaliy Maslahatlar:**

* Har doim `Truthy` va `Falsy` qiymatlarini e'tiborga olish kerak, chunki ular kutilmagan xatti-harakatlarga olib kelishi mumkin.
* `Falsy` qiymatlar ro'yxatidan tashqari barcha qiymatlar `Truthy` ekanligini yodda saqlash kerak.
* **Truthy** va **Falsy** qiymatlar haqida bilish, JavaScript kodini yozishda murakkab bo'lgan mantiqiy xatolarni aniqlashda yordam beradi.

Shu bilan **Truthy** va **Falsy** qiymatlar haqidagi asosiy tushunchalarni bilib oldik keyingi maqolalarda ko'rishguncha.