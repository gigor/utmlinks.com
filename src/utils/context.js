import { browser } from "$app/environment";


/** @returns {boolean} */
const getIsExtension = () => {
    // @ts-ignore
    return !browser || !!window?.chrome?.runtime?.id || !!window?.browser
}

export const isExtension = getIsExtension();