import { Component } from '@angular/core';
import { Router } from '@angular/router'; 
import { UserProfileService } from './services/user-profile.service';
import { UserProfile } from './domain/userProfile';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor (private router: Router,
  	           private userProfileService : UserProfileService) {}

  openNav() {
		document.getElementById("mySidenav").style.width = "230px";
	}

	toggleNav() {

		var element = document.getElementById('mySidenav');
	    var style = window.getComputedStyle(element);
	    console.log("min-width=" + style.getPropertyValue('min-width'));
	    var newWidth = "";
	    let lst = document.getElementsByClassName("menuLnk") as HTMLCollectionOf<HTMLElement>;
	    var ix;

	    if (style.getPropertyValue('min-width') == "30px") {
	    	newWidth = "230px";
	    	for (ix = 0; ix < lst.length; ix++) {
    			lst[ix].style["visibility"] = "visible";
			}
	    	document.getElementById("closeBtnLnk").style["padding-left"] = "180px";
	    	document.getElementById("mainContentId").style["margin-left"] = "232px";	    	
	    } else {
	    	newWidth = "30px";
	    	for (ix = 0; ix < lst.length; ix++) {
    			lst[ix].style["visibility"] = "hidden";
			}
	      	document.getElementById("closeBtnLnk").style["padding-left"] = "1px";
	      	document.getElementById("mainContentId").style["margin-left"] = "32px";	   
	    }
	    document.getElementById("mySidenav").style["min-width"] = newWidth;
		document.getElementById("mySidenav").style["max-width"] = newWidth;
	}

	userDetails1() {
		if (this.userProfileService.isLoggedIn()) {
			return this.userProfileService.userProfile.username ;
		}
		return "";
	}
	userDetails2() {
		if (this.userProfileService.isLoggedIn()) {
			return this.userProfileService.userProfile.email ;
		}
		return "";
	}


	logout() {
		console.log("logout");
		this.userProfileService.userProfile = null;
		this.router.navigate(["/login"]);
		return false;
	}
}
