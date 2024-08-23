---
title: 005. JavaScriptda Operatorlar (basic)
audioUrl: k
pubDate: 23 Aug 2024
duration: 23:00:00
size: 0
cover: https://www.khodieff.uz/2024-08-20-18.03.22.jpg
explicit: true
episode: 5
season: 2
postType: full
---
### Bu yerda JavaScriptda ishlatiladigan ba'zi asosiy operatorlar va ularning ishlatilishi haqida qisqacha ma'lumotlar keltirilgan:



![khodieff.uz](https://miro.medium.com/v2/resize:fit:883/0*iFP3jq2pByQErvd4.png "khodieff.uz")

##### Arithmetic (Arifmetik) Operatorlar



Bu operatorlar arifmetik hisoblashlarni amalga oshiradi. Har xil turdagi operandlar bilan ularning natijalari qanday bo'lishi haqida ma'lumot:

| Operand 1 (num)         | Operand 2 (str) | Natija                                                                               |
| ----------------------- | --------------- | ------------------------------------------------------------------------------------ |
| **num + str**           | `str`           | Raqam va satrni birlashtiradi, natija satr bo'ladi.                                  |
| **num - str(num)**      | `num`           | Raqamlar orasida arifmetik operatsiyalar bajariladi.                                 |
| **str(num) + str(num)** | `num`           | Satrlar ichidagi raqamlar orasida arifmetik operatsiyalar bajariladi.                |
| **boshqa holatlar**     | `NaN`           | Arifmetik operatsiyani bajarib bo'lmaydi, `NaN` (Not a Number) natijasi qaytariladi. |

##### Assignment (Tayinlash) Operatorlari

Tayinlash operatorlari o'zgaruvchilarga qiymatlarni berish yoki ularni o'zgartirish uchun ishlatiladi:

| Operator | Misol     | Teng bo'ladi |
| -------- | --------- | ------------ |
| `=`      | `x = y`   | `x = y`      |
| `+=`     | `x += y`  | `x = x + y`  |
| `-=`     | `x -= y`  | `x = x - y`  |
| `*=`     | `x *= y`  | `x = x * y`  |
| `/=`     | `x /= y`  | `x = x / y`  |
| `%=`     | `x %= y`  | `x = x % y`  |
| `**=`    | `x **= y` | `x = x ** y` |

##### Comparison (Taqqoslash) Operatorlari

Bu operatorlar boolean qiymatlarni (true yoki false) qaytaradi:

| Operator | Tavsifi                                  |
| -------- | ---------------------------------------- |
| `==`     | Qiymat tengligi, turini hisobga olmaydi. |
| `===`    | Qiymat va tur tengligi, qat'iy tenglik.  |
| `!=`     | Teng emas.                               |
| `!==`    | Qiymat yoki tur teng emas.               |
| `>`      | Katta.                                   |
| `>=`     | Katta yoki teng.                         |
| `<`      | Kichik.                                  |
| `<=`     | Kichik yoki teng.                        |

##### Logical (Mantiqiy) Operatorlar

Bu operatorlar boolean qiymatlarni qaytaradi va mantiqiy operatsiyalarni amalga oshiradi:

| Operator | Tavsifi      | Misol                                            |
| -------- | ------------ | ------------------------------------------------ |
| `&&`     | Mantiqiy AND | `true && true` = true, `true && false` = false   |
| `||`     | Mantiqiy OR  | `true || false` = true, `false || false` = false |
| `!`      | Mantiqiy NOT | `!true` → false, `!false` → true                 |

##### Bitwise (Bit bo'yicha) Operatorlar

Bit bo'yicha operatorlar raqamlarni ikki tomonlama ko'rinishda (binary) taqqoslaydi:

| Operator | Tavsifi                | Misol     | Teng bo'ladi  | Natija | Decimal                              |
| -------- | ---------------------- | --------- | ------------- | ------ | ------------------------------------ |
| `&`      | AND                    | `5 & 1`   | `0101 & 0001` | `0001` | 1                                    |
| `|`      | OR                     | `5 | 1`   | `0101 | 0001` | `0101` | 5                                    |
| `~`      | NOT                    | `~5`      | `~0101`       | `1010` | 10 (Negative due to signed integers) |
| `^`      | XOR                    | `5 ^ 1`   | `0101 ^ 0001` | `0100` | 4                                    |
| `<<`     | Chapga surish          | `5 << 1`  | `0101 << 1`   | `1010` | 10                                   |
| `>>`     | O'ngga surish          | `5 >> 1`  | `0101 >> 1`   | `0010` | 2                                    |
| `>>>`    | O'ngga unsigned surish | `5 >>> 1` | `0101 >>> 1`  | `0010` | 2                                    |

##### Qo'shimchga boshqa Operatorlar:



* **Nullish Coalescing Operator (`??`)**: Agar o'zgaruvchi `null` yoki `undefined` bo'lsa, alternativa qiymatni qaytaradi. Misol: `let a = b ?? 'default';`.
* **Conditional (Ternary) Operator (`?:`)**: Shartga qarab qiymat qaytaradi. Misol: `let x = (age >= 18) ? 'adult' : 'minor';`.
* **Optional Chaining Operator (`?.`)**: Mavjud bo'lmagan xususiyatlarga kirishga urinayotganda xato qaytarmaslik uchun ishlatiladi. Misol: `let value = obj?.property?.subProperty;`.
* Bular haqida batafsil keyingi postlarda tanishamiz.



**Postlarimiz foydali bo'lsa JavaScript o'rganuvchoilariga ham ulashing!**

*