import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Contact } from './contact';

describe('ContactComponent', () => {
  let component: Contact;
  let fixture: ComponentFixture<Contact>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Contact]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Contact);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
