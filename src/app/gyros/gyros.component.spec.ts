import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GyrosComponent } from './gyros.component';

describe('GyrosComponent', () => {
  let component: GyrosComponent;
  let fixture: ComponentFixture<GyrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GyrosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GyrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
