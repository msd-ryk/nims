import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyNimsComponent } from './why-nims.component';

describe('WhyNimsComponent', () => {
  let component: WhyNimsComponent;
  let fixture: ComponentFixture<WhyNimsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhyNimsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhyNimsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
