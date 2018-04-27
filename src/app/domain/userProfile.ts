export class UserProfile {

	id = '';
	username = '';
	password = '';
	email = '';
	mobile = '';
	contactAddress = '';
	dateOfBirth = '';

	constructor(values: Object = {}) {
    	Object.assign(this, values);
  	}
}