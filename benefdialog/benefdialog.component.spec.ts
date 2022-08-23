import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BenefdialogComponent } from './benefdialog.component';

describe('BenefdialogComponent', () => {
  let component: BenefdialogComponent;
  let fixture: ComponentFixture<BenefdialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BenefdialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BenefdialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
