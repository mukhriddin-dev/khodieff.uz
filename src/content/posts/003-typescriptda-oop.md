---
title: "003. TypeScriptda OOP "
audioUrl: jj
pubDate: 03 Sep 2024 00:09:66
duration: 0:00:00
size: 0
cover: https://telegra.ph/file/05887b99972b14cb88fa3.jpg
explicit: true
episode: 3
season: 9
postType: full
---
TypeScriptda obyektga yo‘naltirilgan dasturlash (OOP) konseptsiyalari JavaScriptga asoslangan, lekin TypeScript bu konseptsiyalarni yanada kuchli qilib beradi. TypeScript sizga klasslar, meros olish, interfeyslar, inkapsulyatsiya, abstraktsiya kabi OOP prinsiplarini qo‘llab-quvvatlaydi.

![khodieff.uz](https://i.ytimg.com/vi/IeADHs5eQtI/maxresdefault.jpg "khodieff.uz")

Quyida TypeScriptda OOP konseptsiyalari haqida batafsil ko'rib chiqami:

### 1. Klasslar (Classes)

TypeScriptda klasslar yordamida obyektlar yaratish mumkin. Klasslar bir qator xususiyatlar (properties) va metodlardan (methods) iborat bo‘ladi.

```typescript
class Animal {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  makeSound(): void {
    console.log(`${this.name} is making a sound.`);
  }
}

const dog = new Animal("Dog", 3);
dog.makeSound();  // "Dog is making a sound."
```

Bu yerda `Animal` nomli klass yaratilgan, uning `name` va `age` xususiyatlari hamda `makeSound` metodi mavjud. `constructor` metodi klassdan yangi obyekt yaratishda chaqiriladi.

### 2. Meros olish (Inheritance)

Meros olish orqali bitta klass boshqa bir klassning xususiyatlari va metodlarini meros qilib olishi mumkin. TypeScriptda `extends` kalit so‘zi orqali bu amalga oshiriladi.

```typescript
class Dog extends Animal {
  breed: string;

  constructor(name: string, age: number, breed: string) {
    super(name, age);
    this.breed = breed;
  }

  bark(): void {
    console.log(`${this.name} is barking.`);
  }
}

const myDog = new Dog("Buddy", 2, "Golden Retriever");
myDog.makeSound();  // "Buddy is making a sound."
myDog.bark();       // "Buddy is barking."
```

Bu misolda `Dog` klassi `Animal` klassidan meros oladi. `super()` metodi orqali ota-klassning konstruktoriga murojaat qilinadi. `Dog` klassi qo‘shimcha `bark` metodiga va `breed` xususiyatiga ega.

### 3. Inkapsulyatsiya (Encapsulation)

Inkapsulyatsiya orqali klassning xususiyatlari va metodlarini tashqi kirishdan himoya qilish mumkin. TypeScriptda bu `private`, `protected`, va `public` kalit so‘zlari bilan amalga oshiriladi.

* **`public`**: Xususiyat yoki metod hamma uchun ochiq (default).
* **`private`**: Xususiyat yoki metod faqat klass ichida ko‘rinadi.
* **`protected`**: Xususiyat yoki metod faqat klass va uning merosxo‘rlari uchun ochiq.

```typescript
class Car {
  private brand: string;
  private model: string;

  constructor(brand: string, model: string) {
    this.brand = brand;
    this.model = model;
  }

  public getDetails(): string {
    return `${this.brand} ${this.model}`;
  }
}

const myCar = new Car("Toyota", "Corolla");
console.log(myCar.getDetails());  // "Toyota Corolla"
// console.log(myCar.brand);  // Xato: 'brand' private
```

Bu misolda `brand` va `model` xususiyatlari `private` bilan belgilangan, shuning uchun ularga faqat klass ichida kirish mumkin. `getDetails` metodi esa `public` va tashqaridan foydalanish mumkin.

### 4. Interfeyslar (Interfaces)

Interfeyslar klasslarning strukturasi qanday bo‘lishi kerakligini belgilashga yordam beradi. Interfeyslar faqat xususiyatlar va metodlarni aniqlaydi, lekin ularni amalga oshirmaydi.

```typescript
interface Vehicle {
  brand: string;
  model: string;
  getDetails(): string;
}

class Car implements Vehicle {
  brand: string;
  model: string;

  constructor(brand: string, model: string) {
    this.brand = brand;
    this.model = model;
  }

  getDetails(): string {
    return `${this.brand} ${this.model}`;
  }
}

const myCar = new Car("Toyota", "Corolla");
console.log(myCar.getDetails());  // "Toyota Corolla"
```

Bu misolda `Vehicle` interfeysi `brand`, `model`, va `getDetails` xususiyatlarini aniqlaydi. `Car` klassi esa bu interfeysni amalga oshiradi (`implements` kalit so‘zi orqali) va barcha xususiyatlar va metodlarni amalga oshiradi.

### 5. Abstrakt Klasslar (Abstract Classes)

Abstrakt klasslar to‘g‘ridan-to‘g‘ri obyekt yaratish uchun ishlatilmaydi; ular boshqa klasslar tomonidan meros qilib olinadi. Abstrakt klasslar ichida abstrakt metodlar bo‘lishi mumkin, ular qachonki merosxo‘r klassda amalga oshiriladi.

```typescript
abstract class Shape {
  abstract area(): number;

  describe(): string {
    return "This is a shape.";
  }
}

class Circle extends Shape {
  radius: number;

  constructor(radius: number) {
    super();
    this.radius = radius;
  }

  area(): number {
    return Math.PI * this.radius * this.radius;
  }
}

const circle = new Circle(5);
console.log(circle.area());      // 78.53981633974483
console.log(circle.describe());  // "This is a shape."
```

Bu misolda `Shape` abstrakt klassi yaratilgan. Uning `area` metodi abstrakt bo‘lib, u merosxo‘r klassda amalga oshirilishi kerak. `Circle` klassi `Shape`dan meros olib, `area` metodini amalga oshiradi.

### 6. Polimorfizm (Polymorphism)

Polimorfizm obyektlarni bir xil interfeys orqali boshqarish imkonini beradi, hatto ular turli xil klasslardan bo‘lsa ham. Bu OOPning asosiy prinsiplardan biri hisoblanadi.

```typescript
class Rectangle extends Shape {
  width: number;
  height: number;

  constructor(width: number, height: number) {
    super();
    this.width = width;
    this.height = height;
  }

  area(): number {
    return this.width * this.height;
  }
}

const shapes: Shape[] = [new Circle(5), new Rectangle(10, 20)];

shapes.forEach(shape => {
  console.log(shape.area());
});
```

Bu misolda `shapes` massivi ichida turli xil klasslardan (Circle va Rectangle) obyektlar mavjud, lekin ular hammasi `Shape` klassidan meros olganligi sababli `area` metodini chaqirish mumkin.

TypeScriptda OOP yordamida murakkab va kuchli dasturlar yaratishingiz mumkin. Klasslar, interfeyslar, va boshqa OOP konseptsiyalarini qo‘llash orqali kodni tartibli va qayta foydalaniladigan qilish mumkin.