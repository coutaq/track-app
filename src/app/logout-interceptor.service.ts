import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';
import { User } from './user';
import { TelegramLoginService } from './telegram-login.service';

@Injectable()
export class LogoutInterceptorService implements HttpInterceptor {
  private telegramLoginService:TelegramLoginService
  constructor(telegramLoginService:TelegramLoginService){
    this.telegramLoginService = telegramLoginService
  }
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError((requestError: HttpErrorResponse) => {
        console.log("INTERCEPTED RESPONSE")
        if (requestError && requestError.status === 401) {
          this.telegramLoginService.clear();
          }
          return next.handle(request);
      })
    );
  }
}

