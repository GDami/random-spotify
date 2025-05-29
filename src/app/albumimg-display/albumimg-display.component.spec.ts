import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumimgDisplayComponent } from './albumimg-display.component';

describe('AlbumimgDisplayComponent', () => {
  let component: AlbumimgDisplayComponent;
  let fixture: ComponentFixture<AlbumimgDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlbumimgDisplayComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlbumimgDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
