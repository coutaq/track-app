import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';
import { TelegramLoginService } from './telegram-login.service';

@Injectable()
export class AuthInterceptorService implements HttpInterceptor {
  private telegramLoginService:TelegramLoginService
  constructor(telegramLoginService:TelegramLoginService){
    this.telegramLoginService = telegramLoginService
  }
    intercept(req: HttpRequest<any>,
              next: HttpHandler): Observable<HttpEvent<any>> {

        const user = this.telegramLoginService.getUser()

        if (user) {
            const cloned = req.clone({
                headers: req.headers.set("Authorization",
                    "Bearer " + user.auth_token)
            });

            return next.handle(cloned);
        }
        else {
            return next.handle(req);
        }
    }
}
