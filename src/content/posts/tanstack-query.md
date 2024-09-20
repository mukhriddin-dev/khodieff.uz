---
title: "TanStack Query "
audioUrl: https://us-tuna-sounds-files.voicemod.net/19df8e9b-140c-4f43-8c0e-09c162821765-1658350707858.mp3
pubDate: 21 Sep 2024 01:09:75
duration: 0:00:00
size: 0
cover: https://res.cloudinary.com/daily-now/image/upload/f_auto,q_auto/v1/posts/9f63eb7e3f432cc6c8d75d28d60494be?_a=AQAEufR
explicit: true
episode: 42
season: 1
postType: full
---
TanStack Query (avvalgi nomi React Query) — JavaScript kutubxonasi bo'lib, serverdan ma'lumotlarni olish, cache'lash va sinxronizatsiya qilish uchun mo'ljallangan. U asosan React uchun ishlatilgan bo'lsa-da, boshqa JavaScript platformalarida ham ishlatish mumkin (Vue, Svelte, Vanilla JS va boshqalar).

TanStack Query orqali siz server bilan muloqot qilishni osonlashtirasiz, shu bilan birga ma'lumotlarni cache'lash, optimistik yangilanishlar, retry (qayta urinish), paginatsiya va yana ko'p funksiyalarni ham qo'llashingiz mumkin.



![khodieff.uz](https://i.ytimg.com/vi/lVLz_ASqAio/maxresdefault.jpg "RTK , khodieff.uz")

### Asosiy tushunchalar:



#### 1. `useQuery` Hook

`useQuery` hook serverdan ma'lumot olish va ularni cache'lash uchun ishlatiladi. Har bir query o'ziga xos identifikator (key)ga ega va u orqali cache boshqariladi.

Misol:

```javascript
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const fetchTodos = async () => {
  const { data } = await axios.get('/api/todos');
  return data;
};

const MyComponent = () => {
  const { data, error, isLoading } = useQuery(['todos'], fetchTodos);

  if (isLoading) return <div>Yuklanmoqda...</div>;
  if (error) return <div>Xatolik yuz berdi!</div>;

  return (
    <ul>
      {data.map((todo) => (
        <li key={todo.id}>{todo.title}</li>
      ))}
    </ul>
  );
};
```

Bu yerda `useQuery` orqali ma'lumotlar serverdan olinadi va holatlar boshqariladi (`isLoading`, `error`).

#### 2. `useMutation` Hook

Mutation serverga ma'lumot yuborish, o'zgartirish yoki o'chirish uchun ishlatiladi. Bu hook CRUD operatsiyalarini bajarish uchun juda qulay.

```javascript
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';

const addTodo = async (newTodo) => {
  const { data } = await axios.post('/api/todos', newTodo);
  return data;
};

const AddTodoComponent = () => {
  const mutation = useMutation(addTodo);

  const handleAddTodo = () => {
    mutation.mutate({ title: 'Yangi vazifa', completed: false });
  };

  return (
    <div>
      <button onClick={handleAddTodo}>Vazifa qo'shish</button>
      {mutation.isLoading && <p>Vazifa qo'shilmoqda...</p>}
      {mutation.isError && <p>Xatolik yuz berdi!</p>}
      {mutation.isSuccess && <p>Vazifa muvaffaqiyatli qo'shildi!</p>}
    </div>
  );
};
```

#### 3. Query Client

Query Client orqali barcha query va mutationlarni global miqyosda boshqarish mumkin. Bu client har bir query'ning cache'lash, retry qilish va boshqa parametrlarini sozlaydi.

```javascript
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <MyComponent />
  </QueryClientProvider>
);
```

#### 4. Query Options (variantlar)

TanStack Query sizga query'larni ancha moslashtirish imkonini beradi. Quyida ba'zi asosiy opsiyalar keltirilgan:

* **staleTime**: Ma'lumotlar yangilanmaganidan keyin qayta fetch qilishga vaqt beradi.
* **cacheTime**: Cache'da qancha vaqt davomida ma'lumot saqlanadi.
* **retry**: Agar query muvaffaqiyatsiz tugasa, qanchalik qayta urinish qilish kerakligini belgilaydi.

Misol:

```javascript
const { data } = useQuery(['todos'], fetchTodos, {
  staleTime: 5000, // 5 soniya davomida query yangi deb hisoblanadi
  cacheTime: 10000, // Cache 10 soniya davomida saqlanadi
  retry: 3, // 3 marta qayta urinish qiladi agar xato bo'lsa
});
```

#### 5. Prefetching (oldindan yuklash)

Prefetching yordamida siz ma'lumotlarni oldindan yuklab, sahifalararo o'tishda yoki foydalanuvchi harakatlaridan oldin ma'lumotni tayyorlab qo'yishingiz mumkin.

```javascript
import { queryClient } from './path-to-your-queryClient';

queryClient.prefetchQuery(['todos'], fetchTodos);
```

#### 6. `invalidateQueries`

Bu funksiyadan foydalanib, siz cache'dagi ma'lumotlarni yangilab, query'larni qayta fetch qilishingiz mumkin. Bu usul mutation operatsiyasidan keyin yangilanish kerak bo'lgan query'larni yangilaydi.

```javascript
import { useMutation, useQueryClient } from '@tanstack/react-query';

const queryClient = useQueryClient();

const mutation = useMutation(addTodo, {
  onSuccess: () => {
    // "todos" query'sini yangilash
    queryClient.invalidateQueries(['todos']);
  },
});
```

### TanStack Query-ning afzalliklari:

* **Automatik caching va sinxronizatsiya**: Query'lar avtomatik cache'lanadi va ma'lumotlar server bilan sinxron bo'ladi.
* **Optimistik yangilanish**: Serverga ma'lumot yuborilishidan oldin ma'lumotlarni vaqtinchalik yangilab turadi.
* **Global error handling**: Osonlik bilan xatoliklarni global darajada boshqarish imkonini beradi.
* **Paginatsiya va infinit scroll**: Paginatsiya qilish va cheksiz skroll qilish oson.

TanStack Query — modern JavaScript aplikatsiyalarida ma'lumotlarni boshqarish uchun kuchli vosita hisoblanadi va oson ishlatish uchun mo'ljallangan.