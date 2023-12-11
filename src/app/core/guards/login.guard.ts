import {Injectable} from "@angular/core";
import {AuthService} from "../api-services/auth.service";
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";

@Injectable({ providedIn: 'root' })
export class LoginGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    return this.authService.getAuthState().pipe(
      map(isAuthenticated => {
        if (isAuthenticated) {
          this.router.navigate(['/']); // Перенаправление на главную страницу
          return false;
        }
        return true;
      })
    );
  }
}
