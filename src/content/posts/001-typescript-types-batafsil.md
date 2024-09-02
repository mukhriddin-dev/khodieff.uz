---
title: 001. TypeScript (types) batafsil
audioUrl: https://us-tuna-sounds-files.voicemod.net/19df8e9b-140c-4f43-8c0e-09c162821765-1658350707858.mp3
pubDate: 02 Sep 2024 22:09:45
duration: 0:00:00
size: 0
cover: https://telegra.ph/file/05887b99972b14cb88fa3.jpg
explicit: true
episode: 1
season: 9
postType: full
---
## TypeScriptda typelar (types) — bu qiymatlarning qanday turdagi bo‘lishini oldindan belgilash imkonini beruvchi xususiyatdir. JavaScriptda qiymatlar dinamik turlarga ega, ya'ni bir o‘zgaruvchi bir vaqtda raqam bo‘lsa, keyingi vaqtda qator bo‘lishi mumkin. TypeScript esa, qiymatlarning aniq turlarini belgilash orqali bunday noaniqliklarni oldini oladi.



![khodieff.uz](https://miro.medium.com/v2/resize:fit:1400/1*tMSUrnvbQogNRk3rRk0bog.jpeg "khodieff.uz")



### Asosiy Tiplar

1. **Raqam (Number)**:
   Raqamli qiymatlar uchun ishlatiladi. Bu oddiy raqamlar yoki o'nli sonlar bo‘lishi mumkin.

   ```typescript
   let age: number = 25;
   let pi: number = 3.14;
   ```
2. **Matn (String)**:
   Matnli qiymatlar uchun ishlatiladi. "String"lar esa qo‘shtirnoq yoki bitta tirnoq ichida yoziladi.

   ```typescript
   let name: string = "John";
   let greeting: string = 'Hello, world!';
   ```
3. **Mantiqiy (Boolean)**:
   Faqat `true` yoki `false` qiymatlarini qabul qiladigan tip.

   ```typescript
   let isStudent: boolean = true;
   let hasJob: boolean = false;
   ```
4. **Array**:
   Bir xil turdagi qiymatlarni saqlash uchun ishlatiladi. Arraylarni ikki usulda belgilash mumkin.

   ```typescript
   let numbers: number[] = [1, 2, 3, 4];
   let strings: Array<string> = ["one", "two", "three"];
   ```
5. **Tuples**:
   Har xil turdagi qiymatlarni aniq tartibda saqlash uchun ishlatiladi.

   ```typescript
   let person: [string, number] = ["John", 25];
   ```
6. **Enum (Enumlar)**:
   Belgilangan nomli doimiy qiymatlarning to‘plamini yaratish imkonini beradi.

   ```typescript
   enum Color {
     Red,
     Green,
     Blue
   }
   let c: Color = Color.Green;
   ```
7. **Any (Lyubboy)**:
   Har qanday turdagi qiymatni saqlash uchun ishlatiladi. Bu tip TypeScriptning statik tiplaridan vaqtincha qochish uchun ishlatilishi mumkin agar faqat any ishlatsangiz siz JavaScriptda yoza qoling 😅.

   ```typescript
   let randomValue: any = 10;
   randomValue = "Hello";
   randomValue = true;
   ```
8. **Void**:
   Qaytish qiymatiga ega bo‘lmagan funksiyalar uchun ishlatiladi.

   ```typescript
   function logMessage(message: string): void {
     console.log(message);
   }
   ```
9. **Null va Undefined**:
   `null` — qiymat mavjud emasligini bildiradi, `undefined` esa o‘zgaruvchi qiymati hali belgilangan emasligini bildiradi.

   ```typescript
   let n: null = null;
   let u: undefined = undefined;
   ```
10. **Never** :
    Hech qachon qiymat qaytarmaydigan funksiyalar uchun ishlatiladi, masalan, doimo xato , kasha qiladigan yoki hech qachon tugamaydigan funksiyalar.

    ```typescript
    function error(message: string): never {
      throw new Error(message);
    }
    ```

### TypeScriptda Typelarni Aniq Belgilash

TypeScriptda siz o‘zgaruvchilarning, funksiyalar parametrlarining va ularning qaytariladigan qiymatlarining turlarini oldindan belgilab qo‘yishingiz mumkin. Bu yordamida TypeScript kompilator xatolarni aniqlaydi va kodingiz ishonchliroq bo‘ladi.

Misol:

```typescript
function add(a: number, b: number): number {
  return a + b;
}

let sum: number = add(10, 20);
```

Bu yerda `a` va `b` raqamli tipga ega, shuningdek, funksiya number qiymat qaytaradi.

**TypeScript** typelar tizimi juda kuchlide , murakkab strukturalar va interfeyslar bilan ishlash imkonini beradi. Bu sizga kattaroq va murakkabroq dasturlar yaratishda yordam beradi.

### TypeScriptda ko‘plab turdagi typelar mavjud. Yuqorida asosiy typelar haqida gapirdik, endi esa qo‘shimcha va murakkab typelar haqida gaplashamiz.



### Qo'shimcha va Murakkab Typelar



11. **Union Types (Birlashtiruvchi turlar)**:
    Union tur bir o‘zgaruvchiga bir nechta turdagi qiymatlarni saqlash imkonini beradi. Bu sizga moslashuvchanlikni oshirishda yordam beradi.

    ```typescript
    let id: number | string;
    id = 101;
    id = "E102";
    ```
12. **Intersection Types (Kesishma turlar)**:
    Intersection turlar bir nechta turdagi xususiyatlarni bir o‘zgaruvchiga birlashtiradi. Bu, ayniqsa, bir nechta interfeyslarni birlashtirishda foydali.

    ```typescript
    interface Person {
      name: string;
    }
    interface Employee {
      employeeId: number;
    }
    let emp: Person & Employee = {
      name: "John",
      employeeId: 101
    };
    ```
13. **Literal Types (Literal turlar)**:
    Literal turlar o‘zgaruvchi faqat aniq bir qiymatga ega bo‘lishini bildiradi. Bu qoida bilan ishlashni aniqlashda yoki qiymatlarni cheklashda yordam beradi.

    ```typescript
    let direction: "left" | "right";
    direction = "left";  // To'g'ri
    direction = "up";    // Xato
    ```
14. **Type Aliases (Tip aliase)**:
    Type alias yordamida murakkab turlarni qulay nomlar bilan belgilab qo‘yish mumkin. Bu kodni o‘qilishi oson va qayta foydalanish imkonini beradi.

    ```typescript
    type StringOrNumber = string | number;
    let sample: StringOrNumber;
    sample = 101;
    sample = "Hello";
    ```
15. **Interface (Interfeys)**:
    Interfeys tiplari ko‘pincha obyektlarning strukturasini belgilashda ishlatiladi. Ular yordamida obyektlarning qanday xususiyatlarga ega bo‘lishi kerakligini belgilashingiz mumkin.

    ```typescript
    interface Car {
      brand: string;
      model: string;
      year: number;
    }
    let myCar: Car = {
      brand: "Toyota",
      model: "Corolla",
      year: 2020
    };
    ```
16. **Class (Klasslar)**:
    TypeScriptda klasslar obyektga yo'naltirilgan dasturlashda ishlatiladi. Ular yordamida obyektlar va ularning xatti-harakatlarini belgilashingiz mumkin.

    ```typescript
    class Animal {
      name: string;
      
      constructor(name: string) {
        this.name = name;
      }
      
      speak(): void {
        console.log(`${this.name} is making a noise.`);
      }
    }

    let dog = new Animal("Dog");
    dog.speak();
    ```
17. **Generic Types (Umumiy turlar)**:
    Generic turlar TypeScriptda qayta foydalaniladigan komponentlar yaratishda ishlatiladi. Bu turlar aniq bir turga bog‘liq bo‘lmasdan umumiy kod yozishga imkon beradi.

    ```typescript
    function identity<T>(arg: T): T {
      return arg;
    }

    let output1 = identity<string>("Hello");
    let output2 = identity<number>(123);
    ```
18. **Optional and Readonly Properties (Majburiy emas va faqat o‘qiladigan xususiyatlar)**:
    Interfeys yoki tiplarda xususiyatlar majburiy emas qilib belgilanishi yoki faqat o‘qiladigan qilib o‘rnatilishi mumkin.

    ```typescript
    interface Point {
      x: number;
      y?: number;    // Optional
      readonly z: number;  // Readonly
    }

    let point: Point = { x: 10, z: 20 };
    point.y = 15;
    point.z = 30;  // Xato: faqat o'qish mumkin
    ```
19. **Mapped Types (Xaritalangan turlar)**:
    Xaritalangan turlar boshqa tip asosida yangi tiplarni yaratish imkonini beradi.

    ```typescript
    type Readonly<T> = {
      readonly [P in keyof T]: T[P];
    };

    interface Todo {
      title: string;
      description: string;
    }

    let todo: Readonly<Todo> = {
      title: "Learn TypeScript",
      description: "Read the TypeScript handbook"
    };
    todo.title = "New Title";  // Xato: faqat o'qish mumkin
    ```
20. **Type Assertions (Tipni aniqlash)**:
    Ba'zida siz TypeScript kompilatoriga ma'lum bir o‘zgaruvchining aniq bir turga ega ekanligini aytmoqchisiz. Buni tip aniqlash orqali amalga oshirish mumkin.

    ```typescript
    let someValue: any = "this is a string";
    let strLength: number = (someValue as string).length;
    ```
21. **Function Types (Funksiya typelari)**:
    TypeScriptda funksiya turlarini ham aniq belgilash mumkin. Bu orqali funksiya qanday parametrlarni qabul qilishi va qanday qiymatni qaytarishi kerakligini ko‘rsatadi.

    ```typescript
    let myFunc: (a: number, b: number) => number;
    myFunc = (x, y) => x + y;
    ```

Bu turdagi turlar TypeScriptda kod yozishni qulaylashtiradi va xatoliklardan himoyalaydi. 

TypeScriptda ko‘plab turdagi tiplar mavjud. Yuqorida asosiy tiplar haqida gapirdik, endi esa qo‘shimcha va murakkab tiplar haqida tushuntiraman.

### Qo'shimcha va Murakkab Tiplar

11. **Union Types (Birlashtiruvchi turlar)**:
    Union tur bir o‘zgaruvchiga bir nechta turdagi qiymatlarni saqlash imkonini beradi. Bu sizga moslashuvchanlikni oshirishda yordam beradi.

    ```typescript
    let id: number | string;
    id = 101;
    id = "E102";
    ```
12. **Intersection Types (Kesishma turlar)**:
    Intersection turlar bir nechta turdagi xususiyatlarni bir o‘zgaruvchiga birlashtiradi. Bu, ayniqsa, bir nechta interfeyslarni birlashtirishda foydali.

    ```typescript
    interface Person {
      name: string;
    }
    interface Employee {
      employeeId: number;
    }
    let emp: Person & Employee = {
      name: "John",
      employeeId: 101
    };
    ```
13. **Literal Types (Literal turlar)**:
    Literal turlar o‘zgaruvchi faqat aniq bir qiymatga ega bo‘lishini bildiradi. Bu qoida bilan ishlashni aniqlashda yoki qiymatlarni cheklashda yordam beradi.

    ```typescript
    let direction: "left" | "right";
    direction = "left";  // To'g'ri
    direction = "up";    // Xato
    ```
14. **Type Aliases (Tip aliase)**:
    Type alias yordamida murakkab turlarni qulay nomlar bilan belgilab qo‘yish mumkin. Bu kodni o‘qilishi oson va qayta foydalanish imkonini beradi.

    ```typescript
    type StringOrNumber = string | number;
    let sample: StringOrNumber;
    sample = 101;
    sample = "Hello";
    ```
15. **Interface (Interfeys)**:
    Interfeys tiplari ko‘pincha obyektlarning strukturasini belgilashda ishlatiladi. Ular yordamida obyektlarning qanday xususiyatlarga ega bo‘lishi kerakligini belgilashingiz mumkin.

    ```typescript
    interface Car {
      brand: string;
      model: string;
      year: number;
    }
    let myCar: Car = {
      brand: "Toyota",
      model: "Corolla",
      year: 2020
    };
    ```
16. **Class (Klasslar)**:
    TypeScriptda klasslar obyektga yo'naltirilgan dasturlashda ishlatiladi. Ular yordamida obyektlar va ularning xatti-harakatlarini belgilashingiz mumkin.

    ```typescript
    class Animal {
      name: string;
      
      constructor(name: string) {
        this.name = name;
      }
      
      speak(): void {
        console.log(`${this.name} is making a noise.`);
      }
    }

    let dog = new Animal("Dog");
    dog.speak();
    ```
17. **Generic Types (Umumiy turlar)**:
    Generic turlar TypeScriptda qayta foydalaniladigan komponentlar yaratishda ishlatiladi. Bu turlar aniq bir turga bog‘liq bo‘lmasdan umumiy kod yozishga imkon beradi.

    ```typescript
    function identity<T>(arg: T): T {
      return arg;
    }

    let output1 = identity<string>("Hello");
    let output2 = identity<number>(123);
    ```
18. **Optional and Readonly Properties (Majburiy emas va faqat o‘qiladigan xususiyatlar)**:
    Interfeys yoki tiplarda xususiyatlar majburiy emas qilib belgilanishi yoki faqat o‘qiladigan qilib o‘rnatilishi mumkin.

    ```typescript
    interface Point {
      x: number;
      y?: number;    // Optional
      readonly z: number;  // Readonly
    }

    let point: Point = { x: 10, z: 20 };
    point.y = 15;
    point.z = 30;  // Xato: faqat o'qish mumkin
    ```
19. **Mapped Types (Xaritalangan turlar)**:
    Xaritalangan turlar boshqa tip asosida yangi tiplarni yaratish imkonini beradi.

    ```typescript
    type Readonly<T> = {
      readonly [P in keyof T]: T[P];
    };

    interface Todo {
      title: string;
      description: string;
    }

    let todo: Readonly<Todo> = {
      title: "Learn TypeScript",
      description: "Read the TypeScript handbook"
    };
    todo.title = "New Title";  // Xato: faqat o'qish mumkin
    ```
20. **Type Assertions (Tipni aniqlash)**:
    Ba'zida siz TypeScript kompilatoriga ma'lum bir o‘zgaruvchining aniq bir turga ega ekanligini aytmoqchisiz. Buni tip aniqlash orqali amalga oshirish mumkin.

    ```typescript
    let someValue: any = "this is a string";
    let strLength: number = (someValue as string).length;
    ```
21. **Function Types (Funksiya tiplari)**:
    TypeScriptda funksiya turlarini ham aniq belgilash mumkin. Bu orqali funksiya qanday parametrlarni qabul qilishi va qanday qiymatni qaytarishi kerakligini ko‘rsatadi.

    ```typescript
    let myFunc: (a: number, b: number) => number;
    myFunc = (x, y) => x + y;
    ```

Bu turdagi turlar TypeScriptda kod yozishni qulaylashtiradi va xatoliklardan himoyalaydi.

Bizni tarmoqlarda kuzatishingiz mumkin va maqola foydali bo’lsa do’stlaringizga ham ulashing. 🫡

🔗 https://t.me/mukhriddinweb

🔗 https://medium.com/@mukhriddinweb

🔗 https://dev.to/mukhriddinweb

🔗 https://khodieff.uz

🔗 https://github.com/mukhriddin-dev

🔗 https://linkedin.com/in/mukhriddin-khodiev

🔗 https://youtube.com/@mukhriddinweb