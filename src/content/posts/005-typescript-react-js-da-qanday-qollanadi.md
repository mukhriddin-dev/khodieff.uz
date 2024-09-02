---
title: 005. TypeScript React.js da qanday qo'llanadi ?
audioUrl: ss
pubDate: 03 Sep 2024 00:09:38
duration: 0:00:00
size: 0
cover: https://telegra.ph/file/05887b99972b14cb88fa3.jpg
explicit: true
episode: 5
season: 9
postType: full
---
TypeScriptni React bilan birgalikda ishlatish dastur kodini yanada xavfsiz va aniq qiladi, chunki TypeScriptning kuchli tiplash (static typing) imkoniyatlari bilan React komponentlarining strukturasini, xususiyatlarini va holatini oldindan belgilab olish mumkin. Quyida TypeScriptni Reactda qanday ishlatish va uning asosiy aspektlari haqida batafsil tanishamiz.



![react.js](https://miro.medium.com/v2/resize:fit:800/0*CBjisl422hUyLxiG.png "react.js")

### 1. Yangi React TypeScript loyihasini yaratish

TypeScript bilan React loyihasini yaratish uchun `create-react-app` vositasidan foydalanishingiz mumkin:

```bash
npx create-react-app my-app --template typescript
```

Bu buyruq TypeScript asosida yangi React loyihasini yaratadi va kerakli barcha TypeScript konfiguratsiyalarini (masalan, `tsconfig.json` fayli) o'rnatadi.

### 2. React komponentlarini yozish

Reactda komponentlar odatda funksiya yoki klass sifatida yaratiladi. TypeScriptda komponentlarning `props`larini (xususiyatlarini) va `state` (holat) turlarini belgilash muhim.

#### 2.1. Funksional komponentlar

Funksional komponentlar TypeScriptda juda oddiy va keng tarqalgan usul hisoblanadi. `props`lar uchun interfeys yaratish orqali ularning turlarini aniq belgilash mumkin:

```typescript
import React from "react";

// Props uchun interfeys yaratish
interface GreetingProps {
  name: string;
  age?: number; // Majburiy emas (optional) bo'lgan props
}

// Funksional komponentni yaratish
const Greeting: React.FC<GreetingProps> = ({ name, age }) => {
  return (
    <div>
      <h1>Hello, {name}!</h1>
      {age && <p>You are {age} years old.</p>}
    </div>
  );
};

export default Greeting;
```

Bu yerda `GreetingProps` interfeysi `name` va `age` xususiyatlari uchun turlarni belgilaydi. `React.FC<GreetingProps>` yozuvi funksional komponentni `props`lar bilan tiplash uchun ishlatiladi.

#### 2.2. Klass komponentlari

Klass komponentlarida ham `props`lar va `state` turlarini belgilash mumkin:

```typescript
import React, { Component } from "react";

// Props va State uchun interfeys yaratish
interface CounterProps {
  initialCount?: number;
}

interface CounterState {
  count: number;
}

class Counter extends Component<CounterProps, CounterState> {
  constructor(props: CounterProps) {
    super(props);
    this.state = {
      count: props.initialCount || 0,
    };
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

export default Counter;
```

Bu misolda `CounterProps` interfeysi `props`lar uchun, `CounterState` interfeysi esa `state` uchun turlarni belgilaydi. Klass `Component<CounterProps, CounterState>` shaklida tiplangan.

### 3. Xooklar bilan ishlash

React xooklari TypeScript bilan ishlatilganda ham juda qulay. Ayniqsa, `useState`, `useEffect` kabi xooklarda turlarni belgilash orqali xatolarni oldini olish mumkin.

#### 3.1. `useState` bilan ishlash

`useState` xookini TypeScriptda ishlatishda dastlabki qiymat turiga asoslanib `state`ning turi avtomatik ravishda aniqlanadi. Biroq, agar `state`ning turi aniq bo'lishini xohlasangiz, uni ko'rsatishingiz mumkin:

```typescript
import React, { useState } from "react";

const Counter: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default Counter;
```

Bu misolda `useState<number>` bilan `count`ning turi aniq belgilangan.

#### 3.2. `useEffect` bilan ishlash

`useEffect` xookida asinxron operatsiyalar yoki komponentning ma'lum holatiga qarab ishlovchi kod yoziladi:

```typescript
import React, { useState, useEffect } from "react";

const DataFetcher: React.FC = () => {
  const [data, setData] = useState<string[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://api.example.com/data");
      const result = await response.json();
      setData(result);
    };

    fetchData();
  }, []);

  return (
    <ul>
      {data.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
};

export default DataFetcher;
```

Bu misolda `useState<string[]>` yordamida `data`ning turi belgilangan, `useEffect` esa komponent yuklanganida ma'lumotlarni yuklaydi.

### 4. Interfeyslar va Turlar

TypeScriptda interfeyslar va turlar (`interface` va `type`) yordamida komponentlar orasidagi ma'lumotlarni aniq belgilash mumkin. Bu Reactdagi komponentlar o'rtasidagi ma'lumotlar almashinuvini xavfsiz qiladi.

#### 4.1. Interfeyslar

Interfeyslar React komponentlari uchun `props` yoki `state`ning tuzilishini aniqlash uchun ishlatiladi:

```typescript
interface User {
  id: number;
  name: string;
  email: string;
}

const UserProfile: React.FC<{ user: User }> = ({ user }) => {
  return (
    <div>
      <h2>{user.name}</h2>
      <p>{user.email}</p>
    </div>
  );
};
```

Bu yerda `User` interfeysi foydalanuvchi ma'lumotlari qanday bo'lishi kerakligini aniqlaydi va bu tur `UserProfile` komponentiga `props` sifatida qo'llaniladi.

#### 4.2. Turlar

`type` kalit so'zi ham turlarni aniqlashda ishlatiladi va interfeyslarga o'xshash funksiyaga ega. Misol uchun:

```typescript
type User = {
  id: number;
  name: string;
  email: string;
};

type UserProfileProps = {
  user: User;
};

const UserProfile: React.FC<UserProfileProps> = ({ user }) => {
  return (
    <div>
      <h2>{user.name}</h2>
      <p>{user.email}</p>
    </div>
  );
};
```

Bu misolda `User` turi va `UserProfileProps` turi aniqlangan va ular komponent uchun `props` sifatida ishlatilgan.

### 5. React Context va TypeScript

React Context API TypeScript bilan birgalikda ishlatilganda turlarning aniqligini saqlashga yordam beradi. Quyida `Context` API TypeScript bilan qanday ishlatilishi haqida misol keltirilgan:

```typescript
import React, { createContext, useContext, useState } from "react";

// Kontekst uchun interfeys yaratish
interface AuthContextType {
  user: string | null;
  login: (user: string) => void;
  logout: () => void;
}

// Dastlabki qiymatni aniqlash
const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<string | null>(null);

  const login = (user: string) => setUser(user);
  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Context hooki
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
```

Bu misolda `AuthContextType` interfeysi `AuthContext`ning strukturasi qanday bo'lishini aniqlaydi. `useAuth` custom hooki `AuthContext`ni ishlatadi va `context` mavjud bo'lmagan holatlarda xatoni tashlaydi.

### 6. TypeScriptdagi Refs bilan ishlash

Reactda `ref`lar yordamida DOM elementlariga yoki komponentlarga to'g'ridan-to'g'ri murojaat qilish mumkin. TypeScriptda `ref`lar bilan ishlash uchun `useRef` xookida kerakli tur aniqlanishi kerak.

```typescript
import React, { useRef } from "react";

const TextInputWithFocusButton: React.FC = () => {
  const inputEl = useRef<HTMLInputElement>(null);

  const onButtonClick = () => {
    if (inputEl.current) {
      inputEl.current.focus();
    }
  };

  return (


    <>
      <input ref={inputEl} type="text" />
      <button onClick={onButtonClick}>Focus the input</button>
    </>
  );
};

export default TextInputWithFocusButton;
```

Bu misolda `useRef<HTMLInputElement>` yordamida `inputEl` refi tipi aniq belgilangan, bu orqali TypeScript sizga ref bilan ishlaganda xatolardan saqlanishga yordam beradi.

### Demak:

TypeScriptni React bilan ishlatish komponentlar, `props`, `state`, xooklar, va kontekst bilan aniq va xavfsiz ishlash imkonini beradi. Bu nafaqat kodni tartibli qiladi, balki xatolarni oldini olishda ham kotta yordam beradi. 

Bizni tarmoqlarda kuzatishingiz mumkin va maqola foydali bo’lsa do’stlaringizga ham ulashing. 🫡

🔗 <https://t.me/mukhriddinweb>

🔗 <https://medium.com/@mukhriddinweb>

🔗 <https://dev.to/mukhriddinweb>

🔗 [https://khodieff.uz](https://khodieff.uz/)

🔗 <https://github.com/mukhriddin-dev>

🔗 <https://linkedin.com/in/mukhriddin-khodiev>

🔗 <https://youtube.com/@mukhriddinweb>