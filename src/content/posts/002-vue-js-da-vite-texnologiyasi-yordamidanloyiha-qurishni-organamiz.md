---
title: 001. Vue.js da Vite texnologiyasi yordamidanloyiha qurishni o'rganamiz!
audioUrl: https://us-tuna-sounds-files.voicemod.net/19df8e9b-140c-4f43-8c0e-09c162821765-1658350707858.mp3
pubDate: 31 Aug 2024 12:08:37
duration: 0:00:00
size: 0
cover: https://www.khodieff.uz/react.js.png
explicit: true
episode: 2
season: 3
postType: full
---
﷽ 

**Assalamu alaykum!** Demak **Vite** texnologiyasi yordamidan **Vue** loyiha qurishni o'rganamiz!

![khodieff.uz](https://media.dev.to/cdn-cgi/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fgfxaeg657ajnvtpebilv.jpg "khodieff.uz")

Vite — Vue.js ilovasini yaratish uchun tez va samarali texnologiya hisoblanadi. Quyida Vite yordamida Vue.js (app) yaratish jarayonini batafsil ko'rib chiqamiz.

**1. Muhitni tayyorlash kerak (Preparation of the environment)**
Birinchidan, kompyuteringizda Node.js o'rnatilganligiga ishonch hosil qiling. Node.js ni [rasmiy saytidan](https://nodejs.org/en) yuklab olish mumkin.

**2. Yangi Vue.js loyihasini yaratish:**
a. Terminal yoki komanda qatori (Command Prompt) ni ochamiz
b. Loyihani yaratish uchun quyidagi buyruqni bajaring:

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/p1lkcy19grbikw8wczj7.png)

va 

```
npm create vite@latest [loyiha_nomi]
```

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/f1w68csi99mucqqge5ht.png)

Bu buyruq yangi Vite loyihasini my-app nomi bilan yaratadi va Vue.js shablonidan foydalanishni tanlaymiz.

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/18ra3wbrgirw8gdp0q6r.png)

va bu yerda JavaScriptni tanlaymiz (hozircha) keyinroq TypeScript yoki Nuxt uchun bemalol ishlab ketaveramiz o'rganish uchun JavaScriptdan boshlashimiz mumkin bo'ladi.

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/km6u1q2vzqaeen55de2k.png)

```
 cd my-app
  npm install
  npm run dev
```

yuqoridagi buyruq orqali biz kerakli "package" larni o'rnatib olib loyihamizni ishga tushurishimiz mukin bo'ladi.

```
npm run dev
```

Ushbu buyruqdan so'ng, terminalda mahalliy (local) server manzili ko'rsatiladi, odatda bu http://localhost:3000 yoki 5174 bo'ladi. Brauzeringizda ushbu manzilga o'tib, yangi Vue.js ilovamizni  ko'rishimiz mumkin.

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/cfu3rbfhvcfp73m1fin9.png)

**3. Loyiha Tuzilmasi
Loyiha yaratib, ochilganingizdan so'ng, loyiha tuzilmasi (strukturasi) quyidagicha bo'ladi:**

```
my-app/
├── node_modules/
├── public/
│   └── vite.svg
├── src/
│   ├── assets/
│   │   └── vue.svg
│   ├── components/
│   │   └── HelloWorld.vue
│   ├── App.vue
│   ├── main.js
├── .gitignore
├── index.html
├── package.json
├── README.md
└── vite.config.js
```

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/vk4n0h5v0limmav6pbqm.png)

Keyingi maqolada Vue.js loyihamizning tuzilmasi va fayllari , folderlarga, fayllarga qanday nom berish kerak , inshaaAlloh bu haqida batafsil gaplashamiz!

BaarakAllohu fiikum!

https://t.me/mukhriddinweb
https://khodieff.uz