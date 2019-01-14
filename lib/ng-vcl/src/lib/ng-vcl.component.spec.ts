import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgVclComponent } from './ng-vcl.component';

describe('NgVclComponent', () => {
  let component: NgVclComponent;
  let fixture: ComponentFixture<NgVclComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgVclComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgVclComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
