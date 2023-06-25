import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppUrlsService } from './app-urls.service';


@Injectable()
export class AuthInterceptorInterceptor implements HttpInterceptor {

  constructor(private service: AppUrlsService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    let authReq = request;
    const token = this.service.getToken();

    console.log("Inside Interceptor" + token);

    if (token != null) {
      authReq = authReq.clone({ setHeaders: { Authorization: 'Bearer '+token } }
      );
    }
    return next.handle(authReq);
  }
}


