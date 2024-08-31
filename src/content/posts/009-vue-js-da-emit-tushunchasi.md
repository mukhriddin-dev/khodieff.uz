---
title: 009. Vue.Js da Emit tushunchasi
audioUrl: https://us-tuna-sounds-files.voicemod.net/19df8e9b-140c-4f43-8c0e-09c162821765-1658350707858.mp3
pubDate: 31 Aug 2024 12:08:36
duration: 0:00:00
size: 0
cover: https://www.khodieff.uz/react.js.png
explicit: true
episode: 9
season: 3
postType: full
---
![khodieff.uz](https://media.dev.to/cdn-cgi/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fvad145fux66sad93gntz.jpg "khodieff.uz | vue.js")

- 
**Assalamu alaykum !** Vue.js da `emit` hodisalari yordamida komponentlar o'rtasida ma'lumot almashish imkoniyati mavjud. Emit hodisalari yordamida bola komponent ota komponentga ma'lumot yuborishi   mumkin. Quyida `emit` hodisalari haqida batafsil ko'rib chiqamiz.

### `emit` Hodisalarini Aniqlash (event handler)

`emit` hodisalarini aniqlash va ishlatish uchun `defineEmits` funksiyasidan foydalaniladi.


![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/2wfxvr0a7rmvm2ldk0bt.png)



#### Gooo:

1. **Eventlarni aniqlash (event handler) **:
   `defineEmits` funksiyasidan foydalanib, komponentda chiqariladigan eventlarni ahndel qilsihimiz mumkin. 

2. **Eventlarni chiqarish**:
   Eventlarni kerakli joyda `emit` funksiyasi yordamida chiqarish mumkin.

Quyida batafsil msiloda ko'ramiz:

### Misol 1: Oddiy Event

1. **Bola Komponent**: `ChildComponent.vue`

```vue
<template>
  <button @click="notifyParent">Click me</button>
</template>

<script setup>
import { defineEmits } from 'vue'

// Eventlarni aniqlash
const emit = defineEmits(['myEvent'])

const notifyParent = () => {
  emit('myEvent', 'Assalamu alaykuuuum bratanim')
}
</script>
```

2. **Ota Komponent**: `ParentComponent.vue`

```vue
<template>
  <div>
    <ChildComponent @myEvent="handleMyEvent" />
  </div>
</template>

<script setup>
import ChildComponent from './ChildComponent.vue'

const handleMyEvent = (message) => {
  console.log(message) // Output: Assalamu alaykuuuum bratanim
}
</script>
```

### Misol 2: Argumentlar bilan Event

1. **Bola Komponent**: `ChildComponent.vue`

```vue
<template>
  <button @click="sendData">Send Data</button>
</template>

<script setup>
const emit = defineEmits(['sendData'])

const sendData = () => {
  emit('sendData', { id: 1, name: 'Jonibek Davronov' })
}
</script>
```

2. **Ota Komponent**: `ParentComponent.vue`

```vue
<template>
  <div>
    <ChildComponent @sendData="receiveData" />
  </div>
</template>

<script setup>
import ChildComponent from './ChildComponent.vue'

const receiveData = (data) => {
  console.log(data) // Output: { id: 1, name: 'Jonibek Davronov' }
}
</script>
```

### Misol 3: Validatsiya bilan Event

1. **Bola Komponent**: `ChildComponent.vue`

```vue
<template>
  <button @click="sendData">Send Validated Data</button>
</template>

<script setup>
const emit = defineEmits({
  // Event nomi va uni qabul qiladigan argumentlar uchun validatsiya
  sendData: (payload) => {
    if (typeof payload.id === 'number' && typeof payload.name === 'string') {
      return true
    } else {
      console.warn('Invalid payload')
      return false
    }
  }
})

const sendData = () => {
  emit('sendData', { { id: 1, name: 'Jonibek Davronov' })
}
</script>
```

2. **Ota Komponent**: `ParentComponent.vue`

```vue
<template>
  <div>
    <ChildComponent @sendData="handleValidatedData" />
  </div>
</template>

<script setup>
import ChildComponent from './ChildComponent.vue'

const handleValidatedData = (data) => {
  console.log(data) // Output: { id: 1, name: 'Jonibek Davronov' }
}
</script>
```

### Xulosa o'laroq:

Vue.js da `emit` hodisalari yordamida komponentlar o'rtasida ma'lumot almashish mumkin ekan. `defineEmits` funksiyasidan foydalanib eventlarni aniqlash va `emit` funksiyasi yordamida eventlarni chiqarish mumkin (ota componentaga) . Bu hodisalar yordamida bola komponent ota komponentga ma'lumot yuborishi yoki xabar berishi mumkin. Eventlarni validatsiya qilish orqali, yuborilgan ma'lumotlarni to'g'ri ekanligiga ishonch hosil qilishimiz  mumkin ekan.

**Bizni tarmoqlarda kuzatishingiz mumkin va maqola foydali bo'lsa izoh va Vuechi do'stlaringizga ulashing**. 🫡

🔗 https://t.me/mukhriddinweb

🔗 https://medium.com/@mukhriddinweb

🔗 https://dev.to/mukhriddinweb

🔗 https://khodieff.uz

🔗 https://github.com/mukhriddin-dev

🔗 https://linkedin.com/in/mukhriddin-khodiev

🔗 https://youtube.com/@mukhriddinweb