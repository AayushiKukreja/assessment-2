import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AddCustomersComponent } from './add-customers/add-customers.component';
import { AuthComponent } from './auth/auth.component';
import { FormsModule } from '@angular/forms';
import { EditCustomersComponent } from './edit-customers/edit-customers.component';
import { ViewCustomersComponent } from './view-customers/view-customers.component';
import { AuthService } from './auth.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AddCustomersComponent,
    AuthComponent,
    EditCustomersComponent,
    ViewCustomersComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [AuthService],
  bootstrap: [AppComponent],
})
export class AppModule {}
