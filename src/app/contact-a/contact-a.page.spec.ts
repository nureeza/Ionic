import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ContactAPage } from './contact-a.page';

describe('ContactAPage', () => {
  let component: ContactAPage;
  let fixture: ComponentFixture<ContactAPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactAPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ContactAPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
