import { AuthInterceptorService } from './../auth-interceptor.service';
/* "Barrel" of Http Interceptors */
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LogoutInterceptorService } from '../logout-interceptor.service';


/** Http interceptor providers in outside-in order */
export const httpInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: LogoutInterceptorService, multi: true },
];