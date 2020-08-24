import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ContactFPage } from './contact-f.page';

describe('ContactFPage', () => {
  let component: ContactFPage;
  let fixture: ComponentFixture<ContactFPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactFPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ContactFPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
