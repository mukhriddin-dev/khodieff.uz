---
title: 002. Vue.js Loyihamizning tuzilmasi haqida.
audioUrl: https://us-tuna-sounds-files.voicemod.net/19df8e9b-140c-4f43-8c0e-09c162821765-1658350707858.mp3
pubDate: 31 Aug 2024 12:08:47
duration: 0:00:00
size: 0
cover: https://www.khodieff.uz/react.js.png
explicit: true
episode: 3
season: 3
postType: full
---
﷽

#### Assalamu alaykum!

Vue.js loyihasi Vite orqali yaratilganda, loyihaning tuzilmasi quyidagicha bo'ladi. Har bir katalog va faylning maqsadi va vazifalari haqida batafsil tanishamiz.

![khodieff.uz](https://media.dev.to/cdn-cgi/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fhmm717h7vt1ft02iqmvh.jpg "khodieff.uz")



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

### Loyihaning asosi

#### `node_modules/`

Bu katalogda loyihamizni barcha bog'liq package va modullari saqlanadi. `npm install` buyruği bajarilganda, barcha kerakli paketlar shu katalogga yuklanadi.

#### `public/`

Bu katalog loyihamizni umumiy statik fayllarini saqlaydi. Bu katalogdagi fayllar ilova tuzilayotganda o'zgartirilmasdan oxirgi tuzilmaga ko'chiriladi. Misol uchun, `vite.svg` fayli.

#### `src/`

Loyihamizning asosiy manba kodi shu katalogda joylashgan. Barcha komponentlar, stillar , rasmlar va boshqa resurslar shu yerda saqlanadi.

##### `src/assets/`

Bu katalogda loyihamizning rasmlari, shriftlar, va boshqa statik resurslari saqlanadi. Misol uchun, `vue.svg` fayli.

##### `src/components/`

Bu katalogda Vue komponentlari saqlanadi. Har bir komponent alohida `.vue` faylida saqlanadi. Misol uchun, `HelloWorld.vue`.

##### `src/App.vue`

Bu asosiy Vue komponentidir. Bu komponent ilovangizning asosiy tuzilishini va boshqa komponentlarni o'z ichiga oluvchi hisoblanadi.

##### `src/main.js`

Bu fayl ilovamzini ishga tushishi uchun kirish nuqtasi hisoblanadi. Bu faylda Vue ilovasi yaratiladi va asosiy komponent (`App.vue`) ni o'z ichida HTML faylga renderlaydi , bundan tashqar ba'zi css fayllarimizni global holatda ulashimiz mumkin bo'laadi.

```javascript
import { createApp } from 'vue'
// import "./style.css" (misol)
import App from './App.vue'

createApp(App).mount('#app')
```

#### `.gitignore`

Bu faylda Git uchun qaysi fayl va kataloglarni versiya boshqaruviga qo'shmaslik kerakligini belgilab qo'yiladi. Misol uchun, `node_modules` va `dist` kataloglari.

#### `index.html`

Bu ilovamizga kirish uchun asosiy bo'lgan HTML fayl hisoblanadi. Bunda ilovangizni qayerda yuklash kerakligi belgilanadi.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Vite + Vue</title>
  </head>
  <body>
    <div id="app"></div>
    <script type="module" src="/src/main.js"></script>
  </body>
</html>
```

#### `package.json`

Bu faylda loyihamizning meta ma'lumotlari, bog'liqliklar (dependencies), skriptlar va boshqa sozlamalar saqlanadi. Misol uchun:

```json
{
  "name": "my-app",
  "version": "0.0.0",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "serve": "vite preview"
  },
  "dependencies": {
    "vue": "^3.0.0"
  },
  "devDependencies": {
    "vite": "^2.0.0"
  }
}
```

#### `README.md`

Bu fayl loyihamiz haqida ma'lumot beruvchi hujjatdir. Bu yerda loyihangizni qanday o'rnatish va ishlatish bo'yicha ko'rsatmalar beriladi.

#### `vite.config.js`

Bu faylda Vite konfiguratsiyasi saqlanadi. Bu faylda tuzilma jarayonini o'zgartirish va kengaytirish mumkin.

```javascript
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()]
})
```

### Qo'shimcha kataloglar va fayllar

### 1. `src/store/`

Agar ilovangizda Vuex yoki Pinia kabi davlat boshqaruv kutubxonalari foydalanilsa, bu katalogda global store boshqaruv fayllari saqlanadi.

### 2. `src/router/`

Agar ilovangizda Vue Router ishlatilsa, bu katalogda (sahifalar yo'llari , qoidalari ) saqlanadi.

### 3. `src/styles/`

Umumiy uslublar saqlanadigan katalog. Misol uchun, global CSS yoki SASS fayllar.

### 4. `src/utils/`

Umumiy yordamchi funksiyalar va boshqa umumiy kodlar uchun katalog.

### Loyihani kengaytirish

Yuqoridagi tuzilma Vue.js ilovangizni boshlash uchun asosiy tuzilma (struktura) . Loyihamiz kattalashgani sayin, qo'shimcha kataloglar va fayllar qo'shishimiz mumkin. Modularizatsiya orqali kodni tashkil qilish, qayta foydalanish va boshqarish oson bo'ladi. Vue.js o'rganishda davom etamiz BaarakAllohu fiikum!

https://t.me/mukhriddinweb
https://khodieff.uz