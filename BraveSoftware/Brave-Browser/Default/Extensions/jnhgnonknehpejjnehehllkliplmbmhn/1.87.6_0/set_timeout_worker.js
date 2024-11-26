/*! For license information please see set_timeout_worker.js.LICENSE.txt */
(() => {
    "use strict";
    (() => {
        const e = new Map;
        onmessage = t => {
            const s = t.data.name, a = t.data.tempId;
            switch (s) {
              case "setTimeout":
                const s = t.data.timeout, o = setTimeout((() => {
                    postMessage({
                        tempId: a
                    }), e.has(a) && e.delete(a);
                }), s);
                e.set(a, o);
                break;

              case "clearTimeout":
                e.has(a) && (clearTimeout(e.get(a)), e.delete(a));
            }
        };
    })();
})();