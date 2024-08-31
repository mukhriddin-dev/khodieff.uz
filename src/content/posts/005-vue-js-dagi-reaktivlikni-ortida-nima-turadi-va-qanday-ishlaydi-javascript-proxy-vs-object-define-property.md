---
title: "005. Vue.js dagi reaktivlikni ortida nima turadi va qanday ishlaydi ?
  (JavaScript Proxy vs Object.define Property) "
audioUrl: https://us-tuna-sounds-files.voicemod.net/19df8e9b-140c-4f43-8c0e-09c162821765-1658350707858.mp3
pubDate: 31 Aug 2024 12:08:82
duration: 0:00:00
size: 0
cover: https://www.khodieff.uz/react.js.png
explicit: true
episode: 5
season: 3
postType: full
---

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/26wrmf9cewarwh63obqe.png)

Assalamu alaykum! ahli O'zbek Vue community! Keling bugun Vue.js da reaktivlik qanday ishlaydi , minde sizlarga tushuntirsam :)

Bismillah!


Hamma gap **JavaScriptda** , ya'ni `Object.defineProperty` va `Proxy` JavaScript-da obyektlarni manipulyatsiya qilish va eshitish uchun ishlatiladigan ikki xil mexanizmdir. **Vue2 ** va **Vue3** reaktivlik tizimlarida bu ikkalasi qanday qo'llanilishi haqida gaplashamiz.

### `Object.defineProperty`

#### Xususiyatlari

- **Xususiyatlar holatini kuzatish**: `Object.defineProperty` biror obyektda mavjud bo'lgan xususiyatlarni (property) larni kuzatish uchun ishlatiladi. Bu xususiyatlarni o'qish va yozish uchun getter va setterlarni belgilash imkonini beradi.

- **Biroz cheklov bor aynan bu metodda **: Bu usul faqat mavjud xususiyatlar uchun ishlaydi va yangi xususiyatlar (property) qo'shilganda avtomatik kuzatilmaydi.

- **Vue2 da ishlatilishi**: Vue2 reaktivlik tizimi `Object.defineProperty` asosida qurilgan. Bu har bir xususiyat uchun getter va setterlarni yaratish orqali o'zgarishlarni kuzatadi.

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/7849sgdyw8quzkoiln0r.png)


#### Misol

```javascript
let data = {};
Object.defineProperty(data, 'count', {
  get() {
    console.log('Getting value');
    return count;
  },
  set(newValue) {
    console.log('Setting value');
    count = newValue;
  }
});

data.count = 5; // Setting value
console.log(data.count); // Getting value
```

### `Proxy`

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/us8w7obykkpj0gybclm4.png)


#### Xususiyatlari

- **Obyekt holatini kuzatish**: `Proxy` obyekt darajasida kuzatish imkonini beradi, ya'ni butun obyektni "proxylash" mumkin va bu obyektning har qanday xususiyatiga kirish yoki uni o'zgartirish kuzatiladi.

- **Qo'llash**: `Proxy` yangi xususiyatlar qo'shilganda yoki olib tashlanganda ham kuzatilishini ta'minlaydi.

- **Vue3 da ishlatilishi**: Vue 3 reaktivlik tizimi `Proxy` asosida qurilgan. Bu Vue2 ga nisbatan samarali va kengroq ko'lamli kuzatish imkonini beradi.

#### Misol

```javascript
let data = {
  count: 0
};

let proxyData = new Proxy(data, {
  get(target, property) {
    console.log(`Getting ${property}`);
    return target[property];
  },
  set(target, property, value) {
    console.log(`Setting ${property} to ${value}`);
    target[property] = value;
    return true;
  }
});

proxyData.count = 5; // Setting count to 5
console.log(proxyData.count); // Getting count
```

### `Object.defineProperty` va `Proxy` taqqoslash

