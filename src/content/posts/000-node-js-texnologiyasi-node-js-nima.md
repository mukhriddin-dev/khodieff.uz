---
title: 000. Node.js texnologiyasi , Node.js nima ?
audioUrl: https://us-tuna-sounds-files.voicemod.net/19df8e9b-140c-4f43-8c0e-09c162821765-1658350707858.mp3
pubDate: 02 Sep 2024 01:09:53
duration: 0:00:00
size: 0
cover: https://telegra.ph/file/ac4520955b0be556221e2.jpg
explicit: true
episode: 1
season: 6
postType: full
---
Node.js — bu server tomonida JavaScript kodini ishga tushirish uchun mo'ljallangan ochiq manba platforma. U asosan veb-ilovalarni ishlab chiqish, real-vaqt tizimlar va mikroservislar yaratish uchun ishlatiladi. Quyida Node.js haqida  tanishib o'tamiz.

![khodieff.uz](https://externlabs.com/blogs/wp-content/uploads/2021/12/2400%D1%851260-rw-blog-node-js.png "khodieff.uz | nodejs")

### 1. **Tarixi va Yaratilishi**

Node.js 2009 yilda Ryan Dahl tomonidan yaratilgan. Uning asosiy maqsadi JavaScriptni brauzer tashqarisida ishlatish va uni server tomonida qo'llash imkonini yaratish edi. Node.js'ning asosiy mexanizmi — bu Chrome V8 JavaScript dvigateli bo'lib, u Google tomonidan ishlab chiqilgan va yuqori samarali JavaScript kodini bajara oladi.

### 2. **Asinxron va Event-driven Arxitektura**

Node.js ning eng katta afzalliklaridan biri uning asinxron va hodisalarga asoslangan arxitekturasi hisoblanadi. Bu shuni anglatadiki:

* **Asinxron I/O**: Node.js ko'pgina kirish/chiqish (I/O) operatsiyalarini asinxron ravishda bajaradi, ya'ni ular bajarilayotgan paytda server boshqa vazifalarni bajarishda davom etadi. Bu esa bir vaqtning o'zida ko'plab so'rovlarni qayta ishlash imkonini beradi.
* **Event-driven**: Node.js hodisalar asosida ishlaydi, ya'ni har bir hodisa yuz berganda (masalan, foydalanuvchi serverga so'rov yuborganida) mos funktsiya ishga tushadi.

### 3. **Yagona jarayon**:

Node.js bitta jarayon (single-threaded) modelida ishlaydi, bu esa uni yuqori samarali qiladi. Bu model ko'p vazifalarni bir vaqtda bajarishni ta'minlaydi. Biroq, og'ir hisoblash jarayonlarida bitta jarayonning chegaralari bor, shuning uchun ba'zi hollarda boshqa vositalar yoki worker threads'lardan foydalanish mumkin.

### 4. **NPM (Node Package Manager)**

Node.js bilan birga keladigan NPM dunyodagi eng yirik paket menejeri hisoblanadi. U orqali minglab ochiq manba kutubxonalarini va modullarini osonlik bilan loyihangizga qo'shishingiz mumkin. Bu dasturlash jarayonini ancha soddalashtiradi va tezlashtiradi.

### 5. **Node.js bilan nimalar qilish mumkin?**

Node.js juda ko'p turdagi dasturlarni yaratish uchun ishlatiladi, jumladan:

* **Veb serverlar**: Express.js kabi ramkalar yordamida samarali veb serverlar va API'lar yaratish.
* **Real-vaqt dasturlari**: Chat dasturlari, onlayn o'yinlar yoki real-vaqt yangilanishlar talab qiladigan dasturlar yaratish (masalan, Socket.IO yordamida).
* **Mikroservislar**: Katta tizimlarni kichik xizmatlarga bo'lish va ularni samarali boshqarish.
* **Serverda ishlovchi ilovalar**: Backend logikasini amalga oshirish va ma'lumotlar bazasi bilan ishlash.

### 6. **Afzalliklari**

* **Yuqori tezlik**: V8 dvigateli va asinxron arxitektura tufayli yuqori samaradorlik.
* **Yagona til**: Frontend va backend uchun bitta til (JavaScript) ishlatish imkoniyati.
* **Keng ekotizim**: NPM orqali oson kirish mumkin bo'lgan katta miqdordagi kutubxonalar.

### 7. **Kamchiliklari**

* **Bitta jarayonli tabiat**: Murakkab hisoblash vazifalarida samaradorlik pasayishi mumkin.
* **Og'irliklarga moyillik**: Asinxron modelda ishlash murakkabliklarni keltirib chiqarishi mumkin, ayniqsa katta va kompleks loyihalarda.

### Demak:

Node.js veb-ilovalarni va server tomonida ishlaydigan dasturlarni yaratish uchun kuchli vositadir. Uning asinxron va hodisalarga asoslangan arxitekturasi bir vaqtning o'zida ko'p sonli so'rovlarni samarali qayta ishlash imkonini beradi. Node.js frontend va backendni yagona tilda yozish imkonini beradi, bu esa rivojlantirish jarayonini osonlashtiradi.

