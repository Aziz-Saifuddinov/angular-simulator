import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {

  setValue<T>(key: string, value: T): void {
    const data = typeof value === 'string'
      ? value
      : JSON.stringify(value);

    localStorage.setItem(key, data);
  }

getValue<T>(key: string): T | null {
  const storedValue: string | null = localStorage.getItem(key);
  return storedValue ? (JSON.parse(storedValue) as T) : null;
}

  removeValue(key: string): void {
    localStorage.removeItem(key);
  }

  clear(): void {
    localStorage.clear();
  }

}