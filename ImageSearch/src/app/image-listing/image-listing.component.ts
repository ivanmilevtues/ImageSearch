import { Component, OnInit } from '@angular/core';
import { ImageService } from './../services/image.service';
import { Image } from '../image';

@Component({
  selector: 'app-image-listing',
  templateUrl: './image-listing.component.html',
  styleUrls: ['./image-listing.component.css']
})
export class ImageListingComponent implements OnInit {

  images: Array<Image> = [];

  constructor(private imageService: ImageService) { }

  ngOnInit() {
    this.imageService.getImages().subscribe(
      data => {
        this.images = data;
      }
    );
  }


}
