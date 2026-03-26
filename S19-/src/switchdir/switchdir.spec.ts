import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Switchdir } from './switchdir';

describe('Switchdir', () => {
  let component: Switchdir;
  let fixture: ComponentFixture<Switchdir>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Switchdir]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Switchdir);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
