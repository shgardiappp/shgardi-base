import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.scss'],
})
export class FoodComponent implements OnInit {

  isLoading:boolean = true;

  constructor() { }

  ngOnInit(): void {

    setTimeout(() => {
      this.isLoading = false;
     }, 400);
     
  }

}
