import { browser, dev } from '$app/environment';

let isInstalled = false;
let triedToInstall = false;

/** @type {{name:string, data:{}}[]} */
let eventQueue = [];

export function install() {
    if (!isInstalled && !triedToInstall && browser) {
        triedToInstall = true;

        let d = document;
        let s = d.createElement('script');
        s.async = true;
        d.body.appendChild(s);

        s.onload = () => {
            isInstalled = true;
            eventQueue.forEach((e) => {
                logEvent(e.name, e.data);
            });
            eventQueue = [];
        };

        s.src = `https://t.yawplan.com/latest${dev ? '.dev' : ''}.js`;
    }
}

export function logEvent(name = '', data = {}) {
    if (!browser) {
        return;
    }

    if (window.sa_event) {
        window.sa_event(name, data);
    } else {
        eventQueue.push({ name, data });
    }

    install();
}
