import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherCatsComponent } from './other-cats.component';

describe('OtherCatsComponent', () => {
  let component: OtherCatsComponent;
  let fixture: ComponentFixture<OtherCatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtherCatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherCatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
