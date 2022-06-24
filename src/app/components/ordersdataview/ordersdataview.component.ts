import { Orderstypes } from './../../interfaces/orderstypes';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { cashData , cancelledData , completedData , courierData} from 'src/app/api/ordersApi';

@Component({
  selector: 'app-ordersdataview',
  templateUrl: './ordersdataview.component.html',
  styleUrls: ['./ordersdataview.component.scss']
})
export class OrdersdataviewComponent implements OnInit {

  orderType:string = '';

  cashData:Orderstypes[] = [];
  cancelledData:Orderstypes[] = [];
  completedData:Orderstypes[] = [];
  courierData:Orderstypes[] = [];


  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    const type = this.route.snapshot.paramMap.get('type');

    switch(type){
      case 'cash' : this.cashData = cashData; this.orderType = 'cash'; break;
      case 'cancelled' : this.cancelledData = cancelledData; this.orderType = 'cancelled'; break;
      case 'completed': this.completedData = completedData; this.orderType = 'completed'; break;
      case 'courier': this.courierData = courierData; this.orderType = 'courier'; break;

    }
  }

}
