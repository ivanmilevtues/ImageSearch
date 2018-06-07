import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ImageListingComponent } from './image-listing/image-listing.component';
import { HttpModule } from '@angular/http';


import { ImageService } from './services/image.service';

@NgModule({
  declarations: [
    AppComponent,
    ImageListingComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [ImageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
