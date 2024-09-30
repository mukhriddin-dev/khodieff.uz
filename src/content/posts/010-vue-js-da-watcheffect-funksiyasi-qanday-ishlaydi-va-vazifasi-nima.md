---
title: 010. Vue.JS da WatchEffect funksiyasi qanday ishlaydi va vazifasi nima ?
audioUrl: https://us-tuna-sounds-files.voicemod.net/19df8e9b-140c-4f43-8c0e-09c162821765-1658350707858.mp3
pubDate: 30 Sep 2024 21:09:37
duration: 0:00:00
size: 0
cover: https://www.khodieff.uz/react.js.png
explicit: true
episode: 10
season: 3
postType: full
---
Vue 3 da `watchEffect` - reaktiv hisoblashni (reactive computation ref , reactivelarni ) kuzatish uchun mo'ljallangan funksiya. U har qanday reaktiv o'zgaruvchi o'zgarganda avtomatik ravishda qayta ishga tushadi. Bu, asosan, side effektlarni kuzatish uchun foydalidir.

![khodieff.uz](https://blog.openreplay.com/images/discovering-vue-composition-api-with-examples/images/hero.png "khodieff.uz")

### Asosiy Misol:



Keling, oddiy bir misol bilan boshlaymiz. Faraz qilaylik, bizda bir reaktiv o'zgaruvchi bor va uning qiymati o'zgarganda biron bir amal bajarilishi kerak. aha

```javascript
<template>
  <div>
    <input v-model="count" type="number" />
    <p>Jami: {{ total }}</p>
  </div>
</template>

<script setup>
import { ref, watchEffect } from 'vue';

const count = ref(0);
const total = ref(0);

// watchEffect yordamida 'count' o'zgaruvchisidagi har qanday o'zgarishni kuzatamiz
watchEffect(() => {
  total.value = count.value * 2; // count o'zgarganda totalni yangilaymiz
});
</script>
```

### Demak betta:

1. `count` - foydalanuvchi kiritadigan qiymat.
2. `total` - `count` ning ikki barobarini saqlaydi.
3. `watchEffect` ichidagi funksiyada `count` ning qiymati o'zgarganda `total` yangilanadi.

### Qo'shimcha Misol:



Keling, `watchEffect` yordamida ko'proq non-primative data misol ko'raylik. Faraz qilaylik, bizda bir nechta reaktiv o'zgaruvchilar bor va ularga asoslangan hisobotni yaratmoqchimiz.

```javascript
<template>
  <div>
    <input v-model="price" type="number" placeholder="Narx" />
    <input v-model="quantity" type="number" placeholder="Miqdor" />
    <p>Jami: {{ total }}</p>
  </div>
</template>

<script setup>
import { ref, watchEffect } from 'vue';

const price = ref(0);
const quantity = ref(0);
const total = ref(0);

// watchEffect yordamida price va quantity o'zgarishlarini kuzatamiz
watchEffect(() => {
  total.value = price.value * quantity.value; // Jami hisoblaymiz
});
</script>
```

### Demak betta:

1. `price` - mahsulotning narxi.
2. `quantity` - sotib olingan mahsulotlar soni.
3. `total` - `price` va `quantity` ni ko'paytirib hisoblaydi.

### Bir necha `watchEffect:`



Agar siz bir nechta `watchEffect`lardan foydalanmoqchi bo'lsangiz, ularni alohida yarating. Har biri o'z reaktiv o'zgaruvchilarini kuzatadi ))

```javascript
<template>
  <div>
    <input v-model="valueA" />
    <input v-model="valueB" />
    <p>Natija A: {{ resultA }}</p>
    <p>Natija B: {{ resultB }}</p>
  </div>
</template>

<script setup>
import { ref, watchEffect } from 'vue';

const valueA = ref(0);
const valueB = ref(0);
const resultA = ref(0);
const resultB = ref(0);

// valueA ni kuzatish
watchEffect(() => {
  resultA.value = valueA.value * 2; // valueA o'zgarganda resultA yangilanadi
});

// valueB ni kuzatish
watchEffect(() => {
  resultB.value = valueB.value + 5; // valueB o'zgarganda resultB yangilanadi
});
</script>
```

### Bilib oldik:



`watchEffect` - bu Vue 3 da reaktiv hisoblashlarni kuzatish uchun juda foydali vosita. U side effektlarni boshqarish va reaktiv ma'lumotlarni yangilashni osonlashtiradi. Har qanday reaktiv o'zgaruvchilar o'zgarganda avtomatik ravishda ishga tushadi, bu esa kodingizni yanada intuitiv va toza yozishga yaxshi.