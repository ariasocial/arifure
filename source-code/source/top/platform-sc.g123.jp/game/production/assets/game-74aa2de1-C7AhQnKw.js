import {j as p, k as i, l as d, m, n as A, U as x, o as g, p as w} from "./game-03165520-C9c3cPxP.js";
import {F as y, l as f} from "./app-CpUCrGhP.js";
import "./game-beb9f26b--5uYc-_c.js";
import "./game-d8b296a6-D6-XlEtG.js";
async function v() {
    try {
        const e = await fetch(`${p.SHD_G123_AUXIN_URL}/external/v1/user/micro_app/version`, {
            credentials: "include",
            method: "get",
            headers: {
                "Content-Type": "application/json"
            }
        })
          , o = await e.json();
        if (e.status !== 200) {
            console.log("ma-auxin get app_version status error");
            return
        }
        return o.info.app_version
    } catch (e) {
        console.log("ma-auxin get app_version error https error"),
        window.Sentry?.captureException(e);
        return
    }
}
function M() {
    console.log("[MA Auxin]: reloading the existing app"),
    document.getElementById("ma-auxin-app") && document.getElementById("ma-auxin-app")?.remove();
    const e = document.createElement("div");
    e.setAttribute("id", "ma-auxin-app"),
    e.setAttribute("style", "pointer-events: none;width: 100%;height: 100%;top: 0;z-index: 9998;position: absolute;"),
    document.body.append(e)
}
async function h(e, o, t, n) {
    console.log("[MA Auxin]: initializing the app");
    const a = y.pwa && m()
      , s = a ? A() : void 0
      , c = new x(navigator.userAgent).getDeviceInfo()
      , u = {
        appCode: o,
        lang: t,
        createdAt: e,
        ctwid: n,
        sendPlatformDataReport: w,
        gameUserStore: g,
        pwaSupported: a,
        pwaPromptType: s,
        ...c
    }
      , r = await v();
    if (console.log("[MA Auxin]: app version", r),
    !r) {
        console.error(`[MA Auxin]: appVersion is ${r}`);
        return
    }
    const l = `${p.SHD_G123_MA_AUXIN.split("index.html")[0] + r}/index.html`;
    return f({
        name: "g123-ma-auxin",
        entry: l,
        container: "#ma-auxin-app",
        props: u
    }, {
        sandbox: {
            strictStyleIsolation: !0,
            experimentalStyleIsolation: !0
        }
    })
}
async function P(e, o) {
    if (i.initialized)
        return i.instance.promise;
    i.initialized = !0;
    let t;
    try {
        const n = await d()
          , a = Number(n.created);
        M(),
        t = await h(a, e, o, n.sub),
        console.info("[MA Auxin]: app initialized", t),
        await t?.mountPromise?.then( () => {
            console.log("[MA Auxin]: app mounted")
        }
        ),
        i.instance.resolve(t)
    } catch (n) {
        console.log("[MA Auxin] Could not init ma-auxin"),
        window.Sentry?.captureException(n)
    }
    return i.instance.promise
}
async function z() {
    await P(window.option.appId, window.option.lang)
}
export {z as initMicroApplications};
