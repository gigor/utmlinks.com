import { browser } from "$app/environment";
import { writable } from "svelte/store";
import { UStorage } from "../utils/storage";


/** 
 * @param {any[]} data 
 * @returns {UTMParamType[]}
*/
function makeUTMParams (data) {
    // @ts-ignore
    return [
        {
            name: 'utm_source',
            value: '',
            label: 'UTM Source',
            description: 'The referrer: (e.g. google, newsletter, facebook)',
            used: false,
        },
        {
            name: 'utm_medium',
            value: '',
            label: 'UTM Medium',
            description: 'Marketing medium: (e.g. cpc, banner, email)',
            used: false,
        },
        {
            name: 'utm_campaign',
            value: '',
            label: 'UTM Campaign',
            description: 'Product, promotion, or slogan (e.g. spring_sale)',
            used: false,
        },
        {
            name: 'utm_term',
            value: '',
            label: 'UTM Term',
            description: 'Keywords for paid search (e.g. running+shoes)',
            used: false,
        },
        {
            name: 'utm_content',
            value: '',
            label: 'UTM Content',
            description: 'Use to differentiate ads (e.g. logolink or footerlink)',
            used: false,
        },
    ].map((param) => {
        let p = data?.find(d => d.name === param.name);
        param.value = p?.value || '';
        param.used = p?.used || false;

        return param
    });
}


export class Link {
    /**
     * @param {object} options
     * @param {string=} options.label   
     * @param {string=} options.base 
     * @param {any=} options.params 
     * @param {'web'|'apple'|'android'=} options.link_type 
     */
    constructor ({label, base, params, link_type}) {
        this.label = label || '';
        this.base = base || '';
        this.params = makeUTMParams(params);
        this.linktype = link_type || 'web';
    }

    get url () {
        const protocol = !this.base || this.base.indexOf('://') > -1 ? '' : 'https://';
        let str = `${protocol}${this.base}${this.params.filter(p=>p.used && p.value).length > 0 ? '?' : ''}${this.params.filter(p=>p.used && p.value).map(p=>`${p.name}=${p.value}`).join('&')}`;
        try {
            return new URL(str).href
        } catch (e) {
            console.warn('invalid url', str, e);
            return str
        }
    }
    
    get markdown () {
        return `[${this.label}](${this.url})`
    }

    get html () {
        return `<a href="${this.url}">${this.label}</a>`
    }

}

class Links {
    constructor (links_data) {
        console.log('links constructor', links_data);
        /** @type {Link[]} */
        this.links = links_data?.map(link_data => new Link(link_data)) || [];
    }

    /**
     * @param {Link} link_data
     * @returns {Links}
     * */
    add(link_data) {
        this.links.unshift(new Link(link_data));
        return this
    }

    remove(index) {
        this.links.splice(index, 1);
        return this
    }
}

export const links = writable(new Links());

if (browser) {

    let storage = new UStorage('links');

    storage.getItem('links').then(data => {
        let d = JSON.parse(data) || {}

        if (d.links?.length > 0) {
            links.set(new Links(d.links))
        } else {
            links.set(new Links([new Link({})]))
        }
    }).then(() => {
        links.subscribe(value => {
            storage.setItem('links', JSON.stringify(value))
        })
    });
}