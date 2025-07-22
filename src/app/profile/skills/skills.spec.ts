import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Skills } from './skills';

describe('SkillsComponent', () => {
  let component: Skills;
  let fixture: ComponentFixture<Skills>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Skills]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Skills);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
