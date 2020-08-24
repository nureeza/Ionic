import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ContactSPage } from './contact-s.page';

describe('ContactSPage', () => {
  let component: ContactSPage;
  let fixture: ComponentFixture<ContactSPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactSPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ContactSPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
