
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListCandidatComponent } from './list-candidat/list-candidat.component';
import { AddCandidatComponent } from './add-candidat/add-candidat.component';
import { DetailsCandidatComponent } from './details-candidat/details-candidat.component';
import { EditCandidatComponent } from './edit-candidat/edit-candidat.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
	{ path: '', redirectTo: '/home', pathMatch: 'full' },
  	{ path: 'home', component: ListCandidatComponent },
	{ path: 'list-candidat', component: ListCandidatComponent },
	{ path: 'add-candidat', component: AddCandidatComponent },
	// { path: 'details-candidat/:id', component: DetailsCandidatComponent },
	// { path: 'edit-candidat/:id', component: EditCandidatComponent },
	{ path: '**', component: NotFoundComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
