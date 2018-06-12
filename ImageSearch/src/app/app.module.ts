import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ImageListingComponent } from './image-listing/image-listing.component';
import { HttpModule } from '@angular/http';


import { ImageService } from './services/image.service';
import { ImageComponent } from './image/image.component';
import { FilterByPipe } from './pipes/filter-by.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ImageListingComponent,
    ImageComponent,
    FilterByPipe
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [ImageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
