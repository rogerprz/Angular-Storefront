import { Injectable } from '@angular/core';
import { Router } from '@angular/router'

@Injectable()
export class AuthService {

  storageKey: string = 'session-token'
  id: string = 'id'
  vendor: string = 'vendor'
  constructor(private router: Router) { }

  setToken(token: string) {
    localStorage.setItem(this.storageKey, token);
  }
  setID(id: string){
    localStorage.setItem(this.id, id)
  }
  setVendor(vendor: string){
    localStorage.setItem(this.vendor, vendor)
  }

  getToken() {
    return localStorage.getItem(this.storageKey);
  }

  isLoggedIn() {
    return this.getToken() !== null;
  }
  isUser() {
    const validUser =localStorage.getItem(this.vendor) == "false"
    return validUser
  }
  isVendor(){
    const validVendor =localStorage.getItem(this.vendor) == "true"
    return validVendor
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['/login'])
  }
}
