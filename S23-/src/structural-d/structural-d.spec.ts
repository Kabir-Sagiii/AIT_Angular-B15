import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StructuralD } from './structural-d';

describe('StructuralD', () => {
  let component: StructuralD;
  let fixture: ComponentFixture<StructuralD>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StructuralD]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StructuralD);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
