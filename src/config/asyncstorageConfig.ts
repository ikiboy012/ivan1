import AsyncStorage from '@react-native-async-storage/async-storage';
import {createAsyncStorageHelpers} from '../lib/async-storage';

export enum AsyncStorageKey {
  THEME_ID = '@APP_NAME_THEME_ID',
  LANGUAGE_CODE = '@APP_NAME_LANGUAGE_CODE',
  FOOD = '@APP_NAME_FOOD',
}

export type AsyncStorageType = {
  [AsyncStorageKey.THEME_ID]: string | undefined;
  [AsyncStorageKey.LANGUAGE_CODE]: string | null;
  [AsyncStorageKey.FOOD]: string | undefined;
};

export const ASYNC_STORAGE_DEFAULTS: AsyncStorageType = {
  [AsyncStorageKey.THEME_ID]: undefined,
  [AsyncStorageKey.LANGUAGE_CODE]: null,
  [AsyncStorageKey.FOOD]: 'SALATA',
};

export const {
  setAsyncStorage,
  getAsyncStorage,
  removeAsyncStorage,
  clearAsyncStorage,
} = createAsyncStorageHelpers<AsyncStorageType>(
  AsyncStorage,
  ASYNC_STORAGE_DEFAULTS,
);
