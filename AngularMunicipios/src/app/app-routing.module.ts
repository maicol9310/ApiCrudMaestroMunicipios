import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListComponent} from './views/list/list.component';
import {NewComponent} from './views/new/new.component';
import {EditComponent} from './views/edit/edit.component';

const routes: Routes = [
  {path:'',redirectTo:'list', pathMatch:'full'},
  {path:'list', component:ListComponent},
  {path:'new', component:NewComponent},
  {path:'edit/:id', component:EditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent = [ListComponent,NewComponent,EditComponent]
