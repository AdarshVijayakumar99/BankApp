import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BenefviewComponent } from './benefview.component';

describe('BenefviewComponent', () => {
  let component: BenefviewComponent;
  let fixture: ComponentFixture<BenefviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BenefviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BenefviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
