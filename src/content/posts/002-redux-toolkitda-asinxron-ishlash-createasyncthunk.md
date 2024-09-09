---
title: 002. Redux Toolkitda asinxron ishlash (createAsyncThunk)
audioUrl: https://us-tuna-sounds-files.voicemod.net/19df8e9b-140c-4f43-8c0e-09c162821765-1658350707858.mp3
pubDate: 09 Sep 2024 09:09:94
duration: 0:00:00
size: 0
cover: https://www.khodieff.uz/2024-09-08-06.09.28.jpg
explicit: true
episode: 3
season: 9
postType: full
---
Redux Toolkit'dagi asinxron ishlashi uchun `createAsyncThunk` funksiyasidan foydalanamiz. Bu funksiya API chaqiruvlari yoki boshqa asinxron vazifalarni boshqarish uchun juda qulay. Quyida bosqichma-bosqich asinxron thunk yaratish va undan foydalanishni ko‘rib chiqamiz.

![khodieff.uz](https://miro.medium.com/v2/resize:fit:1358/1*AyYYoeDMTTK_7J7aCeaIUA.gif "khodieff.uz")

### 1. Asinxron ishlash uchun `createAsyncThunk` ni ishlatish

`createAsyncThunk` funksiyasi asinxron ishlarni boshqarish uchun mo‘ljallangan. U ikki parametrni oladi:

1. **Thunk nomi** (bu `slice`ning nomiga asoslanadi).
2. **Asinxron funksiyaning o‘zi** (bu yerda biz API chaqiruvini amalga oshiramiz).

Misol uchun, biz foydalanuvchilar ma'lumotini API orqali yuklaydigan thunk yaratamiz.

**`userSlice.js` faylida:**

```js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// 1. Asinxron thunk yaratish
export const fetchUserById = createAsyncThunk(
  'users/fetchById',
  async (userId) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
    return response.json();
  }
);

// 2. Slice yaratish
const userSlice = createSlice({
  name: 'users',
  initialState: {
    user: null,
    status: 'idle', // idle, loading, succeeded, failed
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    // pending holatida
    builder.addCase(fetchUserById.pending, (state) => {
      state.status = 'loading';
    });
    // muvaffaqiyatli holatda
    builder.addCase(fetchUserById.fulfilled, (state, action) => {
      state.status = 'succeeded';
      state.user = action.payload;
    });
    // xato holatida
    builder.addCase(fetchUserById.rejected, (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    });
  }
});

export default userSlice.reducer;
```

Yuqoridagi kodda biz `fetchUserById` nomli thunk funksiyasini yaratdik. Bu funksiya `userId` parametri bilan API'ga so‘rov yuboradi va javobni qaytaradi.

* **pending**: So‘rov yuborilganida holatni `loading` holatiga o‘zgartiramiz.
* **fulfilled**: So‘rov muvaffaqiyatli bajarilganda `succeeded` holatini va foydalanuvchi ma'lumotlarini saqlaymiz.
* **rejected**: Xatolik yuz berganda esa `failed` holatini o‘rnatamiz va xatoni saqlaymiz.

### 2. Redux storeni sozlash

Redux do‘konida `userSlice`ni qo‘shishimiz kerak:

**`store.js` faylida:**

```js
import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';

const store = configureStore({
  reducer: {
    users: userReducer,
  },
});

export default store;
```

Bu yerda biz `userReducer`ni storemizga qo‘shib, Redux storeni sozlayapmiz.

### 3. Thunk’ni React komponentida ishlatish

Endi foydalanuvchi ma'lumotlarini yuklash va ekranga chiqarish uchun `fetchUserById` thunk’ni React komponentida ishlatamiz.

**`User.js` faylida:**

```js
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUserById } from './userSlice';

function User({ userId }) {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.users.user);
  const status = useSelector((state) => state.users.status);
  const error = useSelector((state) => state.users.error);

  // 1. Komponent yuklanganida thunk’ni chaqirish
  useEffect(() => {
    dispatch(fetchUserById(userId));
  }, [dispatch, userId]);

  // 2. Holatga qarab komponentni render qilish
  if (status === 'loading') {
    return <p>Loading...</p>;
  }

  if (status === 'failed') {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      {status === 'succeeded' && user && (
        <div>
          <h2>{user.name}</h2>
          <p>{user.email}</p>
        </div>
      )}
    </div>
  );
}

export default User;
```

Bu yerda:

* `useEffect` hook'idan foydalanib, komponent yuklanganda `dispatch(fetchUserById(userId))` chaqiramiz.
* `useSelector` yordamida Redux do‘konidan foydalanuvchi ma'lumotlari, yuklanish holati (`status`) va xatolik (`error`)ni olamiz.
* Holatga qarab, foydalanuvchi ma'lumotlari yuklanayotgan bo‘lsa `Loading...`, muvaffaqiyatli yuklangan bo‘lsa foydalanuvchi ma'lumotlarini, xato bo‘lsa esa xatolikni chiqaramiz.

### 4. Asinxron ishlar bilan ishlash natijasi

1. Foydalanuvchi komponent yuklanganda `fetchUserById` chaqiriladi.
2. So‘rov `pending` bo‘lib, Redux storeidagi holat `loading`ga o‘zgartiriladi.
3. So‘rov muvaffaqiyatli bo‘lsa, `fulfilled` holatga o‘tiladi va ma'lumotlar Redux do‘koniga saqlanadi.
4. Xato bo‘lsa, `rejected` holatga o‘tiladi va xato haqida xabar chiqariladi.

Mana shunday qilib, Redux Toolkit’dagi `createAsyncThunk` yordamida API chaqiruvlarini va boshqa asinxron ishlarni qulay boshqarish mumkin ekan.