const f = "modulepreload",
    h = function (o) {
        return "/" + o;
    },
    a = {},
    d = function (s, l, m) {
        if (!l || l.length === 0) return s();
        const c = document.getElementsByTagName("link");
        return Promise.all(
            l.map((e) => {
                if (((e = h(e)), e in a)) return;
                a[e] = !0;
                const n = e.endsWith(".css"),
                    u = n ? '[rel="stylesheet"]' : "";
                if (!!m)
                    for (let r = c.length - 1; r >= 0; r--) {
                        const i = c[r];
                        if (i.href === e && (!n || i.rel === "stylesheet")) return;
                    }
                else if (document.querySelector(`link[href="${e}"]${u}`)) return;
                const t = document.createElement("link");
                if (((t.rel = n ? "stylesheet" : f), n || ((t.as = "script"), (t.crossOrigin = "")), (t.href = e), document.head.appendChild(t), n))
                    return new Promise((r, i) => {
                        t.addEventListener("load", r), t.addEventListener("error", () => i(new Error(`Unable to preload CSS for ${e}`)));
                    });
            })
        ).then(() => s());
    };
d(() => {
    ((s) => import(s))("../../../assets/js/main.3c97f6d3.js");
}, []);
