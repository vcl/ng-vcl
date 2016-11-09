import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { L10nService } from '../../l10n/l10n.module';
import { ObservableComponent } from '../../reactive/index';
export declare class LinkComponent extends ObservableComponent {
    private l10n;
    href: string;
    label: string;
    title: string;
    scheme: string;
    prepIcon: string;
    appIcon: string;
    disabled: boolean;
    readonly attrHref: string;
    locTitle$: Observable<string>;
    locTitleSub: Subscription;
    locTitle: string;
    constructor(l10n: L10nService);
    ngOnInit(): void;
    ngOnDestroy(): void;
}
