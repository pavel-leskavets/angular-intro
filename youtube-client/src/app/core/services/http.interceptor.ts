import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {fromEvent, Observable, timer} from 'rxjs';
import {debounceTime, last, share, switchMap, takeLast} from 'rxjs/operators';
import {environment} from '../../../environments/environment';

@Injectable()
export class HttpResponseInterceptor implements HttpInterceptor {

  constructor() {
  }

  public intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(req.clone({
      url: `${environment.apiUrl}${req.url}`,
    }));
  }
}
