---
title: 011. JavaScriptd isNaN va Nullish (values) qiymatlar haqida
audioUrl: https://us-tuna-sounds-files.voicemod.net/19df8e9b-140c-4f43-8c0e-09c162821765-1658350707858.mp3
pubDate: 31 Aug 2024 11:08:47
duration: 0:00:00
size: 0
cover: https://www.khodieff.uz/2024-08-20-18.03.22.jpg
explicit: true
episode: 11
season: 2
postType: full
---
### **`isNaN` funksiyasi**



**`isNaN`** - bu JavaScriptdagi o'rnatilgan funksiya bo'lib, u berilgan qiymat raqam emasligini (Not-a-Number) tekshiradi. Agar argument raqam emas bo'lsa, u `true` qaytaradi, aks holda `false` qaytaradi.

![khodieff.uz](https://www.seanmcp.com/img/falsy-nullish-js.png "khodieff.uz")

#### **Sintaksis:**

```javascript
isNaN(value)
```

#### **`isNaN` bilan ishlash:**

1. **Raqamlar bilan ishlash:**

   ```javascript
   console.log(isNaN(123));     // false (123 - raqam)
   console.log(isNaN('123'));   // false ('123' raqam sifatida qabul qilinadi)
   console.log(isNaN('Hello')); // true ('Hello' raqamga o'zgartirilmaydi)
   console.log(isNaN(NaN));     // true (NaN - raqam emas)
   ```
2. **Bo'sh string va `null`:**

   ```javascript
   console.log(isNaN(''));      // false (bo'sh string 0 ga o'zgartiriladi)
   console.log(isNaN(null));    // false (null 0 ga o'zgartiriladi)
   ```
3. **Boolean qiymatlar:**

   ```javascript
   console.log(isNaN(true));    // false (true 1 ga o'zgartiriladi)
   console.log(isNaN(false));   // false (false 0 ga o'zgartiriladi)
   ```
4. **Obyektlar:**

   ```javascript
   console.log(isNaN({}));       // true (obyektlar raqamga o'zgartirilmaydi)
   console.log(isNaN([]));       // false (bo'sh array 0 ga o'zgartiriladi)
   console.log(isNaN([1, 2]));   // true (array raqamga o'zgartirilmaydi)
   ```

### **`isNaN` vs `Number.isNaN`**

`isNaN` ba'zan qiymatni raqamga o'zgartiradi va shundan keyin tekshiradi. Bu esa ba'zan kutilmagan natijalarga olib kelishi mumkin. **`Number.isNaN`** esa faqatgina `NaN` qiymatini tekshiradi va konversiya qilmaydi.

#### **Misol:**

```javascript
console.log(isNaN('123ABC'));         // true
console.log(Number.isNaN('123ABC'));  // false (chunki '123ABC' hech qachon NaN bo'lmaydi)
```

### **Nullish values (qiymatlar)** 

**Nullish values** deganda JavaScriptda `null` va `undefined` qiymatlariga nisbatan ishlatiladigan atama tushuniladi. Bu qiymatlar mavjud emas yoki belgilangan emas degan ma'noni anglatadi.

#### **`null` va `undefined` haqida batafsil:**

* **`null`**:

  * Bu qiymat mavjud bo'lmasligi yoki ataylab "bo'sh" o'zgaruvchi sifatida belgilanishi uchun ishlatiladi.
  * Misol:

    ```javascript
    let name = null;
    ```
* **`undefined`**:

  * Bu qiymat o'zgaruvchi e'lon qilingan, lekin unga qiymat berilmagan holatni bildiradi.
  * Misol:

    ```javascript
    let age;
    console.log(age); // undefined
    ```

#### **Nullish Coalescing Operator (`??`):**

`??` operatori "null" yoki "undefined" qiymatlar bilan ishlaydi va agar chap tomondagi ifoda `null` yoki `undefined` bo'lsa, o'ng tomondagi qiymatni qaytaradi.

#### **Misol:**

```javascript
let name = null;
let defaultName = "Guest";
let finalName = name ?? defaultName;

console.log(finalName); // "Guest" (chunki name = null)
```

`??` operatori `null` va `undefined` ni tekshiradi, boshqa "falsy" qiymatlar (masalan, `0`, `false`, `""`) `??` orqali zaxira qiymat sifatida olinmaydi, shuning uchun ular o'z qiymatlarini saqlab qoladi.

### **Xulosa:**

* **`isNaN`** funksiyasi berilgan qiymatning raqam emasligini tekshiradi.
* **Nullish values** (`null` va `undefined`) mavjud bo'lmagan yoki belgilangan bo'lmagan qiymatlar uchun ishlatiladi.
* **Nullish coalescing operator (`??`)** `null` yoki `undefined` bo'lsa, zaxira qiymatni qaytaradi.