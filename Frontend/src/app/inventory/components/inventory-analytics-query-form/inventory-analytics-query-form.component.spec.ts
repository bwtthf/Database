import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryAnalyticsQueryFormComponent } from './inventory-analytics-query-form.component';

describe('InventoryAnalyticsQueryFormComponent', () => {
  let component: InventoryAnalyticsQueryFormComponent;
  let fixture: ComponentFixture<InventoryAnalyticsQueryFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InventoryAnalyticsQueryFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InventoryAnalyticsQueryFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
