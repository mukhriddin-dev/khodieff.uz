---
title: 004. TypeScript bilan asinxron so'rovlar (Promise , Axios)
audioUrl: https://us-tuna-sounds-files.voicemod.net/19df8e9b-140c-4f43-8c0e-09c162821765-1658350707858.mp3
pubDate: 03 Sep 2024 00:09:74
duration: 0:23:00
size: 0
cover: https://telegra.ph/file/05887b99972b14cb88fa3.jpg
explicit: true
episode: 4
season: 9
postType: full
---
TypeScriptda `Promise` va `Axios` bilan ishlash asosan asinxron operatsiyalarni bajarish uchun qo'llaniladi. `Promise` JavaScriptda asinxron operatsiyalarni boshqarish uchun asosiy vosita hisoblanadi, `Axios` esa HTTP so'rovlarini amalga oshirish uchun keng qo'llaniladigan kutubxonadir. Quyida TypeScriptda `Promise` va `Axios` bilan qanday ishlash haqida batafsil ko'rib chiqamiz.

![khodieff.uz](https://strapi.dhiwise.com/uploads/exploring_the_possibilities_of_axios_with_typescript_0_af8d5defd4.jpeg "khodieff.uz")

### 1. Promise bilan ishlash

`Promise` JavaScript va TypeScriptda asinxron operatsiyalarni boshqarish uchun ishlatiladi. `Promise` obyektini yaratish va undan foydalanish misoli:

```typescript
const fetchData = (): Promise<string> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data fetched successfully");
    }, 2000);
  });
};

fetchData()
  .then((data) => {
    console.log(data); // "Data fetched successfully"
  })
  .catch((error) => {
    console.error("Error:", error);
  });
```

Bu misolda `fetchData` funksiyasi `Promise` obyektini qaytaradi. `Promise`ning ikki holati bor: `resolve` muvaffaqiyatli bajarilganda va `reject` xato yuz berganda. `then` metodi orqali muvaffaqiyatli natijani olish mumkin, `catch` metodi orqali xatolarni tutish mumkin.

### 2. Axios bilan ishlash

`Axios` HTTP so'rovlarini amalga oshirish uchun ishlatiladi. TypeScriptda `Axios` bilan ishlashda ma'lumot turlari bilan ishlash qulayligini oshirish mumkin. Avval `Axios` kutubxonasini o'rnating:

```bash
npm install axios
```

Keyin, TypeScriptda undan foydalanish:

```typescript
import axios, { AxiosResponse } from "axios";

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

const fetchUserData = async (userId: number): Promise<User> => {
  try {
    const response: AxiosResponse<User> = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`);
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch user data");
  }
};

fetchUserData(1)
  .then((user) => {
    console.log(user); // User ma'lumotlari konsolga chiqadi
  })
  .catch((error) => {
    console.error(error.message);
  });
```

Bu misolda `fetchUserData` funksiyasi `Axios` yordamida HTTP GET so'rovini amalga oshiradi va `Promise` qaytaradi. `AxiosResponse<User>` tipidagi o'zgaruvchi yordamida qaytgan ma'lumotning turini aniq belgilash mumkin. `async`/`await` bilan ishlash `Promise`ni boshqarishni osonlashtiradi.

### 3. POST So'rovi Bilan Misol

`POST` so'rovini amalga oshirish ham `Axios` bilan oson. Misol uchun, yangi foydalanuvchi ma'lumotlarini serverga yuborish:

```typescript
const createUser = async (user: User): Promise<User> => {
  try {
    const response: AxiosResponse<User> = await axios.post("https://jsonplaceholder.typicode.com/users", user);
    return response.data;
  } catch (error) {
    throw new Error("Failed to create user");
  }
};

const newUser: User = {
  id: 0,
  name: "John Doe",
  username: "johndoe",
  email: "johndoe@example.com",
};

createUser(newUser)
  .then((createdUser) => {
    console.log(createdUser); // Yangi yaratilgan foydalanuvchi ma'lumotlari konsolga chiqadi
  })
  .catch((error) => {
    console.error(error.message);
  });
```

Bu misolda `createUser` funksiyasi `Axios` yordamida `POST` so'rovini amalga oshiradi va serverga yangi foydalanuvchi ma'lumotlarini yuboradi.

### 4. `Axios` konfiguratsiyasi

`Axios`da umumiy konfiguratsiyalarni o'rnatish uchun `axios.create()` metodidan foydalanish mumkin:

```typescript
const apiClient = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  timeout: 1000,
  headers: { "Content-Type": "application/json" }
});

apiClient.get<User>("/users/1")
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error(error.message);
  });
```

Bu yerda `apiClient` nomli `Axios` instansiyasi yaratildi va u orqali `baseURL`, `timeout`, va `headers` kabi konfiguratsiyalar o'rnatildi.

### Xulosa

TypeScriptda `Promise` va `Axios` yordamida asinxron operatsiyalarni bajarish qulay va yaxshi vositalar hisoblanadi. `Promise` yordamida asinxron kodni boshqarish mumkin, `Axios` esa HTTP so'rovlarini qulay bajarish uchun foydalaniladi. TypeScriptning turlarga asoslangan yondashuvi kodni aniq va xavfsiz qiladi.