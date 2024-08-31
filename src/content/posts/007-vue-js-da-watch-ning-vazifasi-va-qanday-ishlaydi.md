---
title: 007. Vue.js da "watch" ning vazifasi va qanday ishlaydi ?
audioUrl: https://us-tuna-sounds-files.voicemod.net/19df8e9b-140c-4f43-8c0e-09c162821765-1658350707858.mp3
pubDate: 31 Aug 2024 12:08:61
duration: 0:00:00
size: 0
cover: https://www.khodieff.uz/react.js.png
explicit: true
episode: 7
season: 3
postType: full
---
![khodieff.uz](https://media.dev.to/cdn-cgi/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fnbf9xrhg2i4j6j9wqdvk.jpg "vue.js | khodieff.uz")

**Assalamu alaykum !** Vue.js da `watch` funksiyasi qanday ishlaydimva va vazifasi nima? 

watch dan foydalanish juda qulay. `watch` funksiyasi Vue komponentida qaysidir ma'lumot (state) o'zgarishini kuzatib, kerakli vazifalarni bajarish imkonini beradi. Quyida oddiy misol orqali tushuntiraman:

1. **`<template>` qismi:** Bu yerda UI elementlar joylashadi.
2. **`<script setup>` qismi:** Bu yerda komponentning skript qismi joylashadi.

Keling, oddiy bir misolni ko'rib chiqaylik. Bu misolda biz bir input elementiga kiritilgan qiymatni kuzatamiz va har safar qiymat o'zgarganda console'ga log da elon qilamiz:

```html
<template>
  <div>
    <input v-model="name" placeholder="Ismingizni kiriting">
    <p>Ismingiz: {{ name }}</p>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'

// name o'zgaruvchisini e'lon qilamiz
const name = ref('')

// name o'zgaruvchisini kuzatamiz
watch(name, (newValue, oldValue) => {
  console.log(`Ism o'zgardi: ${oldValue} dan ${newValue} ga`)
})
</script>
```

### Asosiy tushunchalar:

1. **`ref` bilan o'zgaruvchi e'lon qilish:**
   `ref` yordamida o'zgaruvchi yaratamiz. Bu o'zgaruvchi reaktsion bo'lib, uning qiymati o'zgarsa, Vue avtomatik ravishda komponentni qayta render qiladi.
   
   ```javascript
   const name = ref('')
   ```

2. **`watch` funksiyasi:**
   `watch` funksiyasi birinchi argument sifatida kuzatiladigan o'zgaruvchini, ikkinchi argument sifatida esa callback funksiyani qabul qiladi. Callback funksiyasining birinchi argumenti yangi qiymat, ikkinchi argumenti esa eski qiymatdir.
   
   ```javascript
   watch(name, (newValue, oldValue) => {
     console.log(`Ism o'zgardi: ${oldValue} dan ${newValue} ga`)
   })
   ```

`watch` funksiyasi yordamida siz har qanday reaktsion o'zgaruvchini (shu jumladan `ref`, `reactive` yoki computed o'zgaruvchilarni) kuzatishingiz mumkin. Bu metod komponentdagi ma'lumotlar o'zgarganda aniq amalni bajarishga imkon beradi.



Bizni tarmoqlarda kuzatishingiz mumkin va maqola foydali bo'lsa izoh va Vuechi do'stlaringizga ulashing. 🫡

🔗 https://t.me/mukhriddinweb

🔗 https://medium.com/@mukhriddinweb

🔗 https://dev.to/mukhriddinweb

🔗 https://khodieff.uz

🔗 https://github.com/mukhriddin-dev

🔗 https://linkedin.com/in/mukhriddin-khodiev

🔗 https://youtube.com/@mukhriddinweb