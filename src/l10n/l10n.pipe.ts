import { Optional, Pipe, PipeTransform, OnDestroy } from '@angular/core';
import { L10nService } from './l10n.service';
import { L10nParserService } from './l10n-parser.service';
import { Subscription } from 'rxjs';

@Pipe({
  name: 'loc',
  pure: false
})
export class L10nPipe implements PipeTransform, OnDestroy {

  key:string;
  args:string[];
  value:string;

  subscription: Subscription;

  constructor(
    @Optional()
    private l10n: L10nService,
  ) {
    this.args = [];
  }

  // Check if key and args match
  compare(key, ...args) {
    return key===this.key &&
           args.length === this.args.length &&
           args.every((v,idx)=>v===this.args[idx])
  }

  transform(key: string, ...args: string[]): any {
    // Dispose subscription if key or params are different
    if(!this.compare(key, ...args) && this.subscription) {
      this._dispose();
    }

    // store key and args for comparison
    this.key=key;
    this.args=args;

    if(!this.subscription) {
      this.subscription = this.l10n.localize(key, ...args).subscribe(value=>{
        this.value = value;
      });
    }

    return this.value;
  }

  _dispose(): void {
    this.subscription.unsubscribe();
    this.value = null;
    this.subscription = null;
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this._dispose();
    }
  }
}
