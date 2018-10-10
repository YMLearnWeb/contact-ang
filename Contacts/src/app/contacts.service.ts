import { Injectable } from '@angular/core';
import { Contact } from './contact';
import { Contacts } from './mock-contacts';
import { Observable, of} from 'rxjs';
import { COMPONENT_FACTORY_RESOLVER } from '@angular/core/src/render3/ng_module_ref';

@Injectable({
  providedIn: 'root'
})     
export class ContactsService {

  constructor() { }
  getContact(): Contact[] {
    return Contacts;
  }

  addContact(c){
    Contacts.push(c);
  }
 }
