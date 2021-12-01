import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DallItemsComponent } from './dall-items.component';

describe('DallItemsComponent', () => {
  let component: DallItemsComponent;
  let fixture: ComponentFixture<DallItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DallItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DallItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
