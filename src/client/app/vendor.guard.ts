import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

import { AuthService } from './shared/auth.service';


@Injectable({
  providedIn: 'root'
})
export class VendorGuard implements CanActivate {
  constructor(private auth: AuthService, private router: Router){

  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      if (this.auth.isLoggedIn() && localStorage.vendor == "true") {
        return true;
      } else {
        this.router.navigate(['/products'])
        return false

      }
  }
}
