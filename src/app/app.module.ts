import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { QuotesBoxComponent } from './components/quotes-box/quotes-box.component';
import { TwitterButtonComponent } from './components/twitter-button/twitter-button.component';
import { ApiService } from './services/api.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    QuotesBoxComponent,
    TwitterButtonComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
