import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent implements OnInit {
  isLoggedIn = false;
  constructor(private authService: AuthService) {
    this.isLoggedIn = this.authService.isLoggedin;
    console.log(this.isLoggedIn);
  }
  ngOnInit(): void {}
}
