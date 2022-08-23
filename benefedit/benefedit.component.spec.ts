import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BenefeditComponent } from './benefedit.component';

describe('BenefeditComponent', () => {
  let component: BenefeditComponent;
  let fixture: ComponentFixture<BenefeditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BenefeditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BenefeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
