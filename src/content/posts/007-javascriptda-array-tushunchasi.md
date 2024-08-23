---
title: 007. JavaScriptda Array tushunchasi
audioUrl: https://us-tuna-sounds-files.voicemod.net/19df8e9b-140c-4f43-8c0e-09c162821765-1658350707858.mp3
pubDate: 23 Aug 2024
duration: 02:20:20
size: 0
cover: https://www.khodieff.uz/2024-08-20-18.03.22.jpg
explicit: true
episode: 7
season: 2
postType: full
---
### JavaScriptda Array 



JavaScriptda `Array` — bu ma'lumotlarning tartiblangan to'plamini saqlash uchun ishlatiladigan ma'lumot turi. Arraylarda turli xil ma'lumot turlari (raqamlar, satrlar, obyektlar, va hattoki boshqa arraylar) birgalikda saqlanishi mumkin. Arraydagi har bir element o'zining indeksiga ega bo'lib, bu indeks 0 dan boshlanadi.

![khodieff.uz](https://www.guvi.in/blog/wp-content/uploads/2024/03/creating_and_initializing_arrays-1200x628.webp "khodieff.uz")



### Arrayni yaratish



Array yaratishning ikki asosiy usuli mavjud:

#### 1. **Literal Sintaksis**

Bu usulda kvadrat qavslar ichida elementlar yoziladi:

```javascript
let fruits = ["apple", "banana", "cherry"];
```

#### 2. **Array Constructor Yordamida**

`Array` konstruktori yordamida ham array yaratish mumkin:

```javascript
let fruits = new Array("apple", "banana", "cherry");
```

### Array Elementlariga Kirish

Arraydagi elementlarga kirish uchun indekslardan foydalaniladi. Indekslar 0 dan boshlanadi, ya'ni birinchi elementning indeksi 0 ga teng.

```javascript
console.log(fruits[0]); // "apple"
console.log(fruits[2]); // "cherry"
```

### Array Elementlarini Qo'shish va O'zgartirish

Array elementlarini qo'shish yoki mavjudlarini o'zgartirish uchun indeksdan foydalaniladi.

* **Element qo'shish**:

  ```javascript
  fruits[3] = "orange";
  console.log(fruits); // ["apple", "banana", "cherry", "orange"]
  ```
* **Elementni o'zgartirish**:

  ```javascript
  fruits[1] = "blueberry";
  console.log(fruits); // ["apple", "blueberry", "cherry", "orange"]
  ```

### Array Uzunligini Aniqlash

Array uzunligi, ya'ni undagi elementlar soni, `length` xossasi yordamida aniqlanadi:

```javascript
console.log(fruits.length); // 4
```

### Keling Arrayning sodda  Metodlari bilan tanishamiz.



JavaScriptda arraylar bilan ishlash uchun ko'plab metodlar mavjud. Eng keng tarqalgan metodlar:

* **`push()`**: Array oxiriga yangi element qo'shadi.

  ```javascript
  fruits.push("mango");
  console.log(fruits); // ["apple", "blueberry", "cherry", "orange", "mango"]
  ```
* **`pop()`**: Array oxiridan elementni o'chiradi va qaytaradi.

  ```javascript
  let lastFruit = fruits.pop();
  console.log(lastFruit); // "mango"
  console.log(fruits);    // ["apple", "blueberry", "cherry", "orange"]
  ```
* **`shift()`**: Array boshidan elementni o'chiradi va qaytaradi.

  ```javascript
  let firstFruit = fruits.shift();
  console.log(firstFruit); // "apple"
  console.log(fruits);     // ["blueberry", "cherry", "orange"]
  ```
* **`unshift()`**: Array boshiga yangi element qo'shadi.

  ```javascript
  fruits.unshift("strawberry");
  console.log(fruits); // ["strawberry", "blueberry", "cherry", "orange"]
  ```
* **`forEach()`**: Arraydagi har bir elementga amal bajaradi.

  ```javascript
  fruits.forEach(function(fruit) {
    console.log(fruit);
  });
  ```
* **`map()`**: Arraydagi har bir elementga amal bajarib, natijalaridan yangi array hosil qiladi.

  ```javascript
  let upperFruits = fruits.map(function(fruit) {
    return fruit.toUpperCase();
  });
  console.log(upperFruits); // ["STRAWBERRY", "BLUEBERRY", "CHERRY", "ORANGE"]
  ```
* **`filter()`**: Ma'lum shartga mos keladigan elementlardan iborat yangi array yaratadi.

  ```javascript
  let longFruits = fruits.filter(function(fruit) {
    return fruit.length > 6;
  });
  console.log(longFruits); // ["strawberry", "blueberry"]
  ```
* **`reduce()`**: Arraydagi barcha elementlarni birlashtirib bitta qiymat yaratadi.

  ```javascript
  let totalLength = fruits.reduce(function(total, fruit) {
    return total + fruit.length;
  }, 0);
  console.log(totalLength); // 28
  ```

### Arrayni Iteratsiya Qilish

Array elementlarini birma-bir ko'rib chiqish uchun `for` yoki `forEach` tsikllaridan foydalanish mumkin:

```javascript
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// yoki forEach yordamida:
fruits.forEach(function(fruit) {
  console.log(fruit);
});
```

### Arrayni Birlashtirish

Arraylarni birlashtirish uchun `concat()` yoki spread operatoridan (`...`) foydalanish mumkin:

* **`concat()` yordamida**:

  ```javascript
  let moreFruits = ["grape", "kiwi"];
  let allFruits = fruits.concat(moreFruits);
  console.log(allFruits); // ["strawberry", "blueberry", "cherry", "orange", "grape", "kiwi"]
  ```
* **Spread operatori yordamida**:

  ```javascript
  let allFruits = [...fruits, ...moreFruits];
  console.log(allFruits); // ["strawberry", "blueberry", "cherry", "orange", "grape", "kiwi"]
  ```

### Xulosa:



JavaScriptdagi `Array` — bu tartiblangan ma'lumotlar to'plamini saqlash uchun qulay ma'lumot turi. Arraylar yordamida turli xil operatsiyalarni osonlik bilan bajarish, ma'lumotlarni tartiblash, filtrlar qo'llash va natijalarni qayta ishlash mumkin. Arraylar JavaScriptda keng qo'llaniladi va ularni to'g'ri tushunish dasturlashda juda muhim. 

Keyingi postlarda batafsil tanishamiz.