import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactAddComponent } from './contact-add/contact-add.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactUpdateComponent } from './contact-update/contact-update.component';

const routes: Routes = [
  {path:'', pathMatch: 'full', redirectTo:'/contacts'},
  {path: 'addContact', component: ContactAddComponent},
  {path: 'contacts', component: ContactListComponent},
  {path: 'updateContact/:id', component: ContactUpdateComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
