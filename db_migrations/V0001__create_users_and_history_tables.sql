-- Создание таблицы пользователей
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    yandex_id VARCHAR(255) UNIQUE,
    phone VARCHAR(20) UNIQUE,
    surname VARCHAR(255),
    email VARCHAR(255),
    display_name VARCHAR(255),
    avatar_url TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Создание индексов для быстрого поиска
CREATE INDEX idx_users_yandex_id ON users(yandex_id);
CREATE INDEX idx_users_phone ON users(phone);

-- Создание таблицы истории расчётов
CREATE TABLE calculation_history (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id),
    expression TEXT NOT NULL,
    result TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Создание индекса для быстрого получения истории пользователя
CREATE INDEX idx_calculation_history_user_id ON calculation_history(user_id);
CREATE INDEX idx_calculation_history_created_at ON calculation_history(created_at DESC);