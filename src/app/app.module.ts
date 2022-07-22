// import { HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchTrackComponent } from './search-track/search-track.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import {MarkdownModule, MarkdownService} from 'ngx-markdown';
import { TrackInfoComponent } from './track-info/track-info.component';
import { AuthorizeComponent } from './authorize/authorize.component';
// import {AngularTelegramLoginWidgetModule} from 'angular'
@NgModule({
  declarations: [
    AppComponent,
    SearchTrackComponent,
    TrackInfoComponent,
    AuthorizeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MarkdownModule.forRoot(),
    
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
