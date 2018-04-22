import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogueGraphsComponent } from './catalogue-graphs.component';

describe('CatalogueGraphsComponent', () => {
  let component: CatalogueGraphsComponent;
  let fixture: ComponentFixture<CatalogueGraphsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatalogueGraphsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalogueGraphsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
