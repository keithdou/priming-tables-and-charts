import { Component, OnInit } from '@angular/core';
import { UserProfileService } from '../../services/user-profile.service';
import { State } from '../../domain/state';
import { OverlayPanelModule} from 'primeng/overlaypanel';

@Component({
  selector: 'app-catalogue-graphs',
  templateUrl: './catalogue-graphs.component.html',
  styleUrls: ['./catalogue-graphs.component.css']
})
export class CatalogueGraphsComponent implements OnInit {

  constructor(private userProfileService : UserProfileService) { }

	stateList : State[];
	stateSelection0 = new Array<State>();
	stateSelection1 = new Array<State>();
	stateSelection2 = new Array<State>();

	currentStateSelectionList : State[];
	chartData : any;
	display : boolean = false;
	currentSelection : number;
    dialogueTitle : string;

	ngOnInit() {
		this.userProfileService.getCatalogue()
		.subscribe (
			data =>
			{
				console.log("getCatalogue size:" + data.length);
				this.stateList = data;
				for (let state of this.stateList) {
					if (state.areaAsNumber > 200000) {
						this.stateSelection0.push(state);
					} else if (state.areaAsNumber > 50000) {
						this.stateSelection1.push(state);
					} else {
						this.stateSelection2.push(state);
					}

				}	
				console.log("0=" + this.stateSelection0.length);
				console.log("1=" + this.stateSelection1.length);
				console.log("2=" + this.stateSelection2.length);

				this.chartData = {
	            	labels: ['States > 200,000 sq km',
	                     'States between 50,000 and 200,000 sq km',
	                     'States < 50,000 sq km'],
	            	datasets: [
	                {
	                    data: [this.stateSelection0.length, this.stateSelection1.length,
	                           this.stateSelection2.length],
	                    backgroundColor: [
	                        "#FF6384",
	                        "#36A2EB",
	                        "#FFCE56"
	                    ],
	                    hoverBackgroundColor: [
	                        "#FF6384",
	                        "#36A2EB",
	                        "#FFCE56"
	                    ]
	                }]    
	            };
			});
	}

	selectData(event, overlaypanel) {
		console.log('selected ' + event.element._index);
		console.log("overlaypanel=" + overlaypanel);
		this.currentSelection = event.element._index;
		if (this.currentSelection == 0) {
			this.currentStateSelectionList = this.stateSelection0;
			this.dialogueTitle = this.stateSelection0.length + " states > 200,000 sq km";
		} else if (this.currentSelection == 1) {
			this.currentStateSelectionList = this.stateSelection1;
			this.dialogueTitle = this.stateSelection1.length + " states between 50,000 and 200,000 sq km";
		} else {
			this.currentStateSelectionList = this.stateSelection2;
			this.dialogueTitle = this.stateSelection2.length + " states < 50,000 sq km";
		}
	} 


    showDialog() {
        this.display = true;
    }


}
