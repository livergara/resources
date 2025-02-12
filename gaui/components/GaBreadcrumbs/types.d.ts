import { RouteRecord } from 'vue-router';
/**
 * Интерфейс для добавления "Хлебных крошек" в стейт
 */
export interface IGaBreadcrumbsItem {
    /**
     * Название ссылки
     */
    title: string;
    /**
     * RouteRecordInfo
     */
    route: RouteRecord | string | null;
}
/**
 * Элемент "хлебных крошек" в стейте
 * @extends IGaBreadcrumbsItem
 */
export interface IGaBreadcrumbsStateItem extends IGaBreadcrumbsItem {
    /**
     * Уникальный идентификатор крошки
     */
    id: string | number;
    /**
     * Крошка - родитель
     * Пока эксперементальная фича, надо попробовать
     */
    parent?: string | number | null;
}
/**
 * Опции для useGaBreadcrumps
 */
export interface IGaBreadcrumbsOptions {
    /**
     * Удалять крошку при onDeactivate
     * По-умолчанию да
     */
    popOnDeactivated: boolean;
    /**
     * Удалять крошку при onUnmounted
     * По-умолчанию да
     */
    popOnUnmounted: boolean;
}
