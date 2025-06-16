var i = {
    exports: {}
};
/*!
devtools-detect
Detect if DevTools is open
https://github.com/sindresorhus/devtools-detect
By Sindre Sorhus
MIT License
*/
var c;
function w() {
    return c || (c = 1,
    function(n) {
        (function() {
            const _ = {
                isOpen: !1,
                orientation: void 0
            }
              , s = 160
              , r = (o, e) => {
                window.dispatchEvent(new CustomEvent("devtoolschange",{
                    detail: {
                        isOpen: o,
                        orientation: e
                    }
                }))
            }
              , d = ({emitEvents: o=!0}={}) => {
                const e = window.outerWidth - window.innerWidth > s
                  , l = window.outerHeight - window.innerHeight > s
                  , t = e ? "vertical" : "horizontal";
                !(l && e) && (window.Firebug && window.Firebug.chrome && window.Firebug.chrome.isInitialized || e || l) ? ((!_.isOpen || _.orientation !== t) && o && r(!0, t),
                _.isOpen = !0,
                _.orientation = t) : (_.isOpen && o && r(!1, void 0),
                _.isOpen = !1,
                _.orientation = void 0)
            }
            ;
            d({
                emitEvents: !1
            }),
            setInterval(d, 500),
            n.exports ? n.exports = _ : window.devtools = _
        }
        )()
    }(i)),
    i.exports
}
w();
function a(n) {
    n.detail.isOpen && (console.log(` ________    _____    _______  ________     
|\\   ____\\  / __  \\  /  ___  \\|\\_____  \\    
\\ \\  \\___| |\\/_|\\  \\/__/|_/  /\\|____|\\ /_   
 \\ \\  \\  __\\|/ \\ \\  \\__|//  / /     \\|\\  \\  
  \\ \\  \\|\\  \\   \\ \\  \\  /  /_/__   __\\_\\  \\ 
   \\ \\_______\\   \\ \\__\\|\\________\\|\\_______\\
    \\|_______|    \\|__| \\|_______|\\|_______|
`),
    console.log(`%c Join us:https://apply.workable.com/ctw/
`, "color:red"),
    window.removeEventListener("devtoolschange", a))
}
window.addEventListener("devtoolschange", a);
