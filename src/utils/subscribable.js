/**
 * A class for managing event subscriptions.
 */
export class Subscribable {
  /**
   * Constructs a new Subscribable instance.
   */
  constructor() {
      /** @type {Object.<string, Array<Function>>} */
      this.events = {};
  }

  /**
   * Subscribes a callback function to a specified event.
   * @param {string} event - The event name.
   * @param {Function} callback - The callback function to subscribe.
   */
  on(event, callback) {
      if (!this.events[event]) {
          this.events[event] = [];
      }
      this.events[event].push(callback);
  }

  /**
   * Unsubscribes a callback function from a specified event.
   * @param {string} event - The event name.
   * @param {Function} [callback] - The callback function to unsubscribe. If not provided, all callbacks for the event will be removed.
   */
  off(event, callback) {
      if (!event) {
          this.events = {};
      } else if (callback) {
          if (this.events[event]) {
              this.events[event] = this.events[event].filter((cb) => cb !== callback);
          }
      } else if (this.events[event]) {
          this.events[event] = [];
      }
  }

  /**
   * Triggers a specified event and calls all subscribed callback functions.
   * @param {string} event - The event name.
   * @param {...*} args - The arguments to pass to the callback functions.
   */
  trigger(event, ...args) {
      if (this.events[event]) {
          this.events[event].forEach((callback) => callback.apply(this, args));
      }
  }
}
