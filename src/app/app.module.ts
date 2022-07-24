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
import { MyTracksComponent } from './my-tracks/my-tracks.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { httpInterceptorProviders } from './http-inteceptors/index';
@NgModule({
  declarations: [
    AppComponent,
    SearchTrackComponent,
    TrackInfoComponent,
    AuthorizeComponent,
    HeaderComponent,
    TelegramLoginWidgetComponent,
    MyTracksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MarkdownModule.forRoot(),
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
    
  ],
  providers: [HttpClientModule, TelegramLoginService, httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
