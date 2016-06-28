//import {computedFrom} from 'aurelia-framework';

export class Contacts {

	heading = 'External Contacts';

	constructor() {
			contacts = [
				{ type: "Executive",	name: "Ann Brown", 	title: "CEO", 				 phone: "(512) 456-5555", ext:"", fax: "(512) 456-5555", email: "Executive"	},
				{ type: "Inmar AR", 	name: "Mary Smith", 	title: "Lorem Ipsum", 	 phone: "(512) 456-5555", ext:"", fax: "(512) 456-5555", email: "Inmar AR"		},
				{ type: "Executive",	name: "John Doe", 	title: "Dolor Sit", 		 phone: "(512) 456-5555", ext:"", fax: "(512) 456-5555", email: "Executive"	},
				{ type: "Daily", 		name: "John Doe", 	title: "Dolor sit amet", phone: "(512) 456-5555", ext:"", fax: "(512) 456-5555", email: "Daily"			},
				{ type: "Other", 		name: "John Doe", 	title: "Lorem Ipsum", 	 phone: "(512) 456-5555", ext:"", fax: "(512) 456-5555", email: "Other"			}
			]
			console.log(contacts);
	}

	activate() {
	alert('d');
		/*
		return this.API.find('client')
	  		.then(clients => {
				this.clients = clients;
			})
*/
	}

	attached() {

	}

}







/*
	firstName = 'John';
	lastName = 'Doe';
	previousValue = this.fullName;

	//Getters can't be directly observed, so they must be dirty checked.
	//However, if you tell Aurelia the dependencies, it no longer needs to dirty check the property.
	//To optimize by declaring the properties that this getter is computed from, uncomment the line below
	//as well as the corresponding import above.
	//@computedFrom('firstName', 'lastName')
	get fullName() {
	  	return `${this.firstName} ${this.lastName}`;
	}

	submit() {
		this.previousValue = this.fullName;
		alert(`Welcome, ${this.fullName}!`);
	}

	canDeactivate() {
		if (this.fullName !== this.previousValue) {
			return confirm('Are you sure you want to leave?');
		}
	}
}

export class UpperValueConverter {
	toView(value) {
	  return value && value.toUpperCase();
	}
}
*/