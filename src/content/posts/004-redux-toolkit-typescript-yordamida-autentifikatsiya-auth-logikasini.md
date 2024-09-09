---
title: "004. Redux Toolkit  (TypeScript) yordamida autentifikatsiya (auth)
  logikasini "
audioUrl: https://us-tuna-sounds-files.voicemod.net/19df8e9b-140c-4f43-8c0e-09c162821765-1658350707858.mp3
pubDate: 09 Sep 2024 10:09:27
duration: 0:00:00
size: 0
cover: https://www.khodieff.uz/2024-09-08-06.09.28.jpg
explicit: true
episode: 3
season: 1
postType: full
---
Redux Toolkit va TypeScript yordamida autentifikatsiya (auth) logikasini yozish uchun `createSlice` va `createAsyncThunk` dan foydalanib, asinxron autentifikatsiya so‘rovlarini boshqaramiz. Bunda `login`, `logout`, va `register` kabi funksiyalarni yaratamiz.

Quyida bosqichma-bosqich TypeScript bilan autentifikatsiya uchun qanday qilib Redux logikasini yozishni ko‘rib chiqamiz.

### 1. Boshlang‘ich loyihani tayyorlash

Avval kerakli kutubxonalarni o‘rnatamiz:

```bash
npm install @reduxjs/toolkit react-redux
```

### 2. `authSlice.ts` fayli

Autentifikatsiya logikasi uchun `authSlice.ts` faylida holatni boshqarish uchun slice yaratamiz.

#### 2.1. Boshlang‘ich holatni yaratish

Boshlang‘ich holatimizda foydalanuvchi ma'lumotlari, yuklanish holati, va xato ma'lumotlari bo‘ladi.

```ts
// authSlice.ts

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Foydalanuvchi ma'lumotlarini tiplash
interface User {
  id: string;
  username: string;
  email: string;
  token: string;
}

// Auth holatini tiplash
interface AuthState {
  user: User | null;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

// Boshlang‘ich holat
const initialState: AuthState = {
  user: null,
  status: 'idle',
  error: null,
};
```

#### 2.2. Asinxron Thunk’lar yaratish

Bu yerda `login`, `register`, va `logout` thunk'larini yaratamiz. Har biri API'ga asinxron so‘rov yuboradi va javobiga qarab Redux holatini yangilaydi.

```ts
// Asinxron login thunk
export const login = createAsyncThunk<User, { username: string; password: string }>(
  'auth/login',
  async ({ username, password }, { rejectWithValue }) => {
    try {
      const response = await fetch('https://example.com/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        throw new Error('Login failed');
      }

      const data = await response.json();
      return data as User; // Foydalanuvchi ma'lumotlari qaytariladi
    } catch (err: any) {
      return rejectWithValue(err.message);
    }
  }
);

// Asinxron register thunk
export const register = createAsyncThunk<User, { username: string; email: string; password: string }>(
  'auth/register',
  async ({ username, email, password }, { rejectWithValue }) => {
    try {
      const response = await fetch('https://example.com/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, email, password }),
      });

      if (!response.ok) {
        throw new Error('Registration failed');
      }

      const data = await response.json();
      return data as User;
    } catch (err: any) {
      return rejectWithValue(err.message);
    }
  }
);

// Logout thunk (bu faqat lokal holatni yangilaydi)
export const logout = createAsyncThunk('auth/logout', async () => {
  return null; // Logoutda faqat foydalanuvchini bo‘shatamiz
});
```

#### 2.3. Slice yaratish

`createSlice` yordamida reducer'larni va thunk'larni boshqaradigan slice yaratamiz.

```ts
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Login thunk
    builder.addCase(login.pending, (state) => {
      state.status = 'loading';
      state.error = null;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.status = 'succeeded';
      state.user = action.payload;
      state.error = null;
    });
    builder.addCase(login.rejected, (state, action) => {
      state.status = 'failed';
      state.error = action.payload as string;
    });

    // Register thunk
    builder.addCase(register.pending, (state) => {
      state.status = 'loading';
      state.error = null;
    });
    builder.addCase(register.fulfilled, (state, action) => {
      state.status = 'succeeded';
      state.user = action.payload;
      state.error = null;
    });
    builder.addCase(register.rejected, (state, action) => {
      state.status = 'failed';
      state.error = action.payload as string;
    });

    // Logout thunk
    builder.addCase(logout.fulfilled, (state) => {
      state.user = null;
      state.status = 'idle';
    });
  },
});

export default authSlice.reducer;
```

### 3. Redux storeni sozlash

Endi `authSlice` ni Redux storeiga qo‘shishimiz kerak:

**`store.ts` fayli:**

```ts
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

// RootState va AppDispatch tiplari
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
```

### 4. React komponentida autentifikatsiya logikasidan foydalanish

Autentifikatsiya logikasini React komponentida ishlatish uchun `useSelector` va `useDispatch` hook'laridan foydalanamiz.

**`Auth.tsx` fayli:**

```tsx
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { login, logout, register } from './authSlice';
import { RootState, AppDispatch } from './store';

const Auth: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const authState = useSelector((state: RootState) => state.auth);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const handleLogin = () => {
    dispatch(login({ username, password }));
  };

  const handleRegister = () => {
    dispatch(register({ username, email, password }));
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div>
      <h1>Auth</h1>
      {authState.status === 'loading' && <p>Loading...</p>}
      {authState.error && <p>Error: {authState.error}</p>}

      {!authState.user ? (
        <div>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email (for register)"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button onClick={handleLogin}>Login</button>
          <button onClick={handleRegister}>Register</button>
        </div>
      ) : (
        <div>
          <h2>Welcome, {authState.user.username}</h2>
          <button onClick={handleLogout}>Logout</button>
        </div>
      )}
    </div>
  );
};

export default Auth;
```

### Xulosa

- `login`, `register`, va `logout` thunk'lar yaratildi, ular foydalanuvchi ma'lumotlarini boshqaradi.
- Redux Toolkit yordamida holatni boshqarish soddalashdi.
- TypeScript yordamida barcha action'lar va holatlar tiplanib, kod xavfsizligi ta’minlandi.

Mana shu yo‘nalish bo‘yicha loyihangiz uchun autentifikatsiya logikasini amalga oshirishingiz mumkin.

