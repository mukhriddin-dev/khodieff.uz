---
title: 006. Vue.js da ( ref va reactive) farqi
audioUrl: https://us-tuna-sounds-files.voicemod.net/19df8e9b-140c-4f43-8c0e-09c162821765-1658350707858.mp3
pubDate: 31 Aug 2024 12:08:62
duration: 0:00:00
size: 0
cover: https://www.khodieff.uz/react.js.png
explicit: true
episode: 6
season: 3
postType: full
---
**Vue.js-da**`ref` va `reactive` hook-larini tanlashda qaysi biri qulayroq ekanligini aniqlashda, ularning farqlarini va qanday holatlarda foydalanishni tushunish kerak . Har ikkala hook ham reaktiv ma'lumotlar yaratish uchun ishlatiladi, lekin ularning ishlash usuli va qo'llanilishi jichcha farq qiladi.

### `ref`

#### Qulayliklari

1. **Oddiy qiymatlar uchun mos**: `ref` asosan primitive turlar (string, number, boolean) uchun qulay. Masalan, `count`, `message` kabi oddiy qiymatlar uchun.

2. **DOM elementlariga murojaat qilish**: `ref` DOM elementlarini saqlash va ularga murojaat qilish uchun ishlatiladi. Masalan, `<div ref="myDiv"></div>`.
3. **Qiymatga kirish oson**: `ref` bilan ishlashda, `.value` orqali qiymatga kirish va uni o'zgartirish mumkin.

#### Misol

```javascript

import { ref } from 'vue';

const count = ref(0);
count.value++; // Qiymatni oshirish

```

### `reactive`

#### Qulayliklari

1. **Murakkab ma'lumot tuzilmalari uchun mos**: `reactive` object yoki array kabi murakkab tuzilmalarga ega bo'lgan ma'lumotlar uchun qulay. U butun ob'ekt yoki massivni reactive (reaktiv) qiladi.
2. **Objectlar bilan ishlash**: `reactive` objectning barcha xususiyatlarini reaktiv qiladi, shuning uchun to'g'ridan-to'g'ri xususiyatlarga kirish va ularni o'zgartirish mumkin.

#### Misol
```javascript
import { reactive } from 'vue';

const state = reactive({
  count: 0,
  name: 'Vue'
});
state.count++; // Qiymatni oshirish
state.name = 'Vue 3'; // Xususiyatni o'zgartirish
```

### `ref` va `reactive` farqlari

1. **Qiymat turi**:
   - `ref` oddiy qiymatlar uchun mos va `.value` orqali ularga kiriladi.
   - `reactive` complex holatga ega object yoki array uchun mos va to'g'ridan-to'g'ri xususiyatlarga kiriladi.

2. **Qo'llanilish holatlari**:
   - `ref` primitive turlar (string, number, boolean) va DOM elementlari uchun ishlatiladi.
   - `reactive` object yoki array kabi murakkab tuzilmalar uchun ishlatiladi.

3. **Reaktivlik**:
   - `ref` faqat bitta qiymatni reaktiv qiladi.
   - `reactive` butun bir object yoki array ni reaktiv qiladi, shu jumladan uning barcha xususiyatlarini.

### Tanlash qachon qulay

- Agar sizda oddiy qiymat bo'lsa yoki DOM elementiga murojaat qilish kerak bo'lsa, `ref` dan foydalaning.
- Agar sizda ko'p xususiyatlarga ega bo'lgan object yoki array bo'lsa, `reactive` dan foydalaning.

### Umumiy misol

Quyida `ref` va `reactive` ni birgalikda qo'llash misoli keltirilgan:

```vue
<template>
  <div>
    <p>Message: {{ message }}</p>
    <p>Todos:</p>
    <ul>
      <li v-for="todo in todos" :key="todo.id">{{ todo.text }}</li>
    </ul>
    <input v-model="newTodoText" placeholder="New todo" />
    <button @click="addTodo">Add Todo</button>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue';

const message = ref('Hello, Vue 3!');
const todos = reactive([
  { id: 1, text: 'Learn Vue 3' },
  { id: 2, text: 'Build something awesome' }
]);
const newTodoText = ref('');

function addTodo() {
  todos.push({ id: todos.length + 1, text: newTodoText.value });
  newTodoText.value = '';
}
</script>
```

Ushbu misol `ref` va `reactive` hook-larini qanday birgalikda ishlatish mumkinligini ko'rsatadi. Tanlov qaysi turdagi ma'lumotlar bilan ishlayotganingizga bog'liq bo'ladi.


![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/zpem5yq3onw85o1bvn6t.png)



**PS: Yuqridagi rasmda nega bunday demoqda , 🤔🤔🫢🫢🙄🙄🙄😩😫😫 , video darsda javob berib o'taman bu haiqda :)**


_Bizni tarmoqlarda kuzatishingiz mumkin va maqola foydali bo'lsa izoh va Vuechi do'stlaringizga ulashing. 🫡_

🔗 https://t.me/mukhriddinweb

🔗 https://medium.com/@mukhriddinweb

🔗 https://dev.to/mukhriddinweb

🔗 https://khodieff.uz

🔗 https://github.com/mukhriddin-dev

🔗 https://linkedin.com/in/mukhriddin-khodiev

🔗 https://youtube.com/@mukhriddinweb