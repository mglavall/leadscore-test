import { Injectable } from "@angular/core";
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from "@angular/common/http";
import { IdentityService } from "../services/identity.service";
import { Observable } from "rxjs/internal/Observable";
@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(public identity: IdentityService) {}
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const excluded = "/login";

    // Exclude interceptor for login request:
    if (request.url.search(excluded) === -1) {
      request = request.clone({
        setHeaders: {
          authToken: `${this.identity.getAuthToken()}`
        }
      });
    }

    return next.handle(request);
  }
}
