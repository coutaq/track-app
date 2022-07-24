import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable()
export class AuthInterceptorService implements HttpInterceptor {

    intercept(req: HttpRequest<any>,
              next: HttpHandler): Observable<HttpEvent<any>> {

        const user:User = {...JSON.parse(localStorage.getItem("user") as string)};

        if (user) {
            const cloned = req.clone({
                headers: req.headers.set("Authorization",
                    "Bearer " + user.token)
            });

            return next.handle(cloned);
        }
        else {
            return next.handle(req);
        }
    }
}
