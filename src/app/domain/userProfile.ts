export class UserProfile {

	id = '';
	username = '';
	password = '';
	email = '';
	mobile = '';
	contactAddress = '';

	constructor(values: Object = {}) {
    	Object.assign(this, values);
  	}
}