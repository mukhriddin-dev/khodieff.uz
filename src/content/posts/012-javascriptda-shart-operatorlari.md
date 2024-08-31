---
title: 012. JavaScriptda shart operatorlari
audioUrl: https://us-tuna-sounds-files.voicemod.net/19df8e9b-140c-4f43-8c0e-09c162821765-1658350707858.mp3
pubDate: 31 Aug 2024 11:08:43
duration: 0:00:00
size: 0
cover: /2024-08-20-18.03.22.jpg
explicit: true
episode: 12
season: 2
postType: full
---
**JavaScriptda** shart operatorlari (conditional operators) dasturda turli shartlarga ko'ra turli xil harakatlarni amalga oshirish imkonini beradi. Quyida JavaScriptda ishlatiladigan asosiy shart operatorlari haqida batafsil ko'rib chiqamiz.

![khodieff.uz](https://www.programiz.com/sites/tutorial2program/files/javascript-if-statement.png "khodieff.uz")

### 1. **If-else Operator**

**If-else** - bu eng asosiy shart operatori bo'lib, biror shartni tekshirib, u to'g'ri bo'lsa, biror kod blokini bajaradi, aks holda boshqa kod blokini bajaradi.

#### **Sintaksis:**

```javascript
if (shart) {
    // Shart to'g'ri bo'lsa, bu kod ishlaydi
} else {
    // Shart noto'g'ri bo'lsa, bu kod ishlaydi
}
```

#### **Misol:**

```javascript
let age = 18;

if (age >= 18) {
    console.log("Siz kattasiz");
} else {
    console.log("Siz hali yoshligingiz");
}
// "Siz kattasiz" ni chiqaradi, chunki shart to'g'ri.
```

### 2. **If-else if-else Operator**

**If-else if-else** operatori bir nechta shartlarni tekshirishga imkon beradi. Agar birinchi shart noto'g'ri bo'lsa, keyingi shart tekshiriladi.

#### **Sintaksis:**

```javascript
if (shart1) {
    // Agar shart1 to'g'ri bo'lsa, bu kod ishlaydi
} else if (shart2) {
    // Agar shart1 noto'g'ri, lekin shart2 to'g'ri bo'lsa, bu kod ishlaydi
} else {
    // Agar barcha shartlar noto'g'ri bo'lsa, bu kod ishlaydi
}
```

#### **Misol:**

```javascript
let grade = 85;

if (grade >= 90) {
    console.log("A olasiz");
} else if (grade >= 80) {
    console.log("B olasiz");
} else {
    console.log("C yoki undan past olasiz");
}
// "B olasiz" ni chiqaradi, chunki grade 85 va bu 80 dan yuqori.
```

### 3. **Ternary Operator**

**Ternary operator** (`? :`) - bu shart operatorining qisqacha yozilgan ko'rinishi bo'lib, u if-else operatorining o'rnini bosadi. U shartni tekshiradi va shart to'g'ri bo'lsa bir qiymatni, noto'g'ri bo'lsa boshqa qiymatni qaytaradi.

#### **Sintaksis:**

```javascript
let natija = (shart) ? if_true : if_false;
```

#### **Misol:**

```javascript
let age = 20;
let message = (age >= 18) ? "Siz kattasiz" : "Siz hali yoshligingiz";
console.log(message);
// "Siz kattasiz" ni chiqaradi, chunki age 18 dan yuqori.
```

### 4. **Switch Case Operator**

**Switch case** - bu biror qiymatning bir nechta ehtimoliy qiymatlariga ko'ra turli kod bloklarini bajarishga imkon beradi. U `if-else if-else` operatoriga o'xshaydi, lekin biror qiymatning turli holatlarini tekshirish uchun qulayroq bo'ladi.

#### **Sintaksis:**

```javascript
switch (expression) {
    case value1:
        // Agar expression value1 ga teng bo'lsa, bu kod ishlaydi
        break;
    case value2:
        // Agar expression value2 ga teng bo'lsa, bu kod ishlaydi
        break;
    default:
        // Agar hech bir case mos kelmasa, bu kod ishlaydi
}
```

#### **Misol:**

```javascript
let color = "qizil";

switch (color) {
    case "qizil":
        console.log("Rang qizil");
        break;
    case "yashil":
        console.log("Rang yashil");
        break;
    case "ko'k":
        console.log("Rang ko'k");
        break;
    default:
        console.log("Noma'lum rang");
}
// "Rang qizil" ni chiqaradi, chunki color "qizil".
```

### 5. **Logical Operators**

**Logical operators** - bir nechta shartlarni birlashtirish yoki ularni manipulyatsiya qilish uchun ishlatiladi. Eng keng tarqalgan mantiqiy operatorlar quyidagilardan iborat:

* **AND (`&&`)**: Ikkala shart ham to'g'ri bo'lsa, `true` qaytaradi.

  ```javascript
  if (age > 18 && age < 30) {
      console.log("Siz yoshsiz");
  }
  ```
* **OR (`||`)**: Kamida bitta shart to'g'ri bo'lsa, `true` qaytaradi.

  ```javascript
  if (age < 18 || age > 60) {
      console.log("Siz bu toifaga kirmaysiz");
  }
  ```
* **NOT (`!`)**: Shartning qiymatini inkor qiladi. Agar shart `true` bo'lsa, `false` qaytaradi va aksincha.

  ```javascript
  if (!isMember) {
      console.log("Siz a'zo emassiz");
  }
  ```

### 6. **Nullish Coalescing Operator (`??`)**

**Nullish Coalescing Operator (`??`)** - `null` yoki `undefined` bo'lgan qiymatlar uchun zaxira qiymatni belgilash uchun ishlatiladi.

#### **Sintaksis:**

```javascript
let result = value1 ?? value2;
```

#### **Misol:**

```javascript
let userName = null;
let defaultName = "Guest";
let displayName = userName ?? defaultName;

console.log(displayName); // "Guest"
```

### Xulosa:

JavaScriptda shart operatorlari dasturiy ta'minotda turli shartlarga asosan turli xil harakatlarni amalga oshirishga imkon beradi. To'g'ri operatorni tanlash dasturiy ta'minotning o'quvchanligi va samaradorligini oshiradi. Keyingi maqolalarda ko'rishguncha.