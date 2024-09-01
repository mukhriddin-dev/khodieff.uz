---
title: 006. React.js da Component stillari qanday yozishni o'rganamiz.
audioUrl: https://us-tuna-sounds-files.voicemod.net/19df8e9b-140c-4f43-8c0e-09c162821765-1658350707858.mp3
pubDate: 02 Sep 2024 02:09:72
duration: 0:01:00
size: 0
cover: https://telegra.ph/file/b6f28ce0c92aa07ff20da.jpg
explicit: true
episode: 6
season: 5
postType: full
---
## React komponentlariga va uning elementlariga stil yozishning bir necha usuli mavjud: CSS, SCSS, internal (inline) uslublar va styled component'da. Har bir usulni misollar bilan tanishamiz.



![khodieff.uz](https://res.cloudinary.com/practicaldev/image/fetch/s--iKV_2Ulf--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://thepracticaldev.s3.amazonaws.com/i/ce27dyfg7v46855iabnc.png "khodieff.uz")

### 1. **CSS (Cascading Style Sheets)**

CSS fayllarini alohida `.css` fayllarda saqlash va ularni komponentlarga import qilish orqali stil berish.

#### 1.1 **Misol**

1. **`src/App.css`**: CSS fayli.

   ```css
   /* src/App.css */
   .container {
     background-color: lightblue;
     padding: 20px;
   }
   .title {
     color: darkblue;
   }
   ```
2. **`src/App.jsx`**: CSS faylini import qilish va stil berish.

   ```jsx
   import React from 'react';
   import './App.css'; // CSS faylini import qilish

   function App() {
     return (
       <div className="container">
         <h1 className="title">Hello, CSS!</h1>
       </div>
     );
   }

   export default App;
   ```

* **`import './App.css';`**: CSS faylini import qiladi.
* **`className="container"`** va **`className="title"`**: CSS klasslarini qo‘llaydi.

### 2. **SCSS (Sassy CSS)**

SCSS — bu CSS preprocessor bo‘lib, CSS'ga qo‘shimcha xususiyatlar (masalan, o‘zgaruvchilar, nestling) qo‘shadi. SCSS fayllarini CSS fayllariga kompilyatsiya qilish kerak.

#### 2.1 **Misol**

1. **`src/App.scss`**: SCSS fayli.

   ```scss
   /* src/App.scss */
   $bg-color: lightblue;
   $text-color: darkblue;

   .container {
     background-color: $bg-color;
     padding: 20px;

     .title {
       color: $text-color;
     }
   }
   ```
2. **`src/App.jsx`**: SCSS faylini import qilish va stil berish.

   ```jsx
   import React from 'react';
   import './App.scss'; // SCSS faylini import qilish

   function App() {
     return (
       <div className="container">
         <h1 className="title">Hello, SCSS!</h1>
       </div>
     );
   }

   export default App;
   ```

* **`import './App.scss';`**: SCSS faylini import qiladi.
* **`className="container"`** va **`className="title"`**: SCSS klasslarini qo‘llaydi.

### 3. **Internal (Inline) CSS**

Inline CSS — bu CSS uslublarini to‘g‘ridan-to‘g‘ri React komponentida, JavaScript obyekti sifatida yozish.

#### 3.1 **Misol**

```jsx
import React from 'react';

function App() {
  const containerStyle = {
    backgroundColor: 'lightblue',
    padding: '20px',
  };

  const titleStyle = {
    color: 'darkblue',
  };

  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>Hello, Inline CSS!</h1>
    </div>
  );
}

export default App;
```

* **`const containerStyle = { ... }`**: CSS uslublari JavaScript obyekti sifatida yoziladi.
* **`style={containerStyle}`** va **`style={titleStyle}`**: Inline uslub sifatida qo‘llanadi.

### 4. **CSS-in-JS**

CSS-in-JS — bu CSS uslublarini JavaScript fayllarida yozish va boshqarish imkonini beruvchi usuldir. `styled-components` kabi kutubxonalar yordamida amalga oshiriladi.

#### 4.1 **Misol (Styled-components)**

1. **`src/App.jsx`**: `styled-components` kutubxonasidan foydalanish.

   ```jsx
   import React from 'react';
   import styled from 'styled-components';

   const Container = styled.div`
     background-color: lightblue;
     padding: 20px;
   `;

   const Title = styled.h1`
     color: darkblue;
   `;

   function App() {
     return (
       <Container>
         <Title>Hello, Styled Components!</Title>
       </Container>
     );
   }

   export default App;
   ```

* **`styled.div` va `styled.h1`**: `styled-components` kutubxonasi yordamida CSS-in-JS uslubi.
* **`Container` va `Title`**: Stilingizni JavaScript fayllarida yozish va boshqarish imkonini beradi.
* **CSS**: Alohida `.css` fayllarda uslublarni saqlash va import qilish orqali qo‘llaniladi.
* **SCSS**: CSS preprocessor, qo‘shimcha funksiyalar bilan uslublarni yozishga imkon beradi. SCSS fayllari CSS'ga kompilyatsiya qilinadi.
* **Inline CSS**: JavaScript obyekti sifatida uslublarni to‘g‘ridan-to‘g‘ri komponentda qo‘llash.
* **CSS-in-JS**: CSS uslublarini JavaScript fayllarida yozish va boshqarish imkonini beruvchi kutubxonalar yordamida amalga oshiriladi.

Har bir usulning o‘ziga xos afzalliklari va kamchiliklari mavjud, shuning uchun loyihaning talablariga qarab usulni tanlash kerak bo'ladi , yokida UI kit ishlatish bilan qutilish mumkin : )

Bizni tarmoqlarda kuzatishingiz mumkin va maqola foydali bo’lsa do’stlaringizga ham ulashing. 🫡

🔗 https://t.me/mukhriddinweb

🔗 https://medium.com/@mukhriddinweb

🔗 https://dev.to/mukhriddinweb

🔗 https://khodieff.uz

🔗 https://github.com/mukhriddin-dev

🔗 https://linkedin.com/in/mukhriddin-khodiev

🔗 https://youtube.com/@mukhriddinweb