import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  getProducts(){
    return this._http.get('/products');
  }

  getProduct(id:String){
    return this._http.get('/'+id);
  }

  create(data){
    return this._http.post('/create',data);
  }

  delete(id: String){
    return this._http.delete('/delete/'+id);
  }

  update(data){
    return this._http.put('/edit/'+data._id,data);
  }
}
