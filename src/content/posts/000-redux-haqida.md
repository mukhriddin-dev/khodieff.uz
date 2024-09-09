---
title: 000. Redux haqida
audioUrl: https://us-tuna-sounds-files.voicemod.net/19df8e9b-140c-4f43-8c0e-09c162821765-1658350707858.mp3
pubDate: 09 Sep 2024 08:09:28
duration: 0:00:00
size: 0
cover: /2024-09-08-06.09.28.jpg
explicit: true
episode: 1
season: 9
postType: full
---
Redux — bu JavaScript kutubxonasi bo‘lib, asosan React kabi kutubxonalar bilan ishlatiladi va dasturiy holatni (state) boshqarish uchun qulay vosita hisoblanadi. Redux asosan katta miqdordagi ma'lumotlar oqimini boshqarish, murakkab ilovalarda holatni markazlashtirish uchun mo‘ljallangan.

Redux’ning asosiy tushunchalari:
1. **Store (Do‘kon)**: Dasturdagi barcha holat (state)ni saqlaydi.
2. **Actions (Harakatlar)**: Bu oddiy obyektlar bo‘lib, qanday o‘zgarishlar bo‘lishini tavsiflaydi.
3. **Reducers**: Bu funksiyalar bo‘lib, holatning qanday o‘zgarishini belgilaydi.
4. **Dispatch**: Bu `action`ni `store`ga yuborish uchun ishlatiladigan funksiya.
5. **Subscribers (Obunachilar)**: Redux do‘koni o‘zgarishlar bo‘lganda avtomatik ravishda obunachilarni xabardor qiladi.

Keling, endi Redux’ning ishlash jarayonini bosqichma-bosqich ko'rib chiqamiz.

### 1. Redux’ni o‘rnatish

Redux bilan ishlash uchun avval Redux va React-Redux paketlarini o‘rnatishingiz kerak. 

**npm yordamida o‘rnatish:**
```bash
npm install redux react-redux
```

**yarn yordamida o‘rnatish:**
```bash
yarn add redux react-redux
```

Bu paketlar Redux bilan React’ni bog‘laydi va holat boshqarishni qulay qiladi.

### 2. Redux storeni yaratish

Redux store — bu sizning ilovangizdagi barcha holatni markaziy joyda saqlaydigan obyektdir. Redux do‘konini yaratish uchun `createStore` funksiyasidan foydalanasiz.

Misol uchun, biz birinchi bo‘lib oddiy `reducer` yaratamiz, keyin Redux do‘konini yaratamiz:

**`reducer.js` faylida:**
```js
const initialState = { count: 0 };

function counterReducer(state = initialState, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, count: state.count + 1 };
    case 'DECREMENT':
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
}

export default counterReducer;
```

Bu yerda biz oddiy `counterReducer` yaratdik, u holatni o‘z ichiga oladi va kelayotgan `action`ga qarab o‘zgaradi.

**`store.js` faylida:**
```js
import { createStore } from 'redux';
import counterReducer from './reducer';

const store = createStore(counterReducer);

export default store;
```

Bu yerda biz `counterReducer` asosida storeni yaratdik.

### 3. Redux storeni React’ga bog‘lash

React ilovasida Redux storeidan foydalanish uchun `Provider` komponentidan foydalanib, storeni butun ilova bo‘ylab taqdim etishimiz kerak.

**`index.js` yoki `App.js` faylida:**
```js
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import App from './App';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
```

Bu yerda `Provider` Redux do‘konini React ilovasiga taqdim etadi, shunda siz store bilan ishlay olasiz.

### 4. Actions  yaratish

`Action`lar Redux’da holatni o‘zgartirish uchun yuboriladigan oddiy obyektlardir. Ular qanday o‘zgarish bo‘lishi kerakligini ko‘rsatadi.

Misol uchun, biz ikkita `action` yaratamiz: `increment` va `decrement`.

**`actions.js` faylida:**
```js
export const increment = () => {
  return {
    type: 'INCREMENT',
  };
};

export const decrement = () => {
  return {
    type: 'DECREMENT',
  };
};
```

### 5. React komponentlarida Redux bilan ishlash

Redux’ning asosiy foydasi shundaki, siz ilovadagi har qanday komponentda markaziy holat bilan ishlay olamiz. Redux holatini o‘qish uchun `useSelector` hook’idan, `action`larni yuborish uchun esa `useDispatch` hook’idan foydalanamiz.

Misol uchun, `Counter` komponentini yarataylik:

**`Counter.js` faylida:**
```js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './actions';

function Counter() {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
}

export default Counter;
```

- **`useSelector`**: Redux do‘konidagi `count` holatini olish uchun ishlatiladi.
- **`useDispatch`**: `increment` va `decrement` action’larini yuborish uchun ishlatiladi.

### 6. Redux storeidagi holatni kuzatish

Redux’ning muhim jihatlaridan biri bu storedagi holatni kuzatishdir. Redux avtomatik ravishda holat o‘zgarganda komponentlarni qayta render qiladi.

### Redux ish jarayoni

1. **Action yuboriladi (dispatch)**: Harakat `dispatch` funksiyasi yordamida yuboriladi, masalan `dispatch(increment())`.
2. **Reducer holatni yangilaydi**: Reducer kelgan action’ni qayta ishlaydi va yangi holatni qaytaradi.
3. **store yangilanadi**: Redux store yangi holatni saqlaydi.
4. **React komponenti yangilanadi**: storedagi holat o‘zgarsa, Redux bilan bog‘langan komponentlar avtomatik ravishda yangilanadi va qayta render qilinadi.

### Redux bilan ishlashning afzalliklari:
- **Stateni markazlashtirish**: Barcha holat bitta joyda saqlanadi.
- **Predictable (Oldindan aytib berish mumkin bo‘lgan) holat boshqaruvi**: Redux’da har bir o‘zgarish aniq va kuzatiladigan bo‘lib, bu ilovani debugging qilishni osonlashtiradi.
- **Oson debugging**: Redux DevTools yordamida har bir action va holat o‘zgarishini kuzatish imkoniyati mavjud.

Mana shu bosqichlar Redux bilan dastur yozishning asosiy qadamlaridir. Agar siz yanada samarali ishlashni xohlasangiz, **Redux Toolkit** dan foydalanishni tavsiya qilaman, chunki u an’anaviy Redux’dan ko‘ra sodda va kamroq kod yozishni talab qiladi. Hullas Redux-toolkit zo'r  :)