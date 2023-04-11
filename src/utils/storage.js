import { Subscribable } from './subscribable';

/**
 * A class for managing storage using either localStorage or storage.local based on the context.
 */
class StorageStrategy {
    /**
     * Constructs a new StorageStrategy instance.
     */
    constructor() {
        if (window?.browser?.storage?.local) {
            this.storage = window.browser.storage.local;
            this.isExtension = true;
        } else if (window?.chrome?.storage?.local) {
            this.storage = window.chrome.storage.local;
            this.isExtension = true;
        } else {
            this.storage = localStorage;
            this.isExtension = false;
        }
    }

    /**
     * Retrieves a value from storage.
     * @param {string} key - The key of the stored value.
     * @returns {Promise<any>} - A promise that resolves to the stored value.
     */
    getItem(key) {
        if (this.isExtension) {
            return new Promise((resolve) => {
                this.storage.get(key, (result) => {
                    resolve(result[key]);
                });
            });
        } else {
            // @ts-ignore
            return Promise.resolve(this.storage.getItem(key));
        }
    }

    /**
     * Sets a value in storage.
     * @param {string} key - The key of the stored value.
     * @param {*} value - The value to store.
     * @returns {Promise<void>} - A promise that resolves when the value is set.
     */
    setItem(key, value) {
        if (this.isExtension) {
            return this.storage.set({ [key]: value });
        } else {
            // @ts-ignore
            return Promise.resolve(this.storage.setItem(key, value));
        }
    }

    /**
     * Removes a value from storage.
     * @param {string} key - The key of the stored value.
     * @returns {Promise<void>} - A promise that resolves when the value is removed.
     */
    removeItem(key) {
        if (this.isExtension) {
            return this.storage.remove(key);
        } else {
            // @ts-ignore
            return Promise.resolve(this.storage.removeItem(key));
        }
    }
}

/**
 * A class for managing storage and events in both browser and browser extension contexts.
 * @extends Subscribable
 */
export class UStorage extends Subscribable {
    /**
     * Constructs a new Storage instance.
     * @param {string} storage_name - The name of the storage instance.
     */
    constructor(storage_name) {
        super();
        this.storage_name = storage_name;
        this.strategy = new StorageStrategy();

        if (this.strategy.isExtension) {
            /**
             * @param {*} changes
             * @param {string} areaName
             */
            const onChangedListener = (changes, areaName) => {
                if (areaName === 'local') {
                    this.trigger('storage', changes);
                }
            };

            if (window?.browser?.storage) {
                window?.browser?.storage?.onChanged.addListener(onChangedListener);
            } else if (window?.chrome?.storage) {
                window.chrome.storage.onChanged.addListener(onChangedListener);
            }
        } else {
            window.addEventListener('storage', (e) => this.trigger('storage', e));
        }
    }

    /**
     * Retrieves a value from storage.
     * @param {string} key - The key of the stored value.
     * @returns {Promise<*>} - A promise that resolves to the stored value.
     */
    getItem(key) {
        return this.strategy.getItem(key);
    }

    /**
     * Sets a value in storage.
     * @param {string} key - The key of the stored value.
     * @param {*} value - The value to store.
     * @returns {Promise<void>} - A promise that resolves when the value is set.
     */
    setItem(key, value) {
        return this.strategy.setItem(key, value);
    }

    /**
     * Removes a value from storage.
     * @param {string} key - The key of the stored value.
     * @returns {Promise<void>} - A promise that resolves when the value is removed.
     */
    removeItem(key) {
        return this.strategy.removeItem(key);
    }
}
