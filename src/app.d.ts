// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
  namespace App {
    // interface Error {}
    // interface Locals {}
    // interface PageData {}
    // interface Platform {}
  }
  declare type UTMParamType = {
    name: 'utm_source' | 'utm_campaign' | 'utm_medium' | 'utm_term' | 'utm_content';
    value: string;
    label: string;
    used: boolean;
  };

  interface Window {
    sa_event: function;
    browser: {
      storage: {
        local: {
          get: (key: string) => Promise<any>;
          set: (data: { [key: string]: any }) => Promise<void>;
          remove: (key: string) => Promise<void>;
        };
        onChanged: {
          addListener: (callback: (changes: any, areaName: string) => void) => void;
        };
      };
    };

    chrome: {
      storage: {
        local: {
          get: (key: string, callback: (result: any) => void) => void;
          set: (data: { [key: string]: any }, callback?: () => void) => void;
          remove: (key: string, callback?: () => void) => void;
        };
        onChanged: {
          addListener: (callback: (changes: any, areaName: string) => void) => void;
        };
      };
    };
  }
}

export {};
