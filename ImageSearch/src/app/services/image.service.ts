import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class ImageService {

  constructor(private http: Http) { }

  getImages() {
    return this.http.get("data/images.json")
      .map(data => data.json());
  }
}
