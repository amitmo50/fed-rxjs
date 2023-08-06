import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class UserService {
    private apiUrl = 'https://random-data-api.com/api/v2/users?size=20';

    constructor(private http: HttpClient) {}

    public getUsers(): Observable<any[]> {
        return this.http.get<any[]>(this.apiUrl);
    }
}
