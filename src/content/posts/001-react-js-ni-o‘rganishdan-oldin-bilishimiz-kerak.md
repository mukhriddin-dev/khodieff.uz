---
title: 001. React.js ni o‘rganishdan oldin bilishimiz kerak bo'lgan narslar
audioUrl: https://us-tuna-sounds-files.voicemod.net/19df8e9b-140c-4f43-8c0e-09c162821765-1658350707858.mp3
pubDate: 25 Aug 2024 02:08:77
duration: 18:01:01
size: 0
cover: /2024-08-25-01.36.23.jpg
explicit: true
episode: 2
season: 3
postType: full
---
#### React.js ni o‘rganishni boshlashdan oldin quyidagi asosiy bilimlarga ega bo‘lishimiz kerak:



![khodieff.uz](https://miro.medium.com/v2/resize:fit:2000/1*UngHYlsoG2JosM9P7KrXfQ.png "khodieff.uz")



### 1. **HTML/CSS**

* **HTML (HyperText Markup Language):** React-da komponentlarni yaratish uchun JSX ishlatiladi, bu esa HTML ga o‘xshaydi. Shu sababli, HTML ni yaxshi bilish React komponentlarini to‘g‘ri va samarali tarzda yaratishga yordam beradi.
* **CSS (Cascading Style Sheets):** Foydalanuvchi interfeysini o‘z didingizga ko‘ra bezatish uchun CSS ni bilish kerak. CSS yordamida siz komponentlarni estetik jihatdan chiroyli qilish imkoniyatiga ega bo‘lamiz.

### 2. **JavaScript**

* **Asosiy tushunchalar:** React JavaScript asosida ishlaydi, shuning uchun JavaScriptning asosiy tushunchalarini, masalan, o‘zgaruvchilar, ma'lumot turlari, funksiya va obyektlarni yaxshi bilish kerak.
* **ES6 va undan keyingi versiyalar:** Zamonaviy JavaScript xususiyatlari, masalan, arrow funksiyalar, classlar, let/const o‘zgaruvchilari, template literals, va spread/rest operatorlari React kodini yozishda juda muhimdir.
* **Array va Object ishlov berish:** React-da ma'lumotlar bilan ishlashda massivlar (arrays) va obyektlarni (objects) yaxshi boshqarishni o‘rganish kerak, chunki ko‘p hollarda bu ma'lumotlar holat (state) va propalar (props) sifatida ishlatiladi.

### 3. **JavaScript DOM Manipulyatsiyasi**

* **DOM nima ekanligini bilish:** DOM — bu hujjatning (web sahifa) strukturasi bo‘lib, React Virtual DOM bilan ishlaydi. Real DOM ning qanday ishlashini tushunish React-ning qanday samarali ishlashini tushunishga yordam beradi.
* **DOM manipulyatsiyasi:** JavaScript yordamida DOM elementlarini qanday o'zgartirish, yaratish va o'chirishni bilish, sizga React ichidagi o'zgarishlar qanday amalga oshirilishini tushunishga yordam beradi.

### 4. **Git va Version Control**

* **Git:** Dasturiy ta'minotni boshqarish va kodning versiyalarini kuzatish uchun Git dan foydalanish juda foydali. Bu React loyihalarini boshqarishda va jamoa bilan ishlashda yordam beradi.
* **GitHub yoki GitLab:** Kodni bulutda saqlash va boshqa dasturchilar bilan hamkorlik qilish uchun ushbu platformalardan foydalanishni o‘rganish muhimdir.

### 5. **Command Line Interface (CLI)**

* **Terminal bilan ishlash:** Terminal yoki buyruk satrida (command line) ishlash React bilan ishlashda zarur bo‘lishi mumkin, chunki React ilovalarini yaratish, o‘rnatish va boshqarish ko‘p hollarda buyruqlar orqali amalga oshiriladi.

### 6. **Asosiy Package Managerlar**

* **npm va yarn:** React o'rnatilishi va bog'liqliklarni (dependencies) boshqarish uchun npm yoki yarn dan foydalaniladi. Ushbu paket menejerlarni qanday ishlatishni bilish React loyihalarini yaratish va boshqarishni osonlashtiradi.

Bu bilimlar bilan siz React.js ni o'rganishga tayyor bo'lasiz va bu texnologiyani samarali o'zlashtirish jarayoni osonroq bo'ladi.


### Qo'shimcha dastlabki tushunchalar:

- **NodeJS nima?**
  - Node.js — bu Chrome V8 dvigateliga asoslangan server tomondagi JavaScript runtime. Bu dasturchilarga JavaScript kodini brauzer tashqarisida ham ishlatish imkonini beradi.
  - **NodeJS ni o'rnatish:** Node.js ni [nodejs.org](https://nodejs.org/en) saytida yuklab olishingiz mumkin.
  - **Versiyani tekshirish:** `node --version` buyrug‘i orqali Node.js o‘rnatilganligini va uning qaysi versiyasi ishlayotganligini tekshirishingiz mumkin.

- **Paket menejerlari**
  - **npm (Node Package Manager):** Node.js uchun sukut bo‘yicha paket menejeri hisoblanadi. Bu menejer JavaScript kodining kutubxonalarini (library) o'rnatish, boshqarish va ulash uchun ishlatiladi.
  - **yarn:** npm ga alternativ bo‘lgan paket menejer, tezligi va xavfsizligi bilan mashhur.

### SPA va MPA
- **SPA (Single Page Application):** Bu foydalanuvchi bilan ishlash jarayonida butun sahifani qayta yuklash o'rniga, joriy sahifani dinamik tarzda yangilash orqali muloqot qiladigan veb-ilova. Bu yuqori tezlik va silliq foydalanuvchi tajribasini ta'minlaydi.
- **MPA (Multi Page Application):** An'anaviy veb-ilova bo‘lib, foydalanuvchi ilova bilan o'zaro muloqot qilganda serverdan yangi sahifani yuklaydi. Har bir sahifa alohida hujjat hisoblanadi.

- **SPA va MPA taqqoslashi:**

    |  | SPA | MPA |
    | --- | --- | --- |
    | **SEO** | Qiyinroq | Osonroq |
    | **Dastlabki yuklanish** | Sekinroq | Tezroq |
    | **Tezlik** | Yuklanishdan keyin tezroq | Sekinroq |
    | **Server yuklanishi** | Yengilroq | Og'irroq |

### Real DOM va Virtual DOM
- **Real DOM:** Bu veb-sahifaning haqiqiy HTML tuzilmasidir. Uni to'g'ridan-to'g'ri manipulyatsiya qilish sekin va samarasiz bo'lishi mumkin, ayniqsa murakkab ilovalar uchun, chunki butun sahifa qayta yuklanishi kerak bo'lishi mumkin.
- **Virtual DOM:** Bu Real DOM ning yengil vakili bo'lib, React kabi freymvorklar tomonidan ishlatiladi. U Real DOM ga minimal o'zgartirishlar kiritish uchun farqlarni samarali hisoblab chiqadi va faqat kerakli qismlarni yangilaydi.

### Kutubxonalar va freymvorklar
- **React:** Foydalanuvchi interfeyslarini yaratish uchun JavaScript kutubxonasi, ayniqsa SPA uchun.
- **Next.js:** Server tomonda render qilish va statik saytlar yaratish imkonini beruvchi React freymvorki.
- **Angular:** Google tomonidan qo'llab-quvvatlanadigan to'liq huquqli frontend freymvork.
- **Vue.js:** Foydalanuvchi interfeyslarini yaratish uchun progressiv JavaScript freymvorki.
- **Nuxt.js:** Vue.js asosida universal Vue ilovalarini yaratish uchun freymvork.
- **Astra:** (Agar bu ma'lum bir freymvork yoki kutubxonani anglatadigan bo'lsa, qo'shimcha tafsilotlar kerak bo'lishi mumkin, chunki "Astra" turli xil vositalar yoki tushunchalarni anglatishi mumkin).

### ReactJS nima?
- **ReactJS — bu SPA texnologiyasi:** U bitta sahifali ilovalarni yaratish uchun ishlatiladi.
- **ReactJS Virtual DOM dan foydalanadi:** Bu esa samarali yangilanishlar va render qilishni ta'minlaydi.
- **ReactJS JavaScript kutubxonasi:** U veb-ilovalarning foydalanuvchi interfeyslarini, xususan, ko‘rish qatlami (view layer) ni yaratishga qaratilgan.