---
title: 001. Redux Toolkit
audioUrl: https://us-tuna-sounds-files.voicemod.net/19df8e9b-140c-4f43-8c0e-09c162821765-1658350707858.mp3
pubDate: 09 Sep 2024 08:09:17
duration: 0:00:00
size: 0
cover: https://www.khodieff.uz/2024-09-08-06.09.28.jpg
explicit: true
episode: 2
season: 9
postType: full
---
Redux Toolkit — bu Redux bilan ishlashni sezilarli darajada osonlashtiruvchi kutubxona bo‘lib, eng yaxshi amaliyotlarni taqdim etadi va dastur kodini qisqartirishga yordam beradi. Endi Redux Toolkit’ning so‘nggi versiyasini o‘rnatish va uni qanday ishlatishni bosqichma-bosqich ko‘rib chiqamiz.

### 1. Redux Toolkit va React-Redux’ni o‘rnatish

Dastlab, Redux Toolkit va React-Redux paketlarini o‘rnatishingiz kerak. Buning uchun `npm` yoki `yarn` paket menejerlaridan foydalanishingiz mumkin.

**npm yordamida o‘rnatish:**
```bash
npm install @reduxjs/toolkit react-redux
```

**yarn yordamida o‘rnatish:**
```bash
yarn add @reduxjs/toolkit react-redux
```

Bu buyruqlar sizga Redux Toolkit va React bilan ishlash uchun kerakli paketlarni o‘rnatadi.

### 2. Redux Toolkit bilan do‘kon yaratish

Keyingi bosqichda, biz `configureStore` funksiyasi yordamida Redux do‘konini yaratamiz. Bu funktsiya Redux Toolkit’da standart bo‘lib, Redux do‘konini yaratishni osonlashtiradi.

**`store.js` faylida:**
```js
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';

const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export default store;
```

Bu yerda biz `configureStore` orqali do‘kon yaratmoqdamiz va `counterSlice`ni reducer sifatida qo‘shyapmiz. Redux Toolkit avtomatik ravishda zarur middleware'larni va Redux DevTools'ni o‘z ichiga oladi.

### 3. Slice yaratish

Redux Toolkit’da `createSlice` yordamida bir joyda reducer va action'larni yaratish mumkin. Misol tariqasida oddiy counter slice yaratamiz.

**`counterSlice.js` faylida:**
```js
import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: { value: 0 },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export default counterSlice.reducer;
```

Bu yerda `counterSlice` nomli slice yaratib, boshlang‘ich holat (`initialState`) va uchta action (`increment`, `decrement`, `incrementByAmount`) ni aniqlaymiz. Redux Toolkit `immer` kutubxonasidan foydalanib, holatni o‘zgaruvchan holatda boshqaradi.

### 4. Redux do‘konini React ilovasiga bog‘lash

React ilovangizda Redux bilan ishlash uchun `Provider` komponentidan foydalanib, do‘konni barcha komponentlarga taqdim etishingiz kerak.

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

Bu yerda `Provider` Redux do‘konini React ilovasiga taqdim etadi va siz butun ilovada storedagi holat bilan ishlashingiz mumkin bo‘ladi.

### 5. React komponentida Redux Toolkit bilan ishlash

Endi React komponentida Redux Toolkit yordamida holatni boshqarishni ko‘ramiz. `useSelector` va `useDispatch` hooklaridan foydalanib, holatni olish va action’larni yuborish mumkin.

**`Counter.js` faylida:**
```js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, incrementByAmount } from './counterSlice';

function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(incrementByAmount(5))}>
        Increment by 5
      </button>
    </div>
  );
}

export default Counter;
```

Bu yerda:
- **`useSelector`**: Redux do‘konidan `counter` qiymatini olish uchun ishlatiladi.
- **`useDispatch`**: `increment`, `decrement` va `incrementByAmount` action'larini yuborish uchun ishlatiladi.

### 6. Asinxron ishlar (createAsyncThunk)

Agar siz API chaqiruvlari kabi asinxron ishlarga ehtiyoj sezsangiz, Redux Toolkit’da `createAsyncThunk` funksiyasi mavjud. Bu funksiyani asinxron `action` yaratish va boshqarish uchun ishlatishingiz mumkin.

Misol uchun, foydalanuvchi ma'lumotlarini API orqali olish uchun `createAsyncThunk`dan foydalanamiz:

**`userSlice.js` faylida:**
```js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchUserById = createAsyncThunk(
  'users/fetchById',
  async (userId) => {
    const response = await fetch(`/api/user/${userId}`);
    return response.json();
  }
);

const userSlice = createSlice({
  name: 'users',
  initialState: { user: null, status: 'idle' },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserById.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchUserById.fulfilled, (state, action) => {
        state.user = action.payload;
        state.status = 'succeeded';
      })
      .addCase(fetchUserById.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export default userSlice.reducer;
```

Bu yerda:
- **`fetchUserById`**: Foydalanuvchini asinxron tarzda yuklaydigan thunk funksiyasi.
- **`pending`, `fulfilled`, `rejected`**: Asinxron jarayonlarning holatlari avtomatik boshqariladi.

### Yakuniy natija

Redux Toolkit yordamida React ilovasida holatni boshqarish juda oson. Toolkit Redux’ning murakkab qismlarini avtomatlashtiradi, kamroq kod yozishni talab qiladi va TypeScript bilan yaxshi integratsiya qilinadi.
Keyingi postlarda batafsil tanishamiz.