import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../interfaces/user';
import { environment } from 'src/environments/environment';



@Injectable({
  providedIn: 'root'
})

export class UserService {
  private myappUrl: string;
  private myApiUrl: string;
  
  
  constructor(private http: HttpClient) { 
    this.myappUrl = environment.endpoint;

    this.myApiUrl = 'api/usuarios/'
  }

  getListUser(): Observable<User[]> {
    return this.http.get<User[]>(this.myappUrl + this.myApiUrl );
  }

  getUserById(id: number): Observable<User> {
    const url = `${this.myappUrl}${this.myApiUrl}/${id}`;
    return this.http.get<User>(url);
  }

  deleteUser(id: number): Observable<void> {
    return this.http.delete<void>(this.myappUrl + this.myApiUrl + id );

  }

  saveUser(user: User): Observable<void>{
    return this.http.post<void>(this.myappUrl + this.myApiUrl, user);
  }
  
  getUser(id: number): Observable<User>{
    return this.http.get<User>(this.myappUrl + this.myApiUrl + id);
  }

  updateUser(id: number, user: User):Observable<void> {
    return this.http.put<void>(this.myappUrl + this.myApiUrl + id, user);
  }
}
