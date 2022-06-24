import { clientData  , restaurantData , delegateData} from './../../api/compenstaionAPI';
import { Orderstypes } from './../../interfaces/orderstypes';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-compenstaion',
  templateUrl: './compenstaion.component.html',
  styleUrls: ['./compenstaion.component.scss']
})
export class CompenstaionComponent implements OnInit {

  clientData:Orderstypes[] = [];
  delegateData:Orderstypes[] = [];
  restaurantData:Orderstypes[] = [];

  isLoading:boolean = true;


  constructor() { }

  ngOnInit(): void {
    this.clientData = clientData;
    this.delegateData = delegateData;
    this.restaurantData = restaurantData;

    setTimeout(() => {
      this.isLoading = false;
     }, 1000);
     
  }

}
