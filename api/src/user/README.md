# User Module - CQRS Implementation

Этот модуль реализует паттерн CQRS (Command Query Responsibility Segregation) для работы с пользователями.

## Структура папок

```
user/
├── commands/                    # Команды (действия, изменяющие состояние)
│   ├── handlers/               # Обработчики команд
│   │   ├── create-user.handler.ts
│   │   ├── update-user.handler.ts
│   │   └── index.ts
│   ├── create-user.command.ts
│   ├── update-user.command.ts
│   └── index.ts
├── queries/                    # Запросы (только для чтения)
│   ├── handlers/              # Обработчики запросов
│   │   ├── get-all-users.handler.ts
│   │   ├── get-user-by-id.handler.ts
│   │   └── index.ts
│   ├── get-all-users.query.ts
│   ├── get-user-by-id.query.ts
│   └── index.ts
├── dto/                       # Data Transfer Objects
│   ├── create-user.dto.ts
│   └── update-user.dto.ts
├── user.controller.ts         # HTTP контроллер (использует CommandBus и QueryBus)
├── user.entity.ts            # TypeORM сущность
├── user.module.ts            # NestJS модуль
└── user.service.ts           # Сервис для работы с базой данных
```

## Как это работает

### Commands (Команды)
- **CreateUserCommand** - создание нового пользователя
- **UpdateUserCommand** - обновление существующего пользователя

### Queries (Запросы)
- **GetAllUsersQuery** - получение всех пользователей
- **GetUserByIdQuery** - получение пользователя по ID

### Handlers (Обработчики)
Каждая команда и запрос имеют свой обработчик, который содержит бизнес-логику.

### Controller (Контроллер)
Контроллер не содержит бизнес-логики, а только:
1. Принимает HTTP запросы
2. Создает соответствующие команды/запросы
3. Отправляет их через CommandBus/QueryBus
4. Возвращает результат

## API Endpoints

- `POST /users/create` - создать пользователя
- `PUT /users/:id` - обновить пользователя
- `GET /users` - получить всех пользователей
- `GET /users/:id` - получить пользователя по ID

## Преимущества CQRS

1. **Разделение ответственности** - команды и запросы четко разделены
2. **Масштабируемость** - можно оптимизировать чтение и запись независимо
3. **Тестируемость** - каждый обработчик можно тестировать изолированно
4. **Читаемость кода** - четкая структура и назначение каждого компонента
