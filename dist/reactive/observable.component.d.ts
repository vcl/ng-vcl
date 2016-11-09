import { SimpleChange } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
export declare abstract class ObservableComponent {
    private changesSubject;
    protected changes$: Observable<{
        [key: string]: SimpleChange;
    }>;
    ngOnChanges(changes: {
        [key: string]: SimpleChange;
    }): void;
    observeChange<T>(propertyName: string): Observable<T>;
}
export declare function Observe(targetProperty: string): PropertyDecorator;
