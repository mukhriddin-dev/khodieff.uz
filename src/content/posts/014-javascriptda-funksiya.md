---
title: 014. JavaScriptda funksiya
audioUrl: https://us-tuna-sounds-files.voicemod.net/19df8e9b-140c-4f43-8c0e-09c162821765-1658350707858.mp3
pubDate: 14 Sep 2024 14:09:72
duration: 00:00:00
size: 0
cover: https://www.khodieff.uz/2024-08-20-18.03.22.jpg
explicit: true
episode: 13
season: 4
postType: full
---
Dasturlashda funksiya — bu ma'lum bir vazifani bajarish uchun yozilgan kod blokidir. Funksiya dastur kodini takrorlashni kamaytiradi va kodni qayta ishlatishga imkon beradi. Funksiya bir marta yoziladi va keyinchalik chaqirilganda, ichidagi kod bajariladi.

![khodieff.uz](https://miro.medium.com/v2/resize:fit:1400/1*hfpSnP09__6d_YWOnkbQJw.png "khodieff.uz")

Funktsiyaga kirish qiymatlari (argumentlar) berilishi mumkin va u natijani qaytarishi ham mumkin. Masalan, quyida JavaScript dasturida oddiy funksiya qanday ishlashini ko'rishingiz mumkin:

```javascript
function sum(a, b) {
  return a + b;
}

let natija = sum(5, 3); // natija = 8
console.log(natija);
```

Bu misolda:

* `sum` nomli funksiya yaratilgan, u ikkita sonni qabul qiladi (`a` va `b`).
* Funksiya argumentlar qiymatini yig‘ib, natijani qaytaradi.
* `summ(5, 3)` chaqirig‘i `8` natijasini beradi.

Funktsiyalar kodni modularlash va aniq vazifalarga ajratishga yordam beradi, bu esa kodni boshqarishni osonlashtiradi.

### Funksiyaga hayotiy misol sifatida quyidagi vaziyatni ko'rib chiqamiz:

**Misol: Taom tayyorlash**

Tushunish uchun, oshxonada biror taomni pishirish jarayonini tasavvur qilaylik. Funksiya — bu taom tayyorlash uchun zarur bo'lgan aniq jarayonni ifodalaydi.

**Funksiya: "oshpazlik"**

* **Funksiya nomi**: Oshpazlik (taomni tayyorlash)
* **Argumentlar (kirish qiymatlari)**: Masalliqlar (masalan, go‘sht, kartoshka, sabzavotlar va ziravorlar)
* **Natija**: Tayyor taom

Kodni shunday yozsak bo'ladi:

```javascript
function taomTayyorlash(go_sht, kartoshka, sabzavot) {
  console.log("Tayyorlanmoqda: " + go_sht + " va " + kartoshka + " bilan " + sabzavot);
  return "Tayyor taom";
}

// Funksiyani chaqirish
let natija = taomTayyorlash("Mol go‘shti", "Kartoshka", "Sabzavotlar");
console.log(natija);
```

Bu hayotiy misolning tushuntirishi:

1. **Funksiya nomi** — `taomTayyorlash`, ya'ni ma'lum bir taomni tayyorlash jarayonini ifodalaydi.
2. **Argumentlar** — `go_sht`, `kartoshka`, va `sabzavot` — bu kirish ma'lumotlari, ya'ni taom uchun kerakli masalliqlar.
3. **Funksiya ichidagi jarayon** — masalliqlar olinib, taom tayyorlanadi (bu holda faqat ekranga chiqarish bilan cheklanyapti).
4. **Natija** — funksiya "Tayyor taom" degan qiymatni qaytaradi.

Bu bilan taomni har safar pishirishda bir xil jarayonni takrorlamaslik uchun, bir marta yozilgan funksiya (ta'rif) orqali bir xil vazifani qayta-qayta bajarishimiz mumkin.

### Funksiyalarga nom berishda aniq va tushunarli bo‘lish muhim.

Funksiya nima ish qilishini nomi orqali osongina tushunish kerak. Dasturlashda funksiyalarga nom berishda ma’lum qoidalar va **case** (katta va kichik harflardan foydalanish uslubi) turlari qo‘llaniladi.

### Funksiya nomi berish uchun asosiy qoidalar:

1. **Aniqlik**: Funksiya nomi u bajaradigan vazifani tushuntirishi lozim. Masalan, `summa`, `chekStatus`, `updateProduct` kabi.
2. **Harakatni ifodalovchi fe'llar**: Funksiya odatda biror amalni bajaradi, shuning uchun funksiyani ifodalovchi nomlar harakatlarni bildiradigan fe’l bo‘lishi kerak, masalan, `getData`, `calculateSum`, `sendEmail`.
3. **O'qish uchun qulaylik**: Funksiya nomi oson o‘qilishi va tushunilishi kerak. Uzun va murakkab nomlardan qochish lozim.
4. **Biror tilga oid qoidalarga amal qilish**: Dasturlash tili nomlashga doir o‘ziga xos cheklov va qoidalarga ega. Masalan, JavaScriptda nomlar raqam bilan boshlanmasligi, bo‘sh joy va maxsus belgilar ishlatilmasligi kerak (faqat `_` va `$` belgilari ishlatish mumkin).

### Case turlari

Funksiya nomlarini yozishda quyidagi case uslublari ishlatiladi:

#### 1. **camelCase** (JavaScript, TypeScript, Python):

* Bu case uslubida birinchi so‘z kichik harfda, keyingi so‘zlar esa katta harf bilan boshlanadi. Eng ko‘p ishlatiladigan uslub.
* Funksiyalarga nom berishda **camelCase** tavsiya qilinadi.
* Masalan: `calculateTotal`, `getUserInfo`, `updateProfile`.

#### 2. **PascalCase** (C#, .NET kabi tillarda keng tarqalgan):

* Bu uslubda har bir so‘z katta harf bilan boshlanadi, shuningdek, sinf nomlarini yozishda ko‘p ishlatiladi.
* Masalan: `CalculateSum`, `SendData`.

#### 3. **snake_case** (Python va ba'zi boshqa tillarda):

* So‘zlar orasida pastki chiziq (`_`) ishlatiladi, va barcha harflar kichik bo‘ladi.
* Masalan: `calculate_total`, `get_user_info`.

#### 4. **kebab-case** (HTML yoki URLda keng tarqalgan):

* So‘zlar orasiga chiziqcha (`-`) qo‘yiladi, bu case funksiyalar uchun emas, odatda CSS uslublarini nomlashda yoki fayl nomlarida ishlatiladi.
* Masalan: `calculate-total`, `send-email`.

### Funksiya nomlash uslubiga misol:

JavaScript va TypeScriptda odatda **camelCase** uslubidan foydalaniladi. Masalan:

```javascript
function getUserData() {
  // foydalanuvchi ma'lumotlarini olish
}

function calculateDiscount(price, discount) {
  return price - (price * discount / 100);
}

function sendNotification(message) {
  console.log("Bildirishnoma yuborildi: " + message);
}
```

Bu funksiyalarning nomlari ular nima ish qilishini aniq tushuntirib turibdi va **camelCase** uslubida yozilgan.

Keyingi postlarda JavaScriptdagi funksiyalar haqida batfsil tanishamiz.