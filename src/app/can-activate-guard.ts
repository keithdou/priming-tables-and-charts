import { Injectable } from '@angular/core';
import { CanActivate, Router} from '@angular/router';
import { UserProfileService } from './services/user-profile.service';

@Injectable()
export class CanActivateGuard implements CanActivate {

  constructor(public userProfileService: UserProfileService,
  	          private router: Router) {} 

  canActivate() {
    console.log("canActivate?:" + this.userProfileService.isLoggedIn());
    if (this.userProfileService.isLoggedIn()) {
    	return true;
    }

    console.log('redirect to login');
    this.router.navigate(['/login']);
    return false;
  }
}