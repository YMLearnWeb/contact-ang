import { Component, OnInit, Input } from '@angular/core';
import { ContactsService } from '../contacts.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-contact-add',
  templateUrl: './contact-add.component.html',
  styleUrls: ['./contact-add.component.css']
})
export class ContactAddComponent implements OnInit {

  constructor(private _contactService: ContactsService) { }

  ngOnInit() {
    
  }
  contactName ="";
  contactTel = null;
  addContact(){
    let c= {
      name: this.contactName,
      tel: this.contactTel,
    }
    this._contactService.addContact(c);
  }
}
