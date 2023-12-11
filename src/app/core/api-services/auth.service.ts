import {BehaviorSubject, delay, Observable, of, tap} from "rxjs";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated = new BehaviorSubject<boolean>(false);

  constructor() {
    this.checkInitialAuthState();
  }

  private checkInitialAuthState() {
    const authState = localStorage.getItem('isAuthenticated');
    this.isAuthenticated.next(!!authState);
  }

  login(): Observable<boolean> {
    // Фейковый асинхронный запрос
    return of(true).pipe(
      delay(1000),
      tap(() => {
        console.log('Setting isAuthenticated to true');
        localStorage.setItem('isAuthenticated', 'true');
        this.isAuthenticated.next(true);
      })
    );
  }

  logout(): void {
    localStorage.removeItem('isAuthenticated');
    this.isAuthenticated.next(false);
  }

  getAuthState(): Observable<boolean> {
    return this.isAuthenticated.asObservable();
  }
}
