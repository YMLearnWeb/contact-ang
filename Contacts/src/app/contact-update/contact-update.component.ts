import { Component, OnInit, Input } from '@angular/core';
import { ContactsService } from '../contacts.service';
import { FormControl } from '@angular/forms';
import { Contact } from "../contact"; 
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contact-update',
  templateUrl: './contact-update.component.html',
  styleUrls: ['./contact-update.component.css']
})
export class ContactUpdateComponent implements OnInit {
  @Input() ct: Contact;
  constructor(private _contactService: ContactsService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getContact();
  }

  getContact() {
    const id = +this.route.snapshot.paramMap.get('id');
    this._contactService.getPerContact(id).subscribe(contact => this.ct = contact);
  }
  updateContact(){
    this._contactService.updateContact(this.ct).subscribe();
  }
}
