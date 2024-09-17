---
title: Git va GitHub haqida gaplashamiz.
audioUrl: https://us-tuna-sounds-files.voicemod.net/19df8e9b-140c-4f43-8c0e-09c162821765-1658350707858.mp3
pubDate: 17 Sep 2024 15:09:48
duration: 09:00:00
size: 0
cover: /1690626466559.png
explicit: true
episode: 40
season: 10
postType: full
---
### 1. **Git nima?**

![khodieff.uz](https://www.20i.com/blog/wp-content/uploads/2022/08/git-blog-header.png "khodieff.uz")

Git — bu **versiya boshqaruv tizimi** bo'lib, u dastur kodini boshqarish, saqlash va o'zgartirishlarni kuzatib borish uchun ishlatiladi. U `Linus Torvalds` tomonidan 2005-yilda yaratilgan. Git dasturchilarga o'z loyihalarini samarali boshqarish, xatolarni qaytarish va kodning turli versiyalari ustida ishlash imkonini beradi.

#### Gitning asosiy xususiyatlari:

* **Versiyalarni boshqarish:** Har bir kiritilgan o'zgarish tarixda saqlanadi, va kerak bo'lsa, kodning avvalgi holatiga qaytish mumkin.
* **Branchlash:** Dasturda turli xil funksiyalar yoki o'zgarishlar ustida ishlash uchun alohida `branch`lar yaratish imkonini beradi. Masalan, asosiy tarmoqni buzmasdan yangi funksiyalarni sinab ko'rish mumkin.
* **Mahalliy foydalanish:** Git asosan kompyuterda mahalliy tarzda ishlaydi va bu tez ishlash imkonini beradi.
* **Kollaboratsiya:** Bir nechta dasturchi bir vaqtning o'zida bir xil loyiha ustida ishlash imkoniga ega.

#### Gitning asosiy komandalar:

* `git init`: Yangi Git repo yaratish uchun ishlatiladi.
* `git clone <repository_url>`: Masofaviy (remote) repository'ni mahalliy kompyuterga ko'chirib olish uchun ishlatiladi.
* `git add <file>`: Fayllarni kuzatish (staging) maydoniga qo'shadi.
* `git commit -m "xabar"`: Kuzatish maydonidagi o'zgarishlarni commit qilib, o'zgarishlar tarixini saqlaydi.
* `git push`: Mahalliy o'zgarishlarni masofaviy repository'ga yuboradi.
* `git pull`: Masofaviy repository'dan o'zgarishlarni ko'chirib olish.
* `git status`: Hozirgi holatni ko'rish (qanday fayllar kuzatilmoqda yoki commit qilinmagan).
* `git branch`: Mavjud tarmoqlarni ko'rish yoki yangi tarmoq yaratish.
* `git merge`: Tarmoqlarni birlashtirish.

- - -

### 2. **GitHub nima?**

![khodieff.uz](https://miro.medium.com/v2/resize:fit:1400/1*biIy42Cn4Bnu0IkpUW1Zew.png "khodieff.uz | Github")

GitHub — bu **Git uchun masofaviy repository hosting servisi** bo'lib, u Git bilan ishlashni osonlashtiradi va dasturchilarga o'z loyihalarini internetda boshqarish va hamkorlik qilish imkonini beradi. GitHub `Git` bilan to'liq mos va uning ustiga qo'shimcha vositalar bilan to'ldirilgan platfoma.

![khodieff.uz](https://media.dev.to/cdn-cgi/image/width=1600,height=900,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fi%2Fehlef9pp6xym7d80g3np.png "khodieff.uz")

#### GitHubning asosiy xususiyatlari:

* **Masofaviy Git repository'larni saqlash:** GitHub foydalanuvchilarga o'z Git repository'larini saqlash va boshqalar bilan ulashish imkonini beradi.
* **Kollaboratsiya:** Bir nechta dasturchi bir vaqtning o'zida bir xil loyihada ishlashi mumkin. Masalan, `pull request` (foydalanuvchilar kiritgan o'zgarishlarni asosiy repository'ga birlashtirish uchun ariza).
* **Issues va Wiki:** Loyiha boshqaruvini osonlashtiradigan vositalar, masalan, `issues` (masalalar yoki xatolarni kuzatish) va `wiki` (ma'lumotlar bazasi yoki hujjatlar yaratish).
* **Fork va Pull Request:** GitHub'da biron bir loyihani `fork` qilishingiz mumkin — bu loyiha nusxasini olish va uni o'zingizning repository'ingizda o'zgartirish imkonini beradi. O'zgarishlaringizni asl loyihaga birlashtirish uchun esa `pull request` jo'natiladi.

#### GitHub'ning foydali vositalari:

* **GitHub Actions:** CI/CD (Continuous Integration/Continuous Deployment) uchun vosita. Kodni avtomatik sinovdan o'tkazish, joylashtirish va boshqalar uchun ishlatiladi.
* **GitHub Pages:** Loyihalar hujjatlarini yoki saytlari joylashtirish uchun bepul hosting xizmati.
* **Yulduzlar (Stars):** Foydalanuvchilar qaysi loyihalarni yoqtirishini ko'rsatish uchun yulduz (star) qo'yishadi.

![khodieff.uz](/2024-09-17-15.30.12.jpg "khodieff.uz | github.com/mukhriddin_dev")

- - -

### 3. **Git va GitHub qanday ishlaydi ?**

1. **Loyihani boshlash:**

   * Mahalliy kompyuterda `git init` orqali yangi repository yaratish yoki `git clone` bilan mavjud masofaviy repository'ni yuklash.
2. **O'zgarishlarni kuzatish va saqlash:**

   * Fayllarni o'zgartirgandan so'ng, `git add` orqali o'zgarishlarni staging maydoniga qo'shasiz.
   * `git commit -m "xabar"` orqali ushbu o'zgarishlarni saqlab qo'yasiz.
3. **Loyihani GitHub'ga yuklash:**

   * `git push` yordamida o'zgarishlaringizni GitHub'dagi repository'ga yuklaysiz.
4. **Hamkorlik:**

   * Bir nechta dasturchi loyihaga o'z hissalarini qo'shishadi. Har bir kiritilgan o'zgarish `pull request` orqali loyiha egasiga yuboriladi va bu o'zgarishlar tasdiqlanganidan keyin asosiy tarmoqqa birlashtiriladi.

- - -

### 4. **Git va GitHub ishlash jarayoni:**

Misol orqali tushuntirish:

1. **Repository yaratish va klonlash:**

   ```bash
   git init        # Yangi repository yaratish
   git clone <url> # Masofaviy repository'ni klonlash
   ```
2. **O'zgarishlar qilish va commit qilish:**

   ```bash
   git add .       # Barcha fayllarni staging maydoniga qo'shish
   git commit -m "O'zgarishlar haqida xabar"  # O'zgarishlarni commit qilish
   ```
3. **O'zgarishlarni GitHub'ga yuborish:**

   ```bash
   git push origin main  # Mahalliy o'zgarishlarni masofaviy repository'ga yuklash
   ```
4. **Masofaviy o'zgarishlarni olish:**

   ```bash
   git pull origin main  # GitHub'dan oxirgi o'zgarishlarni olish
   ```

- - -

Quyida **Git**-ning kengroq komandalar ro'yxati va ularning ba'zi opsiyalari haqida batafsil ko'rib chiqamiz.

### Git komandalarini batafsil:

#### 1. **Git konfiguratsiyasi:**

Git o'rnatilgandan so'ng, uni sozlash kerak bo'ladi:

* `git config --global user.name "Ismingiz"` — Git foydalanuvchining ismini o'rnatadi.
* `git config --global user.email "emailingiz@misol.com"` — Git foydalanuvchining emailini o'rnatadi.
* `git config --global core.editor "code --wait"` — Git uchun tahrirlovchini sozlaydi (misol uchun VSCode).
* `git config --list` — Hozirgi konfiguratsiyalar ro'yxatini ko'rsatadi.

#### 2. **Fayllarni kuzatish va commit qilish:**

* `git add <file>` — Aniq faylni kuzatish maydoniga qo'shadi.
* `git add .` — Barcha o'zgartirilgan fayllarni kuzatish maydoniga qo'shadi.
* `git commit -m "xabar"` — O'zgarishlarni "commit" qiladi (saqlaydi).
* `git commit --amend` — Oxirgi commit xabarini o'zgartirish yoki yangi fayllarni qo'shish imkonini beradi.

#### 3. **Branchlar bilan ishlash:**

* `git branch` — Mavjud tarmoqlarni ko'rsatadi.
* `git branch <branch-nom>` — Yangi tarmoq yaratadi.
* `git checkout <branch-nom>` — Tanlangan tarmoqqa o'tadi.
* `git checkout -b <branch-nom>` — Yangi tarmoqqa o'tish bilan uni yaratadi.
* `git merge <branch-nom>` — Tarmoqlarni birlashtiradi.
* `git branch -d <branch-nom>` — Tarmoqni o'chiradi (agar tarmoqda ishlanmalar saqlangan bo'lsa).
* `git branch -D <branch-nom>` — Majburiy tarmoqni o'chirish (hattoki o'zgarishlar saqlanmagan bo'lsa ham).

#### 4. **Repository bilan ishlash:**

* `git clone <url>` — Masofaviy repositoryni yuklab olish.
* `git fetch` — Masofaviy o'zgarishlarni yuklash, lekin ularni mahalliy tarmoq bilan birlashtirmaydi.
* `git pull` — Masofaviy repository'dan o'zgarishlarni yuklab olish va birlashtirish (fetch + merge).
* `git push` — Mahalliy o'zgarishlarni masofaviy repository'ga yuborish.

#### 5. **Diff va loglarni tekshirish:**

* `git status` — Hozirgi repository holatini ko'rsatadi (qaysi fayllar kuzatilgan, qaysi fayllar commit qilingan va h.k.).
* `git diff` — O'zgarishlarni ko'rish.
* `git diff --staged` — Commit qilishga tayyor bo'lgan o'zgarishlarni ko'rsatadi.
* `git log` — Repository tarixini ko'rsatadi (commitlar ro'yxati).
* `git log --oneline` — Har bir commit haqida qisqacha ma'lumot beradi.
* `git show <commit-id>` — Ma'lum bir commitning batafsil ma'lumotini ko'rsatadi.

#### 6. **Remote bilan ishlash:**

* `git remote` — Masofaviy repositorylarni ko'rsatadi.
* `git remote add origin <url>` — Yangi masofaviy repository qo'shish.
* `git remote -v` — Masofaviy repository URLlarini ko'rsatadi.
* `git remote remove <name>` — Masofaviy repository'ni olib tashlash.

#### 7. **Stashing (kodni vaqtincha saqlash):**

* `git stash` — Hozirgi o'zgarishlarni saqlab, toza holda tarmoqni o'zgartirish imkonini beradi.
* `git stash list` — Saqlangan stashlarni ko'rsatadi.
* `git stash apply` — Saqlangan stashni qo'llaydi (lekin uni olib tashlamaydi).
* `git stash pop` — Saqlangan stashni qo'llaydi va uni ro'yxatdan olib tashlaydi.
* `git stash drop` — Ma'lum bir stashni o'chirish.

#### 8. **Git reset va revert:**

* `git reset <commit>` — Mahalliy o'zgarishlarni olib tashlash va ma'lum bir commitga qaytish.
* `git reset --hard <commit>` — O'zgarishlarni to'liq olib tashlab, ma'lum bir commitga qaytadi.
* `git revert <commit>` — Ma'lum bir commitning o'zgarishlarini orqaga qaytarish (bu yangi commit yaratadi).

#### 9. **Taglar bilan ishlash:**

* `git tag` — Mavjud taglarni ko'rish.
* `git tag <tag-nomi>` — Yangi tag yaratish.
* `git tag -d <tag-nomi>` — Tagni o'chirish.
* `git push origin <tag-nomi>` — Masofaviy repository'ga tagni yuborish.

- - -

### Git komandalarini samarali ishlatish uchun ba'zi maslahatlar:

* **Aliaslardan foydalaning:** Ko'p ishlatiladigan komandalar uchun qisqa nomlar yaratish mumkin:

  ```bash
  git config --global alias.co checkout
  git config --global alias.br branch
  git config --global alias.cm commit
  git config --global alias.st status
  ```

  Endi `git co` orqali `git checkout`, `git cm` orqali esa `git commit` ishlatiladi.
* **Loglarni formatlash:** `git log` juda uzun bo'lishi mumkin, uni yaxshi formatlash orqali samarali foydalanish mumkin:

  ```bash
  git log --oneline --graph --decorate --all
  ```

  Bu komandalar tarixni qisqacha, chiroyli grafik ko'rinishida ko'rsatadi.

- - -

Git va GitHub juda keng imkoniyatlarga ega va yuqorida keltirilgan komandalar ularni to'liq ishlatishingiz uchun kerakli vositalarni beradi. Har qanday loyihada samarali kod boshqarish va hamkorlik qilish uchun bu komandalarni o'rganib olish juda muhim!



## [Bu esa mening GitHub profilim ! : )](https://github.com/mukhriddin-dev)