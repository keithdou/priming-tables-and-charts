import { Component, OnInit } from '@angular/core';
import { RouterModule, Router, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Validators,FormControl,FormGroup,FormBuilder} from '@angular/forms';
import { UserProfileService } from '../../services/user-profile.service';
import { Message } from 'primeng/components/common/api';
import { MessageService } from 'primeng/components/common/messageservice';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	msgs: Message[] = [];

	loginForm: FormGroup;

	constructor(
		private userProfileService : UserProfileService,
		private messageservice     : MessageService,
		private router             : Router,
		private fb                 : FormBuilder) { }

	ngOnInit() {
		this.loginForm = this.fb.group({
			userid: ['keith', Validators.required],
			password: ['secret', Validators.required]
		});
	}

	doLogin() {
		console.log("doLogin for user " + this.loginForm.get('userid').value
			+ " pwd " + this.loginForm.get('password').value);

		if (this.loginForm.valid) {
			console.log("Form is valid");
			this.userProfileService.login(this.loginForm.get('userid').value)
			.subscribe (
				data => {
					console.log("doLogin:" + data);
					if (data) {
						this.router.navigate(["/user-profile"]);
					} else {
						this.msgs = [];
						this.msgs.push({severity:'error', summary:'Invalid username', detail:'Username does not exist'});
					}
				},
				err => {
					console.log("doLogin failed http status:" + err.status);
				});
		} else {
			this.msgs = [];
			this.msgs.push({severity:'error', summary:'Validation error', detail:'Please enter all fields'});
		}
	}

}
