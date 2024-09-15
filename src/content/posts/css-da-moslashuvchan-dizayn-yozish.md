---
title: CSS da moslashuvchan dizayn yozish.
audioUrl: https://us-tuna-sounds-files.voicemod.net/19df8e9b-140c-4f43-8c0e-09c162821765-1658350707858.mp3
pubDate: 15 Sep 2024 14:09:70
duration: 0:00:00
size: 0
cover: https://www.simplilearn.com/ice9/free_resources_article_thumb/CSSResponsiveDesign_1.jpg
explicit: true
episode: 39
season: 1
postType: full
---
Saytimizni responsiv dizayn qilish uchun **CSS** va **HTML** da bir necha asosiy tushunchalarni bilishingiz kerak. Quyida responsiv dizayn yaratishda muhim bo'lgan konsepsiyalar va qanday kod yozish kerakligi batafsil ko'rib chiqamiz.

![khodieff.uz](https://kinsta.com/wp-content/uploads/2020/08/media-queries.png "khodieff.uz")

### 1. **Media Queries**

Bu responsiv dizayn yaratishda eng asosiy vositalardan biri. **Media Queries** turli ekran o‘lchamlari uchun maxsus dizayn qoidalarini yozishga yordam beradi.

```css
/* Kichik ekranlar uchun (mobil) */
@media (max-width: 768px) {
  body {
    background-color: lightblue;
  }
  .container {
    width: 100%;
    padding: 10px;
  }
}

/* O'rta ekranlar uchun (planshet) */
@media (min-width: 769px) and (max-width: 1024px) {
  .container {
    width: 80%;
    padding: 20px;
  }
}

/* Katta ekranlar uchun (kompyuter) */
@media (min-width: 1025px) {
  .container {
    width: 60%;
    padding: 30px;
  }
}
```

### 2. **Responsive Units** (Mos keladigan o‘lcham birliklari)

Responsiv dizayn yaratishda foizlar, em, rem kabi mos keladigan birliklardan foydalanish kerak. Bu elementlarning o‘lchamini ekran kengligiga qarab moslashishiga yordam beradi.

* **rem** va **em** – matn o‘lchami va boshqa o‘lchamlar uchun.
* **%** – kenglik yoki boshqa o‘lchamlar uchun.

```css
.container {
  width: 100%; /* Oyna kengligiga qarab moslashadi */
  padding: 1rem; /* Matn hajmiga qarab moslashadi */
}

img {
  max-width: 100%; /* Tasvirni ekran kengligiga moslashadi */
  height: auto;    /* Tasvirning nisbiy balandligi saqlanadi */
}
```

### 3. **Flexbox va Grid Layout**

Bu ikki zamonaviy CSS uslubi responsiv dizayn yaratishda ko'p ishlatiladi, chunki ular elementlarni osongina joylashtirish va o‘lchash imkonini beradi.

#### Flexbox misoli:

```css
.container {
  display: flex;
  flex-wrap: wrap;
}

.item {
  flex: 1 1 300px; /* Har bir element kamida 300px bo'ladi va ekranga qarab o'lchami moslashadi */
  margin: 10px;
}
```

#### Grid Layout misoli:

```css
.container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); /* Ekran kengligiga qarab elementlar moslashadi */
  gap: 20px;
}
```

### 4. **ViewPort Meta Tag**

HTML faylingizda viewport ni belgilash responsiv dizayn uchun muhimdir. Bu qurilma ekranining o‘lchamlariga qarab dizaynning qanday ko‘rinishini boshqaradi.

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

### 5. **Responsive Images**

Tasvirlarni ekran o‘lchamlariga qarab moslashtirish uchun `srcset` atributi va **CSS** da max-width qoidasidan foydalaning.

```html
<img src="small.jpg" 
     srcset="medium.jpg 768w, large.jpg 1024w" 
     sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw" 
     alt="Responsive Image">
```

### 6. **Font o‘lchamlarini moslashtirish**

Matnlar ham responsiv bo‘lishi uchun foizlar yoki rem birligidan foydalanish kerak.

```css
body {
  font-size: 16px;
}

@media (max-width: 768px) {
  body {
    font-size: 14px;
  }
}
```

### Responsiv dizayn qilishda bilishingiz kerak bo'lgan asosiy tushunchalar:

1. **Mobile-first yondashuv** – avval mobil uchun dizayn qilinadi, so'ngra kattaroq ekranlarga moslashtiriladi.
2. **Viewport** ni to‘g‘ri sozlash – `meta` tegi bilan ekran kengligini boshqarish.
3. **Responsive birliklar** – foizlar, `rem`, `em` va `vw` kabi o‘lcham birliklaridan foydalanish.
4. **Flexbox va CSS Grid** – responsiv layout yaratish uchun eng yaxshi vositalar.
5. **Media Queries** – ekran o‘lchamlariga qarab maxsus dizayn qoidalarini yozish.

Bu asosiy qoidalar va texnikalar yordamida siz responsiv dizayn yaratishimiz mumkin bo'ladi.

**Mobile First** va **Desktop First** yondashuvlari dizayn jarayonida loyihani qaysi qurilma uchun boshlashni belgilovchi usullar hisoblanadi. Ushbu yondashuvlar web-sayt yoki ilovaning responsivligini ta’minlashda qanday strategiyani qo’llashni anglatadi.

![khodieff.uz CSS](https://computingaustralia.com.au/wp-content/uploads/2021/11/Mobile-first-vs-Responsive-Web-Design-%E2%80%93-What-is-the-Difference-scaled-1.jpg "khodieff.uz CSS RWD")

### 1. **Mobile First yondashuvi**

Bu yondashuvda loyihani dastlab kichik ekranli qurilmalar (mobil) uchun ishlab chiqishdan boshlanadi. Keyin ekran o‘lchamlari kattalashgani sari dizayn kengaytiriladi va qo‘shimcha funksiyalar qo‘shiladi. Ya'ni, asosiy dizaynni kichik qurilmalar uchun moslashtirib, so'ngra katta ekranlarga moslashadigan qilib o‘zgartirish kiritiladi.

#### Mobile First yondashuvida Media Queries:

Media queries ishlatilganda kod avval mobil uchun yoziladi va ekranni kattaroq o‘lchamlari uchun qoidalar qo‘shiladi.

```css
/* Mobil uchun asosiy dizayn */
body {
  background-color: lightblue;
}

/* Planshet va kattaroq ekranlar uchun */
@media (min-width: 768px) {
  body {
    background-color: lightgreen;
}

/* Katta ekranlar (desktop) uchun */
@media (min-width: 1024px) {
  body {
    background-color: lightyellow;
}
```

#### Mobile First’ning afzalliklari:

* **Tez yuklanish**: Mobil uchun tayyorlangan sayt odatda eng yengil versiya bo‘ladi, resurslar kamroq yuklanadi.
* **Progressive Enhancement (o‘zgaruvchan yaxshilanish)**: Mobil dizayn asos sifatida qo‘llanilib, o‘lcham kattalashgan sari funksiyalar qo‘shiladi.
* **Zamonaviy tendensiya**: Ko‘p foydalanuvchilar saytlarga mobil qurilmalar orqali kirishadi, shuning uchun bu yondashuv foydali.

- - -

### 2. **Desktop First yondashuvi**

Desktop First yondashuvida dizayn avval katta ekranli qurilmalar (desktop) uchun ishlab chiqiladi va keyin kichik ekranlar (mobil) uchun optimallashtiriladi. Ya'ni, sayt dastlab kompyuter uchun tuziladi, keyin esa uni kichik ekranlar uchun soddalashtirishga harakat qilinadi.

#### Desktop First yondashuvida Media Queries:

Bunda kod avval katta ekranlar uchun yoziladi va ekranni kichik o‘lchamlari uchun qoidalar qo‘shiladi.

```css
/* Desktop uchun asosiy dizayn */
body {
  background-color: lightyellow;
}

/* Planshet va kichikroq ekranlar uchun */
@media (max-width: 1024px) {
  body {
    background-color: lightgreen;
}

/* Mobil uchun */
@media (max-width: 768px) {
  body {
    background-color: lightblue;
}
```

#### Desktop First’ning afzalliklari:

* **Progressive Degradation (o‘zgaruvchan soddalashtirish)**: Katta ekranlar uchun barcha funksiyalar mavjud bo‘ladi, keyin ularni kichik qurilmalar uchun moslashtirish orqali soddalashtirish mumkin.
* **Murakkab dizaynlar uchun yaxshi**: Katta ekranlarda murakkab interfeyslarni dastlab yaratib, keyin kichik ekranga moslab o‘zgartirish oson bo‘lishi mumkin.

- - -

## Keling edni asosiy tushunchalarni ko'rib chiqamiz.

### 3. **Breakpoints** (Sinish nuqtalari)

Breakpoints – bu ekranning kengligi (yoki boshqa xususiyati) o‘zgarishi bilan dizayn qanday ko‘rinishda bo‘lishini boshqaradigan nuqtalar. Breakpoints yordamida sayt turli ekran o‘lchamlari uchun moslashtiriladi. Odatda **media queries** yordamida aniqlanadi.

#### Eng ko‘p ishlatiladigan Breakpoints:

* **Mobil qurilmalar**: `max-width: 767px`
* **Planshetlar**: `min-width: 768px` va `max-width: 1023px`
* **Katta planshetlar va kichik laptoplar**: `min-width: 1024px` va `max-width: 1279px`
* **Katta ekranlar (desktop)**: `min-width: 1280px`

#### Misol:

```css
/* Mobil dizayn (kichik ekranlar uchun) */
@media (max-width: 767px) {
  .container {
    width: 100%;
  }
}

/* Planshetlar uchun */
@media (min-width: 768px) and (max-width: 1023px) {
  .container {
    width: 80%;
  }
}

/* Katta ekranlar (desktop) uchun */
@media (min-width: 1280px) {
  .container {
    width: 60%;
  }
}
```

### 4. **Mobile First va Desktop First yondashuvlarini tanlash:**

* Agar saytning asosiy foydalanuvchilari mobil qurilmalardan kirsa, **Mobile First** yondashuvi yaxshi variant.
* Agar sayt juda murakkab bo'lsa va katta ekranlar uchun batafsil interfeys kerak bo'lsa, **Desktop First** yondashuvi samarali bo'lishi mumkin.

Breakpoints va Media Queries yordamida ekran kengliklari turli o‘lchamlarda bo‘lsa ham, foydalanuvchi interfeysi moslashuvchan bo‘ladi.

 **Desktop First** va **Mobile First** yondashuvlariga mos ravishda **CSS** kodlari yozib ko'ramiz.

### 1. **Mobile First yondashuvi misoli**

Bu misolda dastlab kichik ekran (mobil) uchun dizayn yoziladi va keyin katta ekranlarga moslashtiriladi.

```html
<!DOCTYPE html>
<html lang="uz">
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    /* Mobil uchun asosiy dizayn */
    body {
      background-color: lightblue;
      font-size: 16px;
    }

    .container {
      width: 100%;
      padding: 10px;
      background-color: white;
    }

    /* Planshetlar va o'rta o'lchamdagi ekranlar uchun */
    @media (min-width: 768px) {
      .container {
        width: 80%;
        padding: 20px;
      }
      body {
        font-size: 18px;
      }
    }

    /* Desktop uchun */
    @media (min-width: 1024px) {
      .container {
        width: 60%;
        padding: 30px;
      }
      body {
        font-size: 20px;
        background-color: lightyellow;
      }
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>Mobile First Misoli</h1>
    <p>Bu misolda dizayn mobil uchun boshlanib, keyin kattaroq ekranlarga moslashtiriladi.</p>
  </div>
</body>
</html>
```

### 2. **Desktop First yondashuvi misoli**

Bu misolda dastlab katta ekran (desktop) uchun dizayn yoziladi va keyin kichik ekranlarga moslashtiriladi.

```html
<!DOCTYPE html>
<html lang="uz">
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    /* Desktop uchun asosiy dizayn */
    body {
      background-color: lightyellow;
      font-size: 20px;
    }

    .container {
      width: 60%;
      padding: 30px;
      background-color: white;
    }

    /* Planshetlar va o'rta o'lchamdagi ekranlar uchun */
    @media (max-width: 1024px) {
      .container {
        width: 80%;
        padding: 20px;
      }
      body {
        font-size: 18px;
        background-color: lightgreen;
      }
    }

    /* Mobil uchun */
    @media (max-width: 768px) {
      .container {
        width: 100%;
        padding: 10px;
      }
      body {
        font-size: 16px;
        background-color: lightblue;
      }
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>Desktop First Misoli</h1>
    <p>Bu misol dastlab desktop uchun yozilgan va keyin kichik ekranlarga moslashtirilgan.</p>
  </div>
</body>
</html>
```

### Farq:

1. **Mobile First** yondashuvida kichik ekranlar (mobil) uchun asosiy dizayn yoziladi, keyin esa media queries orqali dizayn kattaroq ekranlarga moslashtiriladi.
2. **Desktop First** yondashuvida avval katta ekranlar uchun dizayn yaratiladi, keyin esa media queries orqali kichik ekranlarga moslashtiriladi.

Ikkala yondashuv ham maqsadli auditoriyaga va saytning qanday qurilmalarda ishlatilishiga qarab tanlanadi.