import { Component, OnInit } from '@angular/core';
import { customerData } from 'src/app/api/customerAPI';
import { Orderstypes } from 'src/app/interfaces/orderstypes';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {

  customerData:Orderstypes[] = [];
  isLoading:boolean = true;


  constructor() { }

  ngOnInit(): void {
    this.customerData = customerData;

    setTimeout(() => {
      this.isLoading = false;
     }, 1000);

  }

}
