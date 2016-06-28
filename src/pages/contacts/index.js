import 'bootstrap';

export class Contacts {

	heading = 'External Contacts';
	sub_heading = 'Select the client contacts assocaited with this offer';
	type_list = ['Executive','Inmar AR','Daily','Other'];
	remove = [];

	constructor() {
		this.contacts = JSON.parse(localStorage.getItem('contacts')) || [
			{ type: 'Executive',	name: 'Ann Brown', 	title: 'CEO',			phone: '(512) 456-5555', ext:'', fax: '(512) 456-5555', email: 'Executive'	},
			{ type: 'Inmar AR', 	name: 'Mary Smith', title: 'Lorem Ipsum', 	phone: '(512) 456-5555', ext:'', fax: '(512) 456-5555', email: 'Inmar AR'	},
			{ type: 'Executive',	name: 'John Doe', 	title: 'Dolor Sit',		phone: '(512) 456-5555', ext:'', fax: '(512) 456-5555', email: 'Executive'	},
			{ type: 'Daily', 		name: 'John Doe', 	title: 'Dolor sit amet',phone: '(512) 456-5555', ext:'', fax: '(512) 456-5555', email: 'Daily'		},
			{ type: 'Other', 		name: 'John Doe', 	title: 'Lorem Ipsum',	phone: '(512) 456-5555', ext:'', fax: '(512) 456-5555', email: 'Other'		}
		]
	}

	add_contact(obj) {
		console.log(obj);
		this.contacts.push({type: this.add.type, name: this.add.name,
			title: this.add.title,			
			phone: this.add.phone,
			ext: this.add.ext,
			fax: this.add.fax,
			email: this.add.email
		});
		localStorage.setItem('contacts', JSON.stringify(this.contacts));
		$('#modal').modal('toggle');
	}

	remove_contacts() {
		for ( var i in this.remove) {
			this.contacts.splice(i,1);
		}
		this.store_contacts()
		this.remove_btn.hide()
		$(":checkbox").attr('checked', false);
	}

	queue_remove(v){
		if (typeof Number(i) === 'number') {
		    var i = this.remove.indexOf(v);
		    if (i === -1) this.remove.push(v);
		    else this.remove.splice(i,1);
		}
		if (this.remove.length > 0) this.remove_btn.show()
		else this.remove_btn.hide()
	}

	store_contacts(){
		localStorage.setItem('contacts', JSON.stringify(this.contacts));
	}

	reset() {
		localStorage.clear();
		window.location.reload();
	}

	remove_btn = {
		show: function() {
			$('#btn-remove').show(100);
		},
		hide: function() {
			$('#btn-remove').hide(100);
		},
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