import { Component, OnInit, Input } from '@angular/core';
import { Image } from '../image';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {

  @Input('image') image: Image;

  constructor() { }

  ngOnInit() {
    this.splitTags();
    this.upperFirstLetter();
  }

  private splitTags() {
      let tags = this.image.tags;
      this.image.tagsArray = tags.split(" ").map(img => img.split(",")[0]);
  }

  private upperFirstLetter() {
    let imageType = this.image.type;
    this.image.type = imageType.charAt(0).toUpperCase() + imageType.slice(1);
  }

}
