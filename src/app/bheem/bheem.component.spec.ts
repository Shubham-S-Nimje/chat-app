import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BheemComponent } from './bheem.component';

describe('BheemComponent', () => {
  let component: BheemComponent;
  let fixture: ComponentFixture<BheemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BheemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BheemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
