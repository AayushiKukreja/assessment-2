import { Component } from '@angular/core';
import { Customer } from '../customer.model';
import { CustomerService } from '../customer.service';
@Component({
  selector: 'app-add-customers',
  templateUrl: './add-customers.component.html',
  styleUrl: './add-customers.component.css',
})
export class AddCustomersComponent {
  customer: Customer = new Customer(Math.random(), '', '', '', '');
  constructor(private customerService: CustomerService) {}

  onSubmit() {
    this.customerService.addCustomer(this.customer);
    this.customer = new Customer(Math.random(), '', '', '', '');
  }
}
