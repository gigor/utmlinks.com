declare global {
    var browser: {
      storage: {
        local: {
          get: (key: string) => Promise<any>,
          set: (data: { [key: string]: any }) => Promise<void>,
          remove: (key: string) => Promise<void>
        }
      },
      onChanged: {
        addListener: (callback: (changes: any, areaName: string) => void) => void
      }
    };
  
    var chrome: {
      storage: {
        local: {
          get: (key: string, callback: (result: any) => void) => void,
          set: (data: { [key: string]: any }, callback?: () => void) => void,
          remove: (key: string, callback?: () => void) => void
        }
      },
      onChanged: {
        addListener: (callback: (changes: any, areaName: string) => void) => void
      }
    };
  }
  