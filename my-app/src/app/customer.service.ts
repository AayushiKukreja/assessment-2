import { Injectable } from '@angular/core';
import { Customer } from './customer.model';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  private customers: Customer[] = [
    {
      id: Math.random(),
      name: 'Aayushi Kukreja',
      email: 'aayushiKukreja78@gmail.com',
      phoneNumber: '98917637737',
      address: 'Govind Garh',
    },
  ];

  constructor() {}

  getCustomers(): Customer[] {
    return this.customers;
  }

  addCustomer(customer: Customer) {
    this.customers.push(customer);
    alert('Customer Added!!');
  }

  updateCustomer(updatedCustomer: Customer) {
    const index = this.customers.findIndex(
      (customer) => customer.id === updatedCustomer.id
    );
    if (index !== -1) {
      this.customers[index] = updatedCustomer;
      alert('Customer Updated!!');
    }
  }

  getCustomer(customerId: number): Customer | undefined {
    return this.customers.find((customer) => customer.id === customerId);
  }

  deleteCustomer(customerId: number, isAdmin: boolean) {
    if (isAdmin) {
      const index = this.customers.findIndex(
        (customer) => customer.id === customerId
      );
      if (index !== -1) {
        const confirmation = prompt(
          'Are you sure you want to delete this customer? Type "yes" to confirm.'
        );
        if (confirmation === 'yes') {
          this.customers.splice(index, 1);
        } else {
          console.log('canceled');
        }
      }
    } else {
      alert('Only admin users can delete customers.');
    }
  }
}
