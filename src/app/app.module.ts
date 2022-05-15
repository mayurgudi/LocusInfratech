import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { FormComponent } from './form/form.component';
import { GalleryComponent } from './gallery/gallery.component';
import { SlideshowComponent } from './home-components/slideshow/slideshow.component';
import { PreviewComponent } from './home-components/preview/preview.component';
import { PointerComponent } from './home-components/pointer/pointer.component';
import { ReviewComponent } from './home-components/review/review.component';
import { AboutComponent } from './about/about.component';
import { InteriorComponent } from './interior/interior.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    FormComponent,
    GalleryComponent,
    SlideshowComponent,
    PreviewComponent,
    PointerComponent,
    ReviewComponent,
    AboutComponent,
    InteriorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
