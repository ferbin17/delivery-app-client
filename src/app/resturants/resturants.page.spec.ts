import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ResturantsPage } from './resturants.page';

describe('ResturantsPage', () => {
  let component: ResturantsPage;
  let fixture: ComponentFixture<ResturantsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResturantsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ResturantsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
