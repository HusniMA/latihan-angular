import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Pages/home/home.component';
import { DetailComponent } from './Pages/detail/detail.component';
import { Angular2UsefulSwiperModule } from 'angular2-useful-swiper';
import { ProductComponent } from './Pages/product/product.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {LottieAnimationViewModule} from 'ng-lottie';

import {TabsComponent} from './Components/Tabs/tabs.component';
import {TabComponent} from './Components/Tabs/tab.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DetailComponent,
    ProductComponent,
    TabsComponent,
    TabComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    Angular2UsefulSwiperModule,
    FontAwesomeModule,
    LottieAnimationViewModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
