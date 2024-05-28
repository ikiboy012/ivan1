import BaseAsyncStorage from '@react-native-async-storage/async-storage';

/**
 * Create async storage helpers that are type safe.
 *
 * ```
 * // src/config/asyncstorageConfig.ts
 * import AsyncStorage from '@react-native-async-storage/async-storage';
 * import { createAsyncStorageHelpers } from '@mbrain/epichug-rn';
 *
 * export enum AsyncStorageKey {
 *     PARAM1 = '@APP_NAME_PARAM1',
 * }
 *
 * export type AsyncStorageType = {
 *     [AsyncStorageKey.PARAM1]: string | undefined;
 * }
 *
 * export const ASYNC_STORAGE_DEFAULTS: AsyncStorageType = {
 *     [AsyncStorageKey.PARAM1]: undefined,
 * }
 *
 * export const {
 *     setAsyncStorage,
 *     getAsyncStorage,
 *     removeAsyncStorage,
 *     clearAsyncStorage,
 * } = createAsyncStorageHelpers<AsyncStorageType>(AsyncStorage, ASYNC_STORAGE_DEFAULTS);
 * ```
 */
export function createAsyncStorageHelpers<AsyncStorageType>(
  AsyncStorage: typeof BaseAsyncStorage,
  asyncStorageDefaults: AsyncStorageType,
) {
  async function setAsyncStorage<T extends keyof AsyncStorageType>(
    key: T,
    value: AsyncStorageType[T],
  ) {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem(key as string, jsonValue);
    } catch (err) {
      console.warn(err);
    }
  }

  async function getAsyncStorage<T extends keyof AsyncStorageType>(key: T) {
    try {
      const jsonValue = await AsyncStorage.getItem(key as string);
      return jsonValue != null
        ? (JSON.parse(jsonValue) as AsyncStorageType[T])
        : asyncStorageDefaults[key];
    } catch (err) {
      console.warn(err);
      return null;
    }
  }

  async function removeAsyncStorage(key: keyof AsyncStorageType) {
    try {
      await AsyncStorage.removeItem(key as string);
    } catch (err) {
      console.warn(err);
    }
  }

  async function clearAsyncStorage() {
    try {
      await AsyncStorage.clear();
    } catch (err) {
      console.warn(err);
    }
  }

  return {
    setAsyncStorage,
    getAsyncStorage,
    removeAsyncStorage,
    clearAsyncStorage,
  };
}
