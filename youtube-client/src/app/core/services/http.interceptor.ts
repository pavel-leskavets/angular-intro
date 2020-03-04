import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment.prod';

@Injectable()
export class HttpResponseInterceptor implements HttpInterceptor {

  constructor() {
  }

  public intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(req.clone({
      url: `${environment.apiUrl}${req.url}`,
      params: req.params.append('key', environment.apiKey)
    }));
  }
}
