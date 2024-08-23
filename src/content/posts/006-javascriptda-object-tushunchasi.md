---
title: 006. JavaScriptda Object tushunchasi
audioUrl: https://us-tuna-sounds-files.voicemod.net/19df8e9b-140c-4f43-8c0e-09c162821765-1658350707858.mp3
pubDate: 23 Aug 2024
duration: 0:00:00
size: 0
cover: https://www.khodieff.uz/2024-08-20-18.03.22.jpg
explicit: true
episode: 6
season: 2
postType: full
---
### JavaScriptda Object



![khodieff.uz](https://miro.medium.com/v2/resize:fit:1400/1*25GHddWfeusJEGE5IET6_g.jpeg "khodieff.uz")

**Object** JavaScriptda asosiy va eng ko'p ishlatiladigan ma'lumot turlaridan biridir. Obyektlar key-value pair bo'lib, har bir key o'ziga mos value bilan bog'lanadi. keylar string yoki `Symbol` bo'lishi mumkin, qiymatlar esa har qanday ma'lumot turi bo'lishi mumkin, shu jumladan boshqa obyektlar, arraylar, va funksiyalar.

### Obyektni yaratish

Obyektni yaratishning ikki asosiy usuli mavjud:

#### 1. **Literal Sintaksis**

Bu usul eng oson va eng keng tarqalgan usuldir:

```javascript
let person = {
  name: "Najimbey",
  age: 14,
  city: "New York"
};
```

#### 2. **Constructor Yordamida**

`Object` konstruktori orqali yangi obyekt yaratishingiz mumkin:

```javascript
let person = new Object();
person.name = "Najimbey";
person.age = 30;
person.city = "New York";
```

### Obyekt Xususiyatlariga Kirish



Obyektning xususiyatlariga kirishning ikkita usuli bor:  ( **.**  notation va bracket \[] notation )

#### 1. ( . ) notation

Nuqta (`.`) yordamida xususiyat nomiga murojaat qilish mumkin:

```javascript
console.log(person.name); // "Najimbey"
console.log(person.age);  // 14
```

#### 2. bracket \[] notation

Qavslar (`[]`) ichida xususiyat nomi string ko'rinishida yoziladi:

```javascript
console.log(person["name"]); // "Najimbey"
console.log(person["age"]);  // 14
```

 bracket \[] notation ayniqsa, xususiyat nomi o'zgaruvchida saqlanganda yoki xususiyat nomi sifatida foydalanish mumkin bo'lmagan belgilar mavjud bo'lganda foydali bo'ladi.

### Obyektga Xususiyatlarini Qo'shish yoki O'zgartirish

JavaScriptda obyektning xususiyatlarini osongina qo'shish yoki o'zgartirish mumkin:

* **Xususiyat qo'shish**:

```javascript
person.country = "Turkey";
```

* **Xususiyatni o'zgartirish**:

```javascript
person.age = 31;
```

### Obyekt Xususiyatlarini O'chirish

`delete` operatori yordamida obyekt xususiyatini o'chirishingiz mumkin:

```javascript
delete person.city;
console.log(person.city); // undefined
```

### Obyekt ichida Funksiyalar (Metodlar)

Obyektlar ichida funksiyalarni saqlash mumkin. Bunday funksiyalar metodlar deb ataladi. Metodlar `this` kalit so'zidan foydalanib, obyektning xususiyatlariga kirishlari mumkin.

```javascript
let person = {
  name: "Najimbey",
  age: 14,
  greet: function() {
    console.log("Hello, " + this.name);
  }
};

person.greet(); // "Hello, Najimbey"
```

### Obyektni Iteratsiya Qilish

Obyektning barcha xususiyatlarini iteratsiya qilish uchun `for...in` tsiklidan foydalaniladi:

```javascript
for (let key in person) {
  console.log(key + ": " + person[key]);
}

// Natija:
// name: Najimbey
// age: 14
// greet: function() { ... }
```

### Obyektni birlashtirish

Obyektlarni birlashtirish uchun `Object.assign()` metodidan yoki spead operatoridan (`...`) foydalanish mumkin.

* **`Object.assign()` yordamida**:

```javascript
let additionalInfo = { country: "Turkey", profession: "Engineer" };
let mergedPerson = Object.assign({}, person, additionalInfo);
console.log(mergedPerson);
```

* **Spread operatori yordamida**:

```javascript
let mergedPerson = { ...person, ...additionalInfo };
console.log(mergedPerson);
```

### Obyekt metodi va `this` kalit so'zi

`this` kalit so'zi obyektdagi metod ichida ishlatilganda, u obyektning o'zini ifodalaydi:

```javascript
let car = {
  brand: "Toyota",
  model: "Camry",
  fullDetails: function() {
    return this.brand + " " + this.model;
  }
};

console.log(car.fullDetails()); // "Toyota Camry"
```

### Xulosa

JavaScriptdagi `Object` — bu (ky-value) pair dinamik ma'lumot turi. `Object` yordamida murakkab ma'lumotlarni saqlash, ularga kirish, ularni yangilash, va bir nechta xususiyatlarni birlashtirish mumkin. `Object` dasturlashda muhim rol o'ynaydi va uni to'g'ri tushunish va undan samarali foydalanish muhim hisoblanadi.



Keyingi postlarda batafsil tanishamiz.