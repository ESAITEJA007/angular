import { Component } from '@angular/core';
import { Customer } from '../customer';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent {

  customers: Customer[] = [{roll:1,name:"Yousuf", address:"india"}
,{roll:2,name:"Sachin", address:"South"},
{roll:3,name:"ganguly", address:"Africa"}
,{roll:4,name:"Dhoni", address:"Indonesia"}];
}
