import {ComponentFixture, TestBed} from '@angular/core/testing';

import {NoResultComponent} from './no-result.component';

describe('NoResultComponent', () => {
  let component: NoResultComponent;
  let fixture: ComponentFixture<NoResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NoResultComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(NoResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
