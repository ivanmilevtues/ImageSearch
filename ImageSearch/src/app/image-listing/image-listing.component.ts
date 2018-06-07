import { Component, OnInit } from '@angular/core';
import { ImageService } from './../services/image.service';

@Component({
  selector: 'app-image-listing',
  templateUrl: './image-listing.component.html',
  styleUrls: ['./image-listing.component.css']
})
export class ImageListingComponent implements OnInit {

  data: Array<any> = [];

  constructor(private imageService: ImageService) { }

  ngOnInit() {
   this.imageService.getImages().subscribe(
     data => {
       this.data = data;
       console.log(data)
     }
   )
  }

}
