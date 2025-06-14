import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainButtonComponent } from './main-button.component';

describe('HomeComponent', () => {
  let component: MainButtonComponent;
  let fixture: ComponentFixture<MainButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
