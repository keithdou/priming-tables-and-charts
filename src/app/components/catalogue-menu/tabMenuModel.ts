import { Injectable } from '@angular/core';
import {MenuItem} from 'primeng/api';  

@Injectable()
export class TabMenuModel {
    
    items: MenuItem[];

    constructor() {
	this.items = [
            {label: 'Home', icon: 'fa-bookmark', routerLink: ['welcome']},
            {label: 'List', icon: 'fa-bookmark', routerLink: ['catalogue-list']},
            {label: 'Graphs', icon: 'fa-align-justify', routerLink: ['catalogue-graphs']}
        ];
	console.log("items created in constructor");
    }
}
