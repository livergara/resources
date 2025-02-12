import { Component as ComponentType } from '@vue/runtime-core';
export interface IGaTab {
    /**
     * Название вкладки
     */
    title: string;
    /**
     * Компонент для отрисовки активной вкладки. Внутри компонента обернут в keep-alive
     */
    component?: ComponentType;
    /**
     * Пропсы для компонента
     */
    props?: Record<string, unknown>;
    /**
     * Функции отрабатывающие при эмитах событий компонента. Название свойства - это название события,
     * а его значение - функция для вызова, например:
     * { click: (event) => {some logic here} }
     */
    emits?: Record<string, unknown>;
    /**
     * Некоторые вкладки можно отключать, работает динамически
     */
    disabled?: boolean;
}
export type IGaTabViewOptions = 'vertical' | 'horizontal';
export type IGaTabFormatted = {
    index: number;
    title: string | number;
    origin: string | number | IGaTab;
    component: ComponentType | null;
    props: Record<string, unknown>;
    emits: Record<string, unknown>;
    disabled: boolean;
};
