import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.development';
import { Observable } from 'rxjs';
import { Naves } from './naves';

@Injectable({
 providedIn: 'root'
})
export class NavesService {
private apiUrl: string = environment.baseUrl + 'naves';
constructor(private http: HttpClient) { }
getNaves(): Observable<Naves[]> {
    return this.http.get<Naves[]>(this.apiUrl);
  }

}
