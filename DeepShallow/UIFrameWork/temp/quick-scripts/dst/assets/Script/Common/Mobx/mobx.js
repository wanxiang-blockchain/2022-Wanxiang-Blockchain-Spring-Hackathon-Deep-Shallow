
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Common/Mobx/mobx.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}(function (global){
"use strict";
cc._RF.push(module, 'de3aaq1fItEy5tKcvHOTs15', 'mobx');
// Script/Common/Mobx/mobx.js

"use strict";

exports.__esModule = true;
exports.$mobx = void 0;
exports.FlowCancellationError = FlowCancellationError;
exports.Reaction = exports.ObservableSet = exports.ObservableMap = void 0;
exports._allowStateChanges = allowStateChanges;
exports.runInAction = exports._allowStateChangesInsideComputed = runInAction;
exports._allowStateReadsEnd = allowStateReadsEnd;
exports._allowStateReadsStart = allowStateReadsStart;
exports._autoAction = void 0;
exports._endAction = _endAction;
exports._getAdministration = getAdministration;
exports._getGlobalState = getGlobalState;
exports._interceptReads = interceptReads;
exports._isComputingDerivation = isComputingDerivation;
exports._resetGlobalState = resetGlobalState;
exports._startAction = _startAction;
exports.action = void 0;
exports.autorun = autorun;
exports.computed = exports.comparer = void 0;
exports.configure = configure;
exports.createAtom = createAtom;
exports.defineProperty = apiDefineProperty;
exports.entries = entries;
exports.extendObservable = extendObservable;
exports.flow = void 0;
exports.flowResult = flowResult;
exports.get = get;
exports.getAtom = getAtom;
exports.getDebugName = getDebugName;
exports.getDependencyTree = getDependencyTree;
exports.getObserverTree = getObserverTree;
exports.has = has;
exports.intercept = intercept;
exports.isAction = isAction;
exports.isBoxedObservable = void 0;
exports.isComputed = isComputed;
exports.isComputedProp = isComputedProp;
exports.isFlow = isFlow;
exports.isFlowCancellationError = isFlowCancellationError;
exports.isObservable = isObservable;
exports.isObservableArray = isObservableArray;
exports.isObservableMap = void 0;
exports.isObservableObject = isObservableObject;
exports.isObservableProp = isObservableProp;
exports.isObservableSet = void 0;
exports.keys = keys;
exports.makeAutoObservable = makeAutoObservable;
exports.makeObservable = makeObservable;
exports.observable = void 0;
exports.observe = observe;
exports.onBecomeObserved = onBecomeObserved;
exports.onBecomeUnobserved = onBecomeUnobserved;
exports.onReactionError = onReactionError;
exports.override = void 0;
exports.ownKeys = apiOwnKeys;
exports.reaction = reaction;
exports.remove = remove;
exports.set = set;
exports.spy = spy;
exports.toJS = toJS;
exports.trace = trace;
exports.transaction = transaction;
exports.untracked = untracked;
exports.values = values;
exports.when = when;
var NODE_ENV = "production";
var niceErrors = {
  0: "Invalid value for configuration 'enforceActions', expected 'never', 'always' or 'observed'",
  1: function _(annotationType, key) {
    return "Cannot apply '" + annotationType + "' to '" + key.toString() + "': Field not found.";
  },

  /*
  2(prop) {
      return `invalid decorator for '${prop.toString()}'`
  },
  3(prop) {
      return `Cannot decorate '${prop.toString()}': action can only be used on properties with a function value.`
  },
  4(prop) {
      return `Cannot decorate '${prop.toString()}': computed can only be used on getter properties.`
  },
  */
  5: "'keys()' can only be used on observable objects, arrays, sets and maps",
  6: "'values()' can only be used on observable objects, arrays, sets and maps",
  7: "'entries()' can only be used on observable objects, arrays and maps",
  8: "'set()' can only be used on observable objects, arrays and maps",
  9: "'remove()' can only be used on observable objects, arrays and maps",
  10: "'has()' can only be used on observable objects, arrays and maps",
  11: "'get()' can only be used on observable objects, arrays and maps",
  12: "Invalid annotation",
  13: "Dynamic observable objects cannot be frozen",
  14: "Intercept handlers should return nothing or a change object",
  15: "Observable arrays cannot be frozen",
  16: "Modification exception: the internal structure of an observable array was changed.",
  17: function _(index, length) {
    return "[mobx.array] Index out of bounds, " + index + " is larger than " + length;
  },
  18: "mobx.map requires Map polyfill for the current browser. Check babel-polyfill or core-js/es6/map.js",
  19: function _(other) {
    return "Cannot initialize from classes that inherit from Map: " + other.constructor.name;
  },
  20: function _(other) {
    return "Cannot initialize map from " + other;
  },
  21: function _(dataStructure) {
    return "Cannot convert to map from '" + dataStructure + "'";
  },
  22: "mobx.set requires Set polyfill for the current browser. Check babel-polyfill or core-js/es6/set.js",
  23: "It is not possible to get index atoms from arrays",
  24: function _(thing) {
    return "Cannot obtain administration from " + thing;
  },
  25: function _(property, name) {
    return "the entry '" + property + "' does not exist in the observable map '" + name + "'";
  },
  26: "please specify a property",
  27: function _(property, name) {
    return "no observable property '" + property.toString() + "' found on the observable object '" + name + "'";
  },
  28: function _(thing) {
    return "Cannot obtain atom from " + thing;
  },
  29: "Expecting some object",
  30: "invalid action stack. did you forget to finish an action?",
  31: "missing option for computed: get",
  32: function _(name, derivation) {
    return "Cycle detected in computation " + name + ": " + derivation;
  },
  33: function _(name) {
    return "The setter of computed value '" + name + "' is trying to update itself. Did you intend to update an _observable_ value, instead of the computed property?";
  },
  34: function _(name) {
    return "[ComputedValue '" + name + "'] It is not possible to assign a new value to a computed value.";
  },
  35: "There are multiple, different versions of MobX active. Make sure MobX is loaded only once or use `configure({ isolateGlobalState: true })`",
  36: "isolateGlobalState should be called before MobX is running any reactions",
  37: function _(method) {
    return "[mobx] `observableArray." + method + "()` mutates the array in-place, which is not allowed inside a derivation. Use `array.slice()." + method + "()` instead";
  },
  38: "'ownKeys()' can only be used on observable objects",
  39: "'defineProperty()' can only be used on observable objects"
};
var errors = NODE_ENV !== "production" ? niceErrors : {};

function die(error) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  if (NODE_ENV !== "production") {
    var e = typeof error === "string" ? error : errors[error];
    if (typeof e === "function") e = e.apply(null, args);
    throw new Error("[MobX] " + e);
  }

  throw new Error(typeof error === "number" ? "[MobX] minified error nr: " + error + (args.length ? " " + args.map(String).join(",") : "") + ". Find the full error at: https://github.com/mobxjs/mobx/blob/main/packages/mobx/src/errors.ts" : "[MobX] " + error);
}

var mockGlobal = {};

function getGlobal() {
  if (typeof globalThis !== "undefined") {
    return globalThis;
  }

  if (typeof window !== "undefined") {
    return window;
  }

  if (typeof global !== "undefined") {
    return global;
  }

  if (typeof self !== "undefined") {
    return self;
  }

  return mockGlobal;
}

var assign = Object.assign;
var getDescriptor = Object.getOwnPropertyDescriptor;
var defineProperty = Object.defineProperty;
var objectPrototype = Object.prototype;
var EMPTY_ARRAY = [];
Object.freeze(EMPTY_ARRAY);
var EMPTY_OBJECT = {};
Object.freeze(EMPTY_OBJECT);
var hasProxy = typeof Proxy !== "undefined";
var plainObjectString = /*#__PURE__*/Object.toString();

function assertProxies() {
  if (!hasProxy) {
    die(NODE_ENV !== "production" ? "`Proxy` objects are not available in the current environment. Please configure MobX to enable a fallback implementation.`" : "Proxy not available");
  }
}

function warnAboutProxyRequirement(msg) {
  if (NODE_ENV !== "production" && globalState.verifyProxies) {
    die("MobX is currently configured to be able to run in ES5 mode, but in ES5 MobX won't be able to " + msg);
  }
}

function getNextId() {
  return ++globalState.mobxGuid;
}
/**
 * Makes sure that the provided function is invoked at most once.
 */


function once(func) {
  var invoked = false;
  return function () {
    if (invoked) return;
    invoked = true;
    return func.apply(this, arguments);
  };
}

var noop = function noop() {};

function isFunction(fn) {
  return typeof fn === "function";
}

function isStringish(value) {
  var t = typeof value;

  switch (t) {
    case "string":
    case "symbol":
    case "number":
      return true;
  }

  return false;
}

function isObject(value) {
  return value !== null && typeof value === "object";
}

function isPlainObject(value) {
  var _proto$constructor;

  if (!isObject(value)) return false;
  var proto = Object.getPrototypeOf(value);
  if (proto == null) return true;
  return ((_proto$constructor = proto.constructor) == null ? void 0 : _proto$constructor.toString()) === plainObjectString;
} // https://stackoverflow.com/a/37865170


function isGenerator(obj) {
  var constructor = obj == null ? void 0 : obj.constructor;
  if (!constructor) return false;
  if ("GeneratorFunction" === constructor.name || "GeneratorFunction" === constructor.displayName) return true;
  return false;
}

function addHiddenProp(object, propName, value) {
  defineProperty(object, propName, {
    enumerable: false,
    writable: true,
    configurable: true,
    value: value
  });
}

function addHiddenFinalProp(object, propName, value) {
  defineProperty(object, propName, {
    enumerable: false,
    writable: false,
    configurable: true,
    value: value
  });
}

function createInstanceofPredicate(name, theClass) {
  var propName = "isMobX" + name;
  theClass.prototype[propName] = true;
  return function (x) {
    return isObject(x) && x[propName] === true;
  };
}

function isES6Map(thing) {
  return thing instanceof Map;
}

function isES6Set(thing) {
  return thing instanceof Set;
}

var hasGetOwnPropertySymbols = typeof Object.getOwnPropertySymbols !== "undefined";
/**
 * Returns the following: own enumerable keys and symbols.
 */

function getPlainObjectKeys(object) {
  var keys = Object.keys(object); // Not supported in IE, so there are not going to be symbol props anyway...

  if (!hasGetOwnPropertySymbols) return keys;
  var symbols = Object.getOwnPropertySymbols(object);
  if (!symbols.length) return keys;
  return [].concat(keys, symbols.filter(function (s) {
    return objectPrototype.propertyIsEnumerable.call(object, s);
  }));
} // From Immer utils
// Returns all own keys, including non-enumerable and symbolic


var ownKeys = typeof Reflect !== "undefined" && Reflect.ownKeys ? Reflect.ownKeys : hasGetOwnPropertySymbols ? function (obj) {
  return Object.getOwnPropertyNames(obj).concat(Object.getOwnPropertySymbols(obj));
} :
/* istanbul ignore next */
Object.getOwnPropertyNames;

function stringifyKey(key) {
  if (typeof key === "string") return key;
  if (typeof key === "symbol") return key.toString();
  return new String(key).toString();
}

function toPrimitive(value) {
  return value === null ? null : typeof value === "object" ? "" + value : value;
}

function hasProp(target, prop) {
  return objectPrototype.hasOwnProperty.call(target, prop);
} // From Immer utils


var getOwnPropertyDescriptors = Object.getOwnPropertyDescriptors || function getOwnPropertyDescriptors(target) {
  // Polyfill needed for Hermes and IE, see https://github.com/facebook/hermes/issues/274
  var res = {}; // Note: without polyfill for ownKeys, symbols won't be picked up

  ownKeys(target).forEach(function (key) {
    res[key] = getDescriptor(target, key);
  });
  return res;
};

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

function _createForOfIteratorHelperLoose(o, allowArrayLike) {
  var it;

  if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it) o = it;
      var i = 0;
      return function () {
        if (i >= o.length) return {
          done: true
        };
        return {
          done: false,
          value: o[i++]
        };
      };
    }

    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  it = o[Symbol.iterator]();
  return it.next.bind(it);
}

var storedAnnotationsSymbol = /*#__PURE__*/Symbol("mobx-stored-annotations");
/**
 * Creates a function that acts as
 * - decorator
 * - annotation object
 */

function createDecoratorAnnotation(annotation) {
  function decorator(target, property) {
    storeAnnotation(target, property, annotation);
  }

  return Object.assign(decorator, annotation);
}
/**
 * Stores annotation to prototype,
 * so it can be inspected later by `makeObservable` called from constructor
 */


function storeAnnotation(prototype, key, annotation) {
  if (!hasProp(prototype, storedAnnotationsSymbol)) {
    addHiddenProp(prototype, storedAnnotationsSymbol, _extends({}, prototype[storedAnnotationsSymbol]));
  } // @override must override something


  if (NODE_ENV !== "production" && isOverride(annotation) && !hasProp(prototype[storedAnnotationsSymbol], key)) {
    var fieldName = prototype.constructor.name + ".prototype." + key.toString();
    die("'" + fieldName + "' is decorated with 'override', " + "but no such decorated member was found on prototype.");
  } // Cannot re-decorate


  assertNotDecorated(prototype, annotation, key); // Ignore override

  if (!isOverride(annotation)) {
    prototype[storedAnnotationsSymbol][key] = annotation;
  }
}

function assertNotDecorated(prototype, annotation, key) {
  if (NODE_ENV !== "production" && !isOverride(annotation) && hasProp(prototype[storedAnnotationsSymbol], key)) {
    var fieldName = prototype.constructor.name + ".prototype." + key.toString();
    var currentAnnotationType = prototype[storedAnnotationsSymbol][key].annotationType_;
    var requestedAnnotationType = annotation.annotationType_;
    die("Cannot apply '@" + requestedAnnotationType + "' to '" + fieldName + "':" + ("\nThe field is already decorated with '@" + currentAnnotationType + "'.") + "\nRe-decorating fields is not allowed." + "\nUse '@override' decorator for methods overriden by subclass.");
  }
}
/**
 * Collects annotations from prototypes and stores them on target (instance)
 */


function collectStoredAnnotations(target) {
  if (!hasProp(target, storedAnnotationsSymbol)) {
    if (NODE_ENV !== "production" && !target[storedAnnotationsSymbol]) {
      die("No annotations were passed to makeObservable, but no decorated members have been found either");
    } // We need a copy as we will remove annotation from the list once it's applied.


    addHiddenProp(target, storedAnnotationsSymbol, _extends({}, target[storedAnnotationsSymbol]));
  }

  return target[storedAnnotationsSymbol];
}

var $mobx = /*#__PURE__*/Symbol("mobx administration");
exports.$mobx = $mobx;

var Atom = /*#__PURE__*/function () {
  // for effective unobserving. BaseAtom has true, for extra optimization, so its onBecomeUnobserved never gets called, because it's not needed

  /**
   * Create a new atom. For debugging purposes it is recommended to give it a name.
   * The onBecomeObserved and onBecomeUnobserved callbacks can be used for resource management.
   */
  function Atom(name_) {
    if (name_ === void 0) {
      name_ = NODE_ENV !== "production" ? "Atom@" + getNextId() : "Atom";
    }

    this.name_ = void 0;
    this.isPendingUnobservation_ = false;
    this.isBeingObserved_ = false;
    this.observers_ = new Set();
    this.diffValue_ = 0;
    this.lastAccessedBy_ = 0;
    this.lowestObserverState_ = IDerivationState_.NOT_TRACKING_;
    this.onBOL = void 0;
    this.onBUOL = void 0;
    this.name_ = name_;
  } // onBecomeObservedListeners


  var _proto = Atom.prototype;

  _proto.onBO = function onBO() {
    if (this.onBOL) {
      this.onBOL.forEach(function (listener) {
        return listener();
      });
    }
  };

  _proto.onBUO = function onBUO() {
    if (this.onBUOL) {
      this.onBUOL.forEach(function (listener) {
        return listener();
      });
    }
  }
  /**
   * Invoke this method to notify mobx that your atom has been used somehow.
   * Returns true if there is currently a reactive context.
   */
  ;

  _proto.reportObserved = function reportObserved$1() {
    return reportObserved(this);
  }
  /**
   * Invoke this method _after_ this method has changed to signal mobx that all its observers should invalidate.
   */
  ;

  _proto.reportChanged = function reportChanged() {
    startBatch();
    propagateChanged(this);
    endBatch();
  };

  _proto.toString = function toString() {
    return this.name_;
  };

  return Atom;
}();

var isAtom = /*#__PURE__*/createInstanceofPredicate("Atom", Atom);

function createAtom(name, onBecomeObservedHandler, onBecomeUnobservedHandler) {
  if (onBecomeObservedHandler === void 0) {
    onBecomeObservedHandler = noop;
  }

  if (onBecomeUnobservedHandler === void 0) {
    onBecomeUnobservedHandler = noop;
  }

  var atom = new Atom(name); // default `noop` listener will not initialize the hook Set

  if (onBecomeObservedHandler !== noop) {
    onBecomeObserved(atom, onBecomeObservedHandler);
  }

  if (onBecomeUnobservedHandler !== noop) {
    onBecomeUnobserved(atom, onBecomeUnobservedHandler);
  }

  return atom;
}

function identityComparer(a, b) {
  return a === b;
}

function structuralComparer(a, b) {
  return deepEqual(a, b);
}

function shallowComparer(a, b) {
  return deepEqual(a, b, 1);
}

function defaultComparer(a, b) {
  return Object.is(a, b);
}

var comparer = {
  identity: identityComparer,
  structural: structuralComparer,
  "default": defaultComparer,
  shallow: shallowComparer
};
exports.comparer = comparer;

function deepEnhancer(v, _, name) {
  // it is an observable already, done
  if (isObservable(v)) return v; // something that can be converted and mutated?

  if (Array.isArray(v)) return observable.array(v, {
    name: name
  });
  if (isPlainObject(v)) return observable.object(v, undefined, {
    name: name
  });
  if (isES6Map(v)) return observable.map(v, {
    name: name
  });
  if (isES6Set(v)) return observable.set(v, {
    name: name
  });

  if (typeof v === "function" && !isAction(v) && !isFlow(v)) {
    if (isGenerator(v)) {
      return flow(v);
    } else {
      return autoAction(name, v);
    }
  }

  return v;
}

function shallowEnhancer(v, _, name) {
  if (v === undefined || v === null) return v;
  if (isObservableObject(v) || isObservableArray(v) || isObservableMap(v) || isObservableSet(v)) return v;
  if (Array.isArray(v)) return observable.array(v, {
    name: name,
    deep: false
  });
  if (isPlainObject(v)) return observable.object(v, undefined, {
    name: name,
    deep: false
  });
  if (isES6Map(v)) return observable.map(v, {
    name: name,
    deep: false
  });
  if (isES6Set(v)) return observable.set(v, {
    name: name,
    deep: false
  });
  if (NODE_ENV !== "production") die("The shallow modifier / decorator can only used in combination with arrays, objects, maps and sets");
}

function referenceEnhancer(newValue) {
  // never turn into an observable
  return newValue;
}

function refStructEnhancer(v, oldValue) {
  if (NODE_ENV !== "production" && isObservable(v)) die("observable.struct should not be used with observable values");
  if (deepEqual(v, oldValue)) return oldValue;
  return v;
}

var OVERRIDE = "override";
var override = /*#__PURE__*/createDecoratorAnnotation({
  annotationType_: OVERRIDE,
  make_: make_,
  extend_: extend_
});
exports.override = override;

function isOverride(annotation) {
  return annotation.annotationType_ === OVERRIDE;
}

function make_(adm, key) {
  // Must not be plain object
  if (NODE_ENV !== "production" && adm.isPlainObject_) {
    die("Cannot apply '" + this.annotationType_ + "' to '" + adm.name_ + "." + key.toString() + "':" + ("\n'" + this.annotationType_ + "' cannot be used on plain objects."));
  } // Must override something


  if (NODE_ENV !== "production" && !hasProp(adm.appliedAnnotations_, key)) {
    die("'" + adm.name_ + "." + key.toString() + "' is annotated with '" + this.annotationType_ + "', " + "but no such annotated member was found on prototype.");
  }

  return 0
  /* Cancel */
  ;
}

function extend_(adm, key, descriptor, proxyTrap) {
  die("'" + this.annotationType_ + "' can only be used with 'makeObservable'");
}

function createActionAnnotation(name, options) {
  return {
    annotationType_: name,
    options_: options,
    make_: make_$1,
    extend_: extend_$1
  };
}

function make_$1(adm, key, descriptor, source) {
  var _this$options_; // bound


  if ((_this$options_ = this.options_) == null ? void 0 : _this$options_.bound) {
    return this.extend_(adm, key, descriptor, false) === null ? 0
    /* Cancel */
    : 1
    /* Break */
    ;
  } // own


  if (source === adm.target_) {
    return this.extend_(adm, key, descriptor, false) === null ? 0
    /* Cancel */
    : 2
    /* Continue */
    ;
  } // prototype


  if (isAction(descriptor.value)) {
    // A prototype could have been annotated already by other constructor,
    // rest of the proto chain must be annotated already
    return 1
    /* Break */
    ;
  }

  var actionDescriptor = createActionDescriptor(adm, this, key, descriptor, false);
  defineProperty(source, key, actionDescriptor);
  return 2
  /* Continue */
  ;
}

function extend_$1(adm, key, descriptor, proxyTrap) {
  var actionDescriptor = createActionDescriptor(adm, this, key, descriptor);
  return adm.defineProperty_(key, actionDescriptor, proxyTrap);
}

function assertActionDescriptor(adm, _ref, key, _ref2) {
  var annotationType_ = _ref.annotationType_;
  var value = _ref2.value;

  if (NODE_ENV !== "production" && !isFunction(value)) {
    die("Cannot apply '" + annotationType_ + "' to '" + adm.name_ + "." + key.toString() + "':" + ("\n'" + annotationType_ + "' can only be used on properties with a function value."));
  }
}

function createActionDescriptor(adm, annotation, key, descriptor, // provides ability to disable safeDescriptors for prototypes
safeDescriptors) {
  var _annotation$options_, _annotation$options_$, _annotation$options_2, _annotation$options_$2, _annotation$options_3;

  if (safeDescriptors === void 0) {
    safeDescriptors = globalState.safeDescriptors;
  }

  assertActionDescriptor(adm, annotation, key, descriptor);
  var value = descriptor.value;

  if ((_annotation$options_ = annotation.options_) == null ? void 0 : _annotation$options_.bound) {
    var _adm$proxy_;

    value = value.bind((_adm$proxy_ = adm.proxy_) != null ? _adm$proxy_ : adm.target_);
  }

  return {
    value: createAction((_annotation$options_$ = (_annotation$options_2 = annotation.options_) == null ? void 0 : _annotation$options_2.name) != null ? _annotation$options_$ : key.toString(), value, (_annotation$options_$2 = (_annotation$options_3 = annotation.options_) == null ? void 0 : _annotation$options_3.autoAction) != null ? _annotation$options_$2 : false),
    // Non-configurable for classes
    // prevents accidental field redefinition in subclass
    configurable: safeDescriptors ? adm.isPlainObject_ : true,
    // https://github.com/mobxjs/mobx/pull/2641#issuecomment-737292058
    enumerable: false,
    // Non-obsevable, therefore non-writable
    // Also prevents rewriting in subclass constructor
    writable: safeDescriptors ? false : true
  };
}

function createFlowAnnotation(name, options) {
  return {
    annotationType_: name,
    options_: options,
    make_: make_$2,
    extend_: extend_$2
  };
}

function make_$2(adm, key, descriptor, source) {
  var _this$options_; // own


  if (source === adm.target_) {
    return this.extend_(adm, key, descriptor, false) === null ? 0
    /* Cancel */
    : 2
    /* Continue */
    ;
  } // prototype
  // bound - must annotate protos to support super.flow()


  if (((_this$options_ = this.options_) == null ? void 0 : _this$options_.bound) && !isFlow(adm.target_[key])) {
    if (this.extend_(adm, key, descriptor, false) === null) return 0
    /* Cancel */
    ;
  }

  if (isFlow(descriptor.value)) {
    // A prototype could have been annotated already by other constructor,
    // rest of the proto chain must be annotated already
    return 1
    /* Break */
    ;
  }

  var flowDescriptor = createFlowDescriptor(adm, this, key, descriptor, false, false);
  defineProperty(source, key, flowDescriptor);
  return 2
  /* Continue */
  ;
}

function extend_$2(adm, key, descriptor, proxyTrap) {
  var _this$options_2;

  var flowDescriptor = createFlowDescriptor(adm, this, key, descriptor, (_this$options_2 = this.options_) == null ? void 0 : _this$options_2.bound);
  return adm.defineProperty_(key, flowDescriptor, proxyTrap);
}

function assertFlowDescriptor(adm, _ref, key, _ref2) {
  var annotationType_ = _ref.annotationType_;
  var value = _ref2.value;

  if (NODE_ENV !== "production" && !isFunction(value)) {
    die("Cannot apply '" + annotationType_ + "' to '" + adm.name_ + "." + key.toString() + "':" + ("\n'" + annotationType_ + "' can only be used on properties with a generator function value."));
  }
}

function createFlowDescriptor(adm, annotation, key, descriptor, bound, // provides ability to disable safeDescriptors for prototypes
safeDescriptors) {
  if (safeDescriptors === void 0) {
    safeDescriptors = globalState.safeDescriptors;
  }

  assertFlowDescriptor(adm, annotation, key, descriptor);
  var value = descriptor.value;

  if (bound) {
    var _adm$proxy_;

    value = value.bind((_adm$proxy_ = adm.proxy_) != null ? _adm$proxy_ : adm.target_);
  }

  return {
    value: flow(value),
    // Non-configurable for classes
    // prevents accidental field redefinition in subclass
    configurable: safeDescriptors ? adm.isPlainObject_ : true,
    // https://github.com/mobxjs/mobx/pull/2641#issuecomment-737292058
    enumerable: false,
    // Non-obsevable, therefore non-writable
    // Also prevents rewriting in subclass constructor
    writable: safeDescriptors ? false : true
  };
}

function createComputedAnnotation(name, options) {
  return {
    annotationType_: name,
    options_: options,
    make_: make_$3,
    extend_: extend_$3
  };
}

function make_$3(adm, key, descriptor) {
  return this.extend_(adm, key, descriptor, false) === null ? 0
  /* Cancel */
  : 1
  /* Break */
  ;
}

function extend_$3(adm, key, descriptor, proxyTrap) {
  assertComputedDescriptor(adm, this, key, descriptor);
  return adm.defineComputedProperty_(key, _extends({}, this.options_, {
    get: descriptor.get,
    set: descriptor.set
  }), proxyTrap);
}

function assertComputedDescriptor(adm, _ref, key, _ref2) {
  var annotationType_ = _ref.annotationType_;
  var get = _ref2.get;

  if (NODE_ENV !== "production" && !get) {
    die("Cannot apply '" + annotationType_ + "' to '" + adm.name_ + "." + key.toString() + "':" + ("\n'" + annotationType_ + "' can only be used on getter(+setter) properties."));
  }
}

function createObservableAnnotation(name, options) {
  return {
    annotationType_: name,
    options_: options,
    make_: make_$4,
    extend_: extend_$4
  };
}

function make_$4(adm, key, descriptor) {
  return this.extend_(adm, key, descriptor, false) === null ? 0
  /* Cancel */
  : 1
  /* Break */
  ;
}

function extend_$4(adm, key, descriptor, proxyTrap) {
  var _this$options_$enhanc, _this$options_;

  assertObservableDescriptor(adm, this, key, descriptor);
  return adm.defineObservableProperty_(key, descriptor.value, (_this$options_$enhanc = (_this$options_ = this.options_) == null ? void 0 : _this$options_.enhancer) != null ? _this$options_$enhanc : deepEnhancer, proxyTrap);
}

function assertObservableDescriptor(adm, _ref, key, descriptor) {
  var annotationType_ = _ref.annotationType_;

  if (NODE_ENV !== "production" && !("value" in descriptor)) {
    die("Cannot apply '" + annotationType_ + "' to '" + adm.name_ + "." + key.toString() + "':" + ("\n'" + annotationType_ + "' cannot be used on getter/setter properties"));
  }
}

var AUTO = "true";
var autoAnnotation = /*#__PURE__*/createAutoAnnotation();

function createAutoAnnotation(options) {
  return {
    annotationType_: AUTO,
    options_: options,
    make_: make_$5,
    extend_: extend_$5
  };
}

function make_$5(adm, key, descriptor, source) {
  var _this$options_3, _this$options_4; // getter -> computed


  if (descriptor.get) {
    return computed.make_(adm, key, descriptor, source);
  } // lone setter -> action setter


  if (descriptor.set) {
    // TODO make action applicable to setter and delegate to action.make_
    var set = createAction(key.toString(), descriptor.set); // own

    if (source === adm.target_) {
      return adm.defineProperty_(key, {
        configurable: globalState.safeDescriptors ? adm.isPlainObject_ : true,
        set: set
      }) === null ? 0
      /* Cancel */
      : 2
      /* Continue */
      ;
    } // proto


    defineProperty(source, key, {
      configurable: true,
      set: set
    });
    return 2
    /* Continue */
    ;
  } // function on proto -> autoAction/flow


  if (source !== adm.target_ && typeof descriptor.value === "function") {
    var _this$options_2;

    if (isGenerator(descriptor.value)) {
      var _this$options_;

      var flowAnnotation = ((_this$options_ = this.options_) == null ? void 0 : _this$options_.autoBind) ? flow.bound : flow;
      return flowAnnotation.make_(adm, key, descriptor, source);
    }

    var actionAnnotation = ((_this$options_2 = this.options_) == null ? void 0 : _this$options_2.autoBind) ? autoAction.bound : autoAction;
    return actionAnnotation.make_(adm, key, descriptor, source);
  } // other -> observable
  // Copy props from proto as well, see test:
  // "decorate should work with Object.create"


  var observableAnnotation = ((_this$options_3 = this.options_) == null ? void 0 : _this$options_3.deep) === false ? observable.ref : observable; // if function respect autoBind option

  if (typeof descriptor.value === "function" && ((_this$options_4 = this.options_) == null ? void 0 : _this$options_4.autoBind)) {
    var _adm$proxy_;

    descriptor.value = descriptor.value.bind((_adm$proxy_ = adm.proxy_) != null ? _adm$proxy_ : adm.target_);
  }

  return observableAnnotation.make_(adm, key, descriptor, source);
}

function extend_$5(adm, key, descriptor, proxyTrap) {
  var _this$options_5, _this$options_6; // getter -> computed


  if (descriptor.get) {
    return computed.extend_(adm, key, descriptor, proxyTrap);
  } // lone setter -> action setter


  if (descriptor.set) {
    // TODO make action applicable to setter and delegate to action.extend_
    return adm.defineProperty_(key, {
      configurable: globalState.safeDescriptors ? adm.isPlainObject_ : true,
      set: createAction(key.toString(), descriptor.set)
    }, proxyTrap);
  } // other -> observable
  // if function respect autoBind option


  if (typeof descriptor.value === "function" && ((_this$options_5 = this.options_) == null ? void 0 : _this$options_5.autoBind)) {
    var _adm$proxy_2;

    descriptor.value = descriptor.value.bind((_adm$proxy_2 = adm.proxy_) != null ? _adm$proxy_2 : adm.target_);
  }

  var observableAnnotation = ((_this$options_6 = this.options_) == null ? void 0 : _this$options_6.deep) === false ? observable.ref : observable;
  return observableAnnotation.extend_(adm, key, descriptor, proxyTrap);
} // in the majority of cases


var defaultCreateObservableOptions = {
  deep: true,
  name: undefined,
  defaultDecorator: undefined,
  proxy: true
};
Object.freeze(defaultCreateObservableOptions);

function asCreateObservableOptions(thing) {
  return thing || defaultCreateObservableOptions;
}

var observableAnnotation = /*#__PURE__*/createObservableAnnotation("observable");
var observableRefAnnotation = /*#__PURE__*/createObservableAnnotation("observable.ref", {
  enhancer: referenceEnhancer
});
var observableShallowAnnotation = /*#__PURE__*/createObservableAnnotation("observable.shallow", {
  enhancer: shallowEnhancer
});
var observableStructAnnotation = /*#__PURE__*/createObservableAnnotation("observable.struct", {
  enhancer: refStructEnhancer
});
var observableDecoratorAnnotation = /*#__PURE__*/createDecoratorAnnotation(observableAnnotation);

function getEnhancerFromOptions(options) {
  return options.deep === true ? deepEnhancer : options.deep === false ? referenceEnhancer : getEnhancerFromAnnotation(options.defaultDecorator);
}

function getAnnotationFromOptions(options) {
  var _options$defaultDecor;

  return options ? (_options$defaultDecor = options.defaultDecorator) != null ? _options$defaultDecor : createAutoAnnotation(options) : undefined;
}

function getEnhancerFromAnnotation(annotation) {
  var _annotation$options_$, _annotation$options_;

  return !annotation ? deepEnhancer : (_annotation$options_$ = (_annotation$options_ = annotation.options_) == null ? void 0 : _annotation$options_.enhancer) != null ? _annotation$options_$ : deepEnhancer;
}
/**
 * Turns an object, array or function into a reactive structure.
 * @param v the value which should become observable.
 */


function createObservable(v, arg2, arg3) {
  // @observable someProp;
  if (isStringish(arg2)) {
    storeAnnotation(v, arg2, observableAnnotation);
    return;
  } // already observable - ignore


  if (isObservable(v)) return v; // plain object

  if (isPlainObject(v)) return observable.object(v, arg2, arg3); // Array

  if (Array.isArray(v)) return observable.array(v, arg2); // Map

  if (isES6Map(v)) return observable.map(v, arg2); // Set

  if (isES6Set(v)) return observable.set(v, arg2); // other object - ignore

  if (typeof v === "object" && v !== null) return v; // anything else

  return observable.box(v, arg2);
}

Object.assign(createObservable, observableDecoratorAnnotation);
var observableFactories = {
  box: function box(value, options) {
    var o = asCreateObservableOptions(options);
    return new ObservableValue(value, getEnhancerFromOptions(o), o.name, true, o.equals);
  },
  array: function array(initialValues, options) {
    var o = asCreateObservableOptions(options);
    return (globalState.useProxies === false || o.proxy === false ? createLegacyArray : createObservableArray)(initialValues, getEnhancerFromOptions(o), o.name);
  },
  map: function map(initialValues, options) {
    var o = asCreateObservableOptions(options);
    return new ObservableMap(initialValues, getEnhancerFromOptions(o), o.name);
  },
  set: function set(initialValues, options) {
    var o = asCreateObservableOptions(options);
    return new ObservableSet(initialValues, getEnhancerFromOptions(o), o.name);
  },
  object: function object(props, decorators, options) {
    return extendObservable(globalState.useProxies === false || (options == null ? void 0 : options.proxy) === false ? asObservableObject({}, options) : asDynamicObservableObject({}, options), props, decorators);
  },
  ref: /*#__PURE__*/createDecoratorAnnotation(observableRefAnnotation),
  shallow: /*#__PURE__*/createDecoratorAnnotation(observableShallowAnnotation),
  deep: observableDecoratorAnnotation,
  struct: /*#__PURE__*/createDecoratorAnnotation(observableStructAnnotation)
}; // eslint-disable-next-line

var observable = /*#__PURE__*/assign(createObservable, observableFactories);
exports.observable = observable;
var COMPUTED = "computed";
var COMPUTED_STRUCT = "computed.struct";
var computedAnnotation = /*#__PURE__*/createComputedAnnotation(COMPUTED);
var computedStructAnnotation = /*#__PURE__*/createComputedAnnotation(COMPUTED_STRUCT, {
  equals: comparer.structural
});
/**
 * Decorator for class properties: @computed get value() { return expr; }.
 * For legacy purposes also invokable as ES5 observable created: `computed(() => expr)`;
 */

var computed = function computed(arg1, arg2) {
  if (isStringish(arg2)) {
    // @computed
    return storeAnnotation(arg1, arg2, computedAnnotation);
  }

  if (isPlainObject(arg1)) {
    // @computed({ options })
    return createDecoratorAnnotation(createComputedAnnotation(COMPUTED, arg1));
  } // computed(expr, options?)


  if (NODE_ENV !== "production") {
    if (!isFunction(arg1)) die("First argument to `computed` should be an expression.");
    if (isFunction(arg2)) die("A setter as second argument is no longer supported, use `{ set: fn }` option instead");
  }

  var opts = isPlainObject(arg2) ? arg2 : {};
  opts.get = arg1;
  opts.name || (opts.name = arg1.name || "");
  /* for generated name */

  return new ComputedValue(opts);
};

exports.computed = computed;
Object.assign(computed, computedAnnotation);
computed.struct = /*#__PURE__*/createDecoratorAnnotation(computedStructAnnotation);

var _getDescriptor$config, _getDescriptor; // mobx versions


var currentActionId = 0;
var nextActionId = 1;
var isFunctionNameConfigurable = (_getDescriptor$config = (_getDescriptor = /*#__PURE__*/getDescriptor(function () {}, "name")) == null ? void 0 : _getDescriptor.configurable) != null ? _getDescriptor$config : false; // we can safely recycle this object

var tmpNameDescriptor = {
  value: "action",
  configurable: true,
  writable: false,
  enumerable: false
};

function createAction(actionName, fn, autoAction, ref) {
  if (autoAction === void 0) {
    autoAction = false;
  }

  if (NODE_ENV !== "production") {
    if (!isFunction(fn)) die("`action` can only be invoked on functions");
    if (typeof actionName !== "string" || !actionName) die("actions should have valid names, got: '" + actionName + "'");
  }

  function res() {
    return executeAction(actionName, autoAction, fn, ref || this, arguments);
  }

  res.isMobxAction = true;

  if (isFunctionNameConfigurable) {
    tmpNameDescriptor.value = actionName;
    Object.defineProperty(res, "name", tmpNameDescriptor);
  }

  return res;
}

function executeAction(actionName, canRunAsDerivation, fn, scope, args) {
  var runInfo = _startAction(actionName, canRunAsDerivation, scope, args);

  try {
    return fn.apply(scope, args);
  } catch (err) {
    runInfo.error_ = err;
    throw err;
  } finally {
    _endAction(runInfo);
  }
}

function _startAction(actionName, canRunAsDerivation, // true for autoAction
scope, args) {
  var notifySpy_ = NODE_ENV !== "production" && isSpyEnabled() && !!actionName;
  var startTime_ = 0;

  if (NODE_ENV !== "production" && notifySpy_) {
    startTime_ = Date.now();
    var flattenedArgs = args ? Array.from(args) : EMPTY_ARRAY;
    spyReportStart({
      type: ACTION,
      name: actionName,
      object: scope,
      arguments: flattenedArgs
    });
  }

  var prevDerivation_ = globalState.trackingDerivation;
  var runAsAction = !canRunAsDerivation || !prevDerivation_;
  startBatch();
  var prevAllowStateChanges_ = globalState.allowStateChanges; // by default preserve previous allow

  if (runAsAction) {
    untrackedStart();
    prevAllowStateChanges_ = allowStateChangesStart(true);
  }

  var prevAllowStateReads_ = allowStateReadsStart(true);
  var runInfo = {
    runAsAction_: runAsAction,
    prevDerivation_: prevDerivation_,
    prevAllowStateChanges_: prevAllowStateChanges_,
    prevAllowStateReads_: prevAllowStateReads_,
    notifySpy_: notifySpy_,
    startTime_: startTime_,
    actionId_: nextActionId++,
    parentActionId_: currentActionId
  };
  currentActionId = runInfo.actionId_;
  return runInfo;
}

function _endAction(runInfo) {
  if (currentActionId !== runInfo.actionId_) {
    die(30);
  }

  currentActionId = runInfo.parentActionId_;

  if (runInfo.error_ !== undefined) {
    globalState.suppressReactionErrors = true;
  }

  allowStateChangesEnd(runInfo.prevAllowStateChanges_);
  allowStateReadsEnd(runInfo.prevAllowStateReads_);
  endBatch();
  if (runInfo.runAsAction_) untrackedEnd(runInfo.prevDerivation_);

  if (NODE_ENV !== "production" && runInfo.notifySpy_) {
    spyReportEnd({
      time: Date.now() - runInfo.startTime_
    });
  }

  globalState.suppressReactionErrors = false;
}

function allowStateChanges(allowStateChanges, func) {
  var prev = allowStateChangesStart(allowStateChanges);

  try {
    return func();
  } finally {
    allowStateChangesEnd(prev);
  }
}

function allowStateChangesStart(allowStateChanges) {
  var prev = globalState.allowStateChanges;
  globalState.allowStateChanges = allowStateChanges;
  return prev;
}

function allowStateChangesEnd(prev) {
  globalState.allowStateChanges = prev;
}

var _Symbol$toPrimitive;

var CREATE = "create";
_Symbol$toPrimitive = Symbol.toPrimitive;

var ObservableValue = /*#__PURE__*/function (_Atom) {
  _inheritsLoose(ObservableValue, _Atom);

  function ObservableValue(value, enhancer, name_, notifySpy, equals) {
    var _this;

    if (name_ === void 0) {
      name_ = NODE_ENV !== "production" ? "ObservableValue@" + getNextId() : "ObservableValue";
    }

    if (notifySpy === void 0) {
      notifySpy = true;
    }

    if (equals === void 0) {
      equals = comparer["default"];
    }

    _this = _Atom.call(this, name_) || this;
    _this.enhancer = void 0;
    _this.name_ = void 0;
    _this.equals = void 0;
    _this.hasUnreportedChange_ = false;
    _this.interceptors_ = void 0;
    _this.changeListeners_ = void 0;
    _this.value_ = void 0;
    _this.dehancer = void 0;
    _this.enhancer = enhancer;
    _this.name_ = name_;
    _this.equals = equals;
    _this.value_ = enhancer(value, undefined, name_);

    if (NODE_ENV !== "production" && notifySpy && isSpyEnabled()) {
      // only notify spy if this is a stand-alone observable
      spyReport({
        type: CREATE,
        object: _assertThisInitialized(_this),
        observableKind: "value",
        debugObjectName: _this.name_,
        newValue: "" + _this.value_
      });
    }

    return _this;
  }

  var _proto = ObservableValue.prototype;

  _proto.dehanceValue = function dehanceValue(value) {
    if (this.dehancer !== undefined) return this.dehancer(value);
    return value;
  };

  _proto.set = function set(newValue) {
    var oldValue = this.value_;
    newValue = this.prepareNewValue_(newValue);

    if (newValue !== globalState.UNCHANGED) {
      var notifySpy = isSpyEnabled();

      if (NODE_ENV !== "production" && notifySpy) {
        spyReportStart({
          type: UPDATE,
          object: this,
          observableKind: "value",
          debugObjectName: this.name_,
          newValue: newValue,
          oldValue: oldValue
        });
      }

      this.setNewValue_(newValue);
      if (NODE_ENV !== "production" && notifySpy) spyReportEnd();
    }
  };

  _proto.prepareNewValue_ = function prepareNewValue_(newValue) {
    checkIfStateModificationsAreAllowed(this);

    if (hasInterceptors(this)) {
      var change = interceptChange(this, {
        object: this,
        type: UPDATE,
        newValue: newValue
      });
      if (!change) return globalState.UNCHANGED;
      newValue = change.newValue;
    } // apply modifier


    newValue = this.enhancer(newValue, this.value_, this.name_);
    return this.equals(this.value_, newValue) ? globalState.UNCHANGED : newValue;
  };

  _proto.setNewValue_ = function setNewValue_(newValue) {
    var oldValue = this.value_;
    this.value_ = newValue;
    this.reportChanged();

    if (hasListeners(this)) {
      notifyListeners(this, {
        type: UPDATE,
        object: this,
        newValue: newValue,
        oldValue: oldValue
      });
    }
  };

  _proto.get = function get() {
    this.reportObserved();
    return this.dehanceValue(this.value_);
  };

  _proto.intercept_ = function intercept_(handler) {
    return registerInterceptor(this, handler);
  };

  _proto.observe_ = function observe_(listener, fireImmediately) {
    if (fireImmediately) listener({
      observableKind: "value",
      debugObjectName: this.name_,
      object: this,
      type: UPDATE,
      newValue: this.value_,
      oldValue: undefined
    });
    return registerListener(this, listener);
  };

  _proto.raw = function raw() {
    // used by MST ot get undehanced value
    return this.value_;
  };

  _proto.toJSON = function toJSON() {
    return this.get();
  };

  _proto.toString = function toString() {
    return this.name_ + "[" + this.value_ + "]";
  };

  _proto.valueOf = function valueOf() {
    return toPrimitive(this.get());
  };

  _proto[_Symbol$toPrimitive] = function () {
    return this.valueOf();
  };

  return ObservableValue;
}(Atom);

var isObservableValue = /*#__PURE__*/createInstanceofPredicate("ObservableValue", ObservableValue);
exports.isBoxedObservable = isObservableValue;

var _Symbol$toPrimitive$1;
/**
 * A node in the state dependency root that observes other nodes, and can be observed itself.
 *
 * ComputedValue will remember the result of the computation for the duration of the batch, or
 * while being observed.
 *
 * During this time it will recompute only when one of its direct dependencies changed,
 * but only when it is being accessed with `ComputedValue.get()`.
 *
 * Implementation description:
 * 1. First time it's being accessed it will compute and remember result
 *    give back remembered result until 2. happens
 * 2. First time any deep dependency change, propagate POSSIBLY_STALE to all observers, wait for 3.
 * 3. When it's being accessed, recompute if any shallow dependency changed.
 *    if result changed: propagate STALE to all observers, that were POSSIBLY_STALE from the last step.
 *    go to step 2. either way
 *
 * If at any point it's outside batch and it isn't observed: reset everything and go to 1.
 */


_Symbol$toPrimitive$1 = Symbol.toPrimitive;

var ComputedValue = /*#__PURE__*/function () {
  // nodes we are looking at. Our value depends on these nodes
  // during tracking it's an array with new observed observers
  // to check for cycles
  // N.B: unminified as it is used by MST

  /**
   * Create a new computed value based on a function expression.
   *
   * The `name` property is for debug purposes only.
   *
   * The `equals` property specifies the comparer function to use to determine if a newly produced
   * value differs from the previous value. Two comparers are provided in the library; `defaultComparer`
   * compares based on identity comparison (===), and `structuralComparer` deeply compares the structure.
   * Structural comparison can be convenient if you always produce a new aggregated object and
   * don't want to notify observers if it is structurally the same.
   * This is useful for working with vectors, mouse coordinates etc.
   */
  function ComputedValue(options) {
    this.dependenciesState_ = IDerivationState_.NOT_TRACKING_;
    this.observing_ = [];
    this.newObserving_ = null;
    this.isBeingObserved_ = false;
    this.isPendingUnobservation_ = false;
    this.observers_ = new Set();
    this.diffValue_ = 0;
    this.runId_ = 0;
    this.lastAccessedBy_ = 0;
    this.lowestObserverState_ = IDerivationState_.UP_TO_DATE_;
    this.unboundDepsCount_ = 0;
    this.value_ = new CaughtException(null);
    this.name_ = void 0;
    this.triggeredBy_ = void 0;
    this.isComputing_ = false;
    this.isRunningSetter_ = false;
    this.derivation = void 0;
    this.setter_ = void 0;
    this.isTracing_ = TraceMode.NONE;
    this.scope_ = void 0;
    this.equals_ = void 0;
    this.requiresReaction_ = void 0;
    this.keepAlive_ = void 0;
    this.onBOL = void 0;
    this.onBUOL = void 0;
    if (!options.get) die(31);
    this.derivation = options.get;
    this.name_ = options.name || (NODE_ENV !== "production" ? "ComputedValue@" + getNextId() : "ComputedValue");

    if (options.set) {
      this.setter_ = createAction(NODE_ENV !== "production" ? this.name_ + "-setter" : "ComputedValue-setter", options.set);
    }

    this.equals_ = options.equals || (options.compareStructural || options.struct ? comparer.structural : comparer["default"]);
    this.scope_ = options.context;
    this.requiresReaction_ = !!options.requiresReaction;
    this.keepAlive_ = !!options.keepAlive;
  }

  var _proto = ComputedValue.prototype;

  _proto.onBecomeStale_ = function onBecomeStale_() {
    propagateMaybeChanged(this);
  };

  _proto.onBO = function onBO() {
    if (this.onBOL) {
      this.onBOL.forEach(function (listener) {
        return listener();
      });
    }
  };

  _proto.onBUO = function onBUO() {
    if (this.onBUOL) {
      this.onBUOL.forEach(function (listener) {
        return listener();
      });
    }
  }
  /**
   * Returns the current value of this computed value.
   * Will evaluate its computation first if needed.
   */
  ;

  _proto.get = function get() {
    if (this.isComputing_) die(32, this.name_, this.derivation);

    if (globalState.inBatch === 0 && // !globalState.trackingDerivatpion &&
    this.observers_.size === 0 && !this.keepAlive_) {
      if (shouldCompute(this)) {
        this.warnAboutUntrackedRead_();
        startBatch(); // See perf test 'computed memoization'

        this.value_ = this.computeValue_(false);
        endBatch();
      }
    } else {
      reportObserved(this);

      if (shouldCompute(this)) {
        var prevTrackingContext = globalState.trackingContext;
        if (this.keepAlive_ && !prevTrackingContext) globalState.trackingContext = this;
        if (this.trackAndCompute()) propagateChangeConfirmed(this);
        globalState.trackingContext = prevTrackingContext;
      }
    }

    var result = this.value_;
    if (isCaughtException(result)) throw result.cause;
    return result;
  };

  _proto.set = function set(value) {
    if (this.setter_) {
      if (this.isRunningSetter_) die(33, this.name_);
      this.isRunningSetter_ = true;

      try {
        this.setter_.call(this.scope_, value);
      } finally {
        this.isRunningSetter_ = false;
      }
    } else die(34, this.name_);
  };

  _proto.trackAndCompute = function trackAndCompute() {
    // N.B: unminified as it is used by MST
    var oldValue = this.value_;
    var wasSuspended =
    /* see #1208 */
    this.dependenciesState_ === IDerivationState_.NOT_TRACKING_;
    var newValue = this.computeValue_(true);

    if (NODE_ENV !== "production" && isSpyEnabled()) {
      spyReport({
        observableKind: "computed",
        debugObjectName: this.name_,
        object: this.scope_,
        type: "update",
        oldValue: this.value_,
        newValue: newValue
      });
    }

    var changed = wasSuspended || isCaughtException(oldValue) || isCaughtException(newValue) || !this.equals_(oldValue, newValue);

    if (changed) {
      this.value_ = newValue;
    }

    return changed;
  };

  _proto.computeValue_ = function computeValue_(track) {
    this.isComputing_ = true; // don't allow state changes during computation

    var prev = allowStateChangesStart(false);
    var res;

    if (track) {
      res = trackDerivedFunction(this, this.derivation, this.scope_);
    } else {
      if (globalState.disableErrorBoundaries === true) {
        res = this.derivation.call(this.scope_);
      } else {
        try {
          res = this.derivation.call(this.scope_);
        } catch (e) {
          res = new CaughtException(e);
        }
      }
    }

    allowStateChangesEnd(prev);
    this.isComputing_ = false;
    return res;
  };

  _proto.suspend_ = function suspend_() {
    if (!this.keepAlive_) {
      clearObserving(this);
      this.value_ = undefined; // don't hold on to computed value!
    }
  };

  _proto.observe_ = function observe_(listener, fireImmediately) {
    var _this = this;

    var firstTime = true;
    var prevValue = undefined;
    return autorun(function () {
      // TODO: why is this in a different place than the spyReport() function? in all other observables it's called in the same place
      var newValue = _this.get();

      if (!firstTime || fireImmediately) {
        var prevU = untrackedStart();
        listener({
          observableKind: "computed",
          debugObjectName: _this.name_,
          type: UPDATE,
          object: _this,
          newValue: newValue,
          oldValue: prevValue
        });
        untrackedEnd(prevU);
      }

      firstTime = false;
      prevValue = newValue;
    });
  };

  _proto.warnAboutUntrackedRead_ = function warnAboutUntrackedRead_() {
    if (!(NODE_ENV !== "production")) return;

    if (this.requiresReaction_ === true) {
      die("[mobx] Computed value " + this.name_ + " is read outside a reactive context");
    }

    if (this.isTracing_ !== TraceMode.NONE) {
      console.log("[mobx.trace] '" + this.name_ + "' is being read outside a reactive context. Doing a full recompute");
    }

    if (globalState.computedRequiresReaction) {
      console.warn("[mobx] Computed value " + this.name_ + " is being read outside a reactive context. Doing a full recompute");
    }
  };

  _proto.toString = function toString() {
    return this.name_ + "[" + this.derivation.toString() + "]";
  };

  _proto.valueOf = function valueOf() {
    return toPrimitive(this.get());
  };

  _proto[_Symbol$toPrimitive$1] = function () {
    return this.valueOf();
  };

  return ComputedValue;
}();

var isComputedValue = /*#__PURE__*/createInstanceofPredicate("ComputedValue", ComputedValue);
var IDerivationState_;

(function (IDerivationState_) {
  // before being run or (outside batch and not being observed)
  // at this point derivation is not holding any data about dependency tree
  IDerivationState_[IDerivationState_["NOT_TRACKING_"] = -1] = "NOT_TRACKING_"; // no shallow dependency changed since last computation
  // won't recalculate derivation
  // this is what makes mobx fast

  IDerivationState_[IDerivationState_["UP_TO_DATE_"] = 0] = "UP_TO_DATE_"; // some deep dependency changed, but don't know if shallow dependency changed
  // will require to check first if UP_TO_DATE or POSSIBLY_STALE
  // currently only ComputedValue will propagate POSSIBLY_STALE
  //
  // having this state is second big optimization:
  // don't have to recompute on every dependency change, but only when it's needed

  IDerivationState_[IDerivationState_["POSSIBLY_STALE_"] = 1] = "POSSIBLY_STALE_"; // A shallow dependency has changed since last computation and the derivation
  // will need to recompute when it's needed next.

  IDerivationState_[IDerivationState_["STALE_"] = 2] = "STALE_";
})(IDerivationState_ || (IDerivationState_ = {}));

var TraceMode;

(function (TraceMode) {
  TraceMode[TraceMode["NONE"] = 0] = "NONE";
  TraceMode[TraceMode["LOG"] = 1] = "LOG";
  TraceMode[TraceMode["BREAK"] = 2] = "BREAK";
})(TraceMode || (TraceMode = {}));

var CaughtException = function CaughtException(cause) {
  this.cause = void 0;
  this.cause = cause; // Empty
};

function isCaughtException(e) {
  return e instanceof CaughtException;
}
/**
 * Finds out whether any dependency of the derivation has actually changed.
 * If dependenciesState is 1 then it will recalculate dependencies,
 * if any dependency changed it will propagate it by changing dependenciesState to 2.
 *
 * By iterating over the dependencies in the same order that they were reported and
 * stopping on the first change, all the recalculations are only called for ComputedValues
 * that will be tracked by derivation. That is because we assume that if the first x
 * dependencies of the derivation doesn't change then the derivation should run the same way
 * up until accessing x-th dependency.
 */


function shouldCompute(derivation) {
  switch (derivation.dependenciesState_) {
    case IDerivationState_.UP_TO_DATE_:
      return false;

    case IDerivationState_.NOT_TRACKING_:
    case IDerivationState_.STALE_:
      return true;

    case IDerivationState_.POSSIBLY_STALE_:
      {
        // state propagation can occur outside of action/reactive context #2195
        var prevAllowStateReads = allowStateReadsStart(true);
        var prevUntracked = untrackedStart(); // no need for those computeds to be reported, they will be picked up in trackDerivedFunction.

        var obs = derivation.observing_,
            l = obs.length;

        for (var i = 0; i < l; i++) {
          var obj = obs[i];

          if (isComputedValue(obj)) {
            if (globalState.disableErrorBoundaries) {
              obj.get();
            } else {
              try {
                obj.get();
              } catch (e) {
                // we are not interested in the value *or* exception at this moment, but if there is one, notify all
                untrackedEnd(prevUntracked);
                allowStateReadsEnd(prevAllowStateReads);
                return true;
              }
            } // if ComputedValue `obj` actually changed it will be computed and propagated to its observers.
            // and `derivation` is an observer of `obj`
            // invariantShouldCompute(derivation)


            if (derivation.dependenciesState_ === IDerivationState_.STALE_) {
              untrackedEnd(prevUntracked);
              allowStateReadsEnd(prevAllowStateReads);
              return true;
            }
          }
        }

        changeDependenciesStateTo0(derivation);
        untrackedEnd(prevUntracked);
        allowStateReadsEnd(prevAllowStateReads);
        return false;
      }
  }
}

function isComputingDerivation() {
  return globalState.trackingDerivation !== null; // filter out actions inside computations
}

function checkIfStateModificationsAreAllowed(atom) {
  if (!(NODE_ENV !== "production")) {
    return;
  }

  var hasObservers = atom.observers_.size > 0; // Should not be possible to change observed state outside strict mode, except during initialization, see #563

  if (!globalState.allowStateChanges && (hasObservers || globalState.enforceActions === "always")) console.warn("[MobX] " + (globalState.enforceActions ? "Since strict-mode is enabled, changing (observed) observable values without using an action is not allowed. Tried to modify: " : "Side effects like changing state are not allowed at this point. Are you trying to modify state from, for example, a computed value or the render function of a React component? You can wrap side effects in 'runInAction' (or decorate functions with 'action') if needed. Tried to modify: ") + atom.name_);
}

function checkIfStateReadsAreAllowed(observable) {
  if (NODE_ENV !== "production" && !globalState.allowStateReads && globalState.observableRequiresReaction) {
    console.warn("[mobx] Observable " + observable.name_ + " being read outside a reactive context");
  }
}
/**
 * Executes the provided function `f` and tracks which observables are being accessed.
 * The tracking information is stored on the `derivation` object and the derivation is registered
 * as observer of any of the accessed observables.
 */


function trackDerivedFunction(derivation, f, context) {
  var prevAllowStateReads = allowStateReadsStart(true); // pre allocate array allocation + room for variation in deps
  // array will be trimmed by bindDependencies

  changeDependenciesStateTo0(derivation);
  derivation.newObserving_ = new Array(derivation.observing_.length + 100);
  derivation.unboundDepsCount_ = 0;
  derivation.runId_ = ++globalState.runId;
  var prevTracking = globalState.trackingDerivation;
  globalState.trackingDerivation = derivation;
  globalState.inBatch++;
  var result;

  if (globalState.disableErrorBoundaries === true) {
    result = f.call(context);
  } else {
    try {
      result = f.call(context);
    } catch (e) {
      result = new CaughtException(e);
    }
  }

  globalState.inBatch--;
  globalState.trackingDerivation = prevTracking;
  bindDependencies(derivation);
  warnAboutDerivationWithoutDependencies(derivation);
  allowStateReadsEnd(prevAllowStateReads);
  return result;
}

function warnAboutDerivationWithoutDependencies(derivation) {
  if (!(NODE_ENV !== "production")) return;
  if (derivation.observing_.length !== 0) return;

  if (globalState.reactionRequiresObservable || derivation.requiresObservable_) {
    console.warn("[mobx] Derivation " + derivation.name_ + " is created/updated without reading any observable value");
  }
}
/**
 * diffs newObserving with observing.
 * update observing to be newObserving with unique observables
 * notify observers that become observed/unobserved
 */


function bindDependencies(derivation) {
  // invariant(derivation.dependenciesState !== IDerivationState.NOT_TRACKING, "INTERNAL ERROR bindDependencies expects derivation.dependenciesState !== -1");
  var prevObserving = derivation.observing_;
  var observing = derivation.observing_ = derivation.newObserving_;
  var lowestNewObservingDerivationState = IDerivationState_.UP_TO_DATE_; // Go through all new observables and check diffValue: (this list can contain duplicates):
  //   0: first occurrence, change to 1 and keep it
  //   1: extra occurrence, drop it

  var i0 = 0,
      l = derivation.unboundDepsCount_;

  for (var i = 0; i < l; i++) {
    var dep = observing[i];

    if (dep.diffValue_ === 0) {
      dep.diffValue_ = 1;
      if (i0 !== i) observing[i0] = dep;
      i0++;
    } // Upcast is 'safe' here, because if dep is IObservable, `dependenciesState` will be undefined,
    // not hitting the condition


    if (dep.dependenciesState_ > lowestNewObservingDerivationState) {
      lowestNewObservingDerivationState = dep.dependenciesState_;
    }
  }

  observing.length = i0;
  derivation.newObserving_ = null; // newObserving shouldn't be needed outside tracking (statement moved down to work around FF bug, see #614)
  // Go through all old observables and check diffValue: (it is unique after last bindDependencies)
  //   0: it's not in new observables, unobserve it
  //   1: it keeps being observed, don't want to notify it. change to 0

  l = prevObserving.length;

  while (l--) {
    var _dep = prevObserving[l];

    if (_dep.diffValue_ === 0) {
      removeObserver(_dep, derivation);
    }

    _dep.diffValue_ = 0;
  } // Go through all new observables and check diffValue: (now it should be unique)
  //   0: it was set to 0 in last loop. don't need to do anything.
  //   1: it wasn't observed, let's observe it. set back to 0


  while (i0--) {
    var _dep2 = observing[i0];

    if (_dep2.diffValue_ === 1) {
      _dep2.diffValue_ = 0;
      addObserver(_dep2, derivation);
    }
  } // Some new observed derivations may become stale during this derivation computation
  // so they have had no chance to propagate staleness (#916)


  if (lowestNewObservingDerivationState !== IDerivationState_.UP_TO_DATE_) {
    derivation.dependenciesState_ = lowestNewObservingDerivationState;
    derivation.onBecomeStale_();
  }
}

function clearObserving(derivation) {
  // invariant(globalState.inBatch > 0, "INTERNAL ERROR clearObserving should be called only inside batch");
  var obs = derivation.observing_;
  derivation.observing_ = [];
  var i = obs.length;

  while (i--) {
    removeObserver(obs[i], derivation);
  }

  derivation.dependenciesState_ = IDerivationState_.NOT_TRACKING_;
}

function untracked(action) {
  var prev = untrackedStart();

  try {
    return action();
  } finally {
    untrackedEnd(prev);
  }
}

function untrackedStart() {
  var prev = globalState.trackingDerivation;
  globalState.trackingDerivation = null;
  return prev;
}

function untrackedEnd(prev) {
  globalState.trackingDerivation = prev;
}

function allowStateReadsStart(allowStateReads) {
  var prev = globalState.allowStateReads;
  globalState.allowStateReads = allowStateReads;
  return prev;
}

function allowStateReadsEnd(prev) {
  globalState.allowStateReads = prev;
}
/**
 * needed to keep `lowestObserverState` correct. when changing from (2 or 1) to 0
 *
 */


function changeDependenciesStateTo0(derivation) {
  if (derivation.dependenciesState_ === IDerivationState_.UP_TO_DATE_) return;
  derivation.dependenciesState_ = IDerivationState_.UP_TO_DATE_;
  var obs = derivation.observing_;
  var i = obs.length;

  while (i--) {
    obs[i].lowestObserverState_ = IDerivationState_.UP_TO_DATE_;
  }
}
/**
 * These values will persist if global state is reset
 */


var persistentKeys = ["mobxGuid", "spyListeners", "enforceActions", "computedRequiresReaction", "reactionRequiresObservable", "observableRequiresReaction", "allowStateReads", "disableErrorBoundaries", "runId", "UNCHANGED", "useProxies"];

var MobXGlobals = function MobXGlobals() {
  this.version = 6;
  this.UNCHANGED = {};
  this.trackingDerivation = null;
  this.trackingContext = null;
  this.runId = 0;
  this.mobxGuid = 0;
  this.inBatch = 0;
  this.pendingUnobservations = [];
  this.pendingReactions = [];
  this.isRunningReactions = false;
  this.allowStateChanges = false;
  this.allowStateReads = true;
  this.enforceActions = true;
  this.spyListeners = [];
  this.globalReactionErrorHandlers = [];
  this.computedRequiresReaction = false;
  this.reactionRequiresObservable = false;
  this.observableRequiresReaction = false;
  this.disableErrorBoundaries = false;
  this.suppressReactionErrors = false;
  this.useProxies = true;
  this.verifyProxies = false;
  this.safeDescriptors = true;
};

var canMergeGlobalState = true;
var isolateCalled = false;

var globalState = /*#__PURE__*/function () {
  var global = /*#__PURE__*/getGlobal();
  if (global.__mobxInstanceCount > 0 && !global.__mobxGlobals) canMergeGlobalState = false;
  if (global.__mobxGlobals && global.__mobxGlobals.version !== new MobXGlobals().version) canMergeGlobalState = false;

  if (!canMergeGlobalState) {
    setTimeout(function () {
      if (!isolateCalled) {
        die(35);
      }
    }, 1);
    return new MobXGlobals();
  } else if (global.__mobxGlobals) {
    global.__mobxInstanceCount += 1;
    if (!global.__mobxGlobals.UNCHANGED) global.__mobxGlobals.UNCHANGED = {}; // make merge backward compatible

    return global.__mobxGlobals;
  } else {
    global.__mobxInstanceCount = 1;
    return global.__mobxGlobals = /*#__PURE__*/new MobXGlobals();
  }
}();

function isolateGlobalState() {
  if (globalState.pendingReactions.length || globalState.inBatch || globalState.isRunningReactions) die(36);
  isolateCalled = true;

  if (canMergeGlobalState) {
    var global = getGlobal();
    if (--global.__mobxInstanceCount === 0) global.__mobxGlobals = undefined;
    globalState = new MobXGlobals();
  }
}

function getGlobalState() {
  return globalState;
}
/**
 * For testing purposes only; this will break the internal state of existing observables,
 * but can be used to get back at a stable state after throwing errors
 */


function resetGlobalState() {
  var defaultGlobals = new MobXGlobals();

  for (var key in defaultGlobals) {
    if (persistentKeys.indexOf(key) === -1) globalState[key] = defaultGlobals[key];
  }

  globalState.allowStateChanges = !globalState.enforceActions;
}

function hasObservers(observable) {
  return observable.observers_ && observable.observers_.size > 0;
}

function getObservers(observable) {
  return observable.observers_;
} // function invariantObservers(observable: IObservable) {
//     const list = observable.observers
//     const map = observable.observersIndexes
//     const l = list.length
//     for (let i = 0; i < l; i++) {
//         const id = list[i].__mapid
//         if (i) {
//             invariant(map[id] === i, "INTERNAL ERROR maps derivation.__mapid to index in list") // for performance
//         } else {
//             invariant(!(id in map), "INTERNAL ERROR observer on index 0 shouldn't be held in map.") // for performance
//         }
//     }
//     invariant(
//         list.length === 0 || Object.keys(map).length === list.length - 1,
//         "INTERNAL ERROR there is no junk in map"
//     )
// }


function addObserver(observable, node) {
  // invariant(node.dependenciesState !== -1, "INTERNAL ERROR, can add only dependenciesState !== -1");
  // invariant(observable._observers.indexOf(node) === -1, "INTERNAL ERROR add already added node");
  // invariantObservers(observable);
  observable.observers_.add(node);
  if (observable.lowestObserverState_ > node.dependenciesState_) observable.lowestObserverState_ = node.dependenciesState_; // invariantObservers(observable);
  // invariant(observable._observers.indexOf(node) !== -1, "INTERNAL ERROR didn't add node");
}

function removeObserver(observable, node) {
  // invariant(globalState.inBatch > 0, "INTERNAL ERROR, remove should be called only inside batch");
  // invariant(observable._observers.indexOf(node) !== -1, "INTERNAL ERROR remove already removed node");
  // invariantObservers(observable);
  observable.observers_["delete"](node);

  if (observable.observers_.size === 0) {
    // deleting last observer
    queueForUnobservation(observable);
  } // invariantObservers(observable);
  // invariant(observable._observers.indexOf(node) === -1, "INTERNAL ERROR remove already removed node2");

}

function queueForUnobservation(observable) {
  if (observable.isPendingUnobservation_ === false) {
    // invariant(observable._observers.length === 0, "INTERNAL ERROR, should only queue for unobservation unobserved observables");
    observable.isPendingUnobservation_ = true;
    globalState.pendingUnobservations.push(observable);
  }
}
/**
 * Batch starts a transaction, at least for purposes of memoizing ComputedValues when nothing else does.
 * During a batch `onBecomeUnobserved` will be called at most once per observable.
 * Avoids unnecessary recalculations.
 */


function startBatch() {
  globalState.inBatch++;
}

function endBatch() {
  if (--globalState.inBatch === 0) {
    runReactions(); // the batch is actually about to finish, all unobserving should happen here.

    var list = globalState.pendingUnobservations;

    for (var i = 0; i < list.length; i++) {
      var observable = list[i];
      observable.isPendingUnobservation_ = false;

      if (observable.observers_.size === 0) {
        if (observable.isBeingObserved_) {
          // if this observable had reactive observers, trigger the hooks
          observable.isBeingObserved_ = false;
          observable.onBUO();
        }

        if (observable instanceof ComputedValue) {
          // computed values are automatically teared down when the last observer leaves
          // this window.process happens recursively, this computed might be the last observabe of another, etc..
          observable.suspend_();
        }
      }
    }

    globalState.pendingUnobservations = [];
  }
}

function reportObserved(observable) {
  checkIfStateReadsAreAllowed(observable);
  var derivation = globalState.trackingDerivation;

  if (derivation !== null) {
    /**
     * Simple optimization, give each derivation run an unique id (runId)
     * Check if last time this observable was accessed the same runId is used
     * if this is the case, the relation is already known
     */
    if (derivation.runId_ !== observable.lastAccessedBy_) {
      observable.lastAccessedBy_ = derivation.runId_; // Tried storing newObserving, or observing, or both as Set, but performance didn't come close...

      derivation.newObserving_[derivation.unboundDepsCount_++] = observable;

      if (!observable.isBeingObserved_ && globalState.trackingContext) {
        observable.isBeingObserved_ = true;
        observable.onBO();
      }
    }

    return true;
  } else if (observable.observers_.size === 0 && globalState.inBatch > 0) {
    queueForUnobservation(observable);
  }

  return false;
} // function invariantLOS(observable: IObservable, msg: string) {
//     // it's expensive so better not run it in produciton. but temporarily helpful for testing
//     const min = getObservers(observable).reduce((a, b) => Math.min(a, b.dependenciesState), 2)
//     if (min >= observable.lowestObserverState) return // <- the only assumption about `lowestObserverState`
//     throw new Error(
//         "lowestObserverState is wrong for " +
//             msg +
//             " because " +
//             min +
//             " < " +
//             observable.lowestObserverState
//     )
// }

/**
 * NOTE: current propagation mechanism will in case of self reruning autoruns behave unexpectedly
 * It will propagate changes to observers from previous run
 * It's hard or maybe impossible (with reasonable perf) to get it right with current approach
 * Hopefully self reruning autoruns aren't a feature people should depend on
 * Also most basic use cases should be ok
 */
// Called by Atom when its value changes


function propagateChanged(observable) {
  // invariantLOS(observable, "changed start");
  if (observable.lowestObserverState_ === IDerivationState_.STALE_) return;
  observable.lowestObserverState_ = IDerivationState_.STALE_; // Ideally we use for..of here, but the downcompiled version is really slow...

  observable.observers_.forEach(function (d) {
    if (d.dependenciesState_ === IDerivationState_.UP_TO_DATE_) {
      if (NODE_ENV !== "production" && d.isTracing_ !== TraceMode.NONE) {
        logTraceInfo(d, observable);
      }

      d.onBecomeStale_();
    }

    d.dependenciesState_ = IDerivationState_.STALE_;
  }); // invariantLOS(observable, "changed end");
} // Called by ComputedValue when it recalculate and its value changed


function propagateChangeConfirmed(observable) {
  // invariantLOS(observable, "confirmed start");
  if (observable.lowestObserverState_ === IDerivationState_.STALE_) return;
  observable.lowestObserverState_ = IDerivationState_.STALE_;
  observable.observers_.forEach(function (d) {
    if (d.dependenciesState_ === IDerivationState_.POSSIBLY_STALE_) {
      d.dependenciesState_ = IDerivationState_.STALE_;

      if (NODE_ENV !== "production" && d.isTracing_ !== TraceMode.NONE) {
        logTraceInfo(d, observable);
      }
    } else if (d.dependenciesState_ === IDerivationState_.UP_TO_DATE_ // this happens during computing of `d`, just keep lowestObserverState up to date.
    ) {
      observable.lowestObserverState_ = IDerivationState_.UP_TO_DATE_;
    }
  }); // invariantLOS(observable, "confirmed end");
} // Used by computed when its dependency changed, but we don't wan't to immediately recompute.


function propagateMaybeChanged(observable) {
  // invariantLOS(observable, "maybe start");
  if (observable.lowestObserverState_ !== IDerivationState_.UP_TO_DATE_) return;
  observable.lowestObserverState_ = IDerivationState_.POSSIBLY_STALE_;
  observable.observers_.forEach(function (d) {
    if (d.dependenciesState_ === IDerivationState_.UP_TO_DATE_) {
      d.dependenciesState_ = IDerivationState_.POSSIBLY_STALE_;
      d.onBecomeStale_();
    }
  }); // invariantLOS(observable, "maybe end");
}

function logTraceInfo(derivation, observable) {
  console.log("[mobx.trace] '" + derivation.name_ + "' is invalidated due to a change in: '" + observable.name_ + "'");

  if (derivation.isTracing_ === TraceMode.BREAK) {
    var lines = [];
    printDepTree(getDependencyTree(derivation), lines, 1); // prettier-ignore

    new Function("debugger;\n/*\nTracing '" + derivation.name_ + "'\n\nYou are entering this break point because derivation '" + derivation.name_ + "' is being traced and '" + observable.name_ + "' is now forcing it to update.\nJust follow the stacktrace you should now see in the devtools to see precisely what piece of your code is causing this update\nThe stackframe you are looking for is at least ~6-8 stack-frames up.\n\n" + (derivation instanceof ComputedValue ? derivation.derivation.toString().replace(/[*]\//g, "/") : "") + "\n\nThe dependencies for this derivation are:\n\n" + lines.join("\n") + "\n*/\n    ")();
  }
}

function printDepTree(tree, lines, depth) {
  if (lines.length >= 1000) {
    lines.push("(and many more)");
    return;
  }

  lines.push("" + new Array(depth).join("\t") + tree.name); // MWE: not the fastest, but the easiest way :)

  if (tree.dependencies) tree.dependencies.forEach(function (child) {
    return printDepTree(child, lines, depth + 1);
  });
}

var Reaction = /*#__PURE__*/function () {
  // nodes we are looking at. Our value depends on these nodes
  function Reaction(name_, onInvalidate_, errorHandler_, requiresObservable_) {
    if (name_ === void 0) {
      name_ = NODE_ENV !== "production" ? "Reaction@" + getNextId() : "Reaction";
    }

    if (requiresObservable_ === void 0) {
      requiresObservable_ = false;
    }

    this.name_ = void 0;
    this.onInvalidate_ = void 0;
    this.errorHandler_ = void 0;
    this.requiresObservable_ = void 0;
    this.observing_ = [];
    this.newObserving_ = [];
    this.dependenciesState_ = IDerivationState_.NOT_TRACKING_;
    this.diffValue_ = 0;
    this.runId_ = 0;
    this.unboundDepsCount_ = 0;
    this.isDisposed_ = false;
    this.isScheduled_ = false;
    this.isTrackPending_ = false;
    this.isRunning_ = false;
    this.isTracing_ = TraceMode.NONE;
    this.name_ = name_;
    this.onInvalidate_ = onInvalidate_;
    this.errorHandler_ = errorHandler_;
    this.requiresObservable_ = requiresObservable_;
  }

  var _proto = Reaction.prototype;

  _proto.onBecomeStale_ = function onBecomeStale_() {
    this.schedule_();
  };

  _proto.schedule_ = function schedule_() {
    if (!this.isScheduled_) {
      this.isScheduled_ = true;
      globalState.pendingReactions.push(this);
      runReactions();
    }
  };

  _proto.isScheduled = function isScheduled() {
    return this.isScheduled_;
  }
  /**
   * internal, use schedule() if you intend to kick off a reaction
   */
  ;

  _proto.runReaction_ = function runReaction_() {
    if (!this.isDisposed_) {
      startBatch();
      this.isScheduled_ = false;
      var prev = globalState.trackingContext;
      globalState.trackingContext = this;

      if (shouldCompute(this)) {
        this.isTrackPending_ = true;

        try {
          this.onInvalidate_();

          if (NODE_ENV !== "production" && this.isTrackPending_ && isSpyEnabled()) {
            // onInvalidate didn't trigger track right away..
            spyReport({
              name: this.name_,
              type: "scheduled-reaction"
            });
          }
        } catch (e) {
          this.reportExceptionInDerivation_(e);
        }
      }

      globalState.trackingContext = prev;
      endBatch();
    }
  };

  _proto.track = function track(fn) {
    if (this.isDisposed_) {
      return; // console.warn("Reaction already disposed") // Note: Not a warning / error in mobx 4 either
    }

    startBatch();
    var notify = isSpyEnabled();
    var startTime;

    if (NODE_ENV !== "production" && notify) {
      startTime = Date.now();
      spyReportStart({
        name: this.name_,
        type: "reaction"
      });
    }

    this.isRunning_ = true;
    var prevReaction = globalState.trackingContext; // reactions could create reactions...

    globalState.trackingContext = this;
    var result = trackDerivedFunction(this, fn, undefined);
    globalState.trackingContext = prevReaction;
    this.isRunning_ = false;
    this.isTrackPending_ = false;

    if (this.isDisposed_) {
      // disposed during last run. Clean up everything that was bound after the dispose call.
      clearObserving(this);
    }

    if (isCaughtException(result)) this.reportExceptionInDerivation_(result.cause);

    if (NODE_ENV !== "production" && notify) {
      spyReportEnd({
        time: Date.now() - startTime
      });
    }

    endBatch();
  };

  _proto.reportExceptionInDerivation_ = function reportExceptionInDerivation_(error) {
    var _this = this;

    if (this.errorHandler_) {
      this.errorHandler_(error, this);
      return;
    }

    if (globalState.disableErrorBoundaries) throw error;
    var message = NODE_ENV !== "production" ? "[mobx] Encountered an uncaught exception that was thrown by a reaction or observer component, in: '" + this + "'" : "[mobx] uncaught error in '" + this + "'";

    if (!globalState.suppressReactionErrors) {
      console.error(message, error);
      /** If debugging brought you here, please, read the above message :-). Tnx! */
    } else if (NODE_ENV !== "production") console.warn("[mobx] (error in reaction '" + this.name_ + "' suppressed, fix error of causing action below)"); // prettier-ignore


    if (NODE_ENV !== "production" && isSpyEnabled()) {
      spyReport({
        type: "error",
        name: this.name_,
        message: message,
        error: "" + error
      });
    }

    globalState.globalReactionErrorHandlers.forEach(function (f) {
      return f(error, _this);
    });
  };

  _proto.dispose = function dispose() {
    if (!this.isDisposed_) {
      this.isDisposed_ = true;

      if (!this.isRunning_) {
        // if disposed while running, clean up later. Maybe not optimal, but rare case
        startBatch();
        clearObserving(this);
        endBatch();
      }
    }
  };

  _proto.getDisposer_ = function getDisposer_() {
    var r = this.dispose.bind(this);
    r[$mobx] = this;
    return r;
  };

  _proto.toString = function toString() {
    return "Reaction[" + this.name_ + "]";
  };

  _proto.trace = function trace$1(enterBreakPoint) {
    if (enterBreakPoint === void 0) {
      enterBreakPoint = false;
    }

    trace(this, enterBreakPoint);
  };

  return Reaction;
}();

exports.Reaction = Reaction;

function onReactionError(handler) {
  globalState.globalReactionErrorHandlers.push(handler);
  return function () {
    var idx = globalState.globalReactionErrorHandlers.indexOf(handler);
    if (idx >= 0) globalState.globalReactionErrorHandlers.splice(idx, 1);
  };
}
/**
 * Magic number alert!
 * Defines within how many times a reaction is allowed to re-trigger itself
 * until it is assumed that this is gonna be a never ending loop...
 */


var MAX_REACTION_ITERATIONS = 100;

var reactionScheduler = function reactionScheduler(f) {
  return f();
};

function runReactions() {
  // Trampolining, if runReactions are already running, new reactions will be picked up
  if (globalState.inBatch > 0 || globalState.isRunningReactions) return;
  reactionScheduler(runReactionsHelper);
}

function runReactionsHelper() {
  globalState.isRunningReactions = true;
  var allReactions = globalState.pendingReactions;
  var iterations = 0; // While running reactions, new reactions might be triggered.
  // Hence we work with two variables and check whether
  // we converge to no remaining reactions after a while.

  while (allReactions.length > 0) {
    if (++iterations === MAX_REACTION_ITERATIONS) {
      console.error(NODE_ENV !== "production" ? "Reaction doesn't converge to a stable state after " + MAX_REACTION_ITERATIONS + " iterations." + (" Probably there is a cycle in the reactive function: " + allReactions[0]) : "[mobx] cycle in reaction: " + allReactions[0]);
      allReactions.splice(0); // clear reactions
    }

    var remainingReactions = allReactions.splice(0);

    for (var i = 0, l = remainingReactions.length; i < l; i++) {
      remainingReactions[i].runReaction_();
    }
  }

  globalState.isRunningReactions = false;
}

var isReaction = /*#__PURE__*/createInstanceofPredicate("Reaction", Reaction);

function setReactionScheduler(fn) {
  var baseScheduler = reactionScheduler;

  reactionScheduler = function reactionScheduler(f) {
    return fn(function () {
      return baseScheduler(f);
    });
  };
}

function isSpyEnabled() {
  return NODE_ENV !== "production" && !!globalState.spyListeners.length;
}

function spyReport(event) {
  if (!(NODE_ENV !== "production")) return; // dead code elimination can do the rest

  if (!globalState.spyListeners.length) return;
  var listeners = globalState.spyListeners;

  for (var i = 0, l = listeners.length; i < l; i++) {
    listeners[i](event);
  }
}

function spyReportStart(event) {
  if (!(NODE_ENV !== "production")) return;

  var change = _extends({}, event, {
    spyReportStart: true
  });

  spyReport(change);
}

var END_EVENT = {
  type: "report-end",
  spyReportEnd: true
};

function spyReportEnd(change) {
  if (!(NODE_ENV !== "production")) return;
  if (change) spyReport(_extends({}, change, {
    type: "report-end",
    spyReportEnd: true
  }));else spyReport(END_EVENT);
}

function spy(listener) {
  if (!(NODE_ENV !== "production")) {
    console.warn("[mobx.spy] Is a no-op in production builds");
    return function () {};
  } else {
    globalState.spyListeners.push(listener);
    return once(function () {
      globalState.spyListeners = globalState.spyListeners.filter(function (l) {
        return l !== listener;
      });
    });
  }
}

var ACTION = "action";
var ACTION_BOUND = "action.bound";
var AUTOACTION = "autoAction";
var AUTOACTION_BOUND = "autoAction.bound";
var DEFAULT_ACTION_NAME = "<unnamed action>";
var actionAnnotation = /*#__PURE__*/createActionAnnotation(ACTION);
var actionBoundAnnotation = /*#__PURE__*/createActionAnnotation(ACTION_BOUND, {
  bound: true
});
var autoActionAnnotation = /*#__PURE__*/createActionAnnotation(AUTOACTION, {
  autoAction: true
});
var autoActionBoundAnnotation = /*#__PURE__*/createActionAnnotation(AUTOACTION_BOUND, {
  autoAction: true,
  bound: true
});

function createActionFactory(autoAction) {
  var res = function action(arg1, arg2) {
    // action(fn() {})
    if (isFunction(arg1)) return createAction(arg1.name || DEFAULT_ACTION_NAME, arg1, autoAction); // action("name", fn() {})

    if (isFunction(arg2)) return createAction(arg1, arg2, autoAction); // @action

    if (isStringish(arg2)) {
      return storeAnnotation(arg1, arg2, autoAction ? autoActionAnnotation : actionAnnotation);
    } // action("name") & @action("name")


    if (isStringish(arg1)) {
      return createDecoratorAnnotation(createActionAnnotation(autoAction ? AUTOACTION : ACTION, {
        name: arg1,
        autoAction: autoAction
      }));
    }

    if (NODE_ENV !== "production") die("Invalid arguments for `action`");
  };

  return res;
}

var action = /*#__PURE__*/createActionFactory(false);
exports.action = action;
Object.assign(action, actionAnnotation);
var autoAction = /*#__PURE__*/createActionFactory(true);
exports._autoAction = autoAction;
Object.assign(autoAction, autoActionAnnotation);
action.bound = /*#__PURE__*/createDecoratorAnnotation(actionBoundAnnotation);
autoAction.bound = /*#__PURE__*/createDecoratorAnnotation(autoActionBoundAnnotation);

function runInAction(fn) {
  return executeAction(fn.name || DEFAULT_ACTION_NAME, false, fn, this, undefined);
}

function isAction(thing) {
  return isFunction(thing) && thing.isMobxAction === true;
}
/**
 * Creates a named reactive view and keeps it alive, so that the view is always
 * updated if one of the dependencies changes, even when the view is not further used by something else.
 * @param view The reactive view
 * @returns disposer function, which can be used to stop the view from being updated in the future.
 */


function autorun(view, opts) {
  var _opts$name, _opts;

  if (opts === void 0) {
    opts = EMPTY_OBJECT;
  }

  if (NODE_ENV !== "production") {
    if (!isFunction(view)) die("Autorun expects a function as first argument");
    if (isAction(view)) die("Autorun does not accept actions since actions are untrackable");
  }

  var name = (_opts$name = (_opts = opts) == null ? void 0 : _opts.name) != null ? _opts$name : NODE_ENV !== "production" ? view.name || "Autorun@" + getNextId() : "Autorun";
  var runSync = !opts.scheduler && !opts.delay;
  var reaction;

  if (runSync) {
    // normal autorun
    reaction = new Reaction(name, function () {
      this.track(reactionRunner);
    }, opts.onError, opts.requiresObservable);
  } else {
    var scheduler = createSchedulerFromOptions(opts); // debounced autorun

    var isScheduled = false;
    reaction = new Reaction(name, function () {
      if (!isScheduled) {
        isScheduled = true;
        scheduler(function () {
          isScheduled = false;
          if (!reaction.isDisposed_) reaction.track(reactionRunner);
        });
      }
    }, opts.onError, opts.requiresObservable);
  }

  function reactionRunner() {
    view(reaction);
  }

  reaction.schedule_();
  return reaction.getDisposer_();
}

var run = function run(f) {
  return f();
};

function createSchedulerFromOptions(opts) {
  return opts.scheduler ? opts.scheduler : opts.delay ? function (f) {
    return setTimeout(f, opts.delay);
  } : run;
}

function reaction(expression, effect, opts) {
  var _opts$name2;

  if (opts === void 0) {
    opts = EMPTY_OBJECT;
  }

  if (NODE_ENV !== "production") {
    if (!isFunction(expression) || !isFunction(effect)) die("First and second argument to reaction should be functions");
    if (!isPlainObject(opts)) die("Third argument of reactions should be an object");
  }

  var name = (_opts$name2 = opts.name) != null ? _opts$name2 : NODE_ENV !== "production" ? "Reaction@" + getNextId() : "Reaction";
  var effectAction = action(name, opts.onError ? wrapErrorHandler(opts.onError, effect) : effect);
  var runSync = !opts.scheduler && !opts.delay;
  var scheduler = createSchedulerFromOptions(opts);
  var firstTime = true;
  var isScheduled = false;
  var value;
  var oldValue = undefined; // only an issue with fireImmediately

  var equals = opts.compareStructural ? comparer.structural : opts.equals || comparer["default"];
  var r = new Reaction(name, function () {
    if (firstTime || runSync) {
      reactionRunner();
    } else if (!isScheduled) {
      isScheduled = true;
      scheduler(reactionRunner);
    }
  }, opts.onError, opts.requiresObservable);

  function reactionRunner() {
    isScheduled = false;
    if (r.isDisposed_) return;
    var changed = false;
    r.track(function () {
      var nextValue = allowStateChanges(false, function () {
        return expression(r);
      });
      changed = firstTime || !equals(value, nextValue);
      oldValue = value;
      value = nextValue;
    });
    if (firstTime && opts.fireImmediately) effectAction(value, oldValue, r);else if (!firstTime && changed) effectAction(value, oldValue, r);
    firstTime = false;
  }

  r.schedule_();
  return r.getDisposer_();
}

function wrapErrorHandler(errorHandler, baseFn) {
  return function () {
    try {
      return baseFn.apply(this, arguments);
    } catch (e) {
      errorHandler.call(this, e);
    }
  };
}

var ON_BECOME_OBSERVED = "onBO";
var ON_BECOME_UNOBSERVED = "onBUO";

function onBecomeObserved(thing, arg2, arg3) {
  return interceptHook(ON_BECOME_OBSERVED, thing, arg2, arg3);
}

function onBecomeUnobserved(thing, arg2, arg3) {
  return interceptHook(ON_BECOME_UNOBSERVED, thing, arg2, arg3);
}

function interceptHook(hook, thing, arg2, arg3) {
  var atom = typeof arg3 === "function" ? getAtom(thing, arg2) : getAtom(thing);
  var cb = isFunction(arg3) ? arg3 : arg2;
  var listenersKey = hook + "L";

  if (atom[listenersKey]) {
    atom[listenersKey].add(cb);
  } else {
    atom[listenersKey] = new Set([cb]);
  }

  return function () {
    var hookListeners = atom[listenersKey];

    if (hookListeners) {
      hookListeners["delete"](cb);

      if (hookListeners.size === 0) {
        delete atom[listenersKey];
      }
    }
  };
}

var NEVER = "never";
var ALWAYS = "always";
var OBSERVED = "observed"; // const IF_AVAILABLE = "ifavailable"

function configure(options) {
  if (options.isolateGlobalState === true) {
    isolateGlobalState();
  }

  var useProxies = options.useProxies,
      enforceActions = options.enforceActions;

  if (useProxies !== undefined) {
    globalState.useProxies = useProxies === ALWAYS ? true : useProxies === NEVER ? false : typeof Proxy !== "undefined";
  }

  if (useProxies === "ifavailable") globalState.verifyProxies = true;

  if (enforceActions !== undefined) {
    var ea = enforceActions === ALWAYS ? ALWAYS : enforceActions === OBSERVED;
    globalState.enforceActions = ea;
    globalState.allowStateChanges = ea === true || ea === ALWAYS ? false : true;
  }

  ["computedRequiresReaction", "reactionRequiresObservable", "observableRequiresReaction", "disableErrorBoundaries", "safeDescriptors"].forEach(function (key) {
    if (key in options) globalState[key] = !!options[key];
  });
  globalState.allowStateReads = !globalState.observableRequiresReaction;

  if (NODE_ENV !== "production" && globalState.disableErrorBoundaries === true) {
    console.warn("WARNING: Debug feature only. MobX will NOT recover from errors when `disableErrorBoundaries` is enabled.");
  }

  if (options.reactionScheduler) {
    setReactionScheduler(options.reactionScheduler);
  }
}

function extendObservable(target, properties, annotations, options) {
  if (NODE_ENV !== "production") {
    if (arguments.length > 4) die("'extendObservable' expected 2-4 arguments");
    if (typeof target !== "object") die("'extendObservable' expects an object as first argument");
    if (isObservableMap(target)) die("'extendObservable' should not be used on maps, use map.merge instead");
    if (!isPlainObject(properties)) die("'extendObservabe' only accepts plain objects as second argument");
    if (isObservable(properties) || isObservable(annotations)) die("Extending an object with another observable (object) is not supported");
  } // Pull descriptors first, so we don't have to deal with props added by administration ($mobx)


  var descriptors = getOwnPropertyDescriptors(properties);
  var adm = asObservableObject(target, options)[$mobx];
  startBatch();

  try {
    ownKeys(descriptors).forEach(function (key) {
      adm.extend_(key, descriptors[key], // must pass "undefined" for { key: undefined }
      !annotations ? true : key in annotations ? annotations[key] : true);
    });
  } finally {
    endBatch();
  }

  return target;
}

function getDependencyTree(thing, property) {
  return nodeToDependencyTree(getAtom(thing, property));
}

function nodeToDependencyTree(node) {
  var result = {
    name: node.name_
  };
  if (node.observing_ && node.observing_.length > 0) result.dependencies = unique(node.observing_).map(nodeToDependencyTree);
  return result;
}

function getObserverTree(thing, property) {
  return nodeToObserverTree(getAtom(thing, property));
}

function nodeToObserverTree(node) {
  var result = {
    name: node.name_
  };
  if (hasObservers(node)) result.observers = Array.from(getObservers(node)).map(nodeToObserverTree);
  return result;
}

function unique(list) {
  return Array.from(new Set(list));
}

var generatorId = 0;

function FlowCancellationError() {
  this.message = "FLOW_CANCELLED";
}

FlowCancellationError.prototype = /*#__PURE__*/Object.create(Error.prototype);

function isFlowCancellationError(error) {
  return error instanceof FlowCancellationError;
}

var flowAnnotation = /*#__PURE__*/createFlowAnnotation("flow");
var flowBoundAnnotation = /*#__PURE__*/createFlowAnnotation("flow.bound", {
  bound: true
});
var flow = /*#__PURE__*/Object.assign(function flow(arg1, arg2) {
  // @flow
  if (isStringish(arg2)) {
    return storeAnnotation(arg1, arg2, flowAnnotation);
  } // flow(fn)


  if (NODE_ENV !== "production" && arguments.length !== 1) die("Flow expects single argument with generator function");
  var generator = arg1;
  var name = generator.name || "<unnamed flow>"; // Implementation based on https://github.com/tj/co/blob/master/index.js

  var res = function res() {
    var ctx = this;
    var args = arguments;
    var runId = ++generatorId;
    var gen = action(name + " - runid: " + runId + " - init", generator).apply(ctx, args);
    var rejector;
    var pendingPromise = undefined;
    var promise = new Promise(function (resolve, reject) {
      var stepId = 0;
      rejector = reject;

      function onFulfilled(res) {
        pendingPromise = undefined;
        var ret;

        try {
          ret = action(name + " - runid: " + runId + " - yield " + stepId++, gen.next).call(gen, res);
        } catch (e) {
          return reject(e);
        }

        next(ret);
      }

      function onRejected(err) {
        pendingPromise = undefined;
        var ret;

        try {
          ret = action(name + " - runid: " + runId + " - yield " + stepId++, gen["throw"]).call(gen, err);
        } catch (e) {
          return reject(e);
        }

        next(ret);
      }

      function next(ret) {
        if (isFunction(ret == null ? void 0 : ret.then)) {
          // an async iterator
          ret.then(next, reject);
          return;
        }

        if (ret.done) return resolve(ret.value);
        pendingPromise = Promise.resolve(ret.value);
        return pendingPromise.then(onFulfilled, onRejected);
      }

      onFulfilled(undefined); // kick off the window.process
    });
    promise.cancel = action(name + " - runid: " + runId + " - cancel", function () {
      try {
        if (pendingPromise) cancelPromise(pendingPromise); // Finally block can return (or yield) stuff..

        var _res = gen["return"](undefined); // eat anything that promise would do, it's cancelled!


        var yieldedPromise = Promise.resolve(_res.value);
        yieldedPromise.then(noop, noop);
        cancelPromise(yieldedPromise); // maybe it can be cancelled :)
        // reject our original promise

        rejector(new FlowCancellationError());
      } catch (e) {
        rejector(e); // there could be a throwing finally block
      }
    });
    return promise;
  };

  res.isMobXFlow = true;
  return res;
}, flowAnnotation);
exports.flow = flow;
flow.bound = /*#__PURE__*/createDecoratorAnnotation(flowBoundAnnotation);

function cancelPromise(promise) {
  if (isFunction(promise.cancel)) promise.cancel();
}

function flowResult(result) {
  return result; // just tricking TypeScript :)
}

function isFlow(fn) {
  return (fn == null ? void 0 : fn.isMobXFlow) === true;
}

function interceptReads(thing, propOrHandler, handler) {
  var target;

  if (isObservableMap(thing) || isObservableArray(thing) || isObservableValue(thing)) {
    target = getAdministration(thing);
  } else if (isObservableObject(thing)) {
    if (NODE_ENV !== "production" && !isStringish(propOrHandler)) return die("InterceptReads can only be used with a specific property, not with an object in general");
    target = getAdministration(thing, propOrHandler);
  } else if (NODE_ENV !== "production") {
    return die("Expected observable map, object or array as first array");
  }

  if (NODE_ENV !== "production" && target.dehancer !== undefined) return die("An intercept reader was already established");
  target.dehancer = typeof propOrHandler === "function" ? propOrHandler : handler;
  return function () {
    target.dehancer = undefined;
  };
}

function intercept(thing, propOrHandler, handler) {
  if (isFunction(handler)) return interceptProperty(thing, propOrHandler, handler);else return interceptInterceptable(thing, propOrHandler);
}

function interceptInterceptable(thing, handler) {
  return getAdministration(thing).intercept_(handler);
}

function interceptProperty(thing, property, handler) {
  return getAdministration(thing, property).intercept_(handler);
}

function _isComputed(value, property) {
  if (property !== undefined) {
    if (isObservableObject(value) === false) return false;
    if (!value[$mobx].values_.has(property)) return false;
    var atom = getAtom(value, property);
    return isComputedValue(atom);
  }

  return isComputedValue(value);
}

function isComputed(value) {
  if (NODE_ENV !== "production" && arguments.length > 1) return die("isComputed expects only 1 argument. Use isComputedProp to inspect the observability of a property");
  return _isComputed(value);
}

function isComputedProp(value, propName) {
  if (NODE_ENV !== "production" && !isStringish(propName)) return die("isComputed expected a property name as second argument");
  return _isComputed(value, propName);
}

function _isObservable(value, property) {
  if (!value) return false;

  if (property !== undefined) {
    if (NODE_ENV !== "production" && (isObservableMap(value) || isObservableArray(value))) return die("isObservable(object, propertyName) is not supported for arrays and maps. Use map.has or array.length instead.");

    if (isObservableObject(value)) {
      return value[$mobx].values_.has(property);
    }

    return false;
  } // For first check, see #701


  return isObservableObject(value) || !!value[$mobx] || isAtom(value) || isReaction(value) || isComputedValue(value);
}

function isObservable(value) {
  if (NODE_ENV !== "production" && arguments.length !== 1) die("isObservable expects only 1 argument. Use isObservableProp to inspect the observability of a property");
  return _isObservable(value);
}

function isObservableProp(value, propName) {
  if (NODE_ENV !== "production" && !isStringish(propName)) return die("expected a property name as second argument");
  return _isObservable(value, propName);
}

function keys(obj) {
  if (isObservableObject(obj)) {
    return obj[$mobx].keys_();
  }

  if (isObservableMap(obj) || isObservableSet(obj)) {
    return Array.from(obj.keys());
  }

  if (isObservableArray(obj)) {
    return obj.map(function (_, index) {
      return index;
    });
  }

  die(5);
}

function values(obj) {
  if (isObservableObject(obj)) {
    return keys(obj).map(function (key) {
      return obj[key];
    });
  }

  if (isObservableMap(obj)) {
    return keys(obj).map(function (key) {
      return obj.get(key);
    });
  }

  if (isObservableSet(obj)) {
    return Array.from(obj.values());
  }

  if (isObservableArray(obj)) {
    return obj.slice();
  }

  die(6);
}

function entries(obj) {
  if (isObservableObject(obj)) {
    return keys(obj).map(function (key) {
      return [key, obj[key]];
    });
  }

  if (isObservableMap(obj)) {
    return keys(obj).map(function (key) {
      return [key, obj.get(key)];
    });
  }

  if (isObservableSet(obj)) {
    return Array.from(obj.entries());
  }

  if (isObservableArray(obj)) {
    return obj.map(function (key, index) {
      return [index, key];
    });
  }

  die(7);
}

function set(obj, key, value) {
  if (arguments.length === 2 && !isObservableSet(obj)) {
    startBatch();
    var _values = key;

    try {
      for (var _key in _values) {
        set(obj, _key, _values[_key]);
      }
    } finally {
      endBatch();
    }

    return;
  }

  if (isObservableObject(obj)) {
    obj[$mobx].set_(key, value);
  } else if (isObservableMap(obj)) {
    obj.set(key, value);
  } else if (isObservableSet(obj)) {
    obj.add(key);
  } else if (isObservableArray(obj)) {
    if (typeof key !== "number") key = parseInt(key, 10);
    if (key < 0) die("Invalid index: '" + key + "'");
    startBatch();
    if (key >= obj.length) obj.length = key + 1;
    obj[key] = value;
    endBatch();
  } else die(8);
}

function remove(obj, key) {
  if (isObservableObject(obj)) {
    obj[$mobx].delete_(key);
  } else if (isObservableMap(obj)) {
    obj["delete"](key);
  } else if (isObservableSet(obj)) {
    obj["delete"](key);
  } else if (isObservableArray(obj)) {
    if (typeof key !== "number") key = parseInt(key, 10);
    obj.splice(key, 1);
  } else {
    die(9);
  }
}

function has(obj, key) {
  if (isObservableObject(obj)) {
    return obj[$mobx].has_(key);
  } else if (isObservableMap(obj)) {
    return obj.has(key);
  } else if (isObservableSet(obj)) {
    return obj.has(key);
  } else if (isObservableArray(obj)) {
    return key >= 0 && key < obj.length;
  }

  die(10);
}

function get(obj, key) {
  if (!has(obj, key)) return undefined;

  if (isObservableObject(obj)) {
    return obj[$mobx].get_(key);
  } else if (isObservableMap(obj)) {
    return obj.get(key);
  } else if (isObservableArray(obj)) {
    return obj[key];
  }

  die(11);
}

function apiDefineProperty(obj, key, descriptor) {
  if (isObservableObject(obj)) {
    return obj[$mobx].defineProperty_(key, descriptor);
  }

  die(39);
}

function apiOwnKeys(obj) {
  if (isObservableObject(obj)) {
    return obj[$mobx].ownKeys_();
  }

  die(38);
}

function observe(thing, propOrCb, cbOrFire, fireImmediately) {
  if (isFunction(cbOrFire)) return observeObservableProperty(thing, propOrCb, cbOrFire, fireImmediately);else return observeObservable(thing, propOrCb, cbOrFire);
}

function observeObservable(thing, listener, fireImmediately) {
  return getAdministration(thing).observe_(listener, fireImmediately);
}

function observeObservableProperty(thing, property, listener, fireImmediately) {
  return getAdministration(thing, property).observe_(listener, fireImmediately);
}

function cache(map, key, value) {
  map.set(key, value);
  return value;
}

function toJSHelper(source, __alreadySeen) {
  if (source == null || typeof source !== "object" || source instanceof Date || !isObservable(source)) return source;
  if (isObservableValue(source) || isComputedValue(source)) return toJSHelper(source.get(), __alreadySeen);

  if (__alreadySeen.has(source)) {
    return __alreadySeen.get(source);
  }

  if (isObservableArray(source)) {
    var res = cache(__alreadySeen, source, new Array(source.length));
    source.forEach(function (value, idx) {
      res[idx] = toJSHelper(value, __alreadySeen);
    });
    return res;
  }

  if (isObservableSet(source)) {
    var _res = cache(__alreadySeen, source, new Set());

    source.forEach(function (value) {
      _res.add(toJSHelper(value, __alreadySeen));
    });
    return _res;
  }

  if (isObservableMap(source)) {
    var _res2 = cache(__alreadySeen, source, new Map());

    source.forEach(function (value, key) {
      _res2.set(key, toJSHelper(value, __alreadySeen));
    });
    return _res2;
  } else {
    // must be observable object
    var _res3 = cache(__alreadySeen, source, {});

    apiOwnKeys(source).forEach(function (key) {
      if (objectPrototype.propertyIsEnumerable.call(source, key)) {
        _res3[key] = toJSHelper(source[key], __alreadySeen);
      }
    });
    return _res3;
  }
}
/**
 * Basically, a deep clone, so that no reactive property will exist anymore.
 */


function toJS(source, options) {
  if (NODE_ENV !== "production" && options) die("toJS no longer supports options");
  return toJSHelper(source, new Map());
}

function trace() {
  if (!(NODE_ENV !== "production")) die("trace() is not available in production builds");
  var enterBreakPoint = false;

  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  if (typeof args[args.length - 1] === "boolean") enterBreakPoint = args.pop();
  var derivation = getAtomFromArgs(args);

  if (!derivation) {
    return die("'trace(break?)' can only be used inside a tracked computed value or a Reaction. Consider passing in the computed value or reaction explicitly");
  }

  if (derivation.isTracing_ === TraceMode.NONE) {
    console.log("[mobx.trace] '" + derivation.name_ + "' tracing enabled");
  }

  derivation.isTracing_ = enterBreakPoint ? TraceMode.BREAK : TraceMode.LOG;
}

function getAtomFromArgs(args) {
  switch (args.length) {
    case 0:
      return globalState.trackingDerivation;

    case 1:
      return getAtom(args[0]);

    case 2:
      return getAtom(args[0], args[1]);
  }
}
/**
 * During a transaction no views are updated until the end of the transaction.
 * The transaction will be run synchronously nonetheless.
 *
 * @param action a function that updates some reactive state
 * @returns any value that was returned by the 'action' parameter.
 */


function transaction(action, thisArg) {
  if (thisArg === void 0) {
    thisArg = undefined;
  }

  startBatch();

  try {
    return action.apply(thisArg);
  } finally {
    endBatch();
  }
}

function when(predicate, arg1, arg2) {
  if (arguments.length === 1 || arg1 && typeof arg1 === "object") return whenPromise(predicate, arg1);
  return _when(predicate, arg1, arg2 || {});
}

function _when(predicate, effect, opts) {
  var timeoutHandle;

  if (typeof opts.timeout === "number") {
    timeoutHandle = setTimeout(function () {
      if (!disposer[$mobx].isDisposed_) {
        disposer();
        var error = new Error("WHEN_TIMEOUT");
        if (opts.onError) opts.onError(error);else throw error;
      }
    }, opts.timeout);
  }

  opts.name = NODE_ENV !== "production" ? opts.name || "When@" + getNextId() : "When";
  var effectAction = createAction(NODE_ENV !== "production" ? opts.name + "-effect" : "When-effect", effect); // eslint-disable-next-line

  var disposer = autorun(function (r) {
    // predicate should not change state
    var cond = allowStateChanges(false, predicate);

    if (cond) {
      r.dispose();
      if (timeoutHandle) clearTimeout(timeoutHandle);
      effectAction();
    }
  }, opts);
  return disposer;
}

function whenPromise(predicate, opts) {
  if (NODE_ENV !== "production" && opts && opts.onError) return die("the options 'onError' and 'promise' cannot be combined");
  var cancel;
  var res = new Promise(function (resolve, reject) {
    var disposer = _when(predicate, resolve, _extends({}, opts, {
      onError: reject
    }));

    cancel = function cancel() {
      disposer();
      reject("WHEN_CANCELLED");
    };
  });
  res.cancel = cancel;
  return res;
}

function getAdm(target) {
  return target[$mobx];
} // Optimization: we don't need the intermediate objects and could have a completely custom administration for DynamicObjects,
// and skip either the internal values map, or the base object with its property descriptors!


var objectProxyTraps = {
  has: function has(target, name) {
    if (NODE_ENV !== "production" && globalState.trackingDerivation) warnAboutProxyRequirement("detect new properties using the 'in' operator. Use 'has' from 'mobx' instead.");
    return getAdm(target).has_(name);
  },
  get: function get(target, name) {
    return getAdm(target).get_(name);
  },
  set: function set(target, name, value) {
    var _getAdm$set_;

    if (!isStringish(name)) return false;

    if (NODE_ENV !== "production" && !getAdm(target).values_.has(name)) {
      warnAboutProxyRequirement("add a new observable property through direct assignment. Use 'set' from 'mobx' instead.");
    } // null (intercepted) -> true (success)


    return (_getAdm$set_ = getAdm(target).set_(name, value, true)) != null ? _getAdm$set_ : true;
  },
  deleteProperty: function deleteProperty(target, name) {
    var _getAdm$delete_;

    if (NODE_ENV !== "production") {
      warnAboutProxyRequirement("delete properties from an observable object. Use 'remove' from 'mobx' instead.");
    }

    if (!isStringish(name)) return false; // null (intercepted) -> true (success)

    return (_getAdm$delete_ = getAdm(target).delete_(name, true)) != null ? _getAdm$delete_ : true;
  },
  defineProperty: function defineProperty(target, name, descriptor) {
    var _getAdm$definePropert;

    if (NODE_ENV !== "production") {
      warnAboutProxyRequirement("define property on an observable object. Use 'defineProperty' from 'mobx' instead.");
    } // null (intercepted) -> true (success)


    return (_getAdm$definePropert = getAdm(target).defineProperty_(name, descriptor)) != null ? _getAdm$definePropert : true;
  },
  ownKeys: function ownKeys(target) {
    if (NODE_ENV !== "production" && globalState.trackingDerivation) warnAboutProxyRequirement("iterate keys to detect added / removed properties. Use 'keys' from 'mobx' instead.");
    return getAdm(target).ownKeys_();
  },
  preventExtensions: function preventExtensions(target) {
    die(13);
  }
};

function asDynamicObservableObject(target, options) {
  var _target$$mobx, _target$$mobx$proxy_;

  assertProxies();
  target = asObservableObject(target, options);
  return (_target$$mobx$proxy_ = (_target$$mobx = target[$mobx]).proxy_) != null ? _target$$mobx$proxy_ : _target$$mobx.proxy_ = new Proxy(target, objectProxyTraps);
}

function hasInterceptors(interceptable) {
  return interceptable.interceptors_ !== undefined && interceptable.interceptors_.length > 0;
}

function registerInterceptor(interceptable, handler) {
  var interceptors = interceptable.interceptors_ || (interceptable.interceptors_ = []);
  interceptors.push(handler);
  return once(function () {
    var idx = interceptors.indexOf(handler);
    if (idx !== -1) interceptors.splice(idx, 1);
  });
}

function interceptChange(interceptable, change) {
  var prevU = untrackedStart();

  try {
    // Interceptor can modify the array, copy it to avoid concurrent modification, see #1950
    var interceptors = [].concat(interceptable.interceptors_ || []);

    for (var i = 0, l = interceptors.length; i < l; i++) {
      change = interceptors[i](change);
      if (change && !change.type) die(14);
      if (!change) break;
    }

    return change;
  } finally {
    untrackedEnd(prevU);
  }
}

function hasListeners(listenable) {
  return listenable.changeListeners_ !== undefined && listenable.changeListeners_.length > 0;
}

function registerListener(listenable, handler) {
  var listeners = listenable.changeListeners_ || (listenable.changeListeners_ = []);
  listeners.push(handler);
  return once(function () {
    var idx = listeners.indexOf(handler);
    if (idx !== -1) listeners.splice(idx, 1);
  });
}

function notifyListeners(listenable, change) {
  var prevU = untrackedStart();
  var listeners = listenable.changeListeners_;
  if (!listeners) return;
  listeners = listeners.slice();

  for (var i = 0, l = listeners.length; i < l; i++) {
    listeners[i](change);
  }

  untrackedEnd(prevU);
}

function makeObservable(target, annotations, options) {
  var adm = asObservableObject(target, options)[$mobx];
  startBatch();

  try {
    var _annotations; // Default to decorators


    (_annotations = annotations) != null ? _annotations : annotations = collectStoredAnnotations(target); // Annotate

    ownKeys(annotations).forEach(function (key) {
      return adm.make_(key, annotations[key]);
    });
  } finally {
    endBatch();
  }

  return target;
} // proto[keysSymbol] = new Set<PropertyKey>()


var keysSymbol = /*#__PURE__*/Symbol("mobx-keys");

function makeAutoObservable(target, overrides, options) {
  if (NODE_ENV !== "production") {
    if (!isPlainObject(target) && !isPlainObject(Object.getPrototypeOf(target))) die("'makeAutoObservable' can only be used for classes that don't have a superclass");
    if (isObservableObject(target)) die("makeAutoObservable can only be used on objects not already made observable");
  } // Optimization: avoid visiting protos
  // Assumes that annotation.make_/.extend_ works the same for plain objects


  if (isPlainObject(target)) {
    return extendObservable(target, target, overrides, options);
  }

  var adm = asObservableObject(target, options)[$mobx]; // Optimization: cache keys on proto
  // Assumes makeAutoObservable can be called only once per object and can't be used in subclass

  if (!target[keysSymbol]) {
    var proto = Object.getPrototypeOf(target);
    var keys = new Set([].concat(ownKeys(target), ownKeys(proto)));
    keys["delete"]("constructor");
    keys["delete"]($mobx);
    addHiddenProp(proto, keysSymbol, keys);
  }

  startBatch();

  try {
    target[keysSymbol].forEach(function (key) {
      return adm.make_(key, // must pass "undefined" for { key: undefined }
      !overrides ? true : key in overrides ? overrides[key] : true);
    });
  } finally {
    endBatch();
  }

  return target;
}

var SPLICE = "splice";
var UPDATE = "update";
var MAX_SPLICE_SIZE = 10000; // See e.g. https://github.com/mobxjs/mobx/issues/859

var arrayTraps = {
  get: function get(target, name) {
    var adm = target[$mobx];
    if (name === $mobx) return adm;
    if (name === "length") return adm.getArrayLength_();

    if (typeof name === "string" && !isNaN(name)) {
      return adm.get_(parseInt(name));
    }

    if (hasProp(arrayExtensions, name)) {
      return arrayExtensions[name];
    }

    return target[name];
  },
  set: function set(target, name, value) {
    var adm = target[$mobx];

    if (name === "length") {
      adm.setArrayLength_(value);
    }

    if (typeof name === "symbol" || isNaN(name)) {
      target[name] = value;
    } else {
      // numeric string
      adm.set_(parseInt(name), value);
    }

    return true;
  },
  preventExtensions: function preventExtensions() {
    die(15);
  }
};

var ObservableArrayAdministration = /*#__PURE__*/function () {
  // this is the prop that gets proxied, so can't replace it!
  function ObservableArrayAdministration(name, enhancer, owned_, legacyMode_) {
    if (name === void 0) {
      name = NODE_ENV !== "production" ? "ObservableArray@" + getNextId() : "ObservableArray";
    }

    this.owned_ = void 0;
    this.legacyMode_ = void 0;
    this.atom_ = void 0;
    this.values_ = [];
    this.interceptors_ = void 0;
    this.changeListeners_ = void 0;
    this.enhancer_ = void 0;
    this.dehancer = void 0;
    this.proxy_ = void 0;
    this.lastKnownLength_ = 0;
    this.owned_ = owned_;
    this.legacyMode_ = legacyMode_;
    this.atom_ = new Atom(name);

    this.enhancer_ = function (newV, oldV) {
      return enhancer(newV, oldV, NODE_ENV !== "production" ? name + "[..]" : "ObservableArray[..]");
    };
  }

  var _proto = ObservableArrayAdministration.prototype;

  _proto.dehanceValue_ = function dehanceValue_(value) {
    if (this.dehancer !== undefined) return this.dehancer(value);
    return value;
  };

  _proto.dehanceValues_ = function dehanceValues_(values) {
    if (this.dehancer !== undefined && values.length > 0) return values.map(this.dehancer);
    return values;
  };

  _proto.intercept_ = function intercept_(handler) {
    return registerInterceptor(this, handler);
  };

  _proto.observe_ = function observe_(listener, fireImmediately) {
    if (fireImmediately === void 0) {
      fireImmediately = false;
    }

    if (fireImmediately) {
      listener({
        observableKind: "array",
        object: this.proxy_,
        debugObjectName: this.atom_.name_,
        type: "splice",
        index: 0,
        added: this.values_.slice(),
        addedCount: this.values_.length,
        removed: [],
        removedCount: 0
      });
    }

    return registerListener(this, listener);
  };

  _proto.getArrayLength_ = function getArrayLength_() {
    this.atom_.reportObserved();
    return this.values_.length;
  };

  _proto.setArrayLength_ = function setArrayLength_(newLength) {
    if (typeof newLength !== "number" || newLength < 0) die("Out of range: " + newLength);
    var currentLength = this.values_.length;
    if (newLength === currentLength) return;else if (newLength > currentLength) {
      var newItems = new Array(newLength - currentLength);

      for (var i = 0; i < newLength - currentLength; i++) {
        newItems[i] = undefined;
      } // No Array.fill everywhere...


      this.spliceWithArray_(currentLength, 0, newItems);
    } else this.spliceWithArray_(newLength, currentLength - newLength);
  };

  _proto.updateArrayLength_ = function updateArrayLength_(oldLength, delta) {
    if (oldLength !== this.lastKnownLength_) die(16);
    this.lastKnownLength_ += delta;
    if (this.legacyMode_ && delta > 0) reserveArrayBuffer(oldLength + delta + 1);
  };

  _proto.spliceWithArray_ = function spliceWithArray_(index, deleteCount, newItems) {
    var _this = this;

    checkIfStateModificationsAreAllowed(this.atom_);
    var length = this.values_.length;
    if (index === undefined) index = 0;else if (index > length) index = length;else if (index < 0) index = Math.max(0, length + index);
    if (arguments.length === 1) deleteCount = length - index;else if (deleteCount === undefined || deleteCount === null) deleteCount = 0;else deleteCount = Math.max(0, Math.min(deleteCount, length - index));
    if (newItems === undefined) newItems = EMPTY_ARRAY;

    if (hasInterceptors(this)) {
      var change = interceptChange(this, {
        object: this.proxy_,
        type: SPLICE,
        index: index,
        removedCount: deleteCount,
        added: newItems
      });
      if (!change) return EMPTY_ARRAY;
      deleteCount = change.removedCount;
      newItems = change.added;
    }

    newItems = newItems.length === 0 ? newItems : newItems.map(function (v) {
      return _this.enhancer_(v, undefined);
    });

    if (this.legacyMode_ || NODE_ENV !== "production") {
      var lengthDelta = newItems.length - deleteCount;
      this.updateArrayLength_(length, lengthDelta); // checks if internal array wasn't modified
    }

    var res = this.spliceItemsIntoValues_(index, deleteCount, newItems);
    if (deleteCount !== 0 || newItems.length !== 0) this.notifyArraySplice_(index, newItems, res);
    return this.dehanceValues_(res);
  };

  _proto.spliceItemsIntoValues_ = function spliceItemsIntoValues_(index, deleteCount, newItems) {
    if (newItems.length < MAX_SPLICE_SIZE) {
      var _this$values_;

      return (_this$values_ = this.values_).splice.apply(_this$values_, [index, deleteCount].concat(newItems));
    } else {
      var res = this.values_.slice(index, index + deleteCount);
      var oldItems = this.values_.slice(index + deleteCount);
      this.values_.length = index + newItems.length - deleteCount;

      for (var i = 0; i < newItems.length; i++) {
        this.values_[index + i] = newItems[i];
      }

      for (var _i = 0; _i < oldItems.length; _i++) {
        this.values_[index + newItems.length + _i] = oldItems[_i];
      }

      return res;
    }
  };

  _proto.notifyArrayChildUpdate_ = function notifyArrayChildUpdate_(index, newValue, oldValue) {
    var notifySpy = !this.owned_ && isSpyEnabled();
    var notify = hasListeners(this);
    var change = notify || notifySpy ? {
      observableKind: "array",
      object: this.proxy_,
      type: UPDATE,
      debugObjectName: this.atom_.name_,
      index: index,
      newValue: newValue,
      oldValue: oldValue
    } : null; // The reason why this is on right hand side here (and not above), is this way the uglifier will drop it, but it won't
    // cause any runtime overhead in development mode without NODE_ENV set, unless spying is enabled

    if (NODE_ENV !== "production" && notifySpy) spyReportStart(change);
    this.atom_.reportChanged();
    if (notify) notifyListeners(this, change);
    if (NODE_ENV !== "production" && notifySpy) spyReportEnd();
  };

  _proto.notifyArraySplice_ = function notifyArraySplice_(index, added, removed) {
    var notifySpy = !this.owned_ && isSpyEnabled();
    var notify = hasListeners(this);
    var change = notify || notifySpy ? {
      observableKind: "array",
      object: this.proxy_,
      debugObjectName: this.atom_.name_,
      type: SPLICE,
      index: index,
      removed: removed,
      added: added,
      removedCount: removed.length,
      addedCount: added.length
    } : null;
    if (NODE_ENV !== "production" && notifySpy) spyReportStart(change);
    this.atom_.reportChanged(); // conform: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/observe

    if (notify) notifyListeners(this, change);
    if (NODE_ENV !== "production" && notifySpy) spyReportEnd();
  };

  _proto.get_ = function get_(index) {
    if (index < this.values_.length) {
      this.atom_.reportObserved();
      return this.dehanceValue_(this.values_[index]);
    }

    console.warn(NODE_ENV !== "production" ? "[mobx] Out of bounds read: " + index : "[mobx.array] Attempt to read an array index (" + index + ") that is out of bounds (" + this.values_.length + "). Please check length first. Out of bound indices will not be tracked by MobX");
  };

  _proto.set_ = function set_(index, newValue) {
    var values = this.values_;

    if (index < values.length) {
      // update at index in range
      checkIfStateModificationsAreAllowed(this.atom_);
      var oldValue = values[index];

      if (hasInterceptors(this)) {
        var change = interceptChange(this, {
          type: UPDATE,
          object: this.proxy_,
          index: index,
          newValue: newValue
        });
        if (!change) return;
        newValue = change.newValue;
      }

      newValue = this.enhancer_(newValue, oldValue);
      var changed = newValue !== oldValue;

      if (changed) {
        values[index] = newValue;
        this.notifyArrayChildUpdate_(index, newValue, oldValue);
      }
    } else if (index === values.length) {
      // add a new item
      this.spliceWithArray_(index, 0, [newValue]);
    } else {
      // out of bounds
      die(17, index, values.length);
    }
  };

  return ObservableArrayAdministration;
}();

function createObservableArray(initialValues, enhancer, name, owned) {
  if (name === void 0) {
    name = NODE_ENV !== "production" ? "ObservableArray@" + getNextId() : "ObservableArray";
  }

  if (owned === void 0) {
    owned = false;
  }

  assertProxies();
  var adm = new ObservableArrayAdministration(name, enhancer, owned, false);
  addHiddenFinalProp(adm.values_, $mobx, adm);
  var proxy = new Proxy(adm.values_, arrayTraps);
  adm.proxy_ = proxy;

  if (initialValues && initialValues.length) {
    var prev = allowStateChangesStart(true);
    adm.spliceWithArray_(0, 0, initialValues);
    allowStateChangesEnd(prev);
  }

  return proxy;
} // eslint-disable-next-line


var arrayExtensions = {
  clear: function clear() {
    return this.splice(0);
  },
  replace: function replace(newItems) {
    var adm = this[$mobx];
    return adm.spliceWithArray_(0, adm.values_.length, newItems);
  },
  // Used by JSON.stringify
  toJSON: function toJSON() {
    return this.slice();
  },

  /*
   * functions that do alter the internal structure of the array, (based on lib.es6.d.ts)
   * since these functions alter the inner structure of the array, the have side effects.
   * Because the have side effects, they should not be used in computed function,
   * and for that reason the do not call dependencyState.notifyObserved
   */
  splice: function splice(index, deleteCount) {
    for (var _len = arguments.length, newItems = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      newItems[_key - 2] = arguments[_key];
    }

    var adm = this[$mobx];

    switch (arguments.length) {
      case 0:
        return [];

      case 1:
        return adm.spliceWithArray_(index);

      case 2:
        return adm.spliceWithArray_(index, deleteCount);
    }

    return adm.spliceWithArray_(index, deleteCount, newItems);
  },
  spliceWithArray: function spliceWithArray(index, deleteCount, newItems) {
    return this[$mobx].spliceWithArray_(index, deleteCount, newItems);
  },
  push: function push() {
    var adm = this[$mobx];

    for (var _len2 = arguments.length, items = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      items[_key2] = arguments[_key2];
    }

    adm.spliceWithArray_(adm.values_.length, 0, items);
    return adm.values_.length;
  },
  pop: function pop() {
    return this.splice(Math.max(this[$mobx].values_.length - 1, 0), 1)[0];
  },
  shift: function shift() {
    return this.splice(0, 1)[0];
  },
  unshift: function unshift() {
    var adm = this[$mobx];

    for (var _len3 = arguments.length, items = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      items[_key3] = arguments[_key3];
    }

    adm.spliceWithArray_(0, 0, items);
    return adm.values_.length;
  },
  reverse: function reverse() {
    // reverse by default mutates in place before returning the result
    // which makes it both a 'derivation' and a 'mutation'.
    if (globalState.trackingDerivation) {
      die(37, "reverse");
    }

    this.replace(this.slice().reverse());
    return this;
  },
  sort: function sort() {
    // sort by default mutates in place before returning the result
    // which goes against all good practices. Let's not change the array in place!
    if (globalState.trackingDerivation) {
      die(37, "sort");
    }

    var copy = this.slice();
    copy.sort.apply(copy, arguments);
    this.replace(copy);
    return this;
  },
  remove: function remove(value) {
    var adm = this[$mobx];
    var idx = adm.dehanceValues_(adm.values_).indexOf(value);

    if (idx > -1) {
      this.splice(idx, 1);
      return true;
    }

    return false;
  }
};
/**
 * Wrap function from prototype
 * Without this, everything works as well, but this works
 * faster as everything works on unproxied values
 */

addArrayExtension("concat", simpleFunc);
addArrayExtension("flat", simpleFunc);
addArrayExtension("includes", simpleFunc);
addArrayExtension("indexOf", simpleFunc);
addArrayExtension("join", simpleFunc);
addArrayExtension("lastIndexOf", simpleFunc);
addArrayExtension("slice", simpleFunc);
addArrayExtension("toString", simpleFunc);
addArrayExtension("toLocaleString", simpleFunc); // map

addArrayExtension("every", mapLikeFunc);
addArrayExtension("filter", mapLikeFunc);
addArrayExtension("find", mapLikeFunc);
addArrayExtension("findIndex", mapLikeFunc);
addArrayExtension("flatMap", mapLikeFunc);
addArrayExtension("forEach", mapLikeFunc);
addArrayExtension("map", mapLikeFunc);
addArrayExtension("some", mapLikeFunc); // reduce

addArrayExtension("reduce", reduceLikeFunc);
addArrayExtension("reduceRight", reduceLikeFunc);

function addArrayExtension(funcName, funcFactory) {
  if (typeof Array.prototype[funcName] === "function") {
    arrayExtensions[funcName] = funcFactory(funcName);
  }
} // Report and delegate to dehanced array


function simpleFunc(funcName) {
  return function () {
    var adm = this[$mobx];
    adm.atom_.reportObserved();
    var dehancedValues = adm.dehanceValues_(adm.values_);
    return dehancedValues[funcName].apply(dehancedValues, arguments);
  };
} // Make sure callbacks recieve correct array arg #2326


function mapLikeFunc(funcName) {
  return function (callback, thisArg) {
    var _this2 = this;

    var adm = this[$mobx];
    adm.atom_.reportObserved();
    var dehancedValues = adm.dehanceValues_(adm.values_);
    return dehancedValues[funcName](function (element, index) {
      return callback.call(thisArg, element, index, _this2);
    });
  };
} // Make sure callbacks recieve correct array arg #2326


function reduceLikeFunc(funcName) {
  return function () {
    var _this3 = this;

    var adm = this[$mobx];
    adm.atom_.reportObserved();
    var dehancedValues = adm.dehanceValues_(adm.values_); // #2432 - reduce behavior depends on arguments.length

    var callback = arguments[0];

    arguments[0] = function (accumulator, currentValue, index) {
      return callback(accumulator, currentValue, index, _this3);
    };

    return dehancedValues[funcName].apply(dehancedValues, arguments);
  };
}

var isObservableArrayAdministration = /*#__PURE__*/createInstanceofPredicate("ObservableArrayAdministration", ObservableArrayAdministration);

function isObservableArray(thing) {
  return isObject(thing) && isObservableArrayAdministration(thing[$mobx]);
}

var _Symbol$iterator, _Symbol$toStringTag;

var ObservableMapMarker = {};
var ADD = "add";
var DELETE = "delete"; // just extend Map? See also https://gist.github.com/nestharus/13b4d74f2ef4a2f4357dbd3fc23c1e54
// But: https://github.com/mobxjs/mobx/issues/1556

_Symbol$iterator = Symbol.iterator;
_Symbol$toStringTag = Symbol.toStringTag;

var ObservableMap = /*#__PURE__*/function () {
  // hasMap, not hashMap >-).
  function ObservableMap(initialData, enhancer_, name_) {
    if (enhancer_ === void 0) {
      enhancer_ = deepEnhancer;
    }

    if (name_ === void 0) {
      name_ = NODE_ENV !== "production" ? "ObservableMap@" + getNextId() : "ObservableMap";
    }

    this.enhancer_ = void 0;
    this.name_ = void 0;
    this[$mobx] = ObservableMapMarker;
    this.data_ = void 0;
    this.hasMap_ = void 0;
    this.keysAtom_ = void 0;
    this.interceptors_ = void 0;
    this.changeListeners_ = void 0;
    this.dehancer = void 0;
    this.enhancer_ = enhancer_;
    this.name_ = name_;

    if (!isFunction(Map)) {
      die(18);
    }

    this.keysAtom_ = createAtom(NODE_ENV !== "production" ? this.name_ + ".keys()" : "ObservableMap.keys()");
    this.data_ = new Map();
    this.hasMap_ = new Map();
    this.merge(initialData);
  }

  var _proto = ObservableMap.prototype;

  _proto.has_ = function has_(key) {
    return this.data_.has(key);
  };

  _proto.has = function has(key) {
    var _this = this;

    if (!globalState.trackingDerivation) return this.has_(key);
    var entry = this.hasMap_.get(key);

    if (!entry) {
      var newEntry = entry = new ObservableValue(this.has_(key), referenceEnhancer, NODE_ENV !== "production" ? this.name_ + "." + stringifyKey(key) + "?" : "ObservableMap.key?", false);
      this.hasMap_.set(key, newEntry);
      onBecomeUnobserved(newEntry, function () {
        return _this.hasMap_["delete"](key);
      });
    }

    return entry.get();
  };

  _proto.set = function set(key, value) {
    var hasKey = this.has_(key);

    if (hasInterceptors(this)) {
      var change = interceptChange(this, {
        type: hasKey ? UPDATE : ADD,
        object: this,
        newValue: value,
        name: key
      });
      if (!change) return this;
      value = change.newValue;
    }

    if (hasKey) {
      this.updateValue_(key, value);
    } else {
      this.addValue_(key, value);
    }

    return this;
  };

  _proto["delete"] = function _delete(key) {
    var _this2 = this;

    checkIfStateModificationsAreAllowed(this.keysAtom_);

    if (hasInterceptors(this)) {
      var change = interceptChange(this, {
        type: DELETE,
        object: this,
        name: key
      });
      if (!change) return false;
    }

    if (this.has_(key)) {
      var notifySpy = isSpyEnabled();
      var notify = hasListeners(this);

      var _change = notify || notifySpy ? {
        observableKind: "map",
        debugObjectName: this.name_,
        type: DELETE,
        object: this,
        oldValue: this.data_.get(key).value_,
        name: key
      } : null;

      if (NODE_ENV !== "production" && notifySpy) spyReportStart(_change);
      transaction(function () {
        _this2.keysAtom_.reportChanged();

        _this2.updateHasMapEntry_(key, false);

        var observable = _this2.data_.get(key);

        observable.setNewValue_(undefined);

        _this2.data_["delete"](key);
      });
      if (notify) notifyListeners(this, _change);
      if (NODE_ENV !== "production" && notifySpy) spyReportEnd();
      return true;
    }

    return false;
  };

  _proto.updateHasMapEntry_ = function updateHasMapEntry_(key, value) {
    var entry = this.hasMap_.get(key);

    if (entry) {
      entry.setNewValue_(value);
    }
  };

  _proto.updateValue_ = function updateValue_(key, newValue) {
    var observable = this.data_.get(key);
    newValue = observable.prepareNewValue_(newValue);

    if (newValue !== globalState.UNCHANGED) {
      var notifySpy = isSpyEnabled();
      var notify = hasListeners(this);
      var change = notify || notifySpy ? {
        observableKind: "map",
        debugObjectName: this.name_,
        type: UPDATE,
        object: this,
        oldValue: observable.value_,
        name: key,
        newValue: newValue
      } : null;
      if (NODE_ENV !== "production" && notifySpy) spyReportStart(change);
      observable.setNewValue_(newValue);
      if (notify) notifyListeners(this, change);
      if (NODE_ENV !== "production" && notifySpy) spyReportEnd();
    }
  };

  _proto.addValue_ = function addValue_(key, newValue) {
    var _this3 = this;

    checkIfStateModificationsAreAllowed(this.keysAtom_);
    transaction(function () {
      var observable = new ObservableValue(newValue, _this3.enhancer_, NODE_ENV !== "production" ? _this3.name_ + "." + stringifyKey(key) : "ObservableMap.key", false);

      _this3.data_.set(key, observable);

      newValue = observable.value_; // value might have been changed

      _this3.updateHasMapEntry_(key, true);

      _this3.keysAtom_.reportChanged();
    });
    var notifySpy = isSpyEnabled();
    var notify = hasListeners(this);
    var change = notify || notifySpy ? {
      observableKind: "map",
      debugObjectName: this.name_,
      type: ADD,
      object: this,
      name: key,
      newValue: newValue
    } : null;
    if (NODE_ENV !== "production" && notifySpy) spyReportStart(change);
    if (notify) notifyListeners(this, change);
    if (NODE_ENV !== "production" && notifySpy) spyReportEnd();
  };

  _proto.get = function get(key) {
    if (this.has(key)) return this.dehanceValue_(this.data_.get(key).get());
    return this.dehanceValue_(undefined);
  };

  _proto.dehanceValue_ = function dehanceValue_(value) {
    if (this.dehancer !== undefined) {
      return this.dehancer(value);
    }

    return value;
  };

  _proto.keys = function keys() {
    this.keysAtom_.reportObserved();
    return this.data_.keys();
  };

  _proto.values = function values() {
    var self = this;
    var keys = this.keys();
    return makeIterable({
      next: function next() {
        var _keys$next = keys.next(),
            done = _keys$next.done,
            value = _keys$next.value;

        return {
          done: done,
          value: done ? undefined : self.get(value)
        };
      }
    });
  };

  _proto.entries = function entries() {
    var self = this;
    var keys = this.keys();
    return makeIterable({
      next: function next() {
        var _keys$next2 = keys.next(),
            done = _keys$next2.done,
            value = _keys$next2.value;

        return {
          done: done,
          value: done ? undefined : [value, self.get(value)]
        };
      }
    });
  };

  _proto[_Symbol$iterator] = function () {
    return this.entries();
  };

  _proto.forEach = function forEach(callback, thisArg) {
    for (var _iterator = _createForOfIteratorHelperLoose(this), _step; !(_step = _iterator()).done;) {
      var _step$value = _step.value,
          key = _step$value[0],
          value = _step$value[1];
      callback.call(thisArg, value, key, this);
    }
  }
  /** Merge another object into this object, returns this. */
  ;

  _proto.merge = function merge(other) {
    var _this4 = this;

    if (isObservableMap(other)) {
      other = new Map(other);
    }

    transaction(function () {
      if (isPlainObject(other)) getPlainObjectKeys(other).forEach(function (key) {
        return _this4.set(key, other[key]);
      });else if (Array.isArray(other)) other.forEach(function (_ref) {
        var key = _ref[0],
            value = _ref[1];
        return _this4.set(key, value);
      });else if (isES6Map(other)) {
        if (other.constructor !== Map) die(19, other);
        other.forEach(function (value, key) {
          return _this4.set(key, value);
        });
      } else if (other !== null && other !== undefined) die(20, other);
    });
    return this;
  };

  _proto.clear = function clear() {
    var _this5 = this;

    transaction(function () {
      untracked(function () {
        for (var _iterator2 = _createForOfIteratorHelperLoose(_this5.keys()), _step2; !(_step2 = _iterator2()).done;) {
          var key = _step2.value;

          _this5["delete"](key);
        }
      });
    });
  };

  _proto.replace = function replace(values) {
    var _this6 = this; // Implementation requirements:
    // - respect ordering of replacement map
    // - allow interceptors to run and potentially prevent individual operations
    // - don't recreate observables that already exist in original map (so we don't destroy existing subscriptions)
    // - don't _keysAtom.reportChanged if the keys of resulting map are indentical (order matters!)
    // - note that result map may differ from replacement map due to the interceptors


    transaction(function () {
      // Convert to map so we can do quick key lookups
      var replacementMap = convertToMap(values);
      var orderedData = new Map(); // Used for optimization

      var keysReportChangedCalled = false; // Delete keys that don't exist in replacement map
      // if the key deletion is prevented by interceptor
      // add entry at the beginning of the result map

      for (var _iterator3 = _createForOfIteratorHelperLoose(_this6.data_.keys()), _step3; !(_step3 = _iterator3()).done;) {
        var key = _step3.value; // Concurrently iterating/deleting keys
        // iterator should handle this correctly

        if (!replacementMap.has(key)) {
          var deleted = _this6["delete"](key); // Was the key removed?


          if (deleted) {
            // _keysAtom.reportChanged() was already called
            keysReportChangedCalled = true;
          } else {
            // Delete prevented by interceptor
            var value = _this6.data_.get(key);

            orderedData.set(key, value);
          }
        }
      } // Merge entries


      for (var _iterator4 = _createForOfIteratorHelperLoose(replacementMap.entries()), _step4; !(_step4 = _iterator4()).done;) {
        var _step4$value = _step4.value,
            _key = _step4$value[0],
            _value = _step4$value[1]; // We will want to know whether a new key is added

        var keyExisted = _this6.data_.has(_key); // Add or update value


        _this6.set(_key, _value); // The addition could have been prevent by interceptor


        if (_this6.data_.has(_key)) {
          // The update could have been prevented by interceptor
          // and also we want to preserve existing values
          // so use value from _data map (instead of replacement map)
          var _value2 = _this6.data_.get(_key);

          orderedData.set(_key, _value2); // Was a new key added?

          if (!keyExisted) {
            // _keysAtom.reportChanged() was already called
            keysReportChangedCalled = true;
          }
        }
      } // Check for possible key order change


      if (!keysReportChangedCalled) {
        if (_this6.data_.size !== orderedData.size) {
          // If size differs, keys are definitely modified
          _this6.keysAtom_.reportChanged();
        } else {
          var iter1 = _this6.data_.keys();

          var iter2 = orderedData.keys();
          var next1 = iter1.next();
          var next2 = iter2.next();

          while (!next1.done) {
            if (next1.value !== next2.value) {
              _this6.keysAtom_.reportChanged();

              break;
            }

            next1 = iter1.next();
            next2 = iter2.next();
          }
        }
      } // Use correctly ordered map


      _this6.data_ = orderedData;
    });
    return this;
  };

  _proto.toString = function toString() {
    return "[object ObservableMap]";
  };

  _proto.toJSON = function toJSON() {
    return Array.from(this);
  };
  /**
   * Observes this object. Triggers for the events 'add', 'update' and 'delete'.
   * See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/observe
   * for callback details
   */


  _proto.observe_ = function observe_(listener, fireImmediately) {
    if (NODE_ENV !== "production" && fireImmediately === true) die("`observe` doesn't support fireImmediately=true in combination with maps.");
    return registerListener(this, listener);
  };

  _proto.intercept_ = function intercept_(handler) {
    return registerInterceptor(this, handler);
  };

  _createClass(ObservableMap, [{
    key: "size",
    get: function get() {
      this.keysAtom_.reportObserved();
      return this.data_.size;
    }
  }, {
    key: _Symbol$toStringTag,
    get: function get() {
      return "Map";
    }
  }]);

  return ObservableMap;
}(); // eslint-disable-next-line


exports.ObservableMap = ObservableMap;
var isObservableMap = /*#__PURE__*/createInstanceofPredicate("ObservableMap", ObservableMap);
exports.isObservableMap = isObservableMap;

function convertToMap(dataStructure) {
  if (isES6Map(dataStructure) || isObservableMap(dataStructure)) {
    return dataStructure;
  } else if (Array.isArray(dataStructure)) {
    return new Map(dataStructure);
  } else if (isPlainObject(dataStructure)) {
    var map = new Map();

    for (var key in dataStructure) {
      map.set(key, dataStructure[key]);
    }

    return map;
  } else {
    return die(21, dataStructure);
  }
}

var _Symbol$iterator$1, _Symbol$toStringTag$1;

var ObservableSetMarker = {};
_Symbol$iterator$1 = Symbol.iterator;
_Symbol$toStringTag$1 = Symbol.toStringTag;

var ObservableSet = /*#__PURE__*/function () {
  function ObservableSet(initialData, enhancer, name_) {
    if (enhancer === void 0) {
      enhancer = deepEnhancer;
    }

    if (name_ === void 0) {
      name_ = NODE_ENV !== "production" ? "ObservableSet@" + getNextId() : "ObservableSet";
    }

    this.name_ = void 0;
    this[$mobx] = ObservableSetMarker;
    this.data_ = new Set();
    this.atom_ = void 0;
    this.changeListeners_ = void 0;
    this.interceptors_ = void 0;
    this.dehancer = void 0;
    this.enhancer_ = void 0;
    this.name_ = name_;

    if (!isFunction(Set)) {
      die(22);
    }

    this.atom_ = createAtom(this.name_);

    this.enhancer_ = function (newV, oldV) {
      return enhancer(newV, oldV, name_);
    };

    if (initialData) {
      this.replace(initialData);
    }
  }

  var _proto = ObservableSet.prototype;

  _proto.dehanceValue_ = function dehanceValue_(value) {
    if (this.dehancer !== undefined) {
      return this.dehancer(value);
    }

    return value;
  };

  _proto.clear = function clear() {
    var _this = this;

    transaction(function () {
      untracked(function () {
        for (var _iterator = _createForOfIteratorHelperLoose(_this.data_.values()), _step; !(_step = _iterator()).done;) {
          var value = _step.value;

          _this["delete"](value);
        }
      });
    });
  };

  _proto.forEach = function forEach(callbackFn, thisArg) {
    for (var _iterator2 = _createForOfIteratorHelperLoose(this), _step2; !(_step2 = _iterator2()).done;) {
      var value = _step2.value;
      callbackFn.call(thisArg, value, value, this);
    }
  };

  _proto.add = function add(value) {
    var _this2 = this;

    checkIfStateModificationsAreAllowed(this.atom_);

    if (hasInterceptors(this)) {
      var change = interceptChange(this, {
        type: ADD,
        object: this,
        newValue: value
      });
      if (!change) return this; // ideally, value = change.value would be done here, so that values can be
      // changed by interceptor. Same applies for other Set and Map api's.
    }

    if (!this.has(value)) {
      transaction(function () {
        _this2.data_.add(_this2.enhancer_(value, undefined));

        _this2.atom_.reportChanged();
      });
      var notifySpy = NODE_ENV !== "production" && isSpyEnabled();
      var notify = hasListeners(this);

      var _change = notify || notifySpy ? {
        observableKind: "set",
        debugObjectName: this.name_,
        type: ADD,
        object: this,
        newValue: value
      } : null;

      if (notifySpy && NODE_ENV !== "production") spyReportStart(_change);
      if (notify) notifyListeners(this, _change);
      if (notifySpy && NODE_ENV !== "production") spyReportEnd();
    }

    return this;
  };

  _proto["delete"] = function _delete(value) {
    var _this3 = this;

    if (hasInterceptors(this)) {
      var change = interceptChange(this, {
        type: DELETE,
        object: this,
        oldValue: value
      });
      if (!change) return false;
    }

    if (this.has(value)) {
      var notifySpy = NODE_ENV !== "production" && isSpyEnabled();
      var notify = hasListeners(this);

      var _change2 = notify || notifySpy ? {
        observableKind: "set",
        debugObjectName: this.name_,
        type: DELETE,
        object: this,
        oldValue: value
      } : null;

      if (notifySpy && NODE_ENV !== "production") spyReportStart(_change2);
      transaction(function () {
        _this3.atom_.reportChanged();

        _this3.data_["delete"](value);
      });
      if (notify) notifyListeners(this, _change2);
      if (notifySpy && NODE_ENV !== "production") spyReportEnd();
      return true;
    }

    return false;
  };

  _proto.has = function has(value) {
    this.atom_.reportObserved();
    return this.data_.has(this.dehanceValue_(value));
  };

  _proto.entries = function entries() {
    var nextIndex = 0;
    var keys = Array.from(this.keys());
    var values = Array.from(this.values());
    return makeIterable({
      next: function next() {
        var index = nextIndex;
        nextIndex += 1;
        return index < values.length ? {
          value: [keys[index], values[index]],
          done: false
        } : {
          done: true
        };
      }
    });
  };

  _proto.keys = function keys() {
    return this.values();
  };

  _proto.values = function values() {
    this.atom_.reportObserved();
    var self = this;
    var nextIndex = 0;
    var observableValues = Array.from(this.data_.values());
    return makeIterable({
      next: function next() {
        return nextIndex < observableValues.length ? {
          value: self.dehanceValue_(observableValues[nextIndex++]),
          done: false
        } : {
          done: true
        };
      }
    });
  };

  _proto.replace = function replace(other) {
    var _this4 = this;

    if (isObservableSet(other)) {
      other = new Set(other);
    }

    transaction(function () {
      if (Array.isArray(other)) {
        _this4.clear();

        other.forEach(function (value) {
          return _this4.add(value);
        });
      } else if (isES6Set(other)) {
        _this4.clear();

        other.forEach(function (value) {
          return _this4.add(value);
        });
      } else if (other !== null && other !== undefined) {
        die("Cannot initialize set from " + other);
      }
    });
    return this;
  };

  _proto.observe_ = function observe_(listener, fireImmediately) {
    // ... 'fireImmediately' could also be true?
    if (NODE_ENV !== "production" && fireImmediately === true) die("`observe` doesn't support fireImmediately=true in combination with sets.");
    return registerListener(this, listener);
  };

  _proto.intercept_ = function intercept_(handler) {
    return registerInterceptor(this, handler);
  };

  _proto.toJSON = function toJSON() {
    return Array.from(this);
  };

  _proto.toString = function toString() {
    return "[object ObservableSet]";
  };

  _proto[_Symbol$iterator$1] = function () {
    return this.values();
  };

  _createClass(ObservableSet, [{
    key: "size",
    get: function get() {
      this.atom_.reportObserved();
      return this.data_.size;
    }
  }, {
    key: _Symbol$toStringTag$1,
    get: function get() {
      return "Set";
    }
  }]);

  return ObservableSet;
}(); // eslint-disable-next-line


exports.ObservableSet = ObservableSet;
var isObservableSet = /*#__PURE__*/createInstanceofPredicate("ObservableSet", ObservableSet);
exports.isObservableSet = isObservableSet;
var descriptorCache = /*#__PURE__*/Object.create(null);
var REMOVE = "remove";

var ObservableObjectAdministration = /*#__PURE__*/function () {
  function ObservableObjectAdministration(target_, values_, name_, // Used anytime annotation is not explicitely provided
  defaultAnnotation_) {
    if (values_ === void 0) {
      values_ = new Map();
    }

    if (defaultAnnotation_ === void 0) {
      defaultAnnotation_ = autoAnnotation;
    }

    this.target_ = void 0;
    this.values_ = void 0;
    this.name_ = void 0;
    this.defaultAnnotation_ = void 0;
    this.keysAtom_ = void 0;
    this.changeListeners_ = void 0;
    this.interceptors_ = void 0;
    this.proxy_ = void 0;
    this.isPlainObject_ = void 0;
    this.appliedAnnotations_ = void 0;
    this.pendingKeys_ = void 0;
    this.target_ = target_;
    this.values_ = values_;
    this.name_ = name_;
    this.defaultAnnotation_ = defaultAnnotation_;
    this.keysAtom_ = new Atom(NODE_ENV !== "production" ? this.name_ + ".keys" : "ObservableObject.keys"); // Optimization: we use this frequently

    this.isPlainObject_ = isPlainObject(this.target_);

    if (NODE_ENV !== "production" && !isAnnotation(this.defaultAnnotation_)) {
      die("defaultAnnotation must be valid annotation");
    }

    if (NODE_ENV !== "production") {
      // Prepare structure for tracking which fields were already annotated
      this.appliedAnnotations_ = {};
    }
  }

  var _proto = ObservableObjectAdministration.prototype;

  _proto.getObservablePropValue_ = function getObservablePropValue_(key) {
    return this.values_.get(key).get();
  };

  _proto.setObservablePropValue_ = function setObservablePropValue_(key, newValue) {
    var observable = this.values_.get(key);

    if (observable instanceof ComputedValue) {
      observable.set(newValue);
      return true;
    } // intercept


    if (hasInterceptors(this)) {
      var change = interceptChange(this, {
        type: UPDATE,
        object: this.proxy_ || this.target_,
        name: key,
        newValue: newValue
      });
      if (!change) return null;
      newValue = change.newValue;
    }

    newValue = observable.prepareNewValue_(newValue); // notify spy & observers

    if (newValue !== globalState.UNCHANGED) {
      var notify = hasListeners(this);
      var notifySpy = NODE_ENV !== "production" && isSpyEnabled();

      var _change = notify || notifySpy ? {
        type: UPDATE,
        observableKind: "object",
        debugObjectName: this.name_,
        object: this.proxy_ || this.target_,
        oldValue: observable.value_,
        name: key,
        newValue: newValue
      } : null;

      if (NODE_ENV !== "production" && notifySpy) spyReportStart(_change);
      observable.setNewValue_(newValue);
      if (notify) notifyListeners(this, _change);
      if (NODE_ENV !== "production" && notifySpy) spyReportEnd();
    }

    return true;
  };

  _proto.get_ = function get_(key) {
    if (globalState.trackingDerivation && !hasProp(this.target_, key)) {
      // Key doesn't exist yet, subscribe for it in case it's added later
      this.has_(key);
    }

    return this.target_[key];
  }
  /**
   * @param {PropertyKey} key
   * @param {any} value
   * @param {Annotation|boolean} annotation true - use default annotation, false - copy as is
   * @param {boolean} proxyTrap whether it's called from proxy trap
   * @returns {boolean|null} true on success, false on failure (proxyTrap + non-configurable), null when cancelled by interceptor
   */
  ;

  _proto.set_ = function set_(key, value, proxyTrap) {
    if (proxyTrap === void 0) {
      proxyTrap = false;
    } // Don't use .has(key) - we care about own


    if (hasProp(this.target_, key)) {
      // Existing prop
      if (this.values_.has(key)) {
        // Observable (can be intercepted)
        return this.setObservablePropValue_(key, value);
      } else if (proxyTrap) {
        // Non-observable - proxy
        return Reflect.set(this.target_, key, value);
      } else {
        // Non-observable
        this.target_[key] = value;
        return true;
      }
    } else {
      // New prop
      return this.extend_(key, {
        value: value,
        enumerable: true,
        writable: true,
        configurable: true
      }, this.defaultAnnotation_, proxyTrap);
    }
  } // Trap for "in"
  ;

  _proto.has_ = function has_(key) {
    if (!globalState.trackingDerivation) {
      // Skip key subscription outside derivation
      return key in this.target_;
    }

    this.pendingKeys_ || (this.pendingKeys_ = new Map());
    var entry = this.pendingKeys_.get(key);

    if (!entry) {
      entry = new ObservableValue(key in this.target_, referenceEnhancer, NODE_ENV !== "production" ? this.name_ + "." + stringifyKey(key) + "?" : "ObservableObject.key?", false);
      this.pendingKeys_.set(key, entry);
    }

    return entry.get();
  }
  /**
   * @param {PropertyKey} key
   * @param {Annotation|boolean} annotation true - use default annotation, false - ignore prop
   */
  ;

  _proto.make_ = function make_(key, annotation) {
    if (annotation === true) {
      annotation = this.defaultAnnotation_;
    }

    if (annotation === false) {
      return;
    }

    assertAnnotable(this, annotation, key);

    if (!(key in this.target_)) {
      var _this$target_$storedA; // Throw on missing key, except for decorators:
      // Decorator annotations are collected from whole prototype chain.
      // When called from super() some props may not exist yet.
      // However we don't have to worry about missing prop,
      // because the decorator must have been applied to something.


      if ((_this$target_$storedA = this.target_[storedAnnotationsSymbol]) == null ? void 0 : _this$target_$storedA[key]) {
        return; // will be annotated by subclass constructor
      } else {
        die(1, annotation.annotationType_, this.name_ + "." + key.toString());
      }
    }

    var source = this.target_;

    while (source && source !== objectPrototype) {
      var descriptor = getDescriptor(source, key);

      if (descriptor) {
        var outcome = annotation.make_(this, key, descriptor, source);
        if (outcome === 0
        /* Cancel */
        ) return;
        if (outcome === 1
        /* Break */
        ) break;
      }

      source = Object.getPrototypeOf(source);
    }

    recordAnnotationApplied(this, annotation, key);
  }
  /**
   * @param {PropertyKey} key
   * @param {PropertyDescriptor} descriptor
   * @param {Annotation|boolean} annotation true - use default annotation, false - copy as is
   * @param {boolean} proxyTrap whether it's called from proxy trap
   * @returns {boolean|null} true on success, false on failure (proxyTrap + non-configurable), null when cancelled by interceptor
   */
  ;

  _proto.extend_ = function extend_(key, descriptor, annotation, proxyTrap) {
    if (proxyTrap === void 0) {
      proxyTrap = false;
    }

    if (annotation === true) {
      annotation = this.defaultAnnotation_;
    }

    if (annotation === false) {
      return this.defineProperty_(key, descriptor, proxyTrap);
    }

    assertAnnotable(this, annotation, key);
    var outcome = annotation.extend_(this, key, descriptor, proxyTrap);

    if (outcome) {
      recordAnnotationApplied(this, annotation, key);
    }

    return outcome;
  }
  /**
   * @param {PropertyKey} key
   * @param {PropertyDescriptor} descriptor
   * @param {boolean} proxyTrap whether it's called from proxy trap
   * @returns {boolean|null} true on success, false on failure (proxyTrap + non-configurable), null when cancelled by interceptor
   */
  ;

  _proto.defineProperty_ = function defineProperty_(key, descriptor, proxyTrap) {
    if (proxyTrap === void 0) {
      proxyTrap = false;
    }

    try {
      startBatch(); // Delete

      var deleteOutcome = this.delete_(key);

      if (!deleteOutcome) {
        // Failure or intercepted
        return deleteOutcome;
      } // ADD interceptor


      if (hasInterceptors(this)) {
        var change = interceptChange(this, {
          object: this.proxy_ || this.target_,
          name: key,
          type: ADD,
          newValue: descriptor.value
        });
        if (!change) return null;
        var newValue = change.newValue;

        if (descriptor.value !== newValue) {
          descriptor = _extends({}, descriptor, {
            value: newValue
          });
        }
      } // Define


      if (proxyTrap) {
        if (!Reflect.defineProperty(this.target_, key, descriptor)) {
          return false;
        }
      } else {
        defineProperty(this.target_, key, descriptor);
      } // Notify


      this.notifyPropertyAddition_(key, descriptor.value);
    } finally {
      endBatch();
    }

    return true;
  } // If original descriptor becomes relevant, move this to annotation directly
  ;

  _proto.defineObservableProperty_ = function defineObservableProperty_(key, value, enhancer, proxyTrap) {
    if (proxyTrap === void 0) {
      proxyTrap = false;
    }

    try {
      startBatch(); // Delete

      var deleteOutcome = this.delete_(key);

      if (!deleteOutcome) {
        // Failure or intercepted
        return deleteOutcome;
      } // ADD interceptor


      if (hasInterceptors(this)) {
        var change = interceptChange(this, {
          object: this.proxy_ || this.target_,
          name: key,
          type: ADD,
          newValue: value
        });
        if (!change) return null;
        value = change.newValue;
      }

      var cachedDescriptor = getCachedObservablePropDescriptor(key);
      var descriptor = {
        configurable: globalState.safeDescriptors ? this.isPlainObject_ : true,
        enumerable: true,
        get: cachedDescriptor.get,
        set: cachedDescriptor.set
      }; // Define

      if (proxyTrap) {
        if (!Reflect.defineProperty(this.target_, key, descriptor)) {
          return false;
        }
      } else {
        defineProperty(this.target_, key, descriptor);
      }

      var observable = new ObservableValue(value, enhancer, NODE_ENV !== "production" ? this.name_ + "." + key.toString() : "ObservableObject.key", false);
      this.values_.set(key, observable); // Notify (value possibly changed by ObservableValue)

      this.notifyPropertyAddition_(key, observable.value_);
    } finally {
      endBatch();
    }

    return true;
  } // If original descriptor becomes relevant, move this to annotation directly
  ;

  _proto.defineComputedProperty_ = function defineComputedProperty_(key, options, proxyTrap) {
    if (proxyTrap === void 0) {
      proxyTrap = false;
    }

    try {
      startBatch(); // Delete

      var deleteOutcome = this.delete_(key);

      if (!deleteOutcome) {
        // Failure or intercepted
        return deleteOutcome;
      } // ADD interceptor


      if (hasInterceptors(this)) {
        var change = interceptChange(this, {
          object: this.proxy_ || this.target_,
          name: key,
          type: ADD,
          newValue: undefined
        });
        if (!change) return null;
      }

      options.name || (options.name = NODE_ENV !== "production" ? this.name_ + "." + key.toString() : "ObservableObject.key");
      options.context = this.proxy_ || this.target_;
      var cachedDescriptor = getCachedObservablePropDescriptor(key);
      var descriptor = {
        configurable: globalState.safeDescriptors ? this.isPlainObject_ : true,
        enumerable: false,
        get: cachedDescriptor.get,
        set: cachedDescriptor.set
      }; // Define

      if (proxyTrap) {
        if (!Reflect.defineProperty(this.target_, key, descriptor)) {
          return false;
        }
      } else {
        defineProperty(this.target_, key, descriptor);
      }

      this.values_.set(key, new ComputedValue(options)); // Notify

      this.notifyPropertyAddition_(key, undefined);
    } finally {
      endBatch();
    }

    return true;
  }
  /**
   * @param {PropertyKey} key
   * @param {PropertyDescriptor} descriptor
   * @param {boolean} proxyTrap whether it's called from proxy trap
   * @returns {boolean|null} true on success, false on failure (proxyTrap + non-configurable), null when cancelled by interceptor
   */
  ;

  _proto.delete_ = function delete_(key, proxyTrap) {
    if (proxyTrap === void 0) {
      proxyTrap = false;
    } // No such prop


    if (!hasProp(this.target_, key)) {
      return true;
    } // Intercept


    if (hasInterceptors(this)) {
      var change = interceptChange(this, {
        object: this.proxy_ || this.target_,
        name: key,
        type: REMOVE
      }); // Cancelled

      if (!change) return null;
    } // Delete


    try {
      var _this$pendingKeys_, _this$pendingKeys_$ge;

      startBatch();
      var notify = hasListeners(this);
      var notifySpy = NODE_ENV !== "production" && isSpyEnabled();
      var observable = this.values_.get(key); // Value needed for spies/listeners

      var value = undefined; // Optimization: don't pull the value unless we will need it

      if (!observable && (notify || notifySpy)) {
        var _getDescriptor;

        value = (_getDescriptor = getDescriptor(this.target_, key)) == null ? void 0 : _getDescriptor.value;
      } // delete prop (do first, may fail)


      if (proxyTrap) {
        if (!Reflect.deleteProperty(this.target_, key)) {
          return false;
        }
      } else {
        delete this.target_[key];
      } // Allow re-annotating this field


      if (NODE_ENV !== "production") {
        delete this.appliedAnnotations_[key];
      } // Clear observable


      if (observable) {
        this.values_["delete"](key); // for computed, value is undefined

        if (observable instanceof ObservableValue) {
          value = observable.value_;
        } // Notify: autorun(() => obj[key]), see #1796


        propagateChanged(observable);
      } // Notify "keys/entries/values" observers


      this.keysAtom_.reportChanged(); // Notify "has" observers
      // "in" as it may still exist in proto

      (_this$pendingKeys_ = this.pendingKeys_) == null ? void 0 : (_this$pendingKeys_$ge = _this$pendingKeys_.get(key)) == null ? void 0 : _this$pendingKeys_$ge.set(key in this.target_); // Notify spies/listeners

      if (notify || notifySpy) {
        var _change2 = {
          type: REMOVE,
          observableKind: "object",
          object: this.proxy_ || this.target_,
          debugObjectName: this.name_,
          oldValue: value,
          name: key
        };
        if (NODE_ENV !== "production" && notifySpy) spyReportStart(_change2);
        if (notify) notifyListeners(this, _change2);
        if (NODE_ENV !== "production" && notifySpy) spyReportEnd();
      }
    } finally {
      endBatch();
    }

    return true;
  }
  /**
   * Observes this object. Triggers for the events 'add', 'update' and 'delete'.
   * See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/observe
   * for callback details
   */
  ;

  _proto.observe_ = function observe_(callback, fireImmediately) {
    if (NODE_ENV !== "production" && fireImmediately === true) die("`observe` doesn't support the fire immediately property for observable objects.");
    return registerListener(this, callback);
  };

  _proto.intercept_ = function intercept_(handler) {
    return registerInterceptor(this, handler);
  };

  _proto.notifyPropertyAddition_ = function notifyPropertyAddition_(key, value) {
    var _this$pendingKeys_2, _this$pendingKeys_2$g;

    var notify = hasListeners(this);
    var notifySpy = NODE_ENV !== "production" && isSpyEnabled();

    if (notify || notifySpy) {
      var change = notify || notifySpy ? {
        type: ADD,
        observableKind: "object",
        debugObjectName: this.name_,
        object: this.proxy_ || this.target_,
        name: key,
        newValue: value
      } : null;
      if (NODE_ENV !== "production" && notifySpy) spyReportStart(change);
      if (notify) notifyListeners(this, change);
      if (NODE_ENV !== "production" && notifySpy) spyReportEnd();
    }

    (_this$pendingKeys_2 = this.pendingKeys_) == null ? void 0 : (_this$pendingKeys_2$g = _this$pendingKeys_2.get(key)) == null ? void 0 : _this$pendingKeys_2$g.set(true); // Notify "keys/entries/values" observers

    this.keysAtom_.reportChanged();
  };

  _proto.ownKeys_ = function ownKeys_() {
    this.keysAtom_.reportObserved();
    return ownKeys(this.target_);
  };

  _proto.keys_ = function keys_() {
    // Returns enumerable && own, but unfortunately keysAtom will report on ANY key change.
    // There is no way to distinguish between Object.keys(object) and Reflect.ownKeys(object) - both are handled by ownKeys trap.
    // We can either over-report in Object.keys(object) or under-report in Reflect.ownKeys(object)
    // We choose to over-report in Object.keys(object), because:
    // - typically it's used with simple data objects
    // - when symbolic/non-enumerable keys are relevant Reflect.ownKeys works as expected
    this.keysAtom_.reportObserved();
    return Object.keys(this.target_);
  };

  return ObservableObjectAdministration;
}();

function asObservableObject(target, options) {
  var _options$name;

  if (NODE_ENV !== "production" && options && isObservableObject(target)) {
    die("Options can't be provided for already observable objects.");
  }

  if (hasProp(target, $mobx)) {
    if (NODE_ENV !== "production" && !(getAdministration(target) instanceof ObservableObjectAdministration)) {
      die("Cannot convert '" + getDebugName(target) + "' into observable object:" + "\nThe target is already observable of different type." + "\nExtending builtins is not supported.");
    }

    return target;
  }

  if (NODE_ENV !== "production" && !Object.isExtensible(target)) die("Cannot make the designated object observable; it is not extensible");
  var name = (_options$name = options == null ? void 0 : options.name) != null ? _options$name : NODE_ENV !== "production" ? (isPlainObject(target) ? "ObservableObject" : target.constructor.name) + "@" + getNextId() : "ObservableObject";
  var adm = new ObservableObjectAdministration(target, new Map(), String(name), getAnnotationFromOptions(options));
  addHiddenProp(target, $mobx, adm);
  return target;
}

var isObservableObjectAdministration = /*#__PURE__*/createInstanceofPredicate("ObservableObjectAdministration", ObservableObjectAdministration);

function getCachedObservablePropDescriptor(key) {
  return descriptorCache[key] || (descriptorCache[key] = {
    get: function get() {
      return this[$mobx].getObservablePropValue_(key);
    },
    set: function set(value) {
      return this[$mobx].setObservablePropValue_(key, value);
    }
  });
}

function isObservableObject(thing) {
  if (isObject(thing)) {
    return isObservableObjectAdministration(thing[$mobx]);
  }

  return false;
}

function recordAnnotationApplied(adm, annotation, key) {
  var _adm$target_$storedAn;

  if (NODE_ENV !== "production") {
    adm.appliedAnnotations_[key] = annotation;
  } // Remove applied decorator annotation so we don't try to apply it again in subclass constructor


  (_adm$target_$storedAn = adm.target_[storedAnnotationsSymbol]) == null ? true : delete _adm$target_$storedAn[key];
}

function assertAnnotable(adm, annotation, key) {
  // Valid annotation
  if (NODE_ENV !== "production" && !isAnnotation(annotation)) {
    die("Cannot annotate '" + adm.name_ + "." + key.toString() + "': Invalid annotation.");
  }
  /*
  // Configurable, not sealed, not frozen
  // Possibly not needed, just a little better error then the one thrown by engine.
  // Cases where this would be useful the most (subclass field initializer) are not interceptable by this.
  if (__DEV__) {
      const configurable = getDescriptor(adm.target_, key)?.configurable
      const frozen = Object.isFrozen(adm.target_)
      const sealed = Object.isSealed(adm.target_)
      if (!configurable || frozen || sealed) {
          const fieldName = `${adm.name_}.${key.toString()}`
          const requestedAnnotationType = annotation.annotationType_
          let error = `Cannot apply '${requestedAnnotationType}' to '${fieldName}':`
          if (frozen) {
              error += `\nObject is frozen.`
          }
          if (sealed) {
              error += `\nObject is sealed.`
          }
          if (!configurable) {
              error += `\nproperty is not configurable.`
              // Mention only if caused by us to avoid confusion
              if (hasProp(adm.appliedAnnotations!, key)) {
                  error += `\nTo prevent accidental re-definition of a field by a subclass, `
                  error += `all annotated fields of non-plain objects (classes) are not configurable.`
              }
          }
          die(error)
      }
  }
  */
  // Not annotated


  if (NODE_ENV !== "production" && !isOverride(annotation) && hasProp(adm.appliedAnnotations_, key)) {
    var fieldName = adm.name_ + "." + key.toString();
    var currentAnnotationType = adm.appliedAnnotations_[key].annotationType_;
    var requestedAnnotationType = annotation.annotationType_;
    die("Cannot apply '" + requestedAnnotationType + "' to '" + fieldName + "':" + ("\nThe field is already annotated with '" + currentAnnotationType + "'.") + "\nRe-annotating fields is not allowed." + "\nUse 'override' annotation for methods overriden by subclass.");
  }
}
/**
 * This array buffer contains two lists of properties, so that all arrays
 * can recycle their property definitions, which significantly improves performance of creating
 * properties on the fly.
 */


var OBSERVABLE_ARRAY_BUFFER_SIZE = 0; // Typescript workaround to make sure ObservableArray extends Array

var StubArray = function StubArray() {};

function inherit(ctor, proto) {
  if (Object.setPrototypeOf) {
    Object.setPrototypeOf(ctor.prototype, proto);
  } else if (ctor.prototype.__proto__ !== undefined) {
    ctor.prototype.__proto__ = proto;
  } else {
    ctor.prototype = proto;
  }
}

inherit(StubArray, Array.prototype); // Weex proto freeze protection was here,
// but it is unclear why the hack is need as MobX never changed the prototype
// anyway, so removed it in V6

var LegacyObservableArray = /*#__PURE__*/function (_StubArray) {
  _inheritsLoose(LegacyObservableArray, _StubArray);

  function LegacyObservableArray(initialValues, enhancer, name, owned) {
    var _this;

    if (name === void 0) {
      name = NODE_ENV !== "production" ? "ObservableArray@" + getNextId() : "ObservableArray";
    }

    if (owned === void 0) {
      owned = false;
    }

    _this = _StubArray.call(this) || this;
    var adm = new ObservableArrayAdministration(name, enhancer, owned, true);
    adm.proxy_ = _assertThisInitialized(_this);
    addHiddenFinalProp(_assertThisInitialized(_this), $mobx, adm);

    if (initialValues && initialValues.length) {
      var prev = allowStateChangesStart(true); // @ts-ignore

      _this.spliceWithArray(0, 0, initialValues);

      allowStateChangesEnd(prev);
    }

    return _this;
  }

  var _proto = LegacyObservableArray.prototype;

  _proto.concat = function concat() {
    this[$mobx].atom_.reportObserved();

    for (var _len = arguments.length, arrays = new Array(_len), _key = 0; _key < _len; _key++) {
      arrays[_key] = arguments[_key];
    }

    return Array.prototype.concat.apply(this.slice(), //@ts-ignore
    arrays.map(function (a) {
      return isObservableArray(a) ? a.slice() : a;
    }));
  };

  _proto[Symbol.iterator] = function () {
    var self = this;
    var nextIndex = 0;
    return makeIterable({
      next: function next() {
        // @ts-ignore
        return nextIndex < self.length ? {
          value: self[nextIndex++],
          done: false
        } : {
          done: true,
          value: undefined
        };
      }
    });
  };

  _createClass(LegacyObservableArray, [{
    key: "length",
    get: function get() {
      return this[$mobx].getArrayLength_();
    },
    set: function set(newLength) {
      this[$mobx].setArrayLength_(newLength);
    }
  }, {
    key: Symbol.toStringTag,
    get: function get() {
      return "Array";
    }
  }]);

  return LegacyObservableArray;
}(StubArray);

Object.entries(arrayExtensions).forEach(function (_ref) {
  var prop = _ref[0],
      fn = _ref[1];
  if (prop !== "concat") addHiddenProp(LegacyObservableArray.prototype, prop, fn);
});

function createArrayEntryDescriptor(index) {
  return {
    enumerable: false,
    configurable: true,
    get: function get() {
      return this[$mobx].get_(index);
    },
    set: function set(value) {
      this[$mobx].set_(index, value);
    }
  };
}

function createArrayBufferItem(index) {
  defineProperty(LegacyObservableArray.prototype, "" + index, createArrayEntryDescriptor(index));
}

function reserveArrayBuffer(max) {
  if (max > OBSERVABLE_ARRAY_BUFFER_SIZE) {
    for (var index = OBSERVABLE_ARRAY_BUFFER_SIZE; index < max + 100; index++) {
      createArrayBufferItem(index);
    }

    OBSERVABLE_ARRAY_BUFFER_SIZE = max;
  }
}

reserveArrayBuffer(1000);

function createLegacyArray(initialValues, enhancer, name) {
  return new LegacyObservableArray(initialValues, enhancer, name);
}

function getAtom(thing, property) {
  if (typeof thing === "object" && thing !== null) {
    if (isObservableArray(thing)) {
      if (property !== undefined) die(23);
      return thing[$mobx].atom_;
    }

    if (isObservableSet(thing)) {
      return thing[$mobx];
    }

    if (isObservableMap(thing)) {
      if (property === undefined) return thing.keysAtom_;
      var observable = thing.data_.get(property) || thing.hasMap_.get(property);
      if (!observable) die(25, property, getDebugName(thing));
      return observable;
    }

    if (isObservableObject(thing)) {
      if (!property) return die(26);

      var _observable = thing[$mobx].values_.get(property);

      if (!_observable) die(27, property, getDebugName(thing));
      return _observable;
    }

    if (isAtom(thing) || isComputedValue(thing) || isReaction(thing)) {
      return thing;
    }
  } else if (isFunction(thing)) {
    if (isReaction(thing[$mobx])) {
      // disposer function
      return thing[$mobx];
    }
  }

  die(28);
}

function getAdministration(thing, property) {
  if (!thing) die(29);
  if (property !== undefined) return getAdministration(getAtom(thing, property));
  if (isAtom(thing) || isComputedValue(thing) || isReaction(thing)) return thing;
  if (isObservableMap(thing) || isObservableSet(thing)) return thing;
  if (thing[$mobx]) return thing[$mobx];
  die(24, thing);
}

function getDebugName(thing, property) {
  var named;

  if (property !== undefined) {
    named = getAtom(thing, property);
  } else if (isAction(thing)) {
    return thing.name;
  } else if (isObservableObject(thing) || isObservableMap(thing) || isObservableSet(thing)) {
    named = getAdministration(thing);
  } else {
    // valid for arrays as well
    named = getAtom(thing);
  }

  return named.name_;
}

var toString = objectPrototype.toString;

function deepEqual(a, b, depth) {
  if (depth === void 0) {
    depth = -1;
  }

  return eq(a, b, depth);
} // Copied from https://github.com/jashkenas/underscore/blob/5c237a7c682fb68fd5378203f0bf22dce1624854/underscore.js#L1186-L1289
// Internal recursive comparison function for `isEqual`.


function eq(a, b, depth, aStack, bStack) {
  // Identical objects are equal. `0 === -0`, but they aren't identical.
  // See the [Harmony `egal` proposal](http://wiki.ecmascript.org/doku.php?id=harmony:egal).
  if (a === b) return a !== 0 || 1 / a === 1 / b; // `null` or `undefined` only equal to itself (strict comparison).

  if (a == null || b == null) return false; // `NaN`s are equivalent, but non-reflexive.

  if (a !== a) return b !== b; // Exhaust primitive checks

  var type = typeof a;
  if (!isFunction(type) && type !== "object" && typeof b != "object") return false; // Compare `[[Class]]` names.

  var className = toString.call(a);
  if (className !== toString.call(b)) return false;

  switch (className) {
    // Strings, numbers, regular expressions, dates, and booleans are compared by value.
    case "[object RegExp]": // RegExps are coerced to strings for comparison (Note: '' + /a/i === '/a/i')

    case "[object String]":
      // Primitives and their corresponding object wrappers are equivalent; thus, `"5"` is
      // equivalent to `new String("5")`.
      return "" + a === "" + b;

    case "[object Number]":
      // `NaN`s are equivalent, but non-reflexive.
      // Object(NaN) is equivalent to NaN.
      if (+a !== +a) return +b !== +b; // An `egal` comparison is performed for other numeric values.

      return +a === 0 ? 1 / +a === 1 / b : +a === +b;

    case "[object Date]":
    case "[object Boolean]":
      // Coerce dates and booleans to numeric primitive values. Dates are compared by their
      // millisecond representations. Note that invalid dates with millisecond representations
      // of `NaN` are not equivalent.
      return +a === +b;

    case "[object Symbol]":
      return typeof Symbol !== "undefined" && Symbol.valueOf.call(a) === Symbol.valueOf.call(b);

    case "[object Map]":
    case "[object Set]":
      // Maps and Sets are unwrapped to arrays of entry-pairs, adding an incidental level.
      // Hide this extra level by increasing the depth.
      if (depth >= 0) {
        depth++;
      }

      break;
  } // Unwrap any wrapped objects.


  a = unwrap(a);
  b = unwrap(b);
  var areArrays = className === "[object Array]";

  if (!areArrays) {
    if (typeof a != "object" || typeof b != "object") return false; // Objects with different constructors are not equivalent, but `Object`s or `Array`s
    // from different frames are.

    var aCtor = a.constructor,
        bCtor = b.constructor;

    if (aCtor !== bCtor && !(isFunction(aCtor) && aCtor instanceof aCtor && isFunction(bCtor) && bCtor instanceof bCtor) && "constructor" in a && "constructor" in b) {
      return false;
    }
  }

  if (depth === 0) {
    return false;
  } else if (depth < 0) {
    depth = -1;
  } // Assume equality for cyclic structures. The algorithm for detecting cyclic
  // structures is adapted from ES 5.1 section 15.12.3, abstract operation `JO`.
  // Initializing stack of traversed objects.
  // It's done here since we only need them for objects and arrays comparison.


  aStack = aStack || [];
  bStack = bStack || [];
  var length = aStack.length;

  while (length--) {
    // Linear search. Performance is inversely proportional to the number of
    // unique nested structures.
    if (aStack[length] === a) return bStack[length] === b;
  } // Add the first object to the stack of traversed objects.


  aStack.push(a);
  bStack.push(b); // Recursively compare objects and arrays.

  if (areArrays) {
    // Compare array lengths to determine if a deep comparison is necessary.
    length = a.length;
    if (length !== b.length) return false; // Deep compare the contents, ignoring non-numeric properties.

    while (length--) {
      if (!eq(a[length], b[length], depth - 1, aStack, bStack)) return false;
    }
  } else {
    // Deep compare objects.
    var keys = Object.keys(a);
    var key;
    length = keys.length; // Ensure that both objects contain the same number of properties before comparing deep equality.

    if (Object.keys(b).length !== length) return false;

    while (length--) {
      // Deep compare each member
      key = keys[length];
      if (!(hasProp(b, key) && eq(a[key], b[key], depth - 1, aStack, bStack))) return false;
    }
  } // Remove the first object from the stack of traversed objects.


  aStack.pop();
  bStack.pop();
  return true;
}

function unwrap(a) {
  if (isObservableArray(a)) return a.slice();
  if (isES6Map(a) || isObservableMap(a)) return Array.from(a.entries());
  if (isES6Set(a) || isObservableSet(a)) return Array.from(a.entries());
  return a;
}

function makeIterable(iterator) {
  iterator[Symbol.iterator] = getSelf;
  return iterator;
}

function getSelf() {
  return this;
}

function isAnnotation(thing) {
  return (// Can be function
    thing instanceof Object && typeof thing.annotationType_ === "string" && isFunction(thing.make_) && isFunction(thing.extend_)
  );
}
/**
 * (c) Michel Weststrate 2015 - 2020
 * MIT Licensed
 *
 * Welcome to the mobx sources! To get an global overview of how MobX internally works,
 * this is a good place to start:
 * https://medium.com/@mweststrate/becoming-fully-reactive-an-in-depth-explanation-of-mobservable-55995262a254#.xvbh6qd74
 *
 * Source folders:
 * ===============
 *
 * - api/     Most of the public static methods exposed by the module can be found here.
 * - core/    Implementation of the MobX algorithm; atoms, derivations, reactions, dependency trees, optimizations. Cool stuff can be found here.
 * - types/   All the magic that is need to have observable objects, arrays and values is in this folder. Including the modifiers like `asFlat`.
 * - utils/   Utility stuff.
 *
 */


["Symbol", "Map", "Set", "Symbol"].forEach(function (m) {
  var g = getGlobal();

  if (typeof g[m] === "undefined") {
    die("MobX requires global '" + m + "' to be available or polyfilled");
  }
});

if (typeof __MOBX_DEVTOOLS_GLOBAL_HOOK__ === "object") {
  // See: https://github.com/andykog/mobx-devtools/
  __MOBX_DEVTOOLS_GLOBAL_HOOK__.injectMobx({
    spy: spy,
    extras: {
      getDebugName: getDebugName
    },
    $mobx: $mobx
  });
} // # sourceMappingURL=mobx.esm.js.map

cc._RF.pop();

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9hc3NldHMvU2NyaXB0L0NvbW1vbi9Nb2J4L21vYnguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFJLFFBQVEsR0FBRyxZQUFmO0FBQ0EsSUFBSSxVQUFVLEdBQUc7QUFDZixLQUFHLDRGQURZO0FBRWYsS0FBRyxTQUFTLENBQVQsQ0FBVyxjQUFYLEVBQTJCLEdBQTNCLEVBQWdDO0FBQ2pDLFdBQU8sbUJBQW1CLGNBQW5CLEdBQW9DLFFBQXBDLEdBQStDLEdBQUcsQ0FBQyxRQUFKLEVBQS9DLEdBQWdFLHFCQUF2RTtBQUNELEdBSmM7O0FBTWY7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNFLEtBQUcsd0VBakJZO0FBa0JmLEtBQUcsMEVBbEJZO0FBbUJmLEtBQUcscUVBbkJZO0FBb0JmLEtBQUcsaUVBcEJZO0FBcUJmLEtBQUcsb0VBckJZO0FBc0JmLE1BQUksaUVBdEJXO0FBdUJmLE1BQUksaUVBdkJXO0FBd0JmLE1BQUksb0JBeEJXO0FBeUJmLE1BQUksNkNBekJXO0FBMEJmLE1BQUksNkRBMUJXO0FBMkJmLE1BQUksb0NBM0JXO0FBNEJmLE1BQUksb0ZBNUJXO0FBNkJmLE1BQUksU0FBUyxDQUFULENBQVcsS0FBWCxFQUFrQixNQUFsQixFQUEwQjtBQUM1QixXQUFPLHVDQUF1QyxLQUF2QyxHQUErQyxrQkFBL0MsR0FBb0UsTUFBM0U7QUFDRCxHQS9CYztBQWdDZixNQUFJLG9HQWhDVztBQWlDZixNQUFJLFNBQVMsQ0FBVCxDQUFXLEtBQVgsRUFBa0I7QUFDcEIsV0FBTywyREFBMkQsS0FBSyxDQUFDLFdBQU4sQ0FBa0IsSUFBcEY7QUFDRCxHQW5DYztBQW9DZixNQUFJLFNBQVMsQ0FBVCxDQUFXLEtBQVgsRUFBa0I7QUFDcEIsV0FB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Q0EsU0FBTyxRQUFQO0FBQ0Q7O0FBRUQsU0FBUyxPQUFULEdBQW1CO0FBQ2pCLFNBQU8sSUFBUDtBQUNEOztBQUVELFNBQVMsWUFBVCxDQUFzQixLQUF0QixFQUE2QjtBQUMzQixTQUFRO0FBQ04sSUFBQSxLQUFLLFlBQVksTUFBakIsSUFBMkIsT0FBTyxLQUFLLENBQUMsZUFBYixLQUFpQyxRQUE1RCxJQUF3RSxVQUFVLENBQUMsS0FBSyxDQUFDLEtBQVAsQ0FBbEYsSUFBbUcsVUFBVSxDQUFDLEtBQUssQ0FBQyxPQUFQO0FBRC9HO0FBR0Q7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQSxDQUFDLFFBQUQsRUFBVyxLQUFYLEVBQWtCLEtBQWxCLEVBQXlCLFFBQXpCLEVBQW1DLE9BQW5DLENBQTJDLFVBQVUsQ0FBVixFQUFhO0FBQ3RELE1BQUksQ0FBQyxHQUFHLFNBQVMsRUFBakI7O0FBRUEsTUFBSSxPQUFPLENBQUMsQ0FBQyxDQUFELENBQVIsS0FBZ0IsV0FBcEIsRUFBaUM7QUFDL0IsSUFBQSxHQUFHLENBQUMsMkJBQTJCLENBQTNCLEdBQStCLGlDQUFoQyxDQUFIO0FBQ0Q7QUFDRixDQU5EOztBQVFBLElBQUksT0FBTyw2QkFBUCxLQUF5QyxRQUE3QyxFQUF1RDtBQUNyRDtBQUNBLEVBQUEsNkJBQTZCLENBQUMsVUFBOUIsQ0FBeUM7QUFDdkMsSUFBQSxHQUFHLEVBQUUsR0FEa0M7QUFFdkMsSUFBQSxNQUFNLEVBQUU7QUFDTixNQUFBLFlBQVksRUFBRTtBQURSLEtBRitCO0FBS3ZDLElBQUEsS0FBSyxFQUFFO0FBTGdDLEdBQXpDO0FBT0QsRUFFRCIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsidmFyIE5PREVfRU5WID0gXCJwcm9kdWN0aW9uXCI7XG52YXIgbmljZUVycm9ycyA9IHsgXG4gIDA6IFwiSW52YWxpZCB2YWx1ZSBmb3IgY29uZmlndXJhdGlvbiAnZW5mb3JjZUFjdGlvbnMnLCBleHBlY3RlZCAnbmV2ZXInLCAnYWx3YXlzJyBvciAnb2JzZXJ2ZWQnXCIsXG4gIDE6IGZ1bmN0aW9uIF8oYW5ub3RhdGlvblR5cGUsIGtleSkge1xuICAgIHJldHVybiBcIkNhbm5vdCBhcHBseSAnXCIgKyBhbm5vdGF0aW9uVHlwZSArIFwiJyB0byAnXCIgKyBrZXkudG9TdHJpbmcoKSArIFwiJzogRmllbGQgbm90IGZvdW5kLlwiO1xuICB9LFxuXG4gIC8qXG4gIDIocHJvcCkge1xuICAgICAgcmV0dXJuIGBpbnZhbGlkIGRlY29yYXRvciBmb3IgJyR7cHJvcC50b1N0cmluZygpfSdgXG4gIH0sXG4gIDMocHJvcCkge1xuICAgICAgcmV0dXJuIGBDYW5ub3QgZGVjb3JhdGUgJyR7cHJvcC50b1N0cmluZygpfSc6IGFjdGlvbiBjYW4gb25seSBiZSB1c2VkIG9uIHByb3BlcnRpZXMgd2l0aCBhIGZ1bmN0aW9uIHZhbHVlLmBcbiAgfSxcbiAgNChwcm9wKSB7XG4gICAgICByZXR1cm4gYENhbm5vdCBkZWNvcmF0ZSAnJHtwcm9wLnRvU3RyaW5nKCl9JzogY29tcHV0ZWQgY2FuIG9ubHkgYmUgdXNlZCBvbiBnZXR0ZXIgcHJvcGVydGllcy5gXG4gIH0sXG4gICovXG4gIDU6IFwiJ2tleXMoKScgY2FuIG9ubHkgYmUgdXNlZCBvbiBvYnNlcnZhYmxlIG9iamVjdHMsIGFycmF5cywgc2V0cyBhbmQgbWFwc1wiLFxuICA2OiBcIid2YWx1ZXMoKScgY2FuIG9ubHkgYmUgdXNlZCBvbiBvYnNlcnZhYmxlIG9iamVjdHMsIGFycmF5cywgc2V0cyBhbmQgbWFwc1wiLFxuICA3OiBcIidlbnRyaWVzKCknIGNhbiBvbmx5IGJlIHVzZWQgb24gb2JzZXJ2YWJsZSBvYmplY3RzLCBhcnJheXMgYW5kIG1hcHNcIixcbiAgODogXCInc2V0KCknIGNhbiBvbmx5IGJlIHVzZWQgb24gb2JzZXJ2YWJsZSBvYmplY3RzLCBhcnJheXMgYW5kIG1hcHNcIixcbiAgOTogXCIncmVtb3ZlKCknIGNhbiBvbmx5IGJlIHVzZWQgb24gb2JzZXJ2YWJsZSBvYmplY3RzLCBhcnJheXMgYW5kIG1hcHNcIixcbiAgMTA6IFwiJ2hhcygpJyBjYW4gb25seSBiZSB1c2VkIG9uIG9ic2VydmFibGUgb2JqZWN0cywgYXJyYXlzIGFuZCBtYXBzXCIsXG4gIDExOiBcIidnZXQoKScgY2FuIG9ubHkgYmUgdXNlZCBvbiBvYnNlcnZhYmxlIG9iamVjdHMsIGFycmF5cyBhbmQgbWFwc1wiLFxuICAxMjogXCJJbnZhbGlkIGFubm90YXRpb25cIixcbiAgMTM6IFwiRHluYW1pYyBvYnNlcnZhYmxlIG9iamVjdHMgY2Fubm90IGJlIGZyb3plblwiLFxuICAxNDogXCJJbnRlcmNlcHQgaGFuZGxlcnMgc2hvdWxkIHJldHVybiBub3RoaW5nIG9yIGEgY2hhbmdlIG9iamVjdFwiLFxuICAxNTogXCJPYnNlcnZhYmxlIGFycmF5cyBjYW5ub3QgYmUgZnJvemVuXCIsXG4gIDE2OiBcIk1vZGlmaWNhdGlvbiBleGNlcHRpb246IHRoZSBpbnRlcm5hbCBzdHJ1Y3R1cmUgb2YgYW4gb2JzZXJ2YWJsZSBhcnJheSB3YXMgY2hhbmdlZC5cIixcbiAgMTc6IGZ1bmN0aW9uIF8oaW5kZXgsIGxlbmd0aCkge1xuICAgIHJldHVybiBcIlttb2J4LmFycmF5XSBJbmRleCBvdXQgb2YgYm91bmRzLCBcIiArIGluZGV4ICsgXCIgaXMgbGFyZ2VyIHRoYW4gXCIgKyBsZW5ndGg7XG4gIH0sXG4gIDE4OiBcIm1vYngubWFwIHJlcXVpcmVzIE1hcCBwb2x5ZmlsbCBmb3IgdGhlIGN1cnJlbnQgYnJvd3Nlci4gQ2hlY2sgYmFiZWwtcG9seWZpbGwgb3IgY29yZS1qcy9lczYvbWFwLmpzXCIsXG4gIDE5OiBmdW5jdGlvbiBfKG90aGVyKSB7XG4gICAgcmV0dXJuIFwiQ2Fubm90IGluaXRpYWxpemUgZnJvbSBjbGFzc2VzIHRoYXQgaW5oZXJpdCBmcm9tIE1hcDogXCIgKyBvdGhlci5jb25zdHJ1Y3Rvci5uYW1lO1xuICB9LFxuICAyMDogZnVuY3Rpb24gXyhvdGhlcikge1xuICAgIHJldHVybiBcIkNhbm5vdCBpbml0aWFsaXplIG1hcCBmcm9tIFwiICsgb3RoZXI7XG4gIH0sXG4gIDIxOiBmdW5jdGlvbiBfKGRhdGFTdHJ1Y3R1cmUpIHtcbiAgICByZXR1cm4gXCJDYW5ub3QgY29udmVydCB0byBtYXAgZnJvbSAnXCIgKyBkYXRhU3RydWN0dXJlICsgXCInXCI7XG4gIH0sXG4gIDIyOiBcIm1vYnguc2V0IHJlcXVpcmVzIFNldCBwb2x5ZmlsbCBmb3IgdGhlIGN1cnJlbnQgYnJvd3Nlci4gQ2hlY2sgYmFiZWwtcG9seWZpbGwgb3IgY29yZS1qcy9lczYvc2V0LmpzXCIsXG4gIDIzOiBcIkl0IGlzIG5vdCBwb3NzaWJsZSB0byBnZXQgaW5kZXggYXRvbXMgZnJvbSBhcnJheXNcIixcbiAgMjQ6IGZ1bmN0aW9uIF8odGhpbmcpIHtcbiAgICByZXR1cm4gXCJDYW5ub3Qgb2J0YWluIGFkbWluaXN0cmF0aW9uIGZyb20gXCIgKyB0aGluZztcbiAgfSxcbiAgMjU6IGZ1bmN0aW9uIF8ocHJvcGVydHksIG5hbWUpIHtcbiAgICByZXR1cm4gXCJ0aGUgZW50cnkgJ1wiICsgcHJvcGVydHkgKyBcIicgZG9lcyBub3QgZXhpc3QgaW4gdGhlIG9ic2VydmFibGUgbWFwICdcIiArIG5hbWUgKyBcIidcIjtcbiAgfSxcbiAgMjY6IFwicGxlYXNlIHNwZWNpZnkgYSBwcm9wZXJ0eVwiLFxuICAyNzogZnVuY3Rpb24gXyhwcm9wZXJ0eSwgbmFtZSkge1xuICAgIHJldHVybiBcIm5vIG9ic2VydmFibGUgcHJvcGVydHkgJ1wiICsgcHJvcGVydHkudG9TdHJpbmcoKSArIFwiJyBmb3VuZCBvbiB0aGUgb2JzZXJ2YWJsZSBvYmplY3QgJ1wiICsgbmFtZSArIFwiJ1wiO1xuICB9LFxuICAyODogZnVuY3Rpb24gXyh0aGluZykge1xuICAgIHJldHVybiBcIkNhbm5vdCBvYnRhaW4gYXRvbSBmcm9tIFwiICsgdGhpbmc7XG4gIH0sXG4gIDI5OiBcIkV4cGVjdGluZyBzb21lIG9iamVjdFwiLFxuICAzMDogXCJpbnZhbGlkIGFjdGlvbiBzdGFjay4gZGlkIHlvdSBmb3JnZXQgdG8gZmluaXNoIGFuIGFjdGlvbj9cIixcbiAgMzE6IFwibWlzc2luZyBvcHRpb24gZm9yIGNvbXB1dGVkOiBnZXRcIixcbiAgMzI6IGZ1bmN0aW9uIF8obmFtZSwgZGVyaXZhdGlvbikge1xuICAgIHJldHVybiBcIkN5Y2xlIGRldGVjdGVkIGluIGNvbXB1dGF0aW9uIFwiICsgbmFtZSArIFwiOiBcIiArIGRlcml2YXRpb247XG4gIH0sXG4gIDMzOiBmdW5jdGlvbiBfKG5hbWUpIHtcbiAgICByZXR1cm4gXCJUaGUgc2V0dGVyIG9mIGNvbXB1dGVkIHZhbHVlICdcIiArIG5hbWUgKyBcIicgaXMgdHJ5aW5nIHRvIHVwZGF0ZSBpdHNlbGYuIERpZCB5b3UgaW50ZW5kIHRvIHVwZGF0ZSBhbiBfb2JzZXJ2YWJsZV8gdmFsdWUsIGluc3RlYWQgb2YgdGhlIGNvbXB1dGVkIHByb3BlcnR5P1wiO1xuICB9LFxuICAzNDogZnVuY3Rpb24gXyhuYW1lKSB7XG4gICAgcmV0dXJuIFwiW0NvbXB1dGVkVmFsdWUgJ1wiICsgbmFtZSArIFwiJ10gSXQgaXMgbm90IHBvc3NpYmxlIHRvIGFzc2lnbiBhIG5ldyB2YWx1ZSB0byBhIGNvbXB1dGVkIHZhbHVlLlwiO1xuICB9LFxuICAzNTogXCJUaGVyZSBhcmUgbXVsdGlwbGUsIGRpZmZlcmVudCB2ZXJzaW9ucyBvZiBNb2JYIGFjdGl2ZS4gTWFrZSBzdXJlIE1vYlggaXMgbG9hZGVkIG9ubHkgb25jZSBvciB1c2UgYGNvbmZpZ3VyZSh7IGlzb2xhdGVHbG9iYWxTdGF0ZTogdHJ1ZSB9KWBcIixcbiAgMzY6IFwiaXNvbGF0ZUdsb2JhbFN0YXRlIHNob3VsZCBiZSBjYWxsZWQgYmVmb3JlIE1vYlggaXMgcnVubmluZyBhbnkgcmVhY3Rpb25zXCIsXG4gIDM3OiBmdW5jdGlvbiBfKG1ldGhvZCkge1xuICAgIHJldHVybiBcIlttb2J4XSBgb2JzZXJ2YWJsZUFycmF5LlwiICsgbWV0aG9kICsgXCIoKWAgbXV0YXRlcyB0aGUgYXJyYXkgaW4tcGxhY2UsIHdoaWNoIGlzIG5vdCBhbGxvd2VkIGluc2lkZSBhIGRlcml2YXRpb24uIFVzZSBgYXJyYXkuc2xpY2UoKS5cIiArIG1ldGhvZCArIFwiKClgIGluc3RlYWRcIjtcbiAgfSxcbiAgMzg6IFwiJ293bktleXMoKScgY2FuIG9ubHkgYmUgdXNlZCBvbiBvYnNlcnZhYmxlIG9iamVjdHNcIixcbiAgMzk6IFwiJ2RlZmluZVByb3BlcnR5KCknIGNhbiBvbmx5IGJlIHVzZWQgb24gb2JzZXJ2YWJsZSBvYmplY3RzXCJcbn07XG52YXIgZXJyb3JzID0gTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gbmljZUVycm9ycyA6IHt9O1xuZnVuY3Rpb24gZGllKGVycm9yKSB7XG4gIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4gPiAxID8gX2xlbiAtIDEgOiAwKSwgX2tleSA9IDE7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICBhcmdzW19rZXkgLSAxXSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgfVxuXG4gIGlmIChOT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgICB2YXIgZSA9IHR5cGVvZiBlcnJvciA9PT0gXCJzdHJpbmdcIiA/IGVycm9yIDogZXJyb3JzW2Vycm9yXTtcbiAgICBpZiAodHlwZW9mIGUgPT09IFwiZnVuY3Rpb25cIikgZSA9IGUuYXBwbHkobnVsbCwgYXJncyk7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiW01vYlhdIFwiICsgZSk7XG4gIH1cblxuICB0aHJvdyBuZXcgRXJyb3IodHlwZW9mIGVycm9yID09PSBcIm51bWJlclwiID8gXCJbTW9iWF0gbWluaWZpZWQgZXJyb3IgbnI6IFwiICsgZXJyb3IgKyAoYXJncy5sZW5ndGggPyBcIiBcIiArIGFyZ3MubWFwKFN0cmluZykuam9pbihcIixcIikgOiBcIlwiKSArIFwiLiBGaW5kIHRoZSBmdWxsIGVycm9yIGF0OiBodHRwczovL2dpdGh1Yi5jb20vbW9ieGpzL21vYngvYmxvYi9tYWluL3BhY2thZ2VzL21vYngvc3JjL2Vycm9ycy50c1wiIDogXCJbTW9iWF0gXCIgKyBlcnJvcik7XG59XG5cbnZhciBtb2NrR2xvYmFsID0ge307XG5mdW5jdGlvbiBnZXRHbG9iYWwoKSB7XG4gIGlmICh0eXBlb2YgZ2xvYmFsVGhpcyAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiBnbG9iYWxUaGlzO1xuICB9XG5cbiAgaWYgKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4gd2luZG93O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4gZ2xvYmFsO1xuICB9XG5cbiAgaWYgKHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHNlbGY7XG4gIH1cblxuICByZXR1cm4gbW9ja0dsb2JhbDtcbn1cblxudmFyIGFzc2lnbiA9IE9iamVjdC5hc3NpZ247XG52YXIgZ2V0RGVzY3JpcHRvciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG52YXIgZGVmaW5lUHJvcGVydHkgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG52YXIgb2JqZWN0UHJvdG90eXBlID0gT2JqZWN0LnByb3RvdHlwZTtcbnZhciBFTVBUWV9BUlJBWSA9IFtdO1xuT2JqZWN0LmZyZWV6ZShFTVBUWV9BUlJBWSk7XG52YXIgRU1QVFlfT0JKRUNUID0ge307XG5PYmplY3QuZnJlZXplKEVNUFRZX09CSkVDVCk7XG52YXIgaGFzUHJveHkgPSB0eXBlb2YgUHJveHkgIT09IFwidW5kZWZpbmVkXCI7XG52YXIgcGxhaW5PYmplY3RTdHJpbmcgPSAvKiNfX1BVUkVfXyovT2JqZWN0LnRvU3RyaW5nKCk7XG5mdW5jdGlvbiBhc3NlcnRQcm94aWVzKCkge1xuICBpZiAoIWhhc1Byb3h5KSB7XG4gICAgZGllKE5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IFwiYFByb3h5YCBvYmplY3RzIGFyZSBub3QgYXZhaWxhYmxlIGluIHRoZSBjdXJyZW50IGVudmlyb25tZW50LiBQbGVhc2UgY29uZmlndXJlIE1vYlggdG8gZW5hYmxlIGEgZmFsbGJhY2sgaW1wbGVtZW50YXRpb24uYFwiIDogXCJQcm94eSBub3QgYXZhaWxhYmxlXCIpO1xuICB9XG59XG5mdW5jdGlvbiB3YXJuQWJvdXRQcm94eVJlcXVpcmVtZW50KG1zZykge1xuICBpZiAoTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiICYmIGdsb2JhbFN0YXRlLnZlcmlmeVByb3hpZXMpIHtcbiAgICBkaWUoXCJNb2JYIGlzIGN1cnJlbnRseSBjb25maWd1cmVkIHRvIGJlIGFibGUgdG8gcnVuIGluIEVTNSBtb2RlLCBidXQgaW4gRVM1IE1vYlggd29uJ3QgYmUgYWJsZSB0byBcIiArIG1zZyk7XG4gIH1cbn1cbmZ1bmN0aW9uIGdldE5leHRJZCgpIHtcbiAgcmV0dXJuICsrZ2xvYmFsU3RhdGUubW9ieEd1aWQ7XG59XG4vKipcbiAqIE1ha2VzIHN1cmUgdGhhdCB0aGUgcHJvdmlkZWQgZnVuY3Rpb24gaXMgaW52b2tlZCBhdCBtb3N0IG9uY2UuXG4gKi9cblxuZnVuY3Rpb24gb25jZShmdW5jKSB7XG4gIHZhciBpbnZva2VkID0gZmFsc2U7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKGludm9rZWQpIHJldHVybjtcbiAgICBpbnZva2VkID0gdHJ1ZTtcbiAgICByZXR1cm4gZnVuYy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9O1xufVxudmFyIG5vb3AgPSBmdW5jdGlvbiBub29wKCkge307XG5mdW5jdGlvbiBpc0Z1bmN0aW9uKGZuKSB7XG4gIHJldHVybiB0eXBlb2YgZm4gPT09IFwiZnVuY3Rpb25cIjtcbn1cbmZ1bmN0aW9uIGlzU3RyaW5naXNoKHZhbHVlKSB7XG4gIHZhciB0ID0gdHlwZW9mIHZhbHVlO1xuXG4gIHN3aXRjaCAodCkge1xuICAgIGNhc2UgXCJzdHJpbmdcIjpcbiAgICBjYXNlIFwic3ltYm9sXCI6XG4gICAgY2FzZSBcIm51bWJlclwiOlxuICAgICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59XG5mdW5jdGlvbiBpc09iamVjdCh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgIT09IG51bGwgJiYgdHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiO1xufVxuZnVuY3Rpb24gaXNQbGFpbk9iamVjdCh2YWx1ZSkge1xuICB2YXIgX3Byb3RvJGNvbnN0cnVjdG9yO1xuXG4gIGlmICghaXNPYmplY3QodmFsdWUpKSByZXR1cm4gZmFsc2U7XG4gIHZhciBwcm90byA9IE9iamVjdC5nZXRQcm90b3R5cGVPZih2YWx1ZSk7XG4gIGlmIChwcm90byA9PSBudWxsKSByZXR1cm4gdHJ1ZTtcbiAgcmV0dXJuICgoX3Byb3RvJGNvbnN0cnVjdG9yID0gcHJvdG8uY29uc3RydWN0b3IpID09IG51bGwgPyB2b2lkIDAgOiBfcHJvdG8kY29uc3RydWN0b3IudG9TdHJpbmcoKSkgPT09IHBsYWluT2JqZWN0U3RyaW5nO1xufSAvLyBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMzc4NjUxNzBcblxuZnVuY3Rpb24gaXNHZW5lcmF0b3Iob2JqKSB7XG4gIHZhciBjb25zdHJ1Y3RvciA9IG9iaiA9PSBudWxsID8gdm9pZCAwIDogb2JqLmNvbnN0cnVjdG9yO1xuICBpZiAoIWNvbnN0cnVjdG9yKSByZXR1cm4gZmFsc2U7XG4gIGlmIChcIkdlbmVyYXRvckZ1bmN0aW9uXCIgPT09IGNvbnN0cnVjdG9yLm5hbWUgfHwgXCJHZW5lcmF0b3JGdW5jdGlvblwiID09PSBjb25zdHJ1Y3Rvci5kaXNwbGF5TmFtZSkgcmV0dXJuIHRydWU7XG4gIHJldHVybiBmYWxzZTtcbn1cbmZ1bmN0aW9uIGFkZEhpZGRlblByb3Aob2JqZWN0LCBwcm9wTmFtZSwgdmFsdWUpIHtcbiAgZGVmaW5lUHJvcGVydHkob2JqZWN0LCBwcm9wTmFtZSwge1xuICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICB2YWx1ZTogdmFsdWVcbiAgfSk7XG59XG5mdW5jdGlvbiBhZGRIaWRkZW5GaW5hbFByb3Aob2JqZWN0LCBwcm9wTmFtZSwgdmFsdWUpIHtcbiAgZGVmaW5lUHJvcGVydHkob2JqZWN0LCBwcm9wTmFtZSwge1xuICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgIHdyaXRhYmxlOiBmYWxzZSxcbiAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgdmFsdWU6IHZhbHVlXG4gIH0pO1xufVxuZnVuY3Rpb24gY3JlYXRlSW5zdGFuY2VvZlByZWRpY2F0ZShuYW1lLCB0aGVDbGFzcykge1xuICB2YXIgcHJvcE5hbWUgPSBcImlzTW9iWFwiICsgbmFtZTtcbiAgdGhlQ2xhc3MucHJvdG90eXBlW3Byb3BOYW1lXSA9IHRydWU7XG4gIHJldHVybiBmdW5jdGlvbiAoeCkge1xuICAgIHJldHVybiBpc09iamVjdCh4KSAmJiB4W3Byb3BOYW1lXSA9PT0gdHJ1ZTtcbiAgfTtcbn1cbmZ1bmN0aW9uIGlzRVM2TWFwKHRoaW5nKSB7XG4gIHJldHVybiB0aGluZyBpbnN0YW5jZW9mIE1hcDtcbn1cbmZ1bmN0aW9uIGlzRVM2U2V0KHRoaW5nKSB7XG4gIHJldHVybiB0aGluZyBpbnN0YW5jZW9mIFNldDtcbn1cbnZhciBoYXNHZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPSB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyAhPT0gXCJ1bmRlZmluZWRcIjtcbi8qKlxuICogUmV0dXJucyB0aGUgZm9sbG93aW5nOiBvd24gZW51bWVyYWJsZSBrZXlzIGFuZCBzeW1ib2xzLlxuICovXG5cbmZ1bmN0aW9uIGdldFBsYWluT2JqZWN0S2V5cyhvYmplY3QpIHtcbiAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhvYmplY3QpOyAvLyBOb3Qgc3VwcG9ydGVkIGluIElFLCBzbyB0aGVyZSBhcmUgbm90IGdvaW5nIHRvIGJlIHN5bWJvbCBwcm9wcyBhbnl3YXkuLi5cblxuICBpZiAoIWhhc0dldE93blByb3BlcnR5U3ltYm9scykgcmV0dXJuIGtleXM7XG4gIHZhciBzeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhvYmplY3QpO1xuICBpZiAoIXN5bWJvbHMubGVuZ3RoKSByZXR1cm4ga2V5cztcbiAgcmV0dXJuIFtdLmNvbmNhdChrZXlzLCBzeW1ib2xzLmZpbHRlcihmdW5jdGlvbiAocykge1xuICAgIHJldHVybiBvYmplY3RQcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChvYmplY3QsIHMpO1xuICB9KSk7XG59IC8vIEZyb20gSW1tZXIgdXRpbHNcbi8vIFJldHVybnMgYWxsIG93biBrZXlzLCBpbmNsdWRpbmcgbm9uLWVudW1lcmFibGUgYW5kIHN5bWJvbGljXG5cbnZhciBvd25LZXlzID0gdHlwZW9mIFJlZmxlY3QgIT09IFwidW5kZWZpbmVkXCIgJiYgUmVmbGVjdC5vd25LZXlzID8gUmVmbGVjdC5vd25LZXlzIDogaGFzR2V0T3duUHJvcGVydHlTeW1ib2xzID8gZnVuY3Rpb24gKG9iaikge1xuICByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMob2JqKS5jb25jYXQoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhvYmopKTtcbn0gOlxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbk9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzO1xuZnVuY3Rpb24gc3RyaW5naWZ5S2V5KGtleSkge1xuICBpZiAodHlwZW9mIGtleSA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIGtleTtcbiAgaWYgKHR5cGVvZiBrZXkgPT09IFwic3ltYm9sXCIpIHJldHVybiBrZXkudG9TdHJpbmcoKTtcbiAgcmV0dXJuIG5ldyBTdHJpbmcoa2V5KS50b1N0cmluZygpO1xufVxuZnVuY3Rpb24gdG9QcmltaXRpdmUodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlID09PSBudWxsID8gbnVsbCA6IHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIiA/IFwiXCIgKyB2YWx1ZSA6IHZhbHVlO1xufVxuZnVuY3Rpb24gaGFzUHJvcCh0YXJnZXQsIHByb3ApIHtcbiAgcmV0dXJuIG9iamVjdFByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHRhcmdldCwgcHJvcCk7XG59IC8vIEZyb20gSW1tZXIgdXRpbHNcblxudmFyIGdldE93blByb3BlcnR5RGVzY3JpcHRvcnMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyB8fCBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKHRhcmdldCkge1xuICAvLyBQb2x5ZmlsbCBuZWVkZWQgZm9yIEhlcm1lcyBhbmQgSUUsIHNlZSBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svaGVybWVzL2lzc3Vlcy8yNzRcbiAgdmFyIHJlcyA9IHt9OyAvLyBOb3RlOiB3aXRob3V0IHBvbHlmaWxsIGZvciBvd25LZXlzLCBzeW1ib2xzIHdvbid0IGJlIHBpY2tlZCB1cFxuXG4gIG93bktleXModGFyZ2V0KS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICByZXNba2V5XSA9IGdldERlc2NyaXB0b3IodGFyZ2V0LCBrZXkpO1xuICB9KTtcbiAgcmV0dXJuIHJlcztcbn07XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07XG4gICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlO1xuICAgIGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTtcbiAgICBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7XG4gIGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpO1xuICBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7XG4gIHJldHVybiBDb25zdHJ1Y3Rvcjtcbn1cblxuZnVuY3Rpb24gX2V4dGVuZHMoKSB7XG4gIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07XG5cbiAgICAgIGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHtcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHtcbiAgICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhcmdldDtcbiAgfTtcblxuICByZXR1cm4gX2V4dGVuZHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn1cblxuZnVuY3Rpb24gX2luaGVyaXRzTG9vc2Uoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHtcbiAgc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzLnByb3RvdHlwZSk7XG4gIHN1YkNsYXNzLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IHN1YkNsYXNzO1xuICBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzO1xufVxuXG5mdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHtcbiAgaWYgKHNlbGYgPT09IHZvaWQgMCkge1xuICAgIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTtcbiAgfVxuXG4gIHJldHVybiBzZWxmO1xufVxuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7XG4gIGlmICghbykgcmV0dXJuO1xuICBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pO1xuICB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7XG4gIGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7XG4gIGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pO1xuICBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7XG59XG5cbmZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7XG4gIGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoO1xuXG4gIGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgYXJyMltpXSA9IGFycltpXTtcblxuICByZXR1cm4gYXJyMjtcbn1cblxuZnVuY3Rpb24gX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXJMb29zZShvLCBhbGxvd0FycmF5TGlrZSkge1xuICB2YXIgaXQ7XG5cbiAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwidW5kZWZpbmVkXCIgfHwgb1tTeW1ib2wuaXRlcmF0b3JdID09IG51bGwpIHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShvKSB8fCAoaXQgPSBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobykpIHx8IGFsbG93QXJyYXlMaWtlICYmIG8gJiYgdHlwZW9mIG8ubGVuZ3RoID09PSBcIm51bWJlclwiKSB7XG4gICAgICBpZiAoaXQpIG8gPSBpdDtcbiAgICAgIHZhciBpID0gMDtcbiAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChpID49IG8ubGVuZ3RoKSByZXR1cm4ge1xuICAgICAgICAgIGRvbmU6IHRydWVcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBkb25lOiBmYWxzZSxcbiAgICAgICAgICB2YWx1ZTogb1tpKytdXG4gICAgICAgIH07XG4gICAgICB9O1xuICAgIH1cblxuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gaXRlcmF0ZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTtcbiAgfVxuXG4gIGl0ID0gb1tTeW1ib2wuaXRlcmF0b3JdKCk7XG4gIHJldHVybiBpdC5uZXh0LmJpbmQoaXQpO1xufVxuXG52YXIgc3RvcmVkQW5ub3RhdGlvbnNTeW1ib2wgPSAvKiNfX1BVUkVfXyovU3ltYm9sKFwibW9ieC1zdG9yZWQtYW5ub3RhdGlvbnNcIik7XG4vKipcbiAqIENyZWF0ZXMgYSBmdW5jdGlvbiB0aGF0IGFjdHMgYXNcbiAqIC0gZGVjb3JhdG9yXG4gKiAtIGFubm90YXRpb24gb2JqZWN0XG4gKi9cblxuZnVuY3Rpb24gY3JlYXRlRGVjb3JhdG9yQW5ub3RhdGlvbihhbm5vdGF0aW9uKSB7XG4gIGZ1bmN0aW9uIGRlY29yYXRvcih0YXJnZXQsIHByb3BlcnR5KSB7XG4gICAgc3RvcmVBbm5vdGF0aW9uKHRhcmdldCwgcHJvcGVydHksIGFubm90YXRpb24pO1xuICB9XG5cbiAgcmV0dXJuIE9iamVjdC5hc3NpZ24oZGVjb3JhdG9yLCBhbm5vdGF0aW9uKTtcbn1cbi8qKlxuICogU3RvcmVzIGFubm90YXRpb24gdG8gcHJvdG90eXBlLFxuICogc28gaXQgY2FuIGJlIGluc3BlY3RlZCBsYXRlciBieSBgbWFrZU9ic2VydmFibGVgIGNhbGxlZCBmcm9tIGNvbnN0cnVjdG9yXG4gKi9cblxuZnVuY3Rpb24gc3RvcmVBbm5vdGF0aW9uKHByb3RvdHlwZSwga2V5LCBhbm5vdGF0aW9uKSB7XG4gIGlmICghaGFzUHJvcChwcm90b3R5cGUsIHN0b3JlZEFubm90YXRpb25zU3ltYm9sKSkge1xuICAgIGFkZEhpZGRlblByb3AocHJvdG90eXBlLCBzdG9yZWRBbm5vdGF0aW9uc1N5bWJvbCwgX2V4dGVuZHMoe30sIHByb3RvdHlwZVtzdG9yZWRBbm5vdGF0aW9uc1N5bWJvbF0pKTtcbiAgfSAvLyBAb3ZlcnJpZGUgbXVzdCBvdmVycmlkZSBzb21ldGhpbmdcblxuXG4gIGlmIChOT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgJiYgaXNPdmVycmlkZShhbm5vdGF0aW9uKSAmJiAhaGFzUHJvcChwcm90b3R5cGVbc3RvcmVkQW5ub3RhdGlvbnNTeW1ib2xdLCBrZXkpKSB7XG4gICAgdmFyIGZpZWxkTmFtZSA9IHByb3RvdHlwZS5jb25zdHJ1Y3Rvci5uYW1lICsgXCIucHJvdG90eXBlLlwiICsga2V5LnRvU3RyaW5nKCk7XG4gICAgZGllKFwiJ1wiICsgZmllbGROYW1lICsgXCInIGlzIGRlY29yYXRlZCB3aXRoICdvdmVycmlkZScsIFwiICsgXCJidXQgbm8gc3VjaCBkZWNvcmF0ZWQgbWVtYmVyIHdhcyBmb3VuZCBvbiBwcm90b3R5cGUuXCIpO1xuICB9IC8vIENhbm5vdCByZS1kZWNvcmF0ZVxuXG5cbiAgYXNzZXJ0Tm90RGVjb3JhdGVkKHByb3RvdHlwZSwgYW5ub3RhdGlvbiwga2V5KTsgLy8gSWdub3JlIG92ZXJyaWRlXG5cbiAgaWYgKCFpc092ZXJyaWRlKGFubm90YXRpb24pKSB7XG4gICAgcHJvdG90eXBlW3N0b3JlZEFubm90YXRpb25zU3ltYm9sXVtrZXldID0gYW5ub3RhdGlvbjtcbiAgfVxufVxuXG5mdW5jdGlvbiBhc3NlcnROb3REZWNvcmF0ZWQocHJvdG90eXBlLCBhbm5vdGF0aW9uLCBrZXkpIHtcbiAgaWYgKE5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiAmJiAhaXNPdmVycmlkZShhbm5vdGF0aW9uKSAmJiBoYXNQcm9wKHByb3RvdHlwZVtzdG9yZWRBbm5vdGF0aW9uc1N5bWJvbF0sIGtleSkpIHtcbiAgICB2YXIgZmllbGROYW1lID0gcHJvdG90eXBlLmNvbnN0cnVjdG9yLm5hbWUgKyBcIi5wcm90b3R5cGUuXCIgKyBrZXkudG9TdHJpbmcoKTtcbiAgICB2YXIgY3VycmVudEFubm90YXRpb25UeXBlID0gcHJvdG90eXBlW3N0b3JlZEFubm90YXRpb25zU3ltYm9sXVtrZXldLmFubm90YXRpb25UeXBlXztcbiAgICB2YXIgcmVxdWVzdGVkQW5ub3RhdGlvblR5cGUgPSBhbm5vdGF0aW9uLmFubm90YXRpb25UeXBlXztcbiAgICBkaWUoXCJDYW5ub3QgYXBwbHkgJ0BcIiArIHJlcXVlc3RlZEFubm90YXRpb25UeXBlICsgXCInIHRvICdcIiArIGZpZWxkTmFtZSArIFwiJzpcIiArIChcIlxcblRoZSBmaWVsZCBpcyBhbHJlYWR5IGRlY29yYXRlZCB3aXRoICdAXCIgKyBjdXJyZW50QW5ub3RhdGlvblR5cGUgKyBcIicuXCIpICsgXCJcXG5SZS1kZWNvcmF0aW5nIGZpZWxkcyBpcyBub3QgYWxsb3dlZC5cIiArIFwiXFxuVXNlICdAb3ZlcnJpZGUnIGRlY29yYXRvciBmb3IgbWV0aG9kcyBvdmVycmlkZW4gYnkgc3ViY2xhc3MuXCIpO1xuICB9XG59XG4vKipcbiAqIENvbGxlY3RzIGFubm90YXRpb25zIGZyb20gcHJvdG90eXBlcyBhbmQgc3RvcmVzIHRoZW0gb24gdGFyZ2V0IChpbnN0YW5jZSlcbiAqL1xuXG5cbmZ1bmN0aW9uIGNvbGxlY3RTdG9yZWRBbm5vdGF0aW9ucyh0YXJnZXQpIHtcbiAgaWYgKCFoYXNQcm9wKHRhcmdldCwgc3RvcmVkQW5ub3RhdGlvbnNTeW1ib2wpKSB7XG4gICAgaWYgKE5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiAmJiAhdGFyZ2V0W3N0b3JlZEFubm90YXRpb25zU3ltYm9sXSkge1xuICAgICAgZGllKFwiTm8gYW5ub3RhdGlvbnMgd2VyZSBwYXNzZWQgdG8gbWFrZU9ic2VydmFibGUsIGJ1dCBubyBkZWNvcmF0ZWQgbWVtYmVycyBoYXZlIGJlZW4gZm91bmQgZWl0aGVyXCIpO1xuICAgIH0gLy8gV2UgbmVlZCBhIGNvcHkgYXMgd2Ugd2lsbCByZW1vdmUgYW5ub3RhdGlvbiBmcm9tIHRoZSBsaXN0IG9uY2UgaXQncyBhcHBsaWVkLlxuXG5cbiAgICBhZGRIaWRkZW5Qcm9wKHRhcmdldCwgc3RvcmVkQW5ub3RhdGlvbnNTeW1ib2wsIF9leHRlbmRzKHt9LCB0YXJnZXRbc3RvcmVkQW5ub3RhdGlvbnNTeW1ib2xdKSk7XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0W3N0b3JlZEFubm90YXRpb25zU3ltYm9sXTtcbn1cblxudmFyICRtb2J4ID0gLyojX19QVVJFX18qL1N5bWJvbChcIm1vYnggYWRtaW5pc3RyYXRpb25cIik7XG52YXIgQXRvbSA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XG4gIC8vIGZvciBlZmZlY3RpdmUgdW5vYnNlcnZpbmcuIEJhc2VBdG9tIGhhcyB0cnVlLCBmb3IgZXh0cmEgb3B0aW1pemF0aW9uLCBzbyBpdHMgb25CZWNvbWVVbm9ic2VydmVkIG5ldmVyIGdldHMgY2FsbGVkLCBiZWNhdXNlIGl0J3Mgbm90IG5lZWRlZFxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYSBuZXcgYXRvbS4gRm9yIGRlYnVnZ2luZyBwdXJwb3NlcyBpdCBpcyByZWNvbW1lbmRlZCB0byBnaXZlIGl0IGEgbmFtZS5cbiAgICogVGhlIG9uQmVjb21lT2JzZXJ2ZWQgYW5kIG9uQmVjb21lVW5vYnNlcnZlZCBjYWxsYmFja3MgY2FuIGJlIHVzZWQgZm9yIHJlc291cmNlIG1hbmFnZW1lbnQuXG4gICAqL1xuICBmdW5jdGlvbiBBdG9tKG5hbWVfKSB7XG4gICAgaWYgKG5hbWVfID09PSB2b2lkIDApIHtcbiAgICAgIG5hbWVfID0gTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gXCJBdG9tQFwiICsgZ2V0TmV4dElkKCkgOiBcIkF0b21cIjtcbiAgICB9XG5cbiAgICB0aGlzLm5hbWVfID0gdm9pZCAwO1xuICAgIHRoaXMuaXNQZW5kaW5nVW5vYnNlcnZhdGlvbl8gPSBmYWxzZTtcbiAgICB0aGlzLmlzQmVpbmdPYnNlcnZlZF8gPSBmYWxzZTtcbiAgICB0aGlzLm9ic2VydmVyc18gPSBuZXcgU2V0KCk7XG4gICAgdGhpcy5kaWZmVmFsdWVfID0gMDtcbiAgICB0aGlzLmxhc3RBY2Nlc3NlZEJ5XyA9IDA7XG4gICAgdGhpcy5sb3dlc3RPYnNlcnZlclN0YXRlXyA9IElEZXJpdmF0aW9uU3RhdGVfLk5PVF9UUkFDS0lOR187XG4gICAgdGhpcy5vbkJPTCA9IHZvaWQgMDtcbiAgICB0aGlzLm9uQlVPTCA9IHZvaWQgMDtcbiAgICB0aGlzLm5hbWVfID0gbmFtZV87XG4gIH0gLy8gb25CZWNvbWVPYnNlcnZlZExpc3RlbmVyc1xuXG5cbiAgdmFyIF9wcm90byA9IEF0b20ucHJvdG90eXBlO1xuXG4gIF9wcm90by5vbkJPID0gZnVuY3Rpb24gb25CTygpIHtcbiAgICBpZiAodGhpcy5vbkJPTCkge1xuICAgICAgdGhpcy5vbkJPTC5mb3JFYWNoKGZ1bmN0aW9uIChsaXN0ZW5lcikge1xuICAgICAgICByZXR1cm4gbGlzdGVuZXIoKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8ub25CVU8gPSBmdW5jdGlvbiBvbkJVTygpIHtcbiAgICBpZiAodGhpcy5vbkJVT0wpIHtcbiAgICAgIHRoaXMub25CVU9MLmZvckVhY2goZnVuY3Rpb24gKGxpc3RlbmVyKSB7XG4gICAgICAgIHJldHVybiBsaXN0ZW5lcigpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG4gIC8qKlxuICAgKiBJbnZva2UgdGhpcyBtZXRob2QgdG8gbm90aWZ5IG1vYnggdGhhdCB5b3VyIGF0b20gaGFzIGJlZW4gdXNlZCBzb21laG93LlxuICAgKiBSZXR1cm5zIHRydWUgaWYgdGhlcmUgaXMgY3VycmVudGx5IGEgcmVhY3RpdmUgY29udGV4dC5cbiAgICovXG4gIDtcblxuICBfcHJvdG8ucmVwb3J0T2JzZXJ2ZWQgPSBmdW5jdGlvbiByZXBvcnRPYnNlcnZlZCQxKCkge1xuICAgIHJldHVybiByZXBvcnRPYnNlcnZlZCh0aGlzKTtcbiAgfVxuICAvKipcbiAgICogSW52b2tlIHRoaXMgbWV0aG9kIF9hZnRlcl8gdGhpcyBtZXRob2QgaGFzIGNoYW5nZWQgdG8gc2lnbmFsIG1vYnggdGhhdCBhbGwgaXRzIG9ic2VydmVycyBzaG91bGQgaW52YWxpZGF0ZS5cbiAgICovXG4gIDtcblxuICBfcHJvdG8ucmVwb3J0Q2hhbmdlZCA9IGZ1bmN0aW9uIHJlcG9ydENoYW5nZWQoKSB7XG4gICAgc3RhcnRCYXRjaCgpO1xuICAgIHByb3BhZ2F0ZUNoYW5nZWQodGhpcyk7XG4gICAgZW5kQmF0Y2goKTtcbiAgfTtcblxuICBfcHJvdG8udG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5uYW1lXztcbiAgfTtcblxuICByZXR1cm4gQXRvbTtcbn0oKTtcbnZhciBpc0F0b20gPSAvKiNfX1BVUkVfXyovY3JlYXRlSW5zdGFuY2VvZlByZWRpY2F0ZShcIkF0b21cIiwgQXRvbSk7XG5mdW5jdGlvbiBjcmVhdGVBdG9tKG5hbWUsIG9uQmVjb21lT2JzZXJ2ZWRIYW5kbGVyLCBvbkJlY29tZVVub2JzZXJ2ZWRIYW5kbGVyKSB7XG4gIGlmIChvbkJlY29tZU9ic2VydmVkSGFuZGxlciA9PT0gdm9pZCAwKSB7XG4gICAgb25CZWNvbWVPYnNlcnZlZEhhbmRsZXIgPSBub29wO1xuICB9XG5cbiAgaWYgKG9uQmVjb21lVW5vYnNlcnZlZEhhbmRsZXIgPT09IHZvaWQgMCkge1xuICAgIG9uQmVjb21lVW5vYnNlcnZlZEhhbmRsZXIgPSBub29wO1xuICB9XG5cbiAgdmFyIGF0b20gPSBuZXcgQXRvbShuYW1lKTsgLy8gZGVmYXVsdCBgbm9vcGAgbGlzdGVuZXIgd2lsbCBub3QgaW5pdGlhbGl6ZSB0aGUgaG9vayBTZXRcblxuICBpZiAob25CZWNvbWVPYnNlcnZlZEhhbmRsZXIgIT09IG5vb3ApIHtcbiAgICBvbkJlY29tZU9ic2VydmVkKGF0b20sIG9uQmVjb21lT2JzZXJ2ZWRIYW5kbGVyKTtcbiAgfVxuXG4gIGlmIChvbkJlY29tZVVub2JzZXJ2ZWRIYW5kbGVyICE9PSBub29wKSB7XG4gICAgb25CZWNvbWVVbm9ic2VydmVkKGF0b20sIG9uQmVjb21lVW5vYnNlcnZlZEhhbmRsZXIpO1xuICB9XG5cbiAgcmV0dXJuIGF0b207XG59XG5cbmZ1bmN0aW9uIGlkZW50aXR5Q29tcGFyZXIoYSwgYikge1xuICByZXR1cm4gYSA9PT0gYjtcbn1cblxuZnVuY3Rpb24gc3RydWN0dXJhbENvbXBhcmVyKGEsIGIpIHtcbiAgcmV0dXJuIGRlZXBFcXVhbChhLCBiKTtcbn1cblxuZnVuY3Rpb24gc2hhbGxvd0NvbXBhcmVyKGEsIGIpIHtcbiAgcmV0dXJuIGRlZXBFcXVhbChhLCBiLCAxKTtcbn1cblxuZnVuY3Rpb24gZGVmYXVsdENvbXBhcmVyKGEsIGIpIHtcbiAgcmV0dXJuIE9iamVjdC5pcyhhLCBiKTtcbn1cblxudmFyIGNvbXBhcmVyID0ge1xuICBpZGVudGl0eTogaWRlbnRpdHlDb21wYXJlcixcbiAgc3RydWN0dXJhbDogc3RydWN0dXJhbENvbXBhcmVyLFxuICBcImRlZmF1bHRcIjogZGVmYXVsdENvbXBhcmVyLFxuICBzaGFsbG93OiBzaGFsbG93Q29tcGFyZXJcbn07XG5cbmZ1bmN0aW9uIGRlZXBFbmhhbmNlcih2LCBfLCBuYW1lKSB7XG4gIC8vIGl0IGlzIGFuIG9ic2VydmFibGUgYWxyZWFkeSwgZG9uZVxuICBpZiAoaXNPYnNlcnZhYmxlKHYpKSByZXR1cm4gdjsgLy8gc29tZXRoaW5nIHRoYXQgY2FuIGJlIGNvbnZlcnRlZCBhbmQgbXV0YXRlZD9cblxuICBpZiAoQXJyYXkuaXNBcnJheSh2KSkgcmV0dXJuIG9ic2VydmFibGUuYXJyYXkodiwge1xuICAgIG5hbWU6IG5hbWVcbiAgfSk7XG4gIGlmIChpc1BsYWluT2JqZWN0KHYpKSByZXR1cm4gb2JzZXJ2YWJsZS5vYmplY3QodiwgdW5kZWZpbmVkLCB7XG4gICAgbmFtZTogbmFtZVxuICB9KTtcbiAgaWYgKGlzRVM2TWFwKHYpKSByZXR1cm4gb2JzZXJ2YWJsZS5tYXAodiwge1xuICAgIG5hbWU6IG5hbWVcbiAgfSk7XG4gIGlmIChpc0VTNlNldCh2KSkgcmV0dXJuIG9ic2VydmFibGUuc2V0KHYsIHtcbiAgICBuYW1lOiBuYW1lXG4gIH0pO1xuXG4gIGlmICh0eXBlb2YgdiA9PT0gXCJmdW5jdGlvblwiICYmICFpc0FjdGlvbih2KSAmJiAhaXNGbG93KHYpKSB7XG4gICAgaWYgKGlzR2VuZXJhdG9yKHYpKSB7XG4gICAgICByZXR1cm4gZmxvdyh2KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGF1dG9BY3Rpb24obmFtZSwgdik7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHY7XG59XG5mdW5jdGlvbiBzaGFsbG93RW5oYW5jZXIodiwgXywgbmFtZSkge1xuICBpZiAodiA9PT0gdW5kZWZpbmVkIHx8IHYgPT09IG51bGwpIHJldHVybiB2O1xuICBpZiAoaXNPYnNlcnZhYmxlT2JqZWN0KHYpIHx8IGlzT2JzZXJ2YWJsZUFycmF5KHYpIHx8IGlzT2JzZXJ2YWJsZU1hcCh2KSB8fCBpc09ic2VydmFibGVTZXQodikpIHJldHVybiB2O1xuICBpZiAoQXJyYXkuaXNBcnJheSh2KSkgcmV0dXJuIG9ic2VydmFibGUuYXJyYXkodiwge1xuICAgIG5hbWU6IG5hbWUsXG4gICAgZGVlcDogZmFsc2VcbiAgfSk7XG4gIGlmIChpc1BsYWluT2JqZWN0KHYpKSByZXR1cm4gb2JzZXJ2YWJsZS5vYmplY3QodiwgdW5kZWZpbmVkLCB7XG4gICAgbmFtZTogbmFtZSxcbiAgICBkZWVwOiBmYWxzZVxuICB9KTtcbiAgaWYgKGlzRVM2TWFwKHYpKSByZXR1cm4gb2JzZXJ2YWJsZS5tYXAodiwge1xuICAgIG5hbWU6IG5hbWUsXG4gICAgZGVlcDogZmFsc2VcbiAgfSk7XG4gIGlmIChpc0VTNlNldCh2KSkgcmV0dXJuIG9ic2VydmFibGUuc2V0KHYsIHtcbiAgICBuYW1lOiBuYW1lLFxuICAgIGRlZXA6IGZhbHNlXG4gIH0pO1xuICBpZiAoTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSBkaWUoXCJUaGUgc2hhbGxvdyBtb2RpZmllciAvIGRlY29yYXRvciBjYW4gb25seSB1c2VkIGluIGNvbWJpbmF0aW9uIHdpdGggYXJyYXlzLCBvYmplY3RzLCBtYXBzIGFuZCBzZXRzXCIpO1xufVxuZnVuY3Rpb24gcmVmZXJlbmNlRW5oYW5jZXIobmV3VmFsdWUpIHtcbiAgLy8gbmV2ZXIgdHVybiBpbnRvIGFuIG9ic2VydmFibGVcbiAgcmV0dXJuIG5ld1ZhbHVlO1xufVxuZnVuY3Rpb24gcmVmU3RydWN0RW5oYW5jZXIodiwgb2xkVmFsdWUpIHtcbiAgaWYgKE5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiAmJiBpc09ic2VydmFibGUodikpIGRpZShcIm9ic2VydmFibGUuc3RydWN0IHNob3VsZCBub3QgYmUgdXNlZCB3aXRoIG9ic2VydmFibGUgdmFsdWVzXCIpO1xuICBpZiAoZGVlcEVxdWFsKHYsIG9sZFZhbHVlKSkgcmV0dXJuIG9sZFZhbHVlO1xuICByZXR1cm4gdjtcbn1cblxudmFyIE9WRVJSSURFID0gXCJvdmVycmlkZVwiO1xudmFyIG92ZXJyaWRlID0gLyojX19QVVJFX18qL2NyZWF0ZURlY29yYXRvckFubm90YXRpb24oe1xuICBhbm5vdGF0aW9uVHlwZV86IE9WRVJSSURFLFxuICBtYWtlXzogbWFrZV8sXG4gIGV4dGVuZF86IGV4dGVuZF9cbn0pO1xuZnVuY3Rpb24gaXNPdmVycmlkZShhbm5vdGF0aW9uKSB7XG4gIHJldHVybiBhbm5vdGF0aW9uLmFubm90YXRpb25UeXBlXyA9PT0gT1ZFUlJJREU7XG59XG5cbmZ1bmN0aW9uIG1ha2VfKGFkbSwga2V5KSB7XG4gIC8vIE11c3Qgbm90IGJlIHBsYWluIG9iamVjdFxuICBpZiAoTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiICYmIGFkbS5pc1BsYWluT2JqZWN0Xykge1xuICAgIGRpZShcIkNhbm5vdCBhcHBseSAnXCIgKyB0aGlzLmFubm90YXRpb25UeXBlXyArIFwiJyB0byAnXCIgKyBhZG0ubmFtZV8gKyBcIi5cIiArIGtleS50b1N0cmluZygpICsgXCInOlwiICsgKFwiXFxuJ1wiICsgdGhpcy5hbm5vdGF0aW9uVHlwZV8gKyBcIicgY2Fubm90IGJlIHVzZWQgb24gcGxhaW4gb2JqZWN0cy5cIikpO1xuICB9IC8vIE11c3Qgb3ZlcnJpZGUgc29tZXRoaW5nXG5cblxuICBpZiAoTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiICYmICFoYXNQcm9wKGFkbS5hcHBsaWVkQW5ub3RhdGlvbnNfLCBrZXkpKSB7XG4gICAgZGllKFwiJ1wiICsgYWRtLm5hbWVfICsgXCIuXCIgKyBrZXkudG9TdHJpbmcoKSArIFwiJyBpcyBhbm5vdGF0ZWQgd2l0aCAnXCIgKyB0aGlzLmFubm90YXRpb25UeXBlXyArIFwiJywgXCIgKyBcImJ1dCBubyBzdWNoIGFubm90YXRlZCBtZW1iZXIgd2FzIGZvdW5kIG9uIHByb3RvdHlwZS5cIik7XG4gIH1cblxuICByZXR1cm4gMFxuICAvKiBDYW5jZWwgKi9cbiAgO1xufVxuXG5mdW5jdGlvbiBleHRlbmRfKGFkbSwga2V5LCBkZXNjcmlwdG9yLCBwcm94eVRyYXApIHtcbiAgZGllKFwiJ1wiICsgdGhpcy5hbm5vdGF0aW9uVHlwZV8gKyBcIicgY2FuIG9ubHkgYmUgdXNlZCB3aXRoICdtYWtlT2JzZXJ2YWJsZSdcIik7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUFjdGlvbkFubm90YXRpb24obmFtZSwgb3B0aW9ucykge1xuICByZXR1cm4ge1xuICAgIGFubm90YXRpb25UeXBlXzogbmFtZSxcbiAgICBvcHRpb25zXzogb3B0aW9ucyxcbiAgICBtYWtlXzogbWFrZV8kMSxcbiAgICBleHRlbmRfOiBleHRlbmRfJDFcbiAgfTtcbn1cblxuZnVuY3Rpb24gbWFrZV8kMShhZG0sIGtleSwgZGVzY3JpcHRvciwgc291cmNlKSB7XG4gIHZhciBfdGhpcyRvcHRpb25zXztcblxuICAvLyBib3VuZFxuICBpZiAoKF90aGlzJG9wdGlvbnNfID0gdGhpcy5vcHRpb25zXykgPT0gbnVsbCA/IHZvaWQgMCA6IF90aGlzJG9wdGlvbnNfLmJvdW5kKSB7XG4gICAgcmV0dXJuIHRoaXMuZXh0ZW5kXyhhZG0sIGtleSwgZGVzY3JpcHRvciwgZmFsc2UpID09PSBudWxsID8gMFxuICAgIC8qIENhbmNlbCAqL1xuICAgIDogMVxuICAgIC8qIEJyZWFrICovXG4gICAgO1xuICB9IC8vIG93blxuXG5cbiAgaWYgKHNvdXJjZSA9PT0gYWRtLnRhcmdldF8pIHtcbiAgICByZXR1cm4gdGhpcy5leHRlbmRfKGFkbSwga2V5LCBkZXNjcmlwdG9yLCBmYWxzZSkgPT09IG51bGwgPyAwXG4gICAgLyogQ2FuY2VsICovXG4gICAgOiAyXG4gICAgLyogQ29udGludWUgKi9cbiAgICA7XG4gIH0gLy8gcHJvdG90eXBlXG5cblxuICBpZiAoaXNBY3Rpb24oZGVzY3JpcHRvci52YWx1ZSkpIHtcbiAgICAvLyBBIHByb3RvdHlwZSBjb3VsZCBoYXZlIGJlZW4gYW5ub3RhdGVkIGFscmVhZHkgYnkgb3RoZXIgY29uc3RydWN0b3IsXG4gICAgLy8gcmVzdCBvZiB0aGUgcHJvdG8gY2hhaW4gbXVzdCBiZSBhbm5vdGF0ZWQgYWxyZWFkeVxuICAgIHJldHVybiAxXG4gICAgLyogQnJlYWsgKi9cbiAgICA7XG4gIH1cblxuICB2YXIgYWN0aW9uRGVzY3JpcHRvciA9IGNyZWF0ZUFjdGlvbkRlc2NyaXB0b3IoYWRtLCB0aGlzLCBrZXksIGRlc2NyaXB0b3IsIGZhbHNlKTtcbiAgZGVmaW5lUHJvcGVydHkoc291cmNlLCBrZXksIGFjdGlvbkRlc2NyaXB0b3IpO1xuICByZXR1cm4gMlxuICAvKiBDb250aW51ZSAqL1xuICA7XG59XG5cbmZ1bmN0aW9uIGV4dGVuZF8kMShhZG0sIGtleSwgZGVzY3JpcHRvciwgcHJveHlUcmFwKSB7XG4gIHZhciBhY3Rpb25EZXNjcmlwdG9yID0gY3JlYXRlQWN0aW9uRGVzY3JpcHRvcihhZG0sIHRoaXMsIGtleSwgZGVzY3JpcHRvcik7XG4gIHJldHVybiBhZG0uZGVmaW5lUHJvcGVydHlfKGtleSwgYWN0aW9uRGVzY3JpcHRvciwgcHJveHlUcmFwKTtcbn1cblxuZnVuY3Rpb24gYXNzZXJ0QWN0aW9uRGVzY3JpcHRvcihhZG0sIF9yZWYsIGtleSwgX3JlZjIpIHtcbiAgdmFyIGFubm90YXRpb25UeXBlXyA9IF9yZWYuYW5ub3RhdGlvblR5cGVfO1xuICB2YXIgdmFsdWUgPSBfcmVmMi52YWx1ZTtcblxuICBpZiAoTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiICYmICFpc0Z1bmN0aW9uKHZhbHVlKSkge1xuICAgIGRpZShcIkNhbm5vdCBhcHBseSAnXCIgKyBhbm5vdGF0aW9uVHlwZV8gKyBcIicgdG8gJ1wiICsgYWRtLm5hbWVfICsgXCIuXCIgKyBrZXkudG9TdHJpbmcoKSArIFwiJzpcIiArIChcIlxcbidcIiArIGFubm90YXRpb25UeXBlXyArIFwiJyBjYW4gb25seSBiZSB1c2VkIG9uIHByb3BlcnRpZXMgd2l0aCBhIGZ1bmN0aW9uIHZhbHVlLlwiKSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlQWN0aW9uRGVzY3JpcHRvcihhZG0sIGFubm90YXRpb24sIGtleSwgZGVzY3JpcHRvciwgLy8gcHJvdmlkZXMgYWJpbGl0eSB0byBkaXNhYmxlIHNhZmVEZXNjcmlwdG9ycyBmb3IgcHJvdG90eXBlc1xuc2FmZURlc2NyaXB0b3JzKSB7XG4gIHZhciBfYW5ub3RhdGlvbiRvcHRpb25zXywgX2Fubm90YXRpb24kb3B0aW9uc18kLCBfYW5ub3RhdGlvbiRvcHRpb25zXzIsIF9hbm5vdGF0aW9uJG9wdGlvbnNfJDIsIF9hbm5vdGF0aW9uJG9wdGlvbnNfMztcblxuICBpZiAoc2FmZURlc2NyaXB0b3JzID09PSB2b2lkIDApIHtcbiAgICBzYWZlRGVzY3JpcHRvcnMgPSBnbG9iYWxTdGF0ZS5zYWZlRGVzY3JpcHRvcnM7XG4gIH1cblxuICBhc3NlcnRBY3Rpb25EZXNjcmlwdG9yKGFkbSwgYW5ub3RhdGlvbiwga2V5LCBkZXNjcmlwdG9yKTtcbiAgdmFyIHZhbHVlID0gZGVzY3JpcHRvci52YWx1ZTtcblxuICBpZiAoKF9hbm5vdGF0aW9uJG9wdGlvbnNfID0gYW5ub3RhdGlvbi5vcHRpb25zXykgPT0gbnVsbCA/IHZvaWQgMCA6IF9hbm5vdGF0aW9uJG9wdGlvbnNfLmJvdW5kKSB7XG4gICAgdmFyIF9hZG0kcHJveHlfO1xuXG4gICAgdmFsdWUgPSB2YWx1ZS5iaW5kKChfYWRtJHByb3h5XyA9IGFkbS5wcm94eV8pICE9IG51bGwgPyBfYWRtJHByb3h5XyA6IGFkbS50YXJnZXRfKTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgdmFsdWU6IGNyZWF0ZUFjdGlvbigoX2Fubm90YXRpb24kb3B0aW9uc18kID0gKF9hbm5vdGF0aW9uJG9wdGlvbnNfMiA9IGFubm90YXRpb24ub3B0aW9uc18pID09IG51bGwgPyB2b2lkIDAgOiBfYW5ub3RhdGlvbiRvcHRpb25zXzIubmFtZSkgIT0gbnVsbCA/IF9hbm5vdGF0aW9uJG9wdGlvbnNfJCA6IGtleS50b1N0cmluZygpLCB2YWx1ZSwgKF9hbm5vdGF0aW9uJG9wdGlvbnNfJDIgPSAoX2Fubm90YXRpb24kb3B0aW9uc18zID0gYW5ub3RhdGlvbi5vcHRpb25zXykgPT0gbnVsbCA/IHZvaWQgMCA6IF9hbm5vdGF0aW9uJG9wdGlvbnNfMy5hdXRvQWN0aW9uKSAhPSBudWxsID8gX2Fubm90YXRpb24kb3B0aW9uc18kMiA6IGZhbHNlKSxcbiAgICAvLyBOb24tY29uZmlndXJhYmxlIGZvciBjbGFzc2VzXG4gICAgLy8gcHJldmVudHMgYWNjaWRlbnRhbCBmaWVsZCByZWRlZmluaXRpb24gaW4gc3ViY2xhc3NcbiAgICBjb25maWd1cmFibGU6IHNhZmVEZXNjcmlwdG9ycyA/IGFkbS5pc1BsYWluT2JqZWN0XyA6IHRydWUsXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL21vYnhqcy9tb2J4L3B1bGwvMjY0MSNpc3N1ZWNvbW1lbnQtNzM3MjkyMDU4XG4gICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgLy8gTm9uLW9ic2V2YWJsZSwgdGhlcmVmb3JlIG5vbi13cml0YWJsZVxuICAgIC8vIEFsc28gcHJldmVudHMgcmV3cml0aW5nIGluIHN1YmNsYXNzIGNvbnN0cnVjdG9yXG4gICAgd3JpdGFibGU6IHNhZmVEZXNjcmlwdG9ycyA/IGZhbHNlIDogdHJ1ZVxuICB9O1xufVxuXG5mdW5jdGlvbiBjcmVhdGVGbG93QW5ub3RhdGlvbihuYW1lLCBvcHRpb25zKSB7XG4gIHJldHVybiB7XG4gICAgYW5ub3RhdGlvblR5cGVfOiBuYW1lLFxuICAgIG9wdGlvbnNfOiBvcHRpb25zLFxuICAgIG1ha2VfOiBtYWtlXyQyLFxuICAgIGV4dGVuZF86IGV4dGVuZF8kMlxuICB9O1xufVxuXG5mdW5jdGlvbiBtYWtlXyQyKGFkbSwga2V5LCBkZXNjcmlwdG9yLCBzb3VyY2UpIHtcbiAgdmFyIF90aGlzJG9wdGlvbnNfO1xuXG4gIC8vIG93blxuICBpZiAoc291cmNlID09PSBhZG0udGFyZ2V0Xykge1xuICAgIHJldHVybiB0aGlzLmV4dGVuZF8oYWRtLCBrZXksIGRlc2NyaXB0b3IsIGZhbHNlKSA9PT0gbnVsbCA/IDBcbiAgICAvKiBDYW5jZWwgKi9cbiAgICA6IDJcbiAgICAvKiBDb250aW51ZSAqL1xuICAgIDtcbiAgfSAvLyBwcm90b3R5cGVcbiAgLy8gYm91bmQgLSBtdXN0IGFubm90YXRlIHByb3RvcyB0byBzdXBwb3J0IHN1cGVyLmZsb3coKVxuXG5cbiAgaWYgKCgoX3RoaXMkb3B0aW9uc18gPSB0aGlzLm9wdGlvbnNfKSA9PSBudWxsID8gdm9pZCAwIDogX3RoaXMkb3B0aW9uc18uYm91bmQpICYmICFpc0Zsb3coYWRtLnRhcmdldF9ba2V5XSkpIHtcbiAgICBpZiAodGhpcy5leHRlbmRfKGFkbSwga2V5LCBkZXNjcmlwdG9yLCBmYWxzZSkgPT09IG51bGwpIHJldHVybiAwXG4gICAgLyogQ2FuY2VsICovXG4gICAgO1xuICB9XG5cbiAgaWYgKGlzRmxvdyhkZXNjcmlwdG9yLnZhbHVlKSkge1xuICAgIC8vIEEgcHJvdG90eXBlIGNvdWxkIGhhdmUgYmVlbiBhbm5vdGF0ZWQgYWxyZWFkeSBieSBvdGhlciBjb25zdHJ1Y3RvcixcbiAgICAvLyByZXN0IG9mIHRoZSBwcm90byBjaGFpbiBtdXN0IGJlIGFubm90YXRlZCBhbHJlYWR5XG4gICAgcmV0dXJuIDFcbiAgICAvKiBCcmVhayAqL1xuICAgIDtcbiAgfVxuXG4gIHZhciBmbG93RGVzY3JpcHRvciA9IGNyZWF0ZUZsb3dEZXNjcmlwdG9yKGFkbSwgdGhpcywga2V5LCBkZXNjcmlwdG9yLCBmYWxzZSwgZmFsc2UpO1xuICBkZWZpbmVQcm9wZXJ0eShzb3VyY2UsIGtleSwgZmxvd0Rlc2NyaXB0b3IpO1xuICByZXR1cm4gMlxuICAvKiBDb250aW51ZSAqL1xuICA7XG59XG5cbmZ1bmN0aW9uIGV4dGVuZF8kMihhZG0sIGtleSwgZGVzY3JpcHRvciwgcHJveHlUcmFwKSB7XG4gIHZhciBfdGhpcyRvcHRpb25zXzI7XG5cbiAgdmFyIGZsb3dEZXNjcmlwdG9yID0gY3JlYXRlRmxvd0Rlc2NyaXB0b3IoYWRtLCB0aGlzLCBrZXksIGRlc2NyaXB0b3IsIChfdGhpcyRvcHRpb25zXzIgPSB0aGlzLm9wdGlvbnNfKSA9PSBudWxsID8gdm9pZCAwIDogX3RoaXMkb3B0aW9uc18yLmJvdW5kKTtcbiAgcmV0dXJuIGFkbS5kZWZpbmVQcm9wZXJ0eV8oa2V5LCBmbG93RGVzY3JpcHRvciwgcHJveHlUcmFwKTtcbn1cblxuZnVuY3Rpb24gYXNzZXJ0Rmxvd0Rlc2NyaXB0b3IoYWRtLCBfcmVmLCBrZXksIF9yZWYyKSB7XG4gIHZhciBhbm5vdGF0aW9uVHlwZV8gPSBfcmVmLmFubm90YXRpb25UeXBlXztcbiAgdmFyIHZhbHVlID0gX3JlZjIudmFsdWU7XG5cbiAgaWYgKE5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiAmJiAhaXNGdW5jdGlvbih2YWx1ZSkpIHtcbiAgICBkaWUoXCJDYW5ub3QgYXBwbHkgJ1wiICsgYW5ub3RhdGlvblR5cGVfICsgXCInIHRvICdcIiArIGFkbS5uYW1lXyArIFwiLlwiICsga2V5LnRvU3RyaW5nKCkgKyBcIic6XCIgKyAoXCJcXG4nXCIgKyBhbm5vdGF0aW9uVHlwZV8gKyBcIicgY2FuIG9ubHkgYmUgdXNlZCBvbiBwcm9wZXJ0aWVzIHdpdGggYSBnZW5lcmF0b3IgZnVuY3Rpb24gdmFsdWUuXCIpKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjcmVhdGVGbG93RGVzY3JpcHRvcihhZG0sIGFubm90YXRpb24sIGtleSwgZGVzY3JpcHRvciwgYm91bmQsIC8vIHByb3ZpZGVzIGFiaWxpdHkgdG8gZGlzYWJsZSBzYWZlRGVzY3JpcHRvcnMgZm9yIHByb3RvdHlwZXNcbnNhZmVEZXNjcmlwdG9ycykge1xuICBpZiAoc2FmZURlc2NyaXB0b3JzID09PSB2b2lkIDApIHtcbiAgICBzYWZlRGVzY3JpcHRvcnMgPSBnbG9iYWxTdGF0ZS5zYWZlRGVzY3JpcHRvcnM7XG4gIH1cblxuICBhc3NlcnRGbG93RGVzY3JpcHRvcihhZG0sIGFubm90YXRpb24sIGtleSwgZGVzY3JpcHRvcik7XG4gIHZhciB2YWx1ZSA9IGRlc2NyaXB0b3IudmFsdWU7XG5cbiAgaWYgKGJvdW5kKSB7XG4gICAgdmFyIF9hZG0kcHJveHlfO1xuXG4gICAgdmFsdWUgPSB2YWx1ZS5iaW5kKChfYWRtJHByb3h5XyA9IGFkbS5wcm94eV8pICE9IG51bGwgPyBfYWRtJHByb3h5XyA6IGFkbS50YXJnZXRfKTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgdmFsdWU6IGZsb3codmFsdWUpLFxuICAgIC8vIE5vbi1jb25maWd1cmFibGUgZm9yIGNsYXNzZXNcbiAgICAvLyBwcmV2ZW50cyBhY2NpZGVudGFsIGZpZWxkIHJlZGVmaW5pdGlvbiBpbiBzdWJjbGFzc1xuICAgIGNvbmZpZ3VyYWJsZTogc2FmZURlc2NyaXB0b3JzID8gYWRtLmlzUGxhaW5PYmplY3RfIDogdHJ1ZSxcbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vbW9ieGpzL21vYngvcHVsbC8yNjQxI2lzc3VlY29tbWVudC03MzcyOTIwNThcbiAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAvLyBOb24tb2JzZXZhYmxlLCB0aGVyZWZvcmUgbm9uLXdyaXRhYmxlXG4gICAgLy8gQWxzbyBwcmV2ZW50cyByZXdyaXRpbmcgaW4gc3ViY2xhc3MgY29uc3RydWN0b3JcbiAgICB3cml0YWJsZTogc2FmZURlc2NyaXB0b3JzID8gZmFsc2UgOiB0cnVlXG4gIH07XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUNvbXB1dGVkQW5ub3RhdGlvbihuYW1lLCBvcHRpb25zKSB7XG4gIHJldHVybiB7XG4gICAgYW5ub3RhdGlvblR5cGVfOiBuYW1lLFxuICAgIG9wdGlvbnNfOiBvcHRpb25zLFxuICAgIG1ha2VfOiBtYWtlXyQzLFxuICAgIGV4dGVuZF86IGV4dGVuZF8kM1xuICB9O1xufVxuXG5mdW5jdGlvbiBtYWtlXyQzKGFkbSwga2V5LCBkZXNjcmlwdG9yKSB7XG4gIHJldHVybiB0aGlzLmV4dGVuZF8oYWRtLCBrZXksIGRlc2NyaXB0b3IsIGZhbHNlKSA9PT0gbnVsbCA/IDBcbiAgLyogQ2FuY2VsICovXG4gIDogMVxuICAvKiBCcmVhayAqL1xuICA7XG59XG5cbmZ1bmN0aW9uIGV4dGVuZF8kMyhhZG0sIGtleSwgZGVzY3JpcHRvciwgcHJveHlUcmFwKSB7XG4gIGFzc2VydENvbXB1dGVkRGVzY3JpcHRvcihhZG0sIHRoaXMsIGtleSwgZGVzY3JpcHRvcik7XG4gIHJldHVybiBhZG0uZGVmaW5lQ29tcHV0ZWRQcm9wZXJ0eV8oa2V5LCBfZXh0ZW5kcyh7fSwgdGhpcy5vcHRpb25zXywge1xuICAgIGdldDogZGVzY3JpcHRvci5nZXQsXG4gICAgc2V0OiBkZXNjcmlwdG9yLnNldFxuICB9KSwgcHJveHlUcmFwKTtcbn1cblxuZnVuY3Rpb24gYXNzZXJ0Q29tcHV0ZWREZXNjcmlwdG9yKGFkbSwgX3JlZiwga2V5LCBfcmVmMikge1xuICB2YXIgYW5ub3RhdGlvblR5cGVfID0gX3JlZi5hbm5vdGF0aW9uVHlwZV87XG4gIHZhciBnZXQgPSBfcmVmMi5nZXQ7XG5cbiAgaWYgKE5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiAmJiAhZ2V0KSB7XG4gICAgZGllKFwiQ2Fubm90IGFwcGx5ICdcIiArIGFubm90YXRpb25UeXBlXyArIFwiJyB0byAnXCIgKyBhZG0ubmFtZV8gKyBcIi5cIiArIGtleS50b1N0cmluZygpICsgXCInOlwiICsgKFwiXFxuJ1wiICsgYW5ub3RhdGlvblR5cGVfICsgXCInIGNhbiBvbmx5IGJlIHVzZWQgb24gZ2V0dGVyKCtzZXR0ZXIpIHByb3BlcnRpZXMuXCIpKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjcmVhdGVPYnNlcnZhYmxlQW5ub3RhdGlvbihuYW1lLCBvcHRpb25zKSB7XG4gIHJldHVybiB7XG4gICAgYW5ub3RhdGlvblR5cGVfOiBuYW1lLFxuICAgIG9wdGlvbnNfOiBvcHRpb25zLFxuICAgIG1ha2VfOiBtYWtlXyQ0LFxuICAgIGV4dGVuZF86IGV4dGVuZF8kNFxuICB9O1xufVxuXG5mdW5jdGlvbiBtYWtlXyQ0KGFkbSwga2V5LCBkZXNjcmlwdG9yKSB7XG4gIHJldHVybiB0aGlzLmV4dGVuZF8oYWRtLCBrZXksIGRlc2NyaXB0b3IsIGZhbHNlKSA9PT0gbnVsbCA/IDBcbiAgLyogQ2FuY2VsICovXG4gIDogMVxuICAvKiBCcmVhayAqL1xuICA7XG59XG5cbmZ1bmN0aW9uIGV4dGVuZF8kNChhZG0sIGtleSwgZGVzY3JpcHRvciwgcHJveHlUcmFwKSB7XG4gIHZhciBfdGhpcyRvcHRpb25zXyRlbmhhbmMsIF90aGlzJG9wdGlvbnNfO1xuXG4gIGFzc2VydE9ic2VydmFibGVEZXNjcmlwdG9yKGFkbSwgdGhpcywga2V5LCBkZXNjcmlwdG9yKTtcbiAgcmV0dXJuIGFkbS5kZWZpbmVPYnNlcnZhYmxlUHJvcGVydHlfKGtleSwgZGVzY3JpcHRvci52YWx1ZSwgKF90aGlzJG9wdGlvbnNfJGVuaGFuYyA9IChfdGhpcyRvcHRpb25zXyA9IHRoaXMub3B0aW9uc18pID09IG51bGwgPyB2b2lkIDAgOiBfdGhpcyRvcHRpb25zXy5lbmhhbmNlcikgIT0gbnVsbCA/IF90aGlzJG9wdGlvbnNfJGVuaGFuYyA6IGRlZXBFbmhhbmNlciwgcHJveHlUcmFwKTtcbn1cblxuZnVuY3Rpb24gYXNzZXJ0T2JzZXJ2YWJsZURlc2NyaXB0b3IoYWRtLCBfcmVmLCBrZXksIGRlc2NyaXB0b3IpIHtcbiAgdmFyIGFubm90YXRpb25UeXBlXyA9IF9yZWYuYW5ub3RhdGlvblR5cGVfO1xuXG4gIGlmIChOT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgJiYgIShcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikpIHtcbiAgICBkaWUoXCJDYW5ub3QgYXBwbHkgJ1wiICsgYW5ub3RhdGlvblR5cGVfICsgXCInIHRvICdcIiArIGFkbS5uYW1lXyArIFwiLlwiICsga2V5LnRvU3RyaW5nKCkgKyBcIic6XCIgKyAoXCJcXG4nXCIgKyBhbm5vdGF0aW9uVHlwZV8gKyBcIicgY2Fubm90IGJlIHVzZWQgb24gZ2V0dGVyL3NldHRlciBwcm9wZXJ0aWVzXCIpKTtcbiAgfVxufVxuXG52YXIgQVVUTyA9IFwidHJ1ZVwiO1xudmFyIGF1dG9Bbm5vdGF0aW9uID0gLyojX19QVVJFX18qL2NyZWF0ZUF1dG9Bbm5vdGF0aW9uKCk7XG5mdW5jdGlvbiBjcmVhdGVBdXRvQW5ub3RhdGlvbihvcHRpb25zKSB7XG4gIHJldHVybiB7XG4gICAgYW5ub3RhdGlvblR5cGVfOiBBVVRPLFxuICAgIG9wdGlvbnNfOiBvcHRpb25zLFxuICAgIG1ha2VfOiBtYWtlXyQ1LFxuICAgIGV4dGVuZF86IGV4dGVuZF8kNVxuICB9O1xufVxuXG5mdW5jdGlvbiBtYWtlXyQ1KGFkbSwga2V5LCBkZXNjcmlwdG9yLCBzb3VyY2UpIHtcbiAgdmFyIF90aGlzJG9wdGlvbnNfMywgX3RoaXMkb3B0aW9uc180O1xuXG4gIC8vIGdldHRlciAtPiBjb21wdXRlZFxuICBpZiAoZGVzY3JpcHRvci5nZXQpIHtcbiAgICByZXR1cm4gY29tcHV0ZWQubWFrZV8oYWRtLCBrZXksIGRlc2NyaXB0b3IsIHNvdXJjZSk7XG4gIH0gLy8gbG9uZSBzZXR0ZXIgLT4gYWN0aW9uIHNldHRlclxuXG5cbiAgaWYgKGRlc2NyaXB0b3Iuc2V0KSB7XG4gICAgLy8gVE9ETyBtYWtlIGFjdGlvbiBhcHBsaWNhYmxlIHRvIHNldHRlciBhbmQgZGVsZWdhdGUgdG8gYWN0aW9uLm1ha2VfXG4gICAgdmFyIHNldCA9IGNyZWF0ZUFjdGlvbihrZXkudG9TdHJpbmcoKSwgZGVzY3JpcHRvci5zZXQpOyAvLyBvd25cblxuICAgIGlmIChzb3VyY2UgPT09IGFkbS50YXJnZXRfKSB7XG4gICAgICByZXR1cm4gYWRtLmRlZmluZVByb3BlcnR5XyhrZXksIHtcbiAgICAgICAgY29uZmlndXJhYmxlOiBnbG9iYWxTdGF0ZS5zYWZlRGVzY3JpcHRvcnMgPyBhZG0uaXNQbGFpbk9iamVjdF8gOiB0cnVlLFxuICAgICAgICBzZXQ6IHNldFxuICAgICAgfSkgPT09IG51bGwgPyAwXG4gICAgICAvKiBDYW5jZWwgKi9cbiAgICAgIDogMlxuICAgICAgLyogQ29udGludWUgKi9cbiAgICAgIDtcbiAgICB9IC8vIHByb3RvXG5cblxuICAgIGRlZmluZVByb3BlcnR5KHNvdXJjZSwga2V5LCB7XG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICBzZXQ6IHNldFxuICAgIH0pO1xuICAgIHJldHVybiAyXG4gICAgLyogQ29udGludWUgKi9cbiAgICA7XG4gIH0gLy8gZnVuY3Rpb24gb24gcHJvdG8gLT4gYXV0b0FjdGlvbi9mbG93XG5cblxuICBpZiAoc291cmNlICE9PSBhZG0udGFyZ2V0XyAmJiB0eXBlb2YgZGVzY3JpcHRvci52YWx1ZSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIF90aGlzJG9wdGlvbnNfMjtcblxuICAgIGlmIChpc0dlbmVyYXRvcihkZXNjcmlwdG9yLnZhbHVlKSkge1xuICAgICAgdmFyIF90aGlzJG9wdGlvbnNfO1xuXG4gICAgICB2YXIgZmxvd0Fubm90YXRpb24gPSAoKF90aGlzJG9wdGlvbnNfID0gdGhpcy5vcHRpb25zXykgPT0gbnVsbCA/IHZvaWQgMCA6IF90aGlzJG9wdGlvbnNfLmF1dG9CaW5kKSA/IGZsb3cuYm91bmQgOiBmbG93O1xuICAgICAgcmV0dXJuIGZsb3dBbm5vdGF0aW9uLm1ha2VfKGFkbSwga2V5LCBkZXNjcmlwdG9yLCBzb3VyY2UpO1xuICAgIH1cblxuICAgIHZhciBhY3Rpb25Bbm5vdGF0aW9uID0gKChfdGhpcyRvcHRpb25zXzIgPSB0aGlzLm9wdGlvbnNfKSA9PSBudWxsID8gdm9pZCAwIDogX3RoaXMkb3B0aW9uc18yLmF1dG9CaW5kKSA/IGF1dG9BY3Rpb24uYm91bmQgOiBhdXRvQWN0aW9uO1xuICAgIHJldHVybiBhY3Rpb25Bbm5vdGF0aW9uLm1ha2VfKGFkbSwga2V5LCBkZXNjcmlwdG9yLCBzb3VyY2UpO1xuICB9IC8vIG90aGVyIC0+IG9ic2VydmFibGVcbiAgLy8gQ29weSBwcm9wcyBmcm9tIHByb3RvIGFzIHdlbGwsIHNlZSB0ZXN0OlxuICAvLyBcImRlY29yYXRlIHNob3VsZCB3b3JrIHdpdGggT2JqZWN0LmNyZWF0ZVwiXG5cblxuICB2YXIgb2JzZXJ2YWJsZUFubm90YXRpb24gPSAoKF90aGlzJG9wdGlvbnNfMyA9IHRoaXMub3B0aW9uc18pID09IG51bGwgPyB2b2lkIDAgOiBfdGhpcyRvcHRpb25zXzMuZGVlcCkgPT09IGZhbHNlID8gb2JzZXJ2YWJsZS5yZWYgOiBvYnNlcnZhYmxlOyAvLyBpZiBmdW5jdGlvbiByZXNwZWN0IGF1dG9CaW5kIG9wdGlvblxuXG4gIGlmICh0eXBlb2YgZGVzY3JpcHRvci52YWx1ZSA9PT0gXCJmdW5jdGlvblwiICYmICgoX3RoaXMkb3B0aW9uc180ID0gdGhpcy5vcHRpb25zXykgPT0gbnVsbCA/IHZvaWQgMCA6IF90aGlzJG9wdGlvbnNfNC5hdXRvQmluZCkpIHtcbiAgICB2YXIgX2FkbSRwcm94eV87XG5cbiAgICBkZXNjcmlwdG9yLnZhbHVlID0gZGVzY3JpcHRvci52YWx1ZS5iaW5kKChfYWRtJHByb3h5XyA9IGFkbS5wcm94eV8pICE9IG51bGwgPyBfYWRtJHByb3h5XyA6IGFkbS50YXJnZXRfKTtcbiAgfVxuXG4gIHJldHVybiBvYnNlcnZhYmxlQW5ub3RhdGlvbi5tYWtlXyhhZG0sIGtleSwgZGVzY3JpcHRvciwgc291cmNlKTtcbn1cblxuZnVuY3Rpb24gZXh0ZW5kXyQ1KGFkbSwga2V5LCBkZXNjcmlwdG9yLCBwcm94eVRyYXApIHtcbiAgdmFyIF90aGlzJG9wdGlvbnNfNSwgX3RoaXMkb3B0aW9uc182O1xuXG4gIC8vIGdldHRlciAtPiBjb21wdXRlZFxuICBpZiAoZGVzY3JpcHRvci5nZXQpIHtcbiAgICByZXR1cm4gY29tcHV0ZWQuZXh0ZW5kXyhhZG0sIGtleSwgZGVzY3JpcHRvciwgcHJveHlUcmFwKTtcbiAgfSAvLyBsb25lIHNldHRlciAtPiBhY3Rpb24gc2V0dGVyXG5cblxuICBpZiAoZGVzY3JpcHRvci5zZXQpIHtcbiAgICAvLyBUT0RPIG1ha2UgYWN0aW9uIGFwcGxpY2FibGUgdG8gc2V0dGVyIGFuZCBkZWxlZ2F0ZSB0byBhY3Rpb24uZXh0ZW5kX1xuICAgIHJldHVybiBhZG0uZGVmaW5lUHJvcGVydHlfKGtleSwge1xuICAgICAgY29uZmlndXJhYmxlOiBnbG9iYWxTdGF0ZS5zYWZlRGVzY3JpcHRvcnMgPyBhZG0uaXNQbGFpbk9iamVjdF8gOiB0cnVlLFxuICAgICAgc2V0OiBjcmVhdGVBY3Rpb24oa2V5LnRvU3RyaW5nKCksIGRlc2NyaXB0b3Iuc2V0KVxuICAgIH0sIHByb3h5VHJhcCk7XG4gIH0gLy8gb3RoZXIgLT4gb2JzZXJ2YWJsZVxuICAvLyBpZiBmdW5jdGlvbiByZXNwZWN0IGF1dG9CaW5kIG9wdGlvblxuXG5cbiAgaWYgKHR5cGVvZiBkZXNjcmlwdG9yLnZhbHVlID09PSBcImZ1bmN0aW9uXCIgJiYgKChfdGhpcyRvcHRpb25zXzUgPSB0aGlzLm9wdGlvbnNfKSA9PSBudWxsID8gdm9pZCAwIDogX3RoaXMkb3B0aW9uc181LmF1dG9CaW5kKSkge1xuICAgIHZhciBfYWRtJHByb3h5XzI7XG5cbiAgICBkZXNjcmlwdG9yLnZhbHVlID0gZGVzY3JpcHRvci52YWx1ZS5iaW5kKChfYWRtJHByb3h5XzIgPSBhZG0ucHJveHlfKSAhPSBudWxsID8gX2FkbSRwcm94eV8yIDogYWRtLnRhcmdldF8pO1xuICB9XG5cbiAgdmFyIG9ic2VydmFibGVBbm5vdGF0aW9uID0gKChfdGhpcyRvcHRpb25zXzYgPSB0aGlzLm9wdGlvbnNfKSA9PSBudWxsID8gdm9pZCAwIDogX3RoaXMkb3B0aW9uc182LmRlZXApID09PSBmYWxzZSA/IG9ic2VydmFibGUucmVmIDogb2JzZXJ2YWJsZTtcbiAgcmV0dXJuIG9ic2VydmFibGVBbm5vdGF0aW9uLmV4dGVuZF8oYWRtLCBrZXksIGRlc2NyaXB0b3IsIHByb3h5VHJhcCk7XG59XG5cbi8vIGluIHRoZSBtYWpvcml0eSBvZiBjYXNlc1xuXG52YXIgZGVmYXVsdENyZWF0ZU9ic2VydmFibGVPcHRpb25zID0ge1xuICBkZWVwOiB0cnVlLFxuICBuYW1lOiB1bmRlZmluZWQsXG4gIGRlZmF1bHREZWNvcmF0b3I6IHVuZGVmaW5lZCxcbiAgcHJveHk6IHRydWVcbn07XG5PYmplY3QuZnJlZXplKGRlZmF1bHRDcmVhdGVPYnNlcnZhYmxlT3B0aW9ucyk7XG5mdW5jdGlvbiBhc0NyZWF0ZU9ic2VydmFibGVPcHRpb25zKHRoaW5nKSB7XG4gIHJldHVybiB0aGluZyB8fCBkZWZhdWx0Q3JlYXRlT2JzZXJ2YWJsZU9wdGlvbnM7XG59XG52YXIgb2JzZXJ2YWJsZUFubm90YXRpb24gPSAvKiNfX1BVUkVfXyovY3JlYXRlT2JzZXJ2YWJsZUFubm90YXRpb24oXCJvYnNlcnZhYmxlXCIpO1xudmFyIG9ic2VydmFibGVSZWZBbm5vdGF0aW9uID0gLyojX19QVVJFX18qL2NyZWF0ZU9ic2VydmFibGVBbm5vdGF0aW9uKFwib2JzZXJ2YWJsZS5yZWZcIiwge1xuICBlbmhhbmNlcjogcmVmZXJlbmNlRW5oYW5jZXJcbn0pO1xudmFyIG9ic2VydmFibGVTaGFsbG93QW5ub3RhdGlvbiA9IC8qI19fUFVSRV9fKi9jcmVhdGVPYnNlcnZhYmxlQW5ub3RhdGlvbihcIm9ic2VydmFibGUuc2hhbGxvd1wiLCB7XG4gIGVuaGFuY2VyOiBzaGFsbG93RW5oYW5jZXJcbn0pO1xudmFyIG9ic2VydmFibGVTdHJ1Y3RBbm5vdGF0aW9uID0gLyojX19QVVJFX18qL2NyZWF0ZU9ic2VydmFibGVBbm5vdGF0aW9uKFwib2JzZXJ2YWJsZS5zdHJ1Y3RcIiwge1xuICBlbmhhbmNlcjogcmVmU3RydWN0RW5oYW5jZXJcbn0pO1xudmFyIG9ic2VydmFibGVEZWNvcmF0b3JBbm5vdGF0aW9uID0gLyojX19QVVJFX18qL2NyZWF0ZURlY29yYXRvckFubm90YXRpb24ob2JzZXJ2YWJsZUFubm90YXRpb24pO1xuZnVuY3Rpb24gZ2V0RW5oYW5jZXJGcm9tT3B0aW9ucyhvcHRpb25zKSB7XG4gIHJldHVybiBvcHRpb25zLmRlZXAgPT09IHRydWUgPyBkZWVwRW5oYW5jZXIgOiBvcHRpb25zLmRlZXAgPT09IGZhbHNlID8gcmVmZXJlbmNlRW5oYW5jZXIgOiBnZXRFbmhhbmNlckZyb21Bbm5vdGF0aW9uKG9wdGlvbnMuZGVmYXVsdERlY29yYXRvcik7XG59XG5mdW5jdGlvbiBnZXRBbm5vdGF0aW9uRnJvbU9wdGlvbnMob3B0aW9ucykge1xuICB2YXIgX29wdGlvbnMkZGVmYXVsdERlY29yO1xuXG4gIHJldHVybiBvcHRpb25zID8gKF9vcHRpb25zJGRlZmF1bHREZWNvciA9IG9wdGlvbnMuZGVmYXVsdERlY29yYXRvcikgIT0gbnVsbCA/IF9vcHRpb25zJGRlZmF1bHREZWNvciA6IGNyZWF0ZUF1dG9Bbm5vdGF0aW9uKG9wdGlvbnMpIDogdW5kZWZpbmVkO1xufVxuZnVuY3Rpb24gZ2V0RW5oYW5jZXJGcm9tQW5ub3RhdGlvbihhbm5vdGF0aW9uKSB7XG4gIHZhciBfYW5ub3RhdGlvbiRvcHRpb25zXyQsIF9hbm5vdGF0aW9uJG9wdGlvbnNfO1xuXG4gIHJldHVybiAhYW5ub3RhdGlvbiA/IGRlZXBFbmhhbmNlciA6IChfYW5ub3RhdGlvbiRvcHRpb25zXyQgPSAoX2Fubm90YXRpb24kb3B0aW9uc18gPSBhbm5vdGF0aW9uLm9wdGlvbnNfKSA9PSBudWxsID8gdm9pZCAwIDogX2Fubm90YXRpb24kb3B0aW9uc18uZW5oYW5jZXIpICE9IG51bGwgPyBfYW5ub3RhdGlvbiRvcHRpb25zXyQgOiBkZWVwRW5oYW5jZXI7XG59XG4vKipcbiAqIFR1cm5zIGFuIG9iamVjdCwgYXJyYXkgb3IgZnVuY3Rpb24gaW50byBhIHJlYWN0aXZlIHN0cnVjdHVyZS5cbiAqIEBwYXJhbSB2IHRoZSB2YWx1ZSB3aGljaCBzaG91bGQgYmVjb21lIG9ic2VydmFibGUuXG4gKi9cblxuZnVuY3Rpb24gY3JlYXRlT2JzZXJ2YWJsZSh2LCBhcmcyLCBhcmczKSB7XG4gIC8vIEBvYnNlcnZhYmxlIHNvbWVQcm9wO1xuICBpZiAoaXNTdHJpbmdpc2goYXJnMikpIHtcbiAgICBzdG9yZUFubm90YXRpb24odiwgYXJnMiwgb2JzZXJ2YWJsZUFubm90YXRpb24pO1xuICAgIHJldHVybjtcbiAgfSAvLyBhbHJlYWR5IG9ic2VydmFibGUgLSBpZ25vcmVcblxuXG4gIGlmIChpc09ic2VydmFibGUodikpIHJldHVybiB2OyAvLyBwbGFpbiBvYmplY3RcblxuICBpZiAoaXNQbGFpbk9iamVjdCh2KSkgcmV0dXJuIG9ic2VydmFibGUub2JqZWN0KHYsIGFyZzIsIGFyZzMpOyAvLyBBcnJheVxuXG4gIGlmIChBcnJheS5pc0FycmF5KHYpKSByZXR1cm4gb2JzZXJ2YWJsZS5hcnJheSh2LCBhcmcyKTsgLy8gTWFwXG5cbiAgaWYgKGlzRVM2TWFwKHYpKSByZXR1cm4gb2JzZXJ2YWJsZS5tYXAodiwgYXJnMik7IC8vIFNldFxuXG4gIGlmIChpc0VTNlNldCh2KSkgcmV0dXJuIG9ic2VydmFibGUuc2V0KHYsIGFyZzIpOyAvLyBvdGhlciBvYmplY3QgLSBpZ25vcmVcblxuICBpZiAodHlwZW9mIHYgPT09IFwib2JqZWN0XCIgJiYgdiAhPT0gbnVsbCkgcmV0dXJuIHY7IC8vIGFueXRoaW5nIGVsc2VcblxuICByZXR1cm4gb2JzZXJ2YWJsZS5ib3godiwgYXJnMik7XG59XG5cbk9iamVjdC5hc3NpZ24oY3JlYXRlT2JzZXJ2YWJsZSwgb2JzZXJ2YWJsZURlY29yYXRvckFubm90YXRpb24pO1xudmFyIG9ic2VydmFibGVGYWN0b3JpZXMgPSB7XG4gIGJveDogZnVuY3Rpb24gYm94KHZhbHVlLCBvcHRpb25zKSB7XG4gICAgdmFyIG8gPSBhc0NyZWF0ZU9ic2VydmFibGVPcHRpb25zKG9wdGlvbnMpO1xuICAgIHJldHVybiBuZXcgT2JzZXJ2YWJsZVZhbHVlKHZhbHVlLCBnZXRFbmhhbmNlckZyb21PcHRpb25zKG8pLCBvLm5hbWUsIHRydWUsIG8uZXF1YWxzKTtcbiAgfSxcbiAgYXJyYXk6IGZ1bmN0aW9uIGFycmF5KGluaXRpYWxWYWx1ZXMsIG9wdGlvbnMpIHtcbiAgICB2YXIgbyA9IGFzQ3JlYXRlT2JzZXJ2YWJsZU9wdGlvbnMob3B0aW9ucyk7XG4gICAgcmV0dXJuIChnbG9iYWxTdGF0ZS51c2VQcm94aWVzID09PSBmYWxzZSB8fCBvLnByb3h5ID09PSBmYWxzZSA/IGNyZWF0ZUxlZ2FjeUFycmF5IDogY3JlYXRlT2JzZXJ2YWJsZUFycmF5KShpbml0aWFsVmFsdWVzLCBnZXRFbmhhbmNlckZyb21PcHRpb25zKG8pLCBvLm5hbWUpO1xuICB9LFxuICBtYXA6IGZ1bmN0aW9uIG1hcChpbml0aWFsVmFsdWVzLCBvcHRpb25zKSB7XG4gICAgdmFyIG8gPSBhc0NyZWF0ZU9ic2VydmFibGVPcHRpb25zKG9wdGlvbnMpO1xuICAgIHJldHVybiBuZXcgT2JzZXJ2YWJsZU1hcChpbml0aWFsVmFsdWVzLCBnZXRFbmhhbmNlckZyb21PcHRpb25zKG8pLCBvLm5hbWUpO1xuICB9LFxuICBzZXQ6IGZ1bmN0aW9uIHNldChpbml0aWFsVmFsdWVzLCBvcHRpb25zKSB7XG4gICAgdmFyIG8gPSBhc0NyZWF0ZU9ic2VydmFibGVPcHRpb25zKG9wdGlvbnMpO1xuICAgIHJldHVybiBuZXcgT2JzZXJ2YWJsZVNldChpbml0aWFsVmFsdWVzLCBnZXRFbmhhbmNlckZyb21PcHRpb25zKG8pLCBvLm5hbWUpO1xuICB9LFxuICBvYmplY3Q6IGZ1bmN0aW9uIG9iamVjdChwcm9wcywgZGVjb3JhdG9ycywgb3B0aW9ucykge1xuICAgIHJldHVybiBleHRlbmRPYnNlcnZhYmxlKGdsb2JhbFN0YXRlLnVzZVByb3hpZXMgPT09IGZhbHNlIHx8IChvcHRpb25zID09IG51bGwgPyB2b2lkIDAgOiBvcHRpb25zLnByb3h5KSA9PT0gZmFsc2UgPyBhc09ic2VydmFibGVPYmplY3Qoe30sIG9wdGlvbnMpIDogYXNEeW5hbWljT2JzZXJ2YWJsZU9iamVjdCh7fSwgb3B0aW9ucyksIHByb3BzLCBkZWNvcmF0b3JzKTtcbiAgfSxcbiAgcmVmOiAvKiNfX1BVUkVfXyovY3JlYXRlRGVjb3JhdG9yQW5ub3RhdGlvbihvYnNlcnZhYmxlUmVmQW5ub3RhdGlvbiksXG4gIHNoYWxsb3c6IC8qI19fUFVSRV9fKi9jcmVhdGVEZWNvcmF0b3JBbm5vdGF0aW9uKG9ic2VydmFibGVTaGFsbG93QW5ub3RhdGlvbiksXG4gIGRlZXA6IG9ic2VydmFibGVEZWNvcmF0b3JBbm5vdGF0aW9uLFxuICBzdHJ1Y3Q6IC8qI19fUFVSRV9fKi9jcmVhdGVEZWNvcmF0b3JBbm5vdGF0aW9uKG9ic2VydmFibGVTdHJ1Y3RBbm5vdGF0aW9uKVxufTsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG5cbnZhciBvYnNlcnZhYmxlID0gLyojX19QVVJFX18qL2Fzc2lnbihjcmVhdGVPYnNlcnZhYmxlLCBvYnNlcnZhYmxlRmFjdG9yaWVzKTtcblxudmFyIENPTVBVVEVEID0gXCJjb21wdXRlZFwiO1xudmFyIENPTVBVVEVEX1NUUlVDVCA9IFwiY29tcHV0ZWQuc3RydWN0XCI7XG52YXIgY29tcHV0ZWRBbm5vdGF0aW9uID0gLyojX19QVVJFX18qL2NyZWF0ZUNvbXB1dGVkQW5ub3RhdGlvbihDT01QVVRFRCk7XG52YXIgY29tcHV0ZWRTdHJ1Y3RBbm5vdGF0aW9uID0gLyojX19QVVJFX18qL2NyZWF0ZUNvbXB1dGVkQW5ub3RhdGlvbihDT01QVVRFRF9TVFJVQ1QsIHtcbiAgZXF1YWxzOiBjb21wYXJlci5zdHJ1Y3R1cmFsXG59KTtcbi8qKlxuICogRGVjb3JhdG9yIGZvciBjbGFzcyBwcm9wZXJ0aWVzOiBAY29tcHV0ZWQgZ2V0IHZhbHVlKCkgeyByZXR1cm4gZXhwcjsgfS5cbiAqIEZvciBsZWdhY3kgcHVycG9zZXMgYWxzbyBpbnZva2FibGUgYXMgRVM1IG9ic2VydmFibGUgY3JlYXRlZDogYGNvbXB1dGVkKCgpID0+IGV4cHIpYDtcbiAqL1xuXG52YXIgY29tcHV0ZWQgPSBmdW5jdGlvbiBjb21wdXRlZChhcmcxLCBhcmcyKSB7XG4gIGlmIChpc1N0cmluZ2lzaChhcmcyKSkge1xuICAgIC8vIEBjb21wdXRlZFxuICAgIHJldHVybiBzdG9yZUFubm90YXRpb24oYXJnMSwgYXJnMiwgY29tcHV0ZWRBbm5vdGF0aW9uKTtcbiAgfVxuXG4gIGlmIChpc1BsYWluT2JqZWN0KGFyZzEpKSB7XG4gICAgLy8gQGNvbXB1dGVkKHsgb3B0aW9ucyB9KVxuICAgIHJldHVybiBjcmVhdGVEZWNvcmF0b3JBbm5vdGF0aW9uKGNyZWF0ZUNvbXB1dGVkQW5ub3RhdGlvbihDT01QVVRFRCwgYXJnMSkpO1xuICB9IC8vIGNvbXB1dGVkKGV4cHIsIG9wdGlvbnM/KVxuXG5cbiAgaWYgKE5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAgIGlmICghaXNGdW5jdGlvbihhcmcxKSkgZGllKFwiRmlyc3QgYXJndW1lbnQgdG8gYGNvbXB1dGVkYCBzaG91bGQgYmUgYW4gZXhwcmVzc2lvbi5cIik7XG4gICAgaWYgKGlzRnVuY3Rpb24oYXJnMikpIGRpZShcIkEgc2V0dGVyIGFzIHNlY29uZCBhcmd1bWVudCBpcyBubyBsb25nZXIgc3VwcG9ydGVkLCB1c2UgYHsgc2V0OiBmbiB9YCBvcHRpb24gaW5zdGVhZFwiKTtcbiAgfVxuXG4gIHZhciBvcHRzID0gaXNQbGFpbk9iamVjdChhcmcyKSA/IGFyZzIgOiB7fTtcbiAgb3B0cy5nZXQgPSBhcmcxO1xuICBvcHRzLm5hbWUgfHwgKG9wdHMubmFtZSA9IGFyZzEubmFtZSB8fCBcIlwiKTtcbiAgLyogZm9yIGdlbmVyYXRlZCBuYW1lICovXG5cbiAgcmV0dXJuIG5ldyBDb21wdXRlZFZhbHVlKG9wdHMpO1xufTtcbk9iamVjdC5hc3NpZ24oY29tcHV0ZWQsIGNvbXB1dGVkQW5ub3RhdGlvbik7XG5jb21wdXRlZC5zdHJ1Y3QgPSAvKiNfX1BVUkVfXyovY3JlYXRlRGVjb3JhdG9yQW5ub3RhdGlvbihjb21wdXRlZFN0cnVjdEFubm90YXRpb24pO1xuXG52YXIgX2dldERlc2NyaXB0b3IkY29uZmlnLCBfZ2V0RGVzY3JpcHRvcjtcbi8vIG1vYnggdmVyc2lvbnNcblxudmFyIGN1cnJlbnRBY3Rpb25JZCA9IDA7XG52YXIgbmV4dEFjdGlvbklkID0gMTtcbnZhciBpc0Z1bmN0aW9uTmFtZUNvbmZpZ3VyYWJsZSA9IChfZ2V0RGVzY3JpcHRvciRjb25maWcgPSAoX2dldERlc2NyaXB0b3IgPSAvKiNfX1BVUkVfXyovZ2V0RGVzY3JpcHRvcihmdW5jdGlvbiAoKSB7fSwgXCJuYW1lXCIpKSA9PSBudWxsID8gdm9pZCAwIDogX2dldERlc2NyaXB0b3IuY29uZmlndXJhYmxlKSAhPSBudWxsID8gX2dldERlc2NyaXB0b3IkY29uZmlnIDogZmFsc2U7IC8vIHdlIGNhbiBzYWZlbHkgcmVjeWNsZSB0aGlzIG9iamVjdFxuXG52YXIgdG1wTmFtZURlc2NyaXB0b3IgPSB7XG4gIHZhbHVlOiBcImFjdGlvblwiLFxuICBjb25maWd1cmFibGU6IHRydWUsXG4gIHdyaXRhYmxlOiBmYWxzZSxcbiAgZW51bWVyYWJsZTogZmFsc2Vcbn07XG5mdW5jdGlvbiBjcmVhdGVBY3Rpb24oYWN0aW9uTmFtZSwgZm4sIGF1dG9BY3Rpb24sIHJlZikge1xuICBpZiAoYXV0b0FjdGlvbiA9PT0gdm9pZCAwKSB7XG4gICAgYXV0b0FjdGlvbiA9IGZhbHNlO1xuICB9XG5cbiAgaWYgKE5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAgIGlmICghaXNGdW5jdGlvbihmbikpIGRpZShcImBhY3Rpb25gIGNhbiBvbmx5IGJlIGludm9rZWQgb24gZnVuY3Rpb25zXCIpO1xuICAgIGlmICh0eXBlb2YgYWN0aW9uTmFtZSAhPT0gXCJzdHJpbmdcIiB8fCAhYWN0aW9uTmFtZSkgZGllKFwiYWN0aW9ucyBzaG91bGQgaGF2ZSB2YWxpZCBuYW1lcywgZ290OiAnXCIgKyBhY3Rpb25OYW1lICsgXCInXCIpO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVzKCkge1xuICAgIHJldHVybiBleGVjdXRlQWN0aW9uKGFjdGlvbk5hbWUsIGF1dG9BY3Rpb24sIGZuLCByZWYgfHwgdGhpcywgYXJndW1lbnRzKTtcbiAgfVxuXG4gIHJlcy5pc01vYnhBY3Rpb24gPSB0cnVlO1xuXG4gIGlmIChpc0Z1bmN0aW9uTmFtZUNvbmZpZ3VyYWJsZSkge1xuICAgIHRtcE5hbWVEZXNjcmlwdG9yLnZhbHVlID0gYWN0aW9uTmFtZTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkocmVzLCBcIm5hbWVcIiwgdG1wTmFtZURlc2NyaXB0b3IpO1xuICB9XG5cbiAgcmV0dXJuIHJlcztcbn1cbmZ1bmN0aW9uIGV4ZWN1dGVBY3Rpb24oYWN0aW9uTmFtZSwgY2FuUnVuQXNEZXJpdmF0aW9uLCBmbiwgc2NvcGUsIGFyZ3MpIHtcbiAgdmFyIHJ1bkluZm8gPSBfc3RhcnRBY3Rpb24oYWN0aW9uTmFtZSwgY2FuUnVuQXNEZXJpdmF0aW9uLCBzY29wZSwgYXJncyk7XG5cbiAgdHJ5IHtcbiAgICByZXR1cm4gZm4uYXBwbHkoc2NvcGUsIGFyZ3MpO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBydW5JbmZvLmVycm9yXyA9IGVycjtcbiAgICB0aHJvdyBlcnI7XG4gIH0gZmluYWxseSB7XG4gICAgX2VuZEFjdGlvbihydW5JbmZvKTtcbiAgfVxufVxuZnVuY3Rpb24gX3N0YXJ0QWN0aW9uKGFjdGlvbk5hbWUsIGNhblJ1bkFzRGVyaXZhdGlvbiwgLy8gdHJ1ZSBmb3IgYXV0b0FjdGlvblxuc2NvcGUsIGFyZ3MpIHtcbiAgdmFyIG5vdGlmeVNweV8gPSBOT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgJiYgaXNTcHlFbmFibGVkKCkgJiYgISFhY3Rpb25OYW1lO1xuICB2YXIgc3RhcnRUaW1lXyA9IDA7XG5cbiAgaWYgKE5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiAmJiBub3RpZnlTcHlfKSB7XG4gICAgc3RhcnRUaW1lXyA9IERhdGUubm93KCk7XG4gICAgdmFyIGZsYXR0ZW5lZEFyZ3MgPSBhcmdzID8gQXJyYXkuZnJvbShhcmdzKSA6IEVNUFRZX0FSUkFZO1xuICAgIHNweVJlcG9ydFN0YXJ0KHtcbiAgICAgIHR5cGU6IEFDVElPTixcbiAgICAgIG5hbWU6IGFjdGlvbk5hbWUsXG4gICAgICBvYmplY3Q6IHNjb3BlLFxuICAgICAgYXJndW1lbnRzOiBmbGF0dGVuZWRBcmdzXG4gICAgfSk7XG4gIH1cblxuICB2YXIgcHJldkRlcml2YXRpb25fID0gZ2xvYmFsU3RhdGUudHJhY2tpbmdEZXJpdmF0aW9uO1xuICB2YXIgcnVuQXNBY3Rpb24gPSAhY2FuUnVuQXNEZXJpdmF0aW9uIHx8ICFwcmV2RGVyaXZhdGlvbl87XG4gIHN0YXJ0QmF0Y2goKTtcbiAgdmFyIHByZXZBbGxvd1N0YXRlQ2hhbmdlc18gPSBnbG9iYWxTdGF0ZS5hbGxvd1N0YXRlQ2hhbmdlczsgLy8gYnkgZGVmYXVsdCBwcmVzZXJ2ZSBwcmV2aW91cyBhbGxvd1xuXG4gIGlmIChydW5Bc0FjdGlvbikge1xuICAgIHVudHJhY2tlZFN0YXJ0KCk7XG4gICAgcHJldkFsbG93U3RhdGVDaGFuZ2VzXyA9IGFsbG93U3RhdGVDaGFuZ2VzU3RhcnQodHJ1ZSk7XG4gIH1cblxuICB2YXIgcHJldkFsbG93U3RhdGVSZWFkc18gPSBhbGxvd1N0YXRlUmVhZHNTdGFydCh0cnVlKTtcbiAgdmFyIHJ1bkluZm8gPSB7XG4gICAgcnVuQXNBY3Rpb25fOiBydW5Bc0FjdGlvbixcbiAgICBwcmV2RGVyaXZhdGlvbl86IHByZXZEZXJpdmF0aW9uXyxcbiAgICBwcmV2QWxsb3dTdGF0ZUNoYW5nZXNfOiBwcmV2QWxsb3dTdGF0ZUNoYW5nZXNfLFxuICAgIHByZXZBbGxvd1N0YXRlUmVhZHNfOiBwcmV2QWxsb3dTdGF0ZVJlYWRzXyxcbiAgICBub3RpZnlTcHlfOiBub3RpZnlTcHlfLFxuICAgIHN0YXJ0VGltZV86IHN0YXJ0VGltZV8sXG4gICAgYWN0aW9uSWRfOiBuZXh0QWN0aW9uSWQrKyxcbiAgICBwYXJlbnRBY3Rpb25JZF86IGN1cnJlbnRBY3Rpb25JZFxuICB9O1xuICBjdXJyZW50QWN0aW9uSWQgPSBydW5JbmZvLmFjdGlvbklkXztcbiAgcmV0dXJuIHJ1bkluZm87XG59XG5mdW5jdGlvbiBfZW5kQWN0aW9uKHJ1bkluZm8pIHtcbiAgaWYgKGN1cnJlbnRBY3Rpb25JZCAhPT0gcnVuSW5mby5hY3Rpb25JZF8pIHtcbiAgICBkaWUoMzApO1xuICB9XG5cbiAgY3VycmVudEFjdGlvbklkID0gcnVuSW5mby5wYXJlbnRBY3Rpb25JZF87XG5cbiAgaWYgKHJ1bkluZm8uZXJyb3JfICE9PSB1bmRlZmluZWQpIHtcbiAgICBnbG9iYWxTdGF0ZS5zdXBwcmVzc1JlYWN0aW9uRXJyb3JzID0gdHJ1ZTtcbiAgfVxuXG4gIGFsbG93U3RhdGVDaGFuZ2VzRW5kKHJ1bkluZm8ucHJldkFsbG93U3RhdGVDaGFuZ2VzXyk7XG4gIGFsbG93U3RhdGVSZWFkc0VuZChydW5JbmZvLnByZXZBbGxvd1N0YXRlUmVhZHNfKTtcbiAgZW5kQmF0Y2goKTtcbiAgaWYgKHJ1bkluZm8ucnVuQXNBY3Rpb25fKSB1bnRyYWNrZWRFbmQocnVuSW5mby5wcmV2RGVyaXZhdGlvbl8pO1xuXG4gIGlmIChOT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgJiYgcnVuSW5mby5ub3RpZnlTcHlfKSB7XG4gICAgc3B5UmVwb3J0RW5kKHtcbiAgICAgIHRpbWU6IERhdGUubm93KCkgLSBydW5JbmZvLnN0YXJ0VGltZV9cbiAgICB9KTtcbiAgfVxuXG4gIGdsb2JhbFN0YXRlLnN1cHByZXNzUmVhY3Rpb25FcnJvcnMgPSBmYWxzZTtcbn1cbmZ1bmN0aW9uIGFsbG93U3RhdGVDaGFuZ2VzKGFsbG93U3RhdGVDaGFuZ2VzLCBmdW5jKSB7XG4gIHZhciBwcmV2ID0gYWxsb3dTdGF0ZUNoYW5nZXNTdGFydChhbGxvd1N0YXRlQ2hhbmdlcyk7XG5cbiAgdHJ5IHtcbiAgICByZXR1cm4gZnVuYygpO1xuICB9IGZpbmFsbHkge1xuICAgIGFsbG93U3RhdGVDaGFuZ2VzRW5kKHByZXYpO1xuICB9XG59XG5mdW5jdGlvbiBhbGxvd1N0YXRlQ2hhbmdlc1N0YXJ0KGFsbG93U3RhdGVDaGFuZ2VzKSB7XG4gIHZhciBwcmV2ID0gZ2xvYmFsU3RhdGUuYWxsb3dTdGF0ZUNoYW5nZXM7XG4gIGdsb2JhbFN0YXRlLmFsbG93U3RhdGVDaGFuZ2VzID0gYWxsb3dTdGF0ZUNoYW5nZXM7XG4gIHJldHVybiBwcmV2O1xufVxuZnVuY3Rpb24gYWxsb3dTdGF0ZUNoYW5nZXNFbmQocHJldikge1xuICBnbG9iYWxTdGF0ZS5hbGxvd1N0YXRlQ2hhbmdlcyA9IHByZXY7XG59XG5cbnZhciBfU3ltYm9sJHRvUHJpbWl0aXZlO1xudmFyIENSRUFURSA9IFwiY3JlYXRlXCI7XG5fU3ltYm9sJHRvUHJpbWl0aXZlID0gU3ltYm9sLnRvUHJpbWl0aXZlO1xudmFyIE9ic2VydmFibGVWYWx1ZSA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX0F0b20pIHtcbiAgX2luaGVyaXRzTG9vc2UoT2JzZXJ2YWJsZVZhbHVlLCBfQXRvbSk7XG5cbiAgZnVuY3Rpb24gT2JzZXJ2YWJsZVZhbHVlKHZhbHVlLCBlbmhhbmNlciwgbmFtZV8sIG5vdGlmeVNweSwgZXF1YWxzKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgaWYgKG5hbWVfID09PSB2b2lkIDApIHtcbiAgICAgIG5hbWVfID0gTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gXCJPYnNlcnZhYmxlVmFsdWVAXCIgKyBnZXROZXh0SWQoKSA6IFwiT2JzZXJ2YWJsZVZhbHVlXCI7XG4gICAgfVxuXG4gICAgaWYgKG5vdGlmeVNweSA9PT0gdm9pZCAwKSB7XG4gICAgICBub3RpZnlTcHkgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmIChlcXVhbHMgPT09IHZvaWQgMCkge1xuICAgICAgZXF1YWxzID0gY29tcGFyZXJbXCJkZWZhdWx0XCJdO1xuICAgIH1cblxuICAgIF90aGlzID0gX0F0b20uY2FsbCh0aGlzLCBuYW1lXykgfHwgdGhpcztcbiAgICBfdGhpcy5lbmhhbmNlciA9IHZvaWQgMDtcbiAgICBfdGhpcy5uYW1lXyA9IHZvaWQgMDtcbiAgICBfdGhpcy5lcXVhbHMgPSB2b2lkIDA7XG4gICAgX3RoaXMuaGFzVW5yZXBvcnRlZENoYW5nZV8gPSBmYWxzZTtcbiAgICBfdGhpcy5pbnRlcmNlcHRvcnNfID0gdm9pZCAwO1xuICAgIF90aGlzLmNoYW5nZUxpc3RlbmVyc18gPSB2b2lkIDA7XG4gICAgX3RoaXMudmFsdWVfID0gdm9pZCAwO1xuICAgIF90aGlzLmRlaGFuY2VyID0gdm9pZCAwO1xuICAgIF90aGlzLmVuaGFuY2VyID0gZW5oYW5jZXI7XG4gICAgX3RoaXMubmFtZV8gPSBuYW1lXztcbiAgICBfdGhpcy5lcXVhbHMgPSBlcXVhbHM7XG4gICAgX3RoaXMudmFsdWVfID0gZW5oYW5jZXIodmFsdWUsIHVuZGVmaW5lZCwgbmFtZV8pO1xuXG4gICAgaWYgKE5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiAmJiBub3RpZnlTcHkgJiYgaXNTcHlFbmFibGVkKCkpIHtcbiAgICAgIC8vIG9ubHkgbm90aWZ5IHNweSBpZiB0aGlzIGlzIGEgc3RhbmQtYWxvbmUgb2JzZXJ2YWJsZVxuICAgICAgc3B5UmVwb3J0KHtcbiAgICAgICAgdHlwZTogQ1JFQVRFLFxuICAgICAgICBvYmplY3Q6IF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLFxuICAgICAgICBvYnNlcnZhYmxlS2luZDogXCJ2YWx1ZVwiLFxuICAgICAgICBkZWJ1Z09iamVjdE5hbWU6IF90aGlzLm5hbWVfLFxuICAgICAgICBuZXdWYWx1ZTogXCJcIiArIF90aGlzLnZhbHVlX1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgdmFyIF9wcm90byA9IE9ic2VydmFibGVWYWx1ZS5wcm90b3R5cGU7XG5cbiAgX3Byb3RvLmRlaGFuY2VWYWx1ZSA9IGZ1bmN0aW9uIGRlaGFuY2VWYWx1ZSh2YWx1ZSkge1xuICAgIGlmICh0aGlzLmRlaGFuY2VyICE9PSB1bmRlZmluZWQpIHJldHVybiB0aGlzLmRlaGFuY2VyKHZhbHVlKTtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH07XG5cbiAgX3Byb3RvLnNldCA9IGZ1bmN0aW9uIHNldChuZXdWYWx1ZSkge1xuICAgIHZhciBvbGRWYWx1ZSA9IHRoaXMudmFsdWVfO1xuICAgIG5ld1ZhbHVlID0gdGhpcy5wcmVwYXJlTmV3VmFsdWVfKG5ld1ZhbHVlKTtcblxuICAgIGlmIChuZXdWYWx1ZSAhPT0gZ2xvYmFsU3RhdGUuVU5DSEFOR0VEKSB7XG4gICAgICB2YXIgbm90aWZ5U3B5ID0gaXNTcHlFbmFibGVkKCk7XG5cbiAgICAgIGlmIChOT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgJiYgbm90aWZ5U3B5KSB7XG4gICAgICAgIHNweVJlcG9ydFN0YXJ0KHtcbiAgICAgICAgICB0eXBlOiBVUERBVEUsXG4gICAgICAgICAgb2JqZWN0OiB0aGlzLFxuICAgICAgICAgIG9ic2VydmFibGVLaW5kOiBcInZhbHVlXCIsXG4gICAgICAgICAgZGVidWdPYmplY3ROYW1lOiB0aGlzLm5hbWVfLFxuICAgICAgICAgIG5ld1ZhbHVlOiBuZXdWYWx1ZSxcbiAgICAgICAgICBvbGRWYWx1ZTogb2xkVmFsdWVcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuc2V0TmV3VmFsdWVfKG5ld1ZhbHVlKTtcbiAgICAgIGlmIChOT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgJiYgbm90aWZ5U3B5KSBzcHlSZXBvcnRFbmQoKTtcbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLnByZXBhcmVOZXdWYWx1ZV8gPSBmdW5jdGlvbiBwcmVwYXJlTmV3VmFsdWVfKG5ld1ZhbHVlKSB7XG4gICAgY2hlY2tJZlN0YXRlTW9kaWZpY2F0aW9uc0FyZUFsbG93ZWQodGhpcyk7XG5cbiAgICBpZiAoaGFzSW50ZXJjZXB0b3JzKHRoaXMpKSB7XG4gICAgICB2YXIgY2hhbmdlID0gaW50ZXJjZXB0Q2hhbmdlKHRoaXMsIHtcbiAgICAgICAgb2JqZWN0OiB0aGlzLFxuICAgICAgICB0eXBlOiBVUERBVEUsXG4gICAgICAgIG5ld1ZhbHVlOiBuZXdWYWx1ZVxuICAgICAgfSk7XG4gICAgICBpZiAoIWNoYW5nZSkgcmV0dXJuIGdsb2JhbFN0YXRlLlVOQ0hBTkdFRDtcbiAgICAgIG5ld1ZhbHVlID0gY2hhbmdlLm5ld1ZhbHVlO1xuICAgIH0gLy8gYXBwbHkgbW9kaWZpZXJcblxuXG4gICAgbmV3VmFsdWUgPSB0aGlzLmVuaGFuY2VyKG5ld1ZhbHVlLCB0aGlzLnZhbHVlXywgdGhpcy5uYW1lXyk7XG4gICAgcmV0dXJuIHRoaXMuZXF1YWxzKHRoaXMudmFsdWVfLCBuZXdWYWx1ZSkgPyBnbG9iYWxTdGF0ZS5VTkNIQU5HRUQgOiBuZXdWYWx1ZTtcbiAgfTtcblxuICBfcHJvdG8uc2V0TmV3VmFsdWVfID0gZnVuY3Rpb24gc2V0TmV3VmFsdWVfKG5ld1ZhbHVlKSB7XG4gICAgdmFyIG9sZFZhbHVlID0gdGhpcy52YWx1ZV87XG4gICAgdGhpcy52YWx1ZV8gPSBuZXdWYWx1ZTtcbiAgICB0aGlzLnJlcG9ydENoYW5nZWQoKTtcblxuICAgIGlmIChoYXNMaXN0ZW5lcnModGhpcykpIHtcbiAgICAgIG5vdGlmeUxpc3RlbmVycyh0aGlzLCB7XG4gICAgICAgIHR5cGU6IFVQREFURSxcbiAgICAgICAgb2JqZWN0OiB0aGlzLFxuICAgICAgICBuZXdWYWx1ZTogbmV3VmFsdWUsXG4gICAgICAgIG9sZFZhbHVlOiBvbGRWYWx1ZVxuICAgICAgfSk7XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by5nZXQgPSBmdW5jdGlvbiBnZXQoKSB7XG4gICAgdGhpcy5yZXBvcnRPYnNlcnZlZCgpO1xuICAgIHJldHVybiB0aGlzLmRlaGFuY2VWYWx1ZSh0aGlzLnZhbHVlXyk7XG4gIH07XG5cbiAgX3Byb3RvLmludGVyY2VwdF8gPSBmdW5jdGlvbiBpbnRlcmNlcHRfKGhhbmRsZXIpIHtcbiAgICByZXR1cm4gcmVnaXN0ZXJJbnRlcmNlcHRvcih0aGlzLCBoYW5kbGVyKTtcbiAgfTtcblxuICBfcHJvdG8ub2JzZXJ2ZV8gPSBmdW5jdGlvbiBvYnNlcnZlXyhsaXN0ZW5lciwgZmlyZUltbWVkaWF0ZWx5KSB7XG4gICAgaWYgKGZpcmVJbW1lZGlhdGVseSkgbGlzdGVuZXIoe1xuICAgICAgb2JzZXJ2YWJsZUtpbmQ6IFwidmFsdWVcIixcbiAgICAgIGRlYnVnT2JqZWN0TmFtZTogdGhpcy5uYW1lXyxcbiAgICAgIG9iamVjdDogdGhpcyxcbiAgICAgIHR5cGU6IFVQREFURSxcbiAgICAgIG5ld1ZhbHVlOiB0aGlzLnZhbHVlXyxcbiAgICAgIG9sZFZhbHVlOiB1bmRlZmluZWRcbiAgICB9KTtcbiAgICByZXR1cm4gcmVnaXN0ZXJMaXN0ZW5lcih0aGlzLCBsaXN0ZW5lcik7XG4gIH07XG5cbiAgX3Byb3RvLnJhdyA9IGZ1bmN0aW9uIHJhdygpIHtcbiAgICAvLyB1c2VkIGJ5IE1TVCBvdCBnZXQgdW5kZWhhbmNlZCB2YWx1ZVxuICAgIHJldHVybiB0aGlzLnZhbHVlXztcbiAgfTtcblxuICBfcHJvdG8udG9KU09OID0gZnVuY3Rpb24gdG9KU09OKCkge1xuICAgIHJldHVybiB0aGlzLmdldCgpO1xuICB9O1xuXG4gIF9wcm90by50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm5hbWVfICsgXCJbXCIgKyB0aGlzLnZhbHVlXyArIFwiXVwiO1xuICB9O1xuXG4gIF9wcm90by52YWx1ZU9mID0gZnVuY3Rpb24gdmFsdWVPZigpIHtcbiAgICByZXR1cm4gdG9QcmltaXRpdmUodGhpcy5nZXQoKSk7XG4gIH07XG5cbiAgX3Byb3RvW19TeW1ib2wkdG9QcmltaXRpdmVdID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzLnZhbHVlT2YoKTtcbiAgfTtcblxuICByZXR1cm4gT2JzZXJ2YWJsZVZhbHVlO1xufShBdG9tKTtcbnZhciBpc09ic2VydmFibGVWYWx1ZSA9IC8qI19fUFVSRV9fKi9jcmVhdGVJbnN0YW5jZW9mUHJlZGljYXRlKFwiT2JzZXJ2YWJsZVZhbHVlXCIsIE9ic2VydmFibGVWYWx1ZSk7XG5cbnZhciBfU3ltYm9sJHRvUHJpbWl0aXZlJDE7XG4vKipcbiAqIEEgbm9kZSBpbiB0aGUgc3RhdGUgZGVwZW5kZW5jeSByb290IHRoYXQgb2JzZXJ2ZXMgb3RoZXIgbm9kZXMsIGFuZCBjYW4gYmUgb2JzZXJ2ZWQgaXRzZWxmLlxuICpcbiAqIENvbXB1dGVkVmFsdWUgd2lsbCByZW1lbWJlciB0aGUgcmVzdWx0IG9mIHRoZSBjb21wdXRhdGlvbiBmb3IgdGhlIGR1cmF0aW9uIG9mIHRoZSBiYXRjaCwgb3JcbiAqIHdoaWxlIGJlaW5nIG9ic2VydmVkLlxuICpcbiAqIER1cmluZyB0aGlzIHRpbWUgaXQgd2lsbCByZWNvbXB1dGUgb25seSB3aGVuIG9uZSBvZiBpdHMgZGlyZWN0IGRlcGVuZGVuY2llcyBjaGFuZ2VkLFxuICogYnV0IG9ubHkgd2hlbiBpdCBpcyBiZWluZyBhY2Nlc3NlZCB3aXRoIGBDb21wdXRlZFZhbHVlLmdldCgpYC5cbiAqXG4gKiBJbXBsZW1lbnRhdGlvbiBkZXNjcmlwdGlvbjpcbiAqIDEuIEZpcnN0IHRpbWUgaXQncyBiZWluZyBhY2Nlc3NlZCBpdCB3aWxsIGNvbXB1dGUgYW5kIHJlbWVtYmVyIHJlc3VsdFxuICogICAgZ2l2ZSBiYWNrIHJlbWVtYmVyZWQgcmVzdWx0IHVudGlsIDIuIGhhcHBlbnNcbiAqIDIuIEZpcnN0IHRpbWUgYW55IGRlZXAgZGVwZW5kZW5jeSBjaGFuZ2UsIHByb3BhZ2F0ZSBQT1NTSUJMWV9TVEFMRSB0byBhbGwgb2JzZXJ2ZXJzLCB3YWl0IGZvciAzLlxuICogMy4gV2hlbiBpdCdzIGJlaW5nIGFjY2Vzc2VkLCByZWNvbXB1dGUgaWYgYW55IHNoYWxsb3cgZGVwZW5kZW5jeSBjaGFuZ2VkLlxuICogICAgaWYgcmVzdWx0IGNoYW5nZWQ6IHByb3BhZ2F0ZSBTVEFMRSB0byBhbGwgb2JzZXJ2ZXJzLCB0aGF0IHdlcmUgUE9TU0lCTFlfU1RBTEUgZnJvbSB0aGUgbGFzdCBzdGVwLlxuICogICAgZ28gdG8gc3RlcCAyLiBlaXRoZXIgd2F5XG4gKlxuICogSWYgYXQgYW55IHBvaW50IGl0J3Mgb3V0c2lkZSBiYXRjaCBhbmQgaXQgaXNuJ3Qgb2JzZXJ2ZWQ6IHJlc2V0IGV2ZXJ5dGhpbmcgYW5kIGdvIHRvIDEuXG4gKi9cblxuX1N5bWJvbCR0b1ByaW1pdGl2ZSQxID0gU3ltYm9sLnRvUHJpbWl0aXZlO1xudmFyIENvbXB1dGVkVmFsdWUgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkge1xuICAvLyBub2RlcyB3ZSBhcmUgbG9va2luZyBhdC4gT3VyIHZhbHVlIGRlcGVuZHMgb24gdGhlc2Ugbm9kZXNcbiAgLy8gZHVyaW5nIHRyYWNraW5nIGl0J3MgYW4gYXJyYXkgd2l0aCBuZXcgb2JzZXJ2ZWQgb2JzZXJ2ZXJzXG4gIC8vIHRvIGNoZWNrIGZvciBjeWNsZXNcbiAgLy8gTi5COiB1bm1pbmlmaWVkIGFzIGl0IGlzIHVzZWQgYnkgTVNUXG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhIG5ldyBjb21wdXRlZCB2YWx1ZSBiYXNlZCBvbiBhIGZ1bmN0aW9uIGV4cHJlc3Npb24uXG4gICAqXG4gICAqIFRoZSBgbmFtZWAgcHJvcGVydHkgaXMgZm9yIGRlYnVnIHB1cnBvc2VzIG9ubHkuXG4gICAqXG4gICAqIFRoZSBgZXF1YWxzYCBwcm9wZXJ0eSBzcGVjaWZpZXMgdGhlIGNvbXBhcmVyIGZ1bmN0aW9uIHRvIHVzZSB0byBkZXRlcm1pbmUgaWYgYSBuZXdseSBwcm9kdWNlZFxuICAgKiB2YWx1ZSBkaWZmZXJzIGZyb20gdGhlIHByZXZpb3VzIHZhbHVlLiBUd28gY29tcGFyZXJzIGFyZSBwcm92aWRlZCBpbiB0aGUgbGlicmFyeTsgYGRlZmF1bHRDb21wYXJlcmBcbiAgICogY29tcGFyZXMgYmFzZWQgb24gaWRlbnRpdHkgY29tcGFyaXNvbiAoPT09KSwgYW5kIGBzdHJ1Y3R1cmFsQ29tcGFyZXJgIGRlZXBseSBjb21wYXJlcyB0aGUgc3RydWN0dXJlLlxuICAgKiBTdHJ1Y3R1cmFsIGNvbXBhcmlzb24gY2FuIGJlIGNvbnZlbmllbnQgaWYgeW91IGFsd2F5cyBwcm9kdWNlIGEgbmV3IGFnZ3JlZ2F0ZWQgb2JqZWN0IGFuZFxuICAgKiBkb24ndCB3YW50IHRvIG5vdGlmeSBvYnNlcnZlcnMgaWYgaXQgaXMgc3RydWN0dXJhbGx5IHRoZSBzYW1lLlxuICAgKiBUaGlzIGlzIHVzZWZ1bCBmb3Igd29ya2luZyB3aXRoIHZlY3RvcnMsIG1vdXNlIGNvb3JkaW5hdGVzIGV0Yy5cbiAgICovXG4gIGZ1bmN0aW9uIENvbXB1dGVkVmFsdWUob3B0aW9ucykge1xuICAgIHRoaXMuZGVwZW5kZW5jaWVzU3RhdGVfID0gSURlcml2YXRpb25TdGF0ZV8uTk9UX1RSQUNLSU5HXztcbiAgICB0aGlzLm9ic2VydmluZ18gPSBbXTtcbiAgICB0aGlzLm5ld09ic2VydmluZ18gPSBudWxsO1xuICAgIHRoaXMuaXNCZWluZ09ic2VydmVkXyA9IGZhbHNlO1xuICAgIHRoaXMuaXNQZW5kaW5nVW5vYnNlcnZhdGlvbl8gPSBmYWxzZTtcbiAgICB0aGlzLm9ic2VydmVyc18gPSBuZXcgU2V0KCk7XG4gICAgdGhpcy5kaWZmVmFsdWVfID0gMDtcbiAgICB0aGlzLnJ1bklkXyA9IDA7XG4gICAgdGhpcy5sYXN0QWNjZXNzZWRCeV8gPSAwO1xuICAgIHRoaXMubG93ZXN0T2JzZXJ2ZXJTdGF0ZV8gPSBJRGVyaXZhdGlvblN0YXRlXy5VUF9UT19EQVRFXztcbiAgICB0aGlzLnVuYm91bmREZXBzQ291bnRfID0gMDtcbiAgICB0aGlzLnZhbHVlXyA9IG5ldyBDYXVnaHRFeGNlcHRpb24obnVsbCk7XG4gICAgdGhpcy5uYW1lXyA9IHZvaWQgMDtcbiAgICB0aGlzLnRyaWdnZXJlZEJ5XyA9IHZvaWQgMDtcbiAgICB0aGlzLmlzQ29tcHV0aW5nXyA9IGZhbHNlO1xuICAgIHRoaXMuaXNSdW5uaW5nU2V0dGVyXyA9IGZhbHNlO1xuICAgIHRoaXMuZGVyaXZhdGlvbiA9IHZvaWQgMDtcbiAgICB0aGlzLnNldHRlcl8gPSB2b2lkIDA7XG4gICAgdGhpcy5pc1RyYWNpbmdfID0gVHJhY2VNb2RlLk5PTkU7XG4gICAgdGhpcy5zY29wZV8gPSB2b2lkIDA7XG4gICAgdGhpcy5lcXVhbHNfID0gdm9pZCAwO1xuICAgIHRoaXMucmVxdWlyZXNSZWFjdGlvbl8gPSB2b2lkIDA7XG4gICAgdGhpcy5rZWVwQWxpdmVfID0gdm9pZCAwO1xuICAgIHRoaXMub25CT0wgPSB2b2lkIDA7XG4gICAgdGhpcy5vbkJVT0wgPSB2b2lkIDA7XG4gICAgaWYgKCFvcHRpb25zLmdldCkgZGllKDMxKTtcbiAgICB0aGlzLmRlcml2YXRpb24gPSBvcHRpb25zLmdldDtcbiAgICB0aGlzLm5hbWVfID0gb3B0aW9ucy5uYW1lIHx8IChOT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBcIkNvbXB1dGVkVmFsdWVAXCIgKyBnZXROZXh0SWQoKSA6IFwiQ29tcHV0ZWRWYWx1ZVwiKTtcblxuICAgIGlmIChvcHRpb25zLnNldCkge1xuICAgICAgdGhpcy5zZXR0ZXJfID0gY3JlYXRlQWN0aW9uKE5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IHRoaXMubmFtZV8gKyBcIi1zZXR0ZXJcIiA6IFwiQ29tcHV0ZWRWYWx1ZS1zZXR0ZXJcIiwgb3B0aW9ucy5zZXQpO1xuICAgIH1cblxuICAgIHRoaXMuZXF1YWxzXyA9IG9wdGlvbnMuZXF1YWxzIHx8IChvcHRpb25zLmNvbXBhcmVTdHJ1Y3R1cmFsIHx8IG9wdGlvbnMuc3RydWN0ID8gY29tcGFyZXIuc3RydWN0dXJhbCA6IGNvbXBhcmVyW1wiZGVmYXVsdFwiXSk7XG4gICAgdGhpcy5zY29wZV8gPSBvcHRpb25zLmNvbnRleHQ7XG4gICAgdGhpcy5yZXF1aXJlc1JlYWN0aW9uXyA9ICEhb3B0aW9ucy5yZXF1aXJlc1JlYWN0aW9uO1xuICAgIHRoaXMua2VlcEFsaXZlXyA9ICEhb3B0aW9ucy5rZWVwQWxpdmU7XG4gIH1cblxuICB2YXIgX3Byb3RvID0gQ29tcHV0ZWRWYWx1ZS5wcm90b3R5cGU7XG5cbiAgX3Byb3RvLm9uQmVjb21lU3RhbGVfID0gZnVuY3Rpb24gb25CZWNvbWVTdGFsZV8oKSB7XG4gICAgcHJvcGFnYXRlTWF5YmVDaGFuZ2VkKHRoaXMpO1xuICB9O1xuXG4gIF9wcm90by5vbkJPID0gZnVuY3Rpb24gb25CTygpIHtcbiAgICBpZiAodGhpcy5vbkJPTCkge1xuICAgICAgdGhpcy5vbkJPTC5mb3JFYWNoKGZ1bmN0aW9uIChsaXN0ZW5lcikge1xuICAgICAgICByZXR1cm4gbGlzdGVuZXIoKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8ub25CVU8gPSBmdW5jdGlvbiBvbkJVTygpIHtcbiAgICBpZiAodGhpcy5vbkJVT0wpIHtcbiAgICAgIHRoaXMub25CVU9MLmZvckVhY2goZnVuY3Rpb24gKGxpc3RlbmVyKSB7XG4gICAgICAgIHJldHVybiBsaXN0ZW5lcigpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBjdXJyZW50IHZhbHVlIG9mIHRoaXMgY29tcHV0ZWQgdmFsdWUuXG4gICAqIFdpbGwgZXZhbHVhdGUgaXRzIGNvbXB1dGF0aW9uIGZpcnN0IGlmIG5lZWRlZC5cbiAgICovXG4gIDtcblxuICBfcHJvdG8uZ2V0ID0gZnVuY3Rpb24gZ2V0KCkge1xuICAgIGlmICh0aGlzLmlzQ29tcHV0aW5nXykgZGllKDMyLCB0aGlzLm5hbWVfLCB0aGlzLmRlcml2YXRpb24pO1xuXG4gICAgaWYgKGdsb2JhbFN0YXRlLmluQmF0Y2ggPT09IDAgJiYgLy8gIWdsb2JhbFN0YXRlLnRyYWNraW5nRGVyaXZhdHBpb24gJiZcbiAgICB0aGlzLm9ic2VydmVyc18uc2l6ZSA9PT0gMCAmJiAhdGhpcy5rZWVwQWxpdmVfKSB7XG4gICAgICBpZiAoc2hvdWxkQ29tcHV0ZSh0aGlzKSkge1xuICAgICAgICB0aGlzLndhcm5BYm91dFVudHJhY2tlZFJlYWRfKCk7XG4gICAgICAgIHN0YXJ0QmF0Y2goKTsgLy8gU2VlIHBlcmYgdGVzdCAnY29tcHV0ZWQgbWVtb2l6YXRpb24nXG5cbiAgICAgICAgdGhpcy52YWx1ZV8gPSB0aGlzLmNvbXB1dGVWYWx1ZV8oZmFsc2UpO1xuICAgICAgICBlbmRCYXRjaCgpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICByZXBvcnRPYnNlcnZlZCh0aGlzKTtcblxuICAgICAgaWYgKHNob3VsZENvbXB1dGUodGhpcykpIHtcbiAgICAgICAgdmFyIHByZXZUcmFja2luZ0NvbnRleHQgPSBnbG9iYWxTdGF0ZS50cmFja2luZ0NvbnRleHQ7XG4gICAgICAgIGlmICh0aGlzLmtlZXBBbGl2ZV8gJiYgIXByZXZUcmFja2luZ0NvbnRleHQpIGdsb2JhbFN0YXRlLnRyYWNraW5nQ29udGV4dCA9IHRoaXM7XG4gICAgICAgIGlmICh0aGlzLnRyYWNrQW5kQ29tcHV0ZSgpKSBwcm9wYWdhdGVDaGFuZ2VDb25maXJtZWQodGhpcyk7XG4gICAgICAgIGdsb2JhbFN0YXRlLnRyYWNraW5nQ29udGV4dCA9IHByZXZUcmFja2luZ0NvbnRleHQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIHJlc3VsdCA9IHRoaXMudmFsdWVfO1xuICAgIGlmIChpc0NhdWdodEV4Y2VwdGlvbihyZXN1bHQpKSB0aHJvdyByZXN1bHQuY2F1c2U7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcblxuICBfcHJvdG8uc2V0ID0gZnVuY3Rpb24gc2V0KHZhbHVlKSB7XG4gICAgaWYgKHRoaXMuc2V0dGVyXykge1xuICAgICAgaWYgKHRoaXMuaXNSdW5uaW5nU2V0dGVyXykgZGllKDMzLCB0aGlzLm5hbWVfKTtcbiAgICAgIHRoaXMuaXNSdW5uaW5nU2V0dGVyXyA9IHRydWU7XG5cbiAgICAgIHRyeSB7XG4gICAgICAgIHRoaXMuc2V0dGVyXy5jYWxsKHRoaXMuc2NvcGVfLCB2YWx1ZSk7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICB0aGlzLmlzUnVubmluZ1NldHRlcl8gPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9IGVsc2UgZGllKDM0LCB0aGlzLm5hbWVfKTtcbiAgfTtcblxuICBfcHJvdG8udHJhY2tBbmRDb21wdXRlID0gZnVuY3Rpb24gdHJhY2tBbmRDb21wdXRlKCkge1xuICAgIC8vIE4uQjogdW5taW5pZmllZCBhcyBpdCBpcyB1c2VkIGJ5IE1TVFxuICAgIHZhciBvbGRWYWx1ZSA9IHRoaXMudmFsdWVfO1xuICAgIHZhciB3YXNTdXNwZW5kZWQgPVxuICAgIC8qIHNlZSAjMTIwOCAqL1xuICAgIHRoaXMuZGVwZW5kZW5jaWVzU3RhdGVfID09PSBJRGVyaXZhdGlvblN0YXRlXy5OT1RfVFJBQ0tJTkdfO1xuICAgIHZhciBuZXdWYWx1ZSA9IHRoaXMuY29tcHV0ZVZhbHVlXyh0cnVlKTtcblxuICAgIGlmIChOT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgJiYgaXNTcHlFbmFibGVkKCkpIHtcbiAgICAgIHNweVJlcG9ydCh7XG4gICAgICAgIG9ic2VydmFibGVLaW5kOiBcImNvbXB1dGVkXCIsXG4gICAgICAgIGRlYnVnT2JqZWN0TmFtZTogdGhpcy5uYW1lXyxcbiAgICAgICAgb2JqZWN0OiB0aGlzLnNjb3BlXyxcbiAgICAgICAgdHlwZTogXCJ1cGRhdGVcIixcbiAgICAgICAgb2xkVmFsdWU6IHRoaXMudmFsdWVfLFxuICAgICAgICBuZXdWYWx1ZTogbmV3VmFsdWVcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHZhciBjaGFuZ2VkID0gd2FzU3VzcGVuZGVkIHx8IGlzQ2F1Z2h0RXhjZXB0aW9uKG9sZFZhbHVlKSB8fCBpc0NhdWdodEV4Y2VwdGlvbihuZXdWYWx1ZSkgfHwgIXRoaXMuZXF1YWxzXyhvbGRWYWx1ZSwgbmV3VmFsdWUpO1xuXG4gICAgaWYgKGNoYW5nZWQpIHtcbiAgICAgIHRoaXMudmFsdWVfID0gbmV3VmFsdWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNoYW5nZWQ7XG4gIH07XG5cbiAgX3Byb3RvLmNvbXB1dGVWYWx1ZV8gPSBmdW5jdGlvbiBjb21wdXRlVmFsdWVfKHRyYWNrKSB7XG4gICAgdGhpcy5pc0NvbXB1dGluZ18gPSB0cnVlOyAvLyBkb24ndCBhbGxvdyBzdGF0ZSBjaGFuZ2VzIGR1cmluZyBjb21wdXRhdGlvblxuXG4gICAgdmFyIHByZXYgPSBhbGxvd1N0YXRlQ2hhbmdlc1N0YXJ0KGZhbHNlKTtcbiAgICB2YXIgcmVzO1xuXG4gICAgaWYgKHRyYWNrKSB7XG4gICAgICByZXMgPSB0cmFja0Rlcml2ZWRGdW5jdGlvbih0aGlzLCB0aGlzLmRlcml2YXRpb24sIHRoaXMuc2NvcGVfKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGdsb2JhbFN0YXRlLmRpc2FibGVFcnJvckJvdW5kYXJpZXMgPT09IHRydWUpIHtcbiAgICAgICAgcmVzID0gdGhpcy5kZXJpdmF0aW9uLmNhbGwodGhpcy5zY29wZV8pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICByZXMgPSB0aGlzLmRlcml2YXRpb24uY2FsbCh0aGlzLnNjb3BlXyk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICByZXMgPSBuZXcgQ2F1Z2h0RXhjZXB0aW9uKGUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgYWxsb3dTdGF0ZUNoYW5nZXNFbmQocHJldik7XG4gICAgdGhpcy5pc0NvbXB1dGluZ18gPSBmYWxzZTtcbiAgICByZXR1cm4gcmVzO1xuICB9O1xuXG4gIF9wcm90by5zdXNwZW5kXyA9IGZ1bmN0aW9uIHN1c3BlbmRfKCkge1xuICAgIGlmICghdGhpcy5rZWVwQWxpdmVfKSB7XG4gICAgICBjbGVhck9ic2VydmluZyh0aGlzKTtcbiAgICAgIHRoaXMudmFsdWVfID0gdW5kZWZpbmVkOyAvLyBkb24ndCBob2xkIG9uIHRvIGNvbXB1dGVkIHZhbHVlIVxuICAgIH1cbiAgfTtcblxuICBfcHJvdG8ub2JzZXJ2ZV8gPSBmdW5jdGlvbiBvYnNlcnZlXyhsaXN0ZW5lciwgZmlyZUltbWVkaWF0ZWx5KSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgIHZhciBmaXJzdFRpbWUgPSB0cnVlO1xuICAgIHZhciBwcmV2VmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgcmV0dXJuIGF1dG9ydW4oZnVuY3Rpb24gKCkge1xuICAgICAgLy8gVE9ETzogd2h5IGlzIHRoaXMgaW4gYSBkaWZmZXJlbnQgcGxhY2UgdGhhbiB0aGUgc3B5UmVwb3J0KCkgZnVuY3Rpb24/IGluIGFsbCBvdGhlciBvYnNlcnZhYmxlcyBpdCdzIGNhbGxlZCBpbiB0aGUgc2FtZSBwbGFjZVxuICAgICAgdmFyIG5ld1ZhbHVlID0gX3RoaXMuZ2V0KCk7XG5cbiAgICAgIGlmICghZmlyc3RUaW1lIHx8IGZpcmVJbW1lZGlhdGVseSkge1xuICAgICAgICB2YXIgcHJldlUgPSB1bnRyYWNrZWRTdGFydCgpO1xuICAgICAgICBsaXN0ZW5lcih7XG4gICAgICAgICAgb2JzZXJ2YWJsZUtpbmQ6IFwiY29tcHV0ZWRcIixcbiAgICAgICAgICBkZWJ1Z09iamVjdE5hbWU6IF90aGlzLm5hbWVfLFxuICAgICAgICAgIHR5cGU6IFVQREFURSxcbiAgICAgICAgICBvYmplY3Q6IF90aGlzLFxuICAgICAgICAgIG5ld1ZhbHVlOiBuZXdWYWx1ZSxcbiAgICAgICAgICBvbGRWYWx1ZTogcHJldlZhbHVlXG4gICAgICAgIH0pO1xuICAgICAgICB1bnRyYWNrZWRFbmQocHJldlUpO1xuICAgICAgfVxuXG4gICAgICBmaXJzdFRpbWUgPSBmYWxzZTtcbiAgICAgIHByZXZWYWx1ZSA9IG5ld1ZhbHVlO1xuICAgIH0pO1xuICB9O1xuXG4gIF9wcm90by53YXJuQWJvdXRVbnRyYWNrZWRSZWFkXyA9IGZ1bmN0aW9uIHdhcm5BYm91dFVudHJhY2tlZFJlYWRfKCkge1xuICAgIGlmICghKE5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikpIHJldHVybjtcblxuICAgIGlmICh0aGlzLnJlcXVpcmVzUmVhY3Rpb25fID09PSB0cnVlKSB7XG4gICAgICBkaWUoXCJbbW9ieF0gQ29tcHV0ZWQgdmFsdWUgXCIgKyB0aGlzLm5hbWVfICsgXCIgaXMgcmVhZCBvdXRzaWRlIGEgcmVhY3RpdmUgY29udGV4dFwiKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5pc1RyYWNpbmdfICE9PSBUcmFjZU1vZGUuTk9ORSkge1xuICAgICAgY29uc29sZS5sb2coXCJbbW9ieC50cmFjZV0gJ1wiICsgdGhpcy5uYW1lXyArIFwiJyBpcyBiZWluZyByZWFkIG91dHNpZGUgYSByZWFjdGl2ZSBjb250ZXh0LiBEb2luZyBhIGZ1bGwgcmVjb21wdXRlXCIpO1xuICAgIH1cblxuICAgIGlmIChnbG9iYWxTdGF0ZS5jb21wdXRlZFJlcXVpcmVzUmVhY3Rpb24pIHtcbiAgICAgIGNvbnNvbGUud2FybihcIlttb2J4XSBDb21wdXRlZCB2YWx1ZSBcIiArIHRoaXMubmFtZV8gKyBcIiBpcyBiZWluZyByZWFkIG91dHNpZGUgYSByZWFjdGl2ZSBjb250ZXh0LiBEb2luZyBhIGZ1bGwgcmVjb21wdXRlXCIpO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8udG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5uYW1lXyArIFwiW1wiICsgdGhpcy5kZXJpdmF0aW9uLnRvU3RyaW5nKCkgKyBcIl1cIjtcbiAgfTtcblxuICBfcHJvdG8udmFsdWVPZiA9IGZ1bmN0aW9uIHZhbHVlT2YoKSB7XG4gICAgcmV0dXJuIHRvUHJpbWl0aXZlKHRoaXMuZ2V0KCkpO1xuICB9O1xuXG4gIF9wcm90b1tfU3ltYm9sJHRvUHJpbWl0aXZlJDFdID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzLnZhbHVlT2YoKTtcbiAgfTtcblxuICByZXR1cm4gQ29tcHV0ZWRWYWx1ZTtcbn0oKTtcbnZhciBpc0NvbXB1dGVkVmFsdWUgPSAvKiNfX1BVUkVfXyovY3JlYXRlSW5zdGFuY2VvZlByZWRpY2F0ZShcIkNvbXB1dGVkVmFsdWVcIiwgQ29tcHV0ZWRWYWx1ZSk7XG5cbnZhciBJRGVyaXZhdGlvblN0YXRlXztcblxuKGZ1bmN0aW9uIChJRGVyaXZhdGlvblN0YXRlXykge1xuICAvLyBiZWZvcmUgYmVpbmcgcnVuIG9yIChvdXRzaWRlIGJhdGNoIGFuZCBub3QgYmVpbmcgb2JzZXJ2ZWQpXG4gIC8vIGF0IHRoaXMgcG9pbnQgZGVyaXZhdGlvbiBpcyBub3QgaG9sZGluZyBhbnkgZGF0YSBhYm91dCBkZXBlbmRlbmN5IHRyZWVcbiAgSURlcml2YXRpb25TdGF0ZV9bSURlcml2YXRpb25TdGF0ZV9bXCJOT1RfVFJBQ0tJTkdfXCJdID0gLTFdID0gXCJOT1RfVFJBQ0tJTkdfXCI7IC8vIG5vIHNoYWxsb3cgZGVwZW5kZW5jeSBjaGFuZ2VkIHNpbmNlIGxhc3QgY29tcHV0YXRpb25cbiAgLy8gd29uJ3QgcmVjYWxjdWxhdGUgZGVyaXZhdGlvblxuICAvLyB0aGlzIGlzIHdoYXQgbWFrZXMgbW9ieCBmYXN0XG5cbiAgSURlcml2YXRpb25TdGF0ZV9bSURlcml2YXRpb25TdGF0ZV9bXCJVUF9UT19EQVRFX1wiXSA9IDBdID0gXCJVUF9UT19EQVRFX1wiOyAvLyBzb21lIGRlZXAgZGVwZW5kZW5jeSBjaGFuZ2VkLCBidXQgZG9uJ3Qga25vdyBpZiBzaGFsbG93IGRlcGVuZGVuY3kgY2hhbmdlZFxuICAvLyB3aWxsIHJlcXVpcmUgdG8gY2hlY2sgZmlyc3QgaWYgVVBfVE9fREFURSBvciBQT1NTSUJMWV9TVEFMRVxuICAvLyBjdXJyZW50bHkgb25seSBDb21wdXRlZFZhbHVlIHdpbGwgcHJvcGFnYXRlIFBPU1NJQkxZX1NUQUxFXG4gIC8vXG4gIC8vIGhhdmluZyB0aGlzIHN0YXRlIGlzIHNlY29uZCBiaWcgb3B0aW1pemF0aW9uOlxuICAvLyBkb24ndCBoYXZlIHRvIHJlY29tcHV0ZSBvbiBldmVyeSBkZXBlbmRlbmN5IGNoYW5nZSwgYnV0IG9ubHkgd2hlbiBpdCdzIG5lZWRlZFxuXG4gIElEZXJpdmF0aW9uU3RhdGVfW0lEZXJpdmF0aW9uU3RhdGVfW1wiUE9TU0lCTFlfU1RBTEVfXCJdID0gMV0gPSBcIlBPU1NJQkxZX1NUQUxFX1wiOyAvLyBBIHNoYWxsb3cgZGVwZW5kZW5jeSBoYXMgY2hhbmdlZCBzaW5jZSBsYXN0IGNvbXB1dGF0aW9uIGFuZCB0aGUgZGVyaXZhdGlvblxuICAvLyB3aWxsIG5lZWQgdG8gcmVjb21wdXRlIHdoZW4gaXQncyBuZWVkZWQgbmV4dC5cblxuICBJRGVyaXZhdGlvblN0YXRlX1tJRGVyaXZhdGlvblN0YXRlX1tcIlNUQUxFX1wiXSA9IDJdID0gXCJTVEFMRV9cIjtcbn0pKElEZXJpdmF0aW9uU3RhdGVfIHx8IChJRGVyaXZhdGlvblN0YXRlXyA9IHt9KSk7XG5cbnZhciBUcmFjZU1vZGU7XG5cbihmdW5jdGlvbiAoVHJhY2VNb2RlKSB7XG4gIFRyYWNlTW9kZVtUcmFjZU1vZGVbXCJOT05FXCJdID0gMF0gPSBcIk5PTkVcIjtcbiAgVHJhY2VNb2RlW1RyYWNlTW9kZVtcIkxPR1wiXSA9IDFdID0gXCJMT0dcIjtcbiAgVHJhY2VNb2RlW1RyYWNlTW9kZVtcIkJSRUFLXCJdID0gMl0gPSBcIkJSRUFLXCI7XG59KShUcmFjZU1vZGUgfHwgKFRyYWNlTW9kZSA9IHt9KSk7XG5cbnZhciBDYXVnaHRFeGNlcHRpb24gPSBmdW5jdGlvbiBDYXVnaHRFeGNlcHRpb24oY2F1c2UpIHtcbiAgdGhpcy5jYXVzZSA9IHZvaWQgMDtcbiAgdGhpcy5jYXVzZSA9IGNhdXNlOyAvLyBFbXB0eVxufTtcbmZ1bmN0aW9uIGlzQ2F1Z2h0RXhjZXB0aW9uKGUpIHtcbiAgcmV0dXJuIGUgaW5zdGFuY2VvZiBDYXVnaHRFeGNlcHRpb247XG59XG4vKipcbiAqIEZpbmRzIG91dCB3aGV0aGVyIGFueSBkZXBlbmRlbmN5IG9mIHRoZSBkZXJpdmF0aW9uIGhhcyBhY3R1YWxseSBjaGFuZ2VkLlxuICogSWYgZGVwZW5kZW5jaWVzU3RhdGUgaXMgMSB0aGVuIGl0IHdpbGwgcmVjYWxjdWxhdGUgZGVwZW5kZW5jaWVzLFxuICogaWYgYW55IGRlcGVuZGVuY3kgY2hhbmdlZCBpdCB3aWxsIHByb3BhZ2F0ZSBpdCBieSBjaGFuZ2luZyBkZXBlbmRlbmNpZXNTdGF0ZSB0byAyLlxuICpcbiAqIEJ5IGl0ZXJhdGluZyBvdmVyIHRoZSBkZXBlbmRlbmNpZXMgaW4gdGhlIHNhbWUgb3JkZXIgdGhhdCB0aGV5IHdlcmUgcmVwb3J0ZWQgYW5kXG4gKiBzdG9wcGluZyBvbiB0aGUgZmlyc3QgY2hhbmdlLCBhbGwgdGhlIHJlY2FsY3VsYXRpb25zIGFyZSBvbmx5IGNhbGxlZCBmb3IgQ29tcHV0ZWRWYWx1ZXNcbiAqIHRoYXQgd2lsbCBiZSB0cmFja2VkIGJ5IGRlcml2YXRpb24uIFRoYXQgaXMgYmVjYXVzZSB3ZSBhc3N1bWUgdGhhdCBpZiB0aGUgZmlyc3QgeFxuICogZGVwZW5kZW5jaWVzIG9mIHRoZSBkZXJpdmF0aW9uIGRvZXNuJ3QgY2hhbmdlIHRoZW4gdGhlIGRlcml2YXRpb24gc2hvdWxkIHJ1biB0aGUgc2FtZSB3YXlcbiAqIHVwIHVudGlsIGFjY2Vzc2luZyB4LXRoIGRlcGVuZGVuY3kuXG4gKi9cblxuZnVuY3Rpb24gc2hvdWxkQ29tcHV0ZShkZXJpdmF0aW9uKSB7XG4gIHN3aXRjaCAoZGVyaXZhdGlvbi5kZXBlbmRlbmNpZXNTdGF0ZV8pIHtcbiAgICBjYXNlIElEZXJpdmF0aW9uU3RhdGVfLlVQX1RPX0RBVEVfOlxuICAgICAgcmV0dXJuIGZhbHNlO1xuXG4gICAgY2FzZSBJRGVyaXZhdGlvblN0YXRlXy5OT1RfVFJBQ0tJTkdfOlxuICAgIGNhc2UgSURlcml2YXRpb25TdGF0ZV8uU1RBTEVfOlxuICAgICAgcmV0dXJuIHRydWU7XG5cbiAgICBjYXNlIElEZXJpdmF0aW9uU3RhdGVfLlBPU1NJQkxZX1NUQUxFXzpcbiAgICAgIHtcbiAgICAgICAgLy8gc3RhdGUgcHJvcGFnYXRpb24gY2FuIG9jY3VyIG91dHNpZGUgb2YgYWN0aW9uL3JlYWN0aXZlIGNvbnRleHQgIzIxOTVcbiAgICAgICAgdmFyIHByZXZBbGxvd1N0YXRlUmVhZHMgPSBhbGxvd1N0YXRlUmVhZHNTdGFydCh0cnVlKTtcbiAgICAgICAgdmFyIHByZXZVbnRyYWNrZWQgPSB1bnRyYWNrZWRTdGFydCgpOyAvLyBubyBuZWVkIGZvciB0aG9zZSBjb21wdXRlZHMgdG8gYmUgcmVwb3J0ZWQsIHRoZXkgd2lsbCBiZSBwaWNrZWQgdXAgaW4gdHJhY2tEZXJpdmVkRnVuY3Rpb24uXG5cbiAgICAgICAgdmFyIG9icyA9IGRlcml2YXRpb24ub2JzZXJ2aW5nXyxcbiAgICAgICAgICAgIGwgPSBvYnMubGVuZ3RoO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgICAgdmFyIG9iaiA9IG9ic1tpXTtcblxuICAgICAgICAgIGlmIChpc0NvbXB1dGVkVmFsdWUob2JqKSkge1xuICAgICAgICAgICAgaWYgKGdsb2JhbFN0YXRlLmRpc2FibGVFcnJvckJvdW5kYXJpZXMpIHtcbiAgICAgICAgICAgICAgb2JqLmdldCgpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBvYmouZ2V0KCk7XG4gICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAvLyB3ZSBhcmUgbm90IGludGVyZXN0ZWQgaW4gdGhlIHZhbHVlICpvciogZXhjZXB0aW9uIGF0IHRoaXMgbW9tZW50LCBidXQgaWYgdGhlcmUgaXMgb25lLCBub3RpZnkgYWxsXG4gICAgICAgICAgICAgICAgdW50cmFja2VkRW5kKHByZXZVbnRyYWNrZWQpO1xuICAgICAgICAgICAgICAgIGFsbG93U3RhdGVSZWFkc0VuZChwcmV2QWxsb3dTdGF0ZVJlYWRzKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSAvLyBpZiBDb21wdXRlZFZhbHVlIGBvYmpgIGFjdHVhbGx5IGNoYW5nZWQgaXQgd2lsbCBiZSBjb21wdXRlZCBhbmQgcHJvcGFnYXRlZCB0byBpdHMgb2JzZXJ2ZXJzLlxuICAgICAgICAgICAgLy8gYW5kIGBkZXJpdmF0aW9uYCBpcyBhbiBvYnNlcnZlciBvZiBgb2JqYFxuICAgICAgICAgICAgLy8gaW52YXJpYW50U2hvdWxkQ29tcHV0ZShkZXJpdmF0aW9uKVxuXG5cbiAgICAgICAgICAgIGlmIChkZXJpdmF0aW9uLmRlcGVuZGVuY2llc1N0YXRlXyA9PT0gSURlcml2YXRpb25TdGF0ZV8uU1RBTEVfKSB7XG4gICAgICAgICAgICAgIHVudHJhY2tlZEVuZChwcmV2VW50cmFja2VkKTtcbiAgICAgICAgICAgICAgYWxsb3dTdGF0ZVJlYWRzRW5kKHByZXZBbGxvd1N0YXRlUmVhZHMpO1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjaGFuZ2VEZXBlbmRlbmNpZXNTdGF0ZVRvMChkZXJpdmF0aW9uKTtcbiAgICAgICAgdW50cmFja2VkRW5kKHByZXZVbnRyYWNrZWQpO1xuICAgICAgICBhbGxvd1N0YXRlUmVhZHNFbmQocHJldkFsbG93U3RhdGVSZWFkcyk7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgfVxufVxuZnVuY3Rpb24gaXNDb21wdXRpbmdEZXJpdmF0aW9uKCkge1xuICByZXR1cm4gZ2xvYmFsU3RhdGUudHJhY2tpbmdEZXJpdmF0aW9uICE9PSBudWxsOyAvLyBmaWx0ZXIgb3V0IGFjdGlvbnMgaW5zaWRlIGNvbXB1dGF0aW9uc1xufVxuZnVuY3Rpb24gY2hlY2tJZlN0YXRlTW9kaWZpY2F0aW9uc0FyZUFsbG93ZWQoYXRvbSkge1xuICBpZiAoIShOT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdmFyIGhhc09ic2VydmVycyA9IGF0b20ub2JzZXJ2ZXJzXy5zaXplID4gMDsgLy8gU2hvdWxkIG5vdCBiZSBwb3NzaWJsZSB0byBjaGFuZ2Ugb2JzZXJ2ZWQgc3RhdGUgb3V0c2lkZSBzdHJpY3QgbW9kZSwgZXhjZXB0IGR1cmluZyBpbml0aWFsaXphdGlvbiwgc2VlICM1NjNcblxuICBpZiAoIWdsb2JhbFN0YXRlLmFsbG93U3RhdGVDaGFuZ2VzICYmIChoYXNPYnNlcnZlcnMgfHwgZ2xvYmFsU3RhdGUuZW5mb3JjZUFjdGlvbnMgPT09IFwiYWx3YXlzXCIpKSBjb25zb2xlLndhcm4oXCJbTW9iWF0gXCIgKyAoZ2xvYmFsU3RhdGUuZW5mb3JjZUFjdGlvbnMgPyBcIlNpbmNlIHN0cmljdC1tb2RlIGlzIGVuYWJsZWQsIGNoYW5naW5nIChvYnNlcnZlZCkgb2JzZXJ2YWJsZSB2YWx1ZXMgd2l0aG91dCB1c2luZyBhbiBhY3Rpb24gaXMgbm90IGFsbG93ZWQuIFRyaWVkIHRvIG1vZGlmeTogXCIgOiBcIlNpZGUgZWZmZWN0cyBsaWtlIGNoYW5naW5nIHN0YXRlIGFyZSBub3QgYWxsb3dlZCBhdCB0aGlzIHBvaW50LiBBcmUgeW91IHRyeWluZyB0byBtb2RpZnkgc3RhdGUgZnJvbSwgZm9yIGV4YW1wbGUsIGEgY29tcHV0ZWQgdmFsdWUgb3IgdGhlIHJlbmRlciBmdW5jdGlvbiBvZiBhIFJlYWN0IGNvbXBvbmVudD8gWW91IGNhbiB3cmFwIHNpZGUgZWZmZWN0cyBpbiAncnVuSW5BY3Rpb24nIChvciBkZWNvcmF0ZSBmdW5jdGlvbnMgd2l0aCAnYWN0aW9uJykgaWYgbmVlZGVkLiBUcmllZCB0byBtb2RpZnk6IFwiKSArIGF0b20ubmFtZV8pO1xufVxuZnVuY3Rpb24gY2hlY2tJZlN0YXRlUmVhZHNBcmVBbGxvd2VkKG9ic2VydmFibGUpIHtcbiAgaWYgKE5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiAmJiAhZ2xvYmFsU3RhdGUuYWxsb3dTdGF0ZVJlYWRzICYmIGdsb2JhbFN0YXRlLm9ic2VydmFibGVSZXF1aXJlc1JlYWN0aW9uKSB7XG4gICAgY29uc29sZS53YXJuKFwiW21vYnhdIE9ic2VydmFibGUgXCIgKyBvYnNlcnZhYmxlLm5hbWVfICsgXCIgYmVpbmcgcmVhZCBvdXRzaWRlIGEgcmVhY3RpdmUgY29udGV4dFwiKTtcbiAgfVxufVxuLyoqXG4gKiBFeGVjdXRlcyB0aGUgcHJvdmlkZWQgZnVuY3Rpb24gYGZgIGFuZCB0cmFja3Mgd2hpY2ggb2JzZXJ2YWJsZXMgYXJlIGJlaW5nIGFjY2Vzc2VkLlxuICogVGhlIHRyYWNraW5nIGluZm9ybWF0aW9uIGlzIHN0b3JlZCBvbiB0aGUgYGRlcml2YXRpb25gIG9iamVjdCBhbmQgdGhlIGRlcml2YXRpb24gaXMgcmVnaXN0ZXJlZFxuICogYXMgb2JzZXJ2ZXIgb2YgYW55IG9mIHRoZSBhY2Nlc3NlZCBvYnNlcnZhYmxlcy5cbiAqL1xuXG5mdW5jdGlvbiB0cmFja0Rlcml2ZWRGdW5jdGlvbihkZXJpdmF0aW9uLCBmLCBjb250ZXh0KSB7XG4gIHZhciBwcmV2QWxsb3dTdGF0ZVJlYWRzID0gYWxsb3dTdGF0ZVJlYWRzU3RhcnQodHJ1ZSk7IC8vIHByZSBhbGxvY2F0ZSBhcnJheSBhbGxvY2F0aW9uICsgcm9vbSBmb3IgdmFyaWF0aW9uIGluIGRlcHNcbiAgLy8gYXJyYXkgd2lsbCBiZSB0cmltbWVkIGJ5IGJpbmREZXBlbmRlbmNpZXNcblxuICBjaGFuZ2VEZXBlbmRlbmNpZXNTdGF0ZVRvMChkZXJpdmF0aW9uKTtcbiAgZGVyaXZhdGlvbi5uZXdPYnNlcnZpbmdfID0gbmV3IEFycmF5KGRlcml2YXRpb24ub2JzZXJ2aW5nXy5sZW5ndGggKyAxMDApO1xuICBkZXJpdmF0aW9uLnVuYm91bmREZXBzQ291bnRfID0gMDtcbiAgZGVyaXZhdGlvbi5ydW5JZF8gPSArK2dsb2JhbFN0YXRlLnJ1bklkO1xuICB2YXIgcHJldlRyYWNraW5nID0gZ2xvYmFsU3RhdGUudHJhY2tpbmdEZXJpdmF0aW9uO1xuICBnbG9iYWxTdGF0ZS50cmFja2luZ0Rlcml2YXRpb24gPSBkZXJpdmF0aW9uO1xuICBnbG9iYWxTdGF0ZS5pbkJhdGNoKys7XG4gIHZhciByZXN1bHQ7XG5cbiAgaWYgKGdsb2JhbFN0YXRlLmRpc2FibGVFcnJvckJvdW5kYXJpZXMgPT09IHRydWUpIHtcbiAgICByZXN1bHQgPSBmLmNhbGwoY29udGV4dCk7XG4gIH0gZWxzZSB7XG4gICAgdHJ5IHtcbiAgICAgIHJlc3VsdCA9IGYuY2FsbChjb250ZXh0KTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICByZXN1bHQgPSBuZXcgQ2F1Z2h0RXhjZXB0aW9uKGUpO1xuICAgIH1cbiAgfVxuXG4gIGdsb2JhbFN0YXRlLmluQmF0Y2gtLTtcbiAgZ2xvYmFsU3RhdGUudHJhY2tpbmdEZXJpdmF0aW9uID0gcHJldlRyYWNraW5nO1xuICBiaW5kRGVwZW5kZW5jaWVzKGRlcml2YXRpb24pO1xuICB3YXJuQWJvdXREZXJpdmF0aW9uV2l0aG91dERlcGVuZGVuY2llcyhkZXJpdmF0aW9uKTtcbiAgYWxsb3dTdGF0ZVJlYWRzRW5kKHByZXZBbGxvd1N0YXRlUmVhZHMpO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiB3YXJuQWJvdXREZXJpdmF0aW9uV2l0aG91dERlcGVuZGVuY2llcyhkZXJpdmF0aW9uKSB7XG4gIGlmICghKE5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikpIHJldHVybjtcbiAgaWYgKGRlcml2YXRpb24ub2JzZXJ2aW5nXy5sZW5ndGggIT09IDApIHJldHVybjtcblxuICBpZiAoZ2xvYmFsU3RhdGUucmVhY3Rpb25SZXF1aXJlc09ic2VydmFibGUgfHwgZGVyaXZhdGlvbi5yZXF1aXJlc09ic2VydmFibGVfKSB7XG4gICAgY29uc29sZS53YXJuKFwiW21vYnhdIERlcml2YXRpb24gXCIgKyBkZXJpdmF0aW9uLm5hbWVfICsgXCIgaXMgY3JlYXRlZC91cGRhdGVkIHdpdGhvdXQgcmVhZGluZyBhbnkgb2JzZXJ2YWJsZSB2YWx1ZVwiKTtcbiAgfVxufVxuLyoqXG4gKiBkaWZmcyBuZXdPYnNlcnZpbmcgd2l0aCBvYnNlcnZpbmcuXG4gKiB1cGRhdGUgb2JzZXJ2aW5nIHRvIGJlIG5ld09ic2VydmluZyB3aXRoIHVuaXF1ZSBvYnNlcnZhYmxlc1xuICogbm90aWZ5IG9ic2VydmVycyB0aGF0IGJlY29tZSBvYnNlcnZlZC91bm9ic2VydmVkXG4gKi9cblxuXG5mdW5jdGlvbiBiaW5kRGVwZW5kZW5jaWVzKGRlcml2YXRpb24pIHtcbiAgLy8gaW52YXJpYW50KGRlcml2YXRpb24uZGVwZW5kZW5jaWVzU3RhdGUgIT09IElEZXJpdmF0aW9uU3RhdGUuTk9UX1RSQUNLSU5HLCBcIklOVEVSTkFMIEVSUk9SIGJpbmREZXBlbmRlbmNpZXMgZXhwZWN0cyBkZXJpdmF0aW9uLmRlcGVuZGVuY2llc1N0YXRlICE9PSAtMVwiKTtcbiAgdmFyIHByZXZPYnNlcnZpbmcgPSBkZXJpdmF0aW9uLm9ic2VydmluZ187XG4gIHZhciBvYnNlcnZpbmcgPSBkZXJpdmF0aW9uLm9ic2VydmluZ18gPSBkZXJpdmF0aW9uLm5ld09ic2VydmluZ187XG4gIHZhciBsb3dlc3ROZXdPYnNlcnZpbmdEZXJpdmF0aW9uU3RhdGUgPSBJRGVyaXZhdGlvblN0YXRlXy5VUF9UT19EQVRFXzsgLy8gR28gdGhyb3VnaCBhbGwgbmV3IG9ic2VydmFibGVzIGFuZCBjaGVjayBkaWZmVmFsdWU6ICh0aGlzIGxpc3QgY2FuIGNvbnRhaW4gZHVwbGljYXRlcyk6XG4gIC8vICAgMDogZmlyc3Qgb2NjdXJyZW5jZSwgY2hhbmdlIHRvIDEgYW5kIGtlZXAgaXRcbiAgLy8gICAxOiBleHRyYSBvY2N1cnJlbmNlLCBkcm9wIGl0XG5cbiAgdmFyIGkwID0gMCxcbiAgICAgIGwgPSBkZXJpdmF0aW9uLnVuYm91bmREZXBzQ291bnRfO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbDsgaSsrKSB7XG4gICAgdmFyIGRlcCA9IG9ic2VydmluZ1tpXTtcblxuICAgIGlmIChkZXAuZGlmZlZhbHVlXyA9PT0gMCkge1xuICAgICAgZGVwLmRpZmZWYWx1ZV8gPSAxO1xuICAgICAgaWYgKGkwICE9PSBpKSBvYnNlcnZpbmdbaTBdID0gZGVwO1xuICAgICAgaTArKztcbiAgICB9IC8vIFVwY2FzdCBpcyAnc2FmZScgaGVyZSwgYmVjYXVzZSBpZiBkZXAgaXMgSU9ic2VydmFibGUsIGBkZXBlbmRlbmNpZXNTdGF0ZWAgd2lsbCBiZSB1bmRlZmluZWQsXG4gICAgLy8gbm90IGhpdHRpbmcgdGhlIGNvbmRpdGlvblxuXG5cbiAgICBpZiAoZGVwLmRlcGVuZGVuY2llc1N0YXRlXyA+IGxvd2VzdE5ld09ic2VydmluZ0Rlcml2YXRpb25TdGF0ZSkge1xuICAgICAgbG93ZXN0TmV3T2JzZXJ2aW5nRGVyaXZhdGlvblN0YXRlID0gZGVwLmRlcGVuZGVuY2llc1N0YXRlXztcbiAgICB9XG4gIH1cblxuICBvYnNlcnZpbmcubGVuZ3RoID0gaTA7XG4gIGRlcml2YXRpb24ubmV3T2JzZXJ2aW5nXyA9IG51bGw7IC8vIG5ld09ic2VydmluZyBzaG91bGRuJ3QgYmUgbmVlZGVkIG91dHNpZGUgdHJhY2tpbmcgKHN0YXRlbWVudCBtb3ZlZCBkb3duIHRvIHdvcmsgYXJvdW5kIEZGIGJ1Zywgc2VlICM2MTQpXG4gIC8vIEdvIHRocm91Z2ggYWxsIG9sZCBvYnNlcnZhYmxlcyBhbmQgY2hlY2sgZGlmZlZhbHVlOiAoaXQgaXMgdW5pcXVlIGFmdGVyIGxhc3QgYmluZERlcGVuZGVuY2llcylcbiAgLy8gICAwOiBpdCdzIG5vdCBpbiBuZXcgb2JzZXJ2YWJsZXMsIHVub2JzZXJ2ZSBpdFxuICAvLyAgIDE6IGl0IGtlZXBzIGJlaW5nIG9ic2VydmVkLCBkb24ndCB3YW50IHRvIG5vdGlmeSBpdC4gY2hhbmdlIHRvIDBcblxuICBsID0gcHJldk9ic2VydmluZy5sZW5ndGg7XG5cbiAgd2hpbGUgKGwtLSkge1xuICAgIHZhciBfZGVwID0gcHJldk9ic2VydmluZ1tsXTtcblxuICAgIGlmIChfZGVwLmRpZmZWYWx1ZV8gPT09IDApIHtcbiAgICAgIHJlbW92ZU9ic2VydmVyKF9kZXAsIGRlcml2YXRpb24pO1xuICAgIH1cblxuICAgIF9kZXAuZGlmZlZhbHVlXyA9IDA7XG4gIH0gLy8gR28gdGhyb3VnaCBhbGwgbmV3IG9ic2VydmFibGVzIGFuZCBjaGVjayBkaWZmVmFsdWU6IChub3cgaXQgc2hvdWxkIGJlIHVuaXF1ZSlcbiAgLy8gICAwOiBpdCB3YXMgc2V0IHRvIDAgaW4gbGFzdCBsb29wLiBkb24ndCBuZWVkIHRvIGRvIGFueXRoaW5nLlxuICAvLyAgIDE6IGl0IHdhc24ndCBvYnNlcnZlZCwgbGV0J3Mgb2JzZXJ2ZSBpdC4gc2V0IGJhY2sgdG8gMFxuXG5cbiAgd2hpbGUgKGkwLS0pIHtcbiAgICB2YXIgX2RlcDIgPSBvYnNlcnZpbmdbaTBdO1xuXG4gICAgaWYgKF9kZXAyLmRpZmZWYWx1ZV8gPT09IDEpIHtcbiAgICAgIF9kZXAyLmRpZmZWYWx1ZV8gPSAwO1xuICAgICAgYWRkT2JzZXJ2ZXIoX2RlcDIsIGRlcml2YXRpb24pO1xuICAgIH1cbiAgfSAvLyBTb21lIG5ldyBvYnNlcnZlZCBkZXJpdmF0aW9ucyBtYXkgYmVjb21lIHN0YWxlIGR1cmluZyB0aGlzIGRlcml2YXRpb24gY29tcHV0YXRpb25cbiAgLy8gc28gdGhleSBoYXZlIGhhZCBubyBjaGFuY2UgdG8gcHJvcGFnYXRlIHN0YWxlbmVzcyAoIzkxNilcblxuXG4gIGlmIChsb3dlc3ROZXdPYnNlcnZpbmdEZXJpdmF0aW9uU3RhdGUgIT09IElEZXJpdmF0aW9uU3RhdGVfLlVQX1RPX0RBVEVfKSB7XG4gICAgZGVyaXZhdGlvbi5kZXBlbmRlbmNpZXNTdGF0ZV8gPSBsb3dlc3ROZXdPYnNlcnZpbmdEZXJpdmF0aW9uU3RhdGU7XG4gICAgZGVyaXZhdGlvbi5vbkJlY29tZVN0YWxlXygpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNsZWFyT2JzZXJ2aW5nKGRlcml2YXRpb24pIHtcbiAgLy8gaW52YXJpYW50KGdsb2JhbFN0YXRlLmluQmF0Y2ggPiAwLCBcIklOVEVSTkFMIEVSUk9SIGNsZWFyT2JzZXJ2aW5nIHNob3VsZCBiZSBjYWxsZWQgb25seSBpbnNpZGUgYmF0Y2hcIik7XG4gIHZhciBvYnMgPSBkZXJpdmF0aW9uLm9ic2VydmluZ187XG4gIGRlcml2YXRpb24ub2JzZXJ2aW5nXyA9IFtdO1xuICB2YXIgaSA9IG9icy5sZW5ndGg7XG5cbiAgd2hpbGUgKGktLSkge1xuICAgIHJlbW92ZU9ic2VydmVyKG9ic1tpXSwgZGVyaXZhdGlvbik7XG4gIH1cblxuICBkZXJpdmF0aW9uLmRlcGVuZGVuY2llc1N0YXRlXyA9IElEZXJpdmF0aW9uU3RhdGVfLk5PVF9UUkFDS0lOR187XG59XG5mdW5jdGlvbiB1bnRyYWNrZWQoYWN0aW9uKSB7XG4gIHZhciBwcmV2ID0gdW50cmFja2VkU3RhcnQoKTtcblxuICB0cnkge1xuICAgIHJldHVybiBhY3Rpb24oKTtcbiAgfSBmaW5hbGx5IHtcbiAgICB1bnRyYWNrZWRFbmQocHJldik7XG4gIH1cbn1cbmZ1bmN0aW9uIHVudHJhY2tlZFN0YXJ0KCkge1xuICB2YXIgcHJldiA9IGdsb2JhbFN0YXRlLnRyYWNraW5nRGVyaXZhdGlvbjtcbiAgZ2xvYmFsU3RhdGUudHJhY2tpbmdEZXJpdmF0aW9uID0gbnVsbDtcbiAgcmV0dXJuIHByZXY7XG59XG5mdW5jdGlvbiB1bnRyYWNrZWRFbmQocHJldikge1xuICBnbG9iYWxTdGF0ZS50cmFja2luZ0Rlcml2YXRpb24gPSBwcmV2O1xufVxuZnVuY3Rpb24gYWxsb3dTdGF0ZVJlYWRzU3RhcnQoYWxsb3dTdGF0ZVJlYWRzKSB7XG4gIHZhciBwcmV2ID0gZ2xvYmFsU3RhdGUuYWxsb3dTdGF0ZVJlYWRzO1xuICBnbG9iYWxTdGF0ZS5hbGxvd1N0YXRlUmVhZHMgPSBhbGxvd1N0YXRlUmVhZHM7XG4gIHJldHVybiBwcmV2O1xufVxuZnVuY3Rpb24gYWxsb3dTdGF0ZVJlYWRzRW5kKHByZXYpIHtcbiAgZ2xvYmFsU3RhdGUuYWxsb3dTdGF0ZVJlYWRzID0gcHJldjtcbn1cbi8qKlxuICogbmVlZGVkIHRvIGtlZXAgYGxvd2VzdE9ic2VydmVyU3RhdGVgIGNvcnJlY3QuIHdoZW4gY2hhbmdpbmcgZnJvbSAoMiBvciAxKSB0byAwXG4gKlxuICovXG5cbmZ1bmN0aW9uIGNoYW5nZURlcGVuZGVuY2llc1N0YXRlVG8wKGRlcml2YXRpb24pIHtcbiAgaWYgKGRlcml2YXRpb24uZGVwZW5kZW5jaWVzU3RhdGVfID09PSBJRGVyaXZhdGlvblN0YXRlXy5VUF9UT19EQVRFXykgcmV0dXJuO1xuICBkZXJpdmF0aW9uLmRlcGVuZGVuY2llc1N0YXRlXyA9IElEZXJpdmF0aW9uU3RhdGVfLlVQX1RPX0RBVEVfO1xuICB2YXIgb2JzID0gZGVyaXZhdGlvbi5vYnNlcnZpbmdfO1xuICB2YXIgaSA9IG9icy5sZW5ndGg7XG5cbiAgd2hpbGUgKGktLSkge1xuICAgIG9ic1tpXS5sb3dlc3RPYnNlcnZlclN0YXRlXyA9IElEZXJpdmF0aW9uU3RhdGVfLlVQX1RPX0RBVEVfO1xuICB9XG59XG5cbi8qKlxuICogVGhlc2UgdmFsdWVzIHdpbGwgcGVyc2lzdCBpZiBnbG9iYWwgc3RhdGUgaXMgcmVzZXRcbiAqL1xuXG52YXIgcGVyc2lzdGVudEtleXMgPSBbXCJtb2J4R3VpZFwiLCBcInNweUxpc3RlbmVyc1wiLCBcImVuZm9yY2VBY3Rpb25zXCIsIFwiY29tcHV0ZWRSZXF1aXJlc1JlYWN0aW9uXCIsIFwicmVhY3Rpb25SZXF1aXJlc09ic2VydmFibGVcIiwgXCJvYnNlcnZhYmxlUmVxdWlyZXNSZWFjdGlvblwiLCBcImFsbG93U3RhdGVSZWFkc1wiLCBcImRpc2FibGVFcnJvckJvdW5kYXJpZXNcIiwgXCJydW5JZFwiLCBcIlVOQ0hBTkdFRFwiLCBcInVzZVByb3hpZXNcIl07XG52YXIgTW9iWEdsb2JhbHMgPSBmdW5jdGlvbiBNb2JYR2xvYmFscygpIHtcbiAgdGhpcy52ZXJzaW9uID0gNjtcbiAgdGhpcy5VTkNIQU5HRUQgPSB7fTtcbiAgdGhpcy50cmFja2luZ0Rlcml2YXRpb24gPSBudWxsO1xuICB0aGlzLnRyYWNraW5nQ29udGV4dCA9IG51bGw7XG4gIHRoaXMucnVuSWQgPSAwO1xuICB0aGlzLm1vYnhHdWlkID0gMDtcbiAgdGhpcy5pbkJhdGNoID0gMDtcbiAgdGhpcy5wZW5kaW5nVW5vYnNlcnZhdGlvbnMgPSBbXTtcbiAgdGhpcy5wZW5kaW5nUmVhY3Rpb25zID0gW107XG4gIHRoaXMuaXNSdW5uaW5nUmVhY3Rpb25zID0gZmFsc2U7XG4gIHRoaXMuYWxsb3dTdGF0ZUNoYW5nZXMgPSBmYWxzZTtcbiAgdGhpcy5hbGxvd1N0YXRlUmVhZHMgPSB0cnVlO1xuICB0aGlzLmVuZm9yY2VBY3Rpb25zID0gdHJ1ZTtcbiAgdGhpcy5zcHlMaXN0ZW5lcnMgPSBbXTtcbiAgdGhpcy5nbG9iYWxSZWFjdGlvbkVycm9ySGFuZGxlcnMgPSBbXTtcbiAgdGhpcy5jb21wdXRlZFJlcXVpcmVzUmVhY3Rpb24gPSBmYWxzZTtcbiAgdGhpcy5yZWFjdGlvblJlcXVpcmVzT2JzZXJ2YWJsZSA9IGZhbHNlO1xuICB0aGlzLm9ic2VydmFibGVSZXF1aXJlc1JlYWN0aW9uID0gZmFsc2U7XG4gIHRoaXMuZGlzYWJsZUVycm9yQm91bmRhcmllcyA9IGZhbHNlO1xuICB0aGlzLnN1cHByZXNzUmVhY3Rpb25FcnJvcnMgPSBmYWxzZTtcbiAgdGhpcy51c2VQcm94aWVzID0gdHJ1ZTtcbiAgdGhpcy52ZXJpZnlQcm94aWVzID0gZmFsc2U7XG4gIHRoaXMuc2FmZURlc2NyaXB0b3JzID0gdHJ1ZTtcbn07XG52YXIgY2FuTWVyZ2VHbG9iYWxTdGF0ZSA9IHRydWU7XG52YXIgaXNvbGF0ZUNhbGxlZCA9IGZhbHNlO1xudmFyIGdsb2JhbFN0YXRlID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcbiAgdmFyIGdsb2JhbCA9IC8qI19fUFVSRV9fKi9nZXRHbG9iYWwoKTtcbiAgaWYgKGdsb2JhbC5fX21vYnhJbnN0YW5jZUNvdW50ID4gMCAmJiAhZ2xvYmFsLl9fbW9ieEdsb2JhbHMpIGNhbk1lcmdlR2xvYmFsU3RhdGUgPSBmYWxzZTtcbiAgaWYgKGdsb2JhbC5fX21vYnhHbG9iYWxzICYmIGdsb2JhbC5fX21vYnhHbG9iYWxzLnZlcnNpb24gIT09IG5ldyBNb2JYR2xvYmFscygpLnZlcnNpb24pIGNhbk1lcmdlR2xvYmFsU3RhdGUgPSBmYWxzZTtcblxuICBpZiAoIWNhbk1lcmdlR2xvYmFsU3RhdGUpIHtcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmICghaXNvbGF0ZUNhbGxlZCkge1xuICAgICAgICBkaWUoMzUpO1xuICAgICAgfVxuICAgIH0sIDEpO1xuICAgIHJldHVybiBuZXcgTW9iWEdsb2JhbHMoKTtcbiAgfSBlbHNlIGlmIChnbG9iYWwuX19tb2J4R2xvYmFscykge1xuICAgIGdsb2JhbC5fX21vYnhJbnN0YW5jZUNvdW50ICs9IDE7XG4gICAgaWYgKCFnbG9iYWwuX19tb2J4R2xvYmFscy5VTkNIQU5HRUQpIGdsb2JhbC5fX21vYnhHbG9iYWxzLlVOQ0hBTkdFRCA9IHt9OyAvLyBtYWtlIG1lcmdlIGJhY2t3YXJkIGNvbXBhdGlibGVcblxuICAgIHJldHVybiBnbG9iYWwuX19tb2J4R2xvYmFscztcbiAgfSBlbHNlIHtcbiAgICBnbG9iYWwuX19tb2J4SW5zdGFuY2VDb3VudCA9IDE7XG4gICAgcmV0dXJuIGdsb2JhbC5fX21vYnhHbG9iYWxzID0gLyojX19QVVJFX18qL25ldyBNb2JYR2xvYmFscygpO1xuICB9XG59KCk7XG5mdW5jdGlvbiBpc29sYXRlR2xvYmFsU3RhdGUoKSB7XG4gIGlmIChnbG9iYWxTdGF0ZS5wZW5kaW5nUmVhY3Rpb25zLmxlbmd0aCB8fCBnbG9iYWxTdGF0ZS5pbkJhdGNoIHx8IGdsb2JhbFN0YXRlLmlzUnVubmluZ1JlYWN0aW9ucykgZGllKDM2KTtcbiAgaXNvbGF0ZUNhbGxlZCA9IHRydWU7XG5cbiAgaWYgKGNhbk1lcmdlR2xvYmFsU3RhdGUpIHtcbiAgICB2YXIgZ2xvYmFsID0gZ2V0R2xvYmFsKCk7XG4gICAgaWYgKC0tZ2xvYmFsLl9fbW9ieEluc3RhbmNlQ291bnQgPT09IDApIGdsb2JhbC5fX21vYnhHbG9iYWxzID0gdW5kZWZpbmVkO1xuICAgIGdsb2JhbFN0YXRlID0gbmV3IE1vYlhHbG9iYWxzKCk7XG4gIH1cbn1cbmZ1bmN0aW9uIGdldEdsb2JhbFN0YXRlKCkge1xuICByZXR1cm4gZ2xvYmFsU3RhdGU7XG59XG4vKipcbiAqIEZvciB0ZXN0aW5nIHB1cnBvc2VzIG9ubHk7IHRoaXMgd2lsbCBicmVhayB0aGUgaW50ZXJuYWwgc3RhdGUgb2YgZXhpc3Rpbmcgb2JzZXJ2YWJsZXMsXG4gKiBidXQgY2FuIGJlIHVzZWQgdG8gZ2V0IGJhY2sgYXQgYSBzdGFibGUgc3RhdGUgYWZ0ZXIgdGhyb3dpbmcgZXJyb3JzXG4gKi9cblxuZnVuY3Rpb24gcmVzZXRHbG9iYWxTdGF0ZSgpIHtcbiAgdmFyIGRlZmF1bHRHbG9iYWxzID0gbmV3IE1vYlhHbG9iYWxzKCk7XG5cbiAgZm9yICh2YXIga2V5IGluIGRlZmF1bHRHbG9iYWxzKSB7XG4gICAgaWYgKHBlcnNpc3RlbnRLZXlzLmluZGV4T2Yoa2V5KSA9PT0gLTEpIGdsb2JhbFN0YXRlW2tleV0gPSBkZWZhdWx0R2xvYmFsc1trZXldO1xuICB9XG5cbiAgZ2xvYmFsU3RhdGUuYWxsb3dTdGF0ZUNoYW5nZXMgPSAhZ2xvYmFsU3RhdGUuZW5mb3JjZUFjdGlvbnM7XG59XG5cbmZ1bmN0aW9uIGhhc09ic2VydmVycyhvYnNlcnZhYmxlKSB7XG4gIHJldHVybiBvYnNlcnZhYmxlLm9ic2VydmVyc18gJiYgb2JzZXJ2YWJsZS5vYnNlcnZlcnNfLnNpemUgPiAwO1xufVxuZnVuY3Rpb24gZ2V0T2JzZXJ2ZXJzKG9ic2VydmFibGUpIHtcbiAgcmV0dXJuIG9ic2VydmFibGUub2JzZXJ2ZXJzXztcbn0gLy8gZnVuY3Rpb24gaW52YXJpYW50T2JzZXJ2ZXJzKG9ic2VydmFibGU6IElPYnNlcnZhYmxlKSB7XG4vLyAgICAgY29uc3QgbGlzdCA9IG9ic2VydmFibGUub2JzZXJ2ZXJzXG4vLyAgICAgY29uc3QgbWFwID0gb2JzZXJ2YWJsZS5vYnNlcnZlcnNJbmRleGVzXG4vLyAgICAgY29uc3QgbCA9IGxpc3QubGVuZ3RoXG4vLyAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsOyBpKyspIHtcbi8vICAgICAgICAgY29uc3QgaWQgPSBsaXN0W2ldLl9fbWFwaWRcbi8vICAgICAgICAgaWYgKGkpIHtcbi8vICAgICAgICAgICAgIGludmFyaWFudChtYXBbaWRdID09PSBpLCBcIklOVEVSTkFMIEVSUk9SIG1hcHMgZGVyaXZhdGlvbi5fX21hcGlkIHRvIGluZGV4IGluIGxpc3RcIikgLy8gZm9yIHBlcmZvcm1hbmNlXG4vLyAgICAgICAgIH0gZWxzZSB7XG4vLyAgICAgICAgICAgICBpbnZhcmlhbnQoIShpZCBpbiBtYXApLCBcIklOVEVSTkFMIEVSUk9SIG9ic2VydmVyIG9uIGluZGV4IDAgc2hvdWxkbid0IGJlIGhlbGQgaW4gbWFwLlwiKSAvLyBmb3IgcGVyZm9ybWFuY2Vcbi8vICAgICAgICAgfVxuLy8gICAgIH1cbi8vICAgICBpbnZhcmlhbnQoXG4vLyAgICAgICAgIGxpc3QubGVuZ3RoID09PSAwIHx8IE9iamVjdC5rZXlzKG1hcCkubGVuZ3RoID09PSBsaXN0Lmxlbmd0aCAtIDEsXG4vLyAgICAgICAgIFwiSU5URVJOQUwgRVJST1IgdGhlcmUgaXMgbm8ganVuayBpbiBtYXBcIlxuLy8gICAgIClcbi8vIH1cblxuZnVuY3Rpb24gYWRkT2JzZXJ2ZXIob2JzZXJ2YWJsZSwgbm9kZSkge1xuICAvLyBpbnZhcmlhbnQobm9kZS5kZXBlbmRlbmNpZXNTdGF0ZSAhPT0gLTEsIFwiSU5URVJOQUwgRVJST1IsIGNhbiBhZGQgb25seSBkZXBlbmRlbmNpZXNTdGF0ZSAhPT0gLTFcIik7XG4gIC8vIGludmFyaWFudChvYnNlcnZhYmxlLl9vYnNlcnZlcnMuaW5kZXhPZihub2RlKSA9PT0gLTEsIFwiSU5URVJOQUwgRVJST1IgYWRkIGFscmVhZHkgYWRkZWQgbm9kZVwiKTtcbiAgLy8gaW52YXJpYW50T2JzZXJ2ZXJzKG9ic2VydmFibGUpO1xuICBvYnNlcnZhYmxlLm9ic2VydmVyc18uYWRkKG5vZGUpO1xuICBpZiAob2JzZXJ2YWJsZS5sb3dlc3RPYnNlcnZlclN0YXRlXyA+IG5vZGUuZGVwZW5kZW5jaWVzU3RhdGVfKSBvYnNlcnZhYmxlLmxvd2VzdE9ic2VydmVyU3RhdGVfID0gbm9kZS5kZXBlbmRlbmNpZXNTdGF0ZV87IC8vIGludmFyaWFudE9ic2VydmVycyhvYnNlcnZhYmxlKTtcbiAgLy8gaW52YXJpYW50KG9ic2VydmFibGUuX29ic2VydmVycy5pbmRleE9mKG5vZGUpICE9PSAtMSwgXCJJTlRFUk5BTCBFUlJPUiBkaWRuJ3QgYWRkIG5vZGVcIik7XG59XG5mdW5jdGlvbiByZW1vdmVPYnNlcnZlcihvYnNlcnZhYmxlLCBub2RlKSB7XG4gIC8vIGludmFyaWFudChnbG9iYWxTdGF0ZS5pbkJhdGNoID4gMCwgXCJJTlRFUk5BTCBFUlJPUiwgcmVtb3ZlIHNob3VsZCBiZSBjYWxsZWQgb25seSBpbnNpZGUgYmF0Y2hcIik7XG4gIC8vIGludmFyaWFudChvYnNlcnZhYmxlLl9vYnNlcnZlcnMuaW5kZXhPZihub2RlKSAhPT0gLTEsIFwiSU5URVJOQUwgRVJST1IgcmVtb3ZlIGFscmVhZHkgcmVtb3ZlZCBub2RlXCIpO1xuICAvLyBpbnZhcmlhbnRPYnNlcnZlcnMob2JzZXJ2YWJsZSk7XG4gIG9ic2VydmFibGUub2JzZXJ2ZXJzX1tcImRlbGV0ZVwiXShub2RlKTtcblxuICBpZiAob2JzZXJ2YWJsZS5vYnNlcnZlcnNfLnNpemUgPT09IDApIHtcbiAgICAvLyBkZWxldGluZyBsYXN0IG9ic2VydmVyXG4gICAgcXVldWVGb3JVbm9ic2VydmF0aW9uKG9ic2VydmFibGUpO1xuICB9IC8vIGludmFyaWFudE9ic2VydmVycyhvYnNlcnZhYmxlKTtcbiAgLy8gaW52YXJpYW50KG9ic2VydmFibGUuX29ic2VydmVycy5pbmRleE9mKG5vZGUpID09PSAtMSwgXCJJTlRFUk5BTCBFUlJPUiByZW1vdmUgYWxyZWFkeSByZW1vdmVkIG5vZGUyXCIpO1xuXG59XG5mdW5jdGlvbiBxdWV1ZUZvclVub2JzZXJ2YXRpb24ob2JzZXJ2YWJsZSkge1xuICBpZiAob2JzZXJ2YWJsZS5pc1BlbmRpbmdVbm9ic2VydmF0aW9uXyA9PT0gZmFsc2UpIHtcbiAgICAvLyBpbnZhcmlhbnQob2JzZXJ2YWJsZS5fb2JzZXJ2ZXJzLmxlbmd0aCA9PT0gMCwgXCJJTlRFUk5BTCBFUlJPUiwgc2hvdWxkIG9ubHkgcXVldWUgZm9yIHVub2JzZXJ2YXRpb24gdW5vYnNlcnZlZCBvYnNlcnZhYmxlc1wiKTtcbiAgICBvYnNlcnZhYmxlLmlzUGVuZGluZ1Vub2JzZXJ2YXRpb25fID0gdHJ1ZTtcbiAgICBnbG9iYWxTdGF0ZS5wZW5kaW5nVW5vYnNlcnZhdGlvbnMucHVzaChvYnNlcnZhYmxlKTtcbiAgfVxufVxuLyoqXG4gKiBCYXRjaCBzdGFydHMgYSB0cmFuc2FjdGlvbiwgYXQgbGVhc3QgZm9yIHB1cnBvc2VzIG9mIG1lbW9pemluZyBDb21wdXRlZFZhbHVlcyB3aGVuIG5vdGhpbmcgZWxzZSBkb2VzLlxuICogRHVyaW5nIGEgYmF0Y2ggYG9uQmVjb21lVW5vYnNlcnZlZGAgd2lsbCBiZSBjYWxsZWQgYXQgbW9zdCBvbmNlIHBlciBvYnNlcnZhYmxlLlxuICogQXZvaWRzIHVubmVjZXNzYXJ5IHJlY2FsY3VsYXRpb25zLlxuICovXG5cbmZ1bmN0aW9uIHN0YXJ0QmF0Y2goKSB7XG4gIGdsb2JhbFN0YXRlLmluQmF0Y2grKztcbn1cbmZ1bmN0aW9uIGVuZEJhdGNoKCkge1xuICBpZiAoLS1nbG9iYWxTdGF0ZS5pbkJhdGNoID09PSAwKSB7XG4gICAgcnVuUmVhY3Rpb25zKCk7IC8vIHRoZSBiYXRjaCBpcyBhY3R1YWxseSBhYm91dCB0byBmaW5pc2gsIGFsbCB1bm9ic2VydmluZyBzaG91bGQgaGFwcGVuIGhlcmUuXG5cbiAgICB2YXIgbGlzdCA9IGdsb2JhbFN0YXRlLnBlbmRpbmdVbm9ic2VydmF0aW9ucztcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIG9ic2VydmFibGUgPSBsaXN0W2ldO1xuICAgICAgb2JzZXJ2YWJsZS5pc1BlbmRpbmdVbm9ic2VydmF0aW9uXyA9IGZhbHNlO1xuXG4gICAgICBpZiAob2JzZXJ2YWJsZS5vYnNlcnZlcnNfLnNpemUgPT09IDApIHtcbiAgICAgICAgaWYgKG9ic2VydmFibGUuaXNCZWluZ09ic2VydmVkXykge1xuICAgICAgICAgIC8vIGlmIHRoaXMgb2JzZXJ2YWJsZSBoYWQgcmVhY3RpdmUgb2JzZXJ2ZXJzLCB0cmlnZ2VyIHRoZSBob29rc1xuICAgICAgICAgIG9ic2VydmFibGUuaXNCZWluZ09ic2VydmVkXyA9IGZhbHNlO1xuICAgICAgICAgIG9ic2VydmFibGUub25CVU8oKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChvYnNlcnZhYmxlIGluc3RhbmNlb2YgQ29tcHV0ZWRWYWx1ZSkge1xuICAgICAgICAgIC8vIGNvbXB1dGVkIHZhbHVlcyBhcmUgYXV0b21hdGljYWxseSB0ZWFyZWQgZG93biB3aGVuIHRoZSBsYXN0IG9ic2VydmVyIGxlYXZlc1xuICAgICAgICAgIC8vIHRoaXMgd2luZG93LnByb2Nlc3MgaGFwcGVucyByZWN1cnNpdmVseSwgdGhpcyBjb21wdXRlZCBtaWdodCBiZSB0aGUgbGFzdCBvYnNlcnZhYmUgb2YgYW5vdGhlciwgZXRjLi5cbiAgICAgICAgICBvYnNlcnZhYmxlLnN1c3BlbmRfKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBnbG9iYWxTdGF0ZS5wZW5kaW5nVW5vYnNlcnZhdGlvbnMgPSBbXTtcbiAgfVxufVxuZnVuY3Rpb24gcmVwb3J0T2JzZXJ2ZWQob2JzZXJ2YWJsZSkge1xuICBjaGVja0lmU3RhdGVSZWFkc0FyZUFsbG93ZWQob2JzZXJ2YWJsZSk7XG4gIHZhciBkZXJpdmF0aW9uID0gZ2xvYmFsU3RhdGUudHJhY2tpbmdEZXJpdmF0aW9uO1xuXG4gIGlmIChkZXJpdmF0aW9uICE9PSBudWxsKSB7XG4gICAgLyoqXG4gICAgICogU2ltcGxlIG9wdGltaXphdGlvbiwgZ2l2ZSBlYWNoIGRlcml2YXRpb24gcnVuIGFuIHVuaXF1ZSBpZCAocnVuSWQpXG4gICAgICogQ2hlY2sgaWYgbGFzdCB0aW1lIHRoaXMgb2JzZXJ2YWJsZSB3YXMgYWNjZXNzZWQgdGhlIHNhbWUgcnVuSWQgaXMgdXNlZFxuICAgICAqIGlmIHRoaXMgaXMgdGhlIGNhc2UsIHRoZSByZWxhdGlvbiBpcyBhbHJlYWR5IGtub3duXG4gICAgICovXG4gICAgaWYgKGRlcml2YXRpb24ucnVuSWRfICE9PSBvYnNlcnZhYmxlLmxhc3RBY2Nlc3NlZEJ5Xykge1xuICAgICAgb2JzZXJ2YWJsZS5sYXN0QWNjZXNzZWRCeV8gPSBkZXJpdmF0aW9uLnJ1bklkXzsgLy8gVHJpZWQgc3RvcmluZyBuZXdPYnNlcnZpbmcsIG9yIG9ic2VydmluZywgb3IgYm90aCBhcyBTZXQsIGJ1dCBwZXJmb3JtYW5jZSBkaWRuJ3QgY29tZSBjbG9zZS4uLlxuXG4gICAgICBkZXJpdmF0aW9uLm5ld09ic2VydmluZ19bZGVyaXZhdGlvbi51bmJvdW5kRGVwc0NvdW50XysrXSA9IG9ic2VydmFibGU7XG5cbiAgICAgIGlmICghb2JzZXJ2YWJsZS5pc0JlaW5nT2JzZXJ2ZWRfICYmIGdsb2JhbFN0YXRlLnRyYWNraW5nQ29udGV4dCkge1xuICAgICAgICBvYnNlcnZhYmxlLmlzQmVpbmdPYnNlcnZlZF8gPSB0cnVlO1xuICAgICAgICBvYnNlcnZhYmxlLm9uQk8oKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSBlbHNlIGlmIChvYnNlcnZhYmxlLm9ic2VydmVyc18uc2l6ZSA9PT0gMCAmJiBnbG9iYWxTdGF0ZS5pbkJhdGNoID4gMCkge1xuICAgIHF1ZXVlRm9yVW5vYnNlcnZhdGlvbihvYnNlcnZhYmxlKTtcbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn0gLy8gZnVuY3Rpb24gaW52YXJpYW50TE9TKG9ic2VydmFibGU6IElPYnNlcnZhYmxlLCBtc2c6IHN0cmluZykge1xuLy8gICAgIC8vIGl0J3MgZXhwZW5zaXZlIHNvIGJldHRlciBub3QgcnVuIGl0IGluIHByb2R1Y2l0b24uIGJ1dCB0ZW1wb3JhcmlseSBoZWxwZnVsIGZvciB0ZXN0aW5nXG4vLyAgICAgY29uc3QgbWluID0gZ2V0T2JzZXJ2ZXJzKG9ic2VydmFibGUpLnJlZHVjZSgoYSwgYikgPT4gTWF0aC5taW4oYSwgYi5kZXBlbmRlbmNpZXNTdGF0ZSksIDIpXG4vLyAgICAgaWYgKG1pbiA+PSBvYnNlcnZhYmxlLmxvd2VzdE9ic2VydmVyU3RhdGUpIHJldHVybiAvLyA8LSB0aGUgb25seSBhc3N1bXB0aW9uIGFib3V0IGBsb3dlc3RPYnNlcnZlclN0YXRlYFxuLy8gICAgIHRocm93IG5ldyBFcnJvcihcbi8vICAgICAgICAgXCJsb3dlc3RPYnNlcnZlclN0YXRlIGlzIHdyb25nIGZvciBcIiArXG4vLyAgICAgICAgICAgICBtc2cgK1xuLy8gICAgICAgICAgICAgXCIgYmVjYXVzZSBcIiArXG4vLyAgICAgICAgICAgICBtaW4gK1xuLy8gICAgICAgICAgICAgXCIgPCBcIiArXG4vLyAgICAgICAgICAgICBvYnNlcnZhYmxlLmxvd2VzdE9ic2VydmVyU3RhdGVcbi8vICAgICApXG4vLyB9XG5cbi8qKlxuICogTk9URTogY3VycmVudCBwcm9wYWdhdGlvbiBtZWNoYW5pc20gd2lsbCBpbiBjYXNlIG9mIHNlbGYgcmVydW5pbmcgYXV0b3J1bnMgYmVoYXZlIHVuZXhwZWN0ZWRseVxuICogSXQgd2lsbCBwcm9wYWdhdGUgY2hhbmdlcyB0byBvYnNlcnZlcnMgZnJvbSBwcmV2aW91cyBydW5cbiAqIEl0J3MgaGFyZCBvciBtYXliZSBpbXBvc3NpYmxlICh3aXRoIHJlYXNvbmFibGUgcGVyZikgdG8gZ2V0IGl0IHJpZ2h0IHdpdGggY3VycmVudCBhcHByb2FjaFxuICogSG9wZWZ1bGx5IHNlbGYgcmVydW5pbmcgYXV0b3J1bnMgYXJlbid0IGEgZmVhdHVyZSBwZW9wbGUgc2hvdWxkIGRlcGVuZCBvblxuICogQWxzbyBtb3N0IGJhc2ljIHVzZSBjYXNlcyBzaG91bGQgYmUgb2tcbiAqL1xuLy8gQ2FsbGVkIGJ5IEF0b20gd2hlbiBpdHMgdmFsdWUgY2hhbmdlc1xuXG5mdW5jdGlvbiBwcm9wYWdhdGVDaGFuZ2VkKG9ic2VydmFibGUpIHtcbiAgLy8gaW52YXJpYW50TE9TKG9ic2VydmFibGUsIFwiY2hhbmdlZCBzdGFydFwiKTtcbiAgaWYgKG9ic2VydmFibGUubG93ZXN0T2JzZXJ2ZXJTdGF0ZV8gPT09IElEZXJpdmF0aW9uU3RhdGVfLlNUQUxFXykgcmV0dXJuO1xuICBvYnNlcnZhYmxlLmxvd2VzdE9ic2VydmVyU3RhdGVfID0gSURlcml2YXRpb25TdGF0ZV8uU1RBTEVfOyAvLyBJZGVhbGx5IHdlIHVzZSBmb3IuLm9mIGhlcmUsIGJ1dCB0aGUgZG93bmNvbXBpbGVkIHZlcnNpb24gaXMgcmVhbGx5IHNsb3cuLi5cblxuICBvYnNlcnZhYmxlLm9ic2VydmVyc18uZm9yRWFjaChmdW5jdGlvbiAoZCkge1xuICAgIGlmIChkLmRlcGVuZGVuY2llc1N0YXRlXyA9PT0gSURlcml2YXRpb25TdGF0ZV8uVVBfVE9fREFURV8pIHtcbiAgICAgIGlmIChOT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgJiYgZC5pc1RyYWNpbmdfICE9PSBUcmFjZU1vZGUuTk9ORSkge1xuICAgICAgICBsb2dUcmFjZUluZm8oZCwgb2JzZXJ2YWJsZSk7XG4gICAgICB9XG5cbiAgICAgIGQub25CZWNvbWVTdGFsZV8oKTtcbiAgICB9XG5cbiAgICBkLmRlcGVuZGVuY2llc1N0YXRlXyA9IElEZXJpdmF0aW9uU3RhdGVfLlNUQUxFXztcbiAgfSk7IC8vIGludmFyaWFudExPUyhvYnNlcnZhYmxlLCBcImNoYW5nZWQgZW5kXCIpO1xufSAvLyBDYWxsZWQgYnkgQ29tcHV0ZWRWYWx1ZSB3aGVuIGl0IHJlY2FsY3VsYXRlIGFuZCBpdHMgdmFsdWUgY2hhbmdlZFxuXG5mdW5jdGlvbiBwcm9wYWdhdGVDaGFuZ2VDb25maXJtZWQob2JzZXJ2YWJsZSkge1xuICAvLyBpbnZhcmlhbnRMT1Mob2JzZXJ2YWJsZSwgXCJjb25maXJtZWQgc3RhcnRcIik7XG4gIGlmIChvYnNlcnZhYmxlLmxvd2VzdE9ic2VydmVyU3RhdGVfID09PSBJRGVyaXZhdGlvblN0YXRlXy5TVEFMRV8pIHJldHVybjtcbiAgb2JzZXJ2YWJsZS5sb3dlc3RPYnNlcnZlclN0YXRlXyA9IElEZXJpdmF0aW9uU3RhdGVfLlNUQUxFXztcbiAgb2JzZXJ2YWJsZS5vYnNlcnZlcnNfLmZvckVhY2goZnVuY3Rpb24gKGQpIHtcbiAgICBpZiAoZC5kZXBlbmRlbmNpZXNTdGF0ZV8gPT09IElEZXJpdmF0aW9uU3RhdGVfLlBPU1NJQkxZX1NUQUxFXykge1xuICAgICAgZC5kZXBlbmRlbmNpZXNTdGF0ZV8gPSBJRGVyaXZhdGlvblN0YXRlXy5TVEFMRV87XG5cbiAgICAgIGlmIChOT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgJiYgZC5pc1RyYWNpbmdfICE9PSBUcmFjZU1vZGUuTk9ORSkge1xuICAgICAgICBsb2dUcmFjZUluZm8oZCwgb2JzZXJ2YWJsZSk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChkLmRlcGVuZGVuY2llc1N0YXRlXyA9PT0gSURlcml2YXRpb25TdGF0ZV8uVVBfVE9fREFURV8gLy8gdGhpcyBoYXBwZW5zIGR1cmluZyBjb21wdXRpbmcgb2YgYGRgLCBqdXN0IGtlZXAgbG93ZXN0T2JzZXJ2ZXJTdGF0ZSB1cCB0byBkYXRlLlxuICAgICkge1xuICAgICAgICBvYnNlcnZhYmxlLmxvd2VzdE9ic2VydmVyU3RhdGVfID0gSURlcml2YXRpb25TdGF0ZV8uVVBfVE9fREFURV87XG4gICAgICB9XG4gIH0pOyAvLyBpbnZhcmlhbnRMT1Mob2JzZXJ2YWJsZSwgXCJjb25maXJtZWQgZW5kXCIpO1xufSAvLyBVc2VkIGJ5IGNvbXB1dGVkIHdoZW4gaXRzIGRlcGVuZGVuY3kgY2hhbmdlZCwgYnV0IHdlIGRvbid0IHdhbid0IHRvIGltbWVkaWF0ZWx5IHJlY29tcHV0ZS5cblxuZnVuY3Rpb24gcHJvcGFnYXRlTWF5YmVDaGFuZ2VkKG9ic2VydmFibGUpIHtcbiAgLy8gaW52YXJpYW50TE9TKG9ic2VydmFibGUsIFwibWF5YmUgc3RhcnRcIik7XG4gIGlmIChvYnNlcnZhYmxlLmxvd2VzdE9ic2VydmVyU3RhdGVfICE9PSBJRGVyaXZhdGlvblN0YXRlXy5VUF9UT19EQVRFXykgcmV0dXJuO1xuICBvYnNlcnZhYmxlLmxvd2VzdE9ic2VydmVyU3RhdGVfID0gSURlcml2YXRpb25TdGF0ZV8uUE9TU0lCTFlfU1RBTEVfO1xuICBvYnNlcnZhYmxlLm9ic2VydmVyc18uZm9yRWFjaChmdW5jdGlvbiAoZCkge1xuICAgIGlmIChkLmRlcGVuZGVuY2llc1N0YXRlXyA9PT0gSURlcml2YXRpb25TdGF0ZV8uVVBfVE9fREFURV8pIHtcbiAgICAgIGQuZGVwZW5kZW5jaWVzU3RhdGVfID0gSURlcml2YXRpb25TdGF0ZV8uUE9TU0lCTFlfU1RBTEVfO1xuICAgICAgZC5vbkJlY29tZVN0YWxlXygpO1xuICAgIH1cbiAgfSk7IC8vIGludmFyaWFudExPUyhvYnNlcnZhYmxlLCBcIm1heWJlIGVuZFwiKTtcbn1cblxuZnVuY3Rpb24gbG9nVHJhY2VJbmZvKGRlcml2YXRpb24sIG9ic2VydmFibGUpIHtcbiAgY29uc29sZS5sb2coXCJbbW9ieC50cmFjZV0gJ1wiICsgZGVyaXZhdGlvbi5uYW1lXyArIFwiJyBpcyBpbnZhbGlkYXRlZCBkdWUgdG8gYSBjaGFuZ2UgaW46ICdcIiArIG9ic2VydmFibGUubmFtZV8gKyBcIidcIik7XG5cbiAgaWYgKGRlcml2YXRpb24uaXNUcmFjaW5nXyA9PT0gVHJhY2VNb2RlLkJSRUFLKSB7XG4gICAgdmFyIGxpbmVzID0gW107XG4gICAgcHJpbnREZXBUcmVlKGdldERlcGVuZGVuY3lUcmVlKGRlcml2YXRpb24pLCBsaW5lcywgMSk7IC8vIHByZXR0aWVyLWlnbm9yZVxuXG4gICAgbmV3IEZ1bmN0aW9uKFwiZGVidWdnZXI7XFxuLypcXG5UcmFjaW5nICdcIiArIGRlcml2YXRpb24ubmFtZV8gKyBcIidcXG5cXG5Zb3UgYXJlIGVudGVyaW5nIHRoaXMgYnJlYWsgcG9pbnQgYmVjYXVzZSBkZXJpdmF0aW9uICdcIiArIGRlcml2YXRpb24ubmFtZV8gKyBcIicgaXMgYmVpbmcgdHJhY2VkIGFuZCAnXCIgKyBvYnNlcnZhYmxlLm5hbWVfICsgXCInIGlzIG5vdyBmb3JjaW5nIGl0IHRvIHVwZGF0ZS5cXG5KdXN0IGZvbGxvdyB0aGUgc3RhY2t0cmFjZSB5b3Ugc2hvdWxkIG5vdyBzZWUgaW4gdGhlIGRldnRvb2xzIHRvIHNlZSBwcmVjaXNlbHkgd2hhdCBwaWVjZSBvZiB5b3VyIGNvZGUgaXMgY2F1c2luZyB0aGlzIHVwZGF0ZVxcblRoZSBzdGFja2ZyYW1lIHlvdSBhcmUgbG9va2luZyBmb3IgaXMgYXQgbGVhc3QgfjYtOCBzdGFjay1mcmFtZXMgdXAuXFxuXFxuXCIgKyAoZGVyaXZhdGlvbiBpbnN0YW5jZW9mIENvbXB1dGVkVmFsdWUgPyBkZXJpdmF0aW9uLmRlcml2YXRpb24udG9TdHJpbmcoKS5yZXBsYWNlKC9bKl1cXC8vZywgXCIvXCIpIDogXCJcIikgKyBcIlxcblxcblRoZSBkZXBlbmRlbmNpZXMgZm9yIHRoaXMgZGVyaXZhdGlvbiBhcmU6XFxuXFxuXCIgKyBsaW5lcy5qb2luKFwiXFxuXCIpICsgXCJcXG4qL1xcbiAgICBcIikoKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBwcmludERlcFRyZWUodHJlZSwgbGluZXMsIGRlcHRoKSB7XG4gIGlmIChsaW5lcy5sZW5ndGggPj0gMTAwMCkge1xuICAgIGxpbmVzLnB1c2goXCIoYW5kIG1hbnkgbW9yZSlcIik7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgbGluZXMucHVzaChcIlwiICsgbmV3IEFycmF5KGRlcHRoKS5qb2luKFwiXFx0XCIpICsgdHJlZS5uYW1lKTsgLy8gTVdFOiBub3QgdGhlIGZhc3Rlc3QsIGJ1dCB0aGUgZWFzaWVzdCB3YXkgOilcblxuICBpZiAodHJlZS5kZXBlbmRlbmNpZXMpIHRyZWUuZGVwZW5kZW5jaWVzLmZvckVhY2goZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgcmV0dXJuIHByaW50RGVwVHJlZShjaGlsZCwgbGluZXMsIGRlcHRoICsgMSk7XG4gIH0pO1xufVxuXG52YXIgUmVhY3Rpb24gPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkge1xuICAvLyBub2RlcyB3ZSBhcmUgbG9va2luZyBhdC4gT3VyIHZhbHVlIGRlcGVuZHMgb24gdGhlc2Ugbm9kZXNcbiAgZnVuY3Rpb24gUmVhY3Rpb24obmFtZV8sIG9uSW52YWxpZGF0ZV8sIGVycm9ySGFuZGxlcl8sIHJlcXVpcmVzT2JzZXJ2YWJsZV8pIHtcbiAgICBpZiAobmFtZV8gPT09IHZvaWQgMCkge1xuICAgICAgbmFtZV8gPSBOT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBcIlJlYWN0aW9uQFwiICsgZ2V0TmV4dElkKCkgOiBcIlJlYWN0aW9uXCI7XG4gICAgfVxuXG4gICAgaWYgKHJlcXVpcmVzT2JzZXJ2YWJsZV8gPT09IHZvaWQgMCkge1xuICAgICAgcmVxdWlyZXNPYnNlcnZhYmxlXyA9IGZhbHNlO1xuICAgIH1cblxuICAgIHRoaXMubmFtZV8gPSB2b2lkIDA7XG4gICAgdGhpcy5vbkludmFsaWRhdGVfID0gdm9pZCAwO1xuICAgIHRoaXMuZXJyb3JIYW5kbGVyXyA9IHZvaWQgMDtcbiAgICB0aGlzLnJlcXVpcmVzT2JzZXJ2YWJsZV8gPSB2b2lkIDA7XG4gICAgdGhpcy5vYnNlcnZpbmdfID0gW107XG4gICAgdGhpcy5uZXdPYnNlcnZpbmdfID0gW107XG4gICAgdGhpcy5kZXBlbmRlbmNpZXNTdGF0ZV8gPSBJRGVyaXZhdGlvblN0YXRlXy5OT1RfVFJBQ0tJTkdfO1xuICAgIHRoaXMuZGlmZlZhbHVlXyA9IDA7XG4gICAgdGhpcy5ydW5JZF8gPSAwO1xuICAgIHRoaXMudW5ib3VuZERlcHNDb3VudF8gPSAwO1xuICAgIHRoaXMuaXNEaXNwb3NlZF8gPSBmYWxzZTtcbiAgICB0aGlzLmlzU2NoZWR1bGVkXyA9IGZhbHNlO1xuICAgIHRoaXMuaXNUcmFja1BlbmRpbmdfID0gZmFsc2U7XG4gICAgdGhpcy5pc1J1bm5pbmdfID0gZmFsc2U7XG4gICAgdGhpcy5pc1RyYWNpbmdfID0gVHJhY2VNb2RlLk5PTkU7XG4gICAgdGhpcy5uYW1lXyA9IG5hbWVfO1xuICAgIHRoaXMub25JbnZhbGlkYXRlXyA9IG9uSW52YWxpZGF0ZV87XG4gICAgdGhpcy5lcnJvckhhbmRsZXJfID0gZXJyb3JIYW5kbGVyXztcbiAgICB0aGlzLnJlcXVpcmVzT2JzZXJ2YWJsZV8gPSByZXF1aXJlc09ic2VydmFibGVfO1xuICB9XG5cbiAgdmFyIF9wcm90byA9IFJlYWN0aW9uLnByb3RvdHlwZTtcblxuICBfcHJvdG8ub25CZWNvbWVTdGFsZV8gPSBmdW5jdGlvbiBvbkJlY29tZVN0YWxlXygpIHtcbiAgICB0aGlzLnNjaGVkdWxlXygpO1xuICB9O1xuXG4gIF9wcm90by5zY2hlZHVsZV8gPSBmdW5jdGlvbiBzY2hlZHVsZV8oKSB7XG4gICAgaWYgKCF0aGlzLmlzU2NoZWR1bGVkXykge1xuICAgICAgdGhpcy5pc1NjaGVkdWxlZF8gPSB0cnVlO1xuICAgICAgZ2xvYmFsU3RhdGUucGVuZGluZ1JlYWN0aW9ucy5wdXNoKHRoaXMpO1xuICAgICAgcnVuUmVhY3Rpb25zKCk7XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by5pc1NjaGVkdWxlZCA9IGZ1bmN0aW9uIGlzU2NoZWR1bGVkKCkge1xuICAgIHJldHVybiB0aGlzLmlzU2NoZWR1bGVkXztcbiAgfVxuICAvKipcbiAgICogaW50ZXJuYWwsIHVzZSBzY2hlZHVsZSgpIGlmIHlvdSBpbnRlbmQgdG8ga2ljayBvZmYgYSByZWFjdGlvblxuICAgKi9cbiAgO1xuXG4gIF9wcm90by5ydW5SZWFjdGlvbl8gPSBmdW5jdGlvbiBydW5SZWFjdGlvbl8oKSB7XG4gICAgaWYgKCF0aGlzLmlzRGlzcG9zZWRfKSB7XG4gICAgICBzdGFydEJhdGNoKCk7XG4gICAgICB0aGlzLmlzU2NoZWR1bGVkXyA9IGZhbHNlO1xuICAgICAgdmFyIHByZXYgPSBnbG9iYWxTdGF0ZS50cmFja2luZ0NvbnRleHQ7XG4gICAgICBnbG9iYWxTdGF0ZS50cmFja2luZ0NvbnRleHQgPSB0aGlzO1xuXG4gICAgICBpZiAoc2hvdWxkQ29tcHV0ZSh0aGlzKSkge1xuICAgICAgICB0aGlzLmlzVHJhY2tQZW5kaW5nXyA9IHRydWU7XG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICB0aGlzLm9uSW52YWxpZGF0ZV8oKTtcblxuICAgICAgICAgIGlmIChOT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgJiYgdGhpcy5pc1RyYWNrUGVuZGluZ18gJiYgaXNTcHlFbmFibGVkKCkpIHtcbiAgICAgICAgICAgIC8vIG9uSW52YWxpZGF0ZSBkaWRuJ3QgdHJpZ2dlciB0cmFjayByaWdodCBhd2F5Li5cbiAgICAgICAgICAgIHNweVJlcG9ydCh7XG4gICAgICAgICAgICAgIG5hbWU6IHRoaXMubmFtZV8sXG4gICAgICAgICAgICAgIHR5cGU6IFwic2NoZWR1bGVkLXJlYWN0aW9uXCJcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIHRoaXMucmVwb3J0RXhjZXB0aW9uSW5EZXJpdmF0aW9uXyhlKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBnbG9iYWxTdGF0ZS50cmFja2luZ0NvbnRleHQgPSBwcmV2O1xuICAgICAgZW5kQmF0Y2goKTtcbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLnRyYWNrID0gZnVuY3Rpb24gdHJhY2soZm4pIHtcbiAgICBpZiAodGhpcy5pc0Rpc3Bvc2VkXykge1xuICAgICAgcmV0dXJuOyAvLyBjb25zb2xlLndhcm4oXCJSZWFjdGlvbiBhbHJlYWR5IGRpc3Bvc2VkXCIpIC8vIE5vdGU6IE5vdCBhIHdhcm5pbmcgLyBlcnJvciBpbiBtb2J4IDQgZWl0aGVyXG4gICAgfVxuXG4gICAgc3RhcnRCYXRjaCgpO1xuICAgIHZhciBub3RpZnkgPSBpc1NweUVuYWJsZWQoKTtcbiAgICB2YXIgc3RhcnRUaW1lO1xuXG4gICAgaWYgKE5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiAmJiBub3RpZnkpIHtcbiAgICAgIHN0YXJ0VGltZSA9IERhdGUubm93KCk7XG4gICAgICBzcHlSZXBvcnRTdGFydCh7XG4gICAgICAgIG5hbWU6IHRoaXMubmFtZV8sXG4gICAgICAgIHR5cGU6IFwicmVhY3Rpb25cIlxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgdGhpcy5pc1J1bm5pbmdfID0gdHJ1ZTtcbiAgICB2YXIgcHJldlJlYWN0aW9uID0gZ2xvYmFsU3RhdGUudHJhY2tpbmdDb250ZXh0OyAvLyByZWFjdGlvbnMgY291bGQgY3JlYXRlIHJlYWN0aW9ucy4uLlxuXG4gICAgZ2xvYmFsU3RhdGUudHJhY2tpbmdDb250ZXh0ID0gdGhpcztcbiAgICB2YXIgcmVzdWx0ID0gdHJhY2tEZXJpdmVkRnVuY3Rpb24odGhpcywgZm4sIHVuZGVmaW5lZCk7XG4gICAgZ2xvYmFsU3RhdGUudHJhY2tpbmdDb250ZXh0ID0gcHJldlJlYWN0aW9uO1xuICAgIHRoaXMuaXNSdW5uaW5nXyA9IGZhbHNlO1xuICAgIHRoaXMuaXNUcmFja1BlbmRpbmdfID0gZmFsc2U7XG5cbiAgICBpZiAodGhpcy5pc0Rpc3Bvc2VkXykge1xuICAgICAgLy8gZGlzcG9zZWQgZHVyaW5nIGxhc3QgcnVuLiBDbGVhbiB1cCBldmVyeXRoaW5nIHRoYXQgd2FzIGJvdW5kIGFmdGVyIHRoZSBkaXNwb3NlIGNhbGwuXG4gICAgICBjbGVhck9ic2VydmluZyh0aGlzKTtcbiAgICB9XG5cbiAgICBpZiAoaXNDYXVnaHRFeGNlcHRpb24ocmVzdWx0KSkgdGhpcy5yZXBvcnRFeGNlcHRpb25JbkRlcml2YXRpb25fKHJlc3VsdC5jYXVzZSk7XG5cbiAgICBpZiAoTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiICYmIG5vdGlmeSkge1xuICAgICAgc3B5UmVwb3J0RW5kKHtcbiAgICAgICAgdGltZTogRGF0ZS5ub3coKSAtIHN0YXJ0VGltZVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgZW5kQmF0Y2goKTtcbiAgfTtcblxuICBfcHJvdG8ucmVwb3J0RXhjZXB0aW9uSW5EZXJpdmF0aW9uXyA9IGZ1bmN0aW9uIHJlcG9ydEV4Y2VwdGlvbkluRGVyaXZhdGlvbl8oZXJyb3IpIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgaWYgKHRoaXMuZXJyb3JIYW5kbGVyXykge1xuICAgICAgdGhpcy5lcnJvckhhbmRsZXJfKGVycm9yLCB0aGlzKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoZ2xvYmFsU3RhdGUuZGlzYWJsZUVycm9yQm91bmRhcmllcykgdGhyb3cgZXJyb3I7XG4gICAgdmFyIG1lc3NhZ2UgPSBOT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBcIlttb2J4XSBFbmNvdW50ZXJlZCBhbiB1bmNhdWdodCBleGNlcHRpb24gdGhhdCB3YXMgdGhyb3duIGJ5IGEgcmVhY3Rpb24gb3Igb2JzZXJ2ZXIgY29tcG9uZW50LCBpbjogJ1wiICsgdGhpcyArIFwiJ1wiIDogXCJbbW9ieF0gdW5jYXVnaHQgZXJyb3IgaW4gJ1wiICsgdGhpcyArIFwiJ1wiO1xuXG4gICAgaWYgKCFnbG9iYWxTdGF0ZS5zdXBwcmVzc1JlYWN0aW9uRXJyb3JzKSB7XG4gICAgICBjb25zb2xlLmVycm9yKG1lc3NhZ2UsIGVycm9yKTtcbiAgICAgIC8qKiBJZiBkZWJ1Z2dpbmcgYnJvdWdodCB5b3UgaGVyZSwgcGxlYXNlLCByZWFkIHRoZSBhYm92ZSBtZXNzYWdlIDotKS4gVG54ISAqL1xuICAgIH0gZWxzZSBpZiAoTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSBjb25zb2xlLndhcm4oXCJbbW9ieF0gKGVycm9yIGluIHJlYWN0aW9uICdcIiArIHRoaXMubmFtZV8gKyBcIicgc3VwcHJlc3NlZCwgZml4IGVycm9yIG9mIGNhdXNpbmcgYWN0aW9uIGJlbG93KVwiKTsgLy8gcHJldHRpZXItaWdub3JlXG5cblxuICAgIGlmIChOT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgJiYgaXNTcHlFbmFibGVkKCkpIHtcbiAgICAgIHNweVJlcG9ydCh7XG4gICAgICAgIHR5cGU6IFwiZXJyb3JcIixcbiAgICAgICAgbmFtZTogdGhpcy5uYW1lXyxcbiAgICAgICAgbWVzc2FnZTogbWVzc2FnZSxcbiAgICAgICAgZXJyb3I6IFwiXCIgKyBlcnJvclxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgZ2xvYmFsU3RhdGUuZ2xvYmFsUmVhY3Rpb25FcnJvckhhbmRsZXJzLmZvckVhY2goZnVuY3Rpb24gKGYpIHtcbiAgICAgIHJldHVybiBmKGVycm9yLCBfdGhpcyk7XG4gICAgfSk7XG4gIH07XG5cbiAgX3Byb3RvLmRpc3Bvc2UgPSBmdW5jdGlvbiBkaXNwb3NlKCkge1xuICAgIGlmICghdGhpcy5pc0Rpc3Bvc2VkXykge1xuICAgICAgdGhpcy5pc0Rpc3Bvc2VkXyA9IHRydWU7XG5cbiAgICAgIGlmICghdGhpcy5pc1J1bm5pbmdfKSB7XG4gICAgICAgIC8vIGlmIGRpc3Bvc2VkIHdoaWxlIHJ1bm5pbmcsIGNsZWFuIHVwIGxhdGVyLiBNYXliZSBub3Qgb3B0aW1hbCwgYnV0IHJhcmUgY2FzZVxuICAgICAgICBzdGFydEJhdGNoKCk7XG4gICAgICAgIGNsZWFyT2JzZXJ2aW5nKHRoaXMpO1xuICAgICAgICBlbmRCYXRjaCgpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBfcHJvdG8uZ2V0RGlzcG9zZXJfID0gZnVuY3Rpb24gZ2V0RGlzcG9zZXJfKCkge1xuICAgIHZhciByID0gdGhpcy5kaXNwb3NlLmJpbmQodGhpcyk7XG4gICAgclskbW9ieF0gPSB0aGlzO1xuICAgIHJldHVybiByO1xuICB9O1xuXG4gIF9wcm90by50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiBcIlJlYWN0aW9uW1wiICsgdGhpcy5uYW1lXyArIFwiXVwiO1xuICB9O1xuXG4gIF9wcm90by50cmFjZSA9IGZ1bmN0aW9uIHRyYWNlJDEoZW50ZXJCcmVha1BvaW50KSB7XG4gICAgaWYgKGVudGVyQnJlYWtQb2ludCA9PT0gdm9pZCAwKSB7XG4gICAgICBlbnRlckJyZWFrUG9pbnQgPSBmYWxzZTtcbiAgICB9XG5cbiAgICB0cmFjZSh0aGlzLCBlbnRlckJyZWFrUG9pbnQpO1xuICB9O1xuXG4gIHJldHVybiBSZWFjdGlvbjtcbn0oKTtcbmZ1bmN0aW9uIG9uUmVhY3Rpb25FcnJvcihoYW5kbGVyKSB7XG4gIGdsb2JhbFN0YXRlLmdsb2JhbFJlYWN0aW9uRXJyb3JIYW5kbGVycy5wdXNoKGhhbmRsZXIpO1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHZhciBpZHggPSBnbG9iYWxTdGF0ZS5nbG9iYWxSZWFjdGlvbkVycm9ySGFuZGxlcnMuaW5kZXhPZihoYW5kbGVyKTtcbiAgICBpZiAoaWR4ID49IDApIGdsb2JhbFN0YXRlLmdsb2JhbFJlYWN0aW9uRXJyb3JIYW5kbGVycy5zcGxpY2UoaWR4LCAxKTtcbiAgfTtcbn1cbi8qKlxuICogTWFnaWMgbnVtYmVyIGFsZXJ0IVxuICogRGVmaW5lcyB3aXRoaW4gaG93IG1hbnkgdGltZXMgYSByZWFjdGlvbiBpcyBhbGxvd2VkIHRvIHJlLXRyaWdnZXIgaXRzZWxmXG4gKiB1bnRpbCBpdCBpcyBhc3N1bWVkIHRoYXQgdGhpcyBpcyBnb25uYSBiZSBhIG5ldmVyIGVuZGluZyBsb29wLi4uXG4gKi9cblxudmFyIE1BWF9SRUFDVElPTl9JVEVSQVRJT05TID0gMTAwO1xuXG52YXIgcmVhY3Rpb25TY2hlZHVsZXIgPSBmdW5jdGlvbiByZWFjdGlvblNjaGVkdWxlcihmKSB7XG4gIHJldHVybiBmKCk7XG59O1xuXG5mdW5jdGlvbiBydW5SZWFjdGlvbnMoKSB7XG4gIC8vIFRyYW1wb2xpbmluZywgaWYgcnVuUmVhY3Rpb25zIGFyZSBhbHJlYWR5IHJ1bm5pbmcsIG5ldyByZWFjdGlvbnMgd2lsbCBiZSBwaWNrZWQgdXBcbiAgaWYgKGdsb2JhbFN0YXRlLmluQmF0Y2ggPiAwIHx8IGdsb2JhbFN0YXRlLmlzUnVubmluZ1JlYWN0aW9ucykgcmV0dXJuO1xuICByZWFjdGlvblNjaGVkdWxlcihydW5SZWFjdGlvbnNIZWxwZXIpO1xufVxuXG5mdW5jdGlvbiBydW5SZWFjdGlvbnNIZWxwZXIoKSB7XG4gIGdsb2JhbFN0YXRlLmlzUnVubmluZ1JlYWN0aW9ucyA9IHRydWU7XG4gIHZhciBhbGxSZWFjdGlvbnMgPSBnbG9iYWxTdGF0ZS5wZW5kaW5nUmVhY3Rpb25zO1xuICB2YXIgaXRlcmF0aW9ucyA9IDA7IC8vIFdoaWxlIHJ1bm5pbmcgcmVhY3Rpb25zLCBuZXcgcmVhY3Rpb25zIG1pZ2h0IGJlIHRyaWdnZXJlZC5cbiAgLy8gSGVuY2Ugd2Ugd29yayB3aXRoIHR3byB2YXJpYWJsZXMgYW5kIGNoZWNrIHdoZXRoZXJcbiAgLy8gd2UgY29udmVyZ2UgdG8gbm8gcmVtYWluaW5nIHJlYWN0aW9ucyBhZnRlciBhIHdoaWxlLlxuXG4gIHdoaWxlIChhbGxSZWFjdGlvbnMubGVuZ3RoID4gMCkge1xuICAgIGlmICgrK2l0ZXJhdGlvbnMgPT09IE1BWF9SRUFDVElPTl9JVEVSQVRJT05TKSB7XG4gICAgICBjb25zb2xlLmVycm9yKE5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IFwiUmVhY3Rpb24gZG9lc24ndCBjb252ZXJnZSB0byBhIHN0YWJsZSBzdGF0ZSBhZnRlciBcIiArIE1BWF9SRUFDVElPTl9JVEVSQVRJT05TICsgXCIgaXRlcmF0aW9ucy5cIiArIChcIiBQcm9iYWJseSB0aGVyZSBpcyBhIGN5Y2xlIGluIHRoZSByZWFjdGl2ZSBmdW5jdGlvbjogXCIgKyBhbGxSZWFjdGlvbnNbMF0pIDogXCJbbW9ieF0gY3ljbGUgaW4gcmVhY3Rpb246IFwiICsgYWxsUmVhY3Rpb25zWzBdKTtcbiAgICAgIGFsbFJlYWN0aW9ucy5zcGxpY2UoMCk7IC8vIGNsZWFyIHJlYWN0aW9uc1xuICAgIH1cblxuICAgIHZhciByZW1haW5pbmdSZWFjdGlvbnMgPSBhbGxSZWFjdGlvbnMuc3BsaWNlKDApO1xuXG4gICAgZm9yICh2YXIgaSA9IDAsIGwgPSByZW1haW5pbmdSZWFjdGlvbnMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICByZW1haW5pbmdSZWFjdGlvbnNbaV0ucnVuUmVhY3Rpb25fKCk7XG4gICAgfVxuICB9XG5cbiAgZ2xvYmFsU3RhdGUuaXNSdW5uaW5nUmVhY3Rpb25zID0gZmFsc2U7XG59XG5cbnZhciBpc1JlYWN0aW9uID0gLyojX19QVVJFX18qL2NyZWF0ZUluc3RhbmNlb2ZQcmVkaWNhdGUoXCJSZWFjdGlvblwiLCBSZWFjdGlvbik7XG5mdW5jdGlvbiBzZXRSZWFjdGlvblNjaGVkdWxlcihmbikge1xuICB2YXIgYmFzZVNjaGVkdWxlciA9IHJlYWN0aW9uU2NoZWR1bGVyO1xuXG4gIHJlYWN0aW9uU2NoZWR1bGVyID0gZnVuY3Rpb24gcmVhY3Rpb25TY2hlZHVsZXIoZikge1xuICAgIHJldHVybiBmbihmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gYmFzZVNjaGVkdWxlcihmKTtcbiAgICB9KTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gaXNTcHlFbmFibGVkKCkge1xuICByZXR1cm4gTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiICYmICEhZ2xvYmFsU3RhdGUuc3B5TGlzdGVuZXJzLmxlbmd0aDtcbn1cbmZ1bmN0aW9uIHNweVJlcG9ydChldmVudCkge1xuICBpZiAoIShOT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpKSByZXR1cm47IC8vIGRlYWQgY29kZSBlbGltaW5hdGlvbiBjYW4gZG8gdGhlIHJlc3RcblxuICBpZiAoIWdsb2JhbFN0YXRlLnNweUxpc3RlbmVycy5sZW5ndGgpIHJldHVybjtcbiAgdmFyIGxpc3RlbmVycyA9IGdsb2JhbFN0YXRlLnNweUxpc3RlbmVycztcblxuICBmb3IgKHZhciBpID0gMCwgbCA9IGxpc3RlbmVycy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBsaXN0ZW5lcnNbaV0oZXZlbnQpO1xuICB9XG59XG5mdW5jdGlvbiBzcHlSZXBvcnRTdGFydChldmVudCkge1xuICBpZiAoIShOT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpKSByZXR1cm47XG5cbiAgdmFyIGNoYW5nZSA9IF9leHRlbmRzKHt9LCBldmVudCwge1xuICAgIHNweVJlcG9ydFN0YXJ0OiB0cnVlXG4gIH0pO1xuXG4gIHNweVJlcG9ydChjaGFuZ2UpO1xufVxudmFyIEVORF9FVkVOVCA9IHtcbiAgdHlwZTogXCJyZXBvcnQtZW5kXCIsXG4gIHNweVJlcG9ydEVuZDogdHJ1ZVxufTtcbmZ1bmN0aW9uIHNweVJlcG9ydEVuZChjaGFuZ2UpIHtcbiAgaWYgKCEoTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSkgcmV0dXJuO1xuICBpZiAoY2hhbmdlKSBzcHlSZXBvcnQoX2V4dGVuZHMoe30sIGNoYW5nZSwge1xuICAgIHR5cGU6IFwicmVwb3J0LWVuZFwiLFxuICAgIHNweVJlcG9ydEVuZDogdHJ1ZVxuICB9KSk7ZWxzZSBzcHlSZXBvcnQoRU5EX0VWRU5UKTtcbn1cbmZ1bmN0aW9uIHNweShsaXN0ZW5lcikge1xuICBpZiAoIShOT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpKSB7XG4gICAgY29uc29sZS53YXJuKFwiW21vYnguc3B5XSBJcyBhIG5vLW9wIGluIHByb2R1Y3Rpb24gYnVpbGRzXCIpO1xuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7fTtcbiAgfSBlbHNlIHtcbiAgICBnbG9iYWxTdGF0ZS5zcHlMaXN0ZW5lcnMucHVzaChsaXN0ZW5lcik7XG4gICAgcmV0dXJuIG9uY2UoZnVuY3Rpb24gKCkge1xuICAgICAgZ2xvYmFsU3RhdGUuc3B5TGlzdGVuZXJzID0gZ2xvYmFsU3RhdGUuc3B5TGlzdGVuZXJzLmZpbHRlcihmdW5jdGlvbiAobCkge1xuICAgICAgICByZXR1cm4gbCAhPT0gbGlzdGVuZXI7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxufVxuXG52YXIgQUNUSU9OID0gXCJhY3Rpb25cIjtcbnZhciBBQ1RJT05fQk9VTkQgPSBcImFjdGlvbi5ib3VuZFwiO1xudmFyIEFVVE9BQ1RJT04gPSBcImF1dG9BY3Rpb25cIjtcbnZhciBBVVRPQUNUSU9OX0JPVU5EID0gXCJhdXRvQWN0aW9uLmJvdW5kXCI7XG52YXIgREVGQVVMVF9BQ1RJT05fTkFNRSA9IFwiPHVubmFtZWQgYWN0aW9uPlwiO1xudmFyIGFjdGlvbkFubm90YXRpb24gPSAvKiNfX1BVUkVfXyovY3JlYXRlQWN0aW9uQW5ub3RhdGlvbihBQ1RJT04pO1xudmFyIGFjdGlvbkJvdW5kQW5ub3RhdGlvbiA9IC8qI19fUFVSRV9fKi9jcmVhdGVBY3Rpb25Bbm5vdGF0aW9uKEFDVElPTl9CT1VORCwge1xuICBib3VuZDogdHJ1ZVxufSk7XG52YXIgYXV0b0FjdGlvbkFubm90YXRpb24gPSAvKiNfX1BVUkVfXyovY3JlYXRlQWN0aW9uQW5ub3RhdGlvbihBVVRPQUNUSU9OLCB7XG4gIGF1dG9BY3Rpb246IHRydWVcbn0pO1xudmFyIGF1dG9BY3Rpb25Cb3VuZEFubm90YXRpb24gPSAvKiNfX1BVUkVfXyovY3JlYXRlQWN0aW9uQW5ub3RhdGlvbihBVVRPQUNUSU9OX0JPVU5ELCB7XG4gIGF1dG9BY3Rpb246IHRydWUsXG4gIGJvdW5kOiB0cnVlXG59KTtcblxuZnVuY3Rpb24gY3JlYXRlQWN0aW9uRmFjdG9yeShhdXRvQWN0aW9uKSB7XG4gIHZhciByZXMgPSBmdW5jdGlvbiBhY3Rpb24oYXJnMSwgYXJnMikge1xuICAgIC8vIGFjdGlvbihmbigpIHt9KVxuICAgIGlmIChpc0Z1bmN0aW9uKGFyZzEpKSByZXR1cm4gY3JlYXRlQWN0aW9uKGFyZzEubmFtZSB8fCBERUZBVUxUX0FDVElPTl9OQU1FLCBhcmcxLCBhdXRvQWN0aW9uKTsgLy8gYWN0aW9uKFwibmFtZVwiLCBmbigpIHt9KVxuXG4gICAgaWYgKGlzRnVuY3Rpb24oYXJnMikpIHJldHVybiBjcmVhdGVBY3Rpb24oYXJnMSwgYXJnMiwgYXV0b0FjdGlvbik7IC8vIEBhY3Rpb25cblxuICAgIGlmIChpc1N0cmluZ2lzaChhcmcyKSkge1xuICAgICAgcmV0dXJuIHN0b3JlQW5ub3RhdGlvbihhcmcxLCBhcmcyLCBhdXRvQWN0aW9uID8gYXV0b0FjdGlvbkFubm90YXRpb24gOiBhY3Rpb25Bbm5vdGF0aW9uKTtcbiAgICB9IC8vIGFjdGlvbihcIm5hbWVcIikgJiBAYWN0aW9uKFwibmFtZVwiKVxuXG5cbiAgICBpZiAoaXNTdHJpbmdpc2goYXJnMSkpIHtcbiAgICAgIHJldHVybiBjcmVhdGVEZWNvcmF0b3JBbm5vdGF0aW9uKGNyZWF0ZUFjdGlvbkFubm90YXRpb24oYXV0b0FjdGlvbiA/IEFVVE9BQ1RJT04gOiBBQ1RJT04sIHtcbiAgICAgICAgbmFtZTogYXJnMSxcbiAgICAgICAgYXV0b0FjdGlvbjogYXV0b0FjdGlvblxuICAgICAgfSkpO1xuICAgIH1cblxuICAgIGlmIChOT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIGRpZShcIkludmFsaWQgYXJndW1lbnRzIGZvciBgYWN0aW9uYFwiKTtcbiAgfTtcblxuICByZXR1cm4gcmVzO1xufVxuXG52YXIgYWN0aW9uID0gLyojX19QVVJFX18qL2NyZWF0ZUFjdGlvbkZhY3RvcnkoZmFsc2UpO1xuT2JqZWN0LmFzc2lnbihhY3Rpb24sIGFjdGlvbkFubm90YXRpb24pO1xudmFyIGF1dG9BY3Rpb24gPSAvKiNfX1BVUkVfXyovY3JlYXRlQWN0aW9uRmFjdG9yeSh0cnVlKTtcbk9iamVjdC5hc3NpZ24oYXV0b0FjdGlvbiwgYXV0b0FjdGlvbkFubm90YXRpb24pO1xuYWN0aW9uLmJvdW5kID0gLyojX19QVVJFX18qL2NyZWF0ZURlY29yYXRvckFubm90YXRpb24oYWN0aW9uQm91bmRBbm5vdGF0aW9uKTtcbmF1dG9BY3Rpb24uYm91bmQgPSAvKiNfX1BVUkVfXyovY3JlYXRlRGVjb3JhdG9yQW5ub3RhdGlvbihhdXRvQWN0aW9uQm91bmRBbm5vdGF0aW9uKTtcbmZ1bmN0aW9uIHJ1bkluQWN0aW9uKGZuKSB7XG4gIHJldHVybiBleGVjdXRlQWN0aW9uKGZuLm5hbWUgfHwgREVGQVVMVF9BQ1RJT05fTkFNRSwgZmFsc2UsIGZuLCB0aGlzLCB1bmRlZmluZWQpO1xufVxuZnVuY3Rpb24gaXNBY3Rpb24odGhpbmcpIHtcbiAgcmV0dXJuIGlzRnVuY3Rpb24odGhpbmcpICYmIHRoaW5nLmlzTW9ieEFjdGlvbiA9PT0gdHJ1ZTtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgbmFtZWQgcmVhY3RpdmUgdmlldyBhbmQga2VlcHMgaXQgYWxpdmUsIHNvIHRoYXQgdGhlIHZpZXcgaXMgYWx3YXlzXG4gKiB1cGRhdGVkIGlmIG9uZSBvZiB0aGUgZGVwZW5kZW5jaWVzIGNoYW5nZXMsIGV2ZW4gd2hlbiB0aGUgdmlldyBpcyBub3QgZnVydGhlciB1c2VkIGJ5IHNvbWV0aGluZyBlbHNlLlxuICogQHBhcmFtIHZpZXcgVGhlIHJlYWN0aXZlIHZpZXdcbiAqIEByZXR1cm5zIGRpc3Bvc2VyIGZ1bmN0aW9uLCB3aGljaCBjYW4gYmUgdXNlZCB0byBzdG9wIHRoZSB2aWV3IGZyb20gYmVpbmcgdXBkYXRlZCBpbiB0aGUgZnV0dXJlLlxuICovXG5cbmZ1bmN0aW9uIGF1dG9ydW4odmlldywgb3B0cykge1xuICB2YXIgX29wdHMkbmFtZSwgX29wdHM7XG5cbiAgaWYgKG9wdHMgPT09IHZvaWQgMCkge1xuICAgIG9wdHMgPSBFTVBUWV9PQkpFQ1Q7XG4gIH1cblxuICBpZiAoTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gICAgaWYgKCFpc0Z1bmN0aW9uKHZpZXcpKSBkaWUoXCJBdXRvcnVuIGV4cGVjdHMgYSBmdW5jdGlvbiBhcyBmaXJzdCBhcmd1bWVudFwiKTtcbiAgICBpZiAoaXNBY3Rpb24odmlldykpIGRpZShcIkF1dG9ydW4gZG9lcyBub3QgYWNjZXB0IGFjdGlvbnMgc2luY2UgYWN0aW9ucyBhcmUgdW50cmFja2FibGVcIik7XG4gIH1cblxuICB2YXIgbmFtZSA9IChfb3B0cyRuYW1lID0gKF9vcHRzID0gb3B0cykgPT0gbnVsbCA/IHZvaWQgMCA6IF9vcHRzLm5hbWUpICE9IG51bGwgPyBfb3B0cyRuYW1lIDogTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gdmlldy5uYW1lIHx8IFwiQXV0b3J1bkBcIiArIGdldE5leHRJZCgpIDogXCJBdXRvcnVuXCI7XG4gIHZhciBydW5TeW5jID0gIW9wdHMuc2NoZWR1bGVyICYmICFvcHRzLmRlbGF5O1xuICB2YXIgcmVhY3Rpb247XG5cbiAgaWYgKHJ1blN5bmMpIHtcbiAgICAvLyBub3JtYWwgYXV0b3J1blxuICAgIHJlYWN0aW9uID0gbmV3IFJlYWN0aW9uKG5hbWUsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHRoaXMudHJhY2socmVhY3Rpb25SdW5uZXIpO1xuICAgIH0sIG9wdHMub25FcnJvciwgb3B0cy5yZXF1aXJlc09ic2VydmFibGUpO1xuICB9IGVsc2Uge1xuICAgIHZhciBzY2hlZHVsZXIgPSBjcmVhdGVTY2hlZHVsZXJGcm9tT3B0aW9ucyhvcHRzKTsgLy8gZGVib3VuY2VkIGF1dG9ydW5cblxuICAgIHZhciBpc1NjaGVkdWxlZCA9IGZhbHNlO1xuICAgIHJlYWN0aW9uID0gbmV3IFJlYWN0aW9uKG5hbWUsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmICghaXNTY2hlZHVsZWQpIHtcbiAgICAgICAgaXNTY2hlZHVsZWQgPSB0cnVlO1xuICAgICAgICBzY2hlZHVsZXIoZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGlzU2NoZWR1bGVkID0gZmFsc2U7XG4gICAgICAgICAgaWYgKCFyZWFjdGlvbi5pc0Rpc3Bvc2VkXykgcmVhY3Rpb24udHJhY2socmVhY3Rpb25SdW5uZXIpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9LCBvcHRzLm9uRXJyb3IsIG9wdHMucmVxdWlyZXNPYnNlcnZhYmxlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlYWN0aW9uUnVubmVyKCkge1xuICAgIHZpZXcocmVhY3Rpb24pO1xuICB9XG5cbiAgcmVhY3Rpb24uc2NoZWR1bGVfKCk7XG4gIHJldHVybiByZWFjdGlvbi5nZXREaXNwb3Nlcl8oKTtcbn1cblxudmFyIHJ1biA9IGZ1bmN0aW9uIHJ1bihmKSB7XG4gIHJldHVybiBmKCk7XG59O1xuXG5mdW5jdGlvbiBjcmVhdGVTY2hlZHVsZXJGcm9tT3B0aW9ucyhvcHRzKSB7XG4gIHJldHVybiBvcHRzLnNjaGVkdWxlciA/IG9wdHMuc2NoZWR1bGVyIDogb3B0cy5kZWxheSA/IGZ1bmN0aW9uIChmKSB7XG4gICAgcmV0dXJuIHNldFRpbWVvdXQoZiwgb3B0cy5kZWxheSk7XG4gIH0gOiBydW47XG59XG5cbmZ1bmN0aW9uIHJlYWN0aW9uKGV4cHJlc3Npb24sIGVmZmVjdCwgb3B0cykge1xuICB2YXIgX29wdHMkbmFtZTI7XG5cbiAgaWYgKG9wdHMgPT09IHZvaWQgMCkge1xuICAgIG9wdHMgPSBFTVBUWV9PQkpFQ1Q7XG4gIH1cblxuICBpZiAoTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gICAgaWYgKCFpc0Z1bmN0aW9uKGV4cHJlc3Npb24pIHx8ICFpc0Z1bmN0aW9uKGVmZmVjdCkpIGRpZShcIkZpcnN0IGFuZCBzZWNvbmQgYXJndW1lbnQgdG8gcmVhY3Rpb24gc2hvdWxkIGJlIGZ1bmN0aW9uc1wiKTtcbiAgICBpZiAoIWlzUGxhaW5PYmplY3Qob3B0cykpIGRpZShcIlRoaXJkIGFyZ3VtZW50IG9mIHJlYWN0aW9ucyBzaG91bGQgYmUgYW4gb2JqZWN0XCIpO1xuICB9XG5cbiAgdmFyIG5hbWUgPSAoX29wdHMkbmFtZTIgPSBvcHRzLm5hbWUpICE9IG51bGwgPyBfb3B0cyRuYW1lMiA6IE5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IFwiUmVhY3Rpb25AXCIgKyBnZXROZXh0SWQoKSA6IFwiUmVhY3Rpb25cIjtcbiAgdmFyIGVmZmVjdEFjdGlvbiA9IGFjdGlvbihuYW1lLCBvcHRzLm9uRXJyb3IgPyB3cmFwRXJyb3JIYW5kbGVyKG9wdHMub25FcnJvciwgZWZmZWN0KSA6IGVmZmVjdCk7XG4gIHZhciBydW5TeW5jID0gIW9wdHMuc2NoZWR1bGVyICYmICFvcHRzLmRlbGF5O1xuICB2YXIgc2NoZWR1bGVyID0gY3JlYXRlU2NoZWR1bGVyRnJvbU9wdGlvbnMob3B0cyk7XG4gIHZhciBmaXJzdFRpbWUgPSB0cnVlO1xuICB2YXIgaXNTY2hlZHVsZWQgPSBmYWxzZTtcbiAgdmFyIHZhbHVlO1xuICB2YXIgb2xkVmFsdWUgPSB1bmRlZmluZWQ7IC8vIG9ubHkgYW4gaXNzdWUgd2l0aCBmaXJlSW1tZWRpYXRlbHlcblxuICB2YXIgZXF1YWxzID0gb3B0cy5jb21wYXJlU3RydWN0dXJhbCA/IGNvbXBhcmVyLnN0cnVjdHVyYWwgOiBvcHRzLmVxdWFscyB8fCBjb21wYXJlcltcImRlZmF1bHRcIl07XG4gIHZhciByID0gbmV3IFJlYWN0aW9uKG5hbWUsIGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoZmlyc3RUaW1lIHx8IHJ1blN5bmMpIHtcbiAgICAgIHJlYWN0aW9uUnVubmVyKCk7XG4gICAgfSBlbHNlIGlmICghaXNTY2hlZHVsZWQpIHtcbiAgICAgIGlzU2NoZWR1bGVkID0gdHJ1ZTtcbiAgICAgIHNjaGVkdWxlcihyZWFjdGlvblJ1bm5lcik7XG4gICAgfVxuICB9LCBvcHRzLm9uRXJyb3IsIG9wdHMucmVxdWlyZXNPYnNlcnZhYmxlKTtcblxuICBmdW5jdGlvbiByZWFjdGlvblJ1bm5lcigpIHtcbiAgICBpc1NjaGVkdWxlZCA9IGZhbHNlO1xuICAgIGlmIChyLmlzRGlzcG9zZWRfKSByZXR1cm47XG4gICAgdmFyIGNoYW5nZWQgPSBmYWxzZTtcbiAgICByLnRyYWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBuZXh0VmFsdWUgPSBhbGxvd1N0YXRlQ2hhbmdlcyhmYWxzZSwgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gZXhwcmVzc2lvbihyKTtcbiAgICAgIH0pO1xuICAgICAgY2hhbmdlZCA9IGZpcnN0VGltZSB8fCAhZXF1YWxzKHZhbHVlLCBuZXh0VmFsdWUpO1xuICAgICAgb2xkVmFsdWUgPSB2YWx1ZTtcbiAgICAgIHZhbHVlID0gbmV4dFZhbHVlO1xuICAgIH0pO1xuICAgIGlmIChmaXJzdFRpbWUgJiYgb3B0cy5maXJlSW1tZWRpYXRlbHkpIGVmZmVjdEFjdGlvbih2YWx1ZSwgb2xkVmFsdWUsIHIpO2Vsc2UgaWYgKCFmaXJzdFRpbWUgJiYgY2hhbmdlZCkgZWZmZWN0QWN0aW9uKHZhbHVlLCBvbGRWYWx1ZSwgcik7XG4gICAgZmlyc3RUaW1lID0gZmFsc2U7XG4gIH1cblxuICByLnNjaGVkdWxlXygpO1xuICByZXR1cm4gci5nZXREaXNwb3Nlcl8oKTtcbn1cblxuZnVuY3Rpb24gd3JhcEVycm9ySGFuZGxlcihlcnJvckhhbmRsZXIsIGJhc2VGbikge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4gYmFzZUZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgZXJyb3JIYW5kbGVyLmNhbGwodGhpcywgZSk7XG4gICAgfVxuICB9O1xufVxuXG52YXIgT05fQkVDT01FX09CU0VSVkVEID0gXCJvbkJPXCI7XG52YXIgT05fQkVDT01FX1VOT0JTRVJWRUQgPSBcIm9uQlVPXCI7XG5mdW5jdGlvbiBvbkJlY29tZU9ic2VydmVkKHRoaW5nLCBhcmcyLCBhcmczKSB7XG4gIHJldHVybiBpbnRlcmNlcHRIb29rKE9OX0JFQ09NRV9PQlNFUlZFRCwgdGhpbmcsIGFyZzIsIGFyZzMpO1xufVxuZnVuY3Rpb24gb25CZWNvbWVVbm9ic2VydmVkKHRoaW5nLCBhcmcyLCBhcmczKSB7XG4gIHJldHVybiBpbnRlcmNlcHRIb29rKE9OX0JFQ09NRV9VTk9CU0VSVkVELCB0aGluZywgYXJnMiwgYXJnMyk7XG59XG5cbmZ1bmN0aW9uIGludGVyY2VwdEhvb2soaG9vaywgdGhpbmcsIGFyZzIsIGFyZzMpIHtcbiAgdmFyIGF0b20gPSB0eXBlb2YgYXJnMyA9PT0gXCJmdW5jdGlvblwiID8gZ2V0QXRvbSh0aGluZywgYXJnMikgOiBnZXRBdG9tKHRoaW5nKTtcbiAgdmFyIGNiID0gaXNGdW5jdGlvbihhcmczKSA/IGFyZzMgOiBhcmcyO1xuICB2YXIgbGlzdGVuZXJzS2V5ID0gaG9vayArIFwiTFwiO1xuXG4gIGlmIChhdG9tW2xpc3RlbmVyc0tleV0pIHtcbiAgICBhdG9tW2xpc3RlbmVyc0tleV0uYWRkKGNiKTtcbiAgfSBlbHNlIHtcbiAgICBhdG9tW2xpc3RlbmVyc0tleV0gPSBuZXcgU2V0KFtjYl0pO1xuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgaG9va0xpc3RlbmVycyA9IGF0b21bbGlzdGVuZXJzS2V5XTtcblxuICAgIGlmIChob29rTGlzdGVuZXJzKSB7XG4gICAgICBob29rTGlzdGVuZXJzW1wiZGVsZXRlXCJdKGNiKTtcblxuICAgICAgaWYgKGhvb2tMaXN0ZW5lcnMuc2l6ZSA9PT0gMCkge1xuICAgICAgICBkZWxldGUgYXRvbVtsaXN0ZW5lcnNLZXldO1xuICAgICAgfVxuICAgIH1cbiAgfTtcbn1cblxudmFyIE5FVkVSID0gXCJuZXZlclwiO1xudmFyIEFMV0FZUyA9IFwiYWx3YXlzXCI7XG52YXIgT0JTRVJWRUQgPSBcIm9ic2VydmVkXCI7IC8vIGNvbnN0IElGX0FWQUlMQUJMRSA9IFwiaWZhdmFpbGFibGVcIlxuXG5mdW5jdGlvbiBjb25maWd1cmUob3B0aW9ucykge1xuICBpZiAob3B0aW9ucy5pc29sYXRlR2xvYmFsU3RhdGUgPT09IHRydWUpIHtcbiAgICBpc29sYXRlR2xvYmFsU3RhdGUoKTtcbiAgfVxuXG4gIHZhciB1c2VQcm94aWVzID0gb3B0aW9ucy51c2VQcm94aWVzLFxuICAgICAgZW5mb3JjZUFjdGlvbnMgPSBvcHRpb25zLmVuZm9yY2VBY3Rpb25zO1xuXG4gIGlmICh1c2VQcm94aWVzICE9PSB1bmRlZmluZWQpIHtcbiAgICBnbG9iYWxTdGF0ZS51c2VQcm94aWVzID0gdXNlUHJveGllcyA9PT0gQUxXQVlTID8gdHJ1ZSA6IHVzZVByb3hpZXMgPT09IE5FVkVSID8gZmFsc2UgOiB0eXBlb2YgUHJveHkgIT09IFwidW5kZWZpbmVkXCI7XG4gIH1cblxuICBpZiAodXNlUHJveGllcyA9PT0gXCJpZmF2YWlsYWJsZVwiKSBnbG9iYWxTdGF0ZS52ZXJpZnlQcm94aWVzID0gdHJ1ZTtcblxuICBpZiAoZW5mb3JjZUFjdGlvbnMgIT09IHVuZGVmaW5lZCkge1xuICAgIHZhciBlYSA9IGVuZm9yY2VBY3Rpb25zID09PSBBTFdBWVMgPyBBTFdBWVMgOiBlbmZvcmNlQWN0aW9ucyA9PT0gT0JTRVJWRUQ7XG4gICAgZ2xvYmFsU3RhdGUuZW5mb3JjZUFjdGlvbnMgPSBlYTtcbiAgICBnbG9iYWxTdGF0ZS5hbGxvd1N0YXRlQ2hhbmdlcyA9IGVhID09PSB0cnVlIHx8IGVhID09PSBBTFdBWVMgPyBmYWxzZSA6IHRydWU7XG4gIH1cbiAgW1wiY29tcHV0ZWRSZXF1aXJlc1JlYWN0aW9uXCIsIFwicmVhY3Rpb25SZXF1aXJlc09ic2VydmFibGVcIiwgXCJvYnNlcnZhYmxlUmVxdWlyZXNSZWFjdGlvblwiLCBcImRpc2FibGVFcnJvckJvdW5kYXJpZXNcIiwgXCJzYWZlRGVzY3JpcHRvcnNcIl0uZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgaWYgKGtleSBpbiBvcHRpb25zKSBnbG9iYWxTdGF0ZVtrZXldID0gISFvcHRpb25zW2tleV07XG4gIH0pO1xuICBnbG9iYWxTdGF0ZS5hbGxvd1N0YXRlUmVhZHMgPSAhZ2xvYmFsU3RhdGUub2JzZXJ2YWJsZVJlcXVpcmVzUmVhY3Rpb247XG5cbiAgaWYgKE5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiAmJiBnbG9iYWxTdGF0ZS5kaXNhYmxlRXJyb3JCb3VuZGFyaWVzID09PSB0cnVlKSB7XG4gICAgY29uc29sZS53YXJuKFwiV0FSTklORzogRGVidWcgZmVhdHVyZSBvbmx5LiBNb2JYIHdpbGwgTk9UIHJlY292ZXIgZnJvbSBlcnJvcnMgd2hlbiBgZGlzYWJsZUVycm9yQm91bmRhcmllc2AgaXMgZW5hYmxlZC5cIik7XG4gIH1cblxuICBpZiAob3B0aW9ucy5yZWFjdGlvblNjaGVkdWxlcikge1xuICAgIHNldFJlYWN0aW9uU2NoZWR1bGVyKG9wdGlvbnMucmVhY3Rpb25TY2hlZHVsZXIpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGV4dGVuZE9ic2VydmFibGUodGFyZ2V0LCBwcm9wZXJ0aWVzLCBhbm5vdGF0aW9ucywgb3B0aW9ucykge1xuICBpZiAoTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiA0KSBkaWUoXCInZXh0ZW5kT2JzZXJ2YWJsZScgZXhwZWN0ZWQgMi00IGFyZ3VtZW50c1wiKTtcbiAgICBpZiAodHlwZW9mIHRhcmdldCAhPT0gXCJvYmplY3RcIikgZGllKFwiJ2V4dGVuZE9ic2VydmFibGUnIGV4cGVjdHMgYW4gb2JqZWN0IGFzIGZpcnN0IGFyZ3VtZW50XCIpO1xuICAgIGlmIChpc09ic2VydmFibGVNYXAodGFyZ2V0KSkgZGllKFwiJ2V4dGVuZE9ic2VydmFibGUnIHNob3VsZCBub3QgYmUgdXNlZCBvbiBtYXBzLCB1c2UgbWFwLm1lcmdlIGluc3RlYWRcIik7XG4gICAgaWYgKCFpc1BsYWluT2JqZWN0KHByb3BlcnRpZXMpKSBkaWUoXCInZXh0ZW5kT2JzZXJ2YWJlJyBvbmx5IGFjY2VwdHMgcGxhaW4gb2JqZWN0cyBhcyBzZWNvbmQgYXJndW1lbnRcIik7XG4gICAgaWYgKGlzT2JzZXJ2YWJsZShwcm9wZXJ0aWVzKSB8fCBpc09ic2VydmFibGUoYW5ub3RhdGlvbnMpKSBkaWUoXCJFeHRlbmRpbmcgYW4gb2JqZWN0IHdpdGggYW5vdGhlciBvYnNlcnZhYmxlIChvYmplY3QpIGlzIG5vdCBzdXBwb3J0ZWRcIik7XG4gIH0gLy8gUHVsbCBkZXNjcmlwdG9ycyBmaXJzdCwgc28gd2UgZG9uJ3QgaGF2ZSB0byBkZWFsIHdpdGggcHJvcHMgYWRkZWQgYnkgYWRtaW5pc3RyYXRpb24gKCRtb2J4KVxuXG5cbiAgdmFyIGRlc2NyaXB0b3JzID0gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyhwcm9wZXJ0aWVzKTtcbiAgdmFyIGFkbSA9IGFzT2JzZXJ2YWJsZU9iamVjdCh0YXJnZXQsIG9wdGlvbnMpWyRtb2J4XTtcbiAgc3RhcnRCYXRjaCgpO1xuXG4gIHRyeSB7XG4gICAgb3duS2V5cyhkZXNjcmlwdG9ycykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICBhZG0uZXh0ZW5kXyhrZXksIGRlc2NyaXB0b3JzW2tleV0sIC8vIG11c3QgcGFzcyBcInVuZGVmaW5lZFwiIGZvciB7IGtleTogdW5kZWZpbmVkIH1cbiAgICAgICFhbm5vdGF0aW9ucyA/IHRydWUgOiBrZXkgaW4gYW5ub3RhdGlvbnMgPyBhbm5vdGF0aW9uc1trZXldIDogdHJ1ZSk7XG4gICAgfSk7XG4gIH0gZmluYWxseSB7XG4gICAgZW5kQmF0Y2goKTtcbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59XG5cbmZ1bmN0aW9uIGdldERlcGVuZGVuY3lUcmVlKHRoaW5nLCBwcm9wZXJ0eSkge1xuICByZXR1cm4gbm9kZVRvRGVwZW5kZW5jeVRyZWUoZ2V0QXRvbSh0aGluZywgcHJvcGVydHkpKTtcbn1cblxuZnVuY3Rpb24gbm9kZVRvRGVwZW5kZW5jeVRyZWUobm9kZSkge1xuICB2YXIgcmVzdWx0ID0ge1xuICAgIG5hbWU6IG5vZGUubmFtZV9cbiAgfTtcbiAgaWYgKG5vZGUub2JzZXJ2aW5nXyAmJiBub2RlLm9ic2VydmluZ18ubGVuZ3RoID4gMCkgcmVzdWx0LmRlcGVuZGVuY2llcyA9IHVuaXF1ZShub2RlLm9ic2VydmluZ18pLm1hcChub2RlVG9EZXBlbmRlbmN5VHJlZSk7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIGdldE9ic2VydmVyVHJlZSh0aGluZywgcHJvcGVydHkpIHtcbiAgcmV0dXJuIG5vZGVUb09ic2VydmVyVHJlZShnZXRBdG9tKHRoaW5nLCBwcm9wZXJ0eSkpO1xufVxuXG5mdW5jdGlvbiBub2RlVG9PYnNlcnZlclRyZWUobm9kZSkge1xuICB2YXIgcmVzdWx0ID0ge1xuICAgIG5hbWU6IG5vZGUubmFtZV9cbiAgfTtcbiAgaWYgKGhhc09ic2VydmVycyhub2RlKSkgcmVzdWx0Lm9ic2VydmVycyA9IEFycmF5LmZyb20oZ2V0T2JzZXJ2ZXJzKG5vZGUpKS5tYXAobm9kZVRvT2JzZXJ2ZXJUcmVlKTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gdW5pcXVlKGxpc3QpIHtcbiAgcmV0dXJuIEFycmF5LmZyb20obmV3IFNldChsaXN0KSk7XG59XG5cbnZhciBnZW5lcmF0b3JJZCA9IDA7XG5mdW5jdGlvbiBGbG93Q2FuY2VsbGF0aW9uRXJyb3IoKSB7XG4gIHRoaXMubWVzc2FnZSA9IFwiRkxPV19DQU5DRUxMRURcIjtcbn1cbkZsb3dDYW5jZWxsYXRpb25FcnJvci5wcm90b3R5cGUgPSAvKiNfX1BVUkVfXyovT2JqZWN0LmNyZWF0ZShFcnJvci5wcm90b3R5cGUpO1xuZnVuY3Rpb24gaXNGbG93Q2FuY2VsbGF0aW9uRXJyb3IoZXJyb3IpIHtcbiAgcmV0dXJuIGVycm9yIGluc3RhbmNlb2YgRmxvd0NhbmNlbGxhdGlvbkVycm9yO1xufVxudmFyIGZsb3dBbm5vdGF0aW9uID0gLyojX19QVVJFX18qL2NyZWF0ZUZsb3dBbm5vdGF0aW9uKFwiZmxvd1wiKTtcbnZhciBmbG93Qm91bmRBbm5vdGF0aW9uID0gLyojX19QVVJFX18qL2NyZWF0ZUZsb3dBbm5vdGF0aW9uKFwiZmxvdy5ib3VuZFwiLCB7XG4gIGJvdW5kOiB0cnVlXG59KTtcbnZhciBmbG93ID0gLyojX19QVVJFX18qL09iamVjdC5hc3NpZ24oZnVuY3Rpb24gZmxvdyhhcmcxLCBhcmcyKSB7XG4gIC8vIEBmbG93XG4gIGlmIChpc1N0cmluZ2lzaChhcmcyKSkge1xuICAgIHJldHVybiBzdG9yZUFubm90YXRpb24oYXJnMSwgYXJnMiwgZmxvd0Fubm90YXRpb24pO1xuICB9IC8vIGZsb3coZm4pXG5cblxuICBpZiAoTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiICYmIGFyZ3VtZW50cy5sZW5ndGggIT09IDEpIGRpZShcIkZsb3cgZXhwZWN0cyBzaW5nbGUgYXJndW1lbnQgd2l0aCBnZW5lcmF0b3IgZnVuY3Rpb25cIik7XG4gIHZhciBnZW5lcmF0b3IgPSBhcmcxO1xuICB2YXIgbmFtZSA9IGdlbmVyYXRvci5uYW1lIHx8IFwiPHVubmFtZWQgZmxvdz5cIjsgLy8gSW1wbGVtZW50YXRpb24gYmFzZWQgb24gaHR0cHM6Ly9naXRodWIuY29tL3RqL2NvL2Jsb2IvbWFzdGVyL2luZGV4LmpzXG5cbiAgdmFyIHJlcyA9IGZ1bmN0aW9uIHJlcygpIHtcbiAgICB2YXIgY3R4ID0gdGhpcztcbiAgICB2YXIgYXJncyA9IGFyZ3VtZW50cztcbiAgICB2YXIgcnVuSWQgPSArK2dlbmVyYXRvcklkO1xuICAgIHZhciBnZW4gPSBhY3Rpb24obmFtZSArIFwiIC0gcnVuaWQ6IFwiICsgcnVuSWQgKyBcIiAtIGluaXRcIiwgZ2VuZXJhdG9yKS5hcHBseShjdHgsIGFyZ3MpO1xuICAgIHZhciByZWplY3RvcjtcbiAgICB2YXIgcGVuZGluZ1Byb21pc2UgPSB1bmRlZmluZWQ7XG4gICAgdmFyIHByb21pc2UgPSBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICB2YXIgc3RlcElkID0gMDtcbiAgICAgIHJlamVjdG9yID0gcmVqZWN0O1xuXG4gICAgICBmdW5jdGlvbiBvbkZ1bGZpbGxlZChyZXMpIHtcbiAgICAgICAgcGVuZGluZ1Byb21pc2UgPSB1bmRlZmluZWQ7XG4gICAgICAgIHZhciByZXQ7XG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICByZXQgPSBhY3Rpb24obmFtZSArIFwiIC0gcnVuaWQ6IFwiICsgcnVuSWQgKyBcIiAtIHlpZWxkIFwiICsgc3RlcElkKyssIGdlbi5uZXh0KS5jYWxsKGdlbiwgcmVzKTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIHJldHVybiByZWplY3QoZSk7XG4gICAgICAgIH1cblxuICAgICAgICBuZXh0KHJldCk7XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIG9uUmVqZWN0ZWQoZXJyKSB7XG4gICAgICAgIHBlbmRpbmdQcm9taXNlID0gdW5kZWZpbmVkO1xuICAgICAgICB2YXIgcmV0O1xuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgcmV0ID0gYWN0aW9uKG5hbWUgKyBcIiAtIHJ1bmlkOiBcIiArIHJ1bklkICsgXCIgLSB5aWVsZCBcIiArIHN0ZXBJZCsrLCBnZW5bXCJ0aHJvd1wiXSkuY2FsbChnZW4sIGVycik7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICByZXR1cm4gcmVqZWN0KGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgbmV4dChyZXQpO1xuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBuZXh0KHJldCkge1xuICAgICAgICBpZiAoaXNGdW5jdGlvbihyZXQgPT0gbnVsbCA/IHZvaWQgMCA6IHJldC50aGVuKSkge1xuICAgICAgICAgIC8vIGFuIGFzeW5jIGl0ZXJhdG9yXG4gICAgICAgICAgcmV0LnRoZW4obmV4dCwgcmVqZWN0KTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocmV0LmRvbmUpIHJldHVybiByZXNvbHZlKHJldC52YWx1ZSk7XG4gICAgICAgIHBlbmRpbmdQcm9taXNlID0gUHJvbWlzZS5yZXNvbHZlKHJldC52YWx1ZSk7XG4gICAgICAgIHJldHVybiBwZW5kaW5nUHJvbWlzZS50aGVuKG9uRnVsZmlsbGVkLCBvblJlamVjdGVkKTtcbiAgICAgIH1cblxuICAgICAgb25GdWxmaWxsZWQodW5kZWZpbmVkKTsgLy8ga2ljayBvZmYgdGhlIHdpbmRvdy5wcm9jZXNzXG4gICAgfSk7XG4gICAgcHJvbWlzZS5jYW5jZWwgPSBhY3Rpb24obmFtZSArIFwiIC0gcnVuaWQ6IFwiICsgcnVuSWQgKyBcIiAtIGNhbmNlbFwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICB0cnkge1xuICAgICAgICBpZiAocGVuZGluZ1Byb21pc2UpIGNhbmNlbFByb21pc2UocGVuZGluZ1Byb21pc2UpOyAvLyBGaW5hbGx5IGJsb2NrIGNhbiByZXR1cm4gKG9yIHlpZWxkKSBzdHVmZi4uXG5cbiAgICAgICAgdmFyIF9yZXMgPSBnZW5bXCJyZXR1cm5cIl0odW5kZWZpbmVkKTsgLy8gZWF0IGFueXRoaW5nIHRoYXQgcHJvbWlzZSB3b3VsZCBkbywgaXQncyBjYW5jZWxsZWQhXG5cblxuICAgICAgICB2YXIgeWllbGRlZFByb21pc2UgPSBQcm9taXNlLnJlc29sdmUoX3Jlcy52YWx1ZSk7XG4gICAgICAgIHlpZWxkZWRQcm9taXNlLnRoZW4obm9vcCwgbm9vcCk7XG4gICAgICAgIGNhbmNlbFByb21pc2UoeWllbGRlZFByb21pc2UpOyAvLyBtYXliZSBpdCBjYW4gYmUgY2FuY2VsbGVkIDopXG4gICAgICAgIC8vIHJlamVjdCBvdXIgb3JpZ2luYWwgcHJvbWlzZVxuXG4gICAgICAgIHJlamVjdG9yKG5ldyBGbG93Q2FuY2VsbGF0aW9uRXJyb3IoKSk7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHJlamVjdG9yKGUpOyAvLyB0aGVyZSBjb3VsZCBiZSBhIHRocm93aW5nIGZpbmFsbHkgYmxvY2tcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gcHJvbWlzZTtcbiAgfTtcblxuICByZXMuaXNNb2JYRmxvdyA9IHRydWU7XG4gIHJldHVybiByZXM7XG59LCBmbG93QW5ub3RhdGlvbik7XG5mbG93LmJvdW5kID0gLyojX19QVVJFX18qL2NyZWF0ZURlY29yYXRvckFubm90YXRpb24oZmxvd0JvdW5kQW5ub3RhdGlvbik7XG5cbmZ1bmN0aW9uIGNhbmNlbFByb21pc2UocHJvbWlzZSkge1xuICBpZiAoaXNGdW5jdGlvbihwcm9taXNlLmNhbmNlbCkpIHByb21pc2UuY2FuY2VsKCk7XG59XG5cbmZ1bmN0aW9uIGZsb3dSZXN1bHQocmVzdWx0KSB7XG4gIHJldHVybiByZXN1bHQ7IC8vIGp1c3QgdHJpY2tpbmcgVHlwZVNjcmlwdCA6KVxufVxuZnVuY3Rpb24gaXNGbG93KGZuKSB7XG4gIHJldHVybiAoZm4gPT0gbnVsbCA/IHZvaWQgMCA6IGZuLmlzTW9iWEZsb3cpID09PSB0cnVlO1xufVxuXG5mdW5jdGlvbiBpbnRlcmNlcHRSZWFkcyh0aGluZywgcHJvcE9ySGFuZGxlciwgaGFuZGxlcikge1xuICB2YXIgdGFyZ2V0O1xuXG4gIGlmIChpc09ic2VydmFibGVNYXAodGhpbmcpIHx8IGlzT2JzZXJ2YWJsZUFycmF5KHRoaW5nKSB8fCBpc09ic2VydmFibGVWYWx1ZSh0aGluZykpIHtcbiAgICB0YXJnZXQgPSBnZXRBZG1pbmlzdHJhdGlvbih0aGluZyk7XG4gIH0gZWxzZSBpZiAoaXNPYnNlcnZhYmxlT2JqZWN0KHRoaW5nKSkge1xuICAgIGlmIChOT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgJiYgIWlzU3RyaW5naXNoKHByb3BPckhhbmRsZXIpKSByZXR1cm4gZGllKFwiSW50ZXJjZXB0UmVhZHMgY2FuIG9ubHkgYmUgdXNlZCB3aXRoIGEgc3BlY2lmaWMgcHJvcGVydHksIG5vdCB3aXRoIGFuIG9iamVjdCBpbiBnZW5lcmFsXCIpO1xuICAgIHRhcmdldCA9IGdldEFkbWluaXN0cmF0aW9uKHRoaW5nLCBwcm9wT3JIYW5kbGVyKTtcbiAgfSBlbHNlIGlmIChOT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgICByZXR1cm4gZGllKFwiRXhwZWN0ZWQgb2JzZXJ2YWJsZSBtYXAsIG9iamVjdCBvciBhcnJheSBhcyBmaXJzdCBhcnJheVwiKTtcbiAgfVxuXG4gIGlmIChOT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgJiYgdGFyZ2V0LmRlaGFuY2VyICE9PSB1bmRlZmluZWQpIHJldHVybiBkaWUoXCJBbiBpbnRlcmNlcHQgcmVhZGVyIHdhcyBhbHJlYWR5IGVzdGFibGlzaGVkXCIpO1xuICB0YXJnZXQuZGVoYW5jZXIgPSB0eXBlb2YgcHJvcE9ySGFuZGxlciA9PT0gXCJmdW5jdGlvblwiID8gcHJvcE9ySGFuZGxlciA6IGhhbmRsZXI7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgdGFyZ2V0LmRlaGFuY2VyID0gdW5kZWZpbmVkO1xuICB9O1xufVxuXG5mdW5jdGlvbiBpbnRlcmNlcHQodGhpbmcsIHByb3BPckhhbmRsZXIsIGhhbmRsZXIpIHtcbiAgaWYgKGlzRnVuY3Rpb24oaGFuZGxlcikpIHJldHVybiBpbnRlcmNlcHRQcm9wZXJ0eSh0aGluZywgcHJvcE9ySGFuZGxlciwgaGFuZGxlcik7ZWxzZSByZXR1cm4gaW50ZXJjZXB0SW50ZXJjZXB0YWJsZSh0aGluZywgcHJvcE9ySGFuZGxlcik7XG59XG5cbmZ1bmN0aW9uIGludGVyY2VwdEludGVyY2VwdGFibGUodGhpbmcsIGhhbmRsZXIpIHtcbiAgcmV0dXJuIGdldEFkbWluaXN0cmF0aW9uKHRoaW5nKS5pbnRlcmNlcHRfKGhhbmRsZXIpO1xufVxuXG5mdW5jdGlvbiBpbnRlcmNlcHRQcm9wZXJ0eSh0aGluZywgcHJvcGVydHksIGhhbmRsZXIpIHtcbiAgcmV0dXJuIGdldEFkbWluaXN0cmF0aW9uKHRoaW5nLCBwcm9wZXJ0eSkuaW50ZXJjZXB0XyhoYW5kbGVyKTtcbn1cblxuZnVuY3Rpb24gX2lzQ29tcHV0ZWQodmFsdWUsIHByb3BlcnR5KSB7XG4gIGlmIChwcm9wZXJ0eSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgaWYgKGlzT2JzZXJ2YWJsZU9iamVjdCh2YWx1ZSkgPT09IGZhbHNlKSByZXR1cm4gZmFsc2U7XG4gICAgaWYgKCF2YWx1ZVskbW9ieF0udmFsdWVzXy5oYXMocHJvcGVydHkpKSByZXR1cm4gZmFsc2U7XG4gICAgdmFyIGF0b20gPSBnZXRBdG9tKHZhbHVlLCBwcm9wZXJ0eSk7XG4gICAgcmV0dXJuIGlzQ29tcHV0ZWRWYWx1ZShhdG9tKTtcbiAgfVxuXG4gIHJldHVybiBpc0NvbXB1dGVkVmFsdWUodmFsdWUpO1xufVxuZnVuY3Rpb24gaXNDb21wdXRlZCh2YWx1ZSkge1xuICBpZiAoTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiICYmIGFyZ3VtZW50cy5sZW5ndGggPiAxKSByZXR1cm4gZGllKFwiaXNDb21wdXRlZCBleHBlY3RzIG9ubHkgMSBhcmd1bWVudC4gVXNlIGlzQ29tcHV0ZWRQcm9wIHRvIGluc3BlY3QgdGhlIG9ic2VydmFiaWxpdHkgb2YgYSBwcm9wZXJ0eVwiKTtcbiAgcmV0dXJuIF9pc0NvbXB1dGVkKHZhbHVlKTtcbn1cbmZ1bmN0aW9uIGlzQ29tcHV0ZWRQcm9wKHZhbHVlLCBwcm9wTmFtZSkge1xuICBpZiAoTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiICYmICFpc1N0cmluZ2lzaChwcm9wTmFtZSkpIHJldHVybiBkaWUoXCJpc0NvbXB1dGVkIGV4cGVjdGVkIGEgcHJvcGVydHkgbmFtZSBhcyBzZWNvbmQgYXJndW1lbnRcIik7XG4gIHJldHVybiBfaXNDb21wdXRlZCh2YWx1ZSwgcHJvcE5hbWUpO1xufVxuXG5mdW5jdGlvbiBfaXNPYnNlcnZhYmxlKHZhbHVlLCBwcm9wZXJ0eSkge1xuICBpZiAoIXZhbHVlKSByZXR1cm4gZmFsc2U7XG5cbiAgaWYgKHByb3BlcnR5ICE9PSB1bmRlZmluZWQpIHtcbiAgICBpZiAoTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiICYmIChpc09ic2VydmFibGVNYXAodmFsdWUpIHx8IGlzT2JzZXJ2YWJsZUFycmF5KHZhbHVlKSkpIHJldHVybiBkaWUoXCJpc09ic2VydmFibGUob2JqZWN0LCBwcm9wZXJ0eU5hbWUpIGlzIG5vdCBzdXBwb3J0ZWQgZm9yIGFycmF5cyBhbmQgbWFwcy4gVXNlIG1hcC5oYXMgb3IgYXJyYXkubGVuZ3RoIGluc3RlYWQuXCIpO1xuXG4gICAgaWYgKGlzT2JzZXJ2YWJsZU9iamVjdCh2YWx1ZSkpIHtcbiAgICAgIHJldHVybiB2YWx1ZVskbW9ieF0udmFsdWVzXy5oYXMocHJvcGVydHkpO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfSAvLyBGb3IgZmlyc3QgY2hlY2ssIHNlZSAjNzAxXG5cblxuICByZXR1cm4gaXNPYnNlcnZhYmxlT2JqZWN0KHZhbHVlKSB8fCAhIXZhbHVlWyRtb2J4XSB8fCBpc0F0b20odmFsdWUpIHx8IGlzUmVhY3Rpb24odmFsdWUpIHx8IGlzQ29tcHV0ZWRWYWx1ZSh2YWx1ZSk7XG59XG5cbmZ1bmN0aW9uIGlzT2JzZXJ2YWJsZSh2YWx1ZSkge1xuICBpZiAoTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiICYmIGFyZ3VtZW50cy5sZW5ndGggIT09IDEpIGRpZShcImlzT2JzZXJ2YWJsZSBleHBlY3RzIG9ubHkgMSBhcmd1bWVudC4gVXNlIGlzT2JzZXJ2YWJsZVByb3AgdG8gaW5zcGVjdCB0aGUgb2JzZXJ2YWJpbGl0eSBvZiBhIHByb3BlcnR5XCIpO1xuICByZXR1cm4gX2lzT2JzZXJ2YWJsZSh2YWx1ZSk7XG59XG5mdW5jdGlvbiBpc09ic2VydmFibGVQcm9wKHZhbHVlLCBwcm9wTmFtZSkge1xuICBpZiAoTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiICYmICFpc1N0cmluZ2lzaChwcm9wTmFtZSkpIHJldHVybiBkaWUoXCJleHBlY3RlZCBhIHByb3BlcnR5IG5hbWUgYXMgc2Vjb25kIGFyZ3VtZW50XCIpO1xuICByZXR1cm4gX2lzT2JzZXJ2YWJsZSh2YWx1ZSwgcHJvcE5hbWUpO1xufVxuXG5mdW5jdGlvbiBrZXlzKG9iaikge1xuICBpZiAoaXNPYnNlcnZhYmxlT2JqZWN0KG9iaikpIHtcbiAgICByZXR1cm4gb2JqWyRtb2J4XS5rZXlzXygpO1xuICB9XG5cbiAgaWYgKGlzT2JzZXJ2YWJsZU1hcChvYmopIHx8IGlzT2JzZXJ2YWJsZVNldChvYmopKSB7XG4gICAgcmV0dXJuIEFycmF5LmZyb20ob2JqLmtleXMoKSk7XG4gIH1cblxuICBpZiAoaXNPYnNlcnZhYmxlQXJyYXkob2JqKSkge1xuICAgIHJldHVybiBvYmoubWFwKGZ1bmN0aW9uIChfLCBpbmRleCkge1xuICAgICAgcmV0dXJuIGluZGV4O1xuICAgIH0pO1xuICB9XG5cbiAgZGllKDUpO1xufVxuZnVuY3Rpb24gdmFsdWVzKG9iaikge1xuICBpZiAoaXNPYnNlcnZhYmxlT2JqZWN0KG9iaikpIHtcbiAgICByZXR1cm4ga2V5cyhvYmopLm1hcChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICByZXR1cm4gb2JqW2tleV07XG4gICAgfSk7XG4gIH1cblxuICBpZiAoaXNPYnNlcnZhYmxlTWFwKG9iaikpIHtcbiAgICByZXR1cm4ga2V5cyhvYmopLm1hcChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICByZXR1cm4gb2JqLmdldChrZXkpO1xuICAgIH0pO1xuICB9XG5cbiAgaWYgKGlzT2JzZXJ2YWJsZVNldChvYmopKSB7XG4gICAgcmV0dXJuIEFycmF5LmZyb20ob2JqLnZhbHVlcygpKTtcbiAgfVxuXG4gIGlmIChpc09ic2VydmFibGVBcnJheShvYmopKSB7XG4gICAgcmV0dXJuIG9iai5zbGljZSgpO1xuICB9XG5cbiAgZGllKDYpO1xufVxuZnVuY3Rpb24gZW50cmllcyhvYmopIHtcbiAgaWYgKGlzT2JzZXJ2YWJsZU9iamVjdChvYmopKSB7XG4gICAgcmV0dXJuIGtleXMob2JqKS5tYXAoZnVuY3Rpb24gKGtleSkge1xuICAgICAgcmV0dXJuIFtrZXksIG9ialtrZXldXTtcbiAgICB9KTtcbiAgfVxuXG4gIGlmIChpc09ic2VydmFibGVNYXAob2JqKSkge1xuICAgIHJldHVybiBrZXlzKG9iaikubWFwKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIHJldHVybiBba2V5LCBvYmouZ2V0KGtleSldO1xuICAgIH0pO1xuICB9XG5cbiAgaWYgKGlzT2JzZXJ2YWJsZVNldChvYmopKSB7XG4gICAgcmV0dXJuIEFycmF5LmZyb20ob2JqLmVudHJpZXMoKSk7XG4gIH1cblxuICBpZiAoaXNPYnNlcnZhYmxlQXJyYXkob2JqKSkge1xuICAgIHJldHVybiBvYmoubWFwKGZ1bmN0aW9uIChrZXksIGluZGV4KSB7XG4gICAgICByZXR1cm4gW2luZGV4LCBrZXldO1xuICAgIH0pO1xuICB9XG5cbiAgZGllKDcpO1xufVxuZnVuY3Rpb24gc2V0KG9iaiwga2V5LCB2YWx1ZSkge1xuICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMiAmJiAhaXNPYnNlcnZhYmxlU2V0KG9iaikpIHtcbiAgICBzdGFydEJhdGNoKCk7XG4gICAgdmFyIF92YWx1ZXMgPSBrZXk7XG5cbiAgICB0cnkge1xuICAgICAgZm9yICh2YXIgX2tleSBpbiBfdmFsdWVzKSB7XG4gICAgICAgIHNldChvYmosIF9rZXksIF92YWx1ZXNbX2tleV0pO1xuICAgICAgfVxuICAgIH0gZmluYWxseSB7XG4gICAgICBlbmRCYXRjaCgpO1xuICAgIH1cblxuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChpc09ic2VydmFibGVPYmplY3Qob2JqKSkge1xuICAgIG9ialskbW9ieF0uc2V0XyhrZXksIHZhbHVlKTtcbiAgfSBlbHNlIGlmIChpc09ic2VydmFibGVNYXAob2JqKSkge1xuICAgIG9iai5zZXQoa2V5LCB2YWx1ZSk7XG4gIH0gZWxzZSBpZiAoaXNPYnNlcnZhYmxlU2V0KG9iaikpIHtcbiAgICBvYmouYWRkKGtleSk7XG4gIH0gZWxzZSBpZiAoaXNPYnNlcnZhYmxlQXJyYXkob2JqKSkge1xuICAgIGlmICh0eXBlb2Yga2V5ICE9PSBcIm51bWJlclwiKSBrZXkgPSBwYXJzZUludChrZXksIDEwKTtcbiAgICBpZiAoa2V5IDwgMCkgZGllKFwiSW52YWxpZCBpbmRleDogJ1wiICsga2V5ICsgXCInXCIpO1xuICAgIHN0YXJ0QmF0Y2goKTtcbiAgICBpZiAoa2V5ID49IG9iai5sZW5ndGgpIG9iai5sZW5ndGggPSBrZXkgKyAxO1xuICAgIG9ialtrZXldID0gdmFsdWU7XG4gICAgZW5kQmF0Y2goKTtcbiAgfSBlbHNlIGRpZSg4KTtcbn1cbmZ1bmN0aW9uIHJlbW92ZShvYmosIGtleSkge1xuICBpZiAoaXNPYnNlcnZhYmxlT2JqZWN0KG9iaikpIHtcbiAgICBvYmpbJG1vYnhdLmRlbGV0ZV8oa2V5KTtcbiAgfSBlbHNlIGlmIChpc09ic2VydmFibGVNYXAob2JqKSkge1xuICAgIG9ialtcImRlbGV0ZVwiXShrZXkpO1xuICB9IGVsc2UgaWYgKGlzT2JzZXJ2YWJsZVNldChvYmopKSB7XG4gICAgb2JqW1wiZGVsZXRlXCJdKGtleSk7XG4gIH0gZWxzZSBpZiAoaXNPYnNlcnZhYmxlQXJyYXkob2JqKSkge1xuICAgIGlmICh0eXBlb2Yga2V5ICE9PSBcIm51bWJlclwiKSBrZXkgPSBwYXJzZUludChrZXksIDEwKTtcbiAgICBvYmouc3BsaWNlKGtleSwgMSk7XG4gIH0gZWxzZSB7XG4gICAgZGllKDkpO1xuICB9XG59XG5mdW5jdGlvbiBoYXMob2JqLCBrZXkpIHtcbiAgaWYgKGlzT2JzZXJ2YWJsZU9iamVjdChvYmopKSB7XG4gICAgcmV0dXJuIG9ialskbW9ieF0uaGFzXyhrZXkpO1xuICB9IGVsc2UgaWYgKGlzT2JzZXJ2YWJsZU1hcChvYmopKSB7XG4gICAgcmV0dXJuIG9iai5oYXMoa2V5KTtcbiAgfSBlbHNlIGlmIChpc09ic2VydmFibGVTZXQob2JqKSkge1xuICAgIHJldHVybiBvYmouaGFzKGtleSk7XG4gIH0gZWxzZSBpZiAoaXNPYnNlcnZhYmxlQXJyYXkob2JqKSkge1xuICAgIHJldHVybiBrZXkgPj0gMCAmJiBrZXkgPCBvYmoubGVuZ3RoO1xuICB9XG5cbiAgZGllKDEwKTtcbn1cbmZ1bmN0aW9uIGdldChvYmosIGtleSkge1xuICBpZiAoIWhhcyhvYmosIGtleSkpIHJldHVybiB1bmRlZmluZWQ7XG5cbiAgaWYgKGlzT2JzZXJ2YWJsZU9iamVjdChvYmopKSB7XG4gICAgcmV0dXJuIG9ialskbW9ieF0uZ2V0XyhrZXkpO1xuICB9IGVsc2UgaWYgKGlzT2JzZXJ2YWJsZU1hcChvYmopKSB7XG4gICAgcmV0dXJuIG9iai5nZXQoa2V5KTtcbiAgfSBlbHNlIGlmIChpc09ic2VydmFibGVBcnJheShvYmopKSB7XG4gICAgcmV0dXJuIG9ialtrZXldO1xuICB9XG5cbiAgZGllKDExKTtcbn1cbmZ1bmN0aW9uIGFwaURlZmluZVByb3BlcnR5KG9iaiwga2V5LCBkZXNjcmlwdG9yKSB7XG4gIGlmIChpc09ic2VydmFibGVPYmplY3Qob2JqKSkge1xuICAgIHJldHVybiBvYmpbJG1vYnhdLmRlZmluZVByb3BlcnR5XyhrZXksIGRlc2NyaXB0b3IpO1xuICB9XG5cbiAgZGllKDM5KTtcbn1cbmZ1bmN0aW9uIGFwaU93bktleXMob2JqKSB7XG4gIGlmIChpc09ic2VydmFibGVPYmplY3Qob2JqKSkge1xuICAgIHJldHVybiBvYmpbJG1vYnhdLm93bktleXNfKCk7XG4gIH1cblxuICBkaWUoMzgpO1xufVxuXG5mdW5jdGlvbiBvYnNlcnZlKHRoaW5nLCBwcm9wT3JDYiwgY2JPckZpcmUsIGZpcmVJbW1lZGlhdGVseSkge1xuICBpZiAoaXNGdW5jdGlvbihjYk9yRmlyZSkpIHJldHVybiBvYnNlcnZlT2JzZXJ2YWJsZVByb3BlcnR5KHRoaW5nLCBwcm9wT3JDYiwgY2JPckZpcmUsIGZpcmVJbW1lZGlhdGVseSk7ZWxzZSByZXR1cm4gb2JzZXJ2ZU9ic2VydmFibGUodGhpbmcsIHByb3BPckNiLCBjYk9yRmlyZSk7XG59XG5cbmZ1bmN0aW9uIG9ic2VydmVPYnNlcnZhYmxlKHRoaW5nLCBsaXN0ZW5lciwgZmlyZUltbWVkaWF0ZWx5KSB7XG4gIHJldHVybiBnZXRBZG1pbmlzdHJhdGlvbih0aGluZykub2JzZXJ2ZV8obGlzdGVuZXIsIGZpcmVJbW1lZGlhdGVseSk7XG59XG5cbmZ1bmN0aW9uIG9ic2VydmVPYnNlcnZhYmxlUHJvcGVydHkodGhpbmcsIHByb3BlcnR5LCBsaXN0ZW5lciwgZmlyZUltbWVkaWF0ZWx5KSB7XG4gIHJldHVybiBnZXRBZG1pbmlzdHJhdGlvbih0aGluZywgcHJvcGVydHkpLm9ic2VydmVfKGxpc3RlbmVyLCBmaXJlSW1tZWRpYXRlbHkpO1xufVxuXG5mdW5jdGlvbiBjYWNoZShtYXAsIGtleSwgdmFsdWUpIHtcbiAgbWFwLnNldChrZXksIHZhbHVlKTtcbiAgcmV0dXJuIHZhbHVlO1xufVxuXG5mdW5jdGlvbiB0b0pTSGVscGVyKHNvdXJjZSwgX19hbHJlYWR5U2Vlbikge1xuICBpZiAoc291cmNlID09IG51bGwgfHwgdHlwZW9mIHNvdXJjZSAhPT0gXCJvYmplY3RcIiB8fCBzb3VyY2UgaW5zdGFuY2VvZiBEYXRlIHx8ICFpc09ic2VydmFibGUoc291cmNlKSkgcmV0dXJuIHNvdXJjZTtcbiAgaWYgKGlzT2JzZXJ2YWJsZVZhbHVlKHNvdXJjZSkgfHwgaXNDb21wdXRlZFZhbHVlKHNvdXJjZSkpIHJldHVybiB0b0pTSGVscGVyKHNvdXJjZS5nZXQoKSwgX19hbHJlYWR5U2Vlbik7XG5cbiAgaWYgKF9fYWxyZWFkeVNlZW4uaGFzKHNvdXJjZSkpIHtcbiAgICByZXR1cm4gX19hbHJlYWR5U2Vlbi5nZXQoc291cmNlKTtcbiAgfVxuXG4gIGlmIChpc09ic2VydmFibGVBcnJheShzb3VyY2UpKSB7XG4gICAgdmFyIHJlcyA9IGNhY2hlKF9fYWxyZWFkeVNlZW4sIHNvdXJjZSwgbmV3IEFycmF5KHNvdXJjZS5sZW5ndGgpKTtcbiAgICBzb3VyY2UuZm9yRWFjaChmdW5jdGlvbiAodmFsdWUsIGlkeCkge1xuICAgICAgcmVzW2lkeF0gPSB0b0pTSGVscGVyKHZhbHVlLCBfX2FscmVhZHlTZWVuKTtcbiAgICB9KTtcbiAgICByZXR1cm4gcmVzO1xuICB9XG5cbiAgaWYgKGlzT2JzZXJ2YWJsZVNldChzb3VyY2UpKSB7XG4gICAgdmFyIF9yZXMgPSBjYWNoZShfX2FscmVhZHlTZWVuLCBzb3VyY2UsIG5ldyBTZXQoKSk7XG5cbiAgICBzb3VyY2UuZm9yRWFjaChmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgIF9yZXMuYWRkKHRvSlNIZWxwZXIodmFsdWUsIF9fYWxyZWFkeVNlZW4pKTtcbiAgICB9KTtcbiAgICByZXR1cm4gX3JlcztcbiAgfVxuXG4gIGlmIChpc09ic2VydmFibGVNYXAoc291cmNlKSkge1xuICAgIHZhciBfcmVzMiA9IGNhY2hlKF9fYWxyZWFkeVNlZW4sIHNvdXJjZSwgbmV3IE1hcCgpKTtcblxuICAgIHNvdXJjZS5mb3JFYWNoKGZ1bmN0aW9uICh2YWx1ZSwga2V5KSB7XG4gICAgICBfcmVzMi5zZXQoa2V5LCB0b0pTSGVscGVyKHZhbHVlLCBfX2FscmVhZHlTZWVuKSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIF9yZXMyO1xuICB9IGVsc2Uge1xuICAgIC8vIG11c3QgYmUgb2JzZXJ2YWJsZSBvYmplY3RcbiAgICB2YXIgX3JlczMgPSBjYWNoZShfX2FscmVhZHlTZWVuLCBzb3VyY2UsIHt9KTtcblxuICAgIGFwaU93bktleXMoc291cmNlKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIGlmIChvYmplY3RQcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzb3VyY2UsIGtleSkpIHtcbiAgICAgICAgX3JlczNba2V5XSA9IHRvSlNIZWxwZXIoc291cmNlW2tleV0sIF9fYWxyZWFkeVNlZW4pO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBfcmVzMztcbiAgfVxufVxuLyoqXG4gKiBCYXNpY2FsbHksIGEgZGVlcCBjbG9uZSwgc28gdGhhdCBubyByZWFjdGl2ZSBwcm9wZXJ0eSB3aWxsIGV4aXN0IGFueW1vcmUuXG4gKi9cblxuXG5mdW5jdGlvbiB0b0pTKHNvdXJjZSwgb3B0aW9ucykge1xuICBpZiAoTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiICYmIG9wdGlvbnMpIGRpZShcInRvSlMgbm8gbG9uZ2VyIHN1cHBvcnRzIG9wdGlvbnNcIik7XG4gIHJldHVybiB0b0pTSGVscGVyKHNvdXJjZSwgbmV3IE1hcCgpKTtcbn1cblxuZnVuY3Rpb24gdHJhY2UoKSB7XG4gIGlmICghKE5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikpIGRpZShcInRyYWNlKCkgaXMgbm90IGF2YWlsYWJsZSBpbiBwcm9kdWN0aW9uIGJ1aWxkc1wiKTtcbiAgdmFyIGVudGVyQnJlYWtQb2ludCA9IGZhbHNlO1xuXG4gIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gIH1cblxuICBpZiAodHlwZW9mIGFyZ3NbYXJncy5sZW5ndGggLSAxXSA9PT0gXCJib29sZWFuXCIpIGVudGVyQnJlYWtQb2ludCA9IGFyZ3MucG9wKCk7XG4gIHZhciBkZXJpdmF0aW9uID0gZ2V0QXRvbUZyb21BcmdzKGFyZ3MpO1xuXG4gIGlmICghZGVyaXZhdGlvbikge1xuICAgIHJldHVybiBkaWUoXCIndHJhY2UoYnJlYWs/KScgY2FuIG9ubHkgYmUgdXNlZCBpbnNpZGUgYSB0cmFja2VkIGNvbXB1dGVkIHZhbHVlIG9yIGEgUmVhY3Rpb24uIENvbnNpZGVyIHBhc3NpbmcgaW4gdGhlIGNvbXB1dGVkIHZhbHVlIG9yIHJlYWN0aW9uIGV4cGxpY2l0bHlcIik7XG4gIH1cblxuICBpZiAoZGVyaXZhdGlvbi5pc1RyYWNpbmdfID09PSBUcmFjZU1vZGUuTk9ORSkge1xuICAgIGNvbnNvbGUubG9nKFwiW21vYngudHJhY2VdICdcIiArIGRlcml2YXRpb24ubmFtZV8gKyBcIicgdHJhY2luZyBlbmFibGVkXCIpO1xuICB9XG5cbiAgZGVyaXZhdGlvbi5pc1RyYWNpbmdfID0gZW50ZXJCcmVha1BvaW50ID8gVHJhY2VNb2RlLkJSRUFLIDogVHJhY2VNb2RlLkxPRztcbn1cblxuZnVuY3Rpb24gZ2V0QXRvbUZyb21BcmdzKGFyZ3MpIHtcbiAgc3dpdGNoIChhcmdzLmxlbmd0aCkge1xuICAgIGNhc2UgMDpcbiAgICAgIHJldHVybiBnbG9iYWxTdGF0ZS50cmFja2luZ0Rlcml2YXRpb247XG5cbiAgICBjYXNlIDE6XG4gICAgICByZXR1cm4gZ2V0QXRvbShhcmdzWzBdKTtcblxuICAgIGNhc2UgMjpcbiAgICAgIHJldHVybiBnZXRBdG9tKGFyZ3NbMF0sIGFyZ3NbMV0pO1xuICB9XG59XG5cbi8qKlxuICogRHVyaW5nIGEgdHJhbnNhY3Rpb24gbm8gdmlld3MgYXJlIHVwZGF0ZWQgdW50aWwgdGhlIGVuZCBvZiB0aGUgdHJhbnNhY3Rpb24uXG4gKiBUaGUgdHJhbnNhY3Rpb24gd2lsbCBiZSBydW4gc3luY2hyb25vdXNseSBub25ldGhlbGVzcy5cbiAqXG4gKiBAcGFyYW0gYWN0aW9uIGEgZnVuY3Rpb24gdGhhdCB1cGRhdGVzIHNvbWUgcmVhY3RpdmUgc3RhdGVcbiAqIEByZXR1cm5zIGFueSB2YWx1ZSB0aGF0IHdhcyByZXR1cm5lZCBieSB0aGUgJ2FjdGlvbicgcGFyYW1ldGVyLlxuICovXG5cbmZ1bmN0aW9uIHRyYW5zYWN0aW9uKGFjdGlvbiwgdGhpc0FyZykge1xuICBpZiAodGhpc0FyZyA9PT0gdm9pZCAwKSB7XG4gICAgdGhpc0FyZyA9IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHN0YXJ0QmF0Y2goKTtcblxuICB0cnkge1xuICAgIHJldHVybiBhY3Rpb24uYXBwbHkodGhpc0FyZyk7XG4gIH0gZmluYWxseSB7XG4gICAgZW5kQmF0Y2goKTtcbiAgfVxufVxuXG5mdW5jdGlvbiB3aGVuKHByZWRpY2F0ZSwgYXJnMSwgYXJnMikge1xuICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMSB8fCBhcmcxICYmIHR5cGVvZiBhcmcxID09PSBcIm9iamVjdFwiKSByZXR1cm4gd2hlblByb21pc2UocHJlZGljYXRlLCBhcmcxKTtcbiAgcmV0dXJuIF93aGVuKHByZWRpY2F0ZSwgYXJnMSwgYXJnMiB8fCB7fSk7XG59XG5cbmZ1bmN0aW9uIF93aGVuKHByZWRpY2F0ZSwgZWZmZWN0LCBvcHRzKSB7XG4gIHZhciB0aW1lb3V0SGFuZGxlO1xuXG4gIGlmICh0eXBlb2Ygb3B0cy50aW1lb3V0ID09PSBcIm51bWJlclwiKSB7XG4gICAgdGltZW91dEhhbmRsZSA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKCFkaXNwb3NlclskbW9ieF0uaXNEaXNwb3NlZF8pIHtcbiAgICAgICAgZGlzcG9zZXIoKTtcbiAgICAgICAgdmFyIGVycm9yID0gbmV3IEVycm9yKFwiV0hFTl9USU1FT1VUXCIpO1xuICAgICAgICBpZiAob3B0cy5vbkVycm9yKSBvcHRzLm9uRXJyb3IoZXJyb3IpO2Vsc2UgdGhyb3cgZXJyb3I7XG4gICAgICB9XG4gICAgfSwgb3B0cy50aW1lb3V0KTtcbiAgfVxuXG4gIG9wdHMubmFtZSA9IE5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IG9wdHMubmFtZSB8fCBcIldoZW5AXCIgKyBnZXROZXh0SWQoKSA6IFwiV2hlblwiO1xuICB2YXIgZWZmZWN0QWN0aW9uID0gY3JlYXRlQWN0aW9uKE5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IG9wdHMubmFtZSArIFwiLWVmZmVjdFwiIDogXCJXaGVuLWVmZmVjdFwiLCBlZmZlY3QpOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcblxuICB2YXIgZGlzcG9zZXIgPSBhdXRvcnVuKGZ1bmN0aW9uIChyKSB7XG4gICAgLy8gcHJlZGljYXRlIHNob3VsZCBub3QgY2hhbmdlIHN0YXRlXG4gICAgdmFyIGNvbmQgPSBhbGxvd1N0YXRlQ2hhbmdlcyhmYWxzZSwgcHJlZGljYXRlKTtcblxuICAgIGlmIChjb25kKSB7XG4gICAgICByLmRpc3Bvc2UoKTtcbiAgICAgIGlmICh0aW1lb3V0SGFuZGxlKSBjbGVhclRpbWVvdXQodGltZW91dEhhbmRsZSk7XG4gICAgICBlZmZlY3RBY3Rpb24oKTtcbiAgICB9XG4gIH0sIG9wdHMpO1xuICByZXR1cm4gZGlzcG9zZXI7XG59XG5cbmZ1bmN0aW9uIHdoZW5Qcm9taXNlKHByZWRpY2F0ZSwgb3B0cykge1xuICBpZiAoTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiICYmIG9wdHMgJiYgb3B0cy5vbkVycm9yKSByZXR1cm4gZGllKFwidGhlIG9wdGlvbnMgJ29uRXJyb3InIGFuZCAncHJvbWlzZScgY2Fubm90IGJlIGNvbWJpbmVkXCIpO1xuICB2YXIgY2FuY2VsO1xuICB2YXIgcmVzID0gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgIHZhciBkaXNwb3NlciA9IF93aGVuKHByZWRpY2F0ZSwgcmVzb2x2ZSwgX2V4dGVuZHMoe30sIG9wdHMsIHtcbiAgICAgIG9uRXJyb3I6IHJlamVjdFxuICAgIH0pKTtcblxuICAgIGNhbmNlbCA9IGZ1bmN0aW9uIGNhbmNlbCgpIHtcbiAgICAgIGRpc3Bvc2VyKCk7XG4gICAgICByZWplY3QoXCJXSEVOX0NBTkNFTExFRFwiKTtcbiAgICB9O1xuICB9KTtcbiAgcmVzLmNhbmNlbCA9IGNhbmNlbDtcbiAgcmV0dXJuIHJlcztcbn1cblxuZnVuY3Rpb24gZ2V0QWRtKHRhcmdldCkge1xuICByZXR1cm4gdGFyZ2V0WyRtb2J4XTtcbn0gLy8gT3B0aW1pemF0aW9uOiB3ZSBkb24ndCBuZWVkIHRoZSBpbnRlcm1lZGlhdGUgb2JqZWN0cyBhbmQgY291bGQgaGF2ZSBhIGNvbXBsZXRlbHkgY3VzdG9tIGFkbWluaXN0cmF0aW9uIGZvciBEeW5hbWljT2JqZWN0cyxcbi8vIGFuZCBza2lwIGVpdGhlciB0aGUgaW50ZXJuYWwgdmFsdWVzIG1hcCwgb3IgdGhlIGJhc2Ugb2JqZWN0IHdpdGggaXRzIHByb3BlcnR5IGRlc2NyaXB0b3JzIVxuXG5cbnZhciBvYmplY3RQcm94eVRyYXBzID0ge1xuICBoYXM6IGZ1bmN0aW9uIGhhcyh0YXJnZXQsIG5hbWUpIHtcbiAgICBpZiAoTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiICYmIGdsb2JhbFN0YXRlLnRyYWNraW5nRGVyaXZhdGlvbikgd2FybkFib3V0UHJveHlSZXF1aXJlbWVudChcImRldGVjdCBuZXcgcHJvcGVydGllcyB1c2luZyB0aGUgJ2luJyBvcGVyYXRvci4gVXNlICdoYXMnIGZyb20gJ21vYngnIGluc3RlYWQuXCIpO1xuICAgIHJldHVybiBnZXRBZG0odGFyZ2V0KS5oYXNfKG5hbWUpO1xuICB9LFxuICBnZXQ6IGZ1bmN0aW9uIGdldCh0YXJnZXQsIG5hbWUpIHtcbiAgICByZXR1cm4gZ2V0QWRtKHRhcmdldCkuZ2V0XyhuYW1lKTtcbiAgfSxcbiAgc2V0OiBmdW5jdGlvbiBzZXQodGFyZ2V0LCBuYW1lLCB2YWx1ZSkge1xuICAgIHZhciBfZ2V0QWRtJHNldF87XG5cbiAgICBpZiAoIWlzU3RyaW5naXNoKG5hbWUpKSByZXR1cm4gZmFsc2U7XG5cbiAgICBpZiAoTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiICYmICFnZXRBZG0odGFyZ2V0KS52YWx1ZXNfLmhhcyhuYW1lKSkge1xuICAgICAgd2FybkFib3V0UHJveHlSZXF1aXJlbWVudChcImFkZCBhIG5ldyBvYnNlcnZhYmxlIHByb3BlcnR5IHRocm91Z2ggZGlyZWN0IGFzc2lnbm1lbnQuIFVzZSAnc2V0JyBmcm9tICdtb2J4JyBpbnN0ZWFkLlwiKTtcbiAgICB9IC8vIG51bGwgKGludGVyY2VwdGVkKSAtPiB0cnVlIChzdWNjZXNzKVxuXG5cbiAgICByZXR1cm4gKF9nZXRBZG0kc2V0XyA9IGdldEFkbSh0YXJnZXQpLnNldF8obmFtZSwgdmFsdWUsIHRydWUpKSAhPSBudWxsID8gX2dldEFkbSRzZXRfIDogdHJ1ZTtcbiAgfSxcbiAgZGVsZXRlUHJvcGVydHk6IGZ1bmN0aW9uIGRlbGV0ZVByb3BlcnR5KHRhcmdldCwgbmFtZSkge1xuICAgIHZhciBfZ2V0QWRtJGRlbGV0ZV87XG5cbiAgICBpZiAoTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gICAgICB3YXJuQWJvdXRQcm94eVJlcXVpcmVtZW50KFwiZGVsZXRlIHByb3BlcnRpZXMgZnJvbSBhbiBvYnNlcnZhYmxlIG9iamVjdC4gVXNlICdyZW1vdmUnIGZyb20gJ21vYngnIGluc3RlYWQuXCIpO1xuICAgIH1cblxuICAgIGlmICghaXNTdHJpbmdpc2gobmFtZSkpIHJldHVybiBmYWxzZTsgLy8gbnVsbCAoaW50ZXJjZXB0ZWQpIC0+IHRydWUgKHN1Y2Nlc3MpXG5cbiAgICByZXR1cm4gKF9nZXRBZG0kZGVsZXRlXyA9IGdldEFkbSh0YXJnZXQpLmRlbGV0ZV8obmFtZSwgdHJ1ZSkpICE9IG51bGwgPyBfZ2V0QWRtJGRlbGV0ZV8gOiB0cnVlO1xuICB9LFxuICBkZWZpbmVQcm9wZXJ0eTogZnVuY3Rpb24gZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBuYW1lLCBkZXNjcmlwdG9yKSB7XG4gICAgdmFyIF9nZXRBZG0kZGVmaW5lUHJvcGVydDtcblxuICAgIGlmIChOT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgICAgIHdhcm5BYm91dFByb3h5UmVxdWlyZW1lbnQoXCJkZWZpbmUgcHJvcGVydHkgb24gYW4gb2JzZXJ2YWJsZSBvYmplY3QuIFVzZSAnZGVmaW5lUHJvcGVydHknIGZyb20gJ21vYngnIGluc3RlYWQuXCIpO1xuICAgIH0gLy8gbnVsbCAoaW50ZXJjZXB0ZWQpIC0+IHRydWUgKHN1Y2Nlc3MpXG5cblxuICAgIHJldHVybiAoX2dldEFkbSRkZWZpbmVQcm9wZXJ0ID0gZ2V0QWRtKHRhcmdldCkuZGVmaW5lUHJvcGVydHlfKG5hbWUsIGRlc2NyaXB0b3IpKSAhPSBudWxsID8gX2dldEFkbSRkZWZpbmVQcm9wZXJ0IDogdHJ1ZTtcbiAgfSxcbiAgb3duS2V5czogZnVuY3Rpb24gb3duS2V5cyh0YXJnZXQpIHtcbiAgICBpZiAoTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiICYmIGdsb2JhbFN0YXRlLnRyYWNraW5nRGVyaXZhdGlvbikgd2FybkFib3V0UHJveHlSZXF1aXJlbWVudChcIml0ZXJhdGUga2V5cyB0byBkZXRlY3QgYWRkZWQgLyByZW1vdmVkIHByb3BlcnRpZXMuIFVzZSAna2V5cycgZnJvbSAnbW9ieCcgaW5zdGVhZC5cIik7XG4gICAgcmV0dXJuIGdldEFkbSh0YXJnZXQpLm93bktleXNfKCk7XG4gIH0sXG4gIHByZXZlbnRFeHRlbnNpb25zOiBmdW5jdGlvbiBwcmV2ZW50RXh0ZW5zaW9ucyh0YXJnZXQpIHtcbiAgICBkaWUoMTMpO1xuICB9XG59O1xuZnVuY3Rpb24gYXNEeW5hbWljT2JzZXJ2YWJsZU9iamVjdCh0YXJnZXQsIG9wdGlvbnMpIHtcbiAgdmFyIF90YXJnZXQkJG1vYngsIF90YXJnZXQkJG1vYngkcHJveHlfO1xuXG4gIGFzc2VydFByb3hpZXMoKTtcbiAgdGFyZ2V0ID0gYXNPYnNlcnZhYmxlT2JqZWN0KHRhcmdldCwgb3B0aW9ucyk7XG4gIHJldHVybiAoX3RhcmdldCQkbW9ieCRwcm94eV8gPSAoX3RhcmdldCQkbW9ieCA9IHRhcmdldFskbW9ieF0pLnByb3h5XykgIT0gbnVsbCA/IF90YXJnZXQkJG1vYngkcHJveHlfIDogX3RhcmdldCQkbW9ieC5wcm94eV8gPSBuZXcgUHJveHkodGFyZ2V0LCBvYmplY3RQcm94eVRyYXBzKTtcbn1cblxuZnVuY3Rpb24gaGFzSW50ZXJjZXB0b3JzKGludGVyY2VwdGFibGUpIHtcbiAgcmV0dXJuIGludGVyY2VwdGFibGUuaW50ZXJjZXB0b3JzXyAhPT0gdW5kZWZpbmVkICYmIGludGVyY2VwdGFibGUuaW50ZXJjZXB0b3JzXy5sZW5ndGggPiAwO1xufVxuZnVuY3Rpb24gcmVnaXN0ZXJJbnRlcmNlcHRvcihpbnRlcmNlcHRhYmxlLCBoYW5kbGVyKSB7XG4gIHZhciBpbnRlcmNlcHRvcnMgPSBpbnRlcmNlcHRhYmxlLmludGVyY2VwdG9yc18gfHwgKGludGVyY2VwdGFibGUuaW50ZXJjZXB0b3JzXyA9IFtdKTtcbiAgaW50ZXJjZXB0b3JzLnB1c2goaGFuZGxlcik7XG4gIHJldHVybiBvbmNlKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgaWR4ID0gaW50ZXJjZXB0b3JzLmluZGV4T2YoaGFuZGxlcik7XG4gICAgaWYgKGlkeCAhPT0gLTEpIGludGVyY2VwdG9ycy5zcGxpY2UoaWR4LCAxKTtcbiAgfSk7XG59XG5mdW5jdGlvbiBpbnRlcmNlcHRDaGFuZ2UoaW50ZXJjZXB0YWJsZSwgY2hhbmdlKSB7XG4gIHZhciBwcmV2VSA9IHVudHJhY2tlZFN0YXJ0KCk7XG5cbiAgdHJ5IHtcbiAgICAvLyBJbnRlcmNlcHRvciBjYW4gbW9kaWZ5IHRoZSBhcnJheSwgY29weSBpdCB0byBhdm9pZCBjb25jdXJyZW50IG1vZGlmaWNhdGlvbiwgc2VlICMxOTUwXG4gICAgdmFyIGludGVyY2VwdG9ycyA9IFtdLmNvbmNhdChpbnRlcmNlcHRhYmxlLmludGVyY2VwdG9yc18gfHwgW10pO1xuXG4gICAgZm9yICh2YXIgaSA9IDAsIGwgPSBpbnRlcmNlcHRvcnMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBjaGFuZ2UgPSBpbnRlcmNlcHRvcnNbaV0oY2hhbmdlKTtcbiAgICAgIGlmIChjaGFuZ2UgJiYgIWNoYW5nZS50eXBlKSBkaWUoMTQpO1xuICAgICAgaWYgKCFjaGFuZ2UpIGJyZWFrO1xuICAgIH1cblxuICAgIHJldHVybiBjaGFuZ2U7XG4gIH0gZmluYWxseSB7XG4gICAgdW50cmFja2VkRW5kKHByZXZVKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBoYXNMaXN0ZW5lcnMobGlzdGVuYWJsZSkge1xuICByZXR1cm4gbGlzdGVuYWJsZS5jaGFuZ2VMaXN0ZW5lcnNfICE9PSB1bmRlZmluZWQgJiYgbGlzdGVuYWJsZS5jaGFuZ2VMaXN0ZW5lcnNfLmxlbmd0aCA+IDA7XG59XG5mdW5jdGlvbiByZWdpc3Rlckxpc3RlbmVyKGxpc3RlbmFibGUsIGhhbmRsZXIpIHtcbiAgdmFyIGxpc3RlbmVycyA9IGxpc3RlbmFibGUuY2hhbmdlTGlzdGVuZXJzXyB8fCAobGlzdGVuYWJsZS5jaGFuZ2VMaXN0ZW5lcnNfID0gW10pO1xuICBsaXN0ZW5lcnMucHVzaChoYW5kbGVyKTtcbiAgcmV0dXJuIG9uY2UoZnVuY3Rpb24gKCkge1xuICAgIHZhciBpZHggPSBsaXN0ZW5lcnMuaW5kZXhPZihoYW5kbGVyKTtcbiAgICBpZiAoaWR4ICE9PSAtMSkgbGlzdGVuZXJzLnNwbGljZShpZHgsIDEpO1xuICB9KTtcbn1cbmZ1bmN0aW9uIG5vdGlmeUxpc3RlbmVycyhsaXN0ZW5hYmxlLCBjaGFuZ2UpIHtcbiAgdmFyIHByZXZVID0gdW50cmFja2VkU3RhcnQoKTtcbiAgdmFyIGxpc3RlbmVycyA9IGxpc3RlbmFibGUuY2hhbmdlTGlzdGVuZXJzXztcbiAgaWYgKCFsaXN0ZW5lcnMpIHJldHVybjtcbiAgbGlzdGVuZXJzID0gbGlzdGVuZXJzLnNsaWNlKCk7XG5cbiAgZm9yICh2YXIgaSA9IDAsIGwgPSBsaXN0ZW5lcnMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgbGlzdGVuZXJzW2ldKGNoYW5nZSk7XG4gIH1cblxuICB1bnRyYWNrZWRFbmQocHJldlUpO1xufVxuXG5mdW5jdGlvbiBtYWtlT2JzZXJ2YWJsZSh0YXJnZXQsIGFubm90YXRpb25zLCBvcHRpb25zKSB7XG4gIHZhciBhZG0gPSBhc09ic2VydmFibGVPYmplY3QodGFyZ2V0LCBvcHRpb25zKVskbW9ieF07XG4gIHN0YXJ0QmF0Y2goKTtcblxuICB0cnkge1xuICAgIHZhciBfYW5ub3RhdGlvbnM7XG5cbiAgICAvLyBEZWZhdWx0IHRvIGRlY29yYXRvcnNcbiAgICAoX2Fubm90YXRpb25zID0gYW5ub3RhdGlvbnMpICE9IG51bGwgPyBfYW5ub3RhdGlvbnMgOiBhbm5vdGF0aW9ucyA9IGNvbGxlY3RTdG9yZWRBbm5vdGF0aW9ucyh0YXJnZXQpOyAvLyBBbm5vdGF0ZVxuXG4gICAgb3duS2V5cyhhbm5vdGF0aW9ucykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICByZXR1cm4gYWRtLm1ha2VfKGtleSwgYW5ub3RhdGlvbnNba2V5XSk7XG4gICAgfSk7XG4gIH0gZmluYWxseSB7XG4gICAgZW5kQmF0Y2goKTtcbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59IC8vIHByb3RvW2tleXNTeW1ib2xdID0gbmV3IFNldDxQcm9wZXJ0eUtleT4oKVxuXG52YXIga2V5c1N5bWJvbCA9IC8qI19fUFVSRV9fKi9TeW1ib2woXCJtb2J4LWtleXNcIik7XG5mdW5jdGlvbiBtYWtlQXV0b09ic2VydmFibGUodGFyZ2V0LCBvdmVycmlkZXMsIG9wdGlvbnMpIHtcbiAgaWYgKE5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAgIGlmICghaXNQbGFpbk9iamVjdCh0YXJnZXQpICYmICFpc1BsYWluT2JqZWN0KE9iamVjdC5nZXRQcm90b3R5cGVPZih0YXJnZXQpKSkgZGllKFwiJ21ha2VBdXRvT2JzZXJ2YWJsZScgY2FuIG9ubHkgYmUgdXNlZCBmb3IgY2xhc3NlcyB0aGF0IGRvbid0IGhhdmUgYSBzdXBlcmNsYXNzXCIpO1xuICAgIGlmIChpc09ic2VydmFibGVPYmplY3QodGFyZ2V0KSkgZGllKFwibWFrZUF1dG9PYnNlcnZhYmxlIGNhbiBvbmx5IGJlIHVzZWQgb24gb2JqZWN0cyBub3QgYWxyZWFkeSBtYWRlIG9ic2VydmFibGVcIik7XG4gIH0gLy8gT3B0aW1pemF0aW9uOiBhdm9pZCB2aXNpdGluZyBwcm90b3NcbiAgLy8gQXNzdW1lcyB0aGF0IGFubm90YXRpb24ubWFrZV8vLmV4dGVuZF8gd29ya3MgdGhlIHNhbWUgZm9yIHBsYWluIG9iamVjdHNcblxuXG4gIGlmIChpc1BsYWluT2JqZWN0KHRhcmdldCkpIHtcbiAgICByZXR1cm4gZXh0ZW5kT2JzZXJ2YWJsZSh0YXJnZXQsIHRhcmdldCwgb3ZlcnJpZGVzLCBvcHRpb25zKTtcbiAgfVxuXG4gIHZhciBhZG0gPSBhc09ic2VydmFibGVPYmplY3QodGFyZ2V0LCBvcHRpb25zKVskbW9ieF07IC8vIE9wdGltaXphdGlvbjogY2FjaGUga2V5cyBvbiBwcm90b1xuICAvLyBBc3N1bWVzIG1ha2VBdXRvT2JzZXJ2YWJsZSBjYW4gYmUgY2FsbGVkIG9ubHkgb25jZSBwZXIgb2JqZWN0IGFuZCBjYW4ndCBiZSB1c2VkIGluIHN1YmNsYXNzXG5cbiAgaWYgKCF0YXJnZXRba2V5c1N5bWJvbF0pIHtcbiAgICB2YXIgcHJvdG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YodGFyZ2V0KTtcbiAgICB2YXIga2V5cyA9IG5ldyBTZXQoW10uY29uY2F0KG93bktleXModGFyZ2V0KSwgb3duS2V5cyhwcm90bykpKTtcbiAgICBrZXlzW1wiZGVsZXRlXCJdKFwiY29uc3RydWN0b3JcIik7XG4gICAga2V5c1tcImRlbGV0ZVwiXSgkbW9ieCk7XG4gICAgYWRkSGlkZGVuUHJvcChwcm90bywga2V5c1N5bWJvbCwga2V5cyk7XG4gIH1cblxuICBzdGFydEJhdGNoKCk7XG5cbiAgdHJ5IHtcbiAgICB0YXJnZXRba2V5c1N5bWJvbF0uZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICByZXR1cm4gYWRtLm1ha2VfKGtleSwgLy8gbXVzdCBwYXNzIFwidW5kZWZpbmVkXCIgZm9yIHsga2V5OiB1bmRlZmluZWQgfVxuICAgICAgIW92ZXJyaWRlcyA/IHRydWUgOiBrZXkgaW4gb3ZlcnJpZGVzID8gb3ZlcnJpZGVzW2tleV0gOiB0cnVlKTtcbiAgICB9KTtcbiAgfSBmaW5hbGx5IHtcbiAgICBlbmRCYXRjaCgpO1xuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn1cblxudmFyIFNQTElDRSA9IFwic3BsaWNlXCI7XG52YXIgVVBEQVRFID0gXCJ1cGRhdGVcIjtcbnZhciBNQVhfU1BMSUNFX1NJWkUgPSAxMDAwMDsgLy8gU2VlIGUuZy4gaHR0cHM6Ly9naXRodWIuY29tL21vYnhqcy9tb2J4L2lzc3Vlcy84NTlcblxudmFyIGFycmF5VHJhcHMgPSB7XG4gIGdldDogZnVuY3Rpb24gZ2V0KHRhcmdldCwgbmFtZSkge1xuICAgIHZhciBhZG0gPSB0YXJnZXRbJG1vYnhdO1xuICAgIGlmIChuYW1lID09PSAkbW9ieCkgcmV0dXJuIGFkbTtcbiAgICBpZiAobmFtZSA9PT0gXCJsZW5ndGhcIikgcmV0dXJuIGFkbS5nZXRBcnJheUxlbmd0aF8oKTtcblxuICAgIGlmICh0eXBlb2YgbmFtZSA9PT0gXCJzdHJpbmdcIiAmJiAhaXNOYU4obmFtZSkpIHtcbiAgICAgIHJldHVybiBhZG0uZ2V0XyhwYXJzZUludChuYW1lKSk7XG4gICAgfVxuXG4gICAgaWYgKGhhc1Byb3AoYXJyYXlFeHRlbnNpb25zLCBuYW1lKSkge1xuICAgICAgcmV0dXJuIGFycmF5RXh0ZW5zaW9uc1tuYW1lXTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGFyZ2V0W25hbWVdO1xuICB9LFxuICBzZXQ6IGZ1bmN0aW9uIHNldCh0YXJnZXQsIG5hbWUsIHZhbHVlKSB7XG4gICAgdmFyIGFkbSA9IHRhcmdldFskbW9ieF07XG5cbiAgICBpZiAobmFtZSA9PT0gXCJsZW5ndGhcIikge1xuICAgICAgYWRtLnNldEFycmF5TGVuZ3RoXyh2YWx1ZSk7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBuYW1lID09PSBcInN5bWJvbFwiIHx8IGlzTmFOKG5hbWUpKSB7XG4gICAgICB0YXJnZXRbbmFtZV0gPSB2YWx1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gbnVtZXJpYyBzdHJpbmdcbiAgICAgIGFkbS5zZXRfKHBhcnNlSW50KG5hbWUpLCB2YWx1ZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWU7XG4gIH0sXG4gIHByZXZlbnRFeHRlbnNpb25zOiBmdW5jdGlvbiBwcmV2ZW50RXh0ZW5zaW9ucygpIHtcbiAgICBkaWUoMTUpO1xuICB9XG59O1xudmFyIE9ic2VydmFibGVBcnJheUFkbWluaXN0cmF0aW9uID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcbiAgLy8gdGhpcyBpcyB0aGUgcHJvcCB0aGF0IGdldHMgcHJveGllZCwgc28gY2FuJ3QgcmVwbGFjZSBpdCFcbiAgZnVuY3Rpb24gT2JzZXJ2YWJsZUFycmF5QWRtaW5pc3RyYXRpb24obmFtZSwgZW5oYW5jZXIsIG93bmVkXywgbGVnYWN5TW9kZV8pIHtcbiAgICBpZiAobmFtZSA9PT0gdm9pZCAwKSB7XG4gICAgICBuYW1lID0gTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gXCJPYnNlcnZhYmxlQXJyYXlAXCIgKyBnZXROZXh0SWQoKSA6IFwiT2JzZXJ2YWJsZUFycmF5XCI7XG4gICAgfVxuXG4gICAgdGhpcy5vd25lZF8gPSB2b2lkIDA7XG4gICAgdGhpcy5sZWdhY3lNb2RlXyA9IHZvaWQgMDtcbiAgICB0aGlzLmF0b21fID0gdm9pZCAwO1xuICAgIHRoaXMudmFsdWVzXyA9IFtdO1xuICAgIHRoaXMuaW50ZXJjZXB0b3JzXyA9IHZvaWQgMDtcbiAgICB0aGlzLmNoYW5nZUxpc3RlbmVyc18gPSB2b2lkIDA7XG4gICAgdGhpcy5lbmhhbmNlcl8gPSB2b2lkIDA7XG4gICAgdGhpcy5kZWhhbmNlciA9IHZvaWQgMDtcbiAgICB0aGlzLnByb3h5XyA9IHZvaWQgMDtcbiAgICB0aGlzLmxhc3RLbm93bkxlbmd0aF8gPSAwO1xuICAgIHRoaXMub3duZWRfID0gb3duZWRfO1xuICAgIHRoaXMubGVnYWN5TW9kZV8gPSBsZWdhY3lNb2RlXztcbiAgICB0aGlzLmF0b21fID0gbmV3IEF0b20obmFtZSk7XG5cbiAgICB0aGlzLmVuaGFuY2VyXyA9IGZ1bmN0aW9uIChuZXdWLCBvbGRWKSB7XG4gICAgICByZXR1cm4gZW5oYW5jZXIobmV3Viwgb2xkViwgTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gbmFtZSArIFwiWy4uXVwiIDogXCJPYnNlcnZhYmxlQXJyYXlbLi5dXCIpO1xuICAgIH07XG4gIH1cblxuICB2YXIgX3Byb3RvID0gT2JzZXJ2YWJsZUFycmF5QWRtaW5pc3RyYXRpb24ucHJvdG90eXBlO1xuXG4gIF9wcm90by5kZWhhbmNlVmFsdWVfID0gZnVuY3Rpb24gZGVoYW5jZVZhbHVlXyh2YWx1ZSkge1xuICAgIGlmICh0aGlzLmRlaGFuY2VyICE9PSB1bmRlZmluZWQpIHJldHVybiB0aGlzLmRlaGFuY2VyKHZhbHVlKTtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH07XG5cbiAgX3Byb3RvLmRlaGFuY2VWYWx1ZXNfID0gZnVuY3Rpb24gZGVoYW5jZVZhbHVlc18odmFsdWVzKSB7XG4gICAgaWYgKHRoaXMuZGVoYW5jZXIgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZXMubGVuZ3RoID4gMCkgcmV0dXJuIHZhbHVlcy5tYXAodGhpcy5kZWhhbmNlcik7XG4gICAgcmV0dXJuIHZhbHVlcztcbiAgfTtcblxuICBfcHJvdG8uaW50ZXJjZXB0XyA9IGZ1bmN0aW9uIGludGVyY2VwdF8oaGFuZGxlcikge1xuICAgIHJldHVybiByZWdpc3RlckludGVyY2VwdG9yKHRoaXMsIGhhbmRsZXIpO1xuICB9O1xuXG4gIF9wcm90by5vYnNlcnZlXyA9IGZ1bmN0aW9uIG9ic2VydmVfKGxpc3RlbmVyLCBmaXJlSW1tZWRpYXRlbHkpIHtcbiAgICBpZiAoZmlyZUltbWVkaWF0ZWx5ID09PSB2b2lkIDApIHtcbiAgICAgIGZpcmVJbW1lZGlhdGVseSA9IGZhbHNlO1xuICAgIH1cblxuICAgIGlmIChmaXJlSW1tZWRpYXRlbHkpIHtcbiAgICAgIGxpc3RlbmVyKHtcbiAgICAgICAgb2JzZXJ2YWJsZUtpbmQ6IFwiYXJyYXlcIixcbiAgICAgICAgb2JqZWN0OiB0aGlzLnByb3h5XyxcbiAgICAgICAgZGVidWdPYmplY3ROYW1lOiB0aGlzLmF0b21fLm5hbWVfLFxuICAgICAgICB0eXBlOiBcInNwbGljZVwiLFxuICAgICAgICBpbmRleDogMCxcbiAgICAgICAgYWRkZWQ6IHRoaXMudmFsdWVzXy5zbGljZSgpLFxuICAgICAgICBhZGRlZENvdW50OiB0aGlzLnZhbHVlc18ubGVuZ3RoLFxuICAgICAgICByZW1vdmVkOiBbXSxcbiAgICAgICAgcmVtb3ZlZENvdW50OiAwXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVnaXN0ZXJMaXN0ZW5lcih0aGlzLCBsaXN0ZW5lcik7XG4gIH07XG5cbiAgX3Byb3RvLmdldEFycmF5TGVuZ3RoXyA9IGZ1bmN0aW9uIGdldEFycmF5TGVuZ3RoXygpIHtcbiAgICB0aGlzLmF0b21fLnJlcG9ydE9ic2VydmVkKCk7XG4gICAgcmV0dXJuIHRoaXMudmFsdWVzXy5sZW5ndGg7XG4gIH07XG5cbiAgX3Byb3RvLnNldEFycmF5TGVuZ3RoXyA9IGZ1bmN0aW9uIHNldEFycmF5TGVuZ3RoXyhuZXdMZW5ndGgpIHtcbiAgICBpZiAodHlwZW9mIG5ld0xlbmd0aCAhPT0gXCJudW1iZXJcIiB8fCBuZXdMZW5ndGggPCAwKSBkaWUoXCJPdXQgb2YgcmFuZ2U6IFwiICsgbmV3TGVuZ3RoKTtcbiAgICB2YXIgY3VycmVudExlbmd0aCA9IHRoaXMudmFsdWVzXy5sZW5ndGg7XG4gICAgaWYgKG5ld0xlbmd0aCA9PT0gY3VycmVudExlbmd0aCkgcmV0dXJuO2Vsc2UgaWYgKG5ld0xlbmd0aCA+IGN1cnJlbnRMZW5ndGgpIHtcbiAgICAgIHZhciBuZXdJdGVtcyA9IG5ldyBBcnJheShuZXdMZW5ndGggLSBjdXJyZW50TGVuZ3RoKTtcblxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBuZXdMZW5ndGggLSBjdXJyZW50TGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbmV3SXRlbXNbaV0gPSB1bmRlZmluZWQ7XG4gICAgICB9IC8vIE5vIEFycmF5LmZpbGwgZXZlcnl3aGVyZS4uLlxuXG5cbiAgICAgIHRoaXMuc3BsaWNlV2l0aEFycmF5XyhjdXJyZW50TGVuZ3RoLCAwLCBuZXdJdGVtcyk7XG4gICAgfSBlbHNlIHRoaXMuc3BsaWNlV2l0aEFycmF5XyhuZXdMZW5ndGgsIGN1cnJlbnRMZW5ndGggLSBuZXdMZW5ndGgpO1xuICB9O1xuXG4gIF9wcm90by51cGRhdGVBcnJheUxlbmd0aF8gPSBmdW5jdGlvbiB1cGRhdGVBcnJheUxlbmd0aF8ob2xkTGVuZ3RoLCBkZWx0YSkge1xuICAgIGlmIChvbGRMZW5ndGggIT09IHRoaXMubGFzdEtub3duTGVuZ3RoXykgZGllKDE2KTtcbiAgICB0aGlzLmxhc3RLbm93bkxlbmd0aF8gKz0gZGVsdGE7XG4gICAgaWYgKHRoaXMubGVnYWN5TW9kZV8gJiYgZGVsdGEgPiAwKSByZXNlcnZlQXJyYXlCdWZmZXIob2xkTGVuZ3RoICsgZGVsdGEgKyAxKTtcbiAgfTtcblxuICBfcHJvdG8uc3BsaWNlV2l0aEFycmF5XyA9IGZ1bmN0aW9uIHNwbGljZVdpdGhBcnJheV8oaW5kZXgsIGRlbGV0ZUNvdW50LCBuZXdJdGVtcykge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICBjaGVja0lmU3RhdGVNb2RpZmljYXRpb25zQXJlQWxsb3dlZCh0aGlzLmF0b21fKTtcbiAgICB2YXIgbGVuZ3RoID0gdGhpcy52YWx1ZXNfLmxlbmd0aDtcbiAgICBpZiAoaW5kZXggPT09IHVuZGVmaW5lZCkgaW5kZXggPSAwO2Vsc2UgaWYgKGluZGV4ID4gbGVuZ3RoKSBpbmRleCA9IGxlbmd0aDtlbHNlIGlmIChpbmRleCA8IDApIGluZGV4ID0gTWF0aC5tYXgoMCwgbGVuZ3RoICsgaW5kZXgpO1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAxKSBkZWxldGVDb3VudCA9IGxlbmd0aCAtIGluZGV4O2Vsc2UgaWYgKGRlbGV0ZUNvdW50ID09PSB1bmRlZmluZWQgfHwgZGVsZXRlQ291bnQgPT09IG51bGwpIGRlbGV0ZUNvdW50ID0gMDtlbHNlIGRlbGV0ZUNvdW50ID0gTWF0aC5tYXgoMCwgTWF0aC5taW4oZGVsZXRlQ291bnQsIGxlbmd0aCAtIGluZGV4KSk7XG4gICAgaWYgKG5ld0l0ZW1zID09PSB1bmRlZmluZWQpIG5ld0l0ZW1zID0gRU1QVFlfQVJSQVk7XG5cbiAgICBpZiAoaGFzSW50ZXJjZXB0b3JzKHRoaXMpKSB7XG4gICAgICB2YXIgY2hhbmdlID0gaW50ZXJjZXB0Q2hhbmdlKHRoaXMsIHtcbiAgICAgICAgb2JqZWN0OiB0aGlzLnByb3h5XyxcbiAgICAgICAgdHlwZTogU1BMSUNFLFxuICAgICAgICBpbmRleDogaW5kZXgsXG4gICAgICAgIHJlbW92ZWRDb3VudDogZGVsZXRlQ291bnQsXG4gICAgICAgIGFkZGVkOiBuZXdJdGVtc1xuICAgICAgfSk7XG4gICAgICBpZiAoIWNoYW5nZSkgcmV0dXJuIEVNUFRZX0FSUkFZO1xuICAgICAgZGVsZXRlQ291bnQgPSBjaGFuZ2UucmVtb3ZlZENvdW50O1xuICAgICAgbmV3SXRlbXMgPSBjaGFuZ2UuYWRkZWQ7XG4gICAgfVxuXG4gICAgbmV3SXRlbXMgPSBuZXdJdGVtcy5sZW5ndGggPT09IDAgPyBuZXdJdGVtcyA6IG5ld0l0ZW1zLm1hcChmdW5jdGlvbiAodikge1xuICAgICAgcmV0dXJuIF90aGlzLmVuaGFuY2VyXyh2LCB1bmRlZmluZWQpO1xuICAgIH0pO1xuXG4gICAgaWYgKHRoaXMubGVnYWN5TW9kZV8gfHwgTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gICAgICB2YXIgbGVuZ3RoRGVsdGEgPSBuZXdJdGVtcy5sZW5ndGggLSBkZWxldGVDb3VudDtcbiAgICAgIHRoaXMudXBkYXRlQXJyYXlMZW5ndGhfKGxlbmd0aCwgbGVuZ3RoRGVsdGEpOyAvLyBjaGVja3MgaWYgaW50ZXJuYWwgYXJyYXkgd2Fzbid0IG1vZGlmaWVkXG4gICAgfVxuXG4gICAgdmFyIHJlcyA9IHRoaXMuc3BsaWNlSXRlbXNJbnRvVmFsdWVzXyhpbmRleCwgZGVsZXRlQ291bnQsIG5ld0l0ZW1zKTtcbiAgICBpZiAoZGVsZXRlQ291bnQgIT09IDAgfHwgbmV3SXRlbXMubGVuZ3RoICE9PSAwKSB0aGlzLm5vdGlmeUFycmF5U3BsaWNlXyhpbmRleCwgbmV3SXRlbXMsIHJlcyk7XG4gICAgcmV0dXJuIHRoaXMuZGVoYW5jZVZhbHVlc18ocmVzKTtcbiAgfTtcblxuICBfcHJvdG8uc3BsaWNlSXRlbXNJbnRvVmFsdWVzXyA9IGZ1bmN0aW9uIHNwbGljZUl0ZW1zSW50b1ZhbHVlc18oaW5kZXgsIGRlbGV0ZUNvdW50LCBuZXdJdGVtcykge1xuICAgIGlmIChuZXdJdGVtcy5sZW5ndGggPCBNQVhfU1BMSUNFX1NJWkUpIHtcbiAgICAgIHZhciBfdGhpcyR2YWx1ZXNfO1xuXG4gICAgICByZXR1cm4gKF90aGlzJHZhbHVlc18gPSB0aGlzLnZhbHVlc18pLnNwbGljZS5hcHBseShfdGhpcyR2YWx1ZXNfLCBbaW5kZXgsIGRlbGV0ZUNvdW50XS5jb25jYXQobmV3SXRlbXMpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHJlcyA9IHRoaXMudmFsdWVzXy5zbGljZShpbmRleCwgaW5kZXggKyBkZWxldGVDb3VudCk7XG4gICAgICB2YXIgb2xkSXRlbXMgPSB0aGlzLnZhbHVlc18uc2xpY2UoaW5kZXggKyBkZWxldGVDb3VudCk7XG4gICAgICB0aGlzLnZhbHVlc18ubGVuZ3RoID0gaW5kZXggKyBuZXdJdGVtcy5sZW5ndGggLSBkZWxldGVDb3VudDtcblxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBuZXdJdGVtcy5sZW5ndGg7IGkrKykge1xuICAgICAgICB0aGlzLnZhbHVlc19baW5kZXggKyBpXSA9IG5ld0l0ZW1zW2ldO1xuICAgICAgfVxuXG4gICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgb2xkSXRlbXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgIHRoaXMudmFsdWVzX1tpbmRleCArIG5ld0l0ZW1zLmxlbmd0aCArIF9pXSA9IG9sZEl0ZW1zW19pXTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHJlcztcbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLm5vdGlmeUFycmF5Q2hpbGRVcGRhdGVfID0gZnVuY3Rpb24gbm90aWZ5QXJyYXlDaGlsZFVwZGF0ZV8oaW5kZXgsIG5ld1ZhbHVlLCBvbGRWYWx1ZSkge1xuICAgIHZhciBub3RpZnlTcHkgPSAhdGhpcy5vd25lZF8gJiYgaXNTcHlFbmFibGVkKCk7XG4gICAgdmFyIG5vdGlmeSA9IGhhc0xpc3RlbmVycyh0aGlzKTtcbiAgICB2YXIgY2hhbmdlID0gbm90aWZ5IHx8IG5vdGlmeVNweSA/IHtcbiAgICAgIG9ic2VydmFibGVLaW5kOiBcImFycmF5XCIsXG4gICAgICBvYmplY3Q6IHRoaXMucHJveHlfLFxuICAgICAgdHlwZTogVVBEQVRFLFxuICAgICAgZGVidWdPYmplY3ROYW1lOiB0aGlzLmF0b21fLm5hbWVfLFxuICAgICAgaW5kZXg6IGluZGV4LFxuICAgICAgbmV3VmFsdWU6IG5ld1ZhbHVlLFxuICAgICAgb2xkVmFsdWU6IG9sZFZhbHVlXG4gICAgfSA6IG51bGw7IC8vIFRoZSByZWFzb24gd2h5IHRoaXMgaXMgb24gcmlnaHQgaGFuZCBzaWRlIGhlcmUgKGFuZCBub3QgYWJvdmUpLCBpcyB0aGlzIHdheSB0aGUgdWdsaWZpZXIgd2lsbCBkcm9wIGl0LCBidXQgaXQgd29uJ3RcbiAgICAvLyBjYXVzZSBhbnkgcnVudGltZSBvdmVyaGVhZCBpbiBkZXZlbG9wbWVudCBtb2RlIHdpdGhvdXQgTk9ERV9FTlYgc2V0LCB1bmxlc3Mgc3B5aW5nIGlzIGVuYWJsZWRcblxuICAgIGlmIChOT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgJiYgbm90aWZ5U3B5KSBzcHlSZXBvcnRTdGFydChjaGFuZ2UpO1xuICAgIHRoaXMuYXRvbV8ucmVwb3J0Q2hhbmdlZCgpO1xuICAgIGlmIChub3RpZnkpIG5vdGlmeUxpc3RlbmVycyh0aGlzLCBjaGFuZ2UpO1xuICAgIGlmIChOT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgJiYgbm90aWZ5U3B5KSBzcHlSZXBvcnRFbmQoKTtcbiAgfTtcblxuICBfcHJvdG8ubm90aWZ5QXJyYXlTcGxpY2VfID0gZnVuY3Rpb24gbm90aWZ5QXJyYXlTcGxpY2VfKGluZGV4LCBhZGRlZCwgcmVtb3ZlZCkge1xuICAgIHZhciBub3RpZnlTcHkgPSAhdGhpcy5vd25lZF8gJiYgaXNTcHlFbmFibGVkKCk7XG4gICAgdmFyIG5vdGlmeSA9IGhhc0xpc3RlbmVycyh0aGlzKTtcbiAgICB2YXIgY2hhbmdlID0gbm90aWZ5IHx8IG5vdGlmeVNweSA/IHtcbiAgICAgIG9ic2VydmFibGVLaW5kOiBcImFycmF5XCIsXG4gICAgICBvYmplY3Q6IHRoaXMucHJveHlfLFxuICAgICAgZGVidWdPYmplY3ROYW1lOiB0aGlzLmF0b21fLm5hbWVfLFxuICAgICAgdHlwZTogU1BMSUNFLFxuICAgICAgaW5kZXg6IGluZGV4LFxuICAgICAgcmVtb3ZlZDogcmVtb3ZlZCxcbiAgICAgIGFkZGVkOiBhZGRlZCxcbiAgICAgIHJlbW92ZWRDb3VudDogcmVtb3ZlZC5sZW5ndGgsXG4gICAgICBhZGRlZENvdW50OiBhZGRlZC5sZW5ndGhcbiAgICB9IDogbnVsbDtcbiAgICBpZiAoTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiICYmIG5vdGlmeVNweSkgc3B5UmVwb3J0U3RhcnQoY2hhbmdlKTtcbiAgICB0aGlzLmF0b21fLnJlcG9ydENoYW5nZWQoKTsgLy8gY29uZm9ybTogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvQXJyYXkvb2JzZXJ2ZVxuXG4gICAgaWYgKG5vdGlmeSkgbm90aWZ5TGlzdGVuZXJzKHRoaXMsIGNoYW5nZSk7XG4gICAgaWYgKE5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiAmJiBub3RpZnlTcHkpIHNweVJlcG9ydEVuZCgpO1xuICB9O1xuXG4gIF9wcm90by5nZXRfID0gZnVuY3Rpb24gZ2V0XyhpbmRleCkge1xuICAgIGlmIChpbmRleCA8IHRoaXMudmFsdWVzXy5sZW5ndGgpIHtcbiAgICAgIHRoaXMuYXRvbV8ucmVwb3J0T2JzZXJ2ZWQoKTtcbiAgICAgIHJldHVybiB0aGlzLmRlaGFuY2VWYWx1ZV8odGhpcy52YWx1ZXNfW2luZGV4XSk7XG4gICAgfVxuXG4gICAgY29uc29sZS53YXJuKE5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IFwiW21vYnhdIE91dCBvZiBib3VuZHMgcmVhZDogXCIgKyBpbmRleCA6IFwiW21vYnguYXJyYXldIEF0dGVtcHQgdG8gcmVhZCBhbiBhcnJheSBpbmRleCAoXCIgKyBpbmRleCArIFwiKSB0aGF0IGlzIG91dCBvZiBib3VuZHMgKFwiICsgdGhpcy52YWx1ZXNfLmxlbmd0aCArIFwiKS4gUGxlYXNlIGNoZWNrIGxlbmd0aCBmaXJzdC4gT3V0IG9mIGJvdW5kIGluZGljZXMgd2lsbCBub3QgYmUgdHJhY2tlZCBieSBNb2JYXCIpO1xuICB9O1xuXG4gIF9wcm90by5zZXRfID0gZnVuY3Rpb24gc2V0XyhpbmRleCwgbmV3VmFsdWUpIHtcbiAgICB2YXIgdmFsdWVzID0gdGhpcy52YWx1ZXNfO1xuXG4gICAgaWYgKGluZGV4IDwgdmFsdWVzLmxlbmd0aCkge1xuICAgICAgLy8gdXBkYXRlIGF0IGluZGV4IGluIHJhbmdlXG4gICAgICBjaGVja0lmU3RhdGVNb2RpZmljYXRpb25zQXJlQWxsb3dlZCh0aGlzLmF0b21fKTtcbiAgICAgIHZhciBvbGRWYWx1ZSA9IHZhbHVlc1tpbmRleF07XG5cbiAgICAgIGlmIChoYXNJbnRlcmNlcHRvcnModGhpcykpIHtcbiAgICAgICAgdmFyIGNoYW5nZSA9IGludGVyY2VwdENoYW5nZSh0aGlzLCB7XG4gICAgICAgICAgdHlwZTogVVBEQVRFLFxuICAgICAgICAgIG9iamVjdDogdGhpcy5wcm94eV8sXG4gICAgICAgICAgaW5kZXg6IGluZGV4LFxuICAgICAgICAgIG5ld1ZhbHVlOiBuZXdWYWx1ZVxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKCFjaGFuZ2UpIHJldHVybjtcbiAgICAgICAgbmV3VmFsdWUgPSBjaGFuZ2UubmV3VmFsdWU7XG4gICAgICB9XG5cbiAgICAgIG5ld1ZhbHVlID0gdGhpcy5lbmhhbmNlcl8obmV3VmFsdWUsIG9sZFZhbHVlKTtcbiAgICAgIHZhciBjaGFuZ2VkID0gbmV3VmFsdWUgIT09IG9sZFZhbHVlO1xuXG4gICAgICBpZiAoY2hhbmdlZCkge1xuICAgICAgICB2YWx1ZXNbaW5kZXhdID0gbmV3VmFsdWU7XG4gICAgICAgIHRoaXMubm90aWZ5QXJyYXlDaGlsZFVwZGF0ZV8oaW5kZXgsIG5ld1ZhbHVlLCBvbGRWYWx1ZSk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChpbmRleCA9PT0gdmFsdWVzLmxlbmd0aCkge1xuICAgICAgLy8gYWRkIGEgbmV3IGl0ZW1cbiAgICAgIHRoaXMuc3BsaWNlV2l0aEFycmF5XyhpbmRleCwgMCwgW25ld1ZhbHVlXSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIG91dCBvZiBib3VuZHNcbiAgICAgIGRpZSgxNywgaW5kZXgsIHZhbHVlcy5sZW5ndGgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gT2JzZXJ2YWJsZUFycmF5QWRtaW5pc3RyYXRpb247XG59KCk7XG5mdW5jdGlvbiBjcmVhdGVPYnNlcnZhYmxlQXJyYXkoaW5pdGlhbFZhbHVlcywgZW5oYW5jZXIsIG5hbWUsIG93bmVkKSB7XG4gIGlmIChuYW1lID09PSB2b2lkIDApIHtcbiAgICBuYW1lID0gTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gXCJPYnNlcnZhYmxlQXJyYXlAXCIgKyBnZXROZXh0SWQoKSA6IFwiT2JzZXJ2YWJsZUFycmF5XCI7XG4gIH1cblxuICBpZiAob3duZWQgPT09IHZvaWQgMCkge1xuICAgIG93bmVkID0gZmFsc2U7XG4gIH1cblxuICBhc3NlcnRQcm94aWVzKCk7XG4gIHZhciBhZG0gPSBuZXcgT2JzZXJ2YWJsZUFycmF5QWRtaW5pc3RyYXRpb24obmFtZSwgZW5oYW5jZXIsIG93bmVkLCBmYWxzZSk7XG4gIGFkZEhpZGRlbkZpbmFsUHJvcChhZG0udmFsdWVzXywgJG1vYngsIGFkbSk7XG4gIHZhciBwcm94eSA9IG5ldyBQcm94eShhZG0udmFsdWVzXywgYXJyYXlUcmFwcyk7XG4gIGFkbS5wcm94eV8gPSBwcm94eTtcblxuICBpZiAoaW5pdGlhbFZhbHVlcyAmJiBpbml0aWFsVmFsdWVzLmxlbmd0aCkge1xuICAgIHZhciBwcmV2ID0gYWxsb3dTdGF0ZUNoYW5nZXNTdGFydCh0cnVlKTtcbiAgICBhZG0uc3BsaWNlV2l0aEFycmF5XygwLCAwLCBpbml0aWFsVmFsdWVzKTtcbiAgICBhbGxvd1N0YXRlQ2hhbmdlc0VuZChwcmV2KTtcbiAgfVxuXG4gIHJldHVybiBwcm94eTtcbn0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG5cbnZhciBhcnJheUV4dGVuc2lvbnMgPSB7XG4gIGNsZWFyOiBmdW5jdGlvbiBjbGVhcigpIHtcbiAgICByZXR1cm4gdGhpcy5zcGxpY2UoMCk7XG4gIH0sXG4gIHJlcGxhY2U6IGZ1bmN0aW9uIHJlcGxhY2UobmV3SXRlbXMpIHtcbiAgICB2YXIgYWRtID0gdGhpc1skbW9ieF07XG4gICAgcmV0dXJuIGFkbS5zcGxpY2VXaXRoQXJyYXlfKDAsIGFkbS52YWx1ZXNfLmxlbmd0aCwgbmV3SXRlbXMpO1xuICB9LFxuICAvLyBVc2VkIGJ5IEpTT04uc3RyaW5naWZ5XG4gIHRvSlNPTjogZnVuY3Rpb24gdG9KU09OKCkge1xuICAgIHJldHVybiB0aGlzLnNsaWNlKCk7XG4gIH0sXG5cbiAgLypcbiAgICogZnVuY3Rpb25zIHRoYXQgZG8gYWx0ZXIgdGhlIGludGVybmFsIHN0cnVjdHVyZSBvZiB0aGUgYXJyYXksIChiYXNlZCBvbiBsaWIuZXM2LmQudHMpXG4gICAqIHNpbmNlIHRoZXNlIGZ1bmN0aW9ucyBhbHRlciB0aGUgaW5uZXIgc3RydWN0dXJlIG9mIHRoZSBhcnJheSwgdGhlIGhhdmUgc2lkZSBlZmZlY3RzLlxuICAgKiBCZWNhdXNlIHRoZSBoYXZlIHNpZGUgZWZmZWN0cywgdGhleSBzaG91bGQgbm90IGJlIHVzZWQgaW4gY29tcHV0ZWQgZnVuY3Rpb24sXG4gICAqIGFuZCBmb3IgdGhhdCByZWFzb24gdGhlIGRvIG5vdCBjYWxsIGRlcGVuZGVuY3lTdGF0ZS5ub3RpZnlPYnNlcnZlZFxuICAgKi9cbiAgc3BsaWNlOiBmdW5jdGlvbiBzcGxpY2UoaW5kZXgsIGRlbGV0ZUNvdW50KSB7XG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIG5ld0l0ZW1zID0gbmV3IEFycmF5KF9sZW4gPiAyID8gX2xlbiAtIDIgOiAwKSwgX2tleSA9IDI7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIG5ld0l0ZW1zW19rZXkgLSAyXSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICB2YXIgYWRtID0gdGhpc1skbW9ieF07XG5cbiAgICBzd2l0Y2ggKGFyZ3VtZW50cy5sZW5ndGgpIHtcbiAgICAgIGNhc2UgMDpcbiAgICAgICAgcmV0dXJuIFtdO1xuXG4gICAgICBjYXNlIDE6XG4gICAgICAgIHJldHVybiBhZG0uc3BsaWNlV2l0aEFycmF5XyhpbmRleCk7XG5cbiAgICAgIGNhc2UgMjpcbiAgICAgICAgcmV0dXJuIGFkbS5zcGxpY2VXaXRoQXJyYXlfKGluZGV4LCBkZWxldGVDb3VudCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFkbS5zcGxpY2VXaXRoQXJyYXlfKGluZGV4LCBkZWxldGVDb3VudCwgbmV3SXRlbXMpO1xuICB9LFxuICBzcGxpY2VXaXRoQXJyYXk6IGZ1bmN0aW9uIHNwbGljZVdpdGhBcnJheShpbmRleCwgZGVsZXRlQ291bnQsIG5ld0l0ZW1zKSB7XG4gICAgcmV0dXJuIHRoaXNbJG1vYnhdLnNwbGljZVdpdGhBcnJheV8oaW5kZXgsIGRlbGV0ZUNvdW50LCBuZXdJdGVtcyk7XG4gIH0sXG4gIHB1c2g6IGZ1bmN0aW9uIHB1c2goKSB7XG4gICAgdmFyIGFkbSA9IHRoaXNbJG1vYnhdO1xuXG4gICAgZm9yICh2YXIgX2xlbjIgPSBhcmd1bWVudHMubGVuZ3RoLCBpdGVtcyA9IG5ldyBBcnJheShfbGVuMiksIF9rZXkyID0gMDsgX2tleTIgPCBfbGVuMjsgX2tleTIrKykge1xuICAgICAgaXRlbXNbX2tleTJdID0gYXJndW1lbnRzW19rZXkyXTtcbiAgICB9XG5cbiAgICBhZG0uc3BsaWNlV2l0aEFycmF5XyhhZG0udmFsdWVzXy5sZW5ndGgsIDAsIGl0ZW1zKTtcbiAgICByZXR1cm4gYWRtLnZhbHVlc18ubGVuZ3RoO1xuICB9LFxuICBwb3A6IGZ1bmN0aW9uIHBvcCgpIHtcbiAgICByZXR1cm4gdGhpcy5zcGxpY2UoTWF0aC5tYXgodGhpc1skbW9ieF0udmFsdWVzXy5sZW5ndGggLSAxLCAwKSwgMSlbMF07XG4gIH0sXG4gIHNoaWZ0OiBmdW5jdGlvbiBzaGlmdCgpIHtcbiAgICByZXR1cm4gdGhpcy5zcGxpY2UoMCwgMSlbMF07XG4gIH0sXG4gIHVuc2hpZnQ6IGZ1bmN0aW9uIHVuc2hpZnQoKSB7XG4gICAgdmFyIGFkbSA9IHRoaXNbJG1vYnhdO1xuXG4gICAgZm9yICh2YXIgX2xlbjMgPSBhcmd1bWVudHMubGVuZ3RoLCBpdGVtcyA9IG5ldyBBcnJheShfbGVuMyksIF9rZXkzID0gMDsgX2tleTMgPCBfbGVuMzsgX2tleTMrKykge1xuICAgICAgaXRlbXNbX2tleTNdID0gYXJndW1lbnRzW19rZXkzXTtcbiAgICB9XG5cbiAgICBhZG0uc3BsaWNlV2l0aEFycmF5XygwLCAwLCBpdGVtcyk7XG4gICAgcmV0dXJuIGFkbS52YWx1ZXNfLmxlbmd0aDtcbiAgfSxcbiAgcmV2ZXJzZTogZnVuY3Rpb24gcmV2ZXJzZSgpIHtcbiAgICAvLyByZXZlcnNlIGJ5IGRlZmF1bHQgbXV0YXRlcyBpbiBwbGFjZSBiZWZvcmUgcmV0dXJuaW5nIHRoZSByZXN1bHRcbiAgICAvLyB3aGljaCBtYWtlcyBpdCBib3RoIGEgJ2Rlcml2YXRpb24nIGFuZCBhICdtdXRhdGlvbicuXG4gICAgaWYgKGdsb2JhbFN0YXRlLnRyYWNraW5nRGVyaXZhdGlvbikge1xuICAgICAgZGllKDM3LCBcInJldmVyc2VcIik7XG4gICAgfVxuXG4gICAgdGhpcy5yZXBsYWNlKHRoaXMuc2xpY2UoKS5yZXZlcnNlKCkpO1xuICAgIHJldHVybiB0aGlzO1xuICB9LFxuICBzb3J0OiBmdW5jdGlvbiBzb3J0KCkge1xuICAgIC8vIHNvcnQgYnkgZGVmYXVsdCBtdXRhdGVzIGluIHBsYWNlIGJlZm9yZSByZXR1cm5pbmcgdGhlIHJlc3VsdFxuICAgIC8vIHdoaWNoIGdvZXMgYWdhaW5zdCBhbGwgZ29vZCBwcmFjdGljZXMuIExldCdzIG5vdCBjaGFuZ2UgdGhlIGFycmF5IGluIHBsYWNlIVxuICAgIGlmIChnbG9iYWxTdGF0ZS50cmFja2luZ0Rlcml2YXRpb24pIHtcbiAgICAgIGRpZSgzNywgXCJzb3J0XCIpO1xuICAgIH1cblxuICAgIHZhciBjb3B5ID0gdGhpcy5zbGljZSgpO1xuICAgIGNvcHkuc29ydC5hcHBseShjb3B5LCBhcmd1bWVudHMpO1xuICAgIHRoaXMucmVwbGFjZShjb3B5KTtcbiAgICByZXR1cm4gdGhpcztcbiAgfSxcbiAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUodmFsdWUpIHtcbiAgICB2YXIgYWRtID0gdGhpc1skbW9ieF07XG4gICAgdmFyIGlkeCA9IGFkbS5kZWhhbmNlVmFsdWVzXyhhZG0udmFsdWVzXykuaW5kZXhPZih2YWx1ZSk7XG5cbiAgICBpZiAoaWR4ID4gLTEpIHtcbiAgICAgIHRoaXMuc3BsaWNlKGlkeCwgMSk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn07XG4vKipcbiAqIFdyYXAgZnVuY3Rpb24gZnJvbSBwcm90b3R5cGVcbiAqIFdpdGhvdXQgdGhpcywgZXZlcnl0aGluZyB3b3JrcyBhcyB3ZWxsLCBidXQgdGhpcyB3b3Jrc1xuICogZmFzdGVyIGFzIGV2ZXJ5dGhpbmcgd29ya3Mgb24gdW5wcm94aWVkIHZhbHVlc1xuICovXG5cbmFkZEFycmF5RXh0ZW5zaW9uKFwiY29uY2F0XCIsIHNpbXBsZUZ1bmMpO1xuYWRkQXJyYXlFeHRlbnNpb24oXCJmbGF0XCIsIHNpbXBsZUZ1bmMpO1xuYWRkQXJyYXlFeHRlbnNpb24oXCJpbmNsdWRlc1wiLCBzaW1wbGVGdW5jKTtcbmFkZEFycmF5RXh0ZW5zaW9uKFwiaW5kZXhPZlwiLCBzaW1wbGVGdW5jKTtcbmFkZEFycmF5RXh0ZW5zaW9uKFwiam9pblwiLCBzaW1wbGVGdW5jKTtcbmFkZEFycmF5RXh0ZW5zaW9uKFwibGFzdEluZGV4T2ZcIiwgc2ltcGxlRnVuYyk7XG5hZGRBcnJheUV4dGVuc2lvbihcInNsaWNlXCIsIHNpbXBsZUZ1bmMpO1xuYWRkQXJyYXlFeHRlbnNpb24oXCJ0b1N0cmluZ1wiLCBzaW1wbGVGdW5jKTtcbmFkZEFycmF5RXh0ZW5zaW9uKFwidG9Mb2NhbGVTdHJpbmdcIiwgc2ltcGxlRnVuYyk7IC8vIG1hcFxuXG5hZGRBcnJheUV4dGVuc2lvbihcImV2ZXJ5XCIsIG1hcExpa2VGdW5jKTtcbmFkZEFycmF5RXh0ZW5zaW9uKFwiZmlsdGVyXCIsIG1hcExpa2VGdW5jKTtcbmFkZEFycmF5RXh0ZW5zaW9uKFwiZmluZFwiLCBtYXBMaWtlRnVuYyk7XG5hZGRBcnJheUV4dGVuc2lvbihcImZpbmRJbmRleFwiLCBtYXBMaWtlRnVuYyk7XG5hZGRBcnJheUV4dGVuc2lvbihcImZsYXRNYXBcIiwgbWFwTGlrZUZ1bmMpO1xuYWRkQXJyYXlFeHRlbnNpb24oXCJmb3JFYWNoXCIsIG1hcExpa2VGdW5jKTtcbmFkZEFycmF5RXh0ZW5zaW9uKFwibWFwXCIsIG1hcExpa2VGdW5jKTtcbmFkZEFycmF5RXh0ZW5zaW9uKFwic29tZVwiLCBtYXBMaWtlRnVuYyk7IC8vIHJlZHVjZVxuXG5hZGRBcnJheUV4dGVuc2lvbihcInJlZHVjZVwiLCByZWR1Y2VMaWtlRnVuYyk7XG5hZGRBcnJheUV4dGVuc2lvbihcInJlZHVjZVJpZ2h0XCIsIHJlZHVjZUxpa2VGdW5jKTtcblxuZnVuY3Rpb24gYWRkQXJyYXlFeHRlbnNpb24oZnVuY05hbWUsIGZ1bmNGYWN0b3J5KSB7XG4gIGlmICh0eXBlb2YgQXJyYXkucHJvdG90eXBlW2Z1bmNOYW1lXSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgYXJyYXlFeHRlbnNpb25zW2Z1bmNOYW1lXSA9IGZ1bmNGYWN0b3J5KGZ1bmNOYW1lKTtcbiAgfVxufSAvLyBSZXBvcnQgYW5kIGRlbGVnYXRlIHRvIGRlaGFuY2VkIGFycmF5XG5cblxuZnVuY3Rpb24gc2ltcGxlRnVuYyhmdW5jTmFtZSkge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHZhciBhZG0gPSB0aGlzWyRtb2J4XTtcbiAgICBhZG0uYXRvbV8ucmVwb3J0T2JzZXJ2ZWQoKTtcbiAgICB2YXIgZGVoYW5jZWRWYWx1ZXMgPSBhZG0uZGVoYW5jZVZhbHVlc18oYWRtLnZhbHVlc18pO1xuICAgIHJldHVybiBkZWhhbmNlZFZhbHVlc1tmdW5jTmFtZV0uYXBwbHkoZGVoYW5jZWRWYWx1ZXMsIGFyZ3VtZW50cyk7XG4gIH07XG59IC8vIE1ha2Ugc3VyZSBjYWxsYmFja3MgcmVjaWV2ZSBjb3JyZWN0IGFycmF5IGFyZyAjMjMyNlxuXG5cbmZ1bmN0aW9uIG1hcExpa2VGdW5jKGZ1bmNOYW1lKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoY2FsbGJhY2ssIHRoaXNBcmcpIHtcbiAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgIHZhciBhZG0gPSB0aGlzWyRtb2J4XTtcbiAgICBhZG0uYXRvbV8ucmVwb3J0T2JzZXJ2ZWQoKTtcbiAgICB2YXIgZGVoYW5jZWRWYWx1ZXMgPSBhZG0uZGVoYW5jZVZhbHVlc18oYWRtLnZhbHVlc18pO1xuICAgIHJldHVybiBkZWhhbmNlZFZhbHVlc1tmdW5jTmFtZV0oZnVuY3Rpb24gKGVsZW1lbnQsIGluZGV4KSB7XG4gICAgICByZXR1cm4gY2FsbGJhY2suY2FsbCh0aGlzQXJnLCBlbGVtZW50LCBpbmRleCwgX3RoaXMyKTtcbiAgICB9KTtcbiAgfTtcbn0gLy8gTWFrZSBzdXJlIGNhbGxiYWNrcyByZWNpZXZlIGNvcnJlY3QgYXJyYXkgYXJnICMyMzI2XG5cblxuZnVuY3Rpb24gcmVkdWNlTGlrZUZ1bmMoZnVuY05hbWUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgX3RoaXMzID0gdGhpcztcblxuICAgIHZhciBhZG0gPSB0aGlzWyRtb2J4XTtcbiAgICBhZG0uYXRvbV8ucmVwb3J0T2JzZXJ2ZWQoKTtcbiAgICB2YXIgZGVoYW5jZWRWYWx1ZXMgPSBhZG0uZGVoYW5jZVZhbHVlc18oYWRtLnZhbHVlc18pOyAvLyAjMjQzMiAtIHJlZHVjZSBiZWhhdmlvciBkZXBlbmRzIG9uIGFyZ3VtZW50cy5sZW5ndGhcblxuICAgIHZhciBjYWxsYmFjayA9IGFyZ3VtZW50c1swXTtcblxuICAgIGFyZ3VtZW50c1swXSA9IGZ1bmN0aW9uIChhY2N1bXVsYXRvciwgY3VycmVudFZhbHVlLCBpbmRleCkge1xuICAgICAgcmV0dXJuIGNhbGxiYWNrKGFjY3VtdWxhdG9yLCBjdXJyZW50VmFsdWUsIGluZGV4LCBfdGhpczMpO1xuICAgIH07XG5cbiAgICByZXR1cm4gZGVoYW5jZWRWYWx1ZXNbZnVuY05hbWVdLmFwcGx5KGRlaGFuY2VkVmFsdWVzLCBhcmd1bWVudHMpO1xuICB9O1xufVxuXG52YXIgaXNPYnNlcnZhYmxlQXJyYXlBZG1pbmlzdHJhdGlvbiA9IC8qI19fUFVSRV9fKi9jcmVhdGVJbnN0YW5jZW9mUHJlZGljYXRlKFwiT2JzZXJ2YWJsZUFycmF5QWRtaW5pc3RyYXRpb25cIiwgT2JzZXJ2YWJsZUFycmF5QWRtaW5pc3RyYXRpb24pO1xuZnVuY3Rpb24gaXNPYnNlcnZhYmxlQXJyYXkodGhpbmcpIHtcbiAgcmV0dXJuIGlzT2JqZWN0KHRoaW5nKSAmJiBpc09ic2VydmFibGVBcnJheUFkbWluaXN0cmF0aW9uKHRoaW5nWyRtb2J4XSk7XG59XG5cbnZhciBfU3ltYm9sJGl0ZXJhdG9yLCBfU3ltYm9sJHRvU3RyaW5nVGFnO1xudmFyIE9ic2VydmFibGVNYXBNYXJrZXIgPSB7fTtcbnZhciBBREQgPSBcImFkZFwiO1xudmFyIERFTEVURSA9IFwiZGVsZXRlXCI7IC8vIGp1c3QgZXh0ZW5kIE1hcD8gU2VlIGFsc28gaHR0cHM6Ly9naXN0LmdpdGh1Yi5jb20vbmVzdGhhcnVzLzEzYjRkNzRmMmVmNGEyZjQzNTdkYmQzZmMyM2MxZTU0XG4vLyBCdXQ6IGh0dHBzOi8vZ2l0aHViLmNvbS9tb2J4anMvbW9ieC9pc3N1ZXMvMTU1NlxuXG5fU3ltYm9sJGl0ZXJhdG9yID0gU3ltYm9sLml0ZXJhdG9yO1xuX1N5bWJvbCR0b1N0cmluZ1RhZyA9IFN5bWJvbC50b1N0cmluZ1RhZztcbnZhciBPYnNlcnZhYmxlTWFwID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcbiAgLy8gaGFzTWFwLCBub3QgaGFzaE1hcCA+LSkuXG4gIGZ1bmN0aW9uIE9ic2VydmFibGVNYXAoaW5pdGlhbERhdGEsIGVuaGFuY2VyXywgbmFtZV8pIHtcbiAgICBpZiAoZW5oYW5jZXJfID09PSB2b2lkIDApIHtcbiAgICAgIGVuaGFuY2VyXyA9IGRlZXBFbmhhbmNlcjtcbiAgICB9XG5cbiAgICBpZiAobmFtZV8gPT09IHZvaWQgMCkge1xuICAgICAgbmFtZV8gPSBOT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBcIk9ic2VydmFibGVNYXBAXCIgKyBnZXROZXh0SWQoKSA6IFwiT2JzZXJ2YWJsZU1hcFwiO1xuICAgIH1cblxuICAgIHRoaXMuZW5oYW5jZXJfID0gdm9pZCAwO1xuICAgIHRoaXMubmFtZV8gPSB2b2lkIDA7XG4gICAgdGhpc1skbW9ieF0gPSBPYnNlcnZhYmxlTWFwTWFya2VyO1xuICAgIHRoaXMuZGF0YV8gPSB2b2lkIDA7XG4gICAgdGhpcy5oYXNNYXBfID0gdm9pZCAwO1xuICAgIHRoaXMua2V5c0F0b21fID0gdm9pZCAwO1xuICAgIHRoaXMuaW50ZXJjZXB0b3JzXyA9IHZvaWQgMDtcbiAgICB0aGlzLmNoYW5nZUxpc3RlbmVyc18gPSB2b2lkIDA7XG4gICAgdGhpcy5kZWhhbmNlciA9IHZvaWQgMDtcbiAgICB0aGlzLmVuaGFuY2VyXyA9IGVuaGFuY2VyXztcbiAgICB0aGlzLm5hbWVfID0gbmFtZV87XG5cbiAgICBpZiAoIWlzRnVuY3Rpb24oTWFwKSkge1xuICAgICAgZGllKDE4KTtcbiAgICB9XG5cbiAgICB0aGlzLmtleXNBdG9tXyA9IGNyZWF0ZUF0b20oTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gdGhpcy5uYW1lXyArIFwiLmtleXMoKVwiIDogXCJPYnNlcnZhYmxlTWFwLmtleXMoKVwiKTtcbiAgICB0aGlzLmRhdGFfID0gbmV3IE1hcCgpO1xuICAgIHRoaXMuaGFzTWFwXyA9IG5ldyBNYXAoKTtcbiAgICB0aGlzLm1lcmdlKGluaXRpYWxEYXRhKTtcbiAgfVxuXG4gIHZhciBfcHJvdG8gPSBPYnNlcnZhYmxlTWFwLnByb3RvdHlwZTtcblxuICBfcHJvdG8uaGFzXyA9IGZ1bmN0aW9uIGhhc18oa2V5KSB7XG4gICAgcmV0dXJuIHRoaXMuZGF0YV8uaGFzKGtleSk7XG4gIH07XG5cbiAgX3Byb3RvLmhhcyA9IGZ1bmN0aW9uIGhhcyhrZXkpIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgaWYgKCFnbG9iYWxTdGF0ZS50cmFja2luZ0Rlcml2YXRpb24pIHJldHVybiB0aGlzLmhhc18oa2V5KTtcbiAgICB2YXIgZW50cnkgPSB0aGlzLmhhc01hcF8uZ2V0KGtleSk7XG5cbiAgICBpZiAoIWVudHJ5KSB7XG4gICAgICB2YXIgbmV3RW50cnkgPSBlbnRyeSA9IG5ldyBPYnNlcnZhYmxlVmFsdWUodGhpcy5oYXNfKGtleSksIHJlZmVyZW5jZUVuaGFuY2VyLCBOT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyB0aGlzLm5hbWVfICsgXCIuXCIgKyBzdHJpbmdpZnlLZXkoa2V5KSArIFwiP1wiIDogXCJPYnNlcnZhYmxlTWFwLmtleT9cIiwgZmFsc2UpO1xuICAgICAgdGhpcy5oYXNNYXBfLnNldChrZXksIG5ld0VudHJ5KTtcbiAgICAgIG9uQmVjb21lVW5vYnNlcnZlZChuZXdFbnRyeSwgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gX3RoaXMuaGFzTWFwX1tcImRlbGV0ZVwiXShrZXkpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGVudHJ5LmdldCgpO1xuICB9O1xuXG4gIF9wcm90by5zZXQgPSBmdW5jdGlvbiBzZXQoa2V5LCB2YWx1ZSkge1xuICAgIHZhciBoYXNLZXkgPSB0aGlzLmhhc18oa2V5KTtcblxuICAgIGlmIChoYXNJbnRlcmNlcHRvcnModGhpcykpIHtcbiAgICAgIHZhciBjaGFuZ2UgPSBpbnRlcmNlcHRDaGFuZ2UodGhpcywge1xuICAgICAgICB0eXBlOiBoYXNLZXkgPyBVUERBVEUgOiBBREQsXG4gICAgICAgIG9iamVjdDogdGhpcyxcbiAgICAgICAgbmV3VmFsdWU6IHZhbHVlLFxuICAgICAgICBuYW1lOiBrZXlcbiAgICAgIH0pO1xuICAgICAgaWYgKCFjaGFuZ2UpIHJldHVybiB0aGlzO1xuICAgICAgdmFsdWUgPSBjaGFuZ2UubmV3VmFsdWU7XG4gICAgfVxuXG4gICAgaWYgKGhhc0tleSkge1xuICAgICAgdGhpcy51cGRhdGVWYWx1ZV8oa2V5LCB2YWx1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuYWRkVmFsdWVfKGtleSwgdmFsdWUpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIF9wcm90b1tcImRlbGV0ZVwiXSA9IGZ1bmN0aW9uIF9kZWxldGUoa2V5KSB7XG4gICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICBjaGVja0lmU3RhdGVNb2RpZmljYXRpb25zQXJlQWxsb3dlZCh0aGlzLmtleXNBdG9tXyk7XG5cbiAgICBpZiAoaGFzSW50ZXJjZXB0b3JzKHRoaXMpKSB7XG4gICAgICB2YXIgY2hhbmdlID0gaW50ZXJjZXB0Q2hhbmdlKHRoaXMsIHtcbiAgICAgICAgdHlwZTogREVMRVRFLFxuICAgICAgICBvYmplY3Q6IHRoaXMsXG4gICAgICAgIG5hbWU6IGtleVxuICAgICAgfSk7XG4gICAgICBpZiAoIWNoYW5nZSkgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmhhc18oa2V5KSkge1xuICAgICAgdmFyIG5vdGlmeVNweSA9IGlzU3B5RW5hYmxlZCgpO1xuICAgICAgdmFyIG5vdGlmeSA9IGhhc0xpc3RlbmVycyh0aGlzKTtcblxuICAgICAgdmFyIF9jaGFuZ2UgPSBub3RpZnkgfHwgbm90aWZ5U3B5ID8ge1xuICAgICAgICBvYnNlcnZhYmxlS2luZDogXCJtYXBcIixcbiAgICAgICAgZGVidWdPYmplY3ROYW1lOiB0aGlzLm5hbWVfLFxuICAgICAgICB0eXBlOiBERUxFVEUsXG4gICAgICAgIG9iamVjdDogdGhpcyxcbiAgICAgICAgb2xkVmFsdWU6IHRoaXMuZGF0YV8uZ2V0KGtleSkudmFsdWVfLFxuICAgICAgICBuYW1lOiBrZXlcbiAgICAgIH0gOiBudWxsO1xuXG4gICAgICBpZiAoTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiICYmIG5vdGlmeVNweSkgc3B5UmVwb3J0U3RhcnQoX2NoYW5nZSk7XG4gICAgICB0cmFuc2FjdGlvbihmdW5jdGlvbiAoKSB7XG4gICAgICAgIF90aGlzMi5rZXlzQXRvbV8ucmVwb3J0Q2hhbmdlZCgpO1xuXG4gICAgICAgIF90aGlzMi51cGRhdGVIYXNNYXBFbnRyeV8oa2V5LCBmYWxzZSk7XG5cbiAgICAgICAgdmFyIG9ic2VydmFibGUgPSBfdGhpczIuZGF0YV8uZ2V0KGtleSk7XG5cbiAgICAgICAgb2JzZXJ2YWJsZS5zZXROZXdWYWx1ZV8odW5kZWZpbmVkKTtcblxuICAgICAgICBfdGhpczIuZGF0YV9bXCJkZWxldGVcIl0oa2V5KTtcbiAgICAgIH0pO1xuICAgICAgaWYgKG5vdGlmeSkgbm90aWZ5TGlzdGVuZXJzKHRoaXMsIF9jaGFuZ2UpO1xuICAgICAgaWYgKE5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiAmJiBub3RpZnlTcHkpIHNweVJlcG9ydEVuZCgpO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9O1xuXG4gIF9wcm90by51cGRhdGVIYXNNYXBFbnRyeV8gPSBmdW5jdGlvbiB1cGRhdGVIYXNNYXBFbnRyeV8oa2V5LCB2YWx1ZSkge1xuICAgIHZhciBlbnRyeSA9IHRoaXMuaGFzTWFwXy5nZXQoa2V5KTtcblxuICAgIGlmIChlbnRyeSkge1xuICAgICAgZW50cnkuc2V0TmV3VmFsdWVfKHZhbHVlKTtcbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLnVwZGF0ZVZhbHVlXyA9IGZ1bmN0aW9uIHVwZGF0ZVZhbHVlXyhrZXksIG5ld1ZhbHVlKSB7XG4gICAgdmFyIG9ic2VydmFibGUgPSB0aGlzLmRhdGFfLmdldChrZXkpO1xuICAgIG5ld1ZhbHVlID0gb2JzZXJ2YWJsZS5wcmVwYXJlTmV3VmFsdWVfKG5ld1ZhbHVlKTtcblxuICAgIGlmIChuZXdWYWx1ZSAhPT0gZ2xvYmFsU3RhdGUuVU5DSEFOR0VEKSB7XG4gICAgICB2YXIgbm90aWZ5U3B5ID0gaXNTcHlFbmFibGVkKCk7XG4gICAgICB2YXIgbm90aWZ5ID0gaGFzTGlzdGVuZXJzKHRoaXMpO1xuICAgICAgdmFyIGNoYW5nZSA9IG5vdGlmeSB8fCBub3RpZnlTcHkgPyB7XG4gICAgICAgIG9ic2VydmFibGVLaW5kOiBcIm1hcFwiLFxuICAgICAgICBkZWJ1Z09iamVjdE5hbWU6IHRoaXMubmFtZV8sXG4gICAgICAgIHR5cGU6IFVQREFURSxcbiAgICAgICAgb2JqZWN0OiB0aGlzLFxuICAgICAgICBvbGRWYWx1ZTogb2JzZXJ2YWJsZS52YWx1ZV8sXG4gICAgICAgIG5hbWU6IGtleSxcbiAgICAgICAgbmV3VmFsdWU6IG5ld1ZhbHVlXG4gICAgICB9IDogbnVsbDtcbiAgICAgIGlmIChOT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgJiYgbm90aWZ5U3B5KSBzcHlSZXBvcnRTdGFydChjaGFuZ2UpO1xuICAgICAgb2JzZXJ2YWJsZS5zZXROZXdWYWx1ZV8obmV3VmFsdWUpO1xuICAgICAgaWYgKG5vdGlmeSkgbm90aWZ5TGlzdGVuZXJzKHRoaXMsIGNoYW5nZSk7XG4gICAgICBpZiAoTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiICYmIG5vdGlmeVNweSkgc3B5UmVwb3J0RW5kKCk7XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by5hZGRWYWx1ZV8gPSBmdW5jdGlvbiBhZGRWYWx1ZV8oa2V5LCBuZXdWYWx1ZSkge1xuICAgIHZhciBfdGhpczMgPSB0aGlzO1xuXG4gICAgY2hlY2tJZlN0YXRlTW9kaWZpY2F0aW9uc0FyZUFsbG93ZWQodGhpcy5rZXlzQXRvbV8pO1xuICAgIHRyYW5zYWN0aW9uKGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBvYnNlcnZhYmxlID0gbmV3IE9ic2VydmFibGVWYWx1ZShuZXdWYWx1ZSwgX3RoaXMzLmVuaGFuY2VyXywgTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gX3RoaXMzLm5hbWVfICsgXCIuXCIgKyBzdHJpbmdpZnlLZXkoa2V5KSA6IFwiT2JzZXJ2YWJsZU1hcC5rZXlcIiwgZmFsc2UpO1xuXG4gICAgICBfdGhpczMuZGF0YV8uc2V0KGtleSwgb2JzZXJ2YWJsZSk7XG5cbiAgICAgIG5ld1ZhbHVlID0gb2JzZXJ2YWJsZS52YWx1ZV87IC8vIHZhbHVlIG1pZ2h0IGhhdmUgYmVlbiBjaGFuZ2VkXG5cbiAgICAgIF90aGlzMy51cGRhdGVIYXNNYXBFbnRyeV8oa2V5LCB0cnVlKTtcblxuICAgICAgX3RoaXMzLmtleXNBdG9tXy5yZXBvcnRDaGFuZ2VkKCk7XG4gICAgfSk7XG4gICAgdmFyIG5vdGlmeVNweSA9IGlzU3B5RW5hYmxlZCgpO1xuICAgIHZhciBub3RpZnkgPSBoYXNMaXN0ZW5lcnModGhpcyk7XG4gICAgdmFyIGNoYW5nZSA9IG5vdGlmeSB8fCBub3RpZnlTcHkgPyB7XG4gICAgICBvYnNlcnZhYmxlS2luZDogXCJtYXBcIixcbiAgICAgIGRlYnVnT2JqZWN0TmFtZTogdGhpcy5uYW1lXyxcbiAgICAgIHR5cGU6IEFERCxcbiAgICAgIG9iamVjdDogdGhpcyxcbiAgICAgIG5hbWU6IGtleSxcbiAgICAgIG5ld1ZhbHVlOiBuZXdWYWx1ZVxuICAgIH0gOiBudWxsO1xuICAgIGlmIChOT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgJiYgbm90aWZ5U3B5KSBzcHlSZXBvcnRTdGFydChjaGFuZ2UpO1xuICAgIGlmIChub3RpZnkpIG5vdGlmeUxpc3RlbmVycyh0aGlzLCBjaGFuZ2UpO1xuICAgIGlmIChOT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgJiYgbm90aWZ5U3B5KSBzcHlSZXBvcnRFbmQoKTtcbiAgfTtcblxuICBfcHJvdG8uZ2V0ID0gZnVuY3Rpb24gZ2V0KGtleSkge1xuICAgIGlmICh0aGlzLmhhcyhrZXkpKSByZXR1cm4gdGhpcy5kZWhhbmNlVmFsdWVfKHRoaXMuZGF0YV8uZ2V0KGtleSkuZ2V0KCkpO1xuICAgIHJldHVybiB0aGlzLmRlaGFuY2VWYWx1ZV8odW5kZWZpbmVkKTtcbiAgfTtcblxuICBfcHJvdG8uZGVoYW5jZVZhbHVlXyA9IGZ1bmN0aW9uIGRlaGFuY2VWYWx1ZV8odmFsdWUpIHtcbiAgICBpZiAodGhpcy5kZWhhbmNlciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gdGhpcy5kZWhhbmNlcih2YWx1ZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbHVlO1xuICB9O1xuXG4gIF9wcm90by5rZXlzID0gZnVuY3Rpb24ga2V5cygpIHtcbiAgICB0aGlzLmtleXNBdG9tXy5yZXBvcnRPYnNlcnZlZCgpO1xuICAgIHJldHVybiB0aGlzLmRhdGFfLmtleXMoKTtcbiAgfTtcblxuICBfcHJvdG8udmFsdWVzID0gZnVuY3Rpb24gdmFsdWVzKCkge1xuICAgIHZhciBzZWxmID0gdGhpcztcbiAgICB2YXIga2V5cyA9IHRoaXMua2V5cygpO1xuICAgIHJldHVybiBtYWtlSXRlcmFibGUoe1xuICAgICAgbmV4dDogZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgICAgdmFyIF9rZXlzJG5leHQgPSBrZXlzLm5leHQoKSxcbiAgICAgICAgICAgIGRvbmUgPSBfa2V5cyRuZXh0LmRvbmUsXG4gICAgICAgICAgICB2YWx1ZSA9IF9rZXlzJG5leHQudmFsdWU7XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBkb25lOiBkb25lLFxuICAgICAgICAgIHZhbHVlOiBkb25lID8gdW5kZWZpbmVkIDogc2VsZi5nZXQodmFsdWUpXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG5cbiAgX3Byb3RvLmVudHJpZXMgPSBmdW5jdGlvbiBlbnRyaWVzKCkge1xuICAgIHZhciBzZWxmID0gdGhpcztcbiAgICB2YXIga2V5cyA9IHRoaXMua2V5cygpO1xuICAgIHJldHVybiBtYWtlSXRlcmFibGUoe1xuICAgICAgbmV4dDogZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgICAgdmFyIF9rZXlzJG5leHQyID0ga2V5cy5uZXh0KCksXG4gICAgICAgICAgICBkb25lID0gX2tleXMkbmV4dDIuZG9uZSxcbiAgICAgICAgICAgIHZhbHVlID0gX2tleXMkbmV4dDIudmFsdWU7XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBkb25lOiBkb25lLFxuICAgICAgICAgIHZhbHVlOiBkb25lID8gdW5kZWZpbmVkIDogW3ZhbHVlLCBzZWxmLmdldCh2YWx1ZSldXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG5cbiAgX3Byb3RvW19TeW1ib2wkaXRlcmF0b3JdID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzLmVudHJpZXMoKTtcbiAgfTtcblxuICBfcHJvdG8uZm9yRWFjaCA9IGZ1bmN0aW9uIGZvckVhY2goY2FsbGJhY2ssIHRoaXNBcmcpIHtcbiAgICBmb3IgKHZhciBfaXRlcmF0b3IgPSBfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlckxvb3NlKHRoaXMpLCBfc3RlcDsgIShfc3RlcCA9IF9pdGVyYXRvcigpKS5kb25lOykge1xuICAgICAgdmFyIF9zdGVwJHZhbHVlID0gX3N0ZXAudmFsdWUsXG4gICAgICAgICAga2V5ID0gX3N0ZXAkdmFsdWVbMF0sXG4gICAgICAgICAgdmFsdWUgPSBfc3RlcCR2YWx1ZVsxXTtcbiAgICAgIGNhbGxiYWNrLmNhbGwodGhpc0FyZywgdmFsdWUsIGtleSwgdGhpcyk7XG4gICAgfVxuICB9XG4gIC8qKiBNZXJnZSBhbm90aGVyIG9iamVjdCBpbnRvIHRoaXMgb2JqZWN0LCByZXR1cm5zIHRoaXMuICovXG4gIDtcblxuICBfcHJvdG8ubWVyZ2UgPSBmdW5jdGlvbiBtZXJnZShvdGhlcikge1xuICAgIHZhciBfdGhpczQgPSB0aGlzO1xuXG4gICAgaWYgKGlzT2JzZXJ2YWJsZU1hcChvdGhlcikpIHtcbiAgICAgIG90aGVyID0gbmV3IE1hcChvdGhlcik7XG4gICAgfVxuXG4gICAgdHJhbnNhY3Rpb24oZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKGlzUGxhaW5PYmplY3Qob3RoZXIpKSBnZXRQbGFpbk9iamVjdEtleXMob3RoZXIpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICByZXR1cm4gX3RoaXM0LnNldChrZXksIG90aGVyW2tleV0pO1xuICAgICAgfSk7ZWxzZSBpZiAoQXJyYXkuaXNBcnJheShvdGhlcikpIG90aGVyLmZvckVhY2goZnVuY3Rpb24gKF9yZWYpIHtcbiAgICAgICAgdmFyIGtleSA9IF9yZWZbMF0sXG4gICAgICAgICAgICB2YWx1ZSA9IF9yZWZbMV07XG4gICAgICAgIHJldHVybiBfdGhpczQuc2V0KGtleSwgdmFsdWUpO1xuICAgICAgfSk7ZWxzZSBpZiAoaXNFUzZNYXAob3RoZXIpKSB7XG4gICAgICAgIGlmIChvdGhlci5jb25zdHJ1Y3RvciAhPT0gTWFwKSBkaWUoMTksIG90aGVyKTtcbiAgICAgICAgb3RoZXIuZm9yRWFjaChmdW5jdGlvbiAodmFsdWUsIGtleSkge1xuICAgICAgICAgIHJldHVybiBfdGhpczQuc2V0KGtleSwgdmFsdWUpO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSBpZiAob3RoZXIgIT09IG51bGwgJiYgb3RoZXIgIT09IHVuZGVmaW5lZCkgZGllKDIwLCBvdGhlcik7XG4gICAgfSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgX3Byb3RvLmNsZWFyID0gZnVuY3Rpb24gY2xlYXIoKSB7XG4gICAgdmFyIF90aGlzNSA9IHRoaXM7XG5cbiAgICB0cmFuc2FjdGlvbihmdW5jdGlvbiAoKSB7XG4gICAgICB1bnRyYWNrZWQoZnVuY3Rpb24gKCkge1xuICAgICAgICBmb3IgKHZhciBfaXRlcmF0b3IyID0gX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXJMb29zZShfdGhpczUua2V5cygpKSwgX3N0ZXAyOyAhKF9zdGVwMiA9IF9pdGVyYXRvcjIoKSkuZG9uZTspIHtcbiAgICAgICAgICB2YXIga2V5ID0gX3N0ZXAyLnZhbHVlO1xuXG4gICAgICAgICAgX3RoaXM1W1wiZGVsZXRlXCJdKGtleSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICB9O1xuXG4gIF9wcm90by5yZXBsYWNlID0gZnVuY3Rpb24gcmVwbGFjZSh2YWx1ZXMpIHtcbiAgICB2YXIgX3RoaXM2ID0gdGhpcztcblxuICAgIC8vIEltcGxlbWVudGF0aW9uIHJlcXVpcmVtZW50czpcbiAgICAvLyAtIHJlc3BlY3Qgb3JkZXJpbmcgb2YgcmVwbGFjZW1lbnQgbWFwXG4gICAgLy8gLSBhbGxvdyBpbnRlcmNlcHRvcnMgdG8gcnVuIGFuZCBwb3RlbnRpYWxseSBwcmV2ZW50IGluZGl2aWR1YWwgb3BlcmF0aW9uc1xuICAgIC8vIC0gZG9uJ3QgcmVjcmVhdGUgb2JzZXJ2YWJsZXMgdGhhdCBhbHJlYWR5IGV4aXN0IGluIG9yaWdpbmFsIG1hcCAoc28gd2UgZG9uJ3QgZGVzdHJveSBleGlzdGluZyBzdWJzY3JpcHRpb25zKVxuICAgIC8vIC0gZG9uJ3QgX2tleXNBdG9tLnJlcG9ydENoYW5nZWQgaWYgdGhlIGtleXMgb2YgcmVzdWx0aW5nIG1hcCBhcmUgaW5kZW50aWNhbCAob3JkZXIgbWF0dGVycyEpXG4gICAgLy8gLSBub3RlIHRoYXQgcmVzdWx0IG1hcCBtYXkgZGlmZmVyIGZyb20gcmVwbGFjZW1lbnQgbWFwIGR1ZSB0byB0aGUgaW50ZXJjZXB0b3JzXG4gICAgdHJhbnNhY3Rpb24oZnVuY3Rpb24gKCkge1xuICAgICAgLy8gQ29udmVydCB0byBtYXAgc28gd2UgY2FuIGRvIHF1aWNrIGtleSBsb29rdXBzXG4gICAgICB2YXIgcmVwbGFjZW1lbnRNYXAgPSBjb252ZXJ0VG9NYXAodmFsdWVzKTtcbiAgICAgIHZhciBvcmRlcmVkRGF0YSA9IG5ldyBNYXAoKTsgLy8gVXNlZCBmb3Igb3B0aW1pemF0aW9uXG5cbiAgICAgIHZhciBrZXlzUmVwb3J0Q2hhbmdlZENhbGxlZCA9IGZhbHNlOyAvLyBEZWxldGUga2V5cyB0aGF0IGRvbid0IGV4aXN0IGluIHJlcGxhY2VtZW50IG1hcFxuICAgICAgLy8gaWYgdGhlIGtleSBkZWxldGlvbiBpcyBwcmV2ZW50ZWQgYnkgaW50ZXJjZXB0b3JcbiAgICAgIC8vIGFkZCBlbnRyeSBhdCB0aGUgYmVnaW5uaW5nIG9mIHRoZSByZXN1bHQgbWFwXG5cbiAgICAgIGZvciAodmFyIF9pdGVyYXRvcjMgPSBfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlckxvb3NlKF90aGlzNi5kYXRhXy5rZXlzKCkpLCBfc3RlcDM7ICEoX3N0ZXAzID0gX2l0ZXJhdG9yMygpKS5kb25lOykge1xuICAgICAgICB2YXIga2V5ID0gX3N0ZXAzLnZhbHVlO1xuXG4gICAgICAgIC8vIENvbmN1cnJlbnRseSBpdGVyYXRpbmcvZGVsZXRpbmcga2V5c1xuICAgICAgICAvLyBpdGVyYXRvciBzaG91bGQgaGFuZGxlIHRoaXMgY29ycmVjdGx5XG4gICAgICAgIGlmICghcmVwbGFjZW1lbnRNYXAuaGFzKGtleSkpIHtcbiAgICAgICAgICB2YXIgZGVsZXRlZCA9IF90aGlzNltcImRlbGV0ZVwiXShrZXkpOyAvLyBXYXMgdGhlIGtleSByZW1vdmVkP1xuXG5cbiAgICAgICAgICBpZiAoZGVsZXRlZCkge1xuICAgICAgICAgICAgLy8gX2tleXNBdG9tLnJlcG9ydENoYW5nZWQoKSB3YXMgYWxyZWFkeSBjYWxsZWRcbiAgICAgICAgICAgIGtleXNSZXBvcnRDaGFuZ2VkQ2FsbGVkID0gdHJ1ZTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gRGVsZXRlIHByZXZlbnRlZCBieSBpbnRlcmNlcHRvclxuICAgICAgICAgICAgdmFyIHZhbHVlID0gX3RoaXM2LmRhdGFfLmdldChrZXkpO1xuXG4gICAgICAgICAgICBvcmRlcmVkRGF0YS5zZXQoa2V5LCB2YWx1ZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IC8vIE1lcmdlIGVudHJpZXNcblxuXG4gICAgICBmb3IgKHZhciBfaXRlcmF0b3I0ID0gX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXJMb29zZShyZXBsYWNlbWVudE1hcC5lbnRyaWVzKCkpLCBfc3RlcDQ7ICEoX3N0ZXA0ID0gX2l0ZXJhdG9yNCgpKS5kb25lOykge1xuICAgICAgICB2YXIgX3N0ZXA0JHZhbHVlID0gX3N0ZXA0LnZhbHVlLFxuICAgICAgICAgICAgX2tleSA9IF9zdGVwNCR2YWx1ZVswXSxcbiAgICAgICAgICAgIF92YWx1ZSA9IF9zdGVwNCR2YWx1ZVsxXTtcblxuICAgICAgICAvLyBXZSB3aWxsIHdhbnQgdG8ga25vdyB3aGV0aGVyIGEgbmV3IGtleSBpcyBhZGRlZFxuICAgICAgICB2YXIga2V5RXhpc3RlZCA9IF90aGlzNi5kYXRhXy5oYXMoX2tleSk7IC8vIEFkZCBvciB1cGRhdGUgdmFsdWVcblxuXG4gICAgICAgIF90aGlzNi5zZXQoX2tleSwgX3ZhbHVlKTsgLy8gVGhlIGFkZGl0aW9uIGNvdWxkIGhhdmUgYmVlbiBwcmV2ZW50IGJ5IGludGVyY2VwdG9yXG5cblxuICAgICAgICBpZiAoX3RoaXM2LmRhdGFfLmhhcyhfa2V5KSkge1xuICAgICAgICAgIC8vIFRoZSB1cGRhdGUgY291bGQgaGF2ZSBiZWVuIHByZXZlbnRlZCBieSBpbnRlcmNlcHRvclxuICAgICAgICAgIC8vIGFuZCBhbHNvIHdlIHdhbnQgdG8gcHJlc2VydmUgZXhpc3RpbmcgdmFsdWVzXG4gICAgICAgICAgLy8gc28gdXNlIHZhbHVlIGZyb20gX2RhdGEgbWFwIChpbnN0ZWFkIG9mIHJlcGxhY2VtZW50IG1hcClcbiAgICAgICAgICB2YXIgX3ZhbHVlMiA9IF90aGlzNi5kYXRhXy5nZXQoX2tleSk7XG5cbiAgICAgICAgICBvcmRlcmVkRGF0YS5zZXQoX2tleSwgX3ZhbHVlMik7IC8vIFdhcyBhIG5ldyBrZXkgYWRkZWQ/XG5cbiAgICAgICAgICBpZiAoIWtleUV4aXN0ZWQpIHtcbiAgICAgICAgICAgIC8vIF9rZXlzQXRvbS5yZXBvcnRDaGFuZ2VkKCkgd2FzIGFscmVhZHkgY2FsbGVkXG4gICAgICAgICAgICBrZXlzUmVwb3J0Q2hhbmdlZENhbGxlZCA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IC8vIENoZWNrIGZvciBwb3NzaWJsZSBrZXkgb3JkZXIgY2hhbmdlXG5cblxuICAgICAgaWYgKCFrZXlzUmVwb3J0Q2hhbmdlZENhbGxlZCkge1xuICAgICAgICBpZiAoX3RoaXM2LmRhdGFfLnNpemUgIT09IG9yZGVyZWREYXRhLnNpemUpIHtcbiAgICAgICAgICAvLyBJZiBzaXplIGRpZmZlcnMsIGtleXMgYXJlIGRlZmluaXRlbHkgbW9kaWZpZWRcbiAgICAgICAgICBfdGhpczYua2V5c0F0b21fLnJlcG9ydENoYW5nZWQoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2YXIgaXRlcjEgPSBfdGhpczYuZGF0YV8ua2V5cygpO1xuXG4gICAgICAgICAgdmFyIGl0ZXIyID0gb3JkZXJlZERhdGEua2V5cygpO1xuICAgICAgICAgIHZhciBuZXh0MSA9IGl0ZXIxLm5leHQoKTtcbiAgICAgICAgICB2YXIgbmV4dDIgPSBpdGVyMi5uZXh0KCk7XG5cbiAgICAgICAgICB3aGlsZSAoIW5leHQxLmRvbmUpIHtcbiAgICAgICAgICAgIGlmIChuZXh0MS52YWx1ZSAhPT0gbmV4dDIudmFsdWUpIHtcbiAgICAgICAgICAgICAgX3RoaXM2LmtleXNBdG9tXy5yZXBvcnRDaGFuZ2VkKCk7XG5cbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIG5leHQxID0gaXRlcjEubmV4dCgpO1xuICAgICAgICAgICAgbmV4dDIgPSBpdGVyMi5uZXh0KCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IC8vIFVzZSBjb3JyZWN0bHkgb3JkZXJlZCBtYXBcblxuXG4gICAgICBfdGhpczYuZGF0YV8gPSBvcmRlcmVkRGF0YTtcbiAgICB9KTtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBfcHJvdG8udG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gXCJbb2JqZWN0IE9ic2VydmFibGVNYXBdXCI7XG4gIH07XG5cbiAgX3Byb3RvLnRvSlNPTiA9IGZ1bmN0aW9uIHRvSlNPTigpIHtcbiAgICByZXR1cm4gQXJyYXkuZnJvbSh0aGlzKTtcbiAgfTtcblxuICAvKipcbiAgICogT2JzZXJ2ZXMgdGhpcyBvYmplY3QuIFRyaWdnZXJzIGZvciB0aGUgZXZlbnRzICdhZGQnLCAndXBkYXRlJyBhbmQgJ2RlbGV0ZScuXG4gICAqIFNlZTogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvT2JqZWN0L29ic2VydmVcbiAgICogZm9yIGNhbGxiYWNrIGRldGFpbHNcbiAgICovXG4gIF9wcm90by5vYnNlcnZlXyA9IGZ1bmN0aW9uIG9ic2VydmVfKGxpc3RlbmVyLCBmaXJlSW1tZWRpYXRlbHkpIHtcbiAgICBpZiAoTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiICYmIGZpcmVJbW1lZGlhdGVseSA9PT0gdHJ1ZSkgZGllKFwiYG9ic2VydmVgIGRvZXNuJ3Qgc3VwcG9ydCBmaXJlSW1tZWRpYXRlbHk9dHJ1ZSBpbiBjb21iaW5hdGlvbiB3aXRoIG1hcHMuXCIpO1xuICAgIHJldHVybiByZWdpc3Rlckxpc3RlbmVyKHRoaXMsIGxpc3RlbmVyKTtcbiAgfTtcblxuICBfcHJvdG8uaW50ZXJjZXB0XyA9IGZ1bmN0aW9uIGludGVyY2VwdF8oaGFuZGxlcikge1xuICAgIHJldHVybiByZWdpc3RlckludGVyY2VwdG9yKHRoaXMsIGhhbmRsZXIpO1xuICB9O1xuXG4gIF9jcmVhdGVDbGFzcyhPYnNlcnZhYmxlTWFwLCBbe1xuICAgIGtleTogXCJzaXplXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICB0aGlzLmtleXNBdG9tXy5yZXBvcnRPYnNlcnZlZCgpO1xuICAgICAgcmV0dXJuIHRoaXMuZGF0YV8uc2l6ZTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IF9TeW1ib2wkdG9TdHJpbmdUYWcsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gXCJNYXBcIjtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gT2JzZXJ2YWJsZU1hcDtcbn0oKTsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG5cbnZhciBpc09ic2VydmFibGVNYXAgPSAvKiNfX1BVUkVfXyovY3JlYXRlSW5zdGFuY2VvZlByZWRpY2F0ZShcIk9ic2VydmFibGVNYXBcIiwgT2JzZXJ2YWJsZU1hcCk7XG5cbmZ1bmN0aW9uIGNvbnZlcnRUb01hcChkYXRhU3RydWN0dXJlKSB7XG4gIGlmIChpc0VTNk1hcChkYXRhU3RydWN0dXJlKSB8fCBpc09ic2VydmFibGVNYXAoZGF0YVN0cnVjdHVyZSkpIHtcbiAgICByZXR1cm4gZGF0YVN0cnVjdHVyZTtcbiAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KGRhdGFTdHJ1Y3R1cmUpKSB7XG4gICAgcmV0dXJuIG5ldyBNYXAoZGF0YVN0cnVjdHVyZSk7XG4gIH0gZWxzZSBpZiAoaXNQbGFpbk9iamVjdChkYXRhU3RydWN0dXJlKSkge1xuICAgIHZhciBtYXAgPSBuZXcgTWFwKCk7XG5cbiAgICBmb3IgKHZhciBrZXkgaW4gZGF0YVN0cnVjdHVyZSkge1xuICAgICAgbWFwLnNldChrZXksIGRhdGFTdHJ1Y3R1cmVba2V5XSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1hcDtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZGllKDIxLCBkYXRhU3RydWN0dXJlKTtcbiAgfVxufVxuXG52YXIgX1N5bWJvbCRpdGVyYXRvciQxLCBfU3ltYm9sJHRvU3RyaW5nVGFnJDE7XG52YXIgT2JzZXJ2YWJsZVNldE1hcmtlciA9IHt9O1xuX1N5bWJvbCRpdGVyYXRvciQxID0gU3ltYm9sLml0ZXJhdG9yO1xuX1N5bWJvbCR0b1N0cmluZ1RhZyQxID0gU3ltYm9sLnRvU3RyaW5nVGFnO1xudmFyIE9ic2VydmFibGVTZXQgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBPYnNlcnZhYmxlU2V0KGluaXRpYWxEYXRhLCBlbmhhbmNlciwgbmFtZV8pIHtcbiAgICBpZiAoZW5oYW5jZXIgPT09IHZvaWQgMCkge1xuICAgICAgZW5oYW5jZXIgPSBkZWVwRW5oYW5jZXI7XG4gICAgfVxuXG4gICAgaWYgKG5hbWVfID09PSB2b2lkIDApIHtcbiAgICAgIG5hbWVfID0gTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gXCJPYnNlcnZhYmxlU2V0QFwiICsgZ2V0TmV4dElkKCkgOiBcIk9ic2VydmFibGVTZXRcIjtcbiAgICB9XG5cbiAgICB0aGlzLm5hbWVfID0gdm9pZCAwO1xuICAgIHRoaXNbJG1vYnhdID0gT2JzZXJ2YWJsZVNldE1hcmtlcjtcbiAgICB0aGlzLmRhdGFfID0gbmV3IFNldCgpO1xuICAgIHRoaXMuYXRvbV8gPSB2b2lkIDA7XG4gICAgdGhpcy5jaGFuZ2VMaXN0ZW5lcnNfID0gdm9pZCAwO1xuICAgIHRoaXMuaW50ZXJjZXB0b3JzXyA9IHZvaWQgMDtcbiAgICB0aGlzLmRlaGFuY2VyID0gdm9pZCAwO1xuICAgIHRoaXMuZW5oYW5jZXJfID0gdm9pZCAwO1xuICAgIHRoaXMubmFtZV8gPSBuYW1lXztcblxuICAgIGlmICghaXNGdW5jdGlvbihTZXQpKSB7XG4gICAgICBkaWUoMjIpO1xuICAgIH1cblxuICAgIHRoaXMuYXRvbV8gPSBjcmVhdGVBdG9tKHRoaXMubmFtZV8pO1xuXG4gICAgdGhpcy5lbmhhbmNlcl8gPSBmdW5jdGlvbiAobmV3Viwgb2xkVikge1xuICAgICAgcmV0dXJuIGVuaGFuY2VyKG5ld1YsIG9sZFYsIG5hbWVfKTtcbiAgICB9O1xuXG4gICAgaWYgKGluaXRpYWxEYXRhKSB7XG4gICAgICB0aGlzLnJlcGxhY2UoaW5pdGlhbERhdGEpO1xuICAgIH1cbiAgfVxuXG4gIHZhciBfcHJvdG8gPSBPYnNlcnZhYmxlU2V0LnByb3RvdHlwZTtcblxuICBfcHJvdG8uZGVoYW5jZVZhbHVlXyA9IGZ1bmN0aW9uIGRlaGFuY2VWYWx1ZV8odmFsdWUpIHtcbiAgICBpZiAodGhpcy5kZWhhbmNlciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gdGhpcy5kZWhhbmNlcih2YWx1ZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbHVlO1xuICB9O1xuXG4gIF9wcm90by5jbGVhciA9IGZ1bmN0aW9uIGNsZWFyKCkge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICB0cmFuc2FjdGlvbihmdW5jdGlvbiAoKSB7XG4gICAgICB1bnRyYWNrZWQoZnVuY3Rpb24gKCkge1xuICAgICAgICBmb3IgKHZhciBfaXRlcmF0b3IgPSBfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlckxvb3NlKF90aGlzLmRhdGFfLnZhbHVlcygpKSwgX3N0ZXA7ICEoX3N0ZXAgPSBfaXRlcmF0b3IoKSkuZG9uZTspIHtcbiAgICAgICAgICB2YXIgdmFsdWUgPSBfc3RlcC52YWx1ZTtcblxuICAgICAgICAgIF90aGlzW1wiZGVsZXRlXCJdKHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH07XG5cbiAgX3Byb3RvLmZvckVhY2ggPSBmdW5jdGlvbiBmb3JFYWNoKGNhbGxiYWNrRm4sIHRoaXNBcmcpIHtcbiAgICBmb3IgKHZhciBfaXRlcmF0b3IyID0gX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXJMb29zZSh0aGlzKSwgX3N0ZXAyOyAhKF9zdGVwMiA9IF9pdGVyYXRvcjIoKSkuZG9uZTspIHtcbiAgICAgIHZhciB2YWx1ZSA9IF9zdGVwMi52YWx1ZTtcbiAgICAgIGNhbGxiYWNrRm4uY2FsbCh0aGlzQXJnLCB2YWx1ZSwgdmFsdWUsIHRoaXMpO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8uYWRkID0gZnVuY3Rpb24gYWRkKHZhbHVlKSB7XG4gICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICBjaGVja0lmU3RhdGVNb2RpZmljYXRpb25zQXJlQWxsb3dlZCh0aGlzLmF0b21fKTtcblxuICAgIGlmIChoYXNJbnRlcmNlcHRvcnModGhpcykpIHtcbiAgICAgIHZhciBjaGFuZ2UgPSBpbnRlcmNlcHRDaGFuZ2UodGhpcywge1xuICAgICAgICB0eXBlOiBBREQsXG4gICAgICAgIG9iamVjdDogdGhpcyxcbiAgICAgICAgbmV3VmFsdWU6IHZhbHVlXG4gICAgICB9KTtcbiAgICAgIGlmICghY2hhbmdlKSByZXR1cm4gdGhpczsgLy8gaWRlYWxseSwgdmFsdWUgPSBjaGFuZ2UudmFsdWUgd291bGQgYmUgZG9uZSBoZXJlLCBzbyB0aGF0IHZhbHVlcyBjYW4gYmVcbiAgICAgIC8vIGNoYW5nZWQgYnkgaW50ZXJjZXB0b3IuIFNhbWUgYXBwbGllcyBmb3Igb3RoZXIgU2V0IGFuZCBNYXAgYXBpJ3MuXG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLmhhcyh2YWx1ZSkpIHtcbiAgICAgIHRyYW5zYWN0aW9uKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgX3RoaXMyLmRhdGFfLmFkZChfdGhpczIuZW5oYW5jZXJfKHZhbHVlLCB1bmRlZmluZWQpKTtcblxuICAgICAgICBfdGhpczIuYXRvbV8ucmVwb3J0Q2hhbmdlZCgpO1xuICAgICAgfSk7XG4gICAgICB2YXIgbm90aWZ5U3B5ID0gTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiICYmIGlzU3B5RW5hYmxlZCgpO1xuICAgICAgdmFyIG5vdGlmeSA9IGhhc0xpc3RlbmVycyh0aGlzKTtcblxuICAgICAgdmFyIF9jaGFuZ2UgPSBub3RpZnkgfHwgbm90aWZ5U3B5ID8ge1xuICAgICAgICBvYnNlcnZhYmxlS2luZDogXCJzZXRcIixcbiAgICAgICAgZGVidWdPYmplY3ROYW1lOiB0aGlzLm5hbWVfLFxuICAgICAgICB0eXBlOiBBREQsXG4gICAgICAgIG9iamVjdDogdGhpcyxcbiAgICAgICAgbmV3VmFsdWU6IHZhbHVlXG4gICAgICB9IDogbnVsbDtcblxuICAgICAgaWYgKG5vdGlmeVNweSAmJiBOT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHNweVJlcG9ydFN0YXJ0KF9jaGFuZ2UpO1xuICAgICAgaWYgKG5vdGlmeSkgbm90aWZ5TGlzdGVuZXJzKHRoaXMsIF9jaGFuZ2UpO1xuICAgICAgaWYgKG5vdGlmeVNweSAmJiBOT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHNweVJlcG9ydEVuZCgpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIF9wcm90b1tcImRlbGV0ZVwiXSA9IGZ1bmN0aW9uIF9kZWxldGUodmFsdWUpIHtcbiAgICB2YXIgX3RoaXMzID0gdGhpcztcblxuICAgIGlmIChoYXNJbnRlcmNlcHRvcnModGhpcykpIHtcbiAgICAgIHZhciBjaGFuZ2UgPSBpbnRlcmNlcHRDaGFuZ2UodGhpcywge1xuICAgICAgICB0eXBlOiBERUxFVEUsXG4gICAgICAgIG9iamVjdDogdGhpcyxcbiAgICAgICAgb2xkVmFsdWU6IHZhbHVlXG4gICAgICB9KTtcbiAgICAgIGlmICghY2hhbmdlKSByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuaGFzKHZhbHVlKSkge1xuICAgICAgdmFyIG5vdGlmeVNweSA9IE5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiAmJiBpc1NweUVuYWJsZWQoKTtcbiAgICAgIHZhciBub3RpZnkgPSBoYXNMaXN0ZW5lcnModGhpcyk7XG5cbiAgICAgIHZhciBfY2hhbmdlMiA9IG5vdGlmeSB8fCBub3RpZnlTcHkgPyB7XG4gICAgICAgIG9ic2VydmFibGVLaW5kOiBcInNldFwiLFxuICAgICAgICBkZWJ1Z09iamVjdE5hbWU6IHRoaXMubmFtZV8sXG4gICAgICAgIHR5cGU6IERFTEVURSxcbiAgICAgICAgb2JqZWN0OiB0aGlzLFxuICAgICAgICBvbGRWYWx1ZTogdmFsdWVcbiAgICAgIH0gOiBudWxsO1xuXG4gICAgICBpZiAobm90aWZ5U3B5ICYmIE5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikgc3B5UmVwb3J0U3RhcnQoX2NoYW5nZTIpO1xuICAgICAgdHJhbnNhY3Rpb24oZnVuY3Rpb24gKCkge1xuICAgICAgICBfdGhpczMuYXRvbV8ucmVwb3J0Q2hhbmdlZCgpO1xuXG4gICAgICAgIF90aGlzMy5kYXRhX1tcImRlbGV0ZVwiXSh2YWx1ZSk7XG4gICAgICB9KTtcbiAgICAgIGlmIChub3RpZnkpIG5vdGlmeUxpc3RlbmVycyh0aGlzLCBfY2hhbmdlMik7XG4gICAgICBpZiAobm90aWZ5U3B5ICYmIE5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikgc3B5UmVwb3J0RW5kKCk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH07XG5cbiAgX3Byb3RvLmhhcyA9IGZ1bmN0aW9uIGhhcyh2YWx1ZSkge1xuICAgIHRoaXMuYXRvbV8ucmVwb3J0T2JzZXJ2ZWQoKTtcbiAgICByZXR1cm4gdGhpcy5kYXRhXy5oYXModGhpcy5kZWhhbmNlVmFsdWVfKHZhbHVlKSk7XG4gIH07XG5cbiAgX3Byb3RvLmVudHJpZXMgPSBmdW5jdGlvbiBlbnRyaWVzKCkge1xuICAgIHZhciBuZXh0SW5kZXggPSAwO1xuICAgIHZhciBrZXlzID0gQXJyYXkuZnJvbSh0aGlzLmtleXMoKSk7XG4gICAgdmFyIHZhbHVlcyA9IEFycmF5LmZyb20odGhpcy52YWx1ZXMoKSk7XG4gICAgcmV0dXJuIG1ha2VJdGVyYWJsZSh7XG4gICAgICBuZXh0OiBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgICB2YXIgaW5kZXggPSBuZXh0SW5kZXg7XG4gICAgICAgIG5leHRJbmRleCArPSAxO1xuICAgICAgICByZXR1cm4gaW5kZXggPCB2YWx1ZXMubGVuZ3RoID8ge1xuICAgICAgICAgIHZhbHVlOiBba2V5c1tpbmRleF0sIHZhbHVlc1tpbmRleF1dLFxuICAgICAgICAgIGRvbmU6IGZhbHNlXG4gICAgICAgIH0gOiB7XG4gICAgICAgICAgZG9uZTogdHJ1ZVxuICAgICAgICB9O1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xuXG4gIF9wcm90by5rZXlzID0gZnVuY3Rpb24ga2V5cygpIHtcbiAgICByZXR1cm4gdGhpcy52YWx1ZXMoKTtcbiAgfTtcblxuICBfcHJvdG8udmFsdWVzID0gZnVuY3Rpb24gdmFsdWVzKCkge1xuICAgIHRoaXMuYXRvbV8ucmVwb3J0T2JzZXJ2ZWQoKTtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgdmFyIG5leHRJbmRleCA9IDA7XG4gICAgdmFyIG9ic2VydmFibGVWYWx1ZXMgPSBBcnJheS5mcm9tKHRoaXMuZGF0YV8udmFsdWVzKCkpO1xuICAgIHJldHVybiBtYWtlSXRlcmFibGUoe1xuICAgICAgbmV4dDogZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgICAgcmV0dXJuIG5leHRJbmRleCA8IG9ic2VydmFibGVWYWx1ZXMubGVuZ3RoID8ge1xuICAgICAgICAgIHZhbHVlOiBzZWxmLmRlaGFuY2VWYWx1ZV8ob2JzZXJ2YWJsZVZhbHVlc1tuZXh0SW5kZXgrK10pLFxuICAgICAgICAgIGRvbmU6IGZhbHNlXG4gICAgICAgIH0gOiB7XG4gICAgICAgICAgZG9uZTogdHJ1ZVxuICAgICAgICB9O1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xuXG4gIF9wcm90by5yZXBsYWNlID0gZnVuY3Rpb24gcmVwbGFjZShvdGhlcikge1xuICAgIHZhciBfdGhpczQgPSB0aGlzO1xuXG4gICAgaWYgKGlzT2JzZXJ2YWJsZVNldChvdGhlcikpIHtcbiAgICAgIG90aGVyID0gbmV3IFNldChvdGhlcik7XG4gICAgfVxuXG4gICAgdHJhbnNhY3Rpb24oZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKEFycmF5LmlzQXJyYXkob3RoZXIpKSB7XG4gICAgICAgIF90aGlzNC5jbGVhcigpO1xuXG4gICAgICAgIG90aGVyLmZvckVhY2goZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgcmV0dXJuIF90aGlzNC5hZGQodmFsdWUpO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSBpZiAoaXNFUzZTZXQob3RoZXIpKSB7XG4gICAgICAgIF90aGlzNC5jbGVhcigpO1xuXG4gICAgICAgIG90aGVyLmZvckVhY2goZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgcmV0dXJuIF90aGlzNC5hZGQodmFsdWUpO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSBpZiAob3RoZXIgIT09IG51bGwgJiYgb3RoZXIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBkaWUoXCJDYW5ub3QgaW5pdGlhbGl6ZSBzZXQgZnJvbSBcIiArIG90aGVyKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBfcHJvdG8ub2JzZXJ2ZV8gPSBmdW5jdGlvbiBvYnNlcnZlXyhsaXN0ZW5lciwgZmlyZUltbWVkaWF0ZWx5KSB7XG4gICAgLy8gLi4uICdmaXJlSW1tZWRpYXRlbHknIGNvdWxkIGFsc28gYmUgdHJ1ZT9cbiAgICBpZiAoTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiICYmIGZpcmVJbW1lZGlhdGVseSA9PT0gdHJ1ZSkgZGllKFwiYG9ic2VydmVgIGRvZXNuJ3Qgc3VwcG9ydCBmaXJlSW1tZWRpYXRlbHk9dHJ1ZSBpbiBjb21iaW5hdGlvbiB3aXRoIHNldHMuXCIpO1xuICAgIHJldHVybiByZWdpc3Rlckxpc3RlbmVyKHRoaXMsIGxpc3RlbmVyKTtcbiAgfTtcblxuICBfcHJvdG8uaW50ZXJjZXB0XyA9IGZ1bmN0aW9uIGludGVyY2VwdF8oaGFuZGxlcikge1xuICAgIHJldHVybiByZWdpc3RlckludGVyY2VwdG9yKHRoaXMsIGhhbmRsZXIpO1xuICB9O1xuXG4gIF9wcm90by50b0pTT04gPSBmdW5jdGlvbiB0b0pTT04oKSB7XG4gICAgcmV0dXJuIEFycmF5LmZyb20odGhpcyk7XG4gIH07XG5cbiAgX3Byb3RvLnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIFwiW29iamVjdCBPYnNlcnZhYmxlU2V0XVwiO1xuICB9O1xuXG4gIF9wcm90b1tfU3ltYm9sJGl0ZXJhdG9yJDFdID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzLnZhbHVlcygpO1xuICB9O1xuXG4gIF9jcmVhdGVDbGFzcyhPYnNlcnZhYmxlU2V0LCBbe1xuICAgIGtleTogXCJzaXplXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICB0aGlzLmF0b21fLnJlcG9ydE9ic2VydmVkKCk7XG4gICAgICByZXR1cm4gdGhpcy5kYXRhXy5zaXplO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogX1N5bWJvbCR0b1N0cmluZ1RhZyQxLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIFwiU2V0XCI7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIE9ic2VydmFibGVTZXQ7XG59KCk7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuXG52YXIgaXNPYnNlcnZhYmxlU2V0ID0gLyojX19QVVJFX18qL2NyZWF0ZUluc3RhbmNlb2ZQcmVkaWNhdGUoXCJPYnNlcnZhYmxlU2V0XCIsIE9ic2VydmFibGVTZXQpO1xuXG52YXIgZGVzY3JpcHRvckNhY2hlID0gLyojX19QVVJFX18qL09iamVjdC5jcmVhdGUobnVsbCk7XG52YXIgUkVNT1ZFID0gXCJyZW1vdmVcIjtcbnZhciBPYnNlcnZhYmxlT2JqZWN0QWRtaW5pc3RyYXRpb24gPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBPYnNlcnZhYmxlT2JqZWN0QWRtaW5pc3RyYXRpb24odGFyZ2V0XywgdmFsdWVzXywgbmFtZV8sIC8vIFVzZWQgYW55dGltZSBhbm5vdGF0aW9uIGlzIG5vdCBleHBsaWNpdGVseSBwcm92aWRlZFxuICBkZWZhdWx0QW5ub3RhdGlvbl8pIHtcbiAgICBpZiAodmFsdWVzXyA9PT0gdm9pZCAwKSB7XG4gICAgICB2YWx1ZXNfID0gbmV3IE1hcCgpO1xuICAgIH1cblxuICAgIGlmIChkZWZhdWx0QW5ub3RhdGlvbl8gPT09IHZvaWQgMCkge1xuICAgICAgZGVmYXVsdEFubm90YXRpb25fID0gYXV0b0Fubm90YXRpb247XG4gICAgfVxuXG4gICAgdGhpcy50YXJnZXRfID0gdm9pZCAwO1xuICAgIHRoaXMudmFsdWVzXyA9IHZvaWQgMDtcbiAgICB0aGlzLm5hbWVfID0gdm9pZCAwO1xuICAgIHRoaXMuZGVmYXVsdEFubm90YXRpb25fID0gdm9pZCAwO1xuICAgIHRoaXMua2V5c0F0b21fID0gdm9pZCAwO1xuICAgIHRoaXMuY2hhbmdlTGlzdGVuZXJzXyA9IHZvaWQgMDtcbiAgICB0aGlzLmludGVyY2VwdG9yc18gPSB2b2lkIDA7XG4gICAgdGhpcy5wcm94eV8gPSB2b2lkIDA7XG4gICAgdGhpcy5pc1BsYWluT2JqZWN0XyA9IHZvaWQgMDtcbiAgICB0aGlzLmFwcGxpZWRBbm5vdGF0aW9uc18gPSB2b2lkIDA7XG4gICAgdGhpcy5wZW5kaW5nS2V5c18gPSB2b2lkIDA7XG4gICAgdGhpcy50YXJnZXRfID0gdGFyZ2V0XztcbiAgICB0aGlzLnZhbHVlc18gPSB2YWx1ZXNfO1xuICAgIHRoaXMubmFtZV8gPSBuYW1lXztcbiAgICB0aGlzLmRlZmF1bHRBbm5vdGF0aW9uXyA9IGRlZmF1bHRBbm5vdGF0aW9uXztcbiAgICB0aGlzLmtleXNBdG9tXyA9IG5ldyBBdG9tKE5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IHRoaXMubmFtZV8gKyBcIi5rZXlzXCIgOiBcIk9ic2VydmFibGVPYmplY3Qua2V5c1wiKTsgLy8gT3B0aW1pemF0aW9uOiB3ZSB1c2UgdGhpcyBmcmVxdWVudGx5XG5cbiAgICB0aGlzLmlzUGxhaW5PYmplY3RfID0gaXNQbGFpbk9iamVjdCh0aGlzLnRhcmdldF8pO1xuXG4gICAgaWYgKE5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiAmJiAhaXNBbm5vdGF0aW9uKHRoaXMuZGVmYXVsdEFubm90YXRpb25fKSkge1xuICAgICAgZGllKFwiZGVmYXVsdEFubm90YXRpb24gbXVzdCBiZSB2YWxpZCBhbm5vdGF0aW9uXCIpO1xuICAgIH1cblxuICAgIGlmIChOT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgICAgIC8vIFByZXBhcmUgc3RydWN0dXJlIGZvciB0cmFja2luZyB3aGljaCBmaWVsZHMgd2VyZSBhbHJlYWR5IGFubm90YXRlZFxuICAgICAgdGhpcy5hcHBsaWVkQW5ub3RhdGlvbnNfID0ge307XG4gICAgfVxuICB9XG5cbiAgdmFyIF9wcm90byA9IE9ic2VydmFibGVPYmplY3RBZG1pbmlzdHJhdGlvbi5wcm90b3R5cGU7XG5cbiAgX3Byb3RvLmdldE9ic2VydmFibGVQcm9wVmFsdWVfID0gZnVuY3Rpb24gZ2V0T2JzZXJ2YWJsZVByb3BWYWx1ZV8oa2V5KSB7XG4gICAgcmV0dXJuIHRoaXMudmFsdWVzXy5nZXQoa2V5KS5nZXQoKTtcbiAgfTtcblxuICBfcHJvdG8uc2V0T2JzZXJ2YWJsZVByb3BWYWx1ZV8gPSBmdW5jdGlvbiBzZXRPYnNlcnZhYmxlUHJvcFZhbHVlXyhrZXksIG5ld1ZhbHVlKSB7XG4gICAgdmFyIG9ic2VydmFibGUgPSB0aGlzLnZhbHVlc18uZ2V0KGtleSk7XG5cbiAgICBpZiAob2JzZXJ2YWJsZSBpbnN0YW5jZW9mIENvbXB1dGVkVmFsdWUpIHtcbiAgICAgIG9ic2VydmFibGUuc2V0KG5ld1ZhbHVlKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gLy8gaW50ZXJjZXB0XG5cblxuICAgIGlmIChoYXNJbnRlcmNlcHRvcnModGhpcykpIHtcbiAgICAgIHZhciBjaGFuZ2UgPSBpbnRlcmNlcHRDaGFuZ2UodGhpcywge1xuICAgICAgICB0eXBlOiBVUERBVEUsXG4gICAgICAgIG9iamVjdDogdGhpcy5wcm94eV8gfHwgdGhpcy50YXJnZXRfLFxuICAgICAgICBuYW1lOiBrZXksXG4gICAgICAgIG5ld1ZhbHVlOiBuZXdWYWx1ZVxuICAgICAgfSk7XG4gICAgICBpZiAoIWNoYW5nZSkgcmV0dXJuIG51bGw7XG4gICAgICBuZXdWYWx1ZSA9IGNoYW5nZS5uZXdWYWx1ZTtcbiAgICB9XG5cbiAgICBuZXdWYWx1ZSA9IG9ic2VydmFibGUucHJlcGFyZU5ld1ZhbHVlXyhuZXdWYWx1ZSk7IC8vIG5vdGlmeSBzcHkgJiBvYnNlcnZlcnNcblxuICAgIGlmIChuZXdWYWx1ZSAhPT0gZ2xvYmFsU3RhdGUuVU5DSEFOR0VEKSB7XG4gICAgICB2YXIgbm90aWZ5ID0gaGFzTGlzdGVuZXJzKHRoaXMpO1xuICAgICAgdmFyIG5vdGlmeVNweSA9IE5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiAmJiBpc1NweUVuYWJsZWQoKTtcblxuICAgICAgdmFyIF9jaGFuZ2UgPSBub3RpZnkgfHwgbm90aWZ5U3B5ID8ge1xuICAgICAgICB0eXBlOiBVUERBVEUsXG4gICAgICAgIG9ic2VydmFibGVLaW5kOiBcIm9iamVjdFwiLFxuICAgICAgICBkZWJ1Z09iamVjdE5hbWU6IHRoaXMubmFtZV8sXG4gICAgICAgIG9iamVjdDogdGhpcy5wcm94eV8gfHwgdGhpcy50YXJnZXRfLFxuICAgICAgICBvbGRWYWx1ZTogb2JzZXJ2YWJsZS52YWx1ZV8sXG4gICAgICAgIG5hbWU6IGtleSxcbiAgICAgICAgbmV3VmFsdWU6IG5ld1ZhbHVlXG4gICAgICB9IDogbnVsbDtcblxuICAgICAgaWYgKE5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiAmJiBub3RpZnlTcHkpIHNweVJlcG9ydFN0YXJ0KF9jaGFuZ2UpO1xuICAgICAgb2JzZXJ2YWJsZS5zZXROZXdWYWx1ZV8obmV3VmFsdWUpO1xuICAgICAgaWYgKG5vdGlmeSkgbm90aWZ5TGlzdGVuZXJzKHRoaXMsIF9jaGFuZ2UpO1xuICAgICAgaWYgKE5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiAmJiBub3RpZnlTcHkpIHNweVJlcG9ydEVuZCgpO1xuICAgIH1cblxuICAgIHJldHVybiB0cnVlO1xuICB9O1xuXG4gIF9wcm90by5nZXRfID0gZnVuY3Rpb24gZ2V0XyhrZXkpIHtcbiAgICBpZiAoZ2xvYmFsU3RhdGUudHJhY2tpbmdEZXJpdmF0aW9uICYmICFoYXNQcm9wKHRoaXMudGFyZ2V0Xywga2V5KSkge1xuICAgICAgLy8gS2V5IGRvZXNuJ3QgZXhpc3QgeWV0LCBzdWJzY3JpYmUgZm9yIGl0IGluIGNhc2UgaXQncyBhZGRlZCBsYXRlclxuICAgICAgdGhpcy5oYXNfKGtleSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMudGFyZ2V0X1trZXldO1xuICB9XG4gIC8qKlxuICAgKiBAcGFyYW0ge1Byb3BlcnR5S2V5fSBrZXlcbiAgICogQHBhcmFtIHthbnl9IHZhbHVlXG4gICAqIEBwYXJhbSB7QW5ub3RhdGlvbnxib29sZWFufSBhbm5vdGF0aW9uIHRydWUgLSB1c2UgZGVmYXVsdCBhbm5vdGF0aW9uLCBmYWxzZSAtIGNvcHkgYXMgaXNcbiAgICogQHBhcmFtIHtib29sZWFufSBwcm94eVRyYXAgd2hldGhlciBpdCdzIGNhbGxlZCBmcm9tIHByb3h5IHRyYXBcbiAgICogQHJldHVybnMge2Jvb2xlYW58bnVsbH0gdHJ1ZSBvbiBzdWNjZXNzLCBmYWxzZSBvbiBmYWlsdXJlIChwcm94eVRyYXAgKyBub24tY29uZmlndXJhYmxlKSwgbnVsbCB3aGVuIGNhbmNlbGxlZCBieSBpbnRlcmNlcHRvclxuICAgKi9cbiAgO1xuXG4gIF9wcm90by5zZXRfID0gZnVuY3Rpb24gc2V0XyhrZXksIHZhbHVlLCBwcm94eVRyYXApIHtcbiAgICBpZiAocHJveHlUcmFwID09PSB2b2lkIDApIHtcbiAgICAgIHByb3h5VHJhcCA9IGZhbHNlO1xuICAgIH1cblxuICAgIC8vIERvbid0IHVzZSAuaGFzKGtleSkgLSB3ZSBjYXJlIGFib3V0IG93blxuICAgIGlmIChoYXNQcm9wKHRoaXMudGFyZ2V0Xywga2V5KSkge1xuICAgICAgLy8gRXhpc3RpbmcgcHJvcFxuICAgICAgaWYgKHRoaXMudmFsdWVzXy5oYXMoa2V5KSkge1xuICAgICAgICAvLyBPYnNlcnZhYmxlIChjYW4gYmUgaW50ZXJjZXB0ZWQpXG4gICAgICAgIHJldHVybiB0aGlzLnNldE9ic2VydmFibGVQcm9wVmFsdWVfKGtleSwgdmFsdWUpO1xuICAgICAgfSBlbHNlIGlmIChwcm94eVRyYXApIHtcbiAgICAgICAgLy8gTm9uLW9ic2VydmFibGUgLSBwcm94eVxuICAgICAgICByZXR1cm4gUmVmbGVjdC5zZXQodGhpcy50YXJnZXRfLCBrZXksIHZhbHVlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIE5vbi1vYnNlcnZhYmxlXG4gICAgICAgIHRoaXMudGFyZ2V0X1trZXldID0gdmFsdWU7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBOZXcgcHJvcFxuICAgICAgcmV0dXJuIHRoaXMuZXh0ZW5kXyhrZXksIHtcbiAgICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICB9LCB0aGlzLmRlZmF1bHRBbm5vdGF0aW9uXywgcHJveHlUcmFwKTtcbiAgICB9XG4gIH0gLy8gVHJhcCBmb3IgXCJpblwiXG4gIDtcblxuICBfcHJvdG8uaGFzXyA9IGZ1bmN0aW9uIGhhc18oa2V5KSB7XG4gICAgaWYgKCFnbG9iYWxTdGF0ZS50cmFja2luZ0Rlcml2YXRpb24pIHtcbiAgICAgIC8vIFNraXAga2V5IHN1YnNjcmlwdGlvbiBvdXRzaWRlIGRlcml2YXRpb25cbiAgICAgIHJldHVybiBrZXkgaW4gdGhpcy50YXJnZXRfO1xuICAgIH1cblxuICAgIHRoaXMucGVuZGluZ0tleXNfIHx8ICh0aGlzLnBlbmRpbmdLZXlzXyA9IG5ldyBNYXAoKSk7XG4gICAgdmFyIGVudHJ5ID0gdGhpcy5wZW5kaW5nS2V5c18uZ2V0KGtleSk7XG5cbiAgICBpZiAoIWVudHJ5KSB7XG4gICAgICBlbnRyeSA9IG5ldyBPYnNlcnZhYmxlVmFsdWUoa2V5IGluIHRoaXMudGFyZ2V0XywgcmVmZXJlbmNlRW5oYW5jZXIsIE5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IHRoaXMubmFtZV8gKyBcIi5cIiArIHN0cmluZ2lmeUtleShrZXkpICsgXCI/XCIgOiBcIk9ic2VydmFibGVPYmplY3Qua2V5P1wiLCBmYWxzZSk7XG4gICAgICB0aGlzLnBlbmRpbmdLZXlzXy5zZXQoa2V5LCBlbnRyeSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGVudHJ5LmdldCgpO1xuICB9XG4gIC8qKlxuICAgKiBAcGFyYW0ge1Byb3BlcnR5S2V5fSBrZXlcbiAgICogQHBhcmFtIHtBbm5vdGF0aW9ufGJvb2xlYW59IGFubm90YXRpb24gdHJ1ZSAtIHVzZSBkZWZhdWx0IGFubm90YXRpb24sIGZhbHNlIC0gaWdub3JlIHByb3BcbiAgICovXG4gIDtcblxuICBfcHJvdG8ubWFrZV8gPSBmdW5jdGlvbiBtYWtlXyhrZXksIGFubm90YXRpb24pIHtcbiAgICBpZiAoYW5ub3RhdGlvbiA9PT0gdHJ1ZSkge1xuICAgICAgYW5ub3RhdGlvbiA9IHRoaXMuZGVmYXVsdEFubm90YXRpb25fO1xuICAgIH1cblxuICAgIGlmIChhbm5vdGF0aW9uID09PSBmYWxzZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGFzc2VydEFubm90YWJsZSh0aGlzLCBhbm5vdGF0aW9uLCBrZXkpO1xuXG4gICAgaWYgKCEoa2V5IGluIHRoaXMudGFyZ2V0XykpIHtcbiAgICAgIHZhciBfdGhpcyR0YXJnZXRfJHN0b3JlZEE7XG5cbiAgICAgIC8vIFRocm93IG9uIG1pc3Npbmcga2V5LCBleGNlcHQgZm9yIGRlY29yYXRvcnM6XG4gICAgICAvLyBEZWNvcmF0b3IgYW5ub3RhdGlvbnMgYXJlIGNvbGxlY3RlZCBmcm9tIHdob2xlIHByb3RvdHlwZSBjaGFpbi5cbiAgICAgIC8vIFdoZW4gY2FsbGVkIGZyb20gc3VwZXIoKSBzb21lIHByb3BzIG1heSBub3QgZXhpc3QgeWV0LlxuICAgICAgLy8gSG93ZXZlciB3ZSBkb24ndCBoYXZlIHRvIHdvcnJ5IGFib3V0IG1pc3NpbmcgcHJvcCxcbiAgICAgIC8vIGJlY2F1c2UgdGhlIGRlY29yYXRvciBtdXN0IGhhdmUgYmVlbiBhcHBsaWVkIHRvIHNvbWV0aGluZy5cbiAgICAgIGlmICgoX3RoaXMkdGFyZ2V0XyRzdG9yZWRBID0gdGhpcy50YXJnZXRfW3N0b3JlZEFubm90YXRpb25zU3ltYm9sXSkgPT0gbnVsbCA/IHZvaWQgMCA6IF90aGlzJHRhcmdldF8kc3RvcmVkQVtrZXldKSB7XG4gICAgICAgIHJldHVybjsgLy8gd2lsbCBiZSBhbm5vdGF0ZWQgYnkgc3ViY2xhc3MgY29uc3RydWN0b3JcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRpZSgxLCBhbm5vdGF0aW9uLmFubm90YXRpb25UeXBlXywgdGhpcy5uYW1lXyArIFwiLlwiICsga2V5LnRvU3RyaW5nKCkpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBzb3VyY2UgPSB0aGlzLnRhcmdldF87XG5cbiAgICB3aGlsZSAoc291cmNlICYmIHNvdXJjZSAhPT0gb2JqZWN0UHJvdG90eXBlKSB7XG4gICAgICB2YXIgZGVzY3JpcHRvciA9IGdldERlc2NyaXB0b3Ioc291cmNlLCBrZXkpO1xuXG4gICAgICBpZiAoZGVzY3JpcHRvcikge1xuICAgICAgICB2YXIgb3V0Y29tZSA9IGFubm90YXRpb24ubWFrZV8odGhpcywga2V5LCBkZXNjcmlwdG9yLCBzb3VyY2UpO1xuICAgICAgICBpZiAob3V0Y29tZSA9PT0gMFxuICAgICAgICAvKiBDYW5jZWwgKi9cbiAgICAgICAgKSByZXR1cm47XG4gICAgICAgIGlmIChvdXRjb21lID09PSAxXG4gICAgICAgIC8qIEJyZWFrICovXG4gICAgICAgICkgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIHNvdXJjZSA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihzb3VyY2UpO1xuICAgIH1cblxuICAgIHJlY29yZEFubm90YXRpb25BcHBsaWVkKHRoaXMsIGFubm90YXRpb24sIGtleSk7XG4gIH1cbiAgLyoqXG4gICAqIEBwYXJhbSB7UHJvcGVydHlLZXl9IGtleVxuICAgKiBAcGFyYW0ge1Byb3BlcnR5RGVzY3JpcHRvcn0gZGVzY3JpcHRvclxuICAgKiBAcGFyYW0ge0Fubm90YXRpb258Ym9vbGVhbn0gYW5ub3RhdGlvbiB0cnVlIC0gdXNlIGRlZmF1bHQgYW5ub3RhdGlvbiwgZmFsc2UgLSBjb3B5IGFzIGlzXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gcHJveHlUcmFwIHdoZXRoZXIgaXQncyBjYWxsZWQgZnJvbSBwcm94eSB0cmFwXG4gICAqIEByZXR1cm5zIHtib29sZWFufG51bGx9IHRydWUgb24gc3VjY2VzcywgZmFsc2Ugb24gZmFpbHVyZSAocHJveHlUcmFwICsgbm9uLWNvbmZpZ3VyYWJsZSksIG51bGwgd2hlbiBjYW5jZWxsZWQgYnkgaW50ZXJjZXB0b3JcbiAgICovXG4gIDtcblxuICBfcHJvdG8uZXh0ZW5kXyA9IGZ1bmN0aW9uIGV4dGVuZF8oa2V5LCBkZXNjcmlwdG9yLCBhbm5vdGF0aW9uLCBwcm94eVRyYXApIHtcbiAgICBpZiAocHJveHlUcmFwID09PSB2b2lkIDApIHtcbiAgICAgIHByb3h5VHJhcCA9IGZhbHNlO1xuICAgIH1cblxuICAgIGlmIChhbm5vdGF0aW9uID09PSB0cnVlKSB7XG4gICAgICBhbm5vdGF0aW9uID0gdGhpcy5kZWZhdWx0QW5ub3RhdGlvbl87XG4gICAgfVxuXG4gICAgaWYgKGFubm90YXRpb24gPT09IGZhbHNlKSB7XG4gICAgICByZXR1cm4gdGhpcy5kZWZpbmVQcm9wZXJ0eV8oa2V5LCBkZXNjcmlwdG9yLCBwcm94eVRyYXApO1xuICAgIH1cblxuICAgIGFzc2VydEFubm90YWJsZSh0aGlzLCBhbm5vdGF0aW9uLCBrZXkpO1xuICAgIHZhciBvdXRjb21lID0gYW5ub3RhdGlvbi5leHRlbmRfKHRoaXMsIGtleSwgZGVzY3JpcHRvciwgcHJveHlUcmFwKTtcblxuICAgIGlmIChvdXRjb21lKSB7XG4gICAgICByZWNvcmRBbm5vdGF0aW9uQXBwbGllZCh0aGlzLCBhbm5vdGF0aW9uLCBrZXkpO1xuICAgIH1cblxuICAgIHJldHVybiBvdXRjb21lO1xuICB9XG4gIC8qKlxuICAgKiBAcGFyYW0ge1Byb3BlcnR5S2V5fSBrZXlcbiAgICogQHBhcmFtIHtQcm9wZXJ0eURlc2NyaXB0b3J9IGRlc2NyaXB0b3JcbiAgICogQHBhcmFtIHtib29sZWFufSBwcm94eVRyYXAgd2hldGhlciBpdCdzIGNhbGxlZCBmcm9tIHByb3h5IHRyYXBcbiAgICogQHJldHVybnMge2Jvb2xlYW58bnVsbH0gdHJ1ZSBvbiBzdWNjZXNzLCBmYWxzZSBvbiBmYWlsdXJlIChwcm94eVRyYXAgKyBub24tY29uZmlndXJhYmxlKSwgbnVsbCB3aGVuIGNhbmNlbGxlZCBieSBpbnRlcmNlcHRvclxuICAgKi9cbiAgO1xuXG4gIF9wcm90by5kZWZpbmVQcm9wZXJ0eV8gPSBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0eV8oa2V5LCBkZXNjcmlwdG9yLCBwcm94eVRyYXApIHtcbiAgICBpZiAocHJveHlUcmFwID09PSB2b2lkIDApIHtcbiAgICAgIHByb3h5VHJhcCA9IGZhbHNlO1xuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICBzdGFydEJhdGNoKCk7IC8vIERlbGV0ZVxuXG4gICAgICB2YXIgZGVsZXRlT3V0Y29tZSA9IHRoaXMuZGVsZXRlXyhrZXkpO1xuXG4gICAgICBpZiAoIWRlbGV0ZU91dGNvbWUpIHtcbiAgICAgICAgLy8gRmFpbHVyZSBvciBpbnRlcmNlcHRlZFxuICAgICAgICByZXR1cm4gZGVsZXRlT3V0Y29tZTtcbiAgICAgIH0gLy8gQUREIGludGVyY2VwdG9yXG5cblxuICAgICAgaWYgKGhhc0ludGVyY2VwdG9ycyh0aGlzKSkge1xuICAgICAgICB2YXIgY2hhbmdlID0gaW50ZXJjZXB0Q2hhbmdlKHRoaXMsIHtcbiAgICAgICAgICBvYmplY3Q6IHRoaXMucHJveHlfIHx8IHRoaXMudGFyZ2V0XyxcbiAgICAgICAgICBuYW1lOiBrZXksXG4gICAgICAgICAgdHlwZTogQURELFxuICAgICAgICAgIG5ld1ZhbHVlOiBkZXNjcmlwdG9yLnZhbHVlXG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoIWNoYW5nZSkgcmV0dXJuIG51bGw7XG4gICAgICAgIHZhciBuZXdWYWx1ZSA9IGNoYW5nZS5uZXdWYWx1ZTtcblxuICAgICAgICBpZiAoZGVzY3JpcHRvci52YWx1ZSAhPT0gbmV3VmFsdWUpIHtcbiAgICAgICAgICBkZXNjcmlwdG9yID0gX2V4dGVuZHMoe30sIGRlc2NyaXB0b3IsIHtcbiAgICAgICAgICAgIHZhbHVlOiBuZXdWYWx1ZVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9IC8vIERlZmluZVxuXG5cbiAgICAgIGlmIChwcm94eVRyYXApIHtcbiAgICAgICAgaWYgKCFSZWZsZWN0LmRlZmluZVByb3BlcnR5KHRoaXMudGFyZ2V0Xywga2V5LCBkZXNjcmlwdG9yKSkge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZGVmaW5lUHJvcGVydHkodGhpcy50YXJnZXRfLCBrZXksIGRlc2NyaXB0b3IpO1xuICAgICAgfSAvLyBOb3RpZnlcblxuXG4gICAgICB0aGlzLm5vdGlmeVByb3BlcnR5QWRkaXRpb25fKGtleSwgZGVzY3JpcHRvci52YWx1ZSk7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIGVuZEJhdGNoKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWU7XG4gIH0gLy8gSWYgb3JpZ2luYWwgZGVzY3JpcHRvciBiZWNvbWVzIHJlbGV2YW50LCBtb3ZlIHRoaXMgdG8gYW5ub3RhdGlvbiBkaXJlY3RseVxuICA7XG5cbiAgX3Byb3RvLmRlZmluZU9ic2VydmFibGVQcm9wZXJ0eV8gPSBmdW5jdGlvbiBkZWZpbmVPYnNlcnZhYmxlUHJvcGVydHlfKGtleSwgdmFsdWUsIGVuaGFuY2VyLCBwcm94eVRyYXApIHtcbiAgICBpZiAocHJveHlUcmFwID09PSB2b2lkIDApIHtcbiAgICAgIHByb3h5VHJhcCA9IGZhbHNlO1xuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICBzdGFydEJhdGNoKCk7IC8vIERlbGV0ZVxuXG4gICAgICB2YXIgZGVsZXRlT3V0Y29tZSA9IHRoaXMuZGVsZXRlXyhrZXkpO1xuXG4gICAgICBpZiAoIWRlbGV0ZU91dGNvbWUpIHtcbiAgICAgICAgLy8gRmFpbHVyZSBvciBpbnRlcmNlcHRlZFxuICAgICAgICByZXR1cm4gZGVsZXRlT3V0Y29tZTtcbiAgICAgIH0gLy8gQUREIGludGVyY2VwdG9yXG5cblxuICAgICAgaWYgKGhhc0ludGVyY2VwdG9ycyh0aGlzKSkge1xuICAgICAgICB2YXIgY2hhbmdlID0gaW50ZXJjZXB0Q2hhbmdlKHRoaXMsIHtcbiAgICAgICAgICBvYmplY3Q6IHRoaXMucHJveHlfIHx8IHRoaXMudGFyZ2V0XyxcbiAgICAgICAgICBuYW1lOiBrZXksXG4gICAgICAgICAgdHlwZTogQURELFxuICAgICAgICAgIG5ld1ZhbHVlOiB2YWx1ZVxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKCFjaGFuZ2UpIHJldHVybiBudWxsO1xuICAgICAgICB2YWx1ZSA9IGNoYW5nZS5uZXdWYWx1ZTtcbiAgICAgIH1cblxuICAgICAgdmFyIGNhY2hlZERlc2NyaXB0b3IgPSBnZXRDYWNoZWRPYnNlcnZhYmxlUHJvcERlc2NyaXB0b3Ioa2V5KTtcbiAgICAgIHZhciBkZXNjcmlwdG9yID0ge1xuICAgICAgICBjb25maWd1cmFibGU6IGdsb2JhbFN0YXRlLnNhZmVEZXNjcmlwdG9ycyA/IHRoaXMuaXNQbGFpbk9iamVjdF8gOiB0cnVlLFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBnZXQ6IGNhY2hlZERlc2NyaXB0b3IuZ2V0LFxuICAgICAgICBzZXQ6IGNhY2hlZERlc2NyaXB0b3Iuc2V0XG4gICAgICB9OyAvLyBEZWZpbmVcblxuICAgICAgaWYgKHByb3h5VHJhcCkge1xuICAgICAgICBpZiAoIVJlZmxlY3QuZGVmaW5lUHJvcGVydHkodGhpcy50YXJnZXRfLCBrZXksIGRlc2NyaXB0b3IpKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkZWZpbmVQcm9wZXJ0eSh0aGlzLnRhcmdldF8sIGtleSwgZGVzY3JpcHRvcik7XG4gICAgICB9XG5cbiAgICAgIHZhciBvYnNlcnZhYmxlID0gbmV3IE9ic2VydmFibGVWYWx1ZSh2YWx1ZSwgZW5oYW5jZXIsIE5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IHRoaXMubmFtZV8gKyBcIi5cIiArIGtleS50b1N0cmluZygpIDogXCJPYnNlcnZhYmxlT2JqZWN0LmtleVwiLCBmYWxzZSk7XG4gICAgICB0aGlzLnZhbHVlc18uc2V0KGtleSwgb2JzZXJ2YWJsZSk7IC8vIE5vdGlmeSAodmFsdWUgcG9zc2libHkgY2hhbmdlZCBieSBPYnNlcnZhYmxlVmFsdWUpXG5cbiAgICAgIHRoaXMubm90aWZ5UHJvcGVydHlBZGRpdGlvbl8oa2V5LCBvYnNlcnZhYmxlLnZhbHVlXyk7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIGVuZEJhdGNoKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWU7XG4gIH0gLy8gSWYgb3JpZ2luYWwgZGVzY3JpcHRvciBiZWNvbWVzIHJlbGV2YW50LCBtb3ZlIHRoaXMgdG8gYW5ub3RhdGlvbiBkaXJlY3RseVxuICA7XG5cbiAgX3Byb3RvLmRlZmluZUNvbXB1dGVkUHJvcGVydHlfID0gZnVuY3Rpb24gZGVmaW5lQ29tcHV0ZWRQcm9wZXJ0eV8oa2V5LCBvcHRpb25zLCBwcm94eVRyYXApIHtcbiAgICBpZiAocHJveHlUcmFwID09PSB2b2lkIDApIHtcbiAgICAgIHByb3h5VHJhcCA9IGZhbHNlO1xuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICBzdGFydEJhdGNoKCk7IC8vIERlbGV0ZVxuXG4gICAgICB2YXIgZGVsZXRlT3V0Y29tZSA9IHRoaXMuZGVsZXRlXyhrZXkpO1xuXG4gICAgICBpZiAoIWRlbGV0ZU91dGNvbWUpIHtcbiAgICAgICAgLy8gRmFpbHVyZSBvciBpbnRlcmNlcHRlZFxuICAgICAgICByZXR1cm4gZGVsZXRlT3V0Y29tZTtcbiAgICAgIH0gLy8gQUREIGludGVyY2VwdG9yXG5cblxuICAgICAgaWYgKGhhc0ludGVyY2VwdG9ycyh0aGlzKSkge1xuICAgICAgICB2YXIgY2hhbmdlID0gaW50ZXJjZXB0Q2hhbmdlKHRoaXMsIHtcbiAgICAgICAgICBvYmplY3Q6IHRoaXMucHJveHlfIHx8IHRoaXMudGFyZ2V0XyxcbiAgICAgICAgICBuYW1lOiBrZXksXG4gICAgICAgICAgdHlwZTogQURELFxuICAgICAgICAgIG5ld1ZhbHVlOiB1bmRlZmluZWRcbiAgICAgICAgfSk7XG4gICAgICAgIGlmICghY2hhbmdlKSByZXR1cm4gbnVsbDtcbiAgICAgIH1cblxuICAgICAgb3B0aW9ucy5uYW1lIHx8IChvcHRpb25zLm5hbWUgPSBOT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyB0aGlzLm5hbWVfICsgXCIuXCIgKyBrZXkudG9TdHJpbmcoKSA6IFwiT2JzZXJ2YWJsZU9iamVjdC5rZXlcIik7XG4gICAgICBvcHRpb25zLmNvbnRleHQgPSB0aGlzLnByb3h5XyB8fCB0aGlzLnRhcmdldF87XG4gICAgICB2YXIgY2FjaGVkRGVzY3JpcHRvciA9IGdldENhY2hlZE9ic2VydmFibGVQcm9wRGVzY3JpcHRvcihrZXkpO1xuICAgICAgdmFyIGRlc2NyaXB0b3IgPSB7XG4gICAgICAgIGNvbmZpZ3VyYWJsZTogZ2xvYmFsU3RhdGUuc2FmZURlc2NyaXB0b3JzID8gdGhpcy5pc1BsYWluT2JqZWN0XyA6IHRydWUsXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBnZXQ6IGNhY2hlZERlc2NyaXB0b3IuZ2V0LFxuICAgICAgICBzZXQ6IGNhY2hlZERlc2NyaXB0b3Iuc2V0XG4gICAgICB9OyAvLyBEZWZpbmVcblxuICAgICAgaWYgKHByb3h5VHJhcCkge1xuICAgICAgICBpZiAoIVJlZmxlY3QuZGVmaW5lUHJvcGVydHkodGhpcy50YXJnZXRfLCBrZXksIGRlc2NyaXB0b3IpKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkZWZpbmVQcm9wZXJ0eSh0aGlzLnRhcmdldF8sIGtleSwgZGVzY3JpcHRvcik7XG4gICAgICB9XG5cbiAgICAgIHRoaXMudmFsdWVzXy5zZXQoa2V5LCBuZXcgQ29tcHV0ZWRWYWx1ZShvcHRpb25zKSk7IC8vIE5vdGlmeVxuXG4gICAgICB0aGlzLm5vdGlmeVByb3BlcnR5QWRkaXRpb25fKGtleSwgdW5kZWZpbmVkKTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgZW5kQmF0Y2goKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICAvKipcbiAgICogQHBhcmFtIHtQcm9wZXJ0eUtleX0ga2V5XG4gICAqIEBwYXJhbSB7UHJvcGVydHlEZXNjcmlwdG9yfSBkZXNjcmlwdG9yXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gcHJveHlUcmFwIHdoZXRoZXIgaXQncyBjYWxsZWQgZnJvbSBwcm94eSB0cmFwXG4gICAqIEByZXR1cm5zIHtib29sZWFufG51bGx9IHRydWUgb24gc3VjY2VzcywgZmFsc2Ugb24gZmFpbHVyZSAocHJveHlUcmFwICsgbm9uLWNvbmZpZ3VyYWJsZSksIG51bGwgd2hlbiBjYW5jZWxsZWQgYnkgaW50ZXJjZXB0b3JcbiAgICovXG4gIDtcblxuICBfcHJvdG8uZGVsZXRlXyA9IGZ1bmN0aW9uIGRlbGV0ZV8oa2V5LCBwcm94eVRyYXApIHtcbiAgICBpZiAocHJveHlUcmFwID09PSB2b2lkIDApIHtcbiAgICAgIHByb3h5VHJhcCA9IGZhbHNlO1xuICAgIH1cblxuICAgIC8vIE5vIHN1Y2ggcHJvcFxuICAgIGlmICghaGFzUHJvcCh0aGlzLnRhcmdldF8sIGtleSkpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gLy8gSW50ZXJjZXB0XG5cblxuICAgIGlmIChoYXNJbnRlcmNlcHRvcnModGhpcykpIHtcbiAgICAgIHZhciBjaGFuZ2UgPSBpbnRlcmNlcHRDaGFuZ2UodGhpcywge1xuICAgICAgICBvYmplY3Q6IHRoaXMucHJveHlfIHx8IHRoaXMudGFyZ2V0XyxcbiAgICAgICAgbmFtZToga2V5LFxuICAgICAgICB0eXBlOiBSRU1PVkVcbiAgICAgIH0pOyAvLyBDYW5jZWxsZWRcblxuICAgICAgaWYgKCFjaGFuZ2UpIHJldHVybiBudWxsO1xuICAgIH0gLy8gRGVsZXRlXG5cblxuICAgIHRyeSB7XG4gICAgICB2YXIgX3RoaXMkcGVuZGluZ0tleXNfLCBfdGhpcyRwZW5kaW5nS2V5c18kZ2U7XG5cbiAgICAgIHN0YXJ0QmF0Y2goKTtcbiAgICAgIHZhciBub3RpZnkgPSBoYXNMaXN0ZW5lcnModGhpcyk7XG4gICAgICB2YXIgbm90aWZ5U3B5ID0gTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiICYmIGlzU3B5RW5hYmxlZCgpO1xuICAgICAgdmFyIG9ic2VydmFibGUgPSB0aGlzLnZhbHVlc18uZ2V0KGtleSk7IC8vIFZhbHVlIG5lZWRlZCBmb3Igc3BpZXMvbGlzdGVuZXJzXG5cbiAgICAgIHZhciB2YWx1ZSA9IHVuZGVmaW5lZDsgLy8gT3B0aW1pemF0aW9uOiBkb24ndCBwdWxsIHRoZSB2YWx1ZSB1bmxlc3Mgd2Ugd2lsbCBuZWVkIGl0XG5cbiAgICAgIGlmICghb2JzZXJ2YWJsZSAmJiAobm90aWZ5IHx8IG5vdGlmeVNweSkpIHtcbiAgICAgICAgdmFyIF9nZXREZXNjcmlwdG9yO1xuXG4gICAgICAgIHZhbHVlID0gKF9nZXREZXNjcmlwdG9yID0gZ2V0RGVzY3JpcHRvcih0aGlzLnRhcmdldF8sIGtleSkpID09IG51bGwgPyB2b2lkIDAgOiBfZ2V0RGVzY3JpcHRvci52YWx1ZTtcbiAgICAgIH0gLy8gZGVsZXRlIHByb3AgKGRvIGZpcnN0LCBtYXkgZmFpbClcblxuXG4gICAgICBpZiAocHJveHlUcmFwKSB7XG4gICAgICAgIGlmICghUmVmbGVjdC5kZWxldGVQcm9wZXJ0eSh0aGlzLnRhcmdldF8sIGtleSkpIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRlbGV0ZSB0aGlzLnRhcmdldF9ba2V5XTtcbiAgICAgIH0gLy8gQWxsb3cgcmUtYW5ub3RhdGluZyB0aGlzIGZpZWxkXG5cblxuICAgICAgaWYgKE5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAgICAgICBkZWxldGUgdGhpcy5hcHBsaWVkQW5ub3RhdGlvbnNfW2tleV07XG4gICAgICB9IC8vIENsZWFyIG9ic2VydmFibGVcblxuXG4gICAgICBpZiAob2JzZXJ2YWJsZSkge1xuICAgICAgICB0aGlzLnZhbHVlc19bXCJkZWxldGVcIl0oa2V5KTsgLy8gZm9yIGNvbXB1dGVkLCB2YWx1ZSBpcyB1bmRlZmluZWRcblxuICAgICAgICBpZiAob2JzZXJ2YWJsZSBpbnN0YW5jZW9mIE9ic2VydmFibGVWYWx1ZSkge1xuICAgICAgICAgIHZhbHVlID0gb2JzZXJ2YWJsZS52YWx1ZV87XG4gICAgICAgIH0gLy8gTm90aWZ5OiBhdXRvcnVuKCgpID0+IG9ialtrZXldKSwgc2VlICMxNzk2XG5cblxuICAgICAgICBwcm9wYWdhdGVDaGFuZ2VkKG9ic2VydmFibGUpO1xuICAgICAgfSAvLyBOb3RpZnkgXCJrZXlzL2VudHJpZXMvdmFsdWVzXCIgb2JzZXJ2ZXJzXG5cblxuICAgICAgdGhpcy5rZXlzQXRvbV8ucmVwb3J0Q2hhbmdlZCgpOyAvLyBOb3RpZnkgXCJoYXNcIiBvYnNlcnZlcnNcbiAgICAgIC8vIFwiaW5cIiBhcyBpdCBtYXkgc3RpbGwgZXhpc3QgaW4gcHJvdG9cblxuICAgICAgKF90aGlzJHBlbmRpbmdLZXlzXyA9IHRoaXMucGVuZGluZ0tleXNfKSA9PSBudWxsID8gdm9pZCAwIDogKF90aGlzJHBlbmRpbmdLZXlzXyRnZSA9IF90aGlzJHBlbmRpbmdLZXlzXy5nZXQoa2V5KSkgPT0gbnVsbCA/IHZvaWQgMCA6IF90aGlzJHBlbmRpbmdLZXlzXyRnZS5zZXQoa2V5IGluIHRoaXMudGFyZ2V0Xyk7IC8vIE5vdGlmeSBzcGllcy9saXN0ZW5lcnNcblxuICAgICAgaWYgKG5vdGlmeSB8fCBub3RpZnlTcHkpIHtcbiAgICAgICAgdmFyIF9jaGFuZ2UyID0ge1xuICAgICAgICAgIHR5cGU6IFJFTU9WRSxcbiAgICAgICAgICBvYnNlcnZhYmxlS2luZDogXCJvYmplY3RcIixcbiAgICAgICAgICBvYmplY3Q6IHRoaXMucHJveHlfIHx8IHRoaXMudGFyZ2V0XyxcbiAgICAgICAgICBkZWJ1Z09iamVjdE5hbWU6IHRoaXMubmFtZV8sXG4gICAgICAgICAgb2xkVmFsdWU6IHZhbHVlLFxuICAgICAgICAgIG5hbWU6IGtleVxuICAgICAgICB9O1xuICAgICAgICBpZiAoTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiICYmIG5vdGlmeVNweSkgc3B5UmVwb3J0U3RhcnQoX2NoYW5nZTIpO1xuICAgICAgICBpZiAobm90aWZ5KSBub3RpZnlMaXN0ZW5lcnModGhpcywgX2NoYW5nZTIpO1xuICAgICAgICBpZiAoTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiICYmIG5vdGlmeVNweSkgc3B5UmVwb3J0RW5kKCk7XG4gICAgICB9XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIGVuZEJhdGNoKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgLyoqXG4gICAqIE9ic2VydmVzIHRoaXMgb2JqZWN0LiBUcmlnZ2VycyBmb3IgdGhlIGV2ZW50cyAnYWRkJywgJ3VwZGF0ZScgYW5kICdkZWxldGUnLlxuICAgKiBTZWU6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL09iamVjdC9vYnNlcnZlXG4gICAqIGZvciBjYWxsYmFjayBkZXRhaWxzXG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLm9ic2VydmVfID0gZnVuY3Rpb24gb2JzZXJ2ZV8oY2FsbGJhY2ssIGZpcmVJbW1lZGlhdGVseSkge1xuICAgIGlmIChOT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgJiYgZmlyZUltbWVkaWF0ZWx5ID09PSB0cnVlKSBkaWUoXCJgb2JzZXJ2ZWAgZG9lc24ndCBzdXBwb3J0IHRoZSBmaXJlIGltbWVkaWF0ZWx5IHByb3BlcnR5IGZvciBvYnNlcnZhYmxlIG9iamVjdHMuXCIpO1xuICAgIHJldHVybiByZWdpc3Rlckxpc3RlbmVyKHRoaXMsIGNhbGxiYWNrKTtcbiAgfTtcblxuICBfcHJvdG8uaW50ZXJjZXB0XyA9IGZ1bmN0aW9uIGludGVyY2VwdF8oaGFuZGxlcikge1xuICAgIHJldHVybiByZWdpc3RlckludGVyY2VwdG9yKHRoaXMsIGhhbmRsZXIpO1xuICB9O1xuXG4gIF9wcm90by5ub3RpZnlQcm9wZXJ0eUFkZGl0aW9uXyA9IGZ1bmN0aW9uIG5vdGlmeVByb3BlcnR5QWRkaXRpb25fKGtleSwgdmFsdWUpIHtcbiAgICB2YXIgX3RoaXMkcGVuZGluZ0tleXNfMiwgX3RoaXMkcGVuZGluZ0tleXNfMiRnO1xuXG4gICAgdmFyIG5vdGlmeSA9IGhhc0xpc3RlbmVycyh0aGlzKTtcbiAgICB2YXIgbm90aWZ5U3B5ID0gTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiICYmIGlzU3B5RW5hYmxlZCgpO1xuXG4gICAgaWYgKG5vdGlmeSB8fCBub3RpZnlTcHkpIHtcbiAgICAgIHZhciBjaGFuZ2UgPSBub3RpZnkgfHwgbm90aWZ5U3B5ID8ge1xuICAgICAgICB0eXBlOiBBREQsXG4gICAgICAgIG9ic2VydmFibGVLaW5kOiBcIm9iamVjdFwiLFxuICAgICAgICBkZWJ1Z09iamVjdE5hbWU6IHRoaXMubmFtZV8sXG4gICAgICAgIG9iamVjdDogdGhpcy5wcm94eV8gfHwgdGhpcy50YXJnZXRfLFxuICAgICAgICBuYW1lOiBrZXksXG4gICAgICAgIG5ld1ZhbHVlOiB2YWx1ZVxuICAgICAgfSA6IG51bGw7XG4gICAgICBpZiAoTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiICYmIG5vdGlmeVNweSkgc3B5UmVwb3J0U3RhcnQoY2hhbmdlKTtcbiAgICAgIGlmIChub3RpZnkpIG5vdGlmeUxpc3RlbmVycyh0aGlzLCBjaGFuZ2UpO1xuICAgICAgaWYgKE5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiAmJiBub3RpZnlTcHkpIHNweVJlcG9ydEVuZCgpO1xuICAgIH1cblxuICAgIChfdGhpcyRwZW5kaW5nS2V5c18yID0gdGhpcy5wZW5kaW5nS2V5c18pID09IG51bGwgPyB2b2lkIDAgOiAoX3RoaXMkcGVuZGluZ0tleXNfMiRnID0gX3RoaXMkcGVuZGluZ0tleXNfMi5nZXQoa2V5KSkgPT0gbnVsbCA/IHZvaWQgMCA6IF90aGlzJHBlbmRpbmdLZXlzXzIkZy5zZXQodHJ1ZSk7IC8vIE5vdGlmeSBcImtleXMvZW50cmllcy92YWx1ZXNcIiBvYnNlcnZlcnNcblxuICAgIHRoaXMua2V5c0F0b21fLnJlcG9ydENoYW5nZWQoKTtcbiAgfTtcblxuICBfcHJvdG8ub3duS2V5c18gPSBmdW5jdGlvbiBvd25LZXlzXygpIHtcbiAgICB0aGlzLmtleXNBdG9tXy5yZXBvcnRPYnNlcnZlZCgpO1xuICAgIHJldHVybiBvd25LZXlzKHRoaXMudGFyZ2V0Xyk7XG4gIH07XG5cbiAgX3Byb3RvLmtleXNfID0gZnVuY3Rpb24ga2V5c18oKSB7XG4gICAgLy8gUmV0dXJucyBlbnVtZXJhYmxlICYmIG93biwgYnV0IHVuZm9ydHVuYXRlbHkga2V5c0F0b20gd2lsbCByZXBvcnQgb24gQU5ZIGtleSBjaGFuZ2UuXG4gICAgLy8gVGhlcmUgaXMgbm8gd2F5IHRvIGRpc3Rpbmd1aXNoIGJldHdlZW4gT2JqZWN0LmtleXMob2JqZWN0KSBhbmQgUmVmbGVjdC5vd25LZXlzKG9iamVjdCkgLSBib3RoIGFyZSBoYW5kbGVkIGJ5IG93bktleXMgdHJhcC5cbiAgICAvLyBXZSBjYW4gZWl0aGVyIG92ZXItcmVwb3J0IGluIE9iamVjdC5rZXlzKG9iamVjdCkgb3IgdW5kZXItcmVwb3J0IGluIFJlZmxlY3Qub3duS2V5cyhvYmplY3QpXG4gICAgLy8gV2UgY2hvb3NlIHRvIG92ZXItcmVwb3J0IGluIE9iamVjdC5rZXlzKG9iamVjdCksIGJlY2F1c2U6XG4gICAgLy8gLSB0eXBpY2FsbHkgaXQncyB1c2VkIHdpdGggc2ltcGxlIGRhdGEgb2JqZWN0c1xuICAgIC8vIC0gd2hlbiBzeW1ib2xpYy9ub24tZW51bWVyYWJsZSBrZXlzIGFyZSByZWxldmFudCBSZWZsZWN0Lm93bktleXMgd29ya3MgYXMgZXhwZWN0ZWRcbiAgICB0aGlzLmtleXNBdG9tXy5yZXBvcnRPYnNlcnZlZCgpO1xuICAgIHJldHVybiBPYmplY3Qua2V5cyh0aGlzLnRhcmdldF8pO1xuICB9O1xuXG4gIHJldHVybiBPYnNlcnZhYmxlT2JqZWN0QWRtaW5pc3RyYXRpb247XG59KCk7XG5mdW5jdGlvbiBhc09ic2VydmFibGVPYmplY3QodGFyZ2V0LCBvcHRpb25zKSB7XG4gIHZhciBfb3B0aW9ucyRuYW1lO1xuXG4gIGlmIChOT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgJiYgb3B0aW9ucyAmJiBpc09ic2VydmFibGVPYmplY3QodGFyZ2V0KSkge1xuICAgIGRpZShcIk9wdGlvbnMgY2FuJ3QgYmUgcHJvdmlkZWQgZm9yIGFscmVhZHkgb2JzZXJ2YWJsZSBvYmplY3RzLlwiKTtcbiAgfVxuXG4gIGlmIChoYXNQcm9wKHRhcmdldCwgJG1vYngpKSB7XG4gICAgaWYgKE5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiAmJiAhKGdldEFkbWluaXN0cmF0aW9uKHRhcmdldCkgaW5zdGFuY2VvZiBPYnNlcnZhYmxlT2JqZWN0QWRtaW5pc3RyYXRpb24pKSB7XG4gICAgICBkaWUoXCJDYW5ub3QgY29udmVydCAnXCIgKyBnZXREZWJ1Z05hbWUodGFyZ2V0KSArIFwiJyBpbnRvIG9ic2VydmFibGUgb2JqZWN0OlwiICsgXCJcXG5UaGUgdGFyZ2V0IGlzIGFscmVhZHkgb2JzZXJ2YWJsZSBvZiBkaWZmZXJlbnQgdHlwZS5cIiArIFwiXFxuRXh0ZW5kaW5nIGJ1aWx0aW5zIGlzIG5vdCBzdXBwb3J0ZWQuXCIpO1xuICAgIH1cblxuICAgIHJldHVybiB0YXJnZXQ7XG4gIH1cblxuICBpZiAoTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiICYmICFPYmplY3QuaXNFeHRlbnNpYmxlKHRhcmdldCkpIGRpZShcIkNhbm5vdCBtYWtlIHRoZSBkZXNpZ25hdGVkIG9iamVjdCBvYnNlcnZhYmxlOyBpdCBpcyBub3QgZXh0ZW5zaWJsZVwiKTtcbiAgdmFyIG5hbWUgPSAoX29wdGlvbnMkbmFtZSA9IG9wdGlvbnMgPT0gbnVsbCA/IHZvaWQgMCA6IG9wdGlvbnMubmFtZSkgIT0gbnVsbCA/IF9vcHRpb25zJG5hbWUgOiBOT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyAoaXNQbGFpbk9iamVjdCh0YXJnZXQpID8gXCJPYnNlcnZhYmxlT2JqZWN0XCIgOiB0YXJnZXQuY29uc3RydWN0b3IubmFtZSkgKyBcIkBcIiArIGdldE5leHRJZCgpIDogXCJPYnNlcnZhYmxlT2JqZWN0XCI7XG4gIHZhciBhZG0gPSBuZXcgT2JzZXJ2YWJsZU9iamVjdEFkbWluaXN0cmF0aW9uKHRhcmdldCwgbmV3IE1hcCgpLCBTdHJpbmcobmFtZSksIGdldEFubm90YXRpb25Gcm9tT3B0aW9ucyhvcHRpb25zKSk7XG4gIGFkZEhpZGRlblByb3AodGFyZ2V0LCAkbW9ieCwgYWRtKTtcbiAgcmV0dXJuIHRhcmdldDtcbn1cbnZhciBpc09ic2VydmFibGVPYmplY3RBZG1pbmlzdHJhdGlvbiA9IC8qI19fUFVSRV9fKi9jcmVhdGVJbnN0YW5jZW9mUHJlZGljYXRlKFwiT2JzZXJ2YWJsZU9iamVjdEFkbWluaXN0cmF0aW9uXCIsIE9ic2VydmFibGVPYmplY3RBZG1pbmlzdHJhdGlvbik7XG5cbmZ1bmN0aW9uIGdldENhY2hlZE9ic2VydmFibGVQcm9wRGVzY3JpcHRvcihrZXkpIHtcbiAgcmV0dXJuIGRlc2NyaXB0b3JDYWNoZVtrZXldIHx8IChkZXNjcmlwdG9yQ2FjaGVba2V5XSA9IHtcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzWyRtb2J4XS5nZXRPYnNlcnZhYmxlUHJvcFZhbHVlXyhrZXkpO1xuICAgIH0sXG4gICAgc2V0OiBmdW5jdGlvbiBzZXQodmFsdWUpIHtcbiAgICAgIHJldHVybiB0aGlzWyRtb2J4XS5zZXRPYnNlcnZhYmxlUHJvcFZhbHVlXyhrZXksIHZhbHVlKTtcbiAgICB9XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBpc09ic2VydmFibGVPYmplY3QodGhpbmcpIHtcbiAgaWYgKGlzT2JqZWN0KHRoaW5nKSkge1xuICAgIHJldHVybiBpc09ic2VydmFibGVPYmplY3RBZG1pbmlzdHJhdGlvbih0aGluZ1skbW9ieF0pO1xuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuZnVuY3Rpb24gcmVjb3JkQW5ub3RhdGlvbkFwcGxpZWQoYWRtLCBhbm5vdGF0aW9uLCBrZXkpIHtcbiAgdmFyIF9hZG0kdGFyZ2V0XyRzdG9yZWRBbjtcblxuICBpZiAoTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gICAgYWRtLmFwcGxpZWRBbm5vdGF0aW9uc19ba2V5XSA9IGFubm90YXRpb247XG4gIH0gLy8gUmVtb3ZlIGFwcGxpZWQgZGVjb3JhdG9yIGFubm90YXRpb24gc28gd2UgZG9uJ3QgdHJ5IHRvIGFwcGx5IGl0IGFnYWluIGluIHN1YmNsYXNzIGNvbnN0cnVjdG9yXG5cblxuICAoX2FkbSR0YXJnZXRfJHN0b3JlZEFuID0gYWRtLnRhcmdldF9bc3RvcmVkQW5ub3RhdGlvbnNTeW1ib2xdKSA9PSBudWxsID8gdHJ1ZSA6IGRlbGV0ZSBfYWRtJHRhcmdldF8kc3RvcmVkQW5ba2V5XTtcbn1cblxuZnVuY3Rpb24gYXNzZXJ0QW5ub3RhYmxlKGFkbSwgYW5ub3RhdGlvbiwga2V5KSB7XG4gIC8vIFZhbGlkIGFubm90YXRpb25cbiAgaWYgKE5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiAmJiAhaXNBbm5vdGF0aW9uKGFubm90YXRpb24pKSB7XG4gICAgZGllKFwiQ2Fubm90IGFubm90YXRlICdcIiArIGFkbS5uYW1lXyArIFwiLlwiICsga2V5LnRvU3RyaW5nKCkgKyBcIic6IEludmFsaWQgYW5ub3RhdGlvbi5cIik7XG4gIH1cbiAgLypcbiAgLy8gQ29uZmlndXJhYmxlLCBub3Qgc2VhbGVkLCBub3QgZnJvemVuXG4gIC8vIFBvc3NpYmx5IG5vdCBuZWVkZWQsIGp1c3QgYSBsaXR0bGUgYmV0dGVyIGVycm9yIHRoZW4gdGhlIG9uZSB0aHJvd24gYnkgZW5naW5lLlxuICAvLyBDYXNlcyB3aGVyZSB0aGlzIHdvdWxkIGJlIHVzZWZ1bCB0aGUgbW9zdCAoc3ViY2xhc3MgZmllbGQgaW5pdGlhbGl6ZXIpIGFyZSBub3QgaW50ZXJjZXB0YWJsZSBieSB0aGlzLlxuICBpZiAoX19ERVZfXykge1xuICAgICAgY29uc3QgY29uZmlndXJhYmxlID0gZ2V0RGVzY3JpcHRvcihhZG0udGFyZ2V0Xywga2V5KT8uY29uZmlndXJhYmxlXG4gICAgICBjb25zdCBmcm96ZW4gPSBPYmplY3QuaXNGcm96ZW4oYWRtLnRhcmdldF8pXG4gICAgICBjb25zdCBzZWFsZWQgPSBPYmplY3QuaXNTZWFsZWQoYWRtLnRhcmdldF8pXG4gICAgICBpZiAoIWNvbmZpZ3VyYWJsZSB8fCBmcm96ZW4gfHwgc2VhbGVkKSB7XG4gICAgICAgICAgY29uc3QgZmllbGROYW1lID0gYCR7YWRtLm5hbWVffS4ke2tleS50b1N0cmluZygpfWBcbiAgICAgICAgICBjb25zdCByZXF1ZXN0ZWRBbm5vdGF0aW9uVHlwZSA9IGFubm90YXRpb24uYW5ub3RhdGlvblR5cGVfXG4gICAgICAgICAgbGV0IGVycm9yID0gYENhbm5vdCBhcHBseSAnJHtyZXF1ZXN0ZWRBbm5vdGF0aW9uVHlwZX0nIHRvICcke2ZpZWxkTmFtZX0nOmBcbiAgICAgICAgICBpZiAoZnJvemVuKSB7XG4gICAgICAgICAgICAgIGVycm9yICs9IGBcXG5PYmplY3QgaXMgZnJvemVuLmBcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHNlYWxlZCkge1xuICAgICAgICAgICAgICBlcnJvciArPSBgXFxuT2JqZWN0IGlzIHNlYWxlZC5gXG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICghY29uZmlndXJhYmxlKSB7XG4gICAgICAgICAgICAgIGVycm9yICs9IGBcXG5wcm9wZXJ0eSBpcyBub3QgY29uZmlndXJhYmxlLmBcbiAgICAgICAgICAgICAgLy8gTWVudGlvbiBvbmx5IGlmIGNhdXNlZCBieSB1cyB0byBhdm9pZCBjb25mdXNpb25cbiAgICAgICAgICAgICAgaWYgKGhhc1Byb3AoYWRtLmFwcGxpZWRBbm5vdGF0aW9ucyEsIGtleSkpIHtcbiAgICAgICAgICAgICAgICAgIGVycm9yICs9IGBcXG5UbyBwcmV2ZW50IGFjY2lkZW50YWwgcmUtZGVmaW5pdGlvbiBvZiBhIGZpZWxkIGJ5IGEgc3ViY2xhc3MsIGBcbiAgICAgICAgICAgICAgICAgIGVycm9yICs9IGBhbGwgYW5ub3RhdGVkIGZpZWxkcyBvZiBub24tcGxhaW4gb2JqZWN0cyAoY2xhc3NlcykgYXJlIG5vdCBjb25maWd1cmFibGUuYFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGRpZShlcnJvcilcbiAgICAgIH1cbiAgfVxuICAqL1xuICAvLyBOb3QgYW5ub3RhdGVkXG5cblxuICBpZiAoTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiICYmICFpc092ZXJyaWRlKGFubm90YXRpb24pICYmIGhhc1Byb3AoYWRtLmFwcGxpZWRBbm5vdGF0aW9uc18sIGtleSkpIHtcbiAgICB2YXIgZmllbGROYW1lID0gYWRtLm5hbWVfICsgXCIuXCIgKyBrZXkudG9TdHJpbmcoKTtcbiAgICB2YXIgY3VycmVudEFubm90YXRpb25UeXBlID0gYWRtLmFwcGxpZWRBbm5vdGF0aW9uc19ba2V5XS5hbm5vdGF0aW9uVHlwZV87XG4gICAgdmFyIHJlcXVlc3RlZEFubm90YXRpb25UeXBlID0gYW5ub3RhdGlvbi5hbm5vdGF0aW9uVHlwZV87XG4gICAgZGllKFwiQ2Fubm90IGFwcGx5ICdcIiArIHJlcXVlc3RlZEFubm90YXRpb25UeXBlICsgXCInIHRvICdcIiArIGZpZWxkTmFtZSArIFwiJzpcIiArIChcIlxcblRoZSBmaWVsZCBpcyBhbHJlYWR5IGFubm90YXRlZCB3aXRoICdcIiArIGN1cnJlbnRBbm5vdGF0aW9uVHlwZSArIFwiJy5cIikgKyBcIlxcblJlLWFubm90YXRpbmcgZmllbGRzIGlzIG5vdCBhbGxvd2VkLlwiICsgXCJcXG5Vc2UgJ292ZXJyaWRlJyBhbm5vdGF0aW9uIGZvciBtZXRob2RzIG92ZXJyaWRlbiBieSBzdWJjbGFzcy5cIik7XG4gIH1cbn1cblxuLyoqXG4gKiBUaGlzIGFycmF5IGJ1ZmZlciBjb250YWlucyB0d28gbGlzdHMgb2YgcHJvcGVydGllcywgc28gdGhhdCBhbGwgYXJyYXlzXG4gKiBjYW4gcmVjeWNsZSB0aGVpciBwcm9wZXJ0eSBkZWZpbml0aW9ucywgd2hpY2ggc2lnbmlmaWNhbnRseSBpbXByb3ZlcyBwZXJmb3JtYW5jZSBvZiBjcmVhdGluZ1xuICogcHJvcGVydGllcyBvbiB0aGUgZmx5LlxuICovXG5cbnZhciBPQlNFUlZBQkxFX0FSUkFZX0JVRkZFUl9TSVpFID0gMDsgLy8gVHlwZXNjcmlwdCB3b3JrYXJvdW5kIHRvIG1ha2Ugc3VyZSBPYnNlcnZhYmxlQXJyYXkgZXh0ZW5kcyBBcnJheVxuXG52YXIgU3R1YkFycmF5ID0gZnVuY3Rpb24gU3R1YkFycmF5KCkge307XG5cbmZ1bmN0aW9uIGluaGVyaXQoY3RvciwgcHJvdG8pIHtcbiAgaWYgKE9iamVjdC5zZXRQcm90b3R5cGVPZikge1xuICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZihjdG9yLnByb3RvdHlwZSwgcHJvdG8pO1xuICB9IGVsc2UgaWYgKGN0b3IucHJvdG90eXBlLl9fcHJvdG9fXyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgY3Rvci5wcm90b3R5cGUuX19wcm90b19fID0gcHJvdG87XG4gIH0gZWxzZSB7XG4gICAgY3Rvci5wcm90b3R5cGUgPSBwcm90bztcbiAgfVxufVxuXG5pbmhlcml0KFN0dWJBcnJheSwgQXJyYXkucHJvdG90eXBlKTsgLy8gV2VleCBwcm90byBmcmVlemUgcHJvdGVjdGlvbiB3YXMgaGVyZSxcbi8vIGJ1dCBpdCBpcyB1bmNsZWFyIHdoeSB0aGUgaGFjayBpcyBuZWVkIGFzIE1vYlggbmV2ZXIgY2hhbmdlZCB0aGUgcHJvdG90eXBlXG4vLyBhbnl3YXksIHNvIHJlbW92ZWQgaXQgaW4gVjZcblxudmFyIExlZ2FjeU9ic2VydmFibGVBcnJheSA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX1N0dWJBcnJheSkge1xuICBfaW5oZXJpdHNMb29zZShMZWdhY3lPYnNlcnZhYmxlQXJyYXksIF9TdHViQXJyYXkpO1xuXG4gIGZ1bmN0aW9uIExlZ2FjeU9ic2VydmFibGVBcnJheShpbml0aWFsVmFsdWVzLCBlbmhhbmNlciwgbmFtZSwgb3duZWQpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBpZiAobmFtZSA9PT0gdm9pZCAwKSB7XG4gICAgICBuYW1lID0gTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gXCJPYnNlcnZhYmxlQXJyYXlAXCIgKyBnZXROZXh0SWQoKSA6IFwiT2JzZXJ2YWJsZUFycmF5XCI7XG4gICAgfVxuXG4gICAgaWYgKG93bmVkID09PSB2b2lkIDApIHtcbiAgICAgIG93bmVkID0gZmFsc2U7XG4gICAgfVxuXG4gICAgX3RoaXMgPSBfU3R1YkFycmF5LmNhbGwodGhpcykgfHwgdGhpcztcbiAgICB2YXIgYWRtID0gbmV3IE9ic2VydmFibGVBcnJheUFkbWluaXN0cmF0aW9uKG5hbWUsIGVuaGFuY2VyLCBvd25lZCwgdHJ1ZSk7XG4gICAgYWRtLnByb3h5XyA9IF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpO1xuICAgIGFkZEhpZGRlbkZpbmFsUHJvcChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgJG1vYngsIGFkbSk7XG5cbiAgICBpZiAoaW5pdGlhbFZhbHVlcyAmJiBpbml0aWFsVmFsdWVzLmxlbmd0aCkge1xuICAgICAgdmFyIHByZXYgPSBhbGxvd1N0YXRlQ2hhbmdlc1N0YXJ0KHRydWUpOyAvLyBAdHMtaWdub3JlXG5cbiAgICAgIF90aGlzLnNwbGljZVdpdGhBcnJheSgwLCAwLCBpbml0aWFsVmFsdWVzKTtcblxuICAgICAgYWxsb3dTdGF0ZUNoYW5nZXNFbmQocHJldik7XG4gICAgfVxuXG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgdmFyIF9wcm90byA9IExlZ2FjeU9ic2VydmFibGVBcnJheS5wcm90b3R5cGU7XG5cbiAgX3Byb3RvLmNvbmNhdCA9IGZ1bmN0aW9uIGNvbmNhdCgpIHtcbiAgICB0aGlzWyRtb2J4XS5hdG9tXy5yZXBvcnRPYnNlcnZlZCgpO1xuXG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFycmF5cyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFycmF5c1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICByZXR1cm4gQXJyYXkucHJvdG90eXBlLmNvbmNhdC5hcHBseSh0aGlzLnNsaWNlKCksIC8vQHRzLWlnbm9yZVxuICAgIGFycmF5cy5tYXAoZnVuY3Rpb24gKGEpIHtcbiAgICAgIHJldHVybiBpc09ic2VydmFibGVBcnJheShhKSA/IGEuc2xpY2UoKSA6IGE7XG4gICAgfSkpO1xuICB9O1xuXG4gIF9wcm90b1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBzZWxmID0gdGhpcztcbiAgICB2YXIgbmV4dEluZGV4ID0gMDtcbiAgICByZXR1cm4gbWFrZUl0ZXJhYmxlKHtcbiAgICAgIG5leHQ6IGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgcmV0dXJuIG5leHRJbmRleCA8IHNlbGYubGVuZ3RoID8ge1xuICAgICAgICAgIHZhbHVlOiBzZWxmW25leHRJbmRleCsrXSxcbiAgICAgICAgICBkb25lOiBmYWxzZVxuICAgICAgICB9IDoge1xuICAgICAgICAgIGRvbmU6IHRydWUsXG4gICAgICAgICAgdmFsdWU6IHVuZGVmaW5lZFxuICAgICAgICB9O1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xuXG4gIF9jcmVhdGVDbGFzcyhMZWdhY3lPYnNlcnZhYmxlQXJyYXksIFt7XG4gICAga2V5OiBcImxlbmd0aFwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXNbJG1vYnhdLmdldEFycmF5TGVuZ3RoXygpO1xuICAgIH0sXG4gICAgc2V0OiBmdW5jdGlvbiBzZXQobmV3TGVuZ3RoKSB7XG4gICAgICB0aGlzWyRtb2J4XS5zZXRBcnJheUxlbmd0aF8obmV3TGVuZ3RoKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFN5bWJvbC50b1N0cmluZ1RhZyxcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiBcIkFycmF5XCI7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIExlZ2FjeU9ic2VydmFibGVBcnJheTtcbn0oU3R1YkFycmF5KTtcblxuT2JqZWN0LmVudHJpZXMoYXJyYXlFeHRlbnNpb25zKS5mb3JFYWNoKGZ1bmN0aW9uIChfcmVmKSB7XG4gIHZhciBwcm9wID0gX3JlZlswXSxcbiAgICAgIGZuID0gX3JlZlsxXTtcbiAgaWYgKHByb3AgIT09IFwiY29uY2F0XCIpIGFkZEhpZGRlblByb3AoTGVnYWN5T2JzZXJ2YWJsZUFycmF5LnByb3RvdHlwZSwgcHJvcCwgZm4pO1xufSk7XG5cbmZ1bmN0aW9uIGNyZWF0ZUFycmF5RW50cnlEZXNjcmlwdG9yKGluZGV4KSB7XG4gIHJldHVybiB7XG4gICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXNbJG1vYnhdLmdldF8oaW5kZXgpO1xuICAgIH0sXG4gICAgc2V0OiBmdW5jdGlvbiBzZXQodmFsdWUpIHtcbiAgICAgIHRoaXNbJG1vYnhdLnNldF8oaW5kZXgsIHZhbHVlKTtcbiAgICB9XG4gIH07XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUFycmF5QnVmZmVySXRlbShpbmRleCkge1xuICBkZWZpbmVQcm9wZXJ0eShMZWdhY3lPYnNlcnZhYmxlQXJyYXkucHJvdG90eXBlLCBcIlwiICsgaW5kZXgsIGNyZWF0ZUFycmF5RW50cnlEZXNjcmlwdG9yKGluZGV4KSk7XG59XG5cbmZ1bmN0aW9uIHJlc2VydmVBcnJheUJ1ZmZlcihtYXgpIHtcbiAgaWYgKG1heCA+IE9CU0VSVkFCTEVfQVJSQVlfQlVGRkVSX1NJWkUpIHtcbiAgICBmb3IgKHZhciBpbmRleCA9IE9CU0VSVkFCTEVfQVJSQVlfQlVGRkVSX1NJWkU7IGluZGV4IDwgbWF4ICsgMTAwOyBpbmRleCsrKSB7XG4gICAgICBjcmVhdGVBcnJheUJ1ZmZlckl0ZW0oaW5kZXgpO1xuICAgIH1cblxuICAgIE9CU0VSVkFCTEVfQVJSQVlfQlVGRkVSX1NJWkUgPSBtYXg7XG4gIH1cbn1cbnJlc2VydmVBcnJheUJ1ZmZlcigxMDAwKTtcbmZ1bmN0aW9uIGNyZWF0ZUxlZ2FjeUFycmF5KGluaXRpYWxWYWx1ZXMsIGVuaGFuY2VyLCBuYW1lKSB7XG4gIHJldHVybiBuZXcgTGVnYWN5T2JzZXJ2YWJsZUFycmF5KGluaXRpYWxWYWx1ZXMsIGVuaGFuY2VyLCBuYW1lKTtcbn1cblxuZnVuY3Rpb24gZ2V0QXRvbSh0aGluZywgcHJvcGVydHkpIHtcbiAgaWYgKHR5cGVvZiB0aGluZyA9PT0gXCJvYmplY3RcIiAmJiB0aGluZyAhPT0gbnVsbCkge1xuICAgIGlmIChpc09ic2VydmFibGVBcnJheSh0aGluZykpIHtcbiAgICAgIGlmIChwcm9wZXJ0eSAhPT0gdW5kZWZpbmVkKSBkaWUoMjMpO1xuICAgICAgcmV0dXJuIHRoaW5nWyRtb2J4XS5hdG9tXztcbiAgICB9XG5cbiAgICBpZiAoaXNPYnNlcnZhYmxlU2V0KHRoaW5nKSkge1xuICAgICAgcmV0dXJuIHRoaW5nWyRtb2J4XTtcbiAgICB9XG5cbiAgICBpZiAoaXNPYnNlcnZhYmxlTWFwKHRoaW5nKSkge1xuICAgICAgaWYgKHByb3BlcnR5ID09PSB1bmRlZmluZWQpIHJldHVybiB0aGluZy5rZXlzQXRvbV87XG4gICAgICB2YXIgb2JzZXJ2YWJsZSA9IHRoaW5nLmRhdGFfLmdldChwcm9wZXJ0eSkgfHwgdGhpbmcuaGFzTWFwXy5nZXQocHJvcGVydHkpO1xuICAgICAgaWYgKCFvYnNlcnZhYmxlKSBkaWUoMjUsIHByb3BlcnR5LCBnZXREZWJ1Z05hbWUodGhpbmcpKTtcbiAgICAgIHJldHVybiBvYnNlcnZhYmxlO1xuICAgIH1cblxuICAgIGlmIChpc09ic2VydmFibGVPYmplY3QodGhpbmcpKSB7XG4gICAgICBpZiAoIXByb3BlcnR5KSByZXR1cm4gZGllKDI2KTtcblxuICAgICAgdmFyIF9vYnNlcnZhYmxlID0gdGhpbmdbJG1vYnhdLnZhbHVlc18uZ2V0KHByb3BlcnR5KTtcblxuICAgICAgaWYgKCFfb2JzZXJ2YWJsZSkgZGllKDI3LCBwcm9wZXJ0eSwgZ2V0RGVidWdOYW1lKHRoaW5nKSk7XG4gICAgICByZXR1cm4gX29ic2VydmFibGU7XG4gICAgfVxuXG4gICAgaWYgKGlzQXRvbSh0aGluZykgfHwgaXNDb21wdXRlZFZhbHVlKHRoaW5nKSB8fCBpc1JlYWN0aW9uKHRoaW5nKSkge1xuICAgICAgcmV0dXJuIHRoaW5nO1xuICAgIH1cbiAgfSBlbHNlIGlmIChpc0Z1bmN0aW9uKHRoaW5nKSkge1xuICAgIGlmIChpc1JlYWN0aW9uKHRoaW5nWyRtb2J4XSkpIHtcbiAgICAgIC8vIGRpc3Bvc2VyIGZ1bmN0aW9uXG4gICAgICByZXR1cm4gdGhpbmdbJG1vYnhdO1xuICAgIH1cbiAgfVxuXG4gIGRpZSgyOCk7XG59XG5mdW5jdGlvbiBnZXRBZG1pbmlzdHJhdGlvbih0aGluZywgcHJvcGVydHkpIHtcbiAgaWYgKCF0aGluZykgZGllKDI5KTtcbiAgaWYgKHByb3BlcnR5ICE9PSB1bmRlZmluZWQpIHJldHVybiBnZXRBZG1pbmlzdHJhdGlvbihnZXRBdG9tKHRoaW5nLCBwcm9wZXJ0eSkpO1xuICBpZiAoaXNBdG9tKHRoaW5nKSB8fCBpc0NvbXB1dGVkVmFsdWUodGhpbmcpIHx8IGlzUmVhY3Rpb24odGhpbmcpKSByZXR1cm4gdGhpbmc7XG4gIGlmIChpc09ic2VydmFibGVNYXAodGhpbmcpIHx8IGlzT2JzZXJ2YWJsZVNldCh0aGluZykpIHJldHVybiB0aGluZztcbiAgaWYgKHRoaW5nWyRtb2J4XSkgcmV0dXJuIHRoaW5nWyRtb2J4XTtcbiAgZGllKDI0LCB0aGluZyk7XG59XG5mdW5jdGlvbiBnZXREZWJ1Z05hbWUodGhpbmcsIHByb3BlcnR5KSB7XG4gIHZhciBuYW1lZDtcblxuICBpZiAocHJvcGVydHkgIT09IHVuZGVmaW5lZCkge1xuICAgIG5hbWVkID0gZ2V0QXRvbSh0aGluZywgcHJvcGVydHkpO1xuICB9IGVsc2UgaWYgKGlzQWN0aW9uKHRoaW5nKSkge1xuICAgIHJldHVybiB0aGluZy5uYW1lO1xuICB9IGVsc2UgaWYgKGlzT2JzZXJ2YWJsZU9iamVjdCh0aGluZykgfHwgaXNPYnNlcnZhYmxlTWFwKHRoaW5nKSB8fCBpc09ic2VydmFibGVTZXQodGhpbmcpKSB7XG4gICAgbmFtZWQgPSBnZXRBZG1pbmlzdHJhdGlvbih0aGluZyk7XG4gIH0gZWxzZSB7XG4gICAgLy8gdmFsaWQgZm9yIGFycmF5cyBhcyB3ZWxsXG4gICAgbmFtZWQgPSBnZXRBdG9tKHRoaW5nKTtcbiAgfVxuXG4gIHJldHVybiBuYW1lZC5uYW1lXztcbn1cblxudmFyIHRvU3RyaW5nID0gb2JqZWN0UHJvdG90eXBlLnRvU3RyaW5nO1xuZnVuY3Rpb24gZGVlcEVxdWFsKGEsIGIsIGRlcHRoKSB7XG4gIGlmIChkZXB0aCA9PT0gdm9pZCAwKSB7XG4gICAgZGVwdGggPSAtMTtcbiAgfVxuXG4gIHJldHVybiBlcShhLCBiLCBkZXB0aCk7XG59IC8vIENvcGllZCBmcm9tIGh0dHBzOi8vZ2l0aHViLmNvbS9qYXNoa2VuYXMvdW5kZXJzY29yZS9ibG9iLzVjMjM3YTdjNjgyZmI2OGZkNTM3ODIwM2YwYmYyMmRjZTE2MjQ4NTQvdW5kZXJzY29yZS5qcyNMMTE4Ni1MMTI4OVxuLy8gSW50ZXJuYWwgcmVjdXJzaXZlIGNvbXBhcmlzb24gZnVuY3Rpb24gZm9yIGBpc0VxdWFsYC5cblxuZnVuY3Rpb24gZXEoYSwgYiwgZGVwdGgsIGFTdGFjaywgYlN0YWNrKSB7XG4gIC8vIElkZW50aWNhbCBvYmplY3RzIGFyZSBlcXVhbC4gYDAgPT09IC0wYCwgYnV0IHRoZXkgYXJlbid0IGlkZW50aWNhbC5cbiAgLy8gU2VlIHRoZSBbSGFybW9ueSBgZWdhbGAgcHJvcG9zYWxdKGh0dHA6Ly93aWtpLmVjbWFzY3JpcHQub3JnL2Rva3UucGhwP2lkPWhhcm1vbnk6ZWdhbCkuXG4gIGlmIChhID09PSBiKSByZXR1cm4gYSAhPT0gMCB8fCAxIC8gYSA9PT0gMSAvIGI7IC8vIGBudWxsYCBvciBgdW5kZWZpbmVkYCBvbmx5IGVxdWFsIHRvIGl0c2VsZiAoc3RyaWN0IGNvbXBhcmlzb24pLlxuXG4gIGlmIChhID09IG51bGwgfHwgYiA9PSBudWxsKSByZXR1cm4gZmFsc2U7IC8vIGBOYU5gcyBhcmUgZXF1aXZhbGVudCwgYnV0IG5vbi1yZWZsZXhpdmUuXG5cbiAgaWYgKGEgIT09IGEpIHJldHVybiBiICE9PSBiOyAvLyBFeGhhdXN0IHByaW1pdGl2ZSBjaGVja3NcblxuICB2YXIgdHlwZSA9IHR5cGVvZiBhO1xuICBpZiAoIWlzRnVuY3Rpb24odHlwZSkgJiYgdHlwZSAhPT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgYiAhPSBcIm9iamVjdFwiKSByZXR1cm4gZmFsc2U7IC8vIENvbXBhcmUgYFtbQ2xhc3NdXWAgbmFtZXMuXG5cbiAgdmFyIGNsYXNzTmFtZSA9IHRvU3RyaW5nLmNhbGwoYSk7XG4gIGlmIChjbGFzc05hbWUgIT09IHRvU3RyaW5nLmNhbGwoYikpIHJldHVybiBmYWxzZTtcblxuICBzd2l0Y2ggKGNsYXNzTmFtZSkge1xuICAgIC8vIFN0cmluZ3MsIG51bWJlcnMsIHJlZ3VsYXIgZXhwcmVzc2lvbnMsIGRhdGVzLCBhbmQgYm9vbGVhbnMgYXJlIGNvbXBhcmVkIGJ5IHZhbHVlLlxuICAgIGNhc2UgXCJbb2JqZWN0IFJlZ0V4cF1cIjogLy8gUmVnRXhwcyBhcmUgY29lcmNlZCB0byBzdHJpbmdzIGZvciBjb21wYXJpc29uIChOb3RlOiAnJyArIC9hL2kgPT09ICcvYS9pJylcblxuICAgIGNhc2UgXCJbb2JqZWN0IFN0cmluZ11cIjpcbiAgICAgIC8vIFByaW1pdGl2ZXMgYW5kIHRoZWlyIGNvcnJlc3BvbmRpbmcgb2JqZWN0IHdyYXBwZXJzIGFyZSBlcXVpdmFsZW50OyB0aHVzLCBgXCI1XCJgIGlzXG4gICAgICAvLyBlcXVpdmFsZW50IHRvIGBuZXcgU3RyaW5nKFwiNVwiKWAuXG4gICAgICByZXR1cm4gXCJcIiArIGEgPT09IFwiXCIgKyBiO1xuXG4gICAgY2FzZSBcIltvYmplY3QgTnVtYmVyXVwiOlxuICAgICAgLy8gYE5hTmBzIGFyZSBlcXVpdmFsZW50LCBidXQgbm9uLXJlZmxleGl2ZS5cbiAgICAgIC8vIE9iamVjdChOYU4pIGlzIGVxdWl2YWxlbnQgdG8gTmFOLlxuICAgICAgaWYgKCthICE9PSArYSkgcmV0dXJuICtiICE9PSArYjsgLy8gQW4gYGVnYWxgIGNvbXBhcmlzb24gaXMgcGVyZm9ybWVkIGZvciBvdGhlciBudW1lcmljIHZhbHVlcy5cblxuICAgICAgcmV0dXJuICthID09PSAwID8gMSAvICthID09PSAxIC8gYiA6ICthID09PSArYjtcblxuICAgIGNhc2UgXCJbb2JqZWN0IERhdGVdXCI6XG4gICAgY2FzZSBcIltvYmplY3QgQm9vbGVhbl1cIjpcbiAgICAgIC8vIENvZXJjZSBkYXRlcyBhbmQgYm9vbGVhbnMgdG8gbnVtZXJpYyBwcmltaXRpdmUgdmFsdWVzLiBEYXRlcyBhcmUgY29tcGFyZWQgYnkgdGhlaXJcbiAgICAgIC8vIG1pbGxpc2Vjb25kIHJlcHJlc2VudGF0aW9ucy4gTm90ZSB0aGF0IGludmFsaWQgZGF0ZXMgd2l0aCBtaWxsaXNlY29uZCByZXByZXNlbnRhdGlvbnNcbiAgICAgIC8vIG9mIGBOYU5gIGFyZSBub3QgZXF1aXZhbGVudC5cbiAgICAgIHJldHVybiArYSA9PT0gK2I7XG5cbiAgICBjYXNlIFwiW29iamVjdCBTeW1ib2xdXCI6XG4gICAgICByZXR1cm4gdHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBTeW1ib2wudmFsdWVPZi5jYWxsKGEpID09PSBTeW1ib2wudmFsdWVPZi5jYWxsKGIpO1xuXG4gICAgY2FzZSBcIltvYmplY3QgTWFwXVwiOlxuICAgIGNhc2UgXCJbb2JqZWN0IFNldF1cIjpcbiAgICAgIC8vIE1hcHMgYW5kIFNldHMgYXJlIHVud3JhcHBlZCB0byBhcnJheXMgb2YgZW50cnktcGFpcnMsIGFkZGluZyBhbiBpbmNpZGVudGFsIGxldmVsLlxuICAgICAgLy8gSGlkZSB0aGlzIGV4dHJhIGxldmVsIGJ5IGluY3JlYXNpbmcgdGhlIGRlcHRoLlxuICAgICAgaWYgKGRlcHRoID49IDApIHtcbiAgICAgICAgZGVwdGgrKztcbiAgICAgIH1cblxuICAgICAgYnJlYWs7XG4gIH0gLy8gVW53cmFwIGFueSB3cmFwcGVkIG9iamVjdHMuXG5cblxuICBhID0gdW53cmFwKGEpO1xuICBiID0gdW53cmFwKGIpO1xuICB2YXIgYXJlQXJyYXlzID0gY2xhc3NOYW1lID09PSBcIltvYmplY3QgQXJyYXldXCI7XG5cbiAgaWYgKCFhcmVBcnJheXMpIHtcbiAgICBpZiAodHlwZW9mIGEgIT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgYiAhPSBcIm9iamVjdFwiKSByZXR1cm4gZmFsc2U7IC8vIE9iamVjdHMgd2l0aCBkaWZmZXJlbnQgY29uc3RydWN0b3JzIGFyZSBub3QgZXF1aXZhbGVudCwgYnV0IGBPYmplY3RgcyBvciBgQXJyYXlgc1xuICAgIC8vIGZyb20gZGlmZmVyZW50IGZyYW1lcyBhcmUuXG5cbiAgICB2YXIgYUN0b3IgPSBhLmNvbnN0cnVjdG9yLFxuICAgICAgICBiQ3RvciA9IGIuY29uc3RydWN0b3I7XG5cbiAgICBpZiAoYUN0b3IgIT09IGJDdG9yICYmICEoaXNGdW5jdGlvbihhQ3RvcikgJiYgYUN0b3IgaW5zdGFuY2VvZiBhQ3RvciAmJiBpc0Z1bmN0aW9uKGJDdG9yKSAmJiBiQ3RvciBpbnN0YW5jZW9mIGJDdG9yKSAmJiBcImNvbnN0cnVjdG9yXCIgaW4gYSAmJiBcImNvbnN0cnVjdG9yXCIgaW4gYikge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIGlmIChkZXB0aCA9PT0gMCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfSBlbHNlIGlmIChkZXB0aCA8IDApIHtcbiAgICBkZXB0aCA9IC0xO1xuICB9IC8vIEFzc3VtZSBlcXVhbGl0eSBmb3IgY3ljbGljIHN0cnVjdHVyZXMuIFRoZSBhbGdvcml0aG0gZm9yIGRldGVjdGluZyBjeWNsaWNcbiAgLy8gc3RydWN0dXJlcyBpcyBhZGFwdGVkIGZyb20gRVMgNS4xIHNlY3Rpb24gMTUuMTIuMywgYWJzdHJhY3Qgb3BlcmF0aW9uIGBKT2AuXG4gIC8vIEluaXRpYWxpemluZyBzdGFjayBvZiB0cmF2ZXJzZWQgb2JqZWN0cy5cbiAgLy8gSXQncyBkb25lIGhlcmUgc2luY2Ugd2Ugb25seSBuZWVkIHRoZW0gZm9yIG9iamVjdHMgYW5kIGFycmF5cyBjb21wYXJpc29uLlxuXG5cbiAgYVN0YWNrID0gYVN0YWNrIHx8IFtdO1xuICBiU3RhY2sgPSBiU3RhY2sgfHwgW107XG4gIHZhciBsZW5ndGggPSBhU3RhY2subGVuZ3RoO1xuXG4gIHdoaWxlIChsZW5ndGgtLSkge1xuICAgIC8vIExpbmVhciBzZWFyY2guIFBlcmZvcm1hbmNlIGlzIGludmVyc2VseSBwcm9wb3J0aW9uYWwgdG8gdGhlIG51bWJlciBvZlxuICAgIC8vIHVuaXF1ZSBuZXN0ZWQgc3RydWN0dXJlcy5cbiAgICBpZiAoYVN0YWNrW2xlbmd0aF0gPT09IGEpIHJldHVybiBiU3RhY2tbbGVuZ3RoXSA9PT0gYjtcbiAgfSAvLyBBZGQgdGhlIGZpcnN0IG9iamVjdCB0byB0aGUgc3RhY2sgb2YgdHJhdmVyc2VkIG9iamVjdHMuXG5cblxuICBhU3RhY2sucHVzaChhKTtcbiAgYlN0YWNrLnB1c2goYik7IC8vIFJlY3Vyc2l2ZWx5IGNvbXBhcmUgb2JqZWN0cyBhbmQgYXJyYXlzLlxuXG4gIGlmIChhcmVBcnJheXMpIHtcbiAgICAvLyBDb21wYXJlIGFycmF5IGxlbmd0aHMgdG8gZGV0ZXJtaW5lIGlmIGEgZGVlcCBjb21wYXJpc29uIGlzIG5lY2Vzc2FyeS5cbiAgICBsZW5ndGggPSBhLmxlbmd0aDtcbiAgICBpZiAobGVuZ3RoICE9PSBiLmxlbmd0aCkgcmV0dXJuIGZhbHNlOyAvLyBEZWVwIGNvbXBhcmUgdGhlIGNvbnRlbnRzLCBpZ25vcmluZyBub24tbnVtZXJpYyBwcm9wZXJ0aWVzLlxuXG4gICAgd2hpbGUgKGxlbmd0aC0tKSB7XG4gICAgICBpZiAoIWVxKGFbbGVuZ3RoXSwgYltsZW5ndGhdLCBkZXB0aCAtIDEsIGFTdGFjaywgYlN0YWNrKSkgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICAvLyBEZWVwIGNvbXBhcmUgb2JqZWN0cy5cbiAgICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKGEpO1xuICAgIHZhciBrZXk7XG4gICAgbGVuZ3RoID0ga2V5cy5sZW5ndGg7IC8vIEVuc3VyZSB0aGF0IGJvdGggb2JqZWN0cyBjb250YWluIHRoZSBzYW1lIG51bWJlciBvZiBwcm9wZXJ0aWVzIGJlZm9yZSBjb21wYXJpbmcgZGVlcCBlcXVhbGl0eS5cblxuICAgIGlmIChPYmplY3Qua2V5cyhiKS5sZW5ndGggIT09IGxlbmd0aCkgcmV0dXJuIGZhbHNlO1xuXG4gICAgd2hpbGUgKGxlbmd0aC0tKSB7XG4gICAgICAvLyBEZWVwIGNvbXBhcmUgZWFjaCBtZW1iZXJcbiAgICAgIGtleSA9IGtleXNbbGVuZ3RoXTtcbiAgICAgIGlmICghKGhhc1Byb3AoYiwga2V5KSAmJiBlcShhW2tleV0sIGJba2V5XSwgZGVwdGggLSAxLCBhU3RhY2ssIGJTdGFjaykpKSByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9IC8vIFJlbW92ZSB0aGUgZmlyc3Qgb2JqZWN0IGZyb20gdGhlIHN0YWNrIG9mIHRyYXZlcnNlZCBvYmplY3RzLlxuXG5cbiAgYVN0YWNrLnBvcCgpO1xuICBiU3RhY2sucG9wKCk7XG4gIHJldHVybiB0cnVlO1xufVxuXG5mdW5jdGlvbiB1bndyYXAoYSkge1xuICBpZiAoaXNPYnNlcnZhYmxlQXJyYXkoYSkpIHJldHVybiBhLnNsaWNlKCk7XG4gIGlmIChpc0VTNk1hcChhKSB8fCBpc09ic2VydmFibGVNYXAoYSkpIHJldHVybiBBcnJheS5mcm9tKGEuZW50cmllcygpKTtcbiAgaWYgKGlzRVM2U2V0KGEpIHx8IGlzT2JzZXJ2YWJsZVNldChhKSkgcmV0dXJuIEFycmF5LmZyb20oYS5lbnRyaWVzKCkpO1xuICByZXR1cm4gYTtcbn1cblxuZnVuY3Rpb24gbWFrZUl0ZXJhYmxlKGl0ZXJhdG9yKSB7XG4gIGl0ZXJhdG9yW1N5bWJvbC5pdGVyYXRvcl0gPSBnZXRTZWxmO1xuICByZXR1cm4gaXRlcmF0b3I7XG59XG5cbmZ1bmN0aW9uIGdldFNlbGYoKSB7XG4gIHJldHVybiB0aGlzO1xufVxuXG5mdW5jdGlvbiBpc0Fubm90YXRpb24odGhpbmcpIHtcbiAgcmV0dXJuICgvLyBDYW4gYmUgZnVuY3Rpb25cbiAgICB0aGluZyBpbnN0YW5jZW9mIE9iamVjdCAmJiB0eXBlb2YgdGhpbmcuYW5ub3RhdGlvblR5cGVfID09PSBcInN0cmluZ1wiICYmIGlzRnVuY3Rpb24odGhpbmcubWFrZV8pICYmIGlzRnVuY3Rpb24odGhpbmcuZXh0ZW5kXylcbiAgKTtcbn1cblxuLyoqXG4gKiAoYykgTWljaGVsIFdlc3RzdHJhdGUgMjAxNSAtIDIwMjBcbiAqIE1JVCBMaWNlbnNlZFxuICpcbiAqIFdlbGNvbWUgdG8gdGhlIG1vYnggc291cmNlcyEgVG8gZ2V0IGFuIGdsb2JhbCBvdmVydmlldyBvZiBob3cgTW9iWCBpbnRlcm5hbGx5IHdvcmtzLFxuICogdGhpcyBpcyBhIGdvb2QgcGxhY2UgdG8gc3RhcnQ6XG4gKiBodHRwczovL21lZGl1bS5jb20vQG13ZXN0c3RyYXRlL2JlY29taW5nLWZ1bGx5LXJlYWN0aXZlLWFuLWluLWRlcHRoLWV4cGxhbmF0aW9uLW9mLW1vYnNlcnZhYmxlLTU1OTk1MjYyYTI1NCMueHZiaDZxZDc0XG4gKlxuICogU291cmNlIGZvbGRlcnM6XG4gKiA9PT09PT09PT09PT09PT1cbiAqXG4gKiAtIGFwaS8gICAgIE1vc3Qgb2YgdGhlIHB1YmxpYyBzdGF0aWMgbWV0aG9kcyBleHBvc2VkIGJ5IHRoZSBtb2R1bGUgY2FuIGJlIGZvdW5kIGhlcmUuXG4gKiAtIGNvcmUvICAgIEltcGxlbWVudGF0aW9uIG9mIHRoZSBNb2JYIGFsZ29yaXRobTsgYXRvbXMsIGRlcml2YXRpb25zLCByZWFjdGlvbnMsIGRlcGVuZGVuY3kgdHJlZXMsIG9wdGltaXphdGlvbnMuIENvb2wgc3R1ZmYgY2FuIGJlIGZvdW5kIGhlcmUuXG4gKiAtIHR5cGVzLyAgIEFsbCB0aGUgbWFnaWMgdGhhdCBpcyBuZWVkIHRvIGhhdmUgb2JzZXJ2YWJsZSBvYmplY3RzLCBhcnJheXMgYW5kIHZhbHVlcyBpcyBpbiB0aGlzIGZvbGRlci4gSW5jbHVkaW5nIHRoZSBtb2RpZmllcnMgbGlrZSBgYXNGbGF0YC5cbiAqIC0gdXRpbHMvICAgVXRpbGl0eSBzdHVmZi5cbiAqXG4gKi9cbltcIlN5bWJvbFwiLCBcIk1hcFwiLCBcIlNldFwiLCBcIlN5bWJvbFwiXS5mb3JFYWNoKGZ1bmN0aW9uIChtKSB7XG4gIHZhciBnID0gZ2V0R2xvYmFsKCk7XG5cbiAgaWYgKHR5cGVvZiBnW21dID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgZGllKFwiTW9iWCByZXF1aXJlcyBnbG9iYWwgJ1wiICsgbSArIFwiJyB0byBiZSBhdmFpbGFibGUgb3IgcG9seWZpbGxlZFwiKTtcbiAgfVxufSk7XG5cbmlmICh0eXBlb2YgX19NT0JYX0RFVlRPT0xTX0dMT0JBTF9IT09LX18gPT09IFwib2JqZWN0XCIpIHtcbiAgLy8gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vYW5keWtvZy9tb2J4LWRldnRvb2xzL1xuICBfX01PQlhfREVWVE9PTFNfR0xPQkFMX0hPT0tfXy5pbmplY3RNb2J4KHtcbiAgICBzcHk6IHNweSxcbiAgICBleHRyYXM6IHtcbiAgICAgIGdldERlYnVnTmFtZTogZ2V0RGVidWdOYW1lXG4gICAgfSxcbiAgICAkbW9ieDogJG1vYnhcbiAgfSk7XG59XG5leHBvcnQgeyAkbW9ieCwgRmxvd0NhbmNlbGxhdGlvbkVycm9yLCBPYnNlcnZhYmxlTWFwLCBPYnNlcnZhYmxlU2V0LCBSZWFjdGlvbiwgYWxsb3dTdGF0ZUNoYW5nZXMgYXMgX2FsbG93U3RhdGVDaGFuZ2VzLCBydW5JbkFjdGlvbiBhcyBfYWxsb3dTdGF0ZUNoYW5nZXNJbnNpZGVDb21wdXRlZCwgYWxsb3dTdGF0ZVJlYWRzRW5kIGFzIF9hbGxvd1N0YXRlUmVhZHNFbmQsIGFsbG93U3RhdGVSZWFkc1N0YXJ0IGFzIF9hbGxvd1N0YXRlUmVhZHNTdGFydCwgYXV0b0FjdGlvbiBhcyBfYXV0b0FjdGlvbiwgX2VuZEFjdGlvbiwgZ2V0QWRtaW5pc3RyYXRpb24gYXMgX2dldEFkbWluaXN0cmF0aW9uLCBnZXRHbG9iYWxTdGF0ZSBhcyBfZ2V0R2xvYmFsU3RhdGUsIGludGVyY2VwdFJlYWRzIGFzIF9pbnRlcmNlcHRSZWFkcywgaXNDb21wdXRpbmdEZXJpdmF0aW9uIGFzIF9pc0NvbXB1dGluZ0Rlcml2YXRpb24sIHJlc2V0R2xvYmFsU3RhdGUgYXMgX3Jlc2V0R2xvYmFsU3RhdGUsIF9zdGFydEFjdGlvbiwgYWN0aW9uLCBhdXRvcnVuLCBjb21wYXJlciwgY29tcHV0ZWQsIGNvbmZpZ3VyZSwgY3JlYXRlQXRvbSwgYXBpRGVmaW5lUHJvcGVydHkgYXMgZGVmaW5lUHJvcGVydHksIGVudHJpZXMsIGV4dGVuZE9ic2VydmFibGUsIGZsb3csIGZsb3dSZXN1bHQsIGdldCwgZ2V0QXRvbSwgZ2V0RGVidWdOYW1lLCBnZXREZXBlbmRlbmN5VHJlZSwgZ2V0T2JzZXJ2ZXJUcmVlLCBoYXMsIGludGVyY2VwdCwgaXNBY3Rpb24sIGlzT2JzZXJ2YWJsZVZhbHVlIGFzIGlzQm94ZWRPYnNlcnZhYmxlLCBpc0NvbXB1dGVkLCBpc0NvbXB1dGVkUHJvcCwgaXNGbG93LCBpc0Zsb3dDYW5jZWxsYXRpb25FcnJvciwgaXNPYnNlcnZhYmxlLCBpc09ic2VydmFibGVBcnJheSwgaXNPYnNlcnZhYmxlTWFwLCBpc09ic2VydmFibGVPYmplY3QsIGlzT2JzZXJ2YWJsZVByb3AsIGlzT2JzZXJ2YWJsZVNldCwga2V5cywgbWFrZUF1dG9PYnNlcnZhYmxlLCBtYWtlT2JzZXJ2YWJsZSwgb2JzZXJ2YWJsZSwgb2JzZXJ2ZSwgb25CZWNvbWVPYnNlcnZlZCwgb25CZWNvbWVVbm9ic2VydmVkLCBvblJlYWN0aW9uRXJyb3IsIG92ZXJyaWRlLCBhcGlPd25LZXlzIGFzIG93bktleXMsIHJlYWN0aW9uLCByZW1vdmUsIHJ1bkluQWN0aW9uLCBzZXQsIHNweSwgdG9KUywgdHJhY2UsIHRyYW5zYWN0aW9uLCB1bnRyYWNrZWQsIHZhbHVlcywgd2hlbiB9O1xuLy8gIyBzb3VyY2VNYXBwaW5nVVJMPW1vYnguZXNtLmpzLm1hcFxuICJdfQ==