import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Summary } from './summary';

describe('SummaryComponent', () => {
  let component: Summary;
  let fixture: ComponentFixture<Summary>;

  beforeEach(async() => {
    await TestBed.configureTestingModule({
    imports: [Summary]
})
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Summary);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
