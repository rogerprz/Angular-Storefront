import { Injectable } from '@angular/core';
import { Router } from '@angular/router'

@Injectable()
export class AuthService {

  storageKey: string = 'session-token'
  id: string = 'id'
  constructor(private router: Router) { }

  setToken(token: string) {
    localStorage.setItem(this.storageKey, token);
  }
  setID(id: string){
    localStorage.setItem(this.id, id)
  }

  getToken() {
    return localStorage.getItem(this.storageKey);
  }

  isLoggedIn() {
    return this.getToken() !== null;
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['/login'])
  }
}
