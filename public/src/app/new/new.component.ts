import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  product: any;
  msg_error: any;
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _httpService: HttpService) { }

  ngOnInit() {
    this.product = {name: "", price: "", photo:""};
  }

  create(){
    let obs = this._httpService.create(this.product);
    obs.subscribe(data => {
      if(data['error']){
        console.log(data['error'].message);
        this.msg_error = data['error'].message;
      } else {
        this.product = {name: "", price: "", photo:""};
        this._router.navigate(['/products']);
      }
    })
  }

}
