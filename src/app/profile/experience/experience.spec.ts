import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Experience } from './experience';

describe('ExperienceComponent', () => {
  let component: Experience;
  let fixture: ComponentFixture<Experience>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Experience]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Experience);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
