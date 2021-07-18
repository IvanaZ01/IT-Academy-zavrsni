import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(@Inject(String) private url: string, public _http: HttpClient) {}

  getAll() {
    return this._http.get(this.url + '-get-all');
  }

  create(resource: any) {
    return this._http.post(this.url + '-create', resource);
  }

  update(resource: any) {
    return this._http.put(this.url + '-update/' + resource.id, resource);
  }

  delete(id: number | string) {
    return this._http.delete(this.url + '-delete/' + id);
  }
}
