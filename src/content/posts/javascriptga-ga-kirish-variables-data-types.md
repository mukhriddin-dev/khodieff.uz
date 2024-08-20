---
title: JavaScriptga ga kirish! (Variables, Data Types)
audioUrl: https://us-tuna-sounds-files.voicemod.net/19df8e9b-140c-4f43-8c0e-09c162821765-1658350707858.mp3
pubDate: 20 Aug 2024
duration: 04:45:00
size: 0
cover: /2024-08-20-18.03.22.jpg
explicit: true
episode: 1
season: 2
postType: full
---
## Assalamu alaykum **JavaScript** darslarimizga xush kelibsiz! Bugundan sizlar bilan **JavaScriptni** mukammal o'rganishni boshlaymiz!

![khodieff.uz](https://media.dev.to/cdn-cgi/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fl7n1gwdtprnmcadljf1y.jpg "khodieff.uz")

### **Mavzular: (JS ga kirish, Variables, Data Types)**

#### **JS nima?**

JavaScript (JS) – bu veb-sahifalarni interaktiv qilish uchun ishlatiladigan dasturlash tili. HTML va CSS bilan birgalikda JavaScript veb-dasturlarning uch asosiy texnologiyalaridan biri hisoblanadi.

#### **JS qanday ishlaydi?**

JavaScript veb-brauzerlarda ishlaydi. Brauzer JavaScript dvigateli orqali JS kodini bajaradi. JavaScript-ni HTML-ga bog’lash uchun 

`<script>` tegidan foydalaniladi.

```html
<!DOCTYPE html>
<html>
<head>
  <title>My First JS</title>
</head>
<body>
  <h1>Hello, World!</h1>
  <script>
    console.log('Hello, World!');
  </script>
</body>
</html>
```

#### **alert(), prompt(), confirm(), document.write(), textContent(), innerHTML, Template Literal**

* **alert()**: Oddiy xabar oynasini ko'rsatadi.
* **prompt()**: Foydalanuvchidan ma'lumot kiritishni so'raydi.
* **confirm()**: Foydalanuvchidan tasdiqlashni so'raydi.
* **document.write()**: HTML hujjatiga matn yozadi.
* **textContent()**: Elementning matn mazmunini olish yoki o'zgartirish uchun ishlatiladi.
* **innerHTML**: Elementning ichki HTML tarkibini olish yoki o'zgartirish uchun ishlatiladi.
* **Template Literal**: Qo’shimcha ma'lumotlarni birlashtirish uchun  backtick ( \` \` ) belgilaridan foydalaniladi.

```javascript
let name = "John";
console.log(`Hello, ${name}!`);
```

#### **Variables - var, let, const**

* **var**: O'zgaruvchi e'lon qilishning eski usuli. Uning bloki cheklovi yo'q.
* **let**: Zamonaviy usul. Blok chekloviga ega.
* **const**: O'zgarmas o'zgaruvchi yaratadi. O'zgaruvchi qayta belgilanishi mumkin emas.

#### **"use strict"**

Kod qat'iy rejimda bajarilishi uchun ishlatiladi. Bu ko'plab xatolarga yo'l qo'ymaslikda yordam beradi.

```javascript
"use strict";
x = 3.14; // Xatolik, o'zgaruvchi e'lon qilinmagan
```

#### **Data Types**

##### **Primitive Types:**

* **number**: Raqamlar.
* **bigInt**: Juda katta raqamlar.
* **string**: Matn holatidagi ma'lumotlar.
* **boolean**: True yoki false qiymatlar.
* **null**: Bo'sh yoki mavjud bo'lmagan qiymat.
* **undefined**: Qiymat belgilanmagan.
* **symbols**: Unikal identifikatorlar.

##### **NonPrimitive Types:**

* **objects**: key-value juftliklari ko'rinishidagi ma'lumotlar.
* **arrays**: Bir necha ma'lumotni bir joyga to'plab saqlaydigan struktura.
* **functions**: Ma'lum bir vazifani bajaradigan kodlar to'plami.

#### **null vs undefined**

* **null**: Qo'l bilan qiymat sifatida "bo'sh" deb belgilangan.
* **undefined**: O'zgaruvchiga qiymat berilmagan.

#### **Matematik Operatorlar**

* **+**: Qo'shish
* **\-**: Ayirish
* **\***: Ko'paytirish
* **/**: Bo'lish
* **%**: Qoldiq
* **\*\***: Darajaga ko'tarish

Bizni tarmoqlarda kuzatishingiz mumkin va maqola foydali bo'lsa izoh va Vuechi do'stlaringizga ulashing. 🫡

🔗 https://t.me/mukhriddinweb

🔗 https://medium.com/@mukhriddinweb

🔗 https://dev.to/mukhriddinweb

🔗 https://khodieff.uz

🔗 https://github.com/mukhriddin-dev

🔗 https://linkedin.com/in/mukhriddin-khodiev

🔗 https://youtube.com/@mukhriddinweb