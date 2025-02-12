export type TPagination = {
    limit: number;
    offset: number;
    total: number;
};
export type TPaginationThemes = 'minimal' | 'full';
export type TPaginationPage = {
    current: number | null;
    next: number | null;
    previous: number | null;
    total: number | null;
};
export type TPaginationResultPage = {
    pageNumber: number | null;
    name: number | string | null;
};
