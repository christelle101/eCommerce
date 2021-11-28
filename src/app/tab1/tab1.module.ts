import { IonicModule } from '@ionic/angular';
import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { Tab1PageRoutingModule } from './tab1-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab1PageRoutingModule
  ],
  declarations: [Tab1Page]
})
export class Tab1PageModule {}

@Component({
  selector: 'slides-example',
  template: `
    <ion-content>
      <ion-slides pager="true" [options]="slideOpts">
        <ion-slide>
          <h1>Slide 1</h1>
        </ion-slide>
        <ion-slide>
          <h1>Slide 2</h1>
        </ion-slide>
        <ion-slide>
          <h1>Slide 3</h1>
        </ion-slide>
      </ion-slides>
    </ion-content>
  `
})
export class SlideExample {
  // Optional parameters to pass to the swiper instance.
  // See http://idangero.us/swiper/api/ for valid options.
  slideOpts = {
    initialSlide: 1,
    speed: 400
  };
  constructor() {}
}
