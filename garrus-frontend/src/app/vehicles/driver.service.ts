import { Injectable } from '@angular/core';
import { Driver } from './driver';
import { Observable, Subject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { restBaseUrl } from 'environments/environment';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
};

@Injectable()
export class DriverService {

  private driverURL = restBaseUrl + 'private/driver/';


  constructor(
    private http: HttpClient) { }

  getDrivers(): Observable<Driver[]> {
    const url = `${this.driverURL}listAll`;
    return this.http.get<Driver[]>(url);
    //    this.messageService.add('DriverService: fetched Drivers {}');
  }

  delete(driver: Driver): Observable<Driver[]> {
    const url = `${this.driverURL}${driver.rut}`;
    return this.http.delete<Driver[]>(url);
    //    this.messageService.add('DriverService: fetched Drivers {}');
  }

  getAvaliable(start: string, end: string): Observable<Driver[]> {
    const url = `${this.driverURL}listAvaliable?start=${start}&end=${end}`;
    return this.http.get<Driver[]>(url);
    //    this.messageService.add('DriverService: fetched Drivers {}');
  }

  getDriver(rut: string): Observable<Driver> {
    const url = `${this.driverURL}detail/${rut}`;
    return this.http.get<Driver>(url);
    //  this.messageService.add(`DriverService: fetched vechicle plate=${plate}`);
  }

  push(driver: Driver): void {
    const url = `${this.driverURL}`;
    this.http.post<Driver>(url, driver, httpOptions).subscribe(r => { });
  }
}
