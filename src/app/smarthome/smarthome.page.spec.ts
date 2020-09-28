import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SmarthomePage } from './smarthome.page';

describe('SmarthomePage', () => {
  let component: SmarthomePage;
  let fixture: ComponentFixture<SmarthomePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmarthomePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SmarthomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
