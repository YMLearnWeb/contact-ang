import { Component, OnInit } from '@angular/core';
import { ContactsService } from '../contacts.service';
import { Contact } from '../contact';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  constructor(private _contactService: ContactsService) { }
  contacts: Contact[];
  ngOnInit() {
     this._contactService.getContact().subscribe(c => this.contacts = c);
  }
  deleteContact(c){
    this._contactService.deleteContact(c.id).subscribe(t=>
      this.contacts = this.contacts.filter(h=>h !== c)
    )
  }
}
