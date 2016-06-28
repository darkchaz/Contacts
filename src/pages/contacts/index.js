import 'bootstrap';

export class Contacts {

	heading = 'External Contacts';
	sub_heading = 'Select the client contacts assocaited with this offer';
	type_list = ['Executive','Inmar AR','Daily','Other'];
	remove = [];

	data = [
		{ type: 'Executive',name: 'Ann Brown', 	title: 'CEO', phone: '(512) 456-5555', ext:'', fax: '(512) 456-5555', email: 'Executive'},
		{ type: 'Inmar AR', name: 'Mary Smith', title: 'Lorem Ipsum', phone: '(512) 456-5555', ext:'', fax: '(512) 456-5555', email: 'Inmar AR'},
		{ type: 'Executive', name: 'John Doe', 	title: 'Dolor Sit',	phone: '(512) 456-5555', ext:'', fax: '(512) 456-5555', email: 'Executive'},
		{ type: 'Daily', name: 'John Doe', 	title: 'Dolor sit amet',phone: '(512) 456-5555', ext:'', fax: '(512) 456-5555', email: 'Daily'},
		{ type: 'Other', name: 'John Doe', 	title: 'Lorem Ipsum', phone: '(512) 456-5555', ext:'', fax: '(512) 456-5555', email: 'Other'}
	]

	constructor() {
		this.load_contacts();
	}

	load_contacts() {
		this.contacts = JSON.parse(localStorage.getItem('contacts')) || this.data
	}

	store_contacts() {
		localStorage.setItem('contacts', JSON.stringify(this.contacts));
	}

	remove_contacts() {
		for (var i=0; i < this.remove.length; i++) {
			this.contacts[this.remove[i]].del = true;
		}
		this.contacts = this.contacts.filter(function(i) {
			if (!i.del === true) return true;
		});
		this.store_contacts();
		this.remove = [];
		this.remove_btn.hide();
		$(":checkbox").attr('checked', false);
	}

	add_contact() {
		this.contacts.push({type: this.add.type, name: this.add.name,
			title: this.add.title,			
			phone: this.add.phone,
			ext: this.add.ext,
			fax: this.add.fax,
			email: this.add.email
		});
		this.store_contacts();
		$('#modal').modal('toggle');
	}

	queue(v){
		if (typeof Number(v) === 'number') {
		    var i = this.remove.indexOf(v);
		    if (i === -1) this.remove.push(v);
		    else this.remove.splice(i,1);
		}
		if (this.remove.length > 0) this.remove_btn.show()
		else this.remove_btn.hide()
	}

	dump_storage() {
		localStorage.clear();
		this.load_contacts();
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