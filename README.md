# StatFlow

Проект **StatFlow** – корпоративная система для сбора, анализа и визуализации статистики на основе динамических форм. Система позволяет управлять процессом анкетирования сотрудников, анализировать данные по группам и отдельным пользователям, а также вести версионирование форм для отслеживания изменений.

## Оглавление

- [Установка](#установка)
- [Запуск проекта](#запуск-проекта)
- [Структура проекта](#структура-проекта)
- [Настройка ESLint и тестов](#настройка-eslint-и-тестов)
- [Описание FSD](#описание-fsd)
- [Полезные ссылки](#полезные-ссылки)

## Установка

1. **Клонируйте репозиторий и перейдите в директорию проекта:**

   ```bash
   git clone <URL_репозитория>
   cd StatFlow
   ```

2. **Установите зависимости:**

   ```bash
   npm install
   ```

3. **Запустите проект в режиме разработки:**

   ```bash
   npm run dev
   ```

4. **Для сборки проекта выполните:**

   ```bash
   npm run build
   ```

5. **Для предпросмотра собранного проекта запустите:**

   ```bash
   npm run preview
   ```

6. **Запуск тестов:**

   ```bash
   npm run test
   ```

7. **Проверка кода с помощью ESLint:**

   ```bash
   npm run lint
   ```

## Структура проекта

Проект организован по методологии Feature-Sliced Design (FSD). Ниже представлена примерная структура директорий:

```plaintext
StatFlow/
├── node_modules/
├── public/
│   └── index.html                       # Статичный HTML-файл
├── src/
│   ├── app/                             # Точка входа и глобальная конфигурация
│   │   ├── main.ts                      # Инициализация приложения, подключение плагинов (Pinia, роутер, i18n, PrimeVue и др.)
│   │   └── App.vue                      # Корневой компонент приложения
│   │
│   ├── entities/                        # Доменные модели и типы, независимые от UI
│   │   ├── form/                        # Интерфейсы и модели форм, версионирование форм
│   │   │   └── Form.model.ts
│   │   ├── user/                        # Модели пользователей, роли, права доступа
│   │   │   └── User.model.ts
│   │   ├── group/                       # Модели групп сотрудников
│   │   │   └── Group.model.ts
│   │   └── statistics/                  # Модели данных для аналитики и статистики
│   │       └── Statistics.model.ts
│   │
│   ├── features/                        # Функциональные блоки системы
│   │   ├── form-management/             # Управление формами (создание, редактирование, версионирование, копирование)
│   │   │   ├── components/              # UI-компоненты для работы с формами (FormEditor, FormList)
│   │   │   │   ├── FormEditor.vue
│   │   │   │   └── FormList.vue
│   │   │   ├── api/                     # API-слой для форм (CRUD, управление версиями)
│   │   │   │   └── form.api.ts
│   │   │   └── hooks/                   # Логика работы с формами (например, useForm.ts)
│   │   │       └── useForm.ts
│   │   │
│   │   ├── user-management/             # Управление пользователями и авторизация (JWT)
│   │   │   ├── components/              # Компоненты для авторизации, профиля, списков пользователей
│   │   │   │   ├── Login.vue
│   │   │   │   └── UserProfile.vue
│   │   │   └── api/                     # API-слой для аутентификации и управления пользователями
│   │   │       └── auth.api.ts
│   │   │
│   │   ├── group-management/            # Управление группами сотрудников
│   │   │   ├── components/              # Компоненты для создания, редактирования и управления группами
│   │   │   │   └── GroupManager.vue
│   │   │   └── api/                     # API для работы с группами
│   │   │       └── group.api.ts
│   │   │
│   │   └── statistics/                  # Анализ и визуализация статистики
│   │       ├── components/              # Компоненты для графиков, таблиц и отчетов (с использованием ApexCharts)
│   │       │   ├── Dashboard.vue
│   │       │   └── Chart.vue
│   │       └── api/                     # API для получения статистических данных и экспорта (Excel, CSV)
│   │           └── statistics.api.ts
│   │
│   ├── pages/                           # Страничные компоненты, объединяющие фичи
│   │   ├── Dashboard/                   # Страница аналитики и визуализации статистики
│   │   │   └── DashboardPage.vue
│   │   ├── Forms/                       # Страница управления формами
│   │   │   └── FormsPage.vue
│   │   ├── Auth/                        # Страница авторизации и регистрации
│   │   │   └── AuthPage.vue
│   │   └── Groups/                      # Страница управления группами сотрудников
│   │       └── GroupsPage.vue
│   │
│   ├── widgets/                         # Переиспользуемые комплексные UI-компоненты (например, виджеты статистики)
│   │   └── StatisticsWidget.vue
│   │
│   ├── shared/                          # Общие ресурсы, используемые по всему приложению
│   │   ├── ui/                          # Универсальные UI-компоненты (Button, Modal, Input и др.)
│   │   │   ├── Button.vue
│   │   │   └── Modal.vue
│   │   ├── utils/                       # Утилиты и хелперы (например, функции для обработки дат с Day.js)
│   │   │   └── dateUtils.ts
│   │   ├── services/                    # Общие сервисы (интеграция с API через openapi-typescript-fetch)
│   │   │   └── apiService.ts
│   │   └── constants/                   # Константы и глобальные настройки приложения
│   │       └── appConstants.ts
│   │
│   ├── router/                          # Маршруты приложения (vue-router)
│   │   └── index.ts                     # Определение маршрутов для страниц
│   │
│   ├── store/                           # Глобальное состояние приложения (Pinia)
│   │   └── index.ts
│   │
│   └── i18n/                            # Локализация (vue-i18n)
│       └── index.ts                     # Конфигурация локализации и переводов
│
├── tests/                               # Тесты проекта (Vitest, @vue/test-utils)
├── .eslintrc.cjs                        # Конфигурация ESLint
├── tsconfig.json                        # Конфигурация TypeScript (с настройкой алиасов)
├── vite.config.ts                       # Конфигурация Vite (включая настройки Vitest)
├── package.json                         # Скрипты и зависимости проекта
└── README.md                            # Документация и описание проекта
```

## Настройка ESLint и тестов

- **ESLint:**  
  Конфигурация находится в файле [`.eslintrc.cjs`](./.eslintrc.cjs). Для анализа кода используйте команду:
  ```bash
  npm run lint
  ```
  При необходимости добавьте скрипт в `package.json`:
  ```json
  "lint": "eslint \"src/**/*.{js,ts,vue}\""
  ```

- **Vitest:**  
  Тестовая среда настроена через [`vite.config.ts`](./vite.config.ts) и [`src/setupTests.ts`](./src/setupTests.ts). Запустить тесты можно командой:
  ```bash
  npm run test
  ```

## Описание FSD

Методология Feature-Sliced Design определяет следующие слои:

- **App:** Точка входа и глобальная конфигурация (файл `main.ts`, компонент `App.vue`).
- **Entities:** Доменные модели, типы и базовая бизнес-логика, не зависящие от UI.
- **Features:** Функциональные блоки, реализующие отдельные задачи проекта (управление формами, пользователями, группами, статистикой).
- **Pages:** Страничные компоненты, объединяющие несколько фич для формирования разделов приложения.
- **Widgets:** Переиспользуемые комплексные UI-компоненты, объединяющие функциональность из нескольких фич.
- **Shared:** Универсальные компоненты, утилиты, константы и стили, используемые во всём проекте.
- **Router:** Настройка маршрутизации (vue-router).
- **Store:** Глобальное состояние приложения, управляемое с помощью Pinia.

Такое разделение позволяет легко масштабировать проект и упрощает поддержку кода.

## Полезные ссылки

- [Документация Vite](https://vitejs.dev)
- [Документация Vue 3](https://v3.vuejs.org)
- [Feature-Sliced Design](https://feature-sliced.design/ru/)
- [ESLint](https://eslint.org)
- [Vitest](https://vitest.dev)