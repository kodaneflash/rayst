function hy(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != 'string' && !Array.isArray(r)) {
      for (const o in r)
        if (o !== 'default' && !(o in e)) {
          const i = Object.getOwnPropertyDescriptor(r, o);
          i &&
            Object.defineProperty(
              e,
              o,
              i.get ? i : { enumerable: !0, get: () => r[o] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' })
  );
}
var uo =
  typeof globalThis < 'u'
    ? globalThis
    : typeof window < 'u'
      ? window
      : typeof global < 'u'
        ? global
        : typeof self < 'u'
          ? self
          : {};
function x0(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, 'default')
    ? e.default
    : e;
}
var $o = {},
  my = {
    get exports() {
      return $o;
    },
    set exports(e) {
      $o = e;
    }
  },
  ra = {},
  g = {},
  gy = {
    get exports() {
      return g;
    },
    set exports(e) {
      g = e;
    }
  },
  Q = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ni = Symbol.for('react.element'),
  vy = Symbol.for('react.portal'),
  yy = Symbol.for('react.fragment'),
  wy = Symbol.for('react.strict_mode'),
  xy = Symbol.for('react.profiler'),
  Cy = Symbol.for('react.provider'),
  by = Symbol.for('react.context'),
  Sy = Symbol.for('react.forward_ref'),
  Ey = Symbol.for('react.suspense'),
  ky = Symbol.for('react.memo'),
  Py = Symbol.for('react.lazy'),
  yd = Symbol.iterator;
function $y(e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = (yd && e[yd]) || e['@@iterator']),
      typeof e == 'function' ? e : null);
}
var C0 = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {}
  },
  b0 = Object.assign,
  S0 = {};
function Ir(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = S0),
    (this.updater = n || C0);
}
Ir.prototype.isReactComponent = {};
Ir.prototype.setState = function (e, t) {
  if (typeof e != 'object' && typeof e != 'function' && e != null)
    throw Error(
      'setState(...): takes an object of state variables to update or a function which returns an object of state variables.'
    );
  this.updater.enqueueSetState(this, e, t, 'setState');
};
Ir.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, 'forceUpdate');
};
function E0() {}
E0.prototype = Ir.prototype;
function Ec(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = S0),
    (this.updater = n || C0);
}
var kc = (Ec.prototype = new E0());
kc.constructor = Ec;
b0(kc, Ir.prototype);
kc.isPureReactComponent = !0;
var wd = Array.isArray,
  k0 = Object.prototype.hasOwnProperty,
  Pc = { current: null },
  P0 = { key: !0, ref: !0, __self: !0, __source: !0 };
function $0(e, t, n) {
  var r,
    o = {},
    i = null,
    s = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (s = t.ref),
    t.key !== void 0 && (i = '' + t.key),
    t))
      k0.call(t, r) && !P0.hasOwnProperty(r) && (o[r] = t[r]);
  var a = arguments.length - 2;
  if (a === 1) o.children = n;
  else if (1 < a) {
    for (var l = Array(a), u = 0; u < a; u++) l[u] = arguments[u + 2];
    o.children = l;
  }
  if (e && e.defaultProps)
    for (r in ((a = e.defaultProps), a)) o[r] === void 0 && (o[r] = a[r]);
  return {
    $$typeof: ni,
    type: e,
    key: i,
    ref: s,
    props: o,
    _owner: Pc.current
  };
}
function _y(e, t) {
  return {
    $$typeof: ni,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner
  };
}
function $c(e) {
  return typeof e == 'object' && e !== null && e.$$typeof === ni;
}
function Ty(e) {
  var t = { '=': '=0', ':': '=2' };
  return (
    '$' +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var xd = /\/+/g;
function za(e, t) {
  return typeof e == 'object' && e !== null && e.key != null
    ? Ty('' + e.key)
    : t.toString(36);
}
function Hi(e, t, n, r, o) {
  var i = typeof e;
  (i === 'undefined' || i === 'boolean') && (e = null);
  var s = !1;
  if (e === null) s = !0;
  else
    switch (i) {
      case 'string':
      case 'number':
        s = !0;
        break;
      case 'object':
        switch (e.$$typeof) {
          case ni:
          case vy:
            s = !0;
        }
    }
  if (s)
    return (
      (s = e),
      (o = o(s)),
      (e = r === '' ? '.' + za(s, 0) : r),
      wd(o)
        ? ((n = ''),
          e != null && (n = e.replace(xd, '$&/') + '/'),
          Hi(o, t, n, '', function (u) {
            return u;
          }))
        : o != null &&
          ($c(o) &&
            (o = _y(
              o,
              n +
                (!o.key || (s && s.key === o.key)
                  ? ''
                  : ('' + o.key).replace(xd, '$&/') + '/') +
                e
            )),
          t.push(o)),
      1
    );
  if (((s = 0), (r = r === '' ? '.' : r + ':'), wd(e)))
    for (var a = 0; a < e.length; a++) {
      i = e[a];
      var l = r + za(i, a);
      s += Hi(i, t, n, l, o);
    }
  else if (((l = $y(e)), typeof l == 'function'))
    for (e = l.call(e), a = 0; !(i = e.next()).done; )
      (i = i.value), (l = r + za(i, a++)), (s += Hi(i, t, n, l, o));
  else if (i === 'object')
    throw (
      ((t = String(e)),
      Error(
        'Objects are not valid as a React child (found: ' +
          (t === '[object Object]'
            ? 'object with keys {' + Object.keys(e).join(', ') + '}'
            : t) +
          '). If you meant to render a collection of children, use an array instead.'
      ))
    );
  return s;
}
function mi(e, t, n) {
  if (e == null) return e;
  var r = [],
    o = 0;
  return (
    Hi(e, r, '', '', function (i) {
      return t.call(n, i, o++);
    }),
    r
  );
}
function Ry(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var Ve = { current: null },
  Gi = { transition: null },
  My = {
    ReactCurrentDispatcher: Ve,
    ReactCurrentBatchConfig: Gi,
    ReactCurrentOwner: Pc
  };
Q.Children = {
  map: mi,
  forEach: function (e, t, n) {
    mi(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      mi(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      mi(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!$c(e))
      throw Error(
        'React.Children.only expected to receive a single React element child.'
      );
    return e;
  }
};
Q.Component = Ir;
Q.Fragment = yy;
Q.Profiler = xy;
Q.PureComponent = Ec;
Q.StrictMode = wy;
Q.Suspense = Ey;
Q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = My;
Q.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      'React.cloneElement(...): The argument must be a React element, but you passed ' +
        e +
        '.'
    );
  var r = b0({}, e.props),
    o = e.key,
    i = e.ref,
    s = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((i = t.ref), (s = Pc.current)),
      t.key !== void 0 && (o = '' + t.key),
      e.type && e.type.defaultProps)
    )
      var a = e.type.defaultProps;
    for (l in t)
      k0.call(t, l) &&
        !P0.hasOwnProperty(l) &&
        (r[l] = t[l] === void 0 && a !== void 0 ? a[l] : t[l]);
  }
  var l = arguments.length - 2;
  if (l === 1) r.children = n;
  else if (1 < l) {
    a = Array(l);
    for (var u = 0; u < l; u++) a[u] = arguments[u + 2];
    r.children = a;
  }
  return { $$typeof: ni, type: e.type, key: o, ref: i, props: r, _owner: s };
};
Q.createContext = function (e) {
  return (
    (e = {
      $$typeof: by,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null
    }),
    (e.Provider = { $$typeof: Cy, _context: e }),
    (e.Consumer = e)
  );
};
Q.createElement = $0;
Q.createFactory = function (e) {
  var t = $0.bind(null, e);
  return (t.type = e), t;
};
Q.createRef = function () {
  return { current: null };
};
Q.forwardRef = function (e) {
  return { $$typeof: Sy, render: e };
};
Q.isValidElement = $c;
Q.lazy = function (e) {
  return { $$typeof: Py, _payload: { _status: -1, _result: e }, _init: Ry };
};
Q.memo = function (e, t) {
  return { $$typeof: ky, type: e, compare: t === void 0 ? null : t };
};
Q.startTransition = function (e) {
  var t = Gi.transition;
  Gi.transition = {};
  try {
    e();
  } finally {
    Gi.transition = t;
  }
};
Q.unstable_act = function () {
  throw Error('act(...) is not supported in production builds of React.');
};
Q.useCallback = function (e, t) {
  return Ve.current.useCallback(e, t);
};
Q.useContext = function (e) {
  return Ve.current.useContext(e);
};
Q.useDebugValue = function () {};
Q.useDeferredValue = function (e) {
  return Ve.current.useDeferredValue(e);
};
Q.useEffect = function (e, t) {
  return Ve.current.useEffect(e, t);
};
Q.useId = function () {
  return Ve.current.useId();
};
Q.useImperativeHandle = function (e, t, n) {
  return Ve.current.useImperativeHandle(e, t, n);
};
Q.useInsertionEffect = function (e, t) {
  return Ve.current.useInsertionEffect(e, t);
};
Q.useLayoutEffect = function (e, t) {
  return Ve.current.useLayoutEffect(e, t);
};
Q.useMemo = function (e, t) {
  return Ve.current.useMemo(e, t);
};
Q.useReducer = function (e, t, n) {
  return Ve.current.useReducer(e, t, n);
};
Q.useRef = function (e) {
  return Ve.current.useRef(e);
};
Q.useState = function (e) {
  return Ve.current.useState(e);
};
Q.useSyncExternalStore = function (e, t, n) {
  return Ve.current.useSyncExternalStore(e, t, n);
};
Q.useTransition = function () {
  return Ve.current.useTransition();
};
Q.version = '18.2.0';
(function (e) {
  e.exports = Q;
})(gy);
const je = x0(g),
  Oy = hy({ __proto__: null, default: je }, [g]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ay = g,
  Dy = Symbol.for('react.element'),
  Ly = Symbol.for('react.fragment'),
  Fy = Object.prototype.hasOwnProperty,
  Ny = Ay.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Iy = { key: !0, ref: !0, __self: !0, __source: !0 };
function _0(e, t, n) {
  var r,
    o = {},
    i = null,
    s = null;
  n !== void 0 && (i = '' + n),
    t.key !== void 0 && (i = '' + t.key),
    t.ref !== void 0 && (s = t.ref);
  for (r in t) Fy.call(t, r) && !Iy.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) o[r] === void 0 && (o[r] = t[r]);
  return {
    $$typeof: Dy,
    type: e,
    key: i,
    ref: s,
    props: o,
    _owner: Ny.current
  };
}
ra.Fragment = Ly;
ra.jsx = _0;
ra.jsxs = _0;
(function (e) {
  e.exports = ra;
})(my);
const _o = $o.Fragment,
  V = $o.jsx,
  J = $o.jsxs;
var jn = {},
  Vy = {
    get exports() {
      return jn;
    },
    set exports(e) {
      jn = e;
    }
  },
  tt = {},
  Bl = {},
  zy = {
    get exports() {
      return Bl;
    },
    set exports(e) {
      Bl = e;
    }
  },
  T0 = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(P, O) {
    var F = P.length;
    P.push(O);
    e: for (; 0 < F; ) {
      var U = (F - 1) >>> 1,
        z = P[U];
      if (0 < o(z, O)) (P[U] = O), (P[F] = z), (F = U);
      else break e;
    }
  }
  function n(P) {
    return P.length === 0 ? null : P[0];
  }
  function r(P) {
    if (P.length === 0) return null;
    var O = P[0],
      F = P.pop();
    if (F !== O) {
      P[0] = F;
      e: for (var U = 0, z = P.length, Z = z >>> 1; U < Z; ) {
        var de = 2 * (U + 1) - 1,
          te = P[de],
          ne = de + 1,
          Oe = P[ne];
        if (0 > o(te, F))
          ne < z && 0 > o(Oe, te)
            ? ((P[U] = Oe), (P[ne] = F), (U = ne))
            : ((P[U] = te), (P[de] = F), (U = de));
        else if (ne < z && 0 > o(Oe, F)) (P[U] = Oe), (P[ne] = F), (U = ne);
        else break e;
      }
    }
    return O;
  }
  function o(P, O) {
    var F = P.sortIndex - O.sortIndex;
    return F !== 0 ? F : P.id - O.id;
  }
  if (typeof performance == 'object' && typeof performance.now == 'function') {
    var i = performance;
    e.unstable_now = function () {
      return i.now();
    };
  } else {
    var s = Date,
      a = s.now();
    e.unstable_now = function () {
      return s.now() - a;
    };
  }
  var l = [],
    u = [],
    c = 1,
    d = null,
    h = 3,
    v = !1,
    w = !1,
    x = !1,
    b = typeof setTimeout == 'function' ? setTimeout : null,
    p = typeof clearTimeout == 'function' ? clearTimeout : null,
    m = typeof setImmediate < 'u' ? setImmediate : null;
  typeof navigator < 'u' &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function f(P) {
    for (var O = n(u); O !== null; ) {
      if (O.callback === null) r(u);
      else if (O.startTime <= P)
        r(u), (O.sortIndex = O.expirationTime), t(l, O);
      else break;
      O = n(u);
    }
  }
  function y(P) {
    if (((x = !1), f(P), !w))
      if (n(l) !== null) (w = !0), M(C);
      else {
        var O = n(u);
        O !== null && D(y, O.startTime - P);
      }
  }
  function C(P, O) {
    (w = !1), x && ((x = !1), p(k), (k = -1)), (v = !0);
    var F = h;
    try {
      for (
        f(O), d = n(l);
        d !== null && (!(d.expirationTime > O) || (P && !j()));

      ) {
        var U = d.callback;
        if (typeof U == 'function') {
          (d.callback = null), (h = d.priorityLevel);
          var z = U(d.expirationTime <= O);
          (O = e.unstable_now()),
            typeof z == 'function' ? (d.callback = z) : d === n(l) && r(l),
            f(O);
        } else r(l);
        d = n(l);
      }
      if (d !== null) var Z = !0;
      else {
        var de = n(u);
        de !== null && D(y, de.startTime - O), (Z = !1);
      }
      return Z;
    } finally {
      (d = null), (h = F), (v = !1);
    }
  }
  var S = !1,
    E = null,
    k = -1,
    A = 5,
    R = -1;
  function j() {
    return !(e.unstable_now() - R < A);
  }
  function W() {
    if (E !== null) {
      var P = e.unstable_now();
      R = P;
      var O = !0;
      try {
        O = E(!0, P);
      } finally {
        O ? _() : ((S = !1), (E = null));
      }
    } else S = !1;
  }
  var _;
  if (typeof m == 'function')
    _ = function () {
      m(W);
    };
  else if (typeof MessageChannel < 'u') {
    var $ = new MessageChannel(),
      T = $.port2;
    ($.port1.onmessage = W),
      (_ = function () {
        T.postMessage(null);
      });
  } else
    _ = function () {
      b(W, 0);
    };
  function M(P) {
    (E = P), S || ((S = !0), _());
  }
  function D(P, O) {
    k = b(function () {
      P(e.unstable_now());
    }, O);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (P) {
      P.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      w || v || ((w = !0), M(C));
    }),
    (e.unstable_forceFrameRate = function (P) {
      0 > P || 125 < P
        ? console.error(
            'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported'
          )
        : (A = 0 < P ? Math.floor(1e3 / P) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return h;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(l);
    }),
    (e.unstable_next = function (P) {
      switch (h) {
        case 1:
        case 2:
        case 3:
          var O = 3;
          break;
        default:
          O = h;
      }
      var F = h;
      h = O;
      try {
        return P();
      } finally {
        h = F;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (P, O) {
      switch (P) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          P = 3;
      }
      var F = h;
      h = P;
      try {
        return O();
      } finally {
        h = F;
      }
    }),
    (e.unstable_scheduleCallback = function (P, O, F) {
      var U = e.unstable_now();
      switch (
        (typeof F == 'object' && F !== null
          ? ((F = F.delay), (F = typeof F == 'number' && 0 < F ? U + F : U))
          : (F = U),
        P)
      ) {
        case 1:
          var z = -1;
          break;
        case 2:
          z = 250;
          break;
        case 5:
          z = 1073741823;
          break;
        case 4:
          z = 1e4;
          break;
        default:
          z = 5e3;
      }
      return (
        (z = F + z),
        (P = {
          id: c++,
          callback: O,
          priorityLevel: P,
          startTime: F,
          expirationTime: z,
          sortIndex: -1
        }),
        F > U
          ? ((P.sortIndex = F),
            t(u, P),
            n(l) === null &&
              P === n(u) &&
              (x ? (p(k), (k = -1)) : (x = !0), D(y, F - U)))
          : ((P.sortIndex = z), t(l, P), w || v || ((w = !0), M(C))),
        P
      );
    }),
    (e.unstable_shouldYield = j),
    (e.unstable_wrapCallback = function (P) {
      var O = h;
      return function () {
        var F = h;
        h = O;
        try {
          return P.apply(this, arguments);
        } finally {
          h = F;
        }
      };
    });
})(T0);
(function (e) {
  e.exports = T0;
})(zy);
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var R0 = g,
  Je = Bl;
function L(e) {
  for (
    var t = 'https://reactjs.org/docs/error-decoder.html?invariant=' + e, n = 1;
    n < arguments.length;
    n++
  )
    t += '&args[]=' + encodeURIComponent(arguments[n]);
  return (
    'Minified React error #' +
    e +
    '; visit ' +
    t +
    ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
  );
}
var M0 = new Set(),
  To = {};
function Qn(e, t) {
  Tr(e, t), Tr(e + 'Capture', t);
}
function Tr(e, t) {
  for (To[e] = t, e = 0; e < t.length; e++) M0.add(t[e]);
}
var jt = !(
    typeof window > 'u' ||
    typeof window.document > 'u' ||
    typeof window.document.createElement > 'u'
  ),
  Ul = Object.prototype.hasOwnProperty,
  jy =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Cd = {},
  bd = {};
function By(e) {
  return Ul.call(bd, e)
    ? !0
    : Ul.call(Cd, e)
      ? !1
      : jy.test(e)
        ? (bd[e] = !0)
        : ((Cd[e] = !0), !1);
}
function Uy(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case 'function':
    case 'symbol':
      return !0;
    case 'boolean':
      return r
        ? !1
        : n !== null
          ? !n.acceptsBooleans
          : ((e = e.toLowerCase().slice(0, 5)), e !== 'data-' && e !== 'aria-');
    default:
      return !1;
  }
}
function Ky(e, t, n, r) {
  if (t === null || typeof t > 'u' || Uy(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function ze(e, t, n, r, o, i, s) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = o),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = i),
    (this.removeEmptyString = s);
}
var Pe = {};
'children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
  .split(' ')
  .forEach(function (e) {
    Pe[e] = new ze(e, 0, !1, e, null, !1, !1);
  });
[
  ['acceptCharset', 'accept-charset'],
  ['className', 'class'],
  ['htmlFor', 'for'],
  ['httpEquiv', 'http-equiv']
].forEach(function (e) {
  var t = e[0];
  Pe[t] = new ze(t, 1, !1, e[1], null, !1, !1);
});
['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (e) {
  Pe[e] = new ze(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  'autoReverse',
  'externalResourcesRequired',
  'focusable',
  'preserveAlpha'
].forEach(function (e) {
  Pe[e] = new ze(e, 2, !1, e, null, !1, !1);
});
'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
  .split(' ')
  .forEach(function (e) {
    Pe[e] = new ze(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
['checked', 'multiple', 'muted', 'selected'].forEach(function (e) {
  Pe[e] = new ze(e, 3, !0, e, null, !1, !1);
});
['capture', 'download'].forEach(function (e) {
  Pe[e] = new ze(e, 4, !1, e, null, !1, !1);
});
['cols', 'rows', 'size', 'span'].forEach(function (e) {
  Pe[e] = new ze(e, 6, !1, e, null, !1, !1);
});
['rowSpan', 'start'].forEach(function (e) {
  Pe[e] = new ze(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var _c = /[\-:]([a-z])/g;
function Tc(e) {
  return e[1].toUpperCase();
}
'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
  .split(' ')
  .forEach(function (e) {
    var t = e.replace(_c, Tc);
    Pe[t] = new ze(t, 1, !1, e, null, !1, !1);
  });
'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'
  .split(' ')
  .forEach(function (e) {
    var t = e.replace(_c, Tc);
    Pe[t] = new ze(t, 1, !1, e, 'http://www.w3.org/1999/xlink', !1, !1);
  });
['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
  var t = e.replace(_c, Tc);
  Pe[t] = new ze(t, 1, !1, e, 'http://www.w3.org/XML/1998/namespace', !1, !1);
});
['tabIndex', 'crossOrigin'].forEach(function (e) {
  Pe[e] = new ze(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Pe.xlinkHref = new ze(
  'xlinkHref',
  1,
  !1,
  'xlink:href',
  'http://www.w3.org/1999/xlink',
  !0,
  !1
);
['src', 'href', 'action', 'formAction'].forEach(function (e) {
  Pe[e] = new ze(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Rc(e, t, n, r) {
  var o = Pe.hasOwnProperty(t) ? Pe[t] : null;
  (o !== null
    ? o.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== 'o' && t[0] !== 'O') ||
      (t[1] !== 'n' && t[1] !== 'N')) &&
    (Ky(t, n, o, r) && (n = null),
    r || o === null
      ? By(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, '' + n))
      : o.mustUseProperty
        ? (e[o.propertyName] = n === null ? (o.type === 3 ? !1 : '') : n)
        : ((t = o.attributeName),
          (r = o.attributeNamespace),
          n === null
            ? e.removeAttribute(t)
            : ((o = o.type),
              (n = o === 3 || (o === 4 && n === !0) ? '' : '' + n),
              r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Gt = R0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  gi = Symbol.for('react.element'),
  ar = Symbol.for('react.portal'),
  lr = Symbol.for('react.fragment'),
  Mc = Symbol.for('react.strict_mode'),
  Kl = Symbol.for('react.profiler'),
  O0 = Symbol.for('react.provider'),
  A0 = Symbol.for('react.context'),
  Oc = Symbol.for('react.forward_ref'),
  Wl = Symbol.for('react.suspense'),
  Hl = Symbol.for('react.suspense_list'),
  Ac = Symbol.for('react.memo'),
  Xt = Symbol.for('react.lazy'),
  D0 = Symbol.for('react.offscreen'),
  Sd = Symbol.iterator;
function Gr(e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = (Sd && e[Sd]) || e['@@iterator']),
      typeof e == 'function' ? e : null);
}
var fe = Object.assign,
  ja;
function oo(e) {
  if (ja === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      ja = (t && t[1]) || '';
    }
  return (
    `
` +
    ja +
    e
  );
}
var Ba = !1;
function Ua(e, t) {
  if (!e || Ba) return '';
  Ba = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, 'props', {
          set: function () {
            throw Error();
          }
        }),
        typeof Reflect == 'object' && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (u) {
          var r = u;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (u) {
          r = u;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (u) {
        r = u;
      }
      e();
    }
  } catch (u) {
    if (u && r && typeof u.stack == 'string') {
      for (
        var o = u.stack.split(`
`),
          i = r.stack.split(`
`),
          s = o.length - 1,
          a = i.length - 1;
        1 <= s && 0 <= a && o[s] !== i[a];

      )
        a--;
      for (; 1 <= s && 0 <= a; s--, a--)
        if (o[s] !== i[a]) {
          if (s !== 1 || a !== 1)
            do
              if ((s--, a--, 0 > a || o[s] !== i[a])) {
                var l =
                  `
` + o[s].replace(' at new ', ' at ');
                return (
                  e.displayName &&
                    l.includes('<anonymous>') &&
                    (l = l.replace('<anonymous>', e.displayName)),
                  l
                );
              }
            while (1 <= s && 0 <= a);
          break;
        }
    }
  } finally {
    (Ba = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : '') ? oo(e) : '';
}
function Wy(e) {
  switch (e.tag) {
    case 5:
      return oo(e.type);
    case 16:
      return oo('Lazy');
    case 13:
      return oo('Suspense');
    case 19:
      return oo('SuspenseList');
    case 0:
    case 2:
    case 15:
      return (e = Ua(e.type, !1)), e;
    case 11:
      return (e = Ua(e.type.render, !1)), e;
    case 1:
      return (e = Ua(e.type, !0)), e;
    default:
      return '';
  }
}
function Gl(e) {
  if (e == null) return null;
  if (typeof e == 'function') return e.displayName || e.name || null;
  if (typeof e == 'string') return e;
  switch (e) {
    case lr:
      return 'Fragment';
    case ar:
      return 'Portal';
    case Kl:
      return 'Profiler';
    case Mc:
      return 'StrictMode';
    case Wl:
      return 'Suspense';
    case Hl:
      return 'SuspenseList';
  }
  if (typeof e == 'object')
    switch (e.$$typeof) {
      case A0:
        return (e.displayName || 'Context') + '.Consumer';
      case O0:
        return (e._context.displayName || 'Context') + '.Provider';
      case Oc:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ''),
            (e = e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')),
          e
        );
      case Ac:
        return (
          (t = e.displayName || null), t !== null ? t : Gl(e.type) || 'Memo'
        );
      case Xt:
        (t = e._payload), (e = e._init);
        try {
          return Gl(e(t));
        } catch {}
    }
  return null;
}
function Hy(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return 'Cache';
    case 9:
      return (t.displayName || 'Context') + '.Consumer';
    case 10:
      return (t._context.displayName || 'Context') + '.Provider';
    case 18:
      return 'DehydratedFragment';
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ''),
        t.displayName || (e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')
      );
    case 7:
      return 'Fragment';
    case 5:
      return t;
    case 4:
      return 'Portal';
    case 3:
      return 'Root';
    case 6:
      return 'Text';
    case 16:
      return Gl(t);
    case 8:
      return t === Mc ? 'StrictMode' : 'Mode';
    case 22:
      return 'Offscreen';
    case 12:
      return 'Profiler';
    case 21:
      return 'Scope';
    case 13:
      return 'Suspense';
    case 19:
      return 'SuspenseList';
    case 25:
      return 'TracingMarker';
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == 'function') return t.displayName || t.name || null;
      if (typeof t == 'string') return t;
  }
  return null;
}
function yn(e) {
  switch (typeof e) {
    case 'boolean':
    case 'number':
    case 'string':
    case 'undefined':
      return e;
    case 'object':
      return e;
    default:
      return '';
  }
}
function L0(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === 'input' &&
    (t === 'checkbox' || t === 'radio')
  );
}
function Gy(e) {
  var t = L0(e) ? 'checked' : 'value',
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = '' + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < 'u' &&
    typeof n.get == 'function' &&
    typeof n.set == 'function'
  ) {
    var o = n.get,
      i = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return o.call(this);
        },
        set: function (s) {
          (r = '' + s), i.call(this, s);
        }
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (s) {
          r = '' + s;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        }
      }
    );
  }
}
function vi(e) {
  e._valueTracker || (e._valueTracker = Gy(e));
}
function F0(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = '';
  return (
    e && (r = L0(e) ? (e.checked ? 'true' : 'false') : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function us(e) {
  if (((e = e || (typeof document < 'u' ? document : void 0)), typeof e > 'u'))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Ql(e, t) {
  var n = t.checked;
  return fe({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked
  });
}
function Ed(e, t) {
  var n = t.defaultValue == null ? '' : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = yn(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === 'checkbox' || t.type === 'radio'
          ? t.checked != null
          : t.value != null
    });
}
function N0(e, t) {
  (t = t.checked), t != null && Rc(e, 'checked', t, !1);
}
function ql(e, t) {
  N0(e, t);
  var n = yn(t.value),
    r = t.type;
  if (n != null)
    r === 'number'
      ? ((n === 0 && e.value === '') || e.value != n) && (e.value = '' + n)
      : e.value !== '' + n && (e.value = '' + n);
  else if (r === 'submit' || r === 'reset') {
    e.removeAttribute('value');
    return;
  }
  t.hasOwnProperty('value')
    ? Yl(e, t.type, n)
    : t.hasOwnProperty('defaultValue') && Yl(e, t.type, yn(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function kd(e, t, n) {
  if (t.hasOwnProperty('value') || t.hasOwnProperty('defaultValue')) {
    var r = t.type;
    if (
      !(
        (r !== 'submit' && r !== 'reset') ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = '' + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== '' && (e.name = ''),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== '' && (e.name = n);
}
function Yl(e, t, n) {
  (t !== 'number' || us(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = '' + e._wrapperState.initialValue)
      : e.defaultValue !== '' + n && (e.defaultValue = '' + n));
}
var io = Array.isArray;
function br(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var o = 0; o < n.length; o++) t['$' + n[o]] = !0;
    for (n = 0; n < e.length; n++)
      (o = t.hasOwnProperty('$' + e[n].value)),
        e[n].selected !== o && (e[n].selected = o),
        o && r && (e[n].defaultSelected = !0);
  } else {
    for (n = '' + yn(n), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === n) {
        (e[o].selected = !0), r && (e[o].defaultSelected = !0);
        return;
      }
      t !== null || e[o].disabled || (t = e[o]);
    }
    t !== null && (t.selected = !0);
  }
}
function Xl(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(L(91));
  return fe({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: '' + e._wrapperState.initialValue
  });
}
function Pd(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(L(92));
      if (io(n)) {
        if (1 < n.length) throw Error(L(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ''), (n = t);
  }
  e._wrapperState = { initialValue: yn(n) };
}
function I0(e, t) {
  var n = yn(t.value),
    r = yn(t.defaultValue);
  n != null &&
    ((n = '' + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = '' + r);
}
function $d(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== '' && t !== null && (e.value = t);
}
function V0(e) {
  switch (e) {
    case 'svg':
      return 'http://www.w3.org/2000/svg';
    case 'math':
      return 'http://www.w3.org/1998/Math/MathML';
    default:
      return 'http://www.w3.org/1999/xhtml';
  }
}
function Zl(e, t) {
  return e == null || e === 'http://www.w3.org/1999/xhtml'
    ? V0(t)
    : e === 'http://www.w3.org/2000/svg' && t === 'foreignObject'
      ? 'http://www.w3.org/1999/xhtml'
      : e;
}
var yi,
  z0 = (function (e) {
    return typeof MSApp < 'u' && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, o) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, o);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== 'http://www.w3.org/2000/svg' || 'innerHTML' in e)
      e.innerHTML = t;
    else {
      for (
        yi = yi || document.createElement('div'),
          yi.innerHTML = '<svg>' + t.valueOf().toString() + '</svg>',
          t = yi.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Ro(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var co = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
  },
  Qy = ['Webkit', 'ms', 'Moz', 'O'];
Object.keys(co).forEach(function (e) {
  Qy.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (co[t] = co[e]);
  });
});
function j0(e, t, n) {
  return t == null || typeof t == 'boolean' || t === ''
    ? ''
    : n || typeof t != 'number' || t === 0 || (co.hasOwnProperty(e) && co[e])
      ? ('' + t).trim()
      : t + 'px';
}
function B0(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf('--') === 0,
        o = j0(n, t[n], r);
      n === 'float' && (n = 'cssFloat'), r ? e.setProperty(n, o) : (e[n] = o);
    }
}
var qy = fe(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0
  }
);
function Jl(e, t) {
  if (t) {
    if (qy[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(L(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(L(60));
      if (
        typeof t.dangerouslySetInnerHTML != 'object' ||
        !('__html' in t.dangerouslySetInnerHTML)
      )
        throw Error(L(61));
    }
    if (t.style != null && typeof t.style != 'object') throw Error(L(62));
  }
}
function eu(e, t) {
  if (e.indexOf('-') === -1) return typeof t.is == 'string';
  switch (e) {
    case 'annotation-xml':
    case 'color-profile':
    case 'font-face':
    case 'font-face-src':
    case 'font-face-uri':
    case 'font-face-format':
    case 'font-face-name':
    case 'missing-glyph':
      return !1;
    default:
      return !0;
  }
}
var tu = null;
function Dc(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var nu = null,
  Sr = null,
  Er = null;
function _d(e) {
  if ((e = ii(e))) {
    if (typeof nu != 'function') throw Error(L(280));
    var t = e.stateNode;
    t && ((t = la(t)), nu(e.stateNode, e.type, t));
  }
}
function U0(e) {
  Sr ? (Er ? Er.push(e) : (Er = [e])) : (Sr = e);
}
function K0() {
  if (Sr) {
    var e = Sr,
      t = Er;
    if (((Er = Sr = null), _d(e), t)) for (e = 0; e < t.length; e++) _d(t[e]);
  }
}
function W0(e, t) {
  return e(t);
}
function H0() {}
var Ka = !1;
function G0(e, t, n) {
  if (Ka) return e(t, n);
  Ka = !0;
  try {
    return W0(e, t, n);
  } finally {
    (Ka = !1), (Sr !== null || Er !== null) && (H0(), K0());
  }
}
function Mo(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = la(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case 'onClick':
    case 'onClickCapture':
    case 'onDoubleClick':
    case 'onDoubleClickCapture':
    case 'onMouseDown':
    case 'onMouseDownCapture':
    case 'onMouseMove':
    case 'onMouseMoveCapture':
    case 'onMouseUp':
    case 'onMouseUpCapture':
    case 'onMouseEnter':
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === 'button' ||
          e === 'input' ||
          e === 'select' ||
          e === 'textarea'
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != 'function') throw Error(L(231, t, typeof n));
  return n;
}
var ru = !1;
if (jt)
  try {
    var Qr = {};
    Object.defineProperty(Qr, 'passive', {
      get: function () {
        ru = !0;
      }
    }),
      window.addEventListener('test', Qr, Qr),
      window.removeEventListener('test', Qr, Qr);
  } catch {
    ru = !1;
  }
function Yy(e, t, n, r, o, i, s, a, l) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (c) {
    this.onError(c);
  }
}
var fo = !1,
  cs = null,
  fs = !1,
  ou = null,
  Xy = {
    onError: function (e) {
      (fo = !0), (cs = e);
    }
  };
function Zy(e, t, n, r, o, i, s, a, l) {
  (fo = !1), (cs = null), Yy.apply(Xy, arguments);
}
function Jy(e, t, n, r, o, i, s, a, l) {
  if ((Zy.apply(this, arguments), fo)) {
    if (fo) {
      var u = cs;
      (fo = !1), (cs = null);
    } else throw Error(L(198));
    fs || ((fs = !0), (ou = u));
  }
}
function qn(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function Q0(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function Td(e) {
  if (qn(e) !== e) throw Error(L(188));
}
function e2(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = qn(e)), t === null)) throw Error(L(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var o = n.return;
    if (o === null) break;
    var i = o.alternate;
    if (i === null) {
      if (((r = o.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (o.child === i.child) {
      for (i = o.child; i; ) {
        if (i === n) return Td(o), e;
        if (i === r) return Td(o), t;
        i = i.sibling;
      }
      throw Error(L(188));
    }
    if (n.return !== r.return) (n = o), (r = i);
    else {
      for (var s = !1, a = o.child; a; ) {
        if (a === n) {
          (s = !0), (n = o), (r = i);
          break;
        }
        if (a === r) {
          (s = !0), (r = o), (n = i);
          break;
        }
        a = a.sibling;
      }
      if (!s) {
        for (a = i.child; a; ) {
          if (a === n) {
            (s = !0), (n = i), (r = o);
            break;
          }
          if (a === r) {
            (s = !0), (r = i), (n = o);
            break;
          }
          a = a.sibling;
        }
        if (!s) throw Error(L(189));
      }
    }
    if (n.alternate !== r) throw Error(L(190));
  }
  if (n.tag !== 3) throw Error(L(188));
  return n.stateNode.current === n ? e : t;
}
function q0(e) {
  return (e = e2(e)), e !== null ? Y0(e) : null;
}
function Y0(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Y0(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var X0 = Je.unstable_scheduleCallback,
  Rd = Je.unstable_cancelCallback,
  t2 = Je.unstable_shouldYield,
  n2 = Je.unstable_requestPaint,
  me = Je.unstable_now,
  r2 = Je.unstable_getCurrentPriorityLevel,
  Lc = Je.unstable_ImmediatePriority,
  Z0 = Je.unstable_UserBlockingPriority,
  ds = Je.unstable_NormalPriority,
  o2 = Je.unstable_LowPriority,
  J0 = Je.unstable_IdlePriority,
  oa = null,
  kt = null;
function i2(e) {
  if (kt && typeof kt.onCommitFiberRoot == 'function')
    try {
      kt.onCommitFiberRoot(oa, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var yt = Math.clz32 ? Math.clz32 : l2,
  s2 = Math.log,
  a2 = Math.LN2;
function l2(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((s2(e) / a2) | 0)) | 0;
}
var wi = 64,
  xi = 4194304;
function so(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function ps(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    o = e.suspendedLanes,
    i = e.pingedLanes,
    s = n & 268435455;
  if (s !== 0) {
    var a = s & ~o;
    a !== 0 ? (r = so(a)) : ((i &= s), i !== 0 && (r = so(i)));
  } else (s = n & ~o), s !== 0 ? (r = so(s)) : i !== 0 && (r = so(i));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & o) &&
    ((o = r & -r), (i = t & -t), o >= i || (o === 16 && (i & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - yt(t)), (o = 1 << n), (r |= e[n]), (t &= ~o);
  return r;
}
function u2(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function c2(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      o = e.expirationTimes,
      i = e.pendingLanes;
    0 < i;

  ) {
    var s = 31 - yt(i),
      a = 1 << s,
      l = o[s];
    l === -1
      ? (!(a & n) || a & r) && (o[s] = u2(a, t))
      : l <= t && (e.expiredLanes |= a),
      (i &= ~a);
  }
}
function iu(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function em() {
  var e = wi;
  return (wi <<= 1), !(wi & 4194240) && (wi = 64), e;
}
function Wa(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function ri(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - yt(t)),
    (e[t] = n);
}
function f2(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var o = 31 - yt(n),
      i = 1 << o;
    (t[o] = 0), (r[o] = -1), (e[o] = -1), (n &= ~i);
  }
}
function Fc(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - yt(n),
      o = 1 << r;
    (o & t) | (e[r] & t) && (e[r] |= t), (n &= ~o);
  }
}
var ee = 0;
function tm(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var nm,
  Nc,
  rm,
  om,
  im,
  su = !1,
  Ci = [],
  un = null,
  cn = null,
  fn = null,
  Oo = new Map(),
  Ao = new Map(),
  tn = [],
  d2 =
    'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
      ' '
    );
function Md(e, t) {
  switch (e) {
    case 'focusin':
    case 'focusout':
      un = null;
      break;
    case 'dragenter':
    case 'dragleave':
      cn = null;
      break;
    case 'mouseover':
    case 'mouseout':
      fn = null;
      break;
    case 'pointerover':
    case 'pointerout':
      Oo.delete(t.pointerId);
      break;
    case 'gotpointercapture':
    case 'lostpointercapture':
      Ao.delete(t.pointerId);
  }
}
function qr(e, t, n, r, o, i) {
  return e === null || e.nativeEvent !== i
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [o]
      }),
      t !== null && ((t = ii(t)), t !== null && Nc(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      o !== null && t.indexOf(o) === -1 && t.push(o),
      e);
}
function p2(e, t, n, r, o) {
  switch (t) {
    case 'focusin':
      return (un = qr(un, e, t, n, r, o)), !0;
    case 'dragenter':
      return (cn = qr(cn, e, t, n, r, o)), !0;
    case 'mouseover':
      return (fn = qr(fn, e, t, n, r, o)), !0;
    case 'pointerover':
      var i = o.pointerId;
      return Oo.set(i, qr(Oo.get(i) || null, e, t, n, r, o)), !0;
    case 'gotpointercapture':
      return (
        (i = o.pointerId), Ao.set(i, qr(Ao.get(i) || null, e, t, n, r, o)), !0
      );
  }
  return !1;
}
function sm(e) {
  var t = Dn(e.target);
  if (t !== null) {
    var n = qn(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = Q0(n)), t !== null)) {
          (e.blockedOn = t),
            im(e.priority, function () {
              rm(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Qi(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = au(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (tu = r), n.target.dispatchEvent(r), (tu = null);
    } else return (t = ii(n)), t !== null && Nc(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function Od(e, t, n) {
  Qi(e) && n.delete(t);
}
function h2() {
  (su = !1),
    un !== null && Qi(un) && (un = null),
    cn !== null && Qi(cn) && (cn = null),
    fn !== null && Qi(fn) && (fn = null),
    Oo.forEach(Od),
    Ao.forEach(Od);
}
function Yr(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    su ||
      ((su = !0),
      Je.unstable_scheduleCallback(Je.unstable_NormalPriority, h2)));
}
function Do(e) {
  function t(o) {
    return Yr(o, e);
  }
  if (0 < Ci.length) {
    Yr(Ci[0], e);
    for (var n = 1; n < Ci.length; n++) {
      var r = Ci[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    un !== null && Yr(un, e),
      cn !== null && Yr(cn, e),
      fn !== null && Yr(fn, e),
      Oo.forEach(t),
      Ao.forEach(t),
      n = 0;
    n < tn.length;
    n++
  )
    (r = tn[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < tn.length && ((n = tn[0]), n.blockedOn === null); )
    sm(n), n.blockedOn === null && tn.shift();
}
var kr = Gt.ReactCurrentBatchConfig,
  hs = !0;
function m2(e, t, n, r) {
  var o = ee,
    i = kr.transition;
  kr.transition = null;
  try {
    (ee = 1), Ic(e, t, n, r);
  } finally {
    (ee = o), (kr.transition = i);
  }
}
function g2(e, t, n, r) {
  var o = ee,
    i = kr.transition;
  kr.transition = null;
  try {
    (ee = 4), Ic(e, t, n, r);
  } finally {
    (ee = o), (kr.transition = i);
  }
}
function Ic(e, t, n, r) {
  if (hs) {
    var o = au(e, t, n, r);
    if (o === null) tl(e, t, r, ms, n), Md(e, r);
    else if (p2(o, e, t, n, r)) r.stopPropagation();
    else if ((Md(e, r), t & 4 && -1 < d2.indexOf(e))) {
      for (; o !== null; ) {
        var i = ii(o);
        if (
          (i !== null && nm(i),
          (i = au(e, t, n, r)),
          i === null && tl(e, t, r, ms, n),
          i === o)
        )
          break;
        o = i;
      }
      o !== null && r.stopPropagation();
    } else tl(e, t, r, null, n);
  }
}
var ms = null;
function au(e, t, n, r) {
  if (((ms = null), (e = Dc(r)), (e = Dn(e)), e !== null))
    if (((t = qn(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = Q0(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (ms = e), null;
}
function am(e) {
  switch (e) {
    case 'cancel':
    case 'click':
    case 'close':
    case 'contextmenu':
    case 'copy':
    case 'cut':
    case 'auxclick':
    case 'dblclick':
    case 'dragend':
    case 'dragstart':
    case 'drop':
    case 'focusin':
    case 'focusout':
    case 'input':
    case 'invalid':
    case 'keydown':
    case 'keypress':
    case 'keyup':
    case 'mousedown':
    case 'mouseup':
    case 'paste':
    case 'pause':
    case 'play':
    case 'pointercancel':
    case 'pointerdown':
    case 'pointerup':
    case 'ratechange':
    case 'reset':
    case 'resize':
    case 'seeked':
    case 'submit':
    case 'touchcancel':
    case 'touchend':
    case 'touchstart':
    case 'volumechange':
    case 'change':
    case 'selectionchange':
    case 'textInput':
    case 'compositionstart':
    case 'compositionend':
    case 'compositionupdate':
    case 'beforeblur':
    case 'afterblur':
    case 'beforeinput':
    case 'blur':
    case 'fullscreenchange':
    case 'focus':
    case 'hashchange':
    case 'popstate':
    case 'select':
    case 'selectstart':
      return 1;
    case 'drag':
    case 'dragenter':
    case 'dragexit':
    case 'dragleave':
    case 'dragover':
    case 'mousemove':
    case 'mouseout':
    case 'mouseover':
    case 'pointermove':
    case 'pointerout':
    case 'pointerover':
    case 'scroll':
    case 'toggle':
    case 'touchmove':
    case 'wheel':
    case 'mouseenter':
    case 'mouseleave':
    case 'pointerenter':
    case 'pointerleave':
      return 4;
    case 'message':
      switch (r2()) {
        case Lc:
          return 1;
        case Z0:
          return 4;
        case ds:
        case o2:
          return 16;
        case J0:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var rn = null,
  Vc = null,
  qi = null;
function lm() {
  if (qi) return qi;
  var e,
    t = Vc,
    n = t.length,
    r,
    o = 'value' in rn ? rn.value : rn.textContent,
    i = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++);
  var s = n - e;
  for (r = 1; r <= s && t[n - r] === o[i - r]; r++);
  return (qi = o.slice(e, 1 < r ? 1 - r : void 0));
}
function Yi(e) {
  var t = e.keyCode;
  return (
    'charCode' in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function bi() {
  return !0;
}
function Ad() {
  return !1;
}
function nt(e) {
  function t(n, r, o, i, s) {
    (this._reactName = n),
      (this._targetInst = o),
      (this.type = r),
      (this.nativeEvent = i),
      (this.target = s),
      (this.currentTarget = null);
    for (var a in e)
      e.hasOwnProperty(a) && ((n = e[a]), (this[a] = n ? n(i) : i[a]));
    return (
      (this.isDefaultPrevented = (
        i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
      )
        ? bi
        : Ad),
      (this.isPropagationStopped = Ad),
      this
    );
  }
  return (
    fe(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != 'unknown' && (n.returnValue = !1),
          (this.isDefaultPrevented = bi));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != 'unknown' && (n.cancelBubble = !0),
          (this.isPropagationStopped = bi));
      },
      persist: function () {},
      isPersistent: bi
    }),
    t
  );
}
var Vr = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  },
  zc = nt(Vr),
  oi = fe({}, Vr, { view: 0, detail: 0 }),
  v2 = nt(oi),
  Ha,
  Ga,
  Xr,
  ia = fe({}, oi, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: jc,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return 'movementX' in e
        ? e.movementX
        : (e !== Xr &&
            (Xr && e.type === 'mousemove'
              ? ((Ha = e.screenX - Xr.screenX), (Ga = e.screenY - Xr.screenY))
              : (Ga = Ha = 0),
            (Xr = e)),
          Ha);
    },
    movementY: function (e) {
      return 'movementY' in e ? e.movementY : Ga;
    }
  }),
  Dd = nt(ia),
  y2 = fe({}, ia, { dataTransfer: 0 }),
  w2 = nt(y2),
  x2 = fe({}, oi, { relatedTarget: 0 }),
  Qa = nt(x2),
  C2 = fe({}, Vr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  b2 = nt(C2),
  S2 = fe({}, Vr, {
    clipboardData: function (e) {
      return 'clipboardData' in e ? e.clipboardData : window.clipboardData;
    }
  }),
  E2 = nt(S2),
  k2 = fe({}, Vr, { data: 0 }),
  Ld = nt(k2),
  P2 = {
    Esc: 'Escape',
    Spacebar: ' ',
    Left: 'ArrowLeft',
    Up: 'ArrowUp',
    Right: 'ArrowRight',
    Down: 'ArrowDown',
    Del: 'Delete',
    Win: 'OS',
    Menu: 'ContextMenu',
    Apps: 'ContextMenu',
    Scroll: 'ScrollLock',
    MozPrintableKey: 'Unidentified'
  },
  $2 = {
    8: 'Backspace',
    9: 'Tab',
    12: 'Clear',
    13: 'Enter',
    16: 'Shift',
    17: 'Control',
    18: 'Alt',
    19: 'Pause',
    20: 'CapsLock',
    27: 'Escape',
    32: ' ',
    33: 'PageUp',
    34: 'PageDown',
    35: 'End',
    36: 'Home',
    37: 'ArrowLeft',
    38: 'ArrowUp',
    39: 'ArrowRight',
    40: 'ArrowDown',
    45: 'Insert',
    46: 'Delete',
    112: 'F1',
    113: 'F2',
    114: 'F3',
    115: 'F4',
    116: 'F5',
    117: 'F6',
    118: 'F7',
    119: 'F8',
    120: 'F9',
    121: 'F10',
    122: 'F11',
    123: 'F12',
    144: 'NumLock',
    145: 'ScrollLock',
    224: 'Meta'
  },
  _2 = {
    Alt: 'altKey',
    Control: 'ctrlKey',
    Meta: 'metaKey',
    Shift: 'shiftKey'
  };
function T2(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = _2[e]) ? !!t[e] : !1;
}
function jc() {
  return T2;
}
var R2 = fe({}, oi, {
    key: function (e) {
      if (e.key) {
        var t = P2[e.key] || e.key;
        if (t !== 'Unidentified') return t;
      }
      return e.type === 'keypress'
        ? ((e = Yi(e)), e === 13 ? 'Enter' : String.fromCharCode(e))
        : e.type === 'keydown' || e.type === 'keyup'
          ? $2[e.keyCode] || 'Unidentified'
          : '';
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: jc,
    charCode: function (e) {
      return e.type === 'keypress' ? Yi(e) : 0;
    },
    keyCode: function (e) {
      return e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === 'keypress'
        ? Yi(e)
        : e.type === 'keydown' || e.type === 'keyup'
          ? e.keyCode
          : 0;
    }
  }),
  M2 = nt(R2),
  O2 = fe({}, ia, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
  }),
  Fd = nt(O2),
  A2 = fe({}, oi, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: jc
  }),
  D2 = nt(A2),
  L2 = fe({}, Vr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  F2 = nt(L2),
  N2 = fe({}, ia, {
    deltaX: function (e) {
      return 'deltaX' in e ? e.deltaX : 'wheelDeltaX' in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return 'deltaY' in e
        ? e.deltaY
        : 'wheelDeltaY' in e
          ? -e.wheelDeltaY
          : 'wheelDelta' in e
            ? -e.wheelDelta
            : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }),
  I2 = nt(N2),
  V2 = [9, 13, 27, 32],
  Bc = jt && 'CompositionEvent' in window,
  po = null;
jt && 'documentMode' in document && (po = document.documentMode);
var z2 = jt && 'TextEvent' in window && !po,
  um = jt && (!Bc || (po && 8 < po && 11 >= po)),
  Nd = String.fromCharCode(32),
  Id = !1;
function cm(e, t) {
  switch (e) {
    case 'keyup':
      return V2.indexOf(t.keyCode) !== -1;
    case 'keydown':
      return t.keyCode !== 229;
    case 'keypress':
    case 'mousedown':
    case 'focusout':
      return !0;
    default:
      return !1;
  }
}
function fm(e) {
  return (e = e.detail), typeof e == 'object' && 'data' in e ? e.data : null;
}
var ur = !1;
function j2(e, t) {
  switch (e) {
    case 'compositionend':
      return fm(t);
    case 'keypress':
      return t.which !== 32 ? null : ((Id = !0), Nd);
    case 'textInput':
      return (e = t.data), e === Nd && Id ? null : e;
    default:
      return null;
  }
}
function B2(e, t) {
  if (ur)
    return e === 'compositionend' || (!Bc && cm(e, t))
      ? ((e = lm()), (qi = Vc = rn = null), (ur = !1), e)
      : null;
  switch (e) {
    case 'paste':
      return null;
    case 'keypress':
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case 'compositionend':
      return um && t.locale !== 'ko' ? null : t.data;
    default:
      return null;
  }
}
var U2 = {
  color: !0,
  date: !0,
  datetime: !0,
  'datetime-local': !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0
};
function Vd(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === 'input' ? !!U2[e.type] : t === 'textarea';
}
function dm(e, t, n, r) {
  U0(r),
    (t = gs(t, 'onChange')),
    0 < t.length &&
      ((n = new zc('onChange', 'change', null, n, r)),
      e.push({ event: n, listeners: t }));
}
var ho = null,
  Lo = null;
function K2(e) {
  Sm(e, 0);
}
function sa(e) {
  var t = dr(e);
  if (F0(t)) return e;
}
function W2(e, t) {
  if (e === 'change') return t;
}
var pm = !1;
if (jt) {
  var qa;
  if (jt) {
    var Ya = 'oninput' in document;
    if (!Ya) {
      var zd = document.createElement('div');
      zd.setAttribute('oninput', 'return;'),
        (Ya = typeof zd.oninput == 'function');
    }
    qa = Ya;
  } else qa = !1;
  pm = qa && (!document.documentMode || 9 < document.documentMode);
}
function jd() {
  ho && (ho.detachEvent('onpropertychange', hm), (Lo = ho = null));
}
function hm(e) {
  if (e.propertyName === 'value' && sa(Lo)) {
    var t = [];
    dm(t, Lo, e, Dc(e)), G0(K2, t);
  }
}
function H2(e, t, n) {
  e === 'focusin'
    ? (jd(), (ho = t), (Lo = n), ho.attachEvent('onpropertychange', hm))
    : e === 'focusout' && jd();
}
function G2(e) {
  if (e === 'selectionchange' || e === 'keyup' || e === 'keydown')
    return sa(Lo);
}
function Q2(e, t) {
  if (e === 'click') return sa(t);
}
function q2(e, t) {
  if (e === 'input' || e === 'change') return sa(t);
}
function Y2(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var xt = typeof Object.is == 'function' ? Object.is : Y2;
function Fo(e, t) {
  if (xt(e, t)) return !0;
  if (typeof e != 'object' || e === null || typeof t != 'object' || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var o = n[r];
    if (!Ul.call(t, o) || !xt(e[o], t[o])) return !1;
  }
  return !0;
}
function Bd(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Ud(e, t) {
  var n = Bd(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = Bd(n);
  }
}
function mm(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
        ? !1
        : t && t.nodeType === 3
          ? mm(e, t.parentNode)
          : 'contains' in e
            ? e.contains(t)
            : e.compareDocumentPosition
              ? !!(e.compareDocumentPosition(t) & 16)
              : !1
    : !1;
}
function gm() {
  for (var e = window, t = us(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == 'string';
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = us(e.document);
  }
  return t;
}
function Uc(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === 'input' &&
      (e.type === 'text' ||
        e.type === 'search' ||
        e.type === 'tel' ||
        e.type === 'url' ||
        e.type === 'password')) ||
      t === 'textarea' ||
      e.contentEditable === 'true')
  );
}
function X2(e) {
  var t = gm(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    mm(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && Uc(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        'selectionStart' in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var o = n.textContent.length,
          i = Math.min(r.start, o);
        (r = r.end === void 0 ? i : Math.min(r.end, o)),
          !e.extend && i > r && ((o = r), (r = i), (i = o)),
          (o = Ud(n, i));
        var s = Ud(n, r);
        o &&
          s &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== o.node ||
            e.anchorOffset !== o.offset ||
            e.focusNode !== s.node ||
            e.focusOffset !== s.offset) &&
          ((t = t.createRange()),
          t.setStart(o.node, o.offset),
          e.removeAllRanges(),
          i > r
            ? (e.addRange(t), e.extend(s.node, s.offset))
            : (t.setEnd(s.node, s.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == 'function' && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var Z2 = jt && 'documentMode' in document && 11 >= document.documentMode,
  cr = null,
  lu = null,
  mo = null,
  uu = !1;
function Kd(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  uu ||
    cr == null ||
    cr !== us(r) ||
    ((r = cr),
    'selectionStart' in r && Uc(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset
        })),
    (mo && Fo(mo, r)) ||
      ((mo = r),
      (r = gs(lu, 'onSelect')),
      0 < r.length &&
        ((t = new zc('onSelect', 'select', null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = cr))));
}
function Si(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n['Webkit' + e] = 'webkit' + t),
    (n['Moz' + e] = 'moz' + t),
    n
  );
}
var fr = {
    animationend: Si('Animation', 'AnimationEnd'),
    animationiteration: Si('Animation', 'AnimationIteration'),
    animationstart: Si('Animation', 'AnimationStart'),
    transitionend: Si('Transition', 'TransitionEnd')
  },
  Xa = {},
  vm = {};
jt &&
  ((vm = document.createElement('div').style),
  'AnimationEvent' in window ||
    (delete fr.animationend.animation,
    delete fr.animationiteration.animation,
    delete fr.animationstart.animation),
  'TransitionEvent' in window || delete fr.transitionend.transition);
function aa(e) {
  if (Xa[e]) return Xa[e];
  if (!fr[e]) return e;
  var t = fr[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in vm) return (Xa[e] = t[n]);
  return e;
}
var ym = aa('animationend'),
  wm = aa('animationiteration'),
  xm = aa('animationstart'),
  Cm = aa('transitionend'),
  bm = new Map(),
  Wd =
    'abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
      ' '
    );
function Sn(e, t) {
  bm.set(e, t), Qn(t, [e]);
}
for (var Za = 0; Za < Wd.length; Za++) {
  var Ja = Wd[Za],
    J2 = Ja.toLowerCase(),
    e5 = Ja[0].toUpperCase() + Ja.slice(1);
  Sn(J2, 'on' + e5);
}
Sn(ym, 'onAnimationEnd');
Sn(wm, 'onAnimationIteration');
Sn(xm, 'onAnimationStart');
Sn('dblclick', 'onDoubleClick');
Sn('focusin', 'onFocus');
Sn('focusout', 'onBlur');
Sn(Cm, 'onTransitionEnd');
Tr('onMouseEnter', ['mouseout', 'mouseover']);
Tr('onMouseLeave', ['mouseout', 'mouseover']);
Tr('onPointerEnter', ['pointerout', 'pointerover']);
Tr('onPointerLeave', ['pointerout', 'pointerover']);
Qn(
  'onChange',
  'change click focusin focusout input keydown keyup selectionchange'.split(' ')
);
Qn(
  'onSelect',
  'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(
    ' '
  )
);
Qn('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']);
Qn(
  'onCompositionEnd',
  'compositionend focusout keydown keypress keyup mousedown'.split(' ')
);
Qn(
  'onCompositionStart',
  'compositionstart focusout keydown keypress keyup mousedown'.split(' ')
);
Qn(
  'onCompositionUpdate',
  'compositionupdate focusout keydown keypress keyup mousedown'.split(' ')
);
var ao =
    'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
      ' '
    ),
  t5 = new Set('cancel close invalid load scroll toggle'.split(' ').concat(ao));
function Hd(e, t, n) {
  var r = e.type || 'unknown-event';
  (e.currentTarget = n), Jy(r, t, void 0, e), (e.currentTarget = null);
}
function Sm(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      o = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t)
        for (var s = r.length - 1; 0 <= s; s--) {
          var a = r[s],
            l = a.instance,
            u = a.currentTarget;
          if (((a = a.listener), l !== i && o.isPropagationStopped())) break e;
          Hd(o, a, u), (i = l);
        }
      else
        for (s = 0; s < r.length; s++) {
          if (
            ((a = r[s]),
            (l = a.instance),
            (u = a.currentTarget),
            (a = a.listener),
            l !== i && o.isPropagationStopped())
          )
            break e;
          Hd(o, a, u), (i = l);
        }
    }
  }
  if (fs) throw ((e = ou), (fs = !1), (ou = null), e);
}
function ie(e, t) {
  var n = t[hu];
  n === void 0 && (n = t[hu] = new Set());
  var r = e + '__bubble';
  n.has(r) || (Em(t, e, 2, !1), n.add(r));
}
function el(e, t, n) {
  var r = 0;
  t && (r |= 4), Em(n, e, r, t);
}
var Ei = '_reactListening' + Math.random().toString(36).slice(2);
function No(e) {
  if (!e[Ei]) {
    (e[Ei] = !0),
      M0.forEach(function (n) {
        n !== 'selectionchange' && (t5.has(n) || el(n, !1, e), el(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Ei] || ((t[Ei] = !0), el('selectionchange', !1, t));
  }
}
function Em(e, t, n, r) {
  switch (am(t)) {
    case 1:
      var o = m2;
      break;
    case 4:
      o = g2;
      break;
    default:
      o = Ic;
  }
  (n = o.bind(null, t, n, e)),
    (o = void 0),
    !ru ||
      (t !== 'touchstart' && t !== 'touchmove' && t !== 'wheel') ||
      (o = !0),
    r
      ? o !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: o })
        : e.addEventListener(t, n, !0)
      : o !== void 0
        ? e.addEventListener(t, n, { passive: o })
        : e.addEventListener(t, n, !1);
}
function tl(e, t, n, r, o) {
  var i = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var s = r.tag;
      if (s === 3 || s === 4) {
        var a = r.stateNode.containerInfo;
        if (a === o || (a.nodeType === 8 && a.parentNode === o)) break;
        if (s === 4)
          for (s = r.return; s !== null; ) {
            var l = s.tag;
            if (
              (l === 3 || l === 4) &&
              ((l = s.stateNode.containerInfo),
              l === o || (l.nodeType === 8 && l.parentNode === o))
            )
              return;
            s = s.return;
          }
        for (; a !== null; ) {
          if (((s = Dn(a)), s === null)) return;
          if (((l = s.tag), l === 5 || l === 6)) {
            r = i = s;
            continue e;
          }
          a = a.parentNode;
        }
      }
      r = r.return;
    }
  G0(function () {
    var u = i,
      c = Dc(n),
      d = [];
    e: {
      var h = bm.get(e);
      if (h !== void 0) {
        var v = zc,
          w = e;
        switch (e) {
          case 'keypress':
            if (Yi(n) === 0) break e;
          case 'keydown':
          case 'keyup':
            v = M2;
            break;
          case 'focusin':
            (w = 'focus'), (v = Qa);
            break;
          case 'focusout':
            (w = 'blur'), (v = Qa);
            break;
          case 'beforeblur':
          case 'afterblur':
            v = Qa;
            break;
          case 'click':
            if (n.button === 2) break e;
          case 'auxclick':
          case 'dblclick':
          case 'mousedown':
          case 'mousemove':
          case 'mouseup':
          case 'mouseout':
          case 'mouseover':
          case 'contextmenu':
            v = Dd;
            break;
          case 'drag':
          case 'dragend':
          case 'dragenter':
          case 'dragexit':
          case 'dragleave':
          case 'dragover':
          case 'dragstart':
          case 'drop':
            v = w2;
            break;
          case 'touchcancel':
          case 'touchend':
          case 'touchmove':
          case 'touchstart':
            v = D2;
            break;
          case ym:
          case wm:
          case xm:
            v = b2;
            break;
          case Cm:
            v = F2;
            break;
          case 'scroll':
            v = v2;
            break;
          case 'wheel':
            v = I2;
            break;
          case 'copy':
          case 'cut':
          case 'paste':
            v = E2;
            break;
          case 'gotpointercapture':
          case 'lostpointercapture':
          case 'pointercancel':
          case 'pointerdown':
          case 'pointermove':
          case 'pointerout':
          case 'pointerover':
          case 'pointerup':
            v = Fd;
        }
        var x = (t & 4) !== 0,
          b = !x && e === 'scroll',
          p = x ? (h !== null ? h + 'Capture' : null) : h;
        x = [];
        for (var m = u, f; m !== null; ) {
          f = m;
          var y = f.stateNode;
          if (
            (f.tag === 5 &&
              y !== null &&
              ((f = y),
              p !== null && ((y = Mo(m, p)), y != null && x.push(Io(m, y, f)))),
            b)
          )
            break;
          m = m.return;
        }
        0 < x.length &&
          ((h = new v(h, w, null, n, c)), d.push({ event: h, listeners: x }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((h = e === 'mouseover' || e === 'pointerover'),
          (v = e === 'mouseout' || e === 'pointerout'),
          h &&
            n !== tu &&
            (w = n.relatedTarget || n.fromElement) &&
            (Dn(w) || w[Bt]))
        )
          break e;
        if (
          (v || h) &&
          ((h =
            c.window === c
              ? c
              : (h = c.ownerDocument)
                ? h.defaultView || h.parentWindow
                : window),
          v
            ? ((w = n.relatedTarget || n.toElement),
              (v = u),
              (w = w ? Dn(w) : null),
              w !== null &&
                ((b = qn(w)), w !== b || (w.tag !== 5 && w.tag !== 6)) &&
                (w = null))
            : ((v = null), (w = u)),
          v !== w)
        ) {
          if (
            ((x = Dd),
            (y = 'onMouseLeave'),
            (p = 'onMouseEnter'),
            (m = 'mouse'),
            (e === 'pointerout' || e === 'pointerover') &&
              ((x = Fd),
              (y = 'onPointerLeave'),
              (p = 'onPointerEnter'),
              (m = 'pointer')),
            (b = v == null ? h : dr(v)),
            (f = w == null ? h : dr(w)),
            (h = new x(y, m + 'leave', v, n, c)),
            (h.target = b),
            (h.relatedTarget = f),
            (y = null),
            Dn(c) === u &&
              ((x = new x(p, m + 'enter', w, n, c)),
              (x.target = f),
              (x.relatedTarget = b),
              (y = x)),
            (b = y),
            v && w)
          )
            t: {
              for (x = v, p = w, m = 0, f = x; f; f = tr(f)) m++;
              for (f = 0, y = p; y; y = tr(y)) f++;
              for (; 0 < m - f; ) (x = tr(x)), m--;
              for (; 0 < f - m; ) (p = tr(p)), f--;
              for (; m--; ) {
                if (x === p || (p !== null && x === p.alternate)) break t;
                (x = tr(x)), (p = tr(p));
              }
              x = null;
            }
          else x = null;
          v !== null && Gd(d, h, v, x, !1),
            w !== null && b !== null && Gd(d, b, w, x, !0);
        }
      }
      e: {
        if (
          ((h = u ? dr(u) : window),
          (v = h.nodeName && h.nodeName.toLowerCase()),
          v === 'select' || (v === 'input' && h.type === 'file'))
        )
          var C = W2;
        else if (Vd(h))
          if (pm) C = q2;
          else {
            C = G2;
            var S = H2;
          }
        else
          (v = h.nodeName) &&
            v.toLowerCase() === 'input' &&
            (h.type === 'checkbox' || h.type === 'radio') &&
            (C = Q2);
        if (C && (C = C(e, u))) {
          dm(d, C, n, c);
          break e;
        }
        S && S(e, h, u),
          e === 'focusout' &&
            (S = h._wrapperState) &&
            S.controlled &&
            h.type === 'number' &&
            Yl(h, 'number', h.value);
      }
      switch (((S = u ? dr(u) : window), e)) {
        case 'focusin':
          (Vd(S) || S.contentEditable === 'true') &&
            ((cr = S), (lu = u), (mo = null));
          break;
        case 'focusout':
          mo = lu = cr = null;
          break;
        case 'mousedown':
          uu = !0;
          break;
        case 'contextmenu':
        case 'mouseup':
        case 'dragend':
          (uu = !1), Kd(d, n, c);
          break;
        case 'selectionchange':
          if (Z2) break;
        case 'keydown':
        case 'keyup':
          Kd(d, n, c);
      }
      var E;
      if (Bc)
        e: {
          switch (e) {
            case 'compositionstart':
              var k = 'onCompositionStart';
              break e;
            case 'compositionend':
              k = 'onCompositionEnd';
              break e;
            case 'compositionupdate':
              k = 'onCompositionUpdate';
              break e;
          }
          k = void 0;
        }
      else
        ur
          ? cm(e, n) && (k = 'onCompositionEnd')
          : e === 'keydown' && n.keyCode === 229 && (k = 'onCompositionStart');
      k &&
        (um &&
          n.locale !== 'ko' &&
          (ur || k !== 'onCompositionStart'
            ? k === 'onCompositionEnd' && ur && (E = lm())
            : ((rn = c),
              (Vc = 'value' in rn ? rn.value : rn.textContent),
              (ur = !0))),
        (S = gs(u, k)),
        0 < S.length &&
          ((k = new Ld(k, e, null, n, c)),
          d.push({ event: k, listeners: S }),
          E ? (k.data = E) : ((E = fm(n)), E !== null && (k.data = E)))),
        (E = z2 ? j2(e, n) : B2(e, n)) &&
          ((u = gs(u, 'onBeforeInput')),
          0 < u.length &&
            ((c = new Ld('onBeforeInput', 'beforeinput', null, n, c)),
            d.push({ event: c, listeners: u }),
            (c.data = E)));
    }
    Sm(d, t);
  });
}
function Io(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function gs(e, t) {
  for (var n = t + 'Capture', r = []; e !== null; ) {
    var o = e,
      i = o.stateNode;
    o.tag === 5 &&
      i !== null &&
      ((o = i),
      (i = Mo(e, n)),
      i != null && r.unshift(Io(e, i, o)),
      (i = Mo(e, t)),
      i != null && r.push(Io(e, i, o))),
      (e = e.return);
  }
  return r;
}
function tr(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Gd(e, t, n, r, o) {
  for (var i = t._reactName, s = []; n !== null && n !== r; ) {
    var a = n,
      l = a.alternate,
      u = a.stateNode;
    if (l !== null && l === r) break;
    a.tag === 5 &&
      u !== null &&
      ((a = u),
      o
        ? ((l = Mo(n, i)), l != null && s.unshift(Io(n, l, a)))
        : o || ((l = Mo(n, i)), l != null && s.push(Io(n, l, a)))),
      (n = n.return);
  }
  s.length !== 0 && e.push({ event: t, listeners: s });
}
var n5 = /\r\n?/g,
  r5 = /\u0000|\uFFFD/g;
function Qd(e) {
  return (typeof e == 'string' ? e : '' + e)
    .replace(
      n5,
      `
`
    )
    .replace(r5, '');
}
function ki(e, t, n) {
  if (((t = Qd(t)), Qd(e) !== t && n)) throw Error(L(425));
}
function vs() {}
var cu = null,
  fu = null;
function du(e, t) {
  return (
    e === 'textarea' ||
    e === 'noscript' ||
    typeof t.children == 'string' ||
    typeof t.children == 'number' ||
    (typeof t.dangerouslySetInnerHTML == 'object' &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var pu = typeof setTimeout == 'function' ? setTimeout : void 0,
  o5 = typeof clearTimeout == 'function' ? clearTimeout : void 0,
  qd = typeof Promise == 'function' ? Promise : void 0,
  i5 =
    typeof queueMicrotask == 'function'
      ? queueMicrotask
      : typeof qd < 'u'
        ? function (e) {
            return qd.resolve(null).then(e).catch(s5);
          }
        : pu;
function s5(e) {
  setTimeout(function () {
    throw e;
  });
}
function nl(e, t) {
  var n = t,
    r = 0;
  do {
    var o = n.nextSibling;
    if ((e.removeChild(n), o && o.nodeType === 8))
      if (((n = o.data), n === '/$')) {
        if (r === 0) {
          e.removeChild(o), Do(t);
          return;
        }
        r--;
      } else (n !== '$' && n !== '$?' && n !== '$!') || r++;
    n = o;
  } while (n);
  Do(t);
}
function dn(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === '$' || t === '$!' || t === '$?')) break;
      if (t === '/$') return null;
    }
  }
  return e;
}
function Yd(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === '$' || n === '$!' || n === '$?') {
        if (t === 0) return e;
        t--;
      } else n === '/$' && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var zr = Math.random().toString(36).slice(2),
  Et = '__reactFiber$' + zr,
  Vo = '__reactProps$' + zr,
  Bt = '__reactContainer$' + zr,
  hu = '__reactEvents$' + zr,
  a5 = '__reactListeners$' + zr,
  l5 = '__reactHandles$' + zr;
function Dn(e) {
  var t = e[Et];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[Bt] || n[Et])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = Yd(e); e !== null; ) {
          if ((n = e[Et])) return n;
          e = Yd(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function ii(e) {
  return (
    (e = e[Et] || e[Bt]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function dr(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(L(33));
}
function la(e) {
  return e[Vo] || null;
}
var mu = [],
  pr = -1;
function En(e) {
  return { current: e };
}
function ae(e) {
  0 > pr || ((e.current = mu[pr]), (mu[pr] = null), pr--);
}
function oe(e, t) {
  pr++, (mu[pr] = e.current), (e.current = t);
}
var wn = {},
  Me = En(wn),
  Ke = En(!1),
  Bn = wn;
function Rr(e, t) {
  var n = e.type.contextTypes;
  if (!n) return wn;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var o = {},
    i;
  for (i in n) o[i] = t[i];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    o
  );
}
function We(e) {
  return (e = e.childContextTypes), e != null;
}
function ys() {
  ae(Ke), ae(Me);
}
function Xd(e, t, n) {
  if (Me.current !== wn) throw Error(L(168));
  oe(Me, t), oe(Ke, n);
}
function km(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != 'function'))
    return n;
  r = r.getChildContext();
  for (var o in r) if (!(o in t)) throw Error(L(108, Hy(e) || 'Unknown', o));
  return fe({}, n, r);
}
function ws(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || wn),
    (Bn = Me.current),
    oe(Me, e),
    oe(Ke, Ke.current),
    !0
  );
}
function Zd(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(L(169));
  n
    ? ((e = km(e, t, Bn)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      ae(Ke),
      ae(Me),
      oe(Me, e))
    : ae(Ke),
    oe(Ke, n);
}
var Lt = null,
  ua = !1,
  rl = !1;
function Pm(e) {
  Lt === null ? (Lt = [e]) : Lt.push(e);
}
function u5(e) {
  (ua = !0), Pm(e);
}
function kn() {
  if (!rl && Lt !== null) {
    rl = !0;
    var e = 0,
      t = ee;
    try {
      var n = Lt;
      for (ee = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (Lt = null), (ua = !1);
    } catch (o) {
      throw (Lt !== null && (Lt = Lt.slice(e + 1)), X0(Lc, kn), o);
    } finally {
      (ee = t), (rl = !1);
    }
  }
  return null;
}
var hr = [],
  mr = 0,
  xs = null,
  Cs = 0,
  ot = [],
  it = 0,
  Un = null,
  Ft = 1,
  Nt = '';
function Tn(e, t) {
  (hr[mr++] = Cs), (hr[mr++] = xs), (xs = e), (Cs = t);
}
function $m(e, t, n) {
  (ot[it++] = Ft), (ot[it++] = Nt), (ot[it++] = Un), (Un = e);
  var r = Ft;
  e = Nt;
  var o = 32 - yt(r) - 1;
  (r &= ~(1 << o)), (n += 1);
  var i = 32 - yt(t) + o;
  if (30 < i) {
    var s = o - (o % 5);
    (i = (r & ((1 << s) - 1)).toString(32)),
      (r >>= s),
      (o -= s),
      (Ft = (1 << (32 - yt(t) + o)) | (n << o) | r),
      (Nt = i + e);
  } else (Ft = (1 << i) | (n << o) | r), (Nt = e);
}
function Kc(e) {
  e.return !== null && (Tn(e, 1), $m(e, 1, 0));
}
function Wc(e) {
  for (; e === xs; )
    (xs = hr[--mr]), (hr[mr] = null), (Cs = hr[--mr]), (hr[mr] = null);
  for (; e === Un; )
    (Un = ot[--it]),
      (ot[it] = null),
      (Nt = ot[--it]),
      (ot[it] = null),
      (Ft = ot[--it]),
      (ot[it] = null);
}
var Ze = null,
  Xe = null,
  le = !1,
  vt = null;
function _m(e, t) {
  var n = st(5, null, null, 0);
  (n.elementType = 'DELETED'),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function Jd(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (Ze = e), (Xe = dn(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === '' || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Ze = e), (Xe = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = Un !== null ? { id: Ft, overflow: Nt } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824
            }),
            (n = st(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (Ze = e),
            (Xe = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function gu(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function vu(e) {
  if (le) {
    var t = Xe;
    if (t) {
      var n = t;
      if (!Jd(e, t)) {
        if (gu(e)) throw Error(L(418));
        t = dn(n.nextSibling);
        var r = Ze;
        t && Jd(e, t)
          ? _m(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (le = !1), (Ze = e));
      }
    } else {
      if (gu(e)) throw Error(L(418));
      (e.flags = (e.flags & -4097) | 2), (le = !1), (Ze = e);
    }
  }
}
function ep(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Ze = e;
}
function Pi(e) {
  if (e !== Ze) return !1;
  if (!le) return ep(e), (le = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== 'head' && t !== 'body' && !du(e.type, e.memoizedProps))),
    t && (t = Xe))
  ) {
    if (gu(e)) throw (Tm(), Error(L(418)));
    for (; t; ) _m(e, t), (t = dn(t.nextSibling));
  }
  if ((ep(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(L(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === '/$') {
            if (t === 0) {
              Xe = dn(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== '$' && n !== '$!' && n !== '$?') || t++;
        }
        e = e.nextSibling;
      }
      Xe = null;
    }
  } else Xe = Ze ? dn(e.stateNode.nextSibling) : null;
  return !0;
}
function Tm() {
  for (var e = Xe; e; ) e = dn(e.nextSibling);
}
function Mr() {
  (Xe = Ze = null), (le = !1);
}
function Hc(e) {
  vt === null ? (vt = [e]) : vt.push(e);
}
var c5 = Gt.ReactCurrentBatchConfig;
function ht(e, t) {
  if (e && e.defaultProps) {
    (t = fe({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var bs = En(null),
  Ss = null,
  gr = null,
  Gc = null;
function Qc() {
  Gc = gr = Ss = null;
}
function qc(e) {
  var t = bs.current;
  ae(bs), (e._currentValue = t);
}
function yu(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function Pr(e, t) {
  (Ss = e),
    (Gc = gr = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (Ue = !0), (e.firstContext = null));
}
function lt(e) {
  var t = e._currentValue;
  if (Gc !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), gr === null)) {
      if (Ss === null) throw Error(L(308));
      (gr = e), (Ss.dependencies = { lanes: 0, firstContext: e });
    } else gr = gr.next = e;
  return t;
}
var Ln = null;
function Yc(e) {
  Ln === null ? (Ln = [e]) : Ln.push(e);
}
function Rm(e, t, n, r) {
  var o = t.interleaved;
  return (
    o === null ? ((n.next = n), Yc(t)) : ((n.next = o.next), (o.next = n)),
    (t.interleaved = n),
    Ut(e, r)
  );
}
function Ut(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var Zt = !1;
function Xc(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null
  };
}
function Mm(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects
      });
}
function It(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null
  };
}
function pn(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), X & 2)) {
    var o = r.pending;
    return (
      o === null ? (t.next = t) : ((t.next = o.next), (o.next = t)),
      (r.pending = t),
      Ut(e, n)
    );
  }
  return (
    (o = r.interleaved),
    o === null ? ((t.next = t), Yc(r)) : ((t.next = o.next), (o.next = t)),
    (r.interleaved = t),
    Ut(e, n)
  );
}
function Xi(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Fc(e, n);
  }
}
function tp(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var o = null,
      i = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var s = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null
        };
        i === null ? (o = i = s) : (i = i.next = s), (n = n.next);
      } while (n !== null);
      i === null ? (o = i = t) : (i = i.next = t);
    } else o = i = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: o,
      lastBaseUpdate: i,
      shared: r.shared,
      effects: r.effects
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function Es(e, t, n, r) {
  var o = e.updateQueue;
  Zt = !1;
  var i = o.firstBaseUpdate,
    s = o.lastBaseUpdate,
    a = o.shared.pending;
  if (a !== null) {
    o.shared.pending = null;
    var l = a,
      u = l.next;
    (l.next = null), s === null ? (i = u) : (s.next = u), (s = l);
    var c = e.alternate;
    c !== null &&
      ((c = c.updateQueue),
      (a = c.lastBaseUpdate),
      a !== s &&
        (a === null ? (c.firstBaseUpdate = u) : (a.next = u),
        (c.lastBaseUpdate = l)));
  }
  if (i !== null) {
    var d = o.baseState;
    (s = 0), (c = u = l = null), (a = i);
    do {
      var h = a.lane,
        v = a.eventTime;
      if ((r & h) === h) {
        c !== null &&
          (c = c.next =
            {
              eventTime: v,
              lane: 0,
              tag: a.tag,
              payload: a.payload,
              callback: a.callback,
              next: null
            });
        e: {
          var w = e,
            x = a;
          switch (((h = t), (v = n), x.tag)) {
            case 1:
              if (((w = x.payload), typeof w == 'function')) {
                d = w.call(v, d, h);
                break e;
              }
              d = w;
              break e;
            case 3:
              w.flags = (w.flags & -65537) | 128;
            case 0:
              if (
                ((w = x.payload),
                (h = typeof w == 'function' ? w.call(v, d, h) : w),
                h == null)
              )
                break e;
              d = fe({}, d, h);
              break e;
            case 2:
              Zt = !0;
          }
        }
        a.callback !== null &&
          a.lane !== 0 &&
          ((e.flags |= 64),
          (h = o.effects),
          h === null ? (o.effects = [a]) : h.push(a));
      } else
        (v = {
          eventTime: v,
          lane: h,
          tag: a.tag,
          payload: a.payload,
          callback: a.callback,
          next: null
        }),
          c === null ? ((u = c = v), (l = d)) : (c = c.next = v),
          (s |= h);
      if (((a = a.next), a === null)) {
        if (((a = o.shared.pending), a === null)) break;
        (h = a),
          (a = h.next),
          (h.next = null),
          (o.lastBaseUpdate = h),
          (o.shared.pending = null);
      }
    } while (1);
    if (
      (c === null && (l = d),
      (o.baseState = l),
      (o.firstBaseUpdate = u),
      (o.lastBaseUpdate = c),
      (t = o.shared.interleaved),
      t !== null)
    ) {
      o = t;
      do (s |= o.lane), (o = o.next);
      while (o !== t);
    } else i === null && (o.shared.lanes = 0);
    (Wn |= s), (e.lanes = s), (e.memoizedState = d);
  }
}
function np(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        o = r.callback;
      if (o !== null) {
        if (((r.callback = null), (r = n), typeof o != 'function'))
          throw Error(L(191, o));
        o.call(r);
      }
    }
}
var Om = new R0.Component().refs;
function wu(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : fe({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var ca = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? qn(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = Ne(),
      o = mn(e),
      i = It(r, o);
    (i.payload = t),
      n != null && (i.callback = n),
      (t = pn(e, i, o)),
      t !== null && (wt(t, e, o, r), Xi(t, e, o));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = Ne(),
      o = mn(e),
      i = It(r, o);
    (i.tag = 1),
      (i.payload = t),
      n != null && (i.callback = n),
      (t = pn(e, i, o)),
      t !== null && (wt(t, e, o, r), Xi(t, e, o));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = Ne(),
      r = mn(e),
      o = It(n, r);
    (o.tag = 2),
      t != null && (o.callback = t),
      (t = pn(e, o, r)),
      t !== null && (wt(t, e, r, n), Xi(t, e, r));
  }
};
function rp(e, t, n, r, o, i, s) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == 'function'
      ? e.shouldComponentUpdate(r, i, s)
      : t.prototype && t.prototype.isPureReactComponent
        ? !Fo(n, r) || !Fo(o, i)
        : !0
  );
}
function Am(e, t, n) {
  var r = !1,
    o = wn,
    i = t.contextType;
  return (
    typeof i == 'object' && i !== null
      ? (i = lt(i))
      : ((o = We(t) ? Bn : Me.current),
        (r = t.contextTypes),
        (i = (r = r != null) ? Rr(e, o) : wn)),
    (t = new t(n, i)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = ca),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = o),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    t
  );
}
function op(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == 'function' &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == 'function' &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && ca.enqueueReplaceState(t, t.state, null);
}
function xu(e, t, n, r) {
  var o = e.stateNode;
  (o.props = n), (o.state = e.memoizedState), (o.refs = Om), Xc(e);
  var i = t.contextType;
  typeof i == 'object' && i !== null
    ? (o.context = lt(i))
    : ((i = We(t) ? Bn : Me.current), (o.context = Rr(e, i))),
    (o.state = e.memoizedState),
    (i = t.getDerivedStateFromProps),
    typeof i == 'function' && (wu(e, t, i, n), (o.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == 'function' ||
      typeof o.getSnapshotBeforeUpdate == 'function' ||
      (typeof o.UNSAFE_componentWillMount != 'function' &&
        typeof o.componentWillMount != 'function') ||
      ((t = o.state),
      typeof o.componentWillMount == 'function' && o.componentWillMount(),
      typeof o.UNSAFE_componentWillMount == 'function' &&
        o.UNSAFE_componentWillMount(),
      t !== o.state && ca.enqueueReplaceState(o, o.state, null),
      Es(e, n, o, r),
      (o.state = e.memoizedState)),
    typeof o.componentDidMount == 'function' && (e.flags |= 4194308);
}
function Zr(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != 'function' && typeof e != 'object')
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(L(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(L(147, e));
      var o = r,
        i = '' + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == 'function' &&
        t.ref._stringRef === i
        ? t.ref
        : ((t = function (s) {
            var a = o.refs;
            a === Om && (a = o.refs = {}),
              s === null ? delete a[i] : (a[i] = s);
          }),
          (t._stringRef = i),
          t);
    }
    if (typeof e != 'string') throw Error(L(284));
    if (!n._owner) throw Error(L(290, e));
  }
  return e;
}
function $i(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      L(
        31,
        e === '[object Object]'
          ? 'object with keys {' + Object.keys(t).join(', ') + '}'
          : e
      )
    ))
  );
}
function ip(e) {
  var t = e._init;
  return t(e._payload);
}
function Dm(e) {
  function t(p, m) {
    if (e) {
      var f = p.deletions;
      f === null ? ((p.deletions = [m]), (p.flags |= 16)) : f.push(m);
    }
  }
  function n(p, m) {
    if (!e) return null;
    for (; m !== null; ) t(p, m), (m = m.sibling);
    return null;
  }
  function r(p, m) {
    for (p = new Map(); m !== null; )
      m.key !== null ? p.set(m.key, m) : p.set(m.index, m), (m = m.sibling);
    return p;
  }
  function o(p, m) {
    return (p = gn(p, m)), (p.index = 0), (p.sibling = null), p;
  }
  function i(p, m, f) {
    return (
      (p.index = f),
      e
        ? ((f = p.alternate),
          f !== null
            ? ((f = f.index), f < m ? ((p.flags |= 2), m) : f)
            : ((p.flags |= 2), m))
        : ((p.flags |= 1048576), m)
    );
  }
  function s(p) {
    return e && p.alternate === null && (p.flags |= 2), p;
  }
  function a(p, m, f, y) {
    return m === null || m.tag !== 6
      ? ((m = cl(f, p.mode, y)), (m.return = p), m)
      : ((m = o(m, f)), (m.return = p), m);
  }
  function l(p, m, f, y) {
    var C = f.type;
    return C === lr
      ? c(p, m, f.props.children, y, f.key)
      : m !== null &&
          (m.elementType === C ||
            (typeof C == 'object' &&
              C !== null &&
              C.$$typeof === Xt &&
              ip(C) === m.type))
        ? ((y = o(m, f.props)), (y.ref = Zr(p, m, f)), (y.return = p), y)
        : ((y = rs(f.type, f.key, f.props, null, p.mode, y)),
          (y.ref = Zr(p, m, f)),
          (y.return = p),
          y);
  }
  function u(p, m, f, y) {
    return m === null ||
      m.tag !== 4 ||
      m.stateNode.containerInfo !== f.containerInfo ||
      m.stateNode.implementation !== f.implementation
      ? ((m = fl(f, p.mode, y)), (m.return = p), m)
      : ((m = o(m, f.children || [])), (m.return = p), m);
  }
  function c(p, m, f, y, C) {
    return m === null || m.tag !== 7
      ? ((m = zn(f, p.mode, y, C)), (m.return = p), m)
      : ((m = o(m, f)), (m.return = p), m);
  }
  function d(p, m, f) {
    if ((typeof m == 'string' && m !== '') || typeof m == 'number')
      return (m = cl('' + m, p.mode, f)), (m.return = p), m;
    if (typeof m == 'object' && m !== null) {
      switch (m.$$typeof) {
        case gi:
          return (
            (f = rs(m.type, m.key, m.props, null, p.mode, f)),
            (f.ref = Zr(p, null, m)),
            (f.return = p),
            f
          );
        case ar:
          return (m = fl(m, p.mode, f)), (m.return = p), m;
        case Xt:
          var y = m._init;
          return d(p, y(m._payload), f);
      }
      if (io(m) || Gr(m))
        return (m = zn(m, p.mode, f, null)), (m.return = p), m;
      $i(p, m);
    }
    return null;
  }
  function h(p, m, f, y) {
    var C = m !== null ? m.key : null;
    if ((typeof f == 'string' && f !== '') || typeof f == 'number')
      return C !== null ? null : a(p, m, '' + f, y);
    if (typeof f == 'object' && f !== null) {
      switch (f.$$typeof) {
        case gi:
          return f.key === C ? l(p, m, f, y) : null;
        case ar:
          return f.key === C ? u(p, m, f, y) : null;
        case Xt:
          return (C = f._init), h(p, m, C(f._payload), y);
      }
      if (io(f) || Gr(f)) return C !== null ? null : c(p, m, f, y, null);
      $i(p, f);
    }
    return null;
  }
  function v(p, m, f, y, C) {
    if ((typeof y == 'string' && y !== '') || typeof y == 'number')
      return (p = p.get(f) || null), a(m, p, '' + y, C);
    if (typeof y == 'object' && y !== null) {
      switch (y.$$typeof) {
        case gi:
          return (p = p.get(y.key === null ? f : y.key) || null), l(m, p, y, C);
        case ar:
          return (p = p.get(y.key === null ? f : y.key) || null), u(m, p, y, C);
        case Xt:
          var S = y._init;
          return v(p, m, f, S(y._payload), C);
      }
      if (io(y) || Gr(y)) return (p = p.get(f) || null), c(m, p, y, C, null);
      $i(m, y);
    }
    return null;
  }
  function w(p, m, f, y) {
    for (
      var C = null, S = null, E = m, k = (m = 0), A = null;
      E !== null && k < f.length;
      k++
    ) {
      E.index > k ? ((A = E), (E = null)) : (A = E.sibling);
      var R = h(p, E, f[k], y);
      if (R === null) {
        E === null && (E = A);
        break;
      }
      e && E && R.alternate === null && t(p, E),
        (m = i(R, m, k)),
        S === null ? (C = R) : (S.sibling = R),
        (S = R),
        (E = A);
    }
    if (k === f.length) return n(p, E), le && Tn(p, k), C;
    if (E === null) {
      for (; k < f.length; k++)
        (E = d(p, f[k], y)),
          E !== null &&
            ((m = i(E, m, k)), S === null ? (C = E) : (S.sibling = E), (S = E));
      return le && Tn(p, k), C;
    }
    for (E = r(p, E); k < f.length; k++)
      (A = v(E, p, k, f[k], y)),
        A !== null &&
          (e && A.alternate !== null && E.delete(A.key === null ? k : A.key),
          (m = i(A, m, k)),
          S === null ? (C = A) : (S.sibling = A),
          (S = A));
    return (
      e &&
        E.forEach(function (j) {
          return t(p, j);
        }),
      le && Tn(p, k),
      C
    );
  }
  function x(p, m, f, y) {
    var C = Gr(f);
    if (typeof C != 'function') throw Error(L(150));
    if (((f = C.call(f)), f == null)) throw Error(L(151));
    for (
      var S = (C = null), E = m, k = (m = 0), A = null, R = f.next();
      E !== null && !R.done;
      k++, R = f.next()
    ) {
      E.index > k ? ((A = E), (E = null)) : (A = E.sibling);
      var j = h(p, E, R.value, y);
      if (j === null) {
        E === null && (E = A);
        break;
      }
      e && E && j.alternate === null && t(p, E),
        (m = i(j, m, k)),
        S === null ? (C = j) : (S.sibling = j),
        (S = j),
        (E = A);
    }
    if (R.done) return n(p, E), le && Tn(p, k), C;
    if (E === null) {
      for (; !R.done; k++, R = f.next())
        (R = d(p, R.value, y)),
          R !== null &&
            ((m = i(R, m, k)), S === null ? (C = R) : (S.sibling = R), (S = R));
      return le && Tn(p, k), C;
    }
    for (E = r(p, E); !R.done; k++, R = f.next())
      (R = v(E, p, k, R.value, y)),
        R !== null &&
          (e && R.alternate !== null && E.delete(R.key === null ? k : R.key),
          (m = i(R, m, k)),
          S === null ? (C = R) : (S.sibling = R),
          (S = R));
    return (
      e &&
        E.forEach(function (W) {
          return t(p, W);
        }),
      le && Tn(p, k),
      C
    );
  }
  function b(p, m, f, y) {
    if (
      (typeof f == 'object' &&
        f !== null &&
        f.type === lr &&
        f.key === null &&
        (f = f.props.children),
      typeof f == 'object' && f !== null)
    ) {
      switch (f.$$typeof) {
        case gi:
          e: {
            for (var C = f.key, S = m; S !== null; ) {
              if (S.key === C) {
                if (((C = f.type), C === lr)) {
                  if (S.tag === 7) {
                    n(p, S.sibling),
                      (m = o(S, f.props.children)),
                      (m.return = p),
                      (p = m);
                    break e;
                  }
                } else if (
                  S.elementType === C ||
                  (typeof C == 'object' &&
                    C !== null &&
                    C.$$typeof === Xt &&
                    ip(C) === S.type)
                ) {
                  n(p, S.sibling),
                    (m = o(S, f.props)),
                    (m.ref = Zr(p, S, f)),
                    (m.return = p),
                    (p = m);
                  break e;
                }
                n(p, S);
                break;
              } else t(p, S);
              S = S.sibling;
            }
            f.type === lr
              ? ((m = zn(f.props.children, p.mode, y, f.key)),
                (m.return = p),
                (p = m))
              : ((y = rs(f.type, f.key, f.props, null, p.mode, y)),
                (y.ref = Zr(p, m, f)),
                (y.return = p),
                (p = y));
          }
          return s(p);
        case ar:
          e: {
            for (S = f.key; m !== null; ) {
              if (m.key === S)
                if (
                  m.tag === 4 &&
                  m.stateNode.containerInfo === f.containerInfo &&
                  m.stateNode.implementation === f.implementation
                ) {
                  n(p, m.sibling),
                    (m = o(m, f.children || [])),
                    (m.return = p),
                    (p = m);
                  break e;
                } else {
                  n(p, m);
                  break;
                }
              else t(p, m);
              m = m.sibling;
            }
            (m = fl(f, p.mode, y)), (m.return = p), (p = m);
          }
          return s(p);
        case Xt:
          return (S = f._init), b(p, m, S(f._payload), y);
      }
      if (io(f)) return w(p, m, f, y);
      if (Gr(f)) return x(p, m, f, y);
      $i(p, f);
    }
    return (typeof f == 'string' && f !== '') || typeof f == 'number'
      ? ((f = '' + f),
        m !== null && m.tag === 6
          ? (n(p, m.sibling), (m = o(m, f)), (m.return = p), (p = m))
          : (n(p, m), (m = cl(f, p.mode, y)), (m.return = p), (p = m)),
        s(p))
      : n(p, m);
  }
  return b;
}
var Or = Dm(!0),
  Lm = Dm(!1),
  si = {},
  Pt = En(si),
  zo = En(si),
  jo = En(si);
function Fn(e) {
  if (e === si) throw Error(L(174));
  return e;
}
function Zc(e, t) {
  switch ((oe(jo, t), oe(zo, e), oe(Pt, si), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Zl(null, '');
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Zl(t, e));
  }
  ae(Pt), oe(Pt, t);
}
function Ar() {
  ae(Pt), ae(zo), ae(jo);
}
function Fm(e) {
  Fn(jo.current);
  var t = Fn(Pt.current),
    n = Zl(t, e.type);
  t !== n && (oe(zo, e), oe(Pt, n));
}
function Jc(e) {
  zo.current === e && (ae(Pt), ae(zo));
}
var ue = En(0);
function ks(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === '$?' || n.data === '$!')
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var ol = [];
function ef() {
  for (var e = 0; e < ol.length; e++)
    ol[e]._workInProgressVersionPrimary = null;
  ol.length = 0;
}
var Zi = Gt.ReactCurrentDispatcher,
  il = Gt.ReactCurrentBatchConfig,
  Kn = 0,
  ce = null,
  we = null,
  be = null,
  Ps = !1,
  go = !1,
  Bo = 0,
  f5 = 0;
function _e() {
  throw Error(L(321));
}
function tf(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!xt(e[n], t[n])) return !1;
  return !0;
}
function nf(e, t, n, r, o, i) {
  if (
    ((Kn = i),
    (ce = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Zi.current = e === null || e.memoizedState === null ? m5 : g5),
    (e = n(r, o)),
    go)
  ) {
    i = 0;
    do {
      if (((go = !1), (Bo = 0), 25 <= i)) throw Error(L(301));
      (i += 1),
        (be = we = null),
        (t.updateQueue = null),
        (Zi.current = v5),
        (e = n(r, o));
    } while (go);
  }
  if (
    ((Zi.current = $s),
    (t = we !== null && we.next !== null),
    (Kn = 0),
    (be = we = ce = null),
    (Ps = !1),
    t)
  )
    throw Error(L(300));
  return e;
}
function rf() {
  var e = Bo !== 0;
  return (Bo = 0), e;
}
function bt() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null
  };
  return be === null ? (ce.memoizedState = be = e) : (be = be.next = e), be;
}
function ut() {
  if (we === null) {
    var e = ce.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = we.next;
  var t = be === null ? ce.memoizedState : be.next;
  if (t !== null) (be = t), (we = e);
  else {
    if (e === null) throw Error(L(310));
    (we = e),
      (e = {
        memoizedState: we.memoizedState,
        baseState: we.baseState,
        baseQueue: we.baseQueue,
        queue: we.queue,
        next: null
      }),
      be === null ? (ce.memoizedState = be = e) : (be = be.next = e);
  }
  return be;
}
function Uo(e, t) {
  return typeof t == 'function' ? t(e) : t;
}
function sl(e) {
  var t = ut(),
    n = t.queue;
  if (n === null) throw Error(L(311));
  n.lastRenderedReducer = e;
  var r = we,
    o = r.baseQueue,
    i = n.pending;
  if (i !== null) {
    if (o !== null) {
      var s = o.next;
      (o.next = i.next), (i.next = s);
    }
    (r.baseQueue = o = i), (n.pending = null);
  }
  if (o !== null) {
    (i = o.next), (r = r.baseState);
    var a = (s = null),
      l = null,
      u = i;
    do {
      var c = u.lane;
      if ((Kn & c) === c)
        l !== null &&
          (l = l.next =
            {
              lane: 0,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null
            }),
          (r = u.hasEagerState ? u.eagerState : e(r, u.action));
      else {
        var d = {
          lane: c,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null
        };
        l === null ? ((a = l = d), (s = r)) : (l = l.next = d),
          (ce.lanes |= c),
          (Wn |= c);
      }
      u = u.next;
    } while (u !== null && u !== i);
    l === null ? (s = r) : (l.next = a),
      xt(r, t.memoizedState) || (Ue = !0),
      (t.memoizedState = r),
      (t.baseState = s),
      (t.baseQueue = l),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    o = e;
    do (i = o.lane), (ce.lanes |= i), (Wn |= i), (o = o.next);
    while (o !== e);
  } else o === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function al(e) {
  var t = ut(),
    n = t.queue;
  if (n === null) throw Error(L(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    o = n.pending,
    i = t.memoizedState;
  if (o !== null) {
    n.pending = null;
    var s = (o = o.next);
    do (i = e(i, s.action)), (s = s.next);
    while (s !== o);
    xt(i, t.memoizedState) || (Ue = !0),
      (t.memoizedState = i),
      t.baseQueue === null && (t.baseState = i),
      (n.lastRenderedState = i);
  }
  return [i, r];
}
function Nm() {}
function Im(e, t) {
  var n = ce,
    r = ut(),
    o = t(),
    i = !xt(r.memoizedState, o);
  if (
    (i && ((r.memoizedState = o), (Ue = !0)),
    (r = r.queue),
    of(jm.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || i || (be !== null && be.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      Ko(9, zm.bind(null, n, r, o, t), void 0, null),
      Se === null)
    )
      throw Error(L(349));
    Kn & 30 || Vm(n, t, o);
  }
  return o;
}
function Vm(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = ce.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (ce.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function zm(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), Bm(t) && Um(e);
}
function jm(e, t, n) {
  return n(function () {
    Bm(t) && Um(e);
  });
}
function Bm(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !xt(e, n);
  } catch {
    return !0;
  }
}
function Um(e) {
  var t = Ut(e, 1);
  t !== null && wt(t, e, 1, -1);
}
function sp(e) {
  var t = bt();
  return (
    typeof e == 'function' && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Uo,
      lastRenderedState: e
    }),
    (t.queue = e),
    (e = e.dispatch = h5.bind(null, ce, e)),
    [t.memoizedState, e]
  );
}
function Ko(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = ce.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (ce.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function Km() {
  return ut().memoizedState;
}
function Ji(e, t, n, r) {
  var o = bt();
  (ce.flags |= e),
    (o.memoizedState = Ko(1 | t, n, void 0, r === void 0 ? null : r));
}
function fa(e, t, n, r) {
  var o = ut();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (we !== null) {
    var s = we.memoizedState;
    if (((i = s.destroy), r !== null && tf(r, s.deps))) {
      o.memoizedState = Ko(t, n, i, r);
      return;
    }
  }
  (ce.flags |= e), (o.memoizedState = Ko(1 | t, n, i, r));
}
function ap(e, t) {
  return Ji(8390656, 8, e, t);
}
function of(e, t) {
  return fa(2048, 8, e, t);
}
function Wm(e, t) {
  return fa(4, 2, e, t);
}
function Hm(e, t) {
  return fa(4, 4, e, t);
}
function Gm(e, t) {
  if (typeof t == 'function')
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function Qm(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), fa(4, 4, Gm.bind(null, t, e), n)
  );
}
function sf() {}
function qm(e, t) {
  var n = ut();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && tf(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function Ym(e, t) {
  var n = ut();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && tf(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Xm(e, t, n) {
  return Kn & 21
    ? (xt(n, t) || ((n = em()), (ce.lanes |= n), (Wn |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (Ue = !0)), (e.memoizedState = n));
}
function d5(e, t) {
  var n = ee;
  (ee = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = il.transition;
  il.transition = {};
  try {
    e(!1), t();
  } finally {
    (ee = n), (il.transition = r);
  }
}
function Zm() {
  return ut().memoizedState;
}
function p5(e, t, n) {
  var r = mn(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }),
    Jm(e))
  )
    e1(t, n);
  else if (((n = Rm(e, t, n, r)), n !== null)) {
    var o = Ne();
    wt(n, e, r, o), t1(n, t, r);
  }
}
function h5(e, t, n) {
  var r = mn(e),
    o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Jm(e)) e1(t, o);
  else {
    var i = e.alternate;
    if (
      e.lanes === 0 &&
      (i === null || i.lanes === 0) &&
      ((i = t.lastRenderedReducer), i !== null)
    )
      try {
        var s = t.lastRenderedState,
          a = i(s, n);
        if (((o.hasEagerState = !0), (o.eagerState = a), xt(a, s))) {
          var l = t.interleaved;
          l === null
            ? ((o.next = o), Yc(t))
            : ((o.next = l.next), (l.next = o)),
            (t.interleaved = o);
          return;
        }
      } catch {
      } finally {
      }
    (n = Rm(e, t, o, r)),
      n !== null && ((o = Ne()), wt(n, e, r, o), t1(n, t, r));
  }
}
function Jm(e) {
  var t = e.alternate;
  return e === ce || (t !== null && t === ce);
}
function e1(e, t) {
  go = Ps = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function t1(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Fc(e, n);
  }
}
var $s = {
    readContext: lt,
    useCallback: _e,
    useContext: _e,
    useEffect: _e,
    useImperativeHandle: _e,
    useInsertionEffect: _e,
    useLayoutEffect: _e,
    useMemo: _e,
    useReducer: _e,
    useRef: _e,
    useState: _e,
    useDebugValue: _e,
    useDeferredValue: _e,
    useTransition: _e,
    useMutableSource: _e,
    useSyncExternalStore: _e,
    useId: _e,
    unstable_isNewReconciler: !1
  },
  m5 = {
    readContext: lt,
    useCallback: function (e, t) {
      return (bt().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: lt,
    useEffect: ap,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Ji(4194308, 4, Gm.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Ji(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Ji(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = bt();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = bt();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t
        }),
        (r.queue = e),
        (e = e.dispatch = p5.bind(null, ce, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = bt();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: sp,
    useDebugValue: sf,
    useDeferredValue: function (e) {
      return (bt().memoizedState = e);
    },
    useTransition: function () {
      var e = sp(!1),
        t = e[0];
      return (e = d5.bind(null, e[1])), (bt().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = ce,
        o = bt();
      if (le) {
        if (n === void 0) throw Error(L(407));
        n = n();
      } else {
        if (((n = t()), Se === null)) throw Error(L(349));
        Kn & 30 || Vm(r, t, n);
      }
      o.memoizedState = n;
      var i = { value: n, getSnapshot: t };
      return (
        (o.queue = i),
        ap(jm.bind(null, r, i, e), [e]),
        (r.flags |= 2048),
        Ko(9, zm.bind(null, r, i, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = bt(),
        t = Se.identifierPrefix;
      if (le) {
        var n = Nt,
          r = Ft;
        (n = (r & ~(1 << (32 - yt(r) - 1))).toString(32) + n),
          (t = ':' + t + 'R' + n),
          (n = Bo++),
          0 < n && (t += 'H' + n.toString(32)),
          (t += ':');
      } else (n = f5++), (t = ':' + t + 'r' + n.toString(32) + ':');
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1
  },
  g5 = {
    readContext: lt,
    useCallback: qm,
    useContext: lt,
    useEffect: of,
    useImperativeHandle: Qm,
    useInsertionEffect: Wm,
    useLayoutEffect: Hm,
    useMemo: Ym,
    useReducer: sl,
    useRef: Km,
    useState: function () {
      return sl(Uo);
    },
    useDebugValue: sf,
    useDeferredValue: function (e) {
      var t = ut();
      return Xm(t, we.memoizedState, e);
    },
    useTransition: function () {
      var e = sl(Uo)[0],
        t = ut().memoizedState;
      return [e, t];
    },
    useMutableSource: Nm,
    useSyncExternalStore: Im,
    useId: Zm,
    unstable_isNewReconciler: !1
  },
  v5 = {
    readContext: lt,
    useCallback: qm,
    useContext: lt,
    useEffect: of,
    useImperativeHandle: Qm,
    useInsertionEffect: Wm,
    useLayoutEffect: Hm,
    useMemo: Ym,
    useReducer: al,
    useRef: Km,
    useState: function () {
      return al(Uo);
    },
    useDebugValue: sf,
    useDeferredValue: function (e) {
      var t = ut();
      return we === null ? (t.memoizedState = e) : Xm(t, we.memoizedState, e);
    },
    useTransition: function () {
      var e = al(Uo)[0],
        t = ut().memoizedState;
      return [e, t];
    },
    useMutableSource: Nm,
    useSyncExternalStore: Im,
    useId: Zm,
    unstable_isNewReconciler: !1
  };
function Dr(e, t) {
  try {
    var n = '',
      r = t;
    do (n += Wy(r)), (r = r.return);
    while (r);
    var o = n;
  } catch (i) {
    o =
      `
Error generating stack: ` +
      i.message +
      `
` +
      i.stack;
  }
  return { value: e, source: t, stack: o, digest: null };
}
function ll(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Cu(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var y5 = typeof WeakMap == 'function' ? WeakMap : Map;
function n1(e, t, n) {
  (n = It(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      Ts || ((Ts = !0), (Mu = r)), Cu(e, t);
    }),
    n
  );
}
function r1(e, t, n) {
  (n = It(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == 'function') {
    var o = t.value;
    (n.payload = function () {
      return r(o);
    }),
      (n.callback = function () {
        Cu(e, t);
      });
  }
  var i = e.stateNode;
  return (
    i !== null &&
      typeof i.componentDidCatch == 'function' &&
      (n.callback = function () {
        Cu(e, t),
          typeof r != 'function' &&
            (hn === null ? (hn = new Set([this])) : hn.add(this));
        var s = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: s !== null ? s : ''
        });
      }),
    n
  );
}
function lp(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new y5();
    var o = new Set();
    r.set(t, o);
  } else (o = r.get(t)), o === void 0 && ((o = new Set()), r.set(t, o));
  o.has(n) || (o.add(n), (e = O5.bind(null, e, t, n)), t.then(e, e));
}
function up(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function cp(e, t, n, r, o) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = o), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = It(-1, 1)), (t.tag = 2), pn(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var w5 = Gt.ReactCurrentOwner,
  Ue = !1;
function De(e, t, n, r) {
  t.child = e === null ? Lm(t, null, n, r) : Or(t, e.child, n, r);
}
function fp(e, t, n, r, o) {
  n = n.render;
  var i = t.ref;
  return (
    Pr(t, o),
    (r = nf(e, t, n, r, i, o)),
    (n = rf()),
    e !== null && !Ue
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        Kt(e, t, o))
      : (le && n && Kc(t), (t.flags |= 1), De(e, t, r, o), t.child)
  );
}
function dp(e, t, n, r, o) {
  if (e === null) {
    var i = n.type;
    return typeof i == 'function' &&
      !hf(i) &&
      i.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = i), o1(e, t, i, r, o))
      : ((e = rs(n.type, null, r, t, t.mode, o)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((i = e.child), !(e.lanes & o))) {
    var s = i.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : Fo), n(s, r) && e.ref === t.ref)
    )
      return Kt(e, t, o);
  }
  return (
    (t.flags |= 1),
    (e = gn(i, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function o1(e, t, n, r, o) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (Fo(i, r) && e.ref === t.ref)
      if (((Ue = !1), (t.pendingProps = r = i), (e.lanes & o) !== 0))
        e.flags & 131072 && (Ue = !0);
      else return (t.lanes = e.lanes), Kt(e, t, o);
  }
  return bu(e, t, n, r, o);
}
function i1(e, t, n) {
  var r = t.pendingProps,
    o = r.children,
    i = e !== null ? e.memoizedState : null;
  if (r.mode === 'hidden')
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        oe(yr, Ye),
        (Ye |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = i !== null ? i.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null
          }),
          (t.updateQueue = null),
          oe(yr, Ye),
          (Ye |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = i !== null ? i.baseLanes : n),
        oe(yr, Ye),
        (Ye |= r);
    }
  else
    i !== null ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n),
      oe(yr, Ye),
      (Ye |= r);
  return De(e, t, o, n), t.child;
}
function s1(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function bu(e, t, n, r, o) {
  var i = We(n) ? Bn : Me.current;
  return (
    (i = Rr(t, i)),
    Pr(t, o),
    (n = nf(e, t, n, r, i, o)),
    (r = rf()),
    e !== null && !Ue
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        Kt(e, t, o))
      : (le && r && Kc(t), (t.flags |= 1), De(e, t, n, o), t.child)
  );
}
function pp(e, t, n, r, o) {
  if (We(n)) {
    var i = !0;
    ws(t);
  } else i = !1;
  if ((Pr(t, o), t.stateNode === null))
    es(e, t), Am(t, n, r), xu(t, n, r, o), (r = !0);
  else if (e === null) {
    var s = t.stateNode,
      a = t.memoizedProps;
    s.props = a;
    var l = s.context,
      u = n.contextType;
    typeof u == 'object' && u !== null
      ? (u = lt(u))
      : ((u = We(n) ? Bn : Me.current), (u = Rr(t, u)));
    var c = n.getDerivedStateFromProps,
      d =
        typeof c == 'function' ||
        typeof s.getSnapshotBeforeUpdate == 'function';
    d ||
      (typeof s.UNSAFE_componentWillReceiveProps != 'function' &&
        typeof s.componentWillReceiveProps != 'function') ||
      ((a !== r || l !== u) && op(t, s, r, u)),
      (Zt = !1);
    var h = t.memoizedState;
    (s.state = h),
      Es(t, r, s, o),
      (l = t.memoizedState),
      a !== r || h !== l || Ke.current || Zt
        ? (typeof c == 'function' && (wu(t, n, c, r), (l = t.memoizedState)),
          (a = Zt || rp(t, n, a, r, h, l, u))
            ? (d ||
                (typeof s.UNSAFE_componentWillMount != 'function' &&
                  typeof s.componentWillMount != 'function') ||
                (typeof s.componentWillMount == 'function' &&
                  s.componentWillMount(),
                typeof s.UNSAFE_componentWillMount == 'function' &&
                  s.UNSAFE_componentWillMount()),
              typeof s.componentDidMount == 'function' && (t.flags |= 4194308))
            : (typeof s.componentDidMount == 'function' && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = l)),
          (s.props = r),
          (s.state = l),
          (s.context = u),
          (r = a))
        : (typeof s.componentDidMount == 'function' && (t.flags |= 4194308),
          (r = !1));
  } else {
    (s = t.stateNode),
      Mm(e, t),
      (a = t.memoizedProps),
      (u = t.type === t.elementType ? a : ht(t.type, a)),
      (s.props = u),
      (d = t.pendingProps),
      (h = s.context),
      (l = n.contextType),
      typeof l == 'object' && l !== null
        ? (l = lt(l))
        : ((l = We(n) ? Bn : Me.current), (l = Rr(t, l)));
    var v = n.getDerivedStateFromProps;
    (c =
      typeof v == 'function' ||
      typeof s.getSnapshotBeforeUpdate == 'function') ||
      (typeof s.UNSAFE_componentWillReceiveProps != 'function' &&
        typeof s.componentWillReceiveProps != 'function') ||
      ((a !== d || h !== l) && op(t, s, r, l)),
      (Zt = !1),
      (h = t.memoizedState),
      (s.state = h),
      Es(t, r, s, o);
    var w = t.memoizedState;
    a !== d || h !== w || Ke.current || Zt
      ? (typeof v == 'function' && (wu(t, n, v, r), (w = t.memoizedState)),
        (u = Zt || rp(t, n, u, r, h, w, l) || !1)
          ? (c ||
              (typeof s.UNSAFE_componentWillUpdate != 'function' &&
                typeof s.componentWillUpdate != 'function') ||
              (typeof s.componentWillUpdate == 'function' &&
                s.componentWillUpdate(r, w, l),
              typeof s.UNSAFE_componentWillUpdate == 'function' &&
                s.UNSAFE_componentWillUpdate(r, w, l)),
            typeof s.componentDidUpdate == 'function' && (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate == 'function' && (t.flags |= 1024))
          : (typeof s.componentDidUpdate != 'function' ||
              (a === e.memoizedProps && h === e.memoizedState) ||
              (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate != 'function' ||
              (a === e.memoizedProps && h === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = w)),
        (s.props = r),
        (s.state = w),
        (s.context = l),
        (r = u))
      : (typeof s.componentDidUpdate != 'function' ||
          (a === e.memoizedProps && h === e.memoizedState) ||
          (t.flags |= 4),
        typeof s.getSnapshotBeforeUpdate != 'function' ||
          (a === e.memoizedProps && h === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return Su(e, t, n, r, i, o);
}
function Su(e, t, n, r, o, i) {
  s1(e, t);
  var s = (t.flags & 128) !== 0;
  if (!r && !s) return o && Zd(t, n, !1), Kt(e, t, i);
  (r = t.stateNode), (w5.current = t);
  var a =
    s && typeof n.getDerivedStateFromError != 'function' ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && s
      ? ((t.child = Or(t, e.child, null, i)), (t.child = Or(t, null, a, i)))
      : De(e, t, a, i),
    (t.memoizedState = r.state),
    o && Zd(t, n, !0),
    t.child
  );
}
function a1(e) {
  var t = e.stateNode;
  t.pendingContext
    ? Xd(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Xd(e, t.context, !1),
    Zc(e, t.containerInfo);
}
function hp(e, t, n, r, o) {
  return Mr(), Hc(o), (t.flags |= 256), De(e, t, n, r), t.child;
}
var Eu = { dehydrated: null, treeContext: null, retryLane: 0 };
function ku(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function l1(e, t, n) {
  var r = t.pendingProps,
    o = ue.current,
    i = !1,
    s = (t.flags & 128) !== 0,
    a;
  if (
    ((a = s) ||
      (a = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0),
    a
      ? ((i = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (o |= 1),
    oe(ue, o & 1),
    e === null)
  )
    return (
      vu(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === '$!'
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((s = r.children),
          (e = r.fallback),
          i
            ? ((r = t.mode),
              (i = t.child),
              (s = { mode: 'hidden', children: s }),
              !(r & 1) && i !== null
                ? ((i.childLanes = 0), (i.pendingProps = s))
                : (i = ha(s, r, 0, null)),
              (e = zn(e, r, n, null)),
              (i.return = t),
              (e.return = t),
              (i.sibling = e),
              (t.child = i),
              (t.child.memoizedState = ku(n)),
              (t.memoizedState = Eu),
              e)
            : af(t, s))
    );
  if (((o = e.memoizedState), o !== null && ((a = o.dehydrated), a !== null)))
    return x5(e, t, s, r, a, o, n);
  if (i) {
    (i = r.fallback), (s = t.mode), (o = e.child), (a = o.sibling);
    var l = { mode: 'hidden', children: r.children };
    return (
      !(s & 1) && t.child !== o
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = l),
          (t.deletions = null))
        : ((r = gn(o, l)), (r.subtreeFlags = o.subtreeFlags & 14680064)),
      a !== null ? (i = gn(a, i)) : ((i = zn(i, s, n, null)), (i.flags |= 2)),
      (i.return = t),
      (r.return = t),
      (r.sibling = i),
      (t.child = r),
      (r = i),
      (i = t.child),
      (s = e.child.memoizedState),
      (s =
        s === null
          ? ku(n)
          : {
              baseLanes: s.baseLanes | n,
              cachePool: null,
              transitions: s.transitions
            }),
      (i.memoizedState = s),
      (i.childLanes = e.childLanes & ~n),
      (t.memoizedState = Eu),
      r
    );
  }
  return (
    (i = e.child),
    (e = i.sibling),
    (r = gn(i, { mode: 'visible', children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function af(e, t) {
  return (
    (t = ha({ mode: 'visible', children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function _i(e, t, n, r) {
  return (
    r !== null && Hc(r),
    Or(t, e.child, null, n),
    (e = af(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function x5(e, t, n, r, o, i, s) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = ll(Error(L(422)))), _i(e, t, s, r))
      : t.memoizedState !== null
        ? ((t.child = e.child), (t.flags |= 128), null)
        : ((i = r.fallback),
          (o = t.mode),
          (r = ha({ mode: 'visible', children: r.children }, o, 0, null)),
          (i = zn(i, o, s, null)),
          (i.flags |= 2),
          (r.return = t),
          (i.return = t),
          (r.sibling = i),
          (t.child = r),
          t.mode & 1 && Or(t, e.child, null, s),
          (t.child.memoizedState = ku(s)),
          (t.memoizedState = Eu),
          i);
  if (!(t.mode & 1)) return _i(e, t, s, null);
  if (o.data === '$!') {
    if (((r = o.nextSibling && o.nextSibling.dataset), r)) var a = r.dgst;
    return (r = a), (i = Error(L(419))), (r = ll(i, r, void 0)), _i(e, t, s, r);
  }
  if (((a = (s & e.childLanes) !== 0), Ue || a)) {
    if (((r = Se), r !== null)) {
      switch (s & -s) {
        case 4:
          o = 2;
          break;
        case 16:
          o = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          o = 32;
          break;
        case 536870912:
          o = 268435456;
          break;
        default:
          o = 0;
      }
      (o = o & (r.suspendedLanes | s) ? 0 : o),
        o !== 0 &&
          o !== i.retryLane &&
          ((i.retryLane = o), Ut(e, o), wt(r, e, o, -1));
    }
    return pf(), (r = ll(Error(L(421)))), _i(e, t, s, r);
  }
  return o.data === '$?'
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = A5.bind(null, e)),
      (o._reactRetry = t),
      null)
    : ((e = i.treeContext),
      (Xe = dn(o.nextSibling)),
      (Ze = t),
      (le = !0),
      (vt = null),
      e !== null &&
        ((ot[it++] = Ft),
        (ot[it++] = Nt),
        (ot[it++] = Un),
        (Ft = e.id),
        (Nt = e.overflow),
        (Un = t)),
      (t = af(t, r.children)),
      (t.flags |= 4096),
      t);
}
function mp(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), yu(e.return, t, n);
}
function ul(e, t, n, r, o) {
  var i = e.memoizedState;
  i === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: o
      })
    : ((i.isBackwards = t),
      (i.rendering = null),
      (i.renderingStartTime = 0),
      (i.last = r),
      (i.tail = n),
      (i.tailMode = o));
}
function u1(e, t, n) {
  var r = t.pendingProps,
    o = r.revealOrder,
    i = r.tail;
  if ((De(e, t, r.children, n), (r = ue.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && mp(e, n, t);
        else if (e.tag === 19) mp(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((oe(ue, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (o) {
      case 'forwards':
        for (n = t.child, o = null; n !== null; )
          (e = n.alternate),
            e !== null && ks(e) === null && (o = n),
            (n = n.sibling);
        (n = o),
          n === null
            ? ((o = t.child), (t.child = null))
            : ((o = n.sibling), (n.sibling = null)),
          ul(t, !1, o, n, i);
        break;
      case 'backwards':
        for (n = null, o = t.child, t.child = null; o !== null; ) {
          if (((e = o.alternate), e !== null && ks(e) === null)) {
            t.child = o;
            break;
          }
          (e = o.sibling), (o.sibling = n), (n = o), (o = e);
        }
        ul(t, !0, n, null, i);
        break;
      case 'together':
        ul(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function es(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Kt(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (Wn |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(L(153));
  if (t.child !== null) {
    for (
      e = t.child, n = gn(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = gn(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function C5(e, t, n) {
  switch (t.tag) {
    case 3:
      a1(t), Mr();
      break;
    case 5:
      Fm(t);
      break;
    case 1:
      We(t.type) && ws(t);
      break;
    case 4:
      Zc(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        o = t.memoizedProps.value;
      oe(bs, r._currentValue), (r._currentValue = o);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (oe(ue, ue.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
            ? l1(e, t, n)
            : (oe(ue, ue.current & 1),
              (e = Kt(e, t, n)),
              e !== null ? e.sibling : null);
      oe(ue, ue.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return u1(e, t, n);
        t.flags |= 128;
      }
      if (
        ((o = t.memoizedState),
        o !== null &&
          ((o.rendering = null), (o.tail = null), (o.lastEffect = null)),
        oe(ue, ue.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), i1(e, t, n);
  }
  return Kt(e, t, n);
}
var c1, Pu, f1, d1;
c1 = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
Pu = function () {};
f1 = function (e, t, n, r) {
  var o = e.memoizedProps;
  if (o !== r) {
    (e = t.stateNode), Fn(Pt.current);
    var i = null;
    switch (n) {
      case 'input':
        (o = Ql(e, o)), (r = Ql(e, r)), (i = []);
        break;
      case 'select':
        (o = fe({}, o, { value: void 0 })),
          (r = fe({}, r, { value: void 0 })),
          (i = []);
        break;
      case 'textarea':
        (o = Xl(e, o)), (r = Xl(e, r)), (i = []);
        break;
      default:
        typeof o.onClick != 'function' &&
          typeof r.onClick == 'function' &&
          (e.onclick = vs);
    }
    Jl(n, r);
    var s;
    n = null;
    for (u in o)
      if (!r.hasOwnProperty(u) && o.hasOwnProperty(u) && o[u] != null)
        if (u === 'style') {
          var a = o[u];
          for (s in a) a.hasOwnProperty(s) && (n || (n = {}), (n[s] = ''));
        } else
          u !== 'dangerouslySetInnerHTML' &&
            u !== 'children' &&
            u !== 'suppressContentEditableWarning' &&
            u !== 'suppressHydrationWarning' &&
            u !== 'autoFocus' &&
            (To.hasOwnProperty(u)
              ? i || (i = [])
              : (i = i || []).push(u, null));
    for (u in r) {
      var l = r[u];
      if (
        ((a = o != null ? o[u] : void 0),
        r.hasOwnProperty(u) && l !== a && (l != null || a != null))
      )
        if (u === 'style')
          if (a) {
            for (s in a)
              !a.hasOwnProperty(s) ||
                (l && l.hasOwnProperty(s)) ||
                (n || (n = {}), (n[s] = ''));
            for (s in l)
              l.hasOwnProperty(s) &&
                a[s] !== l[s] &&
                (n || (n = {}), (n[s] = l[s]));
          } else n || (i || (i = []), i.push(u, n)), (n = l);
        else
          u === 'dangerouslySetInnerHTML'
            ? ((l = l ? l.__html : void 0),
              (a = a ? a.__html : void 0),
              l != null && a !== l && (i = i || []).push(u, l))
            : u === 'children'
              ? (typeof l != 'string' && typeof l != 'number') ||
                (i = i || []).push(u, '' + l)
              : u !== 'suppressContentEditableWarning' &&
                u !== 'suppressHydrationWarning' &&
                (To.hasOwnProperty(u)
                  ? (l != null && u === 'onScroll' && ie('scroll', e),
                    i || a === l || (i = []))
                  : (i = i || []).push(u, l));
    }
    n && (i = i || []).push('style', n);
    var u = i;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
d1 = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Jr(e, t) {
  if (!le)
    switch (e.tailMode) {
      case 'hidden':
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case 'collapsed':
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function Te(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var o = e.child; o !== null; )
      (n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags & 14680064),
        (r |= o.flags & 14680064),
        (o.return = e),
        (o = o.sibling);
  else
    for (o = e.child; o !== null; )
      (n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags),
        (r |= o.flags),
        (o.return = e),
        (o = o.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function b5(e, t, n) {
  var r = t.pendingProps;
  switch ((Wc(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return Te(t), null;
    case 1:
      return We(t.type) && ys(), Te(t), null;
    case 3:
      return (
        (r = t.stateNode),
        Ar(),
        ae(Ke),
        ae(Me),
        ef(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (Pi(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), vt !== null && (Du(vt), (vt = null)))),
        Pu(e, t),
        Te(t),
        null
      );
    case 5:
      Jc(t);
      var o = Fn(jo.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        f1(e, t, n, r, o),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(L(166));
          return Te(t), null;
        }
        if (((e = Fn(Pt.current)), Pi(t))) {
          (r = t.stateNode), (n = t.type);
          var i = t.memoizedProps;
          switch (((r[Et] = t), (r[Vo] = i), (e = (t.mode & 1) !== 0), n)) {
            case 'dialog':
              ie('cancel', r), ie('close', r);
              break;
            case 'iframe':
            case 'object':
            case 'embed':
              ie('load', r);
              break;
            case 'video':
            case 'audio':
              for (o = 0; o < ao.length; o++) ie(ao[o], r);
              break;
            case 'source':
              ie('error', r);
              break;
            case 'img':
            case 'image':
            case 'link':
              ie('error', r), ie('load', r);
              break;
            case 'details':
              ie('toggle', r);
              break;
            case 'input':
              Ed(r, i), ie('invalid', r);
              break;
            case 'select':
              (r._wrapperState = { wasMultiple: !!i.multiple }),
                ie('invalid', r);
              break;
            case 'textarea':
              Pd(r, i), ie('invalid', r);
          }
          Jl(n, i), (o = null);
          for (var s in i)
            if (i.hasOwnProperty(s)) {
              var a = i[s];
              s === 'children'
                ? typeof a == 'string'
                  ? r.textContent !== a &&
                    (i.suppressHydrationWarning !== !0 &&
                      ki(r.textContent, a, e),
                    (o = ['children', a]))
                  : typeof a == 'number' &&
                    r.textContent !== '' + a &&
                    (i.suppressHydrationWarning !== !0 &&
                      ki(r.textContent, a, e),
                    (o = ['children', '' + a]))
                : To.hasOwnProperty(s) &&
                  a != null &&
                  s === 'onScroll' &&
                  ie('scroll', r);
            }
          switch (n) {
            case 'input':
              vi(r), kd(r, i, !0);
              break;
            case 'textarea':
              vi(r), $d(r);
              break;
            case 'select':
            case 'option':
              break;
            default:
              typeof i.onClick == 'function' && (r.onclick = vs);
          }
          (r = o), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (s = o.nodeType === 9 ? o : o.ownerDocument),
            e === 'http://www.w3.org/1999/xhtml' && (e = V0(n)),
            e === 'http://www.w3.org/1999/xhtml'
              ? n === 'script'
                ? ((e = s.createElement('div')),
                  (e.innerHTML = '<script></script>'),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == 'string'
                  ? (e = s.createElement(n, { is: r.is }))
                  : ((e = s.createElement(n)),
                    n === 'select' &&
                      ((s = e),
                      r.multiple
                        ? (s.multiple = !0)
                        : r.size && (s.size = r.size)))
              : (e = s.createElementNS(e, n)),
            (e[Et] = t),
            (e[Vo] = r),
            c1(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((s = eu(n, r)), n)) {
              case 'dialog':
                ie('cancel', e), ie('close', e), (o = r);
                break;
              case 'iframe':
              case 'object':
              case 'embed':
                ie('load', e), (o = r);
                break;
              case 'video':
              case 'audio':
                for (o = 0; o < ao.length; o++) ie(ao[o], e);
                o = r;
                break;
              case 'source':
                ie('error', e), (o = r);
                break;
              case 'img':
              case 'image':
              case 'link':
                ie('error', e), ie('load', e), (o = r);
                break;
              case 'details':
                ie('toggle', e), (o = r);
                break;
              case 'input':
                Ed(e, r), (o = Ql(e, r)), ie('invalid', e);
                break;
              case 'option':
                o = r;
                break;
              case 'select':
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (o = fe({}, r, { value: void 0 })),
                  ie('invalid', e);
                break;
              case 'textarea':
                Pd(e, r), (o = Xl(e, r)), ie('invalid', e);
                break;
              default:
                o = r;
            }
            Jl(n, o), (a = o);
            for (i in a)
              if (a.hasOwnProperty(i)) {
                var l = a[i];
                i === 'style'
                  ? B0(e, l)
                  : i === 'dangerouslySetInnerHTML'
                    ? ((l = l ? l.__html : void 0), l != null && z0(e, l))
                    : i === 'children'
                      ? typeof l == 'string'
                        ? (n !== 'textarea' || l !== '') && Ro(e, l)
                        : typeof l == 'number' && Ro(e, '' + l)
                      : i !== 'suppressContentEditableWarning' &&
                        i !== 'suppressHydrationWarning' &&
                        i !== 'autoFocus' &&
                        (To.hasOwnProperty(i)
                          ? l != null && i === 'onScroll' && ie('scroll', e)
                          : l != null && Rc(e, i, l, s));
              }
            switch (n) {
              case 'input':
                vi(e), kd(e, r, !1);
                break;
              case 'textarea':
                vi(e), $d(e);
                break;
              case 'option':
                r.value != null && e.setAttribute('value', '' + yn(r.value));
                break;
              case 'select':
                (e.multiple = !!r.multiple),
                  (i = r.value),
                  i != null
                    ? br(e, !!r.multiple, i, !1)
                    : r.defaultValue != null &&
                      br(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof o.onClick == 'function' && (e.onclick = vs);
            }
            switch (n) {
              case 'button':
              case 'input':
              case 'select':
              case 'textarea':
                r = !!r.autoFocus;
                break e;
              case 'img':
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return Te(t), null;
    case 6:
      if (e && t.stateNode != null) d1(e, t, e.memoizedProps, r);
      else {
        if (typeof r != 'string' && t.stateNode === null) throw Error(L(166));
        if (((n = Fn(jo.current)), Fn(Pt.current), Pi(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[Et] = t),
            (i = r.nodeValue !== n) && ((e = Ze), e !== null))
          )
            switch (e.tag) {
              case 3:
                ki(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  ki(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          i && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[Et] = t),
            (t.stateNode = r);
      }
      return Te(t), null;
    case 13:
      if (
        (ae(ue),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (le && Xe !== null && t.mode & 1 && !(t.flags & 128))
          Tm(), Mr(), (t.flags |= 98560), (i = !1);
        else if (((i = Pi(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!i) throw Error(L(318));
            if (
              ((i = t.memoizedState),
              (i = i !== null ? i.dehydrated : null),
              !i)
            )
              throw Error(L(317));
            i[Et] = t;
          } else
            Mr(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          Te(t), (i = !1);
        } else vt !== null && (Du(vt), (vt = null)), (i = !0);
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || ue.current & 1 ? xe === 0 && (xe = 3) : pf())),
          t.updateQueue !== null && (t.flags |= 4),
          Te(t),
          null);
    case 4:
      return (
        Ar(), Pu(e, t), e === null && No(t.stateNode.containerInfo), Te(t), null
      );
    case 10:
      return qc(t.type._context), Te(t), null;
    case 17:
      return We(t.type) && ys(), Te(t), null;
    case 19:
      if ((ae(ue), (i = t.memoizedState), i === null)) return Te(t), null;
      if (((r = (t.flags & 128) !== 0), (s = i.rendering), s === null))
        if (r) Jr(i, !1);
        else {
          if (xe !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((s = ks(e)), s !== null)) {
                for (
                  t.flags |= 128,
                    Jr(i, !1),
                    r = s.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (i = n),
                    (e = r),
                    (i.flags &= 14680066),
                    (s = i.alternate),
                    s === null
                      ? ((i.childLanes = 0),
                        (i.lanes = e),
                        (i.child = null),
                        (i.subtreeFlags = 0),
                        (i.memoizedProps = null),
                        (i.memoizedState = null),
                        (i.updateQueue = null),
                        (i.dependencies = null),
                        (i.stateNode = null))
                      : ((i.childLanes = s.childLanes),
                        (i.lanes = s.lanes),
                        (i.child = s.child),
                        (i.subtreeFlags = 0),
                        (i.deletions = null),
                        (i.memoizedProps = s.memoizedProps),
                        (i.memoizedState = s.memoizedState),
                        (i.updateQueue = s.updateQueue),
                        (i.type = s.type),
                        (e = s.dependencies),
                        (i.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext
                              })),
                    (n = n.sibling);
                return oe(ue, (ue.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          i.tail !== null &&
            me() > Lr &&
            ((t.flags |= 128), (r = !0), Jr(i, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = ks(s)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              Jr(i, !0),
              i.tail === null && i.tailMode === 'hidden' && !s.alternate && !le)
            )
              return Te(t), null;
          } else
            2 * me() - i.renderingStartTime > Lr &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), Jr(i, !1), (t.lanes = 4194304));
        i.isBackwards
          ? ((s.sibling = t.child), (t.child = s))
          : ((n = i.last),
            n !== null ? (n.sibling = s) : (t.child = s),
            (i.last = s));
      }
      return i.tail !== null
        ? ((t = i.tail),
          (i.rendering = t),
          (i.tail = t.sibling),
          (i.renderingStartTime = me()),
          (t.sibling = null),
          (n = ue.current),
          oe(ue, r ? (n & 1) | 2 : n & 1),
          t)
        : (Te(t), null);
    case 22:
    case 23:
      return (
        df(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? Ye & 1073741824 && (Te(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : Te(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(L(156, t.tag));
}
function S5(e, t) {
  switch ((Wc(t), t.tag)) {
    case 1:
      return (
        We(t.type) && ys(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        Ar(),
        ae(Ke),
        ae(Me),
        ef(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return Jc(t), null;
    case 13:
      if (
        (ae(ue), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(L(340));
        Mr();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return ae(ue), null;
    case 4:
      return Ar(), null;
    case 10:
      return qc(t.type._context), null;
    case 22:
    case 23:
      return df(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Ti = !1,
  Re = !1,
  E5 = typeof WeakSet == 'function' ? WeakSet : Set,
  B = null;
function vr(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == 'function')
      try {
        n(null);
      } catch (r) {
        pe(e, t, r);
      }
    else n.current = null;
}
function $u(e, t, n) {
  try {
    n();
  } catch (r) {
    pe(e, t, r);
  }
}
var gp = !1;
function k5(e, t) {
  if (((cu = hs), (e = gm()), Uc(e))) {
    if ('selectionStart' in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var o = r.anchorOffset,
            i = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, i.nodeType;
          } catch {
            n = null;
            break e;
          }
          var s = 0,
            a = -1,
            l = -1,
            u = 0,
            c = 0,
            d = e,
            h = null;
          t: for (;;) {
            for (
              var v;
              d !== n || (o !== 0 && d.nodeType !== 3) || (a = s + o),
                d !== i || (r !== 0 && d.nodeType !== 3) || (l = s + r),
                d.nodeType === 3 && (s += d.nodeValue.length),
                (v = d.firstChild) !== null;

            )
              (h = d), (d = v);
            for (;;) {
              if (d === e) break t;
              if (
                (h === n && ++u === o && (a = s),
                h === i && ++c === r && (l = s),
                (v = d.nextSibling) !== null)
              )
                break;
              (d = h), (h = d.parentNode);
            }
            d = v;
          }
          n = a === -1 || l === -1 ? null : { start: a, end: l };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (fu = { focusedElem: e, selectionRange: n }, hs = !1, B = t; B !== null; )
    if (((t = B), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (B = e);
    else
      for (; B !== null; ) {
        t = B;
        try {
          var w = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (w !== null) {
                  var x = w.memoizedProps,
                    b = w.memoizedState,
                    p = t.stateNode,
                    m = p.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? x : ht(t.type, x),
                      b
                    );
                  p.__reactInternalSnapshotBeforeUpdate = m;
                }
                break;
              case 3:
                var f = t.stateNode.containerInfo;
                f.nodeType === 1
                  ? (f.textContent = '')
                  : f.nodeType === 9 &&
                    f.documentElement &&
                    f.removeChild(f.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(L(163));
            }
        } catch (y) {
          pe(t, t.return, y);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (B = e);
          break;
        }
        B = t.return;
      }
  return (w = gp), (gp = !1), w;
}
function vo(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var o = (r = r.next);
    do {
      if ((o.tag & e) === e) {
        var i = o.destroy;
        (o.destroy = void 0), i !== void 0 && $u(t, n, i);
      }
      o = o.next;
    } while (o !== r);
  }
}
function da(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function _u(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == 'function' ? t(e) : (t.current = e);
  }
}
function p1(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), p1(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[Et], delete t[Vo], delete t[hu], delete t[a5], delete t[l5])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function h1(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function vp(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || h1(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Tu(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = vs));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Tu(e, t, n), e = e.sibling; e !== null; ) Tu(e, t, n), (e = e.sibling);
}
function Ru(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Ru(e, t, n), e = e.sibling; e !== null; ) Ru(e, t, n), (e = e.sibling);
}
var Ee = null,
  gt = !1;
function qt(e, t, n) {
  for (n = n.child; n !== null; ) m1(e, t, n), (n = n.sibling);
}
function m1(e, t, n) {
  if (kt && typeof kt.onCommitFiberUnmount == 'function')
    try {
      kt.onCommitFiberUnmount(oa, n);
    } catch {}
  switch (n.tag) {
    case 5:
      Re || vr(n, t);
    case 6:
      var r = Ee,
        o = gt;
      (Ee = null),
        qt(e, t, n),
        (Ee = r),
        (gt = o),
        Ee !== null &&
          (gt
            ? ((e = Ee),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : Ee.removeChild(n.stateNode));
      break;
    case 18:
      Ee !== null &&
        (gt
          ? ((e = Ee),
            (n = n.stateNode),
            e.nodeType === 8
              ? nl(e.parentNode, n)
              : e.nodeType === 1 && nl(e, n),
            Do(e))
          : nl(Ee, n.stateNode));
      break;
    case 4:
      (r = Ee),
        (o = gt),
        (Ee = n.stateNode.containerInfo),
        (gt = !0),
        qt(e, t, n),
        (Ee = r),
        (gt = o);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !Re &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        o = r = r.next;
        do {
          var i = o,
            s = i.destroy;
          (i = i.tag),
            s !== void 0 && (i & 2 || i & 4) && $u(n, t, s),
            (o = o.next);
        } while (o !== r);
      }
      qt(e, t, n);
      break;
    case 1:
      if (
        !Re &&
        (vr(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == 'function')
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (a) {
          pe(n, t, a);
        }
      qt(e, t, n);
      break;
    case 21:
      qt(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((Re = (r = Re) || n.memoizedState !== null), qt(e, t, n), (Re = r))
        : qt(e, t, n);
      break;
    default:
      qt(e, t, n);
  }
}
function yp(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new E5()),
      t.forEach(function (r) {
        var o = D5.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(o, o));
      });
  }
}
function ft(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var o = n[r];
      try {
        var i = e,
          s = t,
          a = s;
        e: for (; a !== null; ) {
          switch (a.tag) {
            case 5:
              (Ee = a.stateNode), (gt = !1);
              break e;
            case 3:
              (Ee = a.stateNode.containerInfo), (gt = !0);
              break e;
            case 4:
              (Ee = a.stateNode.containerInfo), (gt = !0);
              break e;
          }
          a = a.return;
        }
        if (Ee === null) throw Error(L(160));
        m1(i, s, o), (Ee = null), (gt = !1);
        var l = o.alternate;
        l !== null && (l.return = null), (o.return = null);
      } catch (u) {
        pe(o, t, u);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) g1(t, e), (t = t.sibling);
}
function g1(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((ft(t, e), Ct(e), r & 4)) {
        try {
          vo(3, e, e.return), da(3, e);
        } catch (x) {
          pe(e, e.return, x);
        }
        try {
          vo(5, e, e.return);
        } catch (x) {
          pe(e, e.return, x);
        }
      }
      break;
    case 1:
      ft(t, e), Ct(e), r & 512 && n !== null && vr(n, n.return);
      break;
    case 5:
      if (
        (ft(t, e),
        Ct(e),
        r & 512 && n !== null && vr(n, n.return),
        e.flags & 32)
      ) {
        var o = e.stateNode;
        try {
          Ro(o, '');
        } catch (x) {
          pe(e, e.return, x);
        }
      }
      if (r & 4 && ((o = e.stateNode), o != null)) {
        var i = e.memoizedProps,
          s = n !== null ? n.memoizedProps : i,
          a = e.type,
          l = e.updateQueue;
        if (((e.updateQueue = null), l !== null))
          try {
            a === 'input' && i.type === 'radio' && i.name != null && N0(o, i),
              eu(a, s);
            var u = eu(a, i);
            for (s = 0; s < l.length; s += 2) {
              var c = l[s],
                d = l[s + 1];
              c === 'style'
                ? B0(o, d)
                : c === 'dangerouslySetInnerHTML'
                  ? z0(o, d)
                  : c === 'children'
                    ? Ro(o, d)
                    : Rc(o, c, d, u);
            }
            switch (a) {
              case 'input':
                ql(o, i);
                break;
              case 'textarea':
                I0(o, i);
                break;
              case 'select':
                var h = o._wrapperState.wasMultiple;
                o._wrapperState.wasMultiple = !!i.multiple;
                var v = i.value;
                v != null
                  ? br(o, !!i.multiple, v, !1)
                  : h !== !!i.multiple &&
                    (i.defaultValue != null
                      ? br(o, !!i.multiple, i.defaultValue, !0)
                      : br(o, !!i.multiple, i.multiple ? [] : '', !1));
            }
            o[Vo] = i;
          } catch (x) {
            pe(e, e.return, x);
          }
      }
      break;
    case 6:
      if ((ft(t, e), Ct(e), r & 4)) {
        if (e.stateNode === null) throw Error(L(162));
        (o = e.stateNode), (i = e.memoizedProps);
        try {
          o.nodeValue = i;
        } catch (x) {
          pe(e, e.return, x);
        }
      }
      break;
    case 3:
      if (
        (ft(t, e), Ct(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Do(t.containerInfo);
        } catch (x) {
          pe(e, e.return, x);
        }
      break;
    case 4:
      ft(t, e), Ct(e);
      break;
    case 13:
      ft(t, e),
        Ct(e),
        (o = e.child),
        o.flags & 8192 &&
          ((i = o.memoizedState !== null),
          (o.stateNode.isHidden = i),
          !i ||
            (o.alternate !== null && o.alternate.memoizedState !== null) ||
            (cf = me())),
        r & 4 && yp(e);
      break;
    case 22:
      if (
        ((c = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((Re = (u = Re) || c), ft(t, e), (Re = u)) : ft(t, e),
        Ct(e),
        r & 8192)
      ) {
        if (
          ((u = e.memoizedState !== null),
          (e.stateNode.isHidden = u) && !c && e.mode & 1)
        )
          for (B = e, c = e.child; c !== null; ) {
            for (d = B = c; B !== null; ) {
              switch (((h = B), (v = h.child), h.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  vo(4, h, h.return);
                  break;
                case 1:
                  vr(h, h.return);
                  var w = h.stateNode;
                  if (typeof w.componentWillUnmount == 'function') {
                    (r = h), (n = h.return);
                    try {
                      (t = r),
                        (w.props = t.memoizedProps),
                        (w.state = t.memoizedState),
                        w.componentWillUnmount();
                    } catch (x) {
                      pe(r, n, x);
                    }
                  }
                  break;
                case 5:
                  vr(h, h.return);
                  break;
                case 22:
                  if (h.memoizedState !== null) {
                    xp(d);
                    continue;
                  }
              }
              v !== null ? ((v.return = h), (B = v)) : xp(d);
            }
            c = c.sibling;
          }
        e: for (c = null, d = e; ; ) {
          if (d.tag === 5) {
            if (c === null) {
              c = d;
              try {
                (o = d.stateNode),
                  u
                    ? ((i = o.style),
                      typeof i.setProperty == 'function'
                        ? i.setProperty('display', 'none', 'important')
                        : (i.display = 'none'))
                    : ((a = d.stateNode),
                      (l = d.memoizedProps.style),
                      (s =
                        l != null && l.hasOwnProperty('display')
                          ? l.display
                          : null),
                      (a.style.display = j0('display', s)));
              } catch (x) {
                pe(e, e.return, x);
              }
            }
          } else if (d.tag === 6) {
            if (c === null)
              try {
                d.stateNode.nodeValue = u ? '' : d.memoizedProps;
              } catch (x) {
                pe(e, e.return, x);
              }
          } else if (
            ((d.tag !== 22 && d.tag !== 23) ||
              d.memoizedState === null ||
              d === e) &&
            d.child !== null
          ) {
            (d.child.return = d), (d = d.child);
            continue;
          }
          if (d === e) break e;
          for (; d.sibling === null; ) {
            if (d.return === null || d.return === e) break e;
            c === d && (c = null), (d = d.return);
          }
          c === d && (c = null), (d.sibling.return = d.return), (d = d.sibling);
        }
      }
      break;
    case 19:
      ft(t, e), Ct(e), r & 4 && yp(e);
      break;
    case 21:
      break;
    default:
      ft(t, e), Ct(e);
  }
}
function Ct(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (h1(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(L(160));
      }
      switch (r.tag) {
        case 5:
          var o = r.stateNode;
          r.flags & 32 && (Ro(o, ''), (r.flags &= -33));
          var i = vp(e);
          Ru(e, i, o);
          break;
        case 3:
        case 4:
          var s = r.stateNode.containerInfo,
            a = vp(e);
          Tu(e, a, s);
          break;
        default:
          throw Error(L(161));
      }
    } catch (l) {
      pe(e, e.return, l);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function P5(e, t, n) {
  (B = e), v1(e);
}
function v1(e, t, n) {
  for (var r = (e.mode & 1) !== 0; B !== null; ) {
    var o = B,
      i = o.child;
    if (o.tag === 22 && r) {
      var s = o.memoizedState !== null || Ti;
      if (!s) {
        var a = o.alternate,
          l = (a !== null && a.memoizedState !== null) || Re;
        a = Ti;
        var u = Re;
        if (((Ti = s), (Re = l) && !u))
          for (B = o; B !== null; )
            (s = B),
              (l = s.child),
              s.tag === 22 && s.memoizedState !== null
                ? Cp(o)
                : l !== null
                  ? ((l.return = s), (B = l))
                  : Cp(o);
        for (; i !== null; ) (B = i), v1(i), (i = i.sibling);
        (B = o), (Ti = a), (Re = u);
      }
      wp(e);
    } else
      o.subtreeFlags & 8772 && i !== null ? ((i.return = o), (B = i)) : wp(e);
  }
}
function wp(e) {
  for (; B !== null; ) {
    var t = B;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Re || da(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !Re)
                if (n === null) r.componentDidMount();
                else {
                  var o =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : ht(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    o,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var i = t.updateQueue;
              i !== null && np(t, i, r);
              break;
            case 3:
              var s = t.updateQueue;
              if (s !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                np(t, s, n);
              }
              break;
            case 5:
              var a = t.stateNode;
              if (n === null && t.flags & 4) {
                n = a;
                var l = t.memoizedProps;
                switch (t.type) {
                  case 'button':
                  case 'input':
                  case 'select':
                  case 'textarea':
                    l.autoFocus && n.focus();
                    break;
                  case 'img':
                    l.src && (n.src = l.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var u = t.alternate;
                if (u !== null) {
                  var c = u.memoizedState;
                  if (c !== null) {
                    var d = c.dehydrated;
                    d !== null && Do(d);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(L(163));
          }
        Re || (t.flags & 512 && _u(t));
      } catch (h) {
        pe(t, t.return, h);
      }
    }
    if (t === e) {
      B = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (B = n);
      break;
    }
    B = t.return;
  }
}
function xp(e) {
  for (; B !== null; ) {
    var t = B;
    if (t === e) {
      B = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (B = n);
      break;
    }
    B = t.return;
  }
}
function Cp(e) {
  for (; B !== null; ) {
    var t = B;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            da(4, t);
          } catch (l) {
            pe(t, n, l);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == 'function') {
            var o = t.return;
            try {
              r.componentDidMount();
            } catch (l) {
              pe(t, o, l);
            }
          }
          var i = t.return;
          try {
            _u(t);
          } catch (l) {
            pe(t, i, l);
          }
          break;
        case 5:
          var s = t.return;
          try {
            _u(t);
          } catch (l) {
            pe(t, s, l);
          }
      }
    } catch (l) {
      pe(t, t.return, l);
    }
    if (t === e) {
      B = null;
      break;
    }
    var a = t.sibling;
    if (a !== null) {
      (a.return = t.return), (B = a);
      break;
    }
    B = t.return;
  }
}
var $5 = Math.ceil,
  _s = Gt.ReactCurrentDispatcher,
  lf = Gt.ReactCurrentOwner,
  at = Gt.ReactCurrentBatchConfig,
  X = 0,
  Se = null,
  ve = null,
  ke = 0,
  Ye = 0,
  yr = En(0),
  xe = 0,
  Wo = null,
  Wn = 0,
  pa = 0,
  uf = 0,
  yo = null,
  Be = null,
  cf = 0,
  Lr = 1 / 0,
  At = null,
  Ts = !1,
  Mu = null,
  hn = null,
  Ri = !1,
  on = null,
  Rs = 0,
  wo = 0,
  Ou = null,
  ts = -1,
  ns = 0;
function Ne() {
  return X & 6 ? me() : ts !== -1 ? ts : (ts = me());
}
function mn(e) {
  return e.mode & 1
    ? X & 2 && ke !== 0
      ? ke & -ke
      : c5.transition !== null
        ? (ns === 0 && (ns = em()), ns)
        : ((e = ee),
          e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : am(e.type))),
          e)
    : 1;
}
function wt(e, t, n, r) {
  if (50 < wo) throw ((wo = 0), (Ou = null), Error(L(185)));
  ri(e, n, r),
    (!(X & 2) || e !== Se) &&
      (e === Se && (!(X & 2) && (pa |= n), xe === 4 && nn(e, ke)),
      He(e, r),
      n === 1 && X === 0 && !(t.mode & 1) && ((Lr = me() + 500), ua && kn()));
}
function He(e, t) {
  var n = e.callbackNode;
  c2(e, t);
  var r = ps(e, e === Se ? ke : 0);
  if (r === 0)
    n !== null && Rd(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Rd(n), t === 1))
      e.tag === 0 ? u5(bp.bind(null, e)) : Pm(bp.bind(null, e)),
        i5(function () {
          !(X & 6) && kn();
        }),
        (n = null);
    else {
      switch (tm(r)) {
        case 1:
          n = Lc;
          break;
        case 4:
          n = Z0;
          break;
        case 16:
          n = ds;
          break;
        case 536870912:
          n = J0;
          break;
        default:
          n = ds;
      }
      n = k1(n, y1.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function y1(e, t) {
  if (((ts = -1), (ns = 0), X & 6)) throw Error(L(327));
  var n = e.callbackNode;
  if ($r() && e.callbackNode !== n) return null;
  var r = ps(e, e === Se ? ke : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Ms(e, r);
  else {
    t = r;
    var o = X;
    X |= 2;
    var i = x1();
    (Se !== e || ke !== t) && ((At = null), (Lr = me() + 500), Vn(e, t));
    do
      try {
        R5();
        break;
      } catch (a) {
        w1(e, a);
      }
    while (1);
    Qc(),
      (_s.current = i),
      (X = o),
      ve !== null ? (t = 0) : ((Se = null), (ke = 0), (t = xe));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((o = iu(e)), o !== 0 && ((r = o), (t = Au(e, o)))), t === 1)
    )
      throw ((n = Wo), Vn(e, 0), nn(e, r), He(e, me()), n);
    if (t === 6) nn(e, r);
    else {
      if (
        ((o = e.current.alternate),
        !(r & 30) &&
          !_5(o) &&
          ((t = Ms(e, r)),
          t === 2 && ((i = iu(e)), i !== 0 && ((r = i), (t = Au(e, i)))),
          t === 1))
      )
        throw ((n = Wo), Vn(e, 0), nn(e, r), He(e, me()), n);
      switch (((e.finishedWork = o), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(L(345));
        case 2:
          Rn(e, Be, At);
          break;
        case 3:
          if (
            (nn(e, r), (r & 130023424) === r && ((t = cf + 500 - me()), 10 < t))
          ) {
            if (ps(e, 0) !== 0) break;
            if (((o = e.suspendedLanes), (o & r) !== r)) {
              Ne(), (e.pingedLanes |= e.suspendedLanes & o);
              break;
            }
            e.timeoutHandle = pu(Rn.bind(null, e, Be, At), t);
            break;
          }
          Rn(e, Be, At);
          break;
        case 4:
          if ((nn(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, o = -1; 0 < r; ) {
            var s = 31 - yt(r);
            (i = 1 << s), (s = t[s]), s > o && (o = s), (r &= ~i);
          }
          if (
            ((r = o),
            (r = me() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                  ? 480
                  : 1080 > r
                    ? 1080
                    : 1920 > r
                      ? 1920
                      : 3e3 > r
                        ? 3e3
                        : 4320 > r
                          ? 4320
                          : 1960 * $5(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = pu(Rn.bind(null, e, Be, At), r);
            break;
          }
          Rn(e, Be, At);
          break;
        case 5:
          Rn(e, Be, At);
          break;
        default:
          throw Error(L(329));
      }
    }
  }
  return He(e, me()), e.callbackNode === n ? y1.bind(null, e) : null;
}
function Au(e, t) {
  var n = yo;
  return (
    e.current.memoizedState.isDehydrated && (Vn(e, t).flags |= 256),
    (e = Ms(e, t)),
    e !== 2 && ((t = Be), (Be = n), t !== null && Du(t)),
    e
  );
}
function Du(e) {
  Be === null ? (Be = e) : Be.push.apply(Be, e);
}
function _5(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var o = n[r],
            i = o.getSnapshot;
          o = o.value;
          try {
            if (!xt(i(), o)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function nn(e, t) {
  for (
    t &= ~uf,
      t &= ~pa,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - yt(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function bp(e) {
  if (X & 6) throw Error(L(327));
  $r();
  var t = ps(e, 0);
  if (!(t & 1)) return He(e, me()), null;
  var n = Ms(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = iu(e);
    r !== 0 && ((t = r), (n = Au(e, r)));
  }
  if (n === 1) throw ((n = Wo), Vn(e, 0), nn(e, t), He(e, me()), n);
  if (n === 6) throw Error(L(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    Rn(e, Be, At),
    He(e, me()),
    null
  );
}
function ff(e, t) {
  var n = X;
  X |= 1;
  try {
    return e(t);
  } finally {
    (X = n), X === 0 && ((Lr = me() + 500), ua && kn());
  }
}
function Hn(e) {
  on !== null && on.tag === 0 && !(X & 6) && $r();
  var t = X;
  X |= 1;
  var n = at.transition,
    r = ee;
  try {
    if (((at.transition = null), (ee = 1), e)) return e();
  } finally {
    (ee = r), (at.transition = n), (X = t), !(X & 6) && kn();
  }
}
function df() {
  (Ye = yr.current), ae(yr);
}
function Vn(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), o5(n)), ve !== null))
    for (n = ve.return; n !== null; ) {
      var r = n;
      switch ((Wc(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && ys();
          break;
        case 3:
          Ar(), ae(Ke), ae(Me), ef();
          break;
        case 5:
          Jc(r);
          break;
        case 4:
          Ar();
          break;
        case 13:
          ae(ue);
          break;
        case 19:
          ae(ue);
          break;
        case 10:
          qc(r.type._context);
          break;
        case 22:
        case 23:
          df();
      }
      n = n.return;
    }
  if (
    ((Se = e),
    (ve = e = gn(e.current, null)),
    (ke = Ye = t),
    (xe = 0),
    (Wo = null),
    (uf = pa = Wn = 0),
    (Be = yo = null),
    Ln !== null)
  ) {
    for (t = 0; t < Ln.length; t++)
      if (((n = Ln[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var o = r.next,
          i = n.pending;
        if (i !== null) {
          var s = i.next;
          (i.next = o), (r.next = s);
        }
        n.pending = r;
      }
    Ln = null;
  }
  return e;
}
function w1(e, t) {
  do {
    var n = ve;
    try {
      if ((Qc(), (Zi.current = $s), Ps)) {
        for (var r = ce.memoizedState; r !== null; ) {
          var o = r.queue;
          o !== null && (o.pending = null), (r = r.next);
        }
        Ps = !1;
      }
      if (
        ((Kn = 0),
        (be = we = ce = null),
        (go = !1),
        (Bo = 0),
        (lf.current = null),
        n === null || n.return === null)
      ) {
        (xe = 1), (Wo = t), (ve = null);
        break;
      }
      e: {
        var i = e,
          s = n.return,
          a = n,
          l = t;
        if (
          ((t = ke),
          (a.flags |= 32768),
          l !== null && typeof l == 'object' && typeof l.then == 'function')
        ) {
          var u = l,
            c = a,
            d = c.tag;
          if (!(c.mode & 1) && (d === 0 || d === 11 || d === 15)) {
            var h = c.alternate;
            h
              ? ((c.updateQueue = h.updateQueue),
                (c.memoizedState = h.memoizedState),
                (c.lanes = h.lanes))
              : ((c.updateQueue = null), (c.memoizedState = null));
          }
          var v = up(s);
          if (v !== null) {
            (v.flags &= -257),
              cp(v, s, a, i, t),
              v.mode & 1 && lp(i, u, t),
              (t = v),
              (l = u);
            var w = t.updateQueue;
            if (w === null) {
              var x = new Set();
              x.add(l), (t.updateQueue = x);
            } else w.add(l);
            break e;
          } else {
            if (!(t & 1)) {
              lp(i, u, t), pf();
              break e;
            }
            l = Error(L(426));
          }
        } else if (le && a.mode & 1) {
          var b = up(s);
          if (b !== null) {
            !(b.flags & 65536) && (b.flags |= 256),
              cp(b, s, a, i, t),
              Hc(Dr(l, a));
            break e;
          }
        }
        (i = l = Dr(l, a)),
          xe !== 4 && (xe = 2),
          yo === null ? (yo = [i]) : yo.push(i),
          (i = s);
        do {
          switch (i.tag) {
            case 3:
              (i.flags |= 65536), (t &= -t), (i.lanes |= t);
              var p = n1(i, l, t);
              tp(i, p);
              break e;
            case 1:
              a = l;
              var m = i.type,
                f = i.stateNode;
              if (
                !(i.flags & 128) &&
                (typeof m.getDerivedStateFromError == 'function' ||
                  (f !== null &&
                    typeof f.componentDidCatch == 'function' &&
                    (hn === null || !hn.has(f))))
              ) {
                (i.flags |= 65536), (t &= -t), (i.lanes |= t);
                var y = r1(i, a, t);
                tp(i, y);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      b1(n);
    } catch (C) {
      (t = C), ve === n && n !== null && (ve = n = n.return);
      continue;
    }
    break;
  } while (1);
}
function x1() {
  var e = _s.current;
  return (_s.current = $s), e === null ? $s : e;
}
function pf() {
  (xe === 0 || xe === 3 || xe === 2) && (xe = 4),
    Se === null || (!(Wn & 268435455) && !(pa & 268435455)) || nn(Se, ke);
}
function Ms(e, t) {
  var n = X;
  X |= 2;
  var r = x1();
  (Se !== e || ke !== t) && ((At = null), Vn(e, t));
  do
    try {
      T5();
      break;
    } catch (o) {
      w1(e, o);
    }
  while (1);
  if ((Qc(), (X = n), (_s.current = r), ve !== null)) throw Error(L(261));
  return (Se = null), (ke = 0), xe;
}
function T5() {
  for (; ve !== null; ) C1(ve);
}
function R5() {
  for (; ve !== null && !t2(); ) C1(ve);
}
function C1(e) {
  var t = E1(e.alternate, e, Ye);
  (e.memoizedProps = e.pendingProps),
    t === null ? b1(e) : (ve = t),
    (lf.current = null);
}
function b1(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = S5(n, t)), n !== null)) {
        (n.flags &= 32767), (ve = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (xe = 6), (ve = null);
        return;
      }
    } else if (((n = b5(n, t, Ye)), n !== null)) {
      ve = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      ve = t;
      return;
    }
    ve = t = e;
  } while (t !== null);
  xe === 0 && (xe = 5);
}
function Rn(e, t, n) {
  var r = ee,
    o = at.transition;
  try {
    (at.transition = null), (ee = 1), M5(e, t, n, r);
  } finally {
    (at.transition = o), (ee = r);
  }
  return null;
}
function M5(e, t, n, r) {
  do $r();
  while (on !== null);
  if (X & 6) throw Error(L(327));
  n = e.finishedWork;
  var o = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(L(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var i = n.lanes | n.childLanes;
  if (
    (f2(e, i),
    e === Se && ((ve = Se = null), (ke = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Ri ||
      ((Ri = !0),
      k1(ds, function () {
        return $r(), null;
      })),
    (i = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || i)
  ) {
    (i = at.transition), (at.transition = null);
    var s = ee;
    ee = 1;
    var a = X;
    (X |= 4),
      (lf.current = null),
      k5(e, n),
      g1(n, e),
      X2(fu),
      (hs = !!cu),
      (fu = cu = null),
      (e.current = n),
      P5(n),
      n2(),
      (X = a),
      (ee = s),
      (at.transition = i);
  } else e.current = n;
  if (
    (Ri && ((Ri = !1), (on = e), (Rs = o)),
    (i = e.pendingLanes),
    i === 0 && (hn = null),
    i2(n.stateNode),
    He(e, me()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (o = t[n]), r(o.value, { componentStack: o.stack, digest: o.digest });
  if (Ts) throw ((Ts = !1), (e = Mu), (Mu = null), e);
  return (
    Rs & 1 && e.tag !== 0 && $r(),
    (i = e.pendingLanes),
    i & 1 ? (e === Ou ? wo++ : ((wo = 0), (Ou = e))) : (wo = 0),
    kn(),
    null
  );
}
function $r() {
  if (on !== null) {
    var e = tm(Rs),
      t = at.transition,
      n = ee;
    try {
      if (((at.transition = null), (ee = 16 > e ? 16 : e), on === null))
        var r = !1;
      else {
        if (((e = on), (on = null), (Rs = 0), X & 6)) throw Error(L(331));
        var o = X;
        for (X |= 4, B = e.current; B !== null; ) {
          var i = B,
            s = i.child;
          if (B.flags & 16) {
            var a = i.deletions;
            if (a !== null) {
              for (var l = 0; l < a.length; l++) {
                var u = a[l];
                for (B = u; B !== null; ) {
                  var c = B;
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      vo(8, c, i);
                  }
                  var d = c.child;
                  if (d !== null) (d.return = c), (B = d);
                  else
                    for (; B !== null; ) {
                      c = B;
                      var h = c.sibling,
                        v = c.return;
                      if ((p1(c), c === u)) {
                        B = null;
                        break;
                      }
                      if (h !== null) {
                        (h.return = v), (B = h);
                        break;
                      }
                      B = v;
                    }
                }
              }
              var w = i.alternate;
              if (w !== null) {
                var x = w.child;
                if (x !== null) {
                  w.child = null;
                  do {
                    var b = x.sibling;
                    (x.sibling = null), (x = b);
                  } while (x !== null);
                }
              }
              B = i;
            }
          }
          if (i.subtreeFlags & 2064 && s !== null) (s.return = i), (B = s);
          else
            e: for (; B !== null; ) {
              if (((i = B), i.flags & 2048))
                switch (i.tag) {
                  case 0:
                  case 11:
                  case 15:
                    vo(9, i, i.return);
                }
              var p = i.sibling;
              if (p !== null) {
                (p.return = i.return), (B = p);
                break e;
              }
              B = i.return;
            }
        }
        var m = e.current;
        for (B = m; B !== null; ) {
          s = B;
          var f = s.child;
          if (s.subtreeFlags & 2064 && f !== null) (f.return = s), (B = f);
          else
            e: for (s = m; B !== null; ) {
              if (((a = B), a.flags & 2048))
                try {
                  switch (a.tag) {
                    case 0:
                    case 11:
                    case 15:
                      da(9, a);
                  }
                } catch (C) {
                  pe(a, a.return, C);
                }
              if (a === s) {
                B = null;
                break e;
              }
              var y = a.sibling;
              if (y !== null) {
                (y.return = a.return), (B = y);
                break e;
              }
              B = a.return;
            }
        }
        if (
          ((X = o), kn(), kt && typeof kt.onPostCommitFiberRoot == 'function')
        )
          try {
            kt.onPostCommitFiberRoot(oa, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (ee = n), (at.transition = t);
    }
  }
  return !1;
}
function Sp(e, t, n) {
  (t = Dr(n, t)),
    (t = n1(e, t, 1)),
    (e = pn(e, t, 1)),
    (t = Ne()),
    e !== null && (ri(e, 1, t), He(e, t));
}
function pe(e, t, n) {
  if (e.tag === 3) Sp(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Sp(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == 'function' ||
          (typeof r.componentDidCatch == 'function' &&
            (hn === null || !hn.has(r)))
        ) {
          (e = Dr(n, e)),
            (e = r1(t, e, 1)),
            (t = pn(t, e, 1)),
            (e = Ne()),
            t !== null && (ri(t, 1, e), He(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function O5(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = Ne()),
    (e.pingedLanes |= e.suspendedLanes & n),
    Se === e &&
      (ke & n) === n &&
      (xe === 4 || (xe === 3 && (ke & 130023424) === ke && 500 > me() - cf)
        ? Vn(e, 0)
        : (uf |= n)),
    He(e, t);
}
function S1(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = xi), (xi <<= 1), !(xi & 130023424) && (xi = 4194304))
      : (t = 1));
  var n = Ne();
  (e = Ut(e, t)), e !== null && (ri(e, t, n), He(e, n));
}
function A5(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), S1(e, n);
}
function D5(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        o = e.memoizedState;
      o !== null && (n = o.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(L(314));
  }
  r !== null && r.delete(t), S1(e, n);
}
var E1;
E1 = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Ke.current) Ue = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (Ue = !1), C5(e, t, n);
      Ue = !!(e.flags & 131072);
    }
  else (Ue = !1), le && t.flags & 1048576 && $m(t, Cs, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      es(e, t), (e = t.pendingProps);
      var o = Rr(t, Me.current);
      Pr(t, n), (o = nf(null, t, r, e, o, n));
      var i = rf();
      return (
        (t.flags |= 1),
        typeof o == 'object' &&
        o !== null &&
        typeof o.render == 'function' &&
        o.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            We(r) ? ((i = !0), ws(t)) : (i = !1),
            (t.memoizedState =
              o.state !== null && o.state !== void 0 ? o.state : null),
            Xc(t),
            (o.updater = ca),
            (t.stateNode = o),
            (o._reactInternals = t),
            xu(t, r, e, n),
            (t = Su(null, t, r, !0, i, n)))
          : ((t.tag = 0), le && i && Kc(t), De(null, t, o, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (es(e, t),
          (e = t.pendingProps),
          (o = r._init),
          (r = o(r._payload)),
          (t.type = r),
          (o = t.tag = F5(r)),
          (e = ht(r, e)),
          o)
        ) {
          case 0:
            t = bu(null, t, r, e, n);
            break e;
          case 1:
            t = pp(null, t, r, e, n);
            break e;
          case 11:
            t = fp(null, t, r, e, n);
            break e;
          case 14:
            t = dp(null, t, r, ht(r.type, e), n);
            break e;
        }
        throw Error(L(306, r, ''));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : ht(r, o)),
        bu(e, t, r, o, n)
      );
    case 1:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : ht(r, o)),
        pp(e, t, r, o, n)
      );
    case 3:
      e: {
        if ((a1(t), e === null)) throw Error(L(387));
        (r = t.pendingProps),
          (i = t.memoizedState),
          (o = i.element),
          Mm(e, t),
          Es(t, r, null, n);
        var s = t.memoizedState;
        if (((r = s.element), i.isDehydrated))
          if (
            ((i = {
              element: r,
              isDehydrated: !1,
              cache: s.cache,
              pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
              transitions: s.transitions
            }),
            (t.updateQueue.baseState = i),
            (t.memoizedState = i),
            t.flags & 256)
          ) {
            (o = Dr(Error(L(423)), t)), (t = hp(e, t, r, n, o));
            break e;
          } else if (r !== o) {
            (o = Dr(Error(L(424)), t)), (t = hp(e, t, r, n, o));
            break e;
          } else
            for (
              Xe = dn(t.stateNode.containerInfo.firstChild),
                Ze = t,
                le = !0,
                vt = null,
                n = Lm(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((Mr(), r === o)) {
            t = Kt(e, t, n);
            break e;
          }
          De(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        Fm(t),
        e === null && vu(t),
        (r = t.type),
        (o = t.pendingProps),
        (i = e !== null ? e.memoizedProps : null),
        (s = o.children),
        du(r, o) ? (s = null) : i !== null && du(r, i) && (t.flags |= 32),
        s1(e, t),
        De(e, t, s, n),
        t.child
      );
    case 6:
      return e === null && vu(t), null;
    case 13:
      return l1(e, t, n);
    case 4:
      return (
        Zc(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = Or(t, null, r, n)) : De(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : ht(r, o)),
        fp(e, t, r, o, n)
      );
    case 7:
      return De(e, t, t.pendingProps, n), t.child;
    case 8:
      return De(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return De(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (o = t.pendingProps),
          (i = t.memoizedProps),
          (s = o.value),
          oe(bs, r._currentValue),
          (r._currentValue = s),
          i !== null)
        )
          if (xt(i.value, s)) {
            if (i.children === o.children && !Ke.current) {
              t = Kt(e, t, n);
              break e;
            }
          } else
            for (i = t.child, i !== null && (i.return = t); i !== null; ) {
              var a = i.dependencies;
              if (a !== null) {
                s = i.child;
                for (var l = a.firstContext; l !== null; ) {
                  if (l.context === r) {
                    if (i.tag === 1) {
                      (l = It(-1, n & -n)), (l.tag = 2);
                      var u = i.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var c = u.pending;
                        c === null
                          ? (l.next = l)
                          : ((l.next = c.next), (c.next = l)),
                          (u.pending = l);
                      }
                    }
                    (i.lanes |= n),
                      (l = i.alternate),
                      l !== null && (l.lanes |= n),
                      yu(i.return, n, t),
                      (a.lanes |= n);
                    break;
                  }
                  l = l.next;
                }
              } else if (i.tag === 10) s = i.type === t.type ? null : i.child;
              else if (i.tag === 18) {
                if (((s = i.return), s === null)) throw Error(L(341));
                (s.lanes |= n),
                  (a = s.alternate),
                  a !== null && (a.lanes |= n),
                  yu(s, n, t),
                  (s = i.sibling);
              } else s = i.child;
              if (s !== null) s.return = i;
              else
                for (s = i; s !== null; ) {
                  if (s === t) {
                    s = null;
                    break;
                  }
                  if (((i = s.sibling), i !== null)) {
                    (i.return = s.return), (s = i);
                    break;
                  }
                  s = s.return;
                }
              i = s;
            }
        De(e, t, o.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (o = t.type),
        (r = t.pendingProps.children),
        Pr(t, n),
        (o = lt(o)),
        (r = r(o)),
        (t.flags |= 1),
        De(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (o = ht(r, t.pendingProps)),
        (o = ht(r.type, o)),
        dp(e, t, r, o, n)
      );
    case 15:
      return o1(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : ht(r, o)),
        es(e, t),
        (t.tag = 1),
        We(r) ? ((e = !0), ws(t)) : (e = !1),
        Pr(t, n),
        Am(t, r, o),
        xu(t, r, o, n),
        Su(null, t, r, !0, e, n)
      );
    case 19:
      return u1(e, t, n);
    case 22:
      return i1(e, t, n);
  }
  throw Error(L(156, t.tag));
};
function k1(e, t) {
  return X0(e, t);
}
function L5(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function st(e, t, n, r) {
  return new L5(e, t, n, r);
}
function hf(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function F5(e) {
  if (typeof e == 'function') return hf(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Oc)) return 11;
    if (e === Ac) return 14;
  }
  return 2;
}
function gn(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = st(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function rs(e, t, n, r, o, i) {
  var s = 2;
  if (((r = e), typeof e == 'function')) hf(e) && (s = 1);
  else if (typeof e == 'string') s = 5;
  else
    e: switch (e) {
      case lr:
        return zn(n.children, o, i, t);
      case Mc:
        (s = 8), (o |= 8);
        break;
      case Kl:
        return (
          (e = st(12, n, t, o | 2)), (e.elementType = Kl), (e.lanes = i), e
        );
      case Wl:
        return (e = st(13, n, t, o)), (e.elementType = Wl), (e.lanes = i), e;
      case Hl:
        return (e = st(19, n, t, o)), (e.elementType = Hl), (e.lanes = i), e;
      case D0:
        return ha(n, o, i, t);
      default:
        if (typeof e == 'object' && e !== null)
          switch (e.$$typeof) {
            case O0:
              s = 10;
              break e;
            case A0:
              s = 9;
              break e;
            case Oc:
              s = 11;
              break e;
            case Ac:
              s = 14;
              break e;
            case Xt:
              (s = 16), (r = null);
              break e;
          }
        throw Error(L(130, e == null ? e : typeof e, ''));
    }
  return (
    (t = st(s, n, t, o)), (t.elementType = e), (t.type = r), (t.lanes = i), t
  );
}
function zn(e, t, n, r) {
  return (e = st(7, e, r, t)), (e.lanes = n), e;
}
function ha(e, t, n, r) {
  return (
    (e = st(22, e, r, t)),
    (e.elementType = D0),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function cl(e, t, n) {
  return (e = st(6, e, null, t)), (e.lanes = n), e;
}
function fl(e, t, n) {
  return (
    (t = st(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation
    }),
    t
  );
}
function N5(e, t, n, r, o) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Wa(0)),
    (this.expirationTimes = Wa(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Wa(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = o),
    (this.mutableSourceEagerHydrationData = null);
}
function mf(e, t, n, r, o, i, s, a, l) {
  return (
    (e = new N5(e, t, n, a, l)),
    t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
    (i = st(3, null, null, t)),
    (e.current = i),
    (i.stateNode = e),
    (i.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null
    }),
    Xc(i),
    e
  );
}
function I5(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: ar,
    key: r == null ? null : '' + r,
    children: e,
    containerInfo: t,
    implementation: n
  };
}
function P1(e) {
  if (!e) return wn;
  e = e._reactInternals;
  e: {
    if (qn(e) !== e || e.tag !== 1) throw Error(L(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (We(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(L(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (We(n)) return km(e, n, t);
  }
  return t;
}
function $1(e, t, n, r, o, i, s, a, l) {
  return (
    (e = mf(n, r, !0, e, o, i, s, a, l)),
    (e.context = P1(null)),
    (n = e.current),
    (r = Ne()),
    (o = mn(n)),
    (i = It(r, o)),
    (i.callback = t ?? null),
    pn(n, i, o),
    (e.current.lanes = o),
    ri(e, o, r),
    He(e, r),
    e
  );
}
function ma(e, t, n, r) {
  var o = t.current,
    i = Ne(),
    s = mn(o);
  return (
    (n = P1(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = It(i, s)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = pn(o, t, s)),
    e !== null && (wt(e, o, s, i), Xi(e, o, s)),
    s
  );
}
function Os(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Ep(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function gf(e, t) {
  Ep(e, t), (e = e.alternate) && Ep(e, t);
}
function V5() {
  return null;
}
var _1 =
  typeof reportError == 'function'
    ? reportError
    : function (e) {
        console.error(e);
      };
function vf(e) {
  this._internalRoot = e;
}
ga.prototype.render = vf.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(L(409));
  ma(e, t, null, null);
};
ga.prototype.unmount = vf.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Hn(function () {
      ma(null, e, null, null);
    }),
      (t[Bt] = null);
  }
};
function ga(e) {
  this._internalRoot = e;
}
ga.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = om();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < tn.length && t !== 0 && t < tn[n].priority; n++);
    tn.splice(n, 0, e), n === 0 && sm(e);
  }
};
function yf(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function va(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== ' react-mount-point-unstable '))
  );
}
function kp() {}
function z5(e, t, n, r, o) {
  if (o) {
    if (typeof r == 'function') {
      var i = r;
      r = function () {
        var u = Os(s);
        i.call(u);
      };
    }
    var s = $1(t, r, e, 0, null, !1, !1, '', kp);
    return (
      (e._reactRootContainer = s),
      (e[Bt] = s.current),
      No(e.nodeType === 8 ? e.parentNode : e),
      Hn(),
      s
    );
  }
  for (; (o = e.lastChild); ) e.removeChild(o);
  if (typeof r == 'function') {
    var a = r;
    r = function () {
      var u = Os(l);
      a.call(u);
    };
  }
  var l = mf(e, 0, !1, null, null, !1, !1, '', kp);
  return (
    (e._reactRootContainer = l),
    (e[Bt] = l.current),
    No(e.nodeType === 8 ? e.parentNode : e),
    Hn(function () {
      ma(t, l, n, r);
    }),
    l
  );
}
function ya(e, t, n, r, o) {
  var i = n._reactRootContainer;
  if (i) {
    var s = i;
    if (typeof o == 'function') {
      var a = o;
      o = function () {
        var l = Os(s);
        a.call(l);
      };
    }
    ma(t, s, e, o);
  } else s = z5(n, t, e, o, r);
  return Os(s);
}
nm = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = so(t.pendingLanes);
        n !== 0 &&
          (Fc(t, n | 1), He(t, me()), !(X & 6) && ((Lr = me() + 500), kn()));
      }
      break;
    case 13:
      Hn(function () {
        var r = Ut(e, 1);
        if (r !== null) {
          var o = Ne();
          wt(r, e, 1, o);
        }
      }),
        gf(e, 1);
  }
};
Nc = function (e) {
  if (e.tag === 13) {
    var t = Ut(e, 134217728);
    if (t !== null) {
      var n = Ne();
      wt(t, e, 134217728, n);
    }
    gf(e, 134217728);
  }
};
rm = function (e) {
  if (e.tag === 13) {
    var t = mn(e),
      n = Ut(e, t);
    if (n !== null) {
      var r = Ne();
      wt(n, e, t, r);
    }
    gf(e, t);
  }
};
om = function () {
  return ee;
};
im = function (e, t) {
  var n = ee;
  try {
    return (ee = e), t();
  } finally {
    ee = n;
  }
};
nu = function (e, t, n) {
  switch (t) {
    case 'input':
      if ((ql(e, n), (t = n.name), n.type === 'radio' && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            'input[name=' + JSON.stringify('' + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var o = la(r);
            if (!o) throw Error(L(90));
            F0(r), ql(r, o);
          }
        }
      }
      break;
    case 'textarea':
      I0(e, n);
      break;
    case 'select':
      (t = n.value), t != null && br(e, !!n.multiple, t, !1);
  }
};
W0 = ff;
H0 = Hn;
var j5 = { usingClientEntryPoint: !1, Events: [ii, dr, la, U0, K0, ff] },
  eo = {
    findFiberByHostInstance: Dn,
    bundleType: 0,
    version: '18.2.0',
    rendererPackageName: 'react-dom'
  },
  B5 = {
    bundleType: eo.bundleType,
    version: eo.version,
    rendererPackageName: eo.rendererPackageName,
    rendererConfig: eo.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Gt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = q0(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: eo.findFiberByHostInstance || V5,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: '18.2.0-next-9e3b772b8-20220608'
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
  var Mi = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Mi.isDisabled && Mi.supportsFiber)
    try {
      (oa = Mi.inject(B5)), (kt = Mi);
    } catch {}
}
tt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = j5;
tt.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!yf(t)) throw Error(L(200));
  return I5(e, t, null, n);
};
tt.createRoot = function (e, t) {
  if (!yf(e)) throw Error(L(299));
  var n = !1,
    r = '',
    o = _1;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
    (t = mf(e, 1, !1, null, null, n, !1, r, o)),
    (e[Bt] = t.current),
    No(e.nodeType === 8 ? e.parentNode : e),
    new vf(t)
  );
};
tt.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == 'function'
      ? Error(L(188))
      : ((e = Object.keys(e).join(',')), Error(L(268, e)));
  return (e = q0(t)), (e = e === null ? null : e.stateNode), e;
};
tt.flushSync = function (e) {
  return Hn(e);
};
tt.hydrate = function (e, t, n) {
  if (!va(t)) throw Error(L(200));
  return ya(null, e, t, !0, n);
};
tt.hydrateRoot = function (e, t, n) {
  if (!yf(e)) throw Error(L(405));
  var r = (n != null && n.hydratedSources) || null,
    o = !1,
    i = '',
    s = _1;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (o = !0),
      n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (s = n.onRecoverableError)),
    (t = $1(t, null, e, 1, n ?? null, o, !1, i, s)),
    (e[Bt] = t.current),
    No(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (o = n._getVersion),
        (o = o(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, o])
          : t.mutableSourceEagerHydrationData.push(n, o);
  return new ga(t);
};
tt.render = function (e, t, n) {
  if (!va(t)) throw Error(L(200));
  return ya(null, e, t, !1, n);
};
tt.unmountComponentAtNode = function (e) {
  if (!va(e)) throw Error(L(40));
  return e._reactRootContainer
    ? (Hn(function () {
        ya(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[Bt] = null);
        });
      }),
      !0)
    : !1;
};
tt.unstable_batchedUpdates = ff;
tt.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!va(n)) throw Error(L(200));
  if (e == null || e._reactInternals === void 0) throw Error(L(38));
  return ya(e, t, n, !1, r);
};
tt.version = '18.2.0-next-9e3b772b8-20220608';
(function (e) {
  function t() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t);
      } catch (n) {
        console.error(n);
      }
  }
  t(), (e.exports = tt);
})(Vy);
const U5 = x0(jn);
var T1,
  Pp = jn;
(T1 = Pp.createRoot), Pp.hydrateRoot;
class wa {
  constructor() {
    (this.listeners = []), (this.subscribe = this.subscribe.bind(this));
  }
  subscribe(t) {
    return (
      this.listeners.push(t),
      this.onSubscribe(),
      () => {
        (this.listeners = this.listeners.filter((n) => n !== t)),
          this.onUnsubscribe();
      }
    );
  }
  hasListeners() {
    return this.listeners.length > 0;
  }
  onSubscribe() {}
  onUnsubscribe() {}
}
const wf = typeof window > 'u' || 'Deno' in window;
function mt() {}
function K5(e, t) {
  return typeof e == 'function' ? e(t) : e;
}
function W5(e) {
  return typeof e == 'number' && e >= 0 && e !== 1 / 0;
}
function H5(e, t) {
  return Math.max(e + (t || 0) - Date.now(), 0);
}
function Oi(e, t, n) {
  return xa(e)
    ? typeof t == 'function'
      ? { ...n, queryKey: e, queryFn: t }
      : { ...t, queryKey: e }
    : e;
}
function Jt(e, t, n) {
  return xa(e) ? [{ ...t, queryKey: e }, n] : [e || {}, t];
}
function $p(e, t) {
  const {
    type: n = 'all',
    exact: r,
    fetchStatus: o,
    predicate: i,
    queryKey: s,
    stale: a
  } = e;
  if (xa(s)) {
    if (r) {
      if (t.queryHash !== xf(s, t.options)) return !1;
    } else if (!As(t.queryKey, s)) return !1;
  }
  if (n !== 'all') {
    const l = t.isActive();
    if ((n === 'active' && !l) || (n === 'inactive' && l)) return !1;
  }
  return !(
    (typeof a == 'boolean' && t.isStale() !== a) ||
    (typeof o < 'u' && o !== t.state.fetchStatus) ||
    (i && !i(t))
  );
}
function _p(e, t) {
  const { exact: n, fetching: r, predicate: o, mutationKey: i } = e;
  if (xa(i)) {
    if (!t.options.mutationKey) return !1;
    if (n) {
      if (Nn(t.options.mutationKey) !== Nn(i)) return !1;
    } else if (!As(t.options.mutationKey, i)) return !1;
  }
  return !(
    (typeof r == 'boolean' && (t.state.status === 'loading') !== r) ||
    (o && !o(t))
  );
}
function xf(e, t) {
  return ((t == null ? void 0 : t.queryKeyHashFn) || Nn)(e);
}
function Nn(e) {
  return JSON.stringify(e, (t, n) =>
    Lu(n)
      ? Object.keys(n)
          .sort()
          .reduce((r, o) => ((r[o] = n[o]), r), {})
      : n
  );
}
function As(e, t) {
  return R1(e, t);
}
function R1(e, t) {
  return e === t
    ? !0
    : typeof e != typeof t
      ? !1
      : e && t && typeof e == 'object' && typeof t == 'object'
        ? !Object.keys(t).some((n) => !R1(e[n], t[n]))
        : !1;
}
function M1(e, t) {
  if (e === t) return e;
  const n = Tp(e) && Tp(t);
  if (n || (Lu(e) && Lu(t))) {
    const r = n ? e.length : Object.keys(e).length,
      o = n ? t : Object.keys(t),
      i = o.length,
      s = n ? [] : {};
    let a = 0;
    for (let l = 0; l < i; l++) {
      const u = n ? l : o[l];
      (s[u] = M1(e[u], t[u])), s[u] === e[u] && a++;
    }
    return r === i && a === r ? e : s;
  }
  return t;
}
function Tp(e) {
  return Array.isArray(e) && e.length === Object.keys(e).length;
}
function Lu(e) {
  if (!Rp(e)) return !1;
  const t = e.constructor;
  if (typeof t > 'u') return !0;
  const n = t.prototype;
  return !(!Rp(n) || !n.hasOwnProperty('isPrototypeOf'));
}
function Rp(e) {
  return Object.prototype.toString.call(e) === '[object Object]';
}
function xa(e) {
  return Array.isArray(e);
}
function O1(e) {
  return new Promise((t) => {
    setTimeout(t, e);
  });
}
function Mp(e) {
  O1(0).then(e);
}
function G5() {
  if (typeof AbortController == 'function') return new AbortController();
}
function Q5(e, t, n) {
  return n.isDataEqual != null && n.isDataEqual(e, t)
    ? e
    : typeof n.structuralSharing == 'function'
      ? n.structuralSharing(e, t)
      : n.structuralSharing !== !1
        ? M1(e, t)
        : t;
}
class q5 extends wa {
  constructor() {
    super(),
      (this.setup = (t) => {
        if (!wf && window.addEventListener) {
          const n = () => t();
          return (
            window.addEventListener('visibilitychange', n, !1),
            window.addEventListener('focus', n, !1),
            () => {
              window.removeEventListener('visibilitychange', n),
                window.removeEventListener('focus', n);
            }
          );
        }
      });
  }
  onSubscribe() {
    this.cleanup || this.setEventListener(this.setup);
  }
  onUnsubscribe() {
    if (!this.hasListeners()) {
      var t;
      (t = this.cleanup) == null || t.call(this), (this.cleanup = void 0);
    }
  }
  setEventListener(t) {
    var n;
    (this.setup = t),
      (n = this.cleanup) == null || n.call(this),
      (this.cleanup = t((r) => {
        typeof r == 'boolean' ? this.setFocused(r) : this.onFocus();
      }));
  }
  setFocused(t) {
    (this.focused = t), t && this.onFocus();
  }
  onFocus() {
    this.listeners.forEach((t) => {
      t();
    });
  }
  isFocused() {
    return typeof this.focused == 'boolean'
      ? this.focused
      : typeof document > 'u'
        ? !0
        : [void 0, 'visible', 'prerender'].includes(document.visibilityState);
  }
}
const Fu = new q5();
class Y5 extends wa {
  constructor() {
    super(),
      (this.setup = (t) => {
        if (!wf && window.addEventListener) {
          const n = () => t();
          return (
            window.addEventListener('online', n, !1),
            window.addEventListener('offline', n, !1),
            () => {
              window.removeEventListener('online', n),
                window.removeEventListener('offline', n);
            }
          );
        }
      });
  }
  onSubscribe() {
    this.cleanup || this.setEventListener(this.setup);
  }
  onUnsubscribe() {
    if (!this.hasListeners()) {
      var t;
      (t = this.cleanup) == null || t.call(this), (this.cleanup = void 0);
    }
  }
  setEventListener(t) {
    var n;
    (this.setup = t),
      (n = this.cleanup) == null || n.call(this),
      (this.cleanup = t((r) => {
        typeof r == 'boolean' ? this.setOnline(r) : this.onOnline();
      }));
  }
  setOnline(t) {
    (this.online = t), t && this.onOnline();
  }
  onOnline() {
    this.listeners.forEach((t) => {
      t();
    });
  }
  isOnline() {
    return typeof this.online == 'boolean'
      ? this.online
      : typeof navigator > 'u' || typeof navigator.onLine > 'u'
        ? !0
        : navigator.onLine;
  }
}
const Ds = new Y5();
function X5(e) {
  return Math.min(1e3 * 2 ** e, 3e4);
}
function Cf(e) {
  return (e ?? 'online') === 'online' ? Ds.isOnline() : !0;
}
class A1 {
  constructor(t) {
    (this.revert = t == null ? void 0 : t.revert),
      (this.silent = t == null ? void 0 : t.silent);
  }
}
function dl(e) {
  return e instanceof A1;
}
function D1(e) {
  let t = !1,
    n = 0,
    r = !1,
    o,
    i,
    s;
  const a = new Promise((b, p) => {
      (i = b), (s = p);
    }),
    l = (b) => {
      r || (v(new A1(b)), e.abort == null || e.abort());
    },
    u = () => {
      t = !0;
    },
    c = () => {
      t = !1;
    },
    d = () => !Fu.isFocused() || (e.networkMode !== 'always' && !Ds.isOnline()),
    h = (b) => {
      r ||
        ((r = !0),
        e.onSuccess == null || e.onSuccess(b),
        o == null || o(),
        i(b));
    },
    v = (b) => {
      r ||
        ((r = !0), e.onError == null || e.onError(b), o == null || o(), s(b));
    },
    w = () =>
      new Promise((b) => {
        (o = (p) => {
          if (r || !d()) return b(p);
        }),
          e.onPause == null || e.onPause();
      }).then(() => {
        (o = void 0), r || e.onContinue == null || e.onContinue();
      }),
    x = () => {
      if (r) return;
      let b;
      try {
        b = e.fn();
      } catch (p) {
        b = Promise.reject(p);
      }
      Promise.resolve(b)
        .then(h)
        .catch((p) => {
          var m, f;
          if (r) return;
          const y = (m = e.retry) != null ? m : 3,
            C = (f = e.retryDelay) != null ? f : X5,
            S = typeof C == 'function' ? C(n, p) : C,
            E =
              y === !0 ||
              (typeof y == 'number' && n < y) ||
              (typeof y == 'function' && y(n, p));
          if (t || !E) {
            v(p);
            return;
          }
          n++,
            e.onFail == null || e.onFail(n, p),
            O1(S)
              .then(() => {
                if (d()) return w();
              })
              .then(() => {
                t ? v(p) : x();
              });
        });
    };
  return (
    Cf(e.networkMode) ? x() : w().then(x),
    {
      promise: a,
      cancel: l,
      continue: () => {
        o == null || o();
      },
      cancelRetry: u,
      continueRetry: c
    }
  );
}
const bf = console;
function Z5() {
  let e = [],
    t = 0,
    n = (c) => {
      c();
    },
    r = (c) => {
      c();
    };
  const o = (c) => {
      let d;
      t++;
      try {
        d = c();
      } finally {
        t--, t || a();
      }
      return d;
    },
    i = (c) => {
      t
        ? e.push(c)
        : Mp(() => {
            n(c);
          });
    },
    s =
      (c) =>
      (...d) => {
        i(() => {
          c(...d);
        });
      },
    a = () => {
      const c = e;
      (e = []),
        c.length &&
          Mp(() => {
            r(() => {
              c.forEach((d) => {
                n(d);
              });
            });
          });
    };
  return {
    batch: o,
    batchCalls: s,
    schedule: i,
    setNotifyFunction: (c) => {
      n = c;
    },
    setBatchNotifyFunction: (c) => {
      r = c;
    }
  };
}
const Le = Z5();
class L1 {
  destroy() {
    this.clearGcTimeout();
  }
  scheduleGc() {
    this.clearGcTimeout(),
      W5(this.cacheTime) &&
        (this.gcTimeout = setTimeout(() => {
          this.optionalRemove();
        }, this.cacheTime));
  }
  updateCacheTime(t) {
    this.cacheTime = Math.max(
      this.cacheTime || 0,
      t ?? (wf ? 1 / 0 : 5 * 60 * 1e3)
    );
  }
  clearGcTimeout() {
    this.gcTimeout && (clearTimeout(this.gcTimeout), (this.gcTimeout = void 0));
  }
}
class J5 extends L1 {
  constructor(t) {
    super(),
      (this.abortSignalConsumed = !1),
      (this.defaultOptions = t.defaultOptions),
      this.setOptions(t.options),
      (this.observers = []),
      (this.cache = t.cache),
      (this.logger = t.logger || bf),
      (this.queryKey = t.queryKey),
      (this.queryHash = t.queryHash),
      (this.initialState = t.state || e3(this.options)),
      (this.state = this.initialState);
  }
  get meta() {
    return this.options.meta;
  }
  setOptions(t) {
    (this.options = { ...this.defaultOptions, ...t }),
      this.updateCacheTime(this.options.cacheTime);
  }
  optionalRemove() {
    !this.observers.length &&
      this.state.fetchStatus === 'idle' &&
      this.cache.remove(this);
  }
  setData(t, n) {
    const r = Q5(this.state.data, t, this.options);
    return (
      this.dispatch({
        data: r,
        type: 'success',
        dataUpdatedAt: n == null ? void 0 : n.updatedAt,
        manual: n == null ? void 0 : n.manual
      }),
      r
    );
  }
  setState(t, n) {
    this.dispatch({ type: 'setState', state: t, setStateOptions: n });
  }
  cancel(t) {
    var n;
    const r = this.promise;
    return (
      (n = this.retryer) == null || n.cancel(t),
      r ? r.then(mt).catch(mt) : Promise.resolve()
    );
  }
  destroy() {
    super.destroy(), this.cancel({ silent: !0 });
  }
  reset() {
    this.destroy(), this.setState(this.initialState);
  }
  isActive() {
    return this.observers.some((t) => t.options.enabled !== !1);
  }
  isDisabled() {
    return this.getObserversCount() > 0 && !this.isActive();
  }
  isStale() {
    return (
      this.state.isInvalidated ||
      !this.state.dataUpdatedAt ||
      this.observers.some((t) => t.getCurrentResult().isStale)
    );
  }
  isStaleByTime(t = 0) {
    return (
      this.state.isInvalidated ||
      !this.state.dataUpdatedAt ||
      !H5(this.state.dataUpdatedAt, t)
    );
  }
  onFocus() {
    var t;
    const n = this.observers.find((r) => r.shouldFetchOnWindowFocus());
    n && n.refetch({ cancelRefetch: !1 }),
      (t = this.retryer) == null || t.continue();
  }
  onOnline() {
    var t;
    const n = this.observers.find((r) => r.shouldFetchOnReconnect());
    n && n.refetch({ cancelRefetch: !1 }),
      (t = this.retryer) == null || t.continue();
  }
  addObserver(t) {
    this.observers.indexOf(t) === -1 &&
      (this.observers.push(t),
      this.clearGcTimeout(),
      this.cache.notify({ type: 'observerAdded', query: this, observer: t }));
  }
  removeObserver(t) {
    this.observers.indexOf(t) !== -1 &&
      ((this.observers = this.observers.filter((n) => n !== t)),
      this.observers.length ||
        (this.retryer &&
          (this.abortSignalConsumed
            ? this.retryer.cancel({ revert: !0 })
            : this.retryer.cancelRetry()),
        this.scheduleGc()),
      this.cache.notify({ type: 'observerRemoved', query: this, observer: t }));
  }
  getObserversCount() {
    return this.observers.length;
  }
  invalidate() {
    this.state.isInvalidated || this.dispatch({ type: 'invalidate' });
  }
  fetch(t, n) {
    var r, o;
    if (this.state.fetchStatus !== 'idle') {
      if (this.state.dataUpdatedAt && n != null && n.cancelRefetch)
        this.cancel({ silent: !0 });
      else if (this.promise) {
        var i;
        return (i = this.retryer) == null || i.continueRetry(), this.promise;
      }
    }
    if ((t && this.setOptions(t), !this.options.queryFn)) {
      const v = this.observers.find((w) => w.options.queryFn);
      v && this.setOptions(v.options);
    }
    Array.isArray(this.options.queryKey);
    const s = G5(),
      a = { queryKey: this.queryKey, pageParam: void 0, meta: this.meta },
      l = (v) => {
        Object.defineProperty(v, 'signal', {
          enumerable: !0,
          get: () => {
            if (s) return (this.abortSignalConsumed = !0), s.signal;
          }
        });
      };
    l(a);
    const u = () =>
        this.options.queryFn
          ? ((this.abortSignalConsumed = !1), this.options.queryFn(a))
          : Promise.reject('Missing queryFn'),
      c = {
        fetchOptions: n,
        options: this.options,
        queryKey: this.queryKey,
        state: this.state,
        fetchFn: u
      };
    if (
      (l(c),
      (r = this.options.behavior) == null || r.onFetch(c),
      (this.revertState = this.state),
      this.state.fetchStatus === 'idle' ||
        this.state.fetchMeta !==
          ((o = c.fetchOptions) == null ? void 0 : o.meta))
    ) {
      var d;
      this.dispatch({
        type: 'fetch',
        meta: (d = c.fetchOptions) == null ? void 0 : d.meta
      });
    }
    const h = (v) => {
      if (
        ((dl(v) && v.silent) || this.dispatch({ type: 'error', error: v }),
        !dl(v))
      ) {
        var w, x;
        (w = (x = this.cache.config).onError) == null || w.call(x, v, this);
      }
      this.isFetchingOptimistic || this.scheduleGc(),
        (this.isFetchingOptimistic = !1);
    };
    return (
      (this.retryer = D1({
        fn: c.fetchFn,
        abort: s == null ? void 0 : s.abort.bind(s),
        onSuccess: (v) => {
          var w, x;
          if (typeof v > 'u') {
            h(new Error('undefined'));
            return;
          }
          this.setData(v),
            (w = (x = this.cache.config).onSuccess) == null ||
              w.call(x, v, this),
            this.isFetchingOptimistic || this.scheduleGc(),
            (this.isFetchingOptimistic = !1);
        },
        onError: h,
        onFail: (v, w) => {
          this.dispatch({ type: 'failed', failureCount: v, error: w });
        },
        onPause: () => {
          this.dispatch({ type: 'pause' });
        },
        onContinue: () => {
          this.dispatch({ type: 'continue' });
        },
        retry: c.options.retry,
        retryDelay: c.options.retryDelay,
        networkMode: c.options.networkMode
      })),
      (this.promise = this.retryer.promise),
      this.promise
    );
  }
  dispatch(t) {
    const n = (r) => {
      var o, i;
      switch (t.type) {
        case 'failed':
          return {
            ...r,
            fetchFailureCount: t.failureCount,
            fetchFailureReason: t.error
          };
        case 'pause':
          return { ...r, fetchStatus: 'paused' };
        case 'continue':
          return { ...r, fetchStatus: 'fetching' };
        case 'fetch':
          return {
            ...r,
            fetchFailureCount: 0,
            fetchFailureReason: null,
            fetchMeta: (o = t.meta) != null ? o : null,
            fetchStatus: Cf(this.options.networkMode) ? 'fetching' : 'paused',
            ...(!r.dataUpdatedAt && { error: null, status: 'loading' })
          };
        case 'success':
          return {
            ...r,
            data: t.data,
            dataUpdateCount: r.dataUpdateCount + 1,
            dataUpdatedAt: (i = t.dataUpdatedAt) != null ? i : Date.now(),
            error: null,
            isInvalidated: !1,
            status: 'success',
            ...(!t.manual && {
              fetchStatus: 'idle',
              fetchFailureCount: 0,
              fetchFailureReason: null
            })
          };
        case 'error':
          const s = t.error;
          return dl(s) && s.revert && this.revertState
            ? { ...this.revertState }
            : {
                ...r,
                error: s,
                errorUpdateCount: r.errorUpdateCount + 1,
                errorUpdatedAt: Date.now(),
                fetchFailureCount: r.fetchFailureCount + 1,
                fetchFailureReason: s,
                fetchStatus: 'idle',
                status: 'error'
              };
        case 'invalidate':
          return { ...r, isInvalidated: !0 };
        case 'setState':
          return { ...r, ...t.state };
      }
    };
    (this.state = n(this.state)),
      Le.batch(() => {
        this.observers.forEach((r) => {
          r.onQueryUpdate(t);
        }),
          this.cache.notify({ query: this, type: 'updated', action: t });
      });
  }
}
function e3(e) {
  const t =
      typeof e.initialData == 'function' ? e.initialData() : e.initialData,
    n = typeof t < 'u',
    r = n
      ? typeof e.initialDataUpdatedAt == 'function'
        ? e.initialDataUpdatedAt()
        : e.initialDataUpdatedAt
      : 0;
  return {
    data: t,
    dataUpdateCount: 0,
    dataUpdatedAt: n ? r ?? Date.now() : 0,
    error: null,
    errorUpdateCount: 0,
    errorUpdatedAt: 0,
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchMeta: null,
    isInvalidated: !1,
    status: n ? 'success' : 'loading',
    fetchStatus: 'idle'
  };
}
class t3 extends wa {
  constructor(t) {
    super(),
      (this.config = t || {}),
      (this.queries = []),
      (this.queriesMap = {});
  }
  build(t, n, r) {
    var o;
    const i = n.queryKey,
      s = (o = n.queryHash) != null ? o : xf(i, n);
    let a = this.get(s);
    return (
      a ||
        ((a = new J5({
          cache: this,
          logger: t.getLogger(),
          queryKey: i,
          queryHash: s,
          options: t.defaultQueryOptions(n),
          state: r,
          defaultOptions: t.getQueryDefaults(i)
        })),
        this.add(a)),
      a
    );
  }
  add(t) {
    this.queriesMap[t.queryHash] ||
      ((this.queriesMap[t.queryHash] = t),
      this.queries.push(t),
      this.notify({ type: 'added', query: t }));
  }
  remove(t) {
    const n = this.queriesMap[t.queryHash];
    n &&
      (t.destroy(),
      (this.queries = this.queries.filter((r) => r !== t)),
      n === t && delete this.queriesMap[t.queryHash],
      this.notify({ type: 'removed', query: t }));
  }
  clear() {
    Le.batch(() => {
      this.queries.forEach((t) => {
        this.remove(t);
      });
    });
  }
  get(t) {
    return this.queriesMap[t];
  }
  getAll() {
    return this.queries;
  }
  find(t, n) {
    const [r] = Jt(t, n);
    return (
      typeof r.exact > 'u' && (r.exact = !0), this.queries.find((o) => $p(r, o))
    );
  }
  findAll(t, n) {
    const [r] = Jt(t, n);
    return Object.keys(r).length > 0
      ? this.queries.filter((o) => $p(r, o))
      : this.queries;
  }
  notify(t) {
    Le.batch(() => {
      this.listeners.forEach((n) => {
        n(t);
      });
    });
  }
  onFocus() {
    Le.batch(() => {
      this.queries.forEach((t) => {
        t.onFocus();
      });
    });
  }
  onOnline() {
    Le.batch(() => {
      this.queries.forEach((t) => {
        t.onOnline();
      });
    });
  }
}
class n3 extends L1 {
  constructor(t) {
    super(),
      (this.options = { ...t.defaultOptions, ...t.options }),
      (this.mutationId = t.mutationId),
      (this.mutationCache = t.mutationCache),
      (this.logger = t.logger || bf),
      (this.observers = []),
      (this.state = t.state || r3()),
      this.updateCacheTime(this.options.cacheTime),
      this.scheduleGc();
  }
  get meta() {
    return this.options.meta;
  }
  setState(t) {
    this.dispatch({ type: 'setState', state: t });
  }
  addObserver(t) {
    this.observers.indexOf(t) === -1 &&
      (this.observers.push(t),
      this.clearGcTimeout(),
      this.mutationCache.notify({
        type: 'observerAdded',
        mutation: this,
        observer: t
      }));
  }
  removeObserver(t) {
    (this.observers = this.observers.filter((n) => n !== t)),
      this.scheduleGc(),
      this.mutationCache.notify({
        type: 'observerRemoved',
        mutation: this,
        observer: t
      });
  }
  optionalRemove() {
    this.observers.length ||
      (this.state.status === 'loading'
        ? this.scheduleGc()
        : this.mutationCache.remove(this));
  }
  continue() {
    return this.retryer
      ? (this.retryer.continue(), this.retryer.promise)
      : this.execute();
  }
  async execute() {
    const t = () => {
        var f;
        return (
          (this.retryer = D1({
            fn: () =>
              this.options.mutationFn
                ? this.options.mutationFn(this.state.variables)
                : Promise.reject('No mutationFn found'),
            onFail: (y, C) => {
              this.dispatch({ type: 'failed', failureCount: y, error: C });
            },
            onPause: () => {
              this.dispatch({ type: 'pause' });
            },
            onContinue: () => {
              this.dispatch({ type: 'continue' });
            },
            retry: (f = this.options.retry) != null ? f : 0,
            retryDelay: this.options.retryDelay,
            networkMode: this.options.networkMode
          })),
          this.retryer.promise
        );
      },
      n = this.state.status === 'loading';
    try {
      var r, o, i, s, a, l;
      if (!n) {
        var u, c, d, h;
        this.dispatch({ type: 'loading', variables: this.options.variables }),
          await ((u = (c = this.mutationCache.config).onMutate) == null
            ? void 0
            : u.call(c, this.state.variables, this));
        const y = await ((d = (h = this.options).onMutate) == null
          ? void 0
          : d.call(h, this.state.variables));
        y !== this.state.context &&
          this.dispatch({
            type: 'loading',
            context: y,
            variables: this.state.variables
          });
      }
      const f = await t();
      return (
        await ((r = (o = this.mutationCache.config).onSuccess) == null
          ? void 0
          : r.call(o, f, this.state.variables, this.state.context, this)),
        await ((i = (s = this.options).onSuccess) == null
          ? void 0
          : i.call(s, f, this.state.variables, this.state.context)),
        await ((a = (l = this.options).onSettled) == null
          ? void 0
          : a.call(l, f, null, this.state.variables, this.state.context)),
        this.dispatch({ type: 'success', data: f }),
        f
      );
    } catch (f) {
      try {
        var v, w, x, b, p, m;
        throw (
          (await ((v = (w = this.mutationCache.config).onError) == null
            ? void 0
            : v.call(w, f, this.state.variables, this.state.context, this)),
          await ((x = (b = this.options).onError) == null
            ? void 0
            : x.call(b, f, this.state.variables, this.state.context)),
          await ((p = (m = this.options).onSettled) == null
            ? void 0
            : p.call(m, void 0, f, this.state.variables, this.state.context)),
          f)
        );
      } finally {
        this.dispatch({ type: 'error', error: f });
      }
    }
  }
  dispatch(t) {
    const n = (r) => {
      switch (t.type) {
        case 'failed':
          return { ...r, failureCount: t.failureCount, failureReason: t.error };
        case 'pause':
          return { ...r, isPaused: !0 };
        case 'continue':
          return { ...r, isPaused: !1 };
        case 'loading':
          return {
            ...r,
            context: t.context,
            data: void 0,
            failureCount: 0,
            failureReason: null,
            error: null,
            isPaused: !Cf(this.options.networkMode),
            status: 'loading',
            variables: t.variables
          };
        case 'success':
          return {
            ...r,
            data: t.data,
            failureCount: 0,
            failureReason: null,
            error: null,
            status: 'success',
            isPaused: !1
          };
        case 'error':
          return {
            ...r,
            data: void 0,
            error: t.error,
            failureCount: r.failureCount + 1,
            failureReason: t.error,
            isPaused: !1,
            status: 'error'
          };
        case 'setState':
          return { ...r, ...t.state };
      }
    };
    (this.state = n(this.state)),
      Le.batch(() => {
        this.observers.forEach((r) => {
          r.onMutationUpdate(t);
        }),
          this.mutationCache.notify({
            mutation: this,
            type: 'updated',
            action: t
          });
      });
  }
}
function r3() {
  return {
    context: void 0,
    data: void 0,
    error: null,
    failureCount: 0,
    failureReason: null,
    isPaused: !1,
    status: 'idle',
    variables: void 0
  };
}
class o3 extends wa {
  constructor(t) {
    super(),
      (this.config = t || {}),
      (this.mutations = []),
      (this.mutationId = 0);
  }
  build(t, n, r) {
    const o = new n3({
      mutationCache: this,
      logger: t.getLogger(),
      mutationId: ++this.mutationId,
      options: t.defaultMutationOptions(n),
      state: r,
      defaultOptions: n.mutationKey
        ? t.getMutationDefaults(n.mutationKey)
        : void 0
    });
    return this.add(o), o;
  }
  add(t) {
    this.mutations.push(t), this.notify({ type: 'added', mutation: t });
  }
  remove(t) {
    (this.mutations = this.mutations.filter((n) => n !== t)),
      this.notify({ type: 'removed', mutation: t });
  }
  clear() {
    Le.batch(() => {
      this.mutations.forEach((t) => {
        this.remove(t);
      });
    });
  }
  getAll() {
    return this.mutations;
  }
  find(t) {
    return (
      typeof t.exact > 'u' && (t.exact = !0),
      this.mutations.find((n) => _p(t, n))
    );
  }
  findAll(t) {
    return this.mutations.filter((n) => _p(t, n));
  }
  notify(t) {
    Le.batch(() => {
      this.listeners.forEach((n) => {
        n(t);
      });
    });
  }
  resumePausedMutations() {
    const t = this.mutations.filter((n) => n.state.isPaused);
    return Le.batch(() =>
      t.reduce(
        (n, r) => n.then(() => r.continue().catch(mt)),
        Promise.resolve()
      )
    );
  }
}
function i3() {
  return {
    onFetch: (e) => {
      e.fetchFn = () => {
        var t, n, r, o, i, s;
        const a =
            (t = e.fetchOptions) == null || (n = t.meta) == null
              ? void 0
              : n.refetchPage,
          l =
            (r = e.fetchOptions) == null || (o = r.meta) == null
              ? void 0
              : o.fetchMore,
          u = l == null ? void 0 : l.pageParam,
          c = (l == null ? void 0 : l.direction) === 'forward',
          d = (l == null ? void 0 : l.direction) === 'backward',
          h = ((i = e.state.data) == null ? void 0 : i.pages) || [],
          v = ((s = e.state.data) == null ? void 0 : s.pageParams) || [];
        let w = v,
          x = !1;
        const b = (S) => {
            Object.defineProperty(S, 'signal', {
              enumerable: !0,
              get: () => {
                var E;
                if ((E = e.signal) != null && E.aborted) x = !0;
                else {
                  var k;
                  (k = e.signal) == null ||
                    k.addEventListener('abort', () => {
                      x = !0;
                    });
                }
                return e.signal;
              }
            });
          },
          p = e.options.queryFn || (() => Promise.reject('Missing queryFn')),
          m = (S, E, k, A) => (
            (w = A ? [E, ...w] : [...w, E]), A ? [k, ...S] : [...S, k]
          ),
          f = (S, E, k, A) => {
            if (x) return Promise.reject('Cancelled');
            if (typeof k > 'u' && !E && S.length) return Promise.resolve(S);
            const R = {
              queryKey: e.queryKey,
              pageParam: k,
              meta: e.options.meta
            };
            b(R);
            const j = p(R);
            return Promise.resolve(j).then((_) => m(S, k, _, A));
          };
        let y;
        if (!h.length) y = f([]);
        else if (c) {
          const S = typeof u < 'u',
            E = S ? u : Op(e.options, h);
          y = f(h, S, E);
        } else if (d) {
          const S = typeof u < 'u',
            E = S ? u : s3(e.options, h);
          y = f(h, S, E, !0);
        } else {
          w = [];
          const S = typeof e.options.getNextPageParam > 'u';
          y = (a && h[0] ? a(h[0], 0, h) : !0)
            ? f([], S, v[0])
            : Promise.resolve(m([], v[0], h[0]));
          for (let k = 1; k < h.length; k++)
            y = y.then((A) => {
              if (a && h[k] ? a(h[k], k, h) : !0) {
                const j = S ? v[k] : Op(e.options, A);
                return f(A, S, j);
              }
              return Promise.resolve(m(A, v[k], h[k]));
            });
        }
        return y.then((S) => ({ pages: S, pageParams: w }));
      };
    }
  };
}
function Op(e, t) {
  return e.getNextPageParam == null
    ? void 0
    : e.getNextPageParam(t[t.length - 1], t);
}
function s3(e, t) {
  return e.getPreviousPageParam == null
    ? void 0
    : e.getPreviousPageParam(t[0], t);
}
class a3 {
  constructor(t = {}) {
    (this.queryCache = t.queryCache || new t3()),
      (this.mutationCache = t.mutationCache || new o3()),
      (this.logger = t.logger || bf),
      (this.defaultOptions = t.defaultOptions || {}),
      (this.queryDefaults = []),
      (this.mutationDefaults = []),
      (this.mountCount = 0);
  }
  mount() {
    this.mountCount++,
      this.mountCount === 1 &&
        ((this.unsubscribeFocus = Fu.subscribe(() => {
          Fu.isFocused() &&
            (this.resumePausedMutations(), this.queryCache.onFocus());
        })),
        (this.unsubscribeOnline = Ds.subscribe(() => {
          Ds.isOnline() &&
            (this.resumePausedMutations(), this.queryCache.onOnline());
        })));
  }
  unmount() {
    var t, n;
    this.mountCount--,
      this.mountCount === 0 &&
        ((t = this.unsubscribeFocus) == null || t.call(this),
        (this.unsubscribeFocus = void 0),
        (n = this.unsubscribeOnline) == null || n.call(this),
        (this.unsubscribeOnline = void 0));
  }
  isFetching(t, n) {
    const [r] = Jt(t, n);
    return (r.fetchStatus = 'fetching'), this.queryCache.findAll(r).length;
  }
  isMutating(t) {
    return this.mutationCache.findAll({ ...t, fetching: !0 }).length;
  }
  getQueryData(t, n) {
    var r;
    return (r = this.queryCache.find(t, n)) == null ? void 0 : r.state.data;
  }
  ensureQueryData(t, n, r) {
    const o = Oi(t, n, r),
      i = this.getQueryData(o.queryKey);
    return i ? Promise.resolve(i) : this.fetchQuery(o);
  }
  getQueriesData(t) {
    return this.getQueryCache()
      .findAll(t)
      .map(({ queryKey: n, state: r }) => {
        const o = r.data;
        return [n, o];
      });
  }
  setQueryData(t, n, r) {
    const o = this.queryCache.find(t),
      i = o == null ? void 0 : o.state.data,
      s = K5(n, i);
    if (typeof s > 'u') return;
    const a = Oi(t),
      l = this.defaultQueryOptions(a);
    return this.queryCache.build(this, l).setData(s, { ...r, manual: !0 });
  }
  setQueriesData(t, n, r) {
    return Le.batch(() =>
      this.getQueryCache()
        .findAll(t)
        .map(({ queryKey: o }) => [o, this.setQueryData(o, n, r)])
    );
  }
  getQueryState(t, n) {
    var r;
    return (r = this.queryCache.find(t, n)) == null ? void 0 : r.state;
  }
  removeQueries(t, n) {
    const [r] = Jt(t, n),
      o = this.queryCache;
    Le.batch(() => {
      o.findAll(r).forEach((i) => {
        o.remove(i);
      });
    });
  }
  resetQueries(t, n, r) {
    const [o, i] = Jt(t, n, r),
      s = this.queryCache,
      a = { type: 'active', ...o };
    return Le.batch(
      () => (
        s.findAll(o).forEach((l) => {
          l.reset();
        }),
        this.refetchQueries(a, i)
      )
    );
  }
  cancelQueries(t, n, r) {
    const [o, i = {}] = Jt(t, n, r);
    typeof i.revert > 'u' && (i.revert = !0);
    const s = Le.batch(() =>
      this.queryCache.findAll(o).map((a) => a.cancel(i))
    );
    return Promise.all(s).then(mt).catch(mt);
  }
  invalidateQueries(t, n, r) {
    const [o, i] = Jt(t, n, r);
    return Le.batch(() => {
      var s, a;
      if (
        (this.queryCache.findAll(o).forEach((u) => {
          u.invalidate();
        }),
        o.refetchType === 'none')
      )
        return Promise.resolve();
      const l = {
        ...o,
        type:
          (s = (a = o.refetchType) != null ? a : o.type) != null ? s : 'active'
      };
      return this.refetchQueries(l, i);
    });
  }
  refetchQueries(t, n, r) {
    const [o, i] = Jt(t, n, r),
      s = Le.batch(() =>
        this.queryCache
          .findAll(o)
          .filter((l) => !l.isDisabled())
          .map((l) => {
            var u;
            return l.fetch(void 0, {
              ...i,
              cancelRefetch:
                (u = i == null ? void 0 : i.cancelRefetch) != null ? u : !0,
              meta: { refetchPage: o.refetchPage }
            });
          })
      );
    let a = Promise.all(s).then(mt);
    return (i != null && i.throwOnError) || (a = a.catch(mt)), a;
  }
  fetchQuery(t, n, r) {
    const o = Oi(t, n, r),
      i = this.defaultQueryOptions(o);
    typeof i.retry > 'u' && (i.retry = !1);
    const s = this.queryCache.build(this, i);
    return s.isStaleByTime(i.staleTime)
      ? s.fetch(i)
      : Promise.resolve(s.state.data);
  }
  prefetchQuery(t, n, r) {
    return this.fetchQuery(t, n, r).then(mt).catch(mt);
  }
  fetchInfiniteQuery(t, n, r) {
    const o = Oi(t, n, r);
    return (o.behavior = i3()), this.fetchQuery(o);
  }
  prefetchInfiniteQuery(t, n, r) {
    return this.fetchInfiniteQuery(t, n, r).then(mt).catch(mt);
  }
  resumePausedMutations() {
    return this.mutationCache.resumePausedMutations();
  }
  getQueryCache() {
    return this.queryCache;
  }
  getMutationCache() {
    return this.mutationCache;
  }
  getLogger() {
    return this.logger;
  }
  getDefaultOptions() {
    return this.defaultOptions;
  }
  setDefaultOptions(t) {
    this.defaultOptions = t;
  }
  setQueryDefaults(t, n) {
    const r = this.queryDefaults.find((o) => Nn(t) === Nn(o.queryKey));
    r
      ? (r.defaultOptions = n)
      : this.queryDefaults.push({ queryKey: t, defaultOptions: n });
  }
  getQueryDefaults(t) {
    if (!t) return;
    const n = this.queryDefaults.find((r) => As(t, r.queryKey));
    return n == null ? void 0 : n.defaultOptions;
  }
  setMutationDefaults(t, n) {
    const r = this.mutationDefaults.find((o) => Nn(t) === Nn(o.mutationKey));
    r
      ? (r.defaultOptions = n)
      : this.mutationDefaults.push({ mutationKey: t, defaultOptions: n });
  }
  getMutationDefaults(t) {
    if (!t) return;
    const n = this.mutationDefaults.find((r) => As(t, r.mutationKey));
    return n == null ? void 0 : n.defaultOptions;
  }
  defaultQueryOptions(t) {
    if (t != null && t._defaulted) return t;
    const n = {
      ...this.defaultOptions.queries,
      ...this.getQueryDefaults(t == null ? void 0 : t.queryKey),
      ...t,
      _defaulted: !0
    };
    return (
      !n.queryHash && n.queryKey && (n.queryHash = xf(n.queryKey, n)),
      typeof n.refetchOnReconnect > 'u' &&
        (n.refetchOnReconnect = n.networkMode !== 'always'),
      typeof n.useErrorBoundary > 'u' && (n.useErrorBoundary = !!n.suspense),
      n
    );
  }
  defaultMutationOptions(t) {
    return t != null && t._defaulted
      ? t
      : {
          ...this.defaultOptions.mutations,
          ...this.getMutationDefaults(t == null ? void 0 : t.mutationKey),
          ...t,
          _defaulted: !0
        };
  }
  clear() {
    this.queryCache.clear(), this.mutationCache.clear();
  }
}
const Ap = g.createContext(void 0),
  l3 = g.createContext(!1);
function u3(e, t) {
  return (
    e ||
    (t && typeof window < 'u'
      ? (window.ReactQueryClientContext ||
          (window.ReactQueryClientContext = Ap),
        window.ReactQueryClientContext)
      : Ap)
  );
}
const c3 = ({ client: e, children: t, context: n, contextSharing: r = !1 }) => {
  g.useEffect(
    () => (
      e.mount(),
      () => {
        e.unmount();
      }
    ),
    [e]
  );
  const o = u3(n, r);
  return g.createElement(
    l3.Provider,
    { value: !n && r },
    g.createElement(o.Provider, { value: e }, t)
  );
};
function Sf(e) {
  return [...e.v, (e.i ? '!' : '') + e.n].join(':');
}
function f3(e, t = ',') {
  return e.map(Sf).join(t);
}
let F1 =
  (typeof CSS < 'u' && CSS.escape) ||
  ((e) =>
    e
      .replace(/[!"'`*+.,;:\\/<=>?@#$%&^|~()[\]{}]/g, '\\$&')
      .replace(/^\d/, '\\3$& '));
function Ho(e) {
  for (var t = 9, n = e.length; n--; )
    t = Math.imul(t ^ e.charCodeAt(n), 1597334677);
  return '#' + ((t ^ (t >>> 9)) >>> 0).toString(36);
}
function Ef(e, t = '@media ') {
  return (
    t +
    se(e)
      .map(
        (n) => (
          typeof n == 'string' && (n = { min: n }),
          n.raw ||
            Object.keys(n)
              .map((r) => `(${r}-width:${n[r]})`)
              .join(' and ')
        )
      )
      .join(',')
  );
}
function se(e = []) {
  return Array.isArray(e) ? e : e == null ? [] : [e];
}
function Dp(e) {
  return e;
}
function N1() {}
let ge = {
  d: 0,
  b: 134217728,
  c: 268435456,
  a: 671088640,
  u: 805306368,
  o: 939524096
};
function I1(e) {
  var t;
  return ((t = e.match(/[-=:;]/g)) == null ? void 0 : t.length) || 0;
}
function Nu(e) {
  return (
    (Math.min(
      /(?:^|width[^\d]+)(\d+(?:.\d+)?)(p)?/.test(e)
        ? Math.max(0, 29.63 * (+RegExp.$1 / (RegExp.$2 ? 15 : 1)) ** 0.137 - 43)
        : 0,
      15
    ) <<
      22) |
    (Math.min(I1(e), 15) << 18)
  );
}
let d3 = [
  'rst-c',
  'st-ch',
  'h-chi',
  'y-lin',
  'nk',
  'sited',
  'ecked',
  'pty',
  'ad-on',
  'cus-w',
  'ver',
  'cus',
  'cus-v',
  'tive',
  'sable',
  'tiona',
  'quire'
];
function kf({ n: e, i: t, v: n = [] }, r, o, i) {
  e && (e = Sf({ n: e, i: t, v: n })), (i = [...se(i)]);
  for (let a of n) {
    let l = r.theme('screens', a);
    for (let u of se((l && Ef(l)) || r.v(a))) {
      var s;
      i.push(u),
        (o |= l
          ? 67108864 | Nu(u)
          : a == 'dark'
            ? 1073741824
            : u[0] == '@'
              ? Nu(u)
              : ((s = u),
                1 <<
                  ~(
                    (/:([a-z-]+)/.test(s) &&
                      ~d3.indexOf(RegExp.$1.slice(2, 7))) ||
                    -18
                  )));
    }
  }
  return { n: e, p: o, r: i, i: t };
}
let Pf = new Map();
function Iu(e) {
  if (e.d) {
    let t = [],
      n = pl(
        e.r.reduce(
          (r, o) =>
            o[0] == '@'
              ? (t.push(o), r)
              : o
                ? pl(r, (i) =>
                    pl(o, (s) => {
                      let a = /(:merge\(.+?\))(:[a-z-]+|\\[.+])/.exec(s);
                      if (a) {
                        let l = i.indexOf(a[1]);
                        return ~l
                          ? i.slice(0, l) + a[0] + i.slice(l + a[1].length)
                          : hl(i, s);
                      }
                      return hl(s, i);
                    })
                  )
                : r,
          '&'
        ),
        (r) => hl(r, e.n ? '.' + F1(e.n) : '')
      );
    return (
      n && t.push(n.replace(/:merge\((.+?)\)/g, '$1')),
      t.reduceRight((r, o) => o + '{' + r + '}', e.d)
    );
  }
}
function pl(e, t) {
  return e.replace(
    / *((?:\(.+?\)|\[.+?\]|[^,])+) *(,|$)/g,
    (n, r, o) => t(r) + o
  );
}
function hl(e, t) {
  return e.replace(/&/g, t);
}
let Lp = new Intl.Collator('en', { numeric: !0 });
function V1(e, t) {
  for (var n = 0, r = e.length; n < r; ) {
    let o = (r + n) >> 1;
    0 >= z1(e[o], t) ? (n = o + 1) : (r = o);
  }
  return r;
}
function z1(e, t) {
  let n = e.p & ge.o;
  return n == (t.p & ge.o) && (n == ge.b || n == ge.o)
    ? 0
    : e.p - t.p ||
        e.o - t.o ||
        Lp.compare(Fp(e.n), Fp(t.n)) ||
        Lp.compare(Np(e.n), Np(t.n));
}
function Fp(e) {
  return (e || '').split(/:/).pop().split('/').pop() || '\0';
}
function Np(e) {
  return (
    (e || '').replace(/\W/g, (t) =>
      String.fromCharCode(127 + t.charCodeAt(0))
    ) + '\0'
  );
}
function ml(e, t) {
  return Math.round(parseInt(e, 16) * t);
}
function sn(e, t = {}) {
  if (typeof e == 'function') return e(t);
  let { opacityValue: n = '1', opacityVariable: r } = t,
    o = r ? `var(${r})` : n;
  if (e.includes('<alpha-value>')) return e.replace('<alpha-value>', o);
  if (e[0] == '#' && (e.length == 4 || e.length == 7)) {
    let i = (e.length - 1) / 3,
      s = [17, 1, 0.062272][i - 1];
    return `rgba(${[ml(e.substr(1, i), s), ml(e.substr(1 + i, i), s), ml(e.substr(1 + 2 * i, i), s), o]})`;
  }
  return o == '1'
    ? e
    : o == '0'
      ? '#0000'
      : e.replace(/^(rgb|hsl)(\([^)]+)\)$/, `$1a$2,${o})`);
}
function $f(e, t, n, r, o = []) {
  return (function i(s, { n: a, p: l, r: u = [], i: c }, d) {
    let h = [],
      v = '',
      w = 0,
      x = 0;
    for (let m in s || {}) {
      var b, p;
      let f = s[m];
      if (m[0] == '@') {
        if (!f) continue;
        if (m[1] == 'a') {
          h.push(...Rf(a, l, Fs('' + f), d, l, u, c, !0));
          continue;
        }
        if (m[1] == 'l') {
          for (let y of se(f))
            h.push(
              ...i(
                y,
                { n: a, p: ((b = ge[m[7]]), (l & ~ge.o) | b), r: u, i: c },
                d
              )
            );
          continue;
        }
        if (m[1] == 'i') {
          h.push(...se(f).map((y) => ({ p: -1, o: 0, r: [], d: m + ' ' + y })));
          continue;
        }
        if (m[1] == 'k') {
          h.push({
            p: ge.d,
            o: 0,
            r: [m],
            d: i(f, { p: ge.d }, d).map(Iu).join('')
          });
          continue;
        }
        if (m[1] == 'f') {
          h.push(
            ...se(f).map((y) => ({
              p: ge.d,
              o: 0,
              r: [m],
              d: i(y, { p: ge.d }, d).map(Iu).join('')
            }))
          );
          continue;
        }
      }
      if (typeof f != 'object' || Array.isArray(f))
        m == 'label' && f
          ? (a = f + Ho(JSON.stringify([l, c, s])))
          : (f || f === 0) &&
            ((m = m.replace(/[A-Z]/g, (y) => '-' + y.toLowerCase())),
            (x += 1),
            (w = Math.max(
              w,
              (p = m)[0] == '-'
                ? 0
                : I1(p) +
                    (/^(?:(border-(?!w|c|sty)|[tlbr].{2,4}m?$|c.{7,8}$)|([fl].{5}l|g.{8}$|pl))/.test(
                      p
                    )
                      ? +!!RegExp.$1 || -!!RegExp.$2
                      : 0) +
                    1
            )),
            (v +=
              (v ? ';' : '') +
              se(f)
                .map((y) =>
                  d.s(m, _f('' + y, d.theme) + (c ? ' !important' : ''))
                )
                .join(';')));
      else if (m[0] == '@' || m.includes('&')) {
        let y = l;
        m[0] == '@' &&
          ((m = m.replace(/\bscreen\(([^)]+)\)/g, (C, S) => {
            let E = d.theme('screens', S);
            return E ? ((y |= 67108864), Ef(E, '')) : C;
          })),
          (y |= Nu(m))),
          h.push(...i(f, { n: a, p: y, r: [...u, m], i: c }, d));
      } else h.push(...i(f, { p: l, r: [...u, m] }, d));
    }
    return (
      h.unshift({
        n: a,
        p: l,
        o: Math.max(0, 15 - x) + 1.5 * Math.min(w || 15, 15),
        r: u,
        d: v
      }),
      h.sort(z1)
    );
  })(e, kf(t, n, r, o), n);
}
function _f(e, t) {
  return e.replace(
    /theme\((["'`])?(.+?)\1(?:\s*,\s*(["'`])?(.+?)\3)?\)/g,
    (n, r, o, i, s = '') => {
      let a = t(o, s);
      return typeof a == 'function' && /color|fill|stroke/i.test(o)
        ? sn(a)
        : '' + se(a).filter((l) => Object(l) !== l);
    }
  );
}
function Tf(e, t) {
  let n,
    r = [];
  for (let o of e)
    o.d && o.n
      ? (n == null ? void 0 : n.p) == o.p && '' + n.r == '' + o.r
        ? ((n.c = [n.c, o.c].filter(Boolean).join(' ')),
          (n.d = n.d + ';' + o.d))
        : r.push((n = { ...o, n: o.n && t }))
      : r.push({ ...o, n: o.n && t });
  return r;
}
function Ls(e, t, n = ge.u, r, o) {
  let i = [];
  for (let s of e)
    for (let a of (function (l, u, c, d, h) {
      l = { ...l, i: l.i || h };
      let v = (function (w, x) {
        let b = Pf.get(w.n);
        return b ? b(w, x) : x.r(w.n, w.v[0] == 'dark');
      })(l, u);
      return v
        ? typeof v == 'string'
          ? (({ r: d, p: c } = kf(l, u, c, d)),
            Tf(Ls(Fs(v), u, c, d, l.i), l.n))
          : Array.isArray(v)
            ? v.map((w) => {
                var x, b;
                return {
                  o: 0,
                  ...w,
                  r: [...se(d), ...se(w.r)],
                  p: ((x = c), (b = w.p ?? c), (x & ~ge.o) | b)
                };
              })
            : $f(v, l, u, c, d)
        : [{ c: Sf(l), p: 0, o: 0, r: [] }];
    })(s, t, n, r, o))
      i.splice(V1(i, a), 0, a);
  return i;
}
function Rf(e, t, n, r, o, i, s, a) {
  return Tf(
    (a ? n.flatMap((l) => Ls([l], r, o, i, s)) : Ls(n, r, o, i, s)).map((l) =>
      l.p & ge.o && (l.n || t == ge.b)
        ? { ...l, p: (l.p & ~ge.o) | t, o: 0 }
        : l
    ),
    e
  );
}
function p3(e, t, n, r) {
  var o;
  return (
    (o = (i, s) => {
      let { n: a, p: l, r: u, i: c } = kf(i, s, t);
      return n && Rf(a, t, n, s, l, u, c, r);
    }),
    Pf.set(e, o),
    e
  );
}
function gl(e, t, n) {
  if (e[e.length - 1] != '(') {
    let r = [],
      o = !1,
      i = !1,
      s = '';
    for (let a of e)
      if (!(a == '(' || /[~@]$/.test(a))) {
        if ((a[0] == '!' && ((a = a.slice(1)), (o = !o)), a.endsWith(':'))) {
          r[a == 'dark:' ? 'unshift' : 'push'](a.slice(0, -1));
          continue;
        }
        a[0] == '-' && ((a = a.slice(1)), (i = !i)),
          a.endsWith('-') && (a = a.slice(0, -1)),
          a && a != '&' && (s += (s && '-') + a);
      }
    s && (i && (s = '-' + s), t[0].push({ n: s, v: r.filter(h3), i: o }));
  }
}
function h3(e, t, n) {
  return n.indexOf(e) == t;
}
let Ip = new Map();
function Fs(e) {
  let t = Ip.get(e);
  if (!t) {
    let n = [],
      r = [[]],
      o = 0,
      i = 0,
      s = null,
      a = 0,
      l = (u, c = 0) => {
        o != a && (n.push(e.slice(o, a + c)), u && gl(n, r)), (o = a + 1);
      };
    for (; a < e.length; a++) {
      let u = e[a];
      if (i) e[a - 1] != '\\' && (i += +(u == '[') || -(u == ']'));
      else if (u == '[') i += 1;
      else if (s)
        e[a - 1] != '\\' &&
          s.test(e.slice(a)) &&
          ((s = null), (o = a + RegExp.lastMatch.length));
      else if (
        u == '/' &&
        e[a - 1] != '\\' &&
        (e[a + 1] == '*' || e[a + 1] == '/')
      )
        s = e[a + 1] == '*' ? /^\*\// : /^[\r\n]/;
      else if (u == '(') l(), n.push(u);
      else if (u == ':') e[a + 1] != ':' && l(!1, 1);
      else if (/[\s,)]/.test(u)) {
        l(!0);
        let c = n.lastIndexOf('(');
        if (u == ')') {
          let d = n[c - 1];
          if (/[~@]$/.test(d)) {
            let h = r.shift();
            (n.length = c), gl([...n, '#'], r);
            let { v } = r[0].pop();
            for (let w of h)
              w.v.splice(+(w.v[0] == 'dark') - +(v[0] == 'dark'), v.length);
            gl(
              [
                ...n,
                p3(
                  d.length > 1
                    ? d.slice(0, -1) + Ho(JSON.stringify([d, h]))
                    : d + '(' + f3(h) + ')',
                  ge.a,
                  h,
                  /@$/.test(d)
                )
              ],
              r
            );
          }
          c = n.lastIndexOf('(', c - 1);
        }
        n.length = c + 1;
      } else /[~@]/.test(u) && e[a + 1] == '(' && r.unshift([]);
    }
    l(!0), Ip.set(e, (t = r[0]));
  }
  return t;
}
function m3(e, t, n) {
  return t.reduce((r, o, i) => r + n(o) + e[i + 1], e[0]);
}
function g3(e, t) {
  return Array.isArray(e)
    ? Vp(m3(e, t, (n) => (n != null && typeof n != 'boolean' ? n : '')))
    : typeof e == 'string'
      ? Vp(e)
      : [e];
}
let v3 = / *(?:(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}))/g;
function Vp(e) {
  let t;
  e = e.replace(/\/\*[^]*?\*\/|\s\s+|\n/gm, ' ');
  let n = [{}],
    r = [n[0]],
    o = [];
  for (; (t = v3.exec(e)); )
    t[4] && (n.shift(), o.shift()),
      t[3]
        ? (o.unshift(t[3]),
          n.unshift({}),
          r.push(o.reduce((i, s) => ({ [s]: i }), n[0])))
        : t[4] ||
          (n[0][t[1]] &&
            (n.unshift({}), r.push(o.reduce((i, s) => ({ [s]: i }), n[0]))),
          (n[0][t[1]] = t[2]));
  return r;
}
function j1(e, ...t) {
  var i;
  var n;
  let r = g3(e, t),
    o =
      (((i = r.find((s) => s.label)) == null ? void 0 : i.label) || 'css') +
      Ho(JSON.stringify(r));
  return (
    (n = (s, a) =>
      Tf(
        r.flatMap((l) => $f(l, s, a, ge.o)),
        o
      )),
    Pf.set(o, n),
    o
  );
}
function N(e, t, n) {
  return [e, Vu(t, n)];
}
function Vu(e, t) {
  return typeof e == 'function'
    ? e
    : typeof e == 'string' && /^[\w-]+$/.test(e)
      ? (n, r) => ({ [e]: t ? t(n, r) : zu(n, 1) })
      : (n) => e || { [n[1]]: zu(n, 2) };
}
function zu(e, t, n = e.slice(t).find(Boolean) || e.$$ || e.input) {
  return e.input[0] == '-' ? `calc(${n} * -1)` : n;
}
function I(e, t, n, r) {
  return [e, y3(t, n, r)];
}
function y3(e, t, n) {
  let r =
    typeof t == 'string'
      ? (o, i) => ({ [t]: n ? n(o, i) : o._ })
      : t || (({ 1: o, _: i }, s, a) => ({ [o || a]: i }));
  return (o, i) => {
    let s = B1(e || o[1]),
      a = i.theme(s, o.$$) ?? an(o.$$, s, i);
    if (a != null) return (o._ = zu(o, 0, a)), r(o, i, s);
  };
}
function Ce(e, t = {}, n) {
  return [e, w3(t, n)];
}
function w3(e = {}, t) {
  return (n, r) => {
    let { section: o = B1(n[0]).replace('-', '') + 'Color' } = e,
      [i, s] = x3(n.$$);
    if (!i) return;
    let a = r.theme(o, i) || an(i, o, r);
    if (!a || typeof a == 'object') return;
    let {
        opacityVariable: l = `--tw-${n[0].replace(/-$/, '')}-opacity`,
        opacitySection: u = o.replace('Color', 'Opacity'),
        property: c = o,
        selector: d
      } = e,
      h = r.theme(u, s || 'DEFAULT') || (s && an(s, u, r)),
      v =
        t ||
        (({ _: x }) => {
          let b = os(c, x);
          return d ? { [d]: b } : b;
        });
    n._ = {
      value: sn(a, { opacityVariable: l || void 0, opacityValue: h || void 0 }),
      color: (x) => sn(a, x),
      opacityVariable: l || void 0,
      opacityValue: h || void 0
    };
    let w = v(n, r);
    if (!n.dark) {
      let x = r.d(o, i, a);
      x &&
        x !== a &&
        ((n._ = {
          value: sn(x, {
            opacityVariable: l || void 0,
            opacityValue: h || '1'
          }),
          color: (b) => sn(x, b),
          opacityVariable: l || void 0,
          opacityValue: h || void 0
        }),
        (w = { '&': w, [r.v('dark')]: v(n, r) }));
    }
    return w;
  };
}
function x3(e) {
  return (e.match(/^(\[[^\]]+]|[^/]+?)(?:\/(.+))?$/) || []).slice(1);
}
function os(e, t) {
  let n = {};
  return (
    typeof t == 'string'
      ? (n[e] = t)
      : (t.opacityVariable &&
          t.value.includes(t.opacityVariable) &&
          (n[t.opacityVariable] = t.opacityValue || '1'),
        (n[e] = t.value)),
    n
  );
}
function an(e, t, n) {
  if (e[0] == '[' && e.slice(-1) == ']') {
    if (((e = Go(_f(e.slice(1, -1), n.theme))), !t)) return e;
    if (
      !(
        (/color|fill|stroke/i.test(t) &&
          !(
            /^color:/.test(e) ||
            /^(#|((hsl|rgb)a?|hwb|lab|lch|color)\(|[a-z]+$)/.test(e)
          )) ||
        (/image/i.test(t) && !(/^image:/.test(e) || /^[a-z-]+\(/.test(e))) ||
        (/weight/i.test(t) && !(/^(number|any):/.test(e) || /^\d+$/.test(e))) ||
        (/position/i.test(t) && /^(length|size):/.test(e))
      )
    )
      return e.replace(/^[a-z-]+:/, '');
  }
}
function B1(e) {
  return e.replace(/-./g, (t) => t[1].toUpperCase());
}
function Go(e) {
  return e.includes('url(')
    ? e.replace(
        /(.*?)(url\(.*?\))(.*?)/g,
        (t, n = '', r, o = '') => Go(n) + r + Go(o)
      )
    : e
        .replace(/(^|[^\\])_+/g, (t, n) => n + ' '.repeat(t.length - n.length))
        .replace(/\\_/g, '_')
        .replace(/(calc|min|max|clamp)\(.+\)/g, (t) =>
          t.replace(
            /(-?\d*\.?\d(?!\b-.+[,)](?![^+\-/*])\D)(?:%|[a-z]+)?|\))([+\-/*])/g,
            '$1 $2 '
          )
        );
}
function U1({ presets: e = [], ...t }) {
  let n = {
    darkMode: void 0,
    darkColor: void 0,
    preflight: t.preflight !== !1 && [],
    theme: {},
    variants: se(t.variants),
    rules: se(t.rules),
    ignorelist: se(t.ignorelist),
    hash: void 0,
    stringify: (r, o) => r + ':' + o,
    finalize: []
  };
  for (let r of se([
    ...e,
    {
      darkMode: t.darkMode,
      darkColor: t.darkColor,
      preflight: t.preflight !== !1 && se(t.preflight),
      theme: t.theme,
      hash: t.hash,
      stringify: t.stringify,
      finalize: t.finalize
    }
  ])) {
    let {
      preflight: o,
      darkMode: i = n.darkMode,
      darkColor: s = n.darkColor,
      theme: a,
      variants: l,
      rules: u,
      ignorelist: c,
      hash: d = n.hash,
      stringify: h = n.stringify,
      finalize: v
    } = typeof r == 'function' ? r(n) : r;
    n = {
      preflight: n.preflight !== !1 && o !== !1 && [...n.preflight, ...se(o)],
      darkMode: i,
      darkColor: s,
      theme: {
        ...n.theme,
        ...a,
        extend: { ...n.theme.extend, ...(a == null ? void 0 : a.extend) }
      },
      variants: [...n.variants, ...se(l)],
      rules: [...n.rules, ...se(u)],
      ignorelist: [...n.ignorelist, ...se(c)],
      hash: d,
      stringify: h,
      finalize: [...n.finalize, ...se(v)]
    };
  }
  return n;
}
function zp(e, t, n, r, o, i) {
  for (let s of t) {
    let a = n.get(s);
    a || n.set(s, (a = r(s)));
    let l = a(e, o, i);
    if (l) return l;
  }
}
function C3(e) {
  var t;
  return ju(e[0], typeof (t = e[1]) == 'function' ? t : () => t);
}
function b3(e) {
  var t, n;
  return Array.isArray(e) ? ju(e[0], Vu(e[1], e[2])) : ju(e, Vu(t, n));
}
function ju(e, t) {
  return K1(e, (n, r, o, i) => {
    let s = r.exec(n);
    if (s) return (s.$$ = n.slice(s[0].length)), (s.dark = i), t(s, o);
  });
}
function K1(e, t) {
  let n = se(e).map(S3);
  return (r, o, i) => {
    for (let s of n) {
      let a = t(r, s, o, i);
      if (a) return a;
    }
  };
}
function S3(e) {
  return typeof e == 'string'
    ? RegExp('^' + e + (e.includes('$') || e.slice(-1) == '-' ? '' : '$'))
    : e;
}
function E3(e, t) {
  let n = U1(e),
    r = (function ({
      theme: l,
      darkMode: u,
      darkColor: c = N1,
      variants: d,
      rules: h,
      hash: v,
      stringify: w,
      ignorelist: x,
      finalize: b
    }) {
      let p = new Map(),
        m = new Map(),
        f = new Map(),
        y = new Map(),
        C = K1(x, (k, A) => A.test(k));
      d.push([
        'dark',
        Array.isArray(u) || u == 'class'
          ? `${se(u)[1] || '.dark'} &`
          : typeof u == 'string' && u != 'media'
            ? u
            : '@media (prefers-color-scheme:dark)'
      ]);
      let S = typeof v == 'function' ? (k) => v(k, Ho) : v ? Ho : Dp;
      S !== Dp &&
        b.push((k) => {
          var A;
          return {
            ...k,
            n: k.n && S(k.n),
            d:
              (A = k.d) == null
                ? void 0
                : A.replace(
                    /--(tw(?:-[\w-]+)?)\b/g,
                    (R, j) => '--' + S(j).replace('#', '')
                  )
          };
        });
      let E = {
        theme: (function ({ extend: k = {}, ...A }) {
          let R = {},
            j = {
              get colors() {
                return W('colors');
              },
              theme: W,
              negative() {
                return {};
              },
              breakpoints($) {
                let T = {};
                for (let M in $)
                  typeof $[M] == 'string' && (T['screen-' + M] = $[M]);
                return T;
              }
            };
          return W;
          function W($, T, M, D) {
            if ($) {
              if (
                (({ 1: $, 2: D } = /^(\S+?)(?:\s*\/\s*([^/]+))?$/.exec($) || [
                  ,
                  $
                ]),
                /[.[]/.test($))
              ) {
                let U = [];
                $.replace(/\[([^\]]+)\]|([^.[]+)/g, (z, Z, de = Z) =>
                  U.push(de)
                ),
                  ($ = U.shift()),
                  (M = T),
                  (T = U.join('-'));
              }
              let O =
                R[$] ||
                Object.assign(Object.assign((R[$] = {}), _(A, $)), _(k, $));
              if (T == null) return O;
              T || (T = 'DEFAULT');
              let F =
                O[T] ??
                T.split('-').reduce((U, z) => (U == null ? void 0 : U[z]), O) ??
                M;
              return D ? sn(F, { opacityValue: _f(D, W) }) : F;
            }
            let P = {};
            for (let O of [...Object.keys(A), ...Object.keys(k)]) P[O] = W(O);
            return P;
          }
          function _($, T) {
            let M = $[T];
            return (
              typeof M == 'function' && (M = M(j)),
              M && /color|fill|stroke/i.test(T)
                ? (function D(P, O = []) {
                    let F = {};
                    for (let U in P) {
                      let z = P[U],
                        Z = [...O, U];
                      (F[Z.join('-')] = z),
                        U == 'DEFAULT' && ((Z = O), (F[O.join('-')] = z)),
                        typeof z == 'object' && Object.assign(F, D(z, Z));
                    }
                    return F;
                  })(M)
                : M
            );
          }
        })(l),
        e: F1,
        h: S,
        s(k, A) {
          return w(k, A, E);
        },
        d(k, A, R) {
          return c(k, A, E, R);
        },
        v(k) {
          return p.has(k) || p.set(k, zp(k, d, m, C3, E) || '&:' + k), p.get(k);
        },
        r(k, A) {
          let R = JSON.stringify([k, A]);
          return (
            f.has(R) || f.set(R, !C(k, E) && zp(k, h, y, b3, E, A)), f.get(R)
          );
        },
        f(k) {
          return b.reduce((A, R) => R(A, E), k);
        }
      };
      return E;
    })(n),
    o = new Map(),
    i = [],
    s = new Set();
  t.resume(
    (l) => o.set(l, l),
    (l, u) => {
      t.insert(l, i.length, u), i.push(u), s.add(l);
    }
  );
  function a(l) {
    let u = r.f(l),
      c = Iu(u);
    if (c && !s.has(c)) {
      s.add(c);
      let d = V1(i, l);
      t.insert(c, d, l), i.splice(d, 0, l);
    }
    return u.n;
  }
  return Object.defineProperties(
    function (u) {
      if (!o.size)
        for (let d of se(n.preflight))
          typeof d == 'function' && (d = d(r)),
            d &&
              (typeof d == 'string'
                ? Rf('', ge.b, Fs(d), r, ge.b, [], !1, !0)
                : $f(d, {}, r, ge.b)
              ).forEach(a);
      u = '' + u;
      let c = o.get(u);
      if (!c) {
        let d = new Set();
        for (let h of Ls(Fs(u), r)) d.add(h.c).add(a(h));
        (c = [...d].filter(Boolean).join(' ')), o.set(u, c).set(c, c);
      }
      return c;
    },
    Object.getOwnPropertyDescriptors({
      get target() {
        return t.target;
      },
      theme: r.theme,
      config: n,
      snapshot() {
        let l = t.snapshot(),
          u = new Set(s),
          c = new Map(o),
          d = [...i];
        return () => {
          l(), (s = u), (o = c), (i = d);
        };
      },
      clear() {
        t.clear(), (s = new Set()), (o = new Map()), (i = []);
      },
      destroy() {
        this.clear(), t.destroy();
      }
    })
  );
}
function k3(e) {
  let t = document.querySelector(e || 'style[data-twind=""]');
  return (
    (!t || t.tagName != 'STYLE') &&
      ((t = document.createElement('style')), document.head.prepend(t)),
    (t.dataset.twind = 'claimed'),
    t
  );
}
function P3(e) {
  let t =
    e != null && e.cssRules ? e : (e && typeof e != 'string' ? e : k3(e)).sheet;
  return {
    target: t,
    snapshot() {
      let n = Array.from(t.cssRules, (r) => r.cssText);
      return () => {
        this.clear(), n.forEach(this.insert);
      };
    },
    clear() {
      for (let n = t.cssRules.length; n--; ) t.deleteRule(n);
    },
    destroy() {
      var n;
      (n = t.ownerNode) == null || n.remove();
    },
    insert(n, r) {
      try {
        t.insertRule(n, r);
      } catch {
        t.insertRule(':root{}', r);
      }
    },
    resume: N1
  };
}
var $3 = new Map([
  ['align-self', '-ms-grid-row-align'],
  ['color-adjust', '-webkit-print-color-adjust'],
  ['column-gap', 'grid-column-gap'],
  ['forced-color-adjust', '-ms-high-contrast-adjust'],
  ['gap', 'grid-gap'],
  ['grid-template-columns', '-ms-grid-columns'],
  ['grid-template-rows', '-ms-grid-rows'],
  ['justify-self', '-ms-grid-column-align'],
  ['margin-inline-end', '-webkit-margin-end'],
  ['margin-inline-start', '-webkit-margin-start'],
  ['mask-border', '-webkit-mask-box-image'],
  ['mask-border-outset', '-webkit-mask-box-image-outset'],
  ['mask-border-slice', '-webkit-mask-box-image-slice'],
  ['mask-border-source', '-webkit-mask-box-image-source'],
  ['mask-border-repeat', '-webkit-mask-box-image-repeat'],
  ['mask-border-width', '-webkit-mask-box-image-width'],
  ['overflow-wrap', 'word-wrap'],
  ['padding-inline-end', '-webkit-padding-end'],
  ['padding-inline-start', '-webkit-padding-start'],
  ['print-color-adjust', 'color-adjust'],
  ['row-gap', 'grid-row-gap'],
  ['scroll-margin-bottom', 'scroll-snap-margin-bottom'],
  ['scroll-margin-left', 'scroll-snap-margin-left'],
  ['scroll-margin-right', 'scroll-snap-margin-right'],
  ['scroll-margin-top', 'scroll-snap-margin-top'],
  ['scroll-margin', 'scroll-snap-margin'],
  ['text-combine-upright', '-ms-text-combine-horizontal']
]);
function _3(e) {
  return $3.get(e);
}
function T3(e) {
  var t =
    /^(?:(text-(?:decoration$|e|or|si)|back(?:ground-cl|d|f)|box-d|mask(?:$|-[ispro]|-cl)|pr|hyphena|flex-d)|(tab-|column(?!-s)|text-align-l)|(ap)|u|hy)/i.exec(
      e
    );
  return t ? (t[1] ? 1 : t[2] ? 2 : t[3] ? 3 : 5) : 0;
}
function R3(e, t) {
  var n =
    /^(?:(pos)|(cli)|(background-i)|(flex(?:$|-b)|(?:max-|min-)?(?:block-s|inl|he|widt))|dis)/i.exec(
      e
    );
  return n
    ? n[1]
      ? /^sti/i.test(t)
        ? 1
        : 0
      : n[2]
        ? /^pat/i.test(t)
          ? 1
          : 0
        : n[3]
          ? /^image-/i.test(t)
            ? 1
            : 0
          : n[4]
            ? t[3] === '-'
              ? 2
              : 0
            : /^(?:inline-)?grid$/i.test(t)
              ? 4
              : 0
    : 0;
}
let M3 = [
  ['-webkit-', 1],
  ['-moz-', 2],
  ['-ms-', 4]
];
function O3() {
  return ({ stringify: e }) => ({
    stringify(t, n, r) {
      let o = '',
        i = _3(t);
      i && (o += e(i, n, r) + ';');
      let s = T3(t),
        a = R3(t, n);
      for (let l of M3)
        s & l[1] && (o += e(l[0] + t, n, r) + ';'),
          a & l[1] && (o += e(t, l[0] + n, r) + ';');
      return o + e(t, n, r);
    }
  });
}
let Bu = {
  screens: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px'
  },
  columns: {
    auto: 'auto',
    '3xs': '16rem',
    '2xs': '18rem',
    xs: '20rem',
    sm: '24rem',
    md: '28rem',
    lg: '32rem',
    xl: '36rem',
    '2xl': '42rem',
    '3xl': '48rem',
    '4xl': '56rem',
    '5xl': '64rem',
    '6xl': '72rem',
    '7xl': '80rem'
  },
  spacing: {
    px: '1px',
    0: '0px',
    ...qe(4, 'rem', 4, 0.5, 0.5),
    ...qe(12, 'rem', 4, 5),
    14: '3.5rem',
    ...qe(64, 'rem', 4, 16, 4),
    72: '18rem',
    80: '20rem',
    96: '24rem'
  },
  durations: {
    75: '75ms',
    100: '100ms',
    150: '150ms',
    200: '200ms',
    300: '300ms',
    500: '500ms',
    700: '700ms',
    1e3: '1000ms'
  },
  animation: {
    none: 'none',
    spin: 'spin 1s linear infinite',
    ping: 'ping 1s cubic-bezier(0,0,0.2,1) infinite',
    pulse: 'pulse 2s cubic-bezier(0.4,0,0.6,1) infinite',
    bounce: 'bounce 1s infinite'
  },
  aspectRatio: { auto: 'auto', square: '1/1', video: '16/9' },
  backdropBlur: q('blur'),
  backdropBrightness: q('brightness'),
  backdropContrast: q('contrast'),
  backdropGrayscale: q('grayscale'),
  backdropHueRotate: q('hueRotate'),
  backdropInvert: q('invert'),
  backdropOpacity: q('opacity'),
  backdropSaturate: q('saturate'),
  backdropSepia: q('sepia'),
  backgroundColor: q('colors'),
  backgroundImage: { none: 'none' },
  backgroundOpacity: q('opacity'),
  backgroundSize: { auto: 'auto', cover: 'cover', contain: 'contain' },
  blur: {
    none: 'none',
    0: '0',
    sm: '4px',
    DEFAULT: '8px',
    md: '12px',
    lg: '16px',
    xl: '24px',
    '2xl': '40px',
    '3xl': '64px'
  },
  brightness: {
    ...qe(200, '', 100, 0, 50),
    ...qe(110, '', 100, 90, 5),
    75: '0.75',
    125: '1.25'
  },
  borderColor: ({ theme: e }) => ({
    DEFAULT: e('colors.gray.200', 'currentColor'),
    ...e('colors')
  }),
  borderOpacity: q('opacity'),
  borderRadius: {
    none: '0px',
    sm: '0.125rem',
    DEFAULT: '0.25rem',
    md: '0.375rem',
    lg: '0.5rem',
    xl: '0.75rem',
    '2xl': '1rem',
    '3xl': '1.5rem',
    '1/2': '50%',
    full: '9999px'
  },
  borderSpacing: q('spacing'),
  borderWidth: { DEFAULT: '1px', ...rt(8, 'px') },
  boxShadow: {
    sm: '0 1px 2px 0 rgba(0,0,0,0.05)',
    DEFAULT: '0 1px 3px 0 rgba(0,0,0,0.1), 0 1px 2px -1px rgba(0,0,0,0.1)',
    md: '0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -2px rgba(0,0,0,0.1)',
    lg: '0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -4px rgba(0,0,0,0.1)',
    xl: '0 20px 25px -5px rgba(0,0,0,0.1), 0 8px 10px -6px rgba(0,0,0,0.1)',
    '2xl': '0 25px 50px -12px rgba(0,0,0,0.25)',
    inner: 'inset 0 2px 4px 0 rgba(0,0,0,0.05)',
    none: '0 0 #0000'
  },
  boxShadowColor: q('colors'),
  caretColor: q('colors'),
  accentColor: ({ theme: e }) => ({ auto: 'auto', ...e('colors') }),
  contrast: { ...qe(200, '', 100, 0, 50), 75: '0.75', 125: '1.25' },
  content: { none: 'none' },
  divideColor: q('borderColor'),
  divideOpacity: q('borderOpacity'),
  divideWidth: q('borderWidth'),
  dropShadow: {
    sm: '0 1px 1px rgba(0,0,0,0.05)',
    DEFAULT: ['0 1px 2px rgba(0,0,0,0.1)', '0 1px 1px rgba(0,0,0,0.06)'],
    md: ['0 4px 3px rgba(0,0,0,0.07)', '0 2px 2px rgba(0,0,0,0.06)'],
    lg: ['0 10px 8px rgba(0,0,0,0.04)', '0 4px 3px rgba(0,0,0,0.1)'],
    xl: ['0 20px 13px rgba(0,0,0,0.03)', '0 8px 5px rgba(0,0,0,0.08)'],
    '2xl': '0 25px 25px rgba(0,0,0,0.15)',
    none: '0 0 #0000'
  },
  fill: ({ theme: e }) => ({ ...e('colors'), none: 'none' }),
  grayscale: { DEFAULT: '100%', 0: '0' },
  hueRotate: {
    0: '0deg',
    15: '15deg',
    30: '30deg',
    60: '60deg',
    90: '90deg',
    180: '180deg'
  },
  invert: { DEFAULT: '100%', 0: '0' },
  flex: { 1: '1 1 0%', auto: '1 1 auto', initial: '0 1 auto', none: 'none' },
  flexBasis: ({ theme: e }) => ({
    ...e('spacing'),
    ...to(2, 6),
    ...to(12, 12),
    auto: 'auto',
    full: '100%'
  }),
  flexGrow: { DEFAULT: 1, 0: 0 },
  flexShrink: { DEFAULT: 1, 0: 0 },
  fontFamily: {
    sans: 'ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"'.split(
      ','
    ),
    serif: 'ui-serif,Georgia,Cambria,"Times New Roman",Times,serif'.split(','),
    mono: 'ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace'.split(
      ','
    )
  },
  fontSize: {
    xs: ['0.75rem', '1rem'],
    sm: ['0.875rem', '1.25rem'],
    base: ['1rem', '1.5rem'],
    lg: ['1.125rem', '1.75rem'],
    xl: ['1.25rem', '1.75rem'],
    '2xl': ['1.5rem', '2rem'],
    '3xl': ['1.875rem', '2.25rem'],
    '4xl': ['2.25rem', '2.5rem'],
    '5xl': ['3rem', '1'],
    '6xl': ['3.75rem', '1'],
    '7xl': ['4.5rem', '1'],
    '8xl': ['6rem', '1'],
    '9xl': ['8rem', '1']
  },
  fontWeight: {
    thin: '100',
    extralight: '200',
    light: '300',
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
    extrabold: '800',
    black: '900'
  },
  gap: q('spacing'),
  gradientColorStops: q('colors'),
  gridAutoColumns: {
    auto: 'auto',
    min: 'min-content',
    max: 'max-content',
    fr: 'minmax(0,1fr)'
  },
  gridAutoRows: {
    auto: 'auto',
    min: 'min-content',
    max: 'max-content',
    fr: 'minmax(0,1fr)'
  },
  gridColumn: { auto: 'auto', 'span-full': '1 / -1' },
  gridRow: { auto: 'auto', 'span-full': '1 / -1' },
  gridTemplateColumns: { none: 'none' },
  gridTemplateRows: { none: 'none' },
  height: ({ theme: e }) => ({
    ...e('spacing'),
    ...to(2, 6),
    min: 'min-content',
    max: 'max-content',
    fit: 'fit-content',
    auto: 'auto',
    full: '100%',
    screen: '100vh'
  }),
  inset: ({ theme: e }) => ({
    ...e('spacing'),
    ...to(2, 4),
    auto: 'auto',
    full: '100%'
  }),
  keyframes: {
    spin: {
      from: { transform: 'rotate(0deg)' },
      to: { transform: 'rotate(360deg)' }
    },
    ping: {
      '0%': { transform: 'scale(1)', opacity: '1' },
      '75%,100%': { transform: 'scale(2)', opacity: '0' }
    },
    pulse: { '0%,100%': { opacity: '1' }, '50%': { opacity: '.5' } },
    bounce: {
      '0%, 100%': {
        transform: 'translateY(-25%)',
        animationTimingFunction: 'cubic-bezier(0.8,0,1,1)'
      },
      '50%': {
        transform: 'none',
        animationTimingFunction: 'cubic-bezier(0,0,0.2,1)'
      }
    }
  },
  letterSpacing: {
    tighter: '-0.05em',
    tight: '-0.025em',
    normal: '0em',
    wide: '0.025em',
    wider: '0.05em',
    widest: '0.1em'
  },
  lineHeight: {
    ...qe(10, 'rem', 4, 3),
    none: '1',
    tight: '1.25',
    snug: '1.375',
    normal: '1.5',
    relaxed: '1.625',
    loose: '2'
  },
  margin: ({ theme: e }) => ({ auto: 'auto', ...e('spacing') }),
  maxHeight: ({ theme: e }) => ({
    full: '100%',
    min: 'min-content',
    max: 'max-content',
    fit: 'fit-content',
    screen: '100vh',
    ...e('spacing')
  }),
  maxWidth: ({ theme: e, breakpoints: t }) => ({
    ...t(e('screens')),
    none: 'none',
    0: '0rem',
    xs: '20rem',
    sm: '24rem',
    md: '28rem',
    lg: '32rem',
    xl: '36rem',
    '2xl': '42rem',
    '3xl': '48rem',
    '4xl': '56rem',
    '5xl': '64rem',
    '6xl': '72rem',
    '7xl': '80rem',
    full: '100%',
    min: 'min-content',
    max: 'max-content',
    fit: 'fit-content',
    prose: '65ch'
  }),
  minHeight: {
    0: '0px',
    full: '100%',
    min: 'min-content',
    max: 'max-content',
    fit: 'fit-content',
    screen: '100vh'
  },
  minWidth: {
    0: '0px',
    full: '100%',
    min: 'min-content',
    max: 'max-content',
    fit: 'fit-content'
  },
  opacity: {
    ...qe(100, '', 100, 0, 10),
    5: '0.05',
    25: '0.25',
    75: '0.75',
    95: '0.95'
  },
  order: { first: '-9999', last: '9999', none: '0' },
  padding: q('spacing'),
  placeholderColor: q('colors'),
  placeholderOpacity: q('opacity'),
  outlineColor: q('colors'),
  outlineOffset: rt(8, 'px'),
  outlineWidth: rt(8, 'px'),
  ringColor: ({ theme: e }) => ({ ...e('colors'), DEFAULT: '#3b82f6' }),
  ringOffsetColor: q('colors'),
  ringOffsetWidth: rt(8, 'px'),
  ringOpacity: ({ theme: e }) => ({ ...e('opacity'), DEFAULT: '0.5' }),
  ringWidth: { DEFAULT: '3px', ...rt(8, 'px') },
  rotate: { ...rt(2, 'deg'), ...rt(12, 'deg', 3), ...rt(180, 'deg', 45) },
  saturate: qe(200, '', 100, 0, 50),
  scale: {
    ...qe(150, '', 100, 0, 50),
    ...qe(110, '', 100, 90, 5),
    75: '0.75',
    125: '1.25'
  },
  scrollMargin: q('spacing'),
  scrollPadding: q('spacing'),
  sepia: { 0: '0', DEFAULT: '100%' },
  skew: { ...rt(2, 'deg'), ...rt(12, 'deg', 3) },
  space: q('spacing'),
  stroke: ({ theme: e }) => ({ ...e('colors'), none: 'none' }),
  strokeWidth: qe(2),
  textColor: q('colors'),
  textDecorationColor: q('colors'),
  textDecorationThickness: {
    'from-font': 'from-font',
    auto: 'auto',
    ...rt(8, 'px')
  },
  textUnderlineOffset: { auto: 'auto', ...rt(8, 'px') },
  textIndent: q('spacing'),
  textOpacity: q('opacity'),
  transitionDuration: ({ theme: e }) => ({
    ...e('durations'),
    DEFAULT: '150ms'
  }),
  transitionDelay: q('durations'),
  transitionProperty: {
    none: 'none',
    all: 'all',
    DEFAULT:
      'color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter',
    colors:
      'color,background-color,border-color,text-decoration-color,fill,stroke',
    opacity: 'opacity',
    shadow: 'box-shadow',
    transform: 'transform'
  },
  transitionTimingFunction: {
    DEFAULT: 'cubic-bezier(0.4,0,0.2,1)',
    linear: 'linear',
    in: 'cubic-bezier(0.4,0,1,1)',
    out: 'cubic-bezier(0,0,0.2,1)',
    'in-out': 'cubic-bezier(0.4,0,0.2,1)'
  },
  translate: ({ theme: e }) => ({ ...e('spacing'), ...to(2, 4), full: '100%' }),
  width: ({ theme: e }) => ({
    min: 'min-content',
    max: 'max-content',
    fit: 'fit-content',
    screen: '100vw',
    ...e('flexBasis')
  }),
  willChange: { scroll: 'scroll-position' },
  zIndex: { ...qe(50, '', 1, 0, 10), auto: 'auto' }
};
function to(e, t) {
  let n = {};
  do
    for (var r = 1; r < e; r++)
      n[`${r}/${e}`] = Number(((r / e) * 100).toFixed(6)) + '%';
  while (++e <= t);
  return n;
}
function rt(e, t, n = 0) {
  let r = {};
  for (; n <= e; n = 2 * n || 1) r[n] = n + t;
  return r;
}
function qe(e, t = '', n = 1, r = 0, o = 1, i = {}) {
  for (; r <= e; r += o) i[r] = r / n + t;
  return i;
}
function q(e) {
  return ({ theme: t }) => t(e);
}
let A3 = {
    '*,::before,::after': {
      boxSizing: 'border-box',
      borderWidth: '0',
      borderStyle: 'solid',
      borderColor: 'theme(borderColor.DEFAULT, currentColor)'
    },
    '::before,::after': { '--tw-content': "''" },
    html: {
      lineHeight: 1.5,
      WebkitTextSizeAdjust: '100%',
      MozTabSize: '4',
      tabSize: 4,
      fontFamily: `theme(fontFamily.sans, ${Bu.fontFamily.sans})`,
      fontFeatureSettings:
        'theme(fontFamily.sans[1].fontFeatureSettings, normal)'
    },
    body: { margin: '0', lineHeight: 'inherit' },
    hr: { height: '0', color: 'inherit', borderTopWidth: '1px' },
    'abbr:where([title])': { textDecoration: 'underline dotted' },
    'h1,h2,h3,h4,h5,h6': { fontSize: 'inherit', fontWeight: 'inherit' },
    a: { color: 'inherit', textDecoration: 'inherit' },
    'b,strong': { fontWeight: 'bolder' },
    'code,kbd,samp,pre': {
      fontFamily: `theme(fontFamily.mono, ${Bu.fontFamily.mono})`,
      fontFeatureSettings:
        'theme(fontFamily.mono[1].fontFeatureSettings, normal)',
      fontSize: '1em'
    },
    small: { fontSize: '80%' },
    'sub,sup': {
      fontSize: '75%',
      lineHeight: 0,
      position: 'relative',
      verticalAlign: 'baseline'
    },
    sub: { bottom: '-0.25em' },
    sup: { top: '-0.5em' },
    table: {
      textIndent: '0',
      borderColor: 'inherit',
      borderCollapse: 'collapse'
    },
    'button,input,optgroup,select,textarea': {
      fontFamily: 'inherit',
      fontSize: '100%',
      lineHeight: 'inherit',
      color: 'inherit',
      margin: '0',
      padding: '0'
    },
    'button,select': { textTransform: 'none' },
    "button,[type='button'],[type='reset'],[type='submit']": {
      WebkitAppearance: 'button',
      backgroundColor: 'transparent',
      backgroundImage: 'none'
    },
    ':-moz-focusring': { outline: 'auto' },
    ':-moz-ui-invalid': { boxShadow: 'none' },
    progress: { verticalAlign: 'baseline' },
    '::-webkit-inner-spin-button,::-webkit-outer-spin-button': {
      height: 'auto'
    },
    "[type='search']": { WebkitAppearance: 'textfield', outlineOffset: '-2px' },
    '::-webkit-search-decoration': { WebkitAppearance: 'none' },
    '::-webkit-file-upload-button': {
      WebkitAppearance: 'button',
      font: 'inherit'
    },
    summary: { display: 'list-item' },
    'blockquote,dl,dd,h1,h2,h3,h4,h5,h6,hr,figure,p,pre': { margin: '0' },
    fieldset: { margin: '0', padding: '0' },
    legend: { padding: '0' },
    'ol,ul,menu': { listStyle: 'none', margin: '0', padding: '0' },
    textarea: { resize: 'vertical' },
    'input::placeholder,textarea::placeholder': {
      opacity: 1,
      color: 'theme(colors.gray.400, #9ca3af)'
    },
    'button,[role="button"]': { cursor: 'pointer' },
    ':disabled': { cursor: 'default' },
    'img,svg,video,canvas,audio,iframe,embed,object': {
      display: 'block',
      verticalAlign: 'middle'
    },
    'img,video': { maxWidth: '100%', height: 'auto' },
    '[hidden]': { display: 'none' }
  },
  D3 = [
    N('\\[([-\\w]+):(.+)]', ({ 1: e, 2: t }, n) => ({
      '@layer overrides': { '&': { [e]: an(`[${t}]`, '', n) } }
    })),
    N('(group|peer)([~/][^-[]+)?', ({ input: e }, { h: t }) => [{ c: t(e) }]),
    I('aspect-', 'aspectRatio'),
    N('container', (e, { theme: t }) => {
      let { screens: n = t('screens'), center: r, padding: o } = t('container'),
        i = {
          width: '100%',
          marginRight: r && 'auto',
          marginLeft: r && 'auto',
          ...s('xs')
        };
      for (let a in n) {
        let l = n[a];
        typeof l == 'string' && (i[Ef(l)] = { '&': { maxWidth: l, ...s(a) } });
      }
      return i;
      function s(a) {
        let l = o && (typeof o == 'string' ? o : o[a] || o.DEFAULT);
        if (l) return { paddingRight: l, paddingLeft: l };
      }
    }),
    I('content-', 'content', ({ _: e }) => ({
      '--tw-content': e,
      content: 'var(--tw-content)'
    })),
    N('(?:box-)?decoration-(slice|clone)', 'boxDecorationBreak'),
    N('box-(border|content)', 'boxSizing', ({ 1: e }) => e + '-box'),
    N('hidden', { display: 'none' }),
    N('table-(auto|fixed)', 'tableLayout'),
    N(
      [
        '(block|flex|table|grid|inline|contents|flow-root|list-item)',
        '(inline-(block|flex|table|grid))',
        '(table-(caption|cell|column|row|(column|row|footer|header)-group))'
      ],
      'display'
    ),
    '(float)-(left|right|none)',
    '(clear)-(left|right|none|both)',
    '(overflow(?:-[xy])?)-(auto|hidden|clip|visible|scroll)',
    '(isolation)-(auto)',
    N('isolate', 'isolation'),
    N('object-(contain|cover|fill|none|scale-down)', 'objectFit'),
    I('object-', 'objectPosition'),
    N(
      'object-(top|bottom|center|(left|right)(-(top|bottom))?)',
      'objectPosition',
      Ai
    ),
    N('overscroll(-[xy])?-(auto|contain|none)', ({ 1: e = '', 2: t }) => ({
      ['overscroll-behavior' + e]: t
    })),
    N('(static|fixed|absolute|relative|sticky)', 'position'),
    I('-?inset(-[xy])?(?:$|-)', 'inset', ({ 1: e, _: t }) => ({
      top: e != '-x' && t,
      right: e != '-y' && t,
      bottom: e != '-x' && t,
      left: e != '-y' && t
    })),
    I('-?(top|bottom|left|right)(?:$|-)', 'inset'),
    N('(visible|collapse)', 'visibility'),
    N('invisible', { visibility: 'hidden' }),
    I('-?z-', 'zIndex'),
    N('flex-((row|col)(-reverse)?)', 'flexDirection', jp),
    N('flex-(wrap|wrap-reverse|nowrap)', 'flexWrap'),
    I('(flex-(?:grow|shrink))(?:$|-)'),
    I('(flex)-'),
    I('grow(?:$|-)', 'flexGrow'),
    I('shrink(?:$|-)', 'flexShrink'),
    I('basis-', 'flexBasis'),
    I('-?(order)-'),
    '-?(order)-(\\d+)',
    I('grid-cols-', 'gridTemplateColumns'),
    N('grid-cols-(\\d+)', 'gridTemplateColumns', Wp),
    I('col-', 'gridColumn'),
    N('col-(span)-(\\d+)', 'gridColumn', Kp),
    I('col-start-', 'gridColumnStart'),
    N('col-start-(auto|\\d+)', 'gridColumnStart'),
    I('col-end-', 'gridColumnEnd'),
    N('col-end-(auto|\\d+)', 'gridColumnEnd'),
    I('grid-rows-', 'gridTemplateRows'),
    N('grid-rows-(\\d+)', 'gridTemplateRows', Wp),
    I('row-', 'gridRow'),
    N('row-(span)-(\\d+)', 'gridRow', Kp),
    I('row-start-', 'gridRowStart'),
    N('row-start-(auto|\\d+)', 'gridRowStart'),
    I('row-end-', 'gridRowEnd'),
    N('row-end-(auto|\\d+)', 'gridRowEnd'),
    N('grid-flow-((row|col)(-dense)?)', 'gridAutoFlow', (e) => Ai(jp(e))),
    N('grid-flow-(dense)', 'gridAutoFlow'),
    I('auto-cols-', 'gridAutoColumns'),
    I('auto-rows-', 'gridAutoRows'),
    I('gap-x(?:$|-)', 'gap', 'columnGap'),
    I('gap-y(?:$|-)', 'gap', 'rowGap'),
    I('gap(?:$|-)', 'gap'),
    '(justify-(?:items|self))-',
    N('justify-', 'justifyContent', Bp),
    N('(content|items|self)-', (e) => ({ ['align-' + e[1]]: Bp(e) })),
    N('(place-(content|items|self))-', ({ 1: e, $$: t }) => ({
      [e]: ('wun'.includes(t[3]) ? 'space-' : '') + t
    })),
    I('p([xytrbl])?(?:$|-)', 'padding', nr('padding')),
    I('-?m([xytrbl])?(?:$|-)', 'margin', nr('margin')),
    I('-?space-(x|y)(?:$|-)', 'space', ({ 1: e, _: t }) => ({
      '&>:not([hidden])~:not([hidden])': {
        [`--tw-space-${e}-reverse`]: '0',
        ['margin-' + { y: 'top', x: 'left' }[e]]:
          `calc(${t} * calc(1 - var(--tw-space-${e}-reverse)))`,
        ['margin-' + { y: 'bottom', x: 'right' }[e]]:
          `calc(${t} * var(--tw-space-${e}-reverse))`
      }
    })),
    N('space-(x|y)-reverse', ({ 1: e }) => ({
      '&>:not([hidden])~:not([hidden])': { [`--tw-space-${e}-reverse`]: '1' }
    })),
    I('w-', 'width'),
    I('min-w-', 'minWidth'),
    I('max-w-', 'maxWidth'),
    I('h-', 'height'),
    I('min-h-', 'minHeight'),
    I('max-h-', 'maxHeight'),
    I('font-', 'fontWeight'),
    I('font-', 'fontFamily', ({ _: e }) =>
      typeof (e = se(e))[1] == 'string'
        ? { fontFamily: dt(e) }
        : { fontFamily: dt(e[0]), ...e[1] }
    ),
    N('antialiased', {
      WebkitFontSmoothing: 'antialiased',
      MozOsxFontSmoothing: 'grayscale'
    }),
    N('subpixel-antialiased', {
      WebkitFontSmoothing: 'auto',
      MozOsxFontSmoothing: 'auto'
    }),
    N('italic', 'fontStyle'),
    N('not-italic', { fontStyle: 'normal' }),
    N(
      '(ordinal|slashed-zero|(normal|lining|oldstyle|proportional|tabular)-nums|(diagonal|stacked)-fractions)',
      ({ 1: e, 2: t = '', 3: n }) =>
        t == 'normal'
          ? { fontVariantNumeric: 'normal' }
          : {
              ['--tw-' +
              (n
                ? 'numeric-fraction'
                : 'pt'.includes(t[0])
                  ? 'numeric-spacing'
                  : t
                    ? 'numeric-figure'
                    : e)]: e,
              fontVariantNumeric:
                'var(--tw-ordinal) var(--tw-slashed-zero) var(--tw-numeric-figure) var(--tw-numeric-spacing) var(--tw-numeric-fraction)',
              '@layer defaults': {
                '*,::before,::after,::backdrop': {
                  '--tw-ordinal': 'var(--tw-empty,/*!*/ /*!*/)',
                  '--tw-slashed-zero': 'var(--tw-empty,/*!*/ /*!*/)',
                  '--tw-numeric-figure': 'var(--tw-empty,/*!*/ /*!*/)',
                  '--tw-numeric-spacing': 'var(--tw-empty,/*!*/ /*!*/)',
                  '--tw-numeric-fraction': 'var(--tw-empty,/*!*/ /*!*/)'
                }
              }
            }
    ),
    I('tracking-', 'letterSpacing'),
    I('leading-', 'lineHeight'),
    N('list-(inside|outside)', 'listStylePosition'),
    I('list-', 'listStyleType'),
    N('list-', 'listStyleType'),
    I('placeholder-opacity-', 'placeholderOpacity', ({ _: e }) => ({
      '&::placeholder': { '--tw-placeholder-opacity': e }
    })),
    Ce('placeholder-', { property: 'color', selector: '&::placeholder' }),
    N('text-(left|center|right|justify|start|end)', 'textAlign'),
    N('text-(ellipsis|clip)', 'textOverflow'),
    I('text-opacity-', 'textOpacity', '--tw-text-opacity'),
    Ce('text-', { property: 'color' }),
    I('text-', 'fontSize', ({ _: e }) =>
      typeof e == 'string'
        ? { fontSize: e }
        : {
            fontSize: e[0],
            ...(typeof e[1] == 'string' ? { lineHeight: e[1] } : e[1])
          }
    ),
    I('indent-', 'textIndent'),
    N('(overline|underline|line-through)', 'textDecorationLine'),
    N('no-underline', { textDecorationLine: 'none' }),
    I('underline-offset-', 'textUnderlineOffset'),
    Ce('decoration-', {
      section: 'textDecorationColor',
      opacityVariable: !1,
      opacitySection: 'opacity'
    }),
    I('decoration-', 'textDecorationThickness'),
    N('decoration-', 'textDecorationStyle'),
    N('(uppercase|lowercase|capitalize)', 'textTransform'),
    N('normal-case', { textTransform: 'none' }),
    N('truncate', {
      overflow: 'hidden',
      whiteSpace: 'nowrap',
      textOverflow: 'ellipsis'
    }),
    N('align-', 'verticalAlign'),
    N('whitespace-', 'whiteSpace'),
    N('break-normal', { wordBreak: 'normal', overflowWrap: 'normal' }),
    N('break-words', { overflowWrap: 'break-word' }),
    N('break-all', { wordBreak: 'break-all' }),
    N('break-keep', { wordBreak: 'keep-all' }),
    Ce('caret-', { opacityVariable: !1, opacitySection: 'opacity' }),
    Ce('accent-', { opacityVariable: !1, opacitySection: 'opacity' }),
    N(
      'bg-gradient-to-([trbl]|[tb][rl])',
      'backgroundImage',
      ({ 1: e }) => `linear-gradient(to ${An(e, ' ')},var(--tw-gradient-stops))`
    ),
    Ce(
      'from-',
      {
        section: 'gradientColorStops',
        opacityVariable: !1,
        opacitySection: 'opacity'
      },
      ({ _: e }) => ({
        '--tw-gradient-from': e.value,
        '--tw-gradient-to': e.color({ opacityValue: '0' }),
        '--tw-gradient-stops': 'var(--tw-gradient-from),var(--tw-gradient-to)'
      })
    ),
    Ce(
      'via-',
      {
        section: 'gradientColorStops',
        opacityVariable: !1,
        opacitySection: 'opacity'
      },
      ({ _: e }) => ({
        '--tw-gradient-to': e.color({ opacityValue: '0' }),
        '--tw-gradient-stops': `var(--tw-gradient-from),${e.value},var(--tw-gradient-to)`
      })
    ),
    Ce('to-', {
      section: 'gradientColorStops',
      property: '--tw-gradient-to',
      opacityVariable: !1,
      opacitySection: 'opacity'
    }),
    N('bg-(fixed|local|scroll)', 'backgroundAttachment'),
    N(
      'bg-origin-(border|padding|content)',
      'backgroundOrigin',
      ({ 1: e }) => e + '-box'
    ),
    N(
      ['bg-(no-repeat|repeat(-[xy])?)', 'bg-repeat-(round|space)'],
      'backgroundRepeat'
    ),
    N('bg-blend-', 'backgroundBlendMode'),
    N(
      'bg-clip-(border|padding|content|text)',
      'backgroundClip',
      ({ 1: e }) => e + (e == 'text' ? '' : '-box')
    ),
    I('bg-opacity-', 'backgroundOpacity', '--tw-bg-opacity'),
    Ce('bg-', { section: 'backgroundColor' }),
    I('bg-', 'backgroundImage'),
    I('bg-', 'backgroundPosition'),
    N(
      'bg-(top|bottom|center|(left|right)(-(top|bottom))?)',
      'backgroundPosition',
      Ai
    ),
    I('bg-', 'backgroundSize'),
    I('rounded(?:$|-)', 'borderRadius'),
    I('rounded-([trbl]|[tb][rl])(?:$|-)', 'borderRadius', ({ 1: e, _: t }) => {
      let n = {
        t: ['tl', 'tr'],
        r: ['tr', 'br'],
        b: ['bl', 'br'],
        l: ['bl', 'tl']
      }[e] || [e, e];
      return {
        [`border-${An(n[0])}-radius`]: t,
        [`border-${An(n[1])}-radius`]: t
      };
    }),
    N('border-(collapse|separate)', 'borderCollapse'),
    I('border-opacity(?:$|-)', 'borderOpacity', '--tw-border-opacity'),
    N('border-(solid|dashed|dotted|double|none)', 'borderStyle'),
    I('border-spacing(-[xy])?(?:$|-)', 'borderSpacing', ({ 1: e, _: t }) => ({
      '@layer defaults': {
        '*,::before,::after,::backdrop': {
          '--tw-border-spacing-x': 0,
          '--tw-border-spacing-y': 0
        }
      },
      ['--tw-border-spacing' + (e || '-x')]: t,
      ['--tw-border-spacing' + (e || '-y')]: t,
      'border-spacing': 'var(--tw-border-spacing-x) var(--tw-border-spacing-y)'
    })),
    Ce('border-([xytrbl])-', { section: 'borderColor' }, nr('border', 'Color')),
    Ce('border-'),
    I('border-([xytrbl])(?:$|-)', 'borderWidth', nr('border', 'Width')),
    I('border(?:$|-)', 'borderWidth'),
    I('divide-opacity(?:$|-)', 'divideOpacity', ({ _: e }) => ({
      '&>:not([hidden])~:not([hidden])': { '--tw-divide-opacity': e }
    })),
    N('divide-(solid|dashed|dotted|double|none)', ({ 1: e }) => ({
      '&>:not([hidden])~:not([hidden])': { borderStyle: e }
    })),
    N('divide-([xy]-reverse)', ({ 1: e }) => ({
      '&>:not([hidden])~:not([hidden])': { ['--tw-divide-' + e]: '1' }
    })),
    I('divide-([xy])(?:$|-)', 'divideWidth', ({ 1: e, _: t }) => {
      let n = { x: 'lr', y: 'tb' }[e];
      return {
        '&>:not([hidden])~:not([hidden])': {
          [`--tw-divide-${e}-reverse`]: '0',
          [`border-${An(n[0])}Width`]: `calc(${t} * calc(1 - var(--tw-divide-${e}-reverse)))`,
          [`border-${An(n[1])}Width`]: `calc(${t} * var(--tw-divide-${e}-reverse))`
        }
      };
    }),
    Ce('divide-', {
      property: 'borderColor',
      selector: '&>:not([hidden])~:not([hidden])'
    }),
    I('ring-opacity(?:$|-)', 'ringOpacity', '--tw-ring-opacity'),
    Ce('ring-offset-', {
      property: '--tw-ring-offset-color',
      opacityVariable: !1
    }),
    I('ring-offset(?:$|-)', 'ringOffsetWidth', '--tw-ring-offset-width'),
    N('ring-inset', { '--tw-ring-inset': 'inset' }),
    Ce('ring-', { property: '--tw-ring-color' }),
    I('ring(?:$|-)', 'ringWidth', ({ _: e }, { theme: t }) => ({
      '--tw-ring-offset-shadow':
        'var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)',
      '--tw-ring-shadow': `var(--tw-ring-inset) 0 0 0 calc(${e} + var(--tw-ring-offset-width)) var(--tw-ring-color)`,
      boxShadow:
        'var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)',
      '@layer defaults': {
        '*,::before,::after,::backdrop': {
          '--tw-ring-offset-shadow': '0 0 #0000',
          '--tw-ring-shadow': '0 0 #0000',
          '--tw-shadow': '0 0 #0000',
          '--tw-shadow-colored': '0 0 #0000',
          '&': {
            '--tw-ring-inset': 'var(--tw-empty,/*!*/ /*!*/)',
            '--tw-ring-offset-width': t('ringOffsetWidth', '', '0px'),
            '--tw-ring-offset-color': sn(t('ringOffsetColor', '', '#fff')),
            '--tw-ring-color': sn(t('ringColor', '', '#93c5fd'), {
              opacityVariable: '--tw-ring-opacity'
            }),
            '--tw-ring-opacity': t('ringOpacity', '', '0.5')
          }
        }
      }
    })),
    Ce(
      'shadow-',
      {
        section: 'boxShadowColor',
        opacityVariable: !1,
        opacitySection: 'opacity'
      },
      ({ _: e }) => ({
        '--tw-shadow-color': e.value,
        '--tw-shadow': 'var(--tw-shadow-colored)'
      })
    ),
    I('shadow(?:$|-)', 'boxShadow', ({ _: e }) => ({
      '--tw-shadow': dt(e),
      '--tw-shadow-colored': dt(e).replace(
        /([^,]\s+)(?:#[a-f\d]+|(?:(?:hsl|rgb)a?|hwb|lab|lch|color|var)\(.+?\)|[a-z]+)(,|$)/g,
        '$1var(--tw-shadow-color)$2'
      ),
      boxShadow:
        'var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)',
      '@layer defaults': {
        '*,::before,::after,::backdrop': {
          '--tw-ring-offset-shadow': '0 0 #0000',
          '--tw-ring-shadow': '0 0 #0000',
          '--tw-shadow': '0 0 #0000',
          '--tw-shadow-colored': '0 0 #0000'
        }
      }
    })),
    I('(opacity)-'),
    N('mix-blend-', 'mixBlendMode'),
    ...Up(),
    ...Up('backdrop-'),
    I('transition(?:$|-)', 'transitionProperty', (e, { theme: t }) => ({
      transitionProperty: dt(e),
      transitionTimingFunction:
        e._ == 'none' ? void 0 : dt(t('transitionTimingFunction', '')),
      transitionDuration:
        e._ == 'none' ? void 0 : dt(t('transitionDuration', ''))
    })),
    I('duration(?:$|-)', 'transitionDuration', 'transitionDuration', dt),
    I(
      'ease(?:$|-)',
      'transitionTimingFunction',
      'transitionTimingFunction',
      dt
    ),
    I('delay(?:$|-)', 'transitionDelay', 'transitionDelay', dt),
    I('animate(?:$|-)', 'animation', (e, { theme: t, h: n, e: r }) => {
      let o = dt(e),
        i = o.split(' '),
        s = t('keyframes', i[0]);
      return s
        ? { ['@keyframes ' + (i[0] = r(n(i[0])))]: s, animation: i.join(' ') }
        : { animation: o };
    }),
    '(transform)-(none)',
    N('transform', Uu),
    N('transform-(cpu|gpu)', ({ 1: e }) => ({
      '--tw-transform': W1(e == 'gpu')
    })),
    I('scale(-[xy])?-', 'scale', ({ 1: e, _: t }) => ({
      ['--tw-scale' + (e || '-x')]: t,
      ['--tw-scale' + (e || '-y')]: t,
      ...Uu()
    })),
    I('-?(rotate)-', 'rotate', vl),
    I('-?(translate-[xy])-', 'translate', vl),
    I('-?(skew-[xy])-', 'skew', vl),
    N(
      'origin-(center|((top|bottom)(-(left|right))?)|left|right)',
      'transformOrigin',
      Ai
    ),
    '(appearance)-',
    I('(columns)-'),
    '(columns)-(\\d+)',
    '(break-(?:before|after|inside))-',
    I('(cursor)-'),
    '(cursor)-',
    N('snap-(none)', 'scroll-snap-type'),
    N('snap-(x|y|both)', ({ 1: e }) => ({
      'scroll-snap-type': e + ' var(--tw-scroll-snap-strictness)',
      '@layer defaults': {
        '*,::before,::after,::backdrop': {
          '--tw-scroll-snap-strictness': 'proximity'
        }
      }
    })),
    N('snap-(mandatory|proximity)', '--tw-scroll-snap-strictness'),
    N('snap-(?:(start|end|center)|align-(none))', 'scroll-snap-align'),
    N('snap-(normal|always)', 'scroll-snap-stop'),
    N('scroll-(auto|smooth)', 'scroll-behavior'),
    I('scroll-p([xytrbl])?(?:$|-)', 'padding', nr('scroll-padding')),
    I('-?scroll-m([xytrbl])?(?:$|-)', 'scroll-margin', nr('scroll-margin')),
    N('touch-(auto|none|manipulation)', 'touch-action'),
    N(
      'touch-(pinch-zoom|pan-(?:(x|left|right)|(y|up|down)))',
      ({ 1: e, 2: t, 3: n }) => ({
        [`--tw-${t ? 'pan-x' : n ? 'pan-y' : e}`]: e,
        'touch-action': 'var(--tw-touch-action)',
        '@layer defaults': {
          '*,::before,::after,::backdrop': {
            '--tw-pan-x': 'var(--tw-empty,/*!*/ /*!*/)',
            '--tw-pan-y': 'var(--tw-empty,/*!*/ /*!*/)',
            '--tw-pinch-zoom': 'var(--tw-empty,/*!*/ /*!*/)',
            '--tw-touch-action':
              'var(--tw-pan-x) var(--tw-pan-y) var(--tw-pinch-zoom)'
          }
        }
      })
    ),
    N('outline-none', {
      outline: '2px solid transparent',
      'outline-offset': '2px'
    }),
    N('outline', { outlineStyle: 'solid' }),
    N('outline-(dashed|dotted|double)', 'outlineStyle'),
    I('-?(outline-offset)-'),
    Ce('outline-', { opacityVariable: !1, opacitySection: 'opacity' }),
    I('outline-', 'outlineWidth'),
    '(pointer-events)-',
    I('(will-change)-'),
    '(will-change)-',
    [
      'resize(?:-(none|x|y))?',
      'resize',
      ({ 1: e }) => ({ x: 'horizontal', y: 'vertical' })[e] || e || 'both'
    ],
    N('select-(none|text|all|auto)', 'userSelect'),
    Ce('fill-', {
      section: 'fill',
      opacityVariable: !1,
      opacitySection: 'opacity'
    }),
    Ce('stroke-', {
      section: 'stroke',
      opacityVariable: !1,
      opacitySection: 'opacity'
    }),
    I('stroke-', 'strokeWidth'),
    N('sr-only', {
      position: 'absolute',
      width: '1px',
      height: '1px',
      padding: '0',
      margin: '-1px',
      overflow: 'hidden',
      whiteSpace: 'nowrap',
      clip: 'rect(0,0,0,0)',
      borderWidth: '0'
    }),
    N('not-sr-only', {
      position: 'static',
      width: 'auto',
      height: 'auto',
      padding: '0',
      margin: '0',
      overflow: 'visible',
      whiteSpace: 'normal',
      clip: 'auto'
    })
  ];
function Ai(e) {
  return (typeof e == 'string' ? e : e[1]).replace(/-/g, ' ').trim();
}
function jp(e) {
  return (typeof e == 'string' ? e : e[1]).replace('col', 'column');
}
function An(e, t = '-') {
  let n = [];
  for (let r of e) n.push({ t: 'top', r: 'right', b: 'bottom', l: 'left' }[r]);
  return n.join(t);
}
function dt(e) {
  return e && '' + (e._ || e);
}
function Bp({ $$: e }) {
  return (
    ({ r: 'flex-', '': 'flex-', w: 'space-', u: 'space-', n: 'space-' }[
      e[3] || ''
    ] || '') + e
  );
}
function nr(e, t = '') {
  return ({ 1: n, _: r }) => {
    let o = { x: 'lr', y: 'tb' }[n] || n + n;
    return o
      ? { ...os(e + '-' + An(o[0]) + t, r), ...os(e + '-' + An(o[1]) + t, r) }
      : os(e + t, r);
  };
}
function Up(e = '') {
  let t = [
      'blur',
      'brightness',
      'contrast',
      'grayscale',
      'hue-rotate',
      'invert',
      e && 'opacity',
      'saturate',
      'sepia',
      !e && 'drop-shadow'
    ].filter(Boolean),
    n = {};
  for (let r of t) n[`--tw-${e}${r}`] = 'var(--tw-empty,/*!*/ /*!*/)';
  return (
    (n = {
      [`${e}filter`]: t.map((r) => `var(--tw-${e}${r})`).join(' '),
      '@layer defaults': { '*,::before,::after,::backdrop': n }
    }),
    [
      `(${e}filter)-(none)`,
      N(`${e}filter`, n),
      ...t.map((r) =>
        I(
          `${r[0] == 'h' ? '-?' : ''}(${e}${r})(?:$|-)`,
          r,
          ({ 1: o, _: i }) => ({
            [`--tw-${o}`]: se(i)
              .map((s) => `${r}(${s})`)
              .join(' '),
            ...n
          })
        )
      )
    ]
  );
}
function vl({ 1: e, _: t }) {
  return { ['--tw-' + e]: t, ...Uu() };
}
function Uu() {
  return {
    transform: 'var(--tw-transform)',
    '@layer defaults': {
      '*,::before,::after,::backdrop': {
        '--tw-translate-x': '0',
        '--tw-translate-y': '0',
        '--tw-rotate': '0',
        '--tw-skew-x': '0',
        '--tw-skew-y': '0',
        '--tw-scale-x': '1',
        '--tw-scale-y': '1',
        '--tw-transform': W1()
      }
    }
  };
}
function W1(e) {
  return [
    e
      ? 'translate3d(var(--tw-translate-x),var(--tw-translate-y),0)'
      : 'translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y))',
    'rotate(var(--tw-rotate))',
    'skewX(var(--tw-skew-x))',
    'skewY(var(--tw-skew-y))',
    'scaleX(var(--tw-scale-x))',
    'scaleY(var(--tw-scale-y))'
  ].join(' ');
}
function Kp({ 1: e, 2: t }) {
  return `${e} ${t} / ${e} ${t}`;
}
function Wp({ 1: e }) {
  return `repeat(${e},minmax(0,1fr))`;
}
let L3 = [
  ['sticky', '@supports ((position: -webkit-sticky) or (position:sticky))'],
  ['motion-reduce', '@media (prefers-reduced-motion:reduce)'],
  ['motion-safe', '@media (prefers-reduced-motion:no-preference)'],
  ['print', '@media print'],
  ['(portrait|landscape)', ({ 1: e }) => `@media (orientation:${e})`],
  ['contrast-(more|less)', ({ 1: e }) => `@media (prefers-contrast:${e})`],
  [
    '(first-(letter|line)|placeholder|backdrop|before|after)',
    ({ 1: e }) => `&::${e}`
  ],
  ['(marker|selection)', ({ 1: e }) => `& *::${e},&::${e}`],
  ['file', '&::file-selector-button'],
  ['(first|last|only)', ({ 1: e }) => `&:${e}-child`],
  ['even', '&:nth-child(2n)'],
  ['odd', '&:nth-child(odd)'],
  ['open', '&[open]'],
  [
    '(aria|data)-',
    ({ 1: e, $$: t }, n) =>
      t && `&[${e}-${n.theme(e, t) || an(t, '', n) || `${t}="true"`}]`
  ],
  [
    '((group|peer)(~[^-[]+)?)(-\\[(.+)]|[-[].+?)(\\/.+)?',
    ({ 2: e, 3: t = '', 4: n, 5: r = '', 6: o = t }, { e: i, h: s, v: a }) => {
      let l = Go(r) || (n[0] == '[' ? n : a(n.slice(1)));
      return `${(l.includes('&') ? l : '&' + l).replace(/&/g, `:merge(.${i(s(e + o))})`)}${e[0] == 'p' ? '~' : ' '}&`;
    }
  ],
  ['(ltr|rtl)', ({ 1: e }) => `[dir="${e}"] &`],
  [
    'supports-',
    ({ $$: e }, t) => {
      if ((e && (e = t.theme('supports', e) || an(e, '', t)), e))
        return (
          e.includes(':') || (e += ':var(--tw)'),
          /^\w*\s*\(/.test(e) || (e = `(${e})`),
          `@supports ${e.replace(/\b(and|or|not)\b/g, ' $1 ').trim()}`
        );
    }
  ],
  [
    'max-',
    ({ $$: e }, t) => {
      if (
        (e && (e = t.theme('screens', e) || an(e, '', t)), typeof e == 'string')
      )
        return `@media not all and (min-width:${e})`;
    }
  ],
  [
    'min-',
    ({ $$: e }, t) => (e && (e = an(e, '', t)), e && `@media (min-width:${e})`)
  ],
  [
    /^\[(.+)]$/,
    ({ 1: e }) => /[&@]/.test(e) && Go(e).replace(/[}]+$/, '').split('{')
  ]
];
function F3({ colors: e, disablePreflight: t } = {}) {
  return {
    preflight: t ? void 0 : A3,
    theme: {
      ...Bu,
      colors: {
        inherit: 'inherit',
        current: 'currentColor',
        transparent: 'transparent',
        black: '#000',
        white: '#fff',
        ...e
      }
    },
    variants: L3,
    rules: D3,
    finalize(n) {
      return n.n &&
        n.d &&
        n.r.some((r) => /^&::(before|after)$/.test(r)) &&
        !/(^|;)content:/.test(n.d)
        ? { ...n, d: 'content:var(--tw-content);' + n.d }
        : n;
    }
  };
}
let N3 = {
    50: '#f8fafc',
    100: '#f1f5f9',
    200: '#e2e8f0',
    300: '#cbd5e1',
    400: '#94a3b8',
    500: '#64748b',
    600: '#475569',
    700: '#334155',
    800: '#1e293b',
    900: '#0f172a'
  },
  I3 = {
    50: '#f9fafb',
    100: '#f3f4f6',
    200: '#e5e7eb',
    300: '#d1d5db',
    400: '#9ca3af',
    500: '#6b7280',
    600: '#4b5563',
    700: '#374151',
    800: '#1f2937',
    900: '#111827'
  },
  V3 = {
    50: '#fafafa',
    100: '#f4f4f5',
    200: '#e4e4e7',
    300: '#d4d4d8',
    400: '#a1a1aa',
    500: '#71717a',
    600: '#52525b',
    700: '#3f3f46',
    800: '#27272a',
    900: '#18181b'
  },
  z3 = {
    50: '#fafafa',
    100: '#f5f5f5',
    200: '#e5e5e5',
    300: '#d4d4d4',
    400: '#a3a3a3',
    500: '#737373',
    600: '#525252',
    700: '#404040',
    800: '#262626',
    900: '#171717'
  },
  j3 = {
    50: '#fafaf9',
    100: '#f5f5f4',
    200: '#e7e5e4',
    300: '#d6d3d1',
    400: '#a8a29e',
    500: '#78716c',
    600: '#57534e',
    700: '#44403c',
    800: '#292524',
    900: '#1c1917'
  },
  B3 = {
    50: '#fef2f2',
    100: '#fee2e2',
    200: '#fecaca',
    300: '#fca5a5',
    400: '#f87171',
    500: '#ef4444',
    600: '#dc2626',
    700: '#b91c1c',
    800: '#991b1b',
    900: '#7f1d1d'
  },
  U3 = {
    50: '#fff7ed',
    100: '#ffedd5',
    200: '#fed7aa',
    300: '#fdba74',
    400: '#fb923c',
    500: '#f97316',
    600: '#ea580c',
    700: '#c2410c',
    800: '#9a3412',
    900: '#7c2d12'
  },
  K3 = {
    50: '#fffbeb',
    100: '#fef3c7',
    200: '#fde68a',
    300: '#fcd34d',
    400: '#fbbf24',
    500: '#f59e0b',
    600: '#d97706',
    700: '#b45309',
    800: '#92400e',
    900: '#78350f'
  },
  W3 = {
    50: '#fefce8',
    100: '#fef9c3',
    200: '#fef08a',
    300: '#fde047',
    400: '#facc15',
    500: '#eab308',
    600: '#ca8a04',
    700: '#a16207',
    800: '#854d0e',
    900: '#713f12'
  },
  H3 = {
    50: '#f7fee7',
    100: '#ecfccb',
    200: '#d9f99d',
    300: '#bef264',
    400: '#a3e635',
    500: '#84cc16',
    600: '#65a30d',
    700: '#4d7c0f',
    800: '#3f6212',
    900: '#365314'
  },
  G3 = {
    50: '#f0fdf4',
    100: '#dcfce7',
    200: '#bbf7d0',
    300: '#86efac',
    400: '#4ade80',
    500: '#22c55e',
    600: '#16a34a',
    700: '#15803d',
    800: '#166534',
    900: '#14532d'
  },
  Q3 = {
    50: '#ecfdf5',
    100: '#d1fae5',
    200: '#a7f3d0',
    300: '#6ee7b7',
    400: '#34d399',
    500: '#10b981',
    600: '#059669',
    700: '#047857',
    800: '#065f46',
    900: '#064e3b'
  },
  q3 = {
    50: '#f0fdfa',
    100: '#ccfbf1',
    200: '#99f6e4',
    300: '#5eead4',
    400: '#2dd4bf',
    500: '#14b8a6',
    600: '#0d9488',
    700: '#0f766e',
    800: '#115e59',
    900: '#134e4a'
  },
  Y3 = {
    50: '#ecfeff',
    100: '#cffafe',
    200: '#a5f3fc',
    300: '#67e8f9',
    400: '#22d3ee',
    500: '#06b6d4',
    600: '#0891b2',
    700: '#0e7490',
    800: '#155e75',
    900: '#164e63'
  },
  X3 = {
    50: '#f0f9ff',
    100: '#e0f2fe',
    200: '#bae6fd',
    300: '#7dd3fc',
    400: '#38bdf8',
    500: '#0ea5e9',
    600: '#0284c7',
    700: '#0369a1',
    800: '#075985',
    900: '#0c4a6e'
  },
  Z3 = {
    50: '#eff6ff',
    100: '#dbeafe',
    200: '#bfdbfe',
    300: '#93c5fd',
    400: '#60a5fa',
    500: '#3b82f6',
    600: '#2563eb',
    700: '#1d4ed8',
    800: '#1e40af',
    900: '#1e3a8a'
  },
  J3 = {
    50: '#eef2ff',
    100: '#e0e7ff',
    200: '#c7d2fe',
    300: '#a5b4fc',
    400: '#818cf8',
    500: '#6366f1',
    600: '#4f46e5',
    700: '#4338ca',
    800: '#3730a3',
    900: '#312e81'
  },
  e6 = {
    50: '#f5f3ff',
    100: '#ede9fe',
    200: '#ddd6fe',
    300: '#c4b5fd',
    400: '#a78bfa',
    500: '#8b5cf6',
    600: '#7c3aed',
    700: '#6d28d9',
    800: '#5b21b6',
    900: '#4c1d95'
  },
  t6 = {
    50: '#faf5ff',
    100: '#f3e8ff',
    200: '#e9d5ff',
    300: '#d8b4fe',
    400: '#c084fc',
    500: '#a855f7',
    600: '#9333ea',
    700: '#7e22ce',
    800: '#6b21a8',
    900: '#581c87'
  },
  n6 = {
    50: '#fdf4ff',
    100: '#fae8ff',
    200: '#f5d0fe',
    300: '#f0abfc',
    400: '#e879f9',
    500: '#d946ef',
    600: '#c026d3',
    700: '#a21caf',
    800: '#86198f',
    900: '#701a75'
  },
  r6 = {
    50: '#fdf2f8',
    100: '#fce7f3',
    200: '#fbcfe8',
    300: '#f9a8d4',
    400: '#f472b6',
    500: '#ec4899',
    600: '#db2777',
    700: '#be185d',
    800: '#9d174d',
    900: '#831843'
  },
  o6 = {
    50: '#fff1f2',
    100: '#ffe4e6',
    200: '#fecdd3',
    300: '#fda4af',
    400: '#fb7185',
    500: '#f43f5e',
    600: '#e11d48',
    700: '#be123c',
    800: '#9f1239',
    900: '#881337'
  },
  i6 = {
    __proto__: null,
    slate: N3,
    gray: I3,
    zinc: V3,
    neutral: z3,
    stone: j3,
    red: B3,
    orange: U3,
    amber: K3,
    yellow: W3,
    lime: H3,
    green: G3,
    emerald: Q3,
    teal: q3,
    cyan: Y3,
    sky: X3,
    blue: Z3,
    indigo: J3,
    violet: e6,
    purple: t6,
    fuchsia: n6,
    pink: r6,
    rose: o6
  };
function s6({ disablePreflight: e } = {}) {
  return F3({ colors: i6, disablePreflight: e });
}
const Vt = j1,
  a6 = new CSSStyleSheet(),
  H1 = P3(a6),
  l6 = U1({
    presets: [O3(), s6()],
    variants: [['highlighted', '&[data-highlighted]']],
    theme: {
      extend: {
        boxShadow: {
          rayst: '0px 8px 24px 2px rgba(128, 128, 128, 0.48)',
          panel:
            'rgba(0,0,0,0.5) 0px 4px 30px 4px, rgba(255,255,255,0.3) 0px 0px 0px 1px'
        },
        colors: { zinc: { 900: '#18181b' } },
        fontFamily: {
          sans: ['Mona Sans'],
          mono: ['Fira Mono', 'roboto-mono', 'SFMono-Regular', 'JetBrains Mono']
        }
      }
    }
  }),
  K = E3(l6, H1),
  u6 = '/assets/png/Rayst.chunk.png',
  Ca = g.createContext({
    transformPagePoint: (e) => e,
    isStatic: !1,
    reducedMotion: 'never'
  }),
  ba = g.createContext({});
function c6() {
  return g.useContext(ba).visualElement;
}
const ai = g.createContext(null),
  Sa = typeof document < 'u',
  Ns = Sa ? g.useLayoutEffect : g.useEffect,
  G1 = g.createContext({ strict: !1 });
function f6(e, t, n, r) {
  const o = c6(),
    i = g.useContext(G1),
    s = g.useContext(ai),
    a = g.useContext(Ca).reducedMotion,
    l = g.useRef();
  (r = r || i.renderer),
    !l.current &&
      r &&
      (l.current = r(e, {
        visualState: t,
        parent: o,
        props: n,
        presenceId: s ? s.id : void 0,
        blockInitialAnimation: s ? s.initial === !1 : !1,
        reducedMotionConfig: a
      }));
  const u = l.current;
  return (
    Ns(() => {
      u && u.render();
    }),
    Ns(() => {
      u && u.animationState && u.animationState.animateChanges();
    }),
    u
  );
}
function wr(e) {
  return (
    typeof e == 'object' && Object.prototype.hasOwnProperty.call(e, 'current')
  );
}
function d6(e, t, n) {
  return g.useCallback(
    (r) => {
      r && e.mount && e.mount(r),
        t && (r ? t.mount(r) : t.unmount()),
        n && (typeof n == 'function' ? n(r) : wr(n) && (n.current = r));
    },
    [t]
  );
}
function Qo(e) {
  return typeof e == 'string' || Array.isArray(e);
}
function Ea(e) {
  return typeof e == 'object' && typeof e.start == 'function';
}
const p6 = [
  'initial',
  'animate',
  'exit',
  'whileHover',
  'whileDrag',
  'whileTap',
  'whileFocus',
  'whileInView'
];
function ka(e) {
  return Ea(e.animate) || p6.some((t) => Qo(e[t]));
}
function Q1(e) {
  return Boolean(ka(e) || e.variants);
}
function h6(e, t) {
  if (ka(e)) {
    const { initial: n, animate: r } = e;
    return {
      initial: n === !1 || Qo(n) ? n : void 0,
      animate: Qo(r) ? r : void 0
    };
  }
  return e.inherit !== !1 ? t : {};
}
function m6(e) {
  const { initial: t, animate: n } = h6(e, g.useContext(ba));
  return g.useMemo(() => ({ initial: t, animate: n }), [Hp(t), Hp(n)]);
}
function Hp(e) {
  return Array.isArray(e) ? e.join(' ') : e;
}
const Ot = (e) => ({ isEnabled: (t) => e.some((n) => !!t[n]) }),
  qo = {
    measureLayout: Ot(['layout', 'layoutId', 'drag']),
    animation: Ot([
      'animate',
      'exit',
      'variants',
      'whileHover',
      'whileTap',
      'whileFocus',
      'whileDrag',
      'whileInView'
    ]),
    exit: Ot(['exit']),
    drag: Ot(['drag', 'dragControls']),
    focus: Ot(['whileFocus']),
    hover: Ot(['whileHover', 'onHoverStart', 'onHoverEnd']),
    tap: Ot(['whileTap', 'onTap', 'onTapStart', 'onTapCancel']),
    pan: Ot(['onPan', 'onPanStart', 'onPanSessionStart', 'onPanEnd']),
    inView: Ot(['whileInView', 'onViewportEnter', 'onViewportLeave'])
  };
function g6(e) {
  for (const t in e)
    t === 'projectionNodeConstructor'
      ? (qo.projectionNodeConstructor = e[t])
      : (qo[t].Component = e[t]);
}
function jr(e) {
  const t = g.useRef(null);
  return t.current === null && (t.current = e()), t.current;
}
const xo = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
let v6 = 1;
function y6() {
  return jr(() => {
    if (xo.hasEverUpdated) return v6++;
  });
}
const Mf = g.createContext({});
class w6 extends je.Component {
  getSnapshotBeforeUpdate() {
    const { visualElement: t, props: n } = this.props;
    return t && t.setProps(n), null;
  }
  componentDidUpdate() {}
  render() {
    return this.props.children;
  }
}
const q1 = g.createContext({}),
  x6 = Symbol.for('motionComponentSymbol');
function C6({
  preloadedFeatures: e,
  createVisualElement: t,
  projectionNodeConstructor: n,
  useRender: r,
  useVisualState: o,
  Component: i
}) {
  e && g6(e);
  function s(l, u) {
    const c = { ...g.useContext(Ca), ...l, layoutId: b6(l) },
      { isStatic: d } = c;
    let h = null;
    const v = m6(l),
      w = d ? void 0 : y6(),
      x = o(l, d);
    if (!d && Sa) {
      v.visualElement = f6(i, x, c, t);
      const b = g.useContext(G1).strict,
        p = g.useContext(q1);
      v.visualElement &&
        (h = v.visualElement.loadFeatures(
          c,
          b,
          e,
          w,
          n || qo.projectionNodeConstructor,
          p
        ));
    }
    return g.createElement(
      w6,
      { visualElement: v.visualElement, props: c },
      h,
      g.createElement(
        ba.Provider,
        { value: v },
        r(i, l, w, d6(x, v.visualElement, u), x, d, v.visualElement)
      )
    );
  }
  const a = g.forwardRef(s);
  return (a[x6] = i), a;
}
function b6({ layoutId: e }) {
  const t = g.useContext(Mf).id;
  return t && e !== void 0 ? t + '-' + e : e;
}
function S6(e) {
  function t(r, o = {}) {
    return C6(e(r, o));
  }
  if (typeof Proxy > 'u') return t;
  const n = new Map();
  return new Proxy(t, {
    get: (r, o) => (n.has(o) || n.set(o, t(o)), n.get(o))
  });
}
const E6 = [
  'animate',
  'circle',
  'defs',
  'desc',
  'ellipse',
  'g',
  'image',
  'line',
  'filter',
  'marker',
  'mask',
  'metadata',
  'path',
  'pattern',
  'polygon',
  'polyline',
  'rect',
  'stop',
  'switch',
  'symbol',
  'svg',
  'text',
  'tspan',
  'use',
  'view'
];
function Of(e) {
  return typeof e != 'string' || e.includes('-')
    ? !1
    : !!(E6.indexOf(e) > -1 || /[A-Z]/.test(e));
}
const Is = {};
function k6(e) {
  Object.assign(Is, e);
}
const Vs = [
    'transformPerspective',
    'x',
    'y',
    'z',
    'translateX',
    'translateY',
    'translateZ',
    'scale',
    'scaleX',
    'scaleY',
    'rotate',
    'rotateX',
    'rotateY',
    'rotateZ',
    'skew',
    'skewX',
    'skewY'
  ],
  Yn = new Set(Vs);
function Y1(e, { layout: t, layoutId: n }) {
  return (
    Yn.has(e) ||
    e.startsWith('origin') ||
    ((t || n !== void 0) && (!!Is[e] || e === 'opacity'))
  );
}
const ct = (e) => !!(e != null && e.getVelocity),
  P6 = {
    x: 'translateX',
    y: 'translateY',
    z: 'translateZ',
    transformPerspective: 'perspective'
  },
  $6 = (e, t) => Vs.indexOf(e) - Vs.indexOf(t);
function _6(
  { transform: e, transformKeys: t },
  { enableHardwareAcceleration: n = !0, allowTransformNone: r = !0 },
  o,
  i
) {
  let s = '';
  t.sort($6);
  for (const a of t) s += `${P6[a] || a}(${e[a]}) `;
  return (
    n && !e.z && (s += 'translateZ(0)'),
    (s = s.trim()),
    i ? (s = i(e, o ? '' : s)) : r && o && (s = 'none'),
    s
  );
}
function X1(e) {
  return e.startsWith('--');
}
const T6 = (e, t) => (t && typeof e == 'number' ? t.transform(e) : e),
  Fr = (e, t, n) => Math.min(Math.max(n, e), t),
  Xn = {
    test: (e) => typeof e == 'number',
    parse: parseFloat,
    transform: (e) => e
  },
  Co = { ...Xn, transform: (e) => Fr(0, 1, e) },
  Di = { ...Xn, default: 1 },
  bo = (e) => Math.round(e * 1e5) / 1e5,
  Yo = /(-)?([\d]*\.?[\d])+/g,
  Ku =
    /(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,
  R6 =
    /^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;
function li(e) {
  return typeof e == 'string';
}
const ui = (e) => ({
    test: (t) => li(t) && t.endsWith(e) && t.split(' ').length === 1,
    parse: parseFloat,
    transform: (t) => `${t}${e}`
  }),
  Yt = ui('deg'),
  $t = ui('%'),
  H = ui('px'),
  M6 = ui('vh'),
  O6 = ui('vw'),
  Gp = {
    ...$t,
    parse: (e) => $t.parse(e) / 100,
    transform: (e) => $t.transform(e * 100)
  },
  Qp = { ...Xn, transform: Math.round },
  Z1 = {
    borderWidth: H,
    borderTopWidth: H,
    borderRightWidth: H,
    borderBottomWidth: H,
    borderLeftWidth: H,
    borderRadius: H,
    radius: H,
    borderTopLeftRadius: H,
    borderTopRightRadius: H,
    borderBottomRightRadius: H,
    borderBottomLeftRadius: H,
    width: H,
    maxWidth: H,
    height: H,
    maxHeight: H,
    size: H,
    top: H,
    right: H,
    bottom: H,
    left: H,
    padding: H,
    paddingTop: H,
    paddingRight: H,
    paddingBottom: H,
    paddingLeft: H,
    margin: H,
    marginTop: H,
    marginRight: H,
    marginBottom: H,
    marginLeft: H,
    rotate: Yt,
    rotateX: Yt,
    rotateY: Yt,
    rotateZ: Yt,
    scale: Di,
    scaleX: Di,
    scaleY: Di,
    scaleZ: Di,
    skew: Yt,
    skewX: Yt,
    skewY: Yt,
    distance: H,
    translateX: H,
    translateY: H,
    translateZ: H,
    x: H,
    y: H,
    z: H,
    perspective: H,
    transformPerspective: H,
    opacity: Co,
    originX: Gp,
    originY: Gp,
    originZ: H,
    zIndex: Qp,
    fillOpacity: Co,
    strokeOpacity: Co,
    numOctaves: Qp
  };
function Af(e, t, n, r) {
  const {
    style: o,
    vars: i,
    transform: s,
    transformKeys: a,
    transformOrigin: l
  } = e;
  a.length = 0;
  let u = !1,
    c = !1,
    d = !0;
  for (const h in t) {
    const v = t[h];
    if (X1(h)) {
      i[h] = v;
      continue;
    }
    const w = Z1[h],
      x = T6(v, w);
    if (Yn.has(h)) {
      if (((u = !0), (s[h] = x), a.push(h), !d)) continue;
      v !== (w.default || 0) && (d = !1);
    } else h.startsWith('origin') ? ((c = !0), (l[h] = x)) : (o[h] = x);
  }
  if (
    (t.transform ||
      (u || r
        ? (o.transform = _6(e, n, d, r))
        : o.transform && (o.transform = 'none')),
    c)
  ) {
    const { originX: h = '50%', originY: v = '50%', originZ: w = 0 } = l;
    o.transformOrigin = `${h} ${v} ${w}`;
  }
}
const Df = () => ({
  style: {},
  transform: {},
  transformKeys: [],
  transformOrigin: {},
  vars: {}
});
function J1(e, t, n) {
  for (const r in t) !ct(t[r]) && !Y1(r, n) && (e[r] = t[r]);
}
function A6({ transformTemplate: e }, t, n) {
  return g.useMemo(() => {
    const r = Df();
    return (
      Af(r, t, { enableHardwareAcceleration: !n }, e),
      Object.assign({}, r.vars, r.style)
    );
  }, [t]);
}
function D6(e, t, n) {
  const r = e.style || {},
    o = {};
  return (
    J1(o, r, e),
    Object.assign(o, A6(e, t, n)),
    e.transformValues ? e.transformValues(o) : o
  );
}
function L6(e, t, n) {
  const r = {},
    o = D6(e, t, n);
  return (
    e.drag &&
      e.dragListener !== !1 &&
      ((r.draggable = !1),
      (o.userSelect = o.WebkitUserSelect = o.WebkitTouchCallout = 'none'),
      (o.touchAction =
        e.drag === !0 ? 'none' : `pan-${e.drag === 'x' ? 'y' : 'x'}`)),
    (r.style = o),
    r
  );
}
const F6 = [
    'animate',
    'exit',
    'variants',
    'whileHover',
    'whileTap',
    'whileFocus',
    'whileDrag',
    'whileInView'
  ],
  N6 = ['whileTap', 'onTap', 'onTapStart', 'onTapCancel'],
  I6 = ['onPan', 'onPanStart', 'onPanSessionStart', 'onPanEnd'],
  V6 = ['whileInView', 'onViewportEnter', 'onViewportLeave', 'viewport'],
  z6 = new Set([
    'initial',
    'style',
    'values',
    'variants',
    'transition',
    'transformTemplate',
    'transformValues',
    'custom',
    'inherit',
    'layout',
    'layoutId',
    'layoutDependency',
    'onLayoutAnimationStart',
    'onLayoutAnimationComplete',
    'onLayoutMeasure',
    'onBeforeLayoutMeasure',
    'onAnimationStart',
    'onAnimationComplete',
    'onUpdate',
    'onDragStart',
    'onDrag',
    'onDragEnd',
    'onMeasureDragConstraints',
    'onDirectionLock',
    'onDragTransitionEnd',
    'drag',
    'dragControls',
    'dragListener',
    'dragConstraints',
    'dragDirectionLock',
    'dragSnapToOrigin',
    '_dragX',
    '_dragY',
    'dragElastic',
    'dragMomentum',
    'dragPropagation',
    'dragTransition',
    'onHoverStart',
    'onHoverEnd',
    'layoutScroll',
    ...V6,
    ...N6,
    ...F6,
    ...I6
  ]);
function zs(e) {
  return z6.has(e);
}
let eg = (e) => !zs(e);
function j6(e) {
  e && (eg = (t) => (t.startsWith('on') ? !zs(t) : e(t)));
}
try {
  j6(require('@emotion/is-prop-valid').default);
} catch {}
function B6(e, t, n) {
  const r = {};
  for (const o in e)
    (eg(o) ||
      (n === !0 && zs(o)) ||
      (!t && !zs(o)) ||
      (e.draggable && o.startsWith('onDrag'))) &&
      (r[o] = e[o]);
  return r;
}
function qp(e, t, n) {
  return typeof e == 'string' ? e : H.transform(t + n * e);
}
function U6(e, t, n) {
  const r = qp(t, e.x, e.width),
    o = qp(n, e.y, e.height);
  return `${r} ${o}`;
}
const K6 = { offset: 'stroke-dashoffset', array: 'stroke-dasharray' },
  W6 = { offset: 'strokeDashoffset', array: 'strokeDasharray' };
function H6(e, t, n = 1, r = 0, o = !0) {
  e.pathLength = 1;
  const i = o ? K6 : W6;
  e[i.offset] = H.transform(-r);
  const s = H.transform(t),
    a = H.transform(n);
  e[i.array] = `${s} ${a}`;
}
function Lf(
  e,
  {
    attrX: t,
    attrY: n,
    originX: r,
    originY: o,
    pathLength: i,
    pathSpacing: s = 1,
    pathOffset: a = 0,
    ...l
  },
  u,
  c,
  d
) {
  if ((Af(e, l, u, d), c)) {
    e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
    return;
  }
  (e.attrs = e.style), (e.style = {});
  const { attrs: h, style: v, dimensions: w } = e;
  h.transform && (w && (v.transform = h.transform), delete h.transform),
    w &&
      (r !== void 0 || o !== void 0 || v.transform) &&
      (v.transformOrigin = U6(
        w,
        r !== void 0 ? r : 0.5,
        o !== void 0 ? o : 0.5
      )),
    t !== void 0 && (h.x = t),
    n !== void 0 && (h.y = n),
    i !== void 0 && H6(h, i, s, a, !1);
}
const tg = () => ({ ...Df(), attrs: {} }),
  Ff = (e) => typeof e == 'string' && e.toLowerCase() === 'svg';
function G6(e, t, n, r) {
  const o = g.useMemo(() => {
    const i = tg();
    return (
      Lf(i, t, { enableHardwareAcceleration: !1 }, Ff(r), e.transformTemplate),
      { ...i.attrs, style: { ...i.style } }
    );
  }, [t]);
  if (e.style) {
    const i = {};
    J1(i, e.style, e), (o.style = { ...i, ...o.style });
  }
  return o;
}
function Q6(e = !1) {
  return (n, r, o, i, { latestValues: s }, a) => {
    const u = (Of(n) ? G6 : L6)(r, s, a, n),
      d = { ...B6(r, typeof n == 'string', e), ...u, ref: i };
    return o && (d['data-projection-id'] = o), g.createElement(n, d);
  };
}
const Nf = (e) => e.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
function ng(e, { style: t, vars: n }, r, o) {
  Object.assign(e.style, t, o && o.getProjectionStyles(r));
  for (const i in n) e.style.setProperty(i, n[i]);
}
const rg = new Set([
  'baseFrequency',
  'diffuseConstant',
  'kernelMatrix',
  'kernelUnitLength',
  'keySplines',
  'keyTimes',
  'limitingConeAngle',
  'markerHeight',
  'markerWidth',
  'numOctaves',
  'targetX',
  'targetY',
  'surfaceScale',
  'specularConstant',
  'specularExponent',
  'stdDeviation',
  'tableValues',
  'viewBox',
  'gradientTransform',
  'pathLength',
  'startOffset',
  'textLength',
  'lengthAdjust'
]);
function og(e, t, n, r) {
  ng(e, t, void 0, r);
  for (const o in t.attrs) e.setAttribute(rg.has(o) ? o : Nf(o), t.attrs[o]);
}
function If(e, t) {
  const { style: n } = e,
    r = {};
  for (const o in n)
    (ct(n[o]) || (t.style && ct(t.style[o])) || Y1(o, e)) && (r[o] = n[o]);
  return r;
}
function ig(e, t) {
  const n = If(e, t);
  for (const r in e)
    if (ct(e[r]) || ct(t[r])) {
      const o = r === 'x' || r === 'y' ? 'attr' + r.toUpperCase() : r;
      n[o] = e[r];
    }
  return n;
}
function Vf(e, t, n, r = {}, o = {}) {
  return (
    typeof t == 'function' && (t = t(n !== void 0 ? n : e.custom, r, o)),
    typeof t == 'string' && (t = e.variants && e.variants[t]),
    typeof t == 'function' && (t = t(n !== void 0 ? n : e.custom, r, o)),
    t
  );
}
const js = (e) => Array.isArray(e),
  q6 = (e) => Boolean(e && typeof e == 'object' && e.mix && e.toValue),
  Y6 = (e) => (js(e) ? e[e.length - 1] || 0 : e);
function is(e) {
  const t = ct(e) ? e.get() : e;
  return q6(t) ? t.toValue() : t;
}
function X6(
  { scrapeMotionValuesFromProps: e, createRenderState: t, onMount: n },
  r,
  o,
  i
) {
  const s = { latestValues: Z6(r, o, i, e), renderState: t() };
  return n && (s.mount = (a) => n(r, a, s)), s;
}
const sg = (e) => (t, n) => {
  const r = g.useContext(ba),
    o = g.useContext(ai),
    i = () => X6(e, t, r, o);
  return n ? i() : jr(i);
};
function Z6(e, t, n, r) {
  const o = {},
    i = r(e, {});
  for (const h in i) o[h] = is(i[h]);
  let { initial: s, animate: a } = e;
  const l = ka(e),
    u = Q1(e);
  t &&
    u &&
    !l &&
    e.inherit !== !1 &&
    (s === void 0 && (s = t.initial), a === void 0 && (a = t.animate));
  let c = n ? n.initial === !1 : !1;
  c = c || s === !1;
  const d = c ? a : s;
  return (
    d &&
      typeof d != 'boolean' &&
      !Ea(d) &&
      (Array.isArray(d) ? d : [d]).forEach((v) => {
        const w = Vf(e, v);
        if (!w) return;
        const { transitionEnd: x, transition: b, ...p } = w;
        for (const m in p) {
          let f = p[m];
          if (Array.isArray(f)) {
            const y = c ? f.length - 1 : 0;
            f = f[y];
          }
          f !== null && (o[m] = f);
        }
        for (const m in x) o[m] = x[m];
      }),
    o
  );
}
const J6 = {
    useVisualState: sg({
      scrapeMotionValuesFromProps: ig,
      createRenderState: tg,
      onMount: (e, t, { renderState: n, latestValues: r }) => {
        try {
          n.dimensions =
            typeof t.getBBox == 'function'
              ? t.getBBox()
              : t.getBoundingClientRect();
        } catch {
          n.dimensions = { x: 0, y: 0, width: 0, height: 0 };
        }
        Lf(
          n,
          r,
          { enableHardwareAcceleration: !1 },
          Ff(t.tagName),
          e.transformTemplate
        ),
          og(t, n);
      }
    })
  },
  e7 = {
    useVisualState: sg({
      scrapeMotionValuesFromProps: If,
      createRenderState: Df
    })
  };
function t7(e, { forwardMotionProps: t = !1 }, n, r, o) {
  return {
    ...(Of(e) ? J6 : e7),
    preloadedFeatures: n,
    useRender: Q6(t),
    createVisualElement: r,
    projectionNodeConstructor: o,
    Component: e
  };
}
var re;
(function (e) {
  (e.Animate = 'animate'),
    (e.Hover = 'whileHover'),
    (e.Tap = 'whileTap'),
    (e.Drag = 'whileDrag'),
    (e.Focus = 'whileFocus'),
    (e.InView = 'whileInView'),
    (e.Exit = 'exit');
})(re || (re = {}));
function Pa(e, t, n, r = { passive: !0 }) {
  return e.addEventListener(t, n, r), () => e.removeEventListener(t, n);
}
function Wu(e, t, n, r) {
  g.useEffect(() => {
    const o = e.current;
    if (n && o) return Pa(o, t, n, r);
  }, [e, t, n, r]);
}
function n7({ whileFocus: e, visualElement: t }) {
  const { animationState: n } = t,
    r = g.useCallback(() => {
      n && n.setActive(re.Focus, !0);
    }, [n]),
    o = g.useCallback(() => {
      n && n.setActive(re.Focus, !1);
    }, [n]);
  Wu(t, 'focus', e ? r : void 0), Wu(t, 'blur', e ? o : void 0);
}
const ag = (e) => e.isPrimary !== !1;
function zf(e, t = 'page') {
  return { point: { x: e[t + 'X'], y: e[t + 'Y'] } };
}
const lg = (e) => (t) => ag(t) && e(t, zf(t));
function _r(e, t, n, r) {
  return Pa(e, t, lg(n), r);
}
function Bs(e, t, n, r) {
  return Wu(e, t, n && lg(n), r);
}
function ug(e) {
  let t = null;
  return () => {
    const n = () => {
      t = null;
    };
    return t === null ? ((t = e), n) : !1;
  };
}
const Yp = ug('dragHorizontal'),
  Xp = ug('dragVertical');
function cg(e) {
  let t = !1;
  if (e === 'y') t = Xp();
  else if (e === 'x') t = Yp();
  else {
    const n = Yp(),
      r = Xp();
    n && r
      ? (t = () => {
          n(), r();
        })
      : (n && n(), r && r());
  }
  return t;
}
function fg() {
  const e = cg(!0);
  return e ? (e(), !1) : !0;
}
function r7(e) {
  return e.type !== 'pen' && e.type !== 'touch';
}
function Zp(e, t, n) {
  return (r, o) => {
    !r7(r) ||
      fg() ||
      (e.animationState && e.animationState.setActive(re.Hover, t),
      n && n(r, o));
  };
}
function o7({
  onHoverStart: e,
  onHoverEnd: t,
  whileHover: n,
  visualElement: r
}) {
  Bs(
    r,
    'pointerenter',
    g.useMemo(() => (e || n ? Zp(r, !0, e) : void 0), [e, Boolean(n), r]),
    { passive: !e }
  ),
    Bs(
      r,
      'pointerleave',
      g.useMemo(() => (t || n ? Zp(r, !1, t) : void 0), [e, Boolean(n), r]),
      { passive: !t }
    );
}
const dg = (e, t) => (t ? (e === t ? !0 : dg(e, t.parentElement)) : !1);
function jf(e) {
  return g.useEffect(() => () => e(), []);
}
const i7 = (e, t) => (n) => t(e(n)),
  $a = (...e) => e.reduce(i7);
function s7({
  onTap: e,
  onTapStart: t,
  onTapCancel: n,
  whileTap: r,
  visualElement: o,
  ...i
}) {
  const s = e || t || n || r,
    a = g.useRef(!1),
    l = g.useRef(null),
    u = { passive: !(t || e || n || i.onPointerDown) };
  function c() {
    l.current && l.current(), (l.current = null);
  }
  function d() {
    return (
      c(),
      (a.current = !1),
      o.animationState && o.animationState.setActive(re.Tap, !1),
      !fg()
    );
  }
  function h(x, b) {
    d() && (dg(o.current, x.target) ? e && e(x, b) : n && n(x, b));
  }
  function v(x, b) {
    d() && n && n(x, b);
  }
  const w = g.useCallback(
    (x, b) => {
      c(),
        !a.current &&
          ((a.current = !0),
          (l.current = $a(
            _r(window, 'pointerup', h, u),
            _r(window, 'pointercancel', v, u)
          )),
          o.animationState && o.animationState.setActive(re.Tap, !0),
          t && t(x, b));
    },
    [t, o]
  );
  Bs(o, 'pointerdown', s ? w : void 0, u), jf(c);
}
const Hu = new WeakMap(),
  yl = new WeakMap(),
  a7 = (e) => {
    const t = Hu.get(e.target);
    t && t(e);
  },
  l7 = (e) => {
    e.forEach(a7);
  };
function u7({ root: e, ...t }) {
  const n = e || document;
  yl.has(n) || yl.set(n, {});
  const r = yl.get(n),
    o = JSON.stringify(t);
  return r[o] || (r[o] = new IntersectionObserver(l7, { root: e, ...t })), r[o];
}
function c7(e, t, n) {
  const r = u7(t);
  return (
    Hu.set(e, n),
    r.observe(e),
    () => {
      Hu.delete(e), r.unobserve(e);
    }
  );
}
function f7({
  visualElement: e,
  whileInView: t,
  onViewportEnter: n,
  onViewportLeave: r,
  viewport: o = {}
}) {
  const i = g.useRef({ hasEnteredView: !1, isInView: !1 });
  let s = Boolean(t || n || r);
  o.once && i.current.hasEnteredView && (s = !1),
    (typeof IntersectionObserver > 'u' ? h7 : p7)(s, i.current, e, o);
}
const d7 = { some: 0, all: 1 };
function p7(e, t, n, { root: r, margin: o, amount: i = 'some', once: s }) {
  g.useEffect(() => {
    if (!e || !n.current) return;
    const a = {
        root: r == null ? void 0 : r.current,
        rootMargin: o,
        threshold: typeof i == 'number' ? i : d7[i]
      },
      l = (u) => {
        const { isIntersecting: c } = u;
        if (t.isInView === c || ((t.isInView = c), s && !c && t.hasEnteredView))
          return;
        c && (t.hasEnteredView = !0),
          n.animationState && n.animationState.setActive(re.InView, c);
        const d = n.getProps(),
          h = c ? d.onViewportEnter : d.onViewportLeave;
        h && h(u);
      };
    return c7(n.current, a, l);
  }, [e, r, o, i]);
}
function h7(e, t, n, { fallback: r = !0 }) {
  g.useEffect(() => {
    !e ||
      !r ||
      requestAnimationFrame(() => {
        t.hasEnteredView = !0;
        const { onViewportEnter: o } = n.getProps();
        o && o(null),
          n.animationState && n.animationState.setActive(re.InView, !0);
      });
  }, [e]);
}
const ln = (e) => (t) => (e(t), null),
  m7 = { inView: ln(f7), tap: ln(s7), focus: ln(n7), hover: ln(o7) };
function pg() {
  const e = g.useContext(ai);
  if (e === null) return [!0, null];
  const { isPresent: t, onExitComplete: n, register: r } = e,
    o = g.useId();
  return g.useEffect(() => r(o), []), !t && n ? [!1, () => n && n(o)] : [!0];
}
function hg(e, t) {
  if (!Array.isArray(t)) return !1;
  const n = t.length;
  if (n !== e.length) return !1;
  for (let r = 0; r < n; r++) if (t[r] !== e[r]) return !1;
  return !0;
}
const g7 = (e) => /^\-?\d*\.?\d+$/.test(e),
  v7 = (e) => /^0[^.\s]+$/.test(e),
  zt = { delta: 0, timestamp: 0 },
  mg = (1 / 60) * 1e3,
  y7 = typeof performance < 'u' ? () => performance.now() : () => Date.now(),
  gg =
    typeof window < 'u'
      ? (e) => window.requestAnimationFrame(e)
      : (e) => setTimeout(() => e(y7()), mg);
function w7(e) {
  let t = [],
    n = [],
    r = 0,
    o = !1,
    i = !1;
  const s = new WeakSet(),
    a = {
      schedule: (l, u = !1, c = !1) => {
        const d = c && o,
          h = d ? t : n;
        return (
          u && s.add(l),
          h.indexOf(l) === -1 && (h.push(l), d && o && (r = t.length)),
          l
        );
      },
      cancel: (l) => {
        const u = n.indexOf(l);
        u !== -1 && n.splice(u, 1), s.delete(l);
      },
      process: (l) => {
        if (o) {
          i = !0;
          return;
        }
        if (((o = !0), ([t, n] = [n, t]), (n.length = 0), (r = t.length), r))
          for (let u = 0; u < r; u++) {
            const c = t[u];
            c(l), s.has(c) && (a.schedule(c), e());
          }
        (o = !1), i && ((i = !1), a.process(l));
      }
    };
  return a;
}
const x7 = 40;
let Gu = !0,
  Xo = !1,
  Qu = !1;
const ci = ['read', 'update', 'preRender', 'render', 'postRender'],
  _a = ci.reduce((e, t) => ((e[t] = w7(() => (Xo = !0))), e), {}),
  Ie = ci.reduce((e, t) => {
    const n = _a[t];
    return (e[t] = (r, o = !1, i = !1) => (Xo || b7(), n.schedule(r, o, i))), e;
  }, {}),
  xn = ci.reduce((e, t) => ((e[t] = _a[t].cancel), e), {}),
  wl = ci.reduce((e, t) => ((e[t] = () => _a[t].process(zt)), e), {}),
  C7 = (e) => _a[e].process(zt),
  vg = (e) => {
    (Xo = !1),
      (zt.delta = Gu ? mg : Math.max(Math.min(e - zt.timestamp, x7), 1)),
      (zt.timestamp = e),
      (Qu = !0),
      ci.forEach(C7),
      (Qu = !1),
      Xo && ((Gu = !1), gg(vg));
  },
  b7 = () => {
    (Xo = !0), (Gu = !0), Qu || gg(vg);
  };
function Bf(e, t) {
  e.indexOf(t) === -1 && e.push(t);
}
function Uf(e, t) {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}
class Kf {
  constructor() {
    this.subscriptions = [];
  }
  add(t) {
    return Bf(this.subscriptions, t), () => Uf(this.subscriptions, t);
  }
  notify(t, n, r) {
    const o = this.subscriptions.length;
    if (o)
      if (o === 1) this.subscriptions[0](t, n, r);
      else
        for (let i = 0; i < o; i++) {
          const s = this.subscriptions[i];
          s && s(t, n, r);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
function Wf(e, t) {
  return t ? e * (1e3 / t) : 0;
}
const S7 = (e) => !isNaN(parseFloat(e));
class E7 {
  constructor(t, n = {}) {
    (this.version = '8.2.4'),
      (this.timeDelta = 0),
      (this.lastUpdated = 0),
      (this.canTrackVelocity = !1),
      (this.events = {}),
      (this.updateAndNotify = (r, o = !0) => {
        (this.prev = this.current), (this.current = r);
        const { delta: i, timestamp: s } = zt;
        this.lastUpdated !== s &&
          ((this.timeDelta = i),
          (this.lastUpdated = s),
          Ie.postRender(this.scheduleVelocityCheck)),
          this.prev !== this.current &&
            this.events.change &&
            this.events.change.notify(this.current),
          this.events.velocityChange &&
            this.events.velocityChange.notify(this.getVelocity()),
          o &&
            this.events.renderRequest &&
            this.events.renderRequest.notify(this.current);
      }),
      (this.scheduleVelocityCheck = () => Ie.postRender(this.velocityCheck)),
      (this.velocityCheck = ({ timestamp: r }) => {
        r !== this.lastUpdated &&
          ((this.prev = this.current),
          this.events.velocityChange &&
            this.events.velocityChange.notify(this.getVelocity()));
      }),
      (this.hasAnimated = !1),
      (this.prev = this.current = t),
      (this.canTrackVelocity = S7(this.current)),
      (this.owner = n.owner);
  }
  onChange(t) {
    return this.on('change', t);
  }
  on(t, n) {
    this.events[t] || (this.events[t] = new Kf());
    const r = this.events[t].add(n);
    return t === 'change'
      ? () => {
          r(),
            Ie.read(() => {
              this.events.change.getSize() || this.stop();
            });
        }
      : r;
  }
  clearListeners() {
    for (const t in this.events) this.events[t].clear();
  }
  attach(t, n) {
    (this.passiveEffect = t), (this.stopPassiveEffect = n);
  }
  set(t, n = !0) {
    !n || !this.passiveEffect
      ? this.updateAndNotify(t, n)
      : this.passiveEffect(t, this.updateAndNotify);
  }
  setWithVelocity(t, n, r) {
    this.set(n), (this.prev = t), (this.timeDelta = r);
  }
  jump(t) {
    this.updateAndNotify(t),
      (this.prev = t),
      this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect();
  }
  get() {
    return this.current;
  }
  getPrevious() {
    return this.prev;
  }
  getVelocity() {
    return this.canTrackVelocity
      ? Wf(parseFloat(this.current) - parseFloat(this.prev), this.timeDelta)
      : 0;
  }
  start(t) {
    return (
      this.stop(),
      new Promise((n) => {
        (this.hasAnimated = !0),
          (this.stopAnimation = t(n)),
          this.events.animationStart && this.events.animationStart.notify();
      }).then(() => {
        this.events.animationComplete && this.events.animationComplete.notify(),
          this.clearAnimation();
      })
    );
  }
  stop() {
    this.stopAnimation &&
      (this.stopAnimation(),
      this.events.animationCancel && this.events.animationCancel.notify()),
      this.clearAnimation();
  }
  isAnimating() {
    return !!this.stopAnimation;
  }
  clearAnimation() {
    this.stopAnimation = null;
  }
  destroy() {
    this.clearListeners(),
      this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect();
  }
}
function Gn(e, t) {
  return new E7(e, t);
}
const Hf = (e, t) => (n) =>
    Boolean(
      (li(n) && R6.test(n) && n.startsWith(e)) ||
        (t && Object.prototype.hasOwnProperty.call(n, t))
    ),
  yg = (e, t, n) => (r) => {
    if (!li(r)) return r;
    const [o, i, s, a] = r.match(Yo);
    return {
      [e]: parseFloat(o),
      [t]: parseFloat(i),
      [n]: parseFloat(s),
      alpha: a !== void 0 ? parseFloat(a) : 1
    };
  },
  k7 = (e) => Fr(0, 255, e),
  xl = { ...Xn, transform: (e) => Math.round(k7(e)) },
  In = {
    test: Hf('rgb', 'red'),
    parse: yg('red', 'green', 'blue'),
    transform: ({ red: e, green: t, blue: n, alpha: r = 1 }) =>
      'rgba(' +
      xl.transform(e) +
      ', ' +
      xl.transform(t) +
      ', ' +
      xl.transform(n) +
      ', ' +
      bo(Co.transform(r)) +
      ')'
  };
function P7(e) {
  let t = '',
    n = '',
    r = '',
    o = '';
  return (
    e.length > 5
      ? ((t = e.substring(1, 3)),
        (n = e.substring(3, 5)),
        (r = e.substring(5, 7)),
        (o = e.substring(7, 9)))
      : ((t = e.substring(1, 2)),
        (n = e.substring(2, 3)),
        (r = e.substring(3, 4)),
        (o = e.substring(4, 5)),
        (t += t),
        (n += n),
        (r += r),
        (o += o)),
    {
      red: parseInt(t, 16),
      green: parseInt(n, 16),
      blue: parseInt(r, 16),
      alpha: o ? parseInt(o, 16) / 255 : 1
    }
  );
}
const qu = { test: Hf('#'), parse: P7, transform: In.transform },
  xr = {
    test: Hf('hsl', 'hue'),
    parse: yg('hue', 'saturation', 'lightness'),
    transform: ({ hue: e, saturation: t, lightness: n, alpha: r = 1 }) =>
      'hsla(' +
      Math.round(e) +
      ', ' +
      $t.transform(bo(t)) +
      ', ' +
      $t.transform(bo(n)) +
      ', ' +
      bo(Co.transform(r)) +
      ')'
  },
  Ae = {
    test: (e) => In.test(e) || qu.test(e) || xr.test(e),
    parse: (e) =>
      In.test(e) ? In.parse(e) : xr.test(e) ? xr.parse(e) : qu.parse(e),
    transform: (e) =>
      li(e) ? e : e.hasOwnProperty('red') ? In.transform(e) : xr.transform(e)
  },
  wg = '${c}',
  xg = '${n}';
function $7(e) {
  var t, n;
  return (
    isNaN(e) &&
    li(e) &&
    (((t = e.match(Yo)) === null || t === void 0 ? void 0 : t.length) || 0) +
      (((n = e.match(Ku)) === null || n === void 0 ? void 0 : n.length) || 0) >
      0
  );
}
function Us(e) {
  typeof e == 'number' && (e = `${e}`);
  const t = [];
  let n = 0,
    r = 0;
  const o = e.match(Ku);
  o && ((n = o.length), (e = e.replace(Ku, wg)), t.push(...o.map(Ae.parse)));
  const i = e.match(Yo);
  return (
    i && ((r = i.length), (e = e.replace(Yo, xg)), t.push(...i.map(Xn.parse))),
    { values: t, numColors: n, numNumbers: r, tokenised: e }
  );
}
function Cg(e) {
  return Us(e).values;
}
function bg(e) {
  const { values: t, numColors: n, tokenised: r } = Us(e),
    o = t.length;
  return (i) => {
    let s = r;
    for (let a = 0; a < o; a++)
      s = s.replace(a < n ? wg : xg, a < n ? Ae.transform(i[a]) : bo(i[a]));
    return s;
  };
}
const _7 = (e) => (typeof e == 'number' ? 0 : e);
function T7(e) {
  const t = Cg(e);
  return bg(e)(t.map(_7));
}
const Cn = {
    test: $7,
    parse: Cg,
    createTransformer: bg,
    getAnimatableNone: T7
  },
  R7 = new Set(['brightness', 'contrast', 'saturate', 'opacity']);
function M7(e) {
  const [t, n] = e.slice(0, -1).split('(');
  if (t === 'drop-shadow') return e;
  const [r] = n.match(Yo) || [];
  if (!r) return e;
  const o = n.replace(r, '');
  let i = R7.has(t) ? 1 : 0;
  return r !== n && (i *= 100), t + '(' + i + o + ')';
}
const O7 = /([a-z-]*)\(.*?\)/g,
  Yu = {
    ...Cn,
    getAnimatableNone: (e) => {
      const t = e.match(O7);
      return t ? t.map(M7).join(' ') : e;
    }
  },
  A7 = {
    ...Z1,
    color: Ae,
    backgroundColor: Ae,
    outlineColor: Ae,
    fill: Ae,
    stroke: Ae,
    borderColor: Ae,
    borderTopColor: Ae,
    borderRightColor: Ae,
    borderBottomColor: Ae,
    borderLeftColor: Ae,
    filter: Yu,
    WebkitFilter: Yu
  },
  Gf = (e) => A7[e];
function Qf(e, t) {
  var n;
  let r = Gf(e);
  return (
    r !== Yu && (r = Cn),
    (n = r.getAnimatableNone) === null || n === void 0 ? void 0 : n.call(r, t)
  );
}
const Sg = (e) => (t) => t.test(e),
  D7 = { test: (e) => e === 'auto', parse: (e) => e },
  Eg = [Xn, H, $t, Yt, O6, M6, D7],
  no = (e) => Eg.find(Sg(e)),
  L7 = [...Eg, Ae, Cn],
  F7 = (e) => L7.find(Sg(e));
function N7(e) {
  const t = {};
  return e.values.forEach((n, r) => (t[r] = n.get())), t;
}
function I7(e) {
  const t = {};
  return e.values.forEach((n, r) => (t[r] = n.getVelocity())), t;
}
function Ta(e, t, n) {
  const r = e.getProps();
  return Vf(r, t, n !== void 0 ? n : r.custom, N7(e), I7(e));
}
function V7(e, t, n) {
  e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, Gn(n));
}
function z7(e, t) {
  const n = Ta(e, t);
  let {
    transitionEnd: r = {},
    transition: o = {},
    ...i
  } = n ? e.makeTargetAnimatable(n, !1) : {};
  i = { ...i, ...r };
  for (const s in i) {
    const a = Y6(i[s]);
    V7(e, s, a);
  }
}
function j7(e, t, n) {
  var r, o;
  const i = Object.keys(t).filter((a) => !e.hasValue(a)),
    s = i.length;
  if (s)
    for (let a = 0; a < s; a++) {
      const l = i[a],
        u = t[l];
      let c = null;
      Array.isArray(u) && (c = u[0]),
        c === null &&
          (c =
            (o = (r = n[l]) !== null && r !== void 0 ? r : e.readValue(l)) !==
              null && o !== void 0
              ? o
              : t[l]),
        c != null &&
          (typeof c == 'string' && (g7(c) || v7(c))
            ? (c = parseFloat(c))
            : !F7(c) && Cn.test(u) && (c = Qf(l, u)),
          e.addValue(l, Gn(c, { owner: e })),
          n[l] === void 0 && (n[l] = c),
          c !== null && e.setBaseTarget(l, c));
    }
}
function B7(e, t) {
  return t ? (t[e] || t.default || t).from : void 0;
}
function U7(e, t, n) {
  var r;
  const o = {};
  for (const i in e) {
    const s = B7(i, t);
    o[i] =
      s !== void 0
        ? s
        : (r = n.getValue(i)) === null || r === void 0
          ? void 0
          : r.get();
  }
  return o;
}
function Ks(e) {
  return Boolean(ct(e) && e.add);
}
const K7 = (e, t) => `${e}: ${t}`;
function W7(e, t) {
  const { MotionAppearAnimations: n } = window,
    r = K7(e, Yn.has(t) ? 'transform' : t),
    o = n && n.get(r);
  return o
    ? (Ie.render(() => {
        try {
          o.cancel(), n.delete(r);
        } catch {}
      }),
      o.currentTime || 0)
    : 0;
}
const H7 = 'framerAppearId',
  G7 = 'data-' + Nf(H7);
var Q7 = function () {},
  Ws = function () {};
const ss = (e) => e * 1e3,
  q7 = { current: !1 },
  qf = (e) => (t) => (t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2),
  Yf = (e) => (t) => 1 - e(1 - t),
  Xf = (e) => e * e,
  Y7 = Yf(Xf),
  Zf = qf(Xf),
  he = (e, t, n) => -n * e + n * t + e;
function Cl(e, t, n) {
  return (
    n < 0 && (n += 1),
    n > 1 && (n -= 1),
    n < 1 / 6
      ? e + (t - e) * 6 * n
      : n < 1 / 2
        ? t
        : n < 2 / 3
          ? e + (t - e) * (2 / 3 - n) * 6
          : e
  );
}
function X7({ hue: e, saturation: t, lightness: n, alpha: r }) {
  (e /= 360), (t /= 100), (n /= 100);
  let o = 0,
    i = 0,
    s = 0;
  if (!t) o = i = s = n;
  else {
    const a = n < 0.5 ? n * (1 + t) : n + t - n * t,
      l = 2 * n - a;
    (o = Cl(l, a, e + 1 / 3)), (i = Cl(l, a, e)), (s = Cl(l, a, e - 1 / 3));
  }
  return {
    red: Math.round(o * 255),
    green: Math.round(i * 255),
    blue: Math.round(s * 255),
    alpha: r
  };
}
const bl = (e, t, n) => {
    const r = e * e;
    return Math.sqrt(Math.max(0, n * (t * t - r) + r));
  },
  Z7 = [qu, In, xr],
  J7 = (e) => Z7.find((t) => t.test(e));
function Jp(e) {
  const t = J7(e);
  let n = t.parse(e);
  return t === xr && (n = X7(n)), n;
}
const kg = (e, t) => {
  const n = Jp(e),
    r = Jp(t),
    o = { ...n };
  return (i) => (
    (o.red = bl(n.red, r.red, i)),
    (o.green = bl(n.green, r.green, i)),
    (o.blue = bl(n.blue, r.blue, i)),
    (o.alpha = he(n.alpha, r.alpha, i)),
    In.transform(o)
  );
};
function Pg(e, t) {
  return typeof e == 'number'
    ? (n) => he(e, t, n)
    : Ae.test(e)
      ? kg(e, t)
      : _g(e, t);
}
const $g = (e, t) => {
    const n = [...e],
      r = n.length,
      o = e.map((i, s) => Pg(i, t[s]));
    return (i) => {
      for (let s = 0; s < r; s++) n[s] = o[s](i);
      return n;
    };
  },
  e4 = (e, t) => {
    const n = { ...e, ...t },
      r = {};
    for (const o in n)
      e[o] !== void 0 && t[o] !== void 0 && (r[o] = Pg(e[o], t[o]));
    return (o) => {
      for (const i in r) n[i] = r[i](o);
      return n;
    };
  },
  _g = (e, t) => {
    const n = Cn.createTransformer(t),
      r = Us(e),
      o = Us(t);
    return r.numColors === o.numColors && r.numNumbers >= o.numNumbers
      ? $a($g(r.values, o.values), n)
      : (s) => `${s > 0 ? t : e}`;
  },
  Hs = (e, t, n) => {
    const r = t - e;
    return r === 0 ? 1 : (n - e) / r;
  },
  eh = (e, t) => (n) => he(e, t, n);
function t4(e) {
  return typeof e == 'number'
    ? eh
    : typeof e == 'string'
      ? Ae.test(e)
        ? kg
        : _g
      : Array.isArray(e)
        ? $g
        : typeof e == 'object'
          ? e4
          : eh;
}
function n4(e, t, n) {
  const r = [],
    o = n || t4(e[0]),
    i = e.length - 1;
  for (let s = 0; s < i; s++) {
    let a = o(e[s], e[s + 1]);
    if (t) {
      const l = Array.isArray(t) ? t[s] : t;
      a = $a(l, a);
    }
    r.push(a);
  }
  return r;
}
function Tg(e, t, { clamp: n = !0, ease: r, mixer: o } = {}) {
  const i = e.length;
  Ws(i === t.length),
    Ws(!r || !Array.isArray(r) || r.length === i - 1),
    e[0] > e[i - 1] && ((e = [...e].reverse()), (t = [...t].reverse()));
  const s = n4(t, r, o),
    a = s.length,
    l = (u) => {
      let c = 0;
      if (a > 1) for (; c < e.length - 2 && !(u < e[c + 1]); c++);
      const d = Hs(e[c], e[c + 1], u);
      return s[c](d);
    };
  return n ? (u) => l(Fr(e[0], e[i - 1], u)) : l;
}
const Jf = (e) => e,
  Rg = (e, t, n) =>
    (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e,
  r4 = 1e-7,
  o4 = 12;
function i4(e, t, n, r, o) {
  let i,
    s,
    a = 0;
  do (s = t + (n - t) / 2), (i = Rg(s, r, o) - e), i > 0 ? (n = s) : (t = s);
  while (Math.abs(i) > r4 && ++a < o4);
  return s;
}
function Mg(e, t, n, r) {
  if (e === t && n === r) return Jf;
  const o = (i) => i4(i, 0, 1, e, n);
  return (i) => (i === 0 || i === 1 ? i : Rg(o(i), t, r));
}
const Og = (e) => 1 - Math.sin(Math.acos(e)),
  ed = Yf(Og),
  s4 = qf(ed),
  Ag = Mg(0.33, 1.53, 0.69, 0.99),
  td = Yf(Ag),
  a4 = qf(td),
  l4 = (e) =>
    (e *= 2) < 1 ? 0.5 * td(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1))),
  u4 = {
    linear: Jf,
    easeIn: Xf,
    easeInOut: Zf,
    easeOut: Y7,
    circIn: Og,
    circInOut: s4,
    circOut: ed,
    backIn: td,
    backInOut: a4,
    backOut: Ag,
    anticipate: l4
  },
  th = (e) => {
    if (Array.isArray(e)) {
      Ws(e.length === 4);
      const [t, n, r, o] = e;
      return Mg(t, n, r, o);
    } else if (typeof e == 'string') return u4[e];
    return e;
  },
  c4 = (e) => Array.isArray(e) && typeof e[0] != 'number';
function f4(e, t) {
  return e.map(() => t || Zf).splice(0, e.length - 1);
}
function d4(e) {
  const t = e.length;
  return e.map((n, r) => (r !== 0 ? r / (t - 1) : 0));
}
function p4(e, t) {
  return e.map((n) => n * t);
}
function Xu({ keyframes: e, ease: t = Zf, times: n, duration: r = 300 }) {
  e = [...e];
  const o = c4(t) ? t.map(th) : th(t),
    i = { done: !1, value: e[0] },
    s = p4(n && n.length === e.length ? n : d4(e), r);
  function a() {
    return Tg(s, e, { ease: Array.isArray(o) ? o : f4(e, o) });
  }
  let l = a();
  return {
    next: (u) => ((i.value = l(u)), (i.done = u >= r), i),
    flipTarget: () => {
      e.reverse(), (l = a());
    }
  };
}
const Sl = 0.001,
  h4 = 0.01,
  nh = 10,
  m4 = 0.05,
  g4 = 1;
function v4({
  duration: e = 800,
  bounce: t = 0.25,
  velocity: n = 0,
  mass: r = 1
}) {
  let o, i;
  Q7(e <= nh * 1e3);
  let s = 1 - t;
  (s = Fr(m4, g4, s)),
    (e = Fr(h4, nh, e / 1e3)),
    s < 1
      ? ((o = (u) => {
          const c = u * s,
            d = c * e,
            h = c - n,
            v = Zu(u, s),
            w = Math.exp(-d);
          return Sl - (h / v) * w;
        }),
        (i = (u) => {
          const d = u * s * e,
            h = d * n + n,
            v = Math.pow(s, 2) * Math.pow(u, 2) * e,
            w = Math.exp(-d),
            x = Zu(Math.pow(u, 2), s);
          return ((-o(u) + Sl > 0 ? -1 : 1) * ((h - v) * w)) / x;
        }))
      : ((o = (u) => {
          const c = Math.exp(-u * e),
            d = (u - n) * e + 1;
          return -Sl + c * d;
        }),
        (i = (u) => {
          const c = Math.exp(-u * e),
            d = (n - u) * (e * e);
          return c * d;
        }));
  const a = 5 / e,
    l = w4(o, i, a);
  if (((e = e * 1e3), isNaN(l)))
    return { stiffness: 100, damping: 10, duration: e };
  {
    const u = Math.pow(l, 2) * r;
    return { stiffness: u, damping: s * 2 * Math.sqrt(r * u), duration: e };
  }
}
const y4 = 12;
function w4(e, t, n) {
  let r = n;
  for (let o = 1; o < y4; o++) r = r - e(r) / t(r);
  return r;
}
function Zu(e, t) {
  return e * Math.sqrt(1 - t * t);
}
const x4 = ['duration', 'bounce'],
  C4 = ['stiffness', 'damping', 'mass'];
function rh(e, t) {
  return t.some((n) => e[n] !== void 0);
}
function b4(e) {
  let t = {
    velocity: 0,
    stiffness: 100,
    damping: 10,
    mass: 1,
    isResolvedFromDuration: !1,
    ...e
  };
  if (!rh(e, C4) && rh(e, x4)) {
    const n = v4(e);
    (t = { ...t, ...n, velocity: 0, mass: 1 }), (t.isResolvedFromDuration = !0);
  }
  return t;
}
const S4 = 5;
function Dg({ keyframes: e, restSpeed: t = 2, restDelta: n = 0.01, ...r }) {
  let o = e[0],
    i = e[e.length - 1];
  const s = { done: !1, value: o },
    {
      stiffness: a,
      damping: l,
      mass: u,
      velocity: c,
      duration: d,
      isResolvedFromDuration: h
    } = b4(r);
  let v = E4,
    w = c ? -(c / 1e3) : 0;
  const x = l / (2 * Math.sqrt(a * u));
  function b() {
    const p = i - o,
      m = Math.sqrt(a / u) / 1e3;
    if ((n === void 0 && (n = Math.min(Math.abs(i - o) / 100, 0.4)), x < 1)) {
      const f = Zu(m, x);
      v = (y) => {
        const C = Math.exp(-x * m * y);
        return (
          i -
          C * (((w + x * m * p) / f) * Math.sin(f * y) + p * Math.cos(f * y))
        );
      };
    } else if (x === 1) v = (f) => i - Math.exp(-m * f) * (p + (w + m * p) * f);
    else {
      const f = m * Math.sqrt(x * x - 1);
      v = (y) => {
        const C = Math.exp(-x * m * y),
          S = Math.min(f * y, 300);
        return (
          i - (C * ((w + x * m * p) * Math.sinh(S) + f * p * Math.cosh(S))) / f
        );
      };
    }
  }
  return (
    b(),
    {
      next: (p) => {
        const m = v(p);
        if (h) s.done = p >= d;
        else {
          let f = w;
          if (p !== 0)
            if (x < 1) {
              const S = Math.max(0, p - S4);
              f = Wf(m - v(S), p - S);
            } else f = 0;
          const y = Math.abs(f) <= t,
            C = Math.abs(i - m) <= n;
          s.done = y && C;
        }
        return (s.value = s.done ? i : m), s;
      },
      flipTarget: () => {
        (w = -w), ([o, i] = [i, o]), b();
      }
    }
  );
}
Dg.needsInterpolation = (e, t) => typeof e == 'string' || typeof t == 'string';
const E4 = (e) => 0;
function k4({
  keyframes: e = [0],
  velocity: t = 0,
  power: n = 0.8,
  timeConstant: r = 350,
  restDelta: o = 0.5,
  modifyTarget: i
}) {
  const s = e[0],
    a = { done: !1, value: s };
  let l = n * t;
  const u = s + l,
    c = i === void 0 ? u : i(u);
  return (
    c !== u && (l = c - s),
    {
      next: (d) => {
        const h = -l * Math.exp(-d / r);
        return (a.done = !(h > o || h < -o)), (a.value = a.done ? c : c + h), a;
      },
      flipTarget: () => {}
    }
  );
}
const P4 = { decay: k4, keyframes: Xu, tween: Xu, spring: Dg };
function Lg(e, t, n = 0) {
  return e - t - n;
}
function $4(e, t = 0, n = 0, r = !0) {
  return r ? Lg(t + -e, t, n) : t - (e - t) + n;
}
function _4(e, t, n, r) {
  return r ? e >= t + n : e <= -n;
}
const T4 = (e) => {
  const t = ({ delta: n }) => e(n);
  return { start: () => Ie.update(t, !0), stop: () => xn.update(t) };
};
function Gs({
  duration: e,
  driver: t = T4,
  elapsed: n = 0,
  repeat: r = 0,
  repeatType: o = 'loop',
  repeatDelay: i = 0,
  keyframes: s,
  autoplay: a = !0,
  onPlay: l,
  onStop: u,
  onComplete: c,
  onRepeat: d,
  onUpdate: h,
  type: v = 'keyframes',
  ...w
}) {
  var x, b;
  const p = n;
  let m,
    f = 0,
    y = e,
    C = !1,
    S = !0,
    E;
  const k = P4[s.length > 2 ? 'keyframes' : v] || Xu,
    A = s[0],
    R = s[s.length - 1];
  let j = { done: !1, value: A };
  !((b = (x = k).needsInterpolation) === null || b === void 0) &&
    b.call(x, A, R) &&
    ((E = Tg([0, 100], [A, R], { clamp: !1 })), (s = [0, 100]));
  const W = k({ ...w, duration: e, keyframes: s });
  function _() {
    f++,
      o === 'reverse'
        ? ((S = f % 2 === 0), (n = $4(n, y, i, S)))
        : ((n = Lg(n, y, i)), o === 'mirror' && W.flipTarget()),
      (C = !1),
      d && d();
  }
  function $() {
    m && m.stop(), c && c();
  }
  function T(D) {
    S || (D = -D),
      (n += D),
      C ||
        ((j = W.next(Math.max(0, n))),
        E && (j.value = E(j.value)),
        (C = S ? j.done : n <= 0)),
      h && h(j.value),
      C &&
        (f === 0 && (y = y !== void 0 ? y : n),
        f < r ? _4(n, y, i, S) && _() : $());
  }
  function M() {
    l && l(), (m = t(T)), m.start();
  }
  return (
    a && M(),
    {
      stop: () => {
        u && u(), m && m.stop();
      },
      sample: (D) => {
        n = p;
        const P = e && typeof e == 'number' ? Math.max(e * 0.5, 50) : 50;
        let O = 0;
        for (T(0); O <= D; ) {
          const F = D - O;
          T(Math.min(F, P)), (O += P);
        }
        return j;
      }
    }
  );
}
function R4(e) {
  return !e || Array.isArray(e) || (typeof e == 'string' && Fg[e]);
}
const lo = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`,
  Fg = {
    linear: 'linear',
    ease: 'ease',
    easeIn: 'ease-in',
    easeOut: 'ease-out',
    easeInOut: 'ease-in-out',
    circIn: lo([0, 0.65, 0.55, 1]),
    circOut: lo([0.55, 0, 1, 0.45]),
    backIn: lo([0.31, 0.01, 0.66, -0.59]),
    backOut: lo([0.33, 1.53, 0.69, 0.99])
  };
function M4(e) {
  if (e) return Array.isArray(e) ? lo(e) : Fg[e];
}
function O4(
  e,
  t,
  n,
  {
    delay: r = 0,
    duration: o,
    repeat: i = 0,
    repeatType: s = 'loop',
    ease: a,
    times: l
  } = {}
) {
  return e.animate(
    { [t]: n, offset: l },
    {
      delay: r,
      duration: o,
      easing: M4(a),
      fill: 'both',
      iterations: i + 1,
      direction: s === 'reverse' ? 'alternate' : 'normal'
    }
  );
}
const oh = {
    waapi: () => Object.hasOwnProperty.call(Element.prototype, 'animate')
  },
  El = {},
  Ng = {};
for (const e in oh)
  Ng[e] = () => (El[e] === void 0 && (El[e] = oh[e]()), El[e]);
function A4(e, { repeat: t, repeatType: n = 'loop' }) {
  const r = t && n !== 'loop' && t % 2 === 1 ? 0 : e.length - 1;
  return e[r];
}
const D4 = new Set(['opacity']),
  Li = 10;
function L4(e, t, { onUpdate: n, onComplete: r, ...o }) {
  if (
    !(
      Ng.waapi() &&
      D4.has(t) &&
      !o.repeatDelay &&
      o.repeatType !== 'mirror' &&
      o.damping !== 0
    )
  )
    return !1;
  let { keyframes: s, duration: a = 300, elapsed: l = 0, ease: u } = o;
  if (o.type === 'spring' || !R4(o.ease)) {
    if (o.repeat === 1 / 0) return;
    const d = Gs(o);
    let h = { done: !1, value: s[0] };
    const v = [];
    let w = 0;
    for (; !h.done && w < 2e4; ) (h = d.sample(w)), v.push(h.value), (w += Li);
    (s = v), (a = w - Li), (u = 'linear');
  }
  const c = O4(e.owner.current, t, s, {
    ...o,
    delay: -l,
    duration: a,
    ease: u
  });
  return (
    (c.onfinish = () => {
      e.set(A4(s, o)), r && r();
    }),
    () => {
      const { currentTime: d } = c;
      if (d) {
        const h = Gs({ ...o, autoplay: !1 });
        e.setWithVelocity(h.sample(d - Li).value, h.sample(d).value, Li);
      }
      Ie.update(() => c.cancel());
    }
  );
}
function Ig(e, t) {
  const n = performance.now(),
    r = ({ timestamp: o }) => {
      const i = o - n;
      i >= t && (xn.read(r), e(i - t));
    };
  return Ie.read(r, !0), () => xn.read(r);
}
function F4({ keyframes: e, elapsed: t, onUpdate: n, onComplete: r }) {
  const o = () => (n && n(e[e.length - 1]), r && r(), () => {});
  return t ? Ig(o, -t) : o();
}
function N4({
  keyframes: e,
  velocity: t = 0,
  min: n,
  max: r,
  power: o = 0.8,
  timeConstant: i = 750,
  bounceStiffness: s = 500,
  bounceDamping: a = 10,
  restDelta: l = 1,
  modifyTarget: u,
  driver: c,
  onUpdate: d,
  onComplete: h,
  onStop: v
}) {
  const w = e[0];
  let x;
  function b(y) {
    return (n !== void 0 && y < n) || (r !== void 0 && y > r);
  }
  function p(y) {
    return n === void 0
      ? r
      : r === void 0 || Math.abs(n - y) < Math.abs(r - y)
        ? n
        : r;
  }
  function m(y) {
    x == null || x.stop(),
      (x = Gs({
        keyframes: [0, 1],
        velocity: 0,
        ...y,
        driver: c,
        onUpdate: (C) => {
          var S;
          d == null || d(C),
            (S = y.onUpdate) === null || S === void 0 || S.call(y, C);
        },
        onComplete: h,
        onStop: v
      }));
  }
  function f(y) {
    m({ type: 'spring', stiffness: s, damping: a, restDelta: l, ...y });
  }
  if (b(w)) f({ velocity: t, keyframes: [w, p(w)] });
  else {
    let y = o * t + w;
    typeof u < 'u' && (y = u(y));
    const C = p(y),
      S = C === n ? -1 : 1;
    let E, k;
    const A = (R) => {
      (E = k),
        (k = R),
        (t = Wf(R - E, zt.delta)),
        ((S === 1 && R > C) || (S === -1 && R < C)) &&
          f({ keyframes: [R, C], velocity: t });
    };
    m({
      type: 'decay',
      keyframes: [w, 0],
      velocity: t,
      timeConstant: i,
      power: o,
      restDelta: l,
      modifyTarget: u,
      onUpdate: b(y) ? A : void 0
    });
  }
  return { stop: () => (x == null ? void 0 : x.stop()) };
}
const $n = () => ({
    type: 'spring',
    stiffness: 500,
    damping: 25,
    restSpeed: 10
  }),
  Fi = (e) => ({
    type: 'spring',
    stiffness: 550,
    damping: e === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10
  }),
  kl = () => ({ type: 'keyframes', ease: 'linear', duration: 0.3 }),
  I4 = { type: 'keyframes', duration: 0.8 },
  ih = {
    x: $n,
    y: $n,
    z: $n,
    rotate: $n,
    rotateX: $n,
    rotateY: $n,
    rotateZ: $n,
    scaleX: Fi,
    scaleY: Fi,
    scale: Fi,
    opacity: kl,
    backgroundColor: kl,
    color: kl,
    default: Fi
  },
  V4 = (e, { keyframes: t }) =>
    t.length > 2 ? I4 : (ih[e] || ih.default)(t[1]),
  Ju = (e, t) =>
    e === 'zIndex'
      ? !1
      : !!(
          typeof t == 'number' ||
          Array.isArray(t) ||
          (typeof t == 'string' && Cn.test(t) && !t.startsWith('url('))
        );
function z4({
  when: e,
  delay: t,
  delayChildren: n,
  staggerChildren: r,
  staggerDirection: o,
  repeat: i,
  repeatType: s,
  repeatDelay: a,
  from: l,
  elapsed: u,
  ...c
}) {
  return !!Object.keys(c).length;
}
function sh(e) {
  return (
    e === 0 ||
    (typeof e == 'string' && parseFloat(e) === 0 && e.indexOf(' ') === -1)
  );
}
function ah(e) {
  return typeof e == 'number' ? 0 : Qf('', e);
}
function Vg(e, t) {
  return e[t] || e.default || e;
}
function j4(e, t, n, r) {
  const o = Ju(t, n);
  let i = r.from !== void 0 ? r.from : e.get();
  return (
    i === 'none' && o && typeof n == 'string'
      ? (i = Qf(t, n))
      : sh(i) && typeof n == 'string'
        ? (i = ah(n))
        : !Array.isArray(n) && sh(n) && typeof i == 'string' && (n = ah(i)),
    Array.isArray(n) ? (n[0] === null && (n[0] = i), n) : [i, n]
  );
}
const nd =
  (e, t, n, r = {}) =>
  (o) => {
    const i = Vg(r, e) || {},
      s = i.delay || r.delay || 0;
    let { elapsed: a = 0 } = r;
    a = a - ss(s);
    const l = j4(t, e, n, i),
      u = l[0],
      c = l[l.length - 1],
      d = Ju(e, u),
      h = Ju(e, c);
    let v = {
      keyframes: l,
      velocity: t.getVelocity(),
      ...i,
      elapsed: a,
      onUpdate: (p) => {
        t.set(p), i.onUpdate && i.onUpdate(p);
      },
      onComplete: () => {
        o(), i.onComplete && i.onComplete();
      }
    };
    if (!d || !h || q7.current || i.type === !1) return F4(v);
    if (i.type === 'inertia') {
      const p = N4(v);
      return () => p.stop();
    }
    z4(i) || (v = { ...v, ...V4(e, v) }),
      v.duration && (v.duration = ss(v.duration)),
      v.repeatDelay && (v.repeatDelay = ss(v.repeatDelay));
    const w = t.owner,
      x = w && w.current;
    if (
      w &&
      x instanceof HTMLElement &&
      !(w != null && w.getProps().onUpdate)
    ) {
      const p = L4(t, e, v);
      if (p) return p;
    }
    const b = Gs(v);
    return () => b.stop();
  };
function B4(e, t, n = {}) {
  e.notify('AnimationStart', t);
  let r;
  if (Array.isArray(t)) {
    const o = t.map((i) => ec(e, i, n));
    r = Promise.all(o);
  } else if (typeof t == 'string') r = ec(e, t, n);
  else {
    const o = typeof t == 'function' ? Ta(e, t, n.custom) : t;
    r = zg(e, o, n);
  }
  return r.then(() => e.notify('AnimationComplete', t));
}
function ec(e, t, n = {}) {
  var r;
  const o = Ta(e, t, n.custom);
  let { transition: i = e.getDefaultTransition() || {} } = o || {};
  n.transitionOverride && (i = n.transitionOverride);
  const s = o ? () => zg(e, o, n) : () => Promise.resolve(),
    a =
      !((r = e.variantChildren) === null || r === void 0) && r.size
        ? (u = 0) => {
            const {
              delayChildren: c = 0,
              staggerChildren: d,
              staggerDirection: h
            } = i;
            return U4(e, t, c + u, d, h, n);
          }
        : () => Promise.resolve(),
    { when: l } = i;
  if (l) {
    const [u, c] = l === 'beforeChildren' ? [s, a] : [a, s];
    return u().then(c);
  } else return Promise.all([s(), a(n.delay)]);
}
function zg(e, t, { delay: n = 0, transitionOverride: r, type: o } = {}) {
  var i;
  let {
    transition: s = e.getDefaultTransition(),
    transitionEnd: a,
    ...l
  } = e.makeTargetAnimatable(t);
  const u = e.getValue('willChange');
  r && (s = r);
  const c = [],
    d =
      o &&
      ((i = e.animationState) === null || i === void 0
        ? void 0
        : i.getState()[o]);
  for (const h in l) {
    const v = e.getValue(h),
      w = l[h];
    if (!v || w === void 0 || (d && W4(d, h))) continue;
    let x = { delay: n, elapsed: 0, ...s };
    if (
      (e.shouldReduceMotion && Yn.has(h) && (x = { ...x, type: !1, delay: 0 }),
      !v.hasAnimated)
    ) {
      const p = e.getProps()[G7];
      p && (x.elapsed = W7(p, h));
    }
    let b = v.start(nd(h, v, w, x));
    Ks(u) && (u.add(h), (b = b.then(() => u.remove(h)))), c.push(b);
  }
  return Promise.all(c).then(() => {
    a && z7(e, a);
  });
}
function U4(e, t, n = 0, r = 0, o = 1, i) {
  const s = [],
    a = (e.variantChildren.size - 1) * r,
    l = o === 1 ? (u = 0) => u * r : (u = 0) => a - u * r;
  return (
    Array.from(e.variantChildren)
      .sort(K4)
      .forEach((u, c) => {
        u.notify('AnimationStart', t),
          s.push(
            ec(u, t, { ...i, delay: n + l(c) }).then(() =>
              u.notify('AnimationComplete', t)
            )
          );
      }),
    Promise.all(s)
  );
}
function K4(e, t) {
  return e.sortNodePosition(t);
}
function W4({ protectedKeys: e, needsAnimating: t }, n) {
  const r = e.hasOwnProperty(n) && t[n] !== !0;
  return (t[n] = !1), r;
}
const rd = [
    re.Animate,
    re.InView,
    re.Focus,
    re.Hover,
    re.Tap,
    re.Drag,
    re.Exit
  ],
  H4 = [...rd].reverse(),
  G4 = rd.length;
function Q4(e) {
  return (t) =>
    Promise.all(t.map(({ animation: n, options: r }) => B4(e, n, r)));
}
function q4(e) {
  let t = Q4(e);
  const n = X4();
  let r = !0;
  const o = (l, u) => {
    const c = Ta(e, u);
    if (c) {
      const { transition: d, transitionEnd: h, ...v } = c;
      l = { ...l, ...v, ...h };
    }
    return l;
  };
  function i(l) {
    t = l(e);
  }
  function s(l, u) {
    const c = e.getProps(),
      d = e.getVariantContext(!0) || {},
      h = [],
      v = new Set();
    let w = {},
      x = 1 / 0;
    for (let p = 0; p < G4; p++) {
      const m = H4[p],
        f = n[m],
        y = c[m] !== void 0 ? c[m] : d[m],
        C = Qo(y),
        S = m === u ? f.isActive : null;
      S === !1 && (x = p);
      let E = y === d[m] && y !== c[m] && C;
      if (
        (E && r && e.manuallyAnimateOnMount && (E = !1),
        (f.protectedKeys = { ...w }),
        (!f.isActive && S === null) ||
          (!y && !f.prevProp) ||
          Ea(y) ||
          typeof y == 'boolean')
      )
        continue;
      const k = Y4(f.prevProp, y);
      let A = k || (m === u && f.isActive && !E && C) || (p > x && C);
      const R = Array.isArray(y) ? y : [y];
      let j = R.reduce(o, {});
      S === !1 && (j = {});
      const { prevResolvedValues: W = {} } = f,
        _ = { ...W, ...j },
        $ = (T) => {
          (A = !0), v.delete(T), (f.needsAnimating[T] = !0);
        };
      for (const T in _) {
        const M = j[T],
          D = W[T];
        w.hasOwnProperty(T) ||
          (M !== D
            ? js(M) && js(D)
              ? !hg(M, D) || k
                ? $(T)
                : (f.protectedKeys[T] = !0)
              : M !== void 0
                ? $(T)
                : v.add(T)
            : M !== void 0 && v.has(T)
              ? $(T)
              : (f.protectedKeys[T] = !0));
      }
      (f.prevProp = y),
        (f.prevResolvedValues = j),
        f.isActive && (w = { ...w, ...j }),
        r && e.blockInitialAnimation && (A = !1),
        A &&
          !E &&
          h.push(
            ...R.map((T) => ({ animation: T, options: { type: m, ...l } }))
          );
    }
    if (v.size) {
      const p = {};
      v.forEach((m) => {
        const f = e.getBaseTarget(m);
        f !== void 0 && (p[m] = f);
      }),
        h.push({ animation: p });
    }
    let b = Boolean(h.length);
    return (
      r && c.initial === !1 && !e.manuallyAnimateOnMount && (b = !1),
      (r = !1),
      b ? t(h) : Promise.resolve()
    );
  }
  function a(l, u, c) {
    var d;
    if (n[l].isActive === u) return Promise.resolve();
    (d = e.variantChildren) === null ||
      d === void 0 ||
      d.forEach((v) => {
        var w;
        return (w = v.animationState) === null || w === void 0
          ? void 0
          : w.setActive(l, u);
      }),
      (n[l].isActive = u);
    const h = s(c, l);
    for (const v in n) n[v].protectedKeys = {};
    return h;
  }
  return {
    animateChanges: s,
    setActive: a,
    setAnimateFunction: i,
    getState: () => n
  };
}
function Y4(e, t) {
  return typeof t == 'string' ? t !== e : Array.isArray(t) ? !hg(t, e) : !1;
}
function _n(e = !1) {
  return {
    isActive: e,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {}
  };
}
function X4() {
  return {
    [re.Animate]: _n(!0),
    [re.InView]: _n(),
    [re.Hover]: _n(),
    [re.Tap]: _n(),
    [re.Drag]: _n(),
    [re.Focus]: _n(),
    [re.Exit]: _n()
  };
}
const Z4 = {
    animation: ln(({ visualElement: e, animate: t }) => {
      e.animationState || (e.animationState = q4(e)),
        Ea(t) && g.useEffect(() => t.subscribe(e), [t]);
    }),
    exit: ln((e) => {
      const { custom: t, visualElement: n } = e,
        [r, o] = pg(),
        i = g.useContext(ai);
      g.useEffect(() => {
        n.isPresent = r;
        const s =
          n.animationState &&
          n.animationState.setActive(re.Exit, !r, {
            custom: (i && i.custom) || t
          });
        s && !r && s.then(o);
      }, [r]);
    })
  },
  lh = (e, t) => Math.abs(e - t);
function J4(e, t) {
  const n = lh(e.x, t.x),
    r = lh(e.y, t.y);
  return Math.sqrt(n ** 2 + r ** 2);
}
class jg {
  constructor(t, n, { transformPagePoint: r } = {}) {
    if (
      ((this.startEvent = null),
      (this.lastMoveEvent = null),
      (this.lastMoveEventInfo = null),
      (this.handlers = {}),
      (this.updatePoint = () => {
        if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
        const u = $l(this.lastMoveEventInfo, this.history),
          c = this.startEvent !== null,
          d = J4(u.offset, { x: 0, y: 0 }) >= 3;
        if (!c && !d) return;
        const { point: h } = u,
          { timestamp: v } = zt;
        this.history.push({ ...h, timestamp: v });
        const { onStart: w, onMove: x } = this.handlers;
        c ||
          (w && w(this.lastMoveEvent, u),
          (this.startEvent = this.lastMoveEvent)),
          x && x(this.lastMoveEvent, u);
      }),
      (this.handlePointerMove = (u, c) => {
        (this.lastMoveEvent = u),
          (this.lastMoveEventInfo = Pl(c, this.transformPagePoint)),
          Ie.update(this.updatePoint, !0);
      }),
      (this.handlePointerUp = (u, c) => {
        this.end();
        const { onEnd: d, onSessionEnd: h } = this.handlers,
          v = $l(Pl(c, this.transformPagePoint), this.history);
        this.startEvent && d && d(u, v), h && h(u, v);
      }),
      !ag(t))
    )
      return;
    (this.handlers = n), (this.transformPagePoint = r);
    const o = zf(t),
      i = Pl(o, this.transformPagePoint),
      { point: s } = i,
      { timestamp: a } = zt;
    this.history = [{ ...s, timestamp: a }];
    const { onSessionStart: l } = n;
    l && l(t, $l(i, this.history)),
      (this.removeListeners = $a(
        _r(window, 'pointermove', this.handlePointerMove),
        _r(window, 'pointerup', this.handlePointerUp),
        _r(window, 'pointercancel', this.handlePointerUp)
      ));
  }
  updateHandlers(t) {
    this.handlers = t;
  }
  end() {
    this.removeListeners && this.removeListeners(), xn.update(this.updatePoint);
  }
}
function Pl(e, t) {
  return t ? { point: t(e.point) } : e;
}
function uh(e, t) {
  return { x: e.x - t.x, y: e.y - t.y };
}
function $l({ point: e }, t) {
  return {
    point: e,
    delta: uh(e, Bg(t)),
    offset: uh(e, ew(t)),
    velocity: tw(t, 0.1)
  };
}
function ew(e) {
  return e[0];
}
function Bg(e) {
  return e[e.length - 1];
}
function tw(e, t) {
  if (e.length < 2) return { x: 0, y: 0 };
  let n = e.length - 1,
    r = null;
  const o = Bg(e);
  for (; n >= 0 && ((r = e[n]), !(o.timestamp - r.timestamp > ss(t))); ) n--;
  if (!r) return { x: 0, y: 0 };
  const i = (o.timestamp - r.timestamp) / 1e3;
  if (i === 0) return { x: 0, y: 0 };
  const s = { x: (o.x - r.x) / i, y: (o.y - r.y) / i };
  return s.x === 1 / 0 && (s.x = 0), s.y === 1 / 0 && (s.y = 0), s;
}
function et(e) {
  return e.max - e.min;
}
function tc(e, t = 0, n = 0.01) {
  return Math.abs(e - t) <= n;
}
function ch(e, t, n, r = 0.5) {
  (e.origin = r),
    (e.originPoint = he(t.min, t.max, e.origin)),
    (e.scale = et(n) / et(t)),
    (tc(e.scale, 1, 1e-4) || isNaN(e.scale)) && (e.scale = 1),
    (e.translate = he(n.min, n.max, e.origin) - e.originPoint),
    (tc(e.translate) || isNaN(e.translate)) && (e.translate = 0);
}
function So(e, t, n, r) {
  ch(e.x, t.x, n.x, r == null ? void 0 : r.originX),
    ch(e.y, t.y, n.y, r == null ? void 0 : r.originY);
}
function fh(e, t, n) {
  (e.min = n.min + t.min), (e.max = e.min + et(t));
}
function nw(e, t, n) {
  fh(e.x, t.x, n.x), fh(e.y, t.y, n.y);
}
function dh(e, t, n) {
  (e.min = t.min - n.min), (e.max = e.min + et(t));
}
function Eo(e, t, n) {
  dh(e.x, t.x, n.x), dh(e.y, t.y, n.y);
}
function rw(e, { min: t, max: n }, r) {
  return (
    t !== void 0 && e < t
      ? (e = r ? he(t, e, r.min) : Math.max(e, t))
      : n !== void 0 && e > n && (e = r ? he(n, e, r.max) : Math.min(e, n)),
    e
  );
}
function ph(e, t, n) {
  return {
    min: t !== void 0 ? e.min + t : void 0,
    max: n !== void 0 ? e.max + n - (e.max - e.min) : void 0
  };
}
function ow(e, { top: t, left: n, bottom: r, right: o }) {
  return { x: ph(e.x, n, o), y: ph(e.y, t, r) };
}
function hh(e, t) {
  let n = t.min - e.min,
    r = t.max - e.max;
  return t.max - t.min < e.max - e.min && ([n, r] = [r, n]), { min: n, max: r };
}
function iw(e, t) {
  return { x: hh(e.x, t.x), y: hh(e.y, t.y) };
}
function sw(e, t) {
  let n = 0.5;
  const r = et(e),
    o = et(t);
  return (
    o > r
      ? (n = Hs(t.min, t.max - r, e.min))
      : r > o && (n = Hs(e.min, e.max - o, t.min)),
    Fr(0, 1, n)
  );
}
function aw(e, t) {
  const n = {};
  return (
    t.min !== void 0 && (n.min = t.min - e.min),
    t.max !== void 0 && (n.max = t.max - e.min),
    n
  );
}
const nc = 0.35;
function lw(e = nc) {
  return (
    e === !1 ? (e = 0) : e === !0 && (e = nc),
    { x: mh(e, 'left', 'right'), y: mh(e, 'top', 'bottom') }
  );
}
function mh(e, t, n) {
  return { min: gh(e, t), max: gh(e, n) };
}
function gh(e, t) {
  return typeof e == 'number' ? e : e[t] || 0;
}
const vh = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
  ko = () => ({ x: vh(), y: vh() }),
  yh = () => ({ min: 0, max: 0 }),
  ye = () => ({ x: yh(), y: yh() });
function St(e) {
  return [e('x'), e('y')];
}
function Ug({ top: e, left: t, right: n, bottom: r }) {
  return { x: { min: t, max: n }, y: { min: e, max: r } };
}
function uw({ x: e, y: t }) {
  return { top: t.min, right: e.max, bottom: t.max, left: e.min };
}
function cw(e, t) {
  if (!t) return e;
  const n = t({ x: e.left, y: e.top }),
    r = t({ x: e.right, y: e.bottom });
  return { top: n.y, left: n.x, bottom: r.y, right: r.x };
}
function _l(e) {
  return e === void 0 || e === 1;
}
function rc({ scale: e, scaleX: t, scaleY: n }) {
  return !_l(e) || !_l(t) || !_l(n);
}
function Mn(e) {
  return rc(e) || Kg(e) || e.z || e.rotate || e.rotateX || e.rotateY;
}
function Kg(e) {
  return wh(e.x) || wh(e.y);
}
function wh(e) {
  return e && e !== '0%';
}
function Qs(e, t, n) {
  const r = e - n,
    o = t * r;
  return n + o;
}
function xh(e, t, n, r, o) {
  return o !== void 0 && (e = Qs(e, o, r)), Qs(e, n, r) + t;
}
function oc(e, t = 0, n = 1, r, o) {
  (e.min = xh(e.min, t, n, r, o)), (e.max = xh(e.max, t, n, r, o));
}
function Wg(e, { x: t, y: n }) {
  oc(e.x, t.translate, t.scale, t.originPoint),
    oc(e.y, n.translate, n.scale, n.originPoint);
}
function fw(e, t, n, r = !1) {
  var o, i;
  const s = n.length;
  if (!s) return;
  t.x = t.y = 1;
  let a, l;
  for (let u = 0; u < s; u++)
    (a = n[u]),
      (l = a.projectionDelta),
      ((i = (o = a.instance) === null || o === void 0 ? void 0 : o.style) ===
        null || i === void 0
        ? void 0
        : i.display) !== 'contents' &&
        (r &&
          a.options.layoutScroll &&
          a.scroll &&
          a !== a.root &&
          Cr(e, { x: -a.scroll.offset.x, y: -a.scroll.offset.y }),
        l && ((t.x *= l.x.scale), (t.y *= l.y.scale), Wg(e, l)),
        r && Mn(a.latestValues) && Cr(e, a.latestValues));
  (t.x = Ch(t.x)), (t.y = Ch(t.y));
}
function Ch(e) {
  return Number.isInteger(e) || e > 1.0000000000001 || e < 0.999999999999
    ? e
    : 1;
}
function en(e, t) {
  (e.min = e.min + t), (e.max = e.max + t);
}
function bh(e, t, [n, r, o]) {
  const i = t[o] !== void 0 ? t[o] : 0.5,
    s = he(e.min, e.max, i);
  oc(e, t[n], t[r], s, t.scale);
}
const dw = ['x', 'scaleX', 'originX'],
  pw = ['y', 'scaleY', 'originY'];
function Cr(e, t) {
  bh(e.x, t, dw), bh(e.y, t, pw);
}
function Hg(e, t) {
  return Ug(cw(e.getBoundingClientRect(), t));
}
function hw(e, t, n) {
  const r = Hg(e, n),
    { scroll: o } = t;
  return o && (en(r.x, o.offset.x), en(r.y, o.offset.y)), r;
}
const mw = new WeakMap();
class gw {
  constructor(t) {
    (this.openGlobalLock = null),
      (this.isDragging = !1),
      (this.currentDirection = null),
      (this.originPoint = { x: 0, y: 0 }),
      (this.constraints = !1),
      (this.hasMutatedConstraints = !1),
      (this.elastic = ye()),
      (this.visualElement = t);
  }
  start(t, { snapToCursor: n = !1 } = {}) {
    if (this.visualElement.isPresent === !1) return;
    const r = (a) => {
        this.stopAnimation(), n && this.snapToCursor(zf(a, 'page').point);
      },
      o = (a, l) => {
        var u;
        const { drag: c, dragPropagation: d, onDragStart: h } = this.getProps();
        (c &&
          !d &&
          (this.openGlobalLock && this.openGlobalLock(),
          (this.openGlobalLock = cg(c)),
          !this.openGlobalLock)) ||
          ((this.isDragging = !0),
          (this.currentDirection = null),
          this.resolveConstraints(),
          this.visualElement.projection &&
            ((this.visualElement.projection.isAnimationBlocked = !0),
            (this.visualElement.projection.target = void 0)),
          St((v) => {
            var w, x;
            let b = this.getAxisMotionValue(v).get() || 0;
            if ($t.test(b)) {
              const p =
                (x =
                  (w = this.visualElement.projection) === null || w === void 0
                    ? void 0
                    : w.layout) === null || x === void 0
                  ? void 0
                  : x.layoutBox[v];
              p && (b = et(p) * (parseFloat(b) / 100));
            }
            this.originPoint[v] = b;
          }),
          h == null || h(a, l),
          (u = this.visualElement.animationState) === null ||
            u === void 0 ||
            u.setActive(re.Drag, !0));
      },
      i = (a, l) => {
        const {
          dragPropagation: u,
          dragDirectionLock: c,
          onDirectionLock: d,
          onDrag: h
        } = this.getProps();
        if (!u && !this.openGlobalLock) return;
        const { offset: v } = l;
        if (c && this.currentDirection === null) {
          (this.currentDirection = vw(v)),
            this.currentDirection !== null &&
              (d == null || d(this.currentDirection));
          return;
        }
        this.updateAxis('x', l.point, v),
          this.updateAxis('y', l.point, v),
          this.visualElement.render(),
          h == null || h(a, l);
      },
      s = (a, l) => this.stop(a, l);
    this.panSession = new jg(
      t,
      { onSessionStart: r, onStart: o, onMove: i, onSessionEnd: s },
      { transformPagePoint: this.visualElement.getTransformPagePoint() }
    );
  }
  stop(t, n) {
    const r = this.isDragging;
    if ((this.cancel(), !r)) return;
    const { velocity: o } = n;
    this.startAnimation(o);
    const { onDragEnd: i } = this.getProps();
    i == null || i(t, n);
  }
  cancel() {
    var t, n;
    (this.isDragging = !1),
      this.visualElement.projection &&
        (this.visualElement.projection.isAnimationBlocked = !1),
      (t = this.panSession) === null || t === void 0 || t.end(),
      (this.panSession = void 0);
    const { dragPropagation: r } = this.getProps();
    !r &&
      this.openGlobalLock &&
      (this.openGlobalLock(), (this.openGlobalLock = null)),
      (n = this.visualElement.animationState) === null ||
        n === void 0 ||
        n.setActive(re.Drag, !1);
  }
  updateAxis(t, n, r) {
    const { drag: o } = this.getProps();
    if (!r || !Ni(t, o, this.currentDirection)) return;
    const i = this.getAxisMotionValue(t);
    let s = this.originPoint[t] + r[t];
    this.constraints &&
      this.constraints[t] &&
      (s = rw(s, this.constraints[t], this.elastic[t])),
      i.set(s);
  }
  resolveConstraints() {
    const { dragConstraints: t, dragElastic: n } = this.getProps(),
      { layout: r } = this.visualElement.projection || {},
      o = this.constraints;
    t && wr(t)
      ? this.constraints || (this.constraints = this.resolveRefConstraints())
      : t && r
        ? (this.constraints = ow(r.layoutBox, t))
        : (this.constraints = !1),
      (this.elastic = lw(n)),
      o !== this.constraints &&
        r &&
        this.constraints &&
        !this.hasMutatedConstraints &&
        St((i) => {
          this.getAxisMotionValue(i) &&
            (this.constraints[i] = aw(r.layoutBox[i], this.constraints[i]));
        });
  }
  resolveRefConstraints() {
    const { dragConstraints: t, onMeasureDragConstraints: n } = this.getProps();
    if (!t || !wr(t)) return !1;
    const r = t.current,
      { projection: o } = this.visualElement;
    if (!o || !o.layout) return !1;
    const i = hw(r, o.root, this.visualElement.getTransformPagePoint());
    let s = iw(o.layout.layoutBox, i);
    if (n) {
      const a = n(uw(s));
      (this.hasMutatedConstraints = !!a), a && (s = Ug(a));
    }
    return s;
  }
  startAnimation(t) {
    const {
        drag: n,
        dragMomentum: r,
        dragElastic: o,
        dragTransition: i,
        dragSnapToOrigin: s,
        onDragTransitionEnd: a
      } = this.getProps(),
      l = this.constraints || {},
      u = St((c) => {
        if (!Ni(c, n, this.currentDirection)) return;
        let d = (l == null ? void 0 : l[c]) || {};
        s && (d = { min: 0, max: 0 });
        const h = o ? 200 : 1e6,
          v = o ? 40 : 1e7,
          w = {
            type: 'inertia',
            velocity: r ? t[c] : 0,
            bounceStiffness: h,
            bounceDamping: v,
            timeConstant: 750,
            restDelta: 1,
            restSpeed: 10,
            ...i,
            ...d
          };
        return this.startAxisValueAnimation(c, w);
      });
    return Promise.all(u).then(a);
  }
  startAxisValueAnimation(t, n) {
    const r = this.getAxisMotionValue(t);
    return r.start(nd(t, r, 0, n));
  }
  stopAnimation() {
    St((t) => this.getAxisMotionValue(t).stop());
  }
  getAxisMotionValue(t) {
    var n;
    const r = '_drag' + t.toUpperCase(),
      o = this.visualElement.getProps()[r];
    return (
      o ||
      this.visualElement.getValue(
        t,
        ((n = this.visualElement.getProps().initial) === null || n === void 0
          ? void 0
          : n[t]) || 0
      )
    );
  }
  snapToCursor(t) {
    St((n) => {
      const { drag: r } = this.getProps();
      if (!Ni(n, r, this.currentDirection)) return;
      const { projection: o } = this.visualElement,
        i = this.getAxisMotionValue(n);
      if (o && o.layout) {
        const { min: s, max: a } = o.layout.layoutBox[n];
        i.set(t[n] - he(s, a, 0.5));
      }
    });
  }
  scalePositionWithinConstraints() {
    var t;
    if (!this.visualElement.current) return;
    const { drag: n, dragConstraints: r } = this.getProps(),
      { projection: o } = this.visualElement;
    if (!wr(r) || !o || !this.constraints) return;
    this.stopAnimation();
    const i = { x: 0, y: 0 };
    St((a) => {
      const l = this.getAxisMotionValue(a);
      if (l) {
        const u = l.get();
        i[a] = sw({ min: u, max: u }, this.constraints[a]);
      }
    });
    const { transformTemplate: s } = this.visualElement.getProps();
    (this.visualElement.current.style.transform = s ? s({}, '') : 'none'),
      (t = o.root) === null || t === void 0 || t.updateScroll(),
      o.updateLayout(),
      this.resolveConstraints(),
      St((a) => {
        if (!Ni(a, n, null)) return;
        const l = this.getAxisMotionValue(a),
          { min: u, max: c } = this.constraints[a];
        l.set(he(u, c, i[a]));
      });
  }
  addListeners() {
    var t;
    if (!this.visualElement.current) return;
    mw.set(this.visualElement, this);
    const n = this.visualElement.current,
      r = _r(n, 'pointerdown', (u) => {
        const { drag: c, dragListener: d = !0 } = this.getProps();
        c && d && this.start(u);
      }),
      o = () => {
        const { dragConstraints: u } = this.getProps();
        wr(u) && (this.constraints = this.resolveRefConstraints());
      },
      { projection: i } = this.visualElement,
      s = i.addEventListener('measure', o);
    i &&
      !i.layout &&
      ((t = i.root) === null || t === void 0 || t.updateScroll(),
      i.updateLayout()),
      o();
    const a = Pa(window, 'resize', () => this.scalePositionWithinConstraints()),
      l = i.addEventListener(
        'didUpdate',
        ({ delta: u, hasLayoutChanged: c }) => {
          this.isDragging &&
            c &&
            (St((d) => {
              const h = this.getAxisMotionValue(d);
              h &&
                ((this.originPoint[d] += u[d].translate),
                h.set(h.get() + u[d].translate));
            }),
            this.visualElement.render());
        }
      );
    return () => {
      a(), r(), s(), l == null || l();
    };
  }
  getProps() {
    const t = this.visualElement.getProps(),
      {
        drag: n = !1,
        dragDirectionLock: r = !1,
        dragPropagation: o = !1,
        dragConstraints: i = !1,
        dragElastic: s = nc,
        dragMomentum: a = !0
      } = t;
    return {
      ...t,
      drag: n,
      dragDirectionLock: r,
      dragPropagation: o,
      dragConstraints: i,
      dragElastic: s,
      dragMomentum: a
    };
  }
}
function Ni(e, t, n) {
  return (t === !0 || t === e) && (n === null || n === e);
}
function vw(e, t = 10) {
  let n = null;
  return Math.abs(e.y) > t ? (n = 'y') : Math.abs(e.x) > t && (n = 'x'), n;
}
function yw(e) {
  const { dragControls: t, visualElement: n } = e,
    r = jr(() => new gw(n));
  g.useEffect(() => t && t.subscribe(r), [r, t]),
    g.useEffect(() => r.addListeners(), [r]);
}
function ww({
  onPan: e,
  onPanStart: t,
  onPanEnd: n,
  onPanSessionStart: r,
  visualElement: o
}) {
  const i = e || t || n || r,
    s = g.useRef(null),
    { transformPagePoint: a } = g.useContext(Ca),
    l = {
      onSessionStart: r,
      onStart: t,
      onMove: e,
      onEnd: (c, d) => {
        (s.current = null), n && n(c, d);
      }
    };
  g.useEffect(() => {
    s.current !== null && s.current.updateHandlers(l);
  });
  function u(c) {
    s.current = new jg(c, l, { transformPagePoint: a });
  }
  Bs(o, 'pointerdown', i && u), jf(() => s.current && s.current.end());
}
const xw = { pan: ln(ww), drag: ln(yw) };
function ic(e) {
  return typeof e == 'string' && e.startsWith('var(--');
}
const Gg = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;
function Cw(e) {
  const t = Gg.exec(e);
  if (!t) return [,];
  const [, n, r] = t;
  return [n, r];
}
function sc(e, t, n = 1) {
  const [r, o] = Cw(e);
  if (!r) return;
  const i = window.getComputedStyle(t).getPropertyValue(r);
  return i ? i.trim() : ic(o) ? sc(o, t, n + 1) : o;
}
function bw(e, { ...t }, n) {
  const r = e.current;
  if (!(r instanceof Element)) return { target: t, transitionEnd: n };
  n && (n = { ...n }),
    e.values.forEach((o) => {
      const i = o.get();
      if (!ic(i)) return;
      const s = sc(i, r);
      s && o.set(s);
    });
  for (const o in t) {
    const i = t[o];
    if (!ic(i)) continue;
    const s = sc(i, r);
    s && ((t[o] = s), n && n[o] === void 0 && (n[o] = i));
  }
  return { target: t, transitionEnd: n };
}
const Sw = new Set([
    'width',
    'height',
    'top',
    'left',
    'right',
    'bottom',
    'x',
    'y'
  ]),
  Qg = (e) => Sw.has(e),
  Ew = (e) => Object.keys(e).some(Qg),
  Sh = (e) => e === Xn || e === H;
var Eh;
(function (e) {
  (e.width = 'width'),
    (e.height = 'height'),
    (e.left = 'left'),
    (e.right = 'right'),
    (e.top = 'top'),
    (e.bottom = 'bottom');
})(Eh || (Eh = {}));
const kh = (e, t) => parseFloat(e.split(', ')[t]),
  Ph =
    (e, t) =>
    (n, { transform: r }) => {
      if (r === 'none' || !r) return 0;
      const o = r.match(/^matrix3d\((.+)\)$/);
      if (o) return kh(o[1], t);
      {
        const i = r.match(/^matrix\((.+)\)$/);
        return i ? kh(i[1], e) : 0;
      }
    },
  kw = new Set(['x', 'y', 'z']),
  Pw = Vs.filter((e) => !kw.has(e));
function $w(e) {
  const t = [];
  return (
    Pw.forEach((n) => {
      const r = e.getValue(n);
      r !== void 0 &&
        (t.push([n, r.get()]), r.set(n.startsWith('scale') ? 1 : 0));
    }),
    t.length && e.render(),
    t
  );
}
const $h = {
    width: ({ x: e }, { paddingLeft: t = '0', paddingRight: n = '0' }) =>
      e.max - e.min - parseFloat(t) - parseFloat(n),
    height: ({ y: e }, { paddingTop: t = '0', paddingBottom: n = '0' }) =>
      e.max - e.min - parseFloat(t) - parseFloat(n),
    top: (e, { top: t }) => parseFloat(t),
    left: (e, { left: t }) => parseFloat(t),
    bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
    right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
    x: Ph(4, 13),
    y: Ph(5, 14)
  },
  _w = (e, t, n) => {
    const r = t.measureViewportBox(),
      o = t.current,
      i = getComputedStyle(o),
      { display: s } = i,
      a = {};
    s === 'none' && t.setStaticValue('display', e.display || 'block'),
      n.forEach((u) => {
        a[u] = $h[u](r, i);
      }),
      t.render();
    const l = t.measureViewportBox();
    return (
      n.forEach((u) => {
        const c = t.getValue(u);
        c && c.jump(a[u]), (e[u] = $h[u](l, i));
      }),
      e
    );
  },
  Tw = (e, t, n = {}, r = {}) => {
    (t = { ...t }), (r = { ...r });
    const o = Object.keys(t).filter(Qg);
    let i = [],
      s = !1;
    const a = [];
    if (
      (o.forEach((l) => {
        const u = e.getValue(l);
        if (!e.hasValue(l)) return;
        let c = n[l],
          d = no(c);
        const h = t[l];
        let v;
        if (js(h)) {
          const w = h.length,
            x = h[0] === null ? 1 : 0;
          (c = h[x]), (d = no(c));
          for (let b = x; b < w; b++) v ? Ws(no(h[b]) === v) : (v = no(h[b]));
        } else v = no(h);
        if (d !== v)
          if (Sh(d) && Sh(v)) {
            const w = u.get();
            typeof w == 'string' && u.set(parseFloat(w)),
              typeof h == 'string'
                ? (t[l] = parseFloat(h))
                : Array.isArray(h) && v === H && (t[l] = h.map(parseFloat));
          } else
            d != null &&
            d.transform &&
            v != null &&
            v.transform &&
            (c === 0 || h === 0)
              ? c === 0
                ? u.set(v.transform(c))
                : (t[l] = d.transform(h))
              : (s || ((i = $w(e)), (s = !0)),
                a.push(l),
                (r[l] = r[l] !== void 0 ? r[l] : t[l]),
                u.jump(h));
      }),
      a.length)
    ) {
      const l = a.indexOf('height') >= 0 ? window.pageYOffset : null,
        u = _w(t, e, a);
      return (
        i.length &&
          i.forEach(([c, d]) => {
            e.getValue(c).set(d);
          }),
        e.render(),
        Sa && l !== null && window.scrollTo({ top: l }),
        { target: u, transitionEnd: r }
      );
    } else return { target: t, transitionEnd: r };
  };
function Rw(e, t, n, r) {
  return Ew(t) ? Tw(e, t, n, r) : { target: t, transitionEnd: r };
}
const Mw = (e, t, n, r) => {
    const o = bw(e, t, r);
    return (t = o.target), (r = o.transitionEnd), Rw(e, t, n, r);
  },
  ac = { current: null },
  qg = { current: !1 };
function Ow() {
  if (((qg.current = !0), !!Sa))
    if (window.matchMedia) {
      const e = window.matchMedia('(prefers-reduced-motion)'),
        t = () => (ac.current = e.matches);
      e.addListener(t), t();
    } else ac.current = !1;
}
function Aw(e, t, n) {
  const { willChange: r } = t;
  for (const o in t) {
    const i = t[o],
      s = n[o];
    if (ct(i)) e.addValue(o, i), Ks(r) && r.add(o);
    else if (ct(s)) e.addValue(o, Gn(i, { owner: e })), Ks(r) && r.remove(o);
    else if (s !== i)
      if (e.hasValue(o)) {
        const a = e.getValue(o);
        !a.hasAnimated && a.set(i);
      } else {
        const a = e.getStaticValue(o);
        e.addValue(o, Gn(a !== void 0 ? a : i));
      }
  }
  for (const o in n) t[o] === void 0 && e.removeValue(o);
  return t;
}
const Yg = Object.keys(qo),
  Dw = Yg.length,
  _h = [
    'AnimationStart',
    'AnimationComplete',
    'Update',
    'BeforeLayoutMeasure',
    'LayoutMeasure',
    'LayoutAnimationStart',
    'LayoutAnimationComplete'
  ];
class Lw {
  constructor(
    { parent: t, props: n, reducedMotionConfig: r, visualState: o },
    i = {}
  ) {
    (this.current = null),
      (this.children = new Set()),
      (this.isVariantNode = !1),
      (this.isControllingVariants = !1),
      (this.shouldReduceMotion = null),
      (this.values = new Map()),
      (this.isPresent = !0),
      (this.valueSubscriptions = new Map()),
      (this.prevMotionValues = {}),
      (this.events = {}),
      (this.propEventSubscriptions = {}),
      (this.notifyUpdate = () => this.notify('Update', this.latestValues)),
      (this.render = () => {
        this.current &&
          (this.triggerBuild(),
          this.renderInstance(
            this.current,
            this.renderState,
            this.props.style,
            this.projection
          ));
      }),
      (this.scheduleRender = () => Ie.render(this.render, !1, !0));
    const { latestValues: s, renderState: a } = o;
    (this.latestValues = s),
      (this.baseTarget = { ...s }),
      (this.initialValues = n.initial ? { ...s } : {}),
      (this.renderState = a),
      (this.parent = t),
      (this.props = n),
      (this.depth = t ? t.depth + 1 : 0),
      (this.reducedMotionConfig = r),
      (this.options = i),
      (this.isControllingVariants = ka(n)),
      (this.isVariantNode = Q1(n)),
      this.isVariantNode && (this.variantChildren = new Set()),
      (this.manuallyAnimateOnMount = Boolean(t && t.current));
    const { willChange: l, ...u } = this.scrapeMotionValuesFromProps(n, {});
    for (const c in u) {
      const d = u[c];
      s[c] !== void 0 && ct(d) && (d.set(s[c], !1), Ks(l) && l.add(c));
    }
  }
  scrapeMotionValuesFromProps(t, n) {
    return {};
  }
  mount(t) {
    var n;
    (this.current = t),
      this.projection && this.projection.mount(t),
      this.parent &&
        this.isVariantNode &&
        !this.isControllingVariants &&
        (this.removeFromVariantTree =
          (n = this.parent) === null || n === void 0
            ? void 0
            : n.addVariantChild(this)),
      this.values.forEach((r, o) => this.bindToMotionValue(o, r)),
      qg.current || Ow(),
      (this.shouldReduceMotion =
        this.reducedMotionConfig === 'never'
          ? !1
          : this.reducedMotionConfig === 'always'
            ? !0
            : ac.current),
      this.parent && this.parent.children.add(this),
      this.setProps(this.props);
  }
  unmount() {
    var t, n, r;
    (t = this.projection) === null || t === void 0 || t.unmount(),
      xn.update(this.notifyUpdate),
      xn.render(this.render),
      this.valueSubscriptions.forEach((o) => o()),
      (n = this.removeFromVariantTree) === null || n === void 0 || n.call(this),
      (r = this.parent) === null || r === void 0 || r.children.delete(this);
    for (const o in this.events) this.events[o].clear();
    this.current = null;
  }
  bindToMotionValue(t, n) {
    const r = Yn.has(t),
      o = n.on('change', (s) => {
        (this.latestValues[t] = s),
          this.props.onUpdate && Ie.update(this.notifyUpdate, !1, !0),
          r && this.projection && (this.projection.isTransformDirty = !0);
      }),
      i = n.on('renderRequest', this.scheduleRender);
    this.valueSubscriptions.set(t, () => {
      o(), i();
    });
  }
  sortNodePosition(t) {
    return !this.current ||
      !this.sortInstanceNodePosition ||
      this.type !== t.type
      ? 0
      : this.sortInstanceNodePosition(this.current, t.current);
  }
  loadFeatures(t, n, r, o, i, s) {
    const a = [];
    for (let l = 0; l < Dw; l++) {
      const u = Yg[l],
        { isEnabled: c, Component: d } = qo[u];
      c(t) &&
        d &&
        a.push(g.createElement(d, { key: u, ...t, visualElement: this }));
    }
    if (!this.projection && i) {
      this.projection = new i(
        o,
        this.latestValues,
        this.parent && this.parent.projection
      );
      const {
        layoutId: l,
        layout: u,
        drag: c,
        dragConstraints: d,
        layoutScroll: h
      } = t;
      this.projection.setOptions({
        layoutId: l,
        layout: u,
        alwaysMeasureLayout: Boolean(c) || (d && wr(d)),
        visualElement: this,
        scheduleRender: () => this.scheduleRender(),
        animationType: typeof u == 'string' ? u : 'both',
        initialPromotionConfig: s,
        layoutScroll: h
      });
    }
    return a;
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.options, this.props);
  }
  measureViewportBox() {
    return this.current
      ? this.measureInstanceViewportBox(this.current, this.props)
      : ye();
  }
  getStaticValue(t) {
    return this.latestValues[t];
  }
  setStaticValue(t, n) {
    this.latestValues[t] = n;
  }
  makeTargetAnimatable(t, n = !0) {
    return this.makeTargetAnimatableFromInstance(t, this.props, n);
  }
  setProps(t) {
    (t.transformTemplate || this.props.transformTemplate) &&
      this.scheduleRender();
    const n = this.props;
    this.props = t;
    for (let r = 0; r < _h.length; r++) {
      const o = _h[r];
      this.propEventSubscriptions[o] &&
        (this.propEventSubscriptions[o](),
        delete this.propEventSubscriptions[o]);
      const i = t['on' + o];
      i && (this.propEventSubscriptions[o] = this.on(o, i));
    }
    this.prevMotionValues = Aw(
      this,
      this.scrapeMotionValuesFromProps(t, n),
      this.prevMotionValues
    );
  }
  getProps() {
    return this.props;
  }
  getVariant(t) {
    var n;
    return (n = this.props.variants) === null || n === void 0 ? void 0 : n[t];
  }
  getDefaultTransition() {
    return this.props.transition;
  }
  getTransformPagePoint() {
    return this.props.transformPagePoint;
  }
  getClosestVariantNode() {
    var t;
    return this.isVariantNode
      ? this
      : (t = this.parent) === null || t === void 0
        ? void 0
        : t.getClosestVariantNode();
  }
  getVariantContext(t = !1) {
    var n, r;
    if (t)
      return (n = this.parent) === null || n === void 0
        ? void 0
        : n.getVariantContext();
    if (!this.isControllingVariants) {
      const i =
        ((r = this.parent) === null || r === void 0
          ? void 0
          : r.getVariantContext()) || {};
      return (
        this.props.initial !== void 0 && (i.initial = this.props.initial), i
      );
    }
    const o = {};
    for (let i = 0; i < Fw; i++) {
      const s = Xg[i],
        a = this.props[s];
      (Qo(a) || a === !1) && (o[s] = a);
    }
    return o;
  }
  addVariantChild(t) {
    var n;
    const r = this.getClosestVariantNode();
    if (r)
      return (
        (n = r.variantChildren) === null || n === void 0 || n.add(t),
        () => r.variantChildren.delete(t)
      );
  }
  addValue(t, n) {
    n !== this.values.get(t) &&
      (this.removeValue(t), this.bindToMotionValue(t, n)),
      this.values.set(t, n),
      (this.latestValues[t] = n.get());
  }
  removeValue(t) {
    var n;
    this.values.delete(t),
      (n = this.valueSubscriptions.get(t)) === null || n === void 0 || n(),
      this.valueSubscriptions.delete(t),
      delete this.latestValues[t],
      this.removeValueFromRenderState(t, this.renderState);
  }
  hasValue(t) {
    return this.values.has(t);
  }
  getValue(t, n) {
    if (this.props.values && this.props.values[t]) return this.props.values[t];
    let r = this.values.get(t);
    return (
      r === void 0 &&
        n !== void 0 &&
        ((r = Gn(n, { owner: this })), this.addValue(t, r)),
      r
    );
  }
  readValue(t) {
    return this.latestValues[t] !== void 0 || !this.current
      ? this.latestValues[t]
      : this.readValueFromInstance(this.current, t, this.options);
  }
  setBaseTarget(t, n) {
    this.baseTarget[t] = n;
  }
  getBaseTarget(t) {
    var n;
    const { initial: r } = this.props,
      o =
        typeof r == 'string' || typeof r == 'object'
          ? (n = Vf(this.props, r)) === null || n === void 0
            ? void 0
            : n[t]
          : void 0;
    if (r && o !== void 0) return o;
    const i = this.getBaseTargetFromProps(this.props, t);
    return i !== void 0 && !ct(i)
      ? i
      : this.initialValues[t] !== void 0 && o === void 0
        ? void 0
        : this.baseTarget[t];
  }
  on(t, n) {
    return this.events[t] || (this.events[t] = new Kf()), this.events[t].add(n);
  }
  notify(t, ...n) {
    var r;
    (r = this.events[t]) === null || r === void 0 || r.notify(...n);
  }
}
const Xg = ['initial', ...rd],
  Fw = Xg.length;
class Zg extends Lw {
  sortInstanceNodePosition(t, n) {
    return t.compareDocumentPosition(n) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(t, n) {
    var r;
    return (r = t.style) === null || r === void 0 ? void 0 : r[n];
  }
  removeValueFromRenderState(t, { vars: n, style: r }) {
    delete n[t], delete r[t];
  }
  makeTargetAnimatableFromInstance(
    { transition: t, transitionEnd: n, ...r },
    { transformValues: o },
    i
  ) {
    let s = U7(r, t || {}, this);
    if ((o && (n && (n = o(n)), r && (r = o(r)), s && (s = o(s))), i)) {
      j7(this, r, s);
      const a = Mw(this, r, s, n);
      (n = a.transitionEnd), (r = a.target);
    }
    return { transition: t, transitionEnd: n, ...r };
  }
}
function Nw(e) {
  return window.getComputedStyle(e);
}
class Iw extends Zg {
  readValueFromInstance(t, n) {
    if (Yn.has(n)) {
      const r = Gf(n);
      return (r && r.default) || 0;
    } else {
      const r = Nw(t),
        o = (X1(n) ? r.getPropertyValue(n) : r[n]) || 0;
      return typeof o == 'string' ? o.trim() : o;
    }
  }
  measureInstanceViewportBox(t, { transformPagePoint: n }) {
    return Hg(t, n);
  }
  build(t, n, r, o) {
    Af(t, n, r, o.transformTemplate);
  }
  scrapeMotionValuesFromProps(t, n) {
    return If(t, n);
  }
  renderInstance(t, n, r, o) {
    ng(t, n, r, o);
  }
}
class Vw extends Zg {
  constructor() {
    super(...arguments), (this.isSVGTag = !1);
  }
  getBaseTargetFromProps(t, n) {
    return t[n];
  }
  readValueFromInstance(t, n) {
    var r;
    return Yn.has(n)
      ? ((r = Gf(n)) === null || r === void 0 ? void 0 : r.default) || 0
      : ((n = rg.has(n) ? n : Nf(n)), t.getAttribute(n));
  }
  measureInstanceViewportBox() {
    return ye();
  }
  scrapeMotionValuesFromProps(t, n) {
    return ig(t, n);
  }
  build(t, n, r, o) {
    Lf(t, n, r, this.isSVGTag, o.transformTemplate);
  }
  renderInstance(t, n, r, o) {
    og(t, n, r, o);
  }
  mount(t) {
    (this.isSVGTag = Ff(t.tagName)), super.mount(t);
  }
}
const zw = (e, t) =>
  Of(e)
    ? new Vw(t, { enableHardwareAcceleration: !1 })
    : new Iw(t, { enableHardwareAcceleration: !0 });
function Th(e, t) {
  return t.max === t.min ? 0 : (e / (t.max - t.min)) * 100;
}
const ro = {
    correct: (e, t) => {
      if (!t.target) return e;
      if (typeof e == 'string')
        if (H.test(e)) e = parseFloat(e);
        else return e;
      const n = Th(e, t.target.x),
        r = Th(e, t.target.y);
      return `${n}% ${r}%`;
    }
  },
  Rh = '_$css',
  jw = {
    correct: (e, { treeScale: t, projectionDelta: n }) => {
      const r = e,
        o = e.includes('var('),
        i = [];
      o && (e = e.replace(Gg, (v) => (i.push(v), Rh)));
      const s = Cn.parse(e);
      if (s.length > 5) return r;
      const a = Cn.createTransformer(e),
        l = typeof s[0] != 'number' ? 1 : 0,
        u = n.x.scale * t.x,
        c = n.y.scale * t.y;
      (s[0 + l] /= u), (s[1 + l] /= c);
      const d = he(u, c, 0.5);
      typeof s[2 + l] == 'number' && (s[2 + l] /= d),
        typeof s[3 + l] == 'number' && (s[3 + l] /= d);
      let h = a(s);
      if (o) {
        let v = 0;
        h = h.replace(Rh, () => {
          const w = i[v];
          return v++, w;
        });
      }
      return h;
    }
  };
class Bw extends je.Component {
  componentDidMount() {
    const {
        visualElement: t,
        layoutGroup: n,
        switchLayoutGroup: r,
        layoutId: o
      } = this.props,
      { projection: i } = t;
    k6(Kw),
      i &&
        (n.group && n.group.add(i),
        r && r.register && o && r.register(i),
        i.root.didUpdate(),
        i.addEventListener('animationComplete', () => {
          this.safeToRemove();
        }),
        i.setOptions({
          ...i.options,
          onExitComplete: () => this.safeToRemove()
        })),
      (xo.hasEverUpdated = !0);
  }
  getSnapshotBeforeUpdate(t) {
    const {
        layoutDependency: n,
        visualElement: r,
        drag: o,
        isPresent: i
      } = this.props,
      s = r.projection;
    return (
      s &&
        ((s.isPresent = i),
        o || t.layoutDependency !== n || n === void 0
          ? s.willUpdate()
          : this.safeToRemove(),
        t.isPresent !== i &&
          (i
            ? s.promote()
            : s.relegate() ||
              Ie.postRender(() => {
                var a;
                (!((a = s.getStack()) === null || a === void 0) &&
                  a.members.length) ||
                  this.safeToRemove();
              }))),
      null
    );
  }
  componentDidUpdate() {
    const { projection: t } = this.props.visualElement;
    t &&
      (t.root.didUpdate(),
      !t.currentAnimation && t.isLead() && this.safeToRemove());
  }
  componentWillUnmount() {
    const {
        visualElement: t,
        layoutGroup: n,
        switchLayoutGroup: r
      } = this.props,
      { projection: o } = t;
    o &&
      (o.scheduleCheckAfterUnmount(),
      n != null && n.group && n.group.remove(o),
      r != null && r.deregister && r.deregister(o));
  }
  safeToRemove() {
    const { safeToRemove: t } = this.props;
    t == null || t();
  }
  render() {
    return null;
  }
}
function Uw(e) {
  const [t, n] = pg(),
    r = g.useContext(Mf);
  return je.createElement(Bw, {
    ...e,
    layoutGroup: r,
    switchLayoutGroup: g.useContext(q1),
    isPresent: t,
    safeToRemove: n
  });
}
const Kw = {
    borderRadius: {
      ...ro,
      applyTo: [
        'borderTopLeftRadius',
        'borderTopRightRadius',
        'borderBottomLeftRadius',
        'borderBottomRightRadius'
      ]
    },
    borderTopLeftRadius: ro,
    borderTopRightRadius: ro,
    borderBottomLeftRadius: ro,
    borderBottomRightRadius: ro,
    boxShadow: jw
  },
  Ww = { measureLayout: Uw };
function Hw(e, t, n = {}) {
  const r = ct(e) ? e : Gn(e);
  return (
    r.start(nd('', r, t, n)),
    { stop: () => r.stop(), isAnimating: () => r.isAnimating() }
  );
}
const Jg = ['TopLeft', 'TopRight', 'BottomLeft', 'BottomRight'],
  Gw = Jg.length,
  Mh = (e) => (typeof e == 'string' ? parseFloat(e) : e),
  Oh = (e) => typeof e == 'number' || H.test(e);
function Qw(e, t, n, r, o, i) {
  o
    ? ((e.opacity = he(0, n.opacity !== void 0 ? n.opacity : 1, qw(r))),
      (e.opacityExit = he(t.opacity !== void 0 ? t.opacity : 1, 0, Yw(r))))
    : i &&
      (e.opacity = he(
        t.opacity !== void 0 ? t.opacity : 1,
        n.opacity !== void 0 ? n.opacity : 1,
        r
      ));
  for (let s = 0; s < Gw; s++) {
    const a = `border${Jg[s]}Radius`;
    let l = Ah(t, a),
      u = Ah(n, a);
    if (l === void 0 && u === void 0) continue;
    l || (l = 0),
      u || (u = 0),
      l === 0 || u === 0 || Oh(l) === Oh(u)
        ? ((e[a] = Math.max(he(Mh(l), Mh(u), r), 0)),
          ($t.test(u) || $t.test(l)) && (e[a] += '%'))
        : (e[a] = u);
  }
  (t.rotate || n.rotate) && (e.rotate = he(t.rotate || 0, n.rotate || 0, r));
}
function Ah(e, t) {
  return e[t] !== void 0 ? e[t] : e.borderRadius;
}
const qw = ev(0, 0.5, ed),
  Yw = ev(0.5, 0.95, Jf);
function ev(e, t, n) {
  return (r) => (r < e ? 0 : r > t ? 1 : n(Hs(e, t, r)));
}
function Dh(e, t) {
  (e.min = t.min), (e.max = t.max);
}
function pt(e, t) {
  Dh(e.x, t.x), Dh(e.y, t.y);
}
function Lh(e, t, n, r, o) {
  return (
    (e -= t), (e = Qs(e, 1 / n, r)), o !== void 0 && (e = Qs(e, 1 / o, r)), e
  );
}
function Xw(e, t = 0, n = 1, r = 0.5, o, i = e, s = e) {
  if (
    ($t.test(t) &&
      ((t = parseFloat(t)), (t = he(s.min, s.max, t / 100) - s.min)),
    typeof t != 'number')
  )
    return;
  let a = he(i.min, i.max, r);
  e === i && (a -= t),
    (e.min = Lh(e.min, t, n, a, o)),
    (e.max = Lh(e.max, t, n, a, o));
}
function Fh(e, t, [n, r, o], i, s) {
  Xw(e, t[n], t[r], t[o], t.scale, i, s);
}
const Zw = ['x', 'scaleX', 'originX'],
  Jw = ['y', 'scaleY', 'originY'];
function Nh(e, t, n, r) {
  Fh(e.x, t, Zw, n == null ? void 0 : n.x, r == null ? void 0 : r.x),
    Fh(e.y, t, Jw, n == null ? void 0 : n.y, r == null ? void 0 : r.y);
}
function Ih(e) {
  return e.translate === 0 && e.scale === 1;
}
function tv(e) {
  return Ih(e.x) && Ih(e.y);
}
function nv(e, t) {
  return (
    e.x.min === t.x.min &&
    e.x.max === t.x.max &&
    e.y.min === t.y.min &&
    e.y.max === t.y.max
  );
}
function Vh(e) {
  return et(e.x) / et(e.y);
}
class e8 {
  constructor() {
    this.members = [];
  }
  add(t) {
    Bf(this.members, t), t.scheduleRender();
  }
  remove(t) {
    if (
      (Uf(this.members, t),
      t === this.prevLead && (this.prevLead = void 0),
      t === this.lead)
    ) {
      const n = this.members[this.members.length - 1];
      n && this.promote(n);
    }
  }
  relegate(t) {
    const n = this.members.findIndex((o) => t === o);
    if (n === 0) return !1;
    let r;
    for (let o = n; o >= 0; o--) {
      const i = this.members[o];
      if (i.isPresent !== !1) {
        r = i;
        break;
      }
    }
    return r ? (this.promote(r), !0) : !1;
  }
  promote(t, n) {
    var r;
    const o = this.lead;
    if (t !== o && ((this.prevLead = o), (this.lead = t), t.show(), o)) {
      o.instance && o.scheduleRender(),
        t.scheduleRender(),
        (t.resumeFrom = o),
        n && (t.resumeFrom.preserveOpacity = !0),
        o.snapshot &&
          ((t.snapshot = o.snapshot),
          (t.snapshot.latestValues = o.animationValues || o.latestValues)),
        !((r = t.root) === null || r === void 0) &&
          r.isUpdating &&
          (t.isLayoutDirty = !0);
      const { crossfade: i } = t.options;
      i === !1 && o.hide();
    }
  }
  exitAnimationComplete() {
    this.members.forEach((t) => {
      var n, r, o, i, s;
      (r = (n = t.options).onExitComplete) === null ||
        r === void 0 ||
        r.call(n),
        (s =
          (o = t.resumingFrom) === null || o === void 0
            ? void 0
            : (i = o.options).onExitComplete) === null ||
          s === void 0 ||
          s.call(i);
    });
  }
  scheduleRender() {
    this.members.forEach((t) => {
      t.instance && t.scheduleRender(!1);
    });
  }
  removeLeadSnapshot() {
    this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
  }
}
function zh(e, t, n) {
  let r = '';
  const o = e.x.translate / t.x,
    i = e.y.translate / t.y;
  if (
    ((o || i) && (r = `translate3d(${o}px, ${i}px, 0) `),
    (t.x !== 1 || t.y !== 1) && (r += `scale(${1 / t.x}, ${1 / t.y}) `),
    n)
  ) {
    const { rotate: l, rotateX: u, rotateY: c } = n;
    l && (r += `rotate(${l}deg) `),
      u && (r += `rotateX(${u}deg) `),
      c && (r += `rotateY(${c}deg) `);
  }
  const s = e.x.scale * t.x,
    a = e.y.scale * t.y;
  return (s !== 1 || a !== 1) && (r += `scale(${s}, ${a})`), r || 'none';
}
const t8 = (e, t) => e.depth - t.depth;
class n8 {
  constructor() {
    (this.children = []), (this.isDirty = !1);
  }
  add(t) {
    Bf(this.children, t), (this.isDirty = !0);
  }
  remove(t) {
    Uf(this.children, t), (this.isDirty = !0);
  }
  forEach(t) {
    this.isDirty && this.children.sort(t8),
      (this.isDirty = !1),
      this.children.forEach(t);
  }
}
const jh = ['', 'X', 'Y', 'Z'],
  Bh = 1e3;
let r8 = 0;
function rv({
  attachResizeListener: e,
  defaultParent: t,
  measureScroll: n,
  checkIsScrollRoot: r,
  resetTransform: o
}) {
  return class {
    constructor(s, a = {}, l = t == null ? void 0 : t()) {
      (this.id = r8++),
        (this.animationId = 0),
        (this.children = new Set()),
        (this.options = {}),
        (this.isTreeAnimating = !1),
        (this.isAnimationBlocked = !1),
        (this.isLayoutDirty = !1),
        (this.isTransformDirty = !1),
        (this.isProjectionDirty = !1),
        (this.updateManuallyBlocked = !1),
        (this.updateBlockedByResize = !1),
        (this.isUpdating = !1),
        (this.isSVG = !1),
        (this.needsReset = !1),
        (this.shouldResetTransform = !1),
        (this.treeScale = { x: 1, y: 1 }),
        (this.eventHandlers = new Map()),
        (this.potentialNodes = new Map()),
        (this.checkUpdateFailed = () => {
          this.isUpdating && ((this.isUpdating = !1), this.clearAllSnapshots());
        }),
        (this.updateProjection = () => {
          this.nodes.forEach(s8),
            this.nodes.forEach(u8),
            this.nodes.forEach(c8);
        }),
        (this.hasProjected = !1),
        (this.isVisible = !0),
        (this.animationProgress = 0),
        (this.sharedNodes = new Map()),
        (this.elementId = s),
        (this.latestValues = a),
        (this.root = l ? l.root || l : this),
        (this.path = l ? [...l.path, l] : []),
        (this.parent = l),
        (this.depth = l ? l.depth + 1 : 0),
        s && this.root.registerPotentialNode(s, this);
      for (let u = 0; u < this.path.length; u++)
        this.path[u].shouldResetTransform = !0;
      this.root === this && (this.nodes = new n8());
    }
    addEventListener(s, a) {
      return (
        this.eventHandlers.has(s) || this.eventHandlers.set(s, new Kf()),
        this.eventHandlers.get(s).add(a)
      );
    }
    notifyListeners(s, ...a) {
      const l = this.eventHandlers.get(s);
      l == null || l.notify(...a);
    }
    hasListeners(s) {
      return this.eventHandlers.has(s);
    }
    registerPotentialNode(s, a) {
      this.potentialNodes.set(s, a);
    }
    mount(s, a = !1) {
      var l;
      if (this.instance) return;
      (this.isSVG = s instanceof SVGElement && s.tagName !== 'svg'),
        (this.instance = s);
      const { layoutId: u, layout: c, visualElement: d } = this.options;
      if (
        (d && !d.current && d.mount(s),
        this.root.nodes.add(this),
        (l = this.parent) === null || l === void 0 || l.children.add(this),
        this.elementId && this.root.potentialNodes.delete(this.elementId),
        a && (c || u) && (this.isLayoutDirty = !0),
        e)
      ) {
        let h;
        const v = () => (this.root.updateBlockedByResize = !1);
        e(s, () => {
          (this.root.updateBlockedByResize = !0),
            h && h(),
            (h = Ig(v, 250)),
            xo.hasAnimatedSinceResize &&
              ((xo.hasAnimatedSinceResize = !1), this.nodes.forEach(Kh));
        });
      }
      u && this.root.registerSharedNode(u, this),
        this.options.animate !== !1 &&
          d &&
          (u || c) &&
          this.addEventListener(
            'didUpdate',
            ({
              delta: h,
              hasLayoutChanged: v,
              hasRelativeTargetChanged: w,
              layout: x
            }) => {
              var b, p, m, f, y;
              if (this.isTreeAnimationBlocked()) {
                (this.target = void 0), (this.relativeTarget = void 0);
                return;
              }
              const C =
                  (p =
                    (b = this.options.transition) !== null && b !== void 0
                      ? b
                      : d.getDefaultTransition()) !== null && p !== void 0
                    ? p
                    : m8,
                { onLayoutAnimationStart: S, onLayoutAnimationComplete: E } =
                  d.getProps(),
                k = !this.targetLayout || !nv(this.targetLayout, x) || w,
                A = !v && w;
              if (
                (!((m = this.resumeFrom) === null || m === void 0) &&
                  m.instance) ||
                A ||
                (v && (k || !this.currentAnimation))
              ) {
                this.resumeFrom &&
                  ((this.resumingFrom = this.resumeFrom),
                  (this.resumingFrom.resumingFrom = void 0)),
                  this.setAnimationOrigin(h, A);
                const R = { ...Vg(C, 'layout'), onPlay: S, onComplete: E };
                d.shouldReduceMotion && ((R.delay = 0), (R.type = !1)),
                  this.startAnimation(R);
              } else
                !v && this.animationProgress === 0 && Kh(this),
                  this.isLead() &&
                    ((y = (f = this.options).onExitComplete) === null ||
                      y === void 0 ||
                      y.call(f));
              this.targetLayout = x;
            }
          );
    }
    unmount() {
      var s, a;
      this.options.layoutId && this.willUpdate(),
        this.root.nodes.remove(this),
        (s = this.getStack()) === null || s === void 0 || s.remove(this),
        (a = this.parent) === null || a === void 0 || a.children.delete(this),
        (this.instance = void 0),
        xn.preRender(this.updateProjection);
    }
    blockUpdate() {
      this.updateManuallyBlocked = !0;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = !1;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    isTreeAnimationBlocked() {
      var s;
      return (
        this.isAnimationBlocked ||
        ((s = this.parent) === null || s === void 0
          ? void 0
          : s.isTreeAnimationBlocked()) ||
        !1
      );
    }
    startUpdate() {
      var s;
      this.isUpdateBlocked() ||
        ((this.isUpdating = !0),
        (s = this.nodes) === null || s === void 0 || s.forEach(f8),
        this.animationId++);
    }
    willUpdate(s = !0) {
      var a, l, u;
      if (this.root.isUpdateBlocked()) {
        (l = (a = this.options).onExitComplete) === null ||
          l === void 0 ||
          l.call(a);
        return;
      }
      if (
        (!this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty)
      )
        return;
      this.isLayoutDirty = !0;
      for (let v = 0; v < this.path.length; v++) {
        const w = this.path[v];
        (w.shouldResetTransform = !0), w.updateScroll('snapshot');
      }
      const { layoutId: c, layout: d } = this.options;
      if (c === void 0 && !d) return;
      const h =
        (u = this.options.visualElement) === null || u === void 0
          ? void 0
          : u.getProps().transformTemplate;
      (this.prevTransformTemplateValue =
        h == null ? void 0 : h(this.latestValues, '')),
        this.updateSnapshot(),
        s && this.notifyListeners('willUpdate');
    }
    didUpdate() {
      if (this.isUpdateBlocked()) {
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(Uh);
        return;
      }
      this.isUpdating &&
        ((this.isUpdating = !1),
        this.potentialNodes.size &&
          (this.potentialNodes.forEach(g8), this.potentialNodes.clear()),
        this.nodes.forEach(l8),
        this.nodes.forEach(o8),
        this.nodes.forEach(i8),
        this.clearAllSnapshots(),
        wl.update(),
        wl.preRender(),
        wl.render());
    }
    clearAllSnapshots() {
      this.nodes.forEach(a8), this.sharedNodes.forEach(d8);
    }
    scheduleUpdateProjection() {
      Ie.preRender(this.updateProjection, !1, !0);
    }
    scheduleCheckAfterUnmount() {
      Ie.postRender(() => {
        this.isLayoutDirty
          ? this.root.didUpdate()
          : this.root.checkUpdateFailed();
      });
    }
    updateSnapshot() {
      this.snapshot || !this.instance || (this.snapshot = this.measure());
    }
    updateLayout() {
      var s;
      if (
        !this.instance ||
        (this.updateScroll(),
        !(this.options.alwaysMeasureLayout && this.isLead()) &&
          !this.isLayoutDirty)
      )
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let l = 0; l < this.path.length; l++) this.path[l].updateScroll();
      const a = this.layout;
      (this.layout = this.measure(!1)),
        (this.layoutCorrected = ye()),
        (this.isLayoutDirty = !1),
        (this.projectionDelta = void 0),
        this.notifyListeners('measure', this.layout.layoutBox),
        (s = this.options.visualElement) === null ||
          s === void 0 ||
          s.notify(
            'LayoutMeasure',
            this.layout.layoutBox,
            a == null ? void 0 : a.layoutBox
          );
    }
    updateScroll(s = 'measure') {
      let a = Boolean(this.options.layoutScroll && this.instance);
      this.scroll &&
        this.scroll.animationId === this.root.animationId &&
        this.scroll.phase === s &&
        (a = !1),
        a &&
          (this.scroll = {
            animationId: this.root.animationId,
            phase: s,
            isRoot: r(this.instance),
            offset: n(this.instance)
          });
    }
    resetTransform() {
      var s;
      if (!o) return;
      const a = this.isLayoutDirty || this.shouldResetTransform,
        l = this.projectionDelta && !tv(this.projectionDelta),
        u =
          (s = this.options.visualElement) === null || s === void 0
            ? void 0
            : s.getProps().transformTemplate,
        c = u == null ? void 0 : u(this.latestValues, ''),
        d = c !== this.prevTransformTemplateValue;
      a &&
        (l || Mn(this.latestValues) || d) &&
        (o(this.instance, c),
        (this.shouldResetTransform = !1),
        this.scheduleRender());
    }
    measure(s = !0) {
      const a = this.measurePageBox();
      let l = this.removeElementScroll(a);
      return (
        s && (l = this.removeTransform(l)),
        v8(l),
        {
          animationId: this.root.animationId,
          measuredBox: a,
          layoutBox: l,
          latestValues: {},
          source: this.id
        }
      );
    }
    measurePageBox() {
      const { visualElement: s } = this.options;
      if (!s) return ye();
      const a = s.measureViewportBox(),
        { scroll: l } = this.root;
      return l && (en(a.x, l.offset.x), en(a.y, l.offset.y)), a;
    }
    removeElementScroll(s) {
      const a = ye();
      pt(a, s);
      for (let l = 0; l < this.path.length; l++) {
        const u = this.path[l],
          { scroll: c, options: d } = u;
        if (u !== this.root && c && d.layoutScroll) {
          if (c.isRoot) {
            pt(a, s);
            const { scroll: h } = this.root;
            h && (en(a.x, -h.offset.x), en(a.y, -h.offset.y));
          }
          en(a.x, c.offset.x), en(a.y, c.offset.y);
        }
      }
      return a;
    }
    applyTransform(s, a = !1) {
      const l = ye();
      pt(l, s);
      for (let u = 0; u < this.path.length; u++) {
        const c = this.path[u];
        !a &&
          c.options.layoutScroll &&
          c.scroll &&
          c !== c.root &&
          Cr(l, { x: -c.scroll.offset.x, y: -c.scroll.offset.y }),
          Mn(c.latestValues) && Cr(l, c.latestValues);
      }
      return Mn(this.latestValues) && Cr(l, this.latestValues), l;
    }
    removeTransform(s) {
      var a;
      const l = ye();
      pt(l, s);
      for (let u = 0; u < this.path.length; u++) {
        const c = this.path[u];
        if (!c.instance || !Mn(c.latestValues)) continue;
        rc(c.latestValues) && c.updateSnapshot();
        const d = ye(),
          h = c.measurePageBox();
        pt(d, h),
          Nh(
            l,
            c.latestValues,
            (a = c.snapshot) === null || a === void 0 ? void 0 : a.layoutBox,
            d
          );
      }
      return Mn(this.latestValues) && Nh(l, this.latestValues), l;
    }
    setTargetDelta(s) {
      (this.targetDelta = s),
        (this.isProjectionDirty = !0),
        this.root.scheduleUpdateProjection();
    }
    setOptions(s) {
      this.options = {
        ...this.options,
        ...s,
        crossfade: s.crossfade !== void 0 ? s.crossfade : !0
      };
    }
    clearMeasurements() {
      (this.scroll = void 0),
        (this.layout = void 0),
        (this.snapshot = void 0),
        (this.prevTransformTemplateValue = void 0),
        (this.targetDelta = void 0),
        (this.target = void 0),
        (this.isLayoutDirty = !1);
    }
    resolveTargetDelta() {
      var s;
      const a = this.getLead();
      if (
        (this.isProjectionDirty ||
          (this.isProjectionDirty = a.isProjectionDirty),
        this.isTransformDirty || (this.isTransformDirty = a.isTransformDirty),
        !this.isProjectionDirty && !this.attemptToResolveRelativeTarget)
      )
        return;
      const { layout: l, layoutId: u } = this.options;
      if (!(!this.layout || !(l || u))) {
        if (!this.targetDelta && !this.relativeTarget) {
          const c = this.getClosestProjectingParent();
          c && c.layout
            ? ((this.relativeParent = c),
              (this.relativeTarget = ye()),
              (this.relativeTargetOrigin = ye()),
              Eo(
                this.relativeTargetOrigin,
                this.layout.layoutBox,
                c.layout.layoutBox
              ),
              pt(this.relativeTarget, this.relativeTargetOrigin))
            : (this.relativeParent = this.relativeTarget = void 0);
        }
        if (
          !(!this.relativeTarget && !this.targetDelta) &&
          (this.target ||
            ((this.target = ye()), (this.targetWithTransforms = ye())),
          this.relativeTarget &&
          this.relativeTargetOrigin &&
          !((s = this.relativeParent) === null || s === void 0) &&
          s.target
            ? nw(this.target, this.relativeTarget, this.relativeParent.target)
            : this.targetDelta
              ? (Boolean(this.resumingFrom)
                  ? (this.target = this.applyTransform(this.layout.layoutBox))
                  : pt(this.target, this.layout.layoutBox),
                Wg(this.target, this.targetDelta))
              : pt(this.target, this.layout.layoutBox),
          this.attemptToResolveRelativeTarget)
        ) {
          this.attemptToResolveRelativeTarget = !1;
          const c = this.getClosestProjectingParent();
          c &&
          Boolean(c.resumingFrom) === Boolean(this.resumingFrom) &&
          !c.options.layoutScroll &&
          c.target
            ? ((this.relativeParent = c),
              (this.relativeTarget = ye()),
              (this.relativeTargetOrigin = ye()),
              Eo(this.relativeTargetOrigin, this.target, c.target),
              pt(this.relativeTarget, this.relativeTargetOrigin))
            : (this.relativeParent = this.relativeTarget = void 0);
        }
      }
    }
    getClosestProjectingParent() {
      if (
        !(
          !this.parent ||
          rc(this.parent.latestValues) ||
          Kg(this.parent.latestValues)
        )
      )
        return (this.parent.relativeTarget || this.parent.targetDelta) &&
          this.parent.layout
          ? this.parent
          : this.parent.getClosestProjectingParent();
    }
    calcProjection() {
      var s;
      const { isProjectionDirty: a, isTransformDirty: l } = this;
      this.isProjectionDirty = this.isTransformDirty = !1;
      const u = this.getLead(),
        c = Boolean(this.resumingFrom) || this !== u;
      let d = !0;
      if ((a && (d = !1), c && l && (d = !1), d)) return;
      const { layout: h, layoutId: v } = this.options;
      if (
        ((this.isTreeAnimating = Boolean(
          ((s = this.parent) === null || s === void 0
            ? void 0
            : s.isTreeAnimating) ||
            this.currentAnimation ||
            this.pendingAnimation
        )),
        this.isTreeAnimating ||
          (this.targetDelta = this.relativeTarget = void 0),
        !this.layout || !(h || v))
      )
        return;
      pt(this.layoutCorrected, this.layout.layoutBox),
        fw(this.layoutCorrected, this.treeScale, this.path, c);
      const { target: w } = u;
      if (!w) return;
      this.projectionDelta ||
        ((this.projectionDelta = ko()),
        (this.projectionDeltaWithTransform = ko()));
      const x = this.treeScale.x,
        b = this.treeScale.y,
        p = this.projectionTransform;
      So(this.projectionDelta, this.layoutCorrected, w, this.latestValues),
        (this.projectionTransform = zh(this.projectionDelta, this.treeScale)),
        (this.projectionTransform !== p ||
          this.treeScale.x !== x ||
          this.treeScale.y !== b) &&
          ((this.hasProjected = !0),
          this.scheduleRender(),
          this.notifyListeners('projectionUpdate', w));
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(s = !0) {
      var a, l, u;
      (l = (a = this.options).scheduleRender) === null ||
        l === void 0 ||
        l.call(a),
        s &&
          ((u = this.getStack()) === null ||
            u === void 0 ||
            u.scheduleRender()),
        this.resumingFrom &&
          !this.resumingFrom.instance &&
          (this.resumingFrom = void 0);
    }
    setAnimationOrigin(s, a = !1) {
      var l, u;
      const c = this.snapshot,
        d = (c == null ? void 0 : c.latestValues) || {},
        h = { ...this.latestValues },
        v = ko();
      (this.relativeTarget = this.relativeTargetOrigin = void 0),
        (this.attemptToResolveRelativeTarget = !a);
      const w = ye(),
        x =
          (c == null ? void 0 : c.source) !==
          ((l = this.layout) === null || l === void 0 ? void 0 : l.source),
        b =
          (((u = this.getStack()) === null || u === void 0
            ? void 0
            : u.members.length) || 0) <= 1,
        p = Boolean(
          x && !b && this.options.crossfade === !0 && !this.path.some(h8)
        );
      (this.animationProgress = 0),
        (this.mixTargetDelta = (m) => {
          var f;
          const y = m / 1e3;
          Wh(v.x, s.x, y),
            Wh(v.y, s.y, y),
            this.setTargetDelta(v),
            this.relativeTarget &&
              this.relativeTargetOrigin &&
              this.layout &&
              !((f = this.relativeParent) === null || f === void 0) &&
              f.layout &&
              (Eo(
                w,
                this.layout.layoutBox,
                this.relativeParent.layout.layoutBox
              ),
              p8(this.relativeTarget, this.relativeTargetOrigin, w, y)),
            x &&
              ((this.animationValues = h),
              Qw(h, d, this.latestValues, y, p, b)),
            this.root.scheduleUpdateProjection(),
            this.scheduleRender(),
            (this.animationProgress = y);
        }),
        this.mixTargetDelta(0);
    }
    startAnimation(s) {
      var a, l;
      this.notifyListeners('animationStart'),
        (a = this.currentAnimation) === null || a === void 0 || a.stop(),
        this.resumingFrom &&
          ((l = this.resumingFrom.currentAnimation) === null ||
            l === void 0 ||
            l.stop()),
        this.pendingAnimation &&
          (xn.update(this.pendingAnimation), (this.pendingAnimation = void 0)),
        (this.pendingAnimation = Ie.update(() => {
          (xo.hasAnimatedSinceResize = !0),
            (this.currentAnimation = Hw(0, Bh, {
              ...s,
              onUpdate: (u) => {
                var c;
                this.mixTargetDelta(u),
                  (c = s.onUpdate) === null || c === void 0 || c.call(s, u);
              },
              onComplete: () => {
                var u;
                (u = s.onComplete) === null || u === void 0 || u.call(s),
                  this.completeAnimation();
              }
            })),
            this.resumingFrom &&
              (this.resumingFrom.currentAnimation = this.currentAnimation),
            (this.pendingAnimation = void 0);
        }));
    }
    completeAnimation() {
      var s;
      this.resumingFrom &&
        ((this.resumingFrom.currentAnimation = void 0),
        (this.resumingFrom.preserveOpacity = void 0)),
        (s = this.getStack()) === null ||
          s === void 0 ||
          s.exitAnimationComplete(),
        (this.resumingFrom =
          this.currentAnimation =
          this.animationValues =
            void 0),
        this.notifyListeners('animationComplete');
    }
    finishAnimation() {
      var s;
      this.currentAnimation &&
        ((s = this.mixTargetDelta) === null || s === void 0 || s.call(this, Bh),
        this.currentAnimation.stop()),
        this.completeAnimation();
    }
    applyTransformsToTarget() {
      const s = this.getLead();
      let {
        targetWithTransforms: a,
        target: l,
        layout: u,
        latestValues: c
      } = s;
      if (!(!a || !l || !u)) {
        if (
          this !== s &&
          this.layout &&
          u &&
          ov(this.options.animationType, this.layout.layoutBox, u.layoutBox)
        ) {
          l = this.target || ye();
          const d = et(this.layout.layoutBox.x);
          (l.x.min = s.target.x.min), (l.x.max = l.x.min + d);
          const h = et(this.layout.layoutBox.y);
          (l.y.min = s.target.y.min), (l.y.max = l.y.min + h);
        }
        pt(a, l),
          Cr(a, c),
          So(this.projectionDeltaWithTransform, this.layoutCorrected, a, c);
      }
    }
    registerSharedNode(s, a) {
      var l, u, c;
      this.sharedNodes.has(s) || this.sharedNodes.set(s, new e8()),
        this.sharedNodes.get(s).add(a),
        a.promote({
          transition:
            (l = a.options.initialPromotionConfig) === null || l === void 0
              ? void 0
              : l.transition,
          preserveFollowOpacity:
            (c =
              (u = a.options.initialPromotionConfig) === null || u === void 0
                ? void 0
                : u.shouldPreserveFollowOpacity) === null || c === void 0
              ? void 0
              : c.call(u, a)
        });
    }
    isLead() {
      const s = this.getStack();
      return s ? s.lead === this : !0;
    }
    getLead() {
      var s;
      const { layoutId: a } = this.options;
      return a
        ? ((s = this.getStack()) === null || s === void 0 ? void 0 : s.lead) ||
            this
        : this;
    }
    getPrevLead() {
      var s;
      const { layoutId: a } = this.options;
      return a
        ? (s = this.getStack()) === null || s === void 0
          ? void 0
          : s.prevLead
        : void 0;
    }
    getStack() {
      const { layoutId: s } = this.options;
      if (s) return this.root.sharedNodes.get(s);
    }
    promote({ needsReset: s, transition: a, preserveFollowOpacity: l } = {}) {
      const u = this.getStack();
      u && u.promote(this, l),
        s && ((this.projectionDelta = void 0), (this.needsReset = !0)),
        a && this.setOptions({ transition: a });
    }
    relegate() {
      const s = this.getStack();
      return s ? s.relegate(this) : !1;
    }
    resetRotation() {
      const { visualElement: s } = this.options;
      if (!s) return;
      let a = !1;
      const { latestValues: l } = s;
      if (((l.rotate || l.rotateX || l.rotateY || l.rotateZ) && (a = !0), !a))
        return;
      const u = {};
      for (let c = 0; c < jh.length; c++) {
        const d = 'rotate' + jh[c];
        l[d] && ((u[d] = l[d]), s.setStaticValue(d, 0));
      }
      s == null || s.render();
      for (const c in u) s.setStaticValue(c, u[c]);
      s.scheduleRender();
    }
    getProjectionStyles(s = {}) {
      var a, l, u;
      const c = {};
      if (!this.instance || this.isSVG) return c;
      if (this.isVisible) c.visibility = '';
      else return { visibility: 'hidden' };
      const d =
        (a = this.options.visualElement) === null || a === void 0
          ? void 0
          : a.getProps().transformTemplate;
      if (this.needsReset)
        return (
          (this.needsReset = !1),
          (c.opacity = ''),
          (c.pointerEvents = is(s.pointerEvents) || ''),
          (c.transform = d ? d(this.latestValues, '') : 'none'),
          c
        );
      const h = this.getLead();
      if (!this.projectionDelta || !this.layout || !h.target) {
        const b = {};
        return (
          this.options.layoutId &&
            ((b.opacity =
              this.latestValues.opacity !== void 0
                ? this.latestValues.opacity
                : 1),
            (b.pointerEvents = is(s.pointerEvents) || '')),
          this.hasProjected &&
            !Mn(this.latestValues) &&
            ((b.transform = d ? d({}, '') : 'none'), (this.hasProjected = !1)),
          b
        );
      }
      const v = h.animationValues || h.latestValues;
      this.applyTransformsToTarget(),
        (c.transform = zh(
          this.projectionDeltaWithTransform,
          this.treeScale,
          v
        )),
        d && (c.transform = d(v, c.transform));
      const { x: w, y: x } = this.projectionDelta;
      (c.transformOrigin = `${w.origin * 100}% ${x.origin * 100}% 0`),
        h.animationValues
          ? (c.opacity =
              h === this
                ? (u =
                    (l = v.opacity) !== null && l !== void 0
                      ? l
                      : this.latestValues.opacity) !== null && u !== void 0
                  ? u
                  : 1
                : this.preserveOpacity
                  ? this.latestValues.opacity
                  : v.opacityExit)
          : (c.opacity =
              h === this
                ? v.opacity !== void 0
                  ? v.opacity
                  : ''
                : v.opacityExit !== void 0
                  ? v.opacityExit
                  : 0);
      for (const b in Is) {
        if (v[b] === void 0) continue;
        const { correct: p, applyTo: m } = Is[b],
          f = c.transform === 'none' ? v[b] : p(v[b], h);
        if (m) {
          const y = m.length;
          for (let C = 0; C < y; C++) c[m[C]] = f;
        } else c[b] = f;
      }
      return (
        this.options.layoutId &&
          (c.pointerEvents = h === this ? is(s.pointerEvents) || '' : 'none'),
        c
      );
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    resetTree() {
      this.root.nodes.forEach((s) => {
        var a;
        return (a = s.currentAnimation) === null || a === void 0
          ? void 0
          : a.stop();
      }),
        this.root.nodes.forEach(Uh),
        this.root.sharedNodes.clear();
    }
  };
}
function o8(e) {
  e.updateLayout();
}
function i8(e) {
  var t, n, r;
  const o =
    ((t = e.resumeFrom) === null || t === void 0 ? void 0 : t.snapshot) ||
    e.snapshot;
  if (e.isLead() && e.layout && o && e.hasListeners('didUpdate')) {
    const { layoutBox: i, measuredBox: s } = e.layout,
      { animationType: a } = e.options,
      l = o.source !== e.layout.source;
    a === 'size'
      ? St((v) => {
          const w = l ? o.measuredBox[v] : o.layoutBox[v],
            x = et(w);
          (w.min = i[v].min), (w.max = w.min + x);
        })
      : ov(a, o.layoutBox, i) &&
        St((v) => {
          const w = l ? o.measuredBox[v] : o.layoutBox[v],
            x = et(i[v]);
          w.max = w.min + x;
        });
    const u = ko();
    So(u, i, o.layoutBox);
    const c = ko();
    l ? So(c, e.applyTransform(s, !0), o.measuredBox) : So(c, i, o.layoutBox);
    const d = !tv(u);
    let h = !1;
    if (!e.resumeFrom) {
      const v = e.getClosestProjectingParent();
      if (v && !v.resumeFrom) {
        const { snapshot: w, layout: x } = v;
        if (w && x) {
          const b = ye();
          Eo(b, o.layoutBox, w.layoutBox);
          const p = ye();
          Eo(p, i, x.layoutBox), nv(b, p) || (h = !0);
        }
      }
    }
    e.notifyListeners('didUpdate', {
      layout: i,
      snapshot: o,
      delta: c,
      layoutDelta: u,
      hasLayoutChanged: d,
      hasRelativeTargetChanged: h
    });
  } else
    e.isLead() &&
      ((r = (n = e.options).onExitComplete) === null ||
        r === void 0 ||
        r.call(n));
  e.options.transition = void 0;
}
function s8(e) {
  e.isProjectionDirty ||
    (e.isProjectionDirty = Boolean(e.parent && e.parent.isProjectionDirty)),
    e.isTransformDirty ||
      (e.isTransformDirty = Boolean(e.parent && e.parent.isTransformDirty));
}
function a8(e) {
  e.clearSnapshot();
}
function Uh(e) {
  e.clearMeasurements();
}
function l8(e) {
  const { visualElement: t } = e.options;
  t != null &&
    t.getProps().onBeforeLayoutMeasure &&
    t.notify('BeforeLayoutMeasure'),
    e.resetTransform();
}
function Kh(e) {
  e.finishAnimation(), (e.targetDelta = e.relativeTarget = e.target = void 0);
}
function u8(e) {
  e.resolveTargetDelta();
}
function c8(e) {
  e.calcProjection();
}
function f8(e) {
  e.resetRotation();
}
function d8(e) {
  e.removeLeadSnapshot();
}
function Wh(e, t, n) {
  (e.translate = he(t.translate, 0, n)),
    (e.scale = he(t.scale, 1, n)),
    (e.origin = t.origin),
    (e.originPoint = t.originPoint);
}
function Hh(e, t, n, r) {
  (e.min = he(t.min, n.min, r)), (e.max = he(t.max, n.max, r));
}
function p8(e, t, n, r) {
  Hh(e.x, t.x, n.x, r), Hh(e.y, t.y, n.y, r);
}
function h8(e) {
  return e.animationValues && e.animationValues.opacityExit !== void 0;
}
const m8 = { duration: 0.45, ease: [0.4, 0, 0.1, 1] };
function g8(e, t) {
  let n = e.root;
  for (let i = e.path.length - 1; i >= 0; i--)
    if (Boolean(e.path[i].instance)) {
      n = e.path[i];
      break;
    }
  const o = (n && n !== e.root ? n.instance : document).querySelector(
    `[data-projection-id="${t}"]`
  );
  o && e.mount(o, !0);
}
function Gh(e) {
  (e.min = Math.round(e.min)), (e.max = Math.round(e.max));
}
function v8(e) {
  Gh(e.x), Gh(e.y);
}
function ov(e, t, n) {
  return (
    e === 'position' || (e === 'preserve-aspect' && !tc(Vh(t), Vh(n), 0.2))
  );
}
const y8 = rv({
    attachResizeListener: (e, t) => Pa(e, 'resize', t),
    measureScroll: () => ({
      x: document.documentElement.scrollLeft || document.body.scrollLeft,
      y: document.documentElement.scrollTop || document.body.scrollTop
    }),
    checkIsScrollRoot: () => !0
  }),
  Tl = { current: void 0 },
  w8 = rv({
    measureScroll: (e) => ({ x: e.scrollLeft, y: e.scrollTop }),
    defaultParent: () => {
      if (!Tl.current) {
        const e = new y8(0, {});
        e.mount(window), e.setOptions({ layoutScroll: !0 }), (Tl.current = e);
      }
      return Tl.current;
    },
    resetTransform: (e, t) => {
      e.style.transform = t !== void 0 ? t : 'none';
    },
    checkIsScrollRoot: (e) =>
      Boolean(window.getComputedStyle(e).position === 'fixed')
  }),
  x8 = { ...Z4, ...m7, ...xw, ...Ww },
  iv = S6((e, t) => t7(e, t, x8, zw, w8));
function sv() {
  const e = g.useRef(!1);
  return (
    Ns(
      () => (
        (e.current = !0),
        () => {
          e.current = !1;
        }
      ),
      []
    ),
    e
  );
}
function C8() {
  const e = sv(),
    [t, n] = g.useState(0),
    r = g.useCallback(() => {
      e.current && n(t + 1);
    }, [t]);
  return [g.useCallback(() => Ie.postRender(r), [r]), t];
}
class b8 extends g.Component {
  getSnapshotBeforeUpdate(t) {
    const n = this.props.childRef.current;
    if (n && t.isPresent && !this.props.isPresent) {
      const r = this.props.sizeRef.current;
      (r.height = n.offsetHeight || 0),
        (r.width = n.offsetWidth || 0),
        (r.top = n.offsetTop),
        (r.left = n.offsetLeft);
    }
    return null;
  }
  componentDidUpdate() {}
  render() {
    return this.props.children;
  }
}
function S8({ children: e, isPresent: t }) {
  const n = g.useId(),
    r = g.useRef(null),
    o = g.useRef({ width: 0, height: 0, top: 0, left: 0 });
  return (
    g.useInsertionEffect(() => {
      const { width: i, height: s, top: a, left: l } = o.current;
      if (t || !r.current || !i || !s) return;
      r.current.dataset.motionPopId = n;
      const u = document.createElement('style');
      return (
        document.head.appendChild(u),
        u.sheet &&
          u.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${i}px !important;
            height: ${s}px !important;
            top: ${a}px !important;
            left: ${l}px !important;
          }
        `),
        () => {
          document.head.removeChild(u);
        }
      );
    }, [t]),
    g.createElement(
      b8,
      { isPresent: t, childRef: r, sizeRef: o },
      g.cloneElement(e, { ref: r })
    )
  );
}
const Rl = ({
  children: e,
  initial: t,
  isPresent: n,
  onExitComplete: r,
  custom: o,
  presenceAffectsLayout: i,
  mode: s
}) => {
  const a = jr(E8),
    l = g.useId(),
    u = g.useMemo(
      () => ({
        id: l,
        initial: t,
        isPresent: n,
        custom: o,
        onExitComplete: (c) => {
          a.set(c, !0);
          for (const d of a.values()) if (!d) return;
          r && r();
        },
        register: (c) => (a.set(c, !1), () => a.delete(c))
      }),
      i ? void 0 : [n]
    );
  return (
    g.useMemo(() => {
      a.forEach((c, d) => a.set(d, !1));
    }, [n]),
    g.useEffect(() => {
      !n && !a.size && r && r();
    }, [n]),
    s === 'popLayout' && (e = g.createElement(S8, { isPresent: n }, e)),
    g.createElement(ai.Provider, { value: u }, e)
  );
};
function E8() {
  return new Map();
}
const sr = (e) => e.key || '';
function k8(e, t) {
  e.forEach((n) => {
    const r = sr(n);
    t.set(r, n);
  });
}
function P8(e) {
  const t = [];
  return (
    g.Children.forEach(e, (n) => {
      g.isValidElement(n) && t.push(n);
    }),
    t
  );
}
const $8 = ({
  children: e,
  custom: t,
  initial: n = !0,
  onExitComplete: r,
  exitBeforeEnter: o,
  presenceAffectsLayout: i = !0,
  mode: s = 'sync'
}) => {
  o && (s = 'wait');
  let [a] = C8();
  const l = g.useContext(Mf).forceRender;
  l && (a = l);
  const u = sv(),
    c = P8(e);
  let d = c;
  const h = new Set(),
    v = g.useRef(d),
    w = g.useRef(new Map()).current,
    x = g.useRef(!0);
  if (
    (Ns(() => {
      (x.current = !1), k8(c, w), (v.current = d);
    }),
    jf(() => {
      (x.current = !0), w.clear(), h.clear();
    }),
    x.current)
  )
    return g.createElement(
      g.Fragment,
      null,
      d.map((f) =>
        g.createElement(
          Rl,
          {
            key: sr(f),
            isPresent: !0,
            initial: n ? void 0 : !1,
            presenceAffectsLayout: i,
            mode: s
          },
          f
        )
      )
    );
  d = [...d];
  const b = v.current.map(sr),
    p = c.map(sr),
    m = b.length;
  for (let f = 0; f < m; f++) {
    const y = b[f];
    p.indexOf(y) === -1 && h.add(y);
  }
  return (
    s === 'wait' && h.size && (d = []),
    h.forEach((f) => {
      if (p.indexOf(f) !== -1) return;
      const y = w.get(f);
      if (!y) return;
      const C = b.indexOf(f),
        S = () => {
          w.delete(f), h.delete(f);
          const E = v.current.findIndex((k) => k.key === f);
          if ((v.current.splice(E, 1), !h.size)) {
            if (((v.current = c), u.current === !1)) return;
            a(), r && r();
          }
        };
      d.splice(
        C,
        0,
        g.createElement(
          Rl,
          {
            key: sr(y),
            isPresent: !1,
            onExitComplete: S,
            custom: t,
            presenceAffectsLayout: i,
            mode: s
          },
          y
        )
      );
    }),
    (d = d.map((f) => {
      const y = f.key;
      return h.has(y)
        ? f
        : g.createElement(
            Rl,
            { key: sr(f), isPresent: !0, presenceAffectsLayout: i, mode: s },
            f
          );
    })),
    g.createElement(
      g.Fragment,
      null,
      h.size ? d : d.map((f) => g.cloneElement(f))
    )
  );
};
function _8(e) {
  const t = jr(() => Gn(e)),
    { isStatic: n } = g.useContext(Ca);
  if (n) {
    const [, r] = g.useState(e);
    g.useEffect(() => t.on('change', r), []);
  }
  return t;
}
var Fe = {},
  T8 = {
    get exports() {
      return Fe;
    },
    set exports(e) {
      Fe = e;
    }
  };
(function (e) {
  var t, n, r, o, i, s, a, l, u, c, d, h, v, w, x, b, p, m, f, y, C, S, E, k, A;
  (function (R) {
    var j =
      typeof uo == 'object'
        ? uo
        : typeof self == 'object'
          ? self
          : typeof this == 'object'
            ? this
            : {};
    R(W(j, W(e.exports)));
    function W(_, $) {
      return (
        _ !== j &&
          (typeof Object.create == 'function'
            ? Object.defineProperty(_, '__esModule', { value: !0 })
            : (_.__esModule = !0)),
        function (T, M) {
          return (_[T] = $ ? $(T, M) : M);
        }
      );
    }
  })(function (R) {
    var j =
      Object.setPrototypeOf ||
      ({ __proto__: [] } instanceof Array &&
        function (_, $) {
          _.__proto__ = $;
        }) ||
      function (_, $) {
        for (var T in $)
          Object.prototype.hasOwnProperty.call($, T) && (_[T] = $[T]);
      };
    (t = function (_, $) {
      if (typeof $ != 'function' && $ !== null)
        throw new TypeError(
          'Class extends value ' + String($) + ' is not a constructor or null'
        );
      j(_, $);
      function T() {
        this.constructor = _;
      }
      _.prototype =
        $ === null ? Object.create($) : ((T.prototype = $.prototype), new T());
    }),
      (n =
        Object.assign ||
        function (_) {
          for (var $, T = 1, M = arguments.length; T < M; T++) {
            $ = arguments[T];
            for (var D in $)
              Object.prototype.hasOwnProperty.call($, D) && (_[D] = $[D]);
          }
          return _;
        }),
      (r = function (_, $) {
        var T = {};
        for (var M in _)
          Object.prototype.hasOwnProperty.call(_, M) &&
            $.indexOf(M) < 0 &&
            (T[M] = _[M]);
        if (_ != null && typeof Object.getOwnPropertySymbols == 'function')
          for (
            var D = 0, M = Object.getOwnPropertySymbols(_);
            D < M.length;
            D++
          )
            $.indexOf(M[D]) < 0 &&
              Object.prototype.propertyIsEnumerable.call(_, M[D]) &&
              (T[M[D]] = _[M[D]]);
        return T;
      }),
      (o = function (_, $, T, M) {
        var D = arguments.length,
          P =
            D < 3
              ? $
              : M === null
                ? (M = Object.getOwnPropertyDescriptor($, T))
                : M,
          O;
        if (typeof Reflect == 'object' && typeof Reflect.decorate == 'function')
          P = Reflect.decorate(_, $, T, M);
        else
          for (var F = _.length - 1; F >= 0; F--)
            (O = _[F]) &&
              (P = (D < 3 ? O(P) : D > 3 ? O($, T, P) : O($, T)) || P);
        return D > 3 && P && Object.defineProperty($, T, P), P;
      }),
      (i = function (_, $) {
        return function (T, M) {
          $(T, M, _);
        };
      }),
      (s = function (_, $) {
        if (typeof Reflect == 'object' && typeof Reflect.metadata == 'function')
          return Reflect.metadata(_, $);
      }),
      (a = function (_, $, T, M) {
        function D(P) {
          return P instanceof T
            ? P
            : new T(function (O) {
                O(P);
              });
        }
        return new (T || (T = Promise))(function (P, O) {
          function F(Z) {
            try {
              z(M.next(Z));
            } catch (de) {
              O(de);
            }
          }
          function U(Z) {
            try {
              z(M.throw(Z));
            } catch (de) {
              O(de);
            }
          }
          function z(Z) {
            Z.done ? P(Z.value) : D(Z.value).then(F, U);
          }
          z((M = M.apply(_, $ || [])).next());
        });
      }),
      (l = function (_, $) {
        var T = {
            label: 0,
            sent: function () {
              if (P[0] & 1) throw P[1];
              return P[1];
            },
            trys: [],
            ops: []
          },
          M,
          D,
          P,
          O;
        return (
          (O = { next: F(0), throw: F(1), return: F(2) }),
          typeof Symbol == 'function' &&
            (O[Symbol.iterator] = function () {
              return this;
            }),
          O
        );
        function F(z) {
          return function (Z) {
            return U([z, Z]);
          };
        }
        function U(z) {
          if (M) throw new TypeError('Generator is already executing.');
          for (; O && ((O = 0), z[0] && (T = 0)), T; )
            try {
              if (
                ((M = 1),
                D &&
                  (P =
                    z[0] & 2
                      ? D.return
                      : z[0]
                        ? D.throw || ((P = D.return) && P.call(D), 0)
                        : D.next) &&
                  !(P = P.call(D, z[1])).done)
              )
                return P;
              switch (((D = 0), P && (z = [z[0] & 2, P.value]), z[0])) {
                case 0:
                case 1:
                  P = z;
                  break;
                case 4:
                  return T.label++, { value: z[1], done: !1 };
                case 5:
                  T.label++, (D = z[1]), (z = [0]);
                  continue;
                case 7:
                  (z = T.ops.pop()), T.trys.pop();
                  continue;
                default:
                  if (
                    ((P = T.trys),
                    !(P = P.length > 0 && P[P.length - 1]) &&
                      (z[0] === 6 || z[0] === 2))
                  ) {
                    T = 0;
                    continue;
                  }
                  if (z[0] === 3 && (!P || (z[1] > P[0] && z[1] < P[3]))) {
                    T.label = z[1];
                    break;
                  }
                  if (z[0] === 6 && T.label < P[1]) {
                    (T.label = P[1]), (P = z);
                    break;
                  }
                  if (P && T.label < P[2]) {
                    (T.label = P[2]), T.ops.push(z);
                    break;
                  }
                  P[2] && T.ops.pop(), T.trys.pop();
                  continue;
              }
              z = $.call(_, T);
            } catch (Z) {
              (z = [6, Z]), (D = 0);
            } finally {
              M = P = 0;
            }
          if (z[0] & 5) throw z[1];
          return { value: z[0] ? z[1] : void 0, done: !0 };
        }
      }),
      (u = function (_, $) {
        for (var T in _)
          T !== 'default' &&
            !Object.prototype.hasOwnProperty.call($, T) &&
            A($, _, T);
      }),
      (A = Object.create
        ? function (_, $, T, M) {
            M === void 0 && (M = T);
            var D = Object.getOwnPropertyDescriptor($, T);
            (!D ||
              ('get' in D ? !$.__esModule : D.writable || D.configurable)) &&
              (D = {
                enumerable: !0,
                get: function () {
                  return $[T];
                }
              }),
              Object.defineProperty(_, M, D);
          }
        : function (_, $, T, M) {
            M === void 0 && (M = T), (_[M] = $[T]);
          }),
      (c = function (_) {
        var $ = typeof Symbol == 'function' && Symbol.iterator,
          T = $ && _[$],
          M = 0;
        if (T) return T.call(_);
        if (_ && typeof _.length == 'number')
          return {
            next: function () {
              return (
                _ && M >= _.length && (_ = void 0),
                { value: _ && _[M++], done: !_ }
              );
            }
          };
        throw new TypeError(
          $ ? 'Object is not iterable.' : 'Symbol.iterator is not defined.'
        );
      }),
      (d = function (_, $) {
        var T = typeof Symbol == 'function' && _[Symbol.iterator];
        if (!T) return _;
        var M = T.call(_),
          D,
          P = [],
          O;
        try {
          for (; ($ === void 0 || $-- > 0) && !(D = M.next()).done; )
            P.push(D.value);
        } catch (F) {
          O = { error: F };
        } finally {
          try {
            D && !D.done && (T = M.return) && T.call(M);
          } finally {
            if (O) throw O.error;
          }
        }
        return P;
      }),
      (h = function () {
        for (var _ = [], $ = 0; $ < arguments.length; $++)
          _ = _.concat(d(arguments[$]));
        return _;
      }),
      (v = function () {
        for (var _ = 0, $ = 0, T = arguments.length; $ < T; $++)
          _ += arguments[$].length;
        for (var M = Array(_), D = 0, $ = 0; $ < T; $++)
          for (var P = arguments[$], O = 0, F = P.length; O < F; O++, D++)
            M[D] = P[O];
        return M;
      }),
      (w = function (_, $, T) {
        if (T || arguments.length === 2)
          for (var M = 0, D = $.length, P; M < D; M++)
            (P || !(M in $)) &&
              (P || (P = Array.prototype.slice.call($, 0, M)), (P[M] = $[M]));
        return _.concat(P || Array.prototype.slice.call($));
      }),
      (x = function (_) {
        return this instanceof x ? ((this.v = _), this) : new x(_);
      }),
      (b = function (_, $, T) {
        if (!Symbol.asyncIterator)
          throw new TypeError('Symbol.asyncIterator is not defined.');
        var M = T.apply(_, $ || []),
          D,
          P = [];
        return (
          (D = {}),
          O('next'),
          O('throw'),
          O('return'),
          (D[Symbol.asyncIterator] = function () {
            return this;
          }),
          D
        );
        function O(te) {
          M[te] &&
            (D[te] = function (ne) {
              return new Promise(function (Oe, $e) {
                P.push([te, ne, Oe, $e]) > 1 || F(te, ne);
              });
            });
        }
        function F(te, ne) {
          try {
            U(M[te](ne));
          } catch (Oe) {
            de(P[0][3], Oe);
          }
        }
        function U(te) {
          te.value instanceof x
            ? Promise.resolve(te.value.v).then(z, Z)
            : de(P[0][2], te);
        }
        function z(te) {
          F('next', te);
        }
        function Z(te) {
          F('throw', te);
        }
        function de(te, ne) {
          te(ne), P.shift(), P.length && F(P[0][0], P[0][1]);
        }
      }),
      (p = function (_) {
        var $, T;
        return (
          ($ = {}),
          M('next'),
          M('throw', function (D) {
            throw D;
          }),
          M('return'),
          ($[Symbol.iterator] = function () {
            return this;
          }),
          $
        );
        function M(D, P) {
          $[D] = _[D]
            ? function (O) {
                return (T = !T)
                  ? { value: x(_[D](O)), done: D === 'return' }
                  : P
                    ? P(O)
                    : O;
              }
            : P;
        }
      }),
      (m = function (_) {
        if (!Symbol.asyncIterator)
          throw new TypeError('Symbol.asyncIterator is not defined.');
        var $ = _[Symbol.asyncIterator],
          T;
        return $
          ? $.call(_)
          : ((_ = typeof c == 'function' ? c(_) : _[Symbol.iterator]()),
            (T = {}),
            M('next'),
            M('throw'),
            M('return'),
            (T[Symbol.asyncIterator] = function () {
              return this;
            }),
            T);
        function M(P) {
          T[P] =
            _[P] &&
            function (O) {
              return new Promise(function (F, U) {
                (O = _[P](O)), D(F, U, O.done, O.value);
              });
            };
        }
        function D(P, O, F, U) {
          Promise.resolve(U).then(function (z) {
            P({ value: z, done: F });
          }, O);
        }
      }),
      (f = function (_, $) {
        return (
          Object.defineProperty
            ? Object.defineProperty(_, 'raw', { value: $ })
            : (_.raw = $),
          _
        );
      });
    var W = Object.create
      ? function (_, $) {
          Object.defineProperty(_, 'default', { enumerable: !0, value: $ });
        }
      : function (_, $) {
          _.default = $;
        };
    (y = function (_) {
      if (_ && _.__esModule) return _;
      var $ = {};
      if (_ != null)
        for (var T in _)
          T !== 'default' &&
            Object.prototype.hasOwnProperty.call(_, T) &&
            A($, _, T);
      return W($, _), $;
    }),
      (C = function (_) {
        return _ && _.__esModule ? _ : { default: _ };
      }),
      (S = function (_, $, T, M) {
        if (T === 'a' && !M)
          throw new TypeError('Private accessor was defined without a getter');
        if (typeof $ == 'function' ? _ !== $ || !M : !$.has(_))
          throw new TypeError(
            'Cannot read private member from an object whose class did not declare it'
          );
        return T === 'm' ? M : T === 'a' ? M.call(_) : M ? M.value : $.get(_);
      }),
      (E = function (_, $, T, M, D) {
        if (M === 'm') throw new TypeError('Private method is not writable');
        if (M === 'a' && !D)
          throw new TypeError('Private accessor was defined without a setter');
        if (typeof $ == 'function' ? _ !== $ || !D : !$.has(_))
          throw new TypeError(
            'Cannot write private member to an object whose class did not declare it'
          );
        return M === 'a' ? D.call(_, T) : D ? (D.value = T) : $.set(_, T), T;
      }),
      (k = function (_, $) {
        if ($ === null || (typeof $ != 'object' && typeof $ != 'function'))
          throw new TypeError("Cannot use 'in' operator on non-object");
        return typeof _ == 'function' ? $ === _ : _.has($);
      }),
      R('__extends', t),
      R('__assign', n),
      R('__rest', r),
      R('__decorate', o),
      R('__param', i),
      R('__metadata', s),
      R('__awaiter', a),
      R('__generator', l),
      R('__exportStar', u),
      R('__createBinding', A),
      R('__values', c),
      R('__read', d),
      R('__spread', h),
      R('__spreadArrays', v),
      R('__spreadArray', w),
      R('__await', x),
      R('__asyncGenerator', b),
      R('__asyncDelegator', p),
      R('__asyncValues', m),
      R('__makeTemplateObject', f),
      R('__importStar', y),
      R('__importDefault', C),
      R('__classPrivateFieldGet', S),
      R('__classPrivateFieldSet', E),
      R('__classPrivateFieldIn', k);
  });
})(T8);
class R8 {
  constructor() {
    this.componentControls = new Set();
  }
  subscribe(t) {
    return (
      this.componentControls.add(t), () => this.componentControls.delete(t)
    );
  }
  start(t, n) {
    this.componentControls.forEach((r) => {
      r.start(t.nativeEvent || t, n);
    });
  }
}
const M8 = () => new R8();
function O8() {
  return jr(M8);
}
const lc = {
  get: (e, t, n = 'local') => {
    const r = t === void 0 ? e : { [e]: t };
    return new Promise((o, i) => {
      chrome.storage[n].get(r, (s) => {
        const a = chrome.runtime.lastError;
        if (a) return i(a);
        o(s[e]);
      });
    });
  },
  set: (e, t, n = 'local') =>
    new Promise((r, o) => {
      chrome.storage[n].set({ [e]: t }, () => {
        const i = chrome.runtime.lastError;
        i ? o(i) : r(null);
      });
    })
};
function _t(e, t, n = 'local') {
  const [r] = g.useState(() => (typeof t == 'function' ? t() : t)),
    [o] = g.useState(n),
    [i, s] = g.useState(r),
    [a, l] = g.useState(!0),
    [u, c] = g.useState('');
  g.useEffect(() => {
    lc.get(e, r, o)
      .then((h) => {
        s(h), l(!0), c('');
      })
      .catch((h) => {
        l(!1), c(h);
      });
  }, [e, r, o]);
  const d = g.useCallback(
    (h) => {
      const v = typeof h == 'function' ? h(i) : h;
      lc.set(e, v, o)
        .then(() => {
          l(!0), c('');
        })
        .catch((w) => {
          s(v), l(!1), c(w);
        });
    },
    [o, e, i]
  );
  return (
    g.useEffect(() => {
      const h = (v, w) => {
        w === o && e in v && (s(v[e].newValue), l(!0), c(''));
      };
      return (
        chrome.storage.onChanged.addListener(h),
        () => {
          chrome.storage.onChanged.removeListener(h);
        }
      );
    }, [e, o]),
    [i, d, a, u]
  );
}
function G() {
  return (
    (G = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    G.apply(this, arguments)
  );
}
function Y(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function (o) {
    if ((e == null || e(o), n === !1 || !o.defaultPrevented))
      return t == null ? void 0 : t(o);
  };
}
function A8(e, t) {
  typeof e == 'function' ? e(t) : e != null && (e.current = t);
}
function od(...e) {
  return (t) => e.forEach((n) => A8(n, t));
}
function Ge(...e) {
  return g.useCallback(od(...e), e);
}
function Br(e, t = []) {
  let n = [];
  function r(i, s) {
    const a = g.createContext(s),
      l = n.length;
    n = [...n, s];
    function u(d) {
      const { scope: h, children: v, ...w } = d,
        x = (h == null ? void 0 : h[e][l]) || a,
        b = g.useMemo(() => w, Object.values(w));
      return g.createElement(x.Provider, { value: b }, v);
    }
    function c(d, h) {
      const v = (h == null ? void 0 : h[e][l]) || a,
        w = g.useContext(v);
      if (w) return w;
      if (s !== void 0) return s;
      throw new Error(`\`${d}\` must be used within \`${i}\``);
    }
    return (u.displayName = i + 'Provider'), [u, c];
  }
  const o = () => {
    const i = n.map((s) => g.createContext(s));
    return function (a) {
      const l = (a == null ? void 0 : a[e]) || i;
      return g.useMemo(() => ({ [`__scope${e}`]: { ...a, [e]: l } }), [a, l]);
    };
  };
  return (o.scopeName = e), [r, D8(o, ...t)];
}
function D8(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const n = () => {
    const r = e.map((o) => ({ useScope: o(), scopeName: o.scopeName }));
    return function (i) {
      const s = r.reduce((a, { useScope: l, scopeName: u }) => {
        const d = l(i)[`__scope${u}`];
        return { ...a, ...d };
      }, {});
      return g.useMemo(() => ({ [`__scope${t.scopeName}`]: s }), [s]);
    };
  };
  return (n.scopeName = t.scopeName), n;
}
const Zo = g.forwardRef((e, t) => {
  const { children: n, ...r } = e,
    o = g.Children.toArray(n),
    i = o.find(L8);
  if (i) {
    const s = i.props.children,
      a = o.map((l) =>
        l === i
          ? g.Children.count(s) > 1
            ? g.Children.only(null)
            : g.isValidElement(s)
              ? s.props.children
              : null
          : l
      );
    return g.createElement(
      uc,
      G({}, r, { ref: t }),
      g.isValidElement(s) ? g.cloneElement(s, void 0, a) : null
    );
  }
  return g.createElement(uc, G({}, r, { ref: t }), n);
});
Zo.displayName = 'Slot';
const uc = g.forwardRef((e, t) => {
  const { children: n, ...r } = e;
  return g.isValidElement(n)
    ? g.cloneElement(n, { ...F8(r, n.props), ref: od(t, n.ref) })
    : g.Children.count(n) > 1
      ? g.Children.only(null)
      : null;
});
uc.displayName = 'SlotClone';
const av = ({ children: e }) => g.createElement(g.Fragment, null, e);
function L8(e) {
  return g.isValidElement(e) && e.type === av;
}
function F8(e, t) {
  const n = { ...t };
  for (const r in t) {
    const o = e[r],
      i = t[r];
    /^on[A-Z]/.test(r)
      ? o && i
        ? (n[r] = (...a) => {
            i(...a), o(...a);
          })
        : o && (n[r] = o)
      : r === 'style'
        ? (n[r] = { ...o, ...i })
        : r === 'className' && (n[r] = [o, i].filter(Boolean).join(' '));
  }
  return { ...e, ...n };
}
const N8 = [
    'a',
    'button',
    'div',
    'h2',
    'h3',
    'img',
    'label',
    'li',
    'nav',
    'ol',
    'p',
    'span',
    'svg',
    'ul'
  ],
  Qe = N8.reduce((e, t) => {
    const n = g.forwardRef((r, o) => {
      const { asChild: i, ...s } = r,
        a = i ? Zo : t;
      return (
        g.useEffect(() => {
          window[Symbol.for('radix-ui')] = !0;
        }, []),
        g.createElement(a, G({}, s, { ref: o }))
      );
    });
    return (n.displayName = `Primitive.${t}`), { ...e, [t]: n };
  }, {});
function lv(e, t) {
  e && jn.flushSync(() => e.dispatchEvent(t));
}
function Tt(e) {
  const t = g.useRef(e);
  return (
    g.useEffect(() => {
      t.current = e;
    }),
    g.useMemo(
      () =>
        (...n) => {
          var r;
          return (r = t.current) === null || r === void 0
            ? void 0
            : r.call(t, ...n);
        },
      []
    )
  );
}
function I8(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Tt(e);
  g.useEffect(() => {
    const r = (o) => {
      o.key === 'Escape' && n(o);
    };
    return (
      t.addEventListener('keydown', r),
      () => t.removeEventListener('keydown', r)
    );
  }, [n, t]);
}
const cc = 'dismissableLayer.update',
  V8 = 'dismissableLayer.pointerDownOutside',
  z8 = 'dismissableLayer.focusOutside';
let Qh;
const j8 = g.createContext({
    layers: new Set(),
    layersWithOutsidePointerEventsDisabled: new Set(),
    branches: new Set()
  }),
  uv = g.forwardRef((e, t) => {
    var n;
    const {
        disableOutsidePointerEvents: r = !1,
        onEscapeKeyDown: o,
        onPointerDownOutside: i,
        onFocusOutside: s,
        onInteractOutside: a,
        onDismiss: l,
        ...u
      } = e,
      c = g.useContext(j8),
      [d, h] = g.useState(null),
      v =
        (n = d == null ? void 0 : d.ownerDocument) !== null && n !== void 0
          ? n
          : globalThis == null
            ? void 0
            : globalThis.document,
      [, w] = g.useState({}),
      x = Ge(t, (k) => h(k)),
      b = Array.from(c.layers),
      [p] = [...c.layersWithOutsidePointerEventsDisabled].slice(-1),
      m = b.indexOf(p),
      f = d ? b.indexOf(d) : -1,
      y = c.layersWithOutsidePointerEventsDisabled.size > 0,
      C = f >= m,
      S = B8((k) => {
        const A = k.target,
          R = [...c.branches].some((j) => j.contains(A));
        !C ||
          R ||
          (i == null || i(k),
          a == null || a(k),
          k.defaultPrevented || l == null || l());
      }, v),
      E = U8((k) => {
        const A = k.target;
        [...c.branches].some((j) => j.contains(A)) ||
          (s == null || s(k),
          a == null || a(k),
          k.defaultPrevented || l == null || l());
      }, v);
    return (
      I8((k) => {
        f === c.layers.size - 1 &&
          (o == null || o(k),
          !k.defaultPrevented && l && (k.preventDefault(), l()));
      }, v),
      g.useEffect(() => {
        if (d)
          return (
            r &&
              (c.layersWithOutsidePointerEventsDisabled.size === 0 &&
                ((Qh = v.body.style.pointerEvents),
                (v.body.style.pointerEvents = 'none')),
              c.layersWithOutsidePointerEventsDisabled.add(d)),
            c.layers.add(d),
            qh(),
            () => {
              r &&
                c.layersWithOutsidePointerEventsDisabled.size === 1 &&
                (v.body.style.pointerEvents = Qh);
            }
          );
      }, [d, v, r, c]),
      g.useEffect(
        () => () => {
          d &&
            (c.layers.delete(d),
            c.layersWithOutsidePointerEventsDisabled.delete(d),
            qh());
        },
        [d, c]
      ),
      g.useEffect(() => {
        const k = () => w({});
        return (
          document.addEventListener(cc, k),
          () => document.removeEventListener(cc, k)
        );
      }, []),
      g.createElement(
        Qe.div,
        G({}, u, {
          ref: x,
          style: {
            pointerEvents: y ? (C ? 'auto' : 'none') : void 0,
            ...e.style
          },
          onFocusCapture: Y(e.onFocusCapture, E.onFocusCapture),
          onBlurCapture: Y(e.onBlurCapture, E.onBlurCapture),
          onPointerDownCapture: Y(
            e.onPointerDownCapture,
            S.onPointerDownCapture
          )
        })
      )
    );
  });
function B8(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Tt(e),
    r = g.useRef(!1),
    o = g.useRef(() => {});
  return (
    g.useEffect(() => {
      const i = (a) => {
          if (a.target && !r.current) {
            let c = function () {
              cv(V8, n, u, { discrete: !0 });
            };
            var l = c;
            const u = { originalEvent: a };
            a.pointerType === 'touch'
              ? (t.removeEventListener('click', o.current),
                (o.current = c),
                t.addEventListener('click', o.current, { once: !0 }))
              : c();
          }
          r.current = !1;
        },
        s = window.setTimeout(() => {
          t.addEventListener('pointerdown', i);
        }, 0);
      return () => {
        window.clearTimeout(s),
          t.removeEventListener('pointerdown', i),
          t.removeEventListener('click', o.current);
      };
    }, [t, n]),
    { onPointerDownCapture: () => (r.current = !0) }
  );
}
function U8(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Tt(e),
    r = g.useRef(!1);
  return (
    g.useEffect(() => {
      const o = (i) => {
        i.target &&
          !r.current &&
          cv(z8, n, { originalEvent: i }, { discrete: !1 });
      };
      return (
        t.addEventListener('focusin', o),
        () => t.removeEventListener('focusin', o)
      );
    }, [t, n]),
    {
      onFocusCapture: () => (r.current = !0),
      onBlurCapture: () => (r.current = !1)
    }
  );
}
function qh() {
  const e = new CustomEvent(cc);
  document.dispatchEvent(e);
}
function cv(e, t, n, { discrete: r }) {
  const o = n.originalEvent.target,
    i = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
  t && o.addEventListener(e, t, { once: !0 }),
    r ? lv(o, i) : o.dispatchEvent(i);
}
const Nr = Boolean(globalThis == null ? void 0 : globalThis.document)
    ? g.useLayoutEffect
    : () => {},
  K8 = Oy['useId'.toString()] || (() => {});
let W8 = 0;
function qs(e) {
  const [t, n] = g.useState(K8());
  return (
    Nr(() => {
      e || n((r) => r ?? String(W8++));
    }, [e]),
    e || (t ? `radix-${t}` : '')
  );
}
function Ur(e) {
  return e.split('-')[0];
}
function Ra(e) {
  return e.split('-')[1];
}
function Kr(e) {
  return ['top', 'bottom'].includes(Ur(e)) ? 'x' : 'y';
}
function id(e) {
  return e === 'y' ? 'height' : 'width';
}
function Yh(e, t, n) {
  let { reference: r, floating: o } = e;
  const i = r.x + r.width / 2 - o.width / 2,
    s = r.y + r.height / 2 - o.height / 2,
    a = Kr(t),
    l = id(a),
    u = r[l] / 2 - o[l] / 2,
    c = Ur(t),
    d = a === 'x';
  let h;
  switch (c) {
    case 'top':
      h = { x: i, y: r.y - o.height };
      break;
    case 'bottom':
      h = { x: i, y: r.y + r.height };
      break;
    case 'right':
      h = { x: r.x + r.width, y: s };
      break;
    case 'left':
      h = { x: r.x - o.width, y: s };
      break;
    default:
      h = { x: r.x, y: r.y };
  }
  switch (Ra(t)) {
    case 'start':
      h[a] -= u * (n && d ? -1 : 1);
      break;
    case 'end':
      h[a] += u * (n && d ? -1 : 1);
      break;
  }
  return h;
}
const H8 = async (e, t, n) => {
  const {
      placement: r = 'bottom',
      strategy: o = 'absolute',
      middleware: i = [],
      platform: s
    } = n,
    a = await (s.isRTL == null ? void 0 : s.isRTL(t));
  let l = await s.getElementRects({ reference: e, floating: t, strategy: o }),
    { x: u, y: c } = Yh(l, r, a),
    d = r,
    h = {},
    v = 0;
  for (let w = 0; w < i.length; w++) {
    const { name: x, fn: b } = i[w],
      {
        x: p,
        y: m,
        data: f,
        reset: y
      } = await b({
        x: u,
        y: c,
        initialPlacement: r,
        placement: d,
        strategy: o,
        middlewareData: h,
        rects: l,
        platform: s,
        elements: { reference: e, floating: t }
      });
    if (
      ((u = p ?? u),
      (c = m ?? c),
      (h = { ...h, [x]: { ...h[x], ...f } }),
      y && v <= 50)
    ) {
      v++,
        typeof y == 'object' &&
          (y.placement && (d = y.placement),
          y.rects &&
            (l =
              y.rects === !0
                ? await s.getElementRects({
                    reference: e,
                    floating: t,
                    strategy: o
                  })
                : y.rects),
          ({ x: u, y: c } = Yh(l, d, a))),
        (w = -1);
      continue;
    }
  }
  return { x: u, y: c, placement: d, strategy: o, middlewareData: h };
};
function G8(e) {
  return { top: 0, right: 0, bottom: 0, left: 0, ...e };
}
function fv(e) {
  return typeof e != 'number'
    ? G8(e)
    : { top: e, right: e, bottom: e, left: e };
}
function Ys(e) {
  return {
    ...e,
    top: e.y,
    left: e.x,
    right: e.x + e.width,
    bottom: e.y + e.height
  };
}
async function Xs(e, t) {
  var n;
  t === void 0 && (t = {});
  const { x: r, y: o, platform: i, rects: s, elements: a, strategy: l } = e,
    {
      boundary: u = 'clippingAncestors',
      rootBoundary: c = 'viewport',
      elementContext: d = 'floating',
      altBoundary: h = !1,
      padding: v = 0
    } = t,
    w = fv(v),
    b = a[h ? (d === 'floating' ? 'reference' : 'floating') : d],
    p = Ys(
      await i.getClippingRect({
        element:
          (n = await (i.isElement == null ? void 0 : i.isElement(b))) == null ||
          n
            ? b
            : b.contextElement ||
              (await (i.getDocumentElement == null
                ? void 0
                : i.getDocumentElement(a.floating))),
        boundary: u,
        rootBoundary: c,
        strategy: l
      })
    ),
    m = Ys(
      i.convertOffsetParentRelativeRectToViewportRelativeRect
        ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
            rect:
              d === 'floating' ? { ...s.floating, x: r, y: o } : s.reference,
            offsetParent: await (i.getOffsetParent == null
              ? void 0
              : i.getOffsetParent(a.floating)),
            strategy: l
          })
        : s[d]
    );
  return {
    top: p.top - m.top + w.top,
    bottom: m.bottom - p.bottom + w.bottom,
    left: p.left - m.left + w.left,
    right: m.right - p.right + w.right
  };
}
const Q8 = Math.min,
  q8 = Math.max;
function fc(e, t, n) {
  return q8(e, Q8(t, n));
}
const Xh = (e) => ({
    name: 'arrow',
    options: e,
    async fn(t) {
      const { element: n, padding: r = 0 } = e ?? {},
        { x: o, y: i, placement: s, rects: a, platform: l } = t;
      if (n == null) return {};
      const u = fv(r),
        c = { x: o, y: i },
        d = Kr(s),
        h = Ra(s),
        v = id(d),
        w = await l.getDimensions(n),
        x = d === 'y' ? 'top' : 'left',
        b = d === 'y' ? 'bottom' : 'right',
        p = a.reference[v] + a.reference[d] - c[d] - a.floating[v],
        m = c[d] - a.reference[d],
        f = await (l.getOffsetParent == null ? void 0 : l.getOffsetParent(n));
      let y = f ? (d === 'y' ? f.clientHeight || 0 : f.clientWidth || 0) : 0;
      y === 0 && (y = a.floating[v]);
      const C = p / 2 - m / 2,
        S = u[x],
        E = y - w[v] - u[b],
        k = y / 2 - w[v] / 2 + C,
        A = fc(S, k, E),
        W =
          (h === 'start' ? u[x] : u[b]) > 0 &&
          k !== A &&
          a.reference[v] <= a.floating[v]
            ? k < S
              ? S - k
              : E - k
            : 0;
      return { [d]: c[d] - W, data: { [d]: A, centerOffset: k - A } };
    }
  }),
  Y8 = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' };
function Zs(e) {
  return e.replace(/left|right|bottom|top/g, (t) => Y8[t]);
}
function X8(e, t, n) {
  n === void 0 && (n = !1);
  const r = Ra(e),
    o = Kr(e),
    i = id(o);
  let s =
    o === 'x'
      ? r === (n ? 'end' : 'start')
        ? 'right'
        : 'left'
      : r === 'start'
        ? 'bottom'
        : 'top';
  return (
    t.reference[i] > t.floating[i] && (s = Zs(s)), { main: s, cross: Zs(s) }
  );
}
const Z8 = { start: 'end', end: 'start' };
function Zh(e) {
  return e.replace(/start|end/g, (t) => Z8[t]);
}
const J8 = ['top', 'right', 'bottom', 'left'];
function ex(e) {
  const t = Zs(e);
  return [Zh(e), t, Zh(t)];
}
const tx = function (e) {
  return (
    e === void 0 && (e = {}),
    {
      name: 'flip',
      options: e,
      async fn(t) {
        var n;
        const {
            placement: r,
            middlewareData: o,
            rects: i,
            initialPlacement: s,
            platform: a,
            elements: l
          } = t,
          {
            mainAxis: u = !0,
            crossAxis: c = !0,
            fallbackPlacements: d,
            fallbackStrategy: h = 'bestFit',
            flipAlignment: v = !0,
            ...w
          } = e,
          x = Ur(r),
          p = d || (x === s || !v ? [Zs(s)] : ex(s)),
          m = [s, ...p],
          f = await Xs(t, w),
          y = [];
        let C = ((n = o.flip) == null ? void 0 : n.overflows) || [];
        if ((u && y.push(f[x]), c)) {
          const { main: A, cross: R } = X8(
            r,
            i,
            await (a.isRTL == null ? void 0 : a.isRTL(l.floating))
          );
          y.push(f[A], f[R]);
        }
        if (
          ((C = [...C, { placement: r, overflows: y }]),
          !y.every((A) => A <= 0))
        ) {
          var S, E;
          const A =
              ((S = (E = o.flip) == null ? void 0 : E.index) != null ? S : 0) +
              1,
            R = m[A];
          if (R)
            return {
              data: { index: A, overflows: C },
              reset: { placement: R }
            };
          let j = 'bottom';
          switch (h) {
            case 'bestFit': {
              var k;
              const W =
                (k = C.map((_) => [
                  _,
                  _.overflows.filter(($) => $ > 0).reduce(($, T) => $ + T, 0)
                ]).sort((_, $) => _[1] - $[1])[0]) == null
                  ? void 0
                  : k[0].placement;
              W && (j = W);
              break;
            }
            case 'initialPlacement':
              j = s;
              break;
          }
          if (r !== j) return { reset: { placement: j } };
        }
        return {};
      }
    }
  );
};
function Jh(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function e0(e) {
  return J8.some((t) => e[t] >= 0);
}
const nx = function (e) {
  let { strategy: t = 'referenceHidden', ...n } = e === void 0 ? {} : e;
  return {
    name: 'hide',
    async fn(r) {
      const { rects: o } = r;
      switch (t) {
        case 'referenceHidden': {
          const i = await Xs(r, { ...n, elementContext: 'reference' }),
            s = Jh(i, o.reference);
          return {
            data: { referenceHiddenOffsets: s, referenceHidden: e0(s) }
          };
        }
        case 'escaped': {
          const i = await Xs(r, { ...n, altBoundary: !0 }),
            s = Jh(i, o.floating);
          return { data: { escapedOffsets: s, escaped: e0(s) } };
        }
        default:
          return {};
      }
    }
  };
};
async function rx(e, t) {
  const { placement: n, platform: r, elements: o } = e,
    i = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)),
    s = Ur(n),
    a = Ra(n),
    l = Kr(n) === 'x',
    u = ['left', 'top'].includes(s) ? -1 : 1,
    c = i && l ? -1 : 1,
    d = typeof t == 'function' ? t(e) : t;
  let {
    mainAxis: h,
    crossAxis: v,
    alignmentAxis: w
  } = typeof d == 'number'
    ? { mainAxis: d, crossAxis: 0, alignmentAxis: null }
    : { mainAxis: 0, crossAxis: 0, alignmentAxis: null, ...d };
  return (
    a && typeof w == 'number' && (v = a === 'end' ? w * -1 : w),
    l ? { x: v * c, y: h * u } : { x: h * u, y: v * c }
  );
}
const ox = function (e) {
  return (
    e === void 0 && (e = 0),
    {
      name: 'offset',
      options: e,
      async fn(t) {
        const { x: n, y: r } = t,
          o = await rx(t, e);
        return { x: n + o.x, y: r + o.y, data: o };
      }
    }
  );
};
function dv(e) {
  return e === 'x' ? 'y' : 'x';
}
const ix = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: 'shift',
        options: e,
        async fn(t) {
          const { x: n, y: r, placement: o } = t,
            {
              mainAxis: i = !0,
              crossAxis: s = !1,
              limiter: a = {
                fn: (b) => {
                  let { x: p, y: m } = b;
                  return { x: p, y: m };
                }
              },
              ...l
            } = e,
            u = { x: n, y: r },
            c = await Xs(t, l),
            d = Kr(Ur(o)),
            h = dv(d);
          let v = u[d],
            w = u[h];
          if (i) {
            const b = d === 'y' ? 'top' : 'left',
              p = d === 'y' ? 'bottom' : 'right',
              m = v + c[b],
              f = v - c[p];
            v = fc(m, v, f);
          }
          if (s) {
            const b = h === 'y' ? 'top' : 'left',
              p = h === 'y' ? 'bottom' : 'right',
              m = w + c[b],
              f = w - c[p];
            w = fc(m, w, f);
          }
          const x = a.fn({ ...t, [d]: v, [h]: w });
          return { ...x, data: { x: x.x - n, y: x.y - r } };
        }
      }
    );
  },
  sx = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        options: e,
        fn(t) {
          const { x: n, y: r, placement: o, rects: i, middlewareData: s } = t,
            { offset: a = 0, mainAxis: l = !0, crossAxis: u = !0 } = e,
            c = { x: n, y: r },
            d = Kr(o),
            h = dv(d);
          let v = c[d],
            w = c[h];
          const x = typeof a == 'function' ? a({ ...i, placement: o }) : a,
            b =
              typeof x == 'number'
                ? { mainAxis: x, crossAxis: 0 }
                : { mainAxis: 0, crossAxis: 0, ...x };
          if (l) {
            const C = d === 'y' ? 'height' : 'width',
              S = i.reference[d] - i.floating[C] + b.mainAxis,
              E = i.reference[d] + i.reference[C] - b.mainAxis;
            v < S ? (v = S) : v > E && (v = E);
          }
          if (u) {
            var p, m, f, y;
            const C = d === 'y' ? 'width' : 'height',
              S = ['top', 'left'].includes(Ur(o)),
              E =
                i.reference[h] -
                i.floating[C] +
                (S && (p = (m = s.offset) == null ? void 0 : m[h]) != null
                  ? p
                  : 0) +
                (S ? 0 : b.crossAxis),
              k =
                i.reference[h] +
                i.reference[C] +
                (S
                  ? 0
                  : (f = (y = s.offset) == null ? void 0 : y[h]) != null
                    ? f
                    : 0) -
                (S ? b.crossAxis : 0);
            w < E ? (w = E) : w > k && (w = k);
          }
          return { [d]: v, [h]: w };
        }
      }
    );
  };
function pv(e) {
  return e && e.document && e.location && e.alert && e.setInterval;
}
function Qt(e) {
  if (e == null) return window;
  if (!pv(e)) {
    const t = e.ownerDocument;
    return (t && t.defaultView) || window;
  }
  return e;
}
function fi(e) {
  return Qt(e).getComputedStyle(e);
}
function Wt(e) {
  return pv(e) ? '' : e ? (e.nodeName || '').toLowerCase() : '';
}
function hv() {
  const e = navigator.userAgentData;
  return e != null && e.brands
    ? e.brands.map((t) => t.brand + '/' + t.version).join(' ')
    : navigator.userAgent;
}
function Rt(e) {
  return e instanceof Qt(e).HTMLElement;
}
function bn(e) {
  return e instanceof Qt(e).Element;
}
function ax(e) {
  return e instanceof Qt(e).Node;
}
function sd(e) {
  if (typeof ShadowRoot > 'u') return !1;
  const t = Qt(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function Ma(e) {
  const { overflow: t, overflowX: n, overflowY: r } = fi(e);
  return /auto|scroll|overlay|hidden/.test(t + r + n);
}
function lx(e) {
  return ['table', 'td', 'th'].includes(Wt(e));
}
function mv(e) {
  const t = /firefox/i.test(hv()),
    n = fi(e);
  return (
    n.transform !== 'none' ||
    n.perspective !== 'none' ||
    n.contain === 'paint' ||
    ['transform', 'perspective'].includes(n.willChange) ||
    (t && n.willChange === 'filter') ||
    (t && (n.filter ? n.filter !== 'none' : !1))
  );
}
function gv() {
  return !/^((?!chrome|android).)*safari/i.test(hv());
}
const t0 = Math.min,
  Po = Math.max,
  Js = Math.round;
function Ht(e, t, n) {
  var r, o, i, s;
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const a = e.getBoundingClientRect();
  let l = 1,
    u = 1;
  t &&
    Rt(e) &&
    ((l = (e.offsetWidth > 0 && Js(a.width) / e.offsetWidth) || 1),
    (u = (e.offsetHeight > 0 && Js(a.height) / e.offsetHeight) || 1));
  const c = bn(e) ? Qt(e) : window,
    d = !gv() && n,
    h =
      (a.left +
        (d &&
        (r = (o = c.visualViewport) == null ? void 0 : o.offsetLeft) != null
          ? r
          : 0)) /
      l,
    v =
      (a.top +
        (d &&
        (i = (s = c.visualViewport) == null ? void 0 : s.offsetTop) != null
          ? i
          : 0)) /
      u,
    w = a.width / l,
    x = a.height / u;
  return {
    width: w,
    height: x,
    top: v,
    right: h + w,
    bottom: v + x,
    left: h,
    x: h,
    y: v
  };
}
function Pn(e) {
  return ((ax(e) ? e.ownerDocument : e.document) || window.document)
    .documentElement;
}
function Oa(e) {
  return bn(e)
    ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop }
    : { scrollLeft: e.pageXOffset, scrollTop: e.pageYOffset };
}
function vv(e) {
  return Ht(Pn(e)).left + Oa(e).scrollLeft;
}
function ux(e) {
  const t = Ht(e);
  return Js(t.width) !== e.offsetWidth || Js(t.height) !== e.offsetHeight;
}
function cx(e, t, n) {
  const r = Rt(t),
    o = Pn(t),
    i = Ht(e, r && ux(t), n === 'fixed');
  let s = { scrollLeft: 0, scrollTop: 0 };
  const a = { x: 0, y: 0 };
  if (r || (!r && n !== 'fixed'))
    if (((Wt(t) !== 'body' || Ma(o)) && (s = Oa(t)), Rt(t))) {
      const l = Ht(t, !0);
      (a.x = l.x + t.clientLeft), (a.y = l.y + t.clientTop);
    } else o && (a.x = vv(o));
  return {
    x: i.left + s.scrollLeft - a.x,
    y: i.top + s.scrollTop - a.y,
    width: i.width,
    height: i.height
  };
}
function yv(e) {
  return Wt(e) === 'html'
    ? e
    : e.assignedSlot || e.parentNode || (sd(e) ? e.host : null) || Pn(e);
}
function n0(e) {
  return !Rt(e) || getComputedStyle(e).position === 'fixed'
    ? null
    : e.offsetParent;
}
function fx(e) {
  let t = yv(e);
  for (sd(t) && (t = t.host); Rt(t) && !['html', 'body'].includes(Wt(t)); ) {
    if (mv(t)) return t;
    t = t.parentNode;
  }
  return null;
}
function dc(e) {
  const t = Qt(e);
  let n = n0(e);
  for (; n && lx(n) && getComputedStyle(n).position === 'static'; ) n = n0(n);
  return n &&
    (Wt(n) === 'html' ||
      (Wt(n) === 'body' && getComputedStyle(n).position === 'static' && !mv(n)))
    ? t
    : n || fx(e) || t;
}
function r0(e) {
  if (Rt(e)) return { width: e.offsetWidth, height: e.offsetHeight };
  const t = Ht(e);
  return { width: t.width, height: t.height };
}
function dx(e) {
  let { rect: t, offsetParent: n, strategy: r } = e;
  const o = Rt(n),
    i = Pn(n);
  if (n === i) return t;
  let s = { scrollLeft: 0, scrollTop: 0 };
  const a = { x: 0, y: 0 };
  if (
    (o || (!o && r !== 'fixed')) &&
    ((Wt(n) !== 'body' || Ma(i)) && (s = Oa(n)), Rt(n))
  ) {
    const l = Ht(n, !0);
    (a.x = l.x + n.clientLeft), (a.y = l.y + n.clientTop);
  }
  return { ...t, x: t.x - s.scrollLeft + a.x, y: t.y - s.scrollTop + a.y };
}
function px(e, t) {
  const n = Qt(e),
    r = Pn(e),
    o = n.visualViewport;
  let i = r.clientWidth,
    s = r.clientHeight,
    a = 0,
    l = 0;
  if (o) {
    (i = o.width), (s = o.height);
    const u = gv();
    (u || (!u && t === 'fixed')) && ((a = o.offsetLeft), (l = o.offsetTop));
  }
  return { width: i, height: s, x: a, y: l };
}
function hx(e) {
  var t;
  const n = Pn(e),
    r = Oa(e),
    o = (t = e.ownerDocument) == null ? void 0 : t.body,
    i = Po(
      n.scrollWidth,
      n.clientWidth,
      o ? o.scrollWidth : 0,
      o ? o.clientWidth : 0
    ),
    s = Po(
      n.scrollHeight,
      n.clientHeight,
      o ? o.scrollHeight : 0,
      o ? o.clientHeight : 0
    );
  let a = -r.scrollLeft + vv(e);
  const l = -r.scrollTop;
  return (
    fi(o || n).direction === 'rtl' &&
      (a += Po(n.clientWidth, o ? o.clientWidth : 0) - i),
    { width: i, height: s, x: a, y: l }
  );
}
function wv(e) {
  const t = yv(e);
  return ['html', 'body', '#document'].includes(Wt(t))
    ? e.ownerDocument.body
    : Rt(t) && Ma(t)
      ? t
      : wv(t);
}
function ea(e, t) {
  var n;
  t === void 0 && (t = []);
  const r = wv(e),
    o = r === ((n = e.ownerDocument) == null ? void 0 : n.body),
    i = Qt(r),
    s = o ? [i].concat(i.visualViewport || [], Ma(r) ? r : []) : r,
    a = t.concat(s);
  return o ? a : a.concat(ea(s));
}
function mx(e, t) {
  const n = t.getRootNode == null ? void 0 : t.getRootNode();
  if (e.contains(t)) return !0;
  if (n && sd(n)) {
    let r = t;
    do {
      if (r && e === r) return !0;
      r = r.parentNode || r.host;
    } while (r);
  }
  return !1;
}
function gx(e, t) {
  const n = Ht(e, !1, t === 'fixed'),
    r = n.top + e.clientTop,
    o = n.left + e.clientLeft;
  return {
    top: r,
    left: o,
    x: o,
    y: r,
    right: o + e.clientWidth,
    bottom: r + e.clientHeight,
    width: e.clientWidth,
    height: e.clientHeight
  };
}
function o0(e, t, n) {
  return t === 'viewport' ? Ys(px(e, n)) : bn(t) ? gx(t, n) : Ys(hx(Pn(e)));
}
function vx(e) {
  const t = ea(e),
    r = ['absolute', 'fixed'].includes(fi(e).position) && Rt(e) ? dc(e) : e;
  return bn(r) ? t.filter((o) => bn(o) && mx(o, r) && Wt(o) !== 'body') : [];
}
function yx(e) {
  let { element: t, boundary: n, rootBoundary: r, strategy: o } = e;
  const s = [...(n === 'clippingAncestors' ? vx(t) : [].concat(n)), r],
    a = s[0],
    l = s.reduce(
      (u, c) => {
        const d = o0(t, c, o);
        return (
          (u.top = Po(d.top, u.top)),
          (u.right = t0(d.right, u.right)),
          (u.bottom = t0(d.bottom, u.bottom)),
          (u.left = Po(d.left, u.left)),
          u
        );
      },
      o0(t, a, o)
    );
  return {
    width: l.right - l.left,
    height: l.bottom - l.top,
    x: l.left,
    y: l.top
  };
}
const wx = {
  getClippingRect: yx,
  convertOffsetParentRelativeRectToViewportRelativeRect: dx,
  isElement: bn,
  getDimensions: r0,
  getOffsetParent: dc,
  getDocumentElement: Pn,
  getElementRects: (e) => {
    let { reference: t, floating: n, strategy: r } = e;
    return { reference: cx(t, dc(n), r), floating: { ...r0(n), x: 0, y: 0 } };
  },
  getClientRects: (e) => Array.from(e.getClientRects()),
  isRTL: (e) => fi(e).direction === 'rtl'
};
function xx(e, t, n, r) {
  r === void 0 && (r = {});
  const {
      ancestorScroll: o = !0,
      ancestorResize: i = !0,
      elementResize: s = !0,
      animationFrame: a = !1
    } = r,
    l = o && !a,
    u = i && !a,
    c = l || u ? [...(bn(e) ? ea(e) : []), ...ea(t)] : [];
  c.forEach((x) => {
    l && x.addEventListener('scroll', n, { passive: !0 }),
      u && x.addEventListener('resize', n);
  });
  let d = null;
  if (s) {
    let x = !0;
    (d = new ResizeObserver(() => {
      x || n(), (x = !1);
    })),
      bn(e) && !a && d.observe(e),
      d.observe(t);
  }
  let h,
    v = a ? Ht(e) : null;
  a && w();
  function w() {
    const x = Ht(e);
    v &&
      (x.x !== v.x ||
        x.y !== v.y ||
        x.width !== v.width ||
        x.height !== v.height) &&
      n(),
      (v = x),
      (h = requestAnimationFrame(w));
  }
  return (
    n(),
    () => {
      var x;
      c.forEach((b) => {
        l && b.removeEventListener('scroll', n),
          u && b.removeEventListener('resize', n);
      }),
        (x = d) == null || x.disconnect(),
        (d = null),
        a && cancelAnimationFrame(h);
    }
  );
}
const Cx = (e, t, n) => H8(e, t, { platform: wx, ...n });
var pc = typeof document < 'u' ? g.useLayoutEffect : g.useEffect;
function hc(e, t) {
  if (e === t) return !0;
  if (typeof e != typeof t) return !1;
  if (typeof e == 'function' && e.toString() === t.toString()) return !0;
  let n, r, o;
  if (e && t && typeof e == 'object') {
    if (Array.isArray(e)) {
      if (((n = e.length), n != t.length)) return !1;
      for (r = n; r-- !== 0; ) if (!hc(e[r], t[r])) return !1;
      return !0;
    }
    if (((o = Object.keys(e)), (n = o.length), n !== Object.keys(t).length))
      return !1;
    for (r = n; r-- !== 0; )
      if (!Object.prototype.hasOwnProperty.call(t, o[r])) return !1;
    for (r = n; r-- !== 0; ) {
      const i = o[r];
      if (!(i === '_owner' && e.$$typeof) && !hc(e[i], t[i])) return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function bx(e) {
  const t = g.useRef(e);
  return (
    pc(() => {
      t.current = e;
    }),
    t
  );
}
function Sx(e) {
  let {
    middleware: t,
    placement: n = 'bottom',
    strategy: r = 'absolute',
    whileElementsMounted: o
  } = e === void 0 ? {} : e;
  const i = g.useRef(null),
    s = g.useRef(null),
    a = bx(o),
    l = g.useRef(null),
    [u, c] = g.useState({
      x: null,
      y: null,
      strategy: r,
      placement: n,
      middlewareData: {}
    }),
    [d, h] = g.useState(t);
  hc(
    d == null
      ? void 0
      : d.map((f) => {
          let { options: y } = f;
          return y;
        }),
    t == null
      ? void 0
      : t.map((f) => {
          let { options: y } = f;
          return y;
        })
  ) || h(t);
  const v = g.useCallback(() => {
    !i.current ||
      !s.current ||
      Cx(i.current, s.current, {
        middleware: d,
        placement: n,
        strategy: r
      }).then((f) => {
        w.current &&
          jn.flushSync(() => {
            c(f);
          });
      });
  }, [d, n, r]);
  pc(() => {
    w.current && v();
  }, [v]);
  const w = g.useRef(!1);
  pc(
    () => (
      (w.current = !0),
      () => {
        w.current = !1;
      }
    ),
    []
  );
  const x = g.useCallback(() => {
      if (
        (typeof l.current == 'function' && (l.current(), (l.current = null)),
        i.current && s.current)
      )
        if (a.current) {
          const f = a.current(i.current, s.current, v);
          l.current = f;
        } else v();
    }, [v, a]),
    b = g.useCallback(
      (f) => {
        (i.current = f), x();
      },
      [x]
    ),
    p = g.useCallback(
      (f) => {
        (s.current = f), x();
      },
      [x]
    ),
    m = g.useMemo(() => ({ reference: i, floating: s }), []);
  return g.useMemo(
    () => ({ ...u, update: v, refs: m, reference: b, floating: p }),
    [u, v, m, b, p]
  );
}
const Ex = (e) => {
  const { element: t, padding: n } = e;
  function r(o) {
    return Object.prototype.hasOwnProperty.call(o, 'current');
  }
  return {
    name: 'arrow',
    options: e,
    fn(o) {
      return r(t)
        ? t.current != null
          ? Xh({ element: t.current, padding: n }).fn(o)
          : {}
        : t
          ? Xh({ element: t, padding: n }).fn(o)
          : {};
    }
  };
};
function kx(e) {
  const [t, n] = g.useState(void 0);
  return (
    Nr(() => {
      if (e) {
        n({ width: e.offsetWidth, height: e.offsetHeight });
        const r = new ResizeObserver((o) => {
          if (!Array.isArray(o) || !o.length) return;
          const i = o[0];
          let s, a;
          if ('borderBoxSize' in i) {
            const l = i.borderBoxSize,
              u = Array.isArray(l) ? l[0] : l;
            (s = u.inlineSize), (a = u.blockSize);
          } else (s = e.offsetWidth), (a = e.offsetHeight);
          n({ width: s, height: a });
        });
        return r.observe(e, { box: 'border-box' }), () => r.unobserve(e);
      } else n(void 0);
    }, [e]),
    t
  );
}
const xv = 'Popper',
  [ad, Aa] = Br(xv),
  [Px, Cv] = ad(xv),
  $x = (e) => {
    const { __scopePopper: t, children: n } = e,
      [r, o] = g.useState(null);
    return g.createElement(Px, { scope: t, anchor: r, onAnchorChange: o }, n);
  },
  _x = 'PopperAnchor',
  Tx = g.forwardRef((e, t) => {
    const { __scopePopper: n, virtualRef: r, ...o } = e,
      i = Cv(_x, n),
      s = g.useRef(null),
      a = Ge(t, s);
    return (
      g.useEffect(() => {
        i.onAnchorChange((r == null ? void 0 : r.current) || s.current);
      }),
      r ? null : g.createElement(Qe.div, G({}, o, { ref: a }))
    );
  }),
  ta = 'PopperContent',
  [Rx, ES] = ad(ta),
  [Mx, Ox] = ad(ta, { hasParent: !1, positionUpdateFns: new Set() }),
  Ax = g.forwardRef((e, t) => {
    var n, r, o, i, s, a, l, u;
    const {
        __scopePopper: c,
        side: d = 'bottom',
        sideOffset: h = 0,
        align: v = 'center',
        alignOffset: w = 0,
        arrowPadding: x = 0,
        collisionBoundary: b = [],
        collisionPadding: p = 0,
        sticky: m = 'partial',
        hideWhenDetached: f = !1,
        avoidCollisions: y = !0,
        ...C
      } = e,
      S = Cv(ta, c),
      [E, k] = g.useState(null),
      A = Ge(t, (Va) => k(Va)),
      [R, j] = g.useState(null),
      W = kx(R),
      _ = (n = W == null ? void 0 : W.width) !== null && n !== void 0 ? n : 0,
      $ = (r = W == null ? void 0 : W.height) !== null && r !== void 0 ? r : 0,
      T = d + (v !== 'center' ? '-' + v : ''),
      M =
        typeof p == 'number'
          ? p
          : { top: 0, right: 0, bottom: 0, left: 0, ...p },
      D = Array.isArray(b) ? b : [b],
      P = D.length > 0,
      O = { padding: M, boundary: D.filter(Lx), altBoundary: P },
      {
        reference: F,
        floating: U,
        strategy: z,
        x: Z,
        y: de,
        placement: te,
        middlewareData: ne,
        update: Oe
      } = Sx({
        strategy: 'fixed',
        placement: T,
        whileElementsMounted: xx,
        middleware: [
          ox({ mainAxis: h + $, alignmentAxis: w }),
          y
            ? ix({
                mainAxis: !0,
                crossAxis: !1,
                limiter: m === 'partial' ? sx() : void 0,
                ...O
              })
            : void 0,
          R ? Ex({ element: R, padding: x }) : void 0,
          y ? tx({ ...O }) : void 0,
          Fx({ arrowWidth: _, arrowHeight: $ }),
          f ? nx({ strategy: 'referenceHidden' }) : void 0
        ].filter(Dx)
      });
    Nr(() => {
      F(S.anchor);
    }, [F, S.anchor]);
    const $e = Z !== null && de !== null,
      [Wr, ay] = bv(te),
      ly = (o = ne.arrow) === null || o === void 0 ? void 0 : o.x,
      uy = (i = ne.arrow) === null || i === void 0 ? void 0 : i.y,
      cy =
        ((s = ne.arrow) === null || s === void 0 ? void 0 : s.centerOffset) !==
        0,
      [fy, dy] = g.useState();
    Nr(() => {
      E && dy(window.getComputedStyle(E).zIndex);
    }, [E]);
    const { hasParent: py, positionUpdateFns: er } = Ox(ta, c),
      Hr = !py;
    g.useLayoutEffect(() => {
      if (!Hr)
        return (
          er.add(Oe),
          () => {
            er.delete(Oe);
          }
        );
    }, [Hr, er, Oe]),
      g.useLayoutEffect(() => {
        Hr &&
          $e &&
          Array.from(er)
            .reverse()
            .forEach((Va) => requestAnimationFrame(Va));
      }, [Hr, $e, er]);
    const vd = {
      'data-side': Wr,
      'data-align': ay,
      ...C,
      ref: A,
      style: {
        ...C.style,
        animation: $e ? void 0 : 'none',
        opacity:
          (a = ne.hide) !== null && a !== void 0 && a.referenceHidden
            ? 0
            : void 0
      }
    };
    return g.createElement(
      'div',
      {
        ref: U,
        'data-radix-popper-content-wrapper': '',
        style: {
          position: z,
          left: 0,
          top: 0,
          transform: $e
            ? `translate3d(${Math.round(Z)}px, ${Math.round(de)}px, 0)`
            : 'translate3d(0, -200%, 0)',
          minWidth: 'max-content',
          zIndex: fy,
          ['--radix-popper-transform-origin']: [
            (l = ne.transformOrigin) === null || l === void 0 ? void 0 : l.x,
            (u = ne.transformOrigin) === null || u === void 0 ? void 0 : u.y
          ].join(' ')
        }
      },
      g.createElement(
        Rx,
        {
          scope: c,
          placedSide: Wr,
          onArrowChange: j,
          arrowX: ly,
          arrowY: uy,
          shouldHideArrow: cy
        },
        Hr
          ? g.createElement(
              Mx,
              { scope: c, hasParent: !0, positionUpdateFns: er },
              g.createElement(Qe.div, vd)
            )
          : g.createElement(Qe.div, vd)
      )
    );
  });
function Dx(e) {
  return e !== void 0;
}
function Lx(e) {
  return e !== null;
}
const Fx = (e) => ({
  name: 'transformOrigin',
  options: e,
  fn(t) {
    var n, r, o, i, s;
    const { placement: a, rects: l, middlewareData: u } = t,
      d =
        ((n = u.arrow) === null || n === void 0 ? void 0 : n.centerOffset) !==
        0,
      h = d ? 0 : e.arrowWidth,
      v = d ? 0 : e.arrowHeight,
      [w, x] = bv(a),
      b = { start: '0%', center: '50%', end: '100%' }[x],
      p =
        ((r = (o = u.arrow) === null || o === void 0 ? void 0 : o.x) !== null &&
        r !== void 0
          ? r
          : 0) +
        h / 2,
      m =
        ((i = (s = u.arrow) === null || s === void 0 ? void 0 : s.y) !== null &&
        i !== void 0
          ? i
          : 0) +
        v / 2;
    let f = '',
      y = '';
    return (
      w === 'bottom'
        ? ((f = d ? b : `${p}px`), (y = `${-v}px`))
        : w === 'top'
          ? ((f = d ? b : `${p}px`), (y = `${l.floating.height + v}px`))
          : w === 'right'
            ? ((f = `${-v}px`), (y = d ? b : `${m}px`))
            : w === 'left' &&
              ((f = `${l.floating.width + v}px`), (y = d ? b : `${m}px`)),
      { data: { x: f, y } }
    );
  }
});
function bv(e) {
  const [t, n = 'center'] = e.split('-');
  return [t, n];
}
const Sv = $x,
  Ev = Tx,
  kv = Ax,
  Pv = g.forwardRef((e, t) => {
    var n;
    const {
      container: r = globalThis == null ||
      (n = globalThis.document) === null ||
      n === void 0
        ? void 0
        : n.body,
      ...o
    } = e;
    return r
      ? U5.createPortal(g.createElement(Qe.div, G({}, o, { ref: t })), r)
      : null;
  });
function Nx(e, t) {
  return g.useReducer((n, r) => {
    const o = t[n][r];
    return o ?? n;
  }, e);
}
const di = (e) => {
  const { present: t, children: n } = e,
    r = Ix(t),
    o =
      typeof n == 'function' ? n({ present: r.isPresent }) : g.Children.only(n),
    i = Ge(r.ref, o.ref);
  return typeof n == 'function' || r.isPresent
    ? g.cloneElement(o, { ref: i })
    : null;
};
di.displayName = 'Presence';
function Ix(e) {
  const [t, n] = g.useState(),
    r = g.useRef({}),
    o = g.useRef(e),
    i = g.useRef('none'),
    s = e ? 'mounted' : 'unmounted',
    [a, l] = Nx(s, {
      mounted: { UNMOUNT: 'unmounted', ANIMATION_OUT: 'unmountSuspended' },
      unmountSuspended: { MOUNT: 'mounted', ANIMATION_END: 'unmounted' },
      unmounted: { MOUNT: 'mounted' }
    });
  return (
    g.useEffect(() => {
      const u = Ii(r.current);
      i.current = a === 'mounted' ? u : 'none';
    }, [a]),
    Nr(() => {
      const u = r.current,
        c = o.current;
      if (c !== e) {
        const h = i.current,
          v = Ii(u);
        e
          ? l('MOUNT')
          : v === 'none' || (u == null ? void 0 : u.display) === 'none'
            ? l('UNMOUNT')
            : l(c && h !== v ? 'ANIMATION_OUT' : 'UNMOUNT'),
          (o.current = e);
      }
    }, [e, l]),
    Nr(() => {
      if (t) {
        const u = (d) => {
            const v = Ii(r.current).includes(d.animationName);
            d.target === t && v && jn.flushSync(() => l('ANIMATION_END'));
          },
          c = (d) => {
            d.target === t && (i.current = Ii(r.current));
          };
        return (
          t.addEventListener('animationstart', c),
          t.addEventListener('animationcancel', u),
          t.addEventListener('animationend', u),
          () => {
            t.removeEventListener('animationstart', c),
              t.removeEventListener('animationcancel', u),
              t.removeEventListener('animationend', u);
          }
        );
      } else l('ANIMATION_END');
    }, [t, l]),
    {
      isPresent: ['mounted', 'unmountSuspended'].includes(a),
      ref: g.useCallback((u) => {
        u && (r.current = getComputedStyle(u)), n(u);
      }, [])
    }
  );
}
function Ii(e) {
  return (e == null ? void 0 : e.animationName) || 'none';
}
function ld({ prop: e, defaultProp: t, onChange: n = () => {} }) {
  const [r, o] = Vx({ defaultProp: t, onChange: n }),
    i = e !== void 0,
    s = i ? e : r,
    a = Tt(n),
    l = g.useCallback(
      (u) => {
        if (i) {
          const d = typeof u == 'function' ? u(e) : u;
          d !== e && a(d);
        } else o(u);
      },
      [i, e, o, a]
    );
  return [s, l];
}
function Vx({ defaultProp: e, onChange: t }) {
  const n = g.useState(e),
    [r] = n,
    o = g.useRef(r),
    i = Tt(t);
  return (
    g.useEffect(() => {
      o.current !== r && (i(r), (o.current = r));
    }, [r, o, i]),
    n
  );
}
const zx = g.forwardRef((e, t) =>
    g.createElement(
      Qe.span,
      G({}, e, {
        ref: t,
        style: {
          position: 'absolute',
          border: 0,
          width: 1,
          height: 1,
          padding: 0,
          margin: -1,
          overflow: 'hidden',
          clip: 'rect(0, 0, 0, 0)',
          whiteSpace: 'nowrap',
          wordWrap: 'normal',
          ...e.style
        }
      })
    )
  ),
  jx = zx,
  [Da, kS] = Br('Tooltip', [Aa]),
  ud = Aa(),
  Bx = 'TooltipProvider',
  Ux = 700,
  mc = 'tooltip.open',
  [Kx, cd] = Da(Bx),
  Wx = (e) => {
    const {
        __scopeTooltip: t,
        delayDuration: n = Ux,
        skipDelayDuration: r = 300,
        disableHoverableContent: o = !1,
        children: i
      } = e,
      [s, a] = g.useState(!0),
      l = g.useRef(!1),
      u = g.useRef(0);
    return (
      g.useEffect(() => {
        const c = u.current;
        return () => window.clearTimeout(c);
      }, []),
      g.createElement(
        Kx,
        {
          scope: t,
          isOpenDelayed: s,
          delayDuration: n,
          onOpen: g.useCallback(() => {
            window.clearTimeout(u.current), a(!1);
          }, []),
          onClose: g.useCallback(() => {
            window.clearTimeout(u.current),
              (u.current = window.setTimeout(() => a(!0), r));
          }, [r]),
          isPointerInTransitRef: l,
          onPointerInTransitChange: g.useCallback((c) => {
            l.current = c;
          }, []),
          disableHoverableContent: o
        },
        i
      )
    );
  },
  fd = 'Tooltip',
  [Hx, pi] = Da(fd),
  Gx = (e) => {
    const {
        __scopeTooltip: t,
        children: n,
        open: r,
        defaultOpen: o = !1,
        onOpenChange: i,
        disableHoverableContent: s,
        delayDuration: a
      } = e,
      l = cd(fd, e.__scopeTooltip),
      u = ud(t),
      [c, d] = g.useState(null),
      h = qs(),
      v = g.useRef(0),
      w = s ?? l.disableHoverableContent,
      x = a ?? l.delayDuration,
      b = g.useRef(!1),
      [p = !1, m] = ld({
        prop: r,
        defaultProp: o,
        onChange: (E) => {
          E
            ? (l.onOpen(), document.dispatchEvent(new CustomEvent(mc)))
            : l.onClose(),
            i == null || i(E);
        }
      }),
      f = g.useMemo(
        () => (p ? (b.current ? 'delayed-open' : 'instant-open') : 'closed'),
        [p]
      ),
      y = g.useCallback(() => {
        window.clearTimeout(v.current), (b.current = !1), m(!0);
      }, [m]),
      C = g.useCallback(() => {
        window.clearTimeout(v.current), m(!1);
      }, [m]),
      S = g.useCallback(() => {
        window.clearTimeout(v.current),
          (v.current = window.setTimeout(() => {
            (b.current = !0), m(!0);
          }, x));
      }, [x, m]);
    return (
      g.useEffect(() => () => window.clearTimeout(v.current), []),
      g.createElement(
        Sv,
        u,
        g.createElement(
          Hx,
          {
            scope: t,
            contentId: h,
            open: p,
            stateAttribute: f,
            trigger: c,
            onTriggerChange: d,
            onTriggerEnter: g.useCallback(() => {
              l.isOpenDelayed ? S() : y();
            }, [l.isOpenDelayed, S, y]),
            onTriggerLeave: g.useCallback(() => {
              w ? C() : window.clearTimeout(v.current);
            }, [C, w]),
            onOpen: y,
            onClose: C,
            disableHoverableContent: w
          },
          n
        )
      )
    );
  },
  i0 = 'TooltipTrigger',
  Qx = g.forwardRef((e, t) => {
    const { __scopeTooltip: n, ...r } = e,
      o = pi(i0, n),
      i = cd(i0, n),
      s = ud(n),
      a = g.useRef(null),
      l = Ge(t, a, o.onTriggerChange),
      u = g.useRef(!1),
      c = g.useRef(!1),
      d = g.useCallback(() => (u.current = !1), []);
    return (
      g.useEffect(
        () => () => document.removeEventListener('pointerup', d),
        [d]
      ),
      g.createElement(
        Ev,
        G({ asChild: !0 }, s),
        g.createElement(
          Qe.button,
          G(
            {
              'aria-describedby': o.open ? o.contentId : void 0,
              'data-state': o.stateAttribute
            },
            r,
            {
              ref: l,
              onPointerMove: Y(e.onPointerMove, (h) => {
                h.pointerType !== 'touch' &&
                  !c.current &&
                  !i.isPointerInTransitRef.current &&
                  (o.onTriggerEnter(), (c.current = !0));
              }),
              onPointerLeave: Y(e.onPointerLeave, () => {
                o.onTriggerLeave(), (c.current = !1);
              }),
              onPointerDown: Y(e.onPointerDown, () => {
                (u.current = !0),
                  document.addEventListener('pointerup', d, { once: !0 });
              }),
              onFocus: Y(e.onFocus, () => {
                u.current || o.onOpen();
              }),
              onBlur: Y(e.onBlur, o.onClose),
              onClick: Y(e.onClick, o.onClose)
            }
          )
        )
      )
    );
  }),
  $v = 'TooltipPortal',
  [qx, Yx] = Da($v, { forceMount: void 0 }),
  Xx = (e) => {
    const { __scopeTooltip: t, forceMount: n, children: r, container: o } = e,
      i = pi($v, t);
    return g.createElement(
      qx,
      { scope: t, forceMount: n },
      g.createElement(
        di,
        { present: n || i.open },
        g.createElement(Pv, { asChild: !0, container: o }, r)
      )
    );
  },
  Jo = 'TooltipContent',
  Zx = g.forwardRef((e, t) => {
    const n = Yx(Jo, e.__scopeTooltip),
      { forceMount: r = n.forceMount, side: o = 'top', ...i } = e,
      s = pi(Jo, e.__scopeTooltip);
    return g.createElement(
      di,
      { present: r || s.open },
      s.disableHoverableContent
        ? g.createElement(_v, G({ side: o }, i, { ref: t }))
        : g.createElement(Jx, G({ side: o }, i, { ref: t }))
    );
  }),
  Jx = g.forwardRef((e, t) => {
    const n = pi(Jo, e.__scopeTooltip),
      r = cd(Jo, e.__scopeTooltip),
      o = g.useRef(null),
      i = Ge(t, o),
      [s, a] = g.useState(null),
      { trigger: l, onClose: u } = n,
      c = o.current,
      { onPointerInTransitChange: d } = r,
      h = g.useCallback(() => {
        a(null), d(!1);
      }, [d]),
      v = g.useCallback(
        (w, x) => {
          const b = w.currentTarget,
            p = { x: w.clientX, y: w.clientY },
            m = t9(p, b.getBoundingClientRect()),
            f = m === 'right' || m === 'bottom' ? -5 : 5,
            C =
              m === 'right' || m === 'left'
                ? { x: w.clientX + f, y: w.clientY }
                : { x: w.clientX, y: w.clientY + f },
            S = n9(x.getBoundingClientRect()),
            E = o9([C, ...S]);
          a(E), d(!0);
        },
        [d]
      );
    return (
      g.useEffect(() => () => h(), [h]),
      g.useEffect(() => {
        if (l && c) {
          const w = (b) => v(b, c),
            x = (b) => v(b, l);
          return (
            l.addEventListener('pointerleave', w),
            c.addEventListener('pointerleave', x),
            () => {
              l.removeEventListener('pointerleave', w),
                c.removeEventListener('pointerleave', x);
            }
          );
        }
      }, [l, c, v, h]),
      g.useEffect(() => {
        if (s) {
          const w = (x) => {
            const b = x.target,
              p = { x: x.clientX, y: x.clientY },
              m =
                (l == null ? void 0 : l.contains(b)) ||
                (c == null ? void 0 : c.contains(b)),
              f = !r9(p, s);
            m ? h() : f && (h(), u());
          };
          return (
            document.addEventListener('pointermove', w),
            () => document.removeEventListener('pointermove', w)
          );
        }
      }, [l, c, s, u, h]),
      g.createElement(_v, G({}, e, { ref: i }))
    );
  }),
  [e9, PS] = Da(fd, { isInside: !1 }),
  _v = g.forwardRef((e, t) => {
    const {
        __scopeTooltip: n,
        children: r,
        'aria-label': o,
        onEscapeKeyDown: i,
        onPointerDownOutside: s,
        ...a
      } = e,
      l = pi(Jo, n),
      u = ud(n),
      { onClose: c } = l;
    return (
      g.useEffect(
        () => (
          document.addEventListener(mc, c),
          () => document.removeEventListener(mc, c)
        ),
        [c]
      ),
      g.useEffect(() => {
        if (l.trigger) {
          const d = (h) => {
            const v = h.target;
            v != null && v.contains(l.trigger) && c();
          };
          return (
            window.addEventListener('scroll', d, { capture: !0 }),
            () => window.removeEventListener('scroll', d, { capture: !0 })
          );
        }
      }, [l.trigger, c]),
      g.createElement(
        uv,
        {
          asChild: !0,
          disableOutsidePointerEvents: !1,
          onEscapeKeyDown: i,
          onPointerDownOutside: s,
          onFocusOutside: (d) => d.preventDefault(),
          onDismiss: c
        },
        g.createElement(
          kv,
          G({ 'data-state': l.stateAttribute }, u, a, {
            ref: t,
            style: {
              ...a.style,
              ['--radix-tooltip-content-transform-origin']:
                'var(--radix-popper-transform-origin)'
            }
          }),
          g.createElement(av, null, r),
          g.createElement(
            e9,
            { scope: n, isInside: !0 },
            g.createElement(jx, { id: l.contentId, role: 'tooltip' }, o || r)
          )
        )
      )
    );
  });
function t9(e, t) {
  const n = Math.abs(t.top - e.y),
    r = Math.abs(t.bottom - e.y),
    o = Math.abs(t.right - e.x),
    i = Math.abs(t.left - e.x);
  switch (Math.min(n, r, o, i)) {
    case i:
      return 'left';
    case o:
      return 'right';
    case n:
      return 'top';
    case r:
      return 'bottom';
    default:
      return null;
  }
}
function n9(e) {
  const { top: t, right: n, bottom: r, left: o } = e;
  return [
    { x: o, y: t },
    { x: n, y: t },
    { x: n, y: r },
    { x: o, y: r }
  ];
}
function r9(e, t) {
  const { x: n, y: r } = e;
  let o = !1;
  for (let i = 0, s = t.length - 1; i < t.length; s = i++) {
    const a = t[i].x,
      l = t[i].y,
      u = t[s].x,
      c = t[s].y;
    l > r != c > r && n < ((u - a) * (r - l)) / (c - l) + a && (o = !o);
  }
  return o;
}
function o9(e) {
  const t = e.slice();
  return (
    t.sort((n, r) =>
      n.x < r.x ? -1 : n.x > r.x ? 1 : n.y < r.y ? -1 : n.y > r.y ? 1 : 0
    ),
    i9(t)
  );
}
function i9(e) {
  if (e.length <= 1) return e.slice();
  const t = [];
  for (let r = 0; r < e.length; r++) {
    const o = e[r];
    for (; t.length >= 2; ) {
      const i = t[t.length - 1],
        s = t[t.length - 2];
      if ((i.x - s.x) * (o.y - s.y) >= (i.y - s.y) * (o.x - s.x)) t.pop();
      else break;
    }
    t.push(o);
  }
  t.pop();
  const n = [];
  for (let r = e.length - 1; r >= 0; r--) {
    const o = e[r];
    for (; n.length >= 2; ) {
      const i = n[n.length - 1],
        s = n[n.length - 2];
      if ((i.x - s.x) * (o.y - s.y) >= (i.y - s.y) * (o.x - s.x)) n.pop();
      else break;
    }
    n.push(o);
  }
  return (
    n.pop(),
    t.length === 1 && n.length === 1 && t[0].x === n[0].x && t[0].y === n[0].y
      ? t
      : t.concat(n)
  );
}
const s9 = Wx,
  a9 = Gx,
  l9 = Qx,
  u9 = Xx,
  c9 = Zx;
function f9(e) {
  for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
  e && e.addEventListener && e.addEventListener.apply(e, t);
}
function d9(e) {
  for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
  e && e.removeEventListener && e.removeEventListener.apply(e, t);
}
var p9 = ['mousedown', 'touchstart'],
  h9 = function (e, t, n) {
    n === void 0 && (n = p9);
    var r = g.useRef(t);
    g.useEffect(
      function () {
        r.current = t;
      },
      [t]
    ),
      g.useEffect(
        function () {
          for (
            var o = function (l) {
                var u = e.current;
                u && !u.contains(l.target) && r.current(l);
              },
              i = 0,
              s = n;
            i < s.length;
            i++
          ) {
            var a = s[i];
            f9(document, a, o);
          }
          return function () {
            for (var l = 0, u = n; l < u.length; l++) {
              var c = u[l];
              d9(document, c, o);
            }
          };
        },
        [n, e]
      );
  };
const m9 = h9;
var Tv = {},
  Vi = {},
  zi = {},
  s0;
function g9() {
  if (s0) return zi;
  (s0 = 1), Object.defineProperty(zi, '__esModule', { value: !0 });
  var e = g,
    t = function (n) {
      e.useEffect(n, []);
    };
  return (zi.default = t), zi;
}
var a0;
function v9() {
  if (a0) return Vi;
  (a0 = 1), Object.defineProperty(Vi, '__esModule', { value: !0 });
  var e = Fe,
    t = e.__importDefault(g9()),
    n = function (r) {
      t.default(function () {
        r();
      });
    };
  return (Vi.default = n), Vi;
}
var na = {},
  y9 = {
    get exports() {
      return na;
    },
    set exports(e) {
      na = e;
    }
  },
  l0;
function w9() {
  return (
    l0 ||
      ((l0 = 1),
      (function (e, t) {
        (function (n, r) {
          e.exports = r();
        })(uo, function () {
          function n(p) {
            return (
              typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
                ? (n = function (m) {
                    return typeof m;
                  })
                : (n = function (m) {
                    return m &&
                      typeof Symbol == 'function' &&
                      m.constructor === Symbol &&
                      m !== Symbol.prototype
                      ? 'symbol'
                      : typeof m;
                  }),
              n(p)
            );
          }
          function r(p, m) {
            if (!(p instanceof m))
              throw new TypeError('Cannot call a class as a function');
          }
          function o(p, m) {
            for (var f = 0; f < m.length; f++) {
              var y = m[f];
              (y.enumerable = y.enumerable || !1),
                (y.configurable = !0),
                'value' in y && (y.writable = !0),
                Object.defineProperty(p, y.key, y);
            }
          }
          function i(p, m, f) {
            return m && o(p.prototype, m), f && o(p, f), p;
          }
          function s(p) {
            return a(p) || l(p) || u(p) || d();
          }
          function a(p) {
            if (Array.isArray(p)) return c(p);
          }
          function l(p) {
            if (typeof Symbol < 'u' && Symbol.iterator in Object(p))
              return Array.from(p);
          }
          function u(p, m) {
            if (p) {
              if (typeof p == 'string') return c(p, m);
              var f = Object.prototype.toString.call(p).slice(8, -1);
              if (
                (f === 'Object' && p.constructor && (f = p.constructor.name),
                f === 'Map' || f === 'Set')
              )
                return Array.from(p);
              if (
                f === 'Arguments' ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(f)
              )
                return c(p, m);
            }
          }
          function c(p, m) {
            (m == null || m > p.length) && (m = p.length);
            for (var f = 0, y = new Array(m); f < m; f++) y[f] = p[f];
            return y;
          }
          function d() {
            throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
          }
          var h = (function () {
            function p(m) {
              r(this, p),
                (this.sourceStr = m),
                (this.subCombos = p.parseComboStr(m)),
                (this.keyNames = this.subCombos.reduce(function (f, y) {
                  return f.concat(y);
                }, []));
            }
            return (
              i(p, [
                {
                  key: 'check',
                  value: function (f) {
                    for (var y = 0, C = 0; C < this.subCombos.length; C += 1)
                      if (
                        ((y = this._checkSubCombo(this.subCombos[C], y, f)),
                        y === -1)
                      )
                        return !1;
                    return !0;
                  }
                },
                {
                  key: 'isEqual',
                  value: function (f) {
                    if (
                      !f ||
                      (typeof f != 'string' && n(f) !== 'object') ||
                      (typeof f == 'string' && (f = new p(f)),
                      this.subCombos.length !== f.subCombos.length)
                    )
                      return !1;
                    for (var y = 0; y < this.subCombos.length; y += 1)
                      if (this.subCombos[y].length !== f.subCombos[y].length)
                        return !1;
                    for (var C = 0; C < this.subCombos.length; C += 1) {
                      for (
                        var S = this.subCombos[C],
                          E = f.subCombos[C].slice(0),
                          k = 0;
                        k < S.length;
                        k += 1
                      ) {
                        var A = S[k],
                          R = E.indexOf(A);
                        R > -1 && E.splice(R, 1);
                      }
                      if (E.length !== 0) return !1;
                    }
                    return !0;
                  }
                },
                {
                  key: '_checkSubCombo',
                  value: function (f, y, C) {
                    (f = f.slice(0)), (C = C.slice(y));
                    for (var S = y, E = 0; E < f.length; E += 1) {
                      var k = f[E];
                      if (k[0] === '\\') {
                        var A = k.slice(1);
                        (A === p.comboDeliminator || A === p.keyDeliminator) &&
                          (k = A);
                      }
                      var R = C.indexOf(k);
                      if (
                        R > -1 &&
                        (f.splice(E, 1),
                        (E -= 1),
                        R > S && (S = R),
                        f.length === 0)
                      )
                        return S;
                    }
                    return -1;
                  }
                }
              ]),
              p
            );
          })();
          (h.comboDeliminator = '>'),
            (h.keyDeliminator = '+'),
            (h.parseComboStr = function (p) {
              for (
                var m = h._splitStr(p, h.comboDeliminator), f = [], y = 0;
                y < m.length;
                y += 1
              )
                f.push(h._splitStr(m[y], h.keyDeliminator));
              return f;
            }),
            (h._splitStr = function (p, m) {
              for (
                var f = p, y = m, C = '', S = [], E = 0;
                E < f.length;
                E += 1
              )
                E > 0 &&
                  f[E] === y &&
                  f[E - 1] !== '\\' &&
                  (S.push(C.trim()), (C = ''), (E += 1)),
                  (C += f[E]);
              return C && S.push(C.trim()), S;
            });
          var v = (function () {
              function p(m) {
                r(this, p),
                  (this.localeName = m),
                  (this.activeTargetKeys = []),
                  (this.pressedKeys = []),
                  (this._appliedMacros = []),
                  (this._keyMap = {}),
                  (this._killKeyCodes = []),
                  (this._macros = []);
              }
              return (
                i(p, [
                  {
                    key: 'bindKeyCode',
                    value: function (f, y) {
                      typeof y == 'string' && (y = [y]), (this._keyMap[f] = y);
                    }
                  },
                  {
                    key: 'bindMacro',
                    value: function (f, y) {
                      typeof y == 'string' && (y = [y]);
                      var C = null;
                      typeof y == 'function' && ((C = y), (y = null));
                      var S = { keyCombo: new h(f), keyNames: y, handler: C };
                      this._macros.push(S);
                    }
                  },
                  {
                    key: 'getKeyCodes',
                    value: function (f) {
                      var y = [];
                      for (var C in this._keyMap) {
                        var S = this._keyMap[C].indexOf(f);
                        S > -1 && y.push(C | 0);
                      }
                      return y;
                    }
                  },
                  {
                    key: 'getKeyNames',
                    value: function (f) {
                      return this._keyMap[f] || [];
                    }
                  },
                  {
                    key: 'setKillKey',
                    value: function (f) {
                      if (typeof f == 'string') {
                        for (
                          var y = this.getKeyCodes(f), C = 0;
                          C < y.length;
                          C += 1
                        )
                          this.setKillKey(y[C]);
                        return;
                      }
                      this._killKeyCodes.push(f);
                    }
                  },
                  {
                    key: 'pressKey',
                    value: function (f) {
                      if (typeof f == 'string') {
                        for (
                          var y = this.getKeyCodes(f), C = 0;
                          C < y.length;
                          C += 1
                        )
                          this.pressKey(y[C]);
                        return;
                      }
                      this.activeTargetKeys.length = 0;
                      for (
                        var S = this.getKeyNames(f), E = 0;
                        E < S.length;
                        E += 1
                      )
                        this.activeTargetKeys.push(S[E]),
                          this.pressedKeys.indexOf(S[E]) === -1 &&
                            this.pressedKeys.push(S[E]);
                      this._applyMacros();
                    }
                  },
                  {
                    key: 'releaseKey',
                    value: function (f) {
                      if (typeof f == 'string')
                        for (
                          var y = this.getKeyCodes(f), C = 0;
                          C < y.length;
                          C += 1
                        )
                          this.releaseKey(y[C]);
                      else {
                        var S = this.getKeyNames(f),
                          E = this._killKeyCodes.indexOf(f);
                        if (E !== -1) this.pressedKeys.length = 0;
                        else
                          for (var k = 0; k < S.length; k += 1) {
                            var A = this.pressedKeys.indexOf(S[k]);
                            A > -1 && this.pressedKeys.splice(A, 1);
                          }
                        (this.activeTargetKeys.length = 0), this._clearMacros();
                      }
                    }
                  },
                  {
                    key: '_applyMacros',
                    value: function () {
                      for (
                        var f = this._macros.slice(0), y = 0;
                        y < f.length;
                        y += 1
                      ) {
                        var C = f[y];
                        if (C.keyCombo.check(this.pressedKeys)) {
                          C.handler &&
                            (C.keyNames = C.handler(this.pressedKeys));
                          for (var S = 0; S < C.keyNames.length; S += 1)
                            this.pressedKeys.indexOf(C.keyNames[S]) === -1 &&
                              this.pressedKeys.push(C.keyNames[S]);
                          this._appliedMacros.push(C);
                        }
                      }
                    }
                  },
                  {
                    key: '_clearMacros',
                    value: function () {
                      for (var f = 0; f < this._appliedMacros.length; f += 1) {
                        var y = this._appliedMacros[f];
                        if (!y.keyCombo.check(this.pressedKeys)) {
                          for (var C = 0; C < y.keyNames.length; C += 1) {
                            var S = this.pressedKeys.indexOf(y.keyNames[C]);
                            S > -1 && this.pressedKeys.splice(S, 1);
                          }
                          y.handler && (y.keyNames = null),
                            this._appliedMacros.splice(f, 1),
                            (f -= 1);
                        }
                      }
                    }
                  }
                ]),
                p
              );
            })(),
            w = (function () {
              function p(m, f, y, C) {
                r(this, p),
                  (this._locale = null),
                  (this._currentContext = ''),
                  (this._contexts = {}),
                  (this._listeners = []),
                  (this._appliedListeners = []),
                  (this._locales = {}),
                  (this._targetElement = null),
                  (this._targetWindow = null),
                  (this._targetPlatform = ''),
                  (this._targetUserAgent = ''),
                  (this._isModernBrowser = !1),
                  (this._targetKeyDownBinding = null),
                  (this._targetKeyUpBinding = null),
                  (this._targetResetBinding = null),
                  (this._paused = !1),
                  (this._contexts.global = {
                    listeners: this._listeners,
                    targetWindow: m,
                    targetElement: f,
                    targetPlatform: y,
                    targetUserAgent: C
                  }),
                  this.setContext('global');
              }
              return (
                i(p, [
                  {
                    key: 'setLocale',
                    value: function (f, y) {
                      var C = null;
                      return (
                        typeof f == 'string'
                          ? y
                            ? ((C = new v(f)),
                              y(C, this._targetPlatform, this._targetUserAgent))
                            : (C = this._locales[f] || null)
                          : ((C = f), (f = C._localeName)),
                        (this._locale = C),
                        (this._locales[f] = C),
                        C && (this._locale.pressedKeys = C.pressedKeys),
                        this
                      );
                    }
                  },
                  {
                    key: 'getLocale',
                    value: function (f) {
                      return (
                        f || (f = this._locale.localeName),
                        this._locales[f] || null
                      );
                    }
                  },
                  {
                    key: 'bind',
                    value: function (f, y, C, S) {
                      if (
                        ((f === null || typeof f == 'function') &&
                          ((S = C), (C = y), (y = f), (f = null)),
                        f && n(f) === 'object' && typeof f.length == 'number')
                      ) {
                        for (var E = 0; E < f.length; E += 1)
                          this.bind(f[E], y, C);
                        return this;
                      }
                      return (
                        this._listeners.push({
                          keyCombo: f ? new h(f) : null,
                          pressHandler: y || null,
                          releaseHandler: C || null,
                          preventRepeat: !1,
                          preventRepeatByDefault: S || !1,
                          executingHandler: !1
                        }),
                        this
                      );
                    }
                  },
                  {
                    key: 'addListener',
                    value: function (f, y, C, S) {
                      return this.bind(f, y, C, S);
                    }
                  },
                  {
                    key: 'on',
                    value: function (f, y, C, S) {
                      return this.bind(f, y, C, S);
                    }
                  },
                  {
                    key: 'bindPress',
                    value: function (f, y, C) {
                      return this.bind(f, y, null, C);
                    }
                  },
                  {
                    key: 'bindRelease',
                    value: function (f, y) {
                      return this.bind(f, null, y, preventRepeatByDefault);
                    }
                  },
                  {
                    key: 'unbind',
                    value: function (f, y, C) {
                      if (
                        ((f === null || typeof f == 'function') &&
                          ((C = y), (y = f), (f = null)),
                        f && n(f) === 'object' && typeof f.length == 'number')
                      ) {
                        for (var S = 0; S < f.length; S += 1)
                          this.unbind(f[S], y, C);
                        return this;
                      }
                      for (var E = 0; E < this._listeners.length; E += 1) {
                        var k = this._listeners[E],
                          A =
                            (!f && !k.keyCombo) ||
                            (k.keyCombo && k.keyCombo.isEqual(f)),
                          R =
                            (!y && !C) ||
                            (!y && !k.pressHandler) ||
                            y === k.pressHandler,
                          j =
                            (!y && !C) ||
                            (!C && !k.releaseHandler) ||
                            C === k.releaseHandler;
                        A && R && j && (this._listeners.splice(E, 1), (E -= 1));
                      }
                      return this;
                    }
                  },
                  {
                    key: 'removeListener',
                    value: function (f, y, C) {
                      return this.unbind(f, y, C);
                    }
                  },
                  {
                    key: 'off',
                    value: function (f, y, C) {
                      return this.unbind(f, y, C);
                    }
                  },
                  {
                    key: 'setContext',
                    value: function (f) {
                      if (
                        (this._locale && this.releaseAllKeys(),
                        !this._contexts[f])
                      ) {
                        var y = this._contexts.global;
                        this._contexts[f] = {
                          listeners: [],
                          targetWindow: y.targetWindow,
                          targetElement: y.targetElement,
                          targetPlatform: y.targetPlatform,
                          targetUserAgent: y.targetUserAgent
                        };
                      }
                      var C = this._contexts[f];
                      return (
                        (this._currentContext = f),
                        (this._listeners = C.listeners),
                        this.stop(),
                        this.watch(
                          C.targetWindow,
                          C.targetElement,
                          C.targetPlatform,
                          C.targetUserAgent
                        ),
                        this
                      );
                    }
                  },
                  {
                    key: 'getContext',
                    value: function () {
                      return this._currentContext;
                    }
                  },
                  {
                    key: 'withContext',
                    value: function (f, y) {
                      var C = this.getContext();
                      return this.setContext(f), y(), this.setContext(C), this;
                    }
                  },
                  {
                    key: 'watch',
                    value: function (f, y, C, S) {
                      var E = this;
                      this.stop();
                      var k =
                        typeof globalThis < 'u'
                          ? globalThis
                          : typeof uo < 'u'
                            ? uo
                            : typeof window < 'u'
                              ? window
                              : {};
                      if (!f) {
                        if (!k.addEventListener && !k.attachEvent) {
                          if (this._currentContext === 'global') return;
                          throw new Error(
                            'Cannot find window functions addEventListener or attachEvent.'
                          );
                        }
                        f = k;
                      }
                      if (
                        (typeof f.nodeType == 'number' &&
                          ((S = C), (C = y), (y = f), (f = k)),
                        !f.addEventListener && !f.attachEvent)
                      )
                        throw new Error(
                          'Cannot find addEventListener or attachEvent methods on targetWindow.'
                        );
                      this._isModernBrowser = !!f.addEventListener;
                      var A = (f.navigator && f.navigator.userAgent) || '',
                        R = (f.navigator && f.navigator.platform) || '';
                      (y && y !== null) || (y = f.document),
                        (C && C !== null) || (C = R),
                        (S && S !== null) || (S = A),
                        (this._targetKeyDownBinding = function (W) {
                          E.pressKey(W.keyCode, W), E._handleCommandBug(W, R);
                        }),
                        (this._targetKeyUpBinding = function (W) {
                          E.releaseKey(W.keyCode, W);
                        }),
                        (this._targetResetBinding = function (W) {
                          E.releaseAllKeys(W);
                        }),
                        this._bindEvent(
                          y,
                          'keydown',
                          this._targetKeyDownBinding
                        ),
                        this._bindEvent(y, 'keyup', this._targetKeyUpBinding),
                        this._bindEvent(f, 'focus', this._targetResetBinding),
                        this._bindEvent(f, 'blur', this._targetResetBinding),
                        (this._targetElement = y),
                        (this._targetWindow = f),
                        (this._targetPlatform = C),
                        (this._targetUserAgent = S);
                      var j = this._contexts[this._currentContext];
                      return (
                        (j.targetWindow = this._targetWindow),
                        (j.targetElement = this._targetElement),
                        (j.targetPlatform = this._targetPlatform),
                        (j.targetUserAgent = this._targetUserAgent),
                        this
                      );
                    }
                  },
                  {
                    key: 'stop',
                    value: function () {
                      if (!(!this._targetElement || !this._targetWindow))
                        return (
                          this._unbindEvent(
                            this._targetElement,
                            'keydown',
                            this._targetKeyDownBinding
                          ),
                          this._unbindEvent(
                            this._targetElement,
                            'keyup',
                            this._targetKeyUpBinding
                          ),
                          this._unbindEvent(
                            this._targetWindow,
                            'focus',
                            this._targetResetBinding
                          ),
                          this._unbindEvent(
                            this._targetWindow,
                            'blur',
                            this._targetResetBinding
                          ),
                          (this._targetWindow = null),
                          (this._targetElement = null),
                          this
                        );
                    }
                  },
                  {
                    key: 'pressKey',
                    value: function (f, y) {
                      if (this._paused) return this;
                      if (!this._locale) throw new Error('Locale not set');
                      return (
                        this._locale.pressKey(f), this._applyBindings(y), this
                      );
                    }
                  },
                  {
                    key: 'releaseKey',
                    value: function (f, y) {
                      if (this._paused) return this;
                      if (!this._locale) throw new Error('Locale not set');
                      return (
                        this._locale.releaseKey(f), this._clearBindings(y), this
                      );
                    }
                  },
                  {
                    key: 'releaseAllKeys',
                    value: function (f) {
                      if (this._paused) return this;
                      if (!this._locale) throw new Error('Locale not set');
                      return (
                        (this._locale.pressedKeys.length = 0),
                        this._clearBindings(f),
                        this
                      );
                    }
                  },
                  {
                    key: 'pause',
                    value: function () {
                      return this._paused
                        ? this
                        : (this._locale && this.releaseAllKeys(),
                          (this._paused = !0),
                          this);
                    }
                  },
                  {
                    key: 'resume',
                    value: function () {
                      return (this._paused = !1), this;
                    }
                  },
                  {
                    key: 'reset',
                    value: function () {
                      return (
                        this.releaseAllKeys(),
                        (this._listeners.length = 0),
                        this
                      );
                    }
                  },
                  {
                    key: '_bindEvent',
                    value: function (f, y, C) {
                      return this._isModernBrowser
                        ? f.addEventListener(y, C, !1)
                        : f.attachEvent('on' + y, C);
                    }
                  },
                  {
                    key: '_unbindEvent',
                    value: function (f, y, C) {
                      return this._isModernBrowser
                        ? f.removeEventListener(y, C, !1)
                        : f.detachEvent('on' + y, C);
                    }
                  },
                  {
                    key: '_getGroupedListeners',
                    value: function () {
                      var f = [],
                        y = [],
                        C = this._listeners;
                      return (
                        this._currentContext !== 'global' &&
                          (C = [].concat(
                            s(C),
                            s(this._contexts.global.listeners)
                          )),
                        C.sort(function (S, E) {
                          return (
                            (E.keyCombo ? E.keyCombo.keyNames.length : 0) -
                            (S.keyCombo ? S.keyCombo.keyNames.length : 0)
                          );
                        }).forEach(function (S) {
                          for (var E = -1, k = 0; k < y.length; k += 1)
                            ((y[k] === null && S.keyCombo === null) ||
                              (y[k] !== null && y[k].isEqual(S.keyCombo))) &&
                              (E = k);
                          E === -1 && ((E = y.length), y.push(S.keyCombo)),
                            f[E] || (f[E] = []),
                            f[E].push(S);
                        }),
                        f
                      );
                    }
                  },
                  {
                    key: '_applyBindings',
                    value: function (f) {
                      var y = this,
                        C = !1;
                      f || (f = {}),
                        (f.preventRepeat = function () {
                          C = !0;
                        }),
                        (f.pressedKeys = this._locale.pressedKeys.slice(0));
                      for (
                        var S = this._locale.activeTargetKeys,
                          E = this._locale.pressedKeys.slice(0),
                          k = this._getGroupedListeners(),
                          A = function (W) {
                            var _ = k[W],
                              $ = _[0].keyCombo;
                            if (
                              $ === null ||
                              ($.check(E) &&
                                S.some(function (O) {
                                  return $.keyNames.includes(O);
                                }))
                            ) {
                              for (var T = 0; T < _.length; T += 1) {
                                var M = _[T];
                                !M.executingHandler &&
                                  M.pressHandler &&
                                  !M.preventRepeat &&
                                  ((M.executingHandler = !0),
                                  M.pressHandler.call(y, f),
                                  (M.executingHandler = !1),
                                  (C || M.preventRepeatByDefault) &&
                                    ((M.preventRepeat = !0), (C = !1))),
                                  y._appliedListeners.indexOf(M) === -1 &&
                                    y._appliedListeners.push(M);
                              }
                              if ($)
                                for (var D = 0; D < $.keyNames.length; D += 1) {
                                  var P = E.indexOf($.keyNames[D]);
                                  P !== -1 && (E.splice(P, 1), (D -= 1));
                                }
                            }
                          },
                          R = 0;
                        R < k.length;
                        R += 1
                      )
                        A(R);
                    }
                  },
                  {
                    key: '_clearBindings',
                    value: function (f) {
                      f || (f = {}),
                        (f.pressedKeys = this._locale.pressedKeys.slice(0));
                      for (
                        var y = 0;
                        y < this._appliedListeners.length;
                        y += 1
                      ) {
                        var C = this._appliedListeners[y],
                          S = C.keyCombo;
                        (S === null || !S.check(this._locale.pressedKeys)) &&
                          ((C.preventRepeat = !1),
                          (S !== null || f.pressedKeys.length === 0) &&
                            (this._appliedListeners.splice(y, 1), (y -= 1)),
                          !C.executingHandler &&
                            C.releaseHandler &&
                            ((C.executingHandler = !0),
                            C.releaseHandler.call(this, f),
                            (C.executingHandler = !1)));
                      }
                    }
                  },
                  {
                    key: '_handleCommandBug',
                    value: function (f, y) {
                      var C = [
                        'shift',
                        'ctrl',
                        'alt',
                        'capslock',
                        'tab',
                        'command'
                      ];
                      y.match('Mac') &&
                        this._locale.pressedKeys.includes('command') &&
                        !C.includes(this._locale.getKeyNames(f.keyCode)[0]) &&
                        this._targetKeyUpBinding(f);
                    }
                  }
                ]),
                p
              );
            })();
          function x(p, m, f) {
            p.bindKeyCode(3, ['cancel']),
              p.bindKeyCode(8, ['backspace']),
              p.bindKeyCode(9, ['tab']),
              p.bindKeyCode(12, ['clear']),
              p.bindKeyCode(13, ['enter']),
              p.bindKeyCode(16, ['shift']),
              p.bindKeyCode(17, ['ctrl']),
              p.bindKeyCode(18, ['alt', 'menu']),
              p.bindKeyCode(19, ['pause', 'break']),
              p.bindKeyCode(20, ['capslock']),
              p.bindKeyCode(27, ['escape', 'esc']),
              p.bindKeyCode(32, ['space', 'spacebar']),
              p.bindKeyCode(33, ['pageup']),
              p.bindKeyCode(34, ['pagedown']),
              p.bindKeyCode(35, ['end']),
              p.bindKeyCode(36, ['home']),
              p.bindKeyCode(37, ['left']),
              p.bindKeyCode(38, ['up']),
              p.bindKeyCode(39, ['right']),
              p.bindKeyCode(40, ['down']),
              p.bindKeyCode(41, ['select']),
              p.bindKeyCode(42, ['printscreen']),
              p.bindKeyCode(43, ['execute']),
              p.bindKeyCode(44, ['snapshot']),
              p.bindKeyCode(45, ['insert', 'ins']),
              p.bindKeyCode(46, ['delete', 'del']),
              p.bindKeyCode(47, ['help']),
              p.bindKeyCode(145, ['scrolllock', 'scroll']),
              p.bindKeyCode(188, ['comma', ',']),
              p.bindKeyCode(190, ['period', '.']),
              p.bindKeyCode(191, ['slash', 'forwardslash', '/']),
              p.bindKeyCode(192, ['graveaccent', '`']),
              p.bindKeyCode(219, ['openbracket', '[']),
              p.bindKeyCode(220, ['backslash', '\\']),
              p.bindKeyCode(221, ['closebracket', ']']),
              p.bindKeyCode(222, ['apostrophe', "'"]),
              p.bindKeyCode(48, ['zero', '0']),
              p.bindKeyCode(49, ['one', '1']),
              p.bindKeyCode(50, ['two', '2']),
              p.bindKeyCode(51, ['three', '3']),
              p.bindKeyCode(52, ['four', '4']),
              p.bindKeyCode(53, ['five', '5']),
              p.bindKeyCode(54, ['six', '6']),
              p.bindKeyCode(55, ['seven', '7']),
              p.bindKeyCode(56, ['eight', '8']),
              p.bindKeyCode(57, ['nine', '9']),
              p.bindKeyCode(96, ['numzero', 'num0']),
              p.bindKeyCode(97, ['numone', 'num1']),
              p.bindKeyCode(98, ['numtwo', 'num2']),
              p.bindKeyCode(99, ['numthree', 'num3']),
              p.bindKeyCode(100, ['numfour', 'num4']),
              p.bindKeyCode(101, ['numfive', 'num5']),
              p.bindKeyCode(102, ['numsix', 'num6']),
              p.bindKeyCode(103, ['numseven', 'num7']),
              p.bindKeyCode(104, ['numeight', 'num8']),
              p.bindKeyCode(105, ['numnine', 'num9']),
              p.bindKeyCode(106, ['nummultiply', 'num*']),
              p.bindKeyCode(107, ['numadd', 'num+']),
              p.bindKeyCode(108, ['numenter']),
              p.bindKeyCode(109, ['numsubtract', 'num-']),
              p.bindKeyCode(110, ['numdecimal', 'num.']),
              p.bindKeyCode(111, ['numdivide', 'num/']),
              p.bindKeyCode(144, ['numlock', 'num']),
              p.bindKeyCode(112, ['f1']),
              p.bindKeyCode(113, ['f2']),
              p.bindKeyCode(114, ['f3']),
              p.bindKeyCode(115, ['f4']),
              p.bindKeyCode(116, ['f5']),
              p.bindKeyCode(117, ['f6']),
              p.bindKeyCode(118, ['f7']),
              p.bindKeyCode(119, ['f8']),
              p.bindKeyCode(120, ['f9']),
              p.bindKeyCode(121, ['f10']),
              p.bindKeyCode(122, ['f11']),
              p.bindKeyCode(123, ['f12']),
              p.bindKeyCode(124, ['f13']),
              p.bindKeyCode(125, ['f14']),
              p.bindKeyCode(126, ['f15']),
              p.bindKeyCode(127, ['f16']),
              p.bindKeyCode(128, ['f17']),
              p.bindKeyCode(129, ['f18']),
              p.bindKeyCode(130, ['f19']),
              p.bindKeyCode(131, ['f20']),
              p.bindKeyCode(132, ['f21']),
              p.bindKeyCode(133, ['f22']),
              p.bindKeyCode(134, ['f23']),
              p.bindKeyCode(135, ['f24']),
              p.bindMacro('shift + `', ['tilde', '~']),
              p.bindMacro('shift + 1', [
                'exclamation',
                'exclamationpoint',
                '!'
              ]),
              p.bindMacro('shift + 2', ['at', '@']),
              p.bindMacro('shift + 3', ['number', '#']),
              p.bindMacro('shift + 4', [
                'dollar',
                'dollars',
                'dollarsign',
                '$'
              ]),
              p.bindMacro('shift + 5', ['percent', '%']),
              p.bindMacro('shift + 6', ['caret', '^']),
              p.bindMacro('shift + 7', ['ampersand', 'and', '&']),
              p.bindMacro('shift + 8', ['asterisk', '*']),
              p.bindMacro('shift + 9', ['openparen', '(']),
              p.bindMacro('shift + 0', ['closeparen', ')']),
              p.bindMacro('shift + -', ['underscore', '_']),
              p.bindMacro('shift + =', ['plus', '+']),
              p.bindMacro('shift + [', [
                'opencurlybrace',
                'opencurlybracket',
                '{'
              ]),
              p.bindMacro('shift + ]', [
                'closecurlybrace',
                'closecurlybracket',
                '}'
              ]),
              p.bindMacro('shift + \\', ['verticalbar', '|']),
              p.bindMacro('shift + ;', ['colon', ':']),
              p.bindMacro("shift + '", ['quotationmark', "'"]),
              p.bindMacro('shift + !,', ['openanglebracket', '<']),
              p.bindMacro('shift + .', ['closeanglebracket', '>']),
              p.bindMacro('shift + /', ['questionmark', '?']),
              m.match('Mac')
                ? p.bindMacro('command', ['mod', 'modifier'])
                : p.bindMacro('ctrl', ['mod', 'modifier']);
            for (var y = 65; y <= 90; y += 1) {
              var C = String.fromCharCode(y + 32),
                S = String.fromCharCode(y);
              p.bindKeyCode(y, C),
                p.bindMacro('shift + ' + C, S),
                p.bindMacro('capslock + ' + C, S);
            }
            var E = f.match('Firefox') ? 59 : 186,
              k = f.match('Firefox') ? 173 : 189,
              A = f.match('Firefox') ? 61 : 187,
              R,
              j;
            m.match('Mac') && (f.match('Safari') || f.match('Chrome'))
              ? ((R = 91), (j = 93))
              : m.match('Mac') && f.match('Opera')
                ? ((R = 17), (j = 17))
                : m.match('Mac') &&
                  f.match('Firefox') &&
                  ((R = 224), (j = 224)),
              p.bindKeyCode(E, ['semicolon', ';']),
              p.bindKeyCode(k, ['dash', '-']),
              p.bindKeyCode(A, ['equal', 'equalsign', '=']),
              p.bindKeyCode(R, [
                'command',
                'windows',
                'win',
                'super',
                'leftcommand',
                'leftwindows',
                'leftwin',
                'leftsuper'
              ]),
              p.bindKeyCode(j, [
                'command',
                'windows',
                'win',
                'super',
                'rightcommand',
                'rightwindows',
                'rightwin',
                'rightsuper'
              ]),
              p.setKillKey('command');
          }
          var b = new w();
          return (
            b.setLocale('us', x),
            (b.Keyboard = w),
            (b.Locale = v),
            (b.KeyCombo = h),
            b
          );
        });
      })(y9)),
    na
  );
}
Object.defineProperty(Tv, '__esModule', { value: !0 });
var Rv = Fe,
  Ml = g,
  x9 = Rv.__importDefault(v9()),
  C9 = function (e) {
    var t = Ml.useState([!1, null]),
      n = t[0],
      r = t[1],
      o = Ml.useState(null),
      i = o[0],
      s = o[1];
    return (
      x9.default(function () {
        Promise.resolve()
          .then(function () {
            return Rv.__importStar(w9());
          })
          .then(function (a) {
            return s(a.default || a);
          });
      }),
      Ml.useEffect(
        function () {
          if (i) {
            var a = function (u) {
                return r([!0, u]);
              },
              l = function (u) {
                return r([!1, u]);
              };
            return (
              i.bind(e, a, l, !0),
              function () {
                i.unbind(e, a, l);
              }
            );
          }
        },
        [e, i]
      ),
      n
    );
  },
  Ol = (Tv.default = C9);
const gc = new Map(),
  b9 = new Map();
function S9(e, t) {
  gc.has(e) || gc.set(e, { value: t, updaters: new Set() });
}
function La(e, t) {
  return S9(e, t), gc.get(e);
}
function E9(e) {
  return (t) => {
    _9(e, t);
  };
}
function k9(e, t) {
  La(e).value === void 0 && t !== void 0 && Mv(e, t);
}
function Fa(e, t) {
  k9(e, t);
  const n = La(e, t),
    r = g.useState(n.value);
  return n.updaters.add(r[1]), [n.value, E9(e)];
}
function P9(e, t) {
  const n = b9.get(e);
  if (!n) return t;
  let r = t;
  function o(i) {
    r = i;
  }
  return (
    n.forEach((i) => {
      i(r, o);
    }),
    r
  );
}
function Mv(e, t) {
  const n = La(e);
  n.value !== t && (n.value = P9(e, t));
}
function $9(e) {
  const t = La(e);
  t.updaters.forEach((n) => {
    n(t.value);
  });
}
function _9(e, t) {
  Mv(e, t), $9(e);
}
const T9 = () => {
    var e;
    return (
      [
        getComputedStyle(document.documentElement).colorScheme,
        getComputedStyle(document.body).colorScheme
      ].includes('dark') ||
      ((e = document.head.querySelector('meta[name="color-scheme"]')) == null
        ? void 0
        : e.content.startsWith('dark'))
    );
  },
  R9 = !1,
  Ov = ({ language: e }) =>
    sy(location.hostname)
      ? `https://app.ray.st/${e != 'en' ? e + '/' : ''}panel/${location.host}?${new URLSearchParams({ path: `${location.pathname}${location.search}`, ...R9, ...(T9() && { dark: '1' }) })}`
      : null;
function vc() {
  return (
    (vc = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    vc.apply(this, arguments)
  );
}
function M9(e, t) {
  if (e == null) return {};
  var n,
    r,
    o = {},
    i = Object.keys(e);
  for (r = 0; r < i.length; r++) (n = i[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
  return o;
}
var Dt = {},
  O9 = {
    get exports() {
      return Dt;
    },
    set exports(e) {
      Dt = e;
    }
  },
  A9 = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED',
  D9 = A9,
  L9 = D9;
function Av() {}
function Dv() {}
Dv.resetWarningCache = Av;
var F9 = function () {
  function e(r, o, i, s, a, l) {
    if (l !== L9) {
      var u = new Error(
        'Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types'
      );
      throw ((u.name = 'Invariant Violation'), u);
    }
  }
  e.isRequired = e;
  function t() {
    return e;
  }
  var n = {
    array: e,
    bigint: e,
    bool: e,
    func: e,
    number: e,
    object: e,
    string: e,
    symbol: e,
    any: e,
    arrayOf: t,
    element: e,
    elementType: e,
    instanceOf: t,
    node: e,
    objectOf: t,
    oneOf: t,
    oneOfType: t,
    shape: t,
    exact: t,
    checkPropTypes: Dv,
    resetWarningCache: Av
  };
  return (n.PropTypes = n), n;
};
O9.exports = F9();
var N9 = {
    xmlns: 'http://www.w3.org/2000/svg',
    width: 24,
    height: 24,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round'
  },
  I9 = ['color', 'size', 'strokeWidth', 'children'],
  Zn = function (e, t) {
    var n = g.forwardRef(function (r, o) {
      var i = r.color,
        s = i === void 0 ? 'currentColor' : i,
        a = r.size,
        l = a === void 0 ? 24 : a,
        u = r.strokeWidth,
        c = u === void 0 ? 2 : u,
        d = r.children,
        h = M9(r, I9);
      return g.createElement(
        'svg',
        vc(
          { ref: o },
          N9,
          {
            width: l,
            height: l,
            stroke: s,
            strokeWidth: c,
            className: 'tabler-icon tabler-icon-' + e
          },
          h
        ),
        [].concat(
          t.map(function (v) {
            var w = v[0],
              x = v[1];
            return g.createElement(w, x);
          }),
          d || []
        )
      );
    });
    return (
      (n.propTypes = {
        color: Dt.string,
        size: Dt.oneOfType([Dt.string, Dt.number]),
        strokeWidth: Dt.oneOfType([Dt.string, Dt.number])
      }),
      (n.displayName = '' + e),
      n
    );
  },
  V9 = Zn('IconAdjustmentsHorizontal', [
    [
      'path',
      {
        d: 'M14 6m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0m-8 0l8 0m4 0l4 0m-12 6m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0m-2 0l2 0m4 0l10 0m-3 6m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0m-11 0l11 0m4 0l1 0',
        key: 'svg-0'
      }
    ]
  ]),
  z9 = Zn('IconArrowBarToRight', [
    [
      'path',
      { d: 'M14 12l-10 0m10 0l-4 4m4 -4l-4 -4m10 -4l0 16', key: 'svg-0' }
    ]
  ]),
  ji = Zn('IconCheck', [['path', { d: 'M5 12l5 5l10 -10', key: 'svg-0' }]]),
  j9 = Zn('IconLanguage', [
    [
      'path',
      {
        d: 'M4 5h7m-2 -2v2c0 4.418 -2.239 8 -5 8m1 -4c0 2.144 2.952 3.908 6.7 4m.3 7l4 -9l4 9m-.9 -2h-6.2',
        key: 'svg-0'
      }
    ]
  ]),
  B9 = Zn('IconMessage', [
    [
      'path',
      {
        d: 'M4 21v-13a3 3 0 0 1 3 -3h10a3 3 0 0 1 3 3v6a3 3 0 0 1 -3 3h-9l-4 4m4 -12l8 0m-8 4l6 0',
        key: 'svg-0'
      }
    ]
  ]),
  U9 = Zn('IconNotebook', [
    [
      'path',
      {
        d: 'M6 4h11a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-11a1 1 0 0 1 -1 -1v-14a1 1 0 0 1 1 -1m3 0v18m4 -14l2 0m-2 4l2 0',
        key: 'svg-0'
      }
    ]
  ]),
  K9 = Zn('IconSettings', [
    [
      'path',
      {
        d: 'M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065zm1.675 7.683m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0',
        key: 'svg-0'
      }
    ]
  ]);
const W9 = () => {
    const [e] = Fa('isSettingsOpen', !1),
      [t, n] = _t('isPanelOpen', !1);
    return V(ei, {
      className: K(
        `flex h-[20px] w-[20px] cursor-default items-center justify-center p-[2px] transition-all duration-200 ${Vt({ filter: 'brightness(0.75)', '&:hover': { filter: 'brightness(1)' } })}`
      ),
      onClick: (r) => {
        n(!1);
      },
      tooltip: V(ti, { side: 'top', sideOffset: 5, children: 'Close panel' }),
      children: V(z9, {
        className: K(
          `h-[16px] w-[16px] opacity-0 transition-all hover:scale-110 group-hover:opacity-100 ${Vt({ stroke: 'white', opacity: e ? '1' : '0' })}`
        )
      })
    });
  },
  H9 = () => {
    const [e, t] = Fa('isSettingsOpen', !1),
      [n, r] = _t('isPinned', !1);
    return V(ei, {
      tooltip: V(ti, {
        side: 'top',
        sideOffset: 5,
        children: n ? 'Unpin panel' : 'Pin panel'
      }),
      className: K(
        `flex h-[20px] w-[20px] cursor-default items-center justify-center p-[2px] transition-all duration-200 ${Vt({ filter: 'brightness(0.75)', '&:hover': { filter: 'brightness(1)' } })}`
      ),
      onClick: (o) => {
        o.stopPropagation(), r(!n);
      },
      children: n
        ? J('svg', {
            className: K(
              `h-[16px] w-[16px] opacity-0 transition-all hover:scale-110 group-hover:opacity-100 ${Vt({ opacity: e ? '1' : '0' })}`
            ),
            width: '100%',
            height: '100%',
            viewBox: '0 0 24 24',
            strokeWidth: '2',
            stroke: 'white',
            fill: 'none',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            children: [
              J('g', {
                clipPath: 'url(#clip0_16_2)',
                children: [
                  V('path', {
                    d: 'M9 4V10L7 14V16H17V14L15 10V4',
                    fill: 'white'
                  }),
                  V('path', {
                    d: 'M9 4V10L7 14V16H17V14L15 10V4',
                    stroke: 'white',
                    strokeWidth: '2',
                    strokeLinecap: 'round',
                    strokeLinejoin: 'round'
                  }),
                  V('path', {
                    d: 'M12 16V21',
                    stroke: 'white',
                    strokeWidth: '2',
                    strokeLinecap: 'round',
                    strokeLinejoin: 'round'
                  }),
                  V('path', {
                    d: 'M8 4H16',
                    stroke: 'white',
                    strokeWidth: '2',
                    strokeLinecap: 'round',
                    strokeLinejoin: 'round'
                  })
                ]
              }),
              V('defs', {
                children: V('clipPath', {
                  id: 'clip0_16_2',
                  children: V('rect', {
                    width: '24',
                    height: '24',
                    fill: 'white'
                  })
                })
              })
            ]
          })
        : J('svg', {
            className: K(
              `h-[16px] w-[16px] opacity-0 transition-all hover:scale-110 group-hover:opacity-100 ${Vt({ opacity: e ? '1' : '0' })}`
            ),
            width: '100%',
            height: '100%',
            viewBox: '0 0 24 24',
            strokeWidth: '2',
            stroke: 'white',
            fill: 'none',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            children: [
              V('path', { stroke: 'none', d: 'M0 0h24v24H0z', fill: 'none' }),
              V('path', {
                d: 'M15 4.5l-4 4l-4 1.5l-1.5 1.5l7 7l1.5 -1.5l1.5 -4l4 -4'
              }),
              V('line', { x1: '9', y1: '15', x2: '4.5', y2: '19.5' }),
              V('line', { x1: '14.5', y1: '4', x2: '20', y2: '9.5' })
            ]
          })
    });
  };
function Lv(e) {
  const t = e + 'CollectionProvider',
    [n, r] = Br(t),
    [o, i] = n(t, { collectionRef: { current: null }, itemMap: new Map() }),
    s = (v) => {
      const { scope: w, children: x } = v,
        b = je.useRef(null),
        p = je.useRef(new Map()).current;
      return je.createElement(o, { scope: w, itemMap: p, collectionRef: b }, x);
    },
    a = e + 'CollectionSlot',
    l = je.forwardRef((v, w) => {
      const { scope: x, children: b } = v,
        p = i(a, x),
        m = Ge(w, p.collectionRef);
      return je.createElement(Zo, { ref: m }, b);
    }),
    u = e + 'CollectionItemSlot',
    c = 'data-radix-collection-item',
    d = je.forwardRef((v, w) => {
      const { scope: x, children: b, ...p } = v,
        m = je.useRef(null),
        f = Ge(w, m),
        y = i(u, x);
      return (
        je.useEffect(
          () => (
            y.itemMap.set(m, { ref: m, ...p }), () => void y.itemMap.delete(m)
          )
        ),
        je.createElement(Zo, { [c]: '', ref: f }, b)
      );
    });
  function h(v) {
    const w = i(e + 'CollectionConsumer', v);
    return je.useCallback(() => {
      const b = w.collectionRef.current;
      if (!b) return [];
      const p = Array.from(b.querySelectorAll(`[${c}]`));
      return Array.from(w.itemMap.values()).sort(
        (y, C) => p.indexOf(y.ref.current) - p.indexOf(C.ref.current)
      );
    }, [w.collectionRef, w.itemMap]);
  }
  return [{ Provider: s, Slot: l, ItemSlot: d }, h, r];
}
const G9 = g.createContext(void 0);
function Fv(e) {
  const t = g.useContext(G9);
  return e || t || 'ltr';
}
let Al = 0;
function Q9() {
  g.useEffect(() => {
    var e, t;
    const n = document.querySelectorAll('[data-radix-focus-guard]');
    return (
      document.body.insertAdjacentElement(
        'afterbegin',
        (e = n[0]) !== null && e !== void 0 ? e : u0()
      ),
      document.body.insertAdjacentElement(
        'beforeend',
        (t = n[1]) !== null && t !== void 0 ? t : u0()
      ),
      Al++,
      () => {
        Al === 1 &&
          document
            .querySelectorAll('[data-radix-focus-guard]')
            .forEach((r) => r.remove()),
          Al--;
      }
    );
  }, []);
}
function u0() {
  const e = document.createElement('span');
  return (
    e.setAttribute('data-radix-focus-guard', ''),
    (e.tabIndex = 0),
    (e.style.cssText =
      'outline: none; opacity: 0; position: fixed; pointer-events: none'),
    e
  );
}
const Dl = 'focusScope.autoFocusOnMount',
  Ll = 'focusScope.autoFocusOnUnmount',
  c0 = { bubbles: !1, cancelable: !0 },
  q9 = g.forwardRef((e, t) => {
    const {
        loop: n = !1,
        trapped: r = !1,
        onMountAutoFocus: o,
        onUnmountAutoFocus: i,
        ...s
      } = e,
      [a, l] = g.useState(null),
      u = Tt(o),
      c = Tt(i),
      d = g.useRef(null),
      h = Ge(t, (x) => l(x)),
      v = g.useRef({
        paused: !1,
        pause() {
          this.paused = !0;
        },
        resume() {
          this.paused = !1;
        }
      }).current;
    g.useEffect(() => {
      if (r) {
        let p = function (f) {
            if (v.paused || !a) return;
            const y = f.target;
            a.contains(y) ? (d.current = y) : On(d.current, { select: !0 });
          },
          m = function (f) {
            v.paused ||
              !a ||
              a.contains(f.relatedTarget) ||
              On(d.current, { select: !0 });
          };
        var x = p,
          b = m;
        return (
          document.addEventListener('focusin', p),
          document.addEventListener('focusout', m),
          () => {
            document.removeEventListener('focusin', p),
              document.removeEventListener('focusout', m);
          }
        );
      }
    }, [r, a, v.paused]),
      g.useEffect(() => {
        if (a) {
          d0.add(v);
          const x = document.activeElement;
          if (!a.contains(x)) {
            const p = new CustomEvent(Dl, c0);
            a.addEventListener(Dl, u),
              a.dispatchEvent(p),
              p.defaultPrevented ||
                (Y9(tC(Nv(a)), { select: !0 }),
                document.activeElement === x && On(a));
          }
          return () => {
            a.removeEventListener(Dl, u),
              setTimeout(() => {
                const p = new CustomEvent(Ll, c0);
                a.addEventListener(Ll, c),
                  a.dispatchEvent(p),
                  p.defaultPrevented || On(x ?? document.body, { select: !0 }),
                  a.removeEventListener(Ll, c),
                  d0.remove(v);
              }, 0);
          };
        }
      }, [a, u, c, v]);
    const w = g.useCallback(
      (x) => {
        if ((!n && !r) || v.paused) return;
        const b = x.key === 'Tab' && !x.altKey && !x.ctrlKey && !x.metaKey,
          p = document.activeElement;
        if (b && p) {
          const m = x.currentTarget,
            [f, y] = X9(m);
          f && y
            ? !x.shiftKey && p === y
              ? (x.preventDefault(), n && On(f, { select: !0 }))
              : x.shiftKey &&
                p === f &&
                (x.preventDefault(), n && On(y, { select: !0 }))
            : p === m && x.preventDefault();
        }
      },
      [n, r, v.paused]
    );
    return g.createElement(
      Qe.div,
      G({ tabIndex: -1 }, s, { ref: h, onKeyDown: w })
    );
  });
function Y9(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const r of e)
    if ((On(r, { select: t }), document.activeElement !== n)) return;
}
function X9(e) {
  const t = Nv(e),
    n = f0(t, e),
    r = f0(t.reverse(), e);
  return [n, r];
}
function Nv(e) {
  const t = [],
    n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
      acceptNode: (r) => {
        const o = r.tagName === 'INPUT' && r.type === 'hidden';
        return r.disabled || r.hidden || o
          ? NodeFilter.FILTER_SKIP
          : r.tabIndex >= 0
            ? NodeFilter.FILTER_ACCEPT
            : NodeFilter.FILTER_SKIP;
      }
    });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function f0(e, t) {
  for (const n of e) if (!Z9(n, { upTo: t })) return n;
}
function Z9(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === 'hidden') return !0;
  for (; e; ) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === 'none') return !0;
    e = e.parentElement;
  }
  return !1;
}
function J9(e) {
  return e instanceof HTMLInputElement && 'select' in e;
}
function On(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== n && J9(e) && t && e.select();
  }
}
const d0 = eC();
function eC() {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      t !== n && (n == null || n.pause()), (e = p0(e, t)), e.unshift(t);
    },
    remove(t) {
      var n;
      (e = p0(e, t)), (n = e[0]) === null || n === void 0 || n.resume();
    }
  };
}
function p0(e, t) {
  const n = [...e],
    r = n.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
function tC(e) {
  return e.filter((t) => t.tagName !== 'A');
}
const Fl = 'rovingFocusGroup.onEntryFocus',
  nC = { bubbles: !1, cancelable: !0 },
  dd = 'RovingFocusGroup',
  [yc, Iv, rC] = Lv(dd),
  [oC, Vv] = Br(dd, [rC]),
  [iC, sC] = oC(dd),
  aC = g.forwardRef((e, t) =>
    g.createElement(
      yc.Provider,
      { scope: e.__scopeRovingFocusGroup },
      g.createElement(
        yc.Slot,
        { scope: e.__scopeRovingFocusGroup },
        g.createElement(lC, G({}, e, { ref: t }))
      )
    )
  ),
  lC = g.forwardRef((e, t) => {
    const {
        __scopeRovingFocusGroup: n,
        orientation: r,
        loop: o = !1,
        dir: i,
        currentTabStopId: s,
        defaultCurrentTabStopId: a,
        onCurrentTabStopIdChange: l,
        onEntryFocus: u,
        ...c
      } = e,
      d = g.useRef(null),
      h = Ge(t, d),
      v = Fv(i),
      [w = null, x] = ld({ prop: s, defaultProp: a, onChange: l }),
      [b, p] = g.useState(!1),
      m = Tt(u),
      f = Iv(n),
      y = g.useRef(!1),
      [C, S] = g.useState(0);
    return (
      g.useEffect(() => {
        const E = d.current;
        if (E)
          return E.addEventListener(Fl, m), () => E.removeEventListener(Fl, m);
      }, [m]),
      g.createElement(
        iC,
        {
          scope: n,
          orientation: r,
          dir: v,
          loop: o,
          currentTabStopId: w,
          onItemFocus: g.useCallback((E) => x(E), [x]),
          onItemShiftTab: g.useCallback(() => p(!0), []),
          onFocusableItemAdd: g.useCallback(() => S((E) => E + 1), []),
          onFocusableItemRemove: g.useCallback(() => S((E) => E - 1), [])
        },
        g.createElement(
          Qe.div,
          G({ tabIndex: b || C === 0 ? -1 : 0, 'data-orientation': r }, c, {
            ref: h,
            style: { outline: 'none', ...e.style },
            onMouseDown: Y(e.onMouseDown, () => {
              y.current = !0;
            }),
            onFocus: Y(e.onFocus, (E) => {
              const k = !y.current;
              if (E.target === E.currentTarget && k && !b) {
                const A = new CustomEvent(Fl, nC);
                if ((E.currentTarget.dispatchEvent(A), !A.defaultPrevented)) {
                  const R = f().filter((T) => T.focusable),
                    j = R.find((T) => T.active),
                    W = R.find((T) => T.id === w),
                    $ = [j, W, ...R].filter(Boolean).map((T) => T.ref.current);
                  zv($);
                }
              }
              y.current = !1;
            }),
            onBlur: Y(e.onBlur, () => p(!1))
          })
        )
      )
    );
  }),
  uC = 'RovingFocusGroupItem',
  cC = g.forwardRef((e, t) => {
    const {
        __scopeRovingFocusGroup: n,
        focusable: r = !0,
        active: o = !1,
        ...i
      } = e,
      s = qs(),
      a = sC(uC, n),
      l = a.currentTabStopId === s,
      u = Iv(n),
      { onFocusableItemAdd: c, onFocusableItemRemove: d } = a;
    return (
      g.useEffect(() => {
        if (r) return c(), () => d();
      }, [r, c, d]),
      g.createElement(
        yc.ItemSlot,
        { scope: n, id: s, focusable: r, active: o },
        g.createElement(
          Qe.span,
          G({ tabIndex: l ? 0 : -1, 'data-orientation': a.orientation }, i, {
            ref: t,
            onMouseDown: Y(e.onMouseDown, (h) => {
              r ? a.onItemFocus(s) : h.preventDefault();
            }),
            onFocus: Y(e.onFocus, () => a.onItemFocus(s)),
            onKeyDown: Y(e.onKeyDown, (h) => {
              if (h.key === 'Tab' && h.shiftKey) {
                a.onItemShiftTab();
                return;
              }
              if (h.target !== h.currentTarget) return;
              const v = pC(h, a.orientation, a.dir);
              if (v !== void 0) {
                h.preventDefault();
                let x = u()
                  .filter((b) => b.focusable)
                  .map((b) => b.ref.current);
                if (v === 'last') x.reverse();
                else if (v === 'prev' || v === 'next') {
                  v === 'prev' && x.reverse();
                  const b = x.indexOf(h.currentTarget);
                  x = a.loop ? hC(x, b + 1) : x.slice(b + 1);
                }
                setTimeout(() => zv(x));
              }
            })
          })
        )
      )
    );
  }),
  fC = {
    ArrowLeft: 'prev',
    ArrowUp: 'prev',
    ArrowRight: 'next',
    ArrowDown: 'next',
    PageUp: 'first',
    Home: 'first',
    PageDown: 'last',
    End: 'last'
  };
function dC(e, t) {
  return t !== 'rtl'
    ? e
    : e === 'ArrowLeft'
      ? 'ArrowRight'
      : e === 'ArrowRight'
        ? 'ArrowLeft'
        : e;
}
function pC(e, t, n) {
  const r = dC(e.key, n);
  if (
    !(t === 'vertical' && ['ArrowLeft', 'ArrowRight'].includes(r)) &&
    !(t === 'horizontal' && ['ArrowUp', 'ArrowDown'].includes(r))
  )
    return fC[r];
}
function zv(e) {
  const t = document.activeElement;
  for (const n of e)
    if (n === t || (n.focus(), document.activeElement !== t)) return;
}
function hC(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
const mC = aC,
  gC = cC;
var vC = function (e) {
    if (typeof document > 'u') return null;
    var t = Array.isArray(e) ? e[0] : e;
    return t.ownerDocument.body;
  },
  rr = new WeakMap(),
  Bi = new WeakMap(),
  Ui = {},
  Nl = 0,
  jv = function (e) {
    return e && (e.host || jv(e.parentNode));
  },
  yC = function (e, t) {
    return t
      .map(function (n) {
        if (e.contains(n)) return n;
        var r = jv(n);
        return r && e.contains(r)
          ? r
          : (console.error(
              'aria-hidden',
              n,
              'in not contained inside',
              e,
              '. Doing nothing'
            ),
            null);
      })
      .filter(function (n) {
        return Boolean(n);
      });
  },
  wC = function (e, t, n, r) {
    var o = yC(t, Array.isArray(e) ? e : [e]);
    Ui[n] || (Ui[n] = new WeakMap());
    var i = Ui[n],
      s = [],
      a = new Set(),
      l = new Set(o),
      u = function (d) {
        !d || a.has(d) || (a.add(d), u(d.parentNode));
      };
    o.forEach(u);
    var c = function (d) {
      !d ||
        l.has(d) ||
        Array.prototype.forEach.call(d.children, function (h) {
          if (a.has(h)) c(h);
          else {
            var v = h.getAttribute(r),
              w = v !== null && v !== 'false',
              x = (rr.get(h) || 0) + 1,
              b = (i.get(h) || 0) + 1;
            rr.set(h, x),
              i.set(h, b),
              s.push(h),
              x === 1 && w && Bi.set(h, !0),
              b === 1 && h.setAttribute(n, 'true'),
              w || h.setAttribute(r, 'true');
          }
        });
    };
    return (
      c(t),
      a.clear(),
      Nl++,
      function () {
        s.forEach(function (d) {
          var h = rr.get(d) - 1,
            v = i.get(d) - 1;
          rr.set(d, h),
            i.set(d, v),
            h || (Bi.has(d) || d.removeAttribute(r), Bi.delete(d)),
            v || d.removeAttribute(n);
        }),
          Nl--,
          Nl ||
            ((rr = new WeakMap()),
            (rr = new WeakMap()),
            (Bi = new WeakMap()),
            (Ui = {}));
      }
    );
  },
  xC = function (e, t, n) {
    n === void 0 && (n = 'data-aria-hidden');
    var r = Array.from(Array.isArray(e) ? e : [e]),
      o = t || vC(e);
    return o
      ? (r.push.apply(r, Array.from(o.querySelectorAll('[aria-live]'))),
        wC(r, o, n, 'aria-hidden'))
      : function () {
          return null;
        };
  },
  as = 'right-scroll-bar-position',
  ls = 'width-before-scroll-bar',
  CC = 'with-scroll-bars-hidden',
  bC = '--removed-body-scroll-bar-size';
function SC(e, t) {
  return typeof e == 'function' ? e(t) : e && (e.current = t), e;
}
function EC(e, t) {
  var n = g.useState(function () {
    return {
      value: e,
      callback: t,
      facade: {
        get current() {
          return n.value;
        },
        set current(r) {
          var o = n.value;
          o !== r && ((n.value = r), n.callback(r, o));
        }
      }
    };
  })[0];
  return (n.callback = t), n.facade;
}
function kC(e, t) {
  return EC(t || null, function (n) {
    return e.forEach(function (r) {
      return SC(r, n);
    });
  });
}
function PC(e) {
  return e;
}
function $C(e, t) {
  t === void 0 && (t = PC);
  var n = [],
    r = !1,
    o = {
      read: function () {
        if (r)
          throw new Error(
            'Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.'
          );
        return n.length ? n[n.length - 1] : e;
      },
      useMedium: function (i) {
        var s = t(i, r);
        return (
          n.push(s),
          function () {
            n = n.filter(function (a) {
              return a !== s;
            });
          }
        );
      },
      assignSyncMedium: function (i) {
        for (r = !0; n.length; ) {
          var s = n;
          (n = []), s.forEach(i);
        }
        n = {
          push: function (a) {
            return i(a);
          },
          filter: function () {
            return n;
          }
        };
      },
      assignMedium: function (i) {
        r = !0;
        var s = [];
        if (n.length) {
          var a = n;
          (n = []), a.forEach(i), (s = n);
        }
        var l = function () {
            var c = s;
            (s = []), c.forEach(i);
          },
          u = function () {
            return Promise.resolve().then(l);
          };
        u(),
          (n = {
            push: function (c) {
              s.push(c), u();
            },
            filter: function (c) {
              return (s = s.filter(c)), n;
            }
          });
      }
    };
  return o;
}
function _C(e) {
  e === void 0 && (e = {});
  var t = $C(null);
  return (t.options = Fe.__assign({ async: !0, ssr: !1 }, e)), t;
}
var Bv = function (e) {
  var t = e.sideCar,
    n = Fe.__rest(e, ['sideCar']);
  if (!t)
    throw new Error(
      'Sidecar: please provide `sideCar` property to import the right car'
    );
  var r = t.read();
  if (!r) throw new Error('Sidecar medium not found');
  return g.createElement(r, Fe.__assign({}, n));
};
Bv.isSideCarExport = !0;
function TC(e, t) {
  return e.useMedium(t), Bv;
}
var Uv = _C(),
  Il = function () {},
  Na = g.forwardRef(function (e, t) {
    var n = g.useRef(null),
      r = g.useState({
        onScrollCapture: Il,
        onWheelCapture: Il,
        onTouchMoveCapture: Il
      }),
      o = r[0],
      i = r[1],
      s = e.forwardProps,
      a = e.children,
      l = e.className,
      u = e.removeScrollBar,
      c = e.enabled,
      d = e.shards,
      h = e.sideCar,
      v = e.noIsolation,
      w = e.inert,
      x = e.allowPinchZoom,
      b = e.as,
      p = b === void 0 ? 'div' : b,
      m = Fe.__rest(e, [
        'forwardProps',
        'children',
        'className',
        'removeScrollBar',
        'enabled',
        'shards',
        'sideCar',
        'noIsolation',
        'inert',
        'allowPinchZoom',
        'as'
      ]),
      f = h,
      y = kC([n, t]),
      C = Fe.__assign(Fe.__assign({}, m), o);
    return g.createElement(
      g.Fragment,
      null,
      c &&
        g.createElement(f, {
          sideCar: Uv,
          removeScrollBar: u,
          shards: d,
          noIsolation: v,
          inert: w,
          setCallbacks: i,
          allowPinchZoom: !!x,
          lockRef: n
        }),
      s
        ? g.cloneElement(
            g.Children.only(a),
            Fe.__assign(Fe.__assign({}, C), { ref: y })
          )
        : g.createElement(p, Fe.__assign({}, C, { className: l, ref: y }), a)
    );
  });
Na.defaultProps = { enabled: !0, removeScrollBar: !0, inert: !1 };
Na.classNames = { fullWidth: ls, zeroRight: as };
var RC = function () {
  if (typeof __webpack_nonce__ < 'u') return __webpack_nonce__;
};
function MC() {
  if (!document) return null;
  var e = document.createElement('style');
  e.type = 'text/css';
  var t = RC();
  return t && e.setAttribute('nonce', t), e;
}
function OC(e, t) {
  e.styleSheet
    ? (e.styleSheet.cssText = t)
    : e.appendChild(document.createTextNode(t));
}
function AC(e) {
  var t = document.head || document.getElementsByTagName('head')[0];
  t.appendChild(e);
}
var DC = function () {
    var e = 0,
      t = null;
    return {
      add: function (n) {
        e == 0 && (t = MC()) && (OC(t, n), AC(t)), e++;
      },
      remove: function () {
        e--,
          !e && t && (t.parentNode && t.parentNode.removeChild(t), (t = null));
      }
    };
  },
  LC = function () {
    var e = DC();
    return function (t, n) {
      g.useEffect(
        function () {
          return (
            e.add(t),
            function () {
              e.remove();
            }
          );
        },
        [t && n]
      );
    };
  },
  Kv = function () {
    var e = LC(),
      t = function (n) {
        var r = n.styles,
          o = n.dynamic;
        return e(r, o), null;
      };
    return t;
  },
  FC = { left: 0, top: 0, right: 0, gap: 0 },
  Vl = function (e) {
    return parseInt(e || '', 10) || 0;
  },
  NC = function (e) {
    var t = window.getComputedStyle(document.body),
      n = t[e === 'padding' ? 'paddingLeft' : 'marginLeft'],
      r = t[e === 'padding' ? 'paddingTop' : 'marginTop'],
      o = t[e === 'padding' ? 'paddingRight' : 'marginRight'];
    return [Vl(n), Vl(r), Vl(o)];
  },
  IC = function (e) {
    if ((e === void 0 && (e = 'margin'), typeof window > 'u')) return FC;
    var t = NC(e),
      n = document.documentElement.clientWidth,
      r = window.innerWidth;
    return {
      left: t[0],
      top: t[1],
      right: t[2],
      gap: Math.max(0, r - n + t[2] - t[0])
    };
  },
  VC = Kv(),
  zC = function (e, t, n, r) {
    var o = e.left,
      i = e.top,
      s = e.right,
      a = e.gap;
    return (
      n === void 0 && (n = 'margin'),
      `
  .`
        .concat(
          CC,
          ` {
   overflow: hidden `
        )
        .concat(
          r,
          `;
   padding-right: `
        )
        .concat(a, 'px ')
        .concat(
          r,
          `;
  }
  body {
    overflow: hidden `
        )
        .concat(
          r,
          `;
    overscroll-behavior: contain;
    `
        )
        .concat(
          [
            t && 'position: relative '.concat(r, ';'),
            n === 'margin' &&
              `
    padding-left: `
                .concat(
                  o,
                  `px;
    padding-top: `
                )
                .concat(
                  i,
                  `px;
    padding-right: `
                )
                .concat(
                  s,
                  `px;
    margin-left:0;
    margin-top:0;
    margin-right: `
                )
                .concat(a, 'px ')
                .concat(
                  r,
                  `;
    `
                ),
            n === 'padding' && 'padding-right: '.concat(a, 'px ').concat(r, ';')
          ]
            .filter(Boolean)
            .join(''),
          `
  }
  
  .`
        )
        .concat(
          as,
          ` {
    right: `
        )
        .concat(a, 'px ')
        .concat(
          r,
          `;
  }
  
  .`
        )
        .concat(
          ls,
          ` {
    margin-right: `
        )
        .concat(a, 'px ')
        .concat(
          r,
          `;
  }
  
  .`
        )
        .concat(as, ' .')
        .concat(
          as,
          ` {
    right: 0 `
        )
        .concat(
          r,
          `;
  }
  
  .`
        )
        .concat(ls, ' .')
        .concat(
          ls,
          ` {
    margin-right: 0 `
        )
        .concat(
          r,
          `;
  }
  
  body {
    `
        )
        .concat(bC, ': ')
        .concat(
          a,
          `px;
  }
`
        )
    );
  },
  jC = function (e) {
    var t = e.noRelative,
      n = e.noImportant,
      r = e.gapMode,
      o = r === void 0 ? 'margin' : r,
      i = g.useMemo(
        function () {
          return IC(o);
        },
        [o]
      );
    return g.createElement(VC, { styles: zC(i, !t, o, n ? '' : '!important') });
  },
  wc = !1;
if (typeof window < 'u')
  try {
    var Ki = Object.defineProperty({}, 'passive', {
      get: function () {
        return (wc = !0), !0;
      }
    });
    window.addEventListener('test', Ki, Ki),
      window.removeEventListener('test', Ki, Ki);
  } catch {
    wc = !1;
  }
var or = wc ? { passive: !1 } : !1,
  BC = function (e) {
    return e.tagName === 'TEXTAREA';
  },
  Wv = function (e, t) {
    var n = window.getComputedStyle(e);
    return (
      n[t] !== 'hidden' &&
      !(n.overflowY === n.overflowX && !BC(e) && n[t] === 'visible')
    );
  },
  UC = function (e) {
    return Wv(e, 'overflowY');
  },
  KC = function (e) {
    return Wv(e, 'overflowX');
  },
  h0 = function (e, t) {
    var n = t;
    do {
      typeof ShadowRoot < 'u' && n instanceof ShadowRoot && (n = n.host);
      var r = Hv(e, n);
      if (r) {
        var o = Gv(e, n),
          i = o[1],
          s = o[2];
        if (i > s) return !0;
      }
      n = n.parentNode;
    } while (n && n !== document.body);
    return !1;
  },
  WC = function (e) {
    var t = e.scrollTop,
      n = e.scrollHeight,
      r = e.clientHeight;
    return [t, n, r];
  },
  HC = function (e) {
    var t = e.scrollLeft,
      n = e.scrollWidth,
      r = e.clientWidth;
    return [t, n, r];
  },
  Hv = function (e, t) {
    return e === 'v' ? UC(t) : KC(t);
  },
  Gv = function (e, t) {
    return e === 'v' ? WC(t) : HC(t);
  },
  GC = function (e, t) {
    return e === 'h' && t === 'rtl' ? -1 : 1;
  },
  QC = function (e, t, n, r, o) {
    var i = GC(e, window.getComputedStyle(t).direction),
      s = i * r,
      a = n.target,
      l = t.contains(a),
      u = !1,
      c = s > 0,
      d = 0,
      h = 0;
    do {
      var v = Gv(e, a),
        w = v[0],
        x = v[1],
        b = v[2],
        p = x - b - i * w;
      (w || p) && Hv(e, a) && ((d += p), (h += w)), (a = a.parentNode);
    } while ((!l && a !== document.body) || (l && (t.contains(a) || t === a)));
    return (
      ((c && ((o && d === 0) || (!o && s > d))) ||
        (!c && ((o && h === 0) || (!o && -s > h)))) &&
        (u = !0),
      u
    );
  },
  Wi = function (e) {
    return 'changedTouches' in e
      ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY]
      : [0, 0];
  },
  m0 = function (e) {
    return [e.deltaX, e.deltaY];
  },
  g0 = function (e) {
    return e && 'current' in e ? e.current : e;
  },
  qC = function (e, t) {
    return e[0] === t[0] && e[1] === t[1];
  },
  YC = function (e) {
    return `
  .block-interactivity-`
      .concat(
        e,
        ` {pointer-events: none;}
  .allow-interactivity-`
      )
      .concat(
        e,
        ` {pointer-events: all;}
`
      );
  },
  XC = 0,
  ir = [];
function ZC(e) {
  var t = g.useRef([]),
    n = g.useRef([0, 0]),
    r = g.useRef(),
    o = g.useState(XC++)[0],
    i = g.useState(function () {
      return Kv();
    })[0],
    s = g.useRef(e);
  g.useEffect(
    function () {
      s.current = e;
    },
    [e]
  ),
    g.useEffect(
      function () {
        if (e.inert) {
          document.body.classList.add('block-interactivity-'.concat(o));
          var x = Fe.__spreadArray(
            [e.lockRef.current],
            (e.shards || []).map(g0),
            !0
          ).filter(Boolean);
          return (
            x.forEach(function (b) {
              return b.classList.add('allow-interactivity-'.concat(o));
            }),
            function () {
              document.body.classList.remove('block-interactivity-'.concat(o)),
                x.forEach(function (b) {
                  return b.classList.remove('allow-interactivity-'.concat(o));
                });
            }
          );
        }
      },
      [e.inert, e.lockRef.current, e.shards]
    );
  var a = g.useCallback(function (x, b) {
      if ('touches' in x && x.touches.length === 2)
        return !s.current.allowPinchZoom;
      var p = Wi(x),
        m = n.current,
        f = 'deltaX' in x ? x.deltaX : m[0] - p[0],
        y = 'deltaY' in x ? x.deltaY : m[1] - p[1],
        C,
        S = x.target,
        E = Math.abs(f) > Math.abs(y) ? 'h' : 'v';
      if ('touches' in x && E === 'h' && S.type === 'range') return !1;
      var k = h0(E, S);
      if (!k) return !0;
      if ((k ? (C = E) : ((C = E === 'v' ? 'h' : 'v'), (k = h0(E, S))), !k))
        return !1;
      if (
        (!r.current && 'changedTouches' in x && (f || y) && (r.current = C), !C)
      )
        return !0;
      var A = r.current || C;
      return QC(A, b, x, A === 'h' ? f : y, !0);
    }, []),
    l = g.useCallback(function (x) {
      var b = x;
      if (!(!ir.length || ir[ir.length - 1] !== i)) {
        var p = 'deltaY' in b ? m0(b) : Wi(b),
          m = t.current.filter(function (C) {
            return C.name === b.type && C.target === b.target && qC(C.delta, p);
          })[0];
        if (m && m.should) {
          b.cancelable && b.preventDefault();
          return;
        }
        if (!m) {
          var f = (s.current.shards || [])
              .map(g0)
              .filter(Boolean)
              .filter(function (C) {
                return C.contains(b.target);
              }),
            y = f.length > 0 ? a(b, f[0]) : !s.current.noIsolation;
          y && b.cancelable && b.preventDefault();
        }
      }
    }, []),
    u = g.useCallback(function (x, b, p, m) {
      var f = { name: x, delta: b, target: p, should: m };
      t.current.push(f),
        setTimeout(function () {
          t.current = t.current.filter(function (y) {
            return y !== f;
          });
        }, 1);
    }, []),
    c = g.useCallback(function (x) {
      (n.current = Wi(x)), (r.current = void 0);
    }, []),
    d = g.useCallback(function (x) {
      u(x.type, m0(x), x.target, a(x, e.lockRef.current));
    }, []),
    h = g.useCallback(function (x) {
      u(x.type, Wi(x), x.target, a(x, e.lockRef.current));
    }, []);
  g.useEffect(function () {
    return (
      ir.push(i),
      e.setCallbacks({
        onScrollCapture: d,
        onWheelCapture: d,
        onTouchMoveCapture: h
      }),
      document.addEventListener('wheel', l, or),
      document.addEventListener('touchmove', l, or),
      document.addEventListener('touchstart', c, or),
      function () {
        (ir = ir.filter(function (x) {
          return x !== i;
        })),
          document.removeEventListener('wheel', l, or),
          document.removeEventListener('touchmove', l, or),
          document.removeEventListener('touchstart', c, or);
      }
    );
  }, []);
  var v = e.removeScrollBar,
    w = e.inert;
  return g.createElement(
    g.Fragment,
    null,
    w ? g.createElement(i, { styles: YC(o) }) : null,
    v ? g.createElement(jC, { gapMode: 'margin' }) : null
  );
}
const JC = TC(Uv, ZC);
var Qv = g.forwardRef(function (e, t) {
  return g.createElement(Na, Fe.__assign({}, e, { ref: t, sideCar: JC }));
});
Qv.classNames = Na.classNames;
const eb = Qv,
  tb = ['Enter', ' '],
  nb = ['ArrowDown', 'PageUp', 'Home'],
  qv = ['ArrowUp', 'PageDown', 'End'],
  rb = [...nb, ...qv],
  Ia = 'Menu',
  [xc, ob, ib] = Lv(Ia),
  [Jn, Yv] = Br(Ia, [ib, Aa, Vv]),
  pd = Aa(),
  Xv = Vv(),
  [sb, hi] = Jn(Ia),
  [ab, hd] = Jn(Ia),
  lb = (e) => {
    const {
        __scopeMenu: t,
        open: n = !1,
        children: r,
        dir: o,
        onOpenChange: i,
        modal: s = !0
      } = e,
      a = pd(t),
      [l, u] = g.useState(null),
      c = g.useRef(!1),
      d = Tt(i),
      h = Fv(o);
    return (
      g.useEffect(() => {
        const v = () => {
            (c.current = !0),
              document.addEventListener('pointerdown', w, {
                capture: !0,
                once: !0
              }),
              document.addEventListener('pointermove', w, {
                capture: !0,
                once: !0
              });
          },
          w = () => (c.current = !1);
        return (
          document.addEventListener('keydown', v, { capture: !0 }),
          () => {
            document.removeEventListener('keydown', v, { capture: !0 }),
              document.removeEventListener('pointerdown', w, { capture: !0 }),
              document.removeEventListener('pointermove', w, { capture: !0 });
          }
        );
      }, []),
      g.createElement(
        Sv,
        a,
        g.createElement(
          sb,
          {
            scope: t,
            open: n,
            onOpenChange: d,
            content: l,
            onContentChange: u
          },
          g.createElement(
            ab,
            {
              scope: t,
              onClose: g.useCallback(() => d(!1), [d]),
              isUsingKeyboardRef: c,
              dir: h,
              modal: s
            },
            r
          )
        )
      )
    );
  },
  ub = g.forwardRef((e, t) => {
    const { __scopeMenu: n, ...r } = e,
      o = pd(n);
    return g.createElement(Ev, G({}, o, r, { ref: t }));
  }),
  Zv = 'MenuPortal',
  [cb, fb] = Jn(Zv, { forceMount: void 0 }),
  db = (e) => {
    const { __scopeMenu: t, forceMount: n, children: r, container: o } = e,
      i = hi(Zv, t);
    return g.createElement(
      cb,
      { scope: t, forceMount: n },
      g.createElement(
        di,
        { present: n || i.open },
        g.createElement(Pv, { asChild: !0, container: o }, r)
      )
    );
  },
  vn = 'MenuContent',
  [pb, Jv] = Jn(vn),
  hb = g.forwardRef((e, t) => {
    const n = fb(vn, e.__scopeMenu),
      { forceMount: r = n.forceMount, ...o } = e,
      i = hi(vn, e.__scopeMenu),
      s = hd(vn, e.__scopeMenu);
    return g.createElement(
      xc.Provider,
      { scope: e.__scopeMenu },
      g.createElement(
        di,
        { present: r || i.open },
        g.createElement(
          xc.Slot,
          { scope: e.__scopeMenu },
          s.modal
            ? g.createElement(mb, G({}, o, { ref: t }))
            : g.createElement(gb, G({}, o, { ref: t }))
        )
      )
    );
  }),
  mb = g.forwardRef((e, t) => {
    const n = hi(vn, e.__scopeMenu),
      r = g.useRef(null),
      o = Ge(t, r);
    return (
      g.useEffect(() => {
        const i = r.current;
        if (i) return xC(i);
      }, []),
      g.createElement(
        ey,
        G({}, e, {
          ref: o,
          trapFocus: n.open,
          disableOutsidePointerEvents: n.open,
          disableOutsideScroll: !0,
          onFocusOutside: Y(e.onFocusOutside, (i) => i.preventDefault(), {
            checkForDefaultPrevented: !1
          }),
          onDismiss: () => n.onOpenChange(!1)
        })
      )
    );
  }),
  gb = g.forwardRef((e, t) => {
    const n = hi(vn, e.__scopeMenu);
    return g.createElement(
      ey,
      G({}, e, {
        ref: t,
        trapFocus: !1,
        disableOutsidePointerEvents: !1,
        disableOutsideScroll: !1,
        onDismiss: () => n.onOpenChange(!1)
      })
    );
  }),
  ey = g.forwardRef((e, t) => {
    const {
        __scopeMenu: n,
        loop: r = !1,
        trapFocus: o,
        onOpenAutoFocus: i,
        onCloseAutoFocus: s,
        disableOutsidePointerEvents: a,
        onEscapeKeyDown: l,
        onPointerDownOutside: u,
        onFocusOutside: c,
        onInteractOutside: d,
        onDismiss: h,
        disableOutsideScroll: v,
        ...w
      } = e,
      x = hi(vn, n),
      b = hd(vn, n),
      p = pd(n),
      m = Xv(n),
      f = ob(n),
      [y, C] = g.useState(null),
      S = g.useRef(null),
      E = Ge(t, S, x.onContentChange),
      k = g.useRef(0),
      A = g.useRef(''),
      R = g.useRef(0),
      j = g.useRef(null),
      W = g.useRef('right'),
      _ = g.useRef(0),
      $ = v ? eb : g.Fragment,
      T = v ? { as: Zo, allowPinchZoom: !0 } : void 0,
      M = (P) => {
        var O, F;
        const U = A.current + P,
          z = f().filter(($e) => !$e.disabled),
          Z = document.activeElement,
          de =
            (O = z.find(($e) => $e.ref.current === Z)) === null || O === void 0
              ? void 0
              : O.textValue,
          te = z.map(($e) => $e.textValue),
          ne = Mb(te, U, de),
          Oe =
            (F = z.find(($e) => $e.textValue === ne)) === null || F === void 0
              ? void 0
              : F.ref.current;
        (function $e(Wr) {
          (A.current = Wr),
            window.clearTimeout(k.current),
            Wr !== '' && (k.current = window.setTimeout(() => $e(''), 1e3));
        })(U),
          Oe && setTimeout(() => Oe.focus());
      };
    g.useEffect(() => () => window.clearTimeout(k.current), []), Q9();
    const D = g.useCallback((P) => {
      var O, F;
      return (
        W.current ===
          ((O = j.current) === null || O === void 0 ? void 0 : O.side) &&
        Ab(P, (F = j.current) === null || F === void 0 ? void 0 : F.area)
      );
    }, []);
    return g.createElement(
      pb,
      {
        scope: n,
        searchRef: A,
        onItemEnter: g.useCallback(
          (P) => {
            D(P) && P.preventDefault();
          },
          [D]
        ),
        onItemLeave: g.useCallback(
          (P) => {
            var O;
            D(P) ||
              ((O = S.current) === null || O === void 0 || O.focus(), C(null));
          },
          [D]
        ),
        onTriggerLeave: g.useCallback(
          (P) => {
            D(P) && P.preventDefault();
          },
          [D]
        ),
        pointerGraceTimerRef: R,
        onPointerGraceIntentChange: g.useCallback((P) => {
          j.current = P;
        }, [])
      },
      g.createElement(
        $,
        T,
        g.createElement(
          q9,
          {
            asChild: !0,
            trapped: o,
            onMountAutoFocus: Y(i, (P) => {
              var O;
              P.preventDefault(),
                (O = S.current) === null || O === void 0 || O.focus();
            }),
            onUnmountAutoFocus: s
          },
          g.createElement(
            uv,
            {
              asChild: !0,
              disableOutsidePointerEvents: a,
              onEscapeKeyDown: l,
              onPointerDownOutside: u,
              onFocusOutside: c,
              onInteractOutside: d,
              onDismiss: h
            },
            g.createElement(
              mC,
              G({ asChild: !0 }, m, {
                dir: b.dir,
                orientation: 'vertical',
                loop: r,
                currentTabStopId: y,
                onCurrentTabStopIdChange: C,
                onEntryFocus: (P) => {
                  b.isUsingKeyboardRef.current || P.preventDefault();
                }
              }),
              g.createElement(
                kv,
                G(
                  {
                    role: 'menu',
                    'aria-orientation': 'vertical',
                    'data-state': _b(x.open),
                    'data-radix-menu-content': '',
                    dir: b.dir
                  },
                  p,
                  w,
                  {
                    ref: E,
                    style: { outline: 'none', ...w.style },
                    onKeyDown: Y(w.onKeyDown, (P) => {
                      const F =
                          P.target.closest('[data-radix-menu-content]') ===
                          P.currentTarget,
                        U = P.ctrlKey || P.altKey || P.metaKey,
                        z = P.key.length === 1;
                      F &&
                        (P.key === 'Tab' && P.preventDefault(),
                        !U && z && M(P.key));
                      const Z = S.current;
                      if (P.target !== Z || !rb.includes(P.key)) return;
                      P.preventDefault();
                      const te = f()
                        .filter((ne) => !ne.disabled)
                        .map((ne) => ne.ref.current);
                      qv.includes(P.key) && te.reverse(), Tb(te);
                    }),
                    onBlur: Y(e.onBlur, (P) => {
                      P.currentTarget.contains(P.target) ||
                        (window.clearTimeout(k.current), (A.current = ''));
                    }),
                    onPointerMove: Y(
                      e.onPointerMove,
                      Sc((P) => {
                        const O = P.target,
                          F = _.current !== P.clientX;
                        if (P.currentTarget.contains(O) && F) {
                          const U = P.clientX > _.current ? 'right' : 'left';
                          (W.current = U), (_.current = P.clientX);
                        }
                      })
                    )
                  }
                )
              )
            )
          )
        )
      )
    );
  }),
  ty = g.forwardRef((e, t) => {
    const { __scopeMenu: n, ...r } = e;
    return g.createElement(Qe.div, G({ role: 'group' }, r, { ref: t }));
  }),
  vb = g.forwardRef((e, t) => {
    const { __scopeMenu: n, ...r } = e;
    return g.createElement(Qe.div, G({}, r, { ref: t }));
  }),
  Cc = 'MenuItem',
  v0 = 'menu.itemSelect',
  md = g.forwardRef((e, t) => {
    const { disabled: n = !1, onSelect: r, ...o } = e,
      i = g.useRef(null),
      s = hd(Cc, e.__scopeMenu),
      a = Jv(Cc, e.__scopeMenu),
      l = Ge(t, i),
      u = g.useRef(!1),
      c = () => {
        const d = i.current;
        if (!n && d) {
          const h = new CustomEvent(v0, { bubbles: !0, cancelable: !0 });
          d.addEventListener(v0, (v) => (r == null ? void 0 : r(v)), {
            once: !0
          }),
            lv(d, h),
            h.defaultPrevented ? (u.current = !1) : s.onClose();
        }
      };
    return g.createElement(
      yb,
      G({}, o, {
        ref: l,
        disabled: n,
        onClick: Y(e.onClick, c),
        onPointerDown: (d) => {
          var h;
          (h = e.onPointerDown) === null || h === void 0 || h.call(e, d),
            (u.current = !0);
        },
        onPointerUp: Y(e.onPointerUp, (d) => {
          var h;
          u.current ||
            (h = d.currentTarget) === null ||
            h === void 0 ||
            h.click();
        }),
        onKeyDown: Y(e.onKeyDown, (d) => {
          const h = a.searchRef.current !== '';
          n ||
            (h && d.key === ' ') ||
            (tb.includes(d.key) &&
              (d.currentTarget.click(), d.preventDefault()));
        })
      })
    );
  }),
  yb = g.forwardRef((e, t) => {
    const { __scopeMenu: n, disabled: r = !1, textValue: o, ...i } = e,
      s = Jv(Cc, n),
      a = Xv(n),
      l = g.useRef(null),
      u = Ge(t, l),
      [c, d] = g.useState(!1),
      [h, v] = g.useState('');
    return (
      g.useEffect(() => {
        const w = l.current;
        if (w) {
          var x;
          v(((x = w.textContent) !== null && x !== void 0 ? x : '').trim());
        }
      }, [i.children]),
      g.createElement(
        xc.ItemSlot,
        { scope: n, disabled: r, textValue: o ?? h },
        g.createElement(
          gC,
          G({ asChild: !0 }, a, { focusable: !r }),
          g.createElement(
            Qe.div,
            G(
              {
                role: 'menuitem',
                'data-highlighted': c ? '' : void 0,
                'aria-disabled': r || void 0,
                'data-disabled': r ? '' : void 0
              },
              i,
              {
                ref: u,
                onPointerMove: Y(
                  e.onPointerMove,
                  Sc((w) => {
                    r
                      ? s.onItemLeave(w)
                      : (s.onItemEnter(w),
                        w.defaultPrevented || w.currentTarget.focus());
                  })
                ),
                onPointerLeave: Y(
                  e.onPointerLeave,
                  Sc((w) => s.onItemLeave(w))
                ),
                onFocus: Y(e.onFocus, () => d(!0)),
                onBlur: Y(e.onBlur, () => d(!1))
              }
            )
          )
        )
      )
    );
  }),
  wb = g.forwardRef((e, t) => {
    const { checked: n = !1, onCheckedChange: r, ...o } = e;
    return g.createElement(
      ny,
      { scope: e.__scopeMenu, checked: n },
      g.createElement(
        md,
        G(
          { role: 'menuitemcheckbox', 'aria-checked': bc(n) ? 'mixed' : n },
          o,
          {
            ref: t,
            'data-state': ry(n),
            onSelect: Y(
              o.onSelect,
              () => (r == null ? void 0 : r(bc(n) ? !0 : !n)),
              { checkForDefaultPrevented: !1 }
            )
          }
        )
      )
    );
  }),
  xb = 'MenuRadioGroup',
  [Cb, bb] = Jn(xb, { value: void 0, onValueChange: () => {} }),
  Sb = g.forwardRef((e, t) => {
    const { value: n, onValueChange: r, ...o } = e,
      i = Tt(r);
    return g.createElement(
      Cb,
      { scope: e.__scopeMenu, value: n, onValueChange: i },
      g.createElement(ty, G({}, o, { ref: t }))
    );
  }),
  Eb = 'MenuRadioItem',
  kb = g.forwardRef((e, t) => {
    const { value: n, ...r } = e,
      o = bb(Eb, e.__scopeMenu),
      i = n === o.value;
    return g.createElement(
      ny,
      { scope: e.__scopeMenu, checked: i },
      g.createElement(
        md,
        G({ role: 'menuitemradio', 'aria-checked': i }, r, {
          ref: t,
          'data-state': ry(i),
          onSelect: Y(
            r.onSelect,
            () => {
              var s;
              return (s = o.onValueChange) === null || s === void 0
                ? void 0
                : s.call(o, n);
            },
            { checkForDefaultPrevented: !1 }
          )
        })
      )
    );
  }),
  Pb = 'MenuItemIndicator',
  [ny, $S] = Jn(Pb, { checked: !1 }),
  $b = 'MenuSub';
Jn($b);
function _b(e) {
  return e ? 'open' : 'closed';
}
function bc(e) {
  return e === 'indeterminate';
}
function ry(e) {
  return bc(e) ? 'indeterminate' : e ? 'checked' : 'unchecked';
}
function Tb(e) {
  const t = document.activeElement;
  for (const n of e)
    if (n === t || (n.focus(), document.activeElement !== t)) return;
}
function Rb(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
function Mb(e, t, n) {
  const o = t.length > 1 && Array.from(t).every((u) => u === t[0]) ? t[0] : t,
    i = n ? e.indexOf(n) : -1;
  let s = Rb(e, Math.max(i, 0));
  o.length === 1 && (s = s.filter((u) => u !== n));
  const l = s.find((u) => u.toLowerCase().startsWith(o.toLowerCase()));
  return l !== n ? l : void 0;
}
function Ob(e, t) {
  const { x: n, y: r } = e;
  let o = !1;
  for (let i = 0, s = t.length - 1; i < t.length; s = i++) {
    const a = t[i].x,
      l = t[i].y,
      u = t[s].x,
      c = t[s].y;
    l > r != c > r && n < ((u - a) * (r - l)) / (c - l) + a && (o = !o);
  }
  return o;
}
function Ab(e, t) {
  if (!t) return !1;
  const n = { x: e.clientX, y: e.clientY };
  return Ob(n, t);
}
function Sc(e) {
  return (t) => (t.pointerType === 'mouse' ? e(t) : void 0);
}
const Db = lb,
  Lb = ub,
  Fb = db,
  Nb = hb,
  Ib = ty,
  Vb = vb,
  zb = md,
  jb = wb,
  Bb = Sb,
  Ub = kb,
  oy = 'DropdownMenu',
  [Kb, _S] = Br(oy, [Yv]),
  Mt = Yv(),
  [Wb, iy] = Kb(oy),
  Hb = (e) => {
    const {
        __scopeDropdownMenu: t,
        children: n,
        dir: r,
        open: o,
        defaultOpen: i,
        onOpenChange: s,
        modal: a = !0
      } = e,
      l = Mt(t),
      u = g.useRef(null),
      [c = !1, d] = ld({ prop: o, defaultProp: i, onChange: s });
    return g.createElement(
      Wb,
      {
        scope: t,
        triggerId: qs(),
        triggerRef: u,
        contentId: qs(),
        open: c,
        onOpenChange: d,
        onOpenToggle: g.useCallback(() => d((h) => !h), [d]),
        modal: a
      },
      g.createElement(
        Db,
        G({}, l, { open: c, onOpenChange: d, dir: r, modal: a }),
        n
      )
    );
  },
  Gb = 'DropdownMenuTrigger',
  Qb = g.forwardRef((e, t) => {
    const { __scopeDropdownMenu: n, disabled: r = !1, ...o } = e,
      i = iy(Gb, n),
      s = Mt(n);
    return g.createElement(
      Lb,
      G({ asChild: !0 }, s),
      g.createElement(
        Qe.button,
        G(
          {
            type: 'button',
            id: i.triggerId,
            'aria-haspopup': 'menu',
            'aria-expanded': i.open,
            'aria-controls': i.open ? i.contentId : void 0,
            'data-state': i.open ? 'open' : 'closed',
            'data-disabled': r ? '' : void 0,
            disabled: r
          },
          o,
          {
            ref: od(t, i.triggerRef),
            onPointerDown: Y(e.onPointerDown, (a) => {
              !r &&
                a.button === 0 &&
                a.ctrlKey === !1 &&
                (i.onOpenToggle(), i.open || a.preventDefault());
            }),
            onKeyDown: Y(e.onKeyDown, (a) => {
              r ||
                (['Enter', ' '].includes(a.key) && i.onOpenToggle(),
                a.key === 'ArrowDown' && i.onOpenChange(!0),
                ['Enter', ' ', 'ArrowDown'].includes(a.key) &&
                  a.preventDefault());
            })
          }
        )
      )
    );
  }),
  qb = (e) => {
    const { __scopeDropdownMenu: t, ...n } = e,
      r = Mt(t);
    return g.createElement(Fb, G({}, r, n));
  },
  Yb = 'DropdownMenuContent',
  Xb = g.forwardRef((e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e,
      o = iy(Yb, n),
      i = Mt(n),
      s = g.useRef(!1);
    return g.createElement(
      Nb,
      G({ id: o.contentId, 'aria-labelledby': o.triggerId }, i, r, {
        ref: t,
        onCloseAutoFocus: Y(e.onCloseAutoFocus, (a) => {
          var l;
          s.current ||
            (l = o.triggerRef.current) === null ||
            l === void 0 ||
            l.focus(),
            (s.current = !1),
            a.preventDefault();
        }),
        onInteractOutside: Y(e.onInteractOutside, (a) => {
          const l = a.detail.originalEvent,
            u = l.button === 0 && l.ctrlKey === !0,
            c = l.button === 2 || u;
          (!o.modal || c) && (s.current = !0);
        }),
        style: {
          ...e.style,
          ['--radix-dropdown-menu-content-transform-origin']:
            'var(--radix-popper-transform-origin)'
        }
      })
    );
  }),
  Zb = g.forwardRef((e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e,
      o = Mt(n);
    return g.createElement(Ib, G({}, o, r, { ref: t }));
  }),
  Jb = g.forwardRef((e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e,
      o = Mt(n);
    return g.createElement(Vb, G({}, o, r, { ref: t }));
  }),
  eS = g.forwardRef((e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e,
      o = Mt(n);
    return g.createElement(zb, G({}, o, r, { ref: t }));
  }),
  tS = g.forwardRef((e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e,
      o = Mt(n);
    return g.createElement(jb, G({}, o, r, { ref: t }));
  }),
  nS = g.forwardRef((e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e,
      o = Mt(n);
    return g.createElement(Bb, G({}, o, r, { ref: t }));
  }),
  rS = g.forwardRef((e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e,
      o = Mt(n);
    return g.createElement(Ub, G({}, o, r, { ref: t }));
  }),
  oS = Hb,
  iS = Qb,
  sS = qb,
  aS = Xb,
  y0 = Zb,
  zl = Jb,
  w0 = eS,
  lS = tS,
  uS = nS,
  jl = rS,
  cS = () =>
    V('svg', {
      width: '1500',
      height: '1500',
      viewBox: '0 0 1500 1500',
      xmlns: 'http://www.w3.org/2000/svg',
      className: K('h-[16px] w-[16px]'),
      children: J('g', {
        id: 'Group',
        children: [
          V('path', {
            id: 'Path',
            fill: 'none',
            stroke: 'currentColor',
            strokeWidth: '128',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            d: 'M 734.433594 249.666626 L 763.144531 249.666626 L 763.134766 250.194092 C 774.658142 250.194092 787.548828 250.565063 798.828064 252.186157 C 809.511719 252.684204 817.74408 254.383423 828.066406 255.81897 C 836.357361 257.322876 843.544922 258.104126 852.539063 260.321045 C 856.357361 260.652954 859.384766 262.31311 863.281189 262.576782 C 890.273438 269.119751 915.693298 276.990967 941.40625 287.733032 C 978.769531 303.192017 1014.296875 323.279907 1046.875 347.31311 C 1092.597656 381.004517 1132.363281 422.557251 1164.228516 469.529907 L 1164.472534 470.369751 C 1163.847656 471.922485 1162.167969 472.967407 1161.074219 474.217407 C 1158.144531 474.852173 1156.640625 479.100281 1153.769531 479.608032 C 1152.304688 481.072876 1150.849609 482.547546 1149.365234 483.992798 C 1146.660156 484.50061 1145.595703 488.065125 1143.027344 488.397095 C 1141.552734 489.569031 1140.078125 492.127563 1138.144531 492.303345 C 1136.679688 493.768188 1135.234375 495.242798 1133.740234 496.668579 C 1131.259644 497.166626 1130.781128 499.774048 1128.378906 500.115845 C 1126.904297 501.307251 1125.429688 503.78772 1123.496094 504.022095 C 1122.011719 505.223267 1120.556641 507.684204 1118.613281 507.928345 C 1116.582031 510.526001 1112.226563 512.22522 1110.302734 514.266296 C 1108.154297 514.647095 1107.919922 516.551392 1105.917969 516.717407 C 1103.994141 518.729126 1099.140625 521.258423 1096.679688 522.537781 C 1089.560547 527.166687 1084.619141 529.442017 1077.148438 533.25061 C 1075.146484 532.938171 1074.912109 534.647095 1072.705078 534.295532 C 1072.050781 535.057251 1071.064453 535.389282 1069.775391 535.272095 C 1068.691406 536.815125 1067.255859 535.613953 1066.347656 536.717407 C 1065.175781 537.772095 1063.310547 536.53186 1062.451172 537.703796 C 1060.439453 538.817017 1058.525269 537.361938 1056.640625 539.090454 C 1051.435547 539.188171 1046.220703 539.149048 1041.015625 539.119751 C 1040.068359 539.217407 1039.277222 538.914673 1038.642578 538.201782 C 1036.962891 537.947876 1034.960815 538.709656 1033.75 537.22522 C 1030.410156 537.772095 1029.208984 535.135437 1026.367188 535.203796 C 1024.570313 533.924438 1022.031189 534.070923 1020.068359 532.342407 C 1018.808594 532.430298 1017.832031 532.108032 1017.158142 531.365845 C 1014.746033 531.668579 1012.929626 529.051392 1010.742126 529.32489 C 1007.636658 527.762329 1001.601501 526.121704 998.105469 524.940063 C 996.972656 523.963501 995.048828 524.832642 993.730469 523.553345 C 991.826172 523.40686 989.697266 523.348267 987.929688 522.576782 C 981.513672 521.717407 975.175781 521.902954 968.749939 522.537781 C 961.328125 524.402954 955.86908 528.035767 949.61908 532.29364 C 945.117126 535.897095 941.035156 540.027954 936.601563 543.729126 C 927.783142 552.957642 918.164063 561.863892 908.798767 570.574829 C 900.009705 579.061157 891.201172 586.707703 881.386658 593.944031 C 873.681641 598.582642 866.611267 603.641296 857.421814 605.047485 C 852.060547 605.379517 846.972656 605.447937 842.138611 602.820984 C 837.490234 600.1745 833.613281 594.490845 830.253906 590.486938 C 824.814392 583.504517 817.460938 577.020142 809.53125 573.143188 C 799.335938 567.820923 786.582031 566.717468 775.429688 569.246704 C 769.228516 570.535767 763.232422 573.328735 758.339783 577.342407 C 755.205078 578.582642 753.076172 582.010437 750.527344 584.178345 C 749.228516 586.776062 746.845703 589.403015 745.673828 592.029907 C 744.0625 594.354126 743.955078 596.951782 742.412109 599.315063 C 739.941406 603.87561 738.75 609.012329 736.943359 613.924438 C 735.205078 618.152954 732.480408 622.830688 730.996094 627.147095 C 728.359375 632.127563 724.570313 638.504517 721.464844 643.221313 C 712.861328 654.852173 700.703125 664.920532 687.1875 670.213501 C 682.597656 672.137329 676.630859 672.957703 671.875 674.061157 C 668.290955 674.051392 664.716797 674.061157 661.132813 674.061157 C 652.626953 672.225281 645.693359 668.699829 637.695313 665.467468 C 634.179688 663.856079 628.613281 662.801392 625 661.776001 C 619.589844 661.024109 613.818359 661.268188 608.398438 661.785767 C 601.181641 663.846313 593.349609 667.234985 587.998047 672.703796 C 581.875 678.328735 577.226563 686.365845 575.722656 694.539673 C 574.082031 698.026001 575.703125 702.53772 574.003906 705.721313 C 573.798828 709.158813 573.134766 711.981079 573.251953 715.487 C 573.369141 718.260376 572.617188 720.81897 571.630859 723.299438 C 569.150391 731.336609 565.957031 742.879517 562.34375 750.574829 C 557.587891 763.592407 551.455078 775.692078 543.417969 787.22522 C 536.416016 797.830688 526.796875 806.805298 516.171875 813.690063 C 503.427734 822.53772 488.671875 826.609985 474.609375 832.664673 C 468.232422 835.320984 461.601532 838.485046 455.703125 842.078735 C 444.84375 848.553345 436.240234 856.60022 427.490234 865.643188 C 410.039063 885.03772 396.640625 906.863892 379.560547 926.102173 C 375.498047 930.242798 371.640625 934.442078 367.851563 938.817017 C 356.279297 950.799438 344.394531 961.805298 330.078125 970.467407 C 323.095703 974.832642 315.419922 979.608032 307.607422 982.15686 C 298.525391 966.082642 290.458984 947.166626 283.623047 929.940063 C 268.652344 890.926453 258.144531 849.695923 253.544922 808.260376 C 252.099609 795.653015 250.537109 779.354187 250.527344 766.678345 L 250 766.190063 L 250 732.654907 L 250.527344 732.654907 C 250.46875 724.647095 251.298828 716.639282 251.386719 708.651001 C 252.246094 705.301392 252.314453 701.404907 252.363281 697.908875 C 253.574219 693.621704 253.574219 689.373718 254.228516 685.281921 C 260.742188 634.754517 275.019531 585.067078 296.660156 538.729126 C 330.664063 465.477295 382.607422 400.867798 447.011719 351.922485 C 499.628906 311.717529 561.035156 281.873657 625.048828 265.565063 C 628.408203 264.168579 631.914063 264.363892 635.205078 262.811157 C 638.398438 262.205688 641.015564 262.176392 643.984375 260.858032 C 662.43158 257.567017 682.480469 253.397095 701.171875 252.186157 C 711.40625 250.701782 723.447266 250.262329 733.945251 250.194092 L 734.433594 249.666626 Z'
          }),
          V('path', {
            id: 'path1',
            fill: 'currentColor',
            stroke: 'currentColor',
            strokeWidth: '128',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            d: 'M 1164.228516 469.529907 L 1164.589844 469.842407 C 1165.058594 471.404907 1166.162109 473.660767 1167.519531 474.72522 C 1167.548828 476.04364 1168.662109 476.776062 1169.472534 477.654907 C 1169.443359 479.354126 1171.308594 479.81311 1171.513672 481.111938 C 1172.753906 483.426392 1174.53125 486.453735 1176.308594 488.397095 C 1177.197266 491.473328 1179.355469 492.869751 1180.331909 495.760376 C 1181.025391 497.274109 1182.324219 497.908813 1182.744141 499.627563 C 1213.115112 551.805359 1234.052612 610.067017 1243.613281 670.19397 C 1245.097656 681.258423 1246.904297 689.578735 1247.480469 700.838562 C 1249.042969 710.994751 1249.355469 723.143188 1249.472656 733.602173 L 1250 734.090454 L 1250 766.707703 L 1249.472656 766.707703 C 1249.521484 771.785828 1249.21875 776.815063 1249.003784 781.893188 C 1247.958984 786.619751 1248.740234 792.791626 1247.480469 797.518188 C 1247.207031 808.143188 1245.507813 814.647095 1244.277344 824.861938 C 1236.660156 875.252563 1221.269531 924.803406 1198.476563 970.418579 C 1173.105469 1022.234985 1138.964722 1068.611938 1097.69519 1109.080688 C 1095.322144 1110.926392 1093.242188 1113.065063 1091.035156 1115.12561 C 1021.611328 1180.145142 933.90625 1224.227173 840.898438 1241.111938 C 839.0625 1241.951782 836.396423 1241.268188 834.570251 1242.38147 C 830.742188 1242.459595 828.046814 1243.71936 824.21875 1243.709595 C 821.806641 1245.135376 818.271423 1243.807251 815.986328 1245.311157 C 814.189392 1245.50647 811.533203 1245.027954 810.107422 1246.28772 C 806.02533 1246.346313 801.904297 1246.414673 797.851563 1246.824829 C 793.828125 1248.211548 788.798767 1246.717407 784.833923 1248.240845 C 778.574219 1248.641235 771.992188 1248.104126 765.839783 1249.002563 L 765.341797 1249.666626 L 733.28125 1249.666626 L 733.28125 1248.807251 L 732.421875 1248.416626 C 726.699219 1248.270142 720.937439 1248.328735 715.224609 1248.240845 C 711.826172 1245.926392 705.537109 1248.729126 702.148438 1246.414673 C 698.710938 1246.28772 695.263672 1246.37561 691.835938 1246.28772 C 690.166016 1244.529907 686.318359 1245.721313 684.033203 1245.311157 C 682.597656 1243.621704 679.21875 1244.695923 677.1875 1244.334595 C 675.976563 1242.752563 673.125 1243.651001 671.328125 1243.358032 C 670.097595 1241.785767 667.265625 1242.674438 665.46875 1242.38147 C 664.23822 1240.809204 661.40625 1241.697876 659.619141 1241.404907 C 658.398438 1239.901001 656.425781 1240.682251 654.726563 1240.428345 C 653.515625 1238.934204 651.533203 1239.695923 649.84375 1239.451782 C 648.632813 1237.947876 646.650391 1238.71936 644.970703 1238.47522 C 643.789063 1237.108032 642.597656 1237.674438 641.054688 1237.498657 C 639.853455 1236.004517 637.861328 1236.766235 636.181641 1236.522095 C 635.009766 1235.145142 633.818359 1235.721313 632.275391 1235.545532 C 631.09375 1234.168579 629.912109 1234.744751 628.369141 1234.56897 C 627.187439 1233.192017 626.005859 1233.768188 624.462891 1233.592407 C 623.291016 1232.215454 622.099609 1232.791626 620.556641 1232.615845 C 619.472656 1231.053345 618.037109 1232.283813 617.138672 1231.160767 C 615.966797 1230.106079 614.091797 1231.356079 613.232422 1230.184204 C 610.585938 1229.734985 609.677734 1228.455688 606.884766 1228.709595 C 606.230469 1227.93811 605.253906 1227.615845 603.955078 1227.733032 C 603.291016 1226.971313 602.314453 1226.649048 601.025391 1226.75647 C 599.84375 1225.389282 598.662109 1225.955688 597.128906 1225.779907 C 596.474609 1225.008423 595.498047 1224.686157 594.199219 1224.803345 C 592.8125 1223.270142 591.474609 1224.41272 589.84375 1222.889282 C 587.705078 1223.279907 585.839844 1220.526001 583.447266 1220.897095 C 582.070313 1219.383423 580.722656 1220.50647 579.101563 1218.983032 C 577.128906 1219.402954 575.166016 1216.805298 573.242188 1217.029907 C 570.644531 1215.897095 568.964844 1215.809204 566.40625 1214.109985 C 564.248047 1214.481079 562.402344 1211.727173 560.019531 1212.108032 C 559.189392 1211.199829 557.773438 1211.082642 556.640625 1210.19397 C 553.857422 1210.340454 551.181641 1207.010376 548.300781 1207.22522 C 546.669922 1205.994751 542.949219 1204.598267 541.015625 1203.358032 C 533.691406 1200.90686 523.613281 1194.764282 516.074219 1191.60022 C 514.433594 1189.50061 510.830078 1188.699829 508.75 1187.205688 C 505.136719 1185.916626 504.414032 1184.442017 500.976563 1182.85022 C 498.056641 1181.951782 496.855469 1179.72522 493.613281 1178.904907 C 492.177734 1177.098267 491.035156 1177.176392 489.257813 1176.014282 C 487.978516 1175.965454 487.480469 1173.895142 485.800781 1174.022095 C 484.365234 1172.22522 483.212891 1172.283813 481.445313 1171.13147 C 480.166016 1171.092407 479.677734 1169.002563 477.988281 1169.139282 C 476.71875 1167.361938 475.361328 1167.547485 473.916016 1166.307251 C 463.623047 1159.637329 451.904297 1151.06311 442.324219 1143.514282 C 439.453125 1142.479126 437.509766 1139.490845 434.824219 1138.074829 C 429.746094 1133.553345 423.974609 1129.25647 419.042969 1124.490845 C 413.134766 1119.832642 408.027344 1114.070923 402.226563 1109.178345 C 373.300781 1080.936157 347.099609 1048.856079 325.878906 1014.588501 C 319.414063 1004.080688 312.763672 993.397095 307.607422 982.15686 C 315.419922 979.608032 323.095703 974.832642 330.078125 970.467407 C 344.394531 961.805298 356.279297 950.799438 367.851563 938.817017 C 371.640625 934.442078 375.498047 930.242798 379.560547 926.102173 C 396.640625 906.863892 410.039063 885.03772 427.490234 865.643188 C 436.240234 856.60022 444.84375 848.553345 455.703125 842.078735 C 461.601532 838.485046 468.232422 835.320984 474.609375 832.664673 C 488.671875 826.609985 503.427734 822.53772 516.171875 813.690063 C 526.796875 806.805298 536.416016 797.830688 543.417969 787.22522 C 551.455078 775.692078 557.587891 763.592407 562.34375 750.574829 C 565.957031 742.879517 569.150391 731.336609 571.630859 723.299438 C 572.617188 720.81897 573.369141 718.260376 573.251953 715.487 C 573.134766 711.981079 573.798828 709.158813 574.003906 705.721313 C 575.703125 702.53772 574.082031 698.026001 575.722656 694.539673 C 577.226563 686.365845 581.875 678.328735 587.998047 672.703796 C 593.349609 667.234985 601.181641 663.846313 608.398438 661.785767 C 613.818359 661.268188 619.589844 661.024109 625 661.776001 C 628.613281 662.801392 634.179688 663.856079 637.695313 665.467468 C 645.693359 668.699829 652.626953 672.225281 661.132813 674.061157 C 664.716797 674.061157 668.290955 674.051392 671.875 674.061157 C 676.630859 672.957703 682.597656 672.137329 687.1875 670.213501 C 700.703125 664.920532 712.861328 654.852173 721.464844 643.221313 C 724.570313 638.504517 728.359375 632.127563 730.996094 627.147095 C 732.480408 622.830688 735.205078 618.152954 736.943359 613.924438 C 738.75 609.012329 739.941406 603.87561 742.412109 599.315063 C 743.955078 596.951782 744.0625 594.354126 745.673828 592.029907 C 746.845703 589.403015 749.228516 586.776062 750.527344 584.178345 C 753.076172 582.010437 755.205078 578.582642 758.339783 577.342407 C 763.232422 573.328735 769.228516 570.535767 775.429688 569.246704 C 786.582031 566.717468 799.335938 567.820923 809.53125 573.143188 C 817.460938 577.020142 824.814392 583.504517 830.253906 590.486938 C 833.613281 594.490845 837.490234 600.1745 842.138611 602.820984 C 846.972656 605.447937 852.060547 605.379517 857.421814 605.047485 C 866.611267 603.641296 873.681641 598.582642 881.386658 593.944031 C 891.201172 586.707703 900.009705 579.061157 908.798767 570.574829 C 918.164063 561.863892 927.783142 552.957642 936.601563 543.729126 C 941.035156 540.027954 945.117126 535.897095 949.61908 532.29364 C 955.86908 528.035767 961.328125 524.402954 968.749939 522.537781 C 975.175781 521.902954 981.513672 521.717407 987.929688 522.576782 C 989.697266 523.348267 991.826172 523.40686 993.730469 523.553345 C 995.048828 524.832642 996.972656 523.963501 998.105469 524.940063 C 1001.601501 526.121704 1007.636658 527.762329 1010.742126 529.32489 C 1012.929626 529.051392 1014.746033 531.668579 1017.158142 531.365845 C 1017.832031 532.108032 1018.808594 532.430298 1020.068359 532.342407 C 1022.031189 534.070923 1024.570313 533.924438 1026.367188 535.203796 C 1029.208984 535.135437 1030.410156 537.772095 1033.75 537.22522 C 1034.960815 538.709656 1036.962891 537.947876 1038.642578 538.201782 C 1039.277222 538.914673 1040.068359 539.217407 1041.015625 539.119751 C 1046.220703 539.149048 1051.435547 539.188171 1056.640625 539.090454 C 1058.525269 537.361938 1060.439453 538.817017 1062.451172 537.703796 C 1063.310547 536.53186 1065.175781 537.772095 1066.347656 536.717407 C 1067.255859 535.613953 1068.691406 536.815125 1069.775391 535.272095 C 1071.064453 535.389282 1072.050781 535.057251 1072.705078 534.295532 C 1074.912109 534.647095 1075.146484 532.938171 1077.148438 533.25061 C 1084.619141 529.442017 1089.560547 527.166687 1096.679688 522.537781 C 1099.140625 521.258423 1103.994141 518.729126 1105.917969 516.717407 C 1107.919922 516.551392 1108.154297 514.647095 1110.302734 514.266296 C 1112.226563 512.22522 1116.582031 510.526001 1118.613281 507.928345 C 1120.556641 507.684204 1122.011719 505.223267 1123.496094 504.022095 C 1125.429688 503.78772 1126.904297 501.307251 1128.378906 500.115845 C 1130.781128 499.774048 1131.259644 497.166626 1133.740234 496.668579 C 1135.234375 495.242798 1136.679688 493.768188 1138.144531 492.303345 C 1140.078125 492.127563 1141.552734 489.569031 1143.027344 488.397095 C 1145.595703 488.065125 1146.660156 484.50061 1149.365234 483.992798 C 1150.849609 482.547546 1152.304688 481.072876 1153.769531 479.608032 C 1156.640625 479.100281 1158.144531 474.852173 1161.074219 474.217407 C 1162.167969 472.967407 1163.847656 471.922485 1164.472534 470.369751 L 1164.228516 469.529907 Z'
          })
        ]
      })
    }),
  fS = () => {
    const [e, t] = Fa('isSettingsOpen', !1),
      [n, r] = _t('language', 'en'),
      [o, i] = _t('isBadgeHidden', !1);
    return J(oS, {
      open: e,
      onOpenChange: (s) => t(s),
      modal: !1,
      children: [
        V(iS, {
          asChild: !0,
          children: V(ei, {
            className: K(
              `flex h-[20px] w-[20px] cursor-default items-center justify-center p-[2px] transition-all duration-200 ${Vt({ filter: 'brightness(0.75)', '&:hover': { filter: 'brightness(1)' } })}`
            ),
            tooltip: V(ti, {
              side: 'top',
              sideOffset: 5,
              children: 'Open settings'
            }),
            children: V(K9, {
              className: K(
                `h-[16px] w-[16px] opacity-0 transition-all hover:scale-110 group-hover:opacity-100 ${Vt({ stroke: 'white', opacity: e ? '1' : '0' })}`
              )
            })
          })
        }),
        V(sS, {
          container: gd,
          children: J(aS, {
            className: K(
              `flex min-w-[128px] max-w-[256px] flex-col gap-[6px] rounded-[6px] bg-opacity-75 p-[6px] text-left text-[12px] leading-[24px] text-white ${Vt(
                {
                  background: 'rgba(31,41,55,.75)',
                  backdropFilter: 'blur(8px)',
                  boxShadow:
                    '0px 10px 38px -10px rgba(22, 23, 24, 0.35), 0px 10px 20px -15px rgba(22, 23, 24, 0.2), 0px 0px 0px 1px rgba(255, 255, 255, 0.3)'
                }
              )}`
            ),
            align: 'end',
            sideOffset: 4,
            children: [
              J(uS, {
                value: n,
                onValueChange: r,
                children: [
                  J(zl, {
                    className: K(
                      'flex items-center gap-[4px] px-[4px] font-medium text-[#9ca3af]'
                    ),
                    children: [
                      V(j9, { className: K('h-[16px] w-[16px]') }),
                      chrome.i18n.getMessage('Language')
                    ]
                  }),
                  J(jl, {
                    className: K(
                      'highlighted:bg-[#4b5563] highlighted:bg-opacity-75 flex cursor-default items-center gap-[4px] rounded-[4px] px-[4px] outline-none'
                    ),
                    value: 'en',
                    children: [
                      n === 'en'
                        ? V(ji, { className: K('h-[14px] w-[14px]') })
                        : V('span', { className: K('h-[16px] w-[16px]') }),
                      V('span', { className: K('flex-1'), children: 'English' })
                    ]
                  }),
                  J(jl, {
                    className: K(
                      'highlighted:bg-[#4b5563] highlighted:bg-opacity-75 flex cursor-default items-center gap-[4px] rounded-[4px] px-[4px] outline-none'
                    ),
                    value: 'ko',
                    children: [
                      n === 'ko'
                        ? V(ji, { className: K('h-[14px] w-[14px]') })
                        : V('span', { className: K('h-[16px] w-[16px]') }),
                      V('span', { className: K('flex-1'), children: '한국어' })
                    ]
                  }),
                  J(jl, {
                    className: K(
                      'highlighted:bg-[#4b5563] highlighted:bg-opacity-75 flex cursor-default items-center gap-[4px] rounded-[4px] px-[4px] outline-none'
                    ),
                    value: 'ja',
                    children: [
                      n === 'ja'
                        ? V(ji, { className: K('h-[14px] w-[14px]') })
                        : V('span', { className: K('h-[16px] w-[16px]') }),
                      V('span', { className: K('flex-1'), children: '日本語' })
                    ]
                  })
                ]
              }),
              J(y0, {
                children: [
                  J(zl, {
                    className: K(
                      'flex cursor-default select-none items-center gap-[4px] px-[4px] font-medium text-[#9ca3af]'
                    ),
                    children: [
                      V(V9, { className: K('h-[16px] w-[16px]') }),
                      'Options'
                    ]
                  }),
                  V(lS, {
                    className: K(
                      'highlighted:bg-[#4b5563] highlighted:bg-opacity-75 flex cursor-default items-center gap-[6px] rounded-[4px] px-[4px] outline-none'
                    ),
                    onClick: () => i(!o),
                    children: o
                      ? J(_o, {
                          children: [
                            V('span', { className: K('h-[16px] w-[16px]') }),
                            'Show Badge'
                          ]
                        })
                      : J(_o, {
                          children: [
                            V(ji, { className: K('h-[14px] w-[14px]') }),
                            'Show Badge'
                          ]
                        })
                  })
                ]
              }),
              J(y0, {
                children: [
                  J(zl, {
                    className: K(
                      'flex cursor-default select-none items-center gap-[4px] px-[4px] font-medium text-[#9ca3af]'
                    ),
                    children: [V(cS, {}), 'Rayst']
                  }),
                  V(w0, {
                    asChild: !0,
                    className: K(
                      'highlighted:bg-[#4b5563] highlighted:bg-opacity-75 flex cursor-default items-center gap-[4px] rounded-[4px] px-[4px] outline-none'
                    ),
                    children: J('a', {
                      href: 'https://docs.ray.st',
                      className: K('cursor-default'),
                      target: '_blank',
                      rel: 'noopener',
                      children: [
                        V(U9, { className: K('h-[16px] w-[16px]') }),
                        'Read Docs'
                      ]
                    })
                  }),
                  V(w0, {
                    asChild: !0,
                    className: K(
                      'highlighted:bg-[#4b5563] highlighted:bg-opacity-75 flex cursor-default items-center gap-[4px] rounded-[4px] px-[4px] outline-none'
                    ),
                    children: J('a', {
                      href: 'https://ray.st/chrome',
                      className: K('cursor-default'),
                      target: '_blank',
                      rel: 'noopener',
                      children: [
                        V(B9, { className: K('h-[16px] w-[16px]') }),
                        'Write Review'
                      ]
                    })
                  })
                ]
              })
            ]
          })
        })
      ]
    });
  },
  dS = (e) =>
    new RegExp(
      '^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$'
    ).test(e),
  pS = (e) =>
    new RegExp(
      '^((localhost)|(127\\.0\\.0\\.1)|(0\\.0\\.0\\.0)|(\\[::1\\]))$'
    ).test(e),
  hS = (e) => e === 'app.ray.st',
  sy = (e) => !dS(e) && !pS(e) && !hS(e);
let gd = null;
const mS = ({ isPanelLoaded: e, setIsPanelLoaded: t }) => {
  const n = g.useRef(null),
    r = g.useRef(null);
  g.useEffect(() => {
    gd = r.current;
  }, [r.current]);
  const [o, i] = _t('isPanelOpen', !1),
    [s, a] = Fa('isPanelHovered', !1),
    [l, u] = _t('isPinned', !1),
    [c, d] = _t('language', 'en');
  m9(n, (b) => {
    const p = document.querySelector('#rayst-root');
    l || p === b.target || s || i(!1);
  });
  const h = () =>
      ['form', 'input', 'textarea', 'select', 'editable', 'div'].includes(
        document.activeElement.tagName.toLowerCase()
      ),
    [v] = Ol('shift + r'),
    [w] = Ol('esc'),
    [x] = Ol('ctrl + shift + p');
  return (
    g.useEffect(() => {
      !v || h() || i((b) => !b);
    }, [v]),
    g.useEffect(() => {
      !w || h() || i(!1);
    }, [w]),
    g.useEffect(() => {
      !x || h() || u(!l);
    }, [x]),
    sy(location.hostname)
      ? J(_o, {
          children: [
            V(iv.div, {
              ref: n,
              className: K(
                'group fixed right-[16px] bottom-0 top-0 z-[2147483645] my-auto flex max-h-[90vh] min-h-[90vh] rounded-[6px] backdrop-blur-md'
              ),
              initial: { opacity: 1, x: 352 },
              animate: o ? { opacity: 1, x: 0 } : { opacity: 1, x: 352 },
              exit: { opacity: 1, x: 352 },
              transition: { duration: 0.4, type: 'spring' },
              onMouseEnter: () => a(!0),
              onMouseOut: () => a(!1),
              children: J('div', {
                className:
                  K(`relative h-full w-[320px] ${e ? '' : 'rounded-[6px] shadow-panel'}
          `),
                children: [
                  !e && V(gS, {}),
                  o || e
                    ? J(_o, {
                        children: [
                          V('iframe', {
                            className: K(
                              `h-full w-[320px] rounded-[6px] shadow-panel ${e ? 'visible opacity-100' : 'invisible opacity-0'} ${j1({ msOverflowStyle: 'none', scrollbarWidth: 'none' })}`
                            ),
                            src: Ov({ language: c }),
                            onLoad: () => t(!0)
                          }),
                          J('div', {
                            className: K(
                              'absolute top-0 right-0 flex p-[12px]'
                            ),
                            children: [V(fS, {}), V(H9, {}), V(W9, {})]
                          })
                        ]
                      })
                    : null
                ]
              })
            }),
            V('div', {
              id: '#portal',
              className: K('relative z-[2147483645]'),
              ref: r
            })
          ]
        })
      : null
  );
};
function gS() {
  return V('div', {
    className: K(
      'absolute flex h-full w-full items-center justify-center rounded-[6px] bg-gray-900/75 backdrop-blur-md'
    ),
    children: J('svg', {
      className: K('h-[20px] w-[20px] animate-spin text-gray-500'),
      fill: 'none',
      viewBox: '0 0 24 24',
      children: [
        V('circle', {
          className: K('opacity-25'),
          cx: '12',
          cy: '12',
          r: '10',
          stroke: 'currentColor',
          strokeWidth: '4'
        }),
        V('path', {
          className: K('opacity-75'),
          fill: 'currentColor',
          d: 'M4 12a8 8 0 018-8v8H4z'
        })
      ]
    })
  });
}
const ei = g.forwardRef(({ children: e, tooltip: t, className: n, ...r }, o) =>
    V(s9, {
      children: J(a9, {
        children: [
          V(l9, {
            ref: o,
            className: K(`focus:outline-none ${n}`),
            ...r,
            children: e
          }),
          t
        ]
      })
    })
  ),
  ti = g.forwardRef(({ ...e }, t) =>
    V(u9, {
      container: gd,
      children: V(c9, {
        ref: t,
        className: K(
          `z-[2147483647] h-[24px] rounded-[6px] bg-black p-[6px] text-[12px] font-normal leading-none text-white ${Vt(
            {
              boxShadow:
                '0px 10px 38px -10px rgba(22, 23, 24, 0.35), 0px 10px 20px -15px rgba(22, 23, 24, 0.2), 0px 0px 0px 1px rgba(255, 255, 255, 0.3)'
            }
          )}`
        ),
        sideOffset: 8,
        side: 'left',
        ...e
      })
    })
  ),
  vS = {
    animate: { opacity: [0, 1], scale: [1.05, 1], x: [16, 0] },
    exit: { opacity: 0, scale: 0.95, x: 16 },
    transition: { duration: 0.15 }
  },
  yS = () => {
    const e = chrome.runtime.getURL(u6),
      t = O8(),
      [n, r] = _t('positions', { y: 0 }),
      [o, i] = _t('isPanelOpen', !1),
      [s, a] = _t('isBadgeHidden', !1),
      l = _8(n.y),
      u = g.useRef(null),
      [c, d] = g.useState(!1);
    g.useEffect(() => {
      l.set(n.y);
    }, [n]);
    function h(w) {
      t.start(w), r({ y: l.get() }), d(l.get() !== n.y);
    }
    function v() {
      r({ y: l.get() }), d(l.get() !== n.y);
    }
    return J(_o, {
      children: [
        V('div', {
          className: K('fixed bottom-0 top-0 right-[16px] my-auto h-[95%]'),
          ref: u
        }),
        V($8, {
          children:
            !o &&
            !s &&
            J(iv.div, {
              className: K(
                'group fixed bottom-0 top-0 right-[16px] z-[2147483644] my-auto flex h-[36px] w-[36px] items-center justify-center rounded-full bg-zinc-900 font-black text-white shadow-rayst outline-none transition-shadow duration-200'
              ),
              ...vS,
              drag: 'y',
              dragControls: t,
              dragMomentum: !1,
              dragConstraints: u,
              onDragEnd: v,
              style: { y: l },
              onPointerDown: h,
              children: [
                V(ei, {
                  tooltip: J(ti, {
                    children: [
                      V('span', { children: chrome.i18n.getMessage('Reveal') }),
                      V('kbd', {
                        className: K('ml-[6px] opacity-80'),
                        style: { fontFamily: 'SF Pro Display' },
                        children: '⇧ R'
                      })
                    ]
                  }),
                  className: K(
                    'cursor-default brightness-75 transition-all duration-200 hover:brightness-100'
                  ),
                  onClick: () => {
                    c || i(!0);
                  },
                  children: V('img', {
                    className: K('pointer-events-none rounded-full'),
                    src: e,
                    alt: 'logo',
                    width: '100%',
                    height: '100%'
                  })
                }),
                V(ei, {
                  className: K(
                    'absolute right-[24px] bottom-[24px] h-[12px] w-[12px] cursor-default rounded-full bg-white p-[2px] opacity-0 ring-2 ring-[#6b72801a] transition-all hover:ring-[#6b728080] group-hover:opacity-100'
                  ),
                  onClick: (w) => {
                    a(!0);
                  },
                  tooltip: V(ti, { children: 'Hide' }),
                  children: J('svg', {
                    xmlns: 'http://www.w3.org/2000/svg',
                    width: '100%',
                    height: '100%',
                    viewBox: '0 0 24 24',
                    strokeWidth: '2',
                    stroke: 'black',
                    fill: 'none',
                    strokeLinecap: 'round',
                    strokeLinejoin: 'round',
                    children: [
                      V('path', {
                        stroke: 'none',
                        d: 'M0 0h24v24H0z',
                        fill: 'none'
                      }),
                      V('line', { x1: '18', y1: '6', x2: '6', y2: '18' }),
                      V('line', { x1: '6', y1: '6', x2: '18', y2: '18' })
                    ]
                  })
                })
              ]
            })
        })
      ]
    });
  },
  wS = () => {
    const [e, t] = g.useState(!1);
    return J('div', {
      id: 'rayst-container',
      className: K('font-sans'),
      children: [V(yS, {}), V(mS, { isPanelLoaded: e, setIsPanelLoaded: t })]
    });
  },
  xS = new a3({});
function CS() {
  return V(c3, { client: xS, children: V(wS, {}) });
}
async function bS() {
  const e = document.createElement('div');
  (e.id = 'rayst-root'),
    (e.style.position = 'fixed'),
    (e.style.top = '0'),
    (e.style.right = '0'),
    (e.style.width = '0'),
    (e.style.height = '100%'),
    (e.style.zIndex = '2147483647');
  const t = 'https://ray.st/Mona-Sans.css',
    n = document.createElement('link');
  (n.rel = 'stylesheet'), (n.href = t), (n.type = 'text/css');
  const r = e.attachShadow({ mode: 'open' });
  r.adoptedStyleSheets = [H1.target];
  const o = await lc.get('language', 'en');
  Ov({ language: o }) &&
    (document.head.append(n),
    document.body.append(e),
    window.requestIdleCallback(() => T1(r).render(V(CS, {}))));
}
bS();
