"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var core_1 = require('@angular/core');
var BehaviorSubject_1 = require('rxjs/BehaviorSubject');
var Subject_1 = require('rxjs/Subject');
var Observable_1 = require('rxjs/Observable');
var merge_1 = require('rxjs/observable/merge');
require('rxjs/add/operator/scan');
require('rxjs/add/operator/filter');
require('rxjs/add/operator/pluck');
require('rxjs/add/operator/map');
require('rxjs/add/operator/distinctUntilChanged');
require('rxjs/add/operator/withLatestFrom');
var reflect_1 = require('../reflect');
exports.STORE_REDUCERS = new core_1.OpaqueToken('store.reducers');
exports.STORE_EFFECTS = new core_1.OpaqueToken('store.effects');
function select(pathOrMapFn) {
    var paths = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        paths[_i - 1] = arguments[_i];
    }
    var mapped$;
    if (typeof pathOrMapFn === 'string') {
        mapped$ = this.pluck.apply(this, [pathOrMapFn].concat(paths));
    }
    else if (typeof pathOrMapFn === 'function') {
        mapped$ = this.map(pathOrMapFn);
    }
    else {
        throw new TypeError(("Unexpected type " + typeof pathOrMapFn + " in select operator,")
            + " expected 'string' or 'function'");
    }
    return mapped$.distinctUntilChanged();
}
// tslint:disable-next-line:only-arrow-functions
Observable_1.Observable.prototype.select = select;
var InitAction = (function () {
    function InitAction() {
    }
    return InitAction;
}());
exports.InitAction = InitAction;
var StoreActions = (function (_super) {
    __extends(StoreActions, _super);
    function StoreActions() {
        _super.apply(this, arguments);
        // Action dispatcher
        this._dispatcher = new Subject_1.Subject();
        // Action stream ist just the last action
        this.actions$ = this._dispatcher.asObservable();
        this.source = this.actions$;
    }
    StoreActions.prototype.ofType = function () {
        var actionClasses = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            actionClasses[_i - 0] = arguments[_i];
        }
        return this.actions$.filter(function (action) { return actionClasses.some(function (cls) { return action instanceof cls; }); });
    };
    StoreActions.prototype.dispatch = function (action) {
        this._dispatcher.next(action);
    };
    StoreActions.prototype.next = function (action) {
        this.dispatch(action);
    };
    StoreActions.prototype.error = function (err) { };
    StoreActions.prototype.complete = function () { };
    StoreActions.decorators = [
        { type: core_1.Injectable },
    ];
    /** @nocollapse */
    StoreActions.ctorParameters = [];
    return StoreActions;
}(Observable_1.Observable));
exports.StoreActions = StoreActions;
var Store = (function (_super) {
    __extends(Store, _super);
    function Store(actions$, reducers, effects) {
        _super.call(this);
        this.actions$ = actions$;
        // Reducers dispatcher
        this._reducers = new BehaviorSubject_1.BehaviorSubject({});
        // Reducers stream
        this.reducers$ = this._reducers.asObservable().scan(function (reducers, currentReducers) {
            return Object.assign({}, reducers, currentReducers);
        });
        // The state changes when an action is dispatched by running reducers
        // The new state is then cached for further subscribers 
        this.state$ = this.actions$.withLatestFrom(this.reducers$).scan(function (oldState, _a) {
            var action = _a[0], reducers = _a[1];
            var state = Object.assign({}, oldState);
            Object.keys(reducers).forEach(function (key) {
                var reducer = reducers[key];
                state[key] = reducer(oldState[key], action) || {};
            });
            return state;
        }, {}).publishReplay(1);
        // The source of the store observable is also the state stream
        this.source = this.state$;
        this.effectSubs = [];
        this.addReducers(reducers);
        this.addEffects(effects);
        // Listen to actions by connecting the state observable
        this.stateSub = this.state$.connect();
        // Init action
        this.dispatch(new InitAction());
    }
    Store.prototype.dispatch = function (action) {
        this.actions$.dispatch(action);
    };
    Store.prototype.addReducers = function (reducers) {
        this._reducers.next(reducers);
    };
    Store.prototype.addEffects = function (effectInstances) {
        var _this = this;
        var eiArr = Array.isArray(effectInstances) ? effectInstances : [effectInstances];
        eiArr.forEach(function (instance) {
            var properties = reflect_1.getEffectsMetadata(instance);
            var effects$ = merge_1.merge.apply(void 0, (properties.map(function (property) { return instance[property]; })));
            var sub = effects$.subscribe(function (action) {
                if (action) {
                    _this.dispatch(action);
                }
            });
            _this.effectSubs.push(sub);
        });
    };
    Store.prototype.next = function (action) {
        this.dispatch(action);
    };
    Store.prototype.error = function (err) { };
    Store.prototype.complete = function () { };
    Store.prototype.ngOnDestroy = function () {
        [this.stateSub].concat(this.effectSubs).filter(function (sub) { return sub && !sub.closed; }).forEach(function (sub) { return sub.unsubscribe(); });
    };
    Store.decorators = [
        { type: core_1.Injectable },
    ];
    /** @nocollapse */
    Store.ctorParameters = [
        { type: StoreActions, },
        { type: undefined, decorators: [{ type: core_1.Inject, args: [exports.STORE_REDUCERS,] },] },
        { type: Array, decorators: [{ type: core_1.Inject, args: [exports.STORE_EFFECTS,] },] },
    ];
    return Store;
}(Observable_1.Observable));
exports.Store = Store;
exports.compose = function () {
    var functions = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        functions[_i - 0] = arguments[_i];
    }
    return function (arg) {
        if (functions.length === 0) {
            return arg;
        }
        var last = functions[functions.length - 1];
        var rest = functions.slice(0, -1);
        return rest.reduceRight(function (composed, fn) { return fn(composed); }, last(arg));
    };
};
var StoreModule = (function () {
    function StoreModule() {
    }
    StoreModule.forRoot = function (config) {
        return {
            ngModule: StoreModule,
            providers: [
                StoreActions,
                Store,
                {
                    provide: exports.STORE_REDUCERS,
                    useValue: config.reducers || {}
                }
            ].concat((config.effects || []).map(function (type) {
                return {
                    provide: exports.STORE_EFFECTS,
                    useClass: type,
                    multi: true
                };
            }))
        };
    };
    StoreModule.decorators = [
        { type: core_1.NgModule, args: [{
                    providers: [
                        Store,
                        {
                            provide: exports.STORE_REDUCERS,
                            useValue: {}
                        },
                    ]
                },] },
    ];
    /** @nocollapse */
    StoreModule.ctorParameters = [];
    return StoreModule;
}());
exports.StoreModule = StoreModule;
