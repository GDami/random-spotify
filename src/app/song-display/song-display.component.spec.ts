import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SongDisplayComponent } from './song-display.component';

describe('SongDisplayComponent', () => {
  let component: SongDisplayComponent;
  let fixture: ComponentFixture<SongDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SongDisplayComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SongDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
