import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChutkiComponent } from './chutki.component';

describe('ChutkiComponent', () => {
  let component: ChutkiComponent;
  let fixture: ComponentFixture<ChutkiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChutkiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChutkiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
