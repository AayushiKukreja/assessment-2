import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css',
})
export class AuthComponent {
  email: string = '';
  password: string = '';

  constructor(private router: Router, private authService: AuthService) {}

  login(loginForm: NgForm) {
    if (loginForm.valid) {
      this.authService.login(this.email, this.password);
      if (this.authService.isadmin()) {
        alert('Welcome Admin!');
        this.authService.giveAccess();
        this.router.navigate(['/add-customers']);
      } else {
        alert('Welcome User!');
        this.authService.giveAccess();
        this.router.navigate(['/add-customers']);
      }
    } else {
      alert('Invalid credentials');
    }
  }
}
