import { Injectable } from '@angular/core';
import { Contact } from './contact';

import { Observable, of} from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})     
export class ContactsService {

  private contactUrl = "api/returnContacts"; // api/ must user the return value in data

  constructor(
    private http: HttpClient
  ) { }

  getContact(): Observable<Contact[]> {
    return this.http.get<Contact[]>(this.contactUrl)
  }

  addContact(c:Contact): Observable<Contact> {
    return this.http.post<Contact>(this.contactUrl,c,httpOptions)   
  }
 }
