---
title: 013. JavaScriptda looplar (takrorlash operatorlari)
audioUrl: https://us-tuna-sounds-files.voicemod.net/19df8e9b-140c-4f43-8c0e-09c162821765-1658350707858.mp3
pubDate: 31 Aug 2024 11:08:40
duration: 0:00:00
size: 0
cover: https://www.khodieff.uz/2024-08-20-18.03.22.jpg
explicit: true
episode: 13
season: 0
postType: full
---
JavaScriptda **looplar (takrorlash operatorlari)** biror kod blokini bir necha marta bajarish uchun ishlatiladi. JavaScriptda ko'p turdagi looplar mavjud, ularning har biri turli holatlarda ishlatiladi. Quyida asosiy looplar haqida ko'rib chiqamiz.



![khodieff.uz js loops](https://i.ytimg.com/vi/Kn06785pkJg/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLD8Db3xoszD_LWmoLN5HYZWAPEZHA "khodieff.uz js loops")

### 1. **`while` loop**

**`while`** loopi biror shart to'g'ri ekanligi davomida kod blokini bajaradi. Agar shart noto'g'ri bo'lsa, loop to'xtaydi.

![while loop | khodieff.uz](https://www.programiz.com/sites/tutorial2program/files/javascript-while-loop_0.png "while loop | khodieff.uz")

#### **Sintaksis:**

```javascript
while (shart) {
    // Shart to'g'ri bo'lsa, bu kod bloklari takror-takror bajariladi
}
```

#### **Misol:**

```javascript
let count = 0;

while (count < 5) {
    console.log(count);
    count++;
}
// 0, 1, 2, 3, 4 ni chiqaradi
```

Bu misolda `count` 5 dan kichik bo'lgunga qadar loop ishlaydi.



### 2. **`do...while` loop**

**`do...while`** loopi `while` loopiga o'xshaydi, lekin u avval kod blokini bajaradi, keyin shartni tekshiradi. Shuning uchun `do...while` loopi kamida bir marta bajariladi, hatto shart noto'g'ri bo'lsa ham.

![khodieff.uz ](https://www.programiz.com/sites/tutorial2program/files/javascript-do-while-loop_0.png "khodieff.uz ")

#### **Sintaksis:**

```javascript
do {
    // Kod bloklari kamida bir marta bajariladi
} while (shart);
```

#### **Misol:**

```javascript
let count = 0;

do {
    console.log(count);
    count++;
} while (count < 5);
// 0, 1, 2, 3, 4 ni chiqaradi
```

`do...while` loopi avval kodni bajaradi, keyin shartni tekshiradi, shuning uchun bu loop hech bo'lmaganda bir marta bajariladi.

### 3. **`for` loop**

**`for`** loopi aniq sonli takrorlashlar soni bo'yicha ishlatiladi. U odatda sanash (counting) uchun ishlatiladi va uchta qismdan iborat: boshlang'ich qiymat (initialization), shart (condition), va update (increment/decrement).

![khodieff.uz](https://www.programiz.com/sites/tutorial2program/files/javascript-for-loop_0.png "khodieff.uz")

#### **Sintaksis:**

```javascript
for (boshlanish; shart; update) {
    // Kod bloklari shart to'g'ri bo'lganda bajariladi
}
```

#### **Misol:**

```javascript
for (let i = 0; i < 5; i++) {
    console.log(i);
}
// 0, 1, 2, 3, 4 ni chiqaradi
```

Bu misolda, `i` 0 dan boshlanadi va har safar 1 ga oshadi (`i++`), loop `i` 5 dan kichik ekan, davom etadi.

### 4. **`for...of` loop**

**`for...of`** loopi iterable obyektlar, ya'ni massivlar, strings, Map, Set kabi obyektlar orqali takrorlash uchun ishlatiladi. U elementlarni to'g'ridan-to'g'ri o'zgaruvchiga o'tkazadi.

#### **Sintaksis:**

```javascript
for (let element of iterable) {
    // Har bir element uchun kod bloklari bajariladi
}
```

#### **Misol:**

```javascript
let array = [10, 20, 30, 40];

for (let value of array) {
    console.log(value);
}
// 10, 20, 30, 40 ni chiqaradi
```

Bu misolda, `for...of` loopi massivning har bir elementini oladi va uni `value` o'zgaruvchiga o'tkazadi.

### 5. **`for...in` loop**

**`for...in`** loopi obyektning barcha enumerable xususiyatlarining kalitlarini (keys) yoki massivning indekslarini iteratsiya qilish uchun ishlatiladi.

#### **Sintaksis:**

```javascript
for (let key in object) {
    // Har bir key uchun kod bloklari bajariladi
}
```

#### **Misol:**

```javascript
let person = {
    name: "Alice",
    age: 25,
    city: "New York"
};

for (let key in person) {
    console.log(key + ": " + person[key]);
}
// "name: Alice", "age: 25", "city: New York" ni chiqaradi
```

Bu misolda, `for...in` loopi `person` obyektining barcha xususiyatlarining kalitlarini iteratsiya qiladi va har bir kalit bilan bog'liq qiymatni chiqaradi.



**`break`** va **`continue`** - bu looplar bilan ishlashda qo'llaniladigan maxsus operatorlardir. Ular looplar ichida shartlarga qarab boshqaruvni o'zgartirish imkonini beradi keling ko'rib chiqamiz.

### **`break` Operator**

**`break`** operatori loopni (for, while, do...while) yoki switch-case blokini to'xtatish uchun ishlatiladi. U loopni darhol tugatadi va uning tashqarisidagi kodga o'tadi.

#### **Sintaksis:**
```javascript
break;
```

#### **Misol:**
```javascript
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        break; // i 5 ga teng bo'lganda loopni to'xtatadi
    }
    console.log(i);
}
// 0, 1, 2, 3, 4 ni chiqaradi
```

Bu misolda, `i` 5 ga teng bo'lganda `break` operatori loopni to'xtatadi, shuning uchun `5` dan keyingi qiymatlar chiqarilmaydi.

### **`continue` Operator**

**`continue`** operatori loop ichida quyidagi iteratsiyaga o'tishga imkon beradi. Ya'ni, `continue` operatori loopdagi qolgan kodni o'tkazib yuboradi va keyingi iteratsiyaga o'tadi.

#### **Sintaksis:**
```javascript
continue;
```

#### **Misol:**
```javascript
for (let i = 0; i < 10; i++) {
    if (i % 2 === 0) {
        continue; // i juft bo'lsa, keyingi iteratsiyaga o'tadi
    }
    console.log(i);
}
// 1, 3, 5, 7, 9 ni chiqaradi
```

Bu misolda, `i` juft bo'lganda `continue` operatori keyingi iteratsiyaga o'tadi, shuning uchun faqat toq qiymatlar chiqariladi.

### **`break` va `continue` bilan Example:**

**Nested Loops**: Har ikkala operatorni chuqurroq (nested) looplarda ham ishlatishingiz mumkin.

#### **Misol:**
```javascript
for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
        if (j === 2) {
            continue; // ichki loopda j = 2 bo'lsa, bu iteratsiyani o'tkazadi
        }
        if (j === 4) {
            break; // ichki loopda j = 4 bo'lsa, ichki loopni to'xtatadi
        }
        console.log(`i: ${i}, j: ${j}`);
    }
}
// i: 0, j: 0
// i: 0, j: 1
// i: 1, j: 0
// i: 1, j: 1
// i: 2, j: 0
// i: 2, j: 1
// i: 3, j: 0
// i: 3, j: 1
// i: 4, j: 0
// i: 4, j: 1
```

Bu misolda `j` 2 ga teng bo'lganda, `continue` operatori ichki loopdagi kodni o'tkazadi va keyingi iteratsiyaga o'tadi. Agar `j` 4 ga teng bo'lsa, `break` operatori ichki loopni to'xtatadi.




### **Xulosa:**

* **`while` loop** - Shart to'g'ri ekan, kodni takrorlaydi.
* **`do...while` loop** - Kodni kamida bir marta bajaradi va keyin shartni tekshiradi.
* **`for` loop** - Belgilangan sonli takrorlashlar uchun ishlatiladi.
* **`for...of` loop** - Iterable obyektlar (massivlar, strings, Map, Set) orqali takrorlash uchun ishlatiladi.
* **`for...in` loop** - Obyektning kalitlarini (keys) yoki massiv indekslarini iteratsiya qiladi.
- **`break`** operatori loop yoki switch-case blokini to'xtatish uchun ishlatiladi.
- **`continue`** operatori loop ichidagi qolgan kodni o'tkazib yuboradi va keyingi iteratsiyaga o'tadi.
Ushbu operatorlar looplarni yanada samarali boshqarish va kodni o'qish oson qilish uchun juda foydalidir.
