---
title: 007. React.js da Fragment haqida o'rganamiz.
audioUrl: https://us-tuna-sounds-files.voicemod.net/19df8e9b-140c-4f43-8c0e-09c162821765-1658350707858.mp3
pubDate: 02 Sep 2024 02:09:82
duration: 0:01:00
size: 0
cover: https://telegra.ph/file/b6f28ce0c92aa07ff20da.jpg
explicit: true
episode: 7
season: 5
postType: full
---
ReactJS da **Fragment** — bu React komponentlarining bir necha elementini bir joyga to'plash uchun ishlatiladigan bir usuldir. Fragmentlar DOMda qo'shimcha tugunlar yaratmasdan, bir nechta elementni bir joyga joylashtirish imkonini beradi. Bu ko'pincha JSX kodini to'g'ri tashkil qilishda foydalidir.

![khodieff.uz](https://www.copycat.dev/blog/wp-content/uploads/2022/12/React-Fragment.png "khodieff.uz")

### Fragmentning Asosiy Maqsadi:

1. **DOM Tugunlarini Ko'paytirmaslik**: Agar siz bir nechta elementni JSXda qaytarishingiz kerak bo'lsa, lekin ularni qo'shimcha HTML tugunlarisiz o'ramoqchi bo'lsangiz, Fragmentdan foydalanishingiz mumkin. Bu sizning HTML tuzilishingizni soddalashtiradi va DOMning tartibini to'g'ri saqlaydi.
2. **O'qishliligi**: Fragmentlar yordamida siz bir necha elementni qaytarishda HTML tuzilishini tartibda saqlab qolishingiz mumkin. Bu komponentlarni o'qish va boshqarishni osonlashtiradi.

### React Fragmentdan Foydalanish:

#### 1. **Qisqa Sintaksis (Shorthad Syntax)**

React 16.2 dan boshlab, qisqa sintaksis yordamida fragmentlardan foydalanish mumkin. Bu usul `<></>` qisqa yozilishi bilan tanilgan.

```jsx
const MyComponent = () => {
  return (
    <>
      <h1>Salom, Dunyo!</h1>
      <p>Bu birinchi paragraf.</p>
    </>
  );
};
```

#### 2. **React.Fragment**

Agar qisqa sintaksisni ishlatish imkoni bo'lmasa yoki ko'proq moslashuvchanlik kerak bo'lsa, siz `React.Fragment` komponentidan foydalanishingiz mumkin. 

```jsx
import React from 'react';

const MyComponent = () => {
  return (
    <React.Fragment>
      <h1>Salom, Dunyo!</h1>
      <p>Bu birinchi paragraf.</p>
    </React.Fragment>
  );
};
```

### Qo'llanilishi:

* **Listalarni Rendering Qilish**: Reactda ro'yxatni rendering qilishda, har bir ro'yxat elementini o'rash uchun Fragmentdan foydalanishingiz mumkin.
* **HTML Tuzilmasini Soddalashtirish**: Bir necha elementni guruhlash va ularni DOM tugunlarisiz qaytarish orqali kodni toza va o'qilishi osonroq qiladi.

### Qanday qilib ishlashini ko'rsatish:

Fragmentlar sizning HTML tugunlarining ko'payishini oldini oladi va barcha tarkibiy qismlarni bir joyga jamlaydi, lekin DOMda qo'shimcha tugunlar yaratmaydi. Bu sizning sahifangizning yuklanish vaqtini va samaradorligini yaxshilashi mumkin.

Shu bilan birga, React.Fragmentning `key` xususiyatini qo'llash mumkin, agar siz dinamik ro'yxatlar bilan ishlayotgan bo'lsangiz va har bir fragment uchun noyob kalitni (unique key) berishimiz kerak bo'lsa.