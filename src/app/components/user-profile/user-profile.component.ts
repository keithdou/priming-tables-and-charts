import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Validators,FormControl,FormGroup,FormBuilder} from '@angular/forms';
import { RouterModule, Router, Routes } from '@angular/router';

import { UserProfile } from '../../domain/userProfile';
import { UserProfileService } from '../../services/user-profile.service';

import { MessageService } from 'primeng/components/common/messageservice';
import { Message } from 'primeng/components/common/api';

@Component({
	selector: 'app-user-profile',
	templateUrl: './user-profile.component.html',
	styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

	userProfileForm : FormGroup;
	userProfile : UserProfile;
	msgs: Message[] = [];
	
	constructor(
		private userProfileService : UserProfileService,
		private messageservice     : MessageService,
		private router             : Router,
		private fb                 : FormBuilder) { }

	ngOnInit() {
		console.log("ngOnInit");
		this.userProfile = this.userProfileService.userProfile;
		this.userProfileForm = this.fb.group({
			username       : [{value : this.userProfile.username,
				disabled : true}],
				mobile         : [this.userProfile.mobile],
				email          : [this.userProfile.email, Validators.required],
				contactAddress : [this.userProfile.contactAddress],
				dateOfBirth	   : [new Date(this.userProfile.dateOfBirth)]
			});
		console.log("dob=" + this.userProfileForm.get('dateOfBirth').value);
	}

	confirmProfile() {
		console.log("confirmProfile: valid form:" + this.userProfileForm.valid);
		//console.log("mobile before=" + this.userProfile.mobile);
		if (this.userProfileForm.valid) {
			this.userProfile.mobile = this.userProfileForm.get('mobile').value;
			this.userProfile.email = this.userProfileForm.get('email').value;
			this.userProfile.contactAddress = this.userProfileForm.get('contactAddress').value;
			this.userProfile.dateOfBirth = this.userProfileForm.get('dateOfBirth').value;
			console.log("date after =" + this.userProfile.dateOfBirth);
			this.userProfileService.updateUserProfile(this.userProfile)
			.subscribe (
				data => {
					this.userProfile = data;
					this.router.navigate(["/catalogue-menu/welcome"]);
				});
		} else {
			this.msgs = [];
			this.msgs.push({severity:'error', summary:'Validation error', detail:'Please enter all fields'});
		}
	}
}
