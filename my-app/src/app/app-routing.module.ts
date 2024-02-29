import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCustomersComponent } from './add-customers/add-customers.component';
import { AuthComponent } from './auth/auth.component';
import { EditCustomersComponent } from './edit-customers/edit-customers.component';
import { ViewCustomersComponent } from './view-customers/view-customers.component';
import { authGuard } from './auth.guard';
const routes: Routes = [
  {
    path: 'add-customers',
    component: AddCustomersComponent,
    canActivate: [authGuard],
  },
  {
    path: 'view-customers',
    component: ViewCustomersComponent,
    canActivate: [authGuard],
  },
  {
    path: 'edit-customers/:id',
    component: EditCustomersComponent,
    canActivate: [authGuard],
  },
  { path: 'login', component: AuthComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
