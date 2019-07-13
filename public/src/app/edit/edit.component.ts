import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  product: any;
  msg_error: any;
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _httpService: HttpService
  ) { }

  ngOnInit() {
    this.msg_error = "";
    this._route.params.subscribe((params: Params) => {
      let obs = this._httpService.getProduct(params['id']);
      obs.subscribe(data => {
        console.log(data['product'])
        this.product = data['product'];
      });
    });
  }

  update(id:String){
    if(this.product.name.length < 4){
      this.msg_error = "Name field must be 4 characters or more. ";
    }
    if(this.product.price.length < 1){
      this.msg_error += "Price field is required";
    }
    if (this.product.name.length >= 4 && this.product.price.length >= 1){
      let obs = this._httpService.update(this.product);
      obs.subscribe(data => console.log(data));
      this._router.navigate(['/products']);
    }
  }

}
