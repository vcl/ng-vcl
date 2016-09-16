import { LayerDirective } from './../components/layer/layer.component';
import { Observable } from 'rxjs/Observable';
export declare class LayerManagerService {
    private visibleLayersChanged$;
    readonly visibleLayersChanged: Observable<LayerDirective[]>;
    private layers;
    readonly visibleLayers: LayerDirective[];
    readonly currentZIndex: number;
    constructor();
    register(layer: LayerDirective): void;
    unregister(layer: LayerDirective): void;
}
