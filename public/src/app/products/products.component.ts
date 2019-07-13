import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: any;
  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    let obs = this._httpService.getProducts();
    obs.subscribe(data => {
      this.products = data['products'];
    })
  }

  delete(id: String){
    let obs = this._httpService.delete(id);
    obs.subscribe(data => {
    });
  }

}
