import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowCatsTableComponent } from './show-cats-table.component';

describe('ShowCatsTableComponent', () => {
  let component: ShowCatsTableComponent;
  let fixture: ComponentFixture<ShowCatsTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowCatsTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowCatsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
