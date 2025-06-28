# Verification Code Component

Компонент для ввода кода подтверждения с автозаполнением и автопереходом между полями.

## Возможности

### ✅ **Основной функционал:**
- 6 полей для ввода цифр
- Автопереход к следующему полю при вводе
- Автовозврат к предыдущему полю при Backspace
- Навигация стрелками (←/→)

### ✅ **Автозаполнение:**
- Вставка 6-значного кода из буфера обмена
- Автоматическое распределение по полям
- Валидация формата (только цифры)

### ✅ **UX улучшения:**
- Визуальная обратная связь (фокус, заполнение)
- Состояния загрузки
- Сообщения об ошибках и успехе
- Кнопка "Отправить код повторно"

### ✅ **Доступность:**
- `autoComplete="one-time-code"` для iOS/Android
- Правильное управление фокусом
- Disabled состояния

## Использование

```tsx
// Базовое использование
<Code />

// С кастомными обработчиками
const { isComplete, getCode } = useVerificationCode({
  length: 6,
  onComplete: (code) => {
    console.log('Код введён:', code);
  },
  onError: (error) => {
    console.error('Ошибка:', error);
  }
});
```

## Тестирование

Для тестирования используйте код: **123456**

## Файловая структура

```
code/
├── Code.tsx                    # Основной компонент
├── Code.scss                   # Стили контейнера
├── components/
│   ├── CodeInput.tsx          # Отдельное поле ввода
│   └── CodeInput.scss         # Стили поля
└── hooks/
    └── useVerificationCode.ts # Хук для управления состоянием
```

## API

### useVerificationCode

```typescript
interface UseVerificationCodeProps {
  length?: number;                    // Количество полей (по умолчанию 6)
  onComplete?: (code: string) => void; // Колбэк при завершении ввода
  onError?: (message: string) => void; // Колбэк при ошибке
}
```

### Возвращаемые значения

```typescript
{
  values: string[];           // Массив значений полей
  isLoading: boolean;         // Состояние загрузки
  isComplete: boolean;        // Заполнены ли все поля
  handleChange: Function;     // Обработчик изменения
  handleKeyDown: Function;    // Обработчик клавиш
  handlePaste: Function;      // Обработчик вставки
  clearCode: Function;        // Очистить все поля
  getCode: Function;          // Получить полный код
}
```
