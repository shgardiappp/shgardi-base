import { courierData } from './../../api/couriersAPI';
import { Component, OnInit } from '@angular/core';
import { Orderstypes } from 'src/app/interfaces/orderstypes';

@Component({
  selector: 'app-couriers',
  templateUrl: './couriers.component.html',
  styleUrls: ['./couriers.component.scss']
})
export class CouriersComponent implements OnInit {

  courierData:Orderstypes[] = [];
  isLoading:boolean = true;


  constructor() { }

  ngOnInit(): void {
    this.courierData = courierData;

    setTimeout(() => {
      this.isLoading = false;
     }, 1000);
     
  }

}
