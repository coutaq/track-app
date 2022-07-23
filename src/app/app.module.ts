// import { HttpClient } from '@angular/common/http';
import { NgModule,NgZone} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchTrackComponent } from './search-track/search-track.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import {MarkdownModule, MarkdownService} from 'ngx-markdown';
import { TrackInfoComponent } from './track-info/track-info.component';
import { AuthorizeComponent } from './authorize/authorize.component';
import { HeaderComponent } from './header/header.component';
import { TelegramLoginWidgetComponent } from './telegram-login-widget/telegram-login-widget.component';
// import {AngularTelegramLoginWidgetModule} from 'angular'
import { TelegramLoginService } from './telegram-login.service';
@NgModule({
  declarations: [
    AppComponent,
    SearchTrackComponent,
    TrackInfoComponent,
    AuthorizeComponent,
    HeaderComponent,
    TelegramLoginWidgetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MarkdownModule.forRoot(),
    
  ],
  providers: [HttpClientModule, TelegramLoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
