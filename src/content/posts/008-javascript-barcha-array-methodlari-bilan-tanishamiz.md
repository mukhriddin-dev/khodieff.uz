---
title: 008. JavaScript barcha Array methodlari bilan tanishamiz
audioUrl: https://us-tuna-sounds-files.voicemod.net/19df8e9b-140c-4f43-8c0e-09c162821765-1658350707858.mp3
pubDate: 25 Aug 2024 18:08:60
duration: 0:00:00
size: 0
cover: https://www.khodieff.uz/2024-08-20-18.03.22.jpg
explicit: true
episode: 8
season: 2
postType: full
---
#### JavaScriptda massiv (array) bilan ishlash uchun ko'plab metodlar mavjud. Quyida asosiy array metodlari bilan tanishamiz:

![khodieff.uz | js darslari](https://miro.medium.com/v2/resize:fit:1400/1*qnyXNVzWKpevpQhex6E2-g.png "khodieff.uz | js darslari")

1. **`push()`** - Massivning oxiriga element qo'shadi.
2. **`pop()`** - Massivning oxiridan elementni olib tashlaydi.
3. **`shift()`** - Massivning boshidan elementni olib tashlaydi.
4. **`unshift()`** - Massivning boshiga element qo'shadi.
5. **`concat()`** - Ikki yoki undan ortiq massivlarni birlashtiradi.
6. **`slice()`** - Massivning bir qismini yangi massiv sifatida qaytaradi.
7. **`splice()`** - Massivga element qo'shadi yoki elementlarni olib tashlaydi.
8. **`indexOf()`** - Berilgan elementning massivdagi birinchi indeksini qaytaradi.
9. **`lastIndexOf()`** - Berilgan elementning massivdagi oxirgi indeksini qaytaradi.
10. **`includes()`** - Massivda berilgan element bor-yo'qligini tekshiradi.
11. **`forEach()`** - Har bir element uchun funksiya chaqiradi.
12. **`map()`** - Har bir element uchun funksiya chaqiradi va yangi massiv qaytaradi.
13. **`filter()`** - Berilgan shartga mos keluvchi elementlar bilan yangi massiv yaratadi.
14. **`reduce()`** - Massiv elementlarini bitta qiymatga kamaytiradi (agregatsiya).
15. **`reduceRight()`** - `reduce` metodi bilan bir xil, lekin o'ngdan chapga agregatsiya qiladi.
16. **`find()`** - Shartga mos keladigan birinchi elementni qaytaradi.
17. **`findIndex()`** - Shartga mos keladigan birinchi elementning indeksini qaytaradi.
18. **`every()`** - Har bir element berilgan shartga mos kelishini tekshiradi.
19. **`some()`** - Hech bo'lmaganda bitta element berilgan shartga mos kelishini tekshiradi.
20. **`sort()`** - Massiv elementlarini tartiblaydi.
21. **`reverse()`** - Massiv elementlarini teskari tartiblaydi.
22. **`join()`** - Massiv elementlarini birlashtirib, bitta string hosil qiladi.
23. **`flat()`** - Ichma-ich joylashgan massivlarni tekislaydi.
24. **`flatMap()`** - `map()` va `flat()` funksiyalarini birlashtiradi.
25. **`fill()`** - Massivni berilgan qiymat bilan to'ldiradi.
26. **`from()`** - Ob'ektdan yangi massiv yaratadi.
27. **`isArray()`** - Berilgan qiymat massiv ekanligini tekshiradi.
28. **`of()`** - Berilgan elementlardan yangi massiv yaratadi.
29. **`copyWithin()`** - Massiv ichida elementlarni ko'chiradi.
30. **`entries()`** - Massivning elementlari uchun `[key, value]` juftligini qaytaradi.
31. **`keys()`** - Massivdagi indekslar bo'yicha iterator yaratadi.
32. **`values()`** - Massiv elementlari bo'yicha iterator yaratadi.

##### Keling har bir metod uchun misollarda ko'rib chiqamiz:

### 1. `push()`

```javascript
let fruits = ['apple', 'banana'];
fruits.push('orange');
console.log(fruits); // ['apple', 'banana', 'orange']
```

### 2. `pop()`

```javascript
let fruits = ['apple', 'banana', 'orange'];
fruits.pop();
console.log(fruits); // ['apple', 'banana']
```

### 3. `shift()`

```javascript
let fruits = ['apple', 'banana', 'orange'];
fruits.shift();
console.log(fruits); // ['banana', 'orange']
```

### 4. `unshift()`

```javascript
let fruits = ['banana', 'orange'];
fruits.unshift('apple');
console.log(fruits); // ['apple', 'banana', 'orange']
```

### 5. `concat()`

```javascript
let fruits = ['apple', 'banana'];
let moreFruits = ['orange', 'mango'];
let allFruits = fruits.concat(moreFruits);
console.log(allFruits); // ['apple', 'banana', 'orange', 'mango']
```

### 6. `slice()`

```javascript
let fruits = ['apple', 'banana', 'orange', 'mango'];
let slicedFruits = fruits.slice(1, 3);
console.log(slicedFruits); // ['banana', 'orange']
```

### 7. `splice()`

```javascript
let fruits = ['apple', 'banana', 'orange'];
fruits.splice(1, 1, 'mango');
console.log(fruits); // ['apple', 'mango', 'orange']
```

### 8. `indexOf()`

```javascript
let fruits = ['apple', 'banana', 'orange'];
let index = fruits.indexOf('banana');
console.log(index); // 1
```

### 9. `lastIndexOf()`

```javascript
let fruits = ['apple', 'banana', 'orange', 'banana'];
let index = fruits.lastIndexOf('banana');
console.log(index); // 3
```

### 10. `includes()`

```javascript
let fruits = ['apple', 'banana', 'orange'];
let hasBanana = fruits.includes('banana');
console.log(hasBanana); // true
```

### 11. `forEach()`

```javascript
let fruits = ['apple', 'banana', 'orange'];
fruits.forEach((fruit) => console.log(fruit));
// apple
// banana
// orange
```

### 12. `map()`

```javascript
let numbers = [1, 2, 3];
let doubled = numbers.map(num => num * 2);
console.log(doubled); // [2, 4, 6]
```

### 13. `filter()`

```javascript
let numbers = [1, 2, 3, 4, 5];
let evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers); // [2, 4]
```

### 14. `reduce()`

```javascript
let numbers = [1, 2, 3, 4];
let sum = numbers.reduce((total, num) => total + num, 0);
console.log(sum); // 10
```

### 15. `reduceRight()`

```javascript
let numbers = [1, 2, 3, 4];
let difference = numbers.reduceRight((total, num) => total - num);
console.log(difference); // -2
```

### 16. `find()`

```javascript
let numbers = [1, 2, 3, 4, 5];
let found = numbers.find(num => num > 3);
console.log(found); // 4
```

### 17. `findIndex()`

```javascript
let numbers = [1, 2, 3, 4, 5];
let foundIndex = numbers.findIndex(num => num > 3);
console.log(foundIndex); // 3
```

### 18. `every()`

```javascript
let numbers = [2, 4, 6, 8];
let allEven = numbers.every(num => num % 2 === 0);
console.log(allEven); // true
```

### 19. `some()`

```javascript
let numbers = [1, 2, 3, 4, 5];
let hasEven = numbers.some(num => num % 2 === 0);
console.log(hasEven); // true
```

### 20. `sort()`

```javascript
let fruits = ['banana', 'apple', 'orange'];
fruits.sort();
console.log(fruits); // ['apple', 'banana', 'orange']
```

### 21. `reverse()`

```javascript
let fruits = ['banana', 'apple', 'orange'];
fruits.reverse();
console.log(fruits); // ['orange', 'apple', 'banana']
```

### 22. `join()`

```javascript
let fruits = ['apple', 'banana', 'orange'];
let joinedFruits = fruits.join(', ');
console.log(joinedFruits); // 'apple, banana, orange'
```

### 23. `flat()`

```javascript
let numbers = [1, [2, 3], [4, [5, 6]]];
let flatNumbers = numbers.flat(2);
console.log(flatNumbers); // [1, 2, 3, 4, 5, 6]
```

### 24. `flatMap()`

```javascript
let numbers = [1, 2, 3];
let flatMapped = numbers.flatMap(num => [num, num * 2]);
console.log(flatMapped); // [1, 2, 2, 4, 3, 6]
```

### 25. `fill()`

```javascript
let numbers = [1, 2, 3, 4];
numbers.fill(0, 1, 3);
console.log(numbers); // [1, 0, 0, 4]
```

### 26. `from()`

```javascript
let str = 'hello';
let arrayFromString = Array.from(str);
console.log(arrayFromString); // ['h', 'e', 'l', 'l', 'o']
```

### 27. `isArray()`

```javascript
let isArray = Array.isArray([1, 2, 3]);
console.log(isArray); // true
```

### 28. `of()`

```javascript
let array = Array.of(1, 2, 3);
console.log(array); // [1, 2, 3]
```

### 29. `copyWithin()`

```javascript
let numbers = [1, 2, 3, 4, 5];
numbers.copyWithin(0, 3);
console.log(numbers); // [4, 5, 3, 4, 5]
```

### 30. `entries()`

```javascript
let fruits = ['apple', 'banana', 'orange'];
let iterator = fruits.entries();
for (let entry of iterator) {
    console.log(entry);
}
// [0, 'apple']
// [1, 'banana']
// [2, 'orange']
```

### 31. `keys()`

```javascript
let fruits = ['apple', 'banana', 'orange'];
let iterator = fruits.keys();
for (let key of iterator) {
    console.log(key);
}
// 0
// 1
// 2
```

### 32. `values()`

```javascript
let fruits = ['apple', 'banana', 'orange'];
let iterator = fruits.values();
for (let value of iterator) {
    console.log(value);
}
// 'apple'
// 'banana'
// 'orange'
```

Ushbu misollar orqali har bir metodning qanday ishlashini ko'rishingiz mumkin.
Keyingi maqolalarda ko'rishuncha.