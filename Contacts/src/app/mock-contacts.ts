import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Contact } from './contact';

export class InMemoryContactService implements InMemoryDbService {
    createDb() {
        const returnContacts = [
            {id: 1, name: 'MISS A', tel: 111},
            {id: 2, name: 'MISS B', tel: 222},
            {id: 3, name: 'MISS C', tel: 333}, 
            {id: 4, name: 'MISS D', tel: 444},
            {id: 5, name: 'MISS E', tel: 555},
            {id: 6, name: 'MISS F', tel: 666}              
        ];
        return { returnContacts }
    }

    genId(returnContacts: Contact[]):number {
        return returnContacts.length >0? Math.max(...returnContacts.map(c => c.id))+1: 1;
    }
}