## Node.js’ni o'rnatish 



Node.js’ni o'rnatish uchun platformaga qarab biroz farqlar bo'lishi mumkin. Quyida Node.js’ni Windows, macOS, va Linux qurilmalariga qanday o'rnatish mumkinligini ko'rib chiqamiz.

### 1. **Windowsga Node.js’ni o'rnatish**



1. **Node.js veb-saytiga o'ting**:

   * [Node.js rasmiy sayti](https://nodejs.org/)ga kiring.
2. **Installerni yuklab oling**:

   * `LTS (Long Term Support)` yoki `Current` versiyasini tanlab yuklab oling.
3. **O'rnatuvchini ishga tushiring**:

   * Yuklab olingan `.msi` faylini ishga tushiring.
   * O'rnatish jarayonida `Next`, `I Agree`, va `Install` tugmalarini bosib, o'rnatishni yakunlang.
   * `PATH` muhit o'zgaruvchisini yangilash bo'yicha so'rov kelsa, uni tasdiqlang.
4. **O'rnatishni tekshirish**:

   * O'rnatilganligini tekshirish uchun Command Prompt yoki PowerShell’da quyidagi buyruqni kiriting:

     ```bash
     node -v
     ```
   * Node.js ning versiyasi ko'rsatilishi kerak. NPM ham o'rnatilganligini tekshirish uchun:

     ```bash
     npm -v
     ```

### 2. **macOS’ga Node.js’ni o'rnatish**

1. **Node.js veb-saytiga o'ting**:

   * [Node.js rasmiy sayti](https://nodejs.org/)ga kiring.
2. **Installerni yuklab oling**:

   * `LTS` yoki `Current` versiyasini tanlab yuklab oling.
3. **O'rnatuvchini ishga tushiring**:

   * Yuklab olingan `.pkg` faylini ishga tushiring va o'rnatishni yakunlang.
4. **O'rnatishni tekshirish**:

   * Terminalni oching va quyidagi buyruqni kiriting:

     ```bash
     node -v
     ```
   * Node.js ning versiyasi ko'rsatilishi kerak. NPM ham o'rnatilganligini tekshirish uchun:

     ```bash
     npm -v
     ```

   **Alternativ usul (Homebrew orqali):**

* Agar Homebrew o'rnatilgan bo'lsa, quyidagi buyruq yordamida Node.js’ni o'rnatishingiz mumkin:

  ```bash
  brew install node
  ```

### 3. **Linuxga Node.js’ni o'rnatish**

   Linux’ga qarab Node.js’ni o'rnatish biroz farq qilishi mumkin. Asosan Ubuntu/Debian va CentOS/Fedora distribyutsiyalari uchun quyidagi usullar qo'llaniladi.

   **Ubuntu/Debian uchun:**

1. **Node.js PPA qo'shish**:

   * Terminalni oching va NodeSource repozitoriyasini qo'shing:

     ```bash
     curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
     ```
2. **Node.js’ni o'rnatish**:

   * Node.js va NPM’ni o'rnatish uchun quyidagi buyruqni kiriting:

     ```bash
     sudo apt-get install -y nodejs
     ```
3. **O'rnatishni tekshirish**:

   * O'rnatilganligini tekshirish uchun quyidagi buyruqni kiriting:

     ```bash
     node -v
     ```
   * NPM ham o'rnatilganligini tekshirish uchun:

     ```bash
     npm -v
     ```

   **CentOS/Fedora uchun:**

1. **Node.js repozitoriyasini qo'shish**:

   * Terminalda NodeSource repozitoriyasini qo'shing:

     ```bash
     curl -fsSL https://rpm.nodesource.com/setup_lts.x | sudo bash -
     ```
2. **Node.js’ni o'rnatish**:

   * Node.js va NPM’ni o'rnatish uchun:

     ```bash
     sudo yum install -y nodejs
     ```
3. **O'rnatishni tekshirish**:

   * O'rnatilganligini tekshirish uchun:

     ```bash
     node -v
     ```
   * NPM ham o'rnatilganligini tekshirish uchun:

     ```bash
     npm -v
     ```

### Xulosa:



Node.js’ni o'rnatish juda oddiy va har bir platformada uncha katta farq qilmaydi. O'rnatilganidan so'ng, Node.js va NPM bilan ishlashga tayyor bo'lasiz. Ushbu vositalar bilan siz backend ilovalari, mikroservislar va boshqa ko'plab server tomonidagi dasturlarni yaratishingiz mumkin. Good luck) 

**Bizni tarmoqlarda kuzatishingiz mumkin va maqola foydali bo’lsa  do’stlaringizga ham ulashing**. 🫡

🔗 <https://t.me/mukhriddinweb>

🔗 <https://medium.com/@mukhriddinweb>

🔗 <https://dev.to/mukhriddinweb>

🔗 [https://khodieff.uz](https://khodieff.uz/)

🔗 <https://github.com/mukhriddin-dev>

🔗 <https://linkedin.com/in/mukhriddin-khodiev>

🔗 <https://youtube.com/@mukhriddinweb>