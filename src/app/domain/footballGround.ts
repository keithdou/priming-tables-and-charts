export class FootballGround {
	name     : string;
	team     : string;
	latitude : number;
	longitude: number;
	capacity : number;
	pic      : string;

	constructor(values: Object = {}) {
    	Object.assign(this, values);
    }
 } 