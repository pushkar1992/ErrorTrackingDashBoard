import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private httpClient: HttpClient) {

  }

  getStats(): Observable<any> {
   
    return this.httpClient.post(environment.api + 'dashboard/worklist',{});
  }

  getTask(): Observable<any> {
   
    return this.httpClient.post(environment.api + 'dashboard/worklist',{});
  }
}