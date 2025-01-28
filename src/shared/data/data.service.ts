import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private jsonUrl: string  = 'PeriodicTableJSON.json';
  private http: HttpClient = inject(HttpClient);

  constructor() { }

  getData(): Observable<any> {
    return this.http.get(this.jsonUrl);
  }
}
