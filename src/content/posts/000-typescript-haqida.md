---
title: "000. TypeScript haqida "
audioUrl: https://us-tuna-sounds-files.voicemod.net/19df8e9b-140c-4f43-8c0e-09c162821765-1658350707858.mp3
pubDate: 02 Sep 2024 18:09:05
duration: 0:00:00
size: 0
cover: https://telegra.ph/file/05887b99972b14cb88fa3.jpg
explicit: true
episode: 1
season: 8
postType: full
---
## TypeScript haqida gaplashamiz :)

![khodieff.uz](https://miro.medium.com/v2/resize:fit:1200/1*VTW6T-7KkQHPjf4mtfQ0Zg.png "khodieff.uz")

TypeScript — bu JavaScript asosida yaratilgan dasturlash tili bo‘lib, unga tiplar qo‘shilgan. Ya'ni, TypeScript sizga aniqroq kod yozishga yordam beradi va kompilatsiya vaqtida xatolarni aniqlash imkonini beradi. Bu esa, katta loyihalarda yoki murakkab dasturlarda juda foydali hisoblanadi.

TypeScript ning asosiy afzalliklaridan biri shundaki, u JavaScriptning barcha funksiyalarini qo'llab-quvvatlaydi, shuningdek, sizga qo'shimcha xavfsizlik va funksionallik taqdim etadi. Masalan, siz tiplarni aniq belgilab qo'yishingiz mumkin, bu esa noto'g'ri ma'lumot turlarini uzatishdan saqlaydi.

Misol uchun, JavaScriptda quyidagi kod xatoga olib kelishi mumkin:

```javascript
function add(a, b) {
  return a + b;
}

console.log(add(10, '20')); // "1020"
```

Bu yerda, `a` raqam, lekin `b` qator. JavaScriptda bu ikki tur avtomatik tarzda qatorlarga birlashtiriladi va natija noto'g'ri bo'lishi mumkin. TypeScriptda esa bu kabi xatolarni oldini olish mumkin:

```typescript
function add(a: number, b: number): number {
  return a + b;
}

console.log(add(10, 20)); // 30
console.log(add(10, '20')); // TypeScript xatolik ko'rsatadi
```

Bu orqali siz TypeScript yordamida ancha ishonchli va xavfsizroq kod yozishimiz mumkin. 

TypeScriptni o'rnatish juda oson. Bizga kerak bo'lgan narsa Node.js va NPM (Node Package Manager) o'rnatilgan bo'lishi kerak. Agar sizda hali Node.js va NPM o'rnatilmagan bo'lsa, birinchi navbatda ularni quyidagi rasmiy veb-saytdan yuklab olishingiz kerak:

* [Node.js rasmi veb-sayti](https://nodejs.org/)

Node.js o'rnatilgandan so'ng, TypeScriptni o'rnatish uchun quyidagi qadamlarni bajaramiz:

### 1. NPM orqali TypeScriptni global o'rnatish

TypeScriptni global o'rnatish sizga `tsc` (TypeScript Compiler) buyrug'idan terminalda foydalanish imkonini beradi. Buni amalga oshirish uchun quyidagi buyrug'ni terminalda yoki buyruqlar satrida (Command Prompt) kiriting:

```bash
npm install -g typescript
```

Bu buyruq TypeScriptni butun tizimingiz bo'ylab o'rnatadi va siz uni istalgan loyihada ishlatishingiz mumkin bo'ladi.

### 2. O'rnatishni tekshirish

TypeScript muvaffaqiyatli o'rnatilganligini tekshirish uchun terminalda quyidagi buyrug' orqali tekshiramiz:

```bash
tsc --version
```

Bu buyruq TypeScriptning o'rnatilgan versiyasini ko'rsatadi. Agar versiya raqami ko'rinsa, TypeScript muvaffaqiyatli o'rnatilgan hisoblanadi.

### 3. TypeScript bilan birinchi dastur yozish

TypeScript bilan ishlashni boshlash uchun yangi `.ts` fayl yarating:

```bash
touch hello.ts
```

Faylni oching va biror TypeScript kodini yozish mumkin:

```typescript
let message: string = "Hello, TypeScript!";
console.log(message);
```

Keyin, bu TypeScript faylini JavaScriptga kompilyatsiya qilish uchun quyidagi buyruqni bajaramiz:

```bash
tsc hello.ts
```

Bu buyruq sizning `hello.ts` faylingizni `hello.js` fayliga aylantiradi. Keyin biz bu JavaScript faylini Node.js yoki boshqa muhitda ishlatishimiz mumkin:

```bash
node hello.js
```

Bu qadamlar TypeScriptni o'rnatish va birinchi dasturingizni yaratish uchun yetarli : ) Happy coding