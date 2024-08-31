---
title: 004. Vue.js da reaktivlik (reactivity)
audioUrl: https://us-tuna-sounds-files.voicemod.net/19df8e9b-140c-4f43-8c0e-09c162821765-1658350707858.mp3
pubDate: 31 Aug 2024 12:08:62
duration: 0:00:00
size: 0
cover: https://www.khodieff.uz/react.js.png
explicit: true
episode: 4
season: 3
postType: full
---
**Vue3** da reaktivlik (reactivity) asosiy qismlardan biri hisoblanadi, bu dastur yoki saytimizning  dinamikligini va interaktivligini ta’minlash uchun ishlatiladi. Vue3 da reaktivlik Vue'ning Composition API (versiyasi) orqali amalga oshiriladi. Bu **"Composition API"** (v3) Vue 2 dagi **"Options API"** bilan solishtirganda ancha  tartibli ishlash va qulaylikni beradi.


![khodieff.uz](https://media.dev.to/cdn-cgi/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F1qhvsohahwhl7dym0478.jpg "khodieff.uz")

### Vue3 da reaktivlikning asosiy tushunchalari

1. **reactive**:

   * `reactive` funksiyasi obyektlarni reaktiv holatga keltiradi. Bu shuni anglatadiki, obyektning har qanday o‘zgarishi avtomatik ravishda interfeysni yangilaydi.

   ```javascript
   import { reactive } from 'vue';

   const state = reactive({
     count: 0
   });

   function increment() {
     state.count++;
   }
   ```
2. **ref**:

   * `ref` funksiyasi oddiy qiymatlarni reaktiv holatga keltiradi. Bu oddiy statik saqlangan qiymatlarni, masalan, number yoki string array kabi datalarni reaktiv qilish uchun ishlatiladi.

   ```javascript
   import { ref } from 'vue';

   const count = ref(0);

   function increment() {
     count.value++;
   }
   ```
3. **computed**:

   * `computed` funksiya qaytaradigan qiymatlar uchun ishlatiladi. Ular boshqa reaktiv qiymatlarga bog‘liq bo‘lib, bog‘liq qiymatlar o‘zgarganda avtomatik ravishda qayta "render"lanadi.

   ```javascript
   import { computed, ref } from 'vue';

   const count = ref(0);
   const double = computed(() => count.value * 2);
   ```
4. **watch**:

   * `watch` funksiyasi reaktiv qiymatlar o‘zgarishlarini kuzatish uchun ishlatiladi. Bu biror o‘zgarish sodir bo‘lganda o'zgarishni "handle" qilishga  yordam beradi.

   ```javascript
   import { watch, ref } from 'vue';

   const count = ref(0);

   watch(count, (newValue, oldValue) => {
     console.log(`Count changed from ${oldValue} to ${newValue}`);
   });
   ```

### Vue3 da reaktivlikning afzalliklari nimada ?

* **Optimallik va samaradorlik**: Vue 3 da reaktivlik tizimi asosan Proxy asosida amalga oshirilgan bo‘lib, u Vue 2 dagi Object.defineProperty asosidagi yondashuvdan ko‘ra samarali hisoblanadi.
* **Moslashuvchanlik (flexibility)** : **Composition API** Vue 3 da muhim bo‘lib, komponentlarning qayta foydalanish darajasini oshiradi va murakkabliklarni kamatiradi.
* **Modulizatsiya**: **Composition API** ko‘p funksionallikni alohida modullarga ajratishga yordam beradi, bu kodni yanada o‘qishli va boshqarish oson bo‘lishiga olib keladi.

Vue3 da reaktivlik tizimi Vue  da loyihalar ishlab chiqishda kuchli va oson desak bo'ladi , interaktiv va dinamik foydalanuvchi interfeyslarini (UI) ni  yaratishda katta yordam beradi.

**Bizni tarmoqlarda kuzatishingiz mumkin va maqola foydali bo'lsa izoh va Vuechi do'stlaringizga ulashing. 🫡**

🔗 https://t.me/mukhriddinweb
🔗 https://medium.com/@mukhriddinweb
🔗 https://dev.to/mukhriddinweb
🔗 https://khodieff.uz
🔗 https://github.com/mukhriddin-dev
🔗 https://linkedin.com/in/mukhriddin-khodiev
🔗 https://youtube.com/@mukhriddinweb