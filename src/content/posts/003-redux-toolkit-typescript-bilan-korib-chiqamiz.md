---
title: 003. Redux Toolkit (TypeScript) bilan ko'rib chiqamiz
audioUrl: https://us-tuna-sounds-files.voicemod.net/19df8e9b-140c-4f43-8c0e-09c162821765-1658350707858.mp3
pubDate: 09 Sep 2024 09:09:34
duration: 0:00:00
size: 0
cover: https://www.khodieff.uz/2024-09-08-06.09.28.jpg
explicit: true
episode: 3
season: 0
postType: full
---
Redux Toolkit bilan TypeScript’da ishlash juda qulay va TypeScript uchun mukammal integratsiya taqdim etadi. TypeScript yordamida Redux holatini, action'larni va thunk'larni qat'iy tiplash imkonini beradi. Quyida Redux Toolkit bilan TypeScript’da qanday ishlashni bosqichma-bosqich ko'rib chiqamiz.

### 1. Redux Toolkit va TypeScript o‘rnatilishi

Avval Redux Toolkit va React-Redux paketlarini o‘rnatib olishingiz kerak. Agar TypeScript loyihasi bo‘lsa, qo‘shimcha hech narsa o‘rnatish shart emas:

```bash
npm install @reduxjs/toolkit react-redux
```

### 2. TypeScript bilan Slice yaratish

Redux holatini va action'larni TypeScript yordamida qanday qilib tiplashni ko‘rib chiqamiz. Misol tariqasida, oddiy counter slice yaratamiz.

**`counterSlice.ts` faylida:**
```ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// 1. Holatni tiplash
interface CounterState {
  value: number;
}

// 2. Boshlang‘ich holatni tiplash
const initialState: CounterState = {
  value: 0,
};

// 3. Slice yaratish
const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    // PayloadAction yordamida action uchun parametr tiplanadi
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export default counterSlice.reducer;
```

Bu yerda:
- **Holatni tiplash**: Biz `CounterState` interfeysini yaratib, holatni tipladik.
- **PayloadAction**: Redux Toolkit’ning `PayloadAction` tipidan foydalanib, action payload'iga aniq tip berdik (masalan, `number`).

### 3. Redux Do‘koni uchun RootState va AppDispatch yaratish

Redux do‘konini TypeScript yordamida to‘g‘ri tiplash uchun biz `RootState` va `AppDispatch` tiplarini yaratishimiz kerak. Bu tiplar ilovaning do‘konini va dispatch funksiyalarini TypeScript yordamida boshqaradi.

**`store.ts` faylida:**
```ts
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';

// 1. Redux do‘konini yaratish
const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

// 2. RootState va AppDispatch tiplari
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
```

- **RootState**: Bu tip bizning Redux do‘konimizdagi barcha reducer'lar natijasidagi yakuniy holatni ifodalaydi.
- **AppDispatch**: Bu tip Redux’ning dispatch funksiyasini tiplash uchun ishlatiladi.

### 4. React komponentida TypeScript bilan Redux Toolkit’dan foydalanish

Endi React komponentlarida Redux holatini va action'larni TypeScript bilan ishlatamiz. Bunda `useSelector` va `useDispatch` hook'larini to‘g‘ri tiplaymiz.

**`Counter.tsx` faylida:**
```tsx
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, incrementByAmount } from './counterSlice';
import { RootState, AppDispatch } from './store';

// 1. useDispatch’ni tiplash
const useAppDispatch: () => AppDispatch = useDispatch;
// 2. useSelector’ni tiplash
const useAppSelector: (selector: (state: RootState) => any) => any = useSelector;

const Counter: React.FC = () => {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(incrementByAmount(5))}>Increment by 5</button>
    </div>
  );
};

export default Counter;
```

Bu yerda:
- `useAppDispatch`: `useDispatch` hook'ini `AppDispatch` tipi bilan tiplaymiz.
- `useAppSelector`: `useSelector` hook'ini `RootState` dan foydalanib tiplaymiz.

### 5. TypeScript bilan Asinxron Thunk yaratish

Asinxron ishlash uchun `createAsyncThunk` funksiyasidan foydalanamiz. TypeScript yordamida asinxron thunk’larni ham to‘g‘ri tiplashimiz mumkin.

**`userSlice.ts` faylida:**
```ts
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// 1. Foydalanuvchi ma'lumotlarining turi
interface User {
  id: number;
  name: string;
  email: string;
}

// 2. Boshlang‘ich holatning turi
interface UserState {
  user: User | null;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: UserState = {
  user: null,
  status: 'idle',
  error: null,
};

// 3. Asinxron thunk yaratish va tiplash
export const fetchUserById = createAsyncThunk<User, number>(
  'users/fetchById',
  async (userId) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
    return (await response.json()) as User;
  }
);

// 4. Slice yaratish
const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserById.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchUserById.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.user = action.payload;
      })
      .addCase(fetchUserById.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default userSlice.reducer;
```

Bu yerda:
- **`createAsyncThunk<User, number>`**: `User` tipini thunk qaytaradi va `number` tipidagi foydalanuvchi ID'sini parametrlari sifatida oladi.
- **Thunk natijalari**: `fulfilled`, `pending`, va `rejected` holatlari uchun reducer'larni TypeScript bilan to‘g‘ri tipladik.

### Xulosa

Redux Toolkit TypeScript bilan juda yaxshi moslashgan. Quyidagi asosiy tiplashlarni o‘rganish kerak:
1. **Holatni tiplash** (interface).
2. **Action payload’larini tiplash** (`PayloadAction`).
3. **RootState va AppDispatch tiplari**.
4. **Thunk tiplari** (`createAsyncThunk` yordamida). 

Bu yondashuv loyihangizdagi Redux holat boshqaruvini TypeScript bilan xavfsiz va aniq qiladi. 