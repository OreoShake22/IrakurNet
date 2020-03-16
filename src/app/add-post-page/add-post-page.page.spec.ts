import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddPostPagePage } from './add-post-page.page';

describe('AddPostPagePage', () => {
  let component: AddPostPagePage;
  let fixture: ComponentFixture<AddPostPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPostPagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddPostPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
