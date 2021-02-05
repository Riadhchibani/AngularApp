import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockIconComponent } from './block-icon.component';

describe('BlockIconComponent', () => {
  let component: BlockIconComponent;
  let fixture: ComponentFixture<BlockIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlockIconComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
