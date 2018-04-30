import { Component, OnInit } from '@angular/core';
import { UserProfileService } from '../../services/user-profile.service';
import { OrgChartNode } from '../../domain/orgChartNode';

@Component({
	selector: 'app-org-chart',
	templateUrl: './org-chart.component.html',
	styleUrls: ['./org-chart.component.css']
})
export class OrgChartComponent implements OnInit {

	parent : OrgChartNode;	
	chartData : any[] = [];

	constructor(private userProfileService : UserProfileService) { }

	ngOnInit() {

		this.userProfileService.getOrgChart()
		.subscribe (
			data =>
			{
				this.parent = data;
				console.log("data:" + data);
				console.log("parent=" + this.parent.name + " children=" + this.parent.children.length);
				console.log("first child=" + this.parent.children[0].name);

				let children = new Array<any>();
				for (let child of this.parent.children) {
					let childNodes = new Array<any>();
					if (child.children) {
						for (let child2 of child.children) {
								  childNodes.push({label:child2.name, expanded:true});
						}
				    }
					children.push({label : child.name, expanded:true, 
						children : childNodes});
				}

				this.chartData = [{
					label: this.parent.name,
					expanded: true,
					children: children
				}];
			});
	}
}
