import { Component, OnInit } from '@angular/core';
import { UserProfileService } from '../../services/user-profile.service';
import { State } from '../../domain/state';

@Component({
	selector: 'app-catalogue-list',
	templateUrl: './catalogue-list.component.html',
	styleUrls: ['./catalogue-list.component.css']
})
export class CatalogueListComponent implements OnInit {

	constructor(private userProfileService : UserProfileService) { }

	stateList : State[];

	selectedState : State;

	ngOnInit() {
		this.userProfileService.getCatalogue()
		.subscribe (
			data =>
			{
				console.log("getCatalogue size:" + data.length);
				this.stateList = data;
			});
	}

	formatArea(area : number) {
		return area.toLocaleString();
	}

	onRowSelect(event) {
		console.log("onRowSelect:" + event.data.name);
	}
}
