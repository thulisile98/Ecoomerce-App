import { Component, OnInit } from '@angular/core';
import { EcommerceApiService } from 'src/app/services/ecommerce-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  myData: any;
  myData$: any;
  products: any[] = [];
  constructor(private ecommerceApiService: EcommerceApiService) { }



  ngOnInit(): void {
    this.ecommerceApiService
      .getData()
      .subscribe((data) => {
        this.myData = data;
        console.log(this.myData)

        this.products = this.myData.products;
        console.log(this.products);
      });

  }


}

