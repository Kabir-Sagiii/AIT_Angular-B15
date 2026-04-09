import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Divcontainer } from './divcontainer';

describe('Divcontainer', () => {
  let component: Divcontainer;
  let fixture: ComponentFixture<Divcontainer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Divcontainer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Divcontainer);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
