/**
 * Возвращает map Record<{ключ}, Объект> из массива объектов
 * @param items Массив объектов
 * @param by По какому полю мапить. По умолчанию `id`
 * @returns Record<{ключ}, Объект>
 */
export declare function mapFromArray<T>(items: T[], by?: string): Record<string, T>;
