import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ContacthPage } from './contacth.page';

describe('ContacthPage', () => {
  let component: ContacthPage;
  let fixture: ComponentFixture<ContacthPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContacthPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ContacthPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
