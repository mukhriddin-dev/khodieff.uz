---
title: 004. JavaScriptda ma'lumot turlari ( data types )
audioUrl: https://us-tuna-sounds-files.voicemod.net/19df8e9b-140c-4f43-8c0e-09c162821765-1658350707858.mp3
pubDate: 23 Aug 2024
duration: 12:00:00
size: 4
cover: https://www.khodieff.uz/2024-08-20-18.03.22.jpg
explicit: true
episode: 4
season: 2
postType: full
---
##### JavaScriptda ma'lumot turlari (data types) ikkita asosiy kategoriya: **primitive** va **non-primitive** (yoki **reference** turlari) ga bo'linadi va ular **8** ta. Har bir kategoriya o'ziga xos xususiyatlarga ega.



![khodieff.uz](https://miro.medium.com/v2/resize:fit:1400/1*l_ZDRMLFUVaIO38p9Qkzvw.jpeg "khodieff.uz")



### Primitive Ma'lumot Turlari



Primitive turlari oddiy va o'zgarmas (immutable) qiymatlar saqlaydi. Yuqorida tushuntirilganidek, JavaScriptda oltita primitive tur mavjud:

1. **Number**:

   * Raqamli qiymatlarni ifodalaydi (butun va o'nli sonlar).
   * Misol: 

     ```javascript
     let age = 30;
     let temperature = 36.6;
     ```
2. **String**:

   * Matnli qiymatlarni ifodalaydi.
   * Misol: 

     ```javascript
     let name = "Alice";
     let greeting = 'Hello, World!';
     ```
3. **Boolean**:

   * Mantiqiy qiymatlarni ifodalaydi (`true` yoki `false`).
   * Misol:

     ```javascript
     let isMarried = false;
     let hasChildren = true;
     ```
4. **Undefined**:

   * Qiymat hali aniqlanmagan o'zgaruvchi.
   * Misol: 

     ```javascript
     let something;
     console.log(something); // undefined
     ```
5. **Null**:

   * Maxsus qiymat bo'lib, qiymatning yo'qligini anglatadi.
   * Misol: 

     ```javascript
     let car = null;
     ```
6. **Symbol**:

   * Unikal va o'zgarmas identifikator yaratadi.
   * Misol: 

     ```javascript
     let sym1 = Symbol('description');
     let sym2 = Symbol('description');
     console.log(sym1 === sym2); // false
     ```
7. **BigInt**:

   * Juda katta butun sonlarni ifodalaydi.
   * Misol: 

     ```javascript
     let bigNumber = 9007199254740991n; // 'n' harfi BigInt qiymatini ifodalaydi
     ```

### Non-Primitive Ma'lumot Turlari (Reference Types)

Non-primitive turlari yoki reference turlari murakkab obyektlarni ifodalaydi. Ular qiymat o'rniga obyektga bo'lgan havolani (reference) saqlaydi va **Object type ga**  kiradi.

1. **Object**:

   * JavaScriptdagi barcha non-primitive turlar `Object` turiga kiradi.
   * Obyektlar (key , value)  juftliklarini saqlaydi.
   * Misol:

     ```javascript
     let person = {
       name: "John",
       age: 30
     };
     ```
2. **Array**:

   * Bir xil yoki har xil ma'lumot turlaridagi qiymatlar to'plamini saqlash uchun ishlatiladi.
   * Misol:

     ```javascript
     let numbers = [1, 2, 3, 4, 5];
     let mixed = [1, "hello", true];
     ```
3. **Function**:

   * Funksiya — bu qayta foydalanish mumkin bo'lgan kod bloki bo'lib, bu ham obyekt turidir.
   * Misol:

     ```javascript
     function greet(name) {
       return "Hello, " + name + "!";
     }
     ```
4. **Date**:

   * Vaqt va sanani ifodalash uchun ishlatiladi.
   * Misol:

     ```javascript
     let today = new Date();
     ```
5. **RegExp**:

   * Muntazam ifodalar (`regular expressions`) bilan ishlash uchun ishlatiladi.
   * Misol:

     ```javascript
     let pattern = /hello/;
     ```

### Xulosa:

* **Primitive turlar**: oddiy, o'zgarmas qiymatlar (`Number`, `String`, `Boolean`, `Undefined`, `Null`, `Symbol`, `BigInt`).
* **Non-Primitive turlar**: murakkab obyektlar va ma'lumot tuzilmalari (`Object`, `Array`, `Function`, va boshqalar) **lekin unutmang** bular hammasi umummiy qilib `Object` deyiladi.

Primitive turlar qiymatni saqlaydi, non-primitive turlar esa **obyektga** havolani saqlaydi. Bu JavaScriptda ma'lumotlarni qanday ishlatish va o'tkazish usulini belgilaydi.



Keyingi maqolalarda ko'rishguncha.