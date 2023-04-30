import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Componentes
import { ListUsersComponent } from './componentes/list-users/list-users.component';
import { HomeComponent } from  './componentes/home/home.component'
import { AddEditUserComponent } from './componentes/add-edit-user/add-edit-user.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'add', component: AddEditUserComponent },
  { path: 'edit/:id', component: AddEditUserComponent },
  { path: ':id', component: ListUsersComponent },
  { path: '**', redirectTo:'', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
