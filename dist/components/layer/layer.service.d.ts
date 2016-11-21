import { LayerDirective } from './layer.component';
import { Observable } from 'rxjs/Observable';
export declare class LayerService {
    private layerNameMap;
    private layerMap;
    private _visibleLayers;
    _visibleLayers$: Observable<LayerDirective[]>;
    constructor();
    visibleLayersFor(base?: string): Observable<LayerDirective[]>;
    open(layerName: string, data?: any): Observable<any>;
    close(layerName: string): void;
    register(layer: LayerDirective, base?: string): void;
    unregister(layer: LayerDirective): void;
    ngOnDestroy(): void;
}
