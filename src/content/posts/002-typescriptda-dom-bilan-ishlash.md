---
title: 002. TypeScriptda DOM bilan ishlash
audioUrl: khodieff.uz
pubDate: 02 Sep 2024 23:09:48
duration: 0:00:00
size: 0
cover: https://telegra.ph/file/05887b99972b14cb88fa3.jpg
explicit: true
episode: 3
season: 9
postType: full
---
**TypeScriptda DOM** (Document Object Model) elementlari bilan ishlash JavaScriptga juda o'xshash, ammo TypeScriptning turlarni qo'llab-quvvatlashi tufayli biz xatolarga qarshi yanada ishonchliroq kod yozishimiz mumkin. DOM elementlari bilan ishlashda TypeScript sizga elementlarning turlarini aniq belgilash, ularga xos bo'lgan xususiyatlarni va usullarni ishlatish imkonini beradi.

![khodieff.uz](https://digitalpress.fra1.cdn.digitaloceanspaces.com/zn3wniw/2021/06/typescript.png "khodieff.uz")

Quyida TypeScriptda DOM elementlari bilan qanday ishlash haqida batafsil ko'rib chiqamiz:

### 1. Elementlarni tanlash

DOM elementlarini tanlash uchun TypeScriptda `document.getElementById`, `document.querySelector`, yoki `document.querySelectorAll` kabi usullardan foydalanishingiz mumkin. Biroq, TypeScriptda elementlarni tanlashda aniq turini belgilashingiz kerak.

Misol uchun:

```typescript
// Elementni tanlash va uning aniq turini belgilash
const button = document.getElementById("myButton") as HTMLButtonElement;
```

Yoki:

```typescript
// querySelector orqali tanlash
const inputElement = document.querySelector("input") as HTMLInputElement;
```

Bu yerda `as HTMLButtonElement` va `as HTMLInputElement` yordamida TypeScriptga elementning aniq turini bildirganmiz. Bu sizga elementning xususiyatlari va usullariga to'g'ri kirish imkonini beradi.

### 2. Elementning Xususiyatlariga Kirish

Tanlangan elementning xususiyatlariga TypeScriptda aniq type berish mumkin:

```typescript
// Input elementining qiymatini olish
const inputValue = inputElement.value;
console.log(inputValue);

// Tugma elementining matnini o'zgartirish
button.innerText = "Click Me!";
```

### 3. Hodisalarni Tutish (Event Handling)

DOM elementlari bilan ishlashda hodisalarni tutish muhimdir. TypeScriptda hodisalarni tutishda ham elementlarning turini aniq belgilash kerak:

```typescript
button.addEventListener("click", (event: MouseEvent) => {
  alert("Button clicked!");
});
```

Bu misolda `event` parametri `MouseEvent` turida ekanligi belgilangan, shuning uchun TypeScript `event` parametri bilan ishlashda aniq qaysi usullar va xususiyatlardan foydalanishimiz mumkinligini biladi.

### 4. Elementni Dinamik Yaratuvchi

TypeScriptda yangi DOM elementlarini yaratish va ularni sahifaga qo'shish ham oson:

```typescript
// Yangi tugma elementi yaratish
const newButton = document.createElement("button");

// Uning xususiyatlarini belgilash
newButton.innerText = "New Button";
newButton.id = "newButton";

// Elementni tanlab olingan elementga qo'shish
document.body.appendChild(newButton);
```

### 5. TypeScriptning Tip Kontrollari va Nullish Operatorlari

Elementni tanlashda, TypeScriptda element mavjud emasligi ehtimoli mavjud. Buni hisobga olish uchun siz nullish (nullish coalescing) operatorlaridan foydalanishingiz mumkin:

```typescript
const button = document.getElementById("myButton");

if (button) {
  // Element mavjud bo'lsa, unga hodisa qo'shish
  button.addEventListener("click", () => {
    console.log("Button clicked!");
  });
} else {
  console.log("Element topilmadi.");
}
```

Yoki yanada qisqaroq usul bilan:

```typescript
button?.addEventListener("click", () => {
  console.log("Button clicked!");
});
```

Bu yerda `?.` operatori `button` elementi mavjud bo'lsa, hodisa qo'shishni amalga oshiradi. Agar mavjud bo'lmasa, hech narsa qilmaydi.

### 6. Custom Elementlar va Interfeyslar

Agar siz DOM elementlar bilan ishlashni yanada aniqroq qilishni xohlasangiz, interfeyslar yaratishingiz mumkin:

```typescript
interface MyButtonElement extends HTMLButtonElement {
  customProperty: string;
}

const myButton = document.getElementById("myButton") as MyButtonElement;
myButton.customProperty = "My custom value";
```

Bu yerda `MyButtonElement` interfeysi `HTMLButtonElement`dan meros olgan va unga qo'shimcha xususiyati qo'shilgan.

TypeScriptda DOM elementlari bilan ishlashda kodingiz aniq va xavfsiz bo'lishi uchun TypeScriptning turli imkoniyatlaridan foydalanishingiz mumkin. Bu esa xatolarni kamaytiradi va dasturimizni ishonchli qiladi