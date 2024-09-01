---
title: 004. React.js boshlang'ich loyiha tuzilmasi bilan tanishamiz.
audioUrl: https://us-tuna-sounds-files.voicemod.net/19df8e9b-140c-4f43-8c0e-09c162821765-1658350707858.mp3
pubDate: 02 Sep 2024 02:09:04
duration: 0:00:00
size: 0
cover: https://telegra.ph/file/b6f28ce0c92aa07ff20da.jpg
explicit: true
episode: 4
season: 5
postType: full
---
## React loyihasidagi fayllar va ularning o‘zaro bog‘liqligini tushunish muhim hisoblanadi, keling ko'rib chiqamiz.



### 1. **`public/index.html`**

* **Asosiy HTML fayli**: Bu faylda `<div id="root"></div>` elementi mavjud bo‘lib, React ilovasi shu elementga qo‘shiladi.
* **Bog‘liqligi**: `src/main.jsx` fayli shu `root` elementiga React komponentlarini joylashtiradi.

### 2. **`src/main.jsx`**

* **React ilovasining kirish nuqtasi**: Bu faylda React DOM orqali `index.html`dagi `root` elementiga React ilovasini joylashtiradi.
* **Kod misoli**:

  ```jsx
  import React from 'react';
  import ReactDOM from 'react-dom';
  import App from './App';
  import './index.css';

  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  );
  ```
* **Bog‘liqligi**: `App` komponenti `src/App.jsx` faylidan import qilinadi va `root` elementiga joylashtiriladi.

### 3. **`src/App.jsx`**

* **Asosiy React komponenti**: Bu faylda siz loyihaning asosiy komponentlarini yaratishingiz mumkin. `App` komponenti bu yerda o‘zgaradi.
* **Kod misoli**:

  ```jsx
  import React from 'react';

  function App() {
    return (
      <div>
        <h1>Hello, Vite + React!</h1>
      </div>
    );
  }

  export default App;
  ```
* **Bog‘liqligi**: `App` komponenti `main.jsx` faylida import qilinadi va `ReactDOM.render` orqali sahifaga qo‘shiladi.

### 4. **`src/index.css`**

* **Global CSS fayli**: Loyihaning global uslublarini o‘z ichiga oladi. `main.jsx` faylida import qilinadi.
* **Kod misoli**:

  ```css
  body {
    font-family: Arial, sans-serif;
  }
  ```
* **Bog‘liqligi**: `index.css` fayli `main.jsx` faylida import qilinadi, bu esa uslublar global darajada qo‘llanilishiga olib keladi.

### 5. **`vite.config.js`**

* **Vite konfiguratsiya fayli**: Vite uchun sozlamalarni o‘z ichiga oladi, masalan, plaginlar, brauzer moslashuvchanligi va boshqa konfiguratsiyalar.
* **Bog‘liqligi**: Bu fayl Vite'ning ishlashini sozlaydi va boshqa fayllar bilan to‘g‘ridan-to‘g‘ri bog‘lanmaydi, ammo uni to‘g‘ri sozlash orqali loyiha to‘g‘ri ishlaydi.

### 6. **`package.json`**

* **Paketlar va skriptlar**: Loyihaning bog‘liq paketlarini va skriptlarini belgilaydi.
* **Bog‘liqligi**: Bu faylda Node.js paketlari va o‘rnatilgan modullar ro‘yxati saqlanadi. Skriptlar orqali loyiha uchun kerakli buyruqlar bajariladi (masalan, `npm run dev`).

### 7. **`public` Papkasi**

* **Statik fayllar**: Bu papkada static resurslar, masalan, rasm, favicon va boshqa statik fayllar saqlanadi. `index.html` fayli shu papkada bo‘ladi.
* **Bog‘liqligi**: Statik resurslar React komponentlarida to‘g‘ridan-to‘g‘ri ishlatilishi mumkin.

### Xulosa

* **`index.html`**: React ilovasi uchun asosiy HTML sahifa.
* **`main.jsx`**: React ilovasining kirish nuqtasi, `App` komponentini `root` elementiga joylashtiradi.
* **`App.jsx`**: Asosiy React komponenti, ilovaning ko‘rinishini belgilaydi.
* **`index.css`**: Global uslublar fayli, ilovadagi uslublarni boshqaradi.
* **`vite.config.js`**: Vite konfiguratsiya fayli, loyiha sozlamalarini boshqaradi.
* **`package.json`**: Paketlar va skriptlar ro‘yxati, loyiha bilan bog‘liq paketlar va skriptlar.

Bu fayllar va papkalar bir-biri bilan qanday bog‘lanishini tushunish, React ilovasini samarali ravishda boshqarishga yordam beradi va loyihaga qarab o'zgarishi mumkin.