import { Component } from '@angular/core';
import {Router, RouterLink} from "@angular/router";
import {AuthService} from "../../core/api-services/auth.service";

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css'
})
export class NavigationComponent {
  isAuthenticated: boolean | undefined;

  constructor(private authService: AuthService, private router: Router) {
    this.authService.getAuthState().subscribe((status: boolean) => {
      this.isAuthenticated = status;
    });
  }


  toggleAuth() {
    if (this.isAuthenticated) {
      // Пользователь авторизован, выполняем выход
      this.authService.logout();
    } else {
      // Пользователь не авторизован, перенаправляем на страницу авторизации
      this.router.navigate(['/login']).then(() => {
        // Вызываем метод login, если необходимо выполнить дополнительные действия при авторизации
        this.authService.login();
      });
    }
  }
}
