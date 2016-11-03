"use strict";
var ReplaySubject_1 = require('rxjs/ReplaySubject');
require('rxjs/add/operator/filter');
require('rxjs/add/operator/map');
var ObservableComponent = (function () {
    function ObservableComponent() {
        this.changesSubject = new ReplaySubject_1.ReplaySubject();
        this.changes$ = this.changesSubject.asObservable();
    }
    ObservableComponent.prototype.ngOnChanges = function (changes) {
        this.changesSubject.next(changes);
    };
    ObservableComponent.prototype.observeProperty = function (propertyName) {
        return this.changes$
            .filter(function (changes) { return changes.hasOwnProperty(propertyName); })
            .map(function (changes) { return changes[propertyName].currentValue; });
    };
    return ObservableComponent;
}());
exports.ObservableComponent = ObservableComponent;
