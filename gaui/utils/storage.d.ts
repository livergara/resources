import { Ref } from 'vue';
export interface IGaSessionStorage {
    stateToStorage: () => void;
    storageToState: () => void;
}
/**
 * Хранилище для каких либо состояний модулей в SessionStorage
 * @param {string} entityKey Ключ модуля
 * @param {Ref} state Состояние модуля
 * @returns
 */
export declare function useGaSessionStorage(entityKey: string, state: Ref): IGaSessionStorage;
