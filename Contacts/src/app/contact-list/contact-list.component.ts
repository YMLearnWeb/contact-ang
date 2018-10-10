import { Component, OnInit } from '@angular/core';
import { ContactsService } from '../contacts.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  constructor(private _contactService: ContactsService) { }
  contacts = [];
  ngOnInit() {
    this.contacts = this._contactService.getContact();
  }

}
