---
title: 003. Vue.js  "script setup" Sintaksisi
audioUrl: https://us-tuna-sounds-files.voicemod.net/19df8e9b-140c-4f43-8c0e-09c162821765-1658350707858.mp3
pubDate: 31 Aug 2024 12:08:16
duration: 0:00:00
size: 0
cover: https://www.khodieff.uz/react.js.png
explicit: true
episode: 3
season: 3
postType: full
---
Vue.js-da `script setup` sintaksisi Vue 3.2 versiyasidan boshlab qo'shilgan yangi sintaksis variantidir va `Composition API`-ni ishlatishni juda osonlashtiradi. Bu sintaksis yordamida siz Vue komponentlarini yozish uchun ancha qisqa va tushunarli kod yozishingiz mumkin. Mana asosiy nuqtalari:

### `script setup` Sintaksisi

1. **Asosiy Struktur**:
   ```vue
   <template>
     <!-- Shablon  HTML kodi -->
   </template>

   <script setup>
   // Bu yerda Composition API kodlarini yozasiz
   </script>

   <style>
     /* Stil kodi */
   </style>
   ```

2. **O'zgaruvchilar va Funksiyalar**:
   - `script setup` blokida siz to'g'ridan-to'g'ri o'zgaruvchilar va funksiyalarni aniqlashingiz mumkin va ular avtomatik ravishda shablon bilan bog'lanadi.
   - Misol:
     ```vue
     <template>
       <p>{{ message }}</p>
     </template>

     <script setup>
     import { ref } from 'vue';

     const message = ref('Salom, dunyo!');
     </script>
     ```

3. **Props va Emits**:
   - `props` va `emits` ni aniqlash juda oson.
   - Props:
     ```vue
     <script setup>
     defineProps({
       msg: String
     });
     </script>
     ```
   - Emits:
     ```vue
     <script setup>
     const emit = defineEmits(['update']);
     </script>
     ```

4. **Komponentlar**:
   - Mahalliy komponentlarni `script setup` ichida import qilib, bevosita ishlatishingiz mumkin.
   - Misol:
     ```vue
     <script setup>
     import MyComponent from './MyComponent.vue';
     </script>

     <template>
       <MyComponent />
     </template>
     ```

5. **Reaktivlik**:
   - `ref` va `reactive` kabi `Composition API` funksiyalarini to'g'ridan-to'g'ri ishlatishingiz mumkin.
   - Misol:
     ```vue
     <script setup>
     import { ref } from 'vue';

     const count = ref(0);

     function increment() {
       count.value++;
     }
     </script>

     <template>
       <button @click="increment">Increment</button>
       <p>{{ count }}</p>
     </template>
     ```

### Afzalliklari:
- **Qisqaroq va Tushunarli Kod**: Kodni qisqartiradi va ko'proq intuitiv qiladi.
- **Soddaligi**: `Composition API` va `Props` ni aniqlash osonlashadi.
- **Kodni Tashkillashtirish**: O'zgaruvchilar va funksiyalarni soddaroq qilib tashkil qilish imkonini beradi.

`script setup` Vue 3-ning yanada qulay va zamonaviy usulida komponentlar yaratishga yordam beradi. Keyingi postda reactivlik haqida gaplshamiz.