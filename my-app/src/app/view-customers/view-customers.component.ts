import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer.model';
import { CustomerService } from '../customer.service';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-view-customers',
  templateUrl: './view-customers.component.html',
  styleUrl: './view-customers.component.css',
})
export class ViewCustomersComponent implements OnInit {
  customers: Customer[] = [];

  constructor(
    private customerService: CustomerService,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.customers = this.customerService.getCustomers();
  }
  editCustomer(customer: Customer) {
    this.customerService.updateCustomer(customer);
  }
  deleteCustomer(customerId: number) {
    const isAdmin = this.authService.isadmin();
    this.customerService.deleteCustomer(customerId, isAdmin);
    this.customers = this.customerService.getCustomers();
  }
}
