import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogueMenuComponent } from './catalogue-menu.component';

describe('CatalogueComponent', () => {
  let component: CatalogueMenuComponent;
  let fixture: ComponentFixture<CatalogueMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatalogueMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalogueMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
