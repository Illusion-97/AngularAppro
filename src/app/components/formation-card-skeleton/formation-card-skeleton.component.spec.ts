import {ComponentFixture, TestBed} from '@angular/core/testing';

import {FormationCardSkeletonComponent} from './formation-card-skeleton.component';

describe('FormationCardSkeletonComponent', () => {
  let component: FormationCardSkeletonComponent;
  let fixture: ComponentFixture<FormationCardSkeletonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormationCardSkeletonComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(FormationCardSkeletonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
