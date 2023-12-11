import { Component } from '@angular/core';
import {AuthService} from "../../core/api-services/auth.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone: true,
  imports: [],
})
export class LoginComponent {
  constructor(private authService: AuthService, private router: Router) {}


  login(event: Event): void {
    event.preventDefault(); // Предотвращение стандартного поведения формы
    this.authService.login().subscribe(isAuthenticated => {
      console.log('Login successful:', isAuthenticated);
      if (isAuthenticated) {
        this.router.navigate(['/']);
      }
    });
  }

}
