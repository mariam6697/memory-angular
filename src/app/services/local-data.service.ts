import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalDataService {
  public writeData = (key: string, value: any): void => {
    if (key && value) {
      const data: string = JSON.stringify(value);
      localStorage.setItem(key, data);
    }
  };

  public readData = (key: string): any => {
    const data: any = localStorage.getItem(key);
    const value: any = JSON.parse(data);
    return value;
  };

  public deleteData = (key: string): void => {
    localStorage.removeItem(key);
  };
}