- **Kuzatishning ko'lamini**: `Object.defineProperty` faqat mavjud xususiyatlarni kuzatadi, yangi qo'shilgan xususiyatlarni avtomatik kuzatish qiyin. `Proxy` esa butun obyektni kuzatadi, shu jumladan yangi qo'shilgan xususiyatlarni ham.

- **Performans**: `Proxy` samaraliroq bo‘lishi mumkin, chunki u obyektni bir marta proxylaydi va xususiyat darajasida ishlov bermaydi.

- **Moslashuvchanlik**: `Proxy` ko'proq moslashuvchan bo‘lib, turli xil operatsiyalarni (masalan, xususiyatni o‘chirish) kuzatish imkonini beradi.

### Vue reaktivlik tizimidagi farqlar

- **Vue 2**: `Object.defineProperty` asosida qurilgan. Bu Vue 2 ning reaktivlik tizimini ba'zi cheklovlarga olib keladi, masalan, yangi xususiyatlarni kuzatishda muammo bor.

- **Vue 3**: `Proxy` asosida qurilgan. Bu Vue 3 ning reaktivlik tizimini yanada kuchli va samarali qiladi, shu jumladan yangi xususiyatlarni va murakkab strukturalarni oson kuzatish imkonini beradi.

Yuqoridagi misollar Vue2 va Vue3 ning reaktivlik tizimlarining qanday ishlashini va qaysi texnologiyalarni qo'llaganligini ko'rsatadi. Bu farqlar Vue3 ni Vue2 ga nisbatan yanada kuchliroq va flexibility qiladi. 

Quyida bu haqida rasmlarda ko'rib chiqamiz batafsil!

 Barakalloh fiikum!


![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/63p1hu744r8z5h2pnz18.png)

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/db8zwrura4l1baiqh5tg.png)

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/ngom4y3d6jje62ix018r.png)

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/84uuxz1gqtltsyf7l97w.png)

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/sixgix9cy217mvawwlny.png)

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/40q90a1efsjm4k3n1i0f.png)

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/puzovk4a5ssxx0ka5if9.png)

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/ak0ngerhj33hl5zsal7l.png)

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/bfk9idt3jz6ilo9acrk9.png)

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/307mgrbgm559bsnti54z.png)

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/3v4uxnvmew65qkf9lgbp.png)

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/a7b26s62mx4dq4d458r5.png)

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/wbbrlu29uecatc4tskaf.png)

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/e05s302ge34v6tywa6wd.png)

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/uiz2728gezvrwywmdvnv.png)

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/umkwwmantkfl12f9oz82.png)

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/cyx5kp7zdjteh19y9nxz.png)

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/j1rrfqjjr51gr3v75pff.png)

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/lc1zs4vue26kvx7apvop.png)

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/n1q59w4549n00f1qrcxs.png)

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/aob220u9xr3kvcm5emgm.png)

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/yoewso63v3ck9m5yk91c.png)

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/v0atlbjd3xcm43og0ksi.png)

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/d7qfjrk1ivsy0fecc56m.png)

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/mgoncdk0180lua0epclx.png)

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/wm4z3vy9uw3llhm21h8x.png)

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/yvuh94vmj2qzywjry41t.png)

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/eiod9zyi8a10wgmes1ww.png)

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/nnp10a121sd52zwmtrvp.png)

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/5n6ofe0u38kpz3cb0jod.png)

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/aasrvncgpfpbqwlpd38l.png)

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/t90xy1osm3sqy8wya63v.png)

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/7vvow7zkgleps0q1isxa.png)

Bizni tarmoqlarda kuzatishingiz mumkin va maqola foydali bo'lsa izoh va Vuechi do'stlaringizga ulashing. 🫡

🔗 https://t.me/mukhriddinweb

🔗 https://medium.com/@mukhriddinweb

🔗 https://dev.to/mukhriddinweb

🔗 https://khodieff.uz

🔗 https://github.com/mukhriddin-dev

🔗 https://linkedin.com/in/mukhriddin-khodiev

🔗 https://youtube.com/@mukhriddinweb





























