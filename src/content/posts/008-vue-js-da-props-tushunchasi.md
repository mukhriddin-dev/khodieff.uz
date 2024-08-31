---
title: 008. Vue.js da Props tushunchasi
audioUrl: https://us-tuna-sounds-files.voicemod.net/19df8e9b-140c-4f43-8c0e-09c162821765-1658350707858.mp3
pubDate: 31 Aug 2024 12:08:07
duration: 0:00:00
size: 0
cover: https://www.khodieff.uz/react.js.png
explicit: true
episode: 8
season: 3
postType: full
---
![khodieff.uz](https://media.dev.to/cdn-cgi/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F8by4qq35333qz05x5cfz.jpg "khodieff.uz | vue.js")

**Assalamu alaykum !**  `Props` - Vue.js ning eng kerakli qismilaridan biri bo'lib, komponentlar aro ma'lumotni almashinish imkonini beradi. `props`-larni ishlatish `setup` funksiyasi ichida amalga oshiriladi. Quyida `props`-larni `<script setup>`  bilan qanday ishlash haqida batafsil ko'rishimiz mumkin:



![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/dnrgz4ujxvv1zovryt4n.png)





1. **Props-larni aniqlash**:
   **Vue.js** da `props`-larni aniqlash uchun `defineProps` funksiyasidan foydalaniladi. `defineProps` obyekti `props`-larning turlarini va xususiyatlarini  belgilash uchun ishlatiladi.

```vue
<template>
  <div>
    <h1>{{ title }}</h1>
    <p>{{ message }}</p>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'

// Props-larni aniqlash
const props = defineProps({
  title: {
    type: String,
    required: true
  },
  message: {
    type: String,
    default: 'Default message'
  }
})
</script>
```

Bu yerda `props` obyekti `title` va `message` prop-larini aniqlaydi. `title` prop turi `String` va majburiy (`required: true`), `message` esa `String` turi va `default` qiymatga ega (`Default message`).

2. **Props-larni ishlatish**:
   `defineProps` funksiyasi orqali aniqlangan `props`-larni bevosita `<template>` ichida yoki `<script setup>` ichida ishlatish mumkin.

```vue
<template>
  <div>
    <h1>{{ title }}</h1>
    <p>{{ message }}</p>
  </div>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true
  },
  message: {
    type: String,
    default: 'Default message'
  }
})

// Props-larni ishlatish
console.log(props.title)
console.log(props.message)
</script>
```

3. **Prop-larni type va validation**:
   `defineProps` yordamida prop-lar turlarini va validatsiyasini belgilash mumkin. Vue 3 validatsiya uchun typelar berishimiz mumkin, masalan `String`, `Number`, `Boolean`, `Array`, `Object` ...

```vue
<script setup>
const props = defineProps({
  id: {
    type: Number,
    required: true
  },
  user: {
    type: Object,
    default: () => ({ name: 'Johon', age: 30 })
  }
})
</script>
```

Yuqoridagi misolda `id` prop `Number` turi va majburiy, `user` prop esa `Object` turi va `default` qiymatga ega bo'ladi.

`default` qiymat Vue 3 da props-lar uchun oldindan belgilangan qiymatlarni aniqlash imkonini beradi. Agar props komponentga yuborilmasa, Vue default qiymatni ishlatadi. Bu ancha qulay chunki bu komponentni ishlatishni soddalashtiradi va xavfsizoq bo'aldi.

Keyingi maqolada Vue3 da `emit` haiqda gaplashamiz.

Bizni tarmoqlarda kuzatishingiz mumkin va maqola foydali bo'lsa izoh va Vuechi do'stlaringizga ulashing. 🫡

🔗 https://t.me/mukhriddinweb

🔗 https://medium.com/@mukhriddinweb

🔗 https://dev.to/mukhriddinweb

🔗 https://khodieff.uz

🔗 https://github.com/mukhriddin-dev

🔗 https://linkedin.com/in/mukhriddin-khodiev

🔗 https://youtube.com/@mukhriddinweb

