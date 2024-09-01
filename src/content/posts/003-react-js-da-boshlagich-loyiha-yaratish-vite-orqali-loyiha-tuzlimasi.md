---
title: 003. React.js da boshlag'ich loyiha yaratish  vite orqali  , loyiha tuzlimasi.
audioUrl: https://us-tuna-sounds-files.voicemod.net/19df8e9b-140c-4f43-8c0e-09c162821765-1658350707858.mp3
pubDate: 02 Sep 2024 02:09:86
duration: 0:00:00
size: 0
cover: https://telegra.ph/file/b6f28ce0c92aa07ff20da.jpg
explicit: true
episode: 3
season: 5
postType: full
---
Vite yordamida React loyihasini yaratish jarayoni juda oddiy va tezkor. Quyida bu jarayonni bosqichma-bosqich ko'rib chiqamiz va loyiha tuzilmasi bilan batafsil tanishamiz.

### Vite orqali React loyihasini yaratish

1. **Node.js o'rnatilganligini tekshiring**
   Node.js o'rnatilgan bo'lishi kerak. Terminalda quyidagi buyruqni kiritib tekshiring:

   ```bash
   node -v
   ```

   Agar Node.js o'rnatilmagan bo'lsa, uni [Node.js rasmiy saytida](https://nodejs.org/) o'rnatishingiz mumkin.
2. **Yangi React loyihasini yaratish**
   Terminal yoki Command Prompt’ni oching va quyidagi buyruqni kiriting:

   ```bash
   npm create vite@latest
   ```

   Bu buyruq sizdan loyiha nomini va shablonni tanlashni so'raydi:

   * **Loyiha nomi**: Misol uchun, `my-react-app`.
   * **Frameworkni tanlash**: `React`.
   * **Variantni tanlash**: `JavaScript` yoki `TypeScript` (lojik talablariga qarab).
3. **Loyiha papkasiga o'tish**
   Loyiha yaratilib bo'lgandan so'ng, uning papkasiga o'ting:

   ```bash
   cd my-react-app
   ```
4. **Paketlarni o'rnatish**
   Loyihaga kerakli paketlarni o'rnatish uchun quyidagi buyruqni bajarish kerak:

   ```bash
   npm install
   ```
5. **Loyihani ishga tushirish**
   Loyiha lokal serverda ishlashi uchun quyidagi buyruqni kiriting:

   ```bash
   npm run dev
   ```

   Brauzerda `http://localhost:5173` manziliga o'tib, loyihani ko'rishingiz mumkin.

### Loyiha Tuzilmasi

Vite orqali yaratilgan React loyihasining tuzilmasi quyidagicha bo'ladi:

```
my-react-app/
├── node_modules/            # Node.js paketlari
├── public/                  # Statik fayllar (HTML, favicons, images)
│   └── index.html           # Loyihaning asosiy HTML fayli
├── src/                     # Dasturiy kodlar
│   ├── assets/              # Statik resurslar (rasm, video va boshqalar)
│   ├── App.jsx              # Asosiy React komponent
│   ├── main.jsx             # React ilovasining kirish nuqtasi
│   └── index.css            # Global CSS fayli
├── .gitignore               # Git uchun qaysi fayllarni e'tiborga olmaslik kerakligini belgilovchi fayl
├── package.json             # Loyihaning paketlari va skriptlari
├── package-lock.json        # Paketlar versiyalari uchun log
├── vite.config.js           # Vite konfiguratsiya fayli
└── README.md                # Loyihani tushuntiruvchi hujjat
```

### Asosiy Fayllar

* **`public/index.html`**: Loyihaning asosiy HTML fayli. Bu faylda `<div id="root"></div>` elementi mavjud bo'lib, React ilovasi shu elementga qo'shiladi.
* **`src/App.jsx`**: Loyihaning asosiy React komponenti. Bu yerda siz React komponentlarini yaratib, dasturiy mantiqni amalga oshirishingiz mumkin.
* **`src/main.jsx`**: React ilovasining kirish nuqtasi. Bu faylda React ilovasi `index.html`dagi `root` elementiga bog'lanadi.
* **`vite.config.js`**: Vite konfiguratsiya fayli. Bu yerda Vite'ning sozlamalari, plaginlar va boshqa konfiguratsiyalarni sozlash mumkin.
* **`package.json`**: Loyihaning paketlari va skriptlarini belgilovchi fayl. Bu yerda siz o'rnatilgan paketlar va loyiha uchun kerakli skriptlarni ko'rishingiz mumkin.
* **`.gitignore`**: Git tomonidan e'tiborga olinmaydigan fayllarni belgilaydi. Odatda, `node_modules/` va boshqa avtomatik yaratilgan fayllar shu yerga qo'shiladi.

> Vite yordamida React loyihasini yaratish juda tez va soddadir. Loyiha tuzilmasi oddiy va lozim bo'lgan barcha asosiy fayllarni o'z ichiga oladi. Vite'ning tezkor ishga tushirish va samarali rivojlantirish muhitidan foydalanish, loyiha ustida ishlashni ancha osonlashtiradi.





**Bizni tarmoqlarda kuzatishingiz mumkin va maqola foydali bo’lsa do’stlaringizga ham ulashing**. 🫡

🔗 <https://t.me/mukhriddinweb>

🔗 <https://medium.com/@mukhriddinweb>

🔗 <https://dev.to/mukhriddinweb>

🔗 [https://khodieff.uz](https://khodieff.uz/)

🔗 <https://github.com/mukhriddin-dev>

🔗 <https://linkedin.com/in/mukhriddin-khodiev>

🔗 <https://youtube.com/@mukhriddinweb>