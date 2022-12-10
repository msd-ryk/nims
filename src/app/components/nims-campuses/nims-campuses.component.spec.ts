import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NimsCampusesComponent } from './nims-campuses.component';

describe('NimsCampusesComponent', () => {
  let component: NimsCampusesComponent;
  let fixture: ComponentFixture<NimsCampusesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NimsCampusesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NimsCampusesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
