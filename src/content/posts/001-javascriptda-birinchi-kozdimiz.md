---
title: 001. JavaScriptda birinchi kodimizni yozamiz
audioUrl: https://us-tuna-sounds-files.voicemod.net/19df8e9b-140c-4f43-8c0e-09c162821765-1658350707858.mp3
pubDate: 21 Aug 2024
duration: 2:09:02
size: 0
cover: https://www.khodieff.uz/2024-08-20-18.03.22.jpg
explicit: true
episode: 2
season: 2
postType: full
---
### JavaScriptda sintaksisi va ma'lumotlarni kiritish va chiqarish.



![khodieff.uz](https://media.dev.to/cdn-cgi/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fl7n1gwdtprnmcadljf1y.jpg "khodieff.uz")



### 1. Sintaksisi (yozish tartibi)

JavaScript sintaksisi quyidagi asosiy elementlardan iborat:

* **O'zgaruvchilar**: Ma'lumotlarni saqlash uchun ishlatiladi.

  ```javascript
  let name = 'John'; // let yordamida o'zgaruvchi e'lon qilish
  const age = 30; // const yordamida o'zgaruvchi e'lon qilish (o'zgarmaydigan o'zgauvchi )
  ```
### 2. Input/Output (Kirish/Chiqish)

**Kirish** (Input) va **Chiqish** (Output) JavaScriptda asosan `console` va HTML orqali amalga oshiriladi.

* **Chiqish (Output)**:

  * **`console.log()`**: Ma'lumotlarni brauzerning konsoliga chiqarish uchun.

    ```javascript
    console.log("Hello, World!");
    ```
  * **`alert()`**: Brauzerda xabar oynasini ko'rsatadi.

    ```javascript
    alert("Hello, World!");
    ```
  * **`document.write()`**: HTML hujjatiga ma'lumot yozadi (ko'p hollarda foydalanilmaydi).

    ```javascript
    document.write("Hello, World!");
    ```
* **Kirish (Input)**:

  * **`prompt()`**: Foydalanuvchidan ma'lumot olish uchun dialog oynasini ko'rsatadi.

    ```javascript
    let userInput = prompt("Please enter your name:");
    console.log("User's name is " + userInput);
    ```
  * **HTML formalar**: Foydalanuvchi ma'lumotlarni HTML formasi orqali kiritishi mumkin. JavaScript bu ma'lumotlarni olish uchun DOM manipulyatsiyasini amalga oshiradi.

    ```html
    <form id="myForm">
        <input type="text" id="nameInput" placeholder="Enter your name">
        <button type="button" onclick="submitForm()">Submit</button>
    </form>

    <script>
      function submitForm() {
          let name = document.getElementById("nameInput").value;
          console.log("User's name is " + name);
      }
    </script>
    ```

Bu asosiy tushunchalar JavaScript dasturlashni boshlash uchun zarur bo'lgan boshlang'ich bilimlardir. Keyingi maqolalarda batafsil tanishmiz. 

