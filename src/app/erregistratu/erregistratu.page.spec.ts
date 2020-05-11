import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ErregistratuPage } from './erregistratu.page';

describe('ErregistratuPage', () => {
  let component: ErregistratuPage;
  let fixture: ComponentFixture<ErregistratuPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ErregistratuPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ErregistratuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
