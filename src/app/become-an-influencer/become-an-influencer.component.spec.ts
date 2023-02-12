import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BecomeAnInfluencerComponent } from './become-an-influencer.component';

describe('BecomeAnInfluencerComponent', () => {
  let component: BecomeAnInfluencerComponent;
  let fixture: ComponentFixture<BecomeAnInfluencerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BecomeAnInfluencerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BecomeAnInfluencerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
