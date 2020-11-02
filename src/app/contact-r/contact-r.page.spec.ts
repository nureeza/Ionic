import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ContactRPage } from './contact-r.page';

describe('ContactRPage', () => {
  let component: ContactRPage;
  let fixture: ComponentFixture<ContactRPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactRPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ContactRPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
