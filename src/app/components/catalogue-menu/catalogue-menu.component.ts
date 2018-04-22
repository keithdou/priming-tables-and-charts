import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { TabMenuModel } from './tabMenuModel';

@Component({
  selector: 'app-root',
  templateUrl: './catalogue-menu.component.html',
  styleUrls: ['./catalogue-menu.component.css'],
  providers: [TabMenuModel]
})
export class CatalogueMenuComponent {

  constructor(private tabMenuModel : TabMenuModel) {}
  title = 'app';
  items: MenuItem[];
  ngOnInit() {
	this.items = this.tabMenuModel.items;
	}
}