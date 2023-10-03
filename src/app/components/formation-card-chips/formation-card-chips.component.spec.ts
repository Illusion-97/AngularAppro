import {ComponentFixture, TestBed} from '@angular/core/testing';

import {FormationCardChipsComponent} from './formation-card-chips.component';

describe('FormationCardChipsComponent', () => {
  let component: FormationCardChipsComponent;
  let fixture: ComponentFixture<FormationCardChipsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormationCardChipsComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(FormationCardChipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
