import { LayerDirective } from './layer.component';
import { Observable } from 'rxjs/Observable';
export declare class LayerService {
    private visibleLayersChanged$;
    readonly visibleLayersChanged: Observable<LayerDirective[]>;
    private subscriptions;
    private layers;
    readonly visibleLayers: LayerDirective[];
    readonly currentZIndex: number;
    constructor();
    open(layerName: any, data?: any): Observable<any>;
    close(layerName: any): void;
    register(layer: LayerDirective): void;
    unregister(layer: LayerDirective): void;
}
