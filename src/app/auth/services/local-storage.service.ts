import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  onstructor() {}
  
  save(key: string, value: any): void {
    localStorage.setItem(key, value);
  }

  get(key: string): any {
    return localStorage.getItem(key);
  }

  // Guarda un objeto en el Local Storage
  saveObjet(key: string, value: any): void {
    localStorage.setItem(key, JSON.stringify(value));
  }

  // Recupera un objeto del Local Storage
  getObjet(key: string): any {
    return JSON.parse(localStorage.getItem(key)!);
  }

  // Elimina un objeto del Local Storage
  delete(key: string): void {
    localStorage.removeItem(key);
  }
}
