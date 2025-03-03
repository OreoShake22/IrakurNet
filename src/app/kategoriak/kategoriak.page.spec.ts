import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { KategoriakPage } from './kategoriak.page';

describe('KategoriakPage', () => {
  let component: KategoriakPage;
  let fixture: ComponentFixture<KategoriakPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KategoriakPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(KategoriakPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
