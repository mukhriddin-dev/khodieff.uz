---
title: '005. React.js da "Component" tushunchasi '
audioUrl: https://us-tuna-sounds-files.voicemod.net/19df8e9b-140c-4f43-8c0e-09c162821765-1658350707858.mp3
pubDate: 02 Sep 2024 02:09:47
duration: 0:00:00
size: 0
cover: https://telegra.ph/file/b6f28ce0c92aa07ff20da.jpg
explicit: true
episode: 5
season: 5
postType: full
---
React komponentlari — React ilovalarining asosiy qurilish bloklari bo‘lib, ular foydalanuvchi interfeysini yaratishda ishlatiladi. Har bir komponent o‘zining UI qismini va mantiqiy qismini o‘z ichiga oladi. Quyida React komponentining qanday tuzilishi va ishlashini umummiy o'rganamiz.

### 1. **Komponent Nima?**
React komponenti — bu JavaScript funksiyasi yoki klass bo‘lib, UI (foydalanuvchi interfeysi) elementlarini yaratish uchun ishlatiladi. Har bir komponent o‘zining UI qismini tavsiflaydi va interaktivlikni boshqaradi.

### 2. **Komponent Turlari**

- **Funktsional Komponentlar**: Bu eng oddiy komponent turi bo‘lib, ular JavaScript funksiyalari sifatida yaratiladi. Ushbu komponentlar `props` va `state` bilan ishlaydi, lekin (class) metodlarini o‘z ichiga olmaydi. (React 16.8 dan boshlab Hooks yordamida state boshqarish imkoniyati mavjud reactda)

- **Klass Komponentlar**: Bu komponentlar JavaScript klasslari sifatida yaratiladi va sinf metodlarini o‘z ichiga oladi. Ushbu komponentlar avvalgi versiyalarda `state` va hayotiy tsikl (life cycles) metodlari bilan ishlashda foydalangan.

### 3. **Funktsional Komponent Tashkiloti**

Funktsional komponentning oddiy namunasi:

```jsx
import React from 'react';

function MyComponent(props) {
  return (
    <div>
      <h1>Hello, {props.name}!</h1>
    </div>
  );
}

export default MyComponent;
```

- **`import React from 'react';`**: React kutubxonasini import qiladi. React 17 dan boshlab, import qilish shart emas, ammo eski kodlarda ko‘rinishi mumkin.
- **`function MyComponent(props)`**: `MyComponent` nomli funktsiya komponenti. `props` — bu komponentga uzatilgan parametrlar.
- **`return (...)`**: JSX sintaksisi yordamida UI yaratadi. `props.name` orqali komponentga uzatilgan `name` qiymatini oladi.
- **`export default MyComponent;`**: `MyComponent` komponentini eksport qiladi, bu boshqa fayllarda import qilish uchun kerak bo‘ladi.

### 4. **Class Komponenta**

Class komponentining oddiy namunasi:

```jsx
import React, { Component } from 'react';

class MyComponent extends Component {
  render() {
    return (
      <div>
        <h1>Hello, {this.props.name}!</h1>
      </div>
    );
  }
}

export default MyComponent;
```

- **`import React, { Component } from 'react';`**: React kutubxonasidan `Component` klassini import qiladi.
- **`class MyComponent extends Component`**: `MyComponent` nomli klass komponenti. `Component` klassidan meros oladi.
- **`render()`**: `render` metodi komponentning UI qismini qaytaradi.
- **`this.props.name`**: `props` orqali komponentga uzatilgan `name` qiymatini oladi.
- **`export default MyComponent;`**: `MyComponent` komponentini eksport qiladi.

### 5. **Komponentlar qanday ishlaydi?**

1. **Yaratish**: Komponent yaratish uchun JavaScript funksiyasini yoki klassini yozasiz. Ushbu komponent boshqa komponentlarga uzatilgan ma'lumotlarga asoslanib UI elementlarini qaytaradi.

2. **Props**: Komponentlarga ma'lumotlarni uzatish uchun `props` ishlatiladi. `props` — bu komponentga uzatilgan qiymatlar bo‘lib, ular komponent ichida `this.props` (klass komponentlarda) yoki `props` (funktsional komponentlarda) orqali foydalaniladi.

3. **State**: Komponentning ichki holatini saqlash uchun `state` ishlatiladi. Funktsional komponentlarda Hooks yordamida `useState` ishlatiladi, klass komponentlarda esa `this.state` orqali holat boshqariladi.

4. **Render**: Komponentning `render` metodi (klass komponentlarda) yoki `return` qismi (funktsional komponentlarda) UI qismini tavsiflaydi. Bu qism JSX sintaksisi yordamida yaratiladi.

5. **Hayotiy Tsikl (life cycle)**: Klass komponentlarda hayotiy tsikl metodlari (masalan, `componentDidMount`, `componentDidUpdate`) mavjud bo‘lib, ular komponentning turli holatlarida (masalan, yaratish, yangilash) ishga tushadi. Funktsional komponentlarda esa Hooks (masalan, `useEffect`) yordamida o‘xshash funktsiyalar bajariladi.

### Xulosa

React komponentlari UI elementlarini yaratish va boshqarish uchun ishlatiladi. Har bir komponent `props` yordamida tashqi ma'lumotlarni qabul qiladi va `state` orqali ichki holatni saqlaydi. Komponentlar funktsional yoki klass bo‘lishi mumkin, va ular JSX sintaksisi yordamida UI qismlarini tavsiflaydi. Komponentlar o‘zaro bog‘lanib, murakkab UI tizimlarini yaratishga imkon beradi.