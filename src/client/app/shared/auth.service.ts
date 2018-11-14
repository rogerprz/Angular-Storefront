import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  setToken(token: string){
    localStorage.setItem(this.storageKey,token);

  }
  getToken(token:string){
    return localStorage.getItem(this.storageKey);
  }

  isLoggedIn(){
    return this.getToken() !== null;
  }
  logout(){
    localStorage.removeItem(this.storageKey);
    this.router.navigate(['/login'])
  }
}
