import { Component } from '@angular/core';
import { Customer } from '../customer.model';
import { CustomerService } from '../customer.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-customers',
  templateUrl: './edit-customers.component.html',
  styleUrl: './edit-customers.component.css',
})
export class EditCustomersComponent {
  customerId!: number;
  customer: Customer = new Customer(0, '', '', '', '');

  constructor(
    private route: ActivatedRoute,
    private customerService: CustomerService
  ) {}

  ngOnInit() {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam !== null) {
      this.customerId = +idParam;
      this.customer =
        this.customerService.getCustomer(this.customerId) ??
        new Customer(0, '', '', '', '');
    }
  }

  updateCustomer() {
    this.customerService.updateCustomer(this.customer);
  }
}
