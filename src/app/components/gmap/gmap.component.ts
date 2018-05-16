  import { Component, OnInit } from '@angular/core';
  import { FootballGround } from '../../domain/footballGround';
  import { UserProfileService } from '../../services/user-profile.service';
  declare var google: any;

  @Component({
    selector: 'app-gmap',
    templateUrl: './gmap.component.html',
    styleUrls: ['./gmap.component.css']
  })
  export class GmapComponent implements OnInit {

    constructor(private userProfileService : UserProfileService) { }

    options: any;
    overlays: any[] = [];
    infoWindow: any;
    footballGrounds : FootballGround[] = [];

    ngOnInit() {

      this.userProfileService.listFootballGrounds()
      .subscribe (
        data =>
        {
          this.footballGrounds = data;
          console.log("total footballGrounds=" + this.footballGrounds.length);
          let ix = 0;
          for (let ground of this.footballGrounds) {
            this.overlays.push(new google.maps.Marker({position: 
              {lat: Number(ground.latitude), lng: Number(ground.longitude)}, title: ground.name, customInfo : ix}));
            ++ix;           
          }  
          console.log("total overlays=" + this.overlays.length);
       });

      this.options = {center: {lat: 55.939217, lng: -3.232273}, zoom: 6};
      this.infoWindow = new google.maps.InfoWindow();
     }

    handleOverlayClick(event) {
      console.log("handleOverlayClick");
      let isMarker = event.overlay.getTitle != undefined;
      console.log("isMarker? " + isMarker);

      if(isMarker) {
        let selectedGround = this.footballGrounds[event.overlay.customInfo];
        console.log(selectedGround);
        let title = event.overlay.getTitle();
        this.infoWindow.setContent('' + title + '<br/>'  + selectedGround.team + '<br/>'  + selectedGround.capacity +
           "<br/>" + "<img src='" + selectedGround.pic + "'/>");
        this.infoWindow.open(event.map, event.overlay);
        event.map.setCenter(event.overlay.getPosition());
      }
    }
  }
