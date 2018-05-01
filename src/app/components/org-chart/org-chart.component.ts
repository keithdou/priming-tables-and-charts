import { Component, OnInit } from '@angular/core';
import { UserProfileService } from '../../services/user-profile.service';
import { OrgChartNode } from '../../domain/orgChartNode';
import { OrganizationChartModule } from 'primeng/organizationchart';

@Component({
	selector: 'app-org-chart',
	templateUrl: './org-chart.component.html',
	styleUrls: ['./org-chart.component.css']
})
export class OrgChartComponent implements OnInit {

	parent : OrgChartNode;	
	chartData : any[] = [];
	selectedNode : any[] = [];
	displayNodeDetails : boolean = false;

	constructor(private userProfileService : UserProfileService) { }

	ngOnInit() {

		this.userProfileService.getOrgChart()
		.subscribe (
			data =>
			{
				this.parent = data;
				console.log("parent=" + this.parent.name + " children=" + this.parent.children.length);
			
				let root = {label: this.parent.name, expanded:true, children:[]};
				this.chartData = [root];
				this.addChartDataNodes(this.parent, root.children);				
			});
	}

 	/**
 	* 'Recursion' - see 'Recursion'
 	*/
	addChartDataNodes(node : OrgChartNode, chartDataChildNodes : any) {

		if (node.children) {
			for (let child of node.children) {
				console.log("Adding child " + child.name + " of parent " + node.name);
				let newNode = {label: child.name, expanded:true, children:[]};
				chartDataChildNodes.push(newNode);
				this.addChartDataNodes(child, newNode.children);
			}
		} 
	}

	onNodeSelect(event) {
		console.log("selected from event:" + event.node.label);
		this.selectedNode = event.node;
		this.showDialog();
		//console.log("selected from node:" + this.selectedNode.label);
	    // for (let key of Object.keys(event.node))
	    // {
	    //    console.log('key:' + key);
	    // }
	}

	showDialog() {
        this.displayNodeDetails = true;
    }
}
