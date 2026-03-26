import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Trendingproduct } from './trendingproduct';

describe('Trendingproduct', () => {
  let component: Trendingproduct;
  let fixture: ComponentFixture<Trendingproduct>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Trendingproduct]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Trendingproduct);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
