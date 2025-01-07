import { Component,NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import path from 'path';
import { StudentlistComponent } from './Components/studentlist/studentlist.component';
import { StudentcreateComponent } from './Components/studentcreate/studentcreate.component';
import { StudenteditComponent } from './Components/studentedit/studentedit.component';
import { RouterModule } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: '/list', pathMatch: 'full' },
  //{ path: '', component: StudentlistComponent },
  { path: 'list', component: StudentlistComponent },
  { path: 'create', component: StudentcreateComponent },
  //{ path: 'edit', component: StudenteditComponent},
  { path: 'edit/:id', component: StudenteditComponent }, // Updated route with id parameter

];

@NgModule({ imports: [RouterModule.forRoot(routes)], exports: [RouterModule] })
export class AppRoutingModule {}
