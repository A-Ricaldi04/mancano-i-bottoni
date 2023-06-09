import { Injectable } from '@angular/core';
import{HttpClient,HttpParams}from '@angular/common/http';
import{ServerData} from '../../types/Employee';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  constructor(private http:HttpClient) { }

  getData(url:string):Observable<ServerData> {
    return this.http.get<ServerData>(url);
  }

}
