// Types
import type {IStore} from "./datastore.types";

/**
 * @method createDataStore
 * @description Creates a new datastore.
 */
export const createDataStore = () => {
  // This data store
  let store: IStore = {};

  /**
   * @method getStore
   * @description Returns everything in the store.
   */
  const getStore = (): IStore => {
    return store;
  };

  /**
   * @method clearStore
   * @description Clears the store.
   */
  const clearStore = (): void => {
    store = {};
  };

  /**
   * @method getItem
   * @description Gets an item from the store.
   */
  const getItem = (key: string): unknown => {
    return store[key];
  };

  /**
   * @method setItem
   * @description Sets an item in the store.
   */
  const setItem = (key: string, value: unknown): void => {
    store[key] = value;
  };

  /**
   * @method removeItem
   * @description Remove an item from the store.
   */
  const removeItem = (key: string): void => {
    const keys = Object.keys(store);

    const updatedStore: IStore = {};

    keys.forEach((k) => {
      if (k !== key) {
        updatedStore[k] = store[k];
      }
    });

    store = updatedStore;
  };

  return {
    getStore,
    clearStore,
    getItem,
    setItem,
    removeItem
  };
};
