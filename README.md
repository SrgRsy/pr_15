<h1>Practical work №15</h1>
Yandex.Praktikum

https://github.com/SrgRsy/pr_15

**v0.8**



Адрес на серврере : **https://mesto-testo.site** , 84.201.133.92



**Реализовано следующее :**

- Централизована обработка ошибок

- Валидация запросов посредством Joi,Celebrate

- Логирование запросов и ошибок

- Краш-тестирование

- Подключены сертификаты для обращения к серверу посредством https

- Настроен облачный сервер, использованно доменное имя(**https://www.reg.ru**)





**Для проверки проекта Вы можете выполнить один из запросов:**

-GET /cards — возвращает все карточки

-POST /cards — создаёт карточку

-DELETE /cards/:cardId — удаляет карточку по идентификатору

-GET /users — возвращает всех пользователей

-GET /users/:userId - возвращает пользователя по _id

-POST /signup - регистрирует пользователя

-POST /signin - авторизует пользователя

-GET /crash-test - проверка автоматического восстановления приложения
