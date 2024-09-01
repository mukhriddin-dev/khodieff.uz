---
title: 002. React.js (Real DOM va Virtual DOM) farqi , react qanday ishlaydi ?
audioUrl: https://us-tuna-sounds-files.voicemod.net/19df8e9b-140c-4f43-8c0e-09c162821765-1658350707858.mp3
pubDate: 02 Sep 2024 00:09:62
duration: 0:00:00
size: 0
cover: https://www.khodieff.uz/2024-08-25-01.36.23.jpg
explicit: true
episode: 3
season: 4
postType: full
---
#### Real DOM (Document Object Model) va Virtual DOM o'rtasidagi farqlarni tushunish uchun ularning mohiyatini tushuntirish kerak. Keling buni ko'rib chiqamiz.

![khodieff.uz](https://strapi.dhiwise.com/uploads/react_dom_decoded_unmasking_the_myths_of_shadow_dom_vs_virtual_dom_og_image_65cc8fae888fc_9284496cb7.webp "react.js | khodieff.uz")

### Real DOM (Document Object Model)

Real DOM bu HTML hujjatining dasturiy modelidir. Veb sahifadagi har bir element va ularning tuzilishi DOM tomonidan ifodalanadi. DOM daraxt shaklida tashkil etilgan bo'lib, har bir element tugun sifatida qaraladi. Real DOM bilan ishlashda:

* **Yuqori xarajatli yangilanishlar**: Har safar DOM daraxtida o'zgarish qilinsa, butun daraxt qayta chizilishi mumkin, bu esa ko'p vaqt va resurs talab qiladi.
* **Sezilarli kechikish**: Katta hajmdagi DOM tuzilishida kichik o'zgarishlar ham sahifaning qayta yuklanishi yoki sahifani qayta chizilishiga olib kelishi mumkin, bu esa veb-sayt ish faoliyatini sekinlashtirishi mumkin.

### Virtual DOM

Virtual DOM — bu Real DOMning yengil vazndagi nusxasi bo'lib, u JavaScript obyekti sifatida saqlanadi. Virtual DOM Real DOMdagi o'zgarishlarni boshqarish uchun ishlatiladi:

* **Yuqori samaradorlik**: Virtual DOM Real DOMni yangilashdan oldin faqat o'zgartirilgan qismlarini yangilaydi. Bu esa sahifani tezroq ishlashiga yordam beradi.
* **Diferensial algoritm**: Virtual DOM o'zgarishlarni qaysi qismlarda amalga oshirilganini aniqlab, faqat shu qismlarni Real DOMda yangilaydi. Bu "diffing" deb ataladi va bu jarayon Real DOMga nisbatan ancha samaraliroq.
*

### Farqlari:

1. **O'zgarishlarni boshqarish**: Virtual DOM Real DOMning yengil vazndagi nusxasi bo'lib, faqat kerakli joylarni yangilash imkonini beradi. Real DOMda esa har bir o'zgarish butun DOM daraxtini qayta qurishni talab qilishi mumkin.
2. **Ish faoliyati**: Virtual DOM yordamida ishlash sahifalarni tezroq yuklanishini ta'minlaydi, chunki faqat kerakli qismlar yangilanadi. Real DOM esa ko'proq resurslarni talab qiladi.
3. **Memoriyada joylashish**: Virtual DOM yengil bo'lib, JavaScript obyektlari yordamida saqlanadi. Real DOM esa butun HTML daraxtini o'z ichiga oladi.
4.

### Xulosa qilsak:

Virtual DOM foydalanuvchi interfeysi ish faoliyatini oshirish uchun ishlatiladi. Bu texnika React va boshqa ko'plab JavaScript kutubxonalarida keng qo'llaniladi. Real DOM esa veb-sahifaning haqiqiy tuzilishini ifodalaydi, ammo to'g'ridan-to'g'ri o'zgartirishlar kiritishda sustroq bo'lishi mumkin.

#### Endi esa React'da Virtual DOM Real DOM bilan ishlashni farqini ko'rib chiqamiz.

### 1. **Virtual DOM yaratish**

   React komponentlarni yaratganda, har bir komponent o'zining Virtual DOMini hosil qiladi. Bu Virtual DOM JavaScript obyektlari shaklida saqlanadi va Real DOMning yengil vazndagi nusxasini ifodalaydi. Har safar komponentda o'zgarish bo'lsa, React yangi Virtual DOMni yaratadi.

### 2. **O'zgarishlarni aniqlash (Diffing)**

   Komponentda o'zgarish yuz berganda, React yangi Virtual DOMni mavjud Virtual DOM bilan taqqoslaydi. Bu jarayon "diffing" deb ataladi. React faqat qaysi qismlar o'zgarganini aniqlaydi, va bu o'zgarishlarni Real DOMda yangilaydi.

### 3. **Patch (o'zgarishlarni qo'llash)**

   React o'zgartirilgan qismlarini Real DOMga qo'llaydi. Bu jarayon "patching" deb ataladi. Faqat o'zgargan qismlar yangilanganligi sababli, butun DOM daraxtini qayta qurishga hojat qolmaydi, bu esa sahifa yuklanishini tezlashtiradi.

### 4. **Render qilish**

   O'zgarishlar Real DOMga qo'llangandan so'ng, brauzer o'sha qismlarni qayta chizadi va foydalanuvchi interfeysi yangilanadi.

![khodieff.uz](/m8f40.png "khodieff.uz")

### Misol:



Agar sizda 'Button' komponenti bo'lsa va siz tugmani bosganingizda uning matni o'zgarsa:

1. Tugma bosilganda React yangi Virtual DOM yaratadi.
2. Yangi Virtual DOMni avvalgi versiya bilan taqqoslaydi va tugma matnidagi o'zgarishni aniqlaydi.
3. React faqat o'zgargan matn qismini Real DOMda yangilaydi.
4. Brauzer yangilangan matnni qayta chizadi.

### Demak:



React'da Virtual DOM Real DOM bilan samarali ishlash uchun kerak. Bu foydalanuvchi interfeysining tez va samarali yangilanishini ta'minlaydi, bu esa veb-ilovalarning ishlashini sezilarli darajada yaxshilaydi. Reactning kuchli tomoni — minimal o'zgarishlar kiritish orqali maksimal samaradorlikka erishishdir.

**Bizni tarmoqlarda kuzatishingiz mumkin va maqola foydali bo’lsa izoh va Reactchi do’stlaringizga ulashing**. 🫡



🔗 <https://t.me/mukhriddinweb>

🔗 <https://medium.com/@mukhriddinweb>

🔗 <https://dev.to/mukhriddinweb>

🔗 [https://khodieff.uz](https://khodieff.uz/)

🔗 <https://github.com/mukhriddin-dev>

🔗 <https://linkedin.com/in/mukhriddin-khodiev>

🔗 <https://youtube.com/@mukhriddinweb>