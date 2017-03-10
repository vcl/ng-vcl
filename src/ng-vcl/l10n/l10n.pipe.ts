import { Optional, Pipe, PipeTransform, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { L10nService } from './l10n.service';

@Pipe({
  name: 'loc',
  pure: false
})
export class L10nPipe implements PipeTransform, OnDestroy {

  key: string;
  args: string[];
  value: string;

  subscription: Subscription | null;

  constructor(
    @Optional()
    private l10n: L10nService,
  ) {
    this.args = [];
  }

  // Check if key and args match
  compare(key, ...args) {
    return key === this.key &&
           args.length === this.args.length &&
           args.every((v, idx) => v === this.args[idx]);
  }

  transform(key: string, ...args: string[]): any {
    if (this.subscription) {
      // Dispose subscription if key or params are different
      if (!this.compare(key, ...args)) {
        this.dispose();
      } else {
        return this.value;
      }
    }

    // store key and args for comparison
    this.key = key;
    this.args = args;

    this.subscription = this.l10n.localize(key, ...args).subscribe(value => {
      this.value = value;
    });

    return this.value;
  }

  private dispose(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
      this.subscription = null;
    }
  }

  ngOnDestroy(): void {
    this.dispose();
  }
}
