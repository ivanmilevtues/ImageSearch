import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class ImageService {

  constructor(private http: Http) { }

  getImages() {
    return this.http.get("https://pixabay.com/api/?key=9219970-0752baa0120e32453e1209a29&q=yellow+flowers&image_type=photo&pretty=true")
    .map(data => data.json());
  }
}
