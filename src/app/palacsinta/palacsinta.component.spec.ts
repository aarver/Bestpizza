import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PalacsintaComponent } from './palacsinta.component';

describe('PalacsintaComponent', () => {
  let component: PalacsintaComponent;
  let fixture: ComponentFixture<PalacsintaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PalacsintaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PalacsintaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
