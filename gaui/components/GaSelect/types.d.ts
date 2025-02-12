export type IGaControlSelectValueBase = string | number | Record<number | string, never>;
export type IGaControlSelectValueVariants = IGaControlSelectValueBase | IGaControlSelectValueBase[] | null;
export type IGaControlSelectOptionFormatted = {
    origin: IGaControlSelectValueBase;
    id: string;
    label: string;
    isSelected?: boolean;
};
export type IGaSelectSearchFunction = (value: string | null) => Promise<IGaControlSelectValueBase[]>;
