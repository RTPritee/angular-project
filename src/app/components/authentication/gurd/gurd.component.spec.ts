import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GurdComponent } from './gurd.component';

describe('GurdComponent', () => {
  let component: GurdComponent;
  let fixture: ComponentFixture<GurdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GurdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GurdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
