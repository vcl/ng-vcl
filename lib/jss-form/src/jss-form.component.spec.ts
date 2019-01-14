import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JssFormComponent } from './jss-form.component';
import { VCLJssFormModule } from './jss-form.module';

describe('JssFormComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ VCLJssFormModule ]
    })
    .compileComponents();
  }));

  it('work', () => {
    expect(1).toEqual(1);
  });
});
