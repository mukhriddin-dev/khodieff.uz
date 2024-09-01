---
title: 008. React.js da props va children tushunchasi (with TS)
audioUrl: https://us-tuna-sounds-files.voicemod.net/19df8e9b-140c-4f43-8c0e-09c162821765-1658350707858.mp3
pubDate: 02 Sep 2024 03:09:78
duration: 0:00:00
size: 0
cover: https://telegra.ph/file/b6f28ce0c92aa07ff20da.jpg
explicit: true
episode: 8
season: 5
postType: full
---


**React.js da `props`** (properties) va **`children`** — bu React-da komponentlar orasida ma'lumotlarni uzatish va UI ni yaratish uchun ishlatiladigan asosiy tushunchalardir. Quyida har ikkala tushunchaning qanday ishlashini va JavaScript va TypeScript-da misollarni ko'rib chiqamiz.

---

### 1. **`props` (Properties)**

**`props`** — bu komponentga tashqaridan ma'lumotlarni uzatish uchun ishlatiladigan obyekt. Komponentlar uchun parametrlar kabi ishlaydi.

#### 1.1 **JavaScript-da Misol**

**`src/Child.js`**:
```jsx
import React from 'react';

// Props orqali ma'lumotlarni qabul qiladigan komponent
function Child(props) {
  return (
    <div>
      <h1>Hello, {props.name}!</h1>
      <p>Age: {props.age}</p>
    </div>
  );
}

export default Child;
```

**`src/App.js`**:
```jsx
import React from 'react';
import Child from './Child';

// Child komponentiga props uzatadigan asosiy komponent
function App() {
  return (
    <div>
      <Child name="Alice" age={30} />
      <Child name="Bob" age={25} />
    </div>
  );
}

export default App;
```

- **`props`**: `Child` komponentiga `name` va `age` sifatida uzatiladi.
- **`{props.name}` va `{props.age}`**: `Child` komponentida `props` orqali uzatilgan qiymatlarni ko‘rsatadi.

#### 1.2 **TypeScript-da Misol**

**`src/Child.tsx`**:
```tsx
import React from 'react';

// Props uchun TypeScript interfeysi
interface ChildProps {
  name: string;
  age: number;
}

// TypeScript yordamida props ishlatadigan komponent
const Child: React.FC<ChildProps> = (props) => {
  return (
    <div>
      <h1>Hello, {props.name}!</h1>
      <p>Age: {props.age}</p>
    </div>
  );
}

export default Child;
```

**`src/App.tsx`**:
```tsx
import React from 'react';
import Child from './Child';

// TypeScript yordamida props uzatadigan asosiy komponent
const App: React.FC = () => {
  return (
    <div>
      <Child name="Alice" age={30} />
      <Child name="Bob" age={25} />
    </div>
  );
}

export default App;
```

- **`interface ChildProps`**: `props` turlarini belgilaydi, `name` va `age` atributlari uchun.
- **`React.FC<ChildProps>`**: `Child` komponenti uchun props turlarini aniqlaydi.

---

### 2. **`children`**

**`children`** — bu maxsus `props` bo‘lib, komponentlarga ichki elementlarni uzatish imkonini beradi. Boshqa komponentlar yoki JSX elementlari `children` orqali uzatiladi.

#### 2.1 **JavaScript-da Misol**

**`src/Container.js`**:
```jsx
import React from 'react';

// Container komponenti, children prop'ini qabul qiladi
function Container(props) {
  return (
    <div className="container">
      {props.children}
    </div>
  );
}

export default Container;
```

**`src/App.js`**:
```jsx
import React from 'react';
import Container from './Container';

// Container komponentiga children uzatadigan asosiy komponent
function App() {
  return (
    <Container>
      <h1>Hello from inside the container!</h1>
      <p>This content is passed as children.</p>
    </Container>
  );
}

export default App;
```

- **`props.children`**: `Container` komponentida uzatilgan ichki elementlarni ko‘rsatadi.
- **`<Container> ... </Container>`**: `Container` komponentiga ichki JSX elementlarini uzatadi.

#### 2.2 **TypeScript-da Misol**

**`src/Container.tsx`**:
```tsx
import React from 'react';

// Children uchun TypeScript interfeysi
interface ContainerProps {
  children: React.ReactNode; // Container ichidagi barcha elementlarni qabul qiladi
}

// TypeScript yordamida children ishlatadigan komponent
const Container: React.FC<ContainerProps> = (props) => {
  return (
    <div className="container">
      {props.children}
    </div>
  );
}

export default Container;
```

**`src/App.tsx`**:
```tsx
import React from 'react';
import Container from './Container';

// TypeScript yordamida children uzatadigan asosiy komponent
const App: React.FC = () => {
  return (
    <Container>
      <h1>Hello from inside the container!</h1>
      <p>This content is passed as children.</p>
    </Container>
  );
}

export default App;
```

- **`interface ContainerProps`**: `children` prop uchun TypeScript interfeysi, `React.ReactNode` tipi orqali har qanday React elementlarini qabul qiladi.
- **`React.FC<ContainerProps>`**: `Container` komponenti uchun `children` prop turlarini aniqlaydi.

---

### Xulosa

- **`props`**: Komponentlarga tashqaridan ma'lumotlarni uzatish uchun ishlatiladi. JavaScript va TypeScript-da `props` qiymatlari komponentlarga uzatiladi va o‘qiladi.
- **`children`**: Komponentlarga ichki elementlarni uzatish imkonini beradi. JavaScript va TypeScript-da `children` maxsus prop sifatida ishlatiladi va ichki JSX elementlarni boshqaradi.

Har ikkala tushuncha ham React ilovalarini tashkil etishda va komponentlar orasidagi ma'lumotlarni uzatishda juda muhimdir.


Bizni tarmoqlarda kuzatishingiz mumkin va maqola foydali bo’lsa do’stlaringizga ham ulashing. 🫡

🔗 https://t.me/mukhriddinweb

🔗 https://medium.com/@mukhriddinweb

🔗 https://dev.to/mukhriddinweb

🔗 https://khodieff.uz

🔗 https://github.com/mukhriddin-dev

🔗 https://linkedin.com/in/mukhriddin-khodiev

🔗 https://youtube.com/@mukhriddinweb