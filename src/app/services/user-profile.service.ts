import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpResponse} from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { UserProfile } from '../domain/userProfile';
import { State } from '../domain/state';
import { RestResponseResult } from '../domain/rest-response';

const USER_PROFILE_URL = environment.userProfileUrl;
const SERVICES_URL = environment.servicesUrl;

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable()
export class UserProfileService {

	private userProfileList : UserProfile[];

    public userProfile : UserProfile;

	constructor(private _http: HttpClient) { console.log("UserProfileService created"); }

	login(userid : string) : Observable<UserProfile> {
		console.log("UserProfileService.login");
		let url = USER_PROFILE_URL + '/user?username=' + userid;
		console.log("URL:" + url);
		return this._http.get(url)
		.map(
			data => {
				console.log("data:" + data);
				this.userProfileList = data as UserProfile[];
				if (this.userProfileList[0]) {
					this.userProfile = this.userProfileList[0];
					console.log("User Profile:" + this.userProfile);
					console.log("UserProfileService.login complete");
				}
				return this.userProfile;
			});
	} 

	updateUserProfile(userProfile : UserProfile) : Observable<UserProfile> {
		console.log("UserProfileService.updateUserProfile");
		let url = USER_PROFILE_URL + '/user/' + userProfile.id;
		console.log('id=' + userProfile.id);
		console.log("username=" + userProfile.username);
			
		return this._http.put<UserProfile>(url, this.userProfile, httpOptions)
		.map(
			data => {
				this.userProfile = data;
				return this.userProfile;
			});

	}

	getCatalogue() : Observable<State[]> {
		let url = SERVICES_URL + '/get/USA/all';
		return this._http.get<RestResponseResult>(url)
		.map(
			data => {
				let restResponseResult = data as RestResponseResult;
				let stateList = <Array<State>>restResponseResult.RestResponse.result;
				for (let state of stateList) {
					state.areaAsNumber = this.areaToNumber(state.area);
				}		

				return stateList;
			});
	}


	areaToNumber(area : string) : number {
		return parseInt(area.replace('SKM','').trim());
	}

	isLoggedIn() {
		return (this.userProfile != null);
	}

	logout() {
		console.log("logout");
		return false;
	}
}
