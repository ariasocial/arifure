var e = {
    31338: function(e, t, n) {
        "use strict";
        var r = n("39896")
          , i = n("23563");
        !function() {
            let e = window.OPTION?.sentry;
            e && (r.init({
                ignoreErrors: ["top.GLOBALS", "originalCreateNotification", "canvas.contentDocument", "MyApp_RemoveAllHighlights", "http://tt.epicplay.com", "Can't find variable: ZiteReader", "jigsaw is not defined", "ComboSearch is not defined", "http://loading.retry.widdit.com/", "atomicFindClose", "fb_xd_fragment", "bmi_SafeAddOnload", "EBCallBackMessageReceived", "conduitPage", "Script error."],
                denyUrls: [/graph\.facebook\.com/i, /connect\.facebook\.net\/en_US\/all\.js/i, /eatdifferent\.com\.woopra-ns\.com/i, /static\.woopra\.com\/js\/woopra\.js/i, /extensions\//i, /^chrome:\/\//i, /127\.0\.0\.1:4001\/isrunning/i, /webappstoolbarba\.texthelp\.com\//i, /metrics\.itunes\.apple\.com\.edgesuite\.net\//i],
                ...e
            }),
            window.Sentry = i)
        }()
    },
    23441: function(e, t, n) {
        "use strict";
        n.d(t, {
            BrowserClient: function() {
                return d
            }
        });
        var r = n("72550")
          , i = n("76925")
          , o = n("99175")
          , a = n("54683")
          , s = n("95779")
          , u = n("94701")
          , l = n("8399")
          , c = n("31344");
        class d extends r.BaseClient {
            constructor(e) {
                let t = {
                    parentSpanIsAlwaysRootSpan: !0,
                    ...e
                }
                  , n = l.WINDOW.SENTRY_SDK_SOURCE || (0,
                i.getSDKSource)();
                (0,
                o.applySdkMetadata)(t, "browser", ["browser"], n),
                super(t),
                t.sendClientReports && l.WINDOW.document && l.WINDOW.document.addEventListener("visibilitychange", () => {
                    "hidden" === l.WINDOW.document.visibilityState && this._flushOutcomes()
                }
                )
            }
            eventFromException(e, t) {
                return (0,
                u.eventFromException)(this._options.stackParser, e, t, this._options.attachStacktrace)
            }
            eventFromMessage(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "info"
                  , n = arguments.length > 2 ? arguments[2] : void 0;
                return (0,
                u.eventFromMessage)(this._options.stackParser, e, t, n, this._options.attachStacktrace)
            }
            captureUserFeedback(e) {
                if (!this._isEnabled()) {
                    s.DEBUG_BUILD && a.logger.warn("SDK not enabled, will not capture user feedback.");
                    return
                }
                let t = (0,
                c.createUserFeedbackEnvelope)(e, {
                    metadata: this.getSdkMetadata(),
                    dsn: this.getDsn(),
                    tunnel: this.getOptions().tunnel
                });
                this.sendEnvelope(t)
            }
            _prepareEvent(e, t, n) {
                return e.platform = e.platform || "javascript",
                super._prepareEvent(e, t, n)
            }
        }
    },
    95779: function(e, t, n) {
        "use strict";
        n.d(t, {
            DEBUG_BUILD: function() {
                return r
            }
        });
        let r = "undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__
    },
    94701: function(e, t, n) {
        "use strict";
        n.d(t, {
            eventFromException: function() {
                return h
            },
            eventFromMessage: function() {
                return g
            },
            eventFromUnknownInput: function() {
                return m
            },
            exceptionFromError: function() {
                return l
            }
        });
        var r = n("65492")
          , i = n("7149")
          , o = n("27364")
          , a = n("24317")
          , s = n("81567")
          , u = n("48497");
        function l(e, t) {
            let n = d(e, t)
              , r = {
                type: function(e) {
                    let t = e && e.name;
                    return !t && f(e) ? e.message && Array.isArray(e.message) && 2 == e.message.length ? e.message[0] : "WebAssembly.Exception" : t
                }(t),
                value: function(e) {
                    let t = e && e.message;
                    return t ? t.error && "string" == typeof t.error.message ? t.error.message : f(e) && Array.isArray(e.message) && 2 == e.message.length ? e.message[1] : t : "No error message"
                }(t)
            };
            return n.length && (r.stacktrace = {
                frames: n
            }),
            void 0 === r.type && "" === r.value && (r.value = "Unrecoverable error caught"),
            r
        }
        function c(e, t) {
            return {
                exception: {
                    values: [l(e, t)]
                }
            }
        }
        function d(e, t) {
            let n = t.stacktrace || t.stack || ""
              , r = function(e) {
                return e && p.test(e.message) ? 1 : 0
            }(t)
              , i = function(e) {
                return "number" == typeof e.framesToPop ? e.framesToPop : 0
            }(t);
            try {
                return e(n, r, i)
            } catch (e) {}
            return []
        }
        let p = /Minified React error #\d+;/i;
        function f(e) {
            return "undefined" != typeof WebAssembly && void 0 !== WebAssembly.Exception && e instanceof WebAssembly.Exception
        }
        function h(e, t, n, r) {
            let i = m(e, t, n && n.syntheticException || void 0, r);
            return (0,
            a.addExceptionMechanism)(i),
            i.level = "error",
            n && n.event_id && (i.event_id = n.event_id),
            (0,
            s.resolvedSyncPromise)(i)
        }
        function g(e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "info"
              , r = arguments.length > 3 ? arguments[3] : void 0
              , i = arguments.length > 4 ? arguments[4] : void 0
              , o = _(e, t, r && r.syntheticException || void 0, i);
            return o.level = n,
            r && r.event_id && (o.event_id = r.event_id),
            (0,
            s.resolvedSyncPromise)(o)
        }
        function m(e, t, n, s, p) {
            let f;
            if ((0,
            o.isErrorEvent)(t) && t.error)
                return c(e, t.error);
            if ((0,
            o.isDOMError)(t) || (0,
            o.isDOMException)(t)) {
                if ("stack"in t)
                    f = c(e, t);
                else {
                    let r = t.name || ((0,
                    o.isDOMError)(t) ? "DOMError" : "DOMException")
                      , i = t.message ? `${r}: ${t.message}` : r;
                    f = _(e, i, n, s),
                    (0,
                    a.addExceptionTypeValue)(f, i)
                }
                return "code"in t && (f.tags = {
                    ...f.tags,
                    "DOMException.code": `${t.code}`
                }),
                f
            }
            return (0,
            o.isError)(t) ? c(e, t) : (0,
            o.isPlainObject)(t) || (0,
            o.isEvent)(t) ? (f = function(e, t, n, a) {
                let s = (0,
                r.getClient)()
                  , c = s && s.getOptions().normalizeDepth
                  , p = function(e) {
                    for (let t in e)
                        if (Object.prototype.hasOwnProperty.call(e, t)) {
                            let n = e[t];
                            if (n instanceof Error)
                                return n
                        }
                }(t)
                  , f = {
                    __serialized__: (0,
                    i.normalizeToSize)(t, c)
                };
                if (p)
                    return {
                        exception: {
                            values: [l(e, p)]
                        },
                        extra: f
                    };
                let h = {
                    exception: {
                        values: [{
                            type: (0,
                            o.isEvent)(t) ? t.constructor.name : a ? "UnhandledRejection" : "Error",
                            value: function(e, t) {
                                let {isUnhandledRejection: n} = t
                                  , r = (0,
                                u.extractExceptionKeysForMessage)(e)
                                  , i = n ? "promise rejection" : "exception";
                                if ((0,
                                o.isErrorEvent)(e))
                                    return `Event \`ErrorEvent\` captured as ${i} with message \`${e.message}\``;
                                if ((0,
                                o.isEvent)(e)) {
                                    let t = function(e) {
                                        try {
                                            let t = Object.getPrototypeOf(e);
                                            return t ? t.constructor.name : void 0
                                        } catch (e) {}
                                    }(e);
                                    return `Event \`${t}\` (type=${e.type}) captured as ${i}`
                                }
                                return `Object captured as ${i} with keys: ${r}`
                            }(t, {
                                isUnhandledRejection: a
                            })
                        }]
                    },
                    extra: f
                };
                if (n) {
                    let t = d(e, n);
                    t.length && (h.exception.values[0].stacktrace = {
                        frames: t
                    })
                }
                return h
            }(e, t, n, p),
            (0,
            a.addExceptionMechanism)(f, {
                synthetic: !0
            }),
            f) : (f = _(e, t, n, s),
            (0,
            a.addExceptionTypeValue)(f, `${t}`, void 0),
            (0,
            a.addExceptionMechanism)(f, {
                synthetic: !0
            }),
            f)
        }
        function _(e, t, n, r) {
            let i = {};
            if (r && n) {
                let r = d(e, n);
                r.length && (i.exception = {
                    values: [{
                        value: t,
                        stacktrace: {
                            frames: r
                        }
                    }]
                }),
                (0,
                a.addExceptionMechanism)(i, {
                    synthetic: !0
                })
            }
            if ((0,
            o.isParameterizedString)(t)) {
                let {__sentry_template_string__: e, __sentry_template_values__: n} = t;
                return i.logentry = {
                    message: e,
                    params: n
                },
                i
            }
            return i.message = t,
            i
        }
    },
    70497: function(e, t, n) {
        "use strict";
        n.d(t, {
            feedbackAsyncIntegration: function() {
                return o
            }
        });
        var r = n("79031")
          , i = n("83174");
        let o = (0,
        r.buildFeedbackIntegration)({
            lazyLoadIntegration: i.lazyLoadIntegration
        })
    },
    24982: function(e, t, n) {
        "use strict";
        n.d(t, {
            feedbackSyncIntegration: function() {
                return i
            }
        });
        var r = n("79031");
        let i = (0,
        r.buildFeedbackIntegration)({
            getModalIntegration: () => r.feedbackModalIntegration,
            getScreenshotIntegration: () => r.feedbackScreenshotIntegration
        })
    },
    8399: function(e, t, n) {
        "use strict";
        n.d(t, {
            WINDOW: function() {
                return u
            },
            shouldIgnoreOnError: function() {
                return c
            },
            wrap: function() {
                return function e(t) {
                    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    if ("function" != typeof t)
                        return t;
                    try {
                        let e = t.__sentry_wrapped__;
                        if (e) {
                            if ("function" == typeof e)
                                return e;
                            return t
                        }
                        if ((0,
                        i.getOriginalFunction)(t))
                            return t
                    } catch (e) {
                        return t
                    }
                    let r = function() {
                        for (var r = arguments.length, i = Array(r), u = 0; u < r; u++)
                            i[u] = arguments[u];
                        try {
                            let r = i.map(t => e(t, n));
                            return t.apply(this, r)
                        } catch (e) {
                            throw l++,
                            setTimeout( () => {
                                l--
                            }
                            ),
                            (0,
                            o.withScope)(t => {
                                t.addEventProcessor(e => (n.mechanism && ((0,
                                a.addExceptionTypeValue)(e, void 0, void 0),
                                (0,
                                a.addExceptionMechanism)(e, n.mechanism)),
                                e.extra = {
                                    ...e.extra,
                                    arguments: i
                                },
                                e)),
                                (0,
                                s.captureException)(e)
                            }
                            ),
                            e
                        }
                    };
                    try {
                        for (let e in t)
                            Object.prototype.hasOwnProperty.call(t, e) && (r[e] = t[e])
                    } catch (e) {}
                    (0,
                    i.markFunctionWrapped)(r, t),
                    (0,
                    i.addNonEnumerableProperty)(t, "__sentry_wrapped__", r);
                    try {
                        Object.getOwnPropertyDescriptor(r, "name").configurable && Object.defineProperty(r, "name", {
                            get: () => t.name
                        })
                    } catch (e) {}
                    return r
                }
            }
        });
        var r = n("61191")
          , i = n("48497")
          , o = n("65492")
          , a = n("24317")
          , s = n("70585");
        let u = r.GLOBAL_OBJ
          , l = 0;
        function c() {
            return l > 0
        }
    },
    23563: function(e, t, n) {
        "use strict";
        n.r(t),
        n.d(t, {
            BrowserClient: function() {
                return o.BrowserClient
            },
            OpenFeatureIntegrationHook: function() {
                return M.OpenFeatureIntegrationHook
            },
            SDK_VERSION: function() {
                return r.SDK_VERSION
            },
            SEMANTIC_ATTRIBUTE_SENTRY_OP: function() {
                return r.SEMANTIC_ATTRIBUTE_SENTRY_OP
            },
            SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN: function() {
                return r.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN
            },
            SEMANTIC_ATTRIBUTE_SENTRY_SAMPLE_RATE: function() {
                return r.SEMANTIC_ATTRIBUTE_SENTRY_SAMPLE_RATE
            },
            SEMANTIC_ATTRIBUTE_SENTRY_SOURCE: function() {
                return r.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE
            },
            Scope: function() {
                return r.Scope
            },
            WINDOW: function() {
                return i.WINDOW
            },
            addBreadcrumb: function() {
                return r.addBreadcrumb
            },
            addEventProcessor: function() {
                return r.addEventProcessor
            },
            addIntegration: function() {
                return r.addIntegration
            },
            addTracingExtensions: function() {
                return r.addTracingExtensions
            },
            breadcrumbsIntegration: function() {
                return d.breadcrumbsIntegration
            },
            browserApiErrorsIntegration: function() {
                return g.browserApiErrorsIntegration
            },
            browserProfilingIntegration: function() {
                return N.browserProfilingIntegration
            },
            browserSessionIntegration: function() {
                return O.browserSessionIntegration
            },
            browserTracingIntegration: function() {
                return k.browserTracingIntegration
            },
            buildLaunchDarklyFlagUsedHandler: function() {
                return R.buildLaunchDarklyFlagUsedHandler
            },
            captureConsoleIntegration: function() {
                return r.captureConsoleIntegration
            },
            captureEvent: function() {
                return r.captureEvent
            },
            captureException: function() {
                return r.captureException
            },
            captureFeedback: function() {
                return r.captureFeedback
            },
            captureMessage: function() {
                return r.captureMessage
            },
            captureSession: function() {
                return r.captureSession
            },
            captureUserFeedback: function() {
                return c.captureUserFeedback
            },
            chromeStackLineParser: function() {
                return s.chromeStackLineParser
            },
            close: function() {
                return r.close
            },
            contextLinesIntegration: function() {
                return y.contextLinesIntegration
            },
            continueTrace: function() {
                return r.continueTrace
            },
            createTransport: function() {
                return r.createTransport
            },
            createUserFeedbackEnvelope: function() {
                return l.createUserFeedbackEnvelope
            },
            debugIntegration: function() {
                return r.debugIntegration
            },
            dedupeIntegration: function() {
                return r.dedupeIntegration
            },
            defaultRequestInstrumentationOptions: function() {
                return C.defaultRequestInstrumentationOptions
            },
            defaultStackLineParsers: function() {
                return s.defaultStackLineParsers
            },
            defaultStackParser: function() {
                return s.defaultStackParser
            },
            endSession: function() {
                return r.endSession
            },
            eventFromException: function() {
                return u.eventFromException
            },
            eventFromMessage: function() {
                return u.eventFromMessage
            },
            exceptionFromError: function() {
                return u.exceptionFromError
            },
            extraErrorDataIntegration: function() {
                return r.extraErrorDataIntegration
            },
            featureFlagsIntegration: function() {
                return D.featureFlagsIntegration
            },
            feedbackAsyncIntegration: function() {
                return b.feedbackAsyncIntegration
            },
            feedbackIntegration: function() {
                return I.feedbackSyncIntegration
            },
            feedbackSyncIntegration: function() {
                return I.feedbackSyncIntegration
            },
            flush: function() {
                return r.flush
            },
            forceLoad: function() {
                return c.forceLoad
            },
            functionToStringIntegration: function() {
                return r.functionToStringIntegration
            },
            geckoStackLineParser: function() {
                return s.geckoStackLineParser
            },
            getActiveSpan: function() {
                return r.getActiveSpan
            },
            getClient: function() {
                return r.getClient
            },
            getCurrentHub: function() {
                return r.getCurrentHub
            },
            getCurrentScope: function() {
                return r.getCurrentScope
            },
            getDefaultIntegrations: function() {
                return c.getDefaultIntegrations
            },
            getFeedback: function() {
                return T.getFeedback
            },
            getGlobalScope: function() {
                return r.getGlobalScope
            },
            getIsolationScope: function() {
                return r.getIsolationScope
            },
            getReplay: function() {
                return S.getReplay
            },
            getRootSpan: function() {
                return r.getRootSpan
            },
            getSpanDescendants: function() {
                return r.getSpanDescendants
            },
            getSpanStatusFromHttpCode: function() {
                return r.getSpanStatusFromHttpCode
            },
            globalHandlersIntegration: function() {
                return p.globalHandlersIntegration
            },
            httpClientIntegration: function() {
                return v.httpClientIntegration
            },
            httpContextIntegration: function() {
                return f.httpContextIntegration
            },
            inboundFiltersIntegration: function() {
                return r.inboundFiltersIntegration
            },
            init: function() {
                return c.init
            },
            instrumentOutgoingRequests: function() {
                return C.instrumentOutgoingRequests
            },
            isInitialized: function() {
                return r.isInitialized
            },
            lastEventId: function() {
                return r.lastEventId
            },
            launchDarklyIntegration: function() {
                return R.launchDarklyIntegration
            },
            lazyLoadIntegration: function() {
                return m.lazyLoadIntegration
            },
            linkedErrorsIntegration: function() {
                return h.linkedErrorsIntegration
            },
            makeBrowserOfflineTransport: function() {
                return x.makeBrowserOfflineTransport
            },
            makeFetchTransport: function() {
                return a.makeFetchTransport
            },
            makeMultiplexedTransport: function() {
                return r.makeMultiplexedTransport
            },
            metrics: function() {
                return w.metrics
            },
            moduleMetadataIntegration: function() {
                return r.moduleMetadataIntegration
            },
            onLoad: function() {
                return c.onLoad
            },
            openFeatureIntegration: function() {
                return M.openFeatureIntegration
            },
            opera10StackLineParser: function() {
                return s.opera10StackLineParser
            },
            opera11StackLineParser: function() {
                return s.opera11StackLineParser
            },
            parameterize: function() {
                return r.parameterize
            },
            registerSpanErrorInstrumentation: function() {
                return r.registerSpanErrorInstrumentation
            },
            replayCanvasIntegration: function() {
                return E.replayCanvasIntegration
            },
            replayIntegration: function() {
                return S.replayIntegration
            },
            reportingObserverIntegration: function() {
                return _.reportingObserverIntegration
            },
            rewriteFramesIntegration: function() {
                return r.rewriteFramesIntegration
            },
            sendFeedback: function() {
                return T.sendFeedback
            },
            sessionTimingIntegration: function() {
                return r.sessionTimingIntegration
            },
            setContext: function() {
                return r.setContext
            },
            setCurrentClient: function() {
                return r.setCurrentClient
            },
            setExtra: function() {
                return r.setExtra
            },
            setExtras: function() {
                return r.setExtras
            },
            setHttpStatus: function() {
                return r.setHttpStatus
            },
            setMeasurement: function() {
                return r.setMeasurement
            },
            setTag: function() {
                return r.setTag
            },
            setTags: function() {
                return r.setTags
            },
            setUser: function() {
                return r.setUser
            },
            showReportDialog: function() {
                return c.showReportDialog
            },
            spanToBaggageHeader: function() {
                return r.spanToBaggageHeader
            },
            spanToJSON: function() {
                return r.spanToJSON
            },
            spanToTraceHeader: function() {
                return r.spanToTraceHeader
            },
            spotlightBrowserIntegration: function() {
                return A.spotlightBrowserIntegration
            },
            startBrowserTracingNavigationSpan: function() {
                return k.startBrowserTracingNavigationSpan
            },
            startBrowserTracingPageLoadSpan: function() {
                return k.startBrowserTracingPageLoadSpan
            },
            startInactiveSpan: function() {
                return r.startInactiveSpan
            },
            startNewTrace: function() {
                return r.startNewTrace
            },
            startSession: function() {
                return r.startSession
            },
            startSpan: function() {
                return r.startSpan
            },
            startSpanManual: function() {
                return r.startSpanManual
            },
            suppressTracing: function() {
                return r.suppressTracing
            },
            thirdPartyErrorFilterIntegration: function() {
                return r.thirdPartyErrorFilterIntegration
            },
            updateSpanName: function() {
                return r.updateSpanName
            },
            winjsStackLineParser: function() {
                return s.winjsStackLineParser
            },
            withActiveSpan: function() {
                return r.withActiveSpan
            },
            withIsolationScope: function() {
                return r.withIsolationScope
            },
            withScope: function() {
                return r.withScope
            },
            zodErrorsIntegration: function() {
                return r.zodErrorsIntegration
            }
        });
        var r = n("32678")
          , i = n("8399")
          , o = n("23441")
          , a = n("43955")
          , s = n("35415")
          , u = n("94701")
          , l = n("31344")
          , c = n("39896")
          , d = n("66484")
          , p = n("75282")
          , f = n("48483")
          , h = n("65771")
          , g = n("44284")
          , m = n("83174")
          , _ = n("17977")
          , v = n("95628")
          , y = n("98657")
          , S = n("36122")
          , E = n("60356")
          , b = n("70497")
          , I = n("24982")
          , T = n("79031")
          , w = n("14597")
          , C = n("91738")
          , k = n("72622")
          , x = n("44329")
          , N = n("28374")
          , A = n("59061")
          , O = n("93409")
          , D = n("70064")
          , R = n("15492")
          , M = n("25174")
    },
    66484: function(e, t, n) {
        "use strict";
        n.d(t, {
            breadcrumbsIntegration: function() {
                return S
            }
        });
        var r = n("58425")
          , i = n("38385")
          , o = n("17451")
          , a = n("59492")
          , s = n("49466")
          , u = n("11945")
          , l = n("65492")
          , c = n("18062")
          , d = n("24317")
          , p = n("54683")
          , f = n("87586")
          , h = n("1546")
          , g = n("2030")
          , m = n("89170")
          , _ = n("83139")
          , v = n("95779")
          , y = n("8399");
        let S = (0,
        u.defineIntegration)(function() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
              , t = {
                console: !0,
                dom: !0,
                fetch: !0,
                history: !0,
                sentry: !0,
                xhr: !0,
                ...e
            };
            return {
                name: "Breadcrumbs",
                setup(e) {
                    t.console && (0,
                    a.addConsoleInstrumentationHandler)(function(e) {
                        return function(t) {
                            if ((0,
                            l.getClient)() !== e)
                                return;
                            let n = {
                                category: "console",
                                data: {
                                    arguments: t.args,
                                    logger: "console"
                                },
                                level: (0,
                                h.severityLevelFromString)(t.level),
                                message: (0,
                                g.safeJoin)(t.args, " ")
                            };
                            if ("assert" === t.level) {
                                if (!1 !== t.args[0])
                                    return;
                                n.message = `Assertion failed: ${(0,
                                g.safeJoin)(t.args.slice(1), " ") || "console.assert"}`,
                                n.data.arguments = t.args.slice(1)
                            }
                            (0,
                            c.addBreadcrumb)(n, {
                                input: t.args,
                                level: t.level
                            })
                        }
                    }(e)),
                    t.dom && (0,
                    r.addClickKeypressInstrumentationHandler)(function(e, t) {
                        return function(n) {
                            if ((0,
                            l.getClient)() !== e)
                                return;
                            let r, i, o = "object" == typeof t ? t.serializeAttribute : void 0, a = "object" == typeof t && "number" == typeof t.maxStringLength ? t.maxStringLength : void 0;
                            a && a > 1024 && (v.DEBUG_BUILD && p.logger.warn(`\`dom.maxStringLength\` cannot exceed 1024, but a value of ${a} was configured. Sentry will use 1024 instead.`),
                            a = 1024),
                            "string" == typeof o && (o = [o]);
                            try {
                                let e = n.event
                                  , t = function(e) {
                                    return !!e && !!e.target
                                }(e) ? e.target : e;
                                r = (0,
                                f.htmlTreeAsString)(t, {
                                    keyAttrs: o,
                                    maxStringLength: a
                                }),
                                i = (0,
                                f.getComponentName)(t)
                            } catch (e) {
                                r = "<unknown>"
                            }
                            if (0 === r.length)
                                return;
                            let s = {
                                category: `ui.${n.name}`,
                                message: r
                            };
                            i && (s.data = {
                                "ui.component_name": i
                            }),
                            (0,
                            c.addBreadcrumb)(s, {
                                event: n.event,
                                name: n.name,
                                global: n.global
                            })
                        }
                    }(e, t.dom)),
                    t.xhr && (0,
                    i.addXhrInstrumentationHandler)(function(e) {
                        return function(t) {
                            if ((0,
                            l.getClient)() !== e)
                                return;
                            let {startTimestamp: n, endTimestamp: r} = t
                              , o = t.xhr[i.SENTRY_XHR_DATA_KEY];
                            if (!n || !r || !o)
                                return;
                            let {method: a, url: s, status_code: u, body: d} = o
                              , p = {
                                xhr: t.xhr,
                                input: d,
                                startTimestamp: n,
                                endTimestamp: r
                            }
                              , f = (0,
                            m.getBreadcrumbLogLevelFromHttpStatusCode)(u);
                            (0,
                            c.addBreadcrumb)({
                                category: "xhr",
                                data: {
                                    method: a,
                                    url: s,
                                    status_code: u
                                },
                                type: "http",
                                level: f
                            }, p)
                        }
                    }(e)),
                    t.fetch && (0,
                    s.addFetchInstrumentationHandler)(function(e) {
                        return function(t) {
                            if ((0,
                            l.getClient)() !== e)
                                return;
                            let {startTimestamp: n, endTimestamp: r} = t;
                            if (!!r) {
                                if (!t.fetchData.url.match(/sentry_key/) || "POST" !== t.fetchData.method) {
                                    if (t.error) {
                                        let e = t.fetchData
                                          , i = {
                                            data: t.error,
                                            input: t.args,
                                            startTimestamp: n,
                                            endTimestamp: r
                                        };
                                        (0,
                                        c.addBreadcrumb)({
                                            category: "fetch",
                                            data: e,
                                            level: "error",
                                            type: "http"
                                        }, i)
                                    } else {
                                        let e = t.response
                                          , i = {
                                            ...t.fetchData,
                                            status_code: e && e.status
                                        }
                                          , o = {
                                            input: t.args,
                                            response: e,
                                            startTimestamp: n,
                                            endTimestamp: r
                                        }
                                          , a = (0,
                                        m.getBreadcrumbLogLevelFromHttpStatusCode)(i.status_code);
                                        (0,
                                        c.addBreadcrumb)({
                                            category: "fetch",
                                            data: i,
                                            type: "http",
                                            level: a
                                        }, o)
                                    }
                                }
                            }
                        }
                    }(e)),
                    t.history && (0,
                    o.addHistoryInstrumentationHandler)(function(e) {
                        return function(t) {
                            if ((0,
                            l.getClient)() !== e)
                                return;
                            let n = t.from
                              , r = t.to
                              , i = (0,
                            _.parseUrl)(y.WINDOW.location.href)
                              , o = n ? (0,
                            _.parseUrl)(n) : void 0
                              , a = (0,
                            _.parseUrl)(r);
                            (!o || !o.path) && (o = i),
                            i.protocol === a.protocol && i.host === a.host && (r = a.relative),
                            i.protocol === o.protocol && i.host === o.host && (n = o.relative),
                            (0,
                            c.addBreadcrumb)({
                                category: "navigation",
                                data: {
                                    from: n,
                                    to: r
                                }
                            })
                        }
                    }(e)),
                    t.sentry && e.on("beforeSendEvent", function(e) {
                        return function(t) {
                            (0,
                            l.getClient)() === e && (0,
                            c.addBreadcrumb)({
                                category: `sentry.${"transaction" === t.type ? "transaction" : "event"}`,
                                event_id: t.event_id,
                                level: t.level,
                                message: (0,
                                d.getEventDescription)(t)
                            }, {
                                event: t
                            })
                        }
                    }(e))
                }
            }
        })
    },
    44284: function(e, t, n) {
        "use strict";
        n.d(t, {
            browserApiErrorsIntegration: function() {
                return u
            }
        });
        var r = n("48497")
          , i = n("11945")
          , o = n("32237")
          , a = n("8399");
        let s = ["EventTarget", "Window", "Node", "ApplicationCache", "AudioTrackList", "BroadcastChannel", "ChannelMergerNode", "CryptoOperation", "EventSource", "FileReader", "HTMLUnknownElement", "IDBDatabase", "IDBRequest", "IDBTransaction", "KeyOperation", "MediaController", "MessagePort", "ModalWindow", "Notification", "SVGElementInstance", "Screen", "SharedWorker", "TextTrack", "TextTrackCue", "TextTrackList", "WebSocket", "WebSocketWorker", "Worker", "XMLHttpRequest", "XMLHttpRequestEventTarget", "XMLHttpRequestUpload"]
          , u = (0,
        i.defineIntegration)(function() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
              , t = {
                XMLHttpRequest: !0,
                eventTarget: !0,
                requestAnimationFrame: !0,
                setInterval: !0,
                setTimeout: !0,
                ...e
            };
            return {
                name: "BrowserApiErrors",
                setupOnce() {
                    t.setTimeout && (0,
                    r.fill)(a.WINDOW, "setTimeout", l),
                    t.setInterval && (0,
                    r.fill)(a.WINDOW, "setInterval", l),
                    t.requestAnimationFrame && (0,
                    r.fill)(a.WINDOW, "requestAnimationFrame", c),
                    t.XMLHttpRequest && "XMLHttpRequest"in a.WINDOW && (0,
                    r.fill)(XMLHttpRequest.prototype, "send", d);
                    let e = t.eventTarget;
                    e && (Array.isArray(e) ? e : s).forEach(p)
                }
            }
        });
        function l(e) {
            return function() {
                for (var t = arguments.length, n = Array(t), r = 0; r < t; r++)
                    n[r] = arguments[r];
                let i = n[0];
                return n[0] = (0,
                a.wrap)(i, {
                    mechanism: {
                        data: {
                            function: (0,
                            o.getFunctionName)(e)
                        },
                        handled: !1,
                        type: "instrument"
                    }
                }),
                e.apply(this, n)
            }
        }
        function c(e) {
            return function(t) {
                return e.apply(this, [(0,
                a.wrap)(t, {
                    mechanism: {
                        data: {
                            function: "requestAnimationFrame",
                            handler: (0,
                            o.getFunctionName)(e)
                        },
                        handled: !1,
                        type: "instrument"
                    }
                })])
            }
        }
        function d(e) {
            return function() {
                for (var t = arguments.length, n = Array(t), i = 0; i < t; i++)
                    n[i] = arguments[i];
                let s = this;
                return ["onload", "onerror", "onprogress", "onreadystatechange"].forEach(e => {
                    e in s && "function" == typeof s[e] && (0,
                    r.fill)(s, e, function(t) {
                        let n = {
                            mechanism: {
                                data: {
                                    function: e,
                                    handler: (0,
                                    o.getFunctionName)(t)
                                },
                                handled: !1,
                                type: "instrument"
                            }
                        }
                          , i = (0,
                        r.getOriginalFunction)(t);
                        return i && (n.mechanism.data.handler = (0,
                        o.getFunctionName)(i)),
                        (0,
                        a.wrap)(t, n)
                    })
                }
                ),
                e.apply(this, n)
            }
        }
        function p(e) {
            let t = a.WINDOW[e]
              , n = t && t.prototype;
            n && n.hasOwnProperty && n.hasOwnProperty("addEventListener") && ((0,
            r.fill)(n, "addEventListener", function(t) {
                return function(n, r, i) {
                    try {
                        (function(e) {
                            return "function" == typeof e.handleEvent
                        }
                        )(r) && (r.handleEvent = (0,
                        a.wrap)(r.handleEvent, {
                            mechanism: {
                                data: {
                                    function: "handleEvent",
                                    handler: (0,
                                    o.getFunctionName)(r),
                                    target: e
                                },
                                handled: !1,
                                type: "instrument"
                            }
                        }))
                    } catch (e) {}
                    return t.apply(this, [n, (0,
                    a.wrap)(r, {
                        mechanism: {
                            data: {
                                function: "addEventListener",
                                handler: (0,
                                o.getFunctionName)(r),
                                target: e
                            },
                            handled: !1,
                            type: "instrument"
                        }
                    }), i])
                }
            }),
            (0,
            r.fill)(n, "removeEventListener", function(e) {
                return function(t, n, r) {
                    try {
                        let i = n.__sentry_wrapped__;
                        i && e.call(this, t, i, r)
                    } catch (e) {}
                    return e.call(this, t, n, r)
                }
            }))
        }
    },
    93409: function(e, t, n) {
        "use strict";
        n.d(t, {
            browserSessionIntegration: function() {
                return l
            }
        });
        var r = n("17451")
          , i = n("11945")
          , o = n("54683")
          , a = n("70585")
          , s = n("95779")
          , u = n("8399");
        let l = (0,
        i.defineIntegration)( () => ({
            name: "BrowserSession",
            setupOnce() {
                if (void 0 === u.WINDOW.document) {
                    s.DEBUG_BUILD && o.logger.warn("Using the `browserSessionIntegration` in non-browser environments is not supported.");
                    return
                }
                (0,
                a.startSession)({
                    ignoreDuration: !0
                }),
                (0,
                a.captureSession)(),
                (0,
                r.addHistoryInstrumentationHandler)(e => {
                    let {from: t, to: n} = e;
                    void 0 !== t && t !== n && ((0,
                    a.startSession)({
                        ignoreDuration: !0
                    }),
                    (0,
                    a.captureSession)())
                }
                )
            }
        }))
    },
    98657: function(e, t, n) {
        "use strict";
        n.d(t, {
            contextLinesIntegration: function() {
                return u
            }
        });
        var r = n("61191")
          , i = n("11945")
          , o = n("83139")
          , a = n("24317");
        let s = r.GLOBAL_OBJ
          , u = (0,
        i.defineIntegration)(function() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
              , t = null != e.frameContextLines ? e.frameContextLines : 7;
            return {
                name: "ContextLines",
                processEvent: e => (function(e, t) {
                    let n = s.document
                      , r = s.location && (0,
                    o.stripUrlQueryAndFragment)(s.location.href);
                    if (!n || !r)
                        return e;
                    let i = e.exception && e.exception.values;
                    if (!i || !i.length)
                        return e;
                    let u = n.documentElement.innerHTML;
                    if (!u)
                        return e;
                    let l = ["<!DOCTYPE html>", "<html>", ...u.split("\n"), "</html>"];
                    return i.forEach(e => {
                        let n = e.stacktrace;
                        n && n.frames && (n.frames = n.frames.map(e => (function(e, t, n, r) {
                            return e.filename === n && e.lineno && t.length ? ((0,
                            a.addContextToFrame)(t, e, r),
                            e) : e
                        }
                        )(e, l, r, t)))
                    }
                    ),
                    e
                }
                )(e, t)
            }
        })
    },
    70064: function(e, t, n) {
        "use strict";
        n.d(t, {
            featureFlagsIntegration: function() {
                return o
            }
        });
        var r = n("11945")
          , i = n("61487");
        let o = (0,
        r.defineIntegration)( () => ({
            name: "FeatureFlags",
            processEvent: (e, t, n) => (0,
            i.copyFlagsFromScopeToEvent)(e),
            addFeatureFlag(e, t) {
                (0,
                i.insertFlagToScope)(e, t)
            }
        }))
    },
    15492: function(e, t, n) {
        "use strict";
        n.d(t, {
            buildLaunchDarklyFlagUsedHandler: function() {
                return a
            },
            launchDarklyIntegration: function() {
                return o
            }
        });
        var r = n("11945")
          , i = n("61487");
        let o = (0,
        r.defineIntegration)( () => ({
            name: "LaunchDarkly",
            processEvent: (e, t, n) => (0,
            i.copyFlagsFromScopeToEvent)(e)
        }));
        function a() {
            return {
                name: "sentry-flag-auditor",
                type: "flag-used",
                synchronous: !0,
                method: (e, t, n) => {
                    (0,
                    i.insertFlagToScope)(e, t.value)
                }
            }
        }
    },
    25174: function(e, t, n) {
        "use strict";
        n.d(t, {
            OpenFeatureIntegrationHook: function() {
                return a
            },
            openFeatureIntegration: function() {
                return o
            }
        });
        var r = n("11945")
          , i = n("61487");
        let o = (0,
        r.defineIntegration)( () => ({
            name: "OpenFeature",
            processEvent: (e, t, n) => (0,
            i.copyFlagsFromScopeToEvent)(e)
        }));
        class a {
            after(e, t) {
                (0,
                i.insertFlagToScope)(t.flagKey, t.value)
            }
            error(e, t, n) {
                (0,
                i.insertFlagToScope)(e.flagKey, e.defaultValue)
            }
        }
    },
    75282: function(e, t, n) {
        "use strict";
        n.d(t, {
            globalHandlersIntegration: function() {
                return g
            }
        });
        var r = n("11945")
          , i = n("38663")
          , o = n("65492")
          , a = n("70585")
          , s = n("96010")
          , u = n("27364")
          , l = n("87586")
          , c = n("32237")
          , d = n("54683")
          , p = n("95779")
          , f = n("94701")
          , h = n("8399");
        let g = (0,
        r.defineIntegration)(function() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
              , t = {
                onerror: !0,
                onunhandledrejection: !0,
                ...e
            };
            return {
                name: "GlobalHandlers",
                setupOnce() {
                    Error.stackTraceLimit = 50
                },
                setup(e) {
                    t.onerror && (function(e) {
                        (0,
                        i.addGlobalErrorInstrumentationHandler)(t => {
                            let {stackParser: n, attachStacktrace: r} = _();
                            if ((0,
                            o.getClient)() !== e || (0,
                            h.shouldIgnoreOnError)())
                                return;
                            let {msg: i, url: s, line: d, column: p, error: g} = t
                              , m = function(e, t, n, r) {
                                let i = e.exception = e.exception || {}
                                  , o = i.values = i.values || []
                                  , a = o[0] = o[0] || {}
                                  , s = a.stacktrace = a.stacktrace || {}
                                  , d = s.frames = s.frames || []
                                  , p = (0,
                                u.isString)(t) && t.length > 0 ? t : (0,
                                l.getLocationHref)();
                                return 0 === d.length && d.push({
                                    colno: r,
                                    filename: p,
                                    function: c.UNKNOWN_FUNCTION,
                                    in_app: !0,
                                    lineno: n
                                }),
                                e
                            }((0,
                            f.eventFromUnknownInput)(n, g || i, void 0, r, !1), s, d, p);
                            m.level = "error",
                            (0,
                            a.captureEvent)(m, {
                                originalException: g,
                                mechanism: {
                                    handled: !1,
                                    type: "onerror"
                                }
                            })
                        }
                        )
                    }(e),
                    m("onerror")),
                    t.onunhandledrejection && (function(e) {
                        (0,
                        s.addGlobalUnhandledRejectionInstrumentationHandler)(t => {
                            let {stackParser: n, attachStacktrace: r} = _();
                            if ((0,
                            o.getClient)() !== e || (0,
                            h.shouldIgnoreOnError)())
                                return;
                            let i = function(e) {
                                if ((0,
                                u.isPrimitive)(e))
                                    return e;
                                try {
                                    if ("reason"in e)
                                        return e.reason;
                                    if ("detail"in e && "reason"in e.detail)
                                        return e.detail.reason
                                } catch (e) {}
                                return e
                            }(t)
                              , s = (0,
                            u.isPrimitive)(i) ? function(e) {
                                return {
                                    exception: {
                                        values: [{
                                            type: "UnhandledRejection",
                                            value: `Non-Error promise rejection captured with value: ${String(e)}`
                                        }]
                                    }
                                }
                            }(i) : (0,
                            f.eventFromUnknownInput)(n, i, void 0, r, !0);
                            s.level = "error",
                            (0,
                            a.captureEvent)(s, {
                                originalException: i,
                                mechanism: {
                                    handled: !1,
                                    type: "onunhandledrejection"
                                }
                            })
                        }
                        )
                    }(e),
                    m("onunhandledrejection"))
                }
            }
        });
        function m(e) {
            p.DEBUG_BUILD && d.logger.log(`Global Handler attached: ${e}`)
        }
        function _() {
            let e = (0,
            o.getClient)();
            return e && e.getOptions() || {
                stackParser: () => [],
                attachStacktrace: !1
            }
        }
    },
    95628: function(e, t, n) {
        "use strict";
        n.d(t, {
            httpClientIntegration: function() {
                return h
            }
        });
        var r = n("38385")
          , i = n("11945")
          , o = n("70585")
          , a = n("5229")
          , s = n("49466")
          , u = n("65492")
          , l = n("61191")
          , c = n("54683")
          , d = n("67441")
          , p = n("24317")
          , f = n("95779");
        let h = (0,
        i.defineIntegration)(function() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
              , t = {
                failedRequestStatusCodes: [[500, 599]],
                failedRequestTargets: [/.*/],
                ...e
            };
            return {
                name: "HttpClient",
                setup(e) {
                    (function(e, t) {
                        (0,
                        a.supportsNativeFetch)() && (0,
                        s.addFetchInstrumentationHandler)(n => {
                            if ((0,
                            u.getClient)() !== e)
                                return;
                            let {response: r, args: i, error: a, virtualError: s} = n
                              , [l,c] = i;
                            r && !function(e, t, n, r, i) {
                                if (_(e, n.status, n.url)) {
                                    let e = function(e, t) {
                                        return !t && e instanceof Request || e instanceof Request && e.bodyUsed ? e : new Request(e,t)
                                    }(t, r), a, s, u, l;
                                    y() && ([a,u] = g("Cookie", e),
                                    [s,l] = g("Set-Cookie", n));
                                    let c = v({
                                        url: e.url,
                                        method: e.method,
                                        status: n.status,
                                        requestHeaders: a,
                                        responseHeaders: s,
                                        requestCookies: u,
                                        responseCookies: l,
                                        error: i
                                    });
                                    (0,
                                    o.captureEvent)(c)
                                }
                            }(t, l, r, c, a || s)
                        }
                        , !1)
                    }
                    )(e, t),
                    function(e, t) {
                        "XMLHttpRequest"in l.GLOBAL_OBJ && (0,
                        r.addXhrInstrumentationHandler)(n => {
                            if ((0,
                            u.getClient)() !== e)
                                return;
                            let {error: i, virtualError: a} = n
                              , s = n.xhr
                              , l = s[r.SENTRY_XHR_DATA_KEY];
                            if (!l)
                                return;
                            let {method: d, request_headers: p} = l;
                            try {
                                !function(e, t, n, r, i) {
                                    if (_(e, t.status, t.responseURL)) {
                                        let e, a, s;
                                        if (y()) {
                                            try {
                                                let e = t.getResponseHeader("Set-Cookie") || t.getResponseHeader("set-cookie") || void 0;
                                                e && (a = m(e))
                                            } catch (e) {}
                                            try {
                                                s = function(e) {
                                                    let t = e.getAllResponseHeaders();
                                                    return t ? t.split("\r\n").reduce( (e, t) => {
                                                        let[n,r] = t.split(": ");
                                                        return n && r && (e[n] = r),
                                                        e
                                                    }
                                                    , {}) : {}
                                                }(t)
                                            } catch (e) {}
                                            e = r
                                        }
                                        let u = v({
                                            url: t.responseURL,
                                            method: n,
                                            status: t.status,
                                            requestHeaders: e,
                                            responseHeaders: s,
                                            responseCookies: a,
                                            error: i
                                        });
                                        (0,
                                        o.captureEvent)(u)
                                    }
                                }(t, s, d, p, i || a)
                            } catch (e) {
                                f.DEBUG_BUILD && c.logger.warn("Error while extracting response event form XHR response", e)
                            }
                        }
                        )
                    }(e, t)
                }
            }
        });
        function g(e, t) {
            let n = function(e) {
                let t = {};
                return e.forEach( (e, n) => {
                    t[n] = e
                }
                ),
                t
            }(t.headers), r;
            try {
                let t = n[e] || n[e.toLowerCase()] || void 0;
                t && (r = m(t))
            } catch (e) {}
            return [n, r]
        }
        function m(e) {
            return e.split("; ").reduce( (e, t) => {
                let[n,r] = t.split("=");
                return n && r && (e[n] = r),
                e
            }
            , {})
        }
        function _(e, t, n) {
            var r, i, o, a;
            return r = e.failedRequestStatusCodes,
            i = t,
            r.some(e => "number" == typeof e ? e === i : i >= e[0] && i <= e[1]) && (o = e.failedRequestTargets,
            a = n,
            o.some(e => "string" == typeof e ? a.includes(e) : e.test(a))) && !(0,
            d.isSentryRequestUrl)(n, (0,
            u.getClient)())
        }
        function v(e) {
            let t = (0,
            u.getClient)()
              , n = t && e.error && e.error instanceof Error ? e.error.stack : void 0
              , r = n && t ? t.getOptions().stackParser(n, 0, 1) : void 0
              , i = `HTTP Client Error with status code: ${e.status}`
              , o = {
                message: i,
                exception: {
                    values: [{
                        type: "Error",
                        value: i,
                        stacktrace: r ? {
                            frames: r
                        } : void 0
                    }]
                },
                request: {
                    url: e.url,
                    method: e.method,
                    headers: e.requestHeaders,
                    cookies: e.requestCookies
                },
                contexts: {
                    response: {
                        status_code: e.status,
                        headers: e.responseHeaders,
                        cookies: e.responseCookies,
                        body_size: function(e) {
                            if (e) {
                                let t = e["Content-Length"] || e["content-length"];
                                if (t)
                                    return parseInt(t, 10)
                            }
                        }(e.responseHeaders)
                    }
                }
            };
            return (0,
            p.addExceptionMechanism)(o, {
                type: "http.client",
                handled: !1
            }),
            o
        }
        function y() {
            let e = (0,
            u.getClient)();
            return !!e && !!e.getOptions().sendDefaultPii
        }
    },
    48483: function(e, t, n) {
        "use strict";
        n.d(t, {
            httpContextIntegration: function() {
                return o
            }
        });
        var r = n("11945")
          , i = n("8399");
        let o = (0,
        r.defineIntegration)( () => ({
            name: "HttpContext",
            preprocessEvent(e) {
                if (!i.WINDOW.navigator && !i.WINDOW.location && !i.WINDOW.document)
                    return;
                let t = e.request && e.request.url || i.WINDOW.location && i.WINDOW.location.href
                  , {referrer: n} = i.WINDOW.document || {}
                  , {userAgent: r} = i.WINDOW.navigator || {}
                  , o = {
                    ...e.request && e.request.headers,
                    ...n && {
                        Referer: n
                    },
                    ...r && {
                        "User-Agent": r
                    }
                }
                  , a = {
                    ...e.request,
                    ...t && {
                        url: t
                    },
                    headers: o
                };
                e.request = a
            }
        }))
    },
    65771: function(e, t, n) {
        "use strict";
        n.d(t, {
            linkedErrorsIntegration: function() {
                return a
            }
        });
        var r = n("72511")
          , i = n("11945")
          , o = n("94701");
        let a = (0,
        i.defineIntegration)(function() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
              , t = e.limit || 5
              , n = e.key || "cause";
            return {
                name: "LinkedErrors",
                preprocessEvent(e, i, a) {
                    let s = a.getOptions();
                    (0,
                    r.applyAggregateErrorsToEvent)(o.exceptionFromError, s.stackParser, s.maxValueLength, n, t, e, i)
                }
            }
        })
    },
    17977: function(e, t, n) {
        "use strict";
        n.d(t, {
            reportingObserverIntegration: function() {
                return c
            }
        });
        var r = n("61191")
          , i = n("65492")
          , o = n("70585")
          , a = n("5229")
          , s = n("11945");
        let u = r.GLOBAL_OBJ
          , l = new WeakMap
          , c = (0,
        s.defineIntegration)(function() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
              , t = e.types || ["crash", "deprecation", "intervention"];
            function n(e) {
                if (l.has((0,
                i.getClient)()))
                    for (let t of e)
                        (0,
                        i.withScope)(e => {
                            e.setExtra("url", t.url);
                            let n = `ReportingObserver [${t.type}]`
                              , r = "No details available";
                            if (t.body) {
                                let n = {};
                                for (let e in t.body)
                                    n[e] = t.body[e];
                                if (e.setExtra("body", n),
                                "crash" === t.type) {
                                    let e = t.body;
                                    r = [e.crashId || "", e.reason || ""].join(" ").trim() || r
                                } else
                                    r = t.body.message || r
                            }
                            (0,
                            o.captureMessage)(`${n}: ${r}`)
                        }
                        )
            }
            return {
                name: "ReportingObserver",
                setupOnce() {
                    if (!!(0,
                    a.supportsReportingObserver)())
                        new u.ReportingObserver(n,{
                            buffered: !0,
                            types: t
                        }).observe()
                },
                setup(e) {
                    l.set(e, !0)
                }
            }
        })
    },
    59061: function(e, t, n) {
        "use strict";
        n.d(t, {
            spotlightBrowserIntegration: function() {
                return u
            }
        });
        var r = n("54816")
          , i = n("54683")
          , o = n("99562")
          , a = n("11945")
          , s = n("95779");
        let u = (0,
        a.defineIntegration)(function() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
              , t = e.sidecarUrl || "http://localhost:8969/stream";
            return {
                name: "SpotlightBrowser",
                setup: () => {
                    s.DEBUG_BUILD && i.logger.log("Using Sidecar URL", t)
                }
                ,
                processEvent: e => (function(e) {
                    return !!("transaction" === e.type && e.spans && e.contexts && e.contexts.trace && "ui.action.click" === e.contexts.trace.op && e.spans.some(e => {
                        let {description: t} = e;
                        return t && t.includes("#sentry-spotlight")
                    }
                    ))
                }
                )(e) ? null : e,
                afterAllSetup: e => {
                    (function(e, t) {
                        let n = (0,
                        r.getNativeImplementation)("fetch")
                          , a = 0;
                        e.on("beforeEnvelope", e => {
                            if (a > 3) {
                                i.logger.warn("[Spotlight] Disabled Sentry -> Spotlight integration due to too many failed requests:", a);
                                return
                            }
                            n(t, {
                                method: "POST",
                                body: (0,
                                o.serializeEnvelope)(e),
                                headers: {
                                    "Content-Type": "application/x-sentry-envelope"
                                },
                                mode: "cors"
                            }).then(e => {
                                e.status >= 200 && e.status < 400 && (a = 0)
                            }
                            , e => {
                                a++,
                                i.logger.error("Sentry SDK can't connect to Sidecar is it running? See: https://spotlightjs.com/sidecar/npx/", e)
                            }
                            )
                        }
                        )
                    }
                    )(e, t)
                }
            }
        })
    },
    14597: function(e, t, n) {
        "use strict";
        n.d(t, {
            metrics: function() {
                return o
            }
        });
        var r = n("20122")
          , i = n("40161");
        let o = {
            increment: function(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1
                  , n = arguments.length > 2 ? arguments[2] : void 0;
                r.metrics.increment(i.BrowserMetricsAggregator, e, t, n)
            },
            distribution: function(e, t, n) {
                r.metrics.distribution(i.BrowserMetricsAggregator, e, t, n)
            },
            set: function(e, t, n) {
                r.metrics.set(i.BrowserMetricsAggregator, e, t, n)
            },
            gauge: function(e, t, n) {
                r.metrics.gauge(i.BrowserMetricsAggregator, e, t, n)
            },
            timing: function(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "second"
                  , o = arguments.length > 3 ? arguments[3] : void 0;
                return r.metrics.timing(i.BrowserMetricsAggregator, e, t, n, o)
            }
        }
    },
    28374: function(e, t, n) {
        "use strict";
        n.d(t, {
            browserProfilingIntegration: function() {
                return l
            }
        });
        var r = n("42878")
          , i = n("54683")
          , o = n("11945")
          , a = n("95779")
          , s = n("50092")
          , u = n("21830");
        let l = (0,
        o.defineIntegration)( () => ({
            name: "BrowserProfiling",
            setup(e) {
                let t = (0,
                r.getActiveSpan)()
                  , n = t && (0,
                r.getRootSpan)(t);
                n && (0,
                u.isAutomatedPageLoadSpan)(n) && (0,
                u.shouldProfileSpan)(n) && (0,
                s.startProfileForSpan)(n),
                e.on("spanStart", e => {
                    e === (0,
                    r.getRootSpan)(e) && (0,
                    u.shouldProfileSpan)(e) && (0,
                    s.startProfileForSpan)(e)
                }
                ),
                e.on("beforeEnvelope", e => {
                    if (!(0,
                    u.getActiveProfilesCount)())
                        return;
                    let t = (0,
                    u.findProfiledTransactionsFromEnvelope)(e);
                    if (!t.length)
                        return;
                    let n = [];
                    for (let e of t) {
                        let t = e && e.contexts
                          , r = t && t.profile && t.profile.profile_id
                          , o = t && t.profile && t.profile.start_timestamp;
                        if ("string" != typeof r || !r) {
                            a.DEBUG_BUILD && i.logger.log("[Profiling] cannot find profile for a span without a profile context");
                            continue
                        }
                        t && t.profile && delete t.profile;
                        let s = (0,
                        u.takeProfileFromGlobalCache)(r);
                        if (!s) {
                            a.DEBUG_BUILD && i.logger.log(`[Profiling] Could not retrieve profile for span: ${r}`);
                            continue
                        }
                        let l = (0,
                        u.createProfilingEvent)(r, o, s, e);
                        l && n.push(l)
                    }
                    (0,
                    u.addProfilesToEnvelope)(e, n)
                }
                )
            }
        }))
    },
    50092: function(e, t, n) {
        "use strict";
        n.d(t, {
            startProfileForSpan: function() {
                return d
            }
        });
        var r = n("75047")
          , i = n("54683")
          , o = n("42878")
          , a = n("24317")
          , s = n("65492")
          , u = n("95779")
          , l = n("8399")
          , c = n("21830");
        function d(e) {
            let t;
            (0,
            c.isAutomatedPageLoadSpan)(e) && (t = 1e3 * (0,
            r.timestampInSeconds)());
            let n = (0,
            c.startJSSelfProfile)();
            if (!n)
                return;
            u.DEBUG_BUILD && i.logger.log(`[Profiling] started profiling span: ${(0,
            o.spanToJSON)(e).description}`);
            let d = (0,
            a.uuid4)();
            async function p() {
                if (!!e) {
                    if (n)
                        return n.stop().then(t => {
                            if (f && (l.WINDOW.clearTimeout(f),
                            f = void 0),
                            u.DEBUG_BUILD && i.logger.log(`[Profiling] stopped profiling of span: ${(0,
                            o.spanToJSON)(e).description}`),
                            !t) {
                                u.DEBUG_BUILD && i.logger.log(`[Profiling] profiler returned null profile for: ${(0,
                                o.spanToJSON)(e).description}`, "this may indicate an overlapping span or a call to stopProfiling with a profile title that was never started");
                                return
                            }
                            (0,
                            c.addProfileToGlobalCache)(d, t)
                        }
                        ).catch(e => {
                            u.DEBUG_BUILD && i.logger.log("[Profiling] error while stopping profiler:", e)
                        }
                        )
                }
            }
            (0,
            s.getCurrentScope)().setContext("profile", {
                profile_id: d,
                start_timestamp: t
            });
            let f = l.WINDOW.setTimeout( () => {
                u.DEBUG_BUILD && i.logger.log("[Profiling] max profile duration elapsed, stopping profiling for:", (0,
                o.spanToJSON)(e).description),
                p()
            }
            , c.MAX_PROFILE_DURATION_MS)
              , h = e.end.bind(e);
            e.end = function() {
                return e ? (p().then( () => {
                    h()
                }
                , () => {
                    h()
                }
                ),
                e) : h()
            }
        }
    },
    21830: function(e, t, n) {
        "use strict";
        n.d(t, {
            MAX_PROFILE_DURATION_MS: function() {
                return C
            },
            addProfileToGlobalCache: function() {
                return R
            },
            addProfilesToEnvelope: function() {
                return I
            },
            createProfilingEvent: function() {
                return N
            },
            findProfiledTransactionsFromEnvelope: function() {
                return T
            },
            getActiveProfilesCount: function() {
                return O
            },
            isAutomatedPageLoadSpan: function() {
                return b
            },
            shouldProfileSpan: function() {
                return x
            },
            startJSSelfProfile: function() {
                return k
            },
            takeProfileFromGlobalCache: function() {
                return D
            }
        });
        var r = n("54683")
          , i = n("75047")
          , o = n("58253")
          , a = n("24317")
          , s = n("42878")
          , u = n("99562")
          , l = n("65492")
          , c = n("52366")
          , d = n("95779")
          , p = n("8399");
        let f = String(0)
          , h = ""
          , g = ""
          , m = ""
          , _ = p.WINDOW.navigator && p.WINDOW.navigator.userAgent || ""
          , v = ""
          , y = p.WINDOW.navigator && p.WINDOW.navigator.language || p.WINDOW.navigator && p.WINDOW.navigator.languages && p.WINDOW.navigator.languages["0"] || ""
          , S = p.WINDOW.navigator && p.WINDOW.navigator.userAgentData;
        var E;
        if ("object" == typeof (E = S) && null !== E && "getHighEntropyValues"in E)
            S.getHighEntropyValues(["architecture", "model", "platform", "platformVersion", "fullVersionList"]).then(e => {
                if (h = e.platform || "",
                m = e.architecture || "",
                v = e.model || "",
                g = e.platformVersion || "",
                e.fullVersionList && e.fullVersionList.length > 0) {
                    let t = e.fullVersionList[e.fullVersionList.length - 1];
                    _ = `${t.brand} ${t.version}`
                }
            }
            ).catch(e => void 0);
        function b(e) {
            return "pageload" === (0,
            s.spanToJSON)(e).op
        }
        function I(e, t) {
            if (!t.length)
                return e;
            for (let n of t)
                e[1].push([{
                    type: "profile"
                }, n]);
            return e
        }
        function T(e) {
            let t = [];
            return (0,
            u.forEachEnvelopeItem)(e, (e, n) => {
                if ("transaction" === n)
                    for (let n = 1; n < e.length; n++) {
                        let r = e[n];
                        r && r.contexts && r.contexts.profile && r.contexts.profile.profile_id && t.push(e[n])
                    }
            }
            ),
            t
        }
        let w = !1
          , C = 3e4;
        function k() {
            let e = p.WINDOW.Profiler;
            if ("function" != typeof e) {
                d.DEBUG_BUILD && r.logger.log("[Profiling] Profiling is not supported by this browser, Profiler interface missing on window object.");
                return
            }
            try {
                return new e({
                    sampleInterval: 10,
                    maxBufferSize: Math.floor(C / 10)
                })
            } catch (e) {
                d.DEBUG_BUILD && (r.logger.log("[Profiling] Failed to initialize the Profiling constructor, this is likely due to a missing 'Document-Policy': 'js-profiling' header."),
                r.logger.log("[Profiling] Disabling profiling for current user session.")),
                w = !0
            }
        }
        function x(e) {
            if (w)
                return d.DEBUG_BUILD && r.logger.log("[Profiling] Profiling has been disabled for the duration of the current user session."),
                !1;
            if (!e.isRecording())
                return d.DEBUG_BUILD && r.logger.log("[Profiling] Discarding profile because transaction was not sampled."),
                !1;
            let t = (0,
            l.getClient)()
              , n = t && t.getOptions();
            if (!n)
                return d.DEBUG_BUILD && r.logger.log("[Profiling] Profiling disabled, no options found."),
                !1;
            let i = n.profilesSampleRate;
            var o;
            return ("number" != typeof (o = i) && "boolean" != typeof o || "number" == typeof o && isNaN(o) ? (d.DEBUG_BUILD && r.logger.warn(`[Profiling] Invalid sample rate. Sample rate must be a boolean or a number between 0 and 1. Got ${JSON.stringify(o)} of type ${JSON.stringify(typeof o)}.`),
            !1) : !0 === o || !1 === o || !(o < 0) && !(o > 1) || (d.DEBUG_BUILD && r.logger.warn(`[Profiling] Invalid sample rate. Sample rate must be between 0 and 1. Got ${o}.`),
            !1)) ? i ? !!(!0 === i || Math.random() < i) || (d.DEBUG_BUILD && r.logger.log(`[Profiling] Discarding profile because it's not included in the random sample (sampling rate = ${Number(i)})`),
            !1) : (d.DEBUG_BUILD && r.logger.log("[Profiling] Discarding profile because a negative sampling decision was inherited or profileSampleRate is set to 0"),
            !1) : (d.DEBUG_BUILD && r.logger.warn("[Profiling] Discarding profile because of invalid sample rate."),
            !1)
        }
        function N(e, t, n, s) {
            var u;
            return ((u = n).samples.length < 2 ? (d.DEBUG_BUILD && r.logger.log("[Profiling] Discarding profile because it contains less than 2 samples"),
            !1) : !!u.frames.length || (d.DEBUG_BUILD && r.logger.log("[Profiling] Discarding profile because it contains no frames"),
            !1)) ? function(e, t, n, s) {
                if ("transaction" !== s.type)
                    throw TypeError("Profiling events may only be attached to transactions, this should never occur.");
                if (null == n)
                    throw TypeError(`Cannot construct profiling event envelope without a valid profile. Got ${n} instead.`);
                let u = function(e) {
                    let t = e && e.contexts && e.contexts.trace && e.contexts.trace.trace_id;
                    return ("string" == typeof t && 32 !== t.length && d.DEBUG_BUILD && r.logger.log(`[Profiling] Invalid traceId: ${t} on profiled event`),
                    "string" != typeof t) ? "" : t
                }(s)
                  , S = function(e) {
                    return "thread_metadata"in e ? e : function(e) {
                        let t, n = 0, r = {
                            samples: [],
                            stacks: [],
                            frames: [],
                            thread_metadata: {
                                [f]: {
                                    name: "main"
                                }
                            }
                        }, o = e.samples[0];
                        if (!o)
                            return r;
                        let a = o.timestamp
                          , s = "number" == typeof performance.timeOrigin ? performance.timeOrigin : i.browserPerformanceTimeOrigin || 0
                          , u = s - (i.browserPerformanceTimeOrigin || s);
                        return e.samples.forEach( (i, o) => {
                            if (void 0 === i.stackId) {
                                void 0 === t && (t = n,
                                r.stacks[t] = [],
                                n++),
                                r.samples[o] = {
                                    elapsed_since_start_ns: ((i.timestamp + u - a) * 1e6).toFixed(0),
                                    stack_id: t,
                                    thread_id: f
                                };
                                return
                            }
                            let s = e.stacks[i.stackId]
                              , l = [];
                            for (; s; ) {
                                l.push(s.frameId);
                                let t = e.frames[s.frameId];
                                t && void 0 === r.frames[s.frameId] && (r.frames[s.frameId] = {
                                    function: t.name,
                                    abs_path: "number" == typeof t.resourceId ? e.resources[t.resourceId] : void 0,
                                    lineno: t.line,
                                    colno: t.column
                                }),
                                s = void 0 === s.parentId ? void 0 : e.stacks[s.parentId]
                            }
                            let c = {
                                elapsed_since_start_ns: ((i.timestamp + u - a) * 1e6).toFixed(0),
                                stack_id: n,
                                thread_id: f
                            };
                            r.stacks[n] = l,
                            r.samples[o] = c,
                            n++
                        }
                        ),
                        r
                    }(e)
                }(n)
                  , E = t || ("number" == typeof s.start_timestamp ? 1e3 * s.start_timestamp : 1e3 * (0,
                i.timestampInSeconds)())
                  , b = "number" == typeof s.timestamp ? 1e3 * s.timestamp : 1e3 * (0,
                i.timestampInSeconds)();
                return {
                    event_id: e,
                    timestamp: new Date(E).toISOString(),
                    platform: "javascript",
                    version: "1",
                    release: s.release || "",
                    environment: s.environment || o.DEFAULT_ENVIRONMENT,
                    runtime: {
                        name: "javascript",
                        version: p.WINDOW.navigator.userAgent
                    },
                    os: {
                        name: h,
                        version: g,
                        build_number: _
                    },
                    device: {
                        locale: y,
                        model: v,
                        manufacturer: _,
                        architecture: m,
                        is_emulator: !1
                    },
                    debug_meta: {
                        images: function(e) {
                            let t = (0,
                            l.getClient)()
                              , n = t && t.getOptions()
                              , r = n && n.stackParser;
                            return r ? (0,
                            c.getDebugImagesForResources)(r, e) : []
                        }(n.resources)
                    },
                    profile: S,
                    transactions: [{
                        name: s.transaction || "",
                        id: s.event_id || (0,
                        a.uuid4)(),
                        trace_id: u,
                        active_thread_id: f,
                        relative_start_ns: "0",
                        relative_end_ns: ((b - E) * 1e6).toFixed(0)
                    }]
                }
            }(e, t, n, s) : null
        }
        let A = new Map;
        function O() {
            return A.size
        }
        function D(e) {
            let t = A.get(e);
            return t && A.delete(e),
            t
        }
        function R(e, t) {
            if (A.set(e, t),
            A.size > 30) {
                let e = A.keys().next().value;
                A.delete(e)
            }
        }
    },
    39896: function(e, t, n) {
        "use strict";
        n.d(t, {
            captureUserFeedback: function() {
                return A
            },
            forceLoad: function() {
                return x
            },
            getDefaultIntegrations: function() {
                return w
            },
            init: function() {
                return C
            },
            onLoad: function() {
                return N
            },
            showReportDialog: function() {
                return k
            }
        });
        var r = n("72285")
          , i = n("5882")
          , o = n("33974")
          , a = n("54683")
          , s = n("5229")
          , u = n("32237")
          , l = n("11945")
          , c = n("77702")
          , d = n("65492")
          , p = n("70585")
          , f = n("87996")
          , h = n("23441")
          , g = n("95779")
          , m = n("8399")
          , _ = n("66484")
          , v = n("44284")
          , y = n("93409")
          , S = n("75282")
          , E = n("48483")
          , b = n("65771")
          , I = n("35415")
          , T = n("43955");
        function w(e) {
            let t = [(0,
            r.inboundFiltersIntegration)(), (0,
            i.functionToStringIntegration)(), (0,
            v.browserApiErrorsIntegration)(), (0,
            _.breadcrumbsIntegration)(), (0,
            S.globalHandlersIntegration)(), (0,
            b.linkedErrorsIntegration)(), (0,
            o.dedupeIntegration)(), (0,
            E.httpContextIntegration)()];
            return !1 !== e.autoSessionTracking && t.push((0,
            y.browserSessionIntegration)()),
            t
        }
        function C() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
              , t = function() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                  , t = {
                    defaultIntegrations: w(e),
                    release: "string" == typeof __SENTRY_RELEASE__ ? __SENTRY_RELEASE__ : m.WINDOW.SENTRY_RELEASE && m.WINDOW.SENTRY_RELEASE.id ? m.WINDOW.SENTRY_RELEASE.id : void 0,
                    autoSessionTracking: !0,
                    sendClientReports: !0
                };
                return null == e.defaultIntegrations && delete e.defaultIntegrations,
                {
                    ...t,
                    ...e
                }
            }(e);
            if (!t.skipBrowserExtensionCheck && function() {
                let e = void 0 !== m.WINDOW.window && m.WINDOW;
                if (!e)
                    return !1;
                let t = e.chrome ? "chrome" : "browser"
                  , n = e[t]
                  , r = n && n.runtime && n.runtime.id
                  , i = m.WINDOW.location && m.WINDOW.location.href || ""
                  , o = !!r && m.WINDOW === m.WINDOW.top && ["chrome-extension:", "moz-extension:", "ms-browser-extension:", "safari-web-extension:"].some(e => i.startsWith(`${e}//`))
                  , a = void 0 !== e.nw;
                return !!r && !o && !a
            }()) {
                (0,
                a.consoleSandbox)( () => {
                    console.error("[Sentry] You cannot run Sentry this way in a browser extension, check: https://docs.sentry.io/platforms/javascript/best-practices/browser-extensions/")
                }
                );
                return
            }
            g.DEBUG_BUILD && !(0,
            s.supportsFetch)() && a.logger.warn("No Fetch API detected. The Sentry SDK requires a Fetch API compatible environment to send events. Please add a Fetch API polyfill.");
            let n = {
                ...t,
                stackParser: (0,
                u.stackParserFromStackParserOptions)(t.stackParser || I.defaultStackParser),
                integrations: (0,
                l.getIntegrationsToSetup)(t),
                transport: t.transport || T.makeFetchTransport
            };
            return (0,
            c.initAndBind)(h.BrowserClient, n)
        }
        function k() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            if (!m.WINDOW.document) {
                g.DEBUG_BUILD && a.logger.error("Global document not defined in showReportDialog call");
                return
            }
            let t = (0,
            d.getCurrentScope)()
              , n = t.getClient()
              , r = n && n.getDsn();
            if (!r) {
                g.DEBUG_BUILD && a.logger.error("DSN not configured for showReportDialog call");
                return
            }
            if (t && (e.user = {
                ...t.getUser(),
                ...e.user
            }),
            !e.eventId) {
                let t = (0,
                p.lastEventId)();
                t && (e.eventId = t)
            }
            let i = m.WINDOW.document.createElement("script");
            i.async = !0,
            i.crossOrigin = "anonymous",
            i.src = (0,
            f.getReportDialogEndpoint)(r, e),
            e.onLoad && (i.onload = e.onLoad);
            let {onClose: o} = e;
            if (o) {
                let e = t => {
                    if ("__sentry_reportdialog_closed__" === t.data)
                        try {
                            o()
                        } finally {
                            m.WINDOW.removeEventListener("message", e)
                        }
                }
                ;
                m.WINDOW.addEventListener("message", e)
            }
            let s = m.WINDOW.document.head || m.WINDOW.document.body;
            s ? s.appendChild(i) : g.DEBUG_BUILD && a.logger.error("Not injecting report dialog. No injection point found in HTML")
        }
        function x() {}
        function N(e) {
            e()
        }
        function A(e) {
            let t = (0,
            d.getClient)();
            t && t.captureUserFeedback(e)
        }
    },
    35415: function(e, t, n) {
        "use strict";
        n.d(t, {
            chromeStackLineParser: function() {
                return u
            },
            defaultStackLineParsers: function() {
                return v
            },
            defaultStackParser: function() {
                return y
            },
            geckoStackLineParser: function() {
                return d
            },
            opera10StackLineParser: function() {
                return g
            },
            opera11StackLineParser: function() {
                return _
            },
            winjsStackLineParser: function() {
                return f
            }
        });
        var r = n("32237");
        function i(e, t, n, i) {
            let o = {
                filename: e,
                function: "<anonymous>" === t ? r.UNKNOWN_FUNCTION : t,
                in_app: !0
            };
            return void 0 !== n && (o.lineno = n),
            void 0 !== i && (o.colno = i),
            o
        }
        let o = /^\s*at (\S+?)(?::(\d+))(?::(\d+))\s*$/i
          , a = /^\s*at (?:(.+?\)(?: \[.+\])?|.*?) ?\((?:address at )?)?(?:async )?((?:<anonymous>|[-a-z]+:|.*bundle|\/)?.*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i
          , s = /\((\S*)(?::(\d+))(?::(\d+))\)/
          , u = [30, e => {
            let t = o.exec(e);
            if (t) {
                let[,e,n,o] = t;
                return i(e, r.UNKNOWN_FUNCTION, +n, +o)
            }
            let n = a.exec(e);
            if (n) {
                if (n[2] && 0 === n[2].indexOf("eval")) {
                    let e = s.exec(n[2]);
                    e && (n[2] = e[1],
                    n[3] = e[2],
                    n[4] = e[3])
                }
                let[e,t] = S(n[1] || r.UNKNOWN_FUNCTION, n[2]);
                return i(t, e, n[3] ? +n[3] : void 0, n[4] ? +n[4] : void 0)
            }
        }
        ]
          , l = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:[-a-z]+)?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i
          , c = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i
          , d = [50, e => {
            let t = l.exec(e);
            if (t) {
                if (t[3] && t[3].indexOf(" > eval") > -1) {
                    let e = c.exec(t[3]);
                    e && (t[1] = t[1] || "eval",
                    t[3] = e[1],
                    t[4] = e[2],
                    t[5] = "")
                }
                let e = t[3]
                  , n = t[1] || r.UNKNOWN_FUNCTION;
                return [n,e] = S(n, e),
                i(e, n, t[4] ? +t[4] : void 0, t[5] ? +t[5] : void 0)
            }
        }
        ]
          , p = /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:[-a-z]+):.*?):(\d+)(?::(\d+))?\)?\s*$/i
          , f = [40, e => {
            let t = p.exec(e);
            return t ? i(t[2], t[1] || r.UNKNOWN_FUNCTION, +t[3], t[4] ? +t[4] : void 0) : void 0
        }
        ]
          , h = / line (\d+).*script (?:in )?(\S+)(?:: in function (\S+))?$/i
          , g = [10, e => {
            let t = h.exec(e);
            return t ? i(t[2], t[3] || r.UNKNOWN_FUNCTION, +t[1]) : void 0
        }
        ]
          , m = / line (\d+), column (\d+)\s*(?:in (?:<anonymous function: ([^>]+)>|([^)]+))\(.*\))? in (.*):\s*$/i
          , _ = [20, e => {
            let t = m.exec(e);
            return t ? i(t[5], t[3] || t[4] || r.UNKNOWN_FUNCTION, +t[1], +t[2]) : void 0
        }
        ]
          , v = [u, d]
          , y = (0,
        r.createStackParser)(...v)
          , S = (e, t) => {
            let n = -1 !== e.indexOf("safari-extension")
              , i = -1 !== e.indexOf("safari-web-extension");
            return n || i ? [-1 !== e.indexOf("@") ? e.split("@")[0] : r.UNKNOWN_FUNCTION, n ? `safari-extension:${t}` : `safari-web-extension:${t}`] : [e, t]
        }
    },
    6904: function(e, t, n) {
        "use strict";
        n.d(t, {
            registerBackgroundTabDetection: function() {
                return u
            }
        });
        var r = n("42878")
          , i = n("54683")
          , o = n("1020")
          , a = n("95779")
          , s = n("8399");
        function u() {
            s.WINDOW && s.WINDOW.document ? s.WINDOW.document.addEventListener("visibilitychange", () => {
                let e = (0,
                r.getActiveSpan)();
                if (!e)
                    return;
                let t = (0,
                r.getRootSpan)(e);
                if (s.WINDOW.document.hidden && t) {
                    let e = "cancelled"
                      , {op: n, status: s} = (0,
                    r.spanToJSON)(t);
                    a.DEBUG_BUILD && i.logger.log(`[Tracing] Transaction: ${e} -> since tab moved to the background, op: ${n}`),
                    !s && t.setStatus({
                        code: o.SPAN_STATUS_ERROR,
                        message: e
                    }),
                    t.setAttribute("sentry.cancellation_reason", "document.hidden"),
                    t.end()
                }
            }
            ) : a.DEBUG_BUILD && i.logger.warn("[Tracing] Could not set up background tab detection due to lack of global document")
        }
    },
    72622: function(e, t, n) {
        "use strict";
        n.d(t, {
            browserTracingIntegration: function() {
                return I
            },
            startBrowserTracingNavigationSpan: function() {
                return w
            },
            startBrowserTracingPageLoadSpan: function() {
                return T
            }
        });
        var r = n("84725")
          , i = n("85912")
          , o = n("17451")
          , a = n("64992")
          , s = n("69325")
          , u = n("61191")
          , l = n("95031")
          , c = n("42878")
          , d = n("54683")
          , p = n("65492")
          , f = n("96155")
          , h = n("10581")
          , g = n("75047")
          , m = n("38859")
          , _ = n("87586")
          , v = n("95779")
          , y = n("8399")
          , S = n("6904")
          , E = n("91738");
        let b = {
            ...a.TRACING_DEFAULTS,
            instrumentNavigation: !0,
            instrumentPageLoad: !0,
            markBackgroundSpan: !0,
            enableLongTask: !0,
            enableLongAnimationFrame: !0,
            enableInp: !0,
            _experiments: {},
            ...E.defaultRequestInstrumentationOptions
        }
          , I = function() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            (0,
            s.registerSpanErrorInstrumentation)();
            let {enableInp: t, enableLongTask: n, enableLongAnimationFrame: m, _experiments: {enableInteractions: _, enableStandaloneClsSpans: I}, beforeStartSpan: k, idleTimeout: x, finalTimeout: N, childSpanTimeout: A, markBackgroundSpan: O, traceFetch: D, traceXHR: R, trackFetchStreamPerformance: M, shouldCreateSpanForRequest: L, enableHTTPTimings: U, instrumentPageLoad: P, instrumentNavigation: B} = {
                ...b,
                ...e
            }
              , F = (0,
            r.startTrackingWebVitals)({
                recordClsStandaloneSpans: I || !1
            });
            t && (0,
            i.startTrackingINP)(),
            m && u.GLOBAL_OBJ.PerformanceObserver && PerformanceObserver.supportedEntryTypes && PerformanceObserver.supportedEntryTypes.includes("long-animation-frame") ? (0,
            r.startTrackingLongAnimationFrames)() : n && (0,
            r.startTrackingLongTasks)(),
            _ && (0,
            r.startTrackingInteractions)();
            let W = {
                name: void 0,
                source: void 0
            };
            function $(e, t) {
                let n = "pageload" === t.op
                  , i = k ? k(t) : t
                  , o = i.attributes || {};
                t.name !== i.name && (o[l.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE] = "custom",
                i.attributes = o),
                W.name = i.name,
                W.source = o[l.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE];
                let s = (0,
                a.startIdleSpan)(i, {
                    idleTimeout: x,
                    finalTimeout: N,
                    childSpanTimeout: A,
                    disableAutoFinish: n,
                    beforeSpanEnd: e => {
                        F(),
                        (0,
                        r.addPerformanceEntries)(e, {
                            recordClsOnPageloadSpan: !I
                        })
                    }
                });
                function u() {
                    ["interactive", "complete"].includes(y.WINDOW.document.readyState) && e.emit("idleSpanEnableAutoFinish", s)
                }
                return n && y.WINDOW.document && (y.WINDOW.document.addEventListener("readystatechange", () => {
                    u()
                }
                ),
                u()),
                s
            }
            return {
                name: "BrowserTracing",
                afterAllSetup(e) {
                    let n, r = y.WINDOW.location && y.WINDOW.location.href;
                    function s() {
                        n && !(0,
                        c.spanToJSON)(n).timestamp && (v.DEBUG_BUILD && d.logger.log(`[Tracing] Finishing current active span with op: ${(0,
                        c.spanToJSON)(n).op}`),
                        n.end())
                    }
                    e.on("startNavigationSpan", t => {
                        (0,
                        p.getClient)() === e && (s(),
                        n = $(e, {
                            op: "navigation",
                            ...t
                        }))
                    }
                    ),
                    e.on("startPageLoadSpan", function(t) {
                        let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        if ((0,
                        p.getClient)() !== e)
                            return;
                        s();
                        let i = r.sentryTrace || C("sentry-trace")
                          , o = r.baggage || C("baggage")
                          , a = (0,
                        f.propagationContextFromHeaders)(i, o);
                        (0,
                        p.getCurrentScope)().setPropagationContext(a),
                        n = $(e, {
                            op: "pageload",
                            ...t
                        })
                    }),
                    e.on("spanEnd", e => {
                        let t = (0,
                        c.spanToJSON)(e).op;
                        if (e !== (0,
                        c.getRootSpan)(e) || "navigation" !== t && "pageload" !== t)
                            return;
                        let n = (0,
                        p.getCurrentScope)()
                          , r = n.getPropagationContext();
                        n.setPropagationContext({
                            ...r,
                            sampled: void 0 !== r.sampled ? r.sampled : (0,
                            c.spanIsSampled)(e),
                            dsc: r.dsc || (0,
                            h.getDynamicSamplingContextFromSpan)(e)
                        })
                    }
                    ),
                    y.WINDOW.location && (P && T(e, {
                        name: y.WINDOW.location.pathname,
                        startTime: g.browserPerformanceTimeOrigin ? g.browserPerformanceTimeOrigin / 1e3 : void 0,
                        attributes: {
                            [l.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE]: "url",
                            [l.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: "auto.pageload.browser"
                        }
                    }),
                    B && (0,
                    o.addHistoryInstrumentationHandler)(t => {
                        let {to: n, from: i} = t;
                        if (void 0 === i && r && -1 !== r.indexOf(n)) {
                            r = void 0;
                            return
                        }
                        i !== n && (r = void 0,
                        w(e, {
                            name: y.WINDOW.location.pathname,
                            attributes: {
                                [l.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE]: "url",
                                [l.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: "auto.navigation.browser"
                            }
                        }))
                    }
                    )),
                    O && (0,
                    S.registerBackgroundTabDetection)(),
                    _ && function(e, t, n, r) {
                        let i;
                        y.WINDOW.document && addEventListener("click", () => {
                            let o = "ui.action.click"
                              , s = (0,
                            c.getActiveSpan)()
                              , u = s && (0,
                            c.getRootSpan)(s);
                            if (u && ["navigation", "pageload"].includes((0,
                            c.spanToJSON)(u).op)) {
                                v.DEBUG_BUILD && d.logger.warn(`[Tracing] Did not create ${o} span because a pageload or navigation span is in progress.`);
                                return
                            }
                            if (i && (i.setAttribute(l.SEMANTIC_ATTRIBUTE_SENTRY_IDLE_SPAN_FINISH_REASON, "interactionInterrupted"),
                            i.end(),
                            i = void 0),
                            !r.name) {
                                v.DEBUG_BUILD && d.logger.warn(`[Tracing] Did not create ${o} transaction because _latestRouteName is missing.`);
                                return
                            }
                            i = (0,
                            a.startIdleSpan)({
                                name: r.name,
                                op: o,
                                attributes: {
                                    [l.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE]: r.source || "url"
                                }
                            }, {
                                idleTimeout: e,
                                finalTimeout: t,
                                childSpanTimeout: n
                            })
                        }
                        , {
                            once: !1,
                            capture: !0
                        })
                    }(x, N, A, W),
                    t && (0,
                    i.registerInpInteractionListener)(),
                    (0,
                    E.instrumentOutgoingRequests)(e, {
                        traceFetch: D,
                        traceXHR: R,
                        trackFetchStreamPerformance: M,
                        tracePropagationTargets: e.getOptions().tracePropagationTargets,
                        shouldCreateSpanForRequest: L,
                        enableHTTPTimings: U
                    })
                }
            }
        };
        function T(e, t, n) {
            e.emit("startPageLoadSpan", t, n),
            (0,
            p.getCurrentScope)().setTransactionName(t.name);
            let r = (0,
            c.getActiveSpan)();
            return "pageload" === (r && (0,
            c.spanToJSON)(r).op) ? r : void 0
        }
        function w(e, t) {
            (0,
            p.getIsolationScope)().setPropagationContext({
                traceId: (0,
                m.generateTraceId)()
            }),
            (0,
            p.getCurrentScope)().setPropagationContext({
                traceId: (0,
                m.generateTraceId)()
            }),
            e.emit("startNavigationSpan", t),
            (0,
            p.getCurrentScope)().setTransactionName(t.name);
            let n = (0,
            c.getActiveSpan)();
            return "navigation" === (n && (0,
            c.spanToJSON)(n).op) ? n : void 0
        }
        function C(e) {
            let t = (0,
            _.getDomElement)(`meta[name=${e}]`);
            return t ? t.getAttribute("content") : void 0
        }
    },
    91738: function(e, t, n) {
        "use strict";
        n.d(t, {
            defaultRequestInstrumentationOptions: function() {
                return S
            },
            instrumentOutgoingRequests: function() {
                return E
            }
        });
        var r = n("38385")
          , i = n("99785")
          , o = n("49466")
          , a = n("81353")
          , s = n("83139")
          , u = n("42878")
          , l = n("75047")
          , c = n("2030")
          , d = n("92926")
          , p = n("1020")
          , f = n("13036")
          , h = n("95031")
          , g = n("22305")
          , m = n("29723")
          , _ = n("8399");
        let v = new WeakMap
          , y = new Map
          , S = {
            traceFetch: !0,
            traceXHR: !0,
            enableHTTPTimings: !0,
            trackFetchStreamPerformance: !1
        };
        function E(e, t) {
            let {traceFetch: n, traceXHR: i, trackFetchStreamPerformance: l, shouldCreateSpanForRequest: E, enableHTTPTimings: I, tracePropagationTargets: w} = {
                traceFetch: S.traceFetch,
                traceXHR: S.traceXHR,
                trackFetchStreamPerformance: S.trackFetchStreamPerformance,
                ...t
            }
              , C = "function" == typeof E ? E : e => !0
              , k = e => (function(e, t) {
                let n = _.WINDOW.location && _.WINDOW.location.href;
                if (n) {
                    let r, i;
                    try {
                        r = new URL(e,n),
                        i = new URL(n).origin
                    } catch (e) {
                        return !1
                    }
                    let o = r.origin === i;
                    return t ? (0,
                    c.stringMatchesSomePattern)(r.toString(), t) || o && (0,
                    c.stringMatchesSomePattern)(r.pathname, t) : o
                }
                {
                    let n = !!e.match(/^\/(?!\/)/);
                    return t ? (0,
                    c.stringMatchesSomePattern)(e, t) : n
                }
            }
            )(e, w)
              , x = {};
            n && (e.addEventProcessor(e => ("transaction" === e.type && e.spans && e.spans.forEach(e => {
                if ("http.client" === e.op) {
                    let t = y.get(e.span_id);
                    t && (e.timestamp = t / 1e3,
                    y.delete(e.span_id))
                }
            }
            ),
            e)),
            l && (0,
            o.addFetchEndInstrumentationHandler)(e => {
                if (e.response) {
                    let t = v.get(e.response);
                    t && e.endTimestamp && y.set(t, e.endTimestamp)
                }
            }
            ),
            (0,
            o.addFetchInstrumentationHandler)(e => {
                let t = (0,
                a.instrumentFetchRequest)(e, C, k, x);
                if (e.response && e.fetchData.__span && v.set(e.response, e.fetchData.__span),
                t) {
                    let n = T(e.fetchData.url)
                      , r = n ? (0,
                    s.parseUrl)(n).host : void 0;
                    t.setAttributes({
                        "http.url": n,
                        "server.address": r
                    })
                }
                I && t && b(t)
            }
            )),
            i && (0,
            r.addXhrInstrumentationHandler)(e => {
                let t = function(e, t, n, i) {
                    let o = e.xhr
                      , a = o && o[r.SENTRY_XHR_DATA_KEY];
                    if (!o || o.__sentry_own_request__ || !a)
                        return;
                    let l = (0,
                    d.hasTracingEnabled)() && t(a.url);
                    if (e.endTimestamp && l) {
                        let e = o.__sentry_xhr_span_id__;
                        if (!e)
                            return;
                        let t = i[e];
                        t && void 0 !== a.status_code && ((0,
                        p.setHttpStatus)(t, a.status_code),
                        t.end(),
                        delete i[e]);
                        return
                    }
                    let c = T(a.url)
                      , _ = c ? (0,
                    s.parseUrl)(c).host : void 0
                      , v = !!(0,
                    u.getActiveSpan)()
                      , y = l && v ? (0,
                    f.startInactiveSpan)({
                        name: `${a.method} ${a.url}`,
                        attributes: {
                            type: "xhr",
                            "http.method": a.method,
                            "http.url": c,
                            url: a.url,
                            "server.address": _,
                            [h.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: "auto.http.browser",
                            [h.SEMANTIC_ATTRIBUTE_SENTRY_OP]: "http.client"
                        }
                    }) : new g.SentryNonRecordingSpan;
                    return o.__sentry_xhr_span_id__ = y.spanContext().spanId,
                    i[o.__sentry_xhr_span_id__] = y,
                    n(a.url) && function(e, t) {
                        let {"sentry-trace": n, baggage: r} = (0,
                        m.getTraceData)({
                            span: t
                        });
                        n && function(e, t, n) {
                            try {
                                e.setRequestHeader("sentry-trace", t),
                                n && e.setRequestHeader("baggage", n)
                            } catch (e) {}
                        }(e, n, r)
                    }(o, (0,
                    d.hasTracingEnabled)() && v ? y : void 0),
                    y
                }(e, C, k, x);
                I && t && b(t)
            }
            )
        }
        function b(e) {
            let {url: t} = (0,
            u.spanToJSON)(e).data || {};
            if (!t || "string" != typeof t)
                return;
            let n = (0,
            i.addPerformanceInstrumentationHandler)("resource", r => {
                let {entries: i} = r;
                i.forEach(r => {
                    var i;
                    if ("resource" === (i = r).entryType && "initiatorType"in i && "string" == typeof i.nextHopProtocol && ("fetch" === i.initiatorType || "xmlhttprequest" === i.initiatorType) && r.name.endsWith(t))
                        (function(e) {
                            let {name: t, version: n} = function(e) {
                                let t = "unknown"
                                  , n = "unknown"
                                  , r = "";
                                for (let i of e) {
                                    if ("/" === i) {
                                        [t,n] = e.split("/");
                                        break
                                    }
                                    if (!isNaN(Number(i))) {
                                        t = "h" === r ? "http" : r,
                                        n = e.split(r)[1];
                                        break
                                    }
                                    r += i
                                }
                                return r === e && (t = r),
                                {
                                    name: t,
                                    version: n
                                }
                            }(e.nextHopProtocol)
                              , r = [];
                            return (r.push(["network.protocol.version", n], ["network.protocol.name", t]),
                            l.browserPerformanceTimeOrigin) ? [...r, ["http.request.redirect_start", I(e.redirectStart)], ["http.request.fetch_start", I(e.fetchStart)], ["http.request.domain_lookup_start", I(e.domainLookupStart)], ["http.request.domain_lookup_end", I(e.domainLookupEnd)], ["http.request.connect_start", I(e.connectStart)], ["http.request.secure_connection_start", I(e.secureConnectionStart)], ["http.request.connection_end", I(e.connectEnd)], ["http.request.request_start", I(e.requestStart)], ["http.request.response_start", I(e.responseStart)], ["http.request.response_end", I(e.responseEnd)]] : r
                        }
                        )(r).forEach(t => e.setAttribute(...t)),
                        setTimeout(n)
                }
                )
            }
            )
        }
        function I() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
            return ((l.browserPerformanceTimeOrigin || performance.timeOrigin) + e) / 1e3
        }
        function T(e) {
            try {
                return new URL(e,_.WINDOW.location.origin).href
            } catch (e) {
                return
            }
        }
    },
    43955: function(e, t, n) {
        "use strict";
        n.d(t, {
            makeFetchTransport: function() {
                return a
            }
        });
        var r = n("54816")
          , i = n("81567")
          , o = n("14430");
        function a(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : (0,
            r.getNativeImplementation)("fetch")
              , n = 0
              , a = 0;
            return (0,
            o.createTransport)(e, function(o) {
                let s = o.body.length;
                n += s,
                a++;
                let u = {
                    body: o.body,
                    method: "POST",
                    referrerPolicy: "origin",
                    headers: e.headers,
                    keepalive: n <= 6e4 && a < 15,
                    ...e.fetchOptions
                };
                if (!t)
                    return (0,
                    r.clearCachedImplementation)("fetch"),
                    (0,
                    i.rejectedSyncPromise)("No fetch implementation available");
                try {
                    return t(e.url, u).then(e => (n -= s,
                    a--,
                    {
                        statusCode: e.status,
                        headers: {
                            "x-sentry-rate-limits": e.headers.get("X-Sentry-Rate-Limits"),
                            "retry-after": e.headers.get("Retry-After")
                        }
                    }))
                } catch (e) {
                    return (0,
                    r.clearCachedImplementation)("fetch"),
                    n -= s,
                    a--,
                    (0,
                    i.rejectedSyncPromise)(e)
                }
            })
        }
    },
    44329: function(e, t, n) {
        "use strict";
        n.d(t, {
            makeBrowserOfflineTransport: function() {
                return c
            }
        });
        var r = n("99562")
          , i = n("78444")
          , o = n("8399")
          , a = n("43955");
        function s(e) {
            return new Promise( (t, n) => {
                e.oncomplete = e.onsuccess = () => t(e.result),
                e.onabort = e.onerror = () => n(e.error)
            }
            )
        }
        function u(e) {
            return s(e.getAllKeys())
        }
        function l(e) {
            let t;
            function n() {
                return void 0 == t && (t = function(e, t) {
                    let n = indexedDB.open(e);
                    n.onupgradeneeded = () => n.result.createObjectStore(t);
                    let r = s(n);
                    return e => r.then(n => e(n.transaction(t, "readwrite").objectStore(t)))
                }(e.dbName || "sentry-offline", e.storeName || "queue")),
                t
            }
            return {
                push: async t => {
                    try {
                        let l = await (0,
                        r.serializeEnvelope)(t);
                        var i, o, a;
                        await (i = n(),
                        o = l,
                        a = e.maxQueueSize || 30,
                        i(e => u(e).then(t => {
                            if (!(t.length >= a))
                                return e.put(o, Math.max(...t, 0) + 1),
                                s(e.transaction)
                        }
                        )))
                    } catch (e) {}
                }
                ,
                unshift: async t => {
                    try {
                        let l = await (0,
                        r.serializeEnvelope)(t);
                        var i, o, a;
                        await (i = n(),
                        o = l,
                        a = e.maxQueueSize || 30,
                        i(e => u(e).then(t => {
                            if (!(t.length >= a))
                                return e.put(o, Math.min(...t, 0) - 1),
                                s(e.transaction)
                        }
                        )))
                    } catch (e) {}
                }
                ,
                shift: async () => {
                    try {
                        let e = await n()(e => u(e).then(t => {
                            let n = t[0];
                            if (null != n)
                                return s(e.get(n)).then(t => (e.delete(n),
                                s(e.transaction).then( () => t)))
                        }
                        ));
                        if (e)
                            return (0,
                            r.parseEnvelope)(e)
                    } catch (e) {}
                }
            }
        }
        function c() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : a.makeFetchTransport;
            var t;
            return t = (0,
            i.makeOfflineTransport)(e),
            e => {
                let n = t({
                    ...e,
                    createStore: l
                });
                return o.WINDOW.addEventListener("online", async e => {
                    await n.flush()
                }
                ),
                n
            }
        }
    },
    31344: function(e, t, n) {
        "use strict";
        n.d(t, {
            createUserFeedbackEnvelope: function() {
                return o
            }
        });
        var r = n("2666")
          , i = n("99562");
        function o(e, t) {
            let {metadata: n, tunnel: o, dsn: a} = t
              , s = {
                event_id: e.event_id,
                sent_at: new Date().toISOString(),
                ...n && n.sdk && {
                    sdk: {
                        name: n.sdk.name,
                        version: n.sdk.version
                    }
                },
                ...!!o && !!a && {
                    dsn: (0,
                    r.dsnToString)(a)
                }
            }
              , u = function(e) {
                return [{
                    type: "user_report"
                }, e]
            }(e);
            return (0,
            i.createEnvelope)(s, [u])
        }
    },
    61487: function(e, t, n) {
        "use strict";
        n.d(t, {
            copyFlagsFromScopeToEvent: function() {
                return a
            },
            insertFlagToScope: function() {
                return s
            }
        });
        var r = n("65492")
          , i = n("54683")
          , o = n("95779");
        function a(e) {
            let t = (0,
            r.getCurrentScope)().getScopeData().contexts.flags
              , n = t ? t.values : [];
            return n.length ? (void 0 === e.contexts && (e.contexts = {}),
            e.contexts.flags = {
                values: [...n]
            },
            e) : e
        }
        function s(e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 100
              , a = (0,
            r.getCurrentScope)().getScopeData().contexts;
            !a.flags && (a.flags = {
                values: []
            }),
            function(e, t, n, r) {
                if ("boolean" != typeof n)
                    return;
                if (e.length > r) {
                    o.DEBUG_BUILD && i.logger.error(`[Feature Flags] insertToFlagBuffer called on a buffer larger than maxSize=${r}`);
                    return
                }
                let a = e.findIndex(e => e.flag === t);
                -1 !== a && e.splice(a, 1),
                e.length === r && e.shift(),
                e.push({
                    flag: t,
                    result: n
                })
            }(a.flags.values, e, t, n)
        }
    },
    83174: function(e, t, n) {
        "use strict";
        n.d(t, {
            lazyLoadIntegration: function() {
                return u
            }
        });
        var r = n("65492")
          , i = n("48706")
          , o = n("8399");
        let a = {
            replayIntegration: "replay",
            replayCanvasIntegration: "replay-canvas",
            feedbackIntegration: "feedback",
            feedbackModalIntegration: "feedback-modal",
            feedbackScreenshotIntegration: "feedback-screenshot",
            captureConsoleIntegration: "captureconsole",
            contextLinesIntegration: "contextlines",
            linkedErrorsIntegration: "linkederrors",
            debugIntegration: "debug",
            dedupeIntegration: "dedupe",
            extraErrorDataIntegration: "extraerrordata",
            httpClientIntegration: "httpclient",
            reportingObserverIntegration: "reportingobserver",
            rewriteFramesIntegration: "rewriteframes",
            sessionTimingIntegration: "sessiontiming",
            browserProfilingIntegration: "browserprofiling",
            moduleMetadataIntegration: "modulemetadata"
        }
          , s = o.WINDOW;
        async function u(e, t) {
            let n = a[e]
              , u = s.Sentry = s.Sentry || {};
            if (!n)
                throw Error(`Cannot lazy load integration: ${e}`);
            let l = u[e];
            if ("function" == typeof l && !("_isShim"in l))
                return l;
            let c = function(e) {
                let t = (0,
                r.getClient)()
                  , n = t && t.getOptions()
                  , o = n && n.cdnBaseUrl || "https://browser.sentry-cdn.com";
                return new URL(`/${(0,
                i.SDK_VERSION)}/${e}.min.js`,o).toString()
            }(n)
              , d = o.WINDOW.document.createElement("script");
            d.src = c,
            d.crossOrigin = "anonymous",
            d.referrerPolicy = "origin",
            t && d.setAttribute("nonce", t);
            let p = new Promise( (e, t) => {
                d.addEventListener("load", () => e()),
                d.addEventListener("error", t)
            }
            )
              , f = o.WINDOW.document.currentScript
              , h = o.WINDOW.document.body || o.WINDOW.document.head || f && f.parentElement;
            if (h)
                h.appendChild(d);
            else
                throw Error(`Could not find parent element to insert lazy-loaded ${e} script`);
            try {
                await p
            } catch (t) {
                throw Error(`Error when loading integration: ${e}`)
            }
            let g = u[e];
            if ("function" != typeof g)
                throw Error(`Could not load integration: ${e}`);
            return g
        }
    },
    87996: function(e, t, n) {
        "use strict";
        n.d(t, {
            getEnvelopeEndpointWithUrlEncodedAuth: function() {
                return o
            },
            getReportDialogEndpoint: function() {
                return a
            }
        });
        var r = n("2666");
        function i(e) {
            let t = e.protocol ? `${e.protocol}:` : ""
              , n = e.port ? `:${e.port}` : "";
            return `${t}//${e.host}${n}${e.path ? `/${e.path}` : ""}/api/`
        }
        function o(e, t, n) {
            var r;
            return t || `${r = e,
            `${i(r)}${r.projectId}/envelope/`}?${function(e, t) {
                let n = {
                    sentry_version: "7"
                };
                return e.publicKey && (n.sentry_key = e.publicKey),
                t && (n.sentry_client = `${t.name}/${t.version}`),
                new URLSearchParams(n).toString()
            }(e, n)}`
        }
        function a(e, t) {
            let n = (0,
            r.makeDsn)(e);
            if (!n)
                return "";
            let o = `${i(n)}embed/error-page/`
              , a = `dsn=${(0,
            r.dsnToString)(n)}`;
            for (let e in t) {
                if ("dsn" !== e) {
                    if ("onClose" !== e) {
                        if ("user" === e) {
                            let e = t.user;
                            if (!e)
                                continue;
                            e.name && (a += `&name=${encodeURIComponent(e.name)}`),
                            e.email && (a += `&email=${encodeURIComponent(e.email)}`)
                        } else
                            a += `&${encodeURIComponent(e)}=${encodeURIComponent(t[e])}`
                    }
                }
            }
            return `${o}?${a}`
        }
    },
    53627: function(e, t, n) {
        "use strict";
        n.d(t, {
            getAsyncContextStrategy: function() {
                return o
            }
        });
        var r = n("37085")
          , i = n("14867");
        function o(e) {
            let t = (0,
            r.getSentryCarrier)(e);
            return t.acs ? t.acs : (0,
            i.getStackAsyncContextStrategy)()
        }
    },
    14867: function(e, t, n) {
        "use strict";
        n.d(t, {
            getStackAsyncContextStrategy: function() {
                return p
            }
        });
        var r = n("39118")
          , i = n("24359")
          , o = n("27364")
          , a = n("37085");
        class s {
            constructor(e, t) {
                let n;
                n = e ? e : new i.Scope;
                let r;
                r = t ? t : new i.Scope,
                this._stack = [{
                    scope: n
                }],
                this._isolationScope = r
            }
            withScope(e) {
                let t = this._pushScope(), n;
                try {
                    n = e(t)
                } catch (e) {
                    throw this._popScope(),
                    e
                }
                return (0,
                o.isThenable)(n) ? n.then(e => (this._popScope(),
                e), e => {
                    throw this._popScope(),
                    e
                }
                ) : (this._popScope(),
                n)
            }
            getClient() {
                return this.getStackTop().client
            }
            getScope() {
                return this.getStackTop().scope
            }
            getIsolationScope() {
                return this._isolationScope
            }
            getStackTop() {
                return this._stack[this._stack.length - 1]
            }
            _pushScope() {
                let e = this.getScope().clone();
                return this._stack.push({
                    client: this.getClient(),
                    scope: e
                }),
                e
            }
            _popScope() {
                return !(this._stack.length <= 1) && !!this._stack.pop()
            }
        }
        function u() {
            let e = (0,
            a.getMainCarrier)()
              , t = (0,
            a.getSentryCarrier)(e);
            return t.stack = t.stack || new s((0,
            r.getDefaultCurrentScope)(),(0,
            r.getDefaultIsolationScope)())
        }
        function l(e) {
            return u().withScope(e)
        }
        function c(e, t) {
            let n = u();
            return n.withScope( () => (n.getStackTop().scope = e,
            t(e)))
        }
        function d(e) {
            return u().withScope( () => e(u().getIsolationScope()))
        }
        function p() {
            return {
                withIsolationScope: d,
                withScope: l,
                withSetScope: c,
                withSetIsolationScope: (e, t) => d(t),
                getCurrentScope: () => u().getScope(),
                getIsolationScope: () => u().getIsolationScope()
            }
        }
    },
    72550: function(e, t, n) {
        "use strict";
        n.d(t, {
            BaseClient: function() {
                return b
            }
        });
        var r = n("87996")
          , i = n("65492")
          , o = n("36812")
          , a = n("93718")
          , s = n("11945")
          , u = n("23013")
          , l = n("10581")
          , c = n("27746")
          , d = n("2666")
          , p = n("99562")
          , f = n("25323")
          , h = n("27364")
          , g = n("54683")
          , m = n("24317")
          , _ = n("81567")
          , v = n("21109")
          , y = n("6009")
          , S = n("42878");
        let E = "Not capturing exception because it's already been captured.";
        class b {
            constructor(e) {
                if (this._options = e,
                this._integrations = {},
                this._numProcessing = 0,
                this._outcomes = {},
                this._hooks = {},
                this._eventProcessors = [],
                e.dsn ? this._dsn = (0,
                d.makeDsn)(e.dsn) : o.DEBUG_BUILD && g.logger.warn("No DSN provided, client will not send events."),
                this._dsn) {
                    let t = (0,
                    r.getEnvelopeEndpointWithUrlEncodedAuth)(this._dsn, e.tunnel, e._metadata ? e._metadata.sdk : void 0);
                    this._transport = e.transport({
                        tunnel: this._options.tunnel,
                        recordDroppedEvent: this.recordDroppedEvent.bind(this),
                        ...e.transportOptions,
                        url: t
                    })
                }
                let t = ["enableTracing", "tracesSampleRate", "tracesSampler"].find(t => t in e && void 0 == e[t]);
                t && (0,
                g.consoleSandbox)( () => {
                    console.warn(`[Sentry] Deprecation warning: \`${t}\` is set to undefined, which leads to tracing being enabled. In v9, a value of \`undefined\` will result in tracing being disabled.`)
                }
                )
            }
            captureException(e, t, n) {
                let r = (0,
                m.uuid4)();
                if ((0,
                m.checkOrSetAlreadyCaught)(e))
                    return o.DEBUG_BUILD && g.logger.log(E),
                    r;
                let i = {
                    event_id: r,
                    ...t
                };
                return this._process(this.eventFromException(e, i).then(e => this._captureEvent(e, i, n))),
                i.event_id
            }
            captureMessage(e, t, n, r) {
                let i = {
                    event_id: (0,
                    m.uuid4)(),
                    ...n
                }
                  , o = (0,
                h.isParameterizedString)(e) ? e : String(e)
                  , a = (0,
                h.isPrimitive)(e) ? this.eventFromMessage(o, t, i) : this.eventFromException(e, i);
                return this._process(a.then(e => this._captureEvent(e, i, r))),
                i.event_id
            }
            captureEvent(e, t, n) {
                let r = (0,
                m.uuid4)();
                if (t && t.originalException && (0,
                m.checkOrSetAlreadyCaught)(t.originalException))
                    return o.DEBUG_BUILD && g.logger.log(E),
                    r;
                let i = {
                    event_id: r,
                    ...t
                }
                  , a = (e.sdkProcessingMetadata || {}).capturedSpanScope;
                return this._process(this._captureEvent(e, i, a || n)),
                i.event_id
            }
            captureSession(e) {
                "string" != typeof e.release ? o.DEBUG_BUILD && g.logger.warn("Discarded session because of missing or non-string release") : (this.sendSession(e),
                (0,
                u.updateSession)(e, {
                    init: !1
                }))
            }
            getDsn() {
                return this._dsn
            }
            getOptions() {
                return this._options
            }
            getSdkMetadata() {
                return this._options._metadata
            }
            getTransport() {
                return this._transport
            }
            flush(e) {
                let t = this._transport;
                return t ? (this.emit("flush"),
                this._isClientDoneProcessing(e).then(n => t.flush(e).then(e => n && e))) : (0,
                _.resolvedSyncPromise)(!0)
            }
            close(e) {
                return this.flush(e).then(e => (this.getOptions().enabled = !1,
                this.emit("close"),
                e))
            }
            getEventProcessors() {
                return this._eventProcessors
            }
            addEventProcessor(e) {
                this._eventProcessors.push(e)
            }
            init() {
                (this._isEnabled() || this._options.integrations.some(e => {
                    let {name: t} = e;
                    return t.startsWith("Spotlight")
                }
                )) && this._setupIntegrations()
            }
            getIntegrationByName(e) {
                return this._integrations[e]
            }
            addIntegration(e) {
                let t = this._integrations[e.name];
                (0,
                s.setupIntegration)(this, e, this._integrations),
                !t && (0,
                s.afterSetupIntegrations)(this, [e])
            }
            sendEvent(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                this.emit("beforeSendEvent", e, t);
                let n = (0,
                a.createEventEnvelope)(e, this._dsn, this._options._metadata, this._options.tunnel);
                for (let e of t.attachments || [])
                    n = (0,
                    p.addItemToEnvelope)(n, (0,
                    p.createAttachmentEnvelopeItem)(e));
                let r = this.sendEnvelope(n);
                r && r.then(t => this.emit("afterSendEvent", e, t), null)
            }
            sendSession(e) {
                let t = (0,
                a.createSessionEnvelope)(e, this._dsn, this._options._metadata, this._options.tunnel);
                this.sendEnvelope(t)
            }
            recordDroppedEvent(e, t, n) {
                if (this._options.sendClientReports) {
                    let r = "number" == typeof n ? n : 1
                      , i = `${e}:${t}`;
                    o.DEBUG_BUILD && g.logger.log(`Recording outcome: "${i}"${r > 1 ? ` (${r} times)` : ""}`),
                    this._outcomes[i] = (this._outcomes[i] || 0) + r
                }
            }
            on(e, t) {
                let n = this._hooks[e] = this._hooks[e] || [];
                return n.push(t),
                () => {
                    let e = n.indexOf(t);
                    e > -1 && n.splice(e, 1)
                }
            }
            emit(e) {
                for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
                    n[r - 1] = arguments[r];
                let i = this._hooks[e];
                i && i.forEach(e => e(...n))
            }
            sendEnvelope(e) {
                return (this.emit("beforeEnvelope", e),
                this._isEnabled() && this._transport) ? this._transport.send(e).then(null, e => (o.DEBUG_BUILD && g.logger.error("Error while sending envelope:", e),
                e)) : (o.DEBUG_BUILD && g.logger.error("Transport disabled"),
                (0,
                _.resolvedSyncPromise)({}))
            }
            _setupIntegrations() {
                let {integrations: e} = this._options;
                this._integrations = (0,
                s.setupIntegrations)(this, e),
                (0,
                s.afterSetupIntegrations)(this, e)
            }
            _updateSessionFromEvent(e, t) {
                let n = !1
                  , r = !1
                  , i = t.exception && t.exception.values;
                if (i)
                    for (let e of (r = !0,
                    i)) {
                        let t = e.mechanism;
                        if (t && !1 === t.handled) {
                            n = !0;
                            break
                        }
                    }
                let o = "ok" === e.status;
                (o && 0 === e.errors || o && n) && ((0,
                u.updateSession)(e, {
                    ...n && {
                        status: "crashed"
                    },
                    errors: e.errors || Number(r || n)
                }),
                this.captureSession(e))
            }
            _isClientDoneProcessing(e) {
                return new _.SyncPromise(t => {
                    let n = 0
                      , r = setInterval( () => {
                        0 == this._numProcessing ? (clearInterval(r),
                        t(!0)) : (n += 1,
                        e && n >= e && (clearInterval(r),
                        t(!1)))
                    }
                    , 1)
                }
                )
            }
            _isEnabled() {
                return !1 !== this.getOptions().enabled && void 0 !== this._transport
            }
            _prepareEvent(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : (0,
                i.getCurrentScope)()
                  , r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : (0,
                i.getIsolationScope)()
                  , o = this.getOptions()
                  , a = Object.keys(this._integrations);
                return !t.integrations && a.length > 0 && (t.integrations = a),
                this.emit("preprocessEvent", e, t),
                !e.type && r.setLastEventId(e.event_id || t.event_id),
                (0,
                y.prepareEvent)(o, e, t, n, this, r).then(e => {
                    if (null === e)
                        return e;
                    e.contexts = {
                        trace: (0,
                        i.getTraceContextFromScope)(n),
                        ...e.contexts
                    };
                    let t = (0,
                    l.getDynamicSamplingContextFromScope)(this, n);
                    return e.sdkProcessingMetadata = {
                        dynamicSamplingContext: t,
                        ...e.sdkProcessingMetadata
                    },
                    e
                }
                )
            }
            _captureEvent(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
                  , n = arguments.length > 2 ? arguments[2] : void 0;
                return this._processEvent(e, t, n).then(e => e.event_id, e => {
                    o.DEBUG_BUILD && ("log" === e.logLevel ? g.logger.log(e.message) : g.logger.warn(e))
                }
                )
            }
            _processEvent(e, t, n) {
                let r = this.getOptions()
                  , {sampleRate: i} = r
                  , o = T(e)
                  , a = I(e)
                  , s = e.type || "error"
                  , u = `before send for type \`${s}\``
                  , l = void 0 === i ? void 0 : (0,
                v.parseSampleRate)(i);
                if (a && "number" == typeof l && Math.random() > l)
                    return this.recordDroppedEvent("sample_rate", "error", e),
                    (0,
                    _.rejectedSyncPromise)(new f.SentryError(`Discarding event because it's not included in the random sample (sampling rate = ${i})`,"log"));
                let c = "replay_event" === s ? "replay" : s
                  , d = (e.sdkProcessingMetadata || {}).capturedSpanIsolationScope;
                return this._prepareEvent(e, t, n, d).then(n => {
                    if (null === n)
                        throw this.recordDroppedEvent("event_processor", c, e),
                        new f.SentryError("An event processor returned `null`, will not send event.","log");
                    return t.data && !0 === t.data.__sentry__ ? n : function(e, t) {
                        let n = `${t} must return \`null\` or a valid event.`;
                        if ((0,
                        h.isThenable)(e))
                            return e.then(e => {
                                if (!(0,
                                h.isPlainObject)(e) && null !== e)
                                    throw new f.SentryError(n);
                                return e
                            }
                            , e => {
                                throw new f.SentryError(`${t} rejected with ${e}`)
                            }
                            );
                        if (!(0,
                        h.isPlainObject)(e) && null !== e)
                            throw new f.SentryError(n);
                        return e
                    }(function(e, t, n, r) {
                        let {beforeSend: i, beforeSendTransaction: o, beforeSendSpan: a} = t;
                        if (I(n) && i)
                            return i(n, r);
                        if (T(n)) {
                            if (n.spans && a) {
                                let t = [];
                                for (let r of n.spans) {
                                    let n = a(r);
                                    n ? t.push(n) : ((0,
                                    S.showSpanDropWarning)(),
                                    e.recordDroppedEvent("before_send", "span"))
                                }
                                n.spans = t
                            }
                            if (o) {
                                if (n.spans) {
                                    let e = n.spans.length;
                                    n.sdkProcessingMetadata = {
                                        ...n.sdkProcessingMetadata,
                                        spanCountBeforeProcessing: e
                                    }
                                }
                                return o(n, r)
                            }
                        }
                        return n
                    }(this, r, n, t), u)
                }
                ).then(r => {
                    if (null === r) {
                        if (this.recordDroppedEvent("before_send", c, e),
                        o) {
                            let t = 1 + (e.spans || []).length;
                            this.recordDroppedEvent("before_send", "span", t)
                        }
                        throw new f.SentryError(`${u} returned \`null\`, will not send event.`,"log")
                    }
                    let i = n && n.getSession();
                    if (!o && i && this._updateSessionFromEvent(i, r),
                    o) {
                        let e = r.sdkProcessingMetadata && r.sdkProcessingMetadata.spanCountBeforeProcessing || 0
                          , t = e - (r.spans ? r.spans.length : 0);
                        t > 0 && this.recordDroppedEvent("before_send", "span", t)
                    }
                    let a = r.transaction_info;
                    return o && a && r.transaction !== e.transaction && (r.transaction_info = {
                        ...a,
                        source: "custom"
                    }),
                    this.sendEvent(r, t),
                    r
                }
                ).then(null, e => {
                    if (e instanceof f.SentryError)
                        throw e;
                    throw this.captureException(e, {
                        data: {
                            __sentry__: !0
                        },
                        originalException: e
                    }),
                    new f.SentryError(`Event processing pipeline threw an error, original event will not be sent. Details have been sent as a new event.
Reason: ${e}`)
                }
                )
            }
            _process(e) {
                this._numProcessing++,
                e.then(e => (this._numProcessing--,
                e), e => (this._numProcessing--,
                e))
            }
            _clearOutcomes() {
                let e = this._outcomes;
                return this._outcomes = {},
                Object.entries(e).map(e => {
                    let[t,n] = e
                      , [r,i] = t.split(":");
                    return {
                        reason: r,
                        category: i,
                        quantity: n
                    }
                }
                )
            }
            _flushOutcomes() {
                o.DEBUG_BUILD && g.logger.log("Flushing outcomes...");
                let e = this._clearOutcomes();
                if (0 === e.length) {
                    o.DEBUG_BUILD && g.logger.log("No outcomes to send");
                    return
                }
                if (!this._dsn) {
                    o.DEBUG_BUILD && g.logger.log("No dsn provided, will not send outcomes");
                    return
                }
                o.DEBUG_BUILD && g.logger.log("Sending outcomes:", e);
                let t = (0,
                c.createClientReportEnvelope)(e, this._options.tunnel && (0,
                d.dsnToString)(this._dsn));
                this.sendEnvelope(t)
            }
        }
        function I(e) {
            return void 0 === e.type
        }
        function T(e) {
            return "transaction" === e.type
        }
    },
    18062: function(e, t, n) {
        "use strict";
        n.d(t, {
            addBreadcrumb: function() {
                return a
            }
        });
        var r = n("65492")
          , i = n("54683")
          , o = n("75047");
        function a(e, t) {
            let n = (0,
            r.getClient)()
              , a = (0,
            r.getIsolationScope)();
            if (!n)
                return;
            let {beforeBreadcrumb: s=null, maxBreadcrumbs: u=100} = n.getOptions();
            if (u <= 0)
                return;
            let l = {
                timestamp: (0,
                o.dateTimestampInSeconds)(),
                ...e
            }
              , c = s ? (0,
            i.consoleSandbox)( () => s(l, t)) : l;
            null !== c && (n.emit && n.emit("beforeAddBreadcrumb", c, t),
            a.addBreadcrumb(c, u))
        }
    },
    37085: function(e, t, n) {
        "use strict";
        n.d(t, {
            getMainCarrier: function() {
                return o
            },
            getSentryCarrier: function() {
                return a
            }
        });
        var r = n("48706")
          , i = n("61191");
        function o() {
            return a(i.GLOBAL_OBJ),
            i.GLOBAL_OBJ
        }
        function a(e) {
            let t = e.__SENTRY__ = e.__SENTRY__ || {};
            return t.version = t.version || r.SDK_VERSION,
            t[r.SDK_VERSION] = t[r.SDK_VERSION] || {}
        }
    },
    58253: function(e, t, n) {
        "use strict";
        n.d(t, {
            DEFAULT_ENVIRONMENT: function() {
                return r
            }
        });
        let r = "production"
    },
    65492: function(e, t, n) {
        "use strict";
        n.d(t, {
            getClient: function() {
                return f
            },
            getCurrentScope: function() {
                return u
            },
            getGlobalScope: function() {
                return c
            },
            getIsolationScope: function() {
                return l
            },
            getTraceContextFromScope: function() {
                return h
            },
            withIsolationScope: function() {
                return p
            },
            withScope: function() {
                return d
            }
        });
        var r = n("53627")
          , i = n("37085")
          , o = n("24359")
          , a = n("48497")
          , s = n("61191");
        function u() {
            let e = (0,
            i.getMainCarrier)();
            return (0,
            r.getAsyncContextStrategy)(e).getCurrentScope()
        }
        function l() {
            let e = (0,
            i.getMainCarrier)();
            return (0,
            r.getAsyncContextStrategy)(e).getIsolationScope()
        }
        function c() {
            return (0,
            s.getGlobalSingleton)("globalScope", () => new o.Scope)
        }
        function d() {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
                t[n] = arguments[n];
            let o = (0,
            i.getMainCarrier)()
              , a = (0,
            r.getAsyncContextStrategy)(o);
            if (2 === t.length) {
                let[e,n] = t;
                return e ? a.withSetScope(e, n) : a.withScope(n)
            }
            return a.withScope(t[0])
        }
        function p() {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
                t[n] = arguments[n];
            let o = (0,
            i.getMainCarrier)()
              , a = (0,
            r.getAsyncContextStrategy)(o);
            if (2 === t.length) {
                let[e,n] = t;
                return e ? a.withSetIsolationScope(e, n) : a.withIsolationScope(n)
            }
            return a.withIsolationScope(t[0])
        }
        function f() {
            return u().getClient()
        }
        function h(e) {
            let {traceId: t, spanId: n, parentSpanId: r} = e.getPropagationContext();
            return (0,
            a.dropUndefinedKeys)({
                trace_id: t,
                span_id: n,
                parent_span_id: r
            })
        }
    },
    36812: function(e, t, n) {
        "use strict";
        n.d(t, {
            DEBUG_BUILD: function() {
                return r
            }
        });
        let r = "undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__
    },
    39118: function(e, t, n) {
        "use strict";
        n.d(t, {
            getDefaultCurrentScope: function() {
                return o
            },
            getDefaultIsolationScope: function() {
                return a
            }
        });
        var r = n("24359")
          , i = n("61191");
        function o() {
            return (0,
            i.getGlobalSingleton)("defaultCurrentScope", () => new r.Scope)
        }
        function a() {
            return (0,
            i.getGlobalSingleton)("defaultIsolationScope", () => new r.Scope)
        }
    },
    93718: function(e, t, n) {
        "use strict";
        n.d(t, {
            createEventEnvelope: function() {
                return u
            },
            createSessionEnvelope: function() {
                return s
            },
            createSpanEnvelope: function() {
                return l
            }
        });
        var r = n("10581")
          , i = n("2666")
          , o = n("99562")
          , a = n("42878");
        function s(e, t, n, r) {
            let a = (0,
            o.getSdkMetadataForEnvelopeHeader)(n)
              , s = {
                sent_at: new Date().toISOString(),
                ...a && {
                    sdk: a
                },
                ...!!r && t && {
                    dsn: (0,
                    i.dsnToString)(t)
                }
            }
              , u = "aggregates"in e ? [{
                type: "sessions"
            }, e] : [{
                type: "session"
            }, e.toJSON()];
            return (0,
            o.createEnvelope)(s, [u])
        }
        function u(e, t, n, r) {
            let i = (0,
            o.getSdkMetadataForEnvelopeHeader)(n)
              , a = e.type && "replay_event" !== e.type ? e.type : "event";
            var s, u;
            s = e,
            !(u = n && n.sdk) || (s.sdk = s.sdk || {},
            s.sdk.name = s.sdk.name || u.name,
            s.sdk.version = s.sdk.version || u.version,
            s.sdk.integrations = [...s.sdk.integrations || [], ...u.integrations || []],
            s.sdk.packages = [...s.sdk.packages || [], ...u.packages || []]);
            let l = (0,
            o.createEventEnvelopeHeaders)(e, i, r, t);
            delete e.sdkProcessingMetadata;
            let c = [{
                type: a
            }, e];
            return (0,
            o.createEnvelope)(l, [c])
        }
        function l(e, t) {
            let n = (0,
            r.getDynamicSamplingContextFromSpan)(e[0])
              , s = t && t.getDsn()
              , u = t && t.getOptions().tunnel;
            var l;
            let c = {
                sent_at: new Date().toISOString(),
                ...!!(l = n).trace_id && !!l.public_key && {
                    trace: n
                },
                ...!!u && s && {
                    dsn: (0,
                    i.dsnToString)(s)
                }
            }
              , d = t && t.getOptions().beforeSendSpan
              , p = d ? e => {
                let t = d((0,
                a.spanToJSON)(e));
                return !t && (0,
                a.showSpanDropWarning)(),
                t
            }
            : e => (0,
            a.spanToJSON)(e)
              , f = [];
            for (let t of e) {
                let e = p(t);
                e && f.push((0,
                o.createSpanEnvelopeItem)(e))
            }
            return (0,
            o.createEnvelope)(c, f)
        }
    },
    77952: function(e, t, n) {
        "use strict";
        n.d(t, {
            notifyEventProcessors: function() {
                return function e(t, n, s) {
                    let u = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
                    return new a.SyncPromise( (a, l) => {
                        let c = t[u];
                        if (null === n || "function" != typeof c)
                            a(n);
                        else {
                            let d = c({
                                ...n
                            }, s);
                            r.DEBUG_BUILD && c.id && null === d && o.logger.log(`Event processor "${c.id}" dropped event`),
                            (0,
                            i.isThenable)(d) ? d.then(n => e(t, n, s, u + 1).then(a)).then(null, l) : e(t, d, s, u + 1).then(a).then(null, l)
                        }
                    }
                    )
                }
            }
        });
        var r = n("36812")
          , i = n("27364")
          , o = n("54683")
          , a = n("81567")
    },
    70585: function(e, t, n) {
        "use strict";
        n.d(t, {
            addEventProcessor: function() {
                return T
            },
            captureEvent: function() {
                return p
            },
            captureException: function() {
                return c
            },
            captureMessage: function() {
                return d
            },
            captureSession: function() {
                return x
            },
            close: function() {
                return E
            },
            endSession: function() {
                return C
            },
            flush: function() {
                return S
            },
            isEnabled: function() {
                return I
            },
            isInitialized: function() {
                return b
            },
            lastEventId: function() {
                return y
            },
            setContext: function() {
                return f
            },
            setExtra: function() {
                return g
            },
            setExtras: function() {
                return h
            },
            setTag: function() {
                return _
            },
            setTags: function() {
                return m
            },
            setUser: function() {
                return v
            },
            startSession: function() {
                return w
            }
        });
        var r = n("58253")
          , i = n("65492")
          , o = n("36812")
          , a = n("23013")
          , s = n("54683")
          , u = n("61191")
          , l = n("6009");
        function c(e, t) {
            return (0,
            i.getCurrentScope)().captureException(e, (0,
            l.parseEventHintOrCaptureContext)(t))
        }
        function d(e, t) {
            let n = "string" == typeof t ? t : void 0
              , r = "string" != typeof t ? {
                captureContext: t
            } : void 0;
            return (0,
            i.getCurrentScope)().captureMessage(e, n, r)
        }
        function p(e, t) {
            return (0,
            i.getCurrentScope)().captureEvent(e, t)
        }
        function f(e, t) {
            (0,
            i.getIsolationScope)().setContext(e, t)
        }
        function h(e) {
            (0,
            i.getIsolationScope)().setExtras(e)
        }
        function g(e, t) {
            (0,
            i.getIsolationScope)().setExtra(e, t)
        }
        function m(e) {
            (0,
            i.getIsolationScope)().setTags(e)
        }
        function _(e, t) {
            (0,
            i.getIsolationScope)().setTag(e, t)
        }
        function v(e) {
            (0,
            i.getIsolationScope)().setUser(e)
        }
        function y() {
            return (0,
            i.getIsolationScope)().lastEventId()
        }
        async function S(e) {
            let t = (0,
            i.getClient)();
            return t ? t.flush(e) : (o.DEBUG_BUILD && s.logger.warn("Cannot flush events. No client defined."),
            Promise.resolve(!1))
        }
        async function E(e) {
            let t = (0,
            i.getClient)();
            return t ? t.close(e) : (o.DEBUG_BUILD && s.logger.warn("Cannot flush events and disable SDK. No client defined."),
            Promise.resolve(!1))
        }
        function b() {
            return !!(0,
            i.getClient)()
        }
        function I() {
            let e = (0,
            i.getClient)();
            return !!e && !1 !== e.getOptions().enabled && !!e.getTransport()
        }
        function T(e) {
            (0,
            i.getIsolationScope)().addEventProcessor(e)
        }
        function w(e) {
            let t = (0,
            i.getClient)()
              , n = (0,
            i.getIsolationScope)()
              , o = (0,
            i.getCurrentScope)()
              , {release: s, environment: l=r.DEFAULT_ENVIRONMENT} = t && t.getOptions() || {}
              , {userAgent: c} = u.GLOBAL_OBJ.navigator || {}
              , d = (0,
            a.makeSession)({
                release: s,
                environment: l,
                user: o.getUser() || n.getUser(),
                ...c && {
                    userAgent: c
                },
                ...e
            })
              , p = n.getSession();
            return p && "ok" === p.status && (0,
            a.updateSession)(p, {
                status: "exited"
            }),
            C(),
            n.setSession(d),
            o.setSession(d),
            d
        }
        function C() {
            let e = (0,
            i.getIsolationScope)()
              , t = (0,
            i.getCurrentScope)()
              , n = t.getSession() || e.getSession();
            n && (0,
            a.closeSession)(n),
            k(),
            e.setSession(),
            t.setSession()
        }
        function k() {
            let e = (0,
            i.getIsolationScope)()
              , t = (0,
            i.getCurrentScope)()
              , n = (0,
            i.getClient)()
              , r = t.getSession() || e.getSession();
            r && n && n.captureSession(r)
        }
        function x() {
            let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            if (e) {
                C();
                return
            }
            k()
        }
    },
    18126: function(e, t, n) {
        "use strict";
        n.d(t, {
            captureFeedback: function() {
                return o
            }
        });
        var r = n("65492")
          , i = n("48497");
        function o(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
              , n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : (0,
            r.getCurrentScope)()
              , {message: o, name: a, email: s, url: u, source: l, associatedEventId: c, tags: d} = e
              , p = {
                contexts: {
                    feedback: (0,
                    i.dropUndefinedKeys)({
                        contact_email: s,
                        name: a,
                        message: o,
                        url: u,
                        source: l,
                        associated_event_id: c
                    })
                },
                type: "feedback",
                level: "info",
                tags: d
            }
              , f = n && n.getClient() || (0,
            r.getClient)();
            return f && f.emit("beforeSendFeedback", p, t),
            n.captureEvent(p, t)
        }
    },
    81353: function(e, t, n) {
        "use strict";
        n.d(t, {
            instrumentFetchRequest: function() {
                return f
            }
        });
        var r = n("95031")
          , i = n("27364")
          , o = n("83139")
          , a = n("2129")
          , s = n("92926")
          , u = n("42878")
          , l = n("22305")
          , c = n("1020")
          , d = n("13036")
          , p = n("29723");
        function f(e, t, n, a) {
            let f = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "auto.http.browser";
            if (!e.fetchData)
                return;
            let g = (0,
            s.hasTracingEnabled)() && t(e.fetchData.url);
            if (e.endTimestamp && g) {
                let t = e.fetchData.__span;
                if (!t)
                    return;
                let n = a[t];
                n && (function(e, t) {
                    if (t.response) {
                        (0,
                        c.setHttpStatus)(e, t.response.status);
                        let n = t.response && t.response.headers && t.response.headers.get("content-length");
                        if (n) {
                            let t = parseInt(n);
                            t > 0 && e.setAttribute("http.response_content_length", t)
                        }
                    } else
                        t.error && e.setStatus({
                            code: c.SPAN_STATUS_ERROR,
                            message: "internal_error"
                        });
                    e.end()
                }(n, e),
                delete a[t]);
                return
            }
            let {method: m, url: _} = e.fetchData
              , v = function(e) {
                try {
                    return new URL(e).href
                } catch (e) {
                    return
                }
            }(_)
              , y = v ? (0,
            o.parseUrl)(v).host : void 0
              , S = !!(0,
            u.getActiveSpan)()
              , E = g && S ? (0,
            d.startInactiveSpan)({
                name: `${m} ${_}`,
                attributes: {
                    url: _,
                    type: "fetch",
                    "http.method": m,
                    "http.url": v,
                    "server.address": y,
                    [r.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: f,
                    [r.SEMANTIC_ATTRIBUTE_SENTRY_OP]: "http.client"
                }
            }) : new l.SentryNonRecordingSpan;
            if (e.fetchData.__span = E.spanContext().spanId,
            a[E.spanContext().spanId] = E,
            n(e.fetchData.url)) {
                let t = e.args[0]
                  , n = e.args[1] || {}
                  , r = function(e, t, n) {
                    let r = (0,
                    p.getTraceData)({
                        span: n
                    })
                      , o = r["sentry-trace"]
                      , a = r.baggage;
                    if (!o)
                        return;
                    let s = t.headers || (function(e) {
                        return "undefined" != typeof Request && (0,
                        i.isInstanceOf)(e, Request)
                    }(e) ? e.headers : void 0);
                    if (!s)
                        return {
                            ...r
                        };
                    if (function(e) {
                        return "undefined" != typeof Headers && (0,
                        i.isInstanceOf)(e, Headers)
                    }(s)) {
                        let e = new Headers(s);
                        if (e.set("sentry-trace", o),
                        a) {
                            let t = e.get("baggage");
                            if (t) {
                                let n = h(t);
                                e.set("baggage", n ? `${n},${a}` : a)
                            } else
                                e.set("baggage", a)
                        }
                        return e
                    }
                    if (Array.isArray(s)) {
                        let e = [...s.filter(e => !(Array.isArray(e) && "sentry-trace" === e[0])).map(e => {
                            if (!Array.isArray(e) || "baggage" !== e[0] || "string" != typeof e[1])
                                return e;
                            {
                                let[t,n,...r] = e;
                                return [t, h(n), ...r]
                            }
                        }
                        ), ["sentry-trace", o]];
                        return a && e.push(["baggage", a]),
                        e
                    } else {
                        let e = "baggage"in s ? s.baggage : void 0
                          , t = [];
                        return Array.isArray(e) ? t = e.map(e => "string" == typeof e ? h(e) : e).filter(e => "" === e) : e && t.push(h(e)),
                        a && t.push(a),
                        {
                            ...s,
                            "sentry-trace": o,
                            baggage: t.length > 0 ? t.join(",") : void 0
                        }
                    }
                }(t, n, (0,
                s.hasTracingEnabled)() && S ? E : void 0);
                r && (e.args[1] = n,
                n.headers = r)
            }
            return E
        }
        function h(e) {
            return e.split(",").filter(e => !e.split("=")[0].startsWith(a.SENTRY_BAGGAGE_KEY_PREFIX)).join(",")
        }
    },
    91798: function(e, t, n) {
        "use strict";
        n.d(t, {
            getCurrentHub: function() {
                return a
            }
        });
        var r = n("18062")
          , i = n("65492")
          , o = n("70585");
        let a = function() {
            return {
                bindClient(e) {
                    (0,
                    i.getCurrentScope)().setClient(e)
                },
                withScope: i.withScope,
                getClient: () => (0,
                i.getClient)(),
                getScope: i.getCurrentScope,
                getIsolationScope: i.getIsolationScope,
                captureException: (e, t) => (0,
                i.getCurrentScope)().captureException(e, t),
                captureMessage: (e, t, n) => (0,
                i.getCurrentScope)().captureMessage(e, t, n),
                captureEvent: o.captureEvent,
                addBreadcrumb: r.addBreadcrumb,
                setUser: o.setUser,
                setTags: o.setTags,
                setTag: o.setTag,
                setExtra: o.setExtra,
                setExtras: o.setExtras,
                setContext: o.setContext,
                getIntegration(e) {
                    let t = (0,
                    i.getClient)();
                    return t && t.getIntegrationByName(e.id) || null
                },
                startSession: o.startSession,
                endSession: o.endSession,
                captureSession(e) {
                    if (e)
                        return (0,
                        o.endSession)();
                    (function() {
                        let e = (0,
                        i.getCurrentScope)()
                          , t = (0,
                        i.getClient)()
                          , n = e.getSession();
                        t && n && t.captureSession(n)
                    }
                    )()
                }
            }
        }
    },
    32678: function(e, t, n) {
        "use strict";
        n.d(t, {
            SDK_VERSION: function() {
                return R.SDK_VERSION
            },
            SEMANTIC_ATTRIBUTE_SENTRY_OP: function() {
                return l.SEMANTIC_ATTRIBUTE_SENTRY_OP
            },
            SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN: function() {
                return l.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN
            },
            SEMANTIC_ATTRIBUTE_SENTRY_SAMPLE_RATE: function() {
                return l.SEMANTIC_ATTRIBUTE_SENTRY_SAMPLE_RATE
            },
            SEMANTIC_ATTRIBUTE_SENTRY_SOURCE: function() {
                return l.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE
            },
            Scope: function() {
                return p.Scope
            },
            addBreadcrumb: function() {
                return y.addBreadcrumb
            },
            addEventProcessor: function() {
                return c.addEventProcessor
            },
            addIntegration: function() {
                return m.addIntegration
            },
            addTracingExtensions: function() {
                return i.addTracingExtensions
            },
            captureConsoleIntegration: function() {
                return I.captureConsoleIntegration
            },
            captureEvent: function() {
                return c.captureEvent
            },
            captureException: function() {
                return c.captureException
            },
            captureFeedback: function() {
                return O.captureFeedback
            },
            captureMessage: function() {
                return c.captureMessage
            },
            captureSession: function() {
                return c.captureSession
            },
            close: function() {
                return c.close
            },
            continueTrace: function() {
                return a.continueTrace
            },
            createTransport: function() {
                return h.createTransport
            },
            debugIntegration: function() {
                return T.debugIntegration
            },
            dedupeIntegration: function() {
                return w.dedupeIntegration
            },
            endSession: function() {
                return c.endSession
            },
            extraErrorDataIntegration: function() {
                return C.extraErrorDataIntegration
            },
            flush: function() {
                return c.flush
            },
            functionToStringIntegration: function() {
                return S.functionToStringIntegration
            },
            getActiveSpan: function() {
                return v.getActiveSpan
            },
            getClient: function() {
                return d.getClient
            },
            getCurrentHub: function() {
                return D.getCurrentHub
            },
            getCurrentScope: function() {
                return d.getCurrentScope
            },
            getGlobalScope: function() {
                return d.getGlobalScope
            },
            getIsolationScope: function() {
                return d.getIsolationScope
            },
            getRootSpan: function() {
                return v.getRootSpan
            },
            getSpanDescendants: function() {
                return v.getSpanDescendants
            },
            getSpanStatusFromHttpCode: function() {
                return o.getSpanStatusFromHttpCode
            },
            inboundFiltersIntegration: function() {
                return E.inboundFiltersIntegration
            },
            isInitialized: function() {
                return c.isInitialized
            },
            lastEventId: function() {
                return c.lastEventId
            },
            makeMultiplexedTransport: function() {
                return g.makeMultiplexedTransport
            },
            moduleMetadataIntegration: function() {
                return b.moduleMetadataIntegration
            },
            parameterize: function() {
                return _.parameterize
            },
            registerSpanErrorInstrumentation: function() {
                return r.registerSpanErrorInstrumentation
            },
            rewriteFramesIntegration: function() {
                return k.rewriteFramesIntegration
            },
            sessionTimingIntegration: function() {
                return x.sessionTimingIntegration
            },
            setContext: function() {
                return c.setContext
            },
            setCurrentClient: function() {
                return f.setCurrentClient
            },
            setExtra: function() {
                return c.setExtra
            },
            setExtras: function() {
                return c.setExtras
            },
            setHttpStatus: function() {
                return o.setHttpStatus
            },
            setMeasurement: function() {
                return u.setMeasurement
            },
            setTag: function() {
                return c.setTag
            },
            setTags: function() {
                return c.setTags
            },
            setUser: function() {
                return c.setUser
            },
            spanToBaggageHeader: function() {
                return s.spanToBaggageHeader
            },
            spanToJSON: function() {
                return v.spanToJSON
            },
            spanToTraceHeader: function() {
                return v.spanToTraceHeader
            },
            startInactiveSpan: function() {
                return a.startInactiveSpan
            },
            startNewTrace: function() {
                return a.startNewTrace
            },
            startSession: function() {
                return c.startSession
            },
            startSpan: function() {
                return a.startSpan
            },
            startSpanManual: function() {
                return a.startSpanManual
            },
            suppressTracing: function() {
                return a.suppressTracing
            },
            thirdPartyErrorFilterIntegration: function() {
                return A.thirdPartyErrorFilterIntegration
            },
            updateSpanName: function() {
                return v.updateSpanName
            },
            withActiveSpan: function() {
                return a.withActiveSpan
            },
            withIsolationScope: function() {
                return d.withIsolationScope
            },
            withScope: function() {
                return d.withScope
            },
            zodErrorsIntegration: function() {
                return N.zodErrorsIntegration
            }
        });
        var r = n("69325")
          , i = n("25162")
          , o = n("1020")
          , a = n("13036")
          , s = n("10581")
          , u = n("29556")
          , l = n("95031")
          , c = n("70585")
          , d = n("65492")
          , p = n("24359")
          , f = n("77702")
          , h = n("14430")
          , g = n("41327")
          , m = n("11945")
          , _ = n("44424")
          , v = n("42878")
          , y = n("18062")
          , S = n("5882")
          , E = n("72285")
          , b = n("24804")
          , I = n("6394")
          , T = n("59861")
          , w = n("33974")
          , C = n("26115")
          , k = n("64976")
          , x = n("7798")
          , N = n("14163")
          , A = n("22197")
          , O = n("18126")
          , D = n("91798")
          , R = n("48706")
    },
    11945: function(e, t, n) {
        "use strict";
        n.d(t, {
            addIntegration: function() {
                return d
            },
            afterSetupIntegrations: function() {
                return l
            },
            defineIntegration: function() {
                return p
            },
            getIntegrationsToSetup: function() {
                return s
            },
            setupIntegration: function() {
                return c
            },
            setupIntegrations: function() {
                return u
            }
        });
        var r = n("65492")
          , i = n("36812")
          , o = n("54683");
        let a = [];
        function s(e) {
            let t = e.defaultIntegrations || []
              , n = e.integrations;
            t.forEach(e => {
                e.isDefaultInstance = !0
            }
            );
            let r;
            if (Array.isArray(n))
                r = [...t, ...n];
            else if ("function" == typeof n) {
                let e = n(t);
                r = Array.isArray(e) ? e : [e]
            } else
                r = t;
            let i = function(e) {
                let t = {};
                return e.forEach(e => {
                    let {name: n} = e
                      , r = t[n];
                    (!r || r.isDefaultInstance || !e.isDefaultInstance) && (t[n] = e)
                }
                ),
                Object.values(t)
            }(r)
              , o = i.findIndex(e => "Debug" === e.name);
            if (o > -1) {
                let[e] = i.splice(o, 1);
                i.push(e)
            }
            return i
        }
        function u(e, t) {
            let n = {};
            return t.forEach(t => {
                t && c(e, t, n)
            }
            ),
            n
        }
        function l(e, t) {
            for (let n of t)
                n && n.afterAllSetup && n.afterAllSetup(e)
        }
        function c(e, t, n) {
            if (n[t.name]) {
                i.DEBUG_BUILD && o.logger.log(`Integration skipped because it was already installed: ${t.name}`);
                return
            }
            if (n[t.name] = t,
            -1 === a.indexOf(t.name) && "function" == typeof t.setupOnce && (t.setupOnce(),
            a.push(t.name)),
            t.setup && "function" == typeof t.setup && t.setup(e),
            "function" == typeof t.preprocessEvent) {
                let n = t.preprocessEvent.bind(t);
                e.on("preprocessEvent", (t, r) => n(t, r, e))
            }
            if ("function" == typeof t.processEvent) {
                let n = t.processEvent.bind(t)
                  , r = Object.assign( (t, r) => n(t, r, e), {
                    id: t.name
                });
                e.addEventProcessor(r)
            }
            i.DEBUG_BUILD && o.logger.log(`Integration installed: ${t.name}`)
        }
        function d(e) {
            let t = (0,
            r.getClient)();
            if (!t) {
                i.DEBUG_BUILD && o.logger.warn(`Cannot add integration "${e.name}" because no SDK Client is available.`);
                return
            }
            t.addIntegration(e)
        }
        function p(e) {
            return e
        }
    },
    6394: function(e, t, n) {
        "use strict";
        n.d(t, {
            captureConsoleIntegration: function() {
                return p
            }
        });
        var r = n("65492")
          , i = n("70585")
          , o = n("11945")
          , a = n("59492")
          , s = n("54683")
          , u = n("24317")
          , l = n("1546")
          , c = n("2030")
          , d = n("61191");
        let p = (0,
        o.defineIntegration)(function() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
              , t = e.levels || s.CONSOLE_LEVELS
              , n = !!e.handled;
            return {
                name: "CaptureConsole",
                setup(e) {
                    "console"in d.GLOBAL_OBJ && (0,
                    a.addConsoleInstrumentationHandler)(o => {
                        let {args: a, level: s} = o;
                        (0,
                        r.getClient)() === e && t.includes(s) && function(e, t, n) {
                            let o = {
                                level: (0,
                                l.severityLevelFromString)(t),
                                extra: {
                                    arguments: e
                                }
                            };
                            (0,
                            r.withScope)(r => {
                                if (r.addEventProcessor(e => (e.logger = "console",
                                (0,
                                u.addExceptionMechanism)(e, {
                                    handled: n,
                                    type: "console"
                                }),
                                e)),
                                "assert" === t) {
                                    if (!e[0]) {
                                        let t = `Assertion failed: ${(0,
                                        c.safeJoin)(e.slice(1), " ") || "console.assert"}`;
                                        r.setExtra("arguments", e.slice(1)),
                                        (0,
                                        i.captureMessage)(t, o)
                                    }
                                    return
                                }
                                let a = e.find(e => e instanceof Error);
                                if (a) {
                                    (0,
                                    i.captureException)(a, o);
                                    return
                                }
                                let s = (0,
                                c.safeJoin)(e, " ");
                                (0,
                                i.captureMessage)(s, o)
                            }
                            )
                        }(a, s, n)
                    }
                    )
                }
            }
        })
    },
    59861: function(e, t, n) {
        "use strict";
        n.d(t, {
            debugIntegration: function() {
                return o
            }
        });
        var r = n("11945")
          , i = n("54683");
        let o = (0,
        r.defineIntegration)(function() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
              , t = {
                debugger: !1,
                stringify: !1,
                ...e
            };
            return {
                name: "Debug",
                setup(e) {
                    e.on("beforeSendEvent", (e, n) => {
                        t.debugger,
                        (0,
                        i.consoleSandbox)( () => {
                            t.stringify ? (console.log(JSON.stringify(e, null, 2)),
                            n && Object.keys(n).length && console.log(JSON.stringify(n, null, 2))) : (console.log(e),
                            n && Object.keys(n).length && console.log(n))
                        }
                        )
                    }
                    )
                }
            }
        })
    },
    33974: function(e, t, n) {
        "use strict";
        n.d(t, {
            dedupeIntegration: function() {
                return s
            }
        });
        var r = n("11945")
          , i = n("36812")
          , o = n("54683")
          , a = n("32237");
        let s = (0,
        r.defineIntegration)( () => {
            let e;
            return {
                name: "Dedupe",
                processEvent(t) {
                    if (t.type)
                        return t;
                    try {
                        if (function(e, t) {
                            return !!t && (!!(function(e, t) {
                                let n = e.message
                                  , r = t.message;
                                return !!((n || r) && (!n || r) && (n || !r) && n === r && l(e, t) && u(e, t)) || !1
                            }(e, t) || function(e, t) {
                                let n = c(t)
                                  , r = c(e);
                                return !!(n && r && n.type === r.type && n.value === r.value && l(e, t) && u(e, t)) || !1
                            }(e, t)) || !1)
                        }(t, e))
                            return i.DEBUG_BUILD && o.logger.warn("Event dropped due to being a duplicate of previously captured event."),
                            null
                    } catch (e) {}
                    return e = t
                }
            }
        }
        );
        function u(e, t) {
            let n = (0,
            a.getFramesFromEvent)(e)
              , r = (0,
            a.getFramesFromEvent)(t);
            if (!n && !r)
                return !0;
            if (n && !r || !n && r || r.length !== n.length)
                return !1;
            for (let e = 0; e < r.length; e++) {
                let t = r[e]
                  , i = n[e];
                if (t.filename !== i.filename || t.lineno !== i.lineno || t.colno !== i.colno || t.function !== i.function)
                    return !1
            }
            return !0
        }
        function l(e, t) {
            let n = e.fingerprint
              , r = t.fingerprint;
            if (!n && !r)
                return !0;
            if (n && !r || !n && r)
                return !1;
            try {
                return !(n.join("") !== r.join(""))
            } catch (e) {
                return !1
            }
        }
        function c(e) {
            return e.exception && e.exception.values && e.exception.values[0]
        }
    },
    26115: function(e, t, n) {
        "use strict";
        n.d(t, {
            extraErrorDataIntegration: function() {
                return c
            }
        });
        var r = n("11945")
          , i = n("36812")
          , o = n("27364")
          , a = n("54683")
          , s = n("7149")
          , u = n("48497")
          , l = n("2030");
        let c = (0,
        r.defineIntegration)(function() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
              , {depth: t=3, captureErrorCause: n=!0} = e;
            return {
                name: "ExtraErrorData",
                processEvent(e, r, c) {
                    let {maxValueLength: d=250} = c.getOptions();
                    return function(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
                          , n = arguments.length > 2 ? arguments[2] : void 0
                          , r = arguments.length > 3 ? arguments[3] : void 0
                          , c = arguments.length > 4 ? arguments[4] : void 0;
                        if (!t.originalException || !(0,
                        o.isError)(t.originalException))
                            return e;
                        let d = t.originalException.name || t.originalException.constructor.name
                          , p = function(e, t, n) {
                            try {
                                let r = ["name", "message", "stack", "line", "column", "fileName", "lineNumber", "columnNumber", "toJSON"]
                                  , i = {};
                                for (let t of Object.keys(e)) {
                                    if (-1 !== r.indexOf(t))
                                        continue;
                                    let a = e[t];
                                    i[t] = (0,
                                    o.isError)(a) || "string" == typeof a ? (0,
                                    l.truncate)(`${a}`, n) : a
                                }
                                if (t && void 0 !== e.cause && (i.cause = (0,
                                o.isError)(e.cause) ? e.cause.toString() : e.cause),
                                "function" == typeof e.toJSON) {
                                    let t = e.toJSON();
                                    for (let e of Object.keys(t)) {
                                        let n = t[e];
                                        i[e] = (0,
                                        o.isError)(n) ? n.toString() : n
                                    }
                                }
                                return i
                            } catch (e) {
                                i.DEBUG_BUILD && a.logger.error("Unable to extract extra data from the Error object:", e)
                            }
                            return null
                        }(t.originalException, r, c);
                        if (p) {
                            let t = {
                                ...e.contexts
                            }
                              , r = (0,
                            s.normalize)(p, n);
                            return (0,
                            o.isPlainObject)(r) && ((0,
                            u.addNonEnumerableProperty)(r, "__sentry_skip_normalization__", !0),
                            t[d] = r),
                            {
                                ...e,
                                contexts: t
                            }
                        }
                        return e
                    }(e, r, t, n, d)
                }
            }
        })
    },
    5882: function(e, t, n) {
        "use strict";
        n.d(t, {
            functionToStringIntegration: function() {
                return u
            }
        });
        var r = n("65492")
          , i = n("11945")
          , o = n("48497");
        let a, s = new WeakMap, u = (0,
        i.defineIntegration)( () => ({
            name: "FunctionToString",
            setupOnce() {
                a = Function.prototype.toString;
                try {
                    Function.prototype.toString = function() {
                        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
                            t[n] = arguments[n];
                        let i = (0,
                        o.getOriginalFunction)(this)
                          , u = s.has((0,
                        r.getClient)()) && void 0 !== i ? i : this;
                        return a.apply(u, t)
                    }
                } catch (e) {}
            },
            setup(e) {
                s.set(e, !0)
            }
        }))
    },
    72285: function(e, t, n) {
        "use strict";
        n.d(t, {
            inboundFiltersIntegration: function() {
                return l
            }
        });
        var r = n("36812")
          , i = n("11945")
          , o = n("54683")
          , a = n("24317")
          , s = n("2030");
        let u = [/^Script error\.?$/, /^Javascript error: Script error\.? on line 0$/, /^ResizeObserver loop completed with undelivered notifications.$/, /^Cannot redefine property: googletag$/, "undefined is not an object (evaluating 'a.L')", 'can\'t redefine non-configurable property "solana"', "vv().getRestrictions is not a function. (In 'vv().getRestrictions(1,a)', 'vv().getRestrictions' is undefined)", "Can't find variable: _AutofillCallbackHandler", /^Non-Error promise rejection captured with value: Object Not Found Matching Id:\d+, MethodName:simulateEvent, ParamCount:\d+$/]
          , l = (0,
        i.defineIntegration)(function() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return {
                name: "InboundFilters",
                processEvent: (t, n, i) => (function(e, t) {
                    return t.ignoreInternal && function(e) {
                        try {
                            return "SentryError" === e.exception.values[0].type
                        } catch (e) {}
                        return !1
                    }(e) ? (r.DEBUG_BUILD && o.logger.warn(`Event dropped due to being internal Sentry Error.
Event: ${(0,
                    a.getEventDescription)(e)}`),
                    !0) : function(e, t) {
                        return !e.type && !!t && !!t.length && (function(e) {
                            let t = [];
                            e.message && t.push(e.message);
                            let n;
                            try {
                                n = e.exception.values[e.exception.values.length - 1]
                            } catch (e) {}
                            return n && n.value && (t.push(n.value),
                            n.type && t.push(`${n.type}: ${n.value}`)),
                            t
                        }
                        )(e).some(e => (0,
                        s.stringMatchesSomePattern)(e, t))
                    }(e, t.ignoreErrors) ? (r.DEBUG_BUILD && o.logger.warn(`Event dropped due to being matched by \`ignoreErrors\` option.
Event: ${(0,
                    a.getEventDescription)(e)}`),
                    !0) : function(e) {
                        return !e.type && !!e.exception && !!e.exception.values && 0 !== e.exception.values.length && !e.message && !e.exception.values.some(e => e.stacktrace || e.type && "Error" !== e.type || e.value)
                    }(e) ? (r.DEBUG_BUILD && o.logger.warn(`Event dropped due to not having an error message, error type or stacktrace.
Event: ${(0,
                    a.getEventDescription)(e)}`),
                    !0) : function(e, t) {
                        if ("transaction" !== e.type || !t || !t.length)
                            return !1;
                        let n = e.transaction;
                        return !!n && (0,
                        s.stringMatchesSomePattern)(n, t)
                    }(e, t.ignoreTransactions) ? (r.DEBUG_BUILD && o.logger.warn(`Event dropped due to being matched by \`ignoreTransactions\` option.
Event: ${(0,
                    a.getEventDescription)(e)}`),
                    !0) : function(e, t) {
                        if (!t || !t.length)
                            return !1;
                        let n = c(e);
                        return !!n && (0,
                        s.stringMatchesSomePattern)(n, t)
                    }(e, t.denyUrls) ? (r.DEBUG_BUILD && o.logger.warn(`Event dropped due to being matched by \`denyUrls\` option.
Event: ${(0,
                    a.getEventDescription)(e)}.
Url: ${c(e)}`),
                    !0) : !function(e, t) {
                        if (!t || !t.length)
                            return !0;
                        let n = c(e);
                        return !n || (0,
                        s.stringMatchesSomePattern)(n, t)
                    }(e, t.allowUrls) && (r.DEBUG_BUILD && o.logger.warn(`Event dropped due to not being matched by \`allowUrls\` option.
Event: ${(0,
                    a.getEventDescription)(e)}.
Url: ${c(e)}`),
                    !0)
                }
                )(t, function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                      , t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    return {
                        allowUrls: [...e.allowUrls || [], ...t.allowUrls || []],
                        denyUrls: [...e.denyUrls || [], ...t.denyUrls || []],
                        ignoreErrors: [...e.ignoreErrors || [], ...t.ignoreErrors || [], ...e.disableErrorDefaults ? [] : u],
                        ignoreTransactions: [...e.ignoreTransactions || [], ...t.ignoreTransactions || []],
                        ignoreInternal: void 0 === e.ignoreInternal || e.ignoreInternal
                    }
                }(e, i.getOptions())) ? null : t
            }
        });
        function c(e) {
            try {
                let t;
                try {
                    t = e.exception.values[0].stacktrace.frames
                } catch (e) {}
                return t ? function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                    for (let t = e.length - 1; t >= 0; t--) {
                        let n = e[t];
                        if (n && "<anonymous>" !== n.filename && "[native code]" !== n.filename)
                            return n.filename || null
                    }
                    return null
                }(t) : null
            } catch (t) {
                return r.DEBUG_BUILD && o.logger.error(`Cannot extract url for event ${(0,
                a.getEventDescription)(e)}`),
                null
            }
        }
    },
    24804: function(e, t, n) {
        "use strict";
        n.d(t, {
            moduleMetadataIntegration: function() {
                return a
            }
        });
        var r = n("11945")
          , i = n("23522")
          , o = n("99562");
        let a = (0,
        r.defineIntegration)( () => ({
            name: "ModuleMetadata",
            setup(e) {
                e.on("beforeEnvelope", e => {
                    (0,
                    o.forEachEnvelopeItem)(e, (e, t) => {
                        if ("event" === t) {
                            let t = Array.isArray(e) ? e[1] : void 0;
                            t && ((0,
                            i.stripMetadataFromStackFrames)(t),
                            e[1] = t)
                        }
                    }
                    )
                }
                ),
                e.on("applyFrameMetadata", t => {
                    if (t.type)
                        return;
                    let n = e.getOptions().stackParser;
                    (0,
                    i.addMetadataToStackFrames)(n, t)
                }
                )
            }
        }))
    },
    64976: function(e, t, n) {
        "use strict";
        n.d(t, {
            rewriteFramesIntegration: function() {
                return a
            }
        });
        var r = n("11945")
          , i = n("48054")
          , o = n("61191");
        let a = (0,
        r.defineIntegration)(function() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
              , t = e.root
              , n = e.prefix || "app:///"
              , r = "window"in o.GLOBAL_OBJ && void 0 !== o.GLOBAL_OBJ.window
              , a = e.iteratee || function(e) {
                let {isBrowser: t, root: n, prefix: r} = e;
                return e => {
                    if (!e.filename)
                        return e;
                    let o = /^[a-zA-Z]:\\/.test(e.filename) || e.filename.includes("\\") && !e.filename.includes("/")
                      , a = /^\//.test(e.filename);
                    if (t) {
                        if (n) {
                            let t = e.filename;
                            0 === t.indexOf(n) && (e.filename = t.replace(n, r))
                        }
                    } else if (o || a) {
                        let t = o ? e.filename.replace(/^[a-zA-Z]:/, "").replace(/\\/g, "/") : e.filename
                          , a = n ? (0,
                        i.relative)(n, t) : (0,
                        i.basename)(t);
                        e.filename = `${r}${a}`
                    }
                    return e
                }
            }({
                isBrowser: r,
                root: t,
                prefix: n
            });
            return {
                name: "RewriteFrames",
                processEvent(e) {
                    let t = e;
                    return e.exception && Array.isArray(e.exception.values) && (t = function(e) {
                        try {
                            return {
                                ...e,
                                exception: {
                                    ...e.exception,
                                    values: e.exception.values.map(e => ({
                                        ...e,
                                        ...e.stacktrace && {
                                            stacktrace: function(e) {
                                                return {
                                                    ...e,
                                                    frames: e && e.frames && e.frames.map(e => a(e))
                                                }
                                            }(e.stacktrace)
                                        }
                                    }))
                                }
                            }
                        } catch (t) {
                            return e
                        }
                    }(t)),
                    t
                }
            }
        })
    },
    7798: function(e, t, n) {
        "use strict";
        n.d(t, {
            sessionTimingIntegration: function() {
                return o
            }
        });
        var r = n("11945")
          , i = n("75047");
        let o = (0,
        r.defineIntegration)( () => {
            let e = 1e3 * (0,
            i.timestampInSeconds)();
            return {
                name: "SessionTiming",
                processEvent(t) {
                    let n = 1e3 * (0,
                    i.timestampInSeconds)();
                    return {
                        ...t,
                        extra: {
                            ...t.extra,
                            "session:start": e,
                            "session:duration": n - e,
                            "session:end": n
                        }
                    }
                }
            }
        }
        )
    },
    22197: function(e, t, n) {
        "use strict";
        n.d(t, {
            thirdPartyErrorFilterIntegration: function() {
                return s
            }
        });
        var r = n("11945")
          , i = n("23522")
          , o = n("99562")
          , a = n("32237");
        let s = (0,
        r.defineIntegration)(e => ({
            name: "ThirdPartyErrorsFilter",
            setup(e) {
                e.on("beforeEnvelope", e => {
                    (0,
                    o.forEachEnvelopeItem)(e, (e, t) => {
                        if ("event" === t) {
                            let t = Array.isArray(e) ? e[1] : void 0;
                            t && ((0,
                            i.stripMetadataFromStackFrames)(t),
                            e[1] = t)
                        }
                    }
                    )
                }
                ),
                e.on("applyFrameMetadata", t => {
                    if (t.type)
                        return;
                    let n = e.getOptions().stackParser;
                    (0,
                    i.addMetadataToStackFrames)(n, t)
                }
                )
            },
            processEvent(t) {
                let n = function(e) {
                    let t = (0,
                    a.getFramesFromEvent)(e);
                    if (t)
                        return t.filter(e => !!e.filename).map(e => e.module_metadata ? Object.keys(e.module_metadata).filter(e => e.startsWith(u)).map(e => e.slice(u.length)) : [])
                }(t);
                if (n && n["drop-error-if-contains-third-party-frames" === e.behaviour || "apply-tag-if-contains-third-party-frames" === e.behaviour ? "some" : "every"](t => !t.some(t => e.filterKeys.includes(t)))) {
                    if ("drop-error-if-contains-third-party-frames" === e.behaviour || "drop-error-if-exclusively-contains-third-party-frames" === e.behaviour)
                        return null;
                    t.tags = {
                        ...t.tags,
                        third_party_code: !0
                    }
                }
                return t
            }
        }))
          , u = "_sentryBundlerPluginAppKey:"
    },
    14163: function(e, t, n) {
        "use strict";
        n.d(t, {
            zodErrorsIntegration: function() {
                return s
            }
        });
        var r = n("11945")
          , i = n("27364")
          , o = n("2030");
        function a(e) {
            return {
                ...e,
                path: "path"in e && Array.isArray(e.path) ? e.path.join(".") : void 0,
                keys: "keys"in e ? JSON.stringify(e.keys) : void 0,
                unionErrors: "unionErrors"in e ? JSON.stringify(e.unionErrors) : void 0
            }
        }
        let s = (0,
        r.defineIntegration)(function() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
              , t = e.limit || 10;
            return {
                name: "ZodErrors",
                processEvent(e, n) {
                    var r, s, u, l;
                    return r = t,
                    s = e,
                    u = n,
                    s.exception && s.exception.values && u && u.originalException && (l = u.originalException,
                    (0,
                    i.isError)(l) && "ZodError" === l.name && Array.isArray(l.errors)) && 0 !== u.originalException.issues.length ? {
                        ...s,
                        exception: {
                            ...s.exception,
                            values: [{
                                ...s.exception.values[0],
                                value: function(e) {
                                    let t = new Set;
                                    for (let n of e.issues)
                                        n.path && n.path[0] && t.add(n.path[0]);
                                    let n = Array.from(t);
                                    return `Failed to validate keys: ${(0,
                                    o.truncate)(n.join(", "), 100)}`
                                }(u.originalException)
                            }, ...s.exception.values.slice(1)]
                        },
                        extra: {
                            ...s.extra,
                            "zoderror.issues": u.originalException.errors.slice(0, r).map(a)
                        }
                    } : s
                }
            }
        })
    },
    23522: function(e, t, n) {
        "use strict";
        n.d(t, {
            addMetadataToStackFrames: function() {
                return a
            },
            stripMetadataFromStackFrames: function() {
                return s
            }
        });
        var r = n("61191");
        let i = new Map
          , o = new Set;
        function a(e, t) {
            try {
                t.exception.values.forEach(t => {
                    if (t.stacktrace)
                        for (let s of t.stacktrace.frames || []) {
                            if (!s.filename || s.module_metadata)
                                continue;
                            var n, a;
                            let t = (n = e,
                            a = s.filename,
                            !function(e) {
                                if (r.GLOBAL_OBJ._sentryModuleMetadata)
                                    for (let t of Object.keys(r.GLOBAL_OBJ._sentryModuleMetadata)) {
                                        let n = r.GLOBAL_OBJ._sentryModuleMetadata[t];
                                        if (!o.has(t)) {
                                            for (let r of (o.add(t),
                                            e(t).reverse()))
                                                if (r.filename) {
                                                    i.set(r.filename, n);
                                                    break
                                                }
                                        }
                                    }
                            }(n),
                            i.get(a));
                            t && (s.module_metadata = t)
                        }
                }
                )
            } catch (e) {}
        }
        function s(e) {
            try {
                e.exception.values.forEach(e => {
                    if (e.stacktrace)
                        for (let t of e.stacktrace.frames || [])
                            delete t.module_metadata
                }
                )
            } catch (e) {}
        }
    },
    40161: function(e, t, n) {
        "use strict";
        n.d(t, {
            BrowserMetricsAggregator: function() {
                return l
            }
        });
        var r = n("75047")
          , i = n("42878")
          , o = n("42504")
          , a = n("64211")
          , s = n("31269")
          , u = n("79533");
        class l {
            constructor(e) {
                this._client = e,
                this._buckets = new Map,
                this._interval = setInterval( () => this.flush(), o.DEFAULT_BROWSER_FLUSH_INTERVAL)
            }
            add(e, t, n) {
                let a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "none"
                  , l = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {}
                  , c = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : (0,
                r.timestampInSeconds)()
                  , d = Math.floor(c)
                  , p = (0,
                u.sanitizeMetricKey)(t)
                  , f = (0,
                u.sanitizeTags)(l)
                  , h = (0,
                u.sanitizeUnit)(a)
                  , g = (0,
                u.getBucketKey)(e, p, h, f)
                  , m = this._buckets.get(g)
                  , _ = m && e === o.SET_METRIC_TYPE ? m.metric.weight : 0;
                m ? (m.metric.add(n),
                m.timestamp < d && (m.timestamp = d)) : (m = {
                    metric: new s.METRIC_MAP[e](n),
                    timestamp: d,
                    metricType: e,
                    name: p,
                    unit: h,
                    tags: f
                },
                this._buckets.set(g, m));
                let v = "string" == typeof n ? m.metric.weight - _ : n;
                (0,
                i.updateMetricSummaryOnActiveSpan)(e, p, v, h, l, g)
            }
            flush() {
                if (0 === this._buckets.size)
                    return;
                let e = Array.from(this._buckets.values());
                (0,
                a.captureAggregateMetrics)(this._client, e),
                this._buckets.clear()
            }
            close() {
                clearInterval(this._interval),
                this.flush()
            }
        }
    },
    42504: function(e, t, n) {
        "use strict";
        n.d(t, {
            COUNTER_METRIC_TYPE: function() {
                return r
            },
            DEFAULT_BROWSER_FLUSH_INTERVAL: function() {
                return s
            },
            DISTRIBUTION_METRIC_TYPE: function() {
                return a
            },
            GAUGE_METRIC_TYPE: function() {
                return i
            },
            SET_METRIC_TYPE: function() {
                return o
            }
        });
        let r = "c"
          , i = "g"
          , o = "s"
          , a = "d"
          , s = 5e3
    },
    64211: function(e, t, n) {
        "use strict";
        n.d(t, {
            captureAggregateMetrics: function() {
                return s
            }
        });
        var r = n("2666")
          , i = n("99562")
          , o = n("54683")
          , a = n("79533");
        function s(e, t) {
            o.logger.log(`Flushing aggregated metrics, number of metrics: ${t.length}`);
            let n = e.getDsn()
              , s = e.getSdkMetadata()
              , u = function(e, t, n, o) {
                let s = {
                    sent_at: new Date().toISOString()
                };
                n && n.sdk && (s.sdk = {
                    name: n.sdk.name,
                    version: n.sdk.version
                }),
                o && t && (s.dsn = (0,
                r.dsnToString)(t));
                let u = function(e) {
                    let t = (0,
                    a.serializeMetricBuckets)(e);
                    return [{
                        type: "statsd",
                        length: t.length
                    }, t]
                }(e);
                return (0,
                i.createEnvelope)(s, [u])
            }(t, n, s, e.getOptions().tunnel);
            e.sendEnvelope(u)
        }
    },
    20122: function(e, t, n) {
        "use strict";
        n.d(t, {
            metrics: function() {
                return g
            }
        });
        var r = n("65492")
          , i = n("36812")
          , o = n("61191")
          , a = n("54683")
          , s = n("75047")
          , u = n("42878")
          , l = n("13036")
          , c = n("57886")
          , d = n("42504");
        function p(e, t) {
            let n = (0,
            o.getGlobalSingleton)("globalMetricsAggregators", () => new WeakMap)
              , r = n.get(e);
            if (r)
                return r;
            let i = new t(e);
            return e.on("flush", () => i.flush()),
            e.on("close", () => i.close()),
            n.set(e, i),
            i
        }
        function f(e, t, n, o) {
            let s = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {}
              , l = s.client || (0,
            r.getClient)();
            if (!l)
                return;
            let c = (0,
            u.getActiveSpan)()
              , d = c ? (0,
            u.getRootSpan)(c) : void 0
              , f = d && (0,
            u.spanToJSON)(d).description
              , {unit: h, tags: g, timestamp: m} = s
              , {release: _, environment: v} = l.getOptions()
              , y = {};
            _ && (y.release = _),
            v && (y.environment = v),
            f && (y.transaction = f),
            i.DEBUG_BUILD && a.logger.log(`Adding value of ${o} to ${t} metric ${n}`),
            p(l, e).add(t, n, o, h, {
                ...y,
                ...g
            }, m)
        }
        function h(e, t, n, r) {
            f(e, d.DISTRIBUTION_METRIC_TYPE, t, m(n), r)
        }
        let g = {
            increment: function(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1
                  , r = arguments.length > 3 ? arguments[3] : void 0;
                f(e, d.COUNTER_METRIC_TYPE, t, m(n), r)
            },
            distribution: h,
            set: function(e, t, n, r) {
                f(e, d.SET_METRIC_TYPE, t, n, r)
            },
            gauge: function(e, t, n, r) {
                f(e, d.GAUGE_METRIC_TYPE, t, m(n), r)
            },
            timing: function(e, t, n) {
                let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "second"
                  , i = arguments.length > 4 ? arguments[4] : void 0;
                if ("function" == typeof n) {
                    let r = (0,
                    s.timestampInSeconds)();
                    return (0,
                    l.startSpanManual)({
                        op: "metrics.timing",
                        name: t,
                        startTime: r,
                        onlyIfParent: !0
                    }, o => (0,
                    c.handleCallbackErrors)( () => n(), () => {}
                    , () => {
                        let n = (0,
                        s.timestampInSeconds)();
                        h(e, t, n - r, {
                            ...i,
                            unit: "second"
                        }),
                        o.end(n)
                    }
                    ))
                }
                h(e, t, n, {
                    ...i,
                    unit: r
                })
            },
            getMetricsAggregatorForClient: p
        };
        function m(e) {
            return "string" == typeof e ? parseInt(e) : e
        }
    },
    31269: function(e, t, n) {
        "use strict";
        n.d(t, {
            METRIC_MAP: function() {
                return o
            }
        });
        var r = n("42504")
          , i = n("79533");
        let o = {
            [r.COUNTER_METRIC_TYPE]: class e {
                constructor(e) {
                    this._value = e
                }
                get weight() {
                    return 1
                }
                add(e) {
                    this._value += e
                }
                toString() {
                    return `${this._value}`
                }
            }
            ,
            [r.GAUGE_METRIC_TYPE]: class e {
                constructor(e) {
                    this._last = e,
                    this._min = e,
                    this._max = e,
                    this._sum = e,
                    this._count = 1
                }
                get weight() {
                    return 5
                }
                add(e) {
                    this._last = e,
                    e < this._min && (this._min = e),
                    e > this._max && (this._max = e),
                    this._sum += e,
                    this._count++
                }
                toString() {
                    return `${this._last}:${this._min}:${this._max}:${this._sum}:${this._count}`
                }
            }
            ,
            [r.DISTRIBUTION_METRIC_TYPE]: class e {
                constructor(e) {
                    this._value = [e]
                }
                get weight() {
                    return this._value.length
                }
                add(e) {
                    this._value.push(e)
                }
                toString() {
                    return this._value.join(":")
                }
            }
            ,
            [r.SET_METRIC_TYPE]: class e {
                constructor(e) {
                    this.first = e,
                    this._value = new Set([e])
                }
                get weight() {
                    return this._value.size
                }
                add(e) {
                    this._value.add(e)
                }
                toString() {
                    return Array.from(this._value).map(e => "string" == typeof e ? (0,
                    i.simpleHash)(e) : e).join(":")
                }
            }
        }
    },
    35119: function(e, t, n) {
        "use strict";
        n.d(t, {
            getMetricSummaryJsonForSpan: function() {
                return o
            },
            updateMetricSummaryOnSpan: function() {
                return a
            }
        });
        var r = n("48497");
        let i = "_sentryMetrics";
        function o(e) {
            let t = e[i];
            if (!t)
                return;
            let n = {};
            for (let[,[e,i]] of t)
                (n[e] || (n[e] = [])).push((0,
                r.dropUndefinedKeys)(i));
            return n
        }
        function a(e, t, n, r, o, a, s) {
            let u = e[i] || (e[i] = new Map)
              , l = `${t}:${n}@${o}`
              , c = u.get(s);
            if (c) {
                let[,e] = c;
                u.set(s, [l, {
                    min: Math.min(e.min, r),
                    max: Math.max(e.max, r),
                    count: e.count += 1,
                    sum: e.sum += r,
                    tags: e.tags
                }])
            } else
                u.set(s, [l, {
                    min: r,
                    max: r,
                    count: 1,
                    sum: r,
                    tags: a
                }])
        }
    },
    79533: function(e, t, n) {
        "use strict";
        n.d(t, {
            getBucketKey: function() {
                return i
            },
            sanitizeMetricKey: function() {
                return u
            },
            sanitizeTags: function() {
                return c
            },
            sanitizeUnit: function() {
                return s
            },
            serializeMetricBuckets: function() {
                return a
            },
            simpleHash: function() {
                return o
            }
        });
        var r = n("48497");
        function i(e, t, n, i) {
            let o = Object.entries((0,
            r.dropUndefinedKeys)(i)).sort( (e, t) => e[0].localeCompare(t[0]));
            return `${e}${t}${n}${o}`
        }
        function o(e) {
            let t = 0;
            for (let n = 0; n < e.length; n++)
                t = (t << 5) - t + e.charCodeAt(n),
                t &= t;
            return t >>> 0
        }
        function a(e) {
            let t = "";
            for (let n of e) {
                let e = Object.entries(n.tags)
                  , r = e.length > 0 ? `|#${e.map(e => {
                    let[t,n] = e;
                    return `${t}:${n}`
                }
                ).join(",")}` : "";
                t += `${n.name}@${n.unit}:${n.metric}|${n.metricType}${r}|T${n.timestamp}
`
            }
            return t
        }
        function s(e) {
            return e.replace(/[^\w]+/gi, "_")
        }
        function u(e) {
            return e.replace(/[^\w\-.]+/gi, "_")
        }
        let l = [["\n", "\\n"], ["\r", "\\r"], ["	", "\\t"], ["\\", "\\\\"], ["|", "\\u{7c}"], [",", "\\u{2c}"]];
        function c(e) {
            let t = {};
            for (let n in e)
                if (Object.prototype.hasOwnProperty.call(e, n))
                    t[n.replace(/[^\w\-./]+/gi, "")] = [...String(e[n])].reduce( (e, t) => e + function(e) {
                        for (let[t,n] of l)
                            if (e === t)
                                return n;
                        return e
                    }(t), "");
            return t
        }
    },
    24359: function(e, t, n) {
        "use strict";
        n.d(t, {
            Scope: function() {
                return p
            }
        });
        var r = n("23013")
          , i = n("27364")
          , o = n("54683")
          , a = n("24317")
          , s = n("38859")
          , u = n("75047")
          , l = n("70846")
          , c = n("69801");
        class d {
            constructor() {
                this._notifyingListeners = !1,
                this._scopeListeners = [],
                this._eventProcessors = [],
                this._breadcrumbs = [],
                this._attachments = [],
                this._user = {},
                this._tags = {},
                this._extra = {},
                this._contexts = {},
                this._sdkProcessingMetadata = {},
                this._propagationContext = {
                    traceId: (0,
                    s.generateTraceId)(),
                    spanId: (0,
                    s.generateSpanId)()
                }
            }
            clone() {
                let e = new d;
                return e._breadcrumbs = [...this._breadcrumbs],
                e._tags = {
                    ...this._tags
                },
                e._extra = {
                    ...this._extra
                },
                e._contexts = {
                    ...this._contexts
                },
                this._contexts.flags && (e._contexts.flags = {
                    values: [...this._contexts.flags.values]
                }),
                e._user = this._user,
                e._level = this._level,
                e._session = this._session,
                e._transactionName = this._transactionName,
                e._fingerprint = this._fingerprint,
                e._eventProcessors = [...this._eventProcessors],
                e._requestSession = this._requestSession,
                e._attachments = [...this._attachments],
                e._sdkProcessingMetadata = {
                    ...this._sdkProcessingMetadata
                },
                e._propagationContext = {
                    ...this._propagationContext
                },
                e._client = this._client,
                e._lastEventId = this._lastEventId,
                (0,
                c._setSpanForScope)(e, (0,
                c._getSpanForScope)(this)),
                e
            }
            setClient(e) {
                this._client = e
            }
            setLastEventId(e) {
                this._lastEventId = e
            }
            getClient() {
                return this._client
            }
            lastEventId() {
                return this._lastEventId
            }
            addScopeListener(e) {
                this._scopeListeners.push(e)
            }
            addEventProcessor(e) {
                return this._eventProcessors.push(e),
                this
            }
            setUser(e) {
                return this._user = e || {
                    email: void 0,
                    id: void 0,
                    ip_address: void 0,
                    username: void 0
                },
                this._session && (0,
                r.updateSession)(this._session, {
                    user: e
                }),
                this._notifyScopeListeners(),
                this
            }
            getUser() {
                return this._user
            }
            getRequestSession() {
                return this._requestSession
            }
            setRequestSession(e) {
                return this._requestSession = e,
                this
            }
            setTags(e) {
                return this._tags = {
                    ...this._tags,
                    ...e
                },
                this._notifyScopeListeners(),
                this
            }
            setTag(e, t) {
                return this._tags = {
                    ...this._tags,
                    [e]: t
                },
                this._notifyScopeListeners(),
                this
            }
            setExtras(e) {
                return this._extra = {
                    ...this._extra,
                    ...e
                },
                this._notifyScopeListeners(),
                this
            }
            setExtra(e, t) {
                return this._extra = {
                    ...this._extra,
                    [e]: t
                },
                this._notifyScopeListeners(),
                this
            }
            setFingerprint(e) {
                return this._fingerprint = e,
                this._notifyScopeListeners(),
                this
            }
            setLevel(e) {
                return this._level = e,
                this._notifyScopeListeners(),
                this
            }
            setTransactionName(e) {
                return this._transactionName = e,
                this._notifyScopeListeners(),
                this
            }
            setContext(e, t) {
                return null === t ? delete this._contexts[e] : this._contexts[e] = t,
                this._notifyScopeListeners(),
                this
            }
            setSession(e) {
                return e ? this._session = e : delete this._session,
                this._notifyScopeListeners(),
                this
            }
            getSession() {
                return this._session
            }
            update(e) {
                if (!e)
                    return this;
                let t = "function" == typeof e ? e(this) : e
                  , [n,r] = t instanceof p ? [t.getScopeData(), t.getRequestSession()] : (0,
                i.isPlainObject)(t) ? [e, e.requestSession] : []
                  , {tags: o, extra: a, user: s, contexts: u, level: l, fingerprint: c=[], propagationContext: d} = n || {};
                return this._tags = {
                    ...this._tags,
                    ...o
                },
                this._extra = {
                    ...this._extra,
                    ...a
                },
                this._contexts = {
                    ...this._contexts,
                    ...u
                },
                s && Object.keys(s).length && (this._user = s),
                l && (this._level = l),
                c.length && (this._fingerprint = c),
                d && (this._propagationContext = d),
                r && (this._requestSession = r),
                this
            }
            clear() {
                return this._breadcrumbs = [],
                this._tags = {},
                this._extra = {},
                this._user = {},
                this._contexts = {},
                this._level = void 0,
                this._transactionName = void 0,
                this._fingerprint = void 0,
                this._requestSession = void 0,
                this._session = void 0,
                (0,
                c._setSpanForScope)(this, void 0),
                this._attachments = [],
                this.setPropagationContext({
                    traceId: (0,
                    s.generateTraceId)()
                }),
                this._notifyScopeListeners(),
                this
            }
            addBreadcrumb(e, t) {
                let n = "number" == typeof t ? t : 100;
                if (n <= 0)
                    return this;
                let r = {
                    timestamp: (0,
                    u.dateTimestampInSeconds)(),
                    ...e
                }
                  , i = this._breadcrumbs;
                return i.push(r),
                this._breadcrumbs = i.length > n ? i.slice(-n) : i,
                this._notifyScopeListeners(),
                this
            }
            getLastBreadcrumb() {
                return this._breadcrumbs[this._breadcrumbs.length - 1]
            }
            clearBreadcrumbs() {
                return this._breadcrumbs = [],
                this._notifyScopeListeners(),
                this
            }
            addAttachment(e) {
                return this._attachments.push(e),
                this
            }
            clearAttachments() {
                return this._attachments = [],
                this
            }
            getScopeData() {
                return {
                    breadcrumbs: this._breadcrumbs,
                    attachments: this._attachments,
                    contexts: this._contexts,
                    tags: this._tags,
                    extra: this._extra,
                    user: this._user,
                    level: this._level,
                    fingerprint: this._fingerprint || [],
                    eventProcessors: this._eventProcessors,
                    propagationContext: this._propagationContext,
                    sdkProcessingMetadata: this._sdkProcessingMetadata,
                    transactionName: this._transactionName,
                    span: (0,
                    c._getSpanForScope)(this)
                }
            }
            setSDKProcessingMetadata(e) {
                return this._sdkProcessingMetadata = (0,
                l.merge)(this._sdkProcessingMetadata, e, 2),
                this
            }
            setPropagationContext(e) {
                return this._propagationContext = {
                    spanId: (0,
                    s.generateSpanId)(),
                    ...e
                },
                this
            }
            getPropagationContext() {
                return this._propagationContext
            }
            captureException(e, t) {
                let n = t && t.event_id ? t.event_id : (0,
                a.uuid4)();
                if (!this._client)
                    return o.logger.warn("No client configured on scope - will not capture exception!"),
                    n;
                let r = Error("Sentry syntheticException");
                return this._client.captureException(e, {
                    originalException: e,
                    syntheticException: r,
                    ...t,
                    event_id: n
                }, this),
                n
            }
            captureMessage(e, t, n) {
                let r = n && n.event_id ? n.event_id : (0,
                a.uuid4)();
                if (!this._client)
                    return o.logger.warn("No client configured on scope - will not capture message!"),
                    r;
                let i = Error(e);
                return this._client.captureMessage(e, t, {
                    originalException: e,
                    syntheticException: i,
                    ...n,
                    event_id: r
                }, this),
                r
            }
            captureEvent(e, t) {
                let n = t && t.event_id ? t.event_id : (0,
                a.uuid4)();
                return this._client ? (this._client.captureEvent(e, {
                    ...t,
                    event_id: n
                }, this),
                n) : (o.logger.warn("No client configured on scope - will not capture event!"),
                n)
            }
            _notifyScopeListeners() {
                !this._notifyingListeners && (this._notifyingListeners = !0,
                this._scopeListeners.forEach(e => {
                    e(this)
                }
                ),
                this._notifyingListeners = !1)
            }
        }
        let p = d
    },
    77702: function(e, t, n) {
        "use strict";
        n.d(t, {
            initAndBind: function() {
                return a
            },
            setCurrentClient: function() {
                return s
            }
        });
        var r = n("65492")
          , i = n("36812")
          , o = n("54683");
        function a(e, t) {
            !0 === t.debug && (i.DEBUG_BUILD ? o.logger.enable() : (0,
            o.consoleSandbox)( () => {
                console.warn("[Sentry] Cannot initialize SDK with `debug` option using a non-debug bundle.")
            }
            )),
            (0,
            r.getCurrentScope)().update(t.initialScope);
            let n = new e(t);
            return s(n),
            n.init(),
            n
        }
        function s(e) {
            (0,
            r.getCurrentScope)().setClient(e)
        }
    },
    95031: function(e, t, n) {
        "use strict";
        n.d(t, {
            SEMANTIC_ATTRIBUTE_EXCLUSIVE_TIME: function() {
                return p
            },
            SEMANTIC_ATTRIBUTE_PROFILE_ID: function() {
                return d
            },
            SEMANTIC_ATTRIBUTE_SENTRY_CUSTOM_SPAN_NAME: function() {
                return c
            },
            SEMANTIC_ATTRIBUTE_SENTRY_IDLE_SPAN_FINISH_REASON: function() {
                return s
            },
            SEMANTIC_ATTRIBUTE_SENTRY_MEASUREMENT_UNIT: function() {
                return u
            },
            SEMANTIC_ATTRIBUTE_SENTRY_MEASUREMENT_VALUE: function() {
                return l
            },
            SEMANTIC_ATTRIBUTE_SENTRY_OP: function() {
                return o
            },
            SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN: function() {
                return a
            },
            SEMANTIC_ATTRIBUTE_SENTRY_SAMPLE_RATE: function() {
                return i
            },
            SEMANTIC_ATTRIBUTE_SENTRY_SOURCE: function() {
                return r
            }
        });
        let r = "sentry.source"
          , i = "sentry.sample_rate"
          , o = "sentry.op"
          , a = "sentry.origin"
          , s = "sentry.idle_span_finish_reason"
          , u = "sentry.measurement_unit"
          , l = "sentry.measurement_value"
          , c = "sentry.custom_span_name"
          , d = "sentry.profile_id"
          , p = "sentry.exclusive_time"
    },
    23013: function(e, t, n) {
        "use strict";
        n.d(t, {
            closeSession: function() {
                return u
            },
            makeSession: function() {
                return a
            },
            updateSession: function() {
                return s
            }
        });
        var r = n("48497")
          , i = n("75047")
          , o = n("24317");
        function a(e) {
            let t = (0,
            i.timestampInSeconds)()
              , n = {
                sid: (0,
                o.uuid4)(),
                init: !0,
                timestamp: t,
                started: t,
                duration: 0,
                status: "ok",
                errors: 0,
                ignoreDuration: !1,
                toJSON: () => (function(e) {
                    return (0,
                    r.dropUndefinedKeys)({
                        sid: `${e.sid}`,
                        init: e.init,
                        started: new Date(1e3 * e.started).toISOString(),
                        timestamp: new Date(1e3 * e.timestamp).toISOString(),
                        status: e.status,
                        errors: e.errors,
                        did: "number" == typeof e.did || "string" == typeof e.did ? `${e.did}` : void 0,
                        duration: e.duration,
                        abnormal_mechanism: e.abnormal_mechanism,
                        attrs: {
                            release: e.release,
                            environment: e.environment,
                            ip_address: e.ipAddress,
                            user_agent: e.userAgent
                        }
                    })
                }
                )(n)
            };
            return e && s(n, e),
            n
        }
        function s(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            if (t.user && (!e.ipAddress && t.user.ip_address && (e.ipAddress = t.user.ip_address),
            !e.did && !t.did && (e.did = t.user.id || t.user.email || t.user.username)),
            e.timestamp = t.timestamp || (0,
            i.timestampInSeconds)(),
            t.abnormal_mechanism && (e.abnormal_mechanism = t.abnormal_mechanism),
            t.ignoreDuration && (e.ignoreDuration = t.ignoreDuration),
            t.sid && (e.sid = 32 === t.sid.length ? t.sid : (0,
            o.uuid4)()),
            void 0 !== t.init && (e.init = t.init),
            !e.did && t.did && (e.did = `${t.did}`),
            "number" == typeof t.started && (e.started = t.started),
            e.ignoreDuration)
                e.duration = void 0;
            else if ("number" == typeof t.duration)
                e.duration = t.duration;
            else {
                let t = e.timestamp - e.started;
                e.duration = t >= 0 ? t : 0
            }
            t.release && (e.release = t.release),
            t.environment && (e.environment = t.environment),
            !e.ipAddress && t.ipAddress && (e.ipAddress = t.ipAddress),
            !e.userAgent && t.userAgent && (e.userAgent = t.userAgent),
            "number" == typeof t.errors && (e.errors = t.errors),
            t.status && (e.status = t.status)
        }
        function u(e, t) {
            let n = {};
            t ? n = {
                status: t
            } : "ok" === e.status && (n = {
                status: "exited"
            }),
            s(e, n)
        }
    },
    10581: function(e, t, n) {
        "use strict";
        n.d(t, {
            freezeDscOnSpan: function() {
                return d
            },
            getDynamicSamplingContextFromScope: function() {
                return f
            },
            getDynamicSamplingContextFromSpan: function() {
                return h
            },
            spanToBaggageHeader: function() {
                return g
            }
        });
        var r = n("58253")
          , i = n("65492")
          , o = n("95031")
          , a = n("2129")
          , s = n("48497")
          , u = n("92926")
          , l = n("42878");
        let c = "_frozenDsc";
        function d(e, t) {
            (0,
            s.addNonEnumerableProperty)(e, c, t)
        }
        function p(e, t) {
            let n = t.getOptions()
              , {publicKey: i} = t.getDsn() || {}
              , o = (0,
            s.dropUndefinedKeys)({
                environment: n.environment || r.DEFAULT_ENVIRONMENT,
                release: n.release,
                public_key: i,
                trace_id: e
            });
            return t.emit("createDsc", o),
            o
        }
        function f(e, t) {
            let n = t.getPropagationContext();
            return n.dsc || p(n.traceId, e)
        }
        function h(e) {
            let t = (0,
            i.getClient)();
            if (!t)
                return {};
            let n = (0,
            l.getRootSpan)(e)
              , r = n[c];
            if (r)
                return r;
            let s = n.spanContext().traceState
              , d = s && s.get("sentry.dsc")
              , f = d && (0,
            a.baggageHeaderToDynamicSamplingContext)(d);
            if (f)
                return f;
            let h = p(e.spanContext().traceId, t)
              , g = (0,
            l.spanToJSON)(n)
              , m = g.data || {}
              , _ = m[o.SEMANTIC_ATTRIBUTE_SENTRY_SAMPLE_RATE];
            null != _ && (h.sample_rate = `${_}`);
            let v = m[o.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE]
              , y = g.description;
            return "url" !== v && y && (h.transaction = y),
            (0,
            u.hasTracingEnabled)() && (h.sampled = String((0,
            l.spanIsSampled)(n))),
            t.emit("createDsc", h, n),
            h
        }
        function g(e) {
            let t = h(e);
            return (0,
            a.dynamicSamplingContextToSentryBaggageHeader)(t)
        }
    },
    69325: function(e, t, n) {
        "use strict";
        n.d(t, {
            registerSpanErrorInstrumentation: function() {
                return c
            }
        });
        var r = n("36812")
          , i = n("38663")
          , o = n("96010")
          , a = n("54683")
          , s = n("42878")
          , u = n("1020");
        let l = !1;
        function c() {
            !l && (l = !0,
            (0,
            i.addGlobalErrorInstrumentationHandler)(d),
            (0,
            o.addGlobalUnhandledRejectionInstrumentationHandler)(d))
        }
        function d() {
            let e = (0,
            s.getActiveSpan)()
              , t = e && (0,
            s.getRootSpan)(e);
            if (t) {
                let e = "internal_error";
                r.DEBUG_BUILD && a.logger.log(`[Tracing] Root span: ${e} -> Global error occurred`),
                t.setStatus({
                    code: u.SPAN_STATUS_ERROR,
                    message: e
                })
            }
        }
        d.tag = "sentry_tracingErrorCallback"
    },
    25162: function(e, t, n) {
        "use strict";
        n.d(t, {
            addTracingExtensions: function() {
                return i
            }
        });
        var r = n("69325");
        function i() {
            (0,
            r.registerSpanErrorInstrumentation)()
        }
    },
    64992: function(e, t, n) {
        "use strict";
        n.d(t, {
            TRACING_DEFAULTS: function() {
                return h
            },
            startIdleSpan: function() {
                return g
            }
        });
        var r = n("65492")
          , i = n("36812")
          , o = n("95031")
          , a = n("54683")
          , s = n("75047")
          , u = n("92926")
          , l = n("69801")
          , c = n("42878")
          , d = n("22305")
          , p = n("1020")
          , f = n("13036");
        let h = {
            idleTimeout: 1e3,
            finalTimeout: 3e4,
            childSpanTimeout: 15e3
        };
        function g(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n = new Map, g = !1, m, _ = "externalFinish", v = !t.disableAutoFinish, y = [], {idleTimeout: S=h.idleTimeout, finalTimeout: E=h.finalTimeout, childSpanTimeout: b=h.childSpanTimeout, beforeSpanEnd: I} = t, T = (0,
            r.getClient)();
            if (!T || !(0,
            u.hasTracingEnabled)())
                return new d.SentryNonRecordingSpan;
            let w = (0,
            r.getCurrentScope)()
              , C = (0,
            c.getActiveSpan)()
              , k = function(e) {
                let t = (0,
                f.startInactiveSpan)(e);
                return (0,
                l._setSpanForScope)((0,
                r.getCurrentScope)(), t),
                i.DEBUG_BUILD && a.logger.log("[Tracing] Started span is an idle span"),
                t
            }(e);
            function x() {
                m && (clearTimeout(m),
                m = void 0)
            }
            function N(e) {
                x(),
                m = setTimeout( () => {
                    !g && 0 === n.size && v && (_ = "idleTimeout",
                    k.end(e))
                }
                , S)
            }
            function A(e) {
                m = setTimeout( () => {
                    !g && v && (_ = "heartbeatFailed",
                    k.end(e))
                }
                , b)
            }
            k.end = new Proxy(k.end,{
                apply(e, t, n) {
                    I && I(k);
                    let[r,...i] = n
                      , o = r || (0,
                    s.timestampInSeconds)()
                      , a = (0,
                    c.spanTimeInputToSeconds)(o)
                      , u = (0,
                    c.getSpanDescendants)(k).filter(e => e !== k);
                    if (!u.length)
                        return O(a),
                        Reflect.apply(e, t, [a, ...i]);
                    let l = u.map(e => (0,
                    c.spanToJSON)(e).timestamp).filter(e => !!e)
                      , d = l.length ? Math.max(...l) : void 0
                      , p = (0,
                    c.spanToJSON)(k).start_timestamp
                      , f = Math.min(p ? p + E / 1e3 : 1 / 0, Math.max(p || -1 / 0, Math.min(a, d || 1 / 0)));
                    return O(f),
                    Reflect.apply(e, t, [f, ...i])
                }
            });
            function O(e) {
                g = !0,
                n.clear(),
                y.forEach(e => e()),
                (0,
                l._setSpanForScope)(w, C);
                let t = (0,
                c.spanToJSON)(k)
                  , {start_timestamp: r} = t;
                if (!r)
                    return;
                !(t.data || {})[o.SEMANTIC_ATTRIBUTE_SENTRY_IDLE_SPAN_FINISH_REASON] && k.setAttribute(o.SEMANTIC_ATTRIBUTE_SENTRY_IDLE_SPAN_FINISH_REASON, _),
                a.logger.log(`[Tracing] Idle span "${t.op}" finished`);
                let s = (0,
                c.getSpanDescendants)(k).filter(e => e !== k)
                  , u = 0;
                s.forEach(t => {
                    t.isRecording() && (t.setStatus({
                        code: p.SPAN_STATUS_ERROR,
                        message: "cancelled"
                    }),
                    t.end(e),
                    i.DEBUG_BUILD && a.logger.log("[Tracing] Cancelling span since span ended early", JSON.stringify(t, void 0, 2)));
                    let {timestamp: n=0, start_timestamp: r=0} = (0,
                    c.spanToJSON)(t)
                      , o = r <= e
                      , s = n - r <= (E + S) / 1e3;
                    if (i.DEBUG_BUILD) {
                        let e = JSON.stringify(t, void 0, 2);
                        o ? !s && a.logger.log("[Tracing] Discarding span since it finished after idle span final timeout", e) : a.logger.log("[Tracing] Discarding span since it happened after idle span was finished", e)
                    }
                    (!s || !o) && ((0,
                    c.removeChildSpanFromSpan)(k, t),
                    u++)
                }
                ),
                u > 0 && k.setAttribute("sentry.idle_span_discarded_spans", u)
            }
            return y.push(T.on("spanStart", e => {
                if (!g && e !== k && !(0,
                c.spanToJSON)(e).timestamp) {
                    if ((0,
                    c.getSpanDescendants)(k).includes(e)) {
                        var t;
                        t = e.spanContext().spanId,
                        x(),
                        n.set(t, !0),
                        A((0,
                        s.timestampInSeconds)() + b / 1e3)
                    }
                }
            }
            )),
            y.push(T.on("spanEnd", e => {
                if (!g) {
                    var t;
                    t = e.spanContext().spanId,
                    n.has(t) && n.delete(t),
                    0 === n.size && N((0,
                    s.timestampInSeconds)() + S / 1e3)
                }
            }
            )),
            y.push(T.on("idleSpanEnableAutoFinish", e => {
                e === k && (v = !0,
                N(),
                n.size && A())
            }
            )),
            !t.disableAutoFinish && N(),
            setTimeout( () => {
                !g && (k.setStatus({
                    code: p.SPAN_STATUS_ERROR,
                    message: "deadline_exceeded"
                }),
                _ = "finalTimeout",
                k.end())
            }
            , E),
            k
        }
    },
    61527: function(e, t, n) {
        "use strict";
        n.d(t, {
            logSpanEnd: function() {
                return s
            },
            logSpanStart: function() {
                return a
            }
        });
        var r = n("36812")
          , i = n("54683")
          , o = n("42878");
        function a(e) {
            if (!r.DEBUG_BUILD)
                return;
            let {description: t="< unknown name >", op: n="< unknown op >", parent_span_id: a} = (0,
            o.spanToJSON)(e)
              , {spanId: s} = e.spanContext()
              , u = (0,
            o.spanIsSampled)(e)
              , l = (0,
            o.getRootSpan)(e)
              , c = l === e
              , d = `[Tracing] Starting ${u ? "sampled" : "unsampled"} ${c ? "root " : ""}span`
              , p = [`op: ${n}`, `name: ${t}`, `ID: ${s}`];
            if (a && p.push(`parent ID: ${a}`),
            !c) {
                let {op: e, description: t} = (0,
                o.spanToJSON)(l);
                p.push(`root ID: ${l.spanContext().spanId}`),
                e && p.push(`root op: ${e}`),
                t && p.push(`root description: ${t}`)
            }
            i.logger.log(`${d}
  ${p.join("\n  ")}`)
        }
        function s(e) {
            if (!r.DEBUG_BUILD)
                return;
            let {description: t="< unknown name >", op: n="< unknown op >"} = (0,
            o.spanToJSON)(e)
              , {spanId: a} = e.spanContext()
              , s = (0,
            o.getRootSpan)(e) === e
              , u = `[Tracing] Finishing "${n}" ${s ? "root " : ""}span "${t}" with ID ${a}`;
            i.logger.log(u)
        }
    },
    29556: function(e, t, n) {
        "use strict";
        n.d(t, {
            setMeasurement: function() {
                return s
            },
            timedEventsToMeasurements: function() {
                return u
            }
        });
        var r = n("36812")
          , i = n("95031")
          , o = n("54683")
          , a = n("42878");
        function s(e, t, n) {
            let s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : (0,
            a.getActiveSpan)()
              , u = s && (0,
            a.getRootSpan)(s);
            u && (r.DEBUG_BUILD && o.logger.log(`[Measurement] Setting measurement on root span: ${e} = ${t} ${n}`),
            u.addEvent(e, {
                [i.SEMANTIC_ATTRIBUTE_SENTRY_MEASUREMENT_VALUE]: t,
                [i.SEMANTIC_ATTRIBUTE_SENTRY_MEASUREMENT_UNIT]: n
            }))
        }
        function u(e) {
            if (!e || 0 === e.length)
                return;
            let t = {};
            return e.forEach(e => {
                let n = e.attributes || {}
                  , r = n[i.SEMANTIC_ATTRIBUTE_SENTRY_MEASUREMENT_UNIT]
                  , o = n[i.SEMANTIC_ATTRIBUTE_SENTRY_MEASUREMENT_VALUE];
                "string" == typeof r && "number" == typeof o && (t[e.name] = {
                    value: o,
                    unit: r
                })
            }
            ),
            t
        }
    },
    86565: function(e, t, n) {
        "use strict";
        n.d(t, {
            sampleSpan: function() {
                return u
            }
        });
        var r = n("65492")
          , i = n("36812")
          , o = n("54683")
          , a = n("92926")
          , s = n("21109");
        function u(e, t) {
            if (!(0,
            a.hasTracingEnabled)(e))
                return [!1];
            let n = (0,
            r.getIsolationScope)().getScopeData().sdkProcessingMetadata.normalizedRequest, u = {
                ...t,
                normalizedRequest: t.normalizedRequest || n
            }, l;
            l = "function" == typeof e.tracesSampler ? e.tracesSampler(u) : void 0 !== u.parentSampled ? u.parentSampled : void 0 !== e.tracesSampleRate ? e.tracesSampleRate : 1;
            let c = (0,
            s.parseSampleRate)(l);
            return void 0 === c ? (i.DEBUG_BUILD && o.logger.warn("[Tracing] Discarding transaction because of invalid sample rate."),
            [!1]) : c ? Math.random() < c ? [!0, c] : (i.DEBUG_BUILD && o.logger.log(`[Tracing] Discarding transaction because it's not included in the random sample (sampling rate = ${Number(l)})`),
            [!1, c]) : (i.DEBUG_BUILD && o.logger.log(`[Tracing] Discarding transaction because ${"function" == typeof e.tracesSampler ? "tracesSampler returned 0 or false" : "a negative sampling decision was inherited or tracesSampleRate is set to 0"}`),
            [!1, c])
        }
    },
    22305: function(e, t, n) {
        "use strict";
        n.d(t, {
            SentryNonRecordingSpan: function() {
                return o
            }
        });
        var r = n("38859")
          , i = n("42878");
        class o {
            constructor(e={}) {
                this._traceId = e.traceId || (0,
                r.generateTraceId)(),
                this._spanId = e.spanId || (0,
                r.generateSpanId)()
            }
            spanContext() {
                return {
                    spanId: this._spanId,
                    traceId: this._traceId,
                    traceFlags: i.TRACE_FLAG_NONE
                }
            }
            end(e) {}
            setAttribute(e, t) {
                return this
            }
            setAttributes(e) {
                return this
            }
            setStatus(e) {
                return this
            }
            updateName(e) {
                return this
            }
            isRecording() {
                return !1
            }
            addEvent(e, t, n) {
                return this
            }
            addLink(e) {
                return this
            }
            addLinks(e) {
                return this
            }
            recordException(e, t) {}
        }
    },
    55011: function(e, t, n) {
        "use strict";
        n.d(t, {
            SentrySpan: function() {
                return _
            }
        });
        var r = n("65492")
          , i = n("36812")
          , o = n("93718")
          , a = n("35119")
          , s = n("95031")
          , u = n("54683")
          , l = n("48497")
          , c = n("38859")
          , d = n("75047")
          , p = n("42878")
          , f = n("10581")
          , h = n("61527")
          , g = n("29556")
          , m = n("41326");
        class _ {
            constructor(e={}) {
                this._traceId = e.traceId || (0,
                c.generateTraceId)(),
                this._spanId = e.spanId || (0,
                c.generateSpanId)(),
                this._startTime = e.startTimestamp || (0,
                d.timestampInSeconds)(),
                this._attributes = {},
                this.setAttributes({
                    [s.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: "manual",
                    [s.SEMANTIC_ATTRIBUTE_SENTRY_OP]: e.op,
                    ...e.attributes
                }),
                this._name = e.name,
                e.parentSpanId && (this._parentSpanId = e.parentSpanId),
                "sampled"in e && (this._sampled = e.sampled),
                e.endTimestamp && (this._endTime = e.endTimestamp),
                this._events = [],
                this._isStandaloneSpan = e.isStandalone,
                this._endTime && this._onSpanEnded()
            }
            addLink(e) {
                return this
            }
            addLinks(e) {
                return this
            }
            recordException(e, t) {}
            spanContext() {
                let {_spanId: e, _traceId: t, _sampled: n} = this;
                return {
                    spanId: e,
                    traceId: t,
                    traceFlags: n ? p.TRACE_FLAG_SAMPLED : p.TRACE_FLAG_NONE
                }
            }
            setAttribute(e, t) {
                return void 0 === t ? delete this._attributes[e] : this._attributes[e] = t,
                this
            }
            setAttributes(e) {
                return Object.keys(e).forEach(t => this.setAttribute(t, e[t])),
                this
            }
            updateStartTime(e) {
                this._startTime = (0,
                p.spanTimeInputToSeconds)(e)
            }
            setStatus(e) {
                return this._status = e,
                this
            }
            updateName(e) {
                return this._name = e,
                this.setAttribute(s.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE, "custom"),
                this
            }
            end(e) {
                !this._endTime && (this._endTime = (0,
                p.spanTimeInputToSeconds)(e),
                (0,
                h.logSpanEnd)(this),
                this._onSpanEnded())
            }
            getSpanJSON() {
                return (0,
                l.dropUndefinedKeys)({
                    data: this._attributes,
                    description: this._name,
                    op: this._attributes[s.SEMANTIC_ATTRIBUTE_SENTRY_OP],
                    parent_span_id: this._parentSpanId,
                    span_id: this._spanId,
                    start_timestamp: this._startTime,
                    status: (0,
                    p.getStatusMessage)(this._status),
                    timestamp: this._endTime,
                    trace_id: this._traceId,
                    origin: this._attributes[s.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN],
                    _metrics_summary: (0,
                    a.getMetricSummaryJsonForSpan)(this),
                    profile_id: this._attributes[s.SEMANTIC_ATTRIBUTE_PROFILE_ID],
                    exclusive_time: this._attributes[s.SEMANTIC_ATTRIBUTE_EXCLUSIVE_TIME],
                    measurements: (0,
                    g.timedEventsToMeasurements)(this._events),
                    is_segment: this._isStandaloneSpan && (0,
                    p.getRootSpan)(this) === this || void 0,
                    segment_id: this._isStandaloneSpan ? (0,
                    p.getRootSpan)(this).spanContext().spanId : void 0
                })
            }
            isRecording() {
                return !this._endTime && !!this._sampled
            }
            addEvent(e, t, n) {
                i.DEBUG_BUILD && u.logger.log("[Tracing] Adding an event to span:", e);
                let r = v(t) ? t : n || (0,
                d.timestampInSeconds)()
                  , o = v(t) ? {} : t || {}
                  , a = {
                    name: e,
                    time: (0,
                    p.spanTimeInputToSeconds)(r),
                    attributes: o
                };
                return this._events.push(a),
                this
            }
            isStandaloneSpan() {
                return !!this._isStandaloneSpan
            }
            _onSpanEnded() {
                let e = (0,
                r.getClient)();
                if (e && e.emit("spanEnd", this),
                !(this._isStandaloneSpan || this === (0,
                p.getRootSpan)(this)))
                    return;
                if (this._isStandaloneSpan) {
                    this._sampled ? function(e) {
                        let t = (0,
                        r.getClient)();
                        if (!t)
                            return;
                        let n = e[1];
                        if (!n || 0 === n.length) {
                            t.recordDroppedEvent("before_send", "span");
                            return
                        }
                        t.sendEnvelope(e)
                    }((0,
                    o.createSpanEnvelope)([this], e)) : (i.DEBUG_BUILD && u.logger.log("[Tracing] Discarding standalone span because its trace was not chosen to be sampled."),
                    e && e.recordDroppedEvent("sample_rate", "span"));
                    return
                }
                let t = this._convertSpanToTransaction();
                t && ((0,
                m.getCapturedScopesOnSpan)(this).scope || (0,
                r.getCurrentScope)()).captureEvent(t)
            }
            _convertSpanToTransaction() {
                if (!y((0,
                p.spanToJSON)(this)))
                    return;
                !this._name && (i.DEBUG_BUILD && u.logger.warn("Transaction has no name, falling back to `<unlabeled transaction>`."),
                this._name = "<unlabeled transaction>");
                let {scope: e, isolationScope: t} = (0,
                m.getCapturedScopesOnSpan)(this)
                  , n = (e || (0,
                r.getCurrentScope)()).getClient() || (0,
                r.getClient)();
                if (!0 !== this._sampled) {
                    i.DEBUG_BUILD && u.logger.log("[Tracing] Discarding transaction because its trace was not chosen to be sampled."),
                    n && n.recordDroppedEvent("sample_rate", "transaction");
                    return
                }
                let o = (0,
                p.getSpanDescendants)(this).filter(e => e !== this && !function(e) {
                    return e instanceof _ && e.isStandaloneSpan()
                }(e)).map(e => (0,
                p.spanToJSON)(e)).filter(y)
                  , c = this._attributes[s.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE];
                delete this._attributes[s.SEMANTIC_ATTRIBUTE_SENTRY_CUSTOM_SPAN_NAME],
                o.forEach(e => {
                    e.data && delete e.data[s.SEMANTIC_ATTRIBUTE_SENTRY_CUSTOM_SPAN_NAME]
                }
                );
                let d = {
                    contexts: {
                        trace: (0,
                        p.spanToTransactionTraceContext)(this)
                    },
                    spans: o.length > 1e3 ? o.sort( (e, t) => e.start_timestamp - t.start_timestamp).slice(0, 1e3) : o,
                    start_timestamp: this._startTime,
                    timestamp: this._endTime,
                    transaction: this._name,
                    type: "transaction",
                    sdkProcessingMetadata: {
                        capturedSpanScope: e,
                        capturedSpanIsolationScope: t,
                        ...(0,
                        l.dropUndefinedKeys)({
                            dynamicSamplingContext: (0,
                            f.getDynamicSamplingContextFromSpan)(this)
                        })
                    },
                    _metrics_summary: (0,
                    a.getMetricSummaryJsonForSpan)(this),
                    ...c && {
                        transaction_info: {
                            source: c
                        }
                    }
                }
                  , h = (0,
                g.timedEventsToMeasurements)(this._events);
                return h && Object.keys(h).length && (i.DEBUG_BUILD && u.logger.log("[Measurements] Adding measurements to transaction event", JSON.stringify(h, void 0, 2)),
                d.measurements = h),
                d
            }
        }
        function v(e) {
            return e && "number" == typeof e || e instanceof Date || Array.isArray(e)
        }
        function y(e) {
            return !!e.start_timestamp && !!e.timestamp && !!e.span_id && !!e.trace_id
        }
    },
    1020: function(e, t, n) {
        "use strict";
        n.d(t, {
            SPAN_STATUS_ERROR: function() {
                return o
            },
            SPAN_STATUS_OK: function() {
                return i
            },
            SPAN_STATUS_UNSET: function() {
                return r
            },
            getSpanStatusFromHttpCode: function() {
                return a
            },
            setHttpStatus: function() {
                return s
            }
        });
        let r = 0
          , i = 1
          , o = 2;
        function a(e) {
            if (e < 400 && e >= 100)
                return {
                    code: i
                };
            if (e >= 400 && e < 500)
                switch (e) {
                case 401:
                    return {
                        code: o,
                        message: "unauthenticated"
                    };
                case 403:
                    return {
                        code: o,
                        message: "permission_denied"
                    };
                case 404:
                    return {
                        code: o,
                        message: "not_found"
                    };
                case 409:
                    return {
                        code: o,
                        message: "already_exists"
                    };
                case 413:
                    return {
                        code: o,
                        message: "failed_precondition"
                    };
                case 429:
                    return {
                        code: o,
                        message: "resource_exhausted"
                    };
                case 499:
                    return {
                        code: o,
                        message: "cancelled"
                    };
                default:
                    return {
                        code: o,
                        message: "invalid_argument"
                    }
                }
            if (e >= 500 && e < 600)
                switch (e) {
                case 501:
                    return {
                        code: o,
                        message: "unimplemented"
                    };
                case 503:
                    return {
                        code: o,
                        message: "unavailable"
                    };
                case 504:
                    return {
                        code: o,
                        message: "deadline_exceeded"
                    };
                default:
                    return {
                        code: o,
                        message: "internal_error"
                    }
                }
            return {
                code: o,
                message: "unknown_error"
            }
        }
        function s(e, t) {
            e.setAttribute("http.response.status_code", t);
            let n = a(t);
            "unknown_error" !== n.message && e.setStatus(n)
        }
    },
    13036: function(e, t, n) {
        "use strict";
        n.d(t, {
            continueTrace: function() {
                return C
            },
            startInactiveSpan: function() {
                return w
            },
            startNewTrace: function() {
                return N
            },
            startSpan: function() {
                return I
            },
            startSpanManual: function() {
                return T
            },
            suppressTracing: function() {
                return x
            },
            withActiveSpan: function() {
                return k
            }
        });
        var r = n("37085")
          , i = n("65492")
          , o = n("53627")
          , a = n("36812")
          , s = n("95031")
          , u = n("54683")
          , l = n("38859")
          , c = n("96155")
          , d = n("57886")
          , p = n("92926")
          , f = n("69801")
          , h = n("42878")
          , g = n("10581")
          , m = n("61527")
          , _ = n("86565")
          , v = n("22305")
          , y = n("55011")
          , S = n("1020")
          , E = n("41326");
        let b = "__SENTRY_SUPPRESS_TRACING__";
        function I(e, t) {
            let n = D();
            if (n.startSpan)
                return n.startSpan(e, t);
            let r = O(e)
              , {forceTransaction: o, parentSpan: a} = e;
            return (0,
            i.withScope)(e.scope, () => L(a)( () => {
                let n = (0,
                i.getCurrentScope)()
                  , a = M(n)
                  , s = e.onlyIfParent && !a ? new v.SentryNonRecordingSpan : A({
                    parentSpan: a,
                    spanArguments: r,
                    forceTransaction: o,
                    scope: n
                });
                return (0,
                f._setSpanForScope)(n, s),
                (0,
                d.handleCallbackErrors)( () => t(s), () => {
                    let {status: e} = (0,
                    h.spanToJSON)(s);
                    s.isRecording() && (!e || "ok" === e) && s.setStatus({
                        code: S.SPAN_STATUS_ERROR,
                        message: "internal_error"
                    })
                }
                , () => s.end())
            }
            ))
        }
        function T(e, t) {
            let n = D();
            if (n.startSpanManual)
                return n.startSpanManual(e, t);
            let r = O(e)
              , {forceTransaction: o, parentSpan: a} = e;
            return (0,
            i.withScope)(e.scope, () => L(a)( () => {
                let n = (0,
                i.getCurrentScope)()
                  , a = M(n)
                  , s = e.onlyIfParent && !a ? new v.SentryNonRecordingSpan : A({
                    parentSpan: a,
                    spanArguments: r,
                    forceTransaction: o,
                    scope: n
                });
                function u() {
                    s.end()
                }
                return (0,
                f._setSpanForScope)(n, s),
                (0,
                d.handleCallbackErrors)( () => t(s, u), () => {
                    let {status: e} = (0,
                    h.spanToJSON)(s);
                    s.isRecording() && (!e || "ok" === e) && s.setStatus({
                        code: S.SPAN_STATUS_ERROR,
                        message: "internal_error"
                    })
                }
                )
            }
            ))
        }
        function w(e) {
            let t = D();
            if (t.startInactiveSpan)
                return t.startInactiveSpan(e);
            let n = O(e)
              , {forceTransaction: r, parentSpan: o} = e;
            return (e.scope ? t => (0,
            i.withScope)(e.scope, t) : void 0 !== o ? e => k(o, e) : e => e())( () => {
                let t = (0,
                i.getCurrentScope)()
                  , o = M(t);
                return e.onlyIfParent && !o ? new v.SentryNonRecordingSpan : A({
                    parentSpan: o,
                    spanArguments: n,
                    forceTransaction: r,
                    scope: t
                })
            }
            )
        }
        let C = (e, t) => {
            let n = (0,
            r.getMainCarrier)()
              , a = (0,
            o.getAsyncContextStrategy)(n);
            if (a.continueTrace)
                return a.continueTrace(e, t);
            let {sentryTrace: s, baggage: u} = e;
            return (0,
            i.withScope)(e => {
                let n = (0,
                c.propagationContextFromHeaders)(s, u);
                return e.setPropagationContext(n),
                t()
            }
            )
        }
        ;
        function k(e, t) {
            let n = D();
            return n.withActiveSpan ? n.withActiveSpan(e, t) : (0,
            i.withScope)(n => ((0,
            f._setSpanForScope)(n, e || void 0),
            t(n)))
        }
        function x(e) {
            let t = D();
            return t.suppressTracing ? t.suppressTracing(e) : (0,
            i.withScope)(t => (t.setSDKProcessingMetadata({
                [b]: !0
            }),
            e()))
        }
        function N(e) {
            return (0,
            i.withScope)(t => (t.setPropagationContext({
                traceId: (0,
                l.generateTraceId)()
            }),
            a.DEBUG_BUILD && u.logger.info(`Starting a new trace with id ${t.getPropagationContext().traceId}`),
            k(null, e)))
        }
        function A(e) {
            let {parentSpan: t, spanArguments: n, forceTransaction: r, scope: o} = e;
            if (!(0,
            p.hasTracingEnabled)())
                return new v.SentryNonRecordingSpan;
            let a = (0,
            i.getIsolationScope)(), s;
            if (t && !r)
                s = function(e, t, n) {
                    let {spanId: r, traceId: o} = e.spanContext()
                      , a = !t.getScopeData().sdkProcessingMetadata[b] && (0,
                    h.spanIsSampled)(e)
                      , s = a ? new y.SentrySpan({
                        ...n,
                        parentSpanId: r,
                        traceId: o,
                        sampled: a
                    }) : new v.SentryNonRecordingSpan({
                        traceId: o
                    });
                    (0,
                    h.addChildSpanToSpan)(e, s);
                    let u = (0,
                    i.getClient)();
                    return u && (u.emit("spanStart", s),
                    n.endTimestamp && u.emit("spanEnd", s)),
                    s
                }(t, o, n),
                (0,
                h.addChildSpanToSpan)(t, s);
            else if (t) {
                let e = (0,
                g.getDynamicSamplingContextFromSpan)(t)
                  , {traceId: r, spanId: i} = t.spanContext()
                  , a = (0,
                h.spanIsSampled)(t);
                s = R({
                    traceId: r,
                    parentSpanId: i,
                    ...n
                }, o, a),
                (0,
                g.freezeDscOnSpan)(s, e)
            } else {
                let {traceId: e, dsc: t, parentSpanId: r, sampled: i} = {
                    ...a.getPropagationContext(),
                    ...o.getPropagationContext()
                };
                s = R({
                    traceId: e,
                    parentSpanId: r,
                    ...n
                }, o, i),
                t && (0,
                g.freezeDscOnSpan)(s, t)
            }
            return (0,
            m.logSpanStart)(s),
            (0,
            E.setCapturedScopesOnSpan)(s, o, a),
            s
        }
        function O(e) {
            let t = {
                isStandalone: (e.experimental || {}).standalone,
                ...e
            };
            if (e.startTime) {
                let n = {
                    ...t
                };
                return n.startTimestamp = (0,
                h.spanTimeInputToSeconds)(e.startTime),
                delete n.startTime,
                n
            }
            return t
        }
        function D() {
            let e = (0,
            r.getMainCarrier)();
            return (0,
            o.getAsyncContextStrategy)(e)
        }
        function R(e, t, n) {
            let r = (0,
            i.getClient)()
              , o = r && r.getOptions() || {}
              , {name: a="", attributes: u} = e
              , [l,c] = t.getScopeData().sdkProcessingMetadata[b] ? [!1] : (0,
            _.sampleSpan)(o, {
                name: a,
                parentSampled: n,
                attributes: u,
                transactionContext: {
                    name: a,
                    parentSampled: n
                }
            })
              , d = new y.SentrySpan({
                ...e,
                attributes: {
                    [s.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE]: "custom",
                    ...e.attributes
                },
                sampled: l
            });
            return void 0 !== c && d.setAttribute(s.SEMANTIC_ATTRIBUTE_SENTRY_SAMPLE_RATE, c),
            r && r.emit("spanStart", d),
            d
        }
        function M(e) {
            let t = (0,
            f._getSpanForScope)(e);
            if (!t)
                return;
            let n = (0,
            i.getClient)();
            return (n ? n.getOptions() : {}).parentSpanIsAlwaysRootSpan ? (0,
            h.getRootSpan)(t) : t
        }
        function L(e) {
            return void 0 !== e ? t => k(e, t) : e => e()
        }
    },
    41326: function(e, t, n) {
        "use strict";
        n.d(t, {
            getCapturedScopesOnSpan: function() {
                return s
            },
            setCapturedScopesOnSpan: function() {
                return a
            }
        });
        var r = n("48497");
        let i = "_sentryScope"
          , o = "_sentryIsolationScope";
        function a(e, t, n) {
            e && ((0,
            r.addNonEnumerableProperty)(e, o, n),
            (0,
            r.addNonEnumerableProperty)(e, i, t))
        }
        function s(e) {
            return {
                scope: e[i],
                isolationScope: e[o]
            }
        }
    },
    14430: function(e, t, n) {
        "use strict";
        n.d(t, {
            createTransport: function() {
                return c
            }
        });
        var r = n("36812")
          , i = n("99562")
          , o = n("25323")
          , a = n("54683")
          , s = n("50846")
          , u = n("20547")
          , l = n("81567");
        function c(e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : (0,
            s.makePromiseBuffer)(e.bufferSize || 64)
              , c = {};
            return {
                send: function(s) {
                    let p = [];
                    if ((0,
                    i.forEachEnvelopeItem)(s, (t, n) => {
                        let r = (0,
                        i.envelopeItemTypeToDataCategory)(n);
                        if ((0,
                        u.isRateLimited)(c, r)) {
                            let i = d(t, n);
                            e.recordDroppedEvent("ratelimit_backoff", r, i)
                        } else
                            p.push(t)
                    }
                    ),
                    0 === p.length)
                        return (0,
                        l.resolvedSyncPromise)({});
                    let f = (0,
                    i.createEnvelope)(s[0], p)
                      , h = t => {
                        (0,
                        i.forEachEnvelopeItem)(f, (n, r) => {
                            let o = d(n, r);
                            e.recordDroppedEvent(t, (0,
                            i.envelopeItemTypeToDataCategory)(r), o)
                        }
                        )
                    }
                    ;
                    return n.add( () => t({
                        body: (0,
                        i.serializeEnvelope)(f)
                    }).then(e => (void 0 !== e.statusCode && (e.statusCode < 200 || e.statusCode >= 300) && r.DEBUG_BUILD && a.logger.warn(`Sentry responded with status code ${e.statusCode} to sent event.`),
                    c = (0,
                    u.updateRateLimits)(c, e),
                    e), e => {
                        throw h("network_error"),
                        e
                    }
                    )).then(e => e, e => {
                        if (e instanceof o.SentryError)
                            return r.DEBUG_BUILD && a.logger.error("Skipped sending event because buffer is full."),
                            h("queue_overflow"),
                            (0,
                            l.resolvedSyncPromise)({});
                        throw e
                    }
                    )
                },
                flush: e => n.drain(e)
            }
        }
        function d(e, t) {
            if ("event" === t || "transaction" === t)
                return Array.isArray(e) ? e[1] : void 0
        }
    },
    41327: function(e, t, n) {
        "use strict";
        n.d(t, {
            makeMultiplexedTransport: function() {
                return s
            }
        });
        var r = n("87996")
          , i = n("2666")
          , o = n("99562");
        function a(e, t) {
            let n;
            return (0,
            o.forEachEnvelopeItem)(e, (e, r) => (t.includes(r) && (n = Array.isArray(e) ? e[1] : void 0),
            !!n)),
            n
        }
        function s(e, t) {
            return n => {
                let s = e(n)
                  , u = new Map;
                function l(t, o) {
                    let s = o ? `${t}:${o}` : t
                      , l = u.get(s);
                    if (!l) {
                        let p = (0,
                        i.dsnFromString)(t);
                        if (!p)
                            return;
                        let f = (0,
                        r.getEnvelopeEndpointWithUrlEncodedAuth)(p, n.tunnel);
                        var c, d;
                        l = o ? (c = e,
                        d = o,
                        e => {
                            let t = c(e);
                            return {
                                ...t,
                                send: async e => {
                                    let n = a(e, ["event", "transaction", "profile", "replay_event"]);
                                    return n && (n.release = d),
                                    t.send(e)
                                }
                            }
                        }
                        )({
                            ...n,
                            url: f
                        }) : e({
                            ...n,
                            url: f
                        }),
                        u.set(s, l)
                    }
                    return [t, l]
                }
                return {
                    send: async function e(e) {
                        let n = t({
                            envelope: e,
                            getEvent: function(t) {
                                return a(e, t && t.length ? t : ["event"])
                            }
                        }).map(e => "string" == typeof e ? l(e, void 0) : l(e.dsn, e.release)).filter(e => !!e)
                          , r = n.length ? n : [["", s]];
                        return (await Promise.all(r.map(t => {
                            let[n,r] = t;
                            var i, a;
                            return r.send((i = e,
                            a = n,
                            (0,
                            o.createEnvelope)(a ? {
                                ...i[0],
                                dsn: a
                            } : i[0], i[1])))
                        }
                        )))[0]
                    },
                    flush: async function e(e) {
                        let t = [...u.values(), s];
                        return (await Promise.all(t.map(t => t.flush(e)))).every(e => e)
                    }
                }
            }
        }
    },
    78444: function(e, t, n) {
        "use strict";
        n.d(t, {
            makeOfflineTransport: function() {
                return s
            }
        });
        var r = n("36812")
          , i = n("99562")
          , o = n("54683")
          , a = n("20547");
        function s(e) {
            function t() {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
                    t[n] = arguments[n];
                r.DEBUG_BUILD && o.logger.info("[Offline]:", ...t)
            }
            return n => {
                let r = e(n);
                if (!n.createStore)
                    throw Error("No `createStore` function was provided");
                let o = n.createStore(n), s = 5e3, u;
                function l(e) {
                    u && clearTimeout(u),
                    "number" != typeof (u = setTimeout(async () => {
                        u = void 0;
                        let e = await o.shift();
                        e && (t("Attempting to send previously queued event"),
                        e[0].sent_at = new Date().toISOString(),
                        d(e, !0).catch(e => {
                            t("Failed to retry sending", e)
                        }
                        ))
                    }
                    , e)) && u.unref && u.unref()
                }
                function c() {
                    !u && (l(s),
                    s = Math.min(2 * s, 36e5))
                }
                async function d(e) {
                    let u = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    if (!u && (0,
                    i.envelopeContainsItemType)(e, ["replay_event", "replay_recording"]))
                        return await o.push(e),
                        l(100),
                        {};
                    try {
                        let t = await r.send(e)
                          , n = 100;
                        if (t) {
                            if (t.headers && t.headers["retry-after"])
                                n = (0,
                                a.parseRetryAfterHeader)(t.headers["retry-after"]);
                            else if (t.headers && t.headers["x-sentry-rate-limits"])
                                n = 6e4;
                            else if ((t.statusCode || 0) >= 400)
                                return t
                        }
                        return l(n),
                        s = 5e3,
                        t
                    } catch (r) {
                        var d, p, f;
                        if (await (d = e,
                        p = r,
                        f = s,
                        !(0,
                        i.envelopeContainsItemType)(d, ["client_report"]) && (!n.shouldStore || n.shouldStore(d, p, f))))
                            return u ? await o.unshift(e) : await o.push(e),
                            c(),
                            t("Error sending. Event queued.", r),
                            {};
                        throw r
                    }
                }
                return n.flushAtStartup && c(),
                {
                    send: d,
                    flush: e => (void 0 === e && (s = 5e3,
                    l(100)),
                    r.flush(e))
                }
            }
        }
    },
    72511: function(e, t, n) {
        "use strict";
        n.d(t, {
            applyAggregateErrorsToEvent: function() {
                return o
            }
        });
        var r = n("27364")
          , i = n("2030");
        function o(e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 250
              , o = arguments.length > 3 ? arguments[3] : void 0
              , u = arguments.length > 4 ? arguments[4] : void 0
              , l = arguments.length > 5 ? arguments[5] : void 0
              , c = arguments.length > 6 ? arguments[6] : void 0;
            if (!l.exception || !l.exception.values || !c || !(0,
            r.isInstanceOf)(c.originalException, Error))
                return;
            let d = l.exception.values.length > 0 ? l.exception.values[l.exception.values.length - 1] : void 0;
            d && (l.exception.values = function(e, t) {
                return e.map(e => (e.value && (e.value = (0,
                i.truncate)(e.value, t)),
                e))
            }(function e(t, n, i, o, u, l, c, d) {
                if (l.length >= i + 1)
                    return l;
                let p = [...l];
                if ((0,
                r.isInstanceOf)(o[u], Error)) {
                    a(c, d);
                    let r = t(n, o[u])
                      , l = p.length;
                    s(r, u, l, d),
                    p = e(t, n, i, o[u], u, [r, ...p], r, l)
                }
                return Array.isArray(o.errors) && o.errors.forEach( (o, l) => {
                    if ((0,
                    r.isInstanceOf)(o, Error)) {
                        a(c, d);
                        let r = t(n, o)
                          , f = p.length;
                        s(r, `errors[${l}]`, f, d),
                        p = e(t, n, i, o, u, [r, ...p], r, f)
                    }
                }
                ),
                p
            }(e, t, u, c.originalException, o, l.exception.values, d, 0), n))
        }
        function a(e, t) {
            e.mechanism = e.mechanism || {
                type: "generic",
                handled: !0
            },
            e.mechanism = {
                ...e.mechanism,
                ..."AggregateError" === e.type && {
                    is_exception_group: !0
                },
                exception_id: t
            }
        }
        function s(e, t, n, r) {
            e.mechanism = e.mechanism || {
                type: "generic",
                handled: !0
            },
            e.mechanism = {
                ...e.mechanism,
                type: "chained",
                source: t,
                exception_id: n,
                parent_id: r
            }
        }
    },
    2129: function(e, t, n) {
        "use strict";
        n.d(t, {
            SENTRY_BAGGAGE_KEY_PREFIX: function() {
                return a
            },
            baggageHeaderToDynamicSamplingContext: function() {
                return u
            },
            dynamicSamplingContextToSentryBaggageHeader: function() {
                return l
            }
        });
        var r = n("30978")
          , i = n("27364")
          , o = n("54683");
        let a = "sentry-"
          , s = /^sentry-/;
        function u(e) {
            let t = function(e) {
                if (e && ((0,
                i.isString)(e) || Array.isArray(e)))
                    return Array.isArray(e) ? e.reduce( (e, t) => (Object.entries(c(t)).forEach(t => {
                        let[n,r] = t;
                        e[n] = r
                    }
                    ),
                    e), {}) : c(e)
            }(e);
            if (!t)
                return;
            let n = Object.entries(t).reduce( (e, t) => {
                let[n,r] = t;
                return n.match(s) && (e[n.slice(a.length)] = r),
                e
            }
            , {});
            return Object.keys(n).length > 0 ? n : void 0
        }
        function l(e) {
            if (!!e)
                return function(e) {
                    if (0 !== Object.keys(e).length)
                        return Object.entries(e).reduce( (e, t, n) => {
                            let[i,a] = t
                              , s = `${encodeURIComponent(i)}=${encodeURIComponent(a)}`
                              , u = 0 === n ? s : `${e},${s}`;
                            return u.length > 8192 ? (r.DEBUG_BUILD && o.logger.warn(`Not adding key: ${i} with val: ${a} to baggage header due to exceeding baggage size limits.`),
                            e) : u
                        }
                        , "")
                }(Object.entries(e).reduce( (e, t) => {
                    let[n,r] = t;
                    return r && (e[`${a}${n}`] = r),
                    e
                }
                , {}))
        }
        function c(e) {
            return e.split(",").map(e => e.split("=").map(e => decodeURIComponent(e.trim()))).reduce( (e, t) => {
                let[n,r] = t;
                return n && r && (e[n] = r),
                e
            }
            , {})
        }
    },
    89170: function(e, t, n) {
        "use strict";
        function r(e) {
            if (void 0 !== e) {
                if (e >= 400 && e < 500)
                    return "warning";
                if (e >= 500)
                    return "error";
                else
                    return
            }
        }
        n.d(t, {
            getBreadcrumbLogLevelFromHttpStatusCode: function() {
                return r
            }
        })
    },
    87586: function(e, t, n) {
        "use strict";
        n.d(t, {
            getComponentName: function() {
                return u
            },
            getDomElement: function() {
                return s
            },
            getLocationHref: function() {
                return a
            },
            htmlTreeAsString: function() {
                return o
            }
        });
        var r = n("27364");
        let i = n("61191").GLOBAL_OBJ;
        function o(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            if (!e)
                return "<unknown>";
            try {
                let n = e, o = [], a = 0, s = 0, u = 3, l, c = Array.isArray(t) ? t : t.keyAttrs, d = !Array.isArray(t) && t.maxStringLength || 80;
                for (; n && a++ < 5 && (l = function(e, t) {
                    let n = [];
                    if (!e || !e.tagName)
                        return "";
                    if (i.HTMLElement && e instanceof HTMLElement && e.dataset) {
                        if (e.dataset.sentryComponent)
                            return e.dataset.sentryComponent;
                        if (e.dataset.sentryElement)
                            return e.dataset.sentryElement
                    }
                    n.push(e.tagName.toLowerCase());
                    let o = t && t.length ? t.filter(t => e.getAttribute(t)).map(t => [t, e.getAttribute(t)]) : null;
                    if (o && o.length)
                        o.forEach(e => {
                            n.push(`[${e[0]}="${e[1]}"]`)
                        }
                        );
                    else {
                        e.id && n.push(`#${e.id}`);
                        let t = e.className;
                        if (t && (0,
                        r.isString)(t))
                            for (let e of t.split(/\s+/))
                                n.push(`.${e}`)
                    }
                    for (let t of ["aria-label", "type", "name", "title", "alt"]) {
                        let r = e.getAttribute(t);
                        r && n.push(`[${t}="${r}"]`)
                    }
                    return n.join("")
                }(n, c),
                "html" !== l && (!(a > 1) || !(s + o.length * u + l.length >= d))); ) {
                    ;o.push(l),
                    s += l.length,
                    n = n.parentNode
                }
                return o.reverse().join(" > ")
            } catch (e) {
                return "<unknown>"
            }
        }
        function a() {
            try {
                return i.document.location.href
            } catch (e) {
                return ""
            }
        }
        function s(e) {
            return i.document && i.document.querySelector ? i.document.querySelector(e) : null
        }
        function u(e) {
            if (!i.HTMLElement)
                return null;
            let t = e;
            for (let e = 0; e < 5 && t; e++) {
                ;if (t instanceof HTMLElement) {
                    if (t.dataset.sentryComponent)
                        return t.dataset.sentryComponent;
                    if (t.dataset.sentryElement)
                        return t.dataset.sentryElement
                }
                t = t.parentNode
            }
            return null
        }
    },
    90434: function(e, t, n) {
        "use strict";
        function r(e, t) {
            return null != e ? e : t()
        }
        n.d(t, {
            _nullishCoalesce: function() {
                return r
            }
        })
    },
    9984: function(e, t, n) {
        "use strict";
        function r(e) {
            let t, n = e[0], r = 1;
            for (; r < e.length; ) {
                let i = e[r]
                  , o = e[r + 1];
                if (r += 2,
                ("optionalAccess" === i || "optionalCall" === i) && null == n)
                    return;
                "access" === i || "optionalAccess" === i ? (t = n,
                n = o(n)) : ("call" === i || "optionalCall" === i) && (n = o(function() {
                    for (var e = arguments.length, r = Array(e), i = 0; i < e; i++)
                        r[i] = arguments[i];
                    return n.call(t, ...r)
                }),
                t = void 0)
            }
            return n
        }
        n.d(t, {
            _optionalChain: function() {
                return r
            }
        })
    },
    27746: function(e, t, n) {
        "use strict";
        n.d(t, {
            createClientReportEnvelope: function() {
                return o
            }
        });
        var r = n("99562")
          , i = n("75047");
        function o(e, t, n) {
            let o = [{
                type: "client_report"
            }, {
                timestamp: n || (0,
                i.dateTimestampInSeconds)(),
                discarded_events: e
            }];
            return (0,
            r.createEnvelope)(t ? {
                dsn: t
            } : {}, [o])
        }
    },
    30978: function(e, t, n) {
        "use strict";
        n.d(t, {
            DEBUG_BUILD: function() {
                return r
            }
        });
        let r = "undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__
    },
    52366: function(e, t, n) {
        "use strict";
        n.d(t, {
            getDebugImagesForResources: function() {
                return u
            },
            getFilenameToDebugIdMap: function() {
                return s
            }
        });
        var r = n("61191");
        let i, o, a;
        function s(e) {
            let t = r.GLOBAL_OBJ._sentryDebugIds;
            if (!t)
                return {};
            let n = Object.keys(t);
            return a && n.length === o ? a : (o = n.length,
            a = n.reduce( (n, r) => {
                !i && (i = {});
                let o = i[r];
                if (o)
                    n[o[0]] = o[1];
                else {
                    let o = e(r);
                    for (let e = o.length - 1; e >= 0; e--) {
                        let a = o[e]
                          , s = a && a.filename
                          , u = t[r];
                        if (s && u) {
                            n[s] = u,
                            i[r] = [s, u];
                            break
                        }
                    }
                }
                return n
            }
            , {}))
        }
        function u(e, t) {
            let n = s(e);
            if (!n)
                return [];
            let r = [];
            for (let e of t)
                e && n[e] && r.push({
                    type: "sourcemap",
                    code_file: e,
                    debug_id: n[e]
                });
            return r
        }
    },
    2666: function(e, t, n) {
        "use strict";
        n.d(t, {
            dsnFromString: function() {
                return s
            },
            dsnToString: function() {
                return a
            },
            makeDsn: function() {
                return l
            }
        });
        var r = n("30978")
          , i = n("54683");
        let o = /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+)?)?@)([\w.-]+)(?::(\d+))?\/(.+)/;
        function a(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
              , {host: n, path: r, pass: i, port: o, projectId: a, protocol: s, publicKey: u} = e;
            return `${s}://${u}${t && i ? `:${i}` : ""}@${n}${o ? `:${o}` : ""}/${r ? `${r}/` : r}${a}`
        }
        function s(e) {
            let t = o.exec(e);
            if (!t) {
                (0,
                i.consoleSandbox)( () => {
                    console.error(`Invalid Sentry Dsn: ${e}`)
                }
                );
                return
            }
            let[n,r,a="",s="",l="",c=""] = t.slice(1)
              , d = ""
              , p = c
              , f = p.split("/");
            if (f.length > 1 && (d = f.slice(0, -1).join("/"),
            p = f.pop()),
            p) {
                let e = p.match(/^\d+/);
                e && (p = e[0])
            }
            return u({
                host: s,
                pass: a,
                path: d,
                projectId: p,
                port: l,
                protocol: n,
                publicKey: r
            })
        }
        function u(e) {
            return {
                protocol: e.protocol,
                publicKey: e.publicKey || "",
                pass: e.pass || "",
                host: e.host,
                port: e.port || "",
                path: e.path || "",
                projectId: e.projectId
            }
        }
        function l(e) {
            let t = "string" == typeof e ? s(e) : u(e);
            if (t && function(e) {
                if (!r.DEBUG_BUILD)
                    return !0;
                let {port: t, projectId: n, protocol: o} = e;
                if (["protocol", "publicKey", "host", "projectId"].find(t => !e[t] && (i.logger.error(`Invalid Sentry Dsn: ${t} missing`),
                !0)))
                    return !1;
                if (!n.match(/^\d+$/))
                    return i.logger.error(`Invalid Sentry Dsn: Invalid projectId ${n}`),
                    !1;
                var a;
                return "http" === (a = o) || "https" === a ? !(t && isNaN(parseInt(t, 10))) || (i.logger.error(`Invalid Sentry Dsn: Invalid port ${t}`),
                !1) : (i.logger.error(`Invalid Sentry Dsn: Invalid protocol ${o}`),
                !1)
            }(t))
                return t
        }
    },
    76925: function(e, t, n) {
        "use strict";
        function r() {
            return "undefined" != typeof __SENTRY_BROWSER_BUNDLE__ && !!__SENTRY_BROWSER_BUNDLE__
        }
        function i() {
            return "npm"
        }
        n.d(t, {
            getSDKSource: function() {
                return i
            },
            isBrowserBundle: function() {
                return r
            }
        })
    },
    99562: function(e, t, n) {
        "use strict";
        n.d(t, {
            addItemToEnvelope: function() {
                return u
            },
            createAttachmentEnvelopeItem: function() {
                return g
            },
            createEnvelope: function() {
                return s
            },
            createEventEnvelopeHeaders: function() {
                return y
            },
            createSpanEnvelopeItem: function() {
                return h
            },
            envelopeContainsItemType: function() {
                return c
            },
            envelopeItemTypeToDataCategory: function() {
                return _
            },
            forEachEnvelopeItem: function() {
                return l
            },
            getSdkMetadataForEnvelopeHeader: function() {
                return v
            },
            parseEnvelope: function() {
                return f
            },
            serializeEnvelope: function() {
                return p
            }
        });
        var r = n("2666")
          , i = n("7149")
          , o = n("48497")
          , a = n("61191");
        function s(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
            return [e, t]
        }
        function u(e, t) {
            let[n,r] = e;
            return [n, [...r, t]]
        }
        function l(e, t) {
            for (let n of e[1]) {
                let e = n[0].type;
                if (t(n, e))
                    return !0
            }
            return !1
        }
        function c(e, t) {
            return l(e, (e, n) => t.includes(n))
        }
        function d(e) {
            return a.GLOBAL_OBJ.__SENTRY__ && a.GLOBAL_OBJ.__SENTRY__.encodePolyfill ? a.GLOBAL_OBJ.__SENTRY__.encodePolyfill(e) : new TextEncoder().encode(e)
        }
        function p(e) {
            let[t,n] = e
              , r = JSON.stringify(t);
            function o(e) {
                "string" == typeof r ? r = "string" == typeof e ? r + e : [d(r), e] : r.push("string" == typeof e ? d(e) : e)
            }
            for (let e of n) {
                let[t,n] = e;
                if (o(`
${JSON.stringify(t)}
`),
                "string" == typeof n || n instanceof Uint8Array)
                    o(n);
                else {
                    let e;
                    try {
                        e = JSON.stringify(n)
                    } catch (t) {
                        e = JSON.stringify((0,
                        i.normalize)(n))
                    }
                    o(e)
                }
            }
            return "string" == typeof r ? r : function(e) {
                let t = new Uint8Array(e.reduce( (e, t) => e + t.length, 0))
                  , n = 0;
                for (let r of e)
                    t.set(r, n),
                    n += r.length;
                return t
            }(r)
        }
        function f(e) {
            let t = "string" == typeof e ? d(e) : e;
            function n(e) {
                let n = t.subarray(0, e);
                return t = t.subarray(e + 1),
                n
            }
            function r() {
                let e = t.indexOf(10);
                var r;
                return e < 0 && (e = t.length),
                JSON.parse((r = n(e),
                a.GLOBAL_OBJ.__SENTRY__ && a.GLOBAL_OBJ.__SENTRY__.decodePolyfill ? a.GLOBAL_OBJ.__SENTRY__.decodePolyfill(r) : new TextDecoder().decode(r)))
            }
            let i = r()
              , o = [];
            for (; t.length; ) {
                let e = r()
                  , t = "number" == typeof e.length ? e.length : void 0;
                o.push([e, t ? n(t) : r()])
            }
            return [i, o]
        }
        function h(e) {
            return [{
                type: "span"
            }, e]
        }
        function g(e) {
            let t = "string" == typeof e.data ? d(e.data) : e.data;
            return [(0,
            o.dropUndefinedKeys)({
                type: "attachment",
                length: t.length,
                filename: e.filename,
                content_type: e.contentType,
                attachment_type: e.attachmentType
            }), t]
        }
        let m = {
            session: "session",
            sessions: "session",
            attachment: "attachment",
            transaction: "transaction",
            event: "error",
            client_report: "internal",
            user_report: "default",
            profile: "profile",
            profile_chunk: "profile",
            replay_event: "replay",
            replay_recording: "replay",
            check_in: "monitor",
            feedback: "feedback",
            span: "span",
            statsd: "metric_bucket",
            raw_security: "security"
        };
        function _(e) {
            return m[e]
        }
        function v(e) {
            if (!e || !e.sdk)
                return;
            let {name: t, version: n} = e.sdk;
            return {
                name: t,
                version: n
            }
        }
        function y(e, t, n, i) {
            let a = e.sdkProcessingMetadata && e.sdkProcessingMetadata.dynamicSamplingContext;
            return {
                event_id: e.event_id,
                sent_at: new Date().toISOString(),
                ...t && {
                    sdk: t
                },
                ...!!n && i && {
                    dsn: (0,
                    r.dsnToString)(i)
                },
                ...a && {
                    trace: (0,
                    o.dropUndefinedKeys)({
                        ...a
                    })
                }
            }
        }
    },
    25323: function(e, t, n) {
        "use strict";
        n.d(t, {
            SentryError: function() {
                return r
            }
        });
        class r extends Error {
            constructor(e, t="warn") {
                super(e),
                this.message = e,
                this.name = new.target.prototype.constructor.name,
                Object.setPrototypeOf(this, new.target.prototype),
                this.logLevel = t
            }
        }
    },
    59492: function(e, t, n) {
        "use strict";
        n.d(t, {
            addConsoleInstrumentationHandler: function() {
                return s
            }
        });
        var r = n("54683")
          , i = n("48497")
          , o = n("61191")
          , a = n("30733");
        function s(e) {
            let t = "console";
            (0,
            a.addHandler)(t, e),
            (0,
            a.maybeInstrument)(t, u)
        }
        function u() {
            "console"in o.GLOBAL_OBJ && r.CONSOLE_LEVELS.forEach(function(e) {
                e in o.GLOBAL_OBJ.console && (0,
                i.fill)(o.GLOBAL_OBJ.console, e, function(t) {
                    return r.originalConsoleMethods[e] = t,
                    function() {
                        for (var t = arguments.length, n = Array(t), i = 0; i < t; i++)
                            n[i] = arguments[i];
                        (0,
                        a.triggerHandlers)("console", {
                            args: n,
                            level: e
                        });
                        let s = r.originalConsoleMethods[e];
                        s && s.apply(o.GLOBAL_OBJ.console, n)
                    }
                })
            })
        }
    },
    49466: function(e, t, n) {
        "use strict";
        n.d(t, {
            addFetchEndInstrumentationHandler: function() {
                return c
            },
            addFetchInstrumentationHandler: function() {
                return l
            }
        });
        var r = n("27364")
          , i = n("48497")
          , o = n("5229")
          , a = n("75047")
          , s = n("61191")
          , u = n("30733");
        function l(e, t) {
            let n = "fetch";
            (0,
            u.addHandler)(n, e),
            (0,
            u.maybeInstrument)(n, () => d(void 0, t))
        }
        function c(e) {
            let t = "fetch-body-resolved";
            (0,
            u.addHandler)(t, e),
            (0,
            u.maybeInstrument)(t, () => d(f))
        }
        function d(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            (!t || (0,
            o.supportsNativeFetch)()) && (0,
            i.fill)(s.GLOBAL_OBJ, "fetch", function(t) {
                return function() {
                    for (var n = arguments.length, o = Array(n), l = 0; l < n; l++)
                        o[l] = arguments[l];
                    let c = Error()
                      , {method: d, url: p} = function(e) {
                        if (0 === e.length)
                            return {
                                method: "GET",
                                url: ""
                            };
                        if (2 === e.length) {
                            let[t,n] = e;
                            return {
                                url: g(t),
                                method: h(n, "method") ? String(n.method).toUpperCase() : "GET"
                            }
                        }
                        let t = e[0];
                        return {
                            url: g(t),
                            method: h(t, "method") ? String(t.method).toUpperCase() : "GET"
                        }
                    }(o)
                      , f = {
                        args: o,
                        fetchData: {
                            method: d,
                            url: p
                        },
                        startTimestamp: 1e3 * (0,
                        a.timestampInSeconds)(),
                        virtualError: c
                    };
                    return !e && (0,
                    u.triggerHandlers)("fetch", {
                        ...f
                    }),
                    t.apply(s.GLOBAL_OBJ, o).then(async t => (e ? e(t) : (0,
                    u.triggerHandlers)("fetch", {
                        ...f,
                        endTimestamp: 1e3 * (0,
                        a.timestampInSeconds)(),
                        response: t
                    }),
                    t), e => {
                        throw (0,
                        u.triggerHandlers)("fetch", {
                            ...f,
                            endTimestamp: 1e3 * (0,
                            a.timestampInSeconds)(),
                            error: e
                        }),
                        (0,
                        r.isError)(e) && void 0 === e.stack && (e.stack = c.stack,
                        (0,
                        i.addNonEnumerableProperty)(e, "framesToPop", 1)),
                        e
                    }
                    )
                }
            })
        }
        async function p(e, t) {
            if (e && e.body) {
                let n = e.body
                  , r = n.getReader()
                  , i = setTimeout( () => {
                    n.cancel().then(null, () => {}
                    )
                }
                , 9e4)
                  , o = !0;
                for (; o; ) {
                    let e;
                    try {
                        e = setTimeout( () => {
                            n.cancel().then(null, () => {}
                            )
                        }
                        , 5e3);
                        let {done: i} = await r.read();
                        clearTimeout(e),
                        i && (t(),
                        o = !1)
                    } catch (e) {
                        o = !1
                    } finally {
                        clearTimeout(e)
                    }
                }
                clearTimeout(i),
                r.releaseLock(),
                n.cancel().then(null, () => {}
                )
            }
        }
        function f(e) {
            let t;
            try {
                t = e.clone()
            } catch (e) {
                return
            }
            p(t, () => {
                (0,
                u.triggerHandlers)("fetch-body-resolved", {
                    endTimestamp: 1e3 * (0,
                    a.timestampInSeconds)(),
                    response: e
                })
            }
            )
        }
        function h(e, t) {
            return !!e && "object" == typeof e && !!e[t]
        }
        function g(e) {
            return "string" == typeof e ? e : e ? h(e, "url") ? e.url : e.toString ? e.toString() : "" : ""
        }
    },
    38663: function(e, t, n) {
        "use strict";
        n.d(t, {
            addGlobalErrorInstrumentationHandler: function() {
                return a
            }
        });
        var r = n("61191")
          , i = n("30733");
        let o = null;
        function a(e) {
            let t = "error";
            (0,
            i.addHandler)(t, e),
            (0,
            i.maybeInstrument)(t, s)
        }
        function s() {
            o = r.GLOBAL_OBJ.onerror,
            r.GLOBAL_OBJ.onerror = function(e, t, n, r, a) {
                return (0,
                i.triggerHandlers)("error", {
                    column: r,
                    error: a,
                    line: n,
                    msg: e,
                    url: t
                }),
                !!o && o.apply(this, arguments)
            }
            ,
            r.GLOBAL_OBJ.onerror.__SENTRY_INSTRUMENTED__ = !0
        }
    },
    96010: function(e, t, n) {
        "use strict";
        n.d(t, {
            addGlobalUnhandledRejectionInstrumentationHandler: function() {
                return a
            }
        });
        var r = n("61191")
          , i = n("30733");
        let o = null;
        function a(e) {
            let t = "unhandledrejection";
            (0,
            i.addHandler)(t, e),
            (0,
            i.maybeInstrument)(t, s)
        }
        function s() {
            o = r.GLOBAL_OBJ.onunhandledrejection,
            r.GLOBAL_OBJ.onunhandledrejection = function(e) {
                return (0,
                i.triggerHandlers)("unhandledrejection", e),
                !o || o.apply(this, arguments)
            }
            ,
            r.GLOBAL_OBJ.onunhandledrejection.__SENTRY_INSTRUMENTED__ = !0
        }
    },
    30733: function(e, t, n) {
        "use strict";
        n.d(t, {
            addHandler: function() {
                return u
            },
            maybeInstrument: function() {
                return l
            },
            triggerHandlers: function() {
                return c
            }
        });
        var r = n("30978")
          , i = n("54683")
          , o = n("32237");
        let a = {}
          , s = {};
        function u(e, t) {
            a[e] = a[e] || [],
            a[e].push(t)
        }
        function l(e, t) {
            if (!s[e]) {
                s[e] = !0;
                try {
                    t()
                } catch (t) {
                    r.DEBUG_BUILD && i.logger.error(`Error while instrumenting ${e}`, t)
                }
            }
        }
        function c(e, t) {
            let n = e && a[e];
            if (n)
                for (let a of n)
                    try {
                        a(t)
                    } catch (t) {
                        r.DEBUG_BUILD && i.logger.error(`Error while triggering instrumentation handler.
Type: ${e}
Name: ${(0,
                        o.getFunctionName)(a)}
Error:`, t)
                    }
        }
    },
    27364: function(e, t, n) {
        "use strict";
        n.d(t, {
            isDOMError: function() {
                return s
            },
            isDOMException: function() {
                return u
            },
            isElement: function() {
                return h
            },
            isError: function() {
                return i
            },
            isErrorEvent: function() {
                return a
            },
            isEvent: function() {
                return f
            },
            isInstanceOf: function() {
                return v
            },
            isParameterizedString: function() {
                return c
            },
            isPlainObject: function() {
                return p
            },
            isPrimitive: function() {
                return d
            },
            isRegExp: function() {
                return g
            },
            isString: function() {
                return l
            },
            isSyntheticEvent: function() {
                return _
            },
            isThenable: function() {
                return m
            },
            isVueViewModel: function() {
                return y
            }
        });
        let r = Object.prototype.toString;
        function i(e) {
            switch (r.call(e)) {
            case "[object Error]":
            case "[object Exception]":
            case "[object DOMException]":
            case "[object WebAssembly.Exception]":
                return !0;
            default:
                return v(e, Error)
            }
        }
        function o(e, t) {
            return r.call(e) === `[object ${t}]`
        }
        function a(e) {
            return o(e, "ErrorEvent")
        }
        function s(e) {
            return o(e, "DOMError")
        }
        function u(e) {
            return o(e, "DOMException")
        }
        function l(e) {
            return o(e, "String")
        }
        function c(e) {
            return "object" == typeof e && null !== e && "__sentry_template_string__"in e && "__sentry_template_values__"in e
        }
        function d(e) {
            return null === e || c(e) || "object" != typeof e && "function" != typeof e
        }
        function p(e) {
            return o(e, "Object")
        }
        function f(e) {
            return "undefined" != typeof Event && v(e, Event)
        }
        function h(e) {
            return "undefined" != typeof Element && v(e, Element)
        }
        function g(e) {
            return o(e, "RegExp")
        }
        function m(e) {
            return !!(e && e.then && "function" == typeof e.then)
        }
        function _(e) {
            return p(e) && "nativeEvent"in e && "preventDefault"in e && "stopPropagation"in e
        }
        function v(e, t) {
            try {
                return e instanceof t
            } catch (e) {
                return !1
            }
        }
        function y(e) {
            return !!("object" == typeof e && null !== e && (e.__isVue || e._isVue))
        }
    },
    60013: function(e, t, n) {
        "use strict";
        n.d(t, {
            isBrowser: function() {
                return o
            }
        });
        var r = n("13817")
          , i = n("61191");
        function o() {
            return "undefined" != typeof window && (!(0,
            r.isNodeEnv)() || function() {
                let e = i.GLOBAL_OBJ.process;
                return !!e && "renderer" === e.type
            }())
        }
    },
    54683: function(e, t, n) {
        "use strict";
        n.d(t, {
            CONSOLE_LEVELS: function() {
                return o
            },
            consoleSandbox: function() {
                return s
            },
            logger: function() {
                return u
            },
            originalConsoleMethods: function() {
                return a
            }
        });
        var r = n("30978")
          , i = n("61191");
        let o = ["debug", "info", "warn", "error", "log", "assert", "trace"]
          , a = {};
        function s(e) {
            if (!("console"in i.GLOBAL_OBJ))
                return e();
            let t = i.GLOBAL_OBJ.console
              , n = {}
              , r = Object.keys(a);
            r.forEach(e => {
                let r = a[e];
                n[e] = t[e],
                t[e] = r
            }
            );
            try {
                return e()
            } finally {
                r.forEach(e => {
                    t[e] = n[e]
                }
                )
            }
        }
        let u = (0,
        i.getGlobalSingleton)("logger", function() {
            let e = !1
              , t = {
                enable: () => {
                    e = !0
                }
                ,
                disable: () => {
                    e = !1
                }
                ,
                isEnabled: () => e
            };
            return r.DEBUG_BUILD ? o.forEach(n => {
                t[n] = function() {
                    for (var t = arguments.length, r = Array(t), o = 0; o < t; o++)
                        r[o] = arguments[o];
                    e && s( () => {
                        i.GLOBAL_OBJ.console[n](`Sentry Logger [${n}]:`, ...r)
                    }
                    )
                }
            }
            ) : o.forEach(e => {
                t[e] = () => void 0
            }
            ),
            t
        })
    },
    36619: function(e, t, n) {
        "use strict";
        function r() {
            let e = "function" == typeof WeakSet
              , t = e ? new WeakSet : [];
            return [function(n) {
                if (e)
                    return !!t.has(n) || (t.add(n),
                    !1);
                for (let e = 0; e < t.length; e++)
                    if (t[e] === n)
                        return !0;
                return t.push(n),
                !1
            }
            , function(n) {
                if (e)
                    t.delete(n);
                else
                    for (let e = 0; e < t.length; e++)
                        if (t[e] === n) {
                            t.splice(e, 1);
                            break
                        }
            }
            ]
        }
        n.d(t, {
            memoBuilder: function() {
                return r
            }
        })
    },
    24317: function(e, t, n) {
        "use strict";
        n.d(t, {
            addContextToFrame: function() {
                return d
            },
            addExceptionMechanism: function() {
                return c
            },
            addExceptionTypeValue: function() {
                return l
            },
            checkOrSetAlreadyCaught: function() {
                return p
            },
            getEventDescription: function() {
                return u
            },
            uuid4: function() {
                return a
            }
        });
        var r = n("48497")
          , i = n("2030")
          , o = n("61191");
        function a() {
            let e = o.GLOBAL_OBJ
              , t = e.crypto || e.msCrypto
              , n = () => 16 * Math.random();
            try {
                if (t && t.randomUUID)
                    return t.randomUUID().replace(/-/g, "");
                t && t.getRandomValues && (n = () => {
                    let e = new Uint8Array(1);
                    return t.getRandomValues(e),
                    e[0]
                }
                )
            } catch (e) {}
            return "10000000100040008000100000000000".replace(/[018]/g, e => (e ^ (15 & n()) >> e / 4).toString(16))
        }
        function s(e) {
            return e.exception && e.exception.values ? e.exception.values[0] : void 0
        }
        function u(e) {
            let {message: t, event_id: n} = e;
            if (t)
                return t;
            let r = s(e);
            if (r)
                return r.type && r.value ? `${r.type}: ${r.value}` : r.type || r.value || n || "<unknown>";
            return n || "<unknown>"
        }
        function l(e, t, n) {
            let r = e.exception = e.exception || {}
              , i = r.values = r.values || []
              , o = i[0] = i[0] || {};
            !o.value && (o.value = t || ""),
            !o.type && (o.type = n || "Error")
        }
        function c(e, t) {
            let n = s(e);
            if (!n)
                return;
            let r = n.mechanism;
            if (n.mechanism = {
                type: "generic",
                handled: !0,
                ...r,
                ...t
            },
            t && "data"in t) {
                let e = {
                    ...r && r.data,
                    ...t.data
                };
                n.mechanism.data = e
            }
        }
        function d(e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 5;
            if (void 0 === t.lineno)
                return;
            let r = e.length
              , o = Math.max(Math.min(r - 1, t.lineno - 1), 0);
            t.pre_context = e.slice(Math.max(0, o - n), o).map(e => (0,
            i.snipLine)(e, 0));
            let a = Math.min(r - 1, o);
            t.context_line = (0,
            i.snipLine)(e[a], t.colno || 0),
            t.post_context = e.slice(Math.min(o + 1, r), o + 1 + n).map(e => (0,
            i.snipLine)(e, 0))
        }
        function p(e) {
            if (function(e) {
                try {
                    return e.__sentry_captured__
                } catch (e) {}
            }(e))
                return !0;
            try {
                (0,
                r.addNonEnumerableProperty)(e, "__sentry_captured__", !0)
            } catch (e) {}
            return !1
        }
    },
    13817: function(e, t, n) {
        "use strict";
        n.d(t, {
            isNodeEnv: function() {
                return i
            }
        });
        var r = n("76925");
        function i() {
            return !(0,
            r.isBrowserBundle)() && "[object process]" === Object.prototype.toString.call("undefined" != typeof process ? process : 0)
        }
    },
    7149: function(e, t, n) {
        "use strict";
        n.d(t, {
            normalize: function() {
                return s
            },
            normalizeToSize: function() {
                return function e(t) {
                    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3
                      , r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 102400
                      , i = s(t, n);
                    return function(e) {
                        return ~-encodeURI(JSON.stringify(e)).split(/%..|./).length
                    }(i) > r ? e(t, n - 1, r) : i
                }
            }
        });
        var r = n("27364")
          , i = n("36619")
          , o = n("48497")
          , a = n("32237");
        function s(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 100
              , n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1 / 0;
            try {
                return function e(t, n) {
                    let s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1 / 0
                      , u = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1 / 0
                      , l = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : (0,
                    i.memoBuilder)()
                      , [c,d] = l;
                    if (null == n || ["boolean", "string"].includes(typeof n) || "number" == typeof n && Number.isFinite(n))
                        return n;
                    let p = function(e, t) {
                        try {
                            if ("domain" === e && t && "object" == typeof t && t._events)
                                return "[Domain]";
                            if ("domainEmitter" === e)
                                return "[DomainEmitter]";
                            if ("undefined" != typeof global && t === global)
                                return "[Global]";
                            if ("undefined" != typeof window && t === window)
                                return "[Window]";
                            if ("undefined" != typeof document && t === document)
                                return "[Document]";
                            if ((0,
                            r.isVueViewModel)(t))
                                return "[VueViewModel]";
                            if ((0,
                            r.isSyntheticEvent)(t))
                                return "[SyntheticEvent]";
                            if ("number" == typeof t && !Number.isFinite(t))
                                return `[${t}]`;
                            if ("function" == typeof t)
                                return `[Function: ${(0,
                                a.getFunctionName)(t)}]`;
                            if ("symbol" == typeof t)
                                return `[${String(t)}]`;
                            if ("bigint" == typeof t)
                                return `[BigInt: ${String(t)}]`;
                            let n = function(e) {
                                let t = Object.getPrototypeOf(e);
                                return t ? t.constructor.name : "null prototype"
                            }(t);
                            if (/^HTML(\w*)Element$/.test(n))
                                return `[HTMLElement: ${n}]`;
                            return `[object ${n}]`
                        } catch (e) {
                            return `**non-serializable** (${e})`
                        }
                    }(t, n);
                    if (!p.startsWith("[object "))
                        return p;
                    if (n.__sentry_skip_normalization__)
                        return n;
                    let f = "number" == typeof n.__sentry_override_normalization_depth__ ? n.__sentry_override_normalization_depth__ : s;
                    if (0 === f)
                        return p.replace("object ", "");
                    if (c(n))
                        return "[Circular ~]";
                    if (n && "function" == typeof n.toJSON)
                        try {
                            let t = n.toJSON();
                            return e("", t, f - 1, u, l)
                        } catch (e) {}
                    let h = Array.isArray(n) ? [] : {}
                      , g = 0
                      , m = (0,
                    o.convertToPlainObject)(n);
                    for (let t in m) {
                        if (!Object.prototype.hasOwnProperty.call(m, t))
                            continue;
                        if (g >= u) {
                            h[t] = "[MaxProperties ~]";
                            break
                        }
                        let n = m[t];
                        h[t] = e(t, n, f - 1, u, l),
                        g++
                    }
                    return d(n),
                    h
                }("", e, t, n)
            } catch (e) {
                return {
                    ERROR: `**non-serializable** (${e})`
                }
            }
        }
    },
    48497: function(e, t, n) {
        "use strict";
        n.d(t, {
            addNonEnumerableProperty: function() {
                return l
            },
            convertToPlainObject: function() {
                return p
            },
            dropUndefinedKeys: function() {
                return m
            },
            extractExceptionKeysForMessage: function() {
                return g
            },
            fill: function() {
                return u
            },
            getOriginalFunction: function() {
                return d
            },
            markFunctionWrapped: function() {
                return c
            }
        });
        var r = n("87586")
          , i = n("30978")
          , o = n("27364")
          , a = n("54683")
          , s = n("2030");
        function u(e, t, n) {
            if (!(t in e))
                return;
            let r = e[t]
              , o = n(r);
            "function" == typeof o && c(o, r);
            try {
                e[t] = o
            } catch (n) {
                i.DEBUG_BUILD && a.logger.log(`Failed to replace method "${t}" in object`, e)
            }
        }
        function l(e, t, n) {
            try {
                Object.defineProperty(e, t, {
                    value: n,
                    writable: !0,
                    configurable: !0
                })
            } catch (n) {
                i.DEBUG_BUILD && a.logger.log(`Failed to add non-enumerable property "${t}" to object`, e)
            }
        }
        function c(e, t) {
            try {
                let n = t.prototype || {};
                e.prototype = t.prototype = n,
                l(e, "__sentry_original__", t)
            } catch (e) {}
        }
        function d(e) {
            return e.__sentry_original__
        }
        function p(e) {
            if ((0,
            o.isError)(e))
                return {
                    message: e.message,
                    name: e.name,
                    stack: e.stack,
                    ...h(e)
                };
            if (!(0,
            o.isEvent)(e))
                return e;
            {
                let t = {
                    type: e.type,
                    target: f(e.target),
                    currentTarget: f(e.currentTarget),
                    ...h(e)
                };
                return "undefined" != typeof CustomEvent && (0,
                o.isInstanceOf)(e, CustomEvent) && (t.detail = e.detail),
                t
            }
        }
        function f(e) {
            try {
                return (0,
                o.isElement)(e) ? (0,
                r.htmlTreeAsString)(e) : Object.prototype.toString.call(e)
            } catch (e) {
                return "<unknown>"
            }
        }
        function h(e) {
            if ("object" != typeof e || null === e)
                return {};
            {
                let t = {};
                for (let n in e)
                    Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                return t
            }
        }
        function g(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 40
              , n = Object.keys(p(e));
            n.sort();
            let r = n[0];
            if (!r)
                return "[object has no keys]";
            if (r.length >= t)
                return (0,
                s.truncate)(r, t);
            for (let e = n.length; e > 0; e--) {
                let r = n.slice(0, e).join(", ");
                if (!(r.length > t)) {
                    if (e === n.length)
                        return r;
                    return (0,
                    s.truncate)(r, t)
                }
            }
            return ""
        }
        function m(e) {
            return function e(t, n) {
                if (function(e) {
                    if (!(0,
                    o.isPlainObject)(e))
                        return !1;
                    try {
                        let t = Object.getPrototypeOf(e).constructor.name;
                        return !t || "Object" === t
                    } catch (e) {
                        return !0
                    }
                }(t)) {
                    let r = n.get(t);
                    if (void 0 !== r)
                        return r;
                    let i = {};
                    for (let r of (n.set(t, i),
                    Object.getOwnPropertyNames(t)))
                        void 0 !== t[r] && (i[r] = e(t[r], n));
                    return i
                }
                if (Array.isArray(t)) {
                    let r = n.get(t);
                    if (void 0 !== r)
                        return r;
                    let i = [];
                    return n.set(t, i),
                    t.forEach(t => {
                        i.push(e(t, n))
                    }
                    ),
                    i
                }
                return t
            }(e, new Map)
        }
    },
    48054: function(e, t, n) {
        "use strict";
        n.d(t, {
            basename: function() {
                return s
            },
            relative: function() {
                return a
            }
        });
        let r = /^(\S+:\\|\/?)([\s\S]*?)((?:\.{1,2}|[^/\\]+?|)(\.[^./\\]*|))(?:[/\\]*)$/;
        function i() {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
                t[n] = arguments[n];
            let r = ""
              , i = !1;
            for (let e = t.length - 1; e >= -1 && !i; e--) {
                let n = e >= 0 ? t[e] : "/";
                n && (r = `${n}/${r}`,
                i = "/" === n.charAt(0))
            }
            return r = (function(e, t) {
                let n = 0;
                for (let t = e.length - 1; t >= 0; t--) {
                    let r = e[t];
                    "." === r ? e.splice(t, 1) : ".." === r ? (e.splice(t, 1),
                    n++) : n && (e.splice(t, 1),
                    n--)
                }
                if (t)
                    for (; n--; n)
                        e.unshift("..");
                return e
            }
            )(r.split("/").filter(e => !!e), !i).join("/"),
            (i ? "/" : "") + r || "."
        }
        function o(e) {
            let t = 0;
            for (; t < e.length && "" === e[t]; t++)
                ;
            let n = e.length - 1;
            for (; n >= 0 && "" === e[n]; n--)
                ;
            return t > n ? [] : e.slice(t, n - t + 1)
        }
        function a(e, t) {
            e = i(e).slice(1),
            t = i(t).slice(1);
            let n = o(e.split("/"))
              , r = o(t.split("/"))
              , a = Math.min(n.length, r.length)
              , s = a;
            for (let e = 0; e < a; e++)
                if (n[e] !== r[e]) {
                    s = e;
                    break
                }
            let u = [];
            for (let e = s; e < n.length; e++)
                u.push("..");
            return (u = u.concat(r.slice(s))).join("/")
        }
        function s(e, t) {
            let n = function(e) {
                let t = e.length > 1024 ? `<truncated>${e.slice(-1024)}` : e
                  , n = r.exec(t);
                return n ? n.slice(1) : []
            }(e)[2] || "";
            return t && n.slice(-1 * t.length) === t && (n = n.slice(0, n.length - t.length)),
            n
        }
    },
    50846: function(e, t, n) {
        "use strict";
        n.d(t, {
            makePromiseBuffer: function() {
                return o
            }
        });
        var r = n("25323")
          , i = n("81567");
        function o(e) {
            let t = [];
            function n(e) {
                return t.splice(t.indexOf(e), 1)[0] || Promise.resolve(void 0)
            }
            return {
                $: t,
                add: function(o) {
                    if (!(void 0 === e || t.length < e))
                        return (0,
                        i.rejectedSyncPromise)(new r.SentryError("Not adding Promise because buffer limit was reached."));
                    let a = o();
                    return -1 === t.indexOf(a) && t.push(a),
                    a.then( () => n(a)).then(null, () => n(a).then(null, () => {}
                    )),
                    a
                },
                drain: function(e) {
                    return new i.SyncPromise( (n, r) => {
                        let o = t.length;
                        if (!o)
                            return n(!0);
                        let a = setTimeout( () => {
                            e && e > 0 && n(!1)
                        }
                        , e);
                        t.forEach(e => {
                            (0,
                            i.resolvedSyncPromise)(e).then( () => {
                                !--o && (clearTimeout(a),
                                n(!0))
                            }
                            , r)
                        }
                        )
                    }
                    )
                }
            }
        }
    },
    38859: function(e, t, n) {
        "use strict";
        n.d(t, {
            generateSpanId: function() {
                return o
            },
            generateTraceId: function() {
                return i
            }
        });
        var r = n("24317");
        function i() {
            return (0,
            r.uuid4)()
        }
        function o() {
            return (0,
            r.uuid4)().substring(16)
        }
    },
    20547: function(e, t, n) {
        "use strict";
        n.d(t, {
            isRateLimited: function() {
                return i
            },
            parseRetryAfterHeader: function() {
                return r
            },
            updateRateLimits: function() {
                return o
            }
        });
        function r(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now()
              , n = parseInt(`${e}`, 10);
            if (!isNaN(n))
                return 1e3 * n;
            let r = Date.parse(`${e}`);
            return isNaN(r) ? 6e4 : r - t
        }
        function i(e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Date.now();
            var r;
            return ((r = e)[t] || r.all || 0) > n
        }
        function o(e, t) {
            let {statusCode: n, headers: i} = t
              , o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Date.now()
              , a = {
                ...e
            }
              , s = i && i["x-sentry-rate-limits"]
              , u = i && i["retry-after"];
            if (s)
                for (let e of s.trim().split(",")) {
                    let[t,n,,,r] = e.split(":", 5)
                      , i = parseInt(t, 10)
                      , s = (isNaN(i) ? 60 : i) * 1e3;
                    if (n)
                        for (let e of n.split(";"))
                            "metric_bucket" === e ? (!r || r.split(";").includes("custom")) && (a[e] = o + s) : a[e] = o + s;
                    else
                        a.all = o + s
                }
            else
                u ? a.all = o + r(u, o) : 429 === n && (a.all = o + 6e4);
            return a
        }
    },
    1546: function(e, t, n) {
        "use strict";
        function r(e) {
            return "warn" === e ? "warning" : ["fatal", "error", "warning", "log", "info", "debug"].includes(e) ? e : "log"
        }
        n.d(t, {
            severityLevelFromString: function() {
                return r
            }
        })
    },
    32237: function(e, t, n) {
        "use strict";
        n.d(t, {
            UNKNOWN_FUNCTION: function() {
                return r
            },
            createStackParser: function() {
                return a
            },
            getFramesFromEvent: function() {
                return d
            },
            getFunctionName: function() {
                return c
            },
            stackParserFromStackParserOptions: function() {
                return s
            }
        });
        let r = "?"
          , i = /\(error: (.*)\)/
          , o = /captureMessage|captureException/;
        function a() {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
                t[n] = arguments[n];
            let a = t.sort( (e, t) => e[0] - t[0]).map(e => e[1]);
            return function(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0
                  , n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0
                  , s = []
                  , l = e.split("\n");
                for (let e = t; e < l.length; e++) {
                    let t = l[e];
                    if (t.length > 1024)
                        continue;
                    let r = i.test(t) ? t.replace(i, "$1") : t;
                    if (!r.match(/\S*Error: /)) {
                        for (let e of a) {
                            let t = e(r);
                            if (t) {
                                s.push(t);
                                break
                            }
                        }
                        if (s.length >= 50 + n)
                            break
                    }
                }
                return function(e) {
                    if (!e.length)
                        return [];
                    let t = Array.from(e);
                    return /sentryWrapped/.test(u(t).function || "") && t.pop(),
                    t.reverse(),
                    o.test(u(t).function || "") && (t.pop(),
                    o.test(u(t).function || "") && t.pop()),
                    t.slice(0, 50).map(e => ({
                        ...e,
                        filename: e.filename || u(t).filename,
                        function: e.function || r
                    }))
                }(s.slice(n))
            }
        }
        function s(e) {
            return Array.isArray(e) ? a(...e) : e
        }
        function u(e) {
            return e[e.length - 1] || {}
        }
        let l = "<anonymous>";
        function c(e) {
            try {
                if (!e || "function" != typeof e)
                    return l;
                return e.name || l
            } catch (e) {
                return l
            }
        }
        function d(e) {
            let t = e.exception;
            if (t) {
                let e = [];
                try {
                    return t.values.forEach(t => {
                        t.stacktrace.frames && e.push(...t.stacktrace.frames)
                    }
                    ),
                    e
                } catch (e) {}
            }
        }
    },
    2030: function(e, t, n) {
        "use strict";
        n.d(t, {
            safeJoin: function() {
                return a
            },
            snipLine: function() {
                return o
            },
            stringMatchesSomePattern: function() {
                return s
            },
            truncate: function() {
                return i
            }
        });
        var r = n("27364");
        function i(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
            return "string" != typeof e || 0 === t ? e : e.length <= t ? e : `${e.slice(0, t)}...`
        }
        function o(e, t) {
            let n = e
              , r = n.length;
            if (r <= 150)
                return n;
            t > r && (t = r);
            let i = Math.max(t - 60, 0);
            i < 5 && (i = 0);
            let o = Math.min(i + 140, r);
            return o > r - 5 && (o = r),
            o === r && (i = Math.max(o - 140, 0)),
            n = n.slice(i, o),
            i > 0 && (n = `'{snip} ${n}`),
            o < r && (n += " {snip}"),
            n
        }
        function a(e, t) {
            if (!Array.isArray(e))
                return "";
            let n = [];
            for (let t = 0; t < e.length; t++) {
                let i = e[t];
                try {
                    (0,
                    r.isVueViewModel)(i) ? n.push("[VueViewModel]") : n.push(String(i))
                } catch (e) {
                    n.push("[value cannot be serialized]")
                }
            }
            return n.join(t)
        }
        function s(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : []
              , n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            return t.some(t => (function(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                return !!(0,
                r.isString)(e) && ((0,
                r.isRegExp)(t) ? t.test(e) : !!(0,
                r.isString)(t) && (n ? e === t : e.includes(t)))
            }
            )(e, t, n))
        }
    },
    5229: function(e, t, n) {
        "use strict";
        n.d(t, {
            isNativeFunction: function() {
                return s
            },
            supportsFetch: function() {
                return a
            },
            supportsNativeFetch: function() {
                return u
            },
            supportsReportingObserver: function() {
                return l
            }
        });
        var r = n("30978")
          , i = n("54683");
        let o = n("61191").GLOBAL_OBJ;
        function a() {
            if (!("fetch"in o))
                return !1;
            try {
                return new Headers,
                new Request("http://www.example.com"),
                new Response,
                !0
            } catch (e) {
                return !1
            }
        }
        function s(e) {
            return e && /^function\s+\w+\(\)\s+\{\s+\[native code\]\s+\}$/.test(e.toString())
        }
        function u() {
            if ("string" == typeof EdgeRuntime)
                return !0;
            if (!a())
                return !1;
            if (s(o.fetch))
                return !0;
            let e = !1
              , t = o.document;
            if (t && "function" == typeof t.createElement)
                try {
                    let n = t.createElement("iframe");
                    n.hidden = !0,
                    t.head.appendChild(n),
                    n.contentWindow && n.contentWindow.fetch && (e = s(n.contentWindow.fetch)),
                    t.head.removeChild(n)
                } catch (e) {
                    r.DEBUG_BUILD && i.logger.warn("Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ", e)
                }
            return e
        }
        function l() {
            return "ReportingObserver"in o
        }
    },
    81567: function(e, t, n) {
        "use strict";
        n.d(t, {
            SyncPromise: function() {
                return u
            },
            rejectedSyncPromise: function() {
                return s
            },
            resolvedSyncPromise: function() {
                return a
            }
        });
        var r = n("27364"), i, o;
        function a(e) {
            return new u(t => {
                t(e)
            }
            )
        }
        function s(e) {
            return new u( (t, n) => {
                n(e)
            }
            )
        }
        (o = i || (i = {}))[o.PENDING = 0] = "PENDING",
        o[o.RESOLVED = 1] = "RESOLVED",
        o[o.REJECTED = 2] = "REJECTED";
        class u {
            constructor(e) {
                u.prototype.__init.call(this),
                u.prototype.__init2.call(this),
                u.prototype.__init3.call(this),
                u.prototype.__init4.call(this),
                this._state = i.PENDING,
                this._handlers = [];
                try {
                    e(this._resolve, this._reject)
                } catch (e) {
                    this._reject(e)
                }
            }
            then(e, t) {
                return new u( (n, r) => {
                    this._handlers.push([!1, t => {
                        if (e)
                            try {
                                n(e(t))
                            } catch (e) {
                                r(e)
                            }
                        else
                            n(t)
                    }
                    , e => {
                        if (t)
                            try {
                                n(t(e))
                            } catch (e) {
                                r(e)
                            }
                        else
                            r(e)
                    }
                    ]),
                    this._executeHandlers()
                }
                )
            }
            catch(e) {
                return this.then(e => e, e)
            }
            finally(e) {
                return new u( (t, n) => {
                    let r, i;
                    return this.then(t => {
                        i = !1,
                        r = t,
                        e && e()
                    }
                    , t => {
                        i = !0,
                        r = t,
                        e && e()
                    }
                    ).then( () => {
                        if (i) {
                            n(r);
                            return
                        }
                        t(r)
                    }
                    )
                }
                )
            }
            __init() {
                this._resolve = e => {
                    this._setResult(i.RESOLVED, e)
                }
            }
            __init2() {
                this._reject = e => {
                    this._setResult(i.REJECTED, e)
                }
            }
            __init3() {
                this._setResult = (e, t) => {
                    if (this._state === i.PENDING) {
                        if ((0,
                        r.isThenable)(t)) {
                            t.then(this._resolve, this._reject);
                            return
                        }
                        this._state = e,
                        this._value = t,
                        this._executeHandlers()
                    }
                }
            }
            __init4() {
                this._executeHandlers = () => {
                    if (this._state === i.PENDING)
                        return;
                    let e = this._handlers.slice();
                    this._handlers = [],
                    e.forEach(e => {
                        !e[0] && (this._state === i.RESOLVED && e[1](this._value),
                        this._state === i.REJECTED && e[2](this._value),
                        e[0] = !0)
                    }
                    )
                }
            }
        }
    },
    75047: function(e, t, n) {
        "use strict";
        n.d(t, {
            browserPerformanceTimeOrigin: function() {
                return a
            },
            dateTimestampInSeconds: function() {
                return i
            },
            timestampInSeconds: function() {
                return o
            }
        });
        var r = n("61191");
        function i() {
            return Date.now() / 1e3
        }
        let o = function() {
            let {performance: e} = r.GLOBAL_OBJ;
            if (!e || !e.now)
                return i;
            let t = Date.now() - e.now()
              , n = void 0 == e.timeOrigin ? t : e.timeOrigin;
            return () => (n + e.now()) / 1e3
        }()
          , a = ( () => {
            let {performance: e} = r.GLOBAL_OBJ;
            if (!e || !e.now)
                return;
            let t = e.now()
              , n = Date.now()
              , i = e.timeOrigin ? Math.abs(e.timeOrigin + t - n) : 36e5
              , o = e.timing && e.timing.navigationStart
              , a = "number" == typeof o ? Math.abs(o + t - n) : 36e5;
            if (i < 36e5 || a < 36e5)
                return i <= a ? e.timeOrigin : o;
            return n
        }
        )()
    },
    96155: function(e, t, n) {
        "use strict";
        n.d(t, {
            TRACEPARENT_REGEXP: function() {
                return o
            },
            generateSentryTraceHeader: function() {
                return s
            },
            propagationContextFromHeaders: function() {
                return a
            }
        });
        var r = n("2129")
          , i = n("38859");
        let o = RegExp("^[ \\t]*([0-9a-f]{32})?-?([0-9a-f]{16})?-?([01])?[ \\t]*$");
        function a(e, t) {
            let n = function(e) {
                if (!e)
                    return;
                let t = e.match(o);
                if (!t)
                    return;
                let n;
                return "1" === t[3] ? n = !0 : "0" === t[3] && (n = !1),
                {
                    traceId: t[1],
                    parentSampled: n,
                    parentSpanId: t[2]
                }
            }(e)
              , a = (0,
            r.baggageHeaderToDynamicSamplingContext)(t);
            if (!n || !n.traceId)
                return {
                    traceId: (0,
                    i.generateTraceId)(),
                    spanId: (0,
                    i.generateSpanId)()
                };
            let {traceId: s, parentSpanId: u, parentSampled: l} = n;
            return {
                traceId: s,
                parentSpanId: u,
                spanId: (0,
                i.generateSpanId)(),
                sampled: l,
                dsc: a || {}
            }
        }
        function s() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0,
            i.generateTraceId)()
              , t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : (0,
            i.generateSpanId)()
              , n = arguments.length > 2 ? arguments[2] : void 0
              , r = "";
            return void 0 !== n && (r = n ? "-1" : "-0"),
            `${e}-${t}${r}`
        }
    },
    83139: function(e, t, n) {
        "use strict";
        function r(e) {
            if (!e)
                return {};
            let t = e.match(/^(([^:/?#]+):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/);
            if (!t)
                return {};
            let n = t[6] || ""
              , r = t[8] || "";
            return {
                host: t[4],
                path: t[5],
                protocol: t[2],
                search: n,
                hash: r,
                relative: t[5] + n + r
            }
        }
        function i(e) {
            return e.split(/[?#]/, 1)[0]
        }
        n.d(t, {
            parseUrl: function() {
                return r
            },
            stripUrlQueryAndFragment: function() {
                return i
            }
        })
    },
    3809: function(e, t, n) {
        "use strict";
        n.d(t, {
            supportsHistory: function() {
                return i
            }
        });
        let r = n("61191").GLOBAL_OBJ;
        function i() {
            let e = r.chrome
              , t = e && e.app && e.app.runtime
              , n = "history"in r && !!r.history.pushState && !!r.history.replaceState;
            return !t && n
        }
    },
    48706: function(e, t, n) {
        "use strict";
        n.d(t, {
            SDK_VERSION: function() {
                return r
            }
        });
        let r = "8.50.0"
    },
    61191: function(e, t, n) {
        "use strict";
        n.d(t, {
            GLOBAL_OBJ: function() {
                return i
            },
            getGlobalSingleton: function() {
                return o
            }
        });
        var r = n("48706");
        let i = globalThis;
        function o(e, t, n) {
            let o = n || i
              , a = o.__SENTRY__ = o.__SENTRY__ || {}
              , s = a[r.SDK_VERSION] = a[r.SDK_VERSION] || {};
            return s[e] || (s[e] = t())
        }
    },
    60962: function(e, t, n) {
        "use strict";
        n.d(t, {
            applyScopeDataToEvent: function() {
                return s
            },
            mergeScopeData: function() {
                return u
            }
        });
        var r = n("10581")
          , i = n("48497")
          , o = n("70846")
          , a = n("42878");
        function s(e, t) {
            let {fingerprint: n, span: o, breadcrumbs: s, sdkProcessingMetadata: u} = t;
            (function(e, t) {
                let {extra: n, tags: r, user: o, contexts: a, level: s, transactionName: u} = t
                  , l = (0,
                i.dropUndefinedKeys)(n);
                l && Object.keys(l).length && (e.extra = {
                    ...l,
                    ...e.extra
                });
                let c = (0,
                i.dropUndefinedKeys)(r);
                c && Object.keys(c).length && (e.tags = {
                    ...c,
                    ...e.tags
                });
                let d = (0,
                i.dropUndefinedKeys)(o);
                d && Object.keys(d).length && (e.user = {
                    ...d,
                    ...e.user
                });
                let p = (0,
                i.dropUndefinedKeys)(a);
                p && Object.keys(p).length && (e.contexts = {
                    ...p,
                    ...e.contexts
                }),
                s && (e.level = s),
                u && "transaction" !== e.type && (e.transaction = u)
            }
            )(e, t),
            o && function(e, t) {
                e.contexts = {
                    trace: (0,
                    a.spanToTraceContext)(t),
                    ...e.contexts
                },
                e.sdkProcessingMetadata = {
                    dynamicSamplingContext: (0,
                    r.getDynamicSamplingContextFromSpan)(t),
                    ...e.sdkProcessingMetadata
                };
                let n = (0,
                a.getRootSpan)(t)
                  , i = (0,
                a.spanToJSON)(n).description;
                i && !e.transaction && "transaction" === e.type && (e.transaction = i)
            }(e, o),
            function(e, t) {
                e.fingerprint = e.fingerprint ? Array.isArray(e.fingerprint) ? e.fingerprint : [e.fingerprint] : [],
                t && (e.fingerprint = e.fingerprint.concat(t)),
                e.fingerprint && !e.fingerprint.length && delete e.fingerprint
            }(e, n),
            function(e, t) {
                let n = [...e.breadcrumbs || [], ...t];
                e.breadcrumbs = n.length ? n : void 0
            }(e, s),
            function(e, t) {
                e.sdkProcessingMetadata = {
                    ...e.sdkProcessingMetadata,
                    ...t
                }
            }(e, u)
        }
        function u(e, t) {
            let {extra: n, tags: r, user: i, contexts: a, level: s, sdkProcessingMetadata: u, breadcrumbs: c, fingerprint: d, eventProcessors: p, attachments: f, propagationContext: h, transactionName: g, span: m} = t;
            l(e, "extra", n),
            l(e, "tags", r),
            l(e, "user", i),
            l(e, "contexts", a),
            e.sdkProcessingMetadata = (0,
            o.merge)(e.sdkProcessingMetadata, u, 2),
            s && (e.level = s),
            g && (e.transactionName = g),
            m && (e.span = m),
            c.length && (e.breadcrumbs = [...e.breadcrumbs, ...c]),
            d.length && (e.fingerprint = [...e.fingerprint, ...d]),
            p.length && (e.eventProcessors = [...e.eventProcessors, ...p]),
            f.length && (e.attachments = [...e.attachments, ...f]),
            e.propagationContext = {
                ...e.propagationContext,
                ...h
            }
        }
        function l(e, t, n) {
            e[t] = (0,
            o.merge)(e[t], n, 1)
        }
    },
    57886: function(e, t, n) {
        "use strict";
        n.d(t, {
            handleCallbackErrors: function() {
                return i
            }
        });
        var r = n("27364");
        function i(e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {}
            , i;
            try {
                i = e()
            } catch (e) {
                throw t(e),
                n(),
                e
            }
            return function(e, t, n) {
                return (0,
                r.isThenable)(e) ? e.then(e => (n(),
                e), e => {
                    throw t(e),
                    n(),
                    e
                }
                ) : (n(),
                e)
            }(i, t, n)
        }
    },
    92926: function(e, t, n) {
        "use strict";
        n.d(t, {
            hasTracingEnabled: function() {
                return i
            }
        });
        var r = n("65492");
        function i(e) {
            if ("boolean" == typeof __SENTRY_TRACING__ && !__SENTRY_TRACING__)
                return !1;
            let t = (0,
            r.getClient)()
              , n = e || t && t.getOptions();
            return !!n && (n.enableTracing || "tracesSampleRate"in n || "tracesSampler"in n)
        }
    },
    67441: function(e, t, n) {
        "use strict";
        function r(e, t) {
            let n = t && t.getDsn()
              , r = t && t.getOptions().tunnel;
            return function(e, t) {
                return !!t && e.includes(t.host)
            }(e, n) || function(e, t) {
                return !!t && i(e) === i(t)
            }(e, r)
        }
        n.d(t, {
            isSentryRequestUrl: function() {
                return r
            }
        });
        function i(e) {
            return "/" === e[e.length - 1] ? e.slice(0, -1) : e
        }
    },
    70846: function(e, t, n) {
        "use strict";
        n.d(t, {
            merge: function() {
                return function e(t, n) {
                    let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2;
                    if (!n || "object" != typeof n || r <= 0)
                        return n;
                    if (t && n && 0 === Object.keys(n).length)
                        return t;
                    let i = {
                        ...t
                    };
                    for (let t in n)
                        Object.prototype.hasOwnProperty.call(n, t) && (i[t] = e(i[t], n[t], r - 1));
                    return i
                }
            }
        })
    },
    44424: function(e, t, n) {
        "use strict";
        function r(e) {
            for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
                n[r - 1] = arguments[r];
            let i = new String(String.raw(e, ...n));
            return i.__sentry_template_string__ = e.join("\0").replace(/%/g, "%%").replace(/\0/g, "%s"),
            i.__sentry_template_values__ = n,
            i
        }
        n.d(t, {
            parameterize: function() {
                return r
            }
        })
    },
    21109: function(e, t, n) {
        "use strict";
        n.d(t, {
            parseSampleRate: function() {
                return o
            }
        });
        var r = n("36812")
          , i = n("54683");
        function o(e) {
            if ("boolean" == typeof e)
                return Number(e);
            let t = "string" == typeof e ? parseFloat(e) : e;
            if ("number" != typeof t || isNaN(t) || t < 0 || t > 1) {
                r.DEBUG_BUILD && i.logger.warn(`[Tracing] Given sample rate is invalid. Sample rate must be a boolean or a number between 0 and 1. Got ${JSON.stringify(e)} of type ${JSON.stringify(typeof e)}.`);
                return
            }
            return t
        }
    },
    6009: function(e, t, n) {
        "use strict";
        n.d(t, {
            parseEventHintOrCaptureContext: function() {
                return h
            },
            prepareEvent: function() {
                return f
            }
        });
        var r = n("58253")
          , i = n("65492")
          , o = n("77952")
          , a = n("24359")
          , s = n("52366")
          , u = n("24317")
          , l = n("7149")
          , c = n("2030")
          , d = n("75047")
          , p = n("60962");
        function f(e, t, n, f, h, g) {
            let {normalizeDepth: m=3, normalizeMaxBreadth: _=1e3} = e
              , v = {
                ...t,
                event_id: t.event_id || n.event_id || (0,
                u.uuid4)(),
                timestamp: t.timestamp || (0,
                d.dateTimestampInSeconds)()
            }
              , y = n.integrations || e.integrations.map(e => e.name);
            (function(e, t) {
                let {environment: n, release: i, dist: o, maxValueLength: a=250} = t;
                e.environment = e.environment || n || r.DEFAULT_ENVIRONMENT,
                !e.release && i && (e.release = i),
                !e.dist && o && (e.dist = o),
                e.message && (e.message = (0,
                c.truncate)(e.message, a));
                let s = e.exception && e.exception.values && e.exception.values[0];
                s && s.value && (s.value = (0,
                c.truncate)(s.value, a));
                let u = e.request;
                u && u.url && (u.url = (0,
                c.truncate)(u.url, a))
            }
            )(v, e),
            function(e, t) {
                t.length > 0 && (e.sdk = e.sdk || {},
                e.sdk.integrations = [...e.sdk.integrations || [], ...t])
            }(v, y),
            h && h.emit("applyFrameMetadata", t),
            void 0 === t.type && function(e, t) {
                let n = (0,
                s.getFilenameToDebugIdMap)(t);
                try {
                    e.exception.values.forEach(e => {
                        e.stacktrace.frames.forEach(e => {
                            n && e.filename && (e.debug_id = n[e.filename])
                        }
                        )
                    }
                    )
                } catch (e) {}
            }(v, e.stackParser);
            let S = function(e, t) {
                if (!t)
                    return e;
                let n = e ? e.clone() : new a.Scope;
                return n.update(t),
                n
            }(f, n.captureContext);
            n.mechanism && (0,
            u.addExceptionMechanism)(v, n.mechanism);
            let E = h ? h.getEventProcessors() : []
              , b = (0,
            i.getGlobalScope)().getScopeData();
            if (g) {
                let e = g.getScopeData();
                (0,
                p.mergeScopeData)(b, e)
            }
            if (S) {
                let e = S.getScopeData();
                (0,
                p.mergeScopeData)(b, e)
            }
            let I = [...n.attachments || [], ...b.attachments];
            I.length && (n.attachments = I),
            (0,
            p.applyScopeDataToEvent)(v, b);
            let T = [...E, ...b.eventProcessors];
            return (0,
            o.notifyEventProcessors)(T, v, n).then(e => (e && function(e) {
                let t = {};
                try {
                    e.exception.values.forEach(e => {
                        e.stacktrace.frames.forEach(e => {
                            e.debug_id && (e.abs_path ? t[e.abs_path] = e.debug_id : e.filename && (t[e.filename] = e.debug_id),
                            delete e.debug_id)
                        }
                        )
                    }
                    )
                } catch (e) {}
                if (0 === Object.keys(t).length)
                    return;
                e.debug_meta = e.debug_meta || {},
                e.debug_meta.images = e.debug_meta.images || [];
                let n = e.debug_meta.images;
                Object.entries(t).forEach(e => {
                    let[t,r] = e;
                    n.push({
                        type: "sourcemap",
                        code_file: t,
                        debug_id: r
                    })
                }
                )
            }(e),
            "number" == typeof m && m > 0) ? function(e, t, n) {
                if (!e)
                    return null;
                let r = {
                    ...e,
                    ...e.breadcrumbs && {
                        breadcrumbs: e.breadcrumbs.map(e => ({
                            ...e,
                            ...e.data && {
                                data: (0,
                                l.normalize)(e.data, t, n)
                            }
                        }))
                    },
                    ...e.user && {
                        user: (0,
                        l.normalize)(e.user, t, n)
                    },
                    ...e.contexts && {
                        contexts: (0,
                        l.normalize)(e.contexts, t, n)
                    },
                    ...e.extra && {
                        extra: (0,
                        l.normalize)(e.extra, t, n)
                    }
                };
                return e.contexts && e.contexts.trace && r.contexts && (r.contexts.trace = e.contexts.trace,
                e.contexts.trace.data && (r.contexts.trace.data = (0,
                l.normalize)(e.contexts.trace.data, t, n))),
                e.spans && (r.spans = e.spans.map(e => ({
                    ...e,
                    ...e.data && {
                        data: (0,
                        l.normalize)(e.data, t, n)
                    }
                }))),
                e.contexts && e.contexts.flags && r.contexts && (r.contexts.flags = (0,
                l.normalize)(e.contexts.flags, 3, n)),
                r
            }(e, m, _) : e)
        }
        function h(e) {
            if (e)
                return function(e) {
                    return e instanceof a.Scope || "function" == typeof e
                }(e) || function(e) {
                    return Object.keys(e).some(e => g.includes(e))
                }(e) ? {
                    captureContext: e
                } : e
        }
        let g = ["user", "level", "extra", "contexts", "tags", "fingerprint", "requestSession", "propagationContext"]
    },
    99175: function(e, t, n) {
        "use strict";
        n.d(t, {
            applySdkMetadata: function() {
                return i
            }
        });
        var r = n("48706");
        function i(e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [t]
              , i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "npm"
              , o = e._metadata || {};
            !o.sdk && (o.sdk = {
                name: `sentry.javascript.${t}`,
                packages: n.map(e => ({
                    name: `${i}:@sentry/${e}`,
                    version: r.SDK_VERSION
                })),
                version: r.SDK_VERSION
            }),
            e._metadata = o
        }
    },
    69801: function(e, t, n) {
        "use strict";
        n.d(t, {
            _getSpanForScope: function() {
                return a
            },
            _setSpanForScope: function() {
                return o
            }
        });
        var r = n("48497");
        let i = "_sentrySpan";
        function o(e, t) {
            t ? (0,
            r.addNonEnumerableProperty)(e, i, t) : delete e[i]
        }
        function a(e) {
            return e[i]
        }
    },
    42878: function(e, t, n) {
        "use strict";
        n.d(t, {
            TRACE_FLAG_NONE: function() {
                return g
            },
            TRACE_FLAG_SAMPLED: function() {
                return m
            },
            addChildSpanToSpan: function() {
                return x
            },
            getActiveSpan: function() {
                return D
            },
            getRootSpan: function() {
                return O
            },
            getSpanDescendants: function() {
                return A
            },
            getStatusMessage: function() {
                return w
            },
            removeChildSpanFromSpan: function() {
                return N
            },
            showSpanDropWarning: function() {
                return M
            },
            spanIsSampled: function() {
                return T
            },
            spanTimeInputToSeconds: function() {
                return E
            },
            spanToJSON: function() {
                return I
            },
            spanToTraceContext: function() {
                return y
            },
            spanToTraceHeader: function() {
                return S
            },
            spanToTransactionTraceContext: function() {
                return v
            },
            updateMetricSummaryOnActiveSpan: function() {
                return R
            },
            updateSpanName: function() {
                return L
            }
        });
        var r = n("53627")
          , i = n("37085")
          , o = n("65492")
          , a = n("35119")
          , s = n("95031")
          , u = n("1020")
          , l = n("54683")
          , c = n("48497")
          , d = n("38859")
          , p = n("75047")
          , f = n("96155")
          , h = n("69801");
        let g = 0
          , m = 1
          , _ = !1;
        function v(e) {
            let {spanId: t, traceId: n} = e.spanContext()
              , {data: r, op: i, parent_span_id: o, status: a, origin: s} = I(e);
            return (0,
            c.dropUndefinedKeys)({
                parent_span_id: o,
                span_id: t,
                trace_id: n,
                data: r,
                op: i,
                status: a,
                origin: s
            })
        }
        function y(e) {
            let {spanId: t, traceId: n, isRemote: r} = e.spanContext()
              , i = r ? t : I(e).parent_span_id
              , o = r ? (0,
            d.generateSpanId)() : t;
            return (0,
            c.dropUndefinedKeys)({
                parent_span_id: i,
                span_id: o,
                trace_id: n
            })
        }
        function S(e) {
            let {traceId: t, spanId: n} = e.spanContext()
              , r = T(e);
            return (0,
            f.generateSentryTraceHeader)(t, n, r)
        }
        function E(e) {
            return "number" == typeof e ? b(e) : Array.isArray(e) ? e[0] + e[1] / 1e9 : e instanceof Date ? b(e.getTime()) : (0,
            p.timestampInSeconds)()
        }
        function b(e) {
            return e > 9999999999 ? e / 1e3 : e
        }
        function I(e) {
            if (function(e) {
                return "function" == typeof e.getSpanJSON
            }(e))
                return e.getSpanJSON();
            try {
                let {spanId: t, traceId: n} = e.spanContext();
                if (function(e) {
                    return !!e.attributes && !!e.startTime && !!e.name && !!e.endTime && !!e.status
                }(e)) {
                    let {attributes: r, startTime: i, name: o, endTime: u, parentSpanId: l, status: d} = e;
                    return (0,
                    c.dropUndefinedKeys)({
                        span_id: t,
                        trace_id: n,
                        data: r,
                        description: o,
                        parent_span_id: l,
                        start_timestamp: E(i),
                        timestamp: E(u) || void 0,
                        status: w(d),
                        op: r[s.SEMANTIC_ATTRIBUTE_SENTRY_OP],
                        origin: r[s.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN],
                        _metrics_summary: (0,
                        a.getMetricSummaryJsonForSpan)(e)
                    })
                }
                return {
                    span_id: t,
                    trace_id: n
                }
            } catch (e) {
                return {}
            }
        }
        function T(e) {
            let {traceFlags: t} = e.spanContext();
            return t === m
        }
        function w(e) {
            if (e && e.code !== u.SPAN_STATUS_UNSET)
                return e.code === u.SPAN_STATUS_OK ? "ok" : e.message || "unknown_error"
        }
        let C = "_sentryChildSpans"
          , k = "_sentryRootSpan";
        function x(e, t) {
            let n = e[k] || e;
            (0,
            c.addNonEnumerableProperty)(t, k, n),
            e[C] ? e[C].add(t) : (0,
            c.addNonEnumerableProperty)(e, C, new Set([t]))
        }
        function N(e, t) {
            e[C] && e[C].delete(t)
        }
        function A(e) {
            let t = new Set;
            return !function e(n) {
                if (!t.has(n)) {
                    if (T(n))
                        for (let r of (t.add(n),
                        n[C] ? Array.from(n[C]) : []))
                            e(r)
                }
            }(e),
            Array.from(t)
        }
        function O(e) {
            return e[k] || e
        }
        function D() {
            let e = (0,
            i.getMainCarrier)()
              , t = (0,
            r.getAsyncContextStrategy)(e);
            return t.getActiveSpan ? t.getActiveSpan() : (0,
            h._getSpanForScope)((0,
            o.getCurrentScope)())
        }
        function R(e, t, n, r, i, o) {
            let s = D();
            s && (0,
            a.updateMetricSummaryOnSpan)(s, e, t, n, r, i, o)
        }
        function M() {
            !_ && ((0,
            l.consoleSandbox)( () => {
                console.warn("[Sentry] Deprecation warning: Returning null from `beforeSendSpan` will be disallowed from SDK version 9.0.0 onwards. The callback will only support mutating spans. To drop certain spans, configure the respective integrations directly.")
            }
            ),
            _ = !0)
        }
        function L(e, t) {
            e.updateName(t),
            e.setAttributes({
                [s.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE]: "custom",
                [s.SEMANTIC_ATTRIBUTE_SENTRY_CUSTOM_SPAN_NAME]: t
            })
        }
    },
    29723: function(e, t, n) {
        "use strict";
        n.d(t, {
            getTraceData: function() {
                return p
            }
        });
        var r = n("53627")
          , i = n("37085")
          , o = n("65492")
          , a = n("70585")
          , s = n("54683")
          , u = n("42878")
          , l = n("96155")
          , c = n("10581")
          , d = n("2129");
        function p() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
              , t = (0,
            o.getClient)();
            if (!(0,
            a.isEnabled)() || !t)
                return {};
            let n = (0,
            i.getMainCarrier)()
              , p = (0,
            r.getAsyncContextStrategy)(n);
            if (p.getTraceData)
                return p.getTraceData(e);
            let f = (0,
            o.getCurrentScope)()
              , h = e.span || (0,
            u.getActiveSpan)()
              , g = h ? (0,
            u.spanToTraceHeader)(h) : function(e) {
                let {traceId: t, sampled: n, spanId: r} = e.getPropagationContext();
                return (0,
                l.generateSentryTraceHeader)(t, r, n)
            }(f)
              , m = h ? (0,
            c.getDynamicSamplingContextFromSpan)(h) : (0,
            c.getDynamicSamplingContextFromScope)(t, f)
              , _ = (0,
            d.dynamicSamplingContextToSentryBaggageHeader)(m);
            return l.TRACEPARENT_REGEXP.test(g) ? {
                "sentry-trace": g,
                baggage: _
            } : (s.logger.warn("Invalid sentry-trace data. Cannot generate trace data"),
            {})
        }
    },
    53238: function(e, t, n) {
        "use strict";
        n.d(t, {
            DEBUG_BUILD: function() {
                return r
            }
        });
        let r = "undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__
    },
    54816: function(e, t, n) {
        "use strict";
        n.d(t, {
            clearCachedImplementation: function() {
                return l
            },
            getNativeImplementation: function() {
                return u
            },
            setTimeout: function() {
                return c
            }
        });
        var r = n("5229")
          , i = n("54683")
          , o = n("53238")
          , a = n("10038");
        let s = {};
        function u(e) {
            let t = s[e];
            if (t)
                return t;
            let n = a.WINDOW[e];
            if ((0,
            r.isNativeFunction)(n))
                return s[e] = n.bind(a.WINDOW);
            let u = a.WINDOW.document;
            if (u && "function" == typeof u.createElement)
                try {
                    let t = u.createElement("iframe");
                    t.hidden = !0,
                    u.head.appendChild(t);
                    let r = t.contentWindow;
                    r && r[e] && (n = r[e]),
                    u.head.removeChild(t)
                } catch (t) {
                    o.DEBUG_BUILD && i.logger.warn(`Could not create sandbox iframe for ${e} check, bailing to window.${e}: `, t)
                }
            return n ? s[e] = n.bind(a.WINDOW) : n
        }
        function l(e) {
            s[e] = void 0
        }
        function c() {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
                t[n] = arguments[n];
            return u("setTimeout")(...t)
        }
    },
    58425: function(e, t, n) {
        "use strict";
        n.d(t, {
            addClickKeypressInstrumentationHandler: function() {
                return c
            }
        });
        var r = n("30733")
          , i = n("48497")
          , o = n("24317")
          , a = n("10038");
        let s, u, l;
        function c(e) {
            (0,
            r.addHandler)("dom", e),
            (0,
            r.maybeInstrument)("dom", d)
        }
        function d() {
            if (!a.WINDOW.document)
                return;
            let e = r.triggerHandlers.bind(null, "dom")
              , t = p(e, !0);
            a.WINDOW.document.addEventListener("click", t, !1),
            a.WINDOW.document.addEventListener("keypress", t, !1),
            ["EventTarget", "Node"].forEach(t => {
                let n = a.WINDOW[t]
                  , r = n && n.prototype;
                r && r.hasOwnProperty && r.hasOwnProperty("addEventListener") && ((0,
                i.fill)(r, "addEventListener", function(t) {
                    return function(n, r, i) {
                        if ("click" === n || "keypress" == n)
                            try {
                                let r = this.__sentry_instrumentation_handlers__ = this.__sentry_instrumentation_handlers__ || {}
                                  , o = r[n] = r[n] || {
                                    refCount: 0
                                };
                                if (!o.handler) {
                                    let r = p(e);
                                    o.handler = r,
                                    t.call(this, n, r, i)
                                }
                                o.refCount++
                            } catch (e) {}
                        return t.call(this, n, r, i)
                    }
                }),
                (0,
                i.fill)(r, "removeEventListener", function(e) {
                    return function(t, n, r) {
                        if ("click" === t || "keypress" == t)
                            try {
                                let n = this.__sentry_instrumentation_handlers__ || {}
                                  , i = n[t];
                                i && (i.refCount--,
                                i.refCount <= 0 && (e.call(this, t, i.handler, r),
                                i.handler = void 0,
                                delete n[t]),
                                0 === Object.keys(n).length && delete this.__sentry_instrumentation_handlers__)
                            } catch (e) {}
                        return e.call(this, t, n, r)
                    }
                }))
            }
            )
        }
        function p(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            return n => {
                if (!n || n._sentryCaptured)
                    return;
                let r = function(e) {
                    try {
                        return e.target
                    } catch (e) {
                        return null
                    }
                }(n);
                var c, d;
                if (c = n.type,
                d = r,
                "keypress" === c && (!d || !d.tagName || "INPUT" !== d.tagName && "TEXTAREA" !== d.tagName && !d.isContentEditable))
                    return;
                (0,
                i.addNonEnumerableProperty)(n, "_sentryCaptured", !0),
                r && !r._sentryId && (0,
                i.addNonEnumerableProperty)(r, "_sentryId", (0,
                o.uuid4)());
                let p = "keypress" === n.type ? "input" : n.type;
                !function(e) {
                    if (e.type !== u)
                        return !1;
                    try {
                        if (!e.target || e.target._sentryId !== l)
                            return !1
                    } catch (e) {}
                    return !0
                }(n) && (e({
                    event: n,
                    name: p,
                    global: t
                }),
                u = n.type,
                l = r ? r._sentryId : void 0),
                clearTimeout(s),
                s = a.WINDOW.setTimeout( () => {
                    l = void 0,
                    u = void 0
                }
                , 1e3)
            }
        }
    },
    17451: function(e, t, n) {
        "use strict";
        n.d(t, {
            addHistoryInstrumentationHandler: function() {
                return u
            }
        });
        var r = n("30733")
          , i = n("3809")
          , o = n("48497")
          , a = n("10038");
        let s;
        function u(e) {
            let t = "history";
            (0,
            r.addHandler)(t, e),
            (0,
            r.maybeInstrument)(t, l)
        }
        function l() {
            if (!(0,
            i.supportsHistory)())
                return;
            let e = a.WINDOW.onpopstate;
            function t(e) {
                return function() {
                    for (var t = arguments.length, n = Array(t), i = 0; i < t; i++)
                        n[i] = arguments[i];
                    let o = n.length > 2 ? n[2] : void 0;
                    if (o) {
                        let e = s
                          , t = String(o);
                        s = t;
                        (0,
                        r.triggerHandlers)("history", {
                            from: e,
                            to: t
                        })
                    }
                    return e.apply(this, n)
                }
            }
            a.WINDOW.onpopstate = function() {
                for (var t = arguments.length, n = Array(t), i = 0; i < t; i++)
                    n[i] = arguments[i];
                let o = a.WINDOW.location.href
                  , u = s;
                s = o;
                if ((0,
                r.triggerHandlers)("history", {
                    from: u,
                    to: o
                }),
                e)
                    try {
                        return e.apply(this, n)
                    } catch (e) {}
            }
            ,
            (0,
            o.fill)(a.WINDOW.history, "pushState", t),
            (0,
            o.fill)(a.WINDOW.history, "replaceState", t)
        }
    },
    38385: function(e, t, n) {
        "use strict";
        n.d(t, {
            SENTRY_XHR_DATA_KEY: function() {
                return s
            },
            addXhrInstrumentationHandler: function() {
                return u
            }
        });
        var r = n("30733")
          , i = n("75047")
          , o = n("27364")
          , a = n("10038");
        let s = "__sentry_xhr_v3__";
        function u(e) {
            (0,
            r.addHandler)("xhr", e),
            (0,
            r.maybeInstrument)("xhr", l)
        }
        function l() {
            if (!a.WINDOW.XMLHttpRequest)
                return;
            let e = XMLHttpRequest.prototype;
            e.open = new Proxy(e.open,{
                apply(e, t, n) {
                    let a = Error()
                      , u = 1e3 * (0,
                    i.timestampInSeconds)()
                      , l = (0,
                    o.isString)(n[0]) ? n[0].toUpperCase() : void 0
                      , c = function(e) {
                        if ((0,
                        o.isString)(e))
                            return e;
                        try {
                            return e.toString()
                        } catch (e) {}
                    }(n[1]);
                    if (!l || !c)
                        return e.apply(t, n);
                    t[s] = {
                        method: l,
                        url: c,
                        request_headers: {}
                    },
                    "POST" === l && c.match(/sentry_key/) && (t.__sentry_own_request__ = !0);
                    let d = () => {
                        let e = t[s];
                        if (e && 4 === t.readyState) {
                            try {
                                e.status_code = t.status
                            } catch (e) {}
                            let n = {
                                endTimestamp: 1e3 * (0,
                                i.timestampInSeconds)(),
                                startTimestamp: u,
                                xhr: t,
                                virtualError: a
                            };
                            (0,
                            r.triggerHandlers)("xhr", n)
                        }
                    }
                    ;
                    return "onreadystatechange"in t && "function" == typeof t.onreadystatechange ? t.onreadystatechange = new Proxy(t.onreadystatechange,{
                        apply: (e, t, n) => (d(),
                        e.apply(t, n))
                    }) : t.addEventListener("readystatechange", d),
                    t.setRequestHeader = new Proxy(t.setRequestHeader,{
                        apply(e, t, n) {
                            let[r,i] = n
                              , a = t[s];
                            return a && (0,
                            o.isString)(r) && (0,
                            o.isString)(i) && (a.request_headers[r.toLowerCase()] = i),
                            e.apply(t, n)
                        }
                    }),
                    e.apply(t, n)
                }
            }),
            e.send = new Proxy(e.send,{
                apply(e, t, n) {
                    let o = t[s];
                    if (!o)
                        return e.apply(t, n);
                    void 0 !== n[0] && (o.body = n[0]);
                    let a = {
                        startTimestamp: 1e3 * (0,
                        i.timestampInSeconds)(),
                        xhr: t
                    };
                    return (0,
                    r.triggerHandlers)("xhr", a),
                    e.apply(t, n)
                }
            })
        }
    },
    84725: function(e, t, n) {
        "use strict";
        n.d(t, {
            addPerformanceEntries: function() {
                return T
            },
            startTrackingInteractions: function() {
                return I
            },
            startTrackingLongAnimationFrames: function() {
                return b
            },
            startTrackingLongTasks: function() {
                return E
            },
            startTrackingWebVitals: function() {
                return S
            }
        });
        var r = n("75047")
          , i = n("42878")
          , o = n("95031")
          , a = n("87586")
          , s = n("29556")
          , u = n("83139")
          , l = n("10038")
          , c = n("45961")
          , d = n("99785")
          , p = n("15356")
          , f = n("93009")
          , h = n("97614")
          , g = n("19980");
        let m = 0, _ = {}, v, y;
        function S(e) {
            let {recordClsStandaloneSpans: t} = e
              , n = (0,
            p.getBrowserPerformanceAPI)();
            if (n && r.browserPerformanceTimeOrigin) {
                n.mark && l.WINDOW.performance.mark("sentry-tracing-init");
                let e = function() {
                    return (0,
                    d.addFidInstrumentationHandler)(e => {
                        let {metric: t} = e
                          , n = t.entries[t.entries.length - 1];
                        if (!n)
                            return;
                        let i = (0,
                        p.msToSec)(r.browserPerformanceTimeOrigin)
                          , o = (0,
                        p.msToSec)(n.startTime);
                        _.fid = {
                            value: t.value,
                            unit: "millisecond"
                        },
                        _["mark.fid"] = {
                            value: i + o,
                            unit: "second"
                        }
                    }
                    )
                }()
                  , i = function() {
                    return (0,
                    d.addLcpInstrumentationHandler)(e => {
                        let {metric: t} = e
                          , n = t.entries[t.entries.length - 1];
                        n && (_.lcp = {
                            value: t.value,
                            unit: "millisecond"
                        },
                        v = n)
                    }
                    , !0)
                }()
                  , o = function() {
                    return (0,
                    d.addTtfbInstrumentationHandler)(e => {
                        let {metric: t} = e;
                        t.entries[t.entries.length - 1] && (_.ttfb = {
                            value: t.value,
                            unit: "millisecond"
                        })
                    }
                    )
                }()
                  , a = t ? (0,
                c.trackClsAsStandaloneSpan)() : function() {
                    return (0,
                    d.addClsInstrumentationHandler)(e => {
                        let {metric: t} = e
                          , n = t.entries[t.entries.length - 1];
                        n && (_.cls = {
                            value: t.value,
                            unit: ""
                        },
                        y = n)
                    }
                    , !0)
                }();
                return () => {
                    e(),
                    i(),
                    o(),
                    a && a()
                }
            }
            return () => void 0
        }
        function E() {
            (0,
            d.addPerformanceInstrumentationHandler)("longtask", e => {
                let {entries: t} = e
                  , n = (0,
                i.getActiveSpan)();
                if (!n)
                    return;
                let {op: a, start_timestamp: s} = (0,
                i.spanToJSON)(n);
                for (let e of t) {
                    let t = (0,
                    p.msToSec)(r.browserPerformanceTimeOrigin + e.startTime)
                      , i = (0,
                    p.msToSec)(e.duration);
                    ("navigation" !== a || !s || !(t < s)) && (0,
                    p.startAndEndSpan)(n, t, t + i, {
                        name: "Main UI thread blocked",
                        op: "ui.long-task",
                        attributes: {
                            [o.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: "auto.ui.browser.metrics"
                        }
                    })
                }
            }
            )
        }
        function b() {
            new PerformanceObserver(e => {
                let t = (0,
                i.getActiveSpan)();
                if (t)
                    for (let n of e.getEntries()) {
                        if (!n.scripts[0])
                            continue;
                        let e = (0,
                        p.msToSec)(r.browserPerformanceTimeOrigin + n.startTime)
                          , {start_timestamp: a, op: s} = (0,
                        i.spanToJSON)(t);
                        if ("navigation" === s && a && e < a)
                            continue;
                        let u = (0,
                        p.msToSec)(n.duration)
                          , l = {
                            [o.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: "auto.ui.browser.metrics"
                        }
                          , {invoker: c, invokerType: d, sourceURL: f, sourceFunctionName: h, sourceCharPosition: g} = n.scripts[0];
                        l["browser.script.invoker"] = c,
                        l["browser.script.invoker_type"] = d,
                        f && (l["code.filepath"] = f),
                        h && (l["code.function"] = h),
                        -1 !== g && (l["browser.script.source_char_position"] = g),
                        (0,
                        p.startAndEndSpan)(t, e, e + u, {
                            name: "Main UI thread blocked",
                            op: "ui.long-animation-frame",
                            attributes: l
                        })
                    }
            }
            ).observe({
                type: "long-animation-frame",
                buffered: !0
            })
        }
        function I() {
            (0,
            d.addPerformanceInstrumentationHandler)("event", e => {
                let {entries: t} = e
                  , n = (0,
                i.getActiveSpan)();
                if (n) {
                    for (let e of t)
                        if ("click" === e.name) {
                            let t = (0,
                            p.msToSec)(r.browserPerformanceTimeOrigin + e.startTime)
                              , i = (0,
                            p.msToSec)(e.duration)
                              , s = {
                                name: (0,
                                a.htmlTreeAsString)(e.target),
                                op: `ui.interaction.${e.name}`,
                                startTime: t,
                                attributes: {
                                    [o.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: "auto.ui.browser.metrics"
                                }
                            }
                              , u = (0,
                            a.getComponentName)(e.target);
                            u && (s.attributes["ui.component_name"] = u),
                            (0,
                            p.startAndEndSpan)(n, t, t + i, s)
                        }
                }
            }
            )
        }
        function T(e, t) {
            let n = (0,
            p.getBrowserPerformanceAPI)();
            if (!n || !n.getEntries || !r.browserPerformanceTimeOrigin)
                return;
            let c = (0,
            p.msToSec)(r.browserPerformanceTimeOrigin)
              , d = n.getEntries()
              , {op: S, start_timestamp: E} = (0,
            i.spanToJSON)(e);
            if (d.slice(m).forEach(t => {
                let n = (0,
                p.msToSec)(t.startTime)
                  , r = (0,
                p.msToSec)(Math.max(0, t.duration));
                if ("navigation" !== S || !E || !(c + n < E))
                    switch (t.entryType) {
                    case "navigation":
                        (function(e, t, n) {
                            ["unloadEvent", "redirect", "domContentLoadedEvent", "loadEvent", "connect"].forEach(r => {
                                w(e, t, r, n)
                            }
                            ),
                            w(e, t, "secureConnection", n, "TLS/SSL"),
                            w(e, t, "fetch", n, "cache"),
                            w(e, t, "domainLookup", n, "DNS"),
                            function(e, t, n) {
                                let r = n + (0,
                                p.msToSec)(t.requestStart)
                                  , i = n + (0,
                                p.msToSec)(t.responseEnd)
                                  , a = n + (0,
                                p.msToSec)(t.responseStart);
                                t.responseEnd && ((0,
                                p.startAndEndSpan)(e, r, i, {
                                    op: "browser.request",
                                    name: t.name,
                                    attributes: {
                                        [o.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: "auto.ui.browser.metrics"
                                    }
                                }),
                                (0,
                                p.startAndEndSpan)(e, a, i, {
                                    op: "browser.response",
                                    name: t.name,
                                    attributes: {
                                        [o.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: "auto.ui.browser.metrics"
                                    }
                                }))
                            }(e, t, n)
                        }
                        )(e, t, c);
                        break;
                    case "mark":
                    case "paint":
                    case "measure":
                        {
                            (function(e, t, n, r, i) {
                                let a = (0,
                                h.getNavigationEntry)(!1)
                                  , s = i + Math.max(n, (0,
                                p.msToSec)(a ? a.requestStart : 0))
                                  , u = i + n
                                  , l = {
                                    [o.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: "auto.resource.browser.metrics"
                                };
                                s !== u && (l["sentry.browser.measure_happened_before_request"] = !0,
                                l["sentry.browser.measure_start_time"] = s),
                                (0,
                                p.startAndEndSpan)(e, s, u + r, {
                                    name: t.name,
                                    op: t.entryType,
                                    attributes: l
                                })
                            }
                            )(e, t, n, r, c);
                            let i = (0,
                            g.getVisibilityWatcher)()
                              , a = t.startTime < i.firstHiddenTime;
                            "first-paint" === t.name && a && (_.fp = {
                                value: t.startTime,
                                unit: "millisecond"
                            }),
                            "first-contentful-paint" === t.name && a && (_.fcp = {
                                value: t.startTime,
                                unit: "millisecond"
                            });
                            break
                        }
                    case "resource":
                        (function(e, t, n, r, i, a) {
                            if ("xmlhttprequest" === t.initiatorType || "fetch" === t.initiatorType)
                                return;
                            let s = (0,
                            u.parseUrl)(n)
                              , c = {
                                [o.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: "auto.resource.browser.metrics"
                            };
                            C(c, t, "transferSize", "http.response_transfer_size"),
                            C(c, t, "encodedBodySize", "http.response_content_length"),
                            C(c, t, "decodedBodySize", "http.decoded_response_content_length");
                            let d = t.deliveryType;
                            null != d && (c["http.response_delivery_type"] = d);
                            let f = t.renderBlockingStatus;
                            f && (c["resource.render_blocking_status"] = f),
                            s.protocol && (c["url.scheme"] = s.protocol.split(":").pop()),
                            s.host && (c["server.address"] = s.host),
                            c["url.same_origin"] = n.includes(l.WINDOW.location.origin);
                            let h = a + r;
                            (0,
                            p.startAndEndSpan)(e, h, h + i, {
                                name: n.replace(l.WINDOW.location.origin, ""),
                                op: t.initiatorType ? `resource.${t.initiatorType}` : "resource.other",
                                attributes: c
                            })
                        }
                        )(e, t, t.name, n, r, c)
                    }
            }
            ),
            m = Math.max(d.length - 1, 0),
            function(e) {
                let t = l.WINDOW.navigator;
                if (!t)
                    return;
                let n = t.connection;
                n && (n.effectiveType && e.setAttribute("effectiveConnectionType", n.effectiveType),
                n.type && e.setAttribute("connectionType", n.type),
                (0,
                p.isMeasurementValue)(n.rtt) && (_["connection.rtt"] = {
                    value: n.rtt,
                    unit: "millisecond"
                })),
                (0,
                p.isMeasurementValue)(t.deviceMemory) && e.setAttribute("deviceMemory", `${t.deviceMemory} GB`),
                (0,
                p.isMeasurementValue)(t.hardwareConcurrency) && e.setAttribute("hardwareConcurrency", String(t.hardwareConcurrency))
            }(e),
            "pageload" === S) {
                (function(e) {
                    let t = (0,
                    h.getNavigationEntry)(!1);
                    if (!t)
                        return;
                    let {responseStart: n, requestStart: r} = t;
                    r <= n && (e["ttfb.requestTime"] = {
                        value: n - r,
                        unit: "millisecond"
                    })
                }
                )(_);
                let n = _["mark.fid"];
                n && _.fid && ((0,
                p.startAndEndSpan)(e, n.value, n.value + (0,
                p.msToSec)(_.fid.value), {
                    name: "first input delay",
                    op: "ui.action",
                    attributes: {
                        [o.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: "auto.ui.browser.metrics"
                    }
                }),
                delete _["mark.fid"]),
                (!("fcp"in _) || !t.recordClsOnPageloadSpan) && delete _.cls,
                Object.entries(_).forEach(e => {
                    let[t,n] = e;
                    (0,
                    s.setMeasurement)(t, n.value, n.unit)
                }
                ),
                e.setAttribute("performance.timeOrigin", c),
                e.setAttribute("performance.activationStart", (0,
                f.getActivationStart)()),
                function(e) {
                    v && (v.element && e.setAttribute("lcp.element", (0,
                    a.htmlTreeAsString)(v.element)),
                    v.id && e.setAttribute("lcp.id", v.id),
                    v.url && e.setAttribute("lcp.url", v.url.trim().slice(0, 200)),
                    null != v.loadTime && e.setAttribute("lcp.loadTime", v.loadTime),
                    null != v.renderTime && e.setAttribute("lcp.renderTime", v.renderTime),
                    e.setAttribute("lcp.size", v.size)),
                    y && y.sources && y.sources.forEach( (t, n) => e.setAttribute(`cls.source.${n + 1}`, (0,
                    a.htmlTreeAsString)(t.node)))
                }(e)
            }
            v = void 0,
            y = void 0,
            _ = {}
        }
        function w(e, t, n, r) {
            let i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : n
              , a = t[function(e) {
                return "secureConnection" === e ? "connectEnd" : "fetch" === e ? "domainLookupStart" : `${e}End`
            }(n)]
              , s = t[`${n}Start`];
            s && a && (0,
            p.startAndEndSpan)(e, r + (0,
            p.msToSec)(s), r + (0,
            p.msToSec)(a), {
                op: `browser.${i}`,
                name: t.name,
                attributes: {
                    [o.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: "auto.ui.browser.metrics"
                }
            })
        }
        function C(e, t, n, r) {
            let i = t[n];
            null != i && i < 2147483647 && (e[r] = i)
        }
    },
    45961: function(e, t, n) {
        "use strict";
        n.d(t, {
            trackClsAsStandaloneSpan: function() {
                return h
            }
        });
        var r = n("65492")
          , i = n("42878")
          , o = n("54683")
          , a = n("75047")
          , s = n("87586")
          , u = n("48497")
          , l = n("95031")
          , c = n("53238")
          , d = n("99785")
          , p = n("15356")
          , f = n("97911");
        function h() {
            let e = 0, t, n;
            if (!function() {
                try {
                    return PerformanceObserver.supportedEntryTypes.includes("layout-shift")
                } catch (e) {
                    return !1
                }
            }())
                return;
            let h = !1;
            function g() {
                !h && (h = !0,
                n && function(e, t, n) {
                    c.DEBUG_BUILD && o.logger.log(`Sending CLS span (${e})`);
                    let i = (0,
                    p.msToSec)((a.browserPerformanceTimeOrigin || 0) + (t && t.startTime || 0))
                      , d = (0,
                    r.getCurrentScope)().getScopeData().transactionName
                      , f = t ? (0,
                    s.htmlTreeAsString)(t.sources[0] && t.sources[0].node) : "Layout shift"
                      , h = (0,
                    u.dropUndefinedKeys)({
                        [l.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: "auto.http.browser.cls",
                        [l.SEMANTIC_ATTRIBUTE_SENTRY_OP]: "ui.webvital.cls",
                        [l.SEMANTIC_ATTRIBUTE_EXCLUSIVE_TIME]: t && t.duration || 0,
                        "sentry.pageload.span_id": n
                    })
                      , g = (0,
                    p.startStandaloneWebVitalSpan)({
                        name: f,
                        transaction: d,
                        attributes: h,
                        startTime: i
                    });
                    g && (g.addEvent("cls", {
                        [l.SEMANTIC_ATTRIBUTE_SENTRY_MEASUREMENT_UNIT]: "",
                        [l.SEMANTIC_ATTRIBUTE_SENTRY_MEASUREMENT_VALUE]: e
                    }),
                    g.end(i))
                }(e, t, n),
                m())
            }
            let m = (0,
            d.addClsInstrumentationHandler)(n => {
                let {metric: r} = n
                  , i = r.entries[r.entries.length - 1];
                i && (e = r.value,
                t = i)
            }
            , !0);
            (0,
            f.onHidden)( () => {
                g()
            }
            ),
            setTimeout( () => {
                let e = (0,
                r.getClient)();
                if (!e)
                    return;
                let t = e.on("startNavigationSpan", () => {
                    g(),
                    t && t()
                }
                )
                  , o = (0,
                i.getActiveSpan)()
                  , a = o && (0,
                i.getRootSpan)(o)
                  , s = a && (0,
                i.spanToJSON)(a);
                s && "pageload" === s.op && (n = a.spanContext().spanId)
            }
            , 0)
        }
    },
    85912: function(e, t, n) {
        "use strict";
        n.d(t, {
            registerInpInteractionListener: function() {
                return g
            },
            startTrackingINP: function() {
                return f
            }
        });
        var r = n("75047")
          , i = n("42878")
          , o = n("65492")
          , a = n("87586")
          , s = n("48497")
          , u = n("95031")
          , l = n("99785")
          , c = n("15356");
        let d = []
          , p = new Map;
        function f() {
            if ((0,
            c.getBrowserPerformanceAPI)() && r.browserPerformanceTimeOrigin) {
                let e = function() {
                    return (0,
                    l.addInpInstrumentationHandler)(e => {
                        let {metric: t} = e;
                        if (void 0 == t.value)
                            return;
                        let n = t.entries.find(e => e.duration === t.value && h[e.name]);
                        if (!n)
                            return;
                        let {interactionId: l} = n
                          , d = h[n.name]
                          , f = (0,
                        c.msToSec)(r.browserPerformanceTimeOrigin + n.startTime)
                          , g = (0,
                        c.msToSec)(t.value)
                          , m = (0,
                        i.getActiveSpan)()
                          , _ = m ? (0,
                        i.getRootSpan)(m) : void 0
                          , v = (null != l ? p.get(l) : void 0) || _
                          , y = v ? (0,
                        i.spanToJSON)(v).description : (0,
                        o.getCurrentScope)().getScopeData().transactionName
                          , S = (0,
                        a.htmlTreeAsString)(n.target)
                          , E = (0,
                        s.dropUndefinedKeys)({
                            [u.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: "auto.http.browser.inp",
                            [u.SEMANTIC_ATTRIBUTE_SENTRY_OP]: `ui.interaction.${d}`,
                            [u.SEMANTIC_ATTRIBUTE_EXCLUSIVE_TIME]: n.duration
                        })
                          , b = (0,
                        c.startStandaloneWebVitalSpan)({
                            name: S,
                            transaction: y,
                            attributes: E,
                            startTime: f
                        });
                        b && (b.addEvent("inp", {
                            [u.SEMANTIC_ATTRIBUTE_SENTRY_MEASUREMENT_UNIT]: "millisecond",
                            [u.SEMANTIC_ATTRIBUTE_SENTRY_MEASUREMENT_VALUE]: t.value
                        }),
                        b.end(f + g))
                    }
                    )
                }();
                return () => {
                    e()
                }
            }
            return () => void 0
        }
        let h = {
            click: "click",
            pointerdown: "click",
            pointerup: "click",
            mousedown: "click",
            mouseup: "click",
            touchstart: "click",
            touchend: "click",
            mouseover: "hover",
            mouseout: "hover",
            mouseenter: "hover",
            mouseleave: "hover",
            pointerover: "hover",
            pointerout: "hover",
            pointerenter: "hover",
            pointerleave: "hover",
            dragstart: "drag",
            dragend: "drag",
            drag: "drag",
            dragenter: "drag",
            dragleave: "drag",
            dragover: "drag",
            drop: "drag",
            keydown: "press",
            keyup: "press",
            keypress: "press",
            input: "press"
        };
        function g(e) {
            let t = e => {
                let {entries: t} = e
                  , n = (0,
                i.getActiveSpan)()
                  , r = n && (0,
                i.getRootSpan)(n);
                t.forEach(e => {
                    if (!(0,
                    l.isPerformanceEventTiming)(e) || !r)
                        return;
                    let t = e.interactionId;
                    if (null != t) {
                        if (!p.has(t)) {
                            if (d.length > 10) {
                                let e = d.shift();
                                p.delete(e)
                            }
                            d.push(t),
                            p.set(t, r)
                        }
                    }
                }
                )
            }
            ;
            (0,
            l.addPerformanceInstrumentationHandler)("event", t),
            (0,
            l.addPerformanceInstrumentationHandler)("first-input", t)
        }
    },
    99785: function(e, t, n) {
        "use strict";
        n.d(t, {
            addClsInstrumentationHandler: function() {
                return y
            },
            addFidInstrumentationHandler: function() {
                return E
            },
            addInpInstrumentationHandler: function() {
                return I
            },
            addLcpInstrumentationHandler: function() {
                return S
            },
            addPerformanceInstrumentationHandler: function() {
                return T
            },
            addTtfbInstrumentationHandler: function() {
                return b
            },
            isPerformanceEventTiming: function() {
                return M
            }
        });
        var r = n("54683")
          , i = n("32237")
          , o = n("53238")
          , a = n("49042")
          , s = n("38878")
          , u = n("60673")
          , l = n("90770")
          , c = n("88677")
          , d = n("66621");
        let p = {}, f = {}, h, g, m, _, v;
        function y(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            return O("cls", e, C, h, t)
        }
        function S(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            return O("lcp", e, x, m, t)
        }
        function E(e) {
            return O("fid", e, k, g)
        }
        function b(e) {
            return O("ttfb", e, N, _)
        }
        function I(e) {
            return O("inp", e, A, v)
        }
        function T(e, t) {
            return D(e, t),
            !f[e] && (function(e) {
                let t = {};
                "event" === e && (t.durationThreshold = 0),
                (0,
                c.observe)(e, t => {
                    w(e, {
                        entries: t
                    })
                }
                , t)
            }(e),
            f[e] = !0),
            R(e, t)
        }
        function w(e, t) {
            let n = p[e];
            if (n && n.length)
                for (let a of n)
                    try {
                        a(t)
                    } catch (t) {
                        o.DEBUG_BUILD && r.logger.error(`Error while triggering instrumentation handler.
Type: ${e}
Name: ${(0,
                        i.getFunctionName)(a)}
Error:`, t)
                    }
        }
        function C() {
            return (0,
            a.onCLS)(e => {
                w("cls", {
                    metric: e
                }),
                h = e
            }
            , {
                reportAllChanges: !0
            })
        }
        function k() {
            return (0,
            s.onFID)(e => {
                w("fid", {
                    metric: e
                }),
                g = e
            }
            )
        }
        function x() {
            return (0,
            l.onLCP)(e => {
                w("lcp", {
                    metric: e
                }),
                m = e
            }
            , {
                reportAllChanges: !0
            })
        }
        function N() {
            return (0,
            d.onTTFB)(e => {
                w("ttfb", {
                    metric: e
                }),
                _ = e
            }
            )
        }
        function A() {
            return (0,
            u.onINP)(e => {
                w("inp", {
                    metric: e
                }),
                v = e
            }
            )
        }
        function O(e, t, n, r) {
            let i = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
            D(e, t);
            let o;
            return !f[e] && (o = n(),
            f[e] = !0),
            r && t({
                metric: r
            }),
            R(e, t, i ? o : void 0)
        }
        function D(e, t) {
            p[e] = p[e] || [],
            p[e].push(t)
        }
        function R(e, t, n) {
            return () => {
                n && n();
                let r = p[e];
                if (!r)
                    return;
                let i = r.indexOf(t);
                -1 !== i && r.splice(i, 1)
            }
        }
        function M(e) {
            return "duration"in e
        }
    },
    15356: function(e, t, n) {
        "use strict";
        n.d(t, {
            getBrowserPerformanceAPI: function() {
                return c
            },
            isMeasurementValue: function() {
                return s
            },
            msToSec: function() {
                return d
            },
            startAndEndSpan: function() {
                return u
            },
            startStandaloneWebVitalSpan: function() {
                return l
            }
        });
        var r = n("42878")
          , i = n("13036")
          , o = n("65492")
          , a = n("10038");
        function s(e) {
            return "number" == typeof e && isFinite(e)
        }
        function u(e, t, n, o) {
            let {...a} = o
              , s = (0,
            r.spanToJSON)(e).start_timestamp;
            return s && s > t && "function" == typeof e.updateStartTime && e.updateStartTime(t),
            (0,
            i.withActiveSpan)(e, () => {
                let e = (0,
                i.startInactiveSpan)({
                    startTime: t,
                    ...a
                });
                return e && e.end(n),
                e
            }
            )
        }
        function l(e) {
            let t = (0,
            o.getClient)();
            if (!t)
                return;
            let {name: n, transaction: r, attributes: s, startTime: u} = e, {release: l, environment: c} = t.getOptions(), d = t.getIntegrationByName("Replay"), p = d && d.getReplayId(), f = (0,
            o.getCurrentScope)(), h = f.getUser(), g = void 0 !== h ? h.email || h.id || h.ip_address : void 0, m;
            try {
                m = f.getScopeData().contexts.profile.profile_id
            } catch (e) {}
            let _ = {
                release: l,
                environment: c,
                user: g || void 0,
                profile_id: m || void 0,
                replay_id: p || void 0,
                transaction: r,
                "user_agent.original": a.WINDOW.navigator && a.WINDOW.navigator.userAgent,
                ...s
            };
            return (0,
            i.startInactiveSpan)({
                name: n,
                attributes: _,
                startTime: u,
                experimental: {
                    standalone: !0
                }
            })
        }
        function c() {
            return a.WINDOW && a.WINDOW.addEventListener && a.WINDOW.performance
        }
        function d(e) {
            return e / 1e3
        }
    },
    49042: function(e, t, n) {
        "use strict";
        n.d(t, {
            onCLS: function() {
                return c
            }
        });
        var r = n("4735")
          , i = n("24155")
          , o = n("88677")
          , a = n("97911")
          , s = n("31576")
          , u = n("1601");
        let l = [.1, .25]
          , c = function(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            (0,
            u.onFCP)((0,
            s.runOnce)( () => {
                let n = (0,
                i.initMetric)("CLS", 0), s, u = 0, c = [], d = e => {
                    e.forEach(e => {
                        if (!e.hadRecentInput) {
                            let t = c[0]
                              , n = c[c.length - 1];
                            u && t && n && e.startTime - n.startTime < 1e3 && e.startTime - t.startTime < 5e3 ? (u += e.value,
                            c.push(e)) : (u = e.value,
                            c = [e])
                        }
                    }
                    ),
                    u > n.value && (n.value = u,
                    n.entries = c,
                    s())
                }
                , p = (0,
                o.observe)("layout-shift", d);
                p && (s = (0,
                r.bindReporter)(e, n, l, t.reportAllChanges),
                (0,
                a.onHidden)( () => {
                    d(p.takeRecords()),
                    s(!0)
                }
                ),
                setTimeout(s, 0))
            }
            ))
        }
    },
    38878: function(e, t, n) {
        "use strict";
        n.d(t, {
            onFID: function() {
                return d
            }
        });
        var r = n("4735")
          , i = n("19980")
          , o = n("24155")
          , a = n("88677")
          , s = n("97911")
          , u = n("31576")
          , l = n("42484");
        let c = [100, 300]
          , d = function(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            (0,
            l.whenActivated)( () => {
                let n = (0,
                i.getVisibilityWatcher)(), l = (0,
                o.initMetric)("FID"), d, p = e => {
                    e.startTime < n.firstHiddenTime && (l.value = e.processingStart - e.startTime,
                    l.entries.push(e),
                    d(!0))
                }
                , f = e => {
                    e.forEach(p)
                }
                , h = (0,
                a.observe)("first-input", f);
                d = (0,
                r.bindReporter)(e, l, c, t.reportAllChanges),
                h && (0,
                s.onHidden)((0,
                u.runOnce)( () => {
                    f(h.takeRecords()),
                    h.disconnect()
                }
                ))
            }
            )
        }
    },
    60673: function(e, t, n) {
        "use strict";
        n.d(t, {
            onINP: function() {
                return f
            }
        });
        var r = n("10038")
          , i = n("4735")
          , o = n("24155")
          , a = n("74166")
          , s = n("88677")
          , u = n("97911")
          , l = n("59937")
          , c = n("42484")
          , d = n("81271");
        let p = [200, 500]
          , f = function(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            "PerformanceEventTiming"in r.WINDOW && "interactionId"in PerformanceEventTiming.prototype && (0,
            c.whenActivated)( () => {
                (0,
                l.initInteractionCountPolyfill)();
                let n = (0,
                o.initMetric)("INP"), r, c = e => {
                    (0,
                    d.whenIdle)( () => {
                        e.forEach(a.processInteractionEntry);
                        let t = (0,
                        a.estimateP98LongestInteraction)();
                        t && t.latency !== n.value && (n.value = t.latency,
                        n.entries = t.entries,
                        r())
                    }
                    )
                }
                , f = (0,
                s.observe)("event", c, {
                    durationThreshold: null != t.durationThreshold ? t.durationThreshold : a.DEFAULT_DURATION_THRESHOLD
                });
                r = (0,
                i.bindReporter)(e, n, p, t.reportAllChanges),
                f && (f.observe({
                    type: "first-input",
                    buffered: !0
                }),
                (0,
                u.onHidden)( () => {
                    c(f.takeRecords()),
                    r(!0)
                }
                ))
            }
            )
        }
    },
    90770: function(e, t, n) {
        "use strict";
        n.d(t, {
            onLCP: function() {
                return g
            }
        });
        var r = n("10038")
          , i = n("4735")
          , o = n("93009")
          , a = n("19980")
          , s = n("24155")
          , u = n("88677")
          , l = n("97911")
          , c = n("31576")
          , d = n("42484")
          , p = n("81271");
        let f = [2500, 4e3]
          , h = {}
          , g = function(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            (0,
            d.whenActivated)( () => {
                let n = (0,
                a.getVisibilityWatcher)(), d = (0,
                s.initMetric)("LCP"), g, m = e => {
                    !t.reportAllChanges && (e = e.slice(-1)),
                    e.forEach(e => {
                        e.startTime < n.firstHiddenTime && (d.value = Math.max(e.startTime - (0,
                        o.getActivationStart)(), 0),
                        d.entries = [e],
                        g())
                    }
                    )
                }
                , _ = (0,
                u.observe)("largest-contentful-paint", m);
                if (_) {
                    g = (0,
                    i.bindReporter)(e, d, f, t.reportAllChanges);
                    let n = (0,
                    c.runOnce)( () => {
                        !h[d.id] && (m(_.takeRecords()),
                        _.disconnect(),
                        h[d.id] = !0,
                        g(!0))
                    }
                    );
                    ["keydown", "click"].forEach(e => {
                        r.WINDOW.document && addEventListener(e, () => (0,
                        p.whenIdle)(n), {
                            once: !0,
                            capture: !0
                        })
                    }
                    ),
                    (0,
                    l.onHidden)(n)
                }
            }
            )
        }
    },
    4735: function(e, t, n) {
        "use strict";
        n.d(t, {
            bindReporter: function() {
                return i
            }
        });
        let r = (e, t) => e > t[1] ? "poor" : e > t[0] ? "needs-improvement" : "good"
          , i = (e, t, n, i) => {
            let o, a;
            return s => {
                t.value >= 0 && (s || i) && ((a = t.value - (o || 0)) || void 0 === o) && (o = t.value,
                t.delta = a,
                t.rating = r(t.value, n),
                e(t))
            }
        }
    },
    89494: function(e, t, n) {
        "use strict";
        n.d(t, {
            generateUniqueID: function() {
                return r
            }
        });
        let r = () => `v4-${Date.now()}-${Math.floor(Math.random() * (9e12 - 1)) + 1e12}`
    },
    93009: function(e, t, n) {
        "use strict";
        n.d(t, {
            getActivationStart: function() {
                return i
            }
        });
        var r = n("97614");
        let i = () => {
            let e = (0,
            r.getNavigationEntry)();
            return e && e.activationStart || 0
        }
    },
    97614: function(e, t, n) {
        "use strict";
        n.d(t, {
            getNavigationEntry: function() {
                return i
            }
        });
        var r = n("10038");
        let i = function() {
            let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0]
              , t = r.WINDOW.performance && r.WINDOW.performance.getEntriesByType && r.WINDOW.performance.getEntriesByType("navigation")[0];
            if (!e || t && t.responseStart > 0 && t.responseStart < performance.now())
                return t
        }
    },
    19980: function(e, t, n) {
        "use strict";
        n.d(t, {
            getVisibilityWatcher: function() {
                return l
            }
        });
        var r = n("10038");
        let i = -1
          , o = () => "hidden" !== r.WINDOW.document.visibilityState || r.WINDOW.document.prerendering ? 1 / 0 : 0
          , a = e => {
            "hidden" === r.WINDOW.document.visibilityState && i > -1 && (i = "visibilitychange" === e.type ? e.timeStamp : 0,
            u())
        }
          , s = () => {
            addEventListener("visibilitychange", a, !0),
            addEventListener("prerenderingchange", a, !0)
        }
          , u = () => {
            removeEventListener("visibilitychange", a, !0),
            removeEventListener("prerenderingchange", a, !0)
        }
          , l = () => (r.WINDOW.document && i < 0 && (i = o(),
        s()),
        {
            get firstHiddenTime() {
                return i
            }
        })
    },
    24155: function(e, t, n) {
        "use strict";
        n.d(t, {
            initMetric: function() {
                return s
            }
        });
        var r = n("10038")
          , i = n("89494")
          , o = n("93009")
          , a = n("97614");
        let s = (e, t) => {
            let n = (0,
            a.getNavigationEntry)()
              , s = "navigate";
            return n && (r.WINDOW.document && r.WINDOW.document.prerendering || (0,
            o.getActivationStart)() > 0 ? s = "prerender" : r.WINDOW.document && r.WINDOW.document.wasDiscarded ? s = "restore" : n.type && (s = n.type.replace(/_/g, "-"))),
            {
                name: e,
                value: void 0 === t ? -1 : t,
                rating: "good",
                delta: 0,
                entries: [],
                id: (0,
                i.generateUniqueID)(),
                navigationType: s
            }
        }
    },
    74166: function(e, t, n) {
        "use strict";
        n.d(t, {
            DEFAULT_DURATION_THRESHOLD: function() {
                return a
            },
            estimateP98LongestInteraction: function() {
                return u
            },
            processInteractionEntry: function() {
                return c
            }
        });
        var r = n("59937");
        let i = []
          , o = new Map
          , a = 40
          , s = () => (0,
        r.getInteractionCount)() - 0
          , u = () => {
            let e = Math.min(i.length - 1, Math.floor(s() / 50));
            return i[e]
        }
          , l = []
          , c = e => {
            if (l.forEach(t => t(e)),
            !(e.interactionId || "first-input" === e.entryType))
                return;
            let t = i[i.length - 1]
              , n = o.get(e.interactionId);
            if (n || i.length < 10 || t && e.duration > t.latency) {
                if (n)
                    e.duration > n.latency ? (n.entries = [e],
                    n.latency = e.duration) : e.duration === n.latency && e.startTime === (n.entries[0] && n.entries[0].startTime) && n.entries.push(e);
                else {
                    let t = {
                        id: e.interactionId,
                        latency: e.duration,
                        entries: [e]
                    };
                    o.set(t.id, t),
                    i.push(t)
                }
                i.sort( (e, t) => t.latency - e.latency),
                i.length > 10 && i.splice(10).forEach(e => o.delete(e.id))
            }
        }
    },
    88677: function(e, t, n) {
        "use strict";
        n.d(t, {
            observe: function() {
                return r
            }
        });
        let r = (e, t, n) => {
            try {
                if (PerformanceObserver.supportedEntryTypes.includes(e)) {
                    let r = new PerformanceObserver(e => {
                        Promise.resolve().then( () => {
                            t(e.getEntries())
                        }
                        )
                    }
                    );
                    return r.observe(Object.assign({
                        type: e,
                        buffered: !0
                    }, n || {})),
                    r
                }
            } catch (e) {}
        }
    },
    97911: function(e, t, n) {
        "use strict";
        n.d(t, {
            onHidden: function() {
                return i
            }
        });
        var r = n("10038");
        let i = e => {
            let t = t => {
                ("pagehide" === t.type || r.WINDOW.document && "hidden" === r.WINDOW.document.visibilityState) && e(t)
            }
            ;
            r.WINDOW.document && (addEventListener("visibilitychange", t, !0),
            addEventListener("pagehide", t, !0))
        }
    },
    59937: function(e, t, n) {
        "use strict";
        n.d(t, {
            getInteractionCount: function() {
                return l
            },
            initInteractionCountPolyfill: function() {
                return c
            }
        });
        var r = n("88677");
        let i = 0, o = 1 / 0, a = 0, s = e => {
            e.forEach(e => {
                e.interactionId && (o = Math.min(o, e.interactionId),
                i = (a = Math.max(a, e.interactionId)) ? (a - o) / 7 + 1 : 0)
            }
            )
        }
        , u, l = () => u ? i : performance.interactionCount || 0, c = () => {
            !("interactionCount"in performance) && !u && (u = (0,
            r.observe)("event", s, {
                type: "event",
                buffered: !0,
                durationThreshold: 0
            }))
        }
    },
    31576: function(e, t, n) {
        "use strict";
        n.d(t, {
            runOnce: function() {
                return r
            }
        });
        let r = e => {
            let t = !1;
            return () => {
                !t && (e(),
                t = !0)
            }
        }
    },
    42484: function(e, t, n) {
        "use strict";
        n.d(t, {
            whenActivated: function() {
                return i
            }
        });
        var r = n("10038");
        let i = e => {
            r.WINDOW.document && r.WINDOW.document.prerendering ? addEventListener("prerenderingchange", () => e(), !0) : e()
        }
    },
    81271: function(e, t, n) {
        "use strict";
        n.d(t, {
            whenIdle: function() {
                return a
            }
        });
        var r = n("10038")
          , i = n("97911")
          , o = n("31576");
        let a = e => {
            let t = r.WINDOW.requestIdleCallback || r.WINDOW.setTimeout
              , n = -1;
            return e = (0,
            o.runOnce)(e),
            r.WINDOW.document && "hidden" === r.WINDOW.document.visibilityState ? e() : (n = t(e),
            (0,
            i.onHidden)(e)),
            n
        }
    },
    1601: function(e, t, n) {
        "use strict";
        n.d(t, {
            onFCP: function() {
                return c
            }
        });
        var r = n("4735")
          , i = n("93009")
          , o = n("19980")
          , a = n("24155")
          , s = n("88677")
          , u = n("42484");
        let l = [1800, 3e3]
          , c = function(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            (0,
            u.whenActivated)( () => {
                let n = (0,
                o.getVisibilityWatcher)(), u = (0,
                a.initMetric)("FCP"), c, d = (0,
                s.observe)("paint", e => {
                    e.forEach(e => {
                        "first-contentful-paint" === e.name && (d.disconnect(),
                        e.startTime < n.firstHiddenTime && (u.value = Math.max(e.startTime - (0,
                        i.getActivationStart)(), 0),
                        u.entries.push(e),
                        c(!0)))
                    }
                    )
                }
                );
                d && (c = (0,
                r.bindReporter)(e, u, l, t.reportAllChanges))
            }
            )
        }
    },
    66621: function(e, t, n) {
        "use strict";
        n.d(t, {
            onTTFB: function() {
                return d
            }
        });
        var r = n("10038")
          , i = n("4735")
          , o = n("93009")
          , a = n("97614")
          , s = n("24155")
          , u = n("42484");
        let l = [800, 1800]
          , c = e => {
            r.WINDOW.document && r.WINDOW.document.prerendering ? (0,
            u.whenActivated)( () => c(e)) : r.WINDOW.document && "complete" !== r.WINDOW.document.readyState ? addEventListener("load", () => c(e), !0) : setTimeout(e, 0)
        }
          , d = function(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
              , n = (0,
            s.initMetric)("TTFB")
              , r = (0,
            i.bindReporter)(e, n, l, t.reportAllChanges);
            c( () => {
                let e = (0,
                a.getNavigationEntry)();
                e && (n.value = Math.max(e.responseStart - (0,
                o.getActivationStart)(), 0),
                n.entries = [e],
                r(!0))
            }
            )
        }
    },
    10038: function(e, t, n) {
        "use strict";
        n.d(t, {
            WINDOW: function() {
                return r
            }
        });
        let r = n("61191").GLOBAL_OBJ
    },
    79031: function(e, t, n) {
        "use strict";
        n.d(t, {
            buildFeedbackIntegration: function() {
                return b
            },
            feedbackModalIntegration: function() {
                return eP
            },
            feedbackScreenshotIntegration: function() {
                return eH
            },
            getFeedback: function() {
                return I
            },
            sendFeedback: function() {
                return h
            }
        });
        var r = n("61191")
          , i = n("65492")
          , o = n("18126")
          , a = n("87586")
          , s = n("11945")
          , u = n("54683")
          , l = n("60013");
        let c = r.GLOBAL_OBJ
          , d = c.document
          , p = c.navigator
          , f = "Report a Bug"
          , h = function(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                includeReplay: !0
            };
            if (!e.message)
                throw Error("Unable to submit feedback with empty message");
            let n = (0,
            i.getClient)();
            if (!n)
                throw Error("No client setup, cannot send feedback.");
            e.tags && Object.keys(e.tags).length && (0,
            i.getCurrentScope)().setTags(e.tags);
            let r = (0,
            o.captureFeedback)({
                source: "api",
                url: (0,
                a.getLocationHref)(),
                ...e
            }, t);
            return new Promise( (e, t) => {
                let i = setTimeout( () => t("Unable to determine if Feedback was correctly sent."), 5e3)
                  , o = n.on("afterSendEvent", (n, a) => {
                    if (n.event_id === r)
                        return (clearTimeout(i),
                        o(),
                        a && "number" == typeof a.statusCode && a.statusCode >= 200 && a.statusCode < 300) ? e(r) : a && "number" == typeof a.statusCode && 0 === a.statusCode ? t("Unable to send Feedback. This is because of network issues, or because you are using an ad-blocker.") : a && "number" == typeof a.statusCode && 403 === a.statusCode ? t("Unable to send Feedback. This could be because this domain is not in your list of allowed domains.") : t("Unable to send Feedback. This could be because of network issues, or because you are using an ad-blocker")
                }
                )
            }
            )
        }
          , g = "undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__;
        function m(e, t) {
            return {
                ...e,
                ...t,
                tags: {
                    ...e.tags,
                    ...t.tags
                },
                onFormOpen: () => {
                    t.onFormOpen && t.onFormOpen(),
                    e.onFormOpen && e.onFormOpen()
                }
                ,
                onFormClose: () => {
                    t.onFormClose && t.onFormClose(),
                    e.onFormClose && e.onFormClose()
                }
                ,
                onSubmitSuccess: n => {
                    t.onSubmitSuccess && t.onSubmitSuccess(n),
                    e.onSubmitSuccess && e.onSubmitSuccess(n)
                }
                ,
                onSubmitError: n => {
                    t.onSubmitError && t.onSubmitError(n),
                    e.onSubmitError && e.onSubmitError(n)
                }
                ,
                onFormSubmitted: () => {
                    t.onFormSubmitted && t.onFormSubmitted(),
                    e.onFormSubmitted && e.onFormSubmitted()
                }
                ,
                themeDark: {
                    ...e.themeDark,
                    ...t.themeDark
                },
                themeLight: {
                    ...e.themeLight,
                    ...t.themeLight
                }
            }
        }
        function _(e, t) {
            return Object.entries(t).forEach(t => {
                let[n,r] = t;
                e.setAttributeNS(null, n, r)
            }
            ),
            e
        }
        let v = "rgba(88, 74, 192, 1)"
          , y = {
            foreground: "#2b2233",
            background: "#ffffff",
            accentForeground: "white",
            accentBackground: v,
            successColor: "#268d75",
            errorColor: "#df3338",
            border: "1.5px solid rgba(41, 35, 47, 0.13)",
            boxShadow: "0px 4px 24px 0px rgba(43, 34, 51, 0.12)",
            outline: "1px auto var(--accent-background)",
            interactiveFilter: "brightness(95%)"
        }
          , S = {
            foreground: "#ebe6ef",
            background: "#29232f",
            accentForeground: "white",
            accentBackground: v,
            successColor: "#2da98c",
            errorColor: "#f55459",
            border: "1.5px solid rgba(235, 230, 239, 0.15)",
            boxShadow: "0px 4px 24px 0px rgba(43, 34, 51, 0.12)",
            outline: "1px auto var(--accent-background)",
            interactiveFilter: "brightness(150%)"
        };
        function E(e) {
            return `
  --foreground: ${e.foreground};
  --background: ${e.background};
  --accent-foreground: ${e.accentForeground};
  --accent-background: ${e.accentBackground};
  --success-color: ${e.successColor};
  --error-color: ${e.errorColor};
  --border: ${e.border};
  --box-shadow: ${e.boxShadow};
  --outline: ${e.outline};
  --interactive-filter: ${e.interactiveFilter};
  `
        }
        let b = e => {
            let {lazyLoadIntegration: t, getModalIntegration: n, getScreenshotIntegration: r} = e;
            return function() {
                let {id: e="sentry-feedback", autoInject: i=!0, showBranding: o=!0, isEmailRequired: a=!1, isNameRequired: v=!1, showEmail: b=!0, showName: I=!0, enableScreenshot: T=!0, useSentryUser: w={
                    email: "email",
                    name: "username"
                }, tags: C, styleNonce: k, scriptNonce: x, colorScheme: N="system", themeLight: A={}, themeDark: O={}, addScreenshotButtonLabel: D="Add a screenshot", cancelButtonLabel: R="Cancel", confirmButtonLabel: M="Confirm", emailLabel: L="Email", emailPlaceholder: U="your.email@example.org", formTitle: P="Report a Bug", isRequiredLabel: B="(required)", messageLabel: F="Description", messagePlaceholder: W="What's the bug? What did you expect?", nameLabel: $="Name", namePlaceholder: H="Your Name", removeScreenshotButtonLabel: G="Remove screenshot", submitButtonLabel: j="Send Bug Report", successMessageText: z="Thank you for your report!", triggerLabel: Y=f, triggerAriaLabel: q="", onFormOpen: J, onFormClose: V, onSubmitSuccess: K, onSubmitError: X, onFormSubmitted: Q} = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                  , Z = {
                    id: e,
                    autoInject: i,
                    showBranding: o,
                    isEmailRequired: a,
                    isNameRequired: v,
                    showEmail: b,
                    showName: I,
                    enableScreenshot: T,
                    useSentryUser: w,
                    tags: C,
                    styleNonce: k,
                    scriptNonce: x,
                    colorScheme: N,
                    themeDark: O,
                    themeLight: A,
                    triggerLabel: Y,
                    triggerAriaLabel: q,
                    cancelButtonLabel: R,
                    submitButtonLabel: j,
                    confirmButtonLabel: M,
                    formTitle: P,
                    emailLabel: L,
                    emailPlaceholder: U,
                    messageLabel: F,
                    messagePlaceholder: W,
                    nameLabel: $,
                    namePlaceholder: H,
                    successMessageText: z,
                    isRequiredLabel: B,
                    addScreenshotButtonLabel: D,
                    removeScreenshotButtonLabel: G,
                    onFormClose: V,
                    onFormOpen: J,
                    onSubmitError: X,
                    onSubmitSuccess: K,
                    onFormSubmitted: Q
                }
                  , ee = null
                  , et = []
                  , en = e => {
                    if (!ee) {
                        let t = d.createElement("div");
                        t.id = String(e.id),
                        d.body.appendChild(t),
                        (ee = t.attachShadow({
                            mode: "open"
                        })).appendChild(function(e) {
                            let {colorScheme: t, themeDark: n, themeLight: r, styleNonce: i} = e
                              , o = d.createElement("style");
                            return o.textContent = `
:host {
  --font-family: system-ui, 'Helvetica Neue', Arial, sans-serif;
  --font-size: 14px;
  --z-index: 100000;

  --page-margin: 16px;
  --inset: auto 0 0 auto;
  --actor-inset: var(--inset);

  font-family: var(--font-family);
  font-size: var(--font-size);

  ${"system" !== t ? "color-scheme: only light;" : ""}

  ${E("dark" === t ? {
                                ...S,
                                ...n
                            } : {
                                ...y,
                                ...r
                            })}
}

${"system" === t ? `
@media (prefers-color-scheme: dark) {
  :host {
    ${E({
                                ...S,
                                ...n
                            })}
  }
}` : ""}
}
`,
                            i && o.setAttribute("nonce", i),
                            o
                        }(e))
                    }
                    return ee
                }
                  , er = async e => {
                    let i = e.enableScreenshot && !(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(p.userAgent) || /Macintosh/i.test(p.userAgent) && p.maxTouchPoints && p.maxTouchPoints > 1) && !!isSecureContext && !0, o, a;
                    try {
                        o = (n ? n() : await t("feedbackModalIntegration", x))(),
                        (0,
                        s.addIntegration)(o)
                    } catch (e) {
                        throw g && u.logger.error("[Feedback] Error when trying to load feedback integrations. Try using `feedbackSyncIntegration` in your `Sentry.init`."),
                        Error("[Feedback] Missing feedback modal integration!")
                    }
                    try {
                        let e = i ? r ? r() : await t("feedbackScreenshotIntegration", x) : void 0;
                        e && (a = e(),
                        (0,
                        s.addIntegration)(a))
                    } catch (e) {
                        g && u.logger.error("[Feedback] Missing feedback screenshot integration. Proceeding without screenshots.")
                    }
                    let l = o.createDialog({
                        options: {
                            ...e,
                            onFormClose: () => {
                                l && l.close(),
                                e.onFormClose && e.onFormClose()
                            }
                            ,
                            onFormSubmitted: () => {
                                l && l.close(),
                                e.onFormSubmitted && e.onFormSubmitted()
                            }
                        },
                        screenshotIntegration: a,
                        sendFeedback: h,
                        shadow: en(e)
                    });
                    return l
                }
                  , ei = function(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
                      , n = m(Z, t)
                      , r = "string" == typeof e ? d.querySelector(e) : "function" == typeof e.addEventListener ? e : null;
                    if (!r)
                        throw g && u.logger.error("[Feedback] Unable to attach to target element"),
                        Error("Unable to attach to target element");
                    let i = null
                      , o = async () => {
                        !i && (i = await er({
                            ...n,
                            onFormSubmitted: () => {
                                i && i.removeFromDom(),
                                n.onFormSubmitted && n.onFormSubmitted()
                            }
                        })),
                        i.appendToDom(),
                        i.open()
                    }
                    ;
                    r.addEventListener("click", o);
                    let a = () => {
                        et = et.filter(e => e !== a),
                        i && i.removeFromDom(),
                        i = null,
                        r.removeEventListener("click", o)
                    }
                    ;
                    return et.push(a),
                    a
                }
                  , eo = function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                      , t = m(Z, e)
                      , n = en(t)
                      , r = function(e) {
                        let {triggerLabel: t, triggerAriaLabel: n, shadow: r, styleNonce: i} = e
                          , o = d.createElement("button");
                        if (o.type = "button",
                        o.className = "widget__actor",
                        o.ariaHidden = "false",
                        o.ariaLabel = n || t || f,
                        o.appendChild(function() {
                            let e = e => c.document.createElementNS("http://www.w3.org/2000/svg", e)
                              , t = _(e("svg"), {
                                width: "20",
                                height: "20",
                                viewBox: "0 0 20 20",
                                fill: "var(--actor-color, var(--foreground))"
                            })
                              , n = _(e("g"), {
                                clipPath: "url(#clip0_57_80)"
                            })
                              , r = _(e("path"), {
                                "fill-rule": "evenodd",
                                "clip-rule": "evenodd",
                                d: "M15.6622 15H12.3997C12.2129 14.9959 12.031 14.9396 11.8747 14.8375L8.04965 12.2H7.49956V19.1C7.4875 19.3348 7.3888 19.5568 7.22256 19.723C7.05632 19.8892 6.83435 19.9879 6.59956 20H2.04956C1.80193 19.9968 1.56535 19.8969 1.39023 19.7218C1.21511 19.5467 1.1153 19.3101 1.11206 19.0625V12.2H0.949652C0.824431 12.2017 0.700142 12.1783 0.584123 12.1311C0.468104 12.084 0.362708 12.014 0.274155 11.9255C0.185602 11.8369 0.115689 11.7315 0.0685419 11.6155C0.0213952 11.4995 -0.00202913 11.3752 -0.00034808 11.25V3.75C-0.00900498 3.62067 0.0092504 3.49095 0.0532651 3.36904C0.0972798 3.24712 0.166097 3.13566 0.255372 3.04168C0.344646 2.94771 0.452437 2.87327 0.571937 2.82307C0.691437 2.77286 0.82005 2.74798 0.949652 2.75H8.04965L11.8747 0.1625C12.031 0.0603649 12.2129 0.00407221 12.3997 0H15.6622C15.9098 0.00323746 16.1464 0.103049 16.3215 0.278167C16.4966 0.453286 16.5964 0.689866 16.5997 0.9375V3.25269C17.3969 3.42959 18.1345 3.83026 18.7211 4.41679C19.5322 5.22788 19.9878 6.32796 19.9878 7.47502C19.9878 8.62209 19.5322 9.72217 18.7211 10.5333C18.1345 11.1198 17.3969 11.5205 16.5997 11.6974V14.0125C16.6047 14.1393 16.5842 14.2659 16.5395 14.3847C16.4948 14.5035 16.4268 14.6121 16.3394 14.7042C16.252 14.7962 16.147 14.8698 16.0307 14.9206C15.9144 14.9714 15.7891 14.9984 15.6622 15ZM1.89695 10.325H1.88715V4.625H8.33715C8.52423 4.62301 8.70666 4.56654 8.86215 4.4625L12.6872 1.875H14.7247V13.125H12.6872L8.86215 10.4875C8.70666 10.3835 8.52423 10.327 8.33715 10.325H2.20217C2.15205 10.3167 2.10102 10.3125 2.04956 10.3125C1.9981 10.3125 1.94708 10.3167 1.89695 10.325ZM2.98706 12.2V18.1625H5.66206V12.2H2.98706ZM16.5997 9.93612V5.01393C16.6536 5.02355 16.7072 5.03495 16.7605 5.04814C17.1202 5.13709 17.4556 5.30487 17.7425 5.53934C18.0293 5.77381 18.2605 6.06912 18.4192 6.40389C18.578 6.73866 18.6603 7.10452 18.6603 7.47502C18.6603 7.84552 18.578 8.21139 18.4192 8.54616C18.2605 8.88093 18.0293 9.17624 17.7425 9.41071C17.4556 9.64518 17.1202 9.81296 16.7605 9.90191C16.7072 9.91509 16.6536 9.9265 16.5997 9.93612Z"
                            });
                            t.appendChild(n).appendChild(r);
                            let i = e("defs")
                              , o = _(e("clipPath"), {
                                id: "clip0_57_80"
                            })
                              , a = _(e("rect"), {
                                width: "20",
                                height: "20",
                                fill: "white"
                            });
                            return o.appendChild(a),
                            i.appendChild(o),
                            t.appendChild(i).appendChild(o).appendChild(a),
                            t
                        }()),
                        t) {
                            let e = d.createElement("span");
                            e.appendChild(d.createTextNode(t)),
                            o.appendChild(e)
                        }
                        let a = function(e) {
                            let t = d.createElement("style");
                            return t.textContent = `
.widget__actor {
  position: fixed;
  z-index: var(--z-index);
  margin: var(--page-margin);
  inset: var(--actor-inset);

  display: flex;
  align-items: center;
  gap: 8px;
  padding: 16px;

  font-family: inherit;
  font-size: var(--font-size);
  font-weight: 600;
  line-height: 1.14em;
  text-decoration: none;

  background: var(--actor-background, var(--background));
  border-radius: var(--actor-border-radius, 1.7em/50%);
  border: var(--actor-border, var(--border));
  box-shadow: var(--actor-box-shadow, var(--box-shadow));
  color: var(--actor-color, var(--foreground));
  fill: var(--actor-color, var(--foreground));
  cursor: pointer;
  opacity: 1;
  transition: transform 0.2s ease-in-out;
  transform: translate(0, 0) scale(1);
}
.widget__actor[aria-hidden="true"] {
  opacity: 0;
  pointer-events: none;
  visibility: hidden;
  transform: translate(0, 16px) scale(0.98);
}

.widget__actor:hover {
  background: var(--actor-hover-background, var(--background));
  filter: var(--interactive-filter);
}

.widget__actor svg {
  width: 1.14em;
  height: 1.14em;
}

@media (max-width: 600px) {
  .widget__actor span {
    display: none;
  }
}
`,
                            e && t.setAttribute("nonce", e),
                            t
                        }(i);
                        return {
                            el: o,
                            appendToDom() {
                                r.appendChild(a),
                                r.appendChild(o)
                            },
                            removeFromDom() {
                                r.removeChild(o),
                                r.removeChild(a)
                            },
                            show() {
                                o.ariaHidden = "false"
                            },
                            hide() {
                                o.ariaHidden = "true"
                            }
                        }
                    }({
                        triggerLabel: t.triggerLabel,
                        triggerAriaLabel: t.triggerAriaLabel,
                        shadow: n,
                        styleNonce: k
                    });
                    return ei(r.el, {
                        ...t,
                        onFormOpen() {
                            r.hide()
                        },
                        onFormClose() {
                            r.show()
                        },
                        onFormSubmitted() {
                            r.show()
                        }
                    }),
                    r
                };
                return {
                    name: "Feedback",
                    setupOnce() {
                        (0,
                        l.isBrowser)() && Z.autoInject && ("loading" === d.readyState ? d.addEventListener("DOMContentLoaded", () => eo().appendToDom()) : eo().appendToDom())
                    },
                    attachTo: ei,
                    createWidget() {
                        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                          , t = eo(m(Z, e));
                        return t.appendToDom(),
                        t
                    },
                    async createForm() {
                        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        return er(m(Z, e))
                    },
                    remove() {
                        ee && (ee.parentElement && ee.parentElement.remove(),
                        ee = null),
                        et.forEach(e => e()),
                        et = []
                    }
                }
            }
        }
        ;
        function I() {
            let e = (0,
            i.getClient)();
            return e && e.getIntegrationByName("Feedback")
        }
        var T, w, C, k, x, N, A, O = {}, D = [], R = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, M = Array.isArray;
        function L(e, t) {
            for (var n in t)
                e[n] = t[n];
            return e
        }
        function U(e) {
            var t = e.parentNode;
            t && t.removeChild(e)
        }
        function P(e, t, n) {
            var r, i, o, a = {};
            for (o in t)
                "key" == o ? r = t[o] : "ref" == o ? i = t[o] : a[o] = t[o];
            if (arguments.length > 2 && (a.children = arguments.length > 3 ? T.call(arguments, 2) : n),
            "function" == typeof e && null != e.defaultProps)
                for (o in e.defaultProps)
                    void 0 === a[o] && (a[o] = e.defaultProps[o]);
            return B(e, a, r, i, null)
        }
        function B(e, t, n, r, i) {
            var o = {
                type: e,
                props: t,
                key: n,
                ref: r,
                __k: null,
                __: null,
                __b: 0,
                __e: null,
                __d: void 0,
                __c: null,
                constructor: void 0,
                __v: null == i ? ++C : i,
                __i: -1,
                __u: 0
            };
            return null == i && null != w.vnode && w.vnode(o),
            o
        }
        function F(e) {
            return e.children
        }
        function W(e, t) {
            this.props = e,
            this.context = t
        }
        function $(e, t) {
            if (null == t)
                return e.__ ? $(e.__, e.__i + 1) : null;
            for (var n; t < e.__k.length; t++)
                if (null != (n = e.__k[t]) && null != n.__e)
                    return n.__e;
            return "function" == typeof e.type ? $(e) : null
        }
        function H(e) {
            (!e.__d && (e.__d = !0) && k.push(e) && !G.__r++ || x !== w.debounceRendering) && ((x = w.debounceRendering) || N)(G)
        }
        function G() {
            var e, t, n, r = [], i = [];
            for (k.sort(A); e = k.shift(); )
                e.__d && (n = k.length,
                t = function(e, t, n) {
                    var r, i = e.__v, o = i.__e, a = e.__P;
                    if (a)
                        return (r = L({}, i)).__v = i.__v + 1,
                        w.vnode && w.vnode(r),
                        V(a, r, i, e.__n, void 0 !== a.ownerSVGElement, 32 & i.__u ? [o] : null, t, null == o ? $(i) : o, !!(32 & i.__u), n),
                        r.__.__k[r.__i] = r,
                        r.__d = void 0,
                        r.__e != o && function e(t) {
                            var n, r;
                            if (null != (t = t.__) && null != t.__c) {
                                for (t.__e = t.__c.base = null,
                                n = 0; n < t.__k.length; n++)
                                    if (null != (r = t.__k[n]) && null != r.__e) {
                                        t.__e = t.__c.base = r.__e;
                                        break
                                    }
                                return e(t)
                            }
                        }(r),
                        r
                }(e, r, i) || t,
                0 === n || k.length > n ? (K(r, t, i),
                i.length = r.length = 0,
                t = void 0,
                k.sort(A)) : t && w.__c && w.__c(t, D));
            t && K(r, t, i),
            G.__r = 0
        }
        function j(e, t, n, r, i, o, a, s, u, l, c) {
            var d, p, f, h, g, m = r && r.__k || D, _ = t.length;
            for (n.__d = u,
            function(e, t, n) {
                var r, i, o, a, s, u = t.length, l = n.length, c = l, d = 0;
                for (e.__k = [],
                r = 0; r < u; r++)
                    null != (i = e.__k[r] = null == (i = t[r]) || "boolean" == typeof i || "function" == typeof i ? null : "string" == typeof i || "number" == typeof i || "bigint" == typeof i || i.constructor == String ? B(null, i, null, null, i) : M(i) ? B(F, {
                        children: i
                    }, null, null, null) : void 0 === i.constructor && i.__b > 0 ? B(i.type, i.props, i.key, i.ref ? i.ref : null, i.__v) : i) ? (i.__ = e,
                    i.__b = e.__b + 1,
                    s = function(e, t, n, r) {
                        var i = e.key
                          , o = e.type
                          , a = n - 1
                          , s = n + 1
                          , u = t[n];
                        if (null === u || u && i == u.key && o === u.type)
                            return n;
                        if (r > (null != u && 0 == (131072 & u.__u) ? 1 : 0))
                            for (; a >= 0 || s < t.length; ) {
                                if (a >= 0) {
                                    if ((u = t[a]) && 0 == (131072 & u.__u) && i == u.key && o === u.type)
                                        return a;
                                    a--
                                }
                                if (s < t.length) {
                                    if ((u = t[s]) && 0 == (131072 & u.__u) && i == u.key && o === u.type)
                                        return s;
                                    s++
                                }
                            }
                        return -1
                    }(i, n, a = r + d, c),
                    i.__i = s,
                    o = null,
                    -1 !== s && (c--,
                    (o = n[s]) && (o.__u |= 131072)),
                    null == o || null === o.__v ? (-1 == s && d--,
                    "function" != typeof i.type && (i.__u |= 65536)) : s !== a && (s === a + 1 ? d++ : s > a ? c > u - a ? d += s - a : d-- : d = s < a && s == a - 1 ? s - a : 0,
                    s !== r + d && (i.__u |= 65536))) : (o = n[r]) && null == o.key && o.__e && (o.__e == e.__d && (e.__d = $(o)),
                    Q(o, o, !1),
                    n[r] = null,
                    c--);
                if (c)
                    for (r = 0; r < l; r++)
                        null != (o = n[r]) && 0 == (131072 & o.__u) && (o.__e == e.__d && (e.__d = $(o)),
                        Q(o, o))
            }(n, t, m),
            u = n.__d,
            d = 0; d < _; d++)
                null != (f = n.__k[d]) && "boolean" != typeof f && "function" != typeof f && (p = -1 === f.__i ? O : m[f.__i] || O,
                f.__i = d,
                V(e, f, p, i, o, a, s, u, l, c),
                h = f.__e,
                f.ref && p.ref != f.ref && (p.ref && X(p.ref, null, f),
                c.push(f.ref, f.__c || h, f)),
                null == g && null != h && (g = h),
                65536 & f.__u || p.__k === f.__k ? u = function e(t, n, r) {
                    var i, o;
                    if ("function" == typeof t.type) {
                        for (i = t.__k,
                        o = 0; i && o < i.length; o++)
                            i[o] && (i[o].__ = t,
                            n = e(i[o], n, r));
                        return n
                    }
                    t.__e != n && (r.insertBefore(t.__e, n || null),
                    n = t.__e);
                    do
                        n = n && n.nextSibling;
                    while (null != n && 8 === n.nodeType);
                    return n
                }(f, u, e) : "function" == typeof f.type && void 0 !== f.__d ? u = f.__d : h && (u = h.nextSibling),
                f.__d = void 0,
                f.__u &= -196609);
            n.__d = u,
            n.__e = g
        }
        function z(e, t, n) {
            "-" === t[0] ? e.setProperty(t, null == n ? "" : n) : e[t] = null == n ? "" : "number" != typeof n || R.test(t) ? n : n + "px"
        }
        function Y(e, t, n, r, i) {
            var o;
            e: if ("style" === t) {
                if ("string" == typeof n)
                    e.style.cssText = n;
                else {
                    if ("string" == typeof r && (e.style.cssText = r = ""),
                    r)
                        for (t in r)
                            n && t in n || z(e.style, t, "");
                    if (n)
                        for (t in n)
                            r && n[t] === r[t] || z(e.style, t, n[t])
                }
            } else if ("o" === t[0] && "n" === t[1])
                o = t !== (t = t.replace(/(PointerCapture)$|Capture$/i, "$1")),
                t = t.toLowerCase()in e ? t.toLowerCase().slice(2) : t.slice(2),
                e.l || (e.l = {}),
                e.l[t + o] = n,
                n ? r ? n.u = r.u : (n.u = Date.now(),
                e.addEventListener(t, o ? J : q, o)) : e.removeEventListener(t, o ? J : q, o);
            else {
                if (i)
                    t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
                else if ("width" !== t && "height" !== t && "href" !== t && "list" !== t && "form" !== t && "tabIndex" !== t && "download" !== t && "rowSpan" !== t && "colSpan" !== t && "role" !== t && t in e)
                    try {
                        e[t] = null == n ? "" : n;
                        break e
                    } catch (e) {}
                "function" == typeof n || (null == n || !1 === n && "-" !== t[4] ? e.removeAttribute(t) : e.setAttribute(t, n))
            }
        }
        function q(e) {
            if (this.l) {
                var t = this.l[e.type + !1];
                if (e.t) {
                    if (e.t <= t.u)
                        return
                } else
                    e.t = Date.now();
                return t(w.event ? w.event(e) : e)
            }
        }
        function J(e) {
            if (this.l)
                return this.l[e.type + !0](w.event ? w.event(e) : e)
        }
        function V(e, t, n, r, i, o, a, s, u, l) {
            var c, d, p, f, h, g, m, _, v, y, S, E, b, I, C, k = t.type;
            if (void 0 !== t.constructor)
                return null;
            128 & n.__u && (u = !!(32 & n.__u),
            o = [s = t.__e = n.__e]),
            (c = w.__b) && c(t);
            e: if ("function" == typeof k)
                try {
                    if (_ = t.props,
                    v = (c = k.contextType) && r[c.__c],
                    y = c ? v ? v.props.value : c.__ : r,
                    n.__c ? m = (d = t.__c = n.__c).__ = d.__E : ("prototype"in k && k.prototype.render ? t.__c = d = new k(_,y) : (t.__c = d = new W(_,y),
                    d.constructor = k,
                    d.render = Z),
                    v && v.sub(d),
                    d.props = _,
                    d.state || (d.state = {}),
                    d.context = y,
                    d.__n = r,
                    p = d.__d = !0,
                    d.__h = [],
                    d._sb = []),
                    null == d.__s && (d.__s = d.state),
                    null != k.getDerivedStateFromProps && (d.__s == d.state && (d.__s = L({}, d.__s)),
                    L(d.__s, k.getDerivedStateFromProps(_, d.__s))),
                    f = d.props,
                    h = d.state,
                    d.__v = t,
                    p)
                        null == k.getDerivedStateFromProps && null != d.componentWillMount && d.componentWillMount(),
                        null != d.componentDidMount && d.__h.push(d.componentDidMount);
                    else {
                        if (null == k.getDerivedStateFromProps && _ !== f && null != d.componentWillReceiveProps && d.componentWillReceiveProps(_, y),
                        !d.__e && (null != d.shouldComponentUpdate && !1 === d.shouldComponentUpdate(_, d.__s, y) || t.__v === n.__v)) {
                            for (t.__v !== n.__v && (d.props = _,
                            d.state = d.__s,
                            d.__d = !1),
                            t.__e = n.__e,
                            t.__k = n.__k,
                            t.__k.forEach(function(e) {
                                e && (e.__ = t)
                            }),
                            S = 0; S < d._sb.length; S++)
                                d.__h.push(d._sb[S]);
                            d._sb = [],
                            d.__h.length && a.push(d);
                            break e
                        }
                        null != d.componentWillUpdate && d.componentWillUpdate(_, d.__s, y),
                        null != d.componentDidUpdate && d.__h.push(function() {
                            d.componentDidUpdate(f, h, g)
                        })
                    }
                    if (d.context = y,
                    d.props = _,
                    d.__P = e,
                    d.__e = !1,
                    E = w.__r,
                    b = 0,
                    "prototype"in k && k.prototype.render) {
                        for (d.state = d.__s,
                        d.__d = !1,
                        E && E(t),
                        c = d.render(d.props, d.state, d.context),
                        I = 0; I < d._sb.length; I++)
                            d.__h.push(d._sb[I]);
                        d._sb = []
                    } else
                        do
                            d.__d = !1,
                            E && E(t),
                            c = d.render(d.props, d.state, d.context),
                            d.state = d.__s;
                        while (d.__d && ++b < 25);
                    d.state = d.__s,
                    null != d.getChildContext && (r = L(L({}, r), d.getChildContext())),
                    p || null == d.getSnapshotBeforeUpdate || (g = d.getSnapshotBeforeUpdate(f, h)),
                    j(e, M(C = null != c && c.type === F && null == c.key ? c.props.children : c) ? C : [C], t, n, r, i, o, a, s, u, l),
                    d.base = t.__e,
                    t.__u &= -161,
                    d.__h.length && a.push(d),
                    m && (d.__E = d.__ = null)
                } catch (e) {
                    t.__v = null,
                    u || null != o ? (t.__e = s,
                    t.__u |= u ? 160 : 32,
                    o[o.indexOf(s)] = null) : (t.__e = n.__e,
                    t.__k = n.__k),
                    w.__e(e, t, n)
                }
            else
                null == o && t.__v === n.__v ? (t.__k = n.__k,
                t.__e = n.__e) : t.__e = function(e, t, n, r, i, o, a, s, u) {
                    var l, c, d, p, f, h, g, m = n.props, _ = t.props, v = t.type;
                    if ("svg" === v && (i = !0),
                    null != o) {
                        for (l = 0; l < o.length; l++)
                            if ((f = o[l]) && "setAttribute"in f == !!v && (v ? f.localName === v : 3 === f.nodeType)) {
                                e = f,
                                o[l] = null;
                                break
                            }
                    }
                    if (null == e) {
                        if (null === v)
                            return document.createTextNode(_);
                        e = i ? document.createElementNS("http://www.w3.org/2000/svg", v) : document.createElement(v, _.is && _),
                        o = null,
                        s = !1
                    }
                    if (null === v)
                        m === _ || s && e.data === _ || (e.data = _);
                    else {
                        if (o = o && T.call(e.childNodes),
                        m = n.props || O,
                        !s && null != o)
                            for (m = {},
                            l = 0; l < e.attributes.length; l++)
                                m[(f = e.attributes[l]).name] = f.value;
                        for (l in m)
                            f = m[l],
                            "children" == l || ("dangerouslySetInnerHTML" == l ? d = f : "key" === l || l in _ || Y(e, l, null, f, i));
                        for (l in _)
                            f = _[l],
                            "children" == l ? p = f : "dangerouslySetInnerHTML" == l ? c = f : "value" == l ? h = f : "checked" == l ? g = f : "key" === l || s && "function" != typeof f || m[l] === f || Y(e, l, f, m[l], i);
                        if (c)
                            s || d && (c.__html === d.__html || c.__html === e.innerHTML) || (e.innerHTML = c.__html),
                            t.__k = [];
                        else if (d && (e.innerHTML = ""),
                        j(e, M(p) ? p : [p], t, n, r, i && "foreignObject" !== v, o, a, o ? o[0] : n.__k && $(n, 0), s, u),
                        null != o)
                            for (l = o.length; l--; )
                                null != o[l] && U(o[l]);
                        s || (l = "value",
                        void 0 === h || h === e[l] && ("progress" !== v || h) && ("option" !== v || h === m[l]) || Y(e, l, h, m[l], !1),
                        l = "checked",
                        void 0 !== g && g !== e[l] && Y(e, l, g, m[l], !1))
                    }
                    return e
                }(n.__e, t, n, r, i, o, a, u, l);
            (c = w.diffed) && c(t)
        }
        function K(e, t, n) {
            for (var r = 0; r < n.length; r++)
                X(n[r], n[++r], n[++r]);
            w.__c && w.__c(t, e),
            e.some(function(t) {
                try {
                    e = t.__h,
                    t.__h = [],
                    e.some(function(e) {
                        e.call(t)
                    })
                } catch (e) {
                    w.__e(e, t.__v)
                }
            })
        }
        function X(e, t, n) {
            try {
                "function" == typeof e ? e(t) : e.current = t
            } catch (e) {
                w.__e(e, n)
            }
        }
        function Q(e, t, n) {
            var r, i;
            if (w.unmount && w.unmount(e),
            (r = e.ref) && (r.current && r.current !== e.__e || X(r, null, t)),
            null != (r = e.__c)) {
                if (r.componentWillUnmount)
                    try {
                        r.componentWillUnmount()
                    } catch (e) {
                        w.__e(e, t)
                    }
                r.base = r.__P = null,
                e.__c = void 0
            }
            if (r = e.__k)
                for (i = 0; i < r.length; i++)
                    r[i] && Q(r[i], t, n || "function" != typeof e.type);
            n || null == e.__e || U(e.__e),
            e.__ = e.__e = e.__d = void 0
        }
        function Z(e, t, n) {
            return this.constructor(e, n)
        }
        T = D.slice,
        w = {
            __e: function(e, t, n, r) {
                for (var i, o, a; t = t.__; )
                    if ((i = t.__c) && !i.__)
                        try {
                            if ((o = i.constructor) && null != o.getDerivedStateFromError && (i.setState(o.getDerivedStateFromError(e)),
                            a = i.__d),
                            null != i.componentDidCatch && (i.componentDidCatch(e, r || {}),
                            a = i.__d),
                            a)
                                return i.__E = i
                        } catch (t) {
                            e = t
                        }
                throw e
            }
        },
        C = 0,
        W.prototype.setState = function(e, t) {
            var n;
            n = null != this.__s && this.__s !== this.state ? this.__s : this.__s = L({}, this.state),
            "function" == typeof e && (e = e(L({}, n), this.props)),
            e && L(n, e),
            null != e && this.__v && (t && this._sb.push(t),
            H(this))
        }
        ,
        W.prototype.forceUpdate = function(e) {
            this.__v && (this.__e = !0,
            e && this.__h.push(e),
            H(this))
        }
        ,
        W.prototype.render = F,
        k = [],
        N = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout,
        A = function(e, t) {
            return e.__v.__b - t.__v.__b
        }
        ,
        G.__r = 0;
        var ee, et, en, er, ei = 0, eo = [], ea = [], es = w, eu = es.__b, el = es.__r, ec = es.diffed, ed = es.__c, ep = es.unmount, ef = es.__;
        function eh(e, t) {
            es.__h && es.__h(et, e, ei || t),
            ei = 0;
            var n = et.__H || (et.__H = {
                __: [],
                __h: []
            });
            return e >= n.__.length && n.__.push({
                __V: ea
            }),
            n.__[e]
        }
        function eg(e) {
            return ei = 1,
            em(ew, e)
        }
        function em(e, t, n) {
            var r = eh(ee++, 2);
            if (r.t = e,
            !r.__c && (r.__ = [n ? n(t) : ew(void 0, t), function(e) {
                var t = r.__N ? r.__N[0] : r.__[0]
                  , n = r.t(t, e);
                t !== n && (r.__N = [n, r.__[1]],
                r.__c.setState({}))
            }
            ],
            r.__c = et,
            !et.u)) {
                var i = function(e, t, n) {
                    if (!r.__c.__H)
                        return !0;
                    var i = r.__c.__H.__.filter(function(e) {
                        return !!e.__c
                    });
                    if (i.every(function(e) {
                        return !e.__N
                    }))
                        return !o || o.call(this, e, t, n);
                    var a = !1;
                    return i.forEach(function(e) {
                        if (e.__N) {
                            var t = e.__[0];
                            e.__ = e.__N,
                            e.__N = void 0,
                            t !== e.__[0] && (a = !0)
                        }
                    }),
                    !(!a && r.__c.props === e) && (!o || o.call(this, e, t, n))
                };
                et.u = !0;
                var o = et.shouldComponentUpdate
                  , a = et.componentWillUpdate;
                et.componentWillUpdate = function(e, t, n) {
                    if (this.__e) {
                        var r = o;
                        o = void 0,
                        i(e, t, n),
                        o = r
                    }
                    a && a.call(this, e, t, n)
                }
                ,
                et.shouldComponentUpdate = i
            }
            return r.__N || r.__
        }
        function e_(e, t) {
            var n = eh(ee++, 4);
            !es.__s && eT(n.__H, t) && (n.__ = e,
            n.i = t,
            et.__h.push(n))
        }
        function ev(e, t) {
            var n = eh(ee++, 7);
            return eT(n.__H, t) ? (n.__V = e(),
            n.i = t,
            n.__h = e,
            n.__V) : n.__
        }
        function ey(e, t) {
            return ei = 8,
            ev(function() {
                return e
            }, t)
        }
        function eS() {
            for (var e; e = eo.shift(); )
                if (e.__P && e.__H)
                    try {
                        e.__H.__h.forEach(eb),
                        e.__H.__h.forEach(eI),
                        e.__H.__h = []
                    } catch (t) {
                        e.__H.__h = [],
                        es.__e(t, e.__v)
                    }
        }
        es.__b = function(e) {
            et = null,
            eu && eu(e)
        }
        ,
        es.__ = function(e, t) {
            t.__k && t.__k.__m && (e.__m = t.__k.__m),
            ef && ef(e, t)
        }
        ,
        es.__r = function(e) {
            el && el(e),
            ee = 0;
            var t = (et = e.__c).__H;
            t && (en === et ? (t.__h = [],
            et.__h = [],
            t.__.forEach(function(e) {
                e.__N && (e.__ = e.__N),
                e.__V = ea,
                e.__N = e.i = void 0
            })) : (t.__h.forEach(eb),
            t.__h.forEach(eI),
            t.__h = [],
            ee = 0)),
            en = et
        }
        ,
        es.diffed = function(e) {
            ec && ec(e);
            var t = e.__c;
            t && t.__H && (t.__H.__h.length && (1 !== eo.push(t) && er === es.requestAnimationFrame || ((er = es.requestAnimationFrame) || function(e) {
                var t, n = function() {
                    clearTimeout(r),
                    eE && cancelAnimationFrame(t),
                    setTimeout(e)
                }, r = setTimeout(n, 100);
                eE && (t = requestAnimationFrame(n))
            }
            )(eS)),
            t.__H.__.forEach(function(e) {
                e.i && (e.__H = e.i),
                e.__V !== ea && (e.__ = e.__V),
                e.i = void 0,
                e.__V = ea
            })),
            en = et = null
        }
        ,
        es.__c = function(e, t) {
            t.some(function(e) {
                try {
                    e.__h.forEach(eb),
                    e.__h = e.__h.filter(function(e) {
                        return !e.__ || eI(e)
                    })
                } catch (n) {
                    t.some(function(e) {
                        e.__h && (e.__h = [])
                    }),
                    t = [],
                    es.__e(n, e.__v)
                }
            }),
            ed && ed(e, t)
        }
        ,
        es.unmount = function(e) {
            ep && ep(e);
            var t, n = e.__c;
            n && n.__H && (n.__H.__.forEach(function(e) {
                try {
                    eb(e)
                } catch (e) {
                    t = e
                }
            }),
            n.__H = void 0,
            t && es.__e(t, n.__v))
        }
        ;
        var eE = "function" == typeof requestAnimationFrame;
        function eb(e) {
            var t = et
              , n = e.__c;
            "function" == typeof n && (e.__c = void 0,
            n()),
            et = t
        }
        function eI(e) {
            var t = et;
            e.__c = e.__(),
            et = t
        }
        function eT(e, t) {
            return !e || e.length !== t.length || t.some(function(t, n) {
                return t !== e[n]
            })
        }
        function ew(e, t) {
            return "function" == typeof t ? t(e) : t
        }
        let eC = {
            __proto__: null,
            useCallback: ey,
            useContext: function(e) {
                var t = et.context[e.__c]
                  , n = eh(ee++, 9);
                return n.c = e,
                t ? (null == n.__ && (n.__ = !0,
                t.sub(et)),
                t.props.value) : e.__
            },
            useDebugValue: function(e, t) {
                es.useDebugValue && es.useDebugValue(t ? t(e) : e)
            },
            useEffect: function(e, t) {
                var n = eh(ee++, 3);
                !es.__s && eT(n.__H, t) && (n.__ = e,
                n.i = t,
                et.__H.__h.push(n))
            },
            useErrorBoundary: function(e) {
                var t = eh(ee++, 10)
                  , n = eg();
                return t.__ = e,
                et.componentDidCatch || (et.componentDidCatch = function(e, r) {
                    t.__ && t.__(e, r),
                    n[1](e)
                }
                ),
                [n[0], function() {
                    n[1](void 0)
                }
                ]
            },
            useId: function() {
                var e = eh(ee++, 11);
                if (!e.__) {
                    for (var t = et.__v; null !== t && !t.__m && null !== t.__; )
                        t = t.__;
                    var n = t.__m || (t.__m = [0, 0]);
                    e.__ = "P" + n[0] + "-" + n[1]++
                }
                return e.__
            },
            useImperativeHandle: function(e, t, n) {
                ei = 6,
                e_(function() {
                    return "function" == typeof e ? (e(t()),
                    function() {
                        return e(null)
                    }
                    ) : e ? (e.current = t(),
                    function() {
                        return e.current = null
                    }
                    ) : void 0
                }, null == n ? n : n.concat(e))
            },
            useLayoutEffect: e_,
            useMemo: ev,
            useReducer: em,
            useRef: function(e) {
                return ei = 5,
                ev(function() {
                    return {
                        current: e
                    }
                }, [])
            },
            useState: eg
        };
        function ek(e) {
            let {options: t} = e
              , n = ev( () => ({
                __html: function() {
                    let e = e => d.createElementNS("http://www.w3.org/2000/svg", e)
                      , t = _(e("svg"), {
                        width: "32",
                        height: "30",
                        viewBox: "0 0 72 66",
                        fill: "inherit"
                    })
                      , n = _(e("path"), {
                        transform: "translate(11, 11)",
                        d: "M29,2.26a4.67,4.67,0,0,0-8,0L14.42,13.53A32.21,32.21,0,0,1,32.17,40.19H27.55A27.68,27.68,0,0,0,12.09,17.47L6,28a15.92,15.92,0,0,1,9.23,12.17H4.62A.76.76,0,0,1,4,39.06l2.94-5a10.74,10.74,0,0,0-3.36-1.9l-2.91,5a4.54,4.54,0,0,0,1.69,6.24A4.66,4.66,0,0,0,4.62,44H19.15a19.4,19.4,0,0,0-8-17.31l2.31-4A23.87,23.87,0,0,1,23.76,44H36.07a35.88,35.88,0,0,0-16.41-31.8l4.67-8a.77.77,0,0,1,1.05-.27c.53.29,20.29,34.77,20.66,35.17a.76.76,0,0,1-.68,1.13H40.6q.09,1.91,0,3.81h4.78A4.59,4.59,0,0,0,50,39.43a4.49,4.49,0,0,0-.62-2.28Z"
                    });
                    return t.appendChild(n),
                    t
                }().outerHTML
            }), []);
            return P("h2", {
                class: "dialog__header"
            }, P("span", {
                class: "dialog__title"
            }, t.formTitle), t.showBranding ? P("a", {
                class: "brand-link",
                target: "_blank",
                href: "https://sentry.io/welcome/",
                title: "Powered by Sentry",
                rel: "noopener noreferrer",
                dangerouslySetInnerHTML: n
            }) : null)
        }
        function ex(e, t) {
            let n = e.get(t);
            return "string" == typeof n ? n.trim() : ""
        }
        function eN(e) {
            let {options: t, defaultEmail: n, defaultName: r, onFormClose: i, onSubmit: o, onSubmitSuccess: a, onSubmitError: s, showEmail: l, showName: c, screenshotInput: d} = e
              , {tags: p, addScreenshotButtonLabel: f, removeScreenshotButtonLabel: h, cancelButtonLabel: m, emailLabel: _, emailPlaceholder: v, isEmailRequired: y, isNameRequired: S, messageLabel: E, messagePlaceholder: b, nameLabel: I, namePlaceholder: T, submitButtonLabel: w, isRequiredLabel: C} = t
              , [k,x] = eg(null)
              , [N,A] = eg(!1)
              , O = d && d.input
              , [D,R] = eg(null)
              , M = ey(e => {
                R(e),
                A(!1)
            }
            , [])
              , L = ey(e => {
                let t = function(e, t) {
                    let n = [];
                    return t.isNameRequired && !e.name && n.push(t.nameLabel),
                    t.isEmailRequired && !e.email && n.push(t.emailLabel),
                    !e.message && n.push(t.messageLabel),
                    n
                }(e, {
                    emailLabel: _,
                    isEmailRequired: y,
                    isNameRequired: S,
                    messageLabel: E,
                    nameLabel: I
                });
                return t.length > 0 ? x(`Please enter in the following required fields: ${t.join(", ")}`) : x(null),
                0 === t.length
            }
            , [_, y, S, E, I]);
            return P("form", {
                class: "form",
                onSubmit: ey(async e => {
                    try {
                        if (e.preventDefault(),
                        !(e.target instanceof HTMLFormElement))
                            return;
                        let t = new FormData(e.target)
                          , n = await (d && N ? d.value() : void 0)
                          , r = {
                            name: ex(t, "name"),
                            email: ex(t, "email"),
                            message: ex(t, "message"),
                            attachments: n ? [n] : void 0
                        };
                        if (!L(r))
                            return;
                        try {
                            await o({
                                name: r.name,
                                email: r.email,
                                message: r.message,
                                source: "widget",
                                tags: p
                            }, {
                                attachments: r.attachments
                            }),
                            a(r)
                        } catch (e) {
                            g && u.logger.error(e),
                            x(e),
                            s(e)
                        }
                    } catch (e) {}
                }
                , [d && N, a, s])
            }, O && N ? P(O, {
                onError: M
            }) : null, P("div", {
                class: "form__right",
                "data-sentry-feedback": !0
            }, P("div", {
                class: "form__top"
            }, k ? P("div", {
                class: "form__error-container"
            }, k) : null, c ? P("label", {
                for: "name",
                class: "form__label"
            }, P(eA, {
                label: I,
                isRequiredLabel: C,
                isRequired: S
            }), P("input", {
                class: "form__input",
                defaultValue: r,
                id: "name",
                name: "name",
                placeholder: T,
                required: S,
                type: "text"
            })) : P("input", {
                "aria-hidden": !0,
                value: r,
                name: "name",
                type: "hidden"
            }), l ? P("label", {
                for: "email",
                class: "form__label"
            }, P(eA, {
                label: _,
                isRequiredLabel: C,
                isRequired: y
            }), P("input", {
                class: "form__input",
                defaultValue: n,
                id: "email",
                name: "email",
                placeholder: v,
                required: y,
                type: "email"
            })) : P("input", {
                "aria-hidden": !0,
                value: n,
                name: "email",
                type: "hidden"
            }), P("label", {
                for: "message",
                class: "form__label"
            }, P(eA, {
                label: E,
                isRequiredLabel: C,
                isRequired: !0
            }), P("textarea", {
                autoFocus: !0,
                class: "form__input form__input--textarea",
                id: "message",
                name: "message",
                placeholder: b,
                required: !0,
                rows: 5
            })), O ? P("label", {
                for: "screenshot",
                class: "form__label"
            }, P("button", {
                class: "btn btn--default",
                type: "button",
                onClick: () => {
                    R(null),
                    A(e => !e)
                }
            }, N ? h : f), D ? P("div", {
                class: "form__error-container"
            }, D.message) : null) : null), P("div", {
                class: "btn-group"
            }, P("button", {
                class: "btn btn--primary",
                type: "submit"
            }, w), P("button", {
                class: "btn btn--default",
                type: "button",
                onClick: i
            }, m))))
        }
        function eA(e) {
            let {label: t, isRequired: n, isRequiredLabel: r} = e;
            return P("span", {
                class: "form__label__text"
            }, t, n && P("span", {
                class: "form__label__text--required"
            }, r))
        }
        function eO(e) {
            let {open: t, onFormSubmitted: n, ...r} = e
              , i = r.options
              , o = ev( () => ({
                __html: function() {
                    let e = e => c.document.createElementNS("http://www.w3.org/2000/svg", e)
                      , t = _(e("svg"), {
                        width: "16",
                        height: "17",
                        viewBox: "0 0 16 17",
                        fill: "inherit"
                    })
                      , n = _(e("g"), {
                        clipPath: "url(#clip0_57_156)"
                    })
                      , r = _(e("path"), {
                        "fill-rule": "evenodd",
                        "clip-rule": "evenodd",
                        d: "M3.55544 15.1518C4.87103 16.0308 6.41775 16.5 8 16.5C10.1217 16.5 12.1566 15.6571 13.6569 14.1569C15.1571 12.6566 16 10.6217 16 8.5C16 6.91775 15.5308 5.37103 14.6518 4.05544C13.7727 2.73985 12.5233 1.71447 11.0615 1.10897C9.59966 0.503466 7.99113 0.34504 6.43928 0.653721C4.88743 0.962403 3.46197 1.72433 2.34315 2.84315C1.22433 3.96197 0.462403 5.38743 0.153721 6.93928C-0.15496 8.49113 0.00346625 10.0997 0.608967 11.5615C1.21447 13.0233 2.23985 14.2727 3.55544 15.1518ZM4.40546 3.1204C5.46945 2.40946 6.72036 2.03 8 2.03C9.71595 2.03 11.3616 2.71166 12.575 3.92502C13.7883 5.13838 14.47 6.78405 14.47 8.5C14.47 9.77965 14.0905 11.0306 13.3796 12.0945C12.6687 13.1585 11.6582 13.9878 10.476 14.4775C9.29373 14.9672 7.99283 15.0953 6.73777 14.8457C5.48271 14.596 4.32987 13.9798 3.42502 13.075C2.52018 12.1701 1.90397 11.0173 1.65432 9.76224C1.40468 8.50718 1.5328 7.20628 2.0225 6.02404C2.5122 4.8418 3.34148 3.83133 4.40546 3.1204Z"
                    })
                      , i = _(e("path"), {
                        d: "M6.68775 12.4297C6.78586 12.4745 6.89218 12.4984 7 12.5C7.11275 12.4955 7.22315 12.4664 7.32337 12.4145C7.4236 12.3627 7.51121 12.2894 7.58 12.2L12 5.63999C12.0848 5.47724 12.1071 5.28902 12.0625 5.11098C12.0178 4.93294 11.9095 4.77744 11.7579 4.67392C11.6064 4.57041 11.4221 4.52608 11.24 4.54931C11.0579 4.57254 10.8907 4.66173 10.77 4.79999L6.88 10.57L5.13 8.56999C5.06508 8.49566 4.98613 8.43488 4.89768 8.39111C4.80922 8.34735 4.713 8.32148 4.61453 8.31498C4.51605 8.30847 4.41727 8.32147 4.32382 8.35322C4.23038 8.38497 4.14413 8.43484 4.07 8.49999C3.92511 8.63217 3.83692 8.81523 3.82387 9.01092C3.81083 9.2066 3.87393 9.39976 4 9.54999L6.43 12.24C6.50187 12.3204 6.58964 12.385 6.68775 12.4297Z"
                    });
                    t.appendChild(n).append(i, r);
                    let o = e("defs")
                      , a = _(e("clipPath"), {
                        id: "clip0_57_156"
                    })
                      , s = _(e("rect"), {
                        width: "16",
                        height: "16",
                        fill: "white",
                        transform: "translate(0 0.5)"
                    });
                    return a.appendChild(s),
                    o.appendChild(a),
                    t.appendChild(o).appendChild(a).appendChild(s),
                    t
                }().outerHTML
            }), [])
              , [a,s] = eg(null)
              , u = ey( () => {
                a && (clearTimeout(a),
                s(null)),
                n()
            }
            , [a])
              , l = ey(e => {
                r.onSubmitSuccess(e),
                s(setTimeout( () => {
                    n(),
                    s(null)
                }
                , 5e3))
            }
            , [n]);
            return P(F, null, a ? P("div", {
                class: "success__position",
                onClick: u
            }, P("div", {
                class: "success__content"
            }, i.successMessageText, P("span", {
                class: "success__icon",
                dangerouslySetInnerHTML: o
            }))) : P("dialog", {
                class: "dialog",
                onClick: i.onFormClose,
                open: t
            }, P("div", {
                class: "dialog__position"
            }, P("div", {
                class: "dialog__content",
                onClick: e => {
                    e.stopPropagation()
                }
            }, P(ek, {
                options: i
            }), P(eN, {
                ...r,
                onSubmitSuccess: l
            })))))
        }
        let eD = `
.dialog {
  position: fixed;
  z-index: var(--z-index);
  margin: 0;
  inset: 0;

  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  height: 100vh;
  width: 100vw;

  color: var(--dialog-color, var(--foreground));
  fill: var(--dialog-color, var(--foreground));
  line-height: 1.75em;

  background-color: rgba(0, 0, 0, 0.05);
  border: none;
  inset: 0;
  opacity: 1;
  transition: opacity 0.2s ease-in-out;
}

.dialog__position {
  position: fixed;
  z-index: var(--z-index);
  inset: var(--dialog-inset);
  padding: var(--page-margin);
  display: flex;
  max-height: calc(100vh - (2 * var(--page-margin)));
}
@media (max-width: 600px) {
  .dialog__position {
    inset: var(--page-margin);
    padding: 0;
  }
}

.dialog__position:has(.editor) {
  inset: var(--page-margin);
  padding: 0;
}

.dialog:not([open]) {
  opacity: 0;
  pointer-events: none;
  visibility: hidden;
}
.dialog:not([open]) .dialog__content {
  transform: translate(0, -16px) scale(0.98);
}

.dialog__content {
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: var(--dialog-padding, 24px);
  max-width: 100%;
  width: 100%;
  max-height: 100%;
  overflow: auto;

  background: var(--dialog-background, var(--background));
  border-radius: var(--dialog-border-radius, 20px);
  border: var(--dialog-border, var(--border));
  box-shadow: var(--dialog-box-shadow, var(--box-shadow));
  transform: translate(0, 0) scale(1);
  transition: transform 0.2s ease-in-out;
}

`
          , eR = `
.dialog__header {
  display: flex;
  gap: 4px;
  justify-content: space-between;
  font-weight: var(--dialog-header-weight, 600);
  margin: 0;
}
.dialog__title {
  align-self: center;
  width: var(--form-width, 272px);
}

@media (max-width: 600px) {
  .dialog__title {
    width: auto;
  }
}

.dialog__position:has(.editor) .dialog__title {
  width: auto;
}


.brand-link {
  display: inline-flex;
}
.brand-link:focus-visible {
  outline: var(--outline);
}
`
          , eM = `
.form {
  display: flex;
  overflow: auto;
  flex-direction: row;
  gap: 16px;
  flex: 1 0;
}

.form__right {
  flex: 0 0 auto;
  display: flex;
  overflow: auto;
  flex-direction: column;
  justify-content: space-between;
  gap: 20px;
  width: var(--form-width, 100%);
}

.dialog__position:has(.editor) .form__right {
  width: var(--form-width, 272px);
}

.form__top {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.form__error-container {
  color: var(--error-color);
  fill: var(--error-color);
}

.form__label {
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin: 0px;
}

.form__label__text {
  display: flex;
  gap: 4px;
  align-items: center;
}

.form__label__text--required {
  font-size: 0.85em;
}

.form__input {
  font-family: inherit;
  line-height: inherit;
  background: transparent;
  box-sizing: border-box;
  border: var(--input-border, var(--border));
  border-radius: var(--input-border-radius, 6px);
  color: var(--input-color, inherit);
  fill: var(--input-color, inherit);
  font-size: var(--input-font-size, inherit);
  font-weight: var(--input-font-weight, 500);
  padding: 6px 12px;
}

.form__input::placeholder {
  opacity: 0.65;
  color: var(--input-placeholder-color, inherit);
  filter: var(--interactive-filter);
}

.form__input:focus-visible {
  outline: var(--input-focus-outline, var(--outline));
}

.form__input--textarea {
  font-family: inherit;
  resize: vertical;
}

.error {
  color: var(--error-color);
  fill: var(--error-color);
}
`
          , eL = `
.btn-group {
  display: grid;
  gap: 8px;
}

.btn {
  line-height: inherit;
  border: var(--button-border, var(--border));
  border-radius: var(--button-border-radius, 6px);
  cursor: pointer;
  font-family: inherit;
  font-size: var(--button-font-size, inherit);
  font-weight: var(--button-font-weight, 600);
  padding: var(--button-padding, 6px 16px);
}
.btn[disabled] {
  opacity: 0.6;
  pointer-events: none;
}

.btn--primary {
  color: var(--button-primary-color, var(--accent-foreground));
  fill: var(--button-primary-color, var(--accent-foreground));
  background: var(--button-primary-background, var(--accent-background));
  border: var(--button-primary-border, var(--border));
  border-radius: var(--button-primary-border-radius, 6px);
  font-weight: var(--button-primary-font-weight, 500);
}
.btn--primary:hover {
  color: var(--button-primary-hover-color, var(--accent-foreground));
  fill: var(--button-primary-hover-color, var(--accent-foreground));
  background: var(--button-primary-hover-background, var(--accent-background));
  filter: var(--interactive-filter);
}
.btn--primary:focus-visible {
  background: var(--button-primary-hover-background, var(--accent-background));
  filter: var(--interactive-filter);
  outline: var(--button-primary-focus-outline, var(--outline));
}

.btn--default {
  color: var(--button-color, var(--foreground));
  fill: var(--button-color, var(--foreground));
  background: var(--button-background, var(--background));
  border: var(--button-border, var(--border));
  border-radius: var(--button-border-radius, 6px);
  font-weight: var(--button-font-weight, 500);
}
.btn--default:hover {
  color: var(--button-color, var(--foreground));
  fill: var(--button-color, var(--foreground));
  background: var(--button-hover-background, var(--background));
  filter: var(--interactive-filter);
}
.btn--default:focus-visible {
  background: var(--button-hover-background, var(--background));
  filter: var(--interactive-filter);
  outline: var(--button-focus-outline, var(--outline));
}
`
          , eU = `
.success__position {
  position: fixed;
  inset: var(--dialog-inset);
  padding: var(--page-margin);
  z-index: var(--z-index);
}
.success__content {
  background: var(--success-background, var(--background));
  border: var(--success-border, var(--border));
  border-radius: var(--success-border-radius, 1.7em/50%);
  box-shadow: var(--success-box-shadow, var(--box-shadow));
  font-weight: var(--success-font-weight, 600);
  color: var(--success-color);
  fill: var(--success-color);
  padding: 12px 24px;
  line-height: 1.75em;

  display: grid;
  align-items: center;
  grid-auto-flow: column;
  gap: 6px;
  cursor: default;
}

.success__icon {
  display: flex;
}
`
          , eP = () => ({
            name: "FeedbackModal",
            setupOnce() {},
            createDialog: e => {
                let {options: t, screenshotIntegration: n, sendFeedback: r, shadow: o} = e
                  , a = t.useSentryUser
                  , s = function() {
                    let e = (0,
                    i.getCurrentScope)().getUser()
                      , t = (0,
                    i.getIsolationScope)().getUser()
                      , n = (0,
                    i.getGlobalScope)().getUser();
                    return e && Object.keys(e).length ? e : t && Object.keys(t).length ? t : n
                }()
                  , u = d.createElement("div")
                  , l = function(e) {
                    let t = d.createElement("style");
                    return t.textContent = `
:host {
  --dialog-inset: var(--inset);
}

${eD}
${eR}
${eM}
${eL}
${eU}
`,
                    e && t.setAttribute("nonce", e),
                    t
                }(t.styleNonce)
                  , c = ""
                  , p = {
                    get el() {
                        return u
                    },
                    appendToDom() {
                        !o.contains(l) && !o.contains(u) && (o.appendChild(l),
                        o.appendChild(u))
                    },
                    removeFromDom() {
                        o.removeChild(u),
                        o.removeChild(l),
                        d.body.style.overflow = c
                    },
                    open() {
                        h(!0),
                        t.onFormOpen && t.onFormOpen(),
                        c = d.body.style.overflow,
                        d.body.style.overflow = "hidden"
                    },
                    close() {
                        h(!1),
                        d.body.style.overflow = c
                    }
                }
                  , f = n && n.createInput({
                    h: P,
                    hooks: eC,
                    dialog: p,
                    options: t
                })
                  , h = e => {
                    var n, i, o, l, c, d, p;
                    n = P(eO, {
                        options: t,
                        screenshotInput: f,
                        showName: t.showName || t.isNameRequired,
                        showEmail: t.showEmail || t.isEmailRequired,
                        defaultName: a && s && s[a.name] || "",
                        defaultEmail: a && s && s[a.email] || "",
                        onFormClose: () => {
                            h(!1),
                            t.onFormClose && t.onFormClose()
                        }
                        ,
                        onSubmit: r,
                        onSubmitSuccess: e => {
                            h(!1),
                            t.onSubmitSuccess && t.onSubmitSuccess(e)
                        }
                        ,
                        onSubmitError: e => {
                            t.onSubmitError && t.onSubmitError(e)
                        }
                        ,
                        onFormSubmitted: () => {
                            t.onFormSubmitted && t.onFormSubmitted()
                        }
                        ,
                        open: e
                    }),
                    i = u,
                    w.__ && w.__(n, i),
                    c = (l = false,
                    i.__k),
                    d = [],
                    p = [],
                    V(i, n = (!l && o || i).__k = P(F, null, [n]), c || O, O, void 0 !== i.ownerSVGElement, !l && o ? [o] : c ? null : i.firstChild ? T.call(i.childNodes) : null, d, !l && o ? o : c ? c.__e : i.firstChild, l, p),
                    n.__d = void 0,
                    K(d, n, p)
                }
                ;
                return p
            }
        })
          , eB = 33
          , eF = c.devicePixelRatio
          , eW = e => ({
            x: Math.min(e.startX, e.endX),
            y: Math.min(e.startY, e.endY),
            width: Math.abs(e.startX - e.endX),
            height: Math.abs(e.startY - e.endY)
        })
          , e$ = e => {
            let t = e.clientHeight
              , n = e.clientWidth
              , r = e.width / e.height
              , i = t * r
              , o = t;
            i > n && (i = n,
            o = n / r);
            let a = (n - i) / 2
              , s = (t - o) / 2;
            return {
                startX: a,
                startY: s,
                endX: i + a,
                endY: o + s
            }
        }
          , eH = () => ({
            name: "FeedbackScreenshot",
            setupOnce() {},
            createInput: e => {
                let {h: t, hooks: n, dialog: r, options: i} = e
                  , o = d.createElement("canvas");
                return {
                    input: function(e) {
                        let {h: t, hooks: n, imageBuffer: r, dialog: i, options: o} = e
                          , a = function(e) {
                            let {hooks: t} = e;
                            return function(e) {
                                let {onBeforeScreenshot: n, onScreenshot: r, onAfterScreenshot: i, onError: o} = e;
                                t.useEffect( () => {
                                    (async () => {
                                        n();
                                        let e = await p.mediaDevices.getDisplayMedia({
                                            video: {
                                                width: c.innerWidth * c.devicePixelRatio,
                                                height: c.innerHeight * c.devicePixelRatio
                                            },
                                            audio: !1,
                                            monitorTypeSurfaces: "exclude",
                                            preferCurrentTab: !0,
                                            selfBrowserSurface: "include",
                                            surfaceSwitching: "exclude"
                                        })
                                          , t = d.createElement("video");
                                        await new Promise( (n, i) => {
                                            t.srcObject = e,
                                            t.onloadedmetadata = () => {
                                                r(t),
                                                e.getTracks().forEach(e => e.stop()),
                                                n()
                                            }
                                            ,
                                            t.play().catch(i)
                                        }
                                        ),
                                        i()
                                    }
                                    )().catch(o)
                                }
                                , [])
                            }
                        }({
                            hooks: n
                        });
                        return function(e) {
                            let {onError: s} = e
                              , u = n.useMemo( () => ({
                                __html: function(e) {
                                    let t = d.createElement("style")
                                      , n = "#1A141F"
                                      , r = "#302735";
                                    return t.textContent = `
.editor {
  padding: 10px;
  padding-top: 65px;
  padding-bottom: 65px;
  flex-grow: 1;

  background-color: ${n};
  background-image: repeating-linear-gradient(
      -145deg,
      transparent,
      transparent 8px,
      ${n} 8px,
      ${n} 11px
    ),
    repeating-linear-gradient(
      -45deg,
      transparent,
      transparent 15px,
      ${r} 15px,
      ${r} 16px
    );
}

.editor__canvas-container {
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.editor__canvas-container canvas {
  object-fit: contain;
  position: relative;
}

.editor__crop-btn-group {
  padding: 8px;
  gap: 8px;
  border-radius: var(--menu-border-radius, 6px);
  background: var(--button-primary-background, var(--background));
  width: 175px;
  position: absolute;
}

.editor__crop-corner {
  width: 30px;
  height: 30px;
  position: absolute;
  background: none;
  border: 3px solid #ffffff;
}

.editor__crop-corner--top-left {
  cursor: nwse-resize;
  border-right: none;
  border-bottom: none;
}
.editor__crop-corner--top-right {
  cursor: nesw-resize;
  border-left: none;
  border-bottom: none;
}
.editor__crop-corner--bottom-left {
  cursor: nesw-resize;
  border-right: none;
  border-top: none;
}
.editor__crop-corner--bottom-right {
  cursor: nwse-resize;
  border-left: none;
  border-top: none;
}
`,
                                    e && t.setAttribute("nonce", e),
                                    t
                                }(o.styleNonce).innerText
                            }), [])
                              , l = function(e) {
                                let {h: t} = e;
                                return function(e) {
                                    let {top: n, left: r, corner: i, onGrabButton: o} = e;
                                    return t("button", {
                                        class: `editor__crop-corner editor__crop-corner--${i} `,
                                        style: {
                                            top: n,
                                            left: r
                                        },
                                        onMouseDown: e => {
                                            e.preventDefault(),
                                            o(e, i)
                                        }
                                        ,
                                        onClick: e => {
                                            e.preventDefault()
                                        }
                                    })
                                }
                            }({
                                h: t
                            })
                              , p = n.useRef(null)
                              , f = n.useRef(null)
                              , h = n.useRef(null)
                              , [g,m] = n.useState({
                                startX: 0,
                                startY: 0,
                                endX: 0,
                                endY: 0
                            })
                              , [_,v] = n.useState(!1)
                              , [y,S] = n.useState(!1);
                            function E() {
                                let e = h.current
                                  , t = eW(e$(r));
                                if (e) {
                                    e.width = t.width * eF,
                                    e.height = t.height * eF,
                                    e.style.width = `${t.width}px`,
                                    e.style.height = `${t.height}px`;
                                    let n = e.getContext("2d");
                                    n && n.scale(eF, eF)
                                }
                                let n = f.current;
                                n && (n.style.width = `${t.width}px`,
                                n.style.height = `${t.height}px`),
                                m({
                                    startX: 0,
                                    startY: 0,
                                    endX: t.width,
                                    endY: t.height
                                })
                            }
                            function b(e, t) {
                                v(!1),
                                S(!0);
                                let n = I(t)
                                  , r = () => {
                                    d.removeEventListener("mousemove", n),
                                    d.removeEventListener("mouseup", r),
                                    v(!0),
                                    S(!1)
                                }
                                ;
                                d.addEventListener("mouseup", r),
                                d.addEventListener("mousemove", n)
                            }
                            n.useEffect( () => {
                                c.addEventListener("resize", E, !1)
                            }
                            , []),
                            n.useEffect( () => {
                                let e = h.current;
                                if (!e)
                                    return;
                                let t = e.getContext("2d");
                                if (!t)
                                    return;
                                let n = eW(e$(r))
                                  , i = eW(g);
                                t.clearRect(0, 0, n.width, n.height),
                                t.fillStyle = "rgba(0, 0, 0, 0.5)",
                                t.fillRect(0, 0, n.width, n.height),
                                t.clearRect(i.x, i.y, i.width, i.height),
                                t.strokeStyle = "#ffffff",
                                t.lineWidth = 3,
                                t.strokeRect(i.x + 1, i.y + 1, i.width - 2, i.height - 2),
                                t.strokeStyle = "#000000",
                                t.lineWidth = 1,
                                t.strokeRect(i.x + 3, i.y + 3, i.width - 6, i.height - 6)
                            }
                            , [g]);
                            let I = n.useCallback(e => function(t) {
                                if (!h.current)
                                    return;
                                let n = h.current
                                  , r = n.getBoundingClientRect()
                                  , i = t.clientX - r.x
                                  , o = t.clientY - r.y;
                                switch (e) {
                                case "top-left":
                                    m(e => ({
                                        ...e,
                                        startX: Math.min(Math.max(0, i), e.endX - eB),
                                        startY: Math.min(Math.max(0, o), e.endY - eB)
                                    }));
                                    break;
                                case "top-right":
                                    m(e => ({
                                        ...e,
                                        endX: Math.max(Math.min(i, n.width / eF), e.startX + eB),
                                        startY: Math.min(Math.max(0, o), e.endY - eB)
                                    }));
                                    break;
                                case "bottom-left":
                                    m(e => ({
                                        ...e,
                                        startX: Math.min(Math.max(0, i), e.endX - eB),
                                        endY: Math.max(Math.min(o, n.height / eF), e.startY + eB)
                                    }));
                                    break;
                                case "bottom-right":
                                    m(e => ({
                                        ...e,
                                        endX: Math.max(Math.min(i, n.width / eF), e.startX + eB),
                                        endY: Math.max(Math.min(o, n.height / eF), e.startY + eB)
                                    }))
                                }
                            }
                            , [])
                              , T = n.useRef({
                                initialX: 0,
                                initialY: 0
                            });
                            return a({
                                onBeforeScreenshot: n.useCallback( () => {
                                    i.el.style.display = "none"
                                }
                                , []),
                                onScreenshot: n.useCallback(e => {
                                    let t = r.getContext("2d");
                                    if (!t)
                                        throw Error("Could not get canvas context");
                                    r.width = e.videoWidth,
                                    r.height = e.videoHeight,
                                    r.style.width = "100%",
                                    r.style.height = "100%",
                                    t.drawImage(e, 0, 0)
                                }
                                , [r]),
                                onAfterScreenshot: n.useCallback( () => {
                                    i.el.style.display = "block";
                                    let e = p.current;
                                    e && e.appendChild(r),
                                    E()
                                }
                                , []),
                                onError: n.useCallback(e => {
                                    i.el.style.display = "block",
                                    s(e)
                                }
                                , [])
                            }),
                            t("div", {
                                class: "editor"
                            }, t("style", {
                                nonce: o.styleNonce,
                                dangerouslySetInnerHTML: u
                            }), t("div", {
                                class: "editor__canvas-container",
                                ref: p
                            }, t("div", {
                                class: "editor__crop-container",
                                style: {
                                    position: "absolute",
                                    zIndex: 1
                                },
                                ref: f
                            }, t("canvas", {
                                onMouseDown: function(e) {
                                    if (y)
                                        return;
                                    T.current = {
                                        initialX: e.clientX,
                                        initialY: e.clientY
                                    };
                                    let t = e => {
                                        let t = h.current;
                                        if (!t)
                                            return;
                                        let n = e.clientX - T.current.initialX
                                          , r = e.clientY - T.current.initialY;
                                        m(i => {
                                            let o = Math.max(0, Math.min(i.startX + n, t.width / eF - (i.endX - i.startX)))
                                              , a = Math.max(0, Math.min(i.startY + r, t.height / eF - (i.endY - i.startY)))
                                              , s = o + (i.endX - i.startX)
                                              , u = a + (i.endY - i.startY);
                                            return T.current.initialX = e.clientX,
                                            T.current.initialY = e.clientY,
                                            {
                                                startX: o,
                                                startY: a,
                                                endX: s,
                                                endY: u
                                            }
                                        }
                                        )
                                    }
                                      , n = () => {
                                        d.removeEventListener("mousemove", t),
                                        d.removeEventListener("mouseup", n)
                                    }
                                    ;
                                    d.addEventListener("mousemove", t),
                                    d.addEventListener("mouseup", n)
                                },
                                style: {
                                    position: "absolute",
                                    cursor: _ ? "move" : "auto"
                                },
                                ref: h
                            }), t(l, {
                                left: g.startX - 3,
                                top: g.startY - 3,
                                onGrabButton: b,
                                corner: "top-left"
                            }), t(l, {
                                left: g.endX - 30 + 3,
                                top: g.startY - 3,
                                onGrabButton: b,
                                corner: "top-right"
                            }), t(l, {
                                left: g.startX - 3,
                                top: g.endY - 30 + 3,
                                onGrabButton: b,
                                corner: "bottom-left"
                            }), t(l, {
                                left: g.endX - 30 + 3,
                                top: g.endY - 30 + 3,
                                onGrabButton: b,
                                corner: "bottom-right"
                            }), t("div", {
                                style: {
                                    left: Math.max(0, g.endX - 191),
                                    top: Math.max(0, g.endY + 8),
                                    display: _ ? "flex" : "none"
                                },
                                class: "editor__crop-btn-group"
                            }, t("button", {
                                onClick: e => {
                                    e.preventDefault(),
                                    h.current && m({
                                        startX: 0,
                                        startY: 0,
                                        endX: h.current.width / eF,
                                        endY: h.current.height / eF
                                    }),
                                    v(!1)
                                }
                                ,
                                class: "btn btn--default"
                            }, o.cancelButtonLabel), t("button", {
                                onClick: e => {
                                    e.preventDefault(),
                                    !function() {
                                        let e = d.createElement("canvas")
                                          , t = eW(e$(r))
                                          , n = eW(g);
                                        e.width = n.width * eF,
                                        e.height = n.height * eF;
                                        let i = e.getContext("2d");
                                        i && r && i.drawImage(r, n.x / t.width * r.width, n.y / t.height * r.height, n.width / t.width * r.width, n.height / t.height * r.height, 0, 0, e.width, e.height);
                                        let o = r.getContext("2d");
                                        o && (o.clearRect(0, 0, r.width, r.height),
                                        r.width = e.width,
                                        r.height = e.height,
                                        r.style.width = `${n.width}px`,
                                        r.style.height = `${n.height}px`,
                                        o.drawImage(e, 0, 0),
                                        E())
                                    }(),
                                    v(!1)
                                }
                                ,
                                class: "btn btn--primary"
                            }, o.confirmButtonLabel)))))
                        }
                    }({
                        h: t,
                        hooks: n,
                        imageBuffer: o,
                        dialog: r,
                        options: i
                    }),
                    value: async () => {
                        let e = await new Promise(e => {
                            o.toBlob(e, "image/png")
                        }
                        );
                        if (e) {
                            let t = new Uint8Array(await e.arrayBuffer());
                            return {
                                data: t,
                                filename: "screenshot.png",
                                contentType: "application/png"
                            }
                        }
                    }
                }
            }
        })
    },
    60356: function(e, t, n) {
        "use strict";
        n.d(t, {
            replayCanvasIntegration: function() {
                return M
            }
        });
        var r = n("9984"), i = n("11945"), o, a;
        (a = o || (o = {}))[a.Document = 0] = "Document",
        a[a.DocumentType = 1] = "DocumentType",
        a[a.Element = 2] = "Element",
        a[a.Text = 3] = "Text",
        a[a.CDATA = 4] = "CDATA",
        a[a.Comment = 5] = "Comment";
        function s(e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1 / 0
              , r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
            return !e || e.nodeType !== e.ELEMENT_NODE || r > n ? -1 : t(e) ? r : s(e.parentNode, t, n, r + 1)
        }
        function u(e, t) {
            return n => {
                if (null === n)
                    return !1;
                try {
                    if (e) {
                        if ("string" == typeof e) {
                            if (n.matches(`.${e}`))
                                return !0
                        } else if (function(e, t) {
                            for (let n = e.classList.length; n--; ) {
                                let r = e.classList[n];
                                if (t.test(r))
                                    return !0
                            }
                            return !1
                        }(n, e))
                            return !0
                    }
                    if (t && n.matches(t))
                        return !0;
                    return !1
                } catch (e) {
                    return !1
                }
            }
        }
        let l = "Please stop import mirror directly. Instead of that,\r\nnow you can use replayer.getMirror() to access the mirror instance of a replayer,\r\nor you can use record.mirror to access the mirror instance during recording."
          , c = {
            map: {},
            getId: () => (console.error(l),
            -1),
            getNode: () => (console.error(l),
            null),
            removeNodeFromMap() {
                console.error(l)
            },
            has: () => (console.error(l),
            !1),
            reset() {
                console.error(l)
            }
        };
        function d(e, t, n, r) {
            let i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : window
              , o = i.Object.getOwnPropertyDescriptor(e, t);
            return i.Object.defineProperty(e, t, r ? n : {
                set(e) {
                    _( () => {
                        n.set.call(this, e)
                    }
                    , 0),
                    o && o.set && o.set.call(this, e)
                }
            }),
            () => d(e, t, o || {}, !0)
        }
        function p(e, t, n) {
            try {
                if (!(t in e))
                    return () => {}
                    ;
                let r = e[t]
                  , i = n(r);
                return "function" == typeof i && (i.prototype = i.prototype || {},
                Object.defineProperties(i, {
                    __rrweb_original__: {
                        enumerable: !1,
                        value: r
                    }
                })),
                e[t] = i,
                () => {
                    e[t] = r
                }
            } catch (e) {
                return () => {}
            }
        }
        "undefined" != typeof window && window.Proxy && window.Reflect && (c = new Proxy(c,{
            get: (e, t, n) => ("map" === t && console.error(l),
            Reflect.get(e, t, n))
        })),
        /[1-9][0-9]{12}/.test(Date.now().toString());
        function f(e, t, n, r, i) {
            if (!e)
                return !1;
            var o;
            let a = (o = e) ? o.nodeType === o.ELEMENT_NODE ? o : o.parentElement : null;
            if (!a)
                return !1;
            let l = s(a, u(t, n))
              , c = -1;
            return !(l < 0) && (r && (c = s(a, u(null, r))),
            !!(l > -1) && !!(c < 0) || l < c)
        }
        let h = {};
        function g(e) {
            let t = h[e];
            if (t)
                return t;
            let n = window.document
              , r = window[e];
            if (n && "function" == typeof n.createElement)
                try {
                    let t = n.createElement("iframe");
                    t.hidden = !0,
                    n.head.appendChild(t);
                    let i = t.contentWindow;
                    i && i[e] && (r = i[e]),
                    n.head.removeChild(t)
                } catch (e) {}
            return h[e] = r.bind(window)
        }
        function m() {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
                t[n] = arguments[n];
            return g("requestAnimationFrame")(...t)
        }
        function _() {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
                t[n] = arguments[n];
            return g("setTimeout")(...t)
        }
        var v, y = ((v = y || {})[v["2D"] = 0] = "2D",
        v[v.WebGL = 1] = "WebGL",
        v[v.WebGL2 = 2] = "WebGL2",
        v);
        let S, E = e => S ? function() {
            for (var t = arguments.length, n = Array(t), r = 0; r < t; r++)
                n[r] = arguments[r];
            try {
                return e(...n)
            } catch (e) {
                if (S && !0 === S(e))
                    return () => {}
                    ;
                throw e
            }
        }
        : e;
        for (var b = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", I = "undefined" == typeof Uint8Array ? [] : new Uint8Array(256), T = 0; T < b.length; T++)
            I[b.charCodeAt(T)] = T;
        var w = function(e) {
            var t = new Uint8Array(e), n, r = t.length, i = "";
            for (n = 0; n < r; n += 3)
                i += b[t[n] >> 2] + b[(3 & t[n]) << 4 | t[n + 1] >> 4] + b[(15 & t[n + 1]) << 2 | t[n + 2] >> 6] + b[63 & t[n + 2]];
            return r % 3 == 2 ? i = i.substring(0, i.length - 1) + "=" : r % 3 == 1 && (i = i.substring(0, i.length - 2) + "=="),
            i
        };
        let C = new Map
          , k = (e, t, n) => {
            if (!e || !(N(e, t) || "object" == typeof e))
                return;
            let r = e.constructor.name;
            var i, o;
            let a, s = (i = n,
            o = r,
            !(a = C.get(i)) && (a = new Map,
            C.set(i, a)),
            !a.has(o) && a.set(o, []),
            a.get(o)), u = s.indexOf(e);
            return -1 === u && (u = s.length,
            s.push(e)),
            u
        }
          , x = (e, t, n) => e.map(e => (function e(t, n, r) {
            if (t instanceof Array)
                return t.map(t => e(t, n, r));
            if (null === t)
                ;
            else if (t instanceof Float32Array || t instanceof Float64Array || t instanceof Int32Array || t instanceof Uint32Array || t instanceof Uint8Array || t instanceof Uint16Array || t instanceof Int16Array || t instanceof Int8Array || t instanceof Uint8ClampedArray)
                return {
                    rr_type: t.constructor.name,
                    args: [Object.values(t)]
                };
            else if (t instanceof ArrayBuffer) {
                let e = t.constructor.name;
                return {
                    rr_type: e,
                    base64: w(t)
                }
            } else if (t instanceof DataView)
                return {
                    rr_type: t.constructor.name,
                    args: [e(t.buffer, n, r), t.byteOffset, t.byteLength]
                };
            else if (t instanceof HTMLImageElement) {
                let e = t.constructor.name
                  , {src: n} = t;
                return {
                    rr_type: e,
                    src: n
                }
            } else if (t instanceof HTMLCanvasElement)
                return {
                    rr_type: "HTMLImageElement",
                    src: t.toDataURL()
                };
            else if (t instanceof ImageData)
                return {
                    rr_type: t.constructor.name,
                    args: [e(t.data, n, r), t.width, t.height]
                };
            else if (N(t, n) || "object" == typeof t) {
                let e = t.constructor.name;
                return {
                    rr_type: e,
                    index: k(t, n, r)
                }
            }
            return t
        }
        )(e, t, n))
          , N = (e, t) => !!["WebGLActiveInfo", "WebGLBuffer", "WebGLFramebuffer", "WebGLProgram", "WebGLRenderbuffer", "WebGLShader", "WebGLShaderPrecisionFormat", "WebGLTexture", "WebGLUniformLocation", "WebGLVertexArrayObject", "WebGLVertexArrayObjectOES"].filter(e => "function" == typeof t[e]).find(n => e instanceof t[n]);
        function A(e, t, n, r, i) {
            let o = [];
            try {
                let a = p(e.HTMLCanvasElement.prototype, "getContext", function(e) {
                    return function(o) {
                        for (var a = arguments.length, s = Array(a > 1 ? a - 1 : 0), u = 1; u < a; u++)
                            s[u - 1] = arguments[u];
                        if (!f(this, t, n, r, !0)) {
                            var l;
                            let e = (l = o,
                            "experimental-webgl" === l ? "webgl" : l);
                            if (!("__context"in this) && (this.__context = e),
                            i && ["webgl", "webgl2"].includes(e)) {
                                if (s[0] && "object" == typeof s[0]) {
                                    let e = s[0];
                                    !e.preserveDrawingBuffer && (e.preserveDrawingBuffer = !0)
                                } else
                                    s.splice(0, 1, {
                                        preserveDrawingBuffer: !0
                                    })
                            }
                        }
                        return e.apply(this, [o, ...s])
                    }
                });
                o.push(a)
            } catch (e) {
                console.error("failed to patch HTMLCanvasElement.prototype.getContext")
            }
            return () => {
                o.forEach(e => e())
            }
        }
        function O(e, t, n, r, i, o, a, s) {
            let u = [];
            for (let a of Object.getOwnPropertyNames(e))
                if (!["isContextLost", "canvas", "drawingBufferWidth", "drawingBufferHeight"].includes(a))
                    try {
                        if ("function" != typeof e[a])
                            continue;
                        let l = p(e, a, function(e) {
                            return function() {
                                for (var u = arguments.length, l = Array(u), c = 0; c < u; c++)
                                    l[c] = arguments[c];
                                let d = e.apply(this, l);
                                if (k(d, s, this),
                                "tagName"in this.canvas && !f(this.canvas, r, i, o, !0)) {
                                    let e = x(l, s, this)
                                      , r = {
                                        type: t,
                                        property: a,
                                        args: e
                                    };
                                    n(this.canvas, r)
                                }
                                return d
                            }
                        });
                        u.push(l)
                    } catch (i) {
                        let r = d(e, a, {
                            set(e) {
                                n(this.canvas, {
                                    type: t,
                                    property: a,
                                    args: [e],
                                    setter: !0
                                })
                            }
                        });
                        u.push(r)
                    }
            return u
        }
        class D {
            reset() {
                this.pendingCanvasMutations.clear(),
                this.restoreHandlers.forEach(e => {
                    try {
                        e()
                    } catch (e) {}
                }
                ),
                this.restoreHandlers = [],
                this.windowsSet = new WeakSet,
                this.windows = [],
                this.shadowDoms = new Set,
                (0,
                r._optionalChain)([this, "access", e => e.worker, "optionalAccess", e => e.terminate, "call", e => e()]),
                this.worker = null,
                this.snapshotInProgressMap = new Map
            }
            freeze() {
                this.frozen = !0
            }
            unfreeze() {
                this.frozen = !1
            }
            lock() {
                this.locked = !0
            }
            unlock() {
                this.locked = !1
            }
            constructor(e) {
                this.pendingCanvasMutations = new Map,
                this.rafStamps = {
                    latestId: 0,
                    invokeId: null
                },
                this.shadowDoms = new Set,
                this.windowsSet = new WeakSet,
                this.windows = [],
                this.restoreHandlers = [],
                this.frozen = !1,
                this.locked = !1,
                this.snapshotInProgressMap = new Map,
                this.worker = null,
                this.processMutation = (e, t) => {
                    (this.rafStamps.invokeId && this.rafStamps.latestId !== this.rafStamps.invokeId || !this.rafStamps.invokeId) && (this.rafStamps.invokeId = this.rafStamps.latestId),
                    !this.pendingCanvasMutations.has(e) && this.pendingCanvasMutations.set(e, []),
                    this.pendingCanvasMutations.get(e).push(t)
                }
                ;
                let {sampling: t="all", win: n, blockClass: r, blockSelector: i, unblockSelector: o, maxCanvasSize: a, recordCanvas: s, dataURLOptions: u, errorHandler: l} = e;
                if (this.mutationCb = e.mutationCb,
                this.mirror = e.mirror,
                this.options = e,
                l)
                    S = l;
                if ((s && "number" == typeof t || e.enableManualSnapshot) && (this.worker = this.initFPSWorker()),
                this.addWindow(n),
                e.enableManualSnapshot)
                    return;
                E( () => {
                    s && "all" === t && (this.startRAFTimestamping(),
                    this.startPendingCanvasMutationFlusher()),
                    s && "number" == typeof t && this.initCanvasFPSObserver(t, r, i, o, a, {
                        dataURLOptions: u
                    })
                }
                )()
            }
            addWindow(e) {
                let {sampling: t="all", blockClass: n, blockSelector: r, unblockSelector: i, recordCanvas: o, enableManualSnapshot: a} = this.options;
                if (!this.windowsSet.has(e)) {
                    if (a) {
                        this.windowsSet.add(e),
                        this.windows.push(new WeakRef(e));
                        return
                    }
                    E( () => {
                        if (o && "all" === t && this.initCanvasMutationObserver(e, n, r, i),
                        o && "number" == typeof t) {
                            let t = A(e, n, r, i, !0);
                            this.restoreHandlers.push( () => {
                                t()
                            }
                            )
                        }
                    }
                    )(),
                    this.windowsSet.add(e),
                    this.windows.push(new WeakRef(e))
                }
            }
            addShadowRoot(e) {
                this.shadowDoms.add(new WeakRef(e))
            }
            resetShadowRoots() {
                this.shadowDoms = new Set
            }
            initFPSWorker() {
                let e = new Worker(function() {
                    let e = new Blob(['for(var e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",t="undefined"==typeof Uint8Array?[]:new Uint8Array(256),a=0;a<64;a++)t[e.charCodeAt(a)]=a;var n=function(t){var a,n=new Uint8Array(t),r=n.length,s="";for(a=0;a<r;a+=3)s+=e[n[a]>>2],s+=e[(3&n[a])<<4|n[a+1]>>4],s+=e[(15&n[a+1])<<2|n[a+2]>>6],s+=e[63&n[a+2]];return r%3==2?s=s.substring(0,s.length-1)+"=":r%3==1&&(s=s.substring(0,s.length-2)+"=="),s};const r=new Map,s=new Map;const i=self;i.onmessage=async function(e){if(!("OffscreenCanvas"in globalThis))return i.postMessage({id:e.data.id});{const{id:t,bitmap:a,width:o,height:f,maxCanvasSize:c,dataURLOptions:g}=e.data,u=async function(e,t,a){const r=e+"-"+t;if("OffscreenCanvas"in globalThis){if(s.has(r))return s.get(r);const i=new OffscreenCanvas(e,t);i.getContext("2d");const o=await i.convertToBlob(a),f=await o.arrayBuffer(),c=n(f);return s.set(r,c),c}return""}(o,f,g),[h,d]=function(e,t,a){if(!a)return[e,t];const[n,r]=a;if(e<=n&&t<=r)return[e,t];let s=e,i=t;return s>n&&(i=Math.floor(n*t/e),s=n),i>r&&(s=Math.floor(r*e/t),i=r),[s,i]}(o,f,c),l=new OffscreenCanvas(h,d),w=l.getContext("bitmaprenderer"),p=h===o&&d===f?a:await createImageBitmap(a,{resizeWidth:h,resizeHeight:d,resizeQuality:"low"});w.transferFromImageBitmap(p),a.close();const y=await l.convertToBlob(g),v=y.type,b=await y.arrayBuffer(),m=n(b);if(p.close(),!r.has(t)&&await u===m)return r.set(t,m),i.postMessage({id:t});if(r.get(t)===m)return i.postMessage({id:t});i.postMessage({id:t,type:v,base64:m,width:o,height:f}),r.set(t,m)}};']);
                    return URL.createObjectURL(e)
                }());
                return e.onmessage = e => {
                    let t = e.data
                      , {id: n} = t;
                    if (this.snapshotInProgressMap.set(n, !1),
                    !("base64"in t))
                        return;
                    let {base64: r, type: i, width: o, height: a} = t;
                    this.mutationCb({
                        id: n,
                        type: y["2D"],
                        commands: [{
                            property: "clearRect",
                            args: [0, 0, o, a]
                        }, {
                            property: "drawImage",
                            args: [{
                                rr_type: "ImageBitmap",
                                args: [{
                                    rr_type: "Blob",
                                    data: [{
                                        rr_type: "ArrayBuffer",
                                        base64: r
                                    }],
                                    type: i
                                }]
                            }, 0, 0, o, a]
                        }]
                    })
                }
                ,
                e
            }
            initCanvasFPSObserver(e, t, n, r, i, o) {
                let a = this.takeSnapshot(!1, e, t, n, r, i, o.dataURLOptions);
                this.restoreHandlers.push( () => {
                    cancelAnimationFrame(a)
                }
                )
            }
            initCanvasMutationObserver(e, t, n, r) {
                let i = A(e, t, n, r, !1)
                  , o = function(e, t, n, r, i) {
                    let o = [];
                    for (let a of Object.getOwnPropertyNames(t.CanvasRenderingContext2D.prototype))
                        try {
                            if ("function" != typeof t.CanvasRenderingContext2D.prototype[a])
                                continue;
                            let s = p(t.CanvasRenderingContext2D.prototype, a, function(o) {
                                return function() {
                                    for (var s = arguments.length, u = Array(s), l = 0; l < s; l++)
                                        u[l] = arguments[l];
                                    return !f(this.canvas, n, r, i, !0) && _( () => {
                                        let n = x(u, t, this);
                                        e(this.canvas, {
                                            type: y["2D"],
                                            property: a,
                                            args: n
                                        })
                                    }
                                    , 0),
                                    o.apply(this, u)
                                }
                            });
                            o.push(s)
                        } catch (r) {
                            let n = d(t.CanvasRenderingContext2D.prototype, a, {
                                set(t) {
                                    e(this.canvas, {
                                        type: y["2D"],
                                        property: a,
                                        args: [t],
                                        setter: !0
                                    })
                                }
                            });
                            o.push(n)
                        }
                    return () => {
                        o.forEach(e => e())
                    }
                }(this.processMutation.bind(this), e, t, n, r)
                  , a = function(e, t, n, r, i, o) {
                    let a = [];
                    return a.push(...O(t.WebGLRenderingContext.prototype, y.WebGL, e, n, r, i, o, t)),
                    void 0 !== t.WebGL2RenderingContext && a.push(...O(t.WebGL2RenderingContext.prototype, y.WebGL2, e, n, r, i, o, t)),
                    () => {
                        a.forEach(e => e())
                    }
                }(this.processMutation.bind(this), e, t, n, r, this.mirror);
                this.restoreHandlers.push( () => {
                    i(),
                    o(),
                    a()
                }
                )
            }
            snapshot(e) {
                let {options: t} = this
                  , n = this.takeSnapshot(!0, "all" === t.sampling ? 2 : t.sampling || 2, t.blockClass, t.blockSelector, t.unblockSelector, t.maxCanvasSize, t.dataURLOptions, e);
                this.restoreHandlers.push( () => {
                    cancelAnimationFrame(n)
                }
                )
            }
            takeSnapshot(e, t, n, i, o, a, s, u) {
                let l = 1e3 / t, c = 0, d, p = e => {
                    if (e)
                        return [e];
                    let t = []
                      , r = e => {
                        e.querySelectorAll("canvas").forEach(e => {
                            !f(e, n, i, o) && t.push(e)
                        }
                        )
                    }
                    ;
                    for (let e of this.windows) {
                        let t = e.deref();
                        t && r(t.document)
                    }
                    for (let e of this.shadowDoms) {
                        let t = e.deref();
                        t && r(t)
                    }
                    return t
                }
                , h = t => {
                    if (this.windows.length) {
                        if (c && t - c < l) {
                            d = m(h);
                            return
                        }
                        c = t,
                        p(u).forEach(t => {
                            if (!this.mirror.hasNode(t))
                                return;
                            let n = this.mirror.getId(t);
                            if (!this.snapshotInProgressMap.get(n)) {
                                if (t.width && t.height) {
                                    if (this.snapshotInProgressMap.set(n, !0),
                                    !e && ["webgl", "webgl2"].includes(t.__context)) {
                                        let e = t.getContext(t.__context);
                                        !1 === (0,
                                        r._optionalChain)([e, "optionalAccess", e => e.getContextAttributes, "call", e => e(), "optionalAccess", e => e.preserveDrawingBuffer]) && e.clear(e.COLOR_BUFFER_BIT)
                                    }
                                    createImageBitmap(t).then(e => {
                                        (0,
                                        r._optionalChain)([this, "access", e => e.worker, "optionalAccess", e => e.postMessage, "call", r => r({
                                            id: n,
                                            bitmap: e,
                                            width: t.width,
                                            height: t.height,
                                            dataURLOptions: s,
                                            maxCanvasSize: a
                                        }, [e])])
                                    }
                                    ).catch(e => {
                                        E( () => {
                                            throw e
                                        }
                                        )()
                                    }
                                    )
                                }
                            }
                        }
                        ),
                        !e && (d = m(h))
                    }
                }
                ;
                return d = m(h)
            }
            startPendingCanvasMutationFlusher() {
                m( () => this.flushPendingCanvasMutations())
            }
            startRAFTimestamping() {
                let e = t => {
                    this.rafStamps.latestId = t,
                    m(e)
                }
                ;
                m(e)
            }
            flushPendingCanvasMutations() {
                this.pendingCanvasMutations.forEach( (e, t) => {
                    let n = this.mirror.getId(t);
                    this.flushPendingCanvasMutationFor(t, n)
                }
                ),
                m( () => this.flushPendingCanvasMutations())
            }
            flushPendingCanvasMutationFor(e, t) {
                if (this.frozen || this.locked)
                    return;
                let n = this.pendingCanvasMutations.get(e);
                if (!n || -1 === t)
                    return;
                let r = n.map(e => {
                    let {type: t, ...n} = e;
                    return n
                }
                )
                  , {type: i} = n[0];
                this.mutationCb({
                    id: t,
                    type: i,
                    commands: r
                }),
                this.pendingCanvasMutations.delete(e)
            }
        }
        let R = {
            low: {
                sampling: {
                    canvas: 1
                },
                dataURLOptions: {
                    type: "image/webp",
                    quality: .25
                }
            },
            medium: {
                sampling: {
                    canvas: 2
                },
                dataURLOptions: {
                    type: "image/webp",
                    quality: .4
                }
            },
            high: {
                sampling: {
                    canvas: 4
                },
                dataURLOptions: {
                    type: "image/webp",
                    quality: .5
                }
            }
        }
          , M = (0,
        i.defineIntegration)(function() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, [t,n] = e.maxCanvasSize || [], r = {
                quality: e.quality || "medium",
                enableManualSnapshot: e.enableManualSnapshot,
                maxCanvasSize: [t ? Math.min(t, 1280) : 1280, n ? Math.min(n, 1280) : 1280]
            }, i, o = new Promise(e => i = e);
            return {
                name: "ReplayCanvas",
                getOptions() {
                    let {quality: e, enableManualSnapshot: t, maxCanvasSize: n} = r;
                    return {
                        enableManualSnapshot: t,
                        recordCanvas: !0,
                        getCanvasManager: e => {
                            let r = new D({
                                ...e,
                                enableManualSnapshot: t,
                                maxCanvasSize: n,
                                errorHandler: e => {
                                    try {
                                        "object" == typeof e && (e.__rrweb__ = !0)
                                    } catch (e) {}
                                }
                            });
                            return i(r),
                            r
                        }
                        ,
                        ...R[e || "medium"] || R.medium
                    }
                },
                async snapshot(e) {
                    (await o).snapshot(e)
                }
            }
        })
    },
    36122: function(e, t, n) {
        "use strict";
        n.d(t, {
            getReplay: function() {
                return n5
            },
            replayIntegration: function() {
                return n1
            }
        });
        var r = n("90434")
          , i = n("9984")
          , o = n("61191")
          , a = n("7149")
          , s = n("48497")
          , u = n("87586")
          , l = n("75047")
          , c = n("18062")
          , d = n("54683")
          , p = n("1546")
          , f = n("70585")
          , h = n("24317")
          , g = n("65492")
          , m = n("42878")
          , _ = n("10581")
          , v = n("67441")
          , y = n("2030")
          , S = n("99562")
          , E = n("6009")
          , b = n("81567")
          , I = n("20547")
          , T = n("95031")
          , w = n("60013")
          , C = n("21109")
          , k = n("54816")
          , x = n("99785")
          , N = n("38385")
          , A = n("58425")
          , O = n("17451");
        let D = o.GLOBAL_OBJ
          , R = "sentryReplaySession"
          , M = "Unable to send Replay";
        function L(e, t) {
            return null != e ? e : t()
        }
        function U(e) {
            let t, n = e[0], r = 1;
            for (; r < e.length; ) {
                let i = e[r]
                  , o = e[r + 1];
                if (r += 2,
                ("optionalAccess" === i || "optionalCall" === i) && null == n)
                    return;
                "access" === i || "optionalAccess" === i ? (t = n,
                n = o(n)) : ("call" === i || "optionalCall" === i) && (n = o(function() {
                    for (var e = arguments.length, r = Array(e), i = 0; i < e; i++)
                        r[i] = arguments[i];
                    return n.call(t, ...r)
                }),
                t = void 0)
            }
            return n
        }
        var P, B;
        (B = P || (P = {}))[B.Document = 0] = "Document",
        B[B.DocumentType = 1] = "DocumentType",
        B[B.Element = 2] = "Element",
        B[B.Text = 3] = "Text",
        B[B.CDATA = 4] = "CDATA",
        B[B.Comment = 5] = "Comment";
        function F(e) {
            let t = U([e, "optionalAccess", e => e.host]);
            return U([t, "optionalAccess", e => e.shadowRoot]) === e
        }
        function W(e) {
            return "[object ShadowRoot]" === Object.prototype.toString.call(e)
        }
        function $(e) {
            try {
                let n = e.rules || e.cssRules;
                var t;
                return n ? ((t = Array.from(n, H).join("")).includes(" background-clip: text;") && !t.includes(" -webkit-background-clip: text;") && (t = t.replace(/\sbackground-clip:\s*text;/g, " -webkit-background-clip: text; background-clip: text;")),
                t) : null
            } catch (e) {
                return null
            }
        }
        function H(e) {
            let t;
            if (function(e) {
                return "styleSheet"in e
            }(e))
                try {
                    t = $(e.styleSheet) || function(e) {
                        let {cssText: t} = e;
                        if (t.split('"').length < 3)
                            return t;
                        let n = ["@import", `url(${JSON.stringify(e.href)})`];
                        return "" === e.layerName ? n.push("layer") : e.layerName && n.push(`layer(${e.layerName})`),
                        e.supportsText && n.push(`supports(${e.supportsText})`),
                        e.media.length && n.push(e.media.mediaText),
                        n.join(" ") + ";"
                    }(e)
                } catch (e) {}
            else if (function(e) {
                return "selectorText"in e
            }(e)) {
                let t = e.cssText
                  , n = e.selectorText.includes(":")
                  , r = "string" == typeof e.style.all && e.style.all;
                if (r && (t = function(e) {
                    let t = "";
                    for (let n = 0; n < e.style.length; n++) {
                        let r = e.style
                          , i = r[n]
                          , o = r.getPropertyPriority(i);
                        t += `${i}:${r.getPropertyValue(i)}${o ? " !important" : ""};`
                    }
                    return `${e.selectorText} { ${t} }`
                }(e)),
                n && (t = function(e) {
                    return e.replace(/(\[(?:[\w-]+)[^\\])(:(?:[\w-]+)\])/gm, "$1\\$2")
                }(t)),
                n || r)
                    return t
            }
            return t || e.cssText
        }
        class G {
            constructor() {
                this.idNodeMap = new Map,
                this.nodeMetaMap = new WeakMap
            }
            getId(e) {
                return e ? L(U([this, "access", e => e.getMeta, "call", t => t(e), "optionalAccess", e => e.id]), () => -1) : -1
            }
            getNode(e) {
                return this.idNodeMap.get(e) || null
            }
            getIds() {
                return Array.from(this.idNodeMap.keys())
            }
            getMeta(e) {
                return this.nodeMetaMap.get(e) || null
            }
            removeNodeFromMap(e) {
                let t = this.getId(e);
                this.idNodeMap.delete(t),
                e.childNodes && e.childNodes.forEach(e => this.removeNodeFromMap(e))
            }
            has(e) {
                return this.idNodeMap.has(e)
            }
            hasNode(e) {
                return this.nodeMetaMap.has(e)
            }
            add(e, t) {
                let n = t.id;
                this.idNodeMap.set(n, e),
                this.nodeMetaMap.set(e, t)
            }
            replace(e, t) {
                let n = this.getNode(e);
                if (n) {
                    let e = this.nodeMetaMap.get(n);
                    e && this.nodeMetaMap.set(t, e)
                }
                this.idNodeMap.set(e, t)
            }
            reset() {
                this.idNodeMap = new Map,
                this.nodeMetaMap = new WeakMap
            }
        }
        function j(e) {
            let {maskInputOptions: t, tagName: n, type: r} = e;
            return "OPTION" === n && (n = "SELECT"),
            !!(t[n.toLowerCase()] || r && t[r] || "password" === r || "INPUT" === n && !r && t.text)
        }
        function z(e) {
            let {isMasked: t, element: n, value: r, maskInputFn: i} = e
              , o = r || "";
            return t ? (i && (o = i(o, n)),
            "*".repeat(o.length)) : o
        }
        function Y(e) {
            return e.toLowerCase()
        }
        function q(e) {
            return e.toUpperCase()
        }
        let J = "__rrweb_original__";
        function V(e) {
            let t = e.type;
            return e.hasAttribute("data-rr-is-password") ? "password" : t ? Y(t) : null
        }
        function K(e, t, n) {
            return "INPUT" === t && ("radio" === n || "checkbox" === n) ? e.getAttribute("value") || "" : e.value
        }
        function X(e, t) {
            let n;
            try {
                n = new URL(e,L(t, () => window.location.href))
            } catch (e) {
                return null
            }
            return L(U([n.pathname.match(/\.([0-9a-z]+)(?:$)/i), "optionalAccess", e => e[1]]), () => null)
        }
        let Q = {};
        function Z(e) {
            let t = Q[e];
            if (t)
                return t;
            let n = window.document
              , r = window[e];
            if (n && "function" == typeof n.createElement)
                try {
                    let t = n.createElement("iframe");
                    t.hidden = !0,
                    n.head.appendChild(t);
                    let i = t.contentWindow;
                    i && i[e] && (r = i[e]),
                    n.head.removeChild(t)
                } catch (e) {}
            return Q[e] = r.bind(window)
        }
        function ee() {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
                t[n] = arguments[n];
            return Z("setTimeout")(...t)
        }
        function et() {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
                t[n] = arguments[n];
            return Z("clearTimeout")(...t)
        }
        function en(e) {
            try {
                return e.contentDocument
            } catch (e) {}
        }
        let er = 1
          , ei = RegExp("[^a-z0-9-_:]");
        function eo() {
            return er++
        }
        let ea, es, eu = /url\((?:(')([^']*)'|(")(.*?)"|([^)]*))\)/gm, el = /^(?:[a-z+]+:)?\/\//i, ec = /^www\..*/i, ed = /^(data:)([^,]*),(.*)/i;
        function ep(e, t) {
            return (e || "").replace(eu, (e, n, r, i, o, a) => {
                let s = r || o || a
                  , u = n || i || "";
                if (!s)
                    return e;
                if (el.test(s) || ec.test(s) || ed.test(s))
                    return `url(${u}${s}${u})`;
                if ("/" === s[0]) {
                    var l;
                    let e;
                    return `url(${u}${e = "",
                    (e = (e = (l = t).indexOf("//") > -1 ? l.split("/").slice(0, 3).join("/") : l.split("/")[0]).split("?")[0]) + s}${u})`
                }
                let c = t.split("/")
                  , d = s.split("/");
                for (let e of (c.pop(),
                d)) {
                    if ("." !== e)
                        ".." === e ? c.pop() : c.push(e)
                }
                return `url(${u}${c.join("/")}${u})`
            }
            )
        }
        let ef = /^[^ \t\n\r\u000c]+/
          , eh = /^[, \t\n\r\u000c]+/
          , eg = new WeakMap;
        function em(e, t) {
            return t && "" !== t.trim() ? e_(e, t) : t
        }
        function e_(e, t) {
            let n = eg.get(e);
            if (!n && (n = e.createElement("a"),
            eg.set(e, n)),
            t) {
                if (t.startsWith("blob:") || t.startsWith("data:"))
                    return t
            } else
                t = "";
            return n.setAttribute("href", t),
            n.href
        }
        function ev(e, t, n, r, i, o) {
            if (!r)
                return r;
            if ("src" === n || "href" === n && !("use" === t && "#" === r[0]))
                return em(e, r);
            if ("xlink:href" === n && "#" !== r[0])
                return em(e, r);
            if ("background" === n && ("table" === t || "td" === t || "th" === t))
                return em(e, r);
            else if ("srcset" === n)
                return function(e, t) {
                    if ("" === t.trim())
                        return t;
                    let n = 0;
                    function r(e) {
                        let r, i = e.exec(t.substring(n));
                        return i ? (r = i[0],
                        n += r.length,
                        r) : ""
                    }
                    let i = [];
                    for (; r(eh),
                    !(n >= t.length); ) {
                        ;let o = r(ef);
                        if ("," === o.slice(-1))
                            o = em(e, o.substring(0, o.length - 1)),
                            i.push(o);
                        else {
                            let r = "";
                            o = em(e, o);
                            let a = !1;
                            for (; ; ) {
                                let e = t.charAt(n);
                                if ("" === e) {
                                    i.push((o + r).trim());
                                    break
                                }
                                if (a)
                                    ")" === e && (a = !1);
                                else {
                                    if ("," === e) {
                                        n += 1,
                                        i.push((o + r).trim());
                                        break
                                    }
                                    "(" === e && (a = !0)
                                }
                                r += e,
                                n += 1
                            }
                        }
                    }
                    return i.join(", ")
                }(e, r);
            else if ("style" === n)
                return ep(r, e_(e));
            else if ("object" === t && "data" === n)
                return em(e, r);
            return "function" == typeof o ? o(n, r, i) : r
        }
        function ey(e, t, n) {
            return ("video" === e || "audio" === e) && "autoplay" === t
        }
        function eS(e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1 / 0
              , r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
            return !e || e.nodeType !== e.ELEMENT_NODE || r > n ? -1 : t(e) ? r : eS(e.parentNode, t, n, r + 1)
        }
        function eE(e, t) {
            return n => {
                if (null === n)
                    return !1;
                try {
                    if (e) {
                        if ("string" == typeof e) {
                            if (n.matches(`.${e}`))
                                return !0
                        } else if (function(e, t) {
                            for (let n = e.classList.length; n--; ) {
                                let r = e.classList[n];
                                if (t.test(r))
                                    return !0
                            }
                            return !1
                        }(n, e))
                            return !0
                    }
                    if (t && n.matches(t))
                        return !0;
                    return !1
                } catch (e) {
                    return !1
                }
            }
        }
        function eb(e, t, n, r, i, o) {
            try {
                let a = e.nodeType === e.ELEMENT_NODE ? e : e.parentElement;
                if (null === a)
                    return !1;
                if ("INPUT" === a.tagName) {
                    let e = a.getAttribute("autocomplete");
                    if (["current-password", "new-password", "cc-number", "cc-exp", "cc-exp-month", "cc-exp-year", "cc-csc"].includes(e))
                        return !0
                }
                let s = -1
                  , u = -1;
                if (o) {
                    if ((u = eS(a, eE(r, i))) < 0)
                        return !0;
                    s = eS(a, eE(t, n), u >= 0 ? u : 1 / 0)
                } else {
                    if ((s = eS(a, eE(t, n))) < 0)
                        return !1;
                    u = eS(a, eE(r, i), s >= 0 ? s : 1 / 0)
                }
                return s >= 0 ? !(u >= 0) || s <= u : !(u >= 0) && !!o
            } catch (e) {}
            return !!o
        }
        function eI(e) {
            return null == e ? "" : e.toLowerCase()
        }
        function eT(e, t) {
            let {doc: n, mirror: r, blockClass: i, blockSelector: o, unblockSelector: a, maskAllText: s, maskTextClass: u, unmaskTextClass: l, maskTextSelector: c, unmaskTextSelector: d, skipChild: p=!1, inlineStylesheet: f=!0, maskInputOptions: h={}, maskAttributeFn: g, maskTextFn: m, maskInputFn: _, slimDOMOptions: v, dataURLOptions: y={}, inlineImages: S=!1, recordCanvas: E=!1, onSerialize: b, onIframeLoad: I, iframeLoadTimeout: T=5e3, onStylesheetLoad: w, stylesheetLoadTimeout: C=5e3, keepIframeSrcFn: k= () => !1, newlyAddedElement: x=!1} = t
              , {preserveWhiteSpace: N=!0} = t
              , A = function(e, t) {
                let {doc: n, mirror: r, blockClass: i, blockSelector: o, unblockSelector: a, maskAllText: s, maskAttributeFn: u, maskTextClass: l, unmaskTextClass: c, maskTextSelector: d, unmaskTextSelector: p, inlineStylesheet: f, maskInputOptions: h={}, maskTextFn: g, maskInputFn: m, dataURLOptions: _={}, inlineImages: v, recordCanvas: y, keepIframeSrcFn: S, newlyAddedElement: E=!1} = t
                  , b = function(e, t) {
                    if (!t.hasNode(e))
                        return;
                    let n = t.getId(e);
                    return 1 === n ? void 0 : n
                }(n, r);
                switch (e.nodeType) {
                case e.DOCUMENT_NODE:
                    if ("CSS1Compat" !== e.compatMode)
                        return {
                            type: P.Document,
                            childNodes: [],
                            compatMode: e.compatMode
                        };
                    return {
                        type: P.Document,
                        childNodes: []
                    };
                case e.DOCUMENT_TYPE_NODE:
                    return {
                        type: P.DocumentType,
                        name: e.name,
                        publicId: e.publicId,
                        systemId: e.systemId,
                        rootId: b
                    };
                case e.ELEMENT_NODE:
                    return function(e, t) {
                        let {doc: n, blockClass: r, blockSelector: i, unblockSelector: o, inlineStylesheet: a, maskInputOptions: s={}, maskAttributeFn: u, maskInputFn: l, dataURLOptions: c={}, inlineImages: d, recordCanvas: p, keepIframeSrcFn: f, newlyAddedElement: h=!1, rootId: g, maskAllText: m, maskTextClass: _, unmaskTextClass: v, maskTextSelector: y, unmaskTextSelector: S} = t
                          , E = function(e, t, n, r) {
                            try {
                                if (r && e.matches(r))
                                    return !1;
                                if ("string" == typeof t) {
                                    if (e.classList.contains(t))
                                        return !0
                                } else
                                    for (let n = e.classList.length; n--; ) {
                                        let r = e.classList[n];
                                        if (t.test(r))
                                            return !0
                                    }
                                if (n)
                                    return e.matches(n)
                            } catch (e) {}
                            return !1
                        }(e, r, i, o)
                          , b = function(e) {
                            if (e instanceof HTMLFormElement)
                                return "form";
                            let t = Y(e.tagName);
                            return ei.test(t) ? "div" : t
                        }(e)
                          , I = {}
                          , T = e.attributes.length;
                        for (let t = 0; t < T; t++) {
                            let r = e.attributes[t];
                            r.name && !ey(b, r.name, r.value) && (I[r.name] = ev(n, b, Y(r.name), r.value, e, u))
                        }
                        if ("link" === b && a) {
                            let t = Array.from(n.styleSheets).find(t => t.href === e.href)
                              , r = null;
                            t && (r = $(t)),
                            r && (I.rel = null,
                            I.href = null,
                            I.crossorigin = null,
                            I._cssText = ep(r, t.href))
                        }
                        if ("style" === b && e.sheet && !(e.innerText || e.textContent || "").trim().length) {
                            let t = $(e.sheet);
                            t && (I._cssText = ep(t, e_(n)))
                        }
                        if ("input" === b || "textarea" === b || "select" === b || "option" === b) {
                            let t = V(e)
                              , n = K(e, q(b), t)
                              , r = e.checked;
                            if ("submit" !== t && "button" !== t && n) {
                                let r = eb(e, _, y, v, S, j({
                                    type: t,
                                    tagName: q(b),
                                    maskInputOptions: s
                                }));
                                I.value = z({
                                    isMasked: r,
                                    element: e,
                                    value: n,
                                    maskInputFn: l
                                })
                            }
                            r && (I.checked = r)
                        }
                        if ("option" === b && (e.selected && !s.select ? I.selected = !0 : delete I.selected),
                        "canvas" === b && p) {
                            if ("2d" === e.__context)
                                !function(e) {
                                    let t = e.getContext("2d");
                                    if (!t)
                                        return !0;
                                    for (let n = 0; n < e.width; n += 50)
                                        for (let r = 0; r < e.height; r += 50) {
                                            let i = t.getImageData;
                                            if (new Uint32Array((J in i ? i[J] : i).call(t, n, r, Math.min(50, e.width - n), Math.min(50, e.height - r)).data.buffer).some(e => 0 !== e))
                                                return !1
                                        }
                                    return !0
                                }(e) && (I.rr_dataURL = e.toDataURL(c.type, c.quality));
                            else if (!("__context"in e)) {
                                let t = e.toDataURL(c.type, c.quality)
                                  , r = n.createElement("canvas");
                                r.width = e.width,
                                r.height = e.height,
                                t !== r.toDataURL(c.type, c.quality) && (I.rr_dataURL = t)
                            }
                        }
                        if ("img" === b && d) {
                            !ea && (es = (ea = n.createElement("canvas")).getContext("2d"));
                            let t = e.currentSrc || e.getAttribute("src") || "<unknown-src>"
                              , r = e.crossOrigin
                              , i = () => {
                                e.removeEventListener("load", i);
                                try {
                                    ea.width = e.naturalWidth,
                                    ea.height = e.naturalHeight,
                                    es.drawImage(e, 0, 0),
                                    I.rr_dataURL = ea.toDataURL(c.type, c.quality)
                                } catch (n) {
                                    if ("anonymous" !== e.crossOrigin) {
                                        e.crossOrigin = "anonymous",
                                        e.complete && 0 !== e.naturalWidth ? i() : e.addEventListener("load", i);
                                        return
                                    }
                                    console.warn(`Cannot inline img src=${t}! Error: ${n}`)
                                }
                                "anonymous" === e.crossOrigin && (r ? I.crossOrigin = r : e.removeAttribute("crossorigin"))
                            }
                            ;
                            e.complete && 0 !== e.naturalWidth ? i() : e.addEventListener("load", i)
                        }
                        if (("audio" === b || "video" === b) && (I.rr_mediaState = e.paused ? "paused" : "played",
                        I.rr_mediaCurrentTime = e.currentTime),
                        !h && (e.scrollLeft && (I.rr_scrollLeft = e.scrollLeft),
                        e.scrollTop && (I.rr_scrollTop = e.scrollTop)),
                        E) {
                            let {width: t, height: n} = e.getBoundingClientRect();
                            I = {
                                class: I.class,
                                rr_width: `${t}px`,
                                rr_height: `${n}px`
                            }
                        }
                        "iframe" === b && !f(I.src) && (!E && !en(e) && (I.rr_src = I.src),
                        delete I.src);
                        let w;
                        try {
                            customElements.get(b) && (w = !0)
                        } catch (e) {}
                        var C;
                        return {
                            type: P.Element,
                            tagName: b,
                            attributes: I,
                            childNodes: [],
                            isSVG: !!("svg" === (C = e).tagName || C.ownerSVGElement) || void 0,
                            needBlock: E,
                            rootId: g,
                            isCustom: w
                        }
                    }(e, {
                        doc: n,
                        blockClass: i,
                        blockSelector: o,
                        unblockSelector: a,
                        inlineStylesheet: f,
                        maskAttributeFn: u,
                        maskInputOptions: h,
                        maskInputFn: m,
                        dataURLOptions: _,
                        inlineImages: v,
                        recordCanvas: y,
                        keepIframeSrcFn: S,
                        newlyAddedElement: E,
                        rootId: b,
                        maskAllText: s,
                        maskTextClass: l,
                        unmaskTextClass: c,
                        maskTextSelector: d,
                        unmaskTextSelector: p
                    });
                case e.TEXT_NODE:
                    return function(e, t) {
                        let {maskAllText: n, maskTextClass: r, unmaskTextClass: i, maskTextSelector: o, unmaskTextSelector: a, maskTextFn: s, maskInputOptions: u, maskInputFn: l, rootId: c} = t
                          , d = e.parentNode && e.parentNode.tagName
                          , p = e.textContent
                          , f = "STYLE" === d || void 0
                          , h = "SCRIPT" === d || void 0
                          , g = "TEXTAREA" === d || void 0;
                        if (f && p) {
                            try {
                                e.nextSibling || e.previousSibling || U([e, "access", e => e.parentNode, "access", e => e.sheet, "optionalAccess", e => e.cssRules]) && (p = $(e.parentNode.sheet))
                            } catch (t) {
                                console.warn(`Cannot get CSS styles from text's parentNode. Error: ${t}`, e)
                            }
                            p = ep(p, e_(t.doc))
                        }
                        h && (p = "SCRIPT_PLACEHOLDER");
                        let m = eb(e, r, o, i, a, n);
                        return !f && !h && !g && p && m && (p = s ? s(p, e.parentElement) : p.replace(/[\S]/g, "*")),
                        g && p && (u.textarea || m) && (p = l ? l(p, e.parentNode) : p.replace(/[\S]/g, "*")),
                        "OPTION" === d && p && (p = z({
                            isMasked: eb(e, r, o, i, a, j({
                                type: null,
                                tagName: d,
                                maskInputOptions: u
                            })),
                            element: e,
                            value: p,
                            maskInputFn: l
                        })),
                        {
                            type: P.Text,
                            textContent: p || "",
                            isStyle: f,
                            rootId: c
                        }
                    }(e, {
                        doc: n,
                        maskAllText: s,
                        maskTextClass: l,
                        unmaskTextClass: c,
                        maskTextSelector: d,
                        unmaskTextSelector: p,
                        maskTextFn: g,
                        maskInputOptions: h,
                        maskInputFn: m,
                        rootId: b
                    });
                case e.CDATA_SECTION_NODE:
                    return {
                        type: P.CDATA,
                        textContent: "",
                        rootId: b
                    };
                case e.COMMENT_NODE:
                    return {
                        type: P.Comment,
                        textContent: e.textContent || "",
                        rootId: b
                    };
                default:
                    return !1
                }
            }(e, {
                doc: n,
                mirror: r,
                blockClass: i,
                blockSelector: o,
                maskAllText: s,
                unblockSelector: a,
                maskTextClass: u,
                unmaskTextClass: l,
                maskTextSelector: c,
                unmaskTextSelector: d,
                inlineStylesheet: f,
                maskInputOptions: h,
                maskAttributeFn: g,
                maskTextFn: m,
                maskInputFn: _,
                dataURLOptions: y,
                inlineImages: S,
                recordCanvas: E,
                keepIframeSrcFn: k,
                newlyAddedElement: x
            });
            if (!A)
                return console.warn(e, "not serialized"),
                null;
            let O;
            O = r.hasNode(e) ? r.getId(e) : !function(e, t) {
                if (t.comment && e.type === P.Comment)
                    return !0;
                if (e.type === P.Element) {
                    if (t.script && ("script" === e.tagName || "link" === e.tagName && ("preload" === e.attributes.rel || "modulepreload" === e.attributes.rel) || "link" === e.tagName && "prefetch" === e.attributes.rel && "string" == typeof e.attributes.href && "js" === X(e.attributes.href)))
                        return !0;
                    if (t.headFavicon && ("link" === e.tagName && "shortcut icon" === e.attributes.rel || "meta" === e.tagName && (eI(e.attributes.name).match(/^msapplication-tile(image|color)$/) || "application-name" === eI(e.attributes.name) || "icon" === eI(e.attributes.rel) || "apple-touch-icon" === eI(e.attributes.rel) || "shortcut icon" === eI(e.attributes.rel))))
                        return !0;
                    else if ("meta" === e.tagName) {
                        if (t.headMetaDescKeywords && eI(e.attributes.name).match(/^description|keywords$/))
                            return !0;
                        if (t.headMetaSocial && (eI(e.attributes.property).match(/^(og|twitter|fb):/) || eI(e.attributes.name).match(/^(og|twitter):/) || "pinterest" === eI(e.attributes.name)))
                            return !0;
                        else if (t.headMetaRobots && ("robots" === eI(e.attributes.name) || "googlebot" === eI(e.attributes.name) || "bingbot" === eI(e.attributes.name)))
                            return !0;
                        else if (t.headMetaHttpEquiv && void 0 !== e.attributes["http-equiv"])
                            return !0;
                        else if (t.headMetaAuthorship && ("author" === eI(e.attributes.name) || "generator" === eI(e.attributes.name) || "framework" === eI(e.attributes.name) || "publisher" === eI(e.attributes.name) || "progid" === eI(e.attributes.name) || eI(e.attributes.property).match(/^article:/) || eI(e.attributes.property).match(/^product:/)))
                            return !0;
                        else if (t.headMetaVerification && ("google-site-verification" === eI(e.attributes.name) || "yandex-verification" === eI(e.attributes.name) || "csrf-token" === eI(e.attributes.name) || "p:domain_verify" === eI(e.attributes.name) || "verify-v1" === eI(e.attributes.name) || "verification" === eI(e.attributes.name) || "shopify-checkout-api-token" === eI(e.attributes.name)))
                            return !0
                    }
                }
                return !1
            }(A, v) && (N || A.type !== P.Text || A.isStyle || A.textContent.replace(/^\s+|\s+$/gm, "").length) ? eo() : -2;
            let D = Object.assign(A, {
                id: O
            });
            if (r.add(e, D),
            -2 === O)
                return null;
            b && b(e);
            let R = !p;
            if (D.type === P.Element) {
                R = R && !D.needBlock,
                delete D.needBlock;
                let t = e.shadowRoot;
                t && W(t) && (D.isShadowHost = !0)
            }
            if ((D.type === P.Document || D.type === P.Element) && R) {
                v.headWhitespace && D.type === P.Element && "head" === D.tagName && (N = !1);
                let t = {
                    doc: n,
                    mirror: r,
                    blockClass: i,
                    blockSelector: o,
                    maskAllText: s,
                    unblockSelector: a,
                    maskTextClass: u,
                    unmaskTextClass: l,
                    maskTextSelector: c,
                    unmaskTextSelector: d,
                    skipChild: p,
                    inlineStylesheet: f,
                    maskInputOptions: h,
                    maskAttributeFn: g,
                    maskTextFn: m,
                    maskInputFn: _,
                    slimDOMOptions: v,
                    dataURLOptions: y,
                    inlineImages: S,
                    recordCanvas: E,
                    preserveWhiteSpace: N,
                    onSerialize: b,
                    onIframeLoad: I,
                    iframeLoadTimeout: T,
                    onStylesheetLoad: w,
                    stylesheetLoadTimeout: C,
                    keepIframeSrcFn: k
                };
                for (let n of Array.from(e.childNodes)) {
                    let e = eT(n, t);
                    e && D.childNodes.push(e)
                }
                var M;
                if ((M = e).nodeType === M.ELEMENT_NODE && e.shadowRoot)
                    for (let n of Array.from(e.shadowRoot.childNodes)) {
                        let r = eT(n, t);
                        r && (W(e.shadowRoot) && (r.isShadow = !0),
                        D.childNodes.push(r))
                    }
            }
            return e.parentNode && F(e.parentNode) && W(e.parentNode) && (D.isShadow = !0),
            D.type === P.Element && "iframe" === D.tagName && !function(e, t, n) {
                let r = e.contentWindow;
                if (!r)
                    return;
                let i = !1, o;
                try {
                    o = r.document.readyState
                } catch (e) {
                    return
                }
                if ("complete" !== o) {
                    let r = ee( () => {
                        !i && (t(),
                        i = !0)
                    }
                    , n);
                    e.addEventListener("load", () => {
                        et(r),
                        i = !0,
                        t()
                    }
                    );
                    return
                }
                let a = "about:blank";
                if (r.location.href !== a || e.src === a || "" === e.src)
                    return ee(t, 0),
                    e.addEventListener("load", t);
                e.addEventListener("load", t)
            }(e, () => {
                let t = en(e);
                if (t && I) {
                    let n = eT(t, {
                        doc: t,
                        mirror: r,
                        blockClass: i,
                        blockSelector: o,
                        unblockSelector: a,
                        maskAllText: s,
                        maskTextClass: u,
                        unmaskTextClass: l,
                        maskTextSelector: c,
                        unmaskTextSelector: d,
                        skipChild: !1,
                        inlineStylesheet: f,
                        maskInputOptions: h,
                        maskAttributeFn: g,
                        maskTextFn: m,
                        maskInputFn: _,
                        slimDOMOptions: v,
                        dataURLOptions: y,
                        inlineImages: S,
                        recordCanvas: E,
                        preserveWhiteSpace: N,
                        onSerialize: b,
                        onIframeLoad: I,
                        iframeLoadTimeout: T,
                        onStylesheetLoad: w,
                        stylesheetLoadTimeout: C,
                        keepIframeSrcFn: k
                    });
                    n && I(e, n)
                }
            }
            , T),
            D.type === P.Element && "link" === D.tagName && "string" == typeof D.attributes.rel && ("stylesheet" === D.attributes.rel || "preload" === D.attributes.rel && "string" == typeof D.attributes.href && "css" === X(D.attributes.href)) && !function(e, t, n) {
                let r = !1, i;
                try {
                    i = e.sheet
                } catch (e) {
                    return
                }
                if (i)
                    return;
                let o = ee( () => {
                    !r && (t(),
                    r = !0)
                }
                , n);
                e.addEventListener("load", () => {
                    et(o),
                    r = !0,
                    t()
                }
                )
            }(e, () => {
                if (w) {
                    let t = eT(e, {
                        doc: n,
                        mirror: r,
                        blockClass: i,
                        blockSelector: o,
                        unblockSelector: a,
                        maskAllText: s,
                        maskTextClass: u,
                        unmaskTextClass: l,
                        maskTextSelector: c,
                        unmaskTextSelector: d,
                        skipChild: !1,
                        inlineStylesheet: f,
                        maskInputOptions: h,
                        maskAttributeFn: g,
                        maskTextFn: m,
                        maskInputFn: _,
                        slimDOMOptions: v,
                        dataURLOptions: y,
                        inlineImages: S,
                        recordCanvas: E,
                        preserveWhiteSpace: N,
                        onSerialize: b,
                        onIframeLoad: I,
                        iframeLoadTimeout: T,
                        onStylesheetLoad: w,
                        stylesheetLoadTimeout: C,
                        keepIframeSrcFn: k
                    });
                    t && w(e, t)
                }
            }
            , C),
            D
        }
        function ew(e) {
            let t, n = e[0], r = 1;
            for (; r < e.length; ) {
                let i = e[r]
                  , o = e[r + 1];
                if (r += 2,
                ("optionalAccess" === i || "optionalCall" === i) && null == n)
                    return;
                "access" === i || "optionalAccess" === i ? (t = n,
                n = o(n)) : ("call" === i || "optionalCall" === i) && (n = o(function() {
                    for (var e = arguments.length, r = Array(e), i = 0; i < e; i++)
                        r[i] = arguments[i];
                    return n.call(t, ...r)
                }),
                t = void 0)
            }
            return n
        }
        function eC(e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : document
              , r = {
                capture: !0,
                passive: !0
            };
            return n.addEventListener(e, t, r),
            () => n.removeEventListener(e, t, r)
        }
        let ek = "Please stop import mirror directly. Instead of that,\r\nnow you can use replayer.getMirror() to access the mirror instance of a replayer,\r\nor you can use record.mirror to access the mirror instance during recording."
          , ex = {
            map: {},
            getId: () => (console.error(ek),
            -1),
            getNode: () => (console.error(ek),
            null),
            removeNodeFromMap() {
                console.error(ek)
            },
            has: () => (console.error(ek),
            !1),
            reset() {
                console.error(ek)
            }
        };
        function eN(e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}
              , r = null
              , i = 0;
            return function() {
                for (var o = arguments.length, a = Array(o), s = 0; s < o; s++)
                    a[s] = arguments[s];
                let u = Date.now();
                !i && !1 === n.leading && (i = u);
                let l = t - (u - i)
                  , c = this;
                l <= 0 || l > t ? (r && (function() {
                    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
                        t[n] = arguments[n];
                    eY("clearTimeout")(...t)
                }(r),
                r = null),
                i = u,
                e.apply(c, a)) : !r && !1 !== n.trailing && (r = eq( () => {
                    i = !1 === n.leading ? 0 : Date.now(),
                    r = null,
                    e.apply(c, a)
                }
                , l))
            }
        }
        "undefined" != typeof window && window.Proxy && window.Reflect && (ex = new Proxy(ex,{
            get: (e, t, n) => ("map" === t && console.error(ek),
            Reflect.get(e, t, n))
        }));
        function eA(e, t, n) {
            try {
                if (!(t in e))
                    return () => {}
                    ;
                let r = e[t]
                  , i = n(r);
                return "function" == typeof i && (i.prototype = i.prototype || {},
                Object.defineProperties(i, {
                    __rrweb_original__: {
                        enumerable: !1,
                        value: r
                    }
                })),
                e[t] = i,
                () => {
                    e[t] = r
                }
            } catch (e) {
                return () => {}
            }
        }
        let eO = Date.now;
        function eD(e) {
            let t = e.document;
            return {
                left: t.scrollingElement ? t.scrollingElement.scrollLeft : void 0 !== e.pageXOffset ? e.pageXOffset : ew([t, "optionalAccess", e => e.documentElement, "access", e => e.scrollLeft]) || ew([t, "optionalAccess", e => e.body, "optionalAccess", e => e.parentElement, "optionalAccess", e => e.scrollLeft]) || ew([t, "optionalAccess", e => e.body, "optionalAccess", e => e.scrollLeft]) || 0,
                top: t.scrollingElement ? t.scrollingElement.scrollTop : void 0 !== e.pageYOffset ? e.pageYOffset : ew([t, "optionalAccess", e => e.documentElement, "access", e => e.scrollTop]) || ew([t, "optionalAccess", e => e.body, "optionalAccess", e => e.parentElement, "optionalAccess", e => e.scrollTop]) || ew([t, "optionalAccess", e => e.body, "optionalAccess", e => e.scrollTop]) || 0
            }
        }
        function eR() {
            return window.innerHeight || document.documentElement && document.documentElement.clientHeight || document.body && document.body.clientHeight
        }
        function eM() {
            return window.innerWidth || document.documentElement && document.documentElement.clientWidth || document.body && document.body.clientWidth
        }
        function eL(e) {
            return e ? e.nodeType === e.ELEMENT_NODE ? e : e.parentElement : null
        }
        function eU(e, t, n, r, i) {
            if (!e)
                return !1;
            let o = eL(e);
            if (!o)
                return !1;
            let a = eE(t, n);
            if (!i) {
                let e = r && o.matches(r);
                return a(o) && !e
            }
            let s = eS(o, a)
              , u = -1;
            return !(s < 0) && (r && (u = eS(o, eE(null, r))),
            !!(s > -1) && !!(u < 0) || s < u)
        }
        !/[1-9][0-9]{12}/.test(Date.now().toString()) && (eO = () => new Date().getTime());
        function eP(e, t) {
            return -2 === t.getId(e)
        }
        function eB(e) {
            return !!e.changedTouches
        }
        function eF(e, t) {
            return !!("IFRAME" === e.nodeName && t.getMeta(e))
        }
        function eW(e, t) {
            return !!("LINK" === e.nodeName && e.nodeType === e.ELEMENT_NODE && e.getAttribute && "stylesheet" === e.getAttribute("rel") && t.getMeta(e))
        }
        function e$(e) {
            return !!ew([e, "optionalAccess", e => e.shadowRoot])
        }
        class eH {
            constructor() {
                this.id = 1,
                this.styleIDMap = new WeakMap,
                this.idStyleMap = new Map
            }
            getId(e) {
                return (0,
                r._nullishCoalesce)(this.styleIDMap.get(e), () => -1)
            }
            has(e) {
                return this.styleIDMap.has(e)
            }
            add(e, t) {
                if (this.has(e))
                    return this.getId(e);
                let n;
                return n = void 0 === t ? this.id++ : t,
                this.styleIDMap.set(e, n),
                this.idStyleMap.set(n, e),
                n
            }
            getStyle(e) {
                return this.idStyleMap.get(e) || null
            }
            reset() {
                this.styleIDMap = new WeakMap,
                this.idStyleMap = new Map,
                this.id = 1
            }
            generateId() {
                return this.id++
            }
        }
        function eG(e) {
            let t = null;
            return ew([e, "access", e => e.getRootNode, "optionalCall", e => e(), "optionalAccess", e => e.nodeType]) === Node.DOCUMENT_FRAGMENT_NODE && e.getRootNode().host && (t = e.getRootNode().host),
            t
        }
        function ej(e) {
            let t = e.ownerDocument;
            return !!t && (t.contains(e) || function(e) {
                let t = e.ownerDocument;
                if (!t)
                    return !1;
                let n = function(e) {
                    let t = e, n;
                    for (; n = eG(t); )
                        t = n;
                    return t
                }(e);
                return t.contains(n)
            }(e))
        }
        let ez = {};
        function eY(e) {
            let t = ez[e];
            if (t)
                return t;
            let n = window.document
              , r = window[e];
            if (n && "function" == typeof n.createElement)
                try {
                    let t = n.createElement("iframe");
                    t.hidden = !0,
                    n.head.appendChild(t);
                    let i = t.contentWindow;
                    i && i[e] && (r = i[e]),
                    n.head.removeChild(t)
                } catch (e) {}
            return ez[e] = r.bind(window)
        }
        function eq() {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
                t[n] = arguments[n];
            return eY("setTimeout")(...t)
        }
        var eJ, eV = ((eJ = eV || {})[eJ.DomContentLoaded = 0] = "DomContentLoaded",
        eJ[eJ.Load = 1] = "Load",
        eJ[eJ.FullSnapshot = 2] = "FullSnapshot",
        eJ[eJ.IncrementalSnapshot = 3] = "IncrementalSnapshot",
        eJ[eJ.Meta = 4] = "Meta",
        eJ[eJ.Custom = 5] = "Custom",
        eJ[eJ.Plugin = 6] = "Plugin",
        eJ), eK, eX = ((eK = eX || {})[eK.Mutation = 0] = "Mutation",
        eK[eK.MouseMove = 1] = "MouseMove",
        eK[eK.MouseInteraction = 2] = "MouseInteraction",
        eK[eK.Scroll = 3] = "Scroll",
        eK[eK.ViewportResize = 4] = "ViewportResize",
        eK[eK.Input = 5] = "Input",
        eK[eK.TouchMove = 6] = "TouchMove",
        eK[eK.MediaInteraction = 7] = "MediaInteraction",
        eK[eK.StyleSheetRule = 8] = "StyleSheetRule",
        eK[eK.CanvasMutation = 9] = "CanvasMutation",
        eK[eK.Font = 10] = "Font",
        eK[eK.Log = 11] = "Log",
        eK[eK.Drag = 12] = "Drag",
        eK[eK.StyleDeclaration = 13] = "StyleDeclaration",
        eK[eK.Selection = 14] = "Selection",
        eK[eK.AdoptedStyleSheet = 15] = "AdoptedStyleSheet",
        eK[eK.CustomElement = 16] = "CustomElement",
        eK), eQ, eZ = ((eQ = eZ || {})[eQ.MouseUp = 0] = "MouseUp",
        eQ[eQ.MouseDown = 1] = "MouseDown",
        eQ[eQ.Click = 2] = "Click",
        eQ[eQ.ContextMenu = 3] = "ContextMenu",
        eQ[eQ.DblClick = 4] = "DblClick",
        eQ[eQ.Focus = 5] = "Focus",
        eQ[eQ.Blur = 6] = "Blur",
        eQ[eQ.TouchStart = 7] = "TouchStart",
        eQ[eQ.TouchMove_Departed = 8] = "TouchMove_Departed",
        eQ[eQ.TouchEnd = 9] = "TouchEnd",
        eQ[eQ.TouchCancel = 10] = "TouchCancel",
        eQ), e0, e1 = ((e0 = e1 || {})[e0.Mouse = 0] = "Mouse",
        e0[e0.Pen = 1] = "Pen",
        e0[e0.Touch = 2] = "Touch",
        e0), e2, e3, e5, e4;
        function e6(e) {
            try {
                return e.contentDocument
            } catch (e) {}
        }
        (e3 = e2 || (e2 = {}))[e3.Document = 0] = "Document",
        e3[e3.DocumentType = 1] = "DocumentType",
        e3[e3.Element = 2] = "Element",
        e3[e3.Text = 3] = "Text",
        e3[e3.CDATA = 4] = "CDATA",
        e3[e3.Comment = 5] = "Comment",
        (e4 = e5 || (e5 = {}))[e4.PLACEHOLDER = 0] = "PLACEHOLDER",
        e4[e4.ELEMENT_NODE = 1] = "ELEMENT_NODE",
        e4[e4.ATTRIBUTE_NODE = 2] = "ATTRIBUTE_NODE",
        e4[e4.TEXT_NODE = 3] = "TEXT_NODE",
        e4[e4.CDATA_SECTION_NODE = 4] = "CDATA_SECTION_NODE",
        e4[e4.ENTITY_REFERENCE_NODE = 5] = "ENTITY_REFERENCE_NODE",
        e4[e4.ENTITY_NODE = 6] = "ENTITY_NODE",
        e4[e4.PROCESSING_INSTRUCTION_NODE = 7] = "PROCESSING_INSTRUCTION_NODE",
        e4[e4.COMMENT_NODE = 8] = "COMMENT_NODE",
        e4[e4.DOCUMENT_NODE = 9] = "DOCUMENT_NODE",
        e4[e4.DOCUMENT_TYPE_NODE = 10] = "DOCUMENT_TYPE_NODE",
        e4[e4.DOCUMENT_FRAGMENT_NODE = 11] = "DOCUMENT_FRAGMENT_NODE";
        function e9(e) {
            return "__ln"in e
        }
        class e8 {
            constructor() {
                this.length = 0,
                this.head = null,
                this.tail = null
            }
            get(e) {
                if (e >= this.length)
                    throw Error("Position outside of list range");
                let t = this.head;
                for (let n = 0; n < e; n++)
                    t = function(e) {
                        let t, n = e[0], r = 1;
                        for (; r < e.length; ) {
                            let i = e[r]
                              , o = e[r + 1];
                            if (r += 2,
                            ("optionalAccess" === i || "optionalCall" === i) && null == n)
                                return;
                            "access" === i || "optionalAccess" === i ? (t = n,
                            n = o(n)) : ("call" === i || "optionalCall" === i) && (n = o(function() {
                                for (var e = arguments.length, r = Array(e), i = 0; i < e; i++)
                                    r[i] = arguments[i];
                                return n.call(t, ...r)
                            }),
                            t = void 0)
                        }
                        return n
                    }([t, "optionalAccess", e => e.next]) || null;
                return t
            }
            addNode(e) {
                let t = {
                    value: e,
                    previous: null,
                    next: null
                };
                if (e.__ln = t,
                e.previousSibling && "__ln"in e.previousSibling) {
                    let n = e.previousSibling.__ln.next;
                    t.next = n,
                    t.previous = e.previousSibling.__ln,
                    e.previousSibling.__ln.next = t,
                    n && (n.previous = t)
                } else if (e.nextSibling && "__ln"in e.nextSibling && e.nextSibling.__ln.previous) {
                    let n = e.nextSibling.__ln.previous;
                    t.previous = n,
                    t.next = e.nextSibling.__ln,
                    e.nextSibling.__ln.previous = t,
                    n && (n.next = t)
                } else
                    this.head && (this.head.previous = t),
                    t.next = this.head,
                    this.head = t;
                null === t.next && (this.tail = t),
                this.length++
            }
            removeNode(e) {
                let t = e.__ln;
                this.head && (t.previous ? (t.previous.next = t.next,
                t.next ? t.next.previous = t.previous : this.tail = t.previous) : (this.head = t.next,
                this.head ? this.head.previous = null : this.tail = null),
                e.__ln && delete e.__ln,
                this.length--)
            }
        }
        let e7 = (e, t) => `${e}@${t}`;
        class te {
            constructor() {
                this.frozen = !1,
                this.locked = !1,
                this.texts = [],
                this.attributes = [],
                this.attributeMap = new WeakMap,
                this.removes = [],
                this.mapRemoves = [],
                this.movedMap = {},
                this.addedSet = new Set,
                this.movedSet = new Set,
                this.droppedSet = new Set,
                this.processMutations = e => {
                    e.forEach(this.processMutation),
                    this.emit()
                }
                ,
                this.emit = () => {
                    if (this.frozen || this.locked)
                        return;
                    let e = []
                      , t = new Set
                      , n = new e8
                      , r = e => {
                        let t = e
                          , n = -2;
                        for (; -2 === n; )
                            n = (t = t && t.nextSibling) && this.mirror.getId(t);
                        return n
                    }
                      , i = i => {
                        if (!i.parentNode || !ej(i))
                            return;
                        let o = F(i.parentNode) ? this.mirror.getId(eG(i)) : this.mirror.getId(i.parentNode)
                          , a = r(i);
                        if (-1 === o || -1 === a)
                            return n.addNode(i);
                        let s = eT(i, {
                            doc: this.doc,
                            mirror: this.mirror,
                            blockClass: this.blockClass,
                            blockSelector: this.blockSelector,
                            maskAllText: this.maskAllText,
                            unblockSelector: this.unblockSelector,
                            maskTextClass: this.maskTextClass,
                            unmaskTextClass: this.unmaskTextClass,
                            maskTextSelector: this.maskTextSelector,
                            unmaskTextSelector: this.unmaskTextSelector,
                            skipChild: !0,
                            newlyAddedElement: !0,
                            inlineStylesheet: this.inlineStylesheet,
                            maskInputOptions: this.maskInputOptions,
                            maskAttributeFn: this.maskAttributeFn,
                            maskTextFn: this.maskTextFn,
                            maskInputFn: this.maskInputFn,
                            slimDOMOptions: this.slimDOMOptions,
                            dataURLOptions: this.dataURLOptions,
                            recordCanvas: this.recordCanvas,
                            inlineImages: this.inlineImages,
                            onSerialize: e => {
                                eF(e, this.mirror) && !eU(e, this.blockClass, this.blockSelector, this.unblockSelector, !1) && this.iframeManager.addIframe(e),
                                eW(e, this.mirror) && this.stylesheetManager.trackLinkElement(e),
                                e$(i) && this.shadowDomManager.addShadowRoot(i.shadowRoot, this.doc)
                            }
                            ,
                            onIframeLoad: (e, t) => {
                                !eU(e, this.blockClass, this.blockSelector, this.unblockSelector, !1) && (this.iframeManager.attachIframe(e, t),
                                e.contentWindow && this.canvasManager.addWindow(e.contentWindow),
                                this.shadowDomManager.observeAttachShadow(e))
                            }
                            ,
                            onStylesheetLoad: (e, t) => {
                                this.stylesheetManager.attachLinkElement(e, t)
                            }
                        });
                        s && (e.push({
                            parentId: o,
                            nextId: a,
                            node: s
                        }),
                        t.add(s.id))
                    }
                    ;
                    for (; this.mapRemoves.length; )
                        this.mirror.removeNodeFromMap(this.mapRemoves.shift());
                    for (let e of this.movedSet)
                        (!tn(this.removes, e, this.mirror) || this.movedSet.has(e.parentNode)) && i(e);
                    for (let e of this.addedSet)
                        tr(this.droppedSet, e) || tn(this.removes, e, this.mirror) ? tr(this.movedSet, e) ? i(e) : this.droppedSet.add(e) : i(e);
                    let o = null;
                    for (; n.length; ) {
                        let e = null;
                        if (o) {
                            let t = this.mirror.getId(o.value.parentNode)
                              , n = r(o.value);
                            -1 !== t && -1 !== n && (e = o)
                        }
                        if (!e) {
                            let t = n.tail;
                            for (; t; ) {
                                let n = t;
                                if (t = t.previous,
                                n) {
                                    let t = this.mirror.getId(n.value.parentNode);
                                    if (-1 === r(n.value))
                                        continue;
                                    if (-1 !== t) {
                                        e = n;
                                        break
                                    } else {
                                        let t = n.value;
                                        if (t.parentNode && t.parentNode.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
                                            let r = t.parentNode.host;
                                            if (-1 !== this.mirror.getId(r)) {
                                                e = n;
                                                break
                                            }
                                        }
                                    }
                                }
                            }
                        }
                        if (!e) {
                            for (; n.head; )
                                n.removeNode(n.head.value);
                            break
                        }
                        o = e.previous,
                        n.removeNode(e.value),
                        i(e.value)
                    }
                    let a = {
                        texts: this.texts.map(e => ({
                            id: this.mirror.getId(e.node),
                            value: e.value
                        })).filter(e => !t.has(e.id)).filter(e => this.mirror.has(e.id)),
                        attributes: this.attributes.map(e => {
                            let {attributes: t} = e;
                            if ("string" == typeof t.style) {
                                let n = JSON.stringify(e.styleDiff)
                                  , r = JSON.stringify(e._unchangedStyles);
                                n.length < t.style.length && (n + r).split("var(").length === t.style.split("var(").length && (t.style = e.styleDiff)
                            }
                            return {
                                id: this.mirror.getId(e.node),
                                attributes: t
                            }
                        }
                        ).filter(e => !t.has(e.id)).filter(e => this.mirror.has(e.id)),
                        removes: this.removes,
                        adds: e
                    };
                    (a.texts.length || a.attributes.length || a.removes.length || a.adds.length) && (this.texts = [],
                    this.attributes = [],
                    this.attributeMap = new WeakMap,
                    this.removes = [],
                    this.addedSet = new Set,
                    this.movedSet = new Set,
                    this.droppedSet = new Set,
                    this.movedMap = {},
                    this.mutationCb(a))
                }
                ,
                this.processMutation = e => {
                    if (!eP(e.target, this.mirror))
                        switch (e.type) {
                        case "characterData":
                            {
                                let t = e.target.textContent;
                                !eU(e.target, this.blockClass, this.blockSelector, this.unblockSelector, !1) && t !== e.oldValue && this.texts.push({
                                    value: eb(e.target, this.maskTextClass, this.maskTextSelector, this.unmaskTextClass, this.unmaskTextSelector, this.maskAllText) && t ? this.maskTextFn ? this.maskTextFn(t, eL(e.target)) : t.replace(/[\S]/g, "*") : t,
                                    node: e.target
                                });
                                break
                            }
                        case "attributes":
                            {
                                let t = e.target
                                  , n = e.attributeName
                                  , r = e.target.getAttribute(n);
                                if ("value" === n) {
                                    let n = V(t)
                                      , i = t.tagName;
                                    r = K(t, i, n);
                                    let o = j({
                                        maskInputOptions: this.maskInputOptions,
                                        tagName: i,
                                        type: n
                                    });
                                    r = z({
                                        isMasked: eb(e.target, this.maskTextClass, this.maskTextSelector, this.unmaskTextClass, this.unmaskTextSelector, o),
                                        element: t,
                                        value: r,
                                        maskInputFn: this.maskInputFn
                                    })
                                }
                                if (eU(e.target, this.blockClass, this.blockSelector, this.unblockSelector, !1) || r === e.oldValue)
                                    return;
                                let i = this.attributeMap.get(e.target);
                                if ("IFRAME" === t.tagName && "src" === n && !this.keepIframeSrcFn(r)) {
                                    if (e6(t))
                                        return;
                                    n = "rr_src"
                                }
                                if (!i && (i = {
                                    node: e.target,
                                    attributes: {},
                                    styleDiff: {},
                                    _unchangedStyles: {}
                                },
                                this.attributes.push(i),
                                this.attributeMap.set(e.target, i)),
                                "type" === n && "INPUT" === t.tagName && "password" === (e.oldValue || "").toLowerCase() && t.setAttribute("data-rr-is-password", "true"),
                                !ey(t.tagName, n) && (i.attributes[n] = ev(this.doc, Y(t.tagName), Y(n), r, t, this.maskAttributeFn),
                                "style" === n)) {
                                    if (!this.unattachedDoc)
                                        try {
                                            this.unattachedDoc = document.implementation.createHTMLDocument()
                                        } catch (e) {
                                            this.unattachedDoc = this.doc
                                        }
                                    let n = this.unattachedDoc.createElement("span");
                                    for (let r of (e.oldValue && n.setAttribute("style", e.oldValue),
                                    Array.from(t.style))) {
                                        let e = t.style.getPropertyValue(r)
                                          , o = t.style.getPropertyPriority(r);
                                        e !== n.style.getPropertyValue(r) || o !== n.style.getPropertyPriority(r) ? "" === o ? i.styleDiff[r] = e : i.styleDiff[r] = [e, o] : i._unchangedStyles[r] = [e, o]
                                    }
                                    for (let e of Array.from(n.style))
                                        "" === t.style.getPropertyValue(e) && (i.styleDiff[e] = !1)
                                }
                                break
                            }
                        case "childList":
                            if (eU(e.target, this.blockClass, this.blockSelector, this.unblockSelector, !0))
                                return;
                            e.addedNodes.forEach(t => this.genAdds(t, e.target)),
                            e.removedNodes.forEach(t => {
                                let n = this.mirror.getId(t)
                                  , r = F(e.target) ? this.mirror.getId(e.target.host) : this.mirror.getId(e.target);
                                var i;
                                if (!(eU(e.target, this.blockClass, this.blockSelector, this.unblockSelector, !1) || eP(t, this.mirror)) && (i = t,
                                -1 !== this.mirror.getId(i)))
                                    this.addedSet.has(t) ? (tt(this.addedSet, t),
                                    this.droppedSet.add(t)) : this.addedSet.has(e.target) && -1 === n || function e(t, n) {
                                        if (F(t))
                                            return !1;
                                        let r = n.getId(t);
                                        return !n.has(r) || (!t.parentNode || t.parentNode.nodeType !== t.DOCUMENT_NODE) && (!t.parentNode || e(t.parentNode, n))
                                    }(e.target, this.mirror) || (this.movedSet.has(t) && this.movedMap[e7(n, r)] ? tt(this.movedSet, t) : this.removes.push({
                                        parentId: r,
                                        id: n,
                                        isShadow: !!(F(e.target) && W(e.target)) || void 0
                                    })),
                                    this.mapRemoves.push(t)
                            }
                            )
                        }
                }
                ,
                this.genAdds = (e, t) => {
                    if (!this.processedNodeManager.inOtherBuffer(e, this)) {
                        if (!(this.addedSet.has(e) || this.movedSet.has(e))) {
                            if (this.mirror.hasNode(e)) {
                                if (eP(e, this.mirror))
                                    return;
                                this.movedSet.add(e);
                                let n = null;
                                t && this.mirror.hasNode(t) && (n = this.mirror.getId(t)),
                                n && -1 !== n && (this.movedMap[e7(this.mirror.getId(e), n)] = !0)
                            } else
                                this.addedSet.add(e),
                                this.droppedSet.delete(e);
                            !eU(e, this.blockClass, this.blockSelector, this.unblockSelector, !1) && (e.childNodes.forEach(e => this.genAdds(e)),
                            e$(e) && e.shadowRoot.childNodes.forEach(t => {
                                this.processedNodeManager.add(t, this),
                                this.genAdds(t, e)
                            }
                            ))
                        }
                    }
                }
            }
            init(e) {
                ["mutationCb", "blockClass", "blockSelector", "unblockSelector", "maskAllText", "maskTextClass", "unmaskTextClass", "maskTextSelector", "unmaskTextSelector", "inlineStylesheet", "maskInputOptions", "maskAttributeFn", "maskTextFn", "maskInputFn", "keepIframeSrcFn", "recordCanvas", "inlineImages", "slimDOMOptions", "dataURLOptions", "doc", "mirror", "iframeManager", "stylesheetManager", "shadowDomManager", "canvasManager", "processedNodeManager"].forEach(t => {
                    this[t] = e[t]
                }
                )
            }
            freeze() {
                this.frozen = !0,
                this.canvasManager.freeze()
            }
            unfreeze() {
                this.frozen = !1,
                this.canvasManager.unfreeze(),
                this.emit()
            }
            isFrozen() {
                return this.frozen
            }
            lock() {
                this.locked = !0,
                this.canvasManager.lock()
            }
            unlock() {
                this.locked = !1,
                this.canvasManager.unlock(),
                this.emit()
            }
            reset() {
                this.shadowDomManager.reset(),
                this.canvasManager.reset()
            }
        }
        function tt(e, t) {
            e.delete(t),
            t.childNodes.forEach(t => tt(e, t))
        }
        function tn(e, t, n) {
            return 0 !== e.length && function(e, t, n) {
                let r = t.parentNode;
                for (; r; ) {
                    let t = n.getId(r);
                    if (e.some(e => e.id === t))
                        return !0;
                    r = r.parentNode
                }
                return !1
            }(e, t, n)
        }
        function tr(e, t) {
            return 0 !== e.size && function e(t, n) {
                let {parentNode: r} = n;
                return !!r && (!!t.has(r) || e(t, r))
            }(e, t)
        }
        let ti, to = e => ti ? function() {
            for (var t = arguments.length, n = Array(t), r = 0; r < t; r++)
                n[r] = arguments[r];
            try {
                return e(...n)
            } catch (e) {
                if (ti && !0 === ti(e))
                    return () => {}
                    ;
                throw e
            }
        }
        : e;
        function ta(e) {
            let t, n = e[0], r = 1;
            for (; r < e.length; ) {
                let i = e[r]
                  , o = e[r + 1];
                if (r += 2,
                ("optionalAccess" === i || "optionalCall" === i) && null == n)
                    return;
                "access" === i || "optionalAccess" === i ? (t = n,
                n = o(n)) : ("call" === i || "optionalCall" === i) && (n = o(function() {
                    for (var e = arguments.length, r = Array(e), i = 0; i < e; i++)
                        r[i] = arguments[i];
                    return n.call(t, ...r)
                }),
                t = void 0)
            }
            return n
        }
        let ts = [];
        function tu(e) {
            try {
                if ("composedPath"in e) {
                    let t = e.composedPath();
                    if (t.length)
                        return t[0]
                } else if ("path"in e && e.path.length)
                    return e.path[0]
            } catch (e) {}
            return e && e.target
        }
        function tl(e, t) {
            let n = new te;
            ts.push(n),
            n.init(e);
            let r = window.MutationObserver || window.__rrMutationObserver
              , i = ta([window, "optionalAccess", e => e.Zone, "optionalAccess", e => e.__symbol__, "optionalCall", e => e("MutationObserver")]);
            i && window[i] && (r = window[i]);
            let o = new r(to(t => {
                (!e.onMutation || !1 !== e.onMutation(t)) && n.processMutations.bind(n)(t)
            }
            ));
            return o.observe(t, {
                attributes: !0,
                attributeOldValue: !0,
                characterData: !0,
                characterDataOldValue: !0,
                childList: !0,
                subtree: !0
            }),
            o
        }
        function tc(e) {
            let {scrollCb: t, doc: n, mirror: r, blockClass: i, blockSelector: o, unblockSelector: a, sampling: s} = e;
            return eC("scroll", to(eN(to(e => {
                let s = tu(e);
                if (!s || eU(s, i, o, a, !0))
                    return;
                let u = r.getId(s);
                if (s === n && n.defaultView) {
                    let e = eD(n.defaultView);
                    t({
                        id: u,
                        x: e.left,
                        y: e.top
                    })
                } else
                    t({
                        id: u,
                        x: s.scrollLeft,
                        y: s.scrollTop
                    })
            }
            ), s.scroll || 100)), n)
        }
        let td = ["INPUT", "TEXTAREA", "SELECT"]
          , tp = new WeakMap;
        function tf(e) {
            return function(e, t) {
                if (t_("CSSGroupingRule") && e.parentRule instanceof CSSGroupingRule || t_("CSSMediaRule") && e.parentRule instanceof CSSMediaRule || t_("CSSSupportsRule") && e.parentRule instanceof CSSSupportsRule || t_("CSSConditionRule") && e.parentRule instanceof CSSConditionRule) {
                    let n = Array.from(e.parentRule.cssRules).indexOf(e);
                    t.unshift(n)
                } else if (e.parentStyleSheet) {
                    let n = Array.from(e.parentStyleSheet.cssRules).indexOf(e);
                    t.unshift(n)
                }
                return t
            }(e, [])
        }
        function th(e, t, n) {
            let r, i;
            return e ? (e.ownerNode ? r = t.getId(e.ownerNode) : i = n.getId(e),
            {
                styleId: i,
                id: r
            }) : {}
        }
        function tg(e, t) {
            let {mirror: n, stylesheetManager: r} = e
              , i = null;
            i = "#document" === t.nodeName ? n.getId(t) : n.getId(t.host);
            let o = "#document" === t.nodeName ? ta([t, "access", e => e.defaultView, "optionalAccess", e => e.Document]) : ta([t, "access", e => e.ownerDocument, "optionalAccess", e => e.defaultView, "optionalAccess", e => e.ShadowRoot])
              , a = ta([o, "optionalAccess", e => e.prototype]) ? Object.getOwnPropertyDescriptor(ta([o, "optionalAccess", e => e.prototype]), "adoptedStyleSheets") : void 0;
            return null !== i && -1 !== i && o && a ? (Object.defineProperty(t, "adoptedStyleSheets", {
                configurable: a.configurable,
                enumerable: a.enumerable,
                get() {
                    return ta([a, "access", e => e.get, "optionalAccess", e => e.call, "call", e => e(this)])
                },
                set(e) {
                    let t = ta([a, "access", e => e.set, "optionalAccess", e => e.call, "call", t => t(this, e)]);
                    if (null !== i && -1 !== i)
                        try {
                            r.adoptStyleSheets(e, i)
                        } catch (e) {}
                    return t
                }
            }),
            to( () => {
                Object.defineProperty(t, "adoptedStyleSheets", {
                    configurable: a.configurable,
                    enumerable: a.enumerable,
                    get: a.get,
                    set: a.set
                })
            }
            )) : () => {}
        }
        function tm(e) {
            arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            let t = e.doc.defaultView;
            if (!t)
                return () => {}
                ;
            let n;
            e.recordDOM && (n = tl(e, e.doc));
            let r = function(e) {
                let {mousemoveCb: t, sampling: n, doc: r, mirror: i} = e;
                if (!1 === n.mousemove)
                    return () => {}
                    ;
                let o = "number" == typeof n.mousemove ? n.mousemove : 50, a = "number" == typeof n.mousemoveCallback ? n.mousemoveCallback : 500, s = [], u, l = eN(to(e => {
                    let n = Date.now() - u;
                    t(s.map(e => (e.timeOffset -= n,
                    e)), e),
                    s = [],
                    u = null
                }
                ), a), c = to(eN(to(e => {
                    let t = tu(e)
                      , {clientX: n, clientY: r} = eB(e) ? e.changedTouches[0] : e;
                    !u && (u = eO()),
                    s.push({
                        x: n,
                        y: r,
                        id: i.getId(t),
                        timeOffset: eO() - u
                    }),
                    l("undefined" != typeof DragEvent && e instanceof DragEvent ? eX.Drag : e instanceof MouseEvent ? eX.MouseMove : eX.TouchMove)
                }
                ), o, {
                    trailing: !1
                })), d = [eC("mousemove", c, r), eC("touchmove", c, r), eC("drag", c, r)];
                return to( () => {
                    d.forEach(e => e())
                }
                )
            }(e)
              , i = function(e) {
                let {mouseInteractionCb: t, doc: n, mirror: r, blockClass: i, blockSelector: o, unblockSelector: a, sampling: s} = e;
                if (!1 === s.mouseInteraction)
                    return () => {}
                    ;
                let u = !0 === s.mouseInteraction || void 0 === s.mouseInteraction ? {} : s.mouseInteraction
                  , l = []
                  , c = null
                  , d = e => n => {
                    let s = tu(n);
                    if (eU(s, i, o, a, !0))
                        return;
                    let u = null
                      , l = e;
                    if ("pointerType"in n) {
                        switch (n.pointerType) {
                        case "mouse":
                            u = e1.Mouse;
                            break;
                        case "touch":
                            u = e1.Touch;
                            break;
                        case "pen":
                            u = e1.Pen
                        }
                        u === e1.Touch ? eZ[e] === eZ.MouseDown ? l = "TouchStart" : eZ[e] === eZ.MouseUp && (l = "TouchEnd") : e1.Pen
                    } else
                        eB(n) && (u = e1.Touch);
                    null !== u ? (c = u,
                    (l.startsWith("Touch") && u === e1.Touch || l.startsWith("Mouse") && u === e1.Mouse) && (u = null)) : eZ[e] === eZ.Click && (u = c,
                    c = null);
                    let d = eB(n) ? n.changedTouches[0] : n;
                    if (!d)
                        return;
                    let p = r.getId(s)
                      , {clientX: f, clientY: h} = d;
                    to(t)({
                        type: eZ[l],
                        id: p,
                        x: f,
                        y: h,
                        ...null !== u && {
                            pointerType: u
                        }
                    })
                }
                ;
                return Object.keys(eZ).filter(e => Number.isNaN(Number(e)) && !e.endsWith("_Departed") && !1 !== u[e]).forEach(e => {
                    let t = Y(e)
                      , r = d(e);
                    if (window.PointerEvent)
                        switch (eZ[e]) {
                        case eZ.MouseDown:
                        case eZ.MouseUp:
                            t = t.replace("mouse", "pointer");
                            break;
                        case eZ.TouchStart:
                        case eZ.TouchEnd:
                            return
                        }
                    l.push(eC(t, r, n))
                }
                ),
                to( () => {
                    l.forEach(e => e())
                }
                )
            }(e)
              , o = tc(e)
              , a = function(e, t) {
                let {viewportResizeCb: n} = e
                  , {win: r} = t
                  , i = -1
                  , o = -1;
                return eC("resize", to(eN(to( () => {
                    let e = eR()
                      , t = eM();
                    (i !== e || o !== t) && (n({
                        width: Number(t),
                        height: Number(e)
                    }),
                    i = e,
                    o = t)
                }
                ), 200)), r)
            }(e, {
                win: t
            })
              , s = function(e) {
                let {inputCb: t, doc: n, mirror: r, blockClass: i, blockSelector: o, unblockSelector: a, ignoreClass: s, ignoreSelector: u, maskInputOptions: l, maskInputFn: c, sampling: d, userTriggeredOnInput: p, maskTextClass: f, unmaskTextClass: h, maskTextSelector: g, unmaskTextSelector: m} = e;
                function _(e) {
                    let t = tu(e)
                      , r = e.isTrusted
                      , d = t && q(t.tagName);
                    if ("OPTION" === d && (t = t.parentElement),
                    !t || !d || 0 > td.indexOf(d) || eU(t, i, o, a, !0))
                        return;
                    let _ = t;
                    if (_.classList.contains(s) || u && _.matches(u))
                        return;
                    let y = V(t)
                      , S = K(_, d, y)
                      , E = !1
                      , b = j({
                        maskInputOptions: l,
                        tagName: d,
                        type: y
                    })
                      , I = eb(t, f, g, h, m, b);
                    ("radio" === y || "checkbox" === y) && (E = t.checked),
                    S = z({
                        isMasked: I,
                        element: t,
                        value: S,
                        maskInputFn: c
                    }),
                    v(t, p ? {
                        text: S,
                        isChecked: E,
                        userTriggered: r
                    } : {
                        text: S,
                        isChecked: E
                    });
                    let T = t.name;
                    "radio" === y && T && E && n.querySelectorAll(`input[type="radio"][name="${T}"]`).forEach(e => {
                        if (e !== t) {
                            let t = z({
                                isMasked: I,
                                element: e,
                                value: K(e, d, y),
                                maskInputFn: c
                            });
                            v(e, p ? {
                                text: t,
                                isChecked: !E,
                                userTriggered: !1
                            } : {
                                text: t,
                                isChecked: !E
                            })
                        }
                    }
                    )
                }
                function v(e, n) {
                    let i = tp.get(e);
                    if (!i || i.text !== n.text || i.isChecked !== n.isChecked) {
                        tp.set(e, n);
                        let i = r.getId(e);
                        to(t)({
                            ...n,
                            id: i
                        })
                    }
                }
                let y = ("last" === d.input ? ["change"] : ["input", "change"]).map(e => eC(e, to(_), n))
                  , S = n.defaultView;
                if (!S)
                    return () => {
                        y.forEach(e => e())
                    }
                    ;
                let E = S.Object.getOwnPropertyDescriptor(S.HTMLInputElement.prototype, "value")
                  , b = [[S.HTMLInputElement.prototype, "value"], [S.HTMLInputElement.prototype, "checked"], [S.HTMLSelectElement.prototype, "value"], [S.HTMLTextAreaElement.prototype, "value"], [S.HTMLSelectElement.prototype, "selectedIndex"], [S.HTMLOptionElement.prototype, "selected"]];
                return E && E.set && y.push(...b.map(e => (function e(t, n, r, i) {
                    let o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : window
                      , a = o.Object.getOwnPropertyDescriptor(t, n);
                    return o.Object.defineProperty(t, n, i ? r : {
                        set(e) {
                            eq( () => {
                                r.set.call(this, e)
                            }
                            , 0),
                            a && a.set && a.set.call(this, e)
                        }
                    }),
                    () => e(t, n, a || {}, !0)
                }
                )(e[0], e[1], {
                    set() {
                        to(_)({
                            target: this,
                            isTrusted: !1
                        })
                    }
                }, !1, S))),
                to( () => {
                    y.forEach(e => e())
                }
                )
            }(e)
              , u = function(e) {
                let {mediaInteractionCb: t, blockClass: n, blockSelector: r, unblockSelector: i, mirror: o, sampling: a, doc: s} = e
                  , u = to(e => eN(to(a => {
                    let s = tu(a);
                    if (!s || eU(s, n, r, i, !0))
                        return;
                    let {currentTime: u, volume: l, muted: c, playbackRate: d} = s;
                    t({
                        type: e,
                        id: o.getId(s),
                        currentTime: u,
                        volume: l,
                        muted: c,
                        playbackRate: d
                    })
                }
                ), a.media || 500))
                  , l = [eC("play", u(0), s), eC("pause", u(1), s), eC("seeked", u(2), s), eC("volumechange", u(3), s), eC("ratechange", u(4), s)];
                return to( () => {
                    l.forEach(e => e())
                }
                )
            }(e)
              , l = () => {}
              , c = () => {}
              , d = () => {}
              , p = () => {}
            ;
            e.recordDOM && (l = function(e, t) {
                let {styleSheetRuleCb: n, mirror: r, stylesheetManager: i} = e
                  , {win: o} = t;
                if (!o.CSSStyleSheet || !o.CSSStyleSheet.prototype)
                    return () => {}
                    ;
                let a = o.CSSStyleSheet.prototype.insertRule;
                o.CSSStyleSheet.prototype.insertRule = new Proxy(a,{
                    apply: to( (e, t, o) => {
                        let[a,s] = o
                          , {id: u, styleId: l} = th(t, r, i.styleMirror);
                        return (u && -1 !== u || l && -1 !== l) && n({
                            id: u,
                            styleId: l,
                            adds: [{
                                rule: a,
                                index: s
                            }]
                        }),
                        e.apply(t, o)
                    }
                    )
                });
                let s = o.CSSStyleSheet.prototype.deleteRule;
                o.CSSStyleSheet.prototype.deleteRule = new Proxy(s,{
                    apply: to( (e, t, o) => {
                        let[a] = o
                          , {id: s, styleId: u} = th(t, r, i.styleMirror);
                        return (s && -1 !== s || u && -1 !== u) && n({
                            id: s,
                            styleId: u,
                            removes: [{
                                index: a
                            }]
                        }),
                        e.apply(t, o)
                    }
                    )
                });
                let u;
                o.CSSStyleSheet.prototype.replace && (u = o.CSSStyleSheet.prototype.replace,
                o.CSSStyleSheet.prototype.replace = new Proxy(u,{
                    apply: to( (e, t, o) => {
                        let[a] = o
                          , {id: s, styleId: u} = th(t, r, i.styleMirror);
                        return (s && -1 !== s || u && -1 !== u) && n({
                            id: s,
                            styleId: u,
                            replace: a
                        }),
                        e.apply(t, o)
                    }
                    )
                }));
                let l;
                o.CSSStyleSheet.prototype.replaceSync && (l = o.CSSStyleSheet.prototype.replaceSync,
                o.CSSStyleSheet.prototype.replaceSync = new Proxy(l,{
                    apply: to( (e, t, o) => {
                        let[a] = o
                          , {id: s, styleId: u} = th(t, r, i.styleMirror);
                        return (s && -1 !== s || u && -1 !== u) && n({
                            id: s,
                            styleId: u,
                            replaceSync: a
                        }),
                        e.apply(t, o)
                    }
                    )
                }));
                let c = {};
                tv("CSSGroupingRule") ? c.CSSGroupingRule = o.CSSGroupingRule : (tv("CSSMediaRule") && (c.CSSMediaRule = o.CSSMediaRule),
                tv("CSSConditionRule") && (c.CSSConditionRule = o.CSSConditionRule),
                tv("CSSSupportsRule") && (c.CSSSupportsRule = o.CSSSupportsRule));
                let d = {};
                return Object.entries(c).forEach(e => {
                    let[t,o] = e;
                    d[t] = {
                        insertRule: o.prototype.insertRule,
                        deleteRule: o.prototype.deleteRule
                    },
                    o.prototype.insertRule = new Proxy(d[t].insertRule,{
                        apply: to( (e, t, o) => {
                            let[a,s] = o
                              , {id: u, styleId: l} = th(t.parentStyleSheet, r, i.styleMirror);
                            return (u && -1 !== u || l && -1 !== l) && n({
                                id: u,
                                styleId: l,
                                adds: [{
                                    rule: a,
                                    index: [...tf(t), s || 0]
                                }]
                            }),
                            e.apply(t, o)
                        }
                        )
                    }),
                    o.prototype.deleteRule = new Proxy(d[t].deleteRule,{
                        apply: to( (e, t, o) => {
                            let[a] = o
                              , {id: s, styleId: u} = th(t.parentStyleSheet, r, i.styleMirror);
                            return (s && -1 !== s || u && -1 !== u) && n({
                                id: s,
                                styleId: u,
                                removes: [{
                                    index: [...tf(t), a]
                                }]
                            }),
                            e.apply(t, o)
                        }
                        )
                    })
                }
                ),
                to( () => {
                    o.CSSStyleSheet.prototype.insertRule = a,
                    o.CSSStyleSheet.prototype.deleteRule = s,
                    u && (o.CSSStyleSheet.prototype.replace = u),
                    l && (o.CSSStyleSheet.prototype.replaceSync = l),
                    Object.entries(c).forEach(e => {
                        let[t,n] = e;
                        n.prototype.insertRule = d[t].insertRule,
                        n.prototype.deleteRule = d[t].deleteRule
                    }
                    )
                }
                )
            }(e, {
                win: t
            }),
            c = tg(e, e.doc),
            d = function(e, t) {
                let {styleDeclarationCb: n, mirror: r, ignoreCSSAttributes: i, stylesheetManager: o} = e
                  , {win: a} = t
                  , s = a.CSSStyleDeclaration.prototype.setProperty;
                a.CSSStyleDeclaration.prototype.setProperty = new Proxy(s,{
                    apply: to( (e, t, a) => {
                        let[u,l,c] = a;
                        if (i.has(u))
                            return s.apply(t, [u, l, c]);
                        let {id: d, styleId: p} = th(ta([t, "access", e => e.parentRule, "optionalAccess", e => e.parentStyleSheet]), r, o.styleMirror);
                        return (d && -1 !== d || p && -1 !== p) && n({
                            id: d,
                            styleId: p,
                            set: {
                                property: u,
                                value: l,
                                priority: c
                            },
                            index: tf(t.parentRule)
                        }),
                        e.apply(t, a)
                    }
                    )
                });
                let u = a.CSSStyleDeclaration.prototype.removeProperty;
                return a.CSSStyleDeclaration.prototype.removeProperty = new Proxy(u,{
                    apply: to( (e, t, a) => {
                        let[s] = a;
                        if (i.has(s))
                            return u.apply(t, [s]);
                        let {id: l, styleId: c} = th(ta([t, "access", e => e.parentRule, "optionalAccess", e => e.parentStyleSheet]), r, o.styleMirror);
                        return (l && -1 !== l || c && -1 !== c) && n({
                            id: l,
                            styleId: c,
                            remove: {
                                property: s
                            },
                            index: tf(t.parentRule)
                        }),
                        e.apply(t, a)
                    }
                    )
                }),
                to( () => {
                    a.CSSStyleDeclaration.prototype.setProperty = s,
                    a.CSSStyleDeclaration.prototype.removeProperty = u
                }
                )
            }(e, {
                win: t
            }),
            e.collectFonts && (p = function(e) {
                let {fontCb: t, doc: n} = e
                  , r = n.defaultView;
                if (!r)
                    return () => {}
                    ;
                let i = []
                  , o = new WeakMap
                  , a = r.FontFace;
                r.FontFace = function(e, t, n) {
                    let r = new a(e,t,n);
                    return o.set(r, {
                        family: e,
                        buffer: "string" != typeof t,
                        descriptors: n,
                        fontSource: "string" == typeof t ? t : JSON.stringify(Array.from(new Uint8Array(t)))
                    }),
                    r
                }
                ;
                let s = eA(n.fonts, "add", function(e) {
                    return function(n) {
                        return eq(to( () => {
                            let e = o.get(n);
                            e && (t(e),
                            o.delete(n))
                        }
                        ), 0),
                        e.apply(this, [n])
                    }
                });
                return i.push( () => {
                    r.FontFace = a
                }
                ),
                i.push(s),
                to( () => {
                    i.forEach(e => e())
                }
                )
            }(e)));
            let f = function(e) {
                let {doc: t, mirror: n, blockClass: r, blockSelector: i, unblockSelector: o, selectionCb: a} = e
                  , s = !0
                  , u = to( () => {
                    let e = t.getSelection();
                    if (!e || s && ta([e, "optionalAccess", e => e.isCollapsed]))
                        return;
                    s = e.isCollapsed || !1;
                    let u = []
                      , l = e.rangeCount || 0;
                    for (let t = 0; t < l; t++) {
                        let {startContainer: a, startOffset: s, endContainer: l, endOffset: c} = e.getRangeAt(t);
                        !(eU(a, r, i, o, !0) || eU(l, r, i, o, !0)) && u.push({
                            start: n.getId(a),
                            startOffset: s,
                            end: n.getId(l),
                            endOffset: c
                        })
                    }
                    a({
                        ranges: u
                    })
                }
                );
                return u(),
                eC("selectionchange", u)
            }(e)
              , h = function(e) {
                let {doc: t, customElementCb: n} = e
                  , r = t.defaultView;
                return r && r.customElements ? eA(r.customElements, "define", function(e) {
                    return function(t, r, i) {
                        try {
                            n({
                                define: {
                                    name: t
                                }
                            })
                        } catch (e) {}
                        return e.apply(this, [t, r, i])
                    }
                }) : () => {}
            }(e)
              , g = [];
            for (let n of e.plugins)
                g.push(n.observer(n.callback, t, n.options));
            return to( () => {
                ts.forEach(e => e.reset()),
                ta([n, "optionalAccess", e => e.disconnect, "call", e => e()]),
                r(),
                i(),
                o(),
                a(),
                s(),
                u(),
                l(),
                c(),
                d(),
                p(),
                f(),
                h(),
                g.forEach(e => e())
            }
            )
        }
        function t_(e) {
            return void 0 !== window[e]
        }
        function tv(e) {
            return !!(void 0 !== window[e] && window[e].prototype && "insertRule"in window[e].prototype && "deleteRule"in window[e].prototype)
        }
        class ty {
            constructor(e) {
                this.generateIdFn = e,
                this.iframeIdToRemoteIdMap = new WeakMap,
                this.iframeRemoteIdToIdMap = new WeakMap
            }
            getId(e, t, n, r) {
                let i = n || this.getIdToRemoteIdMap(e)
                  , o = r || this.getRemoteIdToIdMap(e)
                  , a = i.get(t);
                return !a && (a = this.generateIdFn(),
                i.set(t, a),
                o.set(a, t)),
                a
            }
            getIds(e, t) {
                let n = this.getIdToRemoteIdMap(e)
                  , r = this.getRemoteIdToIdMap(e);
                return t.map(t => this.getId(e, t, n, r))
            }
            getRemoteId(e, t, n) {
                let r = n || this.getRemoteIdToIdMap(e);
                if ("number" != typeof t)
                    return t;
                let i = r.get(t);
                return i ? i : -1
            }
            getRemoteIds(e, t) {
                let n = this.getRemoteIdToIdMap(e);
                return t.map(t => this.getRemoteId(e, t, n))
            }
            reset(e) {
                if (!e) {
                    this.iframeIdToRemoteIdMap = new WeakMap,
                    this.iframeRemoteIdToIdMap = new WeakMap;
                    return
                }
                this.iframeIdToRemoteIdMap.delete(e),
                this.iframeRemoteIdToIdMap.delete(e)
            }
            getIdToRemoteIdMap(e) {
                let t = this.iframeIdToRemoteIdMap.get(e);
                return !t && (t = new Map,
                this.iframeIdToRemoteIdMap.set(e, t)),
                t
            }
            getRemoteIdToIdMap(e) {
                let t = this.iframeRemoteIdToIdMap.get(e);
                return !t && (t = new Map,
                this.iframeRemoteIdToIdMap.set(e, t)),
                t
            }
        }
        function tS(e) {
            let t, n = e[0], r = 1;
            for (; r < e.length; ) {
                let i = e[r]
                  , o = e[r + 1];
                if (r += 2,
                ("optionalAccess" === i || "optionalCall" === i) && null == n)
                    return;
                "access" === i || "optionalAccess" === i ? (t = n,
                n = o(n)) : ("call" === i || "optionalCall" === i) && (n = o(function() {
                    for (var e = arguments.length, r = Array(e), i = 0; i < e; i++)
                        r[i] = arguments[i];
                    return n.call(t, ...r)
                }),
                t = void 0)
            }
            return n
        }
        class tE {
            constructor() {
                this.crossOriginIframeMirror = new ty(eo),
                this.crossOriginIframeRootIdMap = new WeakMap
            }
            addIframe() {}
            addLoadListener() {}
            attachIframe() {}
        }
        class tb {
            constructor(e) {
                this.iframes = new WeakMap,
                this.crossOriginIframeMap = new WeakMap,
                this.crossOriginIframeMirror = new ty(eo),
                this.crossOriginIframeRootIdMap = new WeakMap,
                this.mutationCb = e.mutationCb,
                this.wrappedEmit = e.wrappedEmit,
                this.stylesheetManager = e.stylesheetManager,
                this.recordCrossOriginIframes = e.recordCrossOriginIframes,
                this.crossOriginIframeStyleMirror = new ty(this.stylesheetManager.styleMirror.generateId.bind(this.stylesheetManager.styleMirror)),
                this.mirror = e.mirror,
                this.recordCrossOriginIframes && window.addEventListener("message", this.handleMessage.bind(this))
            }
            addIframe(e) {
                this.iframes.set(e, !0),
                e.contentWindow && this.crossOriginIframeMap.set(e.contentWindow, e)
            }
            addLoadListener(e) {
                this.loadListener = e
            }
            attachIframe(e, t) {
                this.mutationCb({
                    adds: [{
                        parentId: this.mirror.getId(e),
                        nextId: null,
                        node: t
                    }],
                    removes: [],
                    texts: [],
                    attributes: [],
                    isAttachIframe: !0
                }),
                tS([this, "access", e => e.loadListener, "optionalCall", t => t(e)]);
                let n = e6(e);
                n && n.adoptedStyleSheets && n.adoptedStyleSheets.length > 0 && this.stylesheetManager.adoptStyleSheets(n.adoptedStyleSheets, this.mirror.getId(n))
            }
            handleMessage(e) {
                if ("rrweb" !== e.data.type || e.origin !== e.data.origin || !e.source)
                    return;
                let t = this.crossOriginIframeMap.get(e.source);
                if (!t)
                    return;
                let n = this.transformCrossOriginEvent(t, e.data.event);
                n && this.wrappedEmit(n, e.data.isCheckout)
            }
            transformCrossOriginEvent(e, t) {
                switch (t.type) {
                case eV.FullSnapshot:
                    {
                        this.crossOriginIframeMirror.reset(e),
                        this.crossOriginIframeStyleMirror.reset(e),
                        this.replaceIdOnNode(t.data.node, e);
                        let n = t.data.node.id;
                        return this.crossOriginIframeRootIdMap.set(e, n),
                        this.patchRootIdOnNode(t.data.node, n),
                        {
                            timestamp: t.timestamp,
                            type: eV.IncrementalSnapshot,
                            data: {
                                source: eX.Mutation,
                                adds: [{
                                    parentId: this.mirror.getId(e),
                                    nextId: null,
                                    node: t.data.node
                                }],
                                removes: [],
                                texts: [],
                                attributes: [],
                                isAttachIframe: !0
                            }
                        }
                    }
                case eV.Meta:
                case eV.Load:
                case eV.DomContentLoaded:
                    break;
                case eV.Plugin:
                    return t;
                case eV.Custom:
                    return this.replaceIds(t.data.payload, e, ["id", "parentId", "previousId", "nextId"]),
                    t;
                case eV.IncrementalSnapshot:
                    switch (t.data.source) {
                    case eX.Mutation:
                        return t.data.adds.forEach(t => {
                            this.replaceIds(t, e, ["parentId", "nextId", "previousId"]),
                            this.replaceIdOnNode(t.node, e);
                            let n = this.crossOriginIframeRootIdMap.get(e);
                            n && this.patchRootIdOnNode(t.node, n)
                        }
                        ),
                        t.data.removes.forEach(t => {
                            this.replaceIds(t, e, ["parentId", "id"])
                        }
                        ),
                        t.data.attributes.forEach(t => {
                            this.replaceIds(t, e, ["id"])
                        }
                        ),
                        t.data.texts.forEach(t => {
                            this.replaceIds(t, e, ["id"])
                        }
                        ),
                        t;
                    case eX.Drag:
                    case eX.TouchMove:
                    case eX.MouseMove:
                        return t.data.positions.forEach(t => {
                            this.replaceIds(t, e, ["id"])
                        }
                        ),
                        t;
                    case eX.ViewportResize:
                        return !1;
                    case eX.MediaInteraction:
                    case eX.MouseInteraction:
                    case eX.Scroll:
                    case eX.CanvasMutation:
                    case eX.Input:
                        return this.replaceIds(t.data, e, ["id"]),
                        t;
                    case eX.StyleSheetRule:
                    case eX.StyleDeclaration:
                        return this.replaceIds(t.data, e, ["id"]),
                        this.replaceStyleIds(t.data, e, ["styleId"]),
                        t;
                    case eX.Font:
                        return t;
                    case eX.Selection:
                        return t.data.ranges.forEach(t => {
                            this.replaceIds(t, e, ["start", "end"])
                        }
                        ),
                        t;
                    case eX.AdoptedStyleSheet:
                        return this.replaceIds(t.data, e, ["id"]),
                        this.replaceStyleIds(t.data, e, ["styleIds"]),
                        tS([t, "access", e => e.data, "access", e => e.styles, "optionalAccess", e => e.forEach, "call", t => t(t => {
                            this.replaceStyleIds(t, e, ["styleId"])
                        }
                        )]),
                        t
                    }
                }
                return !1
            }
            replace(e, t, n, r) {
                for (let i of r)
                    (Array.isArray(t[i]) || "number" == typeof t[i]) && (Array.isArray(t[i]) ? t[i] = e.getIds(n, t[i]) : t[i] = e.getId(n, t[i]));
                return t
            }
            replaceIds(e, t, n) {
                return this.replace(this.crossOriginIframeMirror, e, t, n)
            }
            replaceStyleIds(e, t, n) {
                return this.replace(this.crossOriginIframeStyleMirror, e, t, n)
            }
            replaceIdOnNode(e, t) {
                this.replaceIds(e, t, ["id", "rootId"]),
                "childNodes"in e && e.childNodes.forEach(e => {
                    this.replaceIdOnNode(e, t)
                }
                )
            }
            patchRootIdOnNode(e, t) {
                e.type !== P.Document && !e.rootId && (e.rootId = t),
                "childNodes"in e && e.childNodes.forEach(e => {
                    this.patchRootIdOnNode(e, t)
                }
                )
            }
        }
        class tI {
            init() {}
            addShadowRoot() {}
            observeAttachShadow() {}
            reset() {}
        }
        class tT {
            constructor(e) {
                this.shadowDoms = new WeakSet,
                this.restoreHandlers = [],
                this.mutationCb = e.mutationCb,
                this.scrollCb = e.scrollCb,
                this.bypassOptions = e.bypassOptions,
                this.mirror = e.mirror,
                this.init()
            }
            init() {
                this.reset(),
                this.patchAttachShadow(Element, document)
            }
            addShadowRoot(e, t) {
                if (!W(e) || this.shadowDoms.has(e))
                    return;
                this.shadowDoms.add(e),
                this.bypassOptions.canvasManager.addShadowRoot(e);
                let n = tl({
                    ...this.bypassOptions,
                    doc: t,
                    mutationCb: this.mutationCb,
                    mirror: this.mirror,
                    shadowDomManager: this
                }, e);
                this.restoreHandlers.push( () => n.disconnect()),
                this.restoreHandlers.push(tc({
                    ...this.bypassOptions,
                    scrollCb: this.scrollCb,
                    doc: e,
                    mirror: this.mirror
                })),
                eq( () => {
                    e.adoptedStyleSheets && e.adoptedStyleSheets.length > 0 && this.bypassOptions.stylesheetManager.adoptStyleSheets(e.adoptedStyleSheets, this.mirror.getId(e.host)),
                    this.restoreHandlers.push(tg({
                        mirror: this.mirror,
                        stylesheetManager: this.bypassOptions.stylesheetManager
                    }, e))
                }
                , 0)
            }
            observeAttachShadow(e) {
                let t = e6(e)
                  , n = function(e) {
                    try {
                        return e.contentWindow
                    } catch (e) {}
                }(e);
                t && n && this.patchAttachShadow(n.Element, t)
            }
            patchAttachShadow(e, t) {
                let n = this;
                this.restoreHandlers.push(eA(e.prototype, "attachShadow", function(e) {
                    return function(r) {
                        let i = e.call(this, r);
                        return this.shadowRoot && ej(this) && n.addShadowRoot(this.shadowRoot, t),
                        i
                    }
                }))
            }
            reset() {
                this.restoreHandlers.forEach(e => {
                    try {
                        e()
                    } catch (e) {}
                }
                ),
                this.restoreHandlers = [],
                this.shadowDoms = new WeakSet,
                this.bypassOptions.canvasManager.resetShadowRoots()
            }
        }
        class tw {
            reset() {}
            freeze() {}
            unfreeze() {}
            lock() {}
            unlock() {}
            snapshot() {}
            addWindow() {}
            addShadowRoot() {}
            resetShadowRoots() {}
        }
        class tC {
            constructor(e) {
                this.trackedLinkElements = new WeakSet,
                this.styleMirror = new eH,
                this.mutationCb = e.mutationCb,
                this.adoptedStyleSheetCb = e.adoptedStyleSheetCb
            }
            attachLinkElement(e, t) {
                "_cssText"in t.attributes && this.mutationCb({
                    adds: [],
                    removes: [],
                    texts: [],
                    attributes: [{
                        id: t.id,
                        attributes: t.attributes
                    }]
                }),
                this.trackLinkElement(e)
            }
            trackLinkElement(e) {
                !this.trackedLinkElements.has(e) && (this.trackedLinkElements.add(e),
                this.trackStylesheetInLinkElement(e))
            }
            adoptStyleSheets(e, t) {
                if (0 === e.length)
                    return;
                let n = {
                    id: t,
                    styleIds: []
                }
                  , r = [];
                for (let t of e) {
                    let e;
                    this.styleMirror.has(t) ? e = this.styleMirror.getId(t) : (e = this.styleMirror.add(t),
                    r.push({
                        styleId: e,
                        rules: Array.from(t.rules || CSSRule, (e, t) => ({
                            rule: H(e),
                            index: t
                        }))
                    })),
                    n.styleIds.push(e)
                }
                r.length > 0 && (n.styles = r),
                this.adoptedStyleSheetCb(n)
            }
            reset() {
                this.styleMirror.reset(),
                this.trackedLinkElements = new WeakSet
            }
            trackStylesheetInLinkElement(e) {}
        }
        class tk {
            constructor() {
                this.nodeMap = new WeakMap,
                this.active = !1
            }
            inOtherBuffer(e, t) {
                let n = this.nodeMap.get(e);
                return n && Array.from(n).some(e => e !== t)
            }
            add(e, t) {
                !this.active && (this.active = !0,
                !function() {
                    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
                        t[n] = arguments[n];
                    eY("requestAnimationFrame")(...t)
                }( () => {
                    this.nodeMap = new WeakMap,
                    this.active = !1
                }
                )),
                this.nodeMap.set(e, (this.nodeMap.get(e) || new Set).add(t))
            }
            destroy() {}
        }
        let tx, tN;
        try {
            if (2 !== Array.from([1], e => 2 * e)[0]) {
                let e = document.createElement("iframe");
                document.body.appendChild(e),
                Array.from = (0,
                i._optionalChain)([e, "access", e => e.contentWindow, "optionalAccess", e => e.Array, "access", e => e.from]) || Array.from,
                document.body.removeChild(e)
            }
        } catch (e) {
            console.debug("Unable to override Array.from", e)
        }
        let tA = new G;
        function tO() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
              , {emit: t, checkoutEveryNms: n, checkoutEveryNth: r, blockClass: o="rr-block", blockSelector: a=null, unblockSelector: s=null, ignoreClass: u="rr-ignore", ignoreSelector: l=null, maskAllText: c=!1, maskTextClass: d="rr-mask", unmaskTextClass: p=null, maskTextSelector: f=null, unmaskTextSelector: h=null, inlineStylesheet: g=!0, maskAllInputs: m, maskInputOptions: _, slimDOMOptions: v, maskAttributeFn: y, maskInputFn: S, maskTextFn: E, maxCanvasSize: b=null, packFn: I, sampling: T={}, dataURLOptions: w={}, mousemoveWait: C, recordDOM: k=!0, recordCanvas: x=!1, recordCrossOriginIframes: N=!1, recordAfter: A="DOMContentLoaded" === e.recordAfter ? e.recordAfter : "load", userTriggeredOnInput: O=!1, collectFonts: D=!1, inlineImages: R=!1, plugins: M, keepIframeSrcFn: L= () => !1, ignoreCSSAttributes: U=new Set([]), errorHandler: P, onMutation: B, getCanvasManager: F} = e;
            ti = P;
            let W = !N || window.parent === window
              , $ = !1;
            if (!W)
                try {
                    window.parent.document && ($ = !1)
                } catch (e) {
                    $ = !0
                }
            if (W && !t)
                throw Error("emit function is required");
            if (!W && !$)
                return () => {}
                ;
            void 0 !== C && void 0 === T.mousemove && (T.mousemove = C),
            tA.reset();
            let H = !0 === m ? {
                color: !0,
                date: !0,
                "datetime-local": !0,
                email: !0,
                month: !0,
                number: !0,
                range: !0,
                search: !0,
                tel: !0,
                text: !0,
                time: !0,
                url: !0,
                week: !0,
                textarea: !0,
                select: !0,
                radio: !0,
                checkbox: !0
            } : void 0 !== _ ? _ : {}
              , j = !0 === v || "all" === v ? {
                script: !0,
                comment: !0,
                headFavicon: !0,
                headWhitespace: !0,
                headMetaSocial: !0,
                headMetaRobots: !0,
                headMetaHttpEquiv: !0,
                headMetaVerification: !0,
                headMetaAuthorship: "all" === v,
                headMetaDescKeywords: "all" === v
            } : v || {};
            !function() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window;
                if ("NodeList"in e && !e.NodeList.prototype.forEach && (e.NodeList.prototype.forEach = Array.prototype.forEach),
                "DOMTokenList"in e && !e.DOMTokenList.prototype.forEach && (e.DOMTokenList.prototype.forEach = Array.prototype.forEach),
                !Node.prototype.contains) {
                    var t = this;
                    Node.prototype.contains = function() {
                        for (var e = arguments.length, n = Array(e), r = 0; r < e; r++)
                            n[r] = arguments[r];
                        let i = n[0];
                        if (!(0 in n))
                            throw TypeError("1 argument is required");
                        do
                            if (t === i)
                                return !0;
                        while (i = i && i.parentNode);
                        return !1
                    }
                }
            }();
            let z, Y = 0, q = e => {
                for (let t of M || [])
                    t.eventProcessor && (e = t.eventProcessor(e));
                return I && !$ && (e = I(e)),
                e
            }
            ;
            tx = (e, o) => {
                if (e.timestamp = eO(),
                (0,
                i._optionalChain)([ts, "access", e => e[0], "optionalAccess", e => e.isFrozen, "call", e => e()]) && e.type !== eV.FullSnapshot && !(e.type === eV.IncrementalSnapshot && e.data.source === eX.Mutation) && ts.forEach(e => e.unfreeze()),
                W)
                    (0,
                    i._optionalChain)([t, "optionalCall", t => t(q(e), o)]);
                else if ($) {
                    let t = {
                        type: "rrweb",
                        event: q(e),
                        origin: window.location.origin,
                        isCheckout: o
                    };
                    window.parent.postMessage(t, "*")
                }
                if (e.type === eV.FullSnapshot)
                    z = e,
                    Y = 0;
                else if (e.type === eV.IncrementalSnapshot) {
                    if (e.data.source === eX.Mutation && e.data.isAttachIframe)
                        return;
                    Y++;
                    let t = r && Y >= r
                      , i = n && z && e.timestamp - z.timestamp > n;
                    (t || i) && en(!0)
                }
            }
            ;
            let J = e => {
                tx({
                    type: eV.IncrementalSnapshot,
                    data: {
                        source: eX.Mutation,
                        ...e
                    }
                })
            }
              , V = e => tx({
                type: eV.IncrementalSnapshot,
                data: {
                    source: eX.Scroll,
                    ...e
                }
            })
              , K = e => tx({
                type: eV.IncrementalSnapshot,
                data: {
                    source: eX.CanvasMutation,
                    ...e
                }
            })
              , X = new tC({
                mutationCb: J,
                adoptedStyleSheetCb: e => tx({
                    type: eV.IncrementalSnapshot,
                    data: {
                        source: eX.AdoptedStyleSheet,
                        ...e
                    }
                })
            })
              , Q = "boolean" == typeof __RRWEB_EXCLUDE_IFRAME__ && __RRWEB_EXCLUDE_IFRAME__ ? new tE : new tb({
                mirror: tA,
                mutationCb: J,
                stylesheetManager: X,
                recordCrossOriginIframes: N,
                wrappedEmit: tx
            });
            for (let e of M || [])
                e.getMirror && e.getMirror({
                    nodeMirror: tA,
                    crossOriginIframeMirror: Q.crossOriginIframeMirror,
                    crossOriginIframeStyleMirror: Q.crossOriginIframeStyleMirror
                });
            let Z = new tk
              , ee = function(e, t) {
                try {
                    return e ? e(t) : new tw
                } catch (e) {
                    return console.warn("Unable to initialize CanvasManager"),
                    new tw
                }
            }(F, {
                mirror: tA,
                win: window,
                mutationCb: e => tx({
                    type: eV.IncrementalSnapshot,
                    data: {
                        source: eX.CanvasMutation,
                        ...e
                    }
                }),
                recordCanvas: x,
                blockClass: o,
                blockSelector: a,
                unblockSelector: s,
                maxCanvasSize: b,
                sampling: T.canvas,
                dataURLOptions: w,
                errorHandler: P
            })
              , et = "boolean" == typeof __RRWEB_EXCLUDE_SHADOW_DOM__ && __RRWEB_EXCLUDE_SHADOW_DOM__ ? new tI : new tT({
                mutationCb: J,
                scrollCb: V,
                bypassOptions: {
                    onMutation: B,
                    blockClass: o,
                    blockSelector: a,
                    unblockSelector: s,
                    maskAllText: c,
                    maskTextClass: d,
                    unmaskTextClass: p,
                    maskTextSelector: f,
                    unmaskTextSelector: h,
                    inlineStylesheet: g,
                    maskInputOptions: H,
                    dataURLOptions: w,
                    maskAttributeFn: y,
                    maskTextFn: E,
                    maskInputFn: S,
                    recordCanvas: x,
                    inlineImages: R,
                    sampling: T,
                    slimDOMOptions: j,
                    iframeManager: Q,
                    stylesheetManager: X,
                    canvasManager: ee,
                    keepIframeSrcFn: L,
                    processedNodeManager: Z
                },
                mirror: tA
            })
              , en = function() {
                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                if (!k)
                    return;
                tx({
                    type: eV.Meta,
                    data: {
                        href: window.location.href,
                        width: eM(),
                        height: eR()
                    }
                }, e),
                X.reset(),
                et.init(),
                ts.forEach(e => e.lock());
                let t = function(e, t) {
                    let {mirror: n=new G, blockClass: r="rr-block", blockSelector: i=null, unblockSelector: o=null, maskAllText: a=!1, maskTextClass: s="rr-mask", unmaskTextClass: u=null, maskTextSelector: l=null, unmaskTextSelector: c=null, inlineStylesheet: d=!0, inlineImages: p=!1, recordCanvas: f=!1, maskAllInputs: h=!1, maskAttributeFn: g, maskTextFn: m, maskInputFn: _, slimDOM: v=!1, dataURLOptions: y, preserveWhiteSpace: S, onSerialize: E, onIframeLoad: b, iframeLoadTimeout: I, onStylesheetLoad: T, stylesheetLoadTimeout: w, keepIframeSrcFn: C= () => !1} = t || {};
                    return eT(e, {
                        doc: e,
                        mirror: n,
                        blockClass: r,
                        blockSelector: i,
                        unblockSelector: o,
                        maskAllText: a,
                        maskTextClass: s,
                        unmaskTextClass: u,
                        maskTextSelector: l,
                        unmaskTextSelector: c,
                        skipChild: !1,
                        inlineStylesheet: d,
                        maskInputOptions: !0 === h ? {
                            color: !0,
                            date: !0,
                            "datetime-local": !0,
                            email: !0,
                            month: !0,
                            number: !0,
                            range: !0,
                            search: !0,
                            tel: !0,
                            text: !0,
                            time: !0,
                            url: !0,
                            week: !0,
                            textarea: !0,
                            select: !0
                        } : !1 === h ? {} : h,
                        maskAttributeFn: g,
                        maskTextFn: m,
                        maskInputFn: _,
                        slimDOMOptions: !0 === v || "all" === v ? {
                            script: !0,
                            comment: !0,
                            headFavicon: !0,
                            headWhitespace: !0,
                            headMetaDescKeywords: "all" === v,
                            headMetaSocial: !0,
                            headMetaRobots: !0,
                            headMetaHttpEquiv: !0,
                            headMetaAuthorship: !0,
                            headMetaVerification: !0
                        } : !1 === v ? {} : v,
                        dataURLOptions: y,
                        inlineImages: p,
                        recordCanvas: f,
                        preserveWhiteSpace: S,
                        onSerialize: E,
                        onIframeLoad: b,
                        iframeLoadTimeout: I,
                        onStylesheetLoad: T,
                        stylesheetLoadTimeout: w,
                        keepIframeSrcFn: C,
                        newlyAddedElement: !1
                    })
                }(document, {
                    mirror: tA,
                    blockClass: o,
                    blockSelector: a,
                    unblockSelector: s,
                    maskAllText: c,
                    maskTextClass: d,
                    unmaskTextClass: p,
                    maskTextSelector: f,
                    unmaskTextSelector: h,
                    inlineStylesheet: g,
                    maskAllInputs: H,
                    maskAttributeFn: y,
                    maskInputFn: S,
                    maskTextFn: E,
                    slimDOM: j,
                    dataURLOptions: w,
                    recordCanvas: x,
                    inlineImages: R,
                    onSerialize: e => {
                        eF(e, tA) && Q.addIframe(e),
                        eW(e, tA) && X.trackLinkElement(e),
                        e$(e) && et.addShadowRoot(e.shadowRoot, document)
                    }
                    ,
                    onIframeLoad: (e, t) => {
                        Q.attachIframe(e, t),
                        e.contentWindow && ee.addWindow(e.contentWindow),
                        et.observeAttachShadow(e)
                    }
                    ,
                    onStylesheetLoad: (e, t) => {
                        X.attachLinkElement(e, t)
                    }
                    ,
                    keepIframeSrcFn: L
                });
                if (!t)
                    return console.warn("Failed to snapshot the document");
                tx({
                    type: eV.FullSnapshot,
                    data: {
                        node: t,
                        initialOffset: eD(window)
                    }
                }),
                ts.forEach(e => e.unlock()),
                document.adoptedStyleSheets && document.adoptedStyleSheets.length > 0 && X.adoptStyleSheets(document.adoptedStyleSheets, tA.getId(document))
            };
            tN = en;
            try {
                let e = []
                  , t = e => to(tm)({
                    onMutation: B,
                    mutationCb: J,
                    mousemoveCb: (e, t) => tx({
                        type: eV.IncrementalSnapshot,
                        data: {
                            source: t,
                            positions: e
                        }
                    }),
                    mouseInteractionCb: e => tx({
                        type: eV.IncrementalSnapshot,
                        data: {
                            source: eX.MouseInteraction,
                            ...e
                        }
                    }),
                    scrollCb: V,
                    viewportResizeCb: e => tx({
                        type: eV.IncrementalSnapshot,
                        data: {
                            source: eX.ViewportResize,
                            ...e
                        }
                    }),
                    inputCb: e => tx({
                        type: eV.IncrementalSnapshot,
                        data: {
                            source: eX.Input,
                            ...e
                        }
                    }),
                    mediaInteractionCb: e => tx({
                        type: eV.IncrementalSnapshot,
                        data: {
                            source: eX.MediaInteraction,
                            ...e
                        }
                    }),
                    styleSheetRuleCb: e => tx({
                        type: eV.IncrementalSnapshot,
                        data: {
                            source: eX.StyleSheetRule,
                            ...e
                        }
                    }),
                    styleDeclarationCb: e => tx({
                        type: eV.IncrementalSnapshot,
                        data: {
                            source: eX.StyleDeclaration,
                            ...e
                        }
                    }),
                    canvasMutationCb: K,
                    fontCb: e => tx({
                        type: eV.IncrementalSnapshot,
                        data: {
                            source: eX.Font,
                            ...e
                        }
                    }),
                    selectionCb: e => {
                        tx({
                            type: eV.IncrementalSnapshot,
                            data: {
                                source: eX.Selection,
                                ...e
                            }
                        })
                    }
                    ,
                    customElementCb: e => {
                        tx({
                            type: eV.IncrementalSnapshot,
                            data: {
                                source: eX.CustomElement,
                                ...e
                            }
                        })
                    }
                    ,
                    blockClass: o,
                    ignoreClass: u,
                    ignoreSelector: l,
                    maskAllText: c,
                    maskTextClass: d,
                    unmaskTextClass: p,
                    maskTextSelector: f,
                    unmaskTextSelector: h,
                    maskInputOptions: H,
                    inlineStylesheet: g,
                    sampling: T,
                    recordDOM: k,
                    recordCanvas: x,
                    inlineImages: R,
                    userTriggeredOnInput: O,
                    collectFonts: D,
                    doc: e,
                    maskAttributeFn: y,
                    maskInputFn: S,
                    maskTextFn: E,
                    keepIframeSrcFn: L,
                    blockSelector: a,
                    unblockSelector: s,
                    slimDOMOptions: j,
                    dataURLOptions: w,
                    mirror: tA,
                    iframeManager: Q,
                    stylesheetManager: X,
                    shadowDomManager: et,
                    processedNodeManager: Z,
                    canvasManager: ee,
                    ignoreCSSAttributes: U,
                    plugins: (0,
                    i._optionalChain)([M, "optionalAccess", e => e.filter, "call", e => e(e => e.observer), "optionalAccess", e => e.map, "call", e => e(e => ({
                        observer: e.observer,
                        options: e.options,
                        callback: t => tx({
                            type: eV.Plugin,
                            data: {
                                plugin: e.name,
                                payload: t
                            }
                        })
                    }))]) || []
                }, {});
                Q.addLoadListener(n => {
                    try {
                        e.push(t(n.contentDocument))
                    } catch (e) {
                        console.warn(e)
                    }
                }
                );
                let n = () => {
                    en(),
                    e.push(t(document))
                }
                ;
                return "interactive" === document.readyState || "complete" === document.readyState ? n() : (e.push(eC("DOMContentLoaded", () => {
                    tx({
                        type: eV.DomContentLoaded,
                        data: {}
                    }),
                    "DOMContentLoaded" === A && n()
                }
                )),
                e.push(eC("load", () => {
                    tx({
                        type: eV.Load,
                        data: {}
                    }),
                    "load" === A && n()
                }
                , window))),
                () => {
                    e.forEach(e => e()),
                    Z.destroy(),
                    tN = void 0,
                    ti = void 0
                }
            } catch (e) {
                console.warn(e)
            }
        }
        tO.mirror = tA,
        tO.takeFullSnapshot = function(e) {
            if (!tN)
                throw Error("please take full snapshot after start recording");
            tN(e)
        }
        ;
        function tD(e) {
            return e > 9999999999 ? e : 1e3 * e
        }
        function tR(e) {
            return e > 9999999999 ? e / 1e3 : e
        }
        function tM(e, t) {
            "sentry.transaction" !== t.category && (["ui.click", "ui.input"].includes(t.category) ? e.triggerUserActivity() : e.checkAndHandleExpiredSession(),
            e.addUpdate( () => (e.throttledAddEvent({
                type: eV.Custom,
                timestamp: 1e3 * (t.timestamp || 0),
                data: {
                    tag: "breadcrumb",
                    payload: (0,
                    a.normalize)(t, 10, 1e3)
                }
            }),
            "console" === t.category)))
        }
        function tL(e) {
            return e.closest("button,a") || e
        }
        function tU(e) {
            let t = tP(e);
            return t && t instanceof Element ? tL(t) : t
        }
        function tP(e) {
            return function(e) {
                return "object" == typeof e && !!e && "target"in e
            }(e) ? e.target : e
        }
        let tB, tF = new Set([eX.Mutation, eX.StyleSheetRule, eX.StyleDeclaration, eX.AdoptedStyleSheet, eX.CanvasMutation, eX.Selection, eX.MediaInteraction]);
        class tW {
            constructor(e, t, n=tM) {
                this._lastMutation = 0,
                this._lastScroll = 0,
                this._clicks = [],
                this._timeout = t.timeout / 1e3,
                this._threshold = t.threshold / 1e3,
                this._scrollTimeout = t.scrollTimeout / 1e3,
                this._replay = e,
                this._ignoreSelector = t.ignoreSelector,
                this._addBreadcrumbEvent = n
            }
            addListeners() {
                var e;
                let t = (e = () => {
                    this._lastMutation = tH()
                }
                ,
                !tB && (tB = [],
                function() {
                    (0,
                    s.fill)(D, "open", function(e) {
                        return function() {
                            for (var t = arguments.length, n = Array(t), r = 0; r < t; r++)
                                n[r] = arguments[r];
                            if (tB)
                                try {
                                    tB.forEach(e => e())
                                } catch (e) {}
                            return e.apply(D, n)
                        }
                    })
                }()),
                tB.push(e),
                () => {
                    let t = tB ? tB.indexOf(e) : -1;
                    t > -1 && tB.splice(t, 1)
                }
                );
                this._teardown = () => {
                    t(),
                    this._clicks = [],
                    this._lastMutation = 0,
                    this._lastScroll = 0
                }
            }
            removeListeners() {
                this._teardown && this._teardown(),
                this._checkClickTimeout && clearTimeout(this._checkClickTimeout)
            }
            handleClick(e, t) {
                if (function(e, t) {
                    return !!(!t$.includes(e.tagName) || "INPUT" === e.tagName && !["submit", "button"].includes(e.getAttribute("type") || "") || "A" === e.tagName && (e.hasAttribute("download") || e.hasAttribute("target") && "_self" !== e.getAttribute("target")) || t && e.matches(t)) || !1
                }(t, this._ignoreSelector) || !function(e) {
                    return !!(e.data && "number" == typeof e.data.nodeId && e.timestamp)
                }(e))
                    return;
                let n = {
                    timestamp: tR(e.timestamp),
                    clickBreadcrumb: e,
                    clickCount: 0,
                    node: t
                };
                !this._clicks.some(e => e.node === n.node && 1 > Math.abs(e.timestamp - n.timestamp)) && (this._clicks.push(n),
                1 === this._clicks.length && this._scheduleCheckClicks())
            }
            registerMutation() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Date.now();
                this._lastMutation = tR(e)
            }
            registerScroll() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Date.now();
                this._lastScroll = tR(e)
            }
            registerClick(e) {
                let t = tL(e);
                this._handleMultiClick(t)
            }
            _handleMultiClick(e) {
                this._getClicks(e).forEach(e => {
                    e.clickCount++
                }
                )
            }
            _getClicks(e) {
                return this._clicks.filter(t => t.node === e)
            }
            _checkClicks() {
                let e = []
                  , t = tH();
                for (let n of (this._clicks.forEach(n => {
                    !n.mutationAfter && this._lastMutation && (n.mutationAfter = n.timestamp <= this._lastMutation ? this._lastMutation - n.timestamp : void 0),
                    !n.scrollAfter && this._lastScroll && (n.scrollAfter = n.timestamp <= this._lastScroll ? this._lastScroll - n.timestamp : void 0),
                    n.timestamp + this._timeout <= t && e.push(n)
                }
                ),
                e)) {
                    let e = this._clicks.indexOf(n);
                    e > -1 && (this._generateBreadcrumbs(n),
                    this._clicks.splice(e, 1))
                }
                this._clicks.length && this._scheduleCheckClicks()
            }
            _generateBreadcrumbs(e) {
                let t = this._replay
                  , n = e.scrollAfter && e.scrollAfter <= this._scrollTimeout
                  , r = e.mutationAfter && e.mutationAfter <= this._threshold
                  , {clickCount: i, clickBreadcrumb: o} = e;
                if (!n && !r) {
                    let n = 1e3 * Math.min(e.mutationAfter || this._timeout, this._timeout)
                      , r = n < 1e3 * this._timeout ? "mutation" : "timeout"
                      , a = {
                        type: "default",
                        message: o.message,
                        timestamp: o.timestamp,
                        category: "ui.slowClickDetected",
                        data: {
                            ...o.data,
                            url: D.location.href,
                            route: t.getCurrentRoute(),
                            timeAfterClickMs: n,
                            endReason: r,
                            clickCount: i || 1
                        }
                    };
                    this._addBreadcrumbEvent(t, a);
                    return
                }
                if (i > 1) {
                    let e = {
                        type: "default",
                        message: o.message,
                        timestamp: o.timestamp,
                        category: "ui.multiClick",
                        data: {
                            ...o.data,
                            url: D.location.href,
                            route: t.getCurrentRoute(),
                            clickCount: i,
                            metric: !0
                        }
                    };
                    this._addBreadcrumbEvent(t, e)
                }
            }
            _scheduleCheckClicks() {
                this._checkClickTimeout && clearTimeout(this._checkClickTimeout),
                this._checkClickTimeout = (0,
                k.setTimeout)( () => this._checkClicks(), 1e3)
            }
        }
        let t$ = ["A", "BUTTON", "INPUT"];
        function tH() {
            return Date.now() / 1e3
        }
        function tG(e) {
            return {
                timestamp: Date.now() / 1e3,
                type: "default",
                ...e
            }
        }
        var tj, tz;
        (tz = tj || (tj = {}))[tz.Document = 0] = "Document",
        tz[tz.DocumentType = 1] = "DocumentType",
        tz[tz.Element = 2] = "Element",
        tz[tz.Text = 3] = "Text",
        tz[tz.CDATA = 4] = "CDATA",
        tz[tz.Comment = 5] = "Comment";
        let tY = new Set(["id", "class", "aria-label", "role", "name", "alt", "title", "data-test-id", "data-testid", "disabled", "aria-disabled", "data-sentry-component"])
          , tq = e => t => {
            if (!e.isEnabled())
                return;
            let n = function(e) {
                let {target: t, message: n} = function(e) {
                    let t = "click" === e.name, n, r = null;
                    try {
                        r = t ? tU(e.event) : tP(e.event),
                        n = (0,
                        u.htmlTreeAsString)(r, {
                            maxStringLength: 200
                        }) || "<unknown>"
                    } catch (e) {
                        n = "<unknown>"
                    }
                    return {
                        target: r,
                        message: n
                    }
                }(e);
                return tG({
                    category: `ui.${e.name}`,
                    ...tJ(t, n)
                })
            }(t);
            if (!n)
                return;
            let r = "click" === t.name
              , i = r ? t.event : void 0;
            r && e.clickDetector && i && i.target && !i.altKey && !i.metaKey && !i.ctrlKey && !i.shiftKey && !function(e, t, n) {
                e.handleClick(t, n)
            }(e.clickDetector, n, tU(t.event)),
            tM(e, n)
        }
        ;
        function tJ(e, t) {
            let n = tO.mirror.getId(e)
              , r = n && tO.mirror.getNode(n)
              , i = r && tO.mirror.getMeta(r)
              , o = i && function(e) {
                return e.type === tj.Element
            }(i) ? i : null;
            return {
                message: t,
                data: o ? {
                    nodeId: n,
                    node: {
                        id: n,
                        tagName: o.tagName,
                        textContent: Array.from(o.childNodes).map(e => e.type === tj.Text && e.textContent).filter(Boolean).map(e => e.trim()).join(""),
                        attributes: function(e) {
                            let t = {};
                            for (let n in !e["data-sentry-component"] && e["data-sentry-element"] && (e["data-sentry-component"] = e["data-sentry-element"]),
                            e)
                                if (tY.has(n)) {
                                    let r = n;
                                    ("data-testid" === n || "data-test-id" === n) && (r = "testId"),
                                    t[r] = e[n]
                                }
                            return t
                        }(o.attributes)
                    }
                } : {}
            }
        }
        let tV = {
            resource: function(e) {
                let {entryType: t, initiatorType: n, name: r, responseEnd: i, startTime: o, decodedBodySize: a, encodedBodySize: s, responseStatus: u, transferSize: l} = e;
                return ["fetch", "xmlhttprequest"].includes(n) ? null : {
                    type: `${t}.${n}`,
                    start: tQ(o),
                    end: tQ(i),
                    name: r,
                    data: {
                        size: l,
                        statusCode: u,
                        decodedBodySize: a,
                        encodedBodySize: s
                    }
                }
            },
            paint: function(e) {
                let {duration: t, entryType: n, name: r, startTime: i} = e
                  , o = tQ(i);
                return {
                    type: n,
                    name: r,
                    start: o,
                    end: o + t,
                    data: void 0
                }
            },
            navigation: function(e) {
                let {entryType: t, name: n, decodedBodySize: r, duration: i, domComplete: o, encodedBodySize: a, domContentLoadedEventStart: s, domContentLoadedEventEnd: u, domInteractive: l, loadEventStart: c, loadEventEnd: d, redirectCount: p, startTime: f, transferSize: h, type: g} = e;
                return 0 === i ? null : {
                    type: `${t}.${g}`,
                    start: tQ(f),
                    end: tQ(o),
                    name: n,
                    data: {
                        size: h,
                        decodedBodySize: r,
                        encodedBodySize: a,
                        duration: i,
                        domInteractive: l,
                        domContentLoadedEventStart: s,
                        domContentLoadedEventEnd: u,
                        loadEventStart: c,
                        loadEventEnd: d,
                        domComplete: o,
                        redirectCount: p
                    }
                }
            }
        };
        function tK(e, t) {
            return n => {
                let {metric: r} = n;
                t.replayPerformanceEntries.push(e(r))
            }
        }
        function tX(e) {
            let t = tV[e.entryType];
            return t ? t(e) : null
        }
        function tQ(e) {
            return ((l.browserPerformanceTimeOrigin || D.performance.timeOrigin) + e) / 1e3
        }
        function tZ(e) {
            let t = e.entries[e.entries.length - 1];
            return t3(e, "largest-contentful-paint", t && t.element ? [t.element] : void 0)
        }
        function t0(e) {
            let t = []
              , n = [];
            for (let r of e.entries)
                if (void 0 !== r.sources) {
                    let e = [];
                    for (let t of r.sources)
                        if (t.node) {
                            n.push(t.node);
                            let r = tO.mirror.getId(t.node);
                            r && e.push(r)
                        }
                    t.push({
                        value: r.value,
                        nodeIds: e.length ? e : void 0
                    })
                }
            return t3(e, "cumulative-layout-shift", n, t)
        }
        function t1(e) {
            let t = e.entries[e.entries.length - 1];
            return t3(e, "first-input-delay", t && t.target ? [t.target] : void 0)
        }
        function t2(e) {
            let t = e.entries[e.entries.length - 1];
            return t3(e, "interaction-to-next-paint", t && t.target ? [t.target] : void 0)
        }
        function t3(e, t, n, r) {
            let i = e.value
              , o = e.rating
              , a = tQ(i);
            return {
                type: "web-vital",
                name: t,
                start: a,
                end: a,
                data: {
                    value: i,
                    size: i,
                    rating: o,
                    nodeIds: n ? n.map(e => tO.mirror.getId(e)) : void 0,
                    attributions: r
                }
            }
        }
        let t5 = "undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__
          , t4 = ["info", "warn", "error", "log"]
          , t6 = "[Replay] ";
        function t9(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "info";
            (0,
            c.addBreadcrumb)({
                category: "console",
                data: {
                    logger: "replay"
                },
                level: t,
                message: `${t6}${e}`
            }, {
                level: t
            })
        }
        let t8 = function() {
            let e = !1
              , t = !1
              , n = {
                exception: () => void 0,
                infoTick: () => void 0,
                setConfig: n => {
                    e = n.captureExceptions,
                    t = n.traceInternals
                }
            };
            return t5 ? (t4.forEach(e => {
                n[e] = function() {
                    for (var n = arguments.length, r = Array(n), i = 0; i < n; i++)
                        r[i] = arguments[i];
                    (0,
                    d.logger)[e](t6, ...r),
                    t && t9(r.join(""), (0,
                    p.severityLevelFromString)(e))
                }
            }
            ),
            n.exception = function(r) {
                for (var i = arguments.length, o = Array(i > 1 ? i - 1 : 0), a = 1; a < i; a++)
                    o[a - 1] = arguments[a];
                o.length && n.error && n.error(...o),
                d.logger.error(t6, r),
                e ? (0,
                f.captureException)(r) : t && t9(r, "error")
            }
            ,
            n.infoTick = function() {
                for (var e = arguments.length, n = Array(e), r = 0; r < e; r++)
                    n[r] = arguments[r];
                d.logger.info(t6, ...n),
                t && setTimeout( () => t9(n[0]), 0)
            }
            ) : t4.forEach(e => {
                n[e] = () => void 0
            }
            ),
            n
        }();
        class t7 extends Error {
            constructor() {
                super("Event buffer exceeded maximum size of 20000000.")
            }
        }
        class ne {
            constructor() {
                this.events = [],
                this._totalSize = 0,
                this.hasCheckout = !1,
                this.waitForCheckout = !1
            }
            get hasEvents() {
                return this.events.length > 0
            }
            get type() {
                return "sync"
            }
            destroy() {
                this.events = []
            }
            async addEvent(e) {
                let t = JSON.stringify(e).length;
                if (this._totalSize += t,
                this._totalSize > 2e7)
                    throw new t7;
                this.events.push(e)
            }
            finish() {
                return new Promise(e => {
                    let t = this.events;
                    this.clear(),
                    e(JSON.stringify(t))
                }
                )
            }
            clear() {
                this.events = [],
                this._totalSize = 0,
                this.hasCheckout = !1
            }
            getEarliestTimestamp() {
                let e = this.events.map(e => e.timestamp).sort()[0];
                return e ? tD(e) : null
            }
        }
        class nt {
            constructor(e) {
                this._worker = e,
                this._id = 0
            }
            ensureReady() {
                return this._ensureReadyPromise ? this._ensureReadyPromise : (this._ensureReadyPromise = new Promise( (e, t) => {
                    this._worker.addEventListener("message", n => {
                        let {data: r} = n;
                        r.success ? e() : t()
                    }
                    , {
                        once: !0
                    }),
                    this._worker.addEventListener("error", e => {
                        t(e)
                    }
                    , {
                        once: !0
                    })
                }
                ),
                this._ensureReadyPromise)
            }
            destroy() {
                t5 && t8.info("Destroying compression worker"),
                this._worker.terminate()
            }
            postMessage(e, t) {
                let n = this._getAndIncrementId();
                return new Promise( (r, i) => {
                    let o = t => {
                        let {data: a} = t;
                        if (a.method === e) {
                            if (a.id === n) {
                                if (this._worker.removeEventListener("message", o),
                                !a.success) {
                                    t5 && t8.error("Error in compression worker: ", a.response),
                                    i(Error("Error in compression worker"));
                                    return
                                }
                                r(a.response)
                            }
                        }
                    }
                    ;
                    this._worker.addEventListener("message", o),
                    this._worker.postMessage({
                        id: n,
                        method: e,
                        arg: t
                    })
                }
                )
            }
            _getAndIncrementId() {
                return this._id++
            }
        }
        class nn {
            constructor(e) {
                this._worker = new nt(e),
                this._earliestTimestamp = null,
                this._totalSize = 0,
                this.hasCheckout = !1,
                this.waitForCheckout = !1
            }
            get hasEvents() {
                return !!this._earliestTimestamp
            }
            get type() {
                return "worker"
            }
            ensureReady() {
                return this._worker.ensureReady()
            }
            destroy() {
                this._worker.destroy()
            }
            addEvent(e) {
                let t = tD(e.timestamp);
                (!this._earliestTimestamp || t < this._earliestTimestamp) && (this._earliestTimestamp = t);
                let n = JSON.stringify(e);
                return (this._totalSize += n.length,
                this._totalSize > 2e7) ? Promise.reject(new t7) : this._sendEventToWorker(n)
            }
            finish() {
                return this._finishRequest()
            }
            clear() {
                this._earliestTimestamp = null,
                this._totalSize = 0,
                this.hasCheckout = !1,
                this._worker.postMessage("clear").then(null, e => {
                    t5 && t8.exception(e, 'Sending "clear" message to worker failed', e)
                }
                )
            }
            getEarliestTimestamp() {
                return this._earliestTimestamp
            }
            _sendEventToWorker(e) {
                return this._worker.postMessage("addEvent", e)
            }
            async _finishRequest() {
                let e = await this._worker.postMessage("finish");
                return this._earliestTimestamp = null,
                this._totalSize = 0,
                e
            }
        }
        class nr {
            constructor(e) {
                this._fallback = new ne,
                this._compression = new nn(e),
                this._used = this._fallback,
                this._ensureWorkerIsLoadedPromise = this._ensureWorkerIsLoaded()
            }
            get waitForCheckout() {
                return this._used.waitForCheckout
            }
            get type() {
                return this._used.type
            }
            get hasEvents() {
                return this._used.hasEvents
            }
            get hasCheckout() {
                return this._used.hasCheckout
            }
            set hasCheckout(e) {
                this._used.hasCheckout = e
            }
            set waitForCheckout(e) {
                this._used.waitForCheckout = e
            }
            destroy() {
                this._fallback.destroy(),
                this._compression.destroy()
            }
            clear() {
                return this._used.clear()
            }
            getEarliestTimestamp() {
                return this._used.getEarliestTimestamp()
            }
            addEvent(e) {
                return this._used.addEvent(e)
            }
            async finish() {
                return await this.ensureWorkerIsLoaded(),
                this._used.finish()
            }
            ensureWorkerIsLoaded() {
                return this._ensureWorkerIsLoadedPromise
            }
            async _ensureWorkerIsLoaded() {
                try {
                    await this._compression.ensureReady()
                } catch (e) {
                    t5 && t8.exception(e, "Failed to load the compression worker, falling back to simple buffer");
                    return
                }
                await this._switchToCompressionWorker()
            }
            async _switchToCompressionWorker() {
                let {events: e, hasCheckout: t, waitForCheckout: n} = this._fallback
                  , r = [];
                for (let t of e)
                    r.push(this._compression.addEvent(t));
                this._compression.hasCheckout = t,
                this._compression.waitForCheckout = n,
                this._used = this._compression;
                try {
                    await Promise.all(r),
                    this._fallback.clear()
                } catch (e) {
                    t5 && t8.exception(e, "Failed to add events when switching buffers.")
                }
            }
        }
        function ni() {
            try {
                return "sessionStorage"in D && !!D.sessionStorage
            } catch (e) {
                return !1
            }
        }
        function no(e) {
            return void 0 !== e && Math.random() < e
        }
        function na(e) {
            let t = Date.now()
              , n = e.id || (0,
            h.uuid4)()
              , r = e.started || t
              , i = e.lastActivity || t
              , o = e.segmentId || 0
              , a = e.sampled;
            return {
                id: n,
                started: r,
                lastActivity: i,
                segmentId: o,
                sampled: a,
                previousSessionId: e.previousSessionId
            }
        }
        function ns(e) {
            if (ni())
                try {
                    D.sessionStorage.setItem(R, JSON.stringify(e))
                } catch (e) {}
        }
        function nu(e) {
            let {sessionSampleRate: t, allowBuffering: n, stickySession: r=!1} = e
              , {previousSessionId: i} = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            var o, a;
            let s = na({
                sampled: (o = t,
                a = n,
                no(o) ? "session" : !!a && "buffer"),
                previousSessionId: i
            });
            return r && ns(s),
            s
        }
        function nl(e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : +new Date;
            return null === e || void 0 === t || !!(t < 0) || 0 !== t && e + t <= n
        }
        function nc(e, t) {
            let {maxReplayDuration: n, sessionIdleExpire: r, targetTime: i=Date.now()} = t;
            return nl(e.started, n, i) || nl(e.lastActivity, r, i)
        }
        function nd(e, t) {
            let {sessionIdleExpire: n, maxReplayDuration: r} = t;
            return !!nc(e, {
                sessionIdleExpire: n,
                maxReplayDuration: r
            }) && ("buffer" !== e.sampled || 0 !== e.segmentId) || !1
        }
        function np(e, t) {
            let {sessionIdleExpire: n, maxReplayDuration: r, previousSessionId: i} = e
              , o = t.stickySession && function() {
                if (!ni())
                    return null;
                try {
                    let e = D.sessionStorage.getItem(R);
                    if (!e)
                        return null;
                    let t = JSON.parse(e);
                    return t5 && t8.infoTick("Loading existing session"),
                    na(t)
                } catch (e) {
                    return null
                }
            }();
            return o ? nd(o, {
                sessionIdleExpire: n,
                maxReplayDuration: r
            }) ? (t5 && t8.infoTick("Session in sessionStorage is expired, creating new one..."),
            nu(t, {
                previousSessionId: o.id
            })) : o : (t5 && t8.infoTick("Creating new session"),
            nu(t, {
                previousSessionId: i
            }))
        }
        function nf(e, t, n) {
            return !!ng(e, t) && (nh(e, t, n),
            !0)
        }
        async function nh(e, t, n) {
            let {eventBuffer: r} = e;
            if (!r || r.waitForCheckout && !n)
                return null;
            let i = "buffer" === e.recordingMode;
            try {
                n && i && r.clear(),
                n && (r.hasCheckout = !0,
                r.waitForCheckout = !1);
                let o = e.getOptions()
                  , a = function(e, t) {
                    try {
                        if ("function" == typeof t && e.type === eV.Custom)
                            return t(e)
                    } catch (e) {
                        return t5 && t8.exception(e, "An error occurred in the `beforeAddRecordingEvent` callback, skipping the event..."),
                        null
                    }
                    return e
                }(t, o.beforeAddRecordingEvent);
                if (!a)
                    return;
                return await r.addEvent(a)
            } catch (o) {
                let t = o && o instanceof t7;
                if (t && i)
                    return r.clear(),
                    r.waitForCheckout = !0,
                    null;
                e.handleException(o),
                await e.stop({
                    reason: t ? "addEventSizeExceeded" : "addEvent"
                });
                let n = (0,
                g.getClient)();
                n && n.recordDroppedEvent("internal_sdk_error", "replay")
            }
        }
        function ng(e, t) {
            if (!e.eventBuffer || e.isPaused() || !e.isEnabled())
                return !1;
            let n = tD(t.timestamp);
            return !(n + e.timeouts.sessionIdlePause < Date.now()) && (!(n > e.getContext().initialTimestamp + e.getOptions().maxReplayDuration) || (t5 && t8.infoTick(`Skipping event with timestamp ${n} because it is after maxReplayDuration`),
            !1))
        }
        function nm(e) {
            return !e.type
        }
        function n_(e) {
            return "transaction" === e.type
        }
        function nv(e) {
            return "feedback" === e.type
        }
        function ny(e) {
            return !!e.category
        }
        function nS() {
            let e = (0,
            g.getCurrentScope)().getPropagationContext().dsc;
            e && delete e.replay_id;
            let t = (0,
            m.getActiveSpan)();
            if (t) {
                let e = (0,
                _.getDynamicSamplingContextFromSpan)(t);
                delete e.replay_id
            }
        }
        function nE(e, t) {
            return t.map(t => {
                let {type: n, start: r, end: i, name: o, data: a} = t
                  , s = e.throttledAddEvent({
                    type: eV.Custom,
                    timestamp: r,
                    data: {
                        tag: "performanceSpan",
                        payload: {
                            op: n,
                            description: o,
                            startTimestamp: r,
                            endTimestamp: i,
                            data: a
                        }
                    }
                });
                return "string" == typeof s ? Promise.resolve(null) : s
            }
            )
        }
        function nb(e, t) {
            if (!!e.isEnabled() && null !== t) {
                var n, r;
                if (n = e,
                r = t.name,
                !((!t5 || !n.getOptions()._experiments.traceInternals) && (0,
                v.isSentryRequestUrl)(r, (0,
                g.getClient)())))
                    e.addUpdate( () => (nE(e, [t]),
                    !0))
            }
        }
        function nI(e) {
            if (!e)
                return;
            let t = new TextEncoder;
            try {
                if ("string" == typeof e)
                    return t.encode(e).length;
                if (e instanceof URLSearchParams)
                    return t.encode(e.toString()).length;
                if (e instanceof FormData) {
                    let n = nO(e);
                    return t.encode(n).length
                }
                if (e instanceof Blob)
                    return e.size;
                if (e instanceof ArrayBuffer)
                    return e.byteLength
            } catch (e) {}
        }
        function nT(e) {
            if (!e)
                return;
            let t = parseInt(e, 10);
            return isNaN(t) ? void 0 : t
        }
        function nw(e) {
            try {
                if ("string" == typeof e)
                    return [e];
                if (e instanceof URLSearchParams)
                    return [e.toString()];
                if (e instanceof FormData)
                    return [nO(e)];
                if (!e)
                    return [void 0]
            } catch (t) {
                return t5 && t8.exception(t, "Failed to serialize body", e),
                [void 0, "BODY_PARSE_ERROR"]
            }
            return t5 && t8.info("Skipping network body because of body type", e),
            [void 0, "UNPARSEABLE_BODY_TYPE"]
        }
        function nC(e, t) {
            if (!e)
                return {
                    headers: {},
                    size: void 0,
                    _meta: {
                        warnings: [t]
                    }
                };
            let n = {
                ...e._meta
            }
              , r = n.warnings || [];
            return n.warnings = [...r, t],
            e._meta = n,
            e
        }
        function nk(e, t) {
            if (!t)
                return null;
            let {startTimestamp: n, endTimestamp: r, url: i, method: o, statusCode: a, request: u, response: l} = t;
            return {
                type: e,
                start: n / 1e3,
                end: r / 1e3,
                name: i,
                data: (0,
                s.dropUndefinedKeys)({
                    method: o,
                    statusCode: a,
                    request: u,
                    response: l
                })
            }
        }
        function nx(e) {
            return {
                headers: {},
                size: e,
                _meta: {
                    warnings: ["URL_SKIPPED"]
                }
            }
        }
        function nN(e, t, n) {
            if (!t && 0 === Object.keys(e).length)
                return;
            if (!t)
                return {
                    headers: e
                };
            if (!n)
                return {
                    headers: e,
                    size: t
                };
            let r = {
                headers: e,
                size: t
            }
              , {body: i, warnings: o} = function(e) {
                if (!e || "string" != typeof e)
                    return {
                        body: e
                    };
                let t = e.length > 15e4
                  , n = function(e) {
                    let t = e[0]
                      , n = e[e.length - 1];
                    return "[" === t && "]" === n || "{" === t && "}" === n
                }(e);
                if (t) {
                    let t = e.slice(0, 15e4);
                    return n ? {
                        body: t,
                        warnings: ["MAYBE_JSON_TRUNCATED"]
                    } : {
                        body: `${t}…`,
                        warnings: ["TEXT_TRUNCATED"]
                    }
                }
                if (n)
                    try {
                        return {
                            body: JSON.parse(e)
                        }
                    } catch (e) {}
                return {
                    body: e
                }
            }(n);
            return r.body = i,
            o && o.length > 0 && (r._meta = {
                warnings: o
            }),
            r
        }
        function nA(e, t) {
            return Object.entries(e).reduce( (n, r) => {
                let[i,o] = r
                  , a = i.toLowerCase();
                return t.includes(a) && e[i] && (n[a] = o),
                n
            }
            , {})
        }
        function nO(e) {
            return new URLSearchParams(e).toString()
        }
        function nD(e, t) {
            let n = function(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : D.document.baseURI;
                if (e.startsWith("http://") || e.startsWith("https://") || e.startsWith(D.location.origin))
                    return e;
                let n = new URL(e,t);
                if (n.origin !== new URL(t).origin)
                    return e;
                let r = n.href;
                return !e.endsWith("/") && r.endsWith("/") ? r.slice(0, -1) : r
            }(e);
            return (0,
            y.stringMatchesSomePattern)(n, t)
        }
        async function nR(e, t, n) {
            try {
                let r = await nM(e, t, n)
                  , i = nk("resource.fetch", r);
                nb(n.replay, i)
            } catch (e) {
                t5 && t8.exception(e, "Failed to capture fetch breadcrumb")
            }
        }
        async function nM(e, t, n) {
            let r = Date.now()
              , {startTimestamp: i=r, endTimestamp: o=r} = t
              , {url: a, method: s, status_code: u=0, request_body_size: l, response_body_size: c} = e.data
              , d = nD(a, n.networkDetailAllowUrls) && !nD(a, n.networkDetailDenyUrls)
              , p = d ? function(e, t, n) {
                let {networkCaptureBodies: r, networkRequestHeaders: i} = e
                  , o = t ? function(e, t) {
                    return 1 === e.length && "string" != typeof e[0] ? nF(e[0], t) : 2 === e.length ? nF(e[1], t) : {}
                }(t, i) : {};
                if (!r)
                    return nN(o, n, void 0);
                let[a,s] = nw(nP(t))
                  , u = nN(o, n, a);
                return s ? nC(u, s) : u
            }(n, t.input, l) : nx(l);
            return {
                startTimestamp: i,
                endTimestamp: o,
                url: a,
                method: s,
                statusCode: u,
                request: p,
                response: await nL(d, n, t.response, c)
            }
        }
        async function nL(e, t, n, r) {
            let {networkCaptureBodies: i, networkResponseHeaders: o} = t;
            if (!e && void 0 !== r)
                return nx(r);
            let a = n ? nB(n.headers, o) : {};
            if (!n || !i && void 0 !== r)
                return nN(a, r, void 0);
            let[s,u] = await nU(n)
              , l = function(e, t) {
                let {networkCaptureBodies: n, responseBodySize: r, captureDetails: i, headers: o} = t;
                try {
                    let t = e && e.length && void 0 === r ? nI(e) : r;
                    if (!i)
                        return nx(t);
                    if (n)
                        return nN(o, t, e);
                    return nN(o, t, void 0)
                } catch (e) {
                    return t5 && t8.exception(e, "Failed to serialize response body"),
                    nN(o, r, void 0)
                }
            }(s, {
                networkCaptureBodies: i,
                responseBodySize: r,
                captureDetails: e,
                headers: a
            });
            return u ? nC(l, u) : l
        }
        async function nU(e) {
            let t = function(e) {
                try {
                    return e.clone()
                } catch (e) {
                    t5 && t8.exception(e, "Failed to clone response body")
                }
            }(e);
            if (!t)
                return [void 0, "BODY_PARSE_ERROR"];
            try {
                return [await function(e) {
                    return new Promise( (t, n) => {
                        let r = (0,
                        k.setTimeout)( () => n(Error("Timeout while trying to read response body")), 500);
                        nW(e).then(e => t(e), e => n(e)).finally( () => clearTimeout(r))
                    }
                    )
                }(t)]
            } catch (e) {
                if (e instanceof Error && e.message.indexOf("Timeout") > -1)
                    return t5 && t8.warn("Parsing text body from response timed out"),
                    [void 0, "BODY_PARSE_TIMEOUT"];
                return t5 && t8.exception(e, "Failed to get text body from response"),
                [void 0, "BODY_PARSE_ERROR"]
            }
        }
        function nP() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
            if (2 === e.length && "object" == typeof e[1])
                return e[1].body
        }
        function nB(e, t) {
            let n = {};
            return t.forEach(t => {
                e.get(t) && (n[t] = e.get(t))
            }
            ),
            n
        }
        function nF(e, t) {
            if (!e)
                return {};
            let n = e.headers;
            return n ? n instanceof Headers ? nB(n, t) : Array.isArray(n) ? {} : nA(n, t) : {}
        }
        async function nW(e) {
            return await e.text()
        }
        async function n$(e, t, n) {
            try {
                let r = function(e, t, n) {
                    let r = Date.now()
                      , {startTimestamp: i=r, endTimestamp: o=r, input: a, xhr: s} = t
                      , {url: u, method: l, status_code: c=0, request_body_size: d, response_body_size: p} = e.data;
                    if (!u)
                        return null;
                    if (!s || !nD(u, n.networkDetailAllowUrls) || nD(u, n.networkDetailDenyUrls)) {
                        let e = nx(d);
                        return {
                            startTimestamp: i,
                            endTimestamp: o,
                            url: u,
                            method: l,
                            statusCode: c,
                            request: e,
                            response: nx(p)
                        }
                    }
                    let f = s[N.SENTRY_XHR_DATA_KEY]
                      , h = f ? nA(f.request_headers, n.networkRequestHeaders) : {}
                      , g = nA(function(e) {
                        let t = e.getAllResponseHeaders();
                        return t ? t.split("\r\n").reduce( (e, t) => {
                            let[n,r] = t.split(": ");
                            return r && (e[n.toLowerCase()] = r),
                            e
                        }
                        , {}) : {}
                    }(s), n.networkResponseHeaders)
                      , [m,_] = n.networkCaptureBodies ? nw(a) : [void 0]
                      , [v,y] = n.networkCaptureBodies ? function(e) {
                        let t = [];
                        try {
                            return [e.responseText]
                        } catch (e) {
                            t.push(e)
                        }
                        try {
                            return function(e, t) {
                                try {
                                    if ("string" == typeof e)
                                        return [e];
                                    if (e instanceof Document)
                                        return [e.body.outerHTML];
                                    if ("json" === t && e && "object" == typeof e)
                                        return [JSON.stringify(e)];
                                    if (!e)
                                        return [void 0]
                                } catch (t) {
                                    return t5 && t8.exception(t, "Failed to serialize body", e),
                                    [void 0, "BODY_PARSE_ERROR"]
                                }
                                return t5 && t8.info("Skipping network body because of body type", e),
                                [void 0, "UNPARSEABLE_BODY_TYPE"]
                            }(e.response, e.responseType)
                        } catch (e) {
                            t.push(e)
                        }
                        return t5 && t8.warn("Failed to get xhr response body", ...t),
                        [void 0]
                    }(s) : [void 0]
                      , S = nN(h, d, m)
                      , E = nN(g, p, v);
                    return {
                        startTimestamp: i,
                        endTimestamp: o,
                        url: u,
                        method: l,
                        statusCode: c,
                        request: _ ? nC(S, _) : S,
                        response: y ? nC(E, y) : E
                    }
                }(e, t, n)
                  , i = nk("resource.xhr", r);
                nb(n.replay, i)
            } catch (e) {
                t5 && t8.exception(e, "Failed to capture xhr breadcrumb")
            }
        }
        async function nH(e) {
            try {
                return Promise.all(nE(e, [function(e) {
                    let {jsHeapSizeLimit: t, totalJSHeapSize: n, usedJSHeapSize: r} = e
                      , i = Date.now() / 1e3;
                    return {
                        type: "memory",
                        name: "memory",
                        start: i,
                        end: i,
                        data: {
                            memory: {
                                jsHeapSizeLimit: t,
                                totalJSHeapSize: n,
                                usedJSHeapSize: r
                            }
                        }
                    }
                }(D.performance.memory)]))
            } catch (e) {
                return []
            }
        }
        let nG = o.GLOBAL_OBJ.navigator;
        async function nj(e) {
            let {client: t, scope: n, replayId: r, event: i} = e
              , o = {
                event_id: r,
                integrations: "object" != typeof t._integrations || null === t._integrations || Array.isArray(t._integrations) ? void 0 : Object.keys(t._integrations)
            };
            t.emit("preprocessEvent", i, o);
            let a = await (0,
            E.prepareEvent)(t.getOptions(), i, o, n, t, (0,
            g.getIsolationScope)());
            if (!a)
                return null;
            a.platform = a.platform || "javascript";
            let s = t.getSdkMetadata()
              , {name: u, version: l} = s && s.sdk || {};
            return a.sdk = {
                ...a.sdk,
                name: u || "sentry.javascript.unknown",
                version: l || "0.0.0"
            },
            a
        }
        async function nz(e) {
            let {recordingData: t, replayId: n, segmentId: r, eventContext: i, timestamp: o, session: a} = e
              , s = function(e) {
                let {recordingData: t, headers: n} = e, r, i = `${JSON.stringify(n)}
`;
                if ("string" == typeof t)
                    r = `${i}${t}`;
                else {
                    let e = new TextEncoder().encode(i);
                    (r = new Uint8Array(e.length + t.length)).set(e),
                    r.set(t, e.length)
                }
                return r
            }({
                recordingData: t,
                headers: {
                    segment_id: r
                }
            })
              , {urls: u, errorIds: l, traceIds: c, initialTimestamp: d} = i
              , p = (0,
            g.getClient)()
              , f = (0,
            g.getCurrentScope)()
              , h = p && p.getTransport()
              , m = p && p.getDsn();
            if (!p || !h || !m || !a.sampled)
                return (0,
                b.resolvedSyncPromise)({});
            let _ = {
                type: "replay_event",
                replay_start_timestamp: d / 1e3,
                timestamp: o / 1e3,
                error_ids: l,
                trace_ids: c,
                urls: u,
                replay_id: n,
                segment_id: r,
                replay_type: a.sampled
            }
              , v = await nj({
                scope: f,
                client: p,
                replayId: n,
                event: _
            });
            if (!v)
                return p.recordDroppedEvent("event_processor", "replay", _),
                t5 && t8.info("An event processor returned `null`, will not send event."),
                (0,
                b.resolvedSyncPromise)({});
            var y, E, T, w;
            delete v.sdkProcessingMetadata;
            let C = (y = v,
            E = s,
            T = m,
            w = p.getOptions().tunnel,
            (0,
            S.createEnvelope)((0,
            S.createEventEnvelopeHeaders)(y, (0,
            S.getSdkMetadataForEnvelopeHeader)(y), w, T), [[{
                type: "replay_event"
            }, y], [{
                type: "replay_recording",
                length: "string" == typeof E ? new TextEncoder().encode(E).length : E.length
            }, E]])), k;
            try {
                k = await h.send(C)
            } catch (t) {
                let e = Error(M);
                try {
                    e.cause = t
                } catch (e) {}
                throw e
            }
            if ("number" == typeof k.statusCode && (k.statusCode < 200 || k.statusCode >= 300))
                throw new nY(k.statusCode);
            let x = (0,
            I.updateRateLimits)({}, k);
            if ((0,
            I.isRateLimited)(x, "replay"))
                throw new nq(x);
            return k
        }
        class nY extends Error {
            constructor(e) {
                super(`Transport returned status code ${e}`)
            }
        }
        class nq extends Error {
            constructor(e) {
                super("Rate limit hit"),
                this.rateLimits = e
            }
        }
        async function nJ(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                count: 0,
                interval: 5e3
            }
              , {recordingData: n, onError: r} = e;
            if (n.length)
                try {
                    return await nz(e),
                    !0
                } catch (n) {
                    if (n instanceof nY || n instanceof nq)
                        throw n;
                    if ((0,
                    f.setContext)("Replays", {
                        _retryCount: t.count
                    }),
                    r && r(n),
                    t.count >= 3) {
                        let e = Error(`${M} - max retries exceeded`);
                        try {
                            e.cause = n
                        } catch (e) {}
                        throw e
                    }
                    return t.interval *= ++t.count,
                    new Promise( (n, r) => {
                        (0,
                        k.setTimeout)(async () => {
                            try {
                                await nJ(e, t),
                                n(!0)
                            } catch (e) {
                                r(e)
                            }
                        }
                        , t.interval)
                    }
                    )
                }
        }
        let nV = "__THROTTLED";
        class nK {
            constructor({options: e, recordingOptions: t}) {
                nK.prototype.__init.call(this),
                nK.prototype.__init2.call(this),
                nK.prototype.__init3.call(this),
                nK.prototype.__init4.call(this),
                nK.prototype.__init5.call(this),
                nK.prototype.__init6.call(this),
                this.eventBuffer = null,
                this.performanceEntries = [],
                this.replayPerformanceEntries = [],
                this.recordingMode = "session",
                this.timeouts = {
                    sessionIdlePause: 3e5,
                    sessionIdleExpire: 9e5
                },
                this._lastActivity = Date.now(),
                this._isEnabled = !1,
                this._isPaused = !1,
                this._requiresManualStart = !1,
                this._hasInitializedCoreListeners = !1,
                this._context = {
                    errorIds: new Set,
                    traceIds: new Set,
                    urls: [],
                    initialTimestamp: Date.now(),
                    initialUrl: ""
                },
                this._recordingOptions = t,
                this._options = e,
                this._debouncedFlush = function(e, t, n) {
                    let r, i, o, a = n && n.maxWait ? Math.max(n.maxWait, t) : 0;
                    function s() {
                        return u(),
                        r = e()
                    }
                    function u() {
                        void 0 !== i && clearTimeout(i),
                        void 0 !== o && clearTimeout(o),
                        i = o = void 0
                    }
                    function l() {
                        return i && clearTimeout(i),
                        i = (0,
                        k.setTimeout)(s, t),
                        a && void 0 === o && (o = (0,
                        k.setTimeout)(s, a)),
                        r
                    }
                    return l.cancel = u,
                    l.flush = function() {
                        return void 0 !== i || void 0 !== o ? s() : r
                    }
                    ,
                    l
                }( () => this._flush(), this._options.flushMinDelay, {
                    maxWait: this._options.flushMaxDelay
                }),
                this._throttledAddEvent = function(e, t, n) {
                    let r = new Map
                      , i = e => {
                        let t = e - n;
                        r.forEach( (e, n) => {
                            n < t && r.delete(n)
                        }
                        )
                    }
                      , o = () => [...r.values()].reduce( (e, t) => e + t, 0)
                      , a = !1;
                    return function() {
                        for (var n = arguments.length, s = Array(n), u = 0; u < n; u++)
                            s[u] = arguments[u];
                        let l = Math.floor(Date.now() / 1e3);
                        if (i(l),
                        o() >= t) {
                            let e = a;
                            return a = !0,
                            e ? "__SKIPPED" : nV
                        }
                        a = !1;
                        let c = r.get(l) || 0;
                        return r.set(l, c + 1),
                        e(...s)
                    }
                }( (e, t) => {
                    var n, r, i;
                    return n = this,
                    r = e,
                    i = t,
                    ng(n, r) ? nh(n, r, i) : Promise.resolve(null)
                }
                , 300, 5);
                let {slowClickTimeout: n, slowClickIgnoreSelectors: r} = this.getOptions()
                  , i = n ? {
                    threshold: Math.min(3e3, n),
                    timeout: n,
                    scrollTimeout: 300,
                    ignoreSelector: r ? r.join(",") : ""
                } : void 0;
                if (i && (this.clickDetector = new tW(this,i)),
                t5) {
                    let t = e._experiments;
                    t8.setConfig({
                        captureExceptions: !!t.captureExceptions,
                        traceInternals: !!t.traceInternals
                    })
                }
            }
            getContext() {
                return this._context
            }
            isEnabled() {
                return this._isEnabled
            }
            isPaused() {
                return this._isPaused
            }
            isRecordingCanvas() {
                return !!this._canvas
            }
            getOptions() {
                return this._options
            }
            handleException(e) {
                t5 && t8.exception(e),
                this._options.onError && this._options.onError(e)
            }
            initializeSampling(e) {
                let {errorSampleRate: t, sessionSampleRate: n} = this._options
                  , r = t <= 0 && n <= 0;
                if (this._requiresManualStart = r,
                !r) {
                    if (this._initializeSessionForSampling(e),
                    !this.session) {
                        t5 && t8.exception(Error("Unable to initialize and create session"));
                        return
                    }
                    !1 !== this.session.sampled && (this.recordingMode = "buffer" === this.session.sampled && 0 === this.session.segmentId ? "buffer" : "session",
                    t5 && t8.infoTick(`Starting replay in ${this.recordingMode} mode`),
                    this._initializeRecording())
                }
            }
            start() {
                if (this._isEnabled && "session" === this.recordingMode) {
                    t5 && t8.info("Recording is already in progress");
                    return
                }
                if (this._isEnabled && "buffer" === this.recordingMode) {
                    t5 && t8.info("Buffering is in progress, call `flush()` to save the replay");
                    return
                }
                t5 && t8.infoTick("Starting replay in session mode"),
                this._updateUserActivity();
                let e = np({
                    maxReplayDuration: this._options.maxReplayDuration,
                    sessionIdleExpire: this.timeouts.sessionIdleExpire
                }, {
                    stickySession: this._options.stickySession,
                    sessionSampleRate: 1,
                    allowBuffering: !1
                });
                this.session = e,
                this._initializeRecording()
            }
            startBuffering() {
                if (this._isEnabled) {
                    t5 && t8.info("Buffering is in progress, call `flush()` to save the replay");
                    return
                }
                t5 && t8.infoTick("Starting replay in buffer mode");
                let e = np({
                    sessionIdleExpire: this.timeouts.sessionIdleExpire,
                    maxReplayDuration: this._options.maxReplayDuration
                }, {
                    stickySession: this._options.stickySession,
                    sessionSampleRate: 0,
                    allowBuffering: !0
                });
                this.session = e,
                this.recordingMode = "buffer",
                this._initializeRecording()
            }
            startRecording() {
                try {
                    let t = this._canvas;
                    var e;
                    let n;
                    this._stopRecording = tO({
                        ...this._recordingOptions,
                        ..."buffer" === this.recordingMode ? {
                            checkoutEveryNms: 6e4
                        } : this._options._experiments.continuousCheckout && {
                            checkoutEveryNms: Math.max(36e4, this._options._experiments.continuousCheckout)
                        },
                        emit: (e = this,
                        n = !1,
                        (t, r) => {
                            if (!e.checkAndHandleExpiredSession()) {
                                t5 && t8.warn("Received replay event after session expired.");
                                return
                            }
                            let i = r || !n;
                            n = !0,
                            e.clickDetector && !function(e, t) {
                                try {
                                    if (!function(e) {
                                        return 3 === e.type
                                    }(t))
                                        return;
                                    let {source: n} = t.data;
                                    if (tF.has(n) && e.registerMutation(t.timestamp),
                                    n === eX.Scroll && e.registerScroll(t.timestamp),
                                    function(e) {
                                        return e.data.source === eX.MouseInteraction
                                    }(t)) {
                                        let {type: n, id: r} = t.data
                                          , i = tO.mirror.getNode(r);
                                        i instanceof HTMLElement && n === eZ.Click && e.registerClick(i)
                                    }
                                } catch (e) {}
                            }(e.clickDetector, t),
                            e.addUpdate( () => {
                                if ("buffer" === e.recordingMode && i && e.setInitialState(),
                                !nf(e, t, i))
                                    return !0;
                                if (!i)
                                    return !1;
                                let n = e.session;
                                if (function(e, t) {
                                    t && e.session && 0 === e.session.segmentId && nf(e, function(e) {
                                        let t = e.getOptions();
                                        return {
                                            type: eV.Custom,
                                            timestamp: Date.now(),
                                            data: {
                                                tag: "options",
                                                payload: {
                                                    shouldRecordCanvas: e.isRecordingCanvas(),
                                                    sessionSampleRate: t.sessionSampleRate,
                                                    errorSampleRate: t.errorSampleRate,
                                                    useCompressionOption: t.useCompression,
                                                    blockAllMedia: t.blockAllMedia,
                                                    maskAllText: t.maskAllText,
                                                    maskAllInputs: t.maskAllInputs,
                                                    useCompression: !!e.eventBuffer && "worker" === e.eventBuffer.type,
                                                    networkDetailHasUrls: t.networkDetailAllowUrls.length > 0,
                                                    networkCaptureBodies: t.networkCaptureBodies,
                                                    networkRequestHasHeaders: t.networkRequestHeaders.length > 0,
                                                    networkResponseHasHeaders: t.networkResponseHeaders.length > 0
                                                }
                                            }
                                        }
                                    }(e), !1)
                                }(e, i),
                                "buffer" === e.recordingMode && n && e.eventBuffer) {
                                    let t = e.eventBuffer.getEarliestTimestamp();
                                    t && (t5 && t8.info(`Updating session start time to earliest event in buffer to ${new Date(t)}`),
                                    n.started = t,
                                    e.getOptions().stickySession && ns(n))
                                }
                                return !!n && !!n.previousSessionId || ("session" === e.recordingMode && e.flush(),
                                !0)
                            }
                            )
                        }
                        ),
                        .../iPhone|iPad|iPod/i.test(nG && nG.userAgent || "") || /Macintosh/i.test(nG && nG.userAgent || "") && nG && nG.maxTouchPoints && nG.maxTouchPoints > 1 ? {
                            sampling: {
                                mousemove: !1
                            }
                        } : {},
                        onMutation: this._onMutationHandler,
                        ...t ? {
                            recordCanvas: t.recordCanvas,
                            getCanvasManager: t.getCanvasManager,
                            sampling: t.sampling,
                            dataURLOptions: t.dataURLOptions
                        } : {}
                    })
                } catch (e) {
                    this.handleException(e)
                }
            }
            stopRecording() {
                try {
                    return this._stopRecording && (this._stopRecording(),
                    this._stopRecording = void 0),
                    !0
                } catch (e) {
                    return this.handleException(e),
                    !1
                }
            }
            async stop() {
                let {forceFlush: e=!1, reason: t} = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                if (this._isEnabled) {
                    this._isEnabled = !1;
                    try {
                        var n;
                        t5 && t8.info(`Stopping Replay${t ? ` triggered by ${t}` : ""}`),
                        nS(),
                        this._removeListeners(),
                        this.stopRecording(),
                        this._debouncedFlush.cancel(),
                        e && await this._flush({
                            force: !0
                        }),
                        this.eventBuffer && this.eventBuffer.destroy(),
                        this.eventBuffer = null,
                        n = this,
                        function() {
                            if (ni())
                                try {
                                    D.sessionStorage.removeItem(R)
                                } catch (e) {}
                        }(),
                        n.session = void 0
                    } catch (e) {
                        this.handleException(e)
                    }
                }
            }
            pause() {
                !this._isPaused && (this._isPaused = !0,
                this.stopRecording(),
                t5 && t8.info("Pausing replay"))
            }
            resume() {
                this._isPaused && this._checkSession() && (this._isPaused = !1,
                this.startRecording(),
                t5 && t8.info("Resuming replay"))
            }
            async sendBufferedReplayOrFlush() {
                let {continueRecording: e=!0} = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                if ("session" === this.recordingMode)
                    return this.flushImmediate();
                let t = Date.now();
                t5 && t8.info("Converting buffer to session"),
                await this.flushImmediate();
                let n = this.stopRecording();
                if (!!e && !!n)
                    "session" !== this.recordingMode && (this.recordingMode = "session",
                    this.session && (this._updateUserActivity(t),
                    this._updateSessionActivity(t),
                    this._maybeSaveSession()),
                    this.startRecording())
            }
            addUpdate(e) {
                let t = e();
                if ("buffer" !== this.recordingMode)
                    !0 !== t && this._debouncedFlush()
            }
            triggerUserActivity() {
                if (this._updateUserActivity(),
                !this._stopRecording) {
                    if (!this._checkSession())
                        return;
                    this.resume();
                    return
                }
                this.checkAndHandleExpiredSession(),
                this._updateSessionActivity()
            }
            updateUserActivity() {
                this._updateUserActivity(),
                this._updateSessionActivity()
            }
            conditionalFlush() {
                return "buffer" === this.recordingMode ? Promise.resolve() : this.flushImmediate()
            }
            flush() {
                return this._debouncedFlush()
            }
            flushImmediate() {
                return this._debouncedFlush(),
                this._debouncedFlush.flush()
            }
            cancelFlush() {
                this._debouncedFlush.cancel()
            }
            getSessionId() {
                return this.session && this.session.id
            }
            checkAndHandleExpiredSession() {
                if (this._lastActivity && nl(this._lastActivity, this.timeouts.sessionIdlePause) && this.session && "session" === this.session.sampled) {
                    this.pause();
                    return
                }
                return !!this._checkSession() || !1
            }
            setInitialState() {
                let e = `${D.location.pathname}${D.location.hash}${D.location.search}`
                  , t = `${D.location.origin}${e}`;
                this.performanceEntries = [],
                this.replayPerformanceEntries = [],
                this._clearContext(),
                this._context.initialUrl = t,
                this._context.initialTimestamp = Date.now(),
                this._context.urls.push(t)
            }
            throttledAddEvent(e, t) {
                let n = this._throttledAddEvent(e, t);
                if (n === nV) {
                    let e = tG({
                        category: "replay.throttled"
                    });
                    this.addUpdate( () => !nf(this, {
                        type: 5,
                        timestamp: e.timestamp || 0,
                        data: {
                            tag: "breadcrumb",
                            payload: e,
                            metric: !0
                        }
                    }))
                }
                return n
            }
            getCurrentRoute() {
                let e = this.lastActiveSpan || (0,
                m.getActiveSpan)()
                  , t = e && (0,
                m.getRootSpan)(e)
                  , n = (t && (0,
                m.spanToJSON)(t).data || {})[T.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE];
                if (t && n && ["route", "custom"].includes(n))
                    return (0,
                    m.spanToJSON)(t).description
            }
            _initializeRecording() {
                this.setInitialState(),
                this._updateSessionActivity(),
                this.eventBuffer = function(e) {
                    let {useCompression: t, workerUrl: n} = e;
                    if (t && window.Worker) {
                        let e = function(e) {
                            try {
                                let t = e || function() {
                                    return "undefined" != typeof __SENTRY_EXCLUDE_REPLAY_WORKER__ && __SENTRY_EXCLUDE_REPLAY_WORKER__ ? "" : function() {
                                        let e = new Blob(['var t=Uint8Array,n=Uint16Array,r=Int32Array,e=new t([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),i=new t([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),a=new t([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),s=function(t,e){for(var i=new n(31),a=0;a<31;++a)i[a]=e+=1<<t[a-1];var s=new r(i[30]);for(a=1;a<30;++a)for(var o=i[a];o<i[a+1];++o)s[o]=o-i[a]<<5|a;return{b:i,r:s}},o=s(e,2),f=o.b,h=o.r;f[28]=258,h[258]=28;for(var l=s(i,0).r,u=new n(32768),c=0;c<32768;++c){var v=(43690&c)>>1|(21845&c)<<1;v=(61680&(v=(52428&v)>>2|(13107&v)<<2))>>4|(3855&v)<<4,u[c]=((65280&v)>>8|(255&v)<<8)>>1}var d=function(t,r,e){for(var i=t.length,a=0,s=new n(r);a<i;++a)t[a]&&++s[t[a]-1];var o,f=new n(r);for(a=1;a<r;++a)f[a]=f[a-1]+s[a-1]<<1;if(e){o=new n(1<<r);var h=15-r;for(a=0;a<i;++a)if(t[a])for(var l=a<<4|t[a],c=r-t[a],v=f[t[a]-1]++<<c,d=v|(1<<c)-1;v<=d;++v)o[u[v]>>h]=l}else for(o=new n(i),a=0;a<i;++a)t[a]&&(o[a]=u[f[t[a]-1]++]>>15-t[a]);return o},g=new t(288);for(c=0;c<144;++c)g[c]=8;for(c=144;c<256;++c)g[c]=9;for(c=256;c<280;++c)g[c]=7;for(c=280;c<288;++c)g[c]=8;var w=new t(32);for(c=0;c<32;++c)w[c]=5;var p=d(g,9,0),y=d(w,5,0),m=function(t){return(t+7)/8|0},b=function(n,r,e){return(null==e||e>n.length)&&(e=n.length),new t(n.subarray(r,e))},M=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],E=function(t,n,r){var e=new Error(n||M[t]);if(e.code=t,Error.captureStackTrace&&Error.captureStackTrace(e,E),!r)throw e;return e},z=function(t,n,r){r<<=7&n;var e=n/8|0;t[e]|=r,t[e+1]|=r>>8},_=function(t,n,r){r<<=7&n;var e=n/8|0;t[e]|=r,t[e+1]|=r>>8,t[e+2]|=r>>16},x=function(r,e){for(var i=[],a=0;a<r.length;++a)r[a]&&i.push({s:a,f:r[a]});var s=i.length,o=i.slice();if(!s)return{t:F,l:0};if(1==s){var f=new t(i[0].s+1);return f[i[0].s]=1,{t:f,l:1}}i.sort((function(t,n){return t.f-n.f})),i.push({s:-1,f:25001});var h=i[0],l=i[1],u=0,c=1,v=2;for(i[0]={s:-1,f:h.f+l.f,l:h,r:l};c!=s-1;)h=i[i[u].f<i[v].f?u++:v++],l=i[u!=c&&i[u].f<i[v].f?u++:v++],i[c++]={s:-1,f:h.f+l.f,l:h,r:l};var d=o[0].s;for(a=1;a<s;++a)o[a].s>d&&(d=o[a].s);var g=new n(d+1),w=A(i[c-1],g,0);if(w>e){a=0;var p=0,y=w-e,m=1<<y;for(o.sort((function(t,n){return g[n.s]-g[t.s]||t.f-n.f}));a<s;++a){var b=o[a].s;if(!(g[b]>e))break;p+=m-(1<<w-g[b]),g[b]=e}for(p>>=y;p>0;){var M=o[a].s;g[M]<e?p-=1<<e-g[M]++-1:++a}for(;a>=0&&p;--a){var E=o[a].s;g[E]==e&&(--g[E],++p)}w=e}return{t:new t(g),l:w}},A=function(t,n,r){return-1==t.s?Math.max(A(t.l,n,r+1),A(t.r,n,r+1)):n[t.s]=r},D=function(t){for(var r=t.length;r&&!t[--r];);for(var e=new n(++r),i=0,a=t[0],s=1,o=function(t){e[i++]=t},f=1;f<=r;++f)if(t[f]==a&&f!=r)++s;else{if(!a&&s>2){for(;s>138;s-=138)o(32754);s>2&&(o(s>10?s-11<<5|28690:s-3<<5|12305),s=0)}else if(s>3){for(o(a),--s;s>6;s-=6)o(8304);s>2&&(o(s-3<<5|8208),s=0)}for(;s--;)o(a);s=1,a=t[f]}return{c:e.subarray(0,i),n:r}},T=function(t,n){for(var r=0,e=0;e<n.length;++e)r+=t[e]*n[e];return r},k=function(t,n,r){var e=r.length,i=m(n+2);t[i]=255&e,t[i+1]=e>>8,t[i+2]=255^t[i],t[i+3]=255^t[i+1];for(var a=0;a<e;++a)t[i+a+4]=r[a];return 8*(i+4+e)},U=function(t,r,s,o,f,h,l,u,c,v,m){z(r,m++,s),++f[256];for(var b=x(f,15),M=b.t,E=b.l,A=x(h,15),U=A.t,C=A.l,F=D(M),I=F.c,S=F.n,L=D(U),O=L.c,j=L.n,q=new n(19),B=0;B<I.length;++B)++q[31&I[B]];for(B=0;B<O.length;++B)++q[31&O[B]];for(var G=x(q,7),H=G.t,J=G.l,K=19;K>4&&!H[a[K-1]];--K);var N,P,Q,R,V=v+5<<3,W=T(f,g)+T(h,w)+l,X=T(f,M)+T(h,U)+l+14+3*K+T(q,H)+2*q[16]+3*q[17]+7*q[18];if(c>=0&&V<=W&&V<=X)return k(r,m,t.subarray(c,c+v));if(z(r,m,1+(X<W)),m+=2,X<W){N=d(M,E,0),P=M,Q=d(U,C,0),R=U;var Y=d(H,J,0);z(r,m,S-257),z(r,m+5,j-1),z(r,m+10,K-4),m+=14;for(B=0;B<K;++B)z(r,m+3*B,H[a[B]]);m+=3*K;for(var Z=[I,O],$=0;$<2;++$){var tt=Z[$];for(B=0;B<tt.length;++B){var nt=31&tt[B];z(r,m,Y[nt]),m+=H[nt],nt>15&&(z(r,m,tt[B]>>5&127),m+=tt[B]>>12)}}}else N=p,P=g,Q=y,R=w;for(B=0;B<u;++B){var rt=o[B];if(rt>255){_(r,m,N[(nt=rt>>18&31)+257]),m+=P[nt+257],nt>7&&(z(r,m,rt>>23&31),m+=e[nt]);var et=31&rt;_(r,m,Q[et]),m+=R[et],et>3&&(_(r,m,rt>>5&8191),m+=i[et])}else _(r,m,N[rt]),m+=P[rt]}return _(r,m,N[256]),m+P[256]},C=new r([65540,131080,131088,131104,262176,1048704,1048832,2114560,2117632]),F=new t(0),I=function(){for(var t=new Int32Array(256),n=0;n<256;++n){for(var r=n,e=9;--e;)r=(1&r&&-306674912)^r>>>1;t[n]=r}return t}(),S=function(){var t=-1;return{p:function(n){for(var r=t,e=0;e<n.length;++e)r=I[255&r^n[e]]^r>>>8;t=r},d:function(){return~t}}},L=function(){var t=1,n=0;return{p:function(r){for(var e=t,i=n,a=0|r.length,s=0;s!=a;){for(var o=Math.min(s+2655,a);s<o;++s)i+=e+=r[s];e=(65535&e)+15*(e>>16),i=(65535&i)+15*(i>>16)}t=e,n=i},d:function(){return(255&(t%=65521))<<24|(65280&t)<<8|(255&(n%=65521))<<8|n>>8}}},O=function(a,s,o,f,u){if(!u&&(u={l:1},s.dictionary)){var c=s.dictionary.subarray(-32768),v=new t(c.length+a.length);v.set(c),v.set(a,c.length),a=v,u.w=c.length}return function(a,s,o,f,u,c){var v=c.z||a.length,d=new t(f+v+5*(1+Math.ceil(v/7e3))+u),g=d.subarray(f,d.length-u),w=c.l,p=7&(c.r||0);if(s){p&&(g[0]=c.r>>3);for(var y=C[s-1],M=y>>13,E=8191&y,z=(1<<o)-1,_=c.p||new n(32768),x=c.h||new n(z+1),A=Math.ceil(o/3),D=2*A,T=function(t){return(a[t]^a[t+1]<<A^a[t+2]<<D)&z},F=new r(25e3),I=new n(288),S=new n(32),L=0,O=0,j=c.i||0,q=0,B=c.w||0,G=0;j+2<v;++j){var H=T(j),J=32767&j,K=x[H];if(_[J]=K,x[H]=J,B<=j){var N=v-j;if((L>7e3||q>24576)&&(N>423||!w)){p=U(a,g,0,F,I,S,O,q,G,j-G,p),q=L=O=0,G=j;for(var P=0;P<286;++P)I[P]=0;for(P=0;P<30;++P)S[P]=0}var Q=2,R=0,V=E,W=J-K&32767;if(N>2&&H==T(j-W))for(var X=Math.min(M,N)-1,Y=Math.min(32767,j),Z=Math.min(258,N);W<=Y&&--V&&J!=K;){if(a[j+Q]==a[j+Q-W]){for(var $=0;$<Z&&a[j+$]==a[j+$-W];++$);if($>Q){if(Q=$,R=W,$>X)break;var tt=Math.min(W,$-2),nt=0;for(P=0;P<tt;++P){var rt=j-W+P&32767,et=rt-_[rt]&32767;et>nt&&(nt=et,K=rt)}}}W+=(J=K)-(K=_[J])&32767}if(R){F[q++]=268435456|h[Q]<<18|l[R];var it=31&h[Q],at=31&l[R];O+=e[it]+i[at],++I[257+it],++S[at],B=j+Q,++L}else F[q++]=a[j],++I[a[j]]}}for(j=Math.max(j,B);j<v;++j)F[q++]=a[j],++I[a[j]];p=U(a,g,w,F,I,S,O,q,G,j-G,p),w||(c.r=7&p|g[p/8|0]<<3,p-=7,c.h=x,c.p=_,c.i=j,c.w=B)}else{for(j=c.w||0;j<v+w;j+=65535){var st=j+65535;st>=v&&(g[p/8|0]=w,st=v),p=k(g,p+1,a.subarray(j,st))}c.i=v}return b(d,0,f+m(p)+u)}(a,null==s.level?6:s.level,null==s.mem?Math.ceil(1.5*Math.max(8,Math.min(13,Math.log(a.length)))):12+s.mem,o,f,u)},j=function(t,n,r){for(;r;++n)t[n]=r,r>>>=8},q=function(t,n){var r=n.filename;if(t[0]=31,t[1]=139,t[2]=8,t[8]=n.level<2?4:9==n.level?2:0,t[9]=3,0!=n.mtime&&j(t,4,Math.floor(new Date(n.mtime||Date.now())/1e3)),r){t[3]=8;for(var e=0;e<=r.length;++e)t[e+10]=r.charCodeAt(e)}},B=function(t){return 10+(t.filename?t.filename.length+1:0)},G=function(){function n(n,r){if("function"==typeof n&&(r=n,n={}),this.ondata=r,this.o=n||{},this.s={l:0,i:32768,w:32768,z:32768},this.b=new t(98304),this.o.dictionary){var e=this.o.dictionary.subarray(-32768);this.b.set(e,32768-e.length),this.s.i=32768-e.length}}return n.prototype.p=function(t,n){this.ondata(O(t,this.o,0,0,this.s),n)},n.prototype.push=function(n,r){this.ondata||E(5),this.s.l&&E(4);var e=n.length+this.s.z;if(e>this.b.length){if(e>2*this.b.length-32768){var i=new t(-32768&e);i.set(this.b.subarray(0,this.s.z)),this.b=i}var a=this.b.length-this.s.z;a&&(this.b.set(n.subarray(0,a),this.s.z),this.s.z=this.b.length,this.p(this.b,!1)),this.b.set(this.b.subarray(-32768)),this.b.set(n.subarray(a),32768),this.s.z=n.length-a+32768,this.s.i=32766,this.s.w=32768}else this.b.set(n,this.s.z),this.s.z+=n.length;this.s.l=1&r,(this.s.z>this.s.w+8191||r)&&(this.p(this.b,r||!1),this.s.w=this.s.i,this.s.i-=2)},n}();var H=function(){function t(t,n){this.c=L(),this.v=1,G.call(this,t,n)}return t.prototype.push=function(t,n){this.c.p(t),G.prototype.push.call(this,t,n)},t.prototype.p=function(t,n){var r=O(t,this.o,this.v&&(this.o.dictionary?6:2),n&&4,this.s);this.v&&(function(t,n){var r=n.level,e=0==r?0:r<6?1:9==r?3:2;if(t[0]=120,t[1]=e<<6|(n.dictionary&&32),t[1]|=31-(t[0]<<8|t[1])%31,n.dictionary){var i=L();i.p(n.dictionary),j(t,2,i.d())}}(r,this.o),this.v=0),n&&j(r,r.length-4,this.c.d()),this.ondata(r,n)},t}(),J="undefined"!=typeof TextEncoder&&new TextEncoder,K="undefined"!=typeof TextDecoder&&new TextDecoder;try{K.decode(F,{stream:!0})}catch(t){}var N=function(){function t(t){this.ondata=t}return t.prototype.push=function(t,n){this.ondata||E(5),this.d&&E(4),this.ondata(P(t),this.d=n||!1)},t}();function P(n,r){if(J)return J.encode(n);for(var e=n.length,i=new t(n.length+(n.length>>1)),a=0,s=function(t){i[a++]=t},o=0;o<e;++o){if(a+5>i.length){var f=new t(a+8+(e-o<<1));f.set(i),i=f}var h=n.charCodeAt(o);h<128||r?s(h):h<2048?(s(192|h>>6),s(128|63&h)):h>55295&&h<57344?(s(240|(h=65536+(1047552&h)|1023&n.charCodeAt(++o))>>18),s(128|h>>12&63),s(128|h>>6&63),s(128|63&h)):(s(224|h>>12),s(128|h>>6&63),s(128|63&h))}return b(i,0,a)}function Q(t){return function(t,n){n||(n={});var r=S(),e=t.length;r.p(t);var i=O(t,n,B(n),8),a=i.length;return q(i,n),j(i,a-8,r.d()),j(i,a-4,e),i}(P(t))}const R=new class{constructor(){this._init()}clear(){this._init()}addEvent(t){if(!t)throw new Error("Adding invalid event");const n=this._hasEvents?",":"";this.stream.push(n+t),this._hasEvents=!0}finish(){this.stream.push("]",!0);const t=function(t){let n=0;for(const r of t)n+=r.length;const r=new Uint8Array(n);for(let n=0,e=0,i=t.length;n<i;n++){const i=t[n];r.set(i,e),e+=i.length}return r}(this._deflatedData);return this._init(),t}_init(){this._hasEvents=!1,this._deflatedData=[],this.deflate=new H,this.deflate.ondata=(t,n)=>{this._deflatedData.push(t)},this.stream=new N(((t,n)=>{this.deflate.push(t,n)})),this.stream.push("[")}},V={clear:()=>{R.clear()},addEvent:t=>R.addEvent(t),finish:()=>R.finish(),compress:t=>Q(t)};addEventListener("message",(function(t){const n=t.data.method,r=t.data.id,e=t.data.arg;if(n in V&&"function"==typeof V[n])try{const t=V[n](e);postMessage({id:r,method:n,success:!0,response:t})}catch(t){postMessage({id:r,method:n,success:!1,response:t.message}),console.error(t)}})),postMessage({id:void 0,method:"init",success:!0,response:void 0});']);
                                        return URL.createObjectURL(e)
                                    }()
                                }();
                                if (!t)
                                    return;
                                t5 && t8.info(`Using compression worker${e ? ` from ${e}` : ""}`);
                                let n = new Worker(t);
                                return new nr(n)
                            } catch (e) {
                                t5 && t8.exception(e, "Failed to create compression worker")
                            }
                        }(n);
                        if (e)
                            return e
                    }
                    return t5 && t8.info("Using simple buffer"),
                    new ne
                }({
                    useCompression: this._options.useCompression,
                    workerUrl: this._options.workerUrl
                }),
                this._removeListeners(),
                this._addListeners(),
                this._isEnabled = !0,
                this._isPaused = !1,
                this.startRecording()
            }
            _initializeSessionForSampling(e) {
                let t = this._options.errorSampleRate > 0
                  , n = np({
                    sessionIdleExpire: this.timeouts.sessionIdleExpire,
                    maxReplayDuration: this._options.maxReplayDuration,
                    previousSessionId: e
                }, {
                    stickySession: this._options.stickySession,
                    sessionSampleRate: this._options.sessionSampleRate,
                    allowBuffering: t
                });
                this.session = n
            }
            _checkSession() {
                if (!this.session)
                    return !1;
                let e = this.session;
                return !nd(e, {
                    sessionIdleExpire: this.timeouts.sessionIdleExpire,
                    maxReplayDuration: this._options.maxReplayDuration
                }) || (this._refreshSession(e),
                !1)
            }
            async _refreshSession(e) {
                this._isEnabled && (await this.stop({
                    reason: "refresh session"
                }),
                this.initializeSampling(e.id))
            }
            _addListeners() {
                try {
                    D.document.addEventListener("visibilitychange", this._handleVisibilityChange),
                    D.addEventListener("blur", this._handleWindowBlur),
                    D.addEventListener("focus", this._handleWindowFocus),
                    D.addEventListener("keydown", this._handleKeyboardEvent),
                    this.clickDetector && this.clickDetector.addListeners(),
                    !this._hasInitializedCoreListeners && (!function(e) {
                        let t = (0,
                        g.getClient)();
                        var n, r;
                        (0,
                        A.addClickKeypressInstrumentationHandler)(tq(e)),
                        (0,
                        O.addHistoryInstrumentationHandler)((n = e,
                        e => {
                            if (!n.isEnabled())
                                return;
                            let t = function(e) {
                                let {from: t, to: n} = e
                                  , r = Date.now() / 1e3;
                                return {
                                    type: "navigation.push",
                                    start: r,
                                    end: r,
                                    name: n,
                                    data: {
                                        previous: t
                                    }
                                }
                            }(e);
                            null !== t && (n.getContext().urls.push(t.name),
                            n.triggerUserActivity(),
                            n.addUpdate( () => (nE(n, [t]),
                            !1)))
                        }
                        )),
                        !function(e) {
                            let t = (0,
                            g.getClient)();
                            t && t.on("beforeAddBreadcrumb", t => (function(e, t) {
                                if (!e.isEnabled() || !ny(t))
                                    return;
                                let n = function(e) {
                                    return !ny(e) || ["fetch", "xhr", "sentry.event", "sentry.transaction"].includes(e.category) || e.category.startsWith("ui.") ? null : "console" === e.category ? function(e) {
                                        let t = e.data && e.data.arguments;
                                        if (!Array.isArray(t) || 0 === t.length)
                                            return tG(e);
                                        let n = !1
                                          , r = t.map(e => {
                                            if (!e)
                                                return e;
                                            if ("string" == typeof e)
                                                return e.length > 5e3 ? (n = !0,
                                                `${e.slice(0, 5e3)}…`) : e;
                                            if ("object" == typeof e)
                                                try {
                                                    let t = (0,
                                                    a.normalize)(e, 7);
                                                    if (JSON.stringify(t).length > 5e3)
                                                        return n = !0,
                                                        `${JSON.stringify(t, null, 2).slice(0, 5e3)}…`;
                                                    return t
                                                } catch (e) {}
                                            return e
                                        }
                                        );
                                        return tG({
                                            ...e,
                                            data: {
                                                ...e.data,
                                                arguments: r,
                                                ...n ? {
                                                    _meta: {
                                                        warnings: ["CONSOLE_ARG_TRUNCATED"]
                                                    }
                                                } : {}
                                            }
                                        })
                                    }(e) : tG(e)
                                }(t);
                                n && tM(e, n)
                            }
                            )(e, t))
                        }(e),
                        !function(e) {
                            let t = (0,
                            g.getClient)();
                            try {
                                let {networkDetailAllowUrls: n, networkDetailDenyUrls: r, networkCaptureBodies: i, networkRequestHeaders: o, networkResponseHeaders: a} = e.getOptions()
                                  , s = {
                                    replay: e,
                                    networkDetailAllowUrls: n,
                                    networkDetailDenyUrls: r,
                                    networkCaptureBodies: i,
                                    networkRequestHeaders: o,
                                    networkResponseHeaders: a
                                };
                                t && t.on("beforeAddBreadcrumb", (e, t) => (function(e, t, n) {
                                    if (t.data)
                                        try {
                                            (function(e) {
                                                return "xhr" === e.category
                                            }
                                            )(t) && function(e) {
                                                return e && e.xhr
                                            }(n) && (!function(e, t) {
                                                let {xhr: n, input: r} = t;
                                                if (!n)
                                                    return;
                                                let i = nI(r)
                                                  , o = n.getResponseHeader("content-length") ? nT(n.getResponseHeader("content-length")) : function(e, t) {
                                                    try {
                                                        let n = "json" === t && e && "object" == typeof e ? JSON.stringify(e) : e;
                                                        return nI(n)
                                                    } catch (e) {
                                                        return
                                                    }
                                                }(n.response, n.responseType);
                                                void 0 !== i && (e.data.request_body_size = i),
                                                void 0 !== o && (e.data.response_body_size = o)
                                            }(t, n),
                                            n$(t, n, e)),
                                            function(e) {
                                                return "fetch" === e.category
                                            }(t) && function(e) {
                                                return e && e.response
                                            }(n) && (!function(e, t) {
                                                let {input: n, response: r} = t
                                                  , i = nI(n ? nP(n) : void 0)
                                                  , o = r ? nT(r.headers.get("content-length")) : void 0;
                                                void 0 !== i && (e.data.request_body_size = i),
                                                void 0 !== o && (e.data.response_body_size = o)
                                            }(t, n),
                                            nR(t, n, e))
                                        } catch (e) {
                                            t5 && t8.exception(e, "Error when enriching network breadcrumb")
                                        }
                                }
                                )(s, e, t))
                            } catch (e) {}
                        }(e);
                        let i = (r = e,
                        Object.assign( (e, t) => {
                            if (!r.isEnabled() || r.isPaused())
                                return e;
                            if ("replay_event" === e.type)
                                return delete e.breadcrumbs,
                                e;
                            if (e.type && !n_(e) && !nv(e))
                                return e;
                            if (!r.checkAndHandleExpiredSession())
                                return nS(),
                                e;
                            if (nv(e)) {
                                var n, i;
                                return r.flush(),
                                e.contexts.feedback.replay_id = r.getSessionId(),
                                n = r,
                                i = e,
                                n.triggerUserActivity(),
                                n.addUpdate( () => !i.timestamp || (n.throttledAddEvent({
                                    type: eV.Custom,
                                    timestamp: 1e3 * i.timestamp,
                                    data: {
                                        tag: "breadcrumb",
                                        payload: {
                                            timestamp: i.timestamp,
                                            type: "default",
                                            category: "sentry.feedback",
                                            data: {
                                                feedbackId: i.event_id
                                            }
                                        }
                                    }
                                }),
                                !1)),
                                e
                            }
                            var o, a;
                            if (o = e,
                            a = t,
                            !o.type && o.exception && o.exception.values && o.exception.values.length && a.originalException && a.originalException.__rrweb__ && !r.getOptions()._experiments.captureExceptions)
                                return t5 && t8.log("Ignoring error from rrweb internals", e),
                                null;
                            var s, u;
                            return s = r,
                            u = e,
                            ("buffer" === s.recordingMode && u.message !== M && u.exception && !u.type && no(s.getOptions().errorSampleRate) || "session" === r.recordingMode) && (e.tags = {
                                ...e.tags,
                                replayId: r.getSessionId()
                            }),
                            e
                        }
                        , {
                            id: "Replay"
                        }));
                        if ((0,
                        f.addEventProcessor)(i),
                        t) {
                            var o, s;
                            t.on("beforeSendEvent", (o = e,
                            e => {
                                if (o.isEnabled() && !e.type)
                                    (function(e, t) {
                                        let n = t.exception && t.exception.values && t.exception.values[0] && t.exception.values[0].value;
                                        "string" == typeof n && (n.match(/(reactjs\.org\/docs\/error-decoder\.html\?invariant=|react\.dev\/errors\/)(418|419|422|423|425)/) || n.match(/(does not match server-rendered HTML|Hydration failed because)/i)) && tM(e, tG({
                                            category: "replay.hydrate-error",
                                            data: {
                                                url: (0,
                                                u.getLocationHref)()
                                            }
                                        }))
                                    }
                                    )(o, e)
                            }
                            )),
                            t.on("afterSendEvent", (s = e,
                            (e, t) => {
                                if (!s.isEnabled() || e.type && !n_(e))
                                    return;
                                let n = t && t.statusCode;
                                if (n && !(n < 200) && !(n >= 300)) {
                                    if (n_(e)) {
                                        (function(e, t) {
                                            let n = e.getContext();
                                            t.contexts && t.contexts.trace && t.contexts.trace.trace_id && n.traceIds.size < 100 && n.traceIds.add(t.contexts.trace.trace_id)
                                        }
                                        )(s, e);
                                        return
                                    }
                                    (function(e, t) {
                                        let n = e.getContext();
                                        if (t.event_id && n.errorIds.size < 100 && n.errorIds.add(t.event_id),
                                        "buffer" !== e.recordingMode || !t.tags || !t.tags.replayId)
                                            return;
                                        let {beforeErrorSampling: r} = e.getOptions();
                                        ("function" != typeof r || r(t)) && (0,
                                        k.setTimeout)(async () => {
                                            try {
                                                await e.sendBufferedReplayOrFlush()
                                            } catch (t) {
                                                e.handleException(t)
                                            }
                                        }
                                        )
                                    }
                                    )(s, e)
                                }
                            }
                            )),
                            t.on("createDsc", t => {
                                let n = e.getSessionId();
                                n && e.isEnabled() && "session" === e.recordingMode && e.checkAndHandleExpiredSession() && (t.replay_id = n)
                            }
                            ),
                            t.on("spanStart", t => {
                                e.lastActiveSpan = t
                            }
                            ),
                            t.on("spanEnd", t => {
                                e.lastActiveSpan = t
                            }
                            ),
                            t.on("beforeSendFeedback", (t, n) => {
                                let r = e.getSessionId();
                                n && n.includeReplay && e.isEnabled() && r && t.contexts && t.contexts.feedback && (t.contexts.feedback.replay_id = r)
                            }
                            )
                        }
                    }(this),
                    this._hasInitializedCoreListeners = !0)
                } catch (e) {
                    this.handleException(e)
                }
                this._performanceCleanupCallback = function(e) {
                    function t(t) {
                        !e.performanceEntries.includes(t) && e.performanceEntries.push(t)
                    }
                    function n(e) {
                        let {entries: n} = e;
                        n.forEach(t)
                    }
                    let r = [];
                    return ["navigation", "paint", "resource"].forEach(e => {
                        r.push((0,
                        x.addPerformanceInstrumentationHandler)(e, n))
                    }
                    ),
                    r.push((0,
                    x.addLcpInstrumentationHandler)(tK(tZ, e)), (0,
                    x.addClsInstrumentationHandler)(tK(t0, e)), (0,
                    x.addFidInstrumentationHandler)(tK(t1, e)), (0,
                    x.addInpInstrumentationHandler)(tK(t2, e))),
                    () => {
                        r.forEach(e => e())
                    }
                }(this)
            }
            _removeListeners() {
                try {
                    D.document.removeEventListener("visibilitychange", this._handleVisibilityChange),
                    D.removeEventListener("blur", this._handleWindowBlur),
                    D.removeEventListener("focus", this._handleWindowFocus),
                    D.removeEventListener("keydown", this._handleKeyboardEvent),
                    this.clickDetector && this.clickDetector.removeListeners(),
                    this._performanceCleanupCallback && this._performanceCleanupCallback()
                } catch (e) {
                    this.handleException(e)
                }
            }
            __init() {
                this._handleVisibilityChange = () => {
                    "visible" === D.document.visibilityState ? this._doChangeToForegroundTasks() : this._doChangeToBackgroundTasks()
                }
            }
            __init2() {
                this._handleWindowBlur = () => {
                    let e = tG({
                        category: "ui.blur"
                    });
                    this._doChangeToBackgroundTasks(e)
                }
            }
            __init3() {
                this._handleWindowFocus = () => {
                    let e = tG({
                        category: "ui.focus"
                    });
                    this._doChangeToForegroundTasks(e)
                }
            }
            __init4() {
                this._handleKeyboardEvent = e => {
                    !function(e, t) {
                        if (!e.isEnabled())
                            return;
                        e.updateUserActivity();
                        let n = function(e) {
                            let {metaKey: t, shiftKey: n, ctrlKey: r, altKey: i, key: o, target: a} = e;
                            if (!a || function(e) {
                                return "INPUT" === e.tagName || "TEXTAREA" === e.tagName || e.isContentEditable
                            }(a) || !o)
                                return null;
                            let s = t || r || i
                              , l = 1 === o.length;
                            if (!s && l)
                                return null;
                            let c = (0,
                            u.htmlTreeAsString)(a, {
                                maxStringLength: 200
                            }) || "<unknown>"
                              , d = tJ(a, c);
                            return tG({
                                category: "ui.keyDown",
                                message: c,
                                data: {
                                    ...d.data,
                                    metaKey: t,
                                    shiftKey: n,
                                    ctrlKey: r,
                                    altKey: i,
                                    key: o
                                }
                            })
                        }(t);
                        n && tM(e, n)
                    }(this, e)
                }
            }
            _doChangeToBackgroundTasks(e) {
                if (!!this.session)
                    !nc(this.session, {
                        maxReplayDuration: this._options.maxReplayDuration,
                        sessionIdleExpire: this.timeouts.sessionIdleExpire
                    }) && (e && this._createCustomBreadcrumb(e),
                    this.conditionalFlush())
            }
            _doChangeToForegroundTasks(e) {
                if (!!this.session) {
                    if (!this.checkAndHandleExpiredSession()) {
                        t5 && t8.info("Document has become active, but session has expired");
                        return
                    }
                    e && this._createCustomBreadcrumb(e)
                }
            }
            _updateUserActivity() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Date.now();
                this._lastActivity = e
            }
            _updateSessionActivity() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Date.now();
                this.session && (this.session.lastActivity = e,
                this._maybeSaveSession())
            }
            _createCustomBreadcrumb(e) {
                this.addUpdate( () => {
                    this.throttledAddEvent({
                        type: eV.Custom,
                        timestamp: e.timestamp || 0,
                        data: {
                            tag: "breadcrumb",
                            payload: e
                        }
                    })
                }
                )
            }
            _addPerformanceEntries() {
                let e = this.performanceEntries.map(tX).filter(Boolean).concat(this.replayPerformanceEntries);
                if (this.performanceEntries = [],
                this.replayPerformanceEntries = [],
                this._requiresManualStart) {
                    let t = this._context.initialTimestamp / 1e3;
                    e = e.filter(e => e.start >= t)
                }
                return Promise.all(nE(this, e))
            }
            _clearContext() {
                this._context.errorIds.clear(),
                this._context.traceIds.clear(),
                this._context.urls = []
            }
            _updateInitialTimestampFromEventBuffer() {
                let {session: e, eventBuffer: t} = this;
                if (!e || !t || this._requiresManualStart || e.segmentId)
                    return;
                let n = t.getEarliestTimestamp();
                n && n < this._context.initialTimestamp && (this._context.initialTimestamp = n)
            }
            _popEventContext() {
                let e = {
                    initialTimestamp: this._context.initialTimestamp,
                    initialUrl: this._context.initialUrl,
                    errorIds: Array.from(this._context.errorIds),
                    traceIds: Array.from(this._context.traceIds),
                    urls: this._context.urls
                };
                return this._clearContext(),
                e
            }
            async _runFlush() {
                let e = this.getSessionId();
                if (!this.session || !this.eventBuffer || !e) {
                    t5 && t8.error("No session or eventBuffer found to flush.");
                    return
                }
                if (await this._addPerformanceEntries(),
                !this.eventBuffer || !this.eventBuffer.hasEvents)
                    return;
                if (await nH(this),
                !!this.eventBuffer) {
                    if (e === this.getSessionId())
                        try {
                            this._updateInitialTimestampFromEventBuffer();
                            let t = Date.now();
                            if (t - this._context.initialTimestamp > this._options.maxReplayDuration + 3e4)
                                throw Error("Session is too long, not sending replay");
                            let n = this._popEventContext()
                              , r = this.session.segmentId++;
                            this._maybeSaveSession();
                            let i = await this.eventBuffer.finish();
                            await nJ({
                                replayId: e,
                                recordingData: i,
                                segmentId: r,
                                eventContext: n,
                                session: this.session,
                                timestamp: t,
                                onError: e => this.handleException(e)
                            })
                        } catch (t) {
                            this.handleException(t),
                            this.stop({
                                reason: "sendReplay"
                            });
                            let e = (0,
                            g.getClient)();
                            e && e.recordDroppedEvent(t instanceof nq ? "ratelimit_backoff" : "send_error", "replay")
                        }
                }
            }
            __init5() {
                var e = this;
                this._flush = async function() {
                    let {force: t=!1} = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    if (!e._isEnabled && !t)
                        return;
                    if (!e.checkAndHandleExpiredSession()) {
                        t5 && t8.error("Attempting to finish replay event after session expired.");
                        return
                    }
                    if (!e.session)
                        return;
                    let n = e.session.started
                      , r = Date.now() - n;
                    e._debouncedFlush.cancel();
                    let i = r < e._options.minReplayDuration
                      , o = r > e._options.maxReplayDuration + 5e3;
                    if (i || o) {
                        t5 && t8.info(`Session duration (${Math.floor(r / 1e3)}s) is too ${i ? "short" : "long"}, not sending replay.`),
                        i && e._debouncedFlush();
                        return
                    }
                    let a = e.eventBuffer;
                    a && 0 === e.session.segmentId && !a.hasCheckout && t5 && t8.info("Flushing initial segment without checkout.");
                    let s = !!e._flushLock;
                    !e._flushLock && (e._flushLock = e._runFlush());
                    try {
                        await e._flushLock
                    } catch (t) {
                        e.handleException(t)
                    } finally {
                        e._flushLock = void 0,
                        s && e._debouncedFlush()
                    }
                }
            }
            _maybeSaveSession() {
                this.session && this._options.stickySession && ns(this.session)
            }
            __init6() {
                this._onMutationHandler = e => {
                    let t = e.length
                      , n = this._options.mutationLimit
                      , r = this._options.mutationBreadcrumbLimit
                      , i = n && t > n;
                    if (t > r || i) {
                        let e = tG({
                            category: "replay.mutations",
                            data: {
                                count: t,
                                limit: i
                            }
                        });
                        this._createCustomBreadcrumb(e)
                    }
                    return !i || (this.stop({
                        reason: "mutationLimit",
                        forceFlush: "session" === this.recordingMode
                    }),
                    !1)
                }
            }
        }
        function nX(e, t) {
            return [...e, ...t].join(",")
        }
        let nQ = 'img,image,svg,video,object,picture,embed,map,audio,link[rel="icon"],link[rel="apple-touch-icon"]'
          , nZ = ["content-length", "content-type", "accept"]
          , n0 = !1
          , n1 = e => new n2(e);
        class n2 {
            static __initStatic() {
                this.id = "Replay"
            }
            constructor({flushMinDelay: e=5e3, flushMaxDelay: t=5500, minReplayDuration: n=4999, maxReplayDuration: r=36e5, stickySession: i=!0, useCompression: o=!0, workerUrl: a, _experiments: s={}, maskAllText: u=!0, maskAllInputs: l=!0, blockAllMedia: c=!0, mutationBreadcrumbLimit: d=750, mutationLimit: p=1e4, slowClickTimeout: f=7e3, slowClickIgnoreSelectors: h=[], networkDetailAllowUrls: g=[], networkDetailDenyUrls: m=[], networkCaptureBodies: _=!0, networkRequestHeaders: v=[], networkResponseHeaders: y=[], mask: S=[], maskAttributes: E=["title", "placeholder"], unmask: b=[], block: I=[], unblock: T=[], ignore: C=[], maskFn: k, beforeAddRecordingEvent: x, beforeErrorSampling: N, onError: A}={}) {
                this.name = n2.id;
                let O = function(e) {
                    let {mask: t, unmask: n, block: r, unblock: i, ignore: o} = e
                      , a = nX(t, [".sentry-mask", "[data-sentry-mask]"]);
                    return {
                        maskTextSelector: a,
                        unmaskTextSelector: nX(n, []),
                        blockSelector: nX(r, [".sentry-block", "[data-sentry-block]", "base", "iframe[srcdoc]:not([src])"]),
                        unblockSelector: nX(i, []),
                        ignoreSelector: nX(o, [".sentry-ignore", "[data-sentry-ignore]", 'input[type="file"]'])
                    }
                }({
                    mask: S,
                    unmask: b,
                    block: I,
                    unblock: T,
                    ignore: C
                });
                if (this._recordingOptions = {
                    maskAllInputs: l,
                    maskAllText: u,
                    maskInputOptions: {
                        password: !0
                    },
                    maskTextFn: k,
                    maskInputFn: k,
                    maskAttributeFn: (e, t, n) => (function(e) {
                        let {el: t, key: n, maskAttributes: r, maskAllText: i, privacyOptions: o, value: a} = e;
                        return !i || o.unmaskTextSelector && t.matches(o.unmaskTextSelector) ? a : r.includes(n) || "value" === n && "INPUT" === t.tagName && ["submit", "button"].includes(t.getAttribute("type") || "") ? a.replace(/[\S]/g, "*") : a
                    }
                    )({
                        maskAttributes: E,
                        maskAllText: u,
                        privacyOptions: O,
                        key: e,
                        value: t,
                        el: n
                    }),
                    ...O,
                    slimDOMOptions: "all",
                    inlineStylesheet: !0,
                    inlineImages: !1,
                    collectFonts: !0,
                    errorHandler: e => {
                        try {
                            e.__rrweb__ = !0
                        } catch (e) {}
                    }
                },
                this._initialOptions = {
                    flushMinDelay: e,
                    flushMaxDelay: t,
                    minReplayDuration: Math.min(n, 15e3),
                    maxReplayDuration: Math.min(r, 36e5),
                    stickySession: i,
                    useCompression: o,
                    workerUrl: a,
                    blockAllMedia: c,
                    maskAllInputs: l,
                    maskAllText: u,
                    mutationBreadcrumbLimit: d,
                    mutationLimit: p,
                    slowClickTimeout: f,
                    slowClickIgnoreSelectors: h,
                    networkDetailAllowUrls: g,
                    networkDetailDenyUrls: m,
                    networkCaptureBodies: _,
                    networkRequestHeaders: n3(v),
                    networkResponseHeaders: n3(y),
                    beforeAddRecordingEvent: x,
                    beforeErrorSampling: N,
                    onError: A,
                    _experiments: s
                },
                this._initialOptions.blockAllMedia && (this._recordingOptions.blockSelector = this._recordingOptions.blockSelector ? `${this._recordingOptions.blockSelector},${nQ}` : nQ),
                this._isInitialized && (0,
                w.isBrowser)())
                    throw Error("Multiple Sentry Session Replay instances are not supported");
                this._isInitialized = !0
            }
            get _isInitialized() {
                return n0
            }
            set _isInitialized(e) {
                n0 = e
            }
            afterAllSetup(e) {
                (0,
                w.isBrowser)() && !this._replay && (this._setup(e),
                this._initialize(e))
            }
            start() {
                this._replay && this._replay.start()
            }
            startBuffering() {
                this._replay && this._replay.startBuffering()
            }
            stop() {
                return this._replay ? this._replay.stop({
                    forceFlush: "session" === this._replay.recordingMode
                }) : Promise.resolve()
            }
            flush(e) {
                return this._replay ? this._replay.isEnabled() ? this._replay.sendBufferedReplayOrFlush(e) : (this._replay.start(),
                Promise.resolve()) : Promise.resolve()
            }
            getReplayId() {
                if (this._replay && this._replay.isEnabled())
                    return this._replay.getSessionId()
            }
            getRecordingMode() {
                if (this._replay && this._replay.isEnabled())
                    return this._replay.recordingMode
            }
            _initialize(e) {
                this._replay && (this._maybeLoadFromReplayCanvasIntegration(e),
                this._replay.initializeSampling())
            }
            _setup(e) {
                let t = function(e, t) {
                    let n = t.getOptions()
                      , r = {
                        sessionSampleRate: 0,
                        errorSampleRate: 0,
                        ...(0,
                        s.dropUndefinedKeys)(e)
                    }
                      , i = (0,
                    C.parseSampleRate)(n.replaysSessionSampleRate)
                      , o = (0,
                    C.parseSampleRate)(n.replaysOnErrorSampleRate);
                    return null == i && null == o && (0,
                    d.consoleSandbox)( () => {
                        console.warn("Replay is disabled because neither `replaysSessionSampleRate` nor `replaysOnErrorSampleRate` are set.")
                    }
                    ),
                    null != i && (r.sessionSampleRate = i),
                    null != o && (r.errorSampleRate = o),
                    r
                }(this._initialOptions, e);
                this._replay = new nK({
                    options: t,
                    recordingOptions: this._recordingOptions
                })
            }
            _maybeLoadFromReplayCanvasIntegration(e) {
                try {
                    let t = e.getIntegrationByName("ReplayCanvas");
                    if (!t)
                        return;
                    this._replay._canvas = t.getOptions()
                } catch (e) {}
            }
        }
        n2.__initStatic();
        function n3(e) {
            return [...nZ, ...e.map(e => e.toLowerCase())]
        }
        function n5() {
            let e = (0,
            g.getClient)();
            return e && e.getIntegrationByName("Replay")
        }
    }
}
  , t = {};
function n(r) {
    var i = t[r];
    if (void 0 !== i)
        return i.exports;
    var o = t[r] = {
        exports: {}
    };
    return e[r](o, o.exports, n),
    o.exports
}
n.d = function(e, t) {
    for (var r in t)
        n.o(t, r) && !n.o(e, r) && Object.defineProperty(e, r, {
            enumerable: !0,
            get: t[r]
        })
}
,
n.o = function(e, t) {
    return Object.prototype.hasOwnProperty.call(e, t)
}
,
n.r = function(e) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
        value: "Module"
    }),
    Object.defineProperty(e, "__esModule", {
        value: !0
    })
}
,
n("31338");